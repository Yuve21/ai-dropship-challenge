# Accounts and Tools: the human-in-the-loop setup

What the founder must sign up for, and how a tool-enabled seat helps. `HUMAN:` needs a real person
(identity, payment method, phone verification). Agents draft everything that goes INTO these accounts; they
cannot create them.

## Accounts to open (Phase 0)
- `HUMAN:` **Shopify**: take the trial, then the **$1/mo for 3 months** promo. Basic ($39/mo) after. Use
  **Shopify Payments** (avoids the third-party-gateway surcharge) plus **PayPal**.
- `HUMAN:` **Domain**: ~$10-12/yr. A real domain reduces payout holds. Publish DNS the same day
  (`docs/WARM-UP.md` Track C).
- `HUMAN:` **DSers** (free): AliExpress fulfillment, integrates with Shopify. Add **CJdropshipping** (free)
  for US-warehouse SKUs.
- `HUMAN:` **TikTok**: 1-3 accounts for organic posting, one per real device and network. A business account
  later for Spark Ads.
- `HUMAN:` **Business email** on the domain: required for the policy pages and processor trust.
- `HUMAN:` **Meta Business Manager and Google Ads**: created at $0 spend during warm-up
  (`docs/WARM-UP.md` Track E).

## Cash flow
Shopify Payments settles ~3 business days out and may hold a reserve on a new store. Keep the fulfillment
float (`docs/BUDGET-RULES.md`). Ramp slowly.

## Free tools the agent team uses
**TikTok Creative Center**, **Meta Ad Library**, **#TikTokMadeMeBuyIt**, AliExpress "orders" sort, Amazon
Movers & Shakers. Do not pay for Minea, Sell The Trend, Peeksta or PPSpy on this budget. The single named
exception is the Dropship.io 7-day free trial, timed to the week the bench is finalised, cost $0
(`docs/PLAYBOOK.md` section 4).

## MCP / CLI for a tool-enabled seat (accelerates, not required)
- **Playwright MCP** or a browser tool: pull TikTok Creative Center and Meta Ad Library listings, check
  competitor stores, screenshot creative for `creative-director`.
- **WebSearch / WebFetch**: live product, trend and policy research. `product-scout` leans on this every
  run, because winning products rotate weekly.
- **A Shopify Admin API token** (`HUMAN:` generates it): push product listings, pages and theme settings
  programmatically instead of hand-pasting. Treat it as a secret.
- **The `automation/` CLI:** warm-up day tracking, the founder's warm-up switch, and approved TikTok posting
  (`automation/README.md`).
- No secrets in this repo. Dashboards hold the secrets, git holds the playbook.

## What stays human, always
Opening accounts, entering payment details, spending ad money, the daily in-app engagement session, and
shipping or refunding orders. Agents produce the exact spec, copy, script, targeting and numbered steps.
