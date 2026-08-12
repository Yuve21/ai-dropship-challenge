import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATE_DIR = path.join(__dirname, "..", "state");
const STATE_FILE = path.join(STATE_DIR, "warmup-state.json");

const DEFAULT_STATE = {
  // Founder-controlled warm-up switch. true = run the Challenge Warm-Up Protocol v1 gate (default).
  // false = the founder chose to skip warm-up: product content and CTA/link posts are allowed
  // immediately. Toggled by `warmup enable` / `warmup skip`, never by an agent on its own.
  enabled: true,
  account: {
    handle: null,
    startDate: null, // YYYY-MM-DD, the day Track A Day -7 began
  },
  holdUntil: null, // ISO datetime string; if set and in the future, posting is frozen
  holdReason: null,
  postsToday: { date: null, count: 0 },
  postLog: [], // { date, type, protocolDay, videoRef, publishId }
};

export function loadState() {
  if (!existsSync(STATE_FILE)) return structuredClone(DEFAULT_STATE);
  try {
    return { ...structuredClone(DEFAULT_STATE), ...JSON.parse(readFileSync(STATE_FILE, "utf8")) };
  } catch (err) {
    throw new Error(
      `Could not read ${STATE_FILE}: ${err.message}. It may be corrupted - check it by hand ` +
        `before running this again; refusing to silently overwrite it.`
    );
  }
}

export function saveState(state) {
  if (!existsSync(STATE_DIR)) mkdirSync(STATE_DIR, { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n", "utf8");
}

export function statePath() {
  return STATE_FILE;
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}
