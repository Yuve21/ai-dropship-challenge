// Thin wrapper around upload-post.com's REST API, the approved TikTok Content Posting API partner
// this challenge uses (see docs/AUTOMATION.md and docs/SETUP-GUIDE.md). Never talks to TikTok
// directly with a session token or login bot - that's the ban vector docs/WARM-UP.md bans outright.
//
// Verified live 2026-08-10 against docs.upload-post.com and upload-post.com/llms-full.txt:
//   - Endpoint: POST https://api.upload-post.com/api/upload, multipart/form-data.
//   - Auth header: Authorization: Apikey <key>
//   - TikTok specifically requires a paid plan (Basic tier, $24/mo minimum as of 2026-08-10) -
//     it is NOT included on the free tier, unlike some other platforms upload-post supports.
//     See the 2026-08-10 correction note in docs/SETUP-GUIDE.md and docs/AUTOMATION.md.
//   - Their docs do not publish a confirmed "check upload status by publish_id" endpoint path, so
//     this file does not guess one. If you need that, check docs.upload-post.com/openapi.json
//     yourself before relying on it.

const UPLOAD_ENDPOINT = "https://api.upload-post.com/api/upload";

/**
 * @param {object} opts
 * @param {string} opts.apiKey - UPLOAD_POST_KEY from .env
 * @param {string} opts.profile - the "user" profile name you created in the upload-post dashboard
 * @param {string} opts.videoPath - local path to the finished video file
 * @param {string} opts.title - caption/title for the post
 * @param {"PUBLIC_TO_EVERYONE"|"MUTUAL_FOLLOW_FRIENDS"|"FOLLOWER_OF_CREATOR"|"SELF_ONLY"} [opts.privacyLevel]
 * @param {boolean} [opts.disableDuet]
 * @param {boolean} [opts.disableStitch]
 * @param {boolean} [opts.disableComment]
 * @param {boolean} [opts.isAigc] - TikTok's AIGC label; content-engine's brief requires this true
 *   for any realistic AI face/voice/scene. Defaults true since this challenge's videos are AI-generated.
 * @param {string} [opts.scheduledDateISO] - ISO-8601, up to 365 days out
 * @param {boolean} [opts.dryRun] - if true, builds the request and logs it but never sends it
 */
export async function postToTikTok(opts) {
  const {
    apiKey,
    profile,
    videoPath,
    title,
    privacyLevel = "PUBLIC_TO_EVERYONE",
    disableDuet = false,
    disableStitch = false,
    disableComment = false,
    isAigc = true,
    scheduledDateISO,
    dryRun = false,
  } = opts;

  if (dryRun) {
    // Deliberately skips the apiKey/profile checks below: the whole point of --dry-run is to
    // build and inspect the request before you have paid for upload-post's Basic plan.
    return {
      dryRun: true,
      wouldPost: {
        videoPath,
        title,
        profile: profile || "(none given - required for a real send)",
        privacyLevel,
        disableDuet,
        disableStitch,
        disableComment,
        isAigc,
        scheduledDateISO,
      },
    };
  }

  if (!apiKey) {
    throw new Error(
      "No UPLOAD_POST_KEY set in automation/.env. Sign up at upload-post.com, generate an API " +
        "key, and note that TikTok specifically needs their paid Basic plan ($24/mo minimum, " +
        "verified 2026-08-10) - the free tier does not include TikTok. Don't pay for it until " +
        "Track A is close to Day 1; see docs/WARM-UP.md."
    );
  }
  if (!profile) {
    throw new Error(
      "No --profile given. Create a profile in the upload-post.com dashboard (User Management), " +
        "connect your TikTok account to it via their OAuth flow, and pass that profile name here."
    );
  }

  const { readFileSync } = await import("node:fs");
  const path = await import("node:path");
  const fileBuffer = readFileSync(videoPath);
  const fileName = path.basename(videoPath);

  const form = new FormData();
  form.append("video", new Blob([fileBuffer]), fileName);
  form.append("title", title);
  form.append("user", profile);
  form.append("platform[]", "tiktok");
  form.append("privacy_level", privacyLevel);
  form.append("disable_duet", String(disableDuet));
  form.append("disable_stitch", String(disableStitch));
  form.append("disable_comment", String(disableComment));
  form.append("is_aigc", String(isAigc));
  if (scheduledDateISO) form.append("scheduled_date", scheduledDateISO);

  const res = await fetch(UPLOAD_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Apikey ${apiKey}` },
    body: form,
  });

  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }

  if (!res.ok) {
    const planHint =
      res.status === 402 || res.status === 403
        ? " This looks like a plan-restriction error - TikTok posting needs upload-post's paid " +
          "Basic tier ($24/mo minimum), not the free tier."
        : "";
    throw new Error(`upload-post.com returned ${res.status}: ${JSON.stringify(body)}.${planHint}`);
  }

  return body;
}
