#!/usr/bin/env node
// The parts of the AI-dropshipping challenge that are legitimately automatable, in one CLI:
//   1. `warmup` - tracks Challenge Warm-Up Protocol v1, Track A, tells you exactly what to do today,
//                 and carries the founder's on/off switch for the gate (`warmup skip` / `warmup enable`).
//   2. `post`   - posts a finished video to TikTok via the approved upload-post.com API, and refuses
//                 to post anything the current warm-up day doesn't allow WHILE the gate is on.
//
// What this deliberately does NOT do: scroll, like, follow, watch, or comment on TikTok on your
// behalf. There is no legitimate API for that, doing it via session-token automation is a ban
// vector under TikTok's ToS, and it's a hard no already written into docs/WARM-UP.md and the
// compliance-guard brief. That part stays a real human, ~20 min/day during warm-up, 5-10 min/day
// after. See docs/WARM-UP.md and the "irreducible boundary" section of docs/NO-STALL.md for the
// full list of what genuinely can't be automated in this challenge and why.

import { appendLedgerLine } from "./lib/ledger.js";
import { loadEnv } from "./lib/loadEnv.js";
import { HOLD_CONDITIONS, TIMELINE, calendarOffset, entryForOffset } from "./lib/protocol.js";
import { loadState, saveState, statePath, todayISO } from "./lib/state.js";
import { postToTikTok } from "./lib/uploadPost.js";

// The steady-state entry (Day 4 onward): what applies when the founder has switched warm-up off.
const STEADY_STATE = TIMELINE[TIMELINE.length - 1];

loadEnv();

const [, , cmd, ...rest] = process.argv;

function flag(name, fallback = undefined) {
  const i = rest.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return rest[i + 1];
}
function boolFlag(name) {
  return rest.includes(`--${name}`);
}

function printHelp() {
  console.log(`
challenge CLI - warm-up tracker + approved TikTok posting

  node cli.js warmup start --handle <@yourhandle> [--date YYYY-MM-DD]
      Record the day Track A Day -7 began. Defaults to today.

  node cli.js warmup today
      Print exactly what today's protocol day allows: the human routine, the
      engagement targets, and how many posts (if any) are authorized. This is
      the daily "read the dashboard" command. Also the default with no args.

  node cli.js warmup hold --hours 48 --reason "action block"
      Freeze posting for N hours. Use this the moment you see an action block,
      a warning, or three consecutive near-zero-view posts, per docs/WARM-UP.md's
      hold conditions. Does not un-freeze the human routine, only posting.

  node cli.js warmup skip
      FOUNDER DECISION ONLY. Turns the warm-up gate off: product content and
      CTA/link posts are allowed immediately, at the steady-state cap of
      ${STEADY_STATE.postsAllowed}/day, no day-type check. Logs a dated line in
      tracker/LEDGER.md recording that warm-up was skipped by founder decision.

  node cli.js warmup enable
      Turns the warm-up gate back on (the default). Logs a dated ledger line too.

  node cli.js post --video <path> --title "<caption>" --type native|product-in-frame|product --profile <upload-post profile name> [--dry-run] [--no-aigc] [--schedule <ISO date>]
      Post through upload-post.com's TikTok API. While the warm-up gate is ON,
      refuses if --type isn't what today's protocol day allows. Always refuses
      if you're over today's post cap or a hold is active. --dry-run builds the
      request and prints it without sending.

State lives in automation/state/warmup-state.json (committed to git, like the ledger - it's
operational state, not a secret). API keys go in automation/.env (gitignored), copy .env.example.
`);
}

function warmupEnabled(state) {
  return state.enabled !== false;
}

function requireStarted(state) {
  if (!warmupEnabled(state)) return;
  if (!state.account.startDate) {
    console.error(
      "Warm-up hasn't been started yet. Run `node cli.js warmup start --handle <@yourhandle>` " +
        "once the TikTok account is actually created (Track A, Day -7)."
    );
    process.exit(1);
  }
}

