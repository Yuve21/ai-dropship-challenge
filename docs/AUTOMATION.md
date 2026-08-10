# Automation — the maximum honest autopilot

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
| **Runway API** (official, paid) | API key in `.env` | Generate images (~$0.08 each) and B-roll video. Use for assets/B-roll only. |
| **Polar Analytics MCP** (official) or Triple Whale, or DIY | connect Shopify + ad accounts | Unified Shopify + ad-spend + P&L in one place, agent-readable. |

## Automatable now  vs  irreducibly human

| Automatable now (tool) | Irreducibly human |
|---|---|
| Products, collections, policy pages, prices, theme (Shopify Admin API + token) | Store creation, plan choice, domain purchase |
| Writing correct API calls (Shopify Dev MCP) | Payments / Stripe KYC + bank link |
| Auto-placing supplier orders (CJ API / DSers / Zendrop) | Funding the supplier wallet + approving the spend |
| Product + ad research (Apify MCP, Playwright) | Passing TikTok's Content Posting audit |
| Drafting ad campaigns (Meta MCP/CLI, TikTok Marketing API) | **Unpausing / launching ad spend** (real money, no undo) |
| AI copy, images, B-roll video (agents + Runway) | Filming authentic UGC (the #1 lever, still beats AI video) |
| Unified metrics + P&L (Polar MCP / Triple Whale) | Final creative + budget judgment, refunds/disputes |

## Why these stay human (not fixable with more tooling)
- **KYC / payments:** processors legally require identity + bank verification; automating account
  creation trips fraud detection and gets you banned.
- **Ad spend:** Meta's own MCP lands everything PAUSED on purpose — launching burns real money with
  no undo. The agent drafts; a human presses go.
- **Organic TikTok posting:** the Content Posting API publishes SELF_ONLY (private) until you pass
  TikTok's app audit, caps 6 posts/min, and auto-posting risks reach throttling + bans. Post by hand.
- **Authentic UGC:** AI video is improving but real phone UGC still converts better for DR; filming
  is a human edge, not a chore to eliminate.

## The realistic "you barely touch it" setup
With the stack above wired: the agents research products, build and fill the store, generate copy +
policies + creative scripts, draft ad campaigns, auto-route fulfillment, and keep a live P&L. **Your
recurring human job shrinks to:** film the videos, post them, approve/unpause ad spend, keep the
supplier funded, handle the occasional refund, and watch the dashboards. That is the honest maximum,
and it is a lot of leverage, just not zero.

## Security (same rule as the Lark build)
Tokens and keys live in a gitignored `.env` and in the vendor dashboards. Never commit them, never
paste them into a hosted/remote review seat. This repo is the playbook + the team, never the secrets.
