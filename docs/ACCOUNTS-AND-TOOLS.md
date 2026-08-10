# Accounts & Tools: the human-in-the-loop setup

What the founder must sign up for, and how a tool-enabled seat can help. Items marked `HUMAN:` need a
real person (identity, payment method, phone verification). Agents draft everything that goes INTO
these; they cannot create the accounts.

## Accounts to open (Phase 0)
- `HUMAN:` **Shopify**: take the trial, then the **$1/mo for 3 months** promo. Basic ($39/mo) is the
  real cost after. Use **Shopify Payments** (avoid third-party-gateway surcharge) + add **PayPal**.
- `HUMAN:` **Domain**: ~$10-12/yr (Shopify or a registrar). A real domain reduces payout holds.
- `HUMAN:` **DSers** (free): AliExpress order fulfillment, integrates with Shopify. Add
  **CJdropshipping** (free) if you want US-warehouse SKUs for faster shipping.
- `HUMAN:` **TikTok**: 1-3 accounts for organic posting (the primary channel on this budget). A
  business account later for Spark Ads.
- `HUMAN:` **Business email** on the domain (real contact address, required for policies + processor
  trust).

## The cash-flow reality (repeat, because it bites)
Shopify Payments settles ~3 business days out and may hold a **5-15% rolling reserve** on a new
"high-risk" store. Keep the fulfillment float (see budget rules). Ramp slowly.

## Tools the agent team uses (free)
- **TikTok Creative Center**, **Meta Ad Library**, **#TikTokMadeMeBuyIt**, AliExpress "orders" sort,
  Amazon Movers & Shakers, all free product/creative research. Do NOT pay for Minea / Sell The Trend
  / Peeksta / PPSpy on the $100 budget; the free stack is enough. Revisit once revenue is flowing.

## MCP / CLI for a tool-enabled seat (optional, accelerates but not required)
If running in a seat with browser + MCP (like Claude Code / Cursor):
- **Playwright MCP** or a browser tool: to pull TikTok Creative Center / Meta Ad Library listings,
  check competitor stores, and screenshot creative for the `creative-director`.
- **WebSearch / WebFetch**: live product + trend + policy research (the `product-scout` leans on
  this every run; winning products rotate weekly, so research must be fresh, not from this repo).
- **A Shopify Admin API token** (`HUMAN:` generates it): lets a seat push product listings, pages,
  and theme settings programmatically instead of hand-paste. Treat it as a secret: never commit it,
  keep it in a gitignored `.env`, never give it to a hosted/remote review seat.
- No secrets belong in this repo. Same rule as the Lark build: dashboards hold the secrets, git holds
  the playbook.

## What stays human, always
Opening accounts, entering payment details, spending ad money, filming/posting videos, and shipping
or refunding orders. Agents produce the exact spec, copy, script, targeting, and numbered steps; the
founder (or a tool-enabled seat acting with the founder's explicit go-ahead) executes.