function currentEntry(state) {
  // Warm-up off: every day is steady state, so nothing gates on the day count.
  if (!warmupEnabled(state)) return { offset: null, entry: STEADY_STATE };
  const offset = calendarOffset(state.account.startDate, todayISO());
  return { offset, entry: entryForOffset(offset) };
}

function activeHold(state) {
  if (!state.holdUntil) return null;
  const until = new Date(state.holdUntil);
  if (until.getTime() > Date.now()) return until;
  return null;
}

function cmdWarmupStart() {
  const handle = flag("handle");
  const date = flag("date", todayISO());
  if (!handle) {
    console.error("Missing --handle. Example: node cli.js warmup start --handle @pawfinds");
    process.exit(1);
  }
  const state = loadState();
  state.account.handle = handle;
  state.account.startDate = date;
  saveState(state);
  console.log(`Recorded ${handle} as Track A, Day -7 = ${date}.`);
  console.log(`State saved to ${statePath()}.\n`);
  cmdWarmupToday();
}

function cmdWarmupToday() {
  const state = loadState();
  requireStarted(state);
  const { offset, entry } = currentEntry(state);

  if (warmupEnabled(state) && offset < 0) {
    console.log(`Start date is ${state.account.startDate}, which is in the future. Nothing to do yet.`);
    return;
  }

  console.log(`Account: ${state.account.handle}`);

  if (!warmupEnabled(state)) {
    console.log("Warm-up gate: OFF (skipped by founder decision, see tracker/LEDGER.md).");
    console.log(
      `Product content and CTA/link posts are allowed now, up to ${entry.postsAllowed}/day. ` +
        "Re-enable with `node cli.js warmup enable`.\n"
    );
  } else {
    console.log(`Started: ${state.account.startDate} (Day -7)`);
    console.log(
      `Today (${todayISO()}) is protocol ${entry.label}${entry.holdsForever && offset > 10 ? " (holding)" : ""}.\n`
    );
  }

  const hold = activeHold(state);
  if (hold) {
    console.log(`>>> POSTING FROZEN until ${hold.toISOString()}. Reason: ${state.holdReason}`);
    console.log("The human routine below still applies; do not post anything new until this clears.\n");
  }

  console.log("Human routine today:");
  if (warmupEnabled(state)) {
    console.log(`  ${entry.humanRoutine}`);
    console.log(`  Engagement: ${entry.engagement}\n`);
  } else {
    console.log("  5-10 min/day of scrolling and genuine engagement, for the life of the account.");
    console.log("  Engagement: unchanged. An account that only publishes still looks like a bot.\n");
  }

  const postedToday =
    state.postsToday.date === todayISO() ? state.postsToday.count : 0;
  const allowed = hold ? 0 : entry.postsAllowed;
  const typeLabel = warmupEnabled(state) ? entry.postType : "any (gate off)";

  console.log(`Posting today: ${postedToday} / ${allowed} used${typeLabel ? ` (type: ${typeLabel})` : ""}`);
  if (warmupEnabled(state) && entry.postNote) console.log(`  ${entry.postNote}`);
  if (allowed === 0 && !hold) console.log("  No posting today. Consume-only day.");
  console.log();
  console.log("Hold conditions (check these before posting, not after):");
  HOLD_CONDITIONS.forEach((c) => console.log(`  - ${c}`));
}

function setWarmupEnabled(enabled) {
  const state = loadState();
  const already = warmupEnabled(state) === enabled;
  state.enabled = enabled;
  saveState(state);

  const line = enabled
    ? "Warm-up gate RE-ENABLED by founder decision. The Challenge Warm-Up Protocol v1 gate " +
      "(docs/WARM-UP.md) applies again: posting is limited to what the current protocol day allows."
    : "Warm-up SKIPPED by founder decision. The Challenge Warm-Up Protocol v1 gate " +
      "(docs/WARM-UP.md) is off: product content and CTA/link posts are allowed immediately, at the " +
      `steady-state cap of ${STEADY_STATE.postsAllowed}/day. Recorded here because the ledger records ` +
      "measured reality, including a deliberate decision to accept the suppression risk.";

  console.log(enabled ? "Warm-up gate: ON." : "Warm-up gate: OFF.");
  if (already) console.log("(It was already in that state; the ledger line is written anyway.)");
  console.log(`State saved to ${statePath()}.`);

  try {
    console.log(`Logged to ${appendLedgerLine(todayISO(), line)}.`);
  } catch (err) {
    console.error(`Could not write the ledger line: ${err.message}`);
    process.exit(1);
  }
}

