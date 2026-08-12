# Day-0 Setup Guide: do these in order

Starting from nothing open. `HUMAN:` = you do it (identity, payment, OAuth). `AGENT:` = a tool-enabled seat
does it once the key exists. Start everything on FREE tiers to protect the $100 cap; paid subscriptions come
out of revenue later (budget note at the end).

Work top to bottom. Later steps need earlier keys.

## A. The store (Phase 0, ~$2-15 out of pocket)
1. `HUMAN:` **Shopify**: sign up, take the **$1/mo for 3 months** promo. Pick the Basic plan.
   (~$1 now; $39/mo after month 3, by which point revenue should cover it.)
2. `HUMAN:` **Domain**: buy one in Shopify or a registrar (~$10-12/yr). A real domain reduces payout
   holds and is required for TikTok `PULL_FROM_URL` posting later.
3. `HUMAN:` **Shopify Payments** (turn on) **+ PayPal** (connect). This is the KYC/bank step, only
   you can do it. Expect a possible payout reserve on a new store; that's normal.
4. `HUMAN:` **Business email** on your domain (real contact address; required for policies + trust).
5. `HUMAN:` **Generate a Shopify Admin API token:** Settings -> Apps and sales channels -> Develop
   apps -> Create an app -> configure Admin API scopes (products, pages, themes, orders, read
   analytics) -> Install -> copy the Admin API access token. Paste it into `.env` as
   `SHOPIFY_ADMIN_TOKEN` and your store URL as `SHOPIFY_STORE`.
   -> `AGENT:` from here the `store-architect` can build products, the 5 policy pages, prices, and
   theme via the Admin API automatically.

## B. Supplier / fulfillment (free)
6. `HUMAN:` **DSers** account (free), connect it to Shopify. Add **CJdropshipping** (free) too if you
   want US-warehouse SKUs for faster shipping. For CJ auto-ordering, `HUMAN:` grab a CJ API token ->
   `.env` as `CJ_API_TOKEN`.
7. `HUMAN:` put a payment method on the supplier account (this funds order fulfillment; kept separate
   from the $100 test budget as the "float").

## C. Content automation: AI video (start on free tiers/trials)
8. `HUMAN:` create accounts + grab API keys for the AI-video stack, into `.env`:
   - **Creatify** (`CREATIFY_API_KEY`) or **HeyGen** (`HEYGEN_API_KEY`, has an official MCP) for
     avatar/UGC-style ad videos. Start on the cheapest tier / free credits.
   - **Runway** (`RUNWAY_API_KEY`) + **ElevenLabs** (`ELEVENLABS_API_KEY`, official MCP) for
     faceless B-roll + AI voiceover. Free/low tiers to start.
   -> `AGENT:` `content-engine` turns `creative-director`'s scripts into 3-5 videos per product/day.

## D. Auto-posting to TikTok (ToS-clean, start free)
9. `HUMAN:` **TikTok account(s)** for the store (1-3).
10. `HUMAN:` pick a posting backend and connect your TikTok via OAuth (one time):
    - **upload-post.com**: has a free tier, but **TikTok specifically is Basic-tier-and-up only,
      $24/mo minimum** (verified live 2026-08-10, corrected from what this line used to say: the
      free tier covers other platforms, not TikTok). Cheapest to start on `--dry-run` in
      `automation/`, but don't pay for it until Track A is close to Day 1 (`UPLOAD_POST_KEY`), OR
    - **Blotato** (~$29/mo, flat, built for AI agents, has an MCP) once revenue justifies it.
    These carry TikTok's approved audit for you, so you post PUBLIC without doing your own API audit.
    -> `AGENT:` `content-engine` posts the videos on a schedule via the posting API/MCP.
11. Wire the MCP in your seat (Claude Code/Cursor): **Blotato MCP** or **Postiz MCP** for posting,
    **HeyGen MCP** / **Runway MCP** / **ElevenLabs MCP** for video, and **Canva MCP**
    (`https://mcp.canva.com/mcp`, official, already added user-scoped on the founder's machine and
    in `.cursor/mcp.json`) for UGC graphics: covers, thumbnails, carousels, product imagery.
    `HUMAN:` one-time browser OAuth for Canva; check current student/edu offers for free Pro.
    (See `docs/AUTOMATION.md`.)

## E. Optional research + analytics tooling
12. `AGENT:`/`HUMAN:` **Apify** API key (`APIFY_TOKEN`, pay-per-run pennies) for TikTok/AliExpress/
    Meta-Ad-Library scraping, and/or **Playwright MCP** for browser research. Free product research
    works without these; add if you want it hands-off.

## F. Then start the challenge
13. Confirm `.env` has the keys you created (never commit it; it is gitignored).
14. `node automation/cli.js warmup start --handle @yourhandle` on the day the TikTok account exists, then
    `warmup today` daily. `warmup skip` if the founder decides to skip warm-up (`docs/WARM-UP.md`).
15. Run **`challenge-lead`**, tell it "it's day 1." It opens with the gap to $1,000/day net, sends
    `product-scout` for the first shortlist, then walks `docs/30-DAY-PLAN.md`.

## The budget note
Full automation SaaS (Blotato, Creatify, Runway, ElevenLabs, Apify) can total ~$90-300/mo, which would blow
the $100 cap before a single sale. The rule:
- **Start every tool on its free tier, trial or free credits.** upload-post's TikTok posting is the one
  exception: Basic plan, $24/mo minimum, verified 2026-08-10. Build and test with `automation/`'s `--dry-run`
  and do not subscribe until posting is about to start. HeyGen/Creatify/Runway/ElevenLabs have free credits;
  Apify is pay-per-use pennies.
- **Upgrade to paid tiers from REVENUE only.** Reinvested revenue does not count against the $100
  (`docs/BUDGET-RULES.md`).
- Free tiers failing to sustain the daily video volume is a signal to reinvest early revenue into tooling,
  not to spend more founder money.

## What still needs you after setup
The one-time account creation and OAuth connects above, funding the APIs and the supplier, the daily in-app
engagement session (`docs/WARM-UP.md`), and approving ad spend. Accepted quality caveats: AI video converts
below authentic human UGC (it is a volume engine), realistic AI content needs the AIGC label
(`content-engine` applies it), and API posts may take a ~30-50% reach haircut vs hand-posting.
