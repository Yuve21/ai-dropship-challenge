// Thin wrapper around Higgsfield's REST API, for generating the small number of AI b-roll clips this
// challenge actually sanctions (see docs/AUTOMATION.md and creative/NO-SAMPLE-PLAN.md section 8).
//
// Verified live 2026-08-13 against docs.higgsfield.ai and the official SDK repo
// (github.com/higgsfield-ai/higgsfield-js):
//   - Base:    https://platform.higgsfield.ai
//   - Auth:    Authorization: Key <KEY_ID>:<KEY_SECRET>   (a TWO-part credential, not a bearer token)
//   - Async:   POST returns { status: "queued", request_id, status_url, cancel_url }, then you poll
//              /requests/{request_id}/status until it finishes.
//   - Video:   /v1/image2video/dop takes { model, prompt, input_images: [{ type, image_url }] }
//   - Result:  the completed job carries the output URL at jobs[0].results.raw.url
//
// NOT verified, and flagged rather than guessed:
//   - The exact raw-REST body envelope. The official SDK nests generation params under `input`, and
//     that is what this file sends. The one raw example in their docs posts the params at the top
//     level instead. These may both be accepted, or one may not be. `--dry-run` prints the exact
//     request so you can eyeball it, and the first real call is the test. If it 4xxs on shape, try
//     BODY_ENVELOPE = "flat" below before assuming the key is wrong.
//   - Text-to-video. Their SDK README documents text-to-image and image-to-video only. This file
//     therefore implements image-to-video and does NOT invent a text-to-video path.
//
// Zero npm installs, matching the rest of automation/: raw fetch, no @higgsfield/client dependency.

const BASE = "https://platform.higgsfield.ai";
const IMAGE2VIDEO_PATH = "/v1/image2video/dop";

// "input" matches the official SDK. Switch to "flat" if the API rejects the envelope shape.
const BODY_ENVELOPE = "input";

// The subjects this challenge will not generate, ever. These are not stylistic preferences, they are
// standing decisions recorded in the ledger and the creative plan:
//   - cat / animal: we have no cat (2026-08-13) and generating one to stand in for a pet we do not
//     have is the exact fabrication creative/NO-SAMPLE-PLAN.md bans.
//   - the product: no sample was ordered (2026-08-12), so a generated fountain could drift from what
//     actually ships, and we would have no reference to notice.
//   - people / faces / hands: we do not put a synthetic person on an account that implies a real one.
const BANNED_SUBJECT_PATTERNS = [
  { re: /\b(cat|cats|kitten|kittens|feline|paw|paws|tail|whisker)\b/i, why: "a cat or animal" },
  { re: /\b(dog|dogs|puppy|puppies|pet|pets)\b/i, why: "a pet" },
  { re: /\b(fountain|dispenser|water bowl|product|package|parcel|box of)\b/i, why: "the product" },
  { re: /\b(person|people|man|woman|girl|boy|hand|hands|face|model|influencer|creator)\b/i, why: "a person" },
];

/**
 * Checks a prompt against the standing generation bans. Exported so the CLI can refuse BEFORE
 * spending a credit, and so this is testable without an API key.
 * @param {string} prompt
 * @returns {{ok: true} | {ok: false, why: string, matched: string}}
 */
export function checkPromptAllowed(prompt) {
  for (const { re, why } of BANNED_SUBJECT_PATTERNS) {
    const m = prompt.match(re);
    if (m) return { ok: false, why, matched: m[0] };
  }
  return { ok: true };
}

/**
 * Generate a video from a source image and a motion prompt.
 *
 * @param {object} opts
 * @param {string} opts.keyId - HF_API_KEY from automation/.env
 * @param {string} opts.keySecret - HF_API_SECRET from automation/.env
 * @param {string} opts.prompt - the motion/camera prompt. Checked against the bans above.
 * @param {string} opts.imageUrl - publicly reachable source image URL
 * @param {string} [opts.model] - defaults to the turbo model the SDK example uses
 * @param {boolean} [opts.dryRun] - build and return the exact request, send nothing, spend nothing
 * @param {number} [opts.pollIntervalMs] - SDK default is 2000
 * @param {number} [opts.maxPollMs] - SDK default is 300000 (5 min)
 * @param {(msg: string) => void} [opts.log]
 */