function cmdWarmupHold() {
  const hours = Number(flag("hours", "48"));
  const reason = flag("reason", "unspecified");
  const state = loadState();
  const until = new Date(Date.now() + hours * 60 * 60 * 1000);
  state.holdUntil = until.toISOString();
  state.holdReason = reason;
  saveState(state);
  console.log(`Posting frozen until ${until.toISOString()}. Reason: ${reason}`);
  console.log("Log this in tracker/LEDGER.md's Warm-up status block too.");
}

async function cmdPost() {
  const state = loadState();
  requireStarted(state);
  const { entry } = currentEntry(state);

  const type = flag("type");
  const video = flag("video");
  const title = flag("title");
  const profile = flag("profile") || process.env.UPLOAD_POST_PROFILE;
  const dryRun = boolFlag("dry-run");
  const isAigc = !boolFlag("no-aigc");
  const schedule = flag("schedule");

  if (!video || !title || !type) {
    console.error("Required: --video <path> --title \"<caption>\" --type native|product-in-frame|product");
    process.exit(1);
  }

  const hold = activeHold(state);
  if (hold) {
    console.error(`Posting is frozen until ${hold.toISOString()} (reason: ${state.holdReason}). Not posting.`);
    process.exit(1);
  }

  if (warmupEnabled(state)) {
    if (!entry || entry.postsAllowed === 0) {
      console.error(
        `Today is ${entry ? entry.label : "before the protocol starts"} - no posting is allowed yet. ` +
          "See docs/WARM-UP.md, Track A."
      );
      process.exit(1);
    }

    if (entry.postType !== type) {
      console.error(
        `Today (${entry.label}) allows "${entry.postType}" posts, not "${type}". Not posting - this ` +
          "gate exists specifically so an automated run can't accidentally jump the warm-up cadence."
      );
      process.exit(1);
    }
  }

  const postedToday = state.postsToday.date === todayISO() ? state.postsToday.count : 0;
  if (postedToday >= entry.postsAllowed) {
    console.error(
      `Already posted ${postedToday}/${entry.postsAllowed} allowed today. Not posting again - the ` +
        "protocol steps the cadence up gradually on purpose, don't catch up with a burst."
    );
    process.exit(1);
  }

  try {
    const result = await postToTikTok({
      apiKey: process.env.UPLOAD_POST_KEY,
      profile,
      videoPath: video,
      title,
      isAigc,
      scheduledDateISO: schedule,
      dryRun,
    });
    console.log(dryRun ? "DRY RUN - nothing sent. Request would have been:" : "Posted.");
    console.log(JSON.stringify(result, null, 2));

    if (!dryRun) {
      state.postsToday = { date: todayISO(), count: postedToday + 1 };
      state.postLog.push({
        date: todayISO(),
        type,
        protocolDay: warmupEnabled(state) ? entry.label : "warm-up skipped (founder decision)",
        videoRef: video,
        title,
        result,
      });
      saveState(state);
    }
  } catch (err) {
    console.error(`Post failed: ${err.message}`);
    process.exit(1);
  }
}

switch (cmd) {
  case "warmup": {
    const sub = rest[0];
    if (sub === "start") cmdWarmupStart();
    else if (sub === "hold") cmdWarmupHold();
    else if (sub === "skip") setWarmupEnabled(false);
    else if (sub === "enable") setWarmupEnabled(true);
    else cmdWarmupToday();
    break;
  }
  case "post":
    await cmdPost();
    break;
  case undefined:
  case "help":
  case "--help":
    printHelp();
    break;
  default:
    console.error(`Unknown command "${cmd}".`);
    printHelp();
    process.exit(1);
}
