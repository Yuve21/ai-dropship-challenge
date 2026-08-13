#!/usr/bin/env node
// Renders the text-only static ad cards in creative/scripts/static-ad-1-text-only-still-bowl.md
// into real 1080x1080 PNGs, using headless Chrome. Same technique as the TikTok avatar in
// assets/tiktok-profile/, so it needs no npm install and no image-generation API key.
//
// Re-run this whenever the shop name, price or shipping window changes:
//   node creative/static-ads/render.js
//   node creative/static-ads/render.js --shop "Real Store Name"
//
// The headline text is the TEST UNIT (3 variants, body and CTA frozen). Do not edit headlines here
// without editing the spec file in the same commit, or the ad and the spec will disagree.

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

// Brand palette, matching assets/tiktok-profile/pawfinds-avatar.html.
const CORAL = "#F2634B";
const CREAM = "#FFF8F0";

const argv = process.argv.slice(2);
function arg(name, fallback) {
  const i = argv.indexOf(`--${name}`);
  return i === -1 || i === argv.length - 1 ? fallback : argv[i + 1];
}

// UNCONFIRMED: the store name has not been decided. It defaults to the TikTok display name because
// CTA Ladder rung 3 (docs/NO-STALL.md P6) requires the handle and store name to match exactly so
// "search our name" resolves. Re-render with --shop once the real name exists.
const SHOP = arg("shop", "PAW FINDS");

const CHROME =
  arg("chrome", null) ||
  ["C:/Program Files/Google/Chrome/Application/chrome.exe",
   "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"].find(existsSync);

if (!CHROME) {
  console.error("Chrome not found. Pass --chrome <path to chrome.exe>.");
  process.exit(1);
}

// The three headline variants, verbatim from the spec file.
const VARIANTS = [
  { slug: "v1-bowl-is-full", text: "The bowl is full.\nShe still won\u2019t drink.", size: 104 },
  { slug: "v2-still-water", text: "Cats don\u2019t ignore water.\nThey ignore still water.", size: 96 },
  { slug: "v3-whole-pitch", text: "$34.99.\nShips in 7-20 business days.\nThat\u2019s the whole pitch.", size: 84 },
];

function html({ text, size }) {
  return `<!doctype html><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;width:1080px;height:1080px;background:${CORAL};}
  body{display:flex;flex-direction:column;justify-content:space-between;
       font-family:"Segoe UI",Helvetica,Arial,sans-serif;color:${CREAM};
       padding:96px 88px;box-sizing:border-box;}
  .headline{font-size:${size}px;line-height:1.16;font-weight:700;letter-spacing:-0.02em;
            white-space:pre-line;margin-top:auto;margin-bottom:auto;}
  .footer{display:flex;justify-content:space-between;align-items:baseline;
          font-size:30px;font-weight:600;letter-spacing:0.14em;opacity:0.92;}
  .footer .right{letter-spacing:0.02em;font-weight:500;opacity:0.85;}
</style>
<div class="headline">${text.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</div>
<div class="footer"><span>${SHOP}</span><span class="right">One product. Nothing hidden.</span></div>`;
}

const outDir = HERE;
mkdirSync(outDir, { recursive: true });

for (const v of VARIANTS) {
  const tmp = join(outDir, `.tmp-${v.slug}.html`);
  const out = join(outDir, `static-ad-1-${v.slug}.png`);
  writeFileSync(tmp, html(v), "utf8");
  execFileSync(CHROME, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1080,1080",
    `--screenshot=${resolve(out)}`,
    `file://${resolve(tmp).replace(/\\/g, "/")}`,
  ], { stdio: "pipe" });
  rmSync(tmp);
  console.log(`rendered ${out}`);
}

console.log(`\nShop name used: "${SHOP}" (UNCONFIRMED, re-run with --shop when the real one exists)`);
