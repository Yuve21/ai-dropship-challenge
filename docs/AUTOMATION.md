# Automation — the maximum honest autopilot

> **The always-on layer is `.github/workflows/challenge-loop.yml`** — a daily headless
> challenge-lead loop on GitHub Actions (subscription-funded via the `CLAUDE_CODE_OAUTH_TOKEN` repo
> secret, zero rented infrastructure). Third-party always-on harnesses (OpenClaw, Hermes) were
> evaluated 2026-08-10 and rejected: both need a rented 24/7 machine AND API-key billing, since
> Anthropic blocks consumer-subscription OAuth for third-party harnesses. Do not re-litigate this
> without new facts.

The goal: automate everything that can be, so the founder only does the irreducible human steps and
otherwise watches the dashboards. **Full hands-off is not real** — money movement, identity/KYC,
ad-spend launch, and organic posting stay human by design, not because of a tooling gap. Anyone
selling "full autopilot dropshipping" is selling a fantasy. Here is the real stack (2025-26).

## Install these (a tool-enabled seat: Claude Code / Cursor)
Secrets go in a gitignored `.env`, never in this repo, never to a hosted/remote seat.

| Layer | Install / wire | What the agent can then do |
|---|---|---|
| **Shopify Dev MCP** (official, free) | add the Shopify Dev MCP server | Write CORRECT Admin GraphQL calls (docs + schema + validation). Does not mutate the store itself. |
| **Shopify Admin API** (official) | `HUMAN:` generate a custom-app Admin API token once (Settings -> Apps -> Develop apps); put in `.env` | Create products/variants/collections, build the 5 policy pages, set prices, edit theme, pull orders + analytics. The real store-automation surface. |
| **CJdropshipping API** (official REST) | `HUMAN:` get a token from CJ developer portal | Product search, stock, **auto-place orders**, tracking. True programmatic fulfillment. |
| **DSers / Zendrop / AutoDS** | in-app auto-fulfill (connect once) | Auto-place AliExpress/supplier orders once a payment method is on file (funding + approval stay human). A community DSers MCP exists on Apify. |
| **Apify actors + MCP** (paid, ~pennies/run, one API key) | add Apify MCP servers | Scrape TikTok Shop, AliExpress, Amazon, and the TikTok Ad Library for product/ad research. Best agent-drivable research surface. |
| **Playwright MCP** | add the browser MCP | Pull pages with no API (TikTok Creative Center, Meta Ad Library, competitor stores) + screenshot creative. |
| **Meta Ads MCP + CLI** (official, Apr 2026) | wire with the ad account | DRAFT campaigns/adsets/ads/creatives. Everything lands **PAUSED** — the human unpauses. Third-party Meta Ads MCPs exist too. |
| **TikTok Marketing API v1.3** (official REST) | `HUMAN:` app + OAuth | Draft campaigns programmatically (separate portal). Spend stays human-gated. |
| **AI video — Creatify API / HeyGen (official MCP)** | API key in `.env` | Generate avatar/UGC-style ad videos from a script (3-5/product/day). |
| **AI video — Runway/Kling + ElevenLabs (official MCPs)** | API keys in `.env` | Faceless B-roll + AI voiceover, assembled with ffmpeg. ~$3-6 per 30s composite. |
| **TikTok auto-posting — upload-post (free tier) / Blotato (~$29/mo, MCP) / Postiz (MCP)** | `HUMAN:` OAuth-connect the TikTok account once | Post PUBLIC video to TikTok on a schedule via the approved API. Carries TikTok's audit for you. |
| **Canva MCP** (official, `https://mcp.canva.com/mcp`) | `HUMAN:` one-time browser OAuth (already added user-scoped on the founder's machine; in Cursor it's in `.cursor/mcp.json`) | UGC graphics: video covers/thumbnails, carousel posts, story graphics, product-page imagery, brand-kit resizes. Check current Canva student/edu offers for a free Pro tier before paying. |
| **Polar Analytics MCP** (official) or Triple Whale, or DIY | connect Shopify + ad accounts | Unified Shopify + ad-spend + P&L in one place, agent-readable. |

## Automatable now  vs  irreducibly human

| Automatable now (tool) | Irreducibly human |
|---|---|
| Products, collections, policy pages, prices, theme (Shopify Admin API + token) | Store creation, plan choice, domain purchase |
| Writing correct API calls (Shopify Dev MCP) | Payments / Stripe KYC + bank link |
| Auto-placing supplier orders (CJ API / DSers / Zendrop) | Funding the supplier wallet + approving the spend |
| Product + ad research (Apify MCP, Playwright) | Passing TikTok's Content Posting audit |
| Drafting ad campaigns (Meta MCP/CLI, TikTok Marketing API) | **Unpausing / launching ad spend** (real money, no undo) |
| AI ad videos, incl. avatar UGC (Creatify/HeyGen + Runway/Kling + ElevenLabs) | (was "filming UGC" — now automated; see caveat below) |
| **Public TikTok posting on a schedule** (upload-post/Blotato/Postiz + MCP) | The one-time OAuth connect of the TikTok account |
| Unified metrics + P&L (Polar MCP / Triple Whale) | Final budget judgment, refunds/disputes |

## What genuinely stays human (and why)
- **KYC / payments:** processors legally require identity + bank verification; automating account
  creation trips fraud detection and gets you banned.
- **Funding:** the ad account, the supplier wallet, and the automation SaaS keys all need a real
  payment method loaded. An agent spends against them; it can't fund them.
- **Ad spend launch:** Meta's own MCP lands everything PAUSED on purpose — launching burns real money
  with no undo. The agent drafts; a human presses go.
- **One-time OAuth connects:** linking your TikTok to the posting service and your accounts to the
  MCPs is a one-time human grant. After that, posting runs unattended.

## What IS now automated (per the founder's direction) — with honest caveats
The founder chose full automation of the content loop over the higher conversion of hand-filmed UGC.
So `content-engine` generates AI videos and posts them to TikTok on a schedule, unattended. Keep
these caveats visible, they are real:
- **AI video converts below authentic human UGC.** Use it as a volume/testing engine; a scaled winner
  is worth re-shooting with a real person later. Fight the "obviously AI" tells (dead eyes, stiff
  hands, monotone VO) with product B-roll cutaways + captions.
- **AIGC label is mandatory** on realistic AI faces/voices/scenes (TikTok auto-detects via C2PA;
  unlabeled realistic AI gets down-ranked/removed). The label is NOT a ranking penalty. content-engine
  applies it.
- **API posting may take a ~30-50% reach haircut** vs native app posting (anecdotal but consistently
  measured). Mitigate: space posts, unique captions/covers, stay under ~15/day, never mass-duplicate.
- **ToS line:** only approved-partner APIs (upload-post/Blotato/Postiz over the sanctioned API).
  Never unofficial login/session-token bots — that is the ban vector.

## The realistic "you barely touch it" setup
With the stack wired: the agents research products, build and fill the store, generate the AI videos,
post them to TikTok on schedule, draft ad campaigns, auto-route fulfillment, and keep a live P&L.
**Your recurring human job shrinks to:** approve/unpause ad spend, keep the supplier + API keys
funded, handle the occasional refund/dispute, and watch the dashboards. That is genuinely close to
hands-off for the content loop — the leverage you asked for, with the caveats named, not hidden.

## Security (same rule as the Lark build)
Tokens and keys live in a gitignored `.env` and in the vendor dashboards. Never commit them, never
paste them into a hosted/remote review seat. This repo is the playbook + the team, never the secrets.
