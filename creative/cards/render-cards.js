#!/usr/bin/env node
// Renders burned-in text cards as transparent 1080x1920 PNG overlays, ready to drop straight onto
// footage in any phone editor (CapCut, InShot, iOS Photos). Same headless-Chrome technique as
// creative/static-ads/render.js and the TikTok avatar: no npm install, no image API key.
//
//   node creative/cards/render-cards.js                 renders the Day -4 set
//   node creative/cards/render-cards.js --set day-4     same thing, explicit
//
// These are OVERLAYS, not finished videos. The footage underneath still has to be filmed by a human.
// Text is positioned inside TikTok's safe area: clear of the top status area, the right-hand action
// rail, and the bottom caption block, so nothing lands under the UI.

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const CREAM = "#FFF8F0";

const argv = process.argv.slice(2);
function arg(name, fallback) {
  const i = argv.indexOf(`--${name}`);
  return i === -1 || i === argv.length - 1 ? fallback : argv[i + 1];
}

const CHROME =
  arg("chrome", null) ||
  ["C:/Program Files/Google/Chrome/Application/chrome.exe",
   "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"].find(existsSync);

if (!CHROME) {
  console.error("Chrome not found. Pass --chrome <path to chrome.exe>.");
  process.exit(1);
}

// Card text verbatim from creative/scripts/day--4-native.md. Do not edit here without editing the
// script in the same commit, or the overlay and the shot list will disagree.
const SETS = {
  "day-4": {
    dir: "day--4-native",
    // Sizes are per-card and tuned so each authored line fits on ONE rendered line inside the
    // safe-area width. If you change the text, re-render and LOOK at the result: a line that wraps
    // breaks the read, which is the whole point of a hook card.
    cards: [
      { slug: "00-hook",     text: "five spots a cat picks\nin a room like this", size: 60 },
      { slug: "01-highest",  text: "1. the highest flat thing\nin the room",      size: 58 },
      { slug: "02-box",      text: "2. any box. any size.\nimmediately",          size: 60 },
      { slug: "03-using",    text: "3. whatever you are\ncurrently using",        size: 60 },
      { slug: "04-laundry",  text: "4. the clean laundry.\nobviously the clean laundry", size: 50 },
      { slug: "05-sun",      text: "5. the sun.\nit is always the sun",           size: 60 },
      { slug: "06-close",    text: "none of these\ncost anything",                size: 66 },
    ],
    // The two alternate hooks from the script, to film in the same sitting as bank inventory.
    altHooks: [
      { slug: "00-hook-alt-b", text: "your cat has already picked\na spot in this room\nand it is not the bed", size: 50 },
      { slug: "00-hook-alt-c", text: "the five places a cat\nwill actually choose", size: 60 },
    ],
  },
};

const setName = arg("set", "day-4");
const set = SETS[setName];
if (!set) {
  console.error(`Unknown set "${setName}". Available: ${Object.keys(SETS).join(", ")}`);
  process.exit(1);
}

function html({ text, size }) {
  return `<!doctype html><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;width:1080px;height:1920px;background:transparent;}
  body{display:flex;align-items:center;justify-content:center;}
  /* Safe area: clear of the top status bar, the right action rail (~180px) and the bottom
     caption block (~460px). Text sits in the upper-middle third where nothing covers it. */
  .wrap{position:absolute;top:430px;left:70px;right:250px;}
  .line{display:inline-block;background:rgba(20,16,14,0.62);color:${CREAM};
        font-family:"Segoe UI",Helvetica,Arial,sans-serif;font-weight:700;
        font-size:${size}px;line-height:1.30;letter-spacing:-0.01em;
        padding:10px 22px;margin:0 0 10px 0;border-radius:10px;
        box-decoration-break:clone;-webkit-box-decoration-break:clone;}
</style>
<div class="wrap">${text
    .split("\n")
    .map((l) => `<div><span class="line">${l.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span></div>`)
    .join("")}</div>`;
}

const outDir = join(HERE, set.dir);
mkdirSync(outDir, { recursive: true });

function render(card) {
  const tmp = join(outDir, `.tmp-${card.slug}.html`);
  const out = join(outDir, `card-${card.slug}.png`);
  writeFileSync(tmp, html(card), "utf8");
  execFileSync(CHROME, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--default-background-color=00000000", // transparent, so these composite over footage
    "--window-size=1080,1920",
    `--screenshot=${resolve(out)}`,
    `file://${resolve(tmp).replace(/\\/g, "/")}`,
  ], { stdio: "pipe" });
  rmSync(tmp);
  console.log(`rendered ${out}`);
}

[...set.cards, ...set.altHooks].forEach(render);

console.log(`\n${set.cards.length} cards + ${set.altHooks.length} alternate hooks.`);
console.log("Transparent PNGs, 1080x1920, safe-area positioned. Overlay these on your own footage.");
