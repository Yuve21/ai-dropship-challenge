// Thin wrapper around ElevenLabs' text-to-speech API, for narration over the text-card videos in
// creative/NO-SAMPLE-PLAN.md. Writes an MP3 to disk; it does NOT assemble video.
//
// Verified live 2026-08-13 against elevenlabs.io/docs:
//   - POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}
//   - Auth header: xi-api-key: <key>            (NOT Authorization/Bearer)
//   - Body: { text } required; model_id optional, default "eleven_multilingual_v2"
//   - Response body is the audio file itself, not JSON. output_format is a QUERY param.
//
// THE LICENSING TRAP, and it is the whole reason this file has a gate:
// ElevenLabs' FREE tier is personal, NON-COMMERCIAL use and requires attribution to ElevenLabs.
// Everything this challenge makes is commercial marketing for a store, so **free-tier audio may not
// be used here at all.** Commercial rights start on their paid plans. Checked 2026-08-13; their
// plan terms change, so re-verify before relying on it.
//
// That is not a detail we can quietly ignore: docs/PLAYBOOK.md "Non-negotiable (account survival)"
// requires platform-legitimate use, and shipping ads built on non-commercial-licensed audio is
// exactly the kind of thing that is fine right up until it is not.
//
// THE FREE ALTERNATIVE, which is usually the better call for our actual use:
// TikTok's own built-in text-to-speech is free, native to the platform, familiar to viewers, needs
// no API key, no subscription and no ffmpeg, and is applied inside the TikTok or CapCut editor.
// For short text-card videos it does the same job at $0. Use this connector when voice QUALITY is
// the point, not as the default.
//
// Zero npm installs, matching the rest of automation/.

import { writeFileSync } from "node:fs";

const BASE = "https://api.elevenlabs.io/v1/text-to-speech";

// ElevenLabs' long-standing default premade voice ("Rachel"). Any voice id from the dashboard works.
const DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM";
const DEFAULT_MODEL = "eleven_multilingual_v2";

// Free tier caps a single request at 2,500 characters; paid at 5,000. Our scripts are ~40 words, so
// this exists to catch a pasted-wrong-thing mistake, not to constrain real use.
const MAX_CHARS = 2500;

/**
 * Generate narration audio and write it to disk.
 *
 * @param {object} opts
 * @param {string} opts.apiKey - ELEVENLABS_KEY from automation/.env
 * @param {string} opts.text - the line to speak
 * @param {string} opts.outPath - where to write the .mp3
 * @param {string} [opts.voiceId]
 * @param {string} [opts.modelId]
 * @param {boolean} [opts.commercialConfirmed] - the caller asserting a PAID plan is in place.
 *   Required for a real call. This is a licence gate, not a technical one.
 * @param {boolean} [opts.dryRun]
 */
export async function generateNarration(opts) {
  const {
    apiKey,
    text,
    outPath,
    voiceId = DEFAULT_VOICE_ID,
    modelId = DEFAULT_MODEL,
    commercialConfirmed = false,
    dryRun = false,
  } = opts;

  if (!text || !text.trim()) throw new Error("Nothing to speak: --text was empty.");

  if (text.length > MAX_CHARS) {
    throw new Error(
      `Text is ${text.length} characters, over the ${MAX_CHARS} single-request cap. Our scripts are ` +
        "about 40 words, so this usually means the wrong thing got pasted in."
    );
  }

  const url = `${BASE}/${voiceId}?output_format=mp3_44100_128`;
  const body = { text, model_id: modelId };

  if (dryRun) {
    return {
      dryRun: true,
      wouldSend: { method: "POST", url, headers: { "xi-api-key": "<ELEVENLABS_KEY>" }, body },
      outPath,
      note:
        "Nothing sent. REMINDER: ElevenLabs' free tier is personal, non-commercial and requires " +
        "attribution. This store's content is commercial, so a real run needs a PAID plan. " +
        "TikTok's built-in TTS is free, native and needs no key, and is the better default for " +
        "short text-card videos.",
    };
  }

  // The licence gate runs before the key check, deliberately: having a key proves nothing about
  // which tier it belongs to, and the failure mode here is legal rather than technical.
  if (!commercialConfirmed) {
    throw new Error(
      "Refusing to generate: commercial rights not confirmed.\n" +
        "ElevenLabs' FREE tier is personal, non-commercial use and requires attribution to " +
        "ElevenLabs. Everything this challenge produces is commercial marketing for a store, so " +
        "free-tier audio may not be used in it.\n" +
        "If you are on a PAID plan, pass --commercial-confirmed to assert that. If you are not, " +
        "use TikTok's built-in text-to-speech instead: free, native, no key, no subscription, and " +
        "for a short text-card video it does the same job."
    );
  }

  if (!apiKey) {
    throw new Error(
      "No ELEVENLABS_KEY in automation/.env. Generate one in the ElevenLabs dashboard (Profile, " +
        "then API Keys). Note the auth header is `xi-api-key`, not a bearer token. Use --dry-run " +
        "to inspect the request without a key."
    );
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "xi-api-key": apiKey, "Content-Type": "application/json", Accept: "audio/mpeg" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    // Errors come back as JSON even though success returns audio bytes.
    let detail;
    try {
      detail = JSON.stringify(await res.json());
    } catch {
      detail = await res.text();
    }
    const hint =
      res.status === 401
        ? " Check ELEVENLABS_KEY, and that it is sent as `xi-api-key`."
        : res.status === 422
          ? " Usually an unknown voice_id or model_id."
          : res.status === 429
            ? " Rate limited, or the monthly character quota is exhausted."
            : "";
    throw new Error(`ElevenLabs returned ${res.status}: ${detail}.${hint}`);
  }

  const audio = Buffer.from(await res.arrayBuffer());
  if (audio.length === 0) throw new Error("ElevenLabs returned an empty body, no audio written.");

  writeFileSync(outPath, audio);
  return { outPath, bytes: audio.length, voiceId, modelId, characters: text.length };
}