export async function generateVideoFromImage(opts) {
  const {
    keyId,
    keySecret,
    prompt,
    imageUrl,
    model = "dop-turbo",
    dryRun = false,
    pollIntervalMs = 2000,
    maxPollMs = 300000,
    log = () => {},
  } = opts;

  // The ban check runs FIRST, before auth, before dry-run, before anything. A refusal must not
  // depend on having a key, or the gate would only exist once money is on the line.
  const allowed = checkPromptAllowed(prompt || "");
  if (!allowed.ok) {
    throw new Error(
      `Refusing to generate: the prompt mentions ${allowed.why} ("${allowed.matched}").\n` +
        "This challenge does not generate cats, pets, people or the product. See " +
        "creative/NO-SAMPLE-PLAN.md and the 2026-08-12/13 ledger decisions. Sanctioned use is " +
        "abstract b-roll only: water, light, texture, motion. If you genuinely need this subject, " +
        "that is a founder decision to change the standing ban, not a flag to pass."
    );
  }

  const params = { model, prompt, input_images: [{ type: "image_url", image_url: imageUrl }] };
  const body = BODY_ENVELOPE === "input" ? { input: params } : params;
  const url = `${BASE}${IMAGE2VIDEO_PATH}`;

  if (dryRun) {
    return {
      dryRun: true,
      wouldSend: {
        method: "POST",
        url,
        headers: { Authorization: `Key ${keyId ? "<KEY_ID>" : "(missing)"}:<KEY_SECRET>` },
        body,
      },
      note:
        "Nothing sent, no credits spent. Higgsfield is PAID: cheapest tier ~$15/mo, top-ups ~$5 per " +
        "100 credits, basic videos 15-25 credits each (checked 2026-08-13, their pricing has changed " +
        "repeatedly, verify before buying). Every credit is founder money against the $100 cap.",
    };
  }

  if (!keyId || !keySecret) {
    throw new Error(
      "Missing HF_API_KEY and/or HF_API_SECRET in automation/.env. Higgsfield uses a TWO-part " +
        "credential sent as `Authorization: Key <KEY_ID>:<KEY_SECRET>`, not a single bearer token. " +
        "Generate both in the Higgsfield platform dashboard. Use --dry-run to inspect the request " +
        "without a key or a paid plan."
    );
  }

  const headers = {
    Authorization: `Key ${keyId}:${keySecret}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
  const submitted = await readJson(res);

  if (!res.ok) {
    const hint =
      res.status === 401 || res.status === 403
        ? " Check that HF_API_KEY and HF_API_SECRET are the two halves of one credential pair."
        : res.status === 402
          ? " This looks like a billing or out-of-credits error. Higgsfield is a paid product."
          : res.status === 422 || res.status === 400
            ? ` Possible request-shape mismatch. This file sends the SDK's "${BODY_ENVELOPE}" envelope; try flipping BODY_ENVELOPE in automation/lib/higgsfield.js.`
            : "";
    throw new Error(`Higgsfield returned ${res.status}: ${JSON.stringify(submitted)}.${hint}`);
  }

  const requestId = submitted.request_id || submitted.id;
  const statusUrl = submitted.status_url || `${BASE}/requests/${requestId}/status`;
  log(`submitted, request_id=${requestId}, polling every ${pollIntervalMs}ms`);

  const started = Date.now();
  while (Date.now() - started < maxPollMs) {
    await new Promise((r) => setTimeout(r, pollIntervalMs));

    const pollRes = await fetch(statusUrl, { headers });
    const job = await readJson(pollRes);
    if (!pollRes.ok) throw new Error(`Poll failed ${pollRes.status}: ${JSON.stringify(job)}`);

    const status = String(job.status || "").toLowerCase();
    log(`status=${status || "(none reported)"}`);

    if (["completed", "succeeded", "success", "done"].includes(status)) {
      return { requestId, status, videoUrl: extractVideoUrl(job), raw: job };
    }
    if (["failed", "error", "cancelled", "canceled"].includes(status)) {
      throw new Error(`Generation ${status}: ${JSON.stringify(job)}`);
    }
  }

  throw new Error(
    `Timed out after ${maxPollMs}ms. The job may still finish: poll ${statusUrl} by hand. ` +
      "Credits are typically consumed on submission, so do not blindly resubmit."
  );
}

// The SDK reads the output at jobs[0].results.raw.url, and their raw API example shows a
// video.url shape. Tries both rather than assuming, and returns null instead of throwing so the
// caller still gets the raw payload to inspect.
function extractVideoUrl(job) {
  return (
    job?.jobs?.[0]?.results?.raw?.url ||
    job?.results?.raw?.url ||
    job?.video?.url ||
    job?.output?.url ||
    null
  );
}

async function readJson(res) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}
