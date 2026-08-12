// Appends a dated one-line entry to tracker/LEDGER.md's "Session notes" block (newest on top).
// Used by the founder-controlled warm-up switch so a skip or a re-enable is recorded as measured
// reality, not left implicit in JSON state. Never rewrites an existing line.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEDGER_FILE = path.join(__dirname, "..", "..", "tracker", "LEDGER.md");

const ANCHOR = "unverified.)";

export function ledgerPath() {
  return LEDGER_FILE;
}

/**
 * Insert `- **<date>, <line>` as the newest Session notes bullet.
 * Returns the ledger path on success. Throws if the file or the anchor is missing, so a failure is
 * loud rather than a silently unrecorded decision.
 */
export function appendLedgerLine(dateISO, line) {
  if (!existsSync(LEDGER_FILE)) {
    throw new Error(`No ledger at ${LEDGER_FILE}. Record this decision by hand.`);
  }
  const text = readFileSync(LEDGER_FILE, "utf8");
  const at = text.indexOf(ANCHOR);
  if (at === -1) {
    throw new Error(
      `Could not find the Session notes anchor ("${ANCHOR}") in ${LEDGER_FILE}. ` +
        "Record this decision by hand instead of guessing where it goes."
    );
  }
  const cut = at + ANCHOR.length;
  const entry = `\n\n- **${dateISO}: ${line}**`;
  writeFileSync(LEDGER_FILE, text.slice(0, cut) + entry + text.slice(cut), "utf8");
  return LEDGER_FILE;
}
