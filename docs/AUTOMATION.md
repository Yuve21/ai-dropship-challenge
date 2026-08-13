# Automation: the maximum honest autopilot

> **The always-on layer is `.github/workflows/challenge-loop.yml`**, a daily headless
> challenge-lead loop on GitHub Actions (subscription-funded via the `CLAUDE_CODE_OAUTH_TOKEN` repo
> secret, zero rented infrastructure). Third-party always-on harnesses (OpenClaw, Hermes) were
> evaluated 2026-08-10 and rejected: both need a rented 24/7 machine AND API-key billing, since
> Anthropic blocks consumer-subscription OAuth for third-party harnesses. Do not re-litigate this
> without new facts.

Automate everything that can be, so the founder only does the irreducible human steps. Money movement,
identity/KYC, ad-spend launch and in-app engagement stay human by design, not through a tooling gap. The
automated/not-automated split for warm-up specifically: `docs/WARM-UP.md`. The stack (2025-26):

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
| **Meta Ads MCP + CLI** (official, Apr 2026) | wire with the ad account | DRAFT campaigns/adsets/ads/creatives. Everything lands **PAUSED**. The human unpauses. Third-party Meta Ads MCPs exist too. |
| **TikTok Marketing API v1.3** (official REST) | `HUMAN:` app + OAuth | Draft campaigns programmatically (separate portal). Spend stays human-gated. |
| **AI video: Creatify API / HeyGen (official MCP)** | API key in `.env` | Generate avatar/UGC-style ad videos from a script (3-5/product/day). |
| **AI video: Runway/Kling + ElevenLabs (official MCPs)** | API keys in `.env` | Faceless B-roll + AI voiceover, assembled with ffmpeg. ~$3-6 per 30s composite. |
| **AI narration: ElevenLabs (WIRED 2026-08-13, `node cli.js voice`)** | `ELEVENLABS_KEY` in `.env`, and a **paid plan** | Text-to-speech narration over the text-card videos. Writes an MP3 only; assembly happens in CapCut, since ffmpeg is not installed here. **Their FREE tier is personal, NON-COMMERCIAL and requires attribution, so it may not be used for this store's content at all**; commercial rights start on paid plans (checked 2026-08-13). The CLI refuses a real run without `--commercial-confirmed`, and that gate runs before the key check, because holding a key proves nothing about the tier. **Free alternative that is usually better here: TikTok's built-in text-to-speech**, native, $0, no key, no ffmpeg. Synthetic voice means the AIGC label applies. Built and tested, never run live. |
| **AI video: Higgsfield (WIRED 2026-08-13, `node cli.js video`)** | `HF_API_KEY` + `HF_API_SECRET` in `.env`, and a **paid plan** | Image-to-video b-roll via `/v1/image2video/dop`. **Connector is built and tested; it has never been run against the live API** because no key exists and no plan is bought. Auth is a two-part credential (`Authorization: Key <ID>:<SECRET>`), not a bearer token. **Paid: ~$15/mo cheapest tier, ~$5 per 100 credits, 15-25 credits a video**, so it is founder money against the $100 cap and needs approval like any other spend. **Refuses in code to generate cats, pets, people or the product**, before it checks the key. Output always carries the AIGC label. Their SDK documents no text-to-video endpoint, so this implements image-to-video only. |
| **TikTok auto-posting: upload-post (TikTok needs their Basic plan, $24/mo min., verified 2026-08-10; their free tier covers other platforms, not TikTok) / Blotato (~$29/mo, MCP) / Postiz (MCP)** | `HUMAN:` OAuth-connect the TikTok account once | Post PUBLIC video to TikTok on a schedule via the approved API. Carries TikTok's audit for you. A local CLI wrapping upload-post's API lives in `automation/` (`node cli.js post`), gated so it refuses to post anything the current Warm-Up Protocol v1 day doesn't allow. |
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
| AI ad videos, incl. avatar UGC (Creatify/HeyGen + Runway/Kling + ElevenLabs) | (was "filming UGC", now automated; see caveat below) |
| **Public TikTok posting on a schedule** (upload-post/Blotato/Postiz + MCP) | The one-time OAuth connect of the TikTok account |
| Unified metrics + P&L (Polar MCP / Triple Whale) | Final budget judgment, refunds/disputes |

## What stays human, and why
- **KYC and payments:** processors legally require identity and bank verification; automating account
  creation trips fraud detection and gets you banned.
- **Funding:** the ad account, the supplier wallet and the SaaS keys all need a real payment method loaded.
  An agent spends against them; it cannot fund them.
- **Ad spend launch:** Meta's own MCP lands everything PAUSED on purpose. The agent drafts; a human presses
  go (`docs/PLAYBOOK.md` "Non-negotiable (account survival)", rule 4).
- **One-time OAuth connects:** linking TikTok to the posting service and the accounts to the MCPs. After
  that, posting runs unattended.
- **The in-app engagement session:** scrolling, likes, follows and comments from the account's own device.
  No official API exposes them (`docs/WARM-UP.md`).

## What IS automated, with the caveats that stay visible
The founder chose full automation of the content loop over the higher conversion of hand-filmed UGC, so
`content-engine` generates AI videos and posts them unattended.
- **AI video converts below authentic human UGC.** Use it as a volume engine; re-shoot a scaled winner with
  a real person later. Fight the AI tells (dead eyes, stiff hands, monotone VO) with product B-roll cutaways
  and captions.
- **The AIGC label is mandatory** on realistic AI faces, voices or scenes (TikTok auto-detects via C2PA;
  unlabelled realistic AI gets down-ranked or removed). It is not a ranking penalty. `content-engine`
  applies it.
- **API posting may take a ~30-50% reach haircut** vs native posting (anecdotal, consistently reported).
  Mitigate: space posts, unique captions and covers, under ~15/day, never mass-duplicate.
- **Approved-partner APIs only** (upload-post/Blotato/Postiz). Never unofficial login or session-token bots.

With the stack wired, the recurring human job is: approve and unpause ad spend, keep the supplier and API
keys funded, handle refunds and disputes, do the daily in-app session, watch the dashboards.

## Security
Tokens and keys live in a gitignored `.env` and in the vendor dashboards. Never commit them, never paste
them into a hosted or remote review seat. This repo is the playbook and the team, never the secrets.
