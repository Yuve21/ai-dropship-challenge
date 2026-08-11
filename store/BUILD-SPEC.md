# Store Build Spec: Paw Finds

Status: the store does not exist yet. Nobody has signed up for Shopify. This document is written so
that the moment that happens, building the store is a paste-and-click job: every number, every setting
path, every piece of mechanic logic is decided here, in advance, with the reasoning attached. Nothing in
this file should require a judgment call at build time. If you hit a decision this file didn't make,
that's a gap in the spec, not a place to improvise brand-new numbers.

House style carried into every page this spec produces: no em dashes, no hype, plain honest voice, honest
shipping windows, no fake trust signals.

Related reading, don't duplicate here: `docs/SETUP-GUIDE.md` (account-creation order), `docs/AUTOMATION.md`
(what an Admin-API-enabled seat can do vs what stays human), `docs/OPERATOR-PLAYBOOK.md` sections 5 and 8
(the evidence behind every AOV/CVR call below), `.claude/agents/store-architect.md` and
`.claude/agents/copywriter.md` (division of labor: this file fixes structure and numbers, `copywriter`
fills in final on-page words against the structure fixed here).

---

## 0. What "done" looks like

A live store at a real domain, on Shopify Basic ($1/mo for 3 months), running the free Dawn theme, selling
the cat water fountain as the hero product inside a general pet-and-home-comfort store, with: a working
on-page quantity-break table, a free-shipping threshold, guest checkout, trimmed checkout fields, a
bordered payment section, honest shipping/ETA copy on the product page, five live policy pages, a real
contact email on the domain, and the Meta + TikTok pixels firing on $0 spend. Reviews app installed and
running toward five genuine reviews. No app on the store without a stated $0 per-order cost. No
post-purchase upsell app installed yet.

---

## 1. Store identity and cost summary

- **Store/brand name:** Paw Finds. This already exists as the live TikTok account `@dailypawfinds`; the
  store carries the same name so the two don't read as unrelated. Don't rename it at build time.
- **Domain suggestions** (buy whichever is available, cheapest first): `pawfinds.com`,
  `getpawfinds.com`, `shoppawfinds.com`, `pawfindsshop.com`. Availability is unknown until checkout, so
  this is a ranked list, not a single locked choice: `HUMAN:` picks the first one that's available.
- **Plan:** Shopify Basic, $1/mo promo for the first 3 months, $39/mo after (SETUP-GUIDE.md item A.1).
- **Theme:** Dawn (free, Shopify's own default theme). No paid theme.
- **Payments:** Shopify Payments (avoids the third-party-gateway surcharge) + PayPal.
- **Total new subscriptions this spec adds:** $0. Every app named below is on a free plan. DSers is free.
  Reviews app is free. Pixel/channel apps are free official Shopify apps. Shopify Email is free to 10,000
  sends/month.

| Line | Cost | When it hits |
|---|---|---|
| Shopify Basic | $1/mo x 3, then $39/mo | Immediately on signup |
| Domain | ~$10-12/yr | Immediately on purchase |
| Theme | $0 (Dawn) | — |
| Apps (all of them, see section 4) | $0 | — |
| Quantity-break mechanic | $0 (built with native variants, no app) | — |

---

## 2. Site structure and navigation

Lean niche/general store, not a single-product brand build, so other bench candidates (starting with the
heated eye mask) can be added and tested without rebuilding anything.

**Top navigation:** Home / Shop All / Pet Comfort / Home Comfort / About / Contact

**Collections:**
- `Shop All` — every product, default sort "Best selling" once there's order data, "Manual" until then
  with the cat water fountain pinned first.
- `Pet Comfort` — cat water fountain lives here at launch.
- `Home Comfort` — the heated eye mask lands here when it's promoted (section 9).

**Footer columns:**
- Shop: Shop All, Pet Comfort, Home Comfort
- Support: Shipping Policy, Refund Policy, Contact
- Company: About, Privacy Policy, Terms of Service
- Social: TikTok icon linking to `@dailypawfinds`

**About page:** one short page connecting the store to the TikTok account by name ("the store behind
`@dailypawfinds`"), so a visitor arriving from a TikTok video recognizes they're in the right place. Final
copy is `copywriter`'s job; structural requirement is just that it names the TikTok handle.

---

## 3. Theme settings (Dawn)

All of the below live in **Online Store > Themes > Customize > Theme settings**. Suggestions, not a hard
external requirement, since Dawn ships with a sane default; but pick these and stop deciding, don't
re-litigate the palette at build time.

**Colors** (warm pet/home-comfort feel, not a cold generic-ecommerce look):
- Background: `#FBF6EF` (warm cream, not stark white)
- Text: `#2E2A24` (soft charcoal, not pure black)
- Primary/button: `#D97A4E` (warm terracotta — the "paw" warmth color)
- Secondary/accent: `#7C9473` (muted sage — the "home comfort" calm color, used for badges/accents like
  "Free shipping" and "In stock")
- Borders/dividers: `#E8DCC8` (soft tan)
- Sale/badge text stays high-contrast: white text on the terracotta, never low-contrast pastel-on-pastel.

**Typography** (Dawn's Type picker in theme settings covers a large font library at $0, no license
needed): heading font a warm serif or rounded display face (search "Fraunces" first; if unavailable,
"Bricolage Grotesque" or "Bagoss Standard" are acceptable seconds), body font a clean, legible sans
("Assistant" or "Work Sans"). Heading weight: bold. Body size: default Dawn scale, don't shrink it for
density; mobile is ~70% of the funnel and small type is a CVR tax.

**Buttons and cards:** medium-rounded corners (not sharp, not pill-shaped) on buttons and product cards,
consistent with the warm/friendly positioning. Product card style: "Standard," image ratio "Portrait" (2:3)
so pet-product photography doesn't get cropped oddly.

**Logo/favicon:** reuse the existing `@dailypawfinds` profile image/logo mark if one exists already, don't
commission a new one. Same asset, sized for the header and for the favicon slot.

**Currency:** single default currency, USD, no multi-currency conversion turned on. This isn't cosmetic:
post-purchase upsells (whenever that's revisited) don't display in non-default currencies, so staying
single-currency keeps that door open rather than closing it by accident.

**Social:** connect the TikTok link in **Theme settings > Social media**.

---

## 4. Free app list

Every app below is a named, verified-free option with a stated purpose and a stated per-order cost of
$0. Nothing else gets installed without updating this table first (the app-discipline rule: no app enters
the store without a stated per-order cost and the specific metric it has to move).

| App | Purpose | Per-order cost | Install |
|---|---|---|---|
| **DSers** | Fulfillment: routes orders to the AliExpress/CJdropshipping supplier, auto-places orders once funded. | $0 (its own free plan) | `HUMAN:` install from Shopify App Store, connect Shopify store, one-time. |
| **Judge.me** (Forever Free plan) | Reviews: unlimited review requests, photo/video reviews, star-rating widget and badge on the product page. Free plan keeps small Judge.me branding on the widget; that's an acceptable trade for $0/mo against a paid reviews app. | $0 | `HUMAN:` install from Shopify App Store. |
| **Meta & Instagram** (official Shopify sales channel app) | Installs the Meta Pixel + Conversions API on the store. Warm-up only, not a CVR/AOV lever, see section 8. | $0 | `HUMAN:` install + connect Meta Business account (OAuth). |
| **TikTok** (official Shopify sales channel app) | Installs the TikTok Pixel + Events API. Same warm-up purpose. | $0 | `HUMAN:` install + connect TikTok Business account (OAuth). |
| **Shopify Email** | Free to 10,000 sends/month. Runs the welcome flow and the abandoned-checkout automation (the two flows responsible for ~76% of automation-generated revenue per the operator playbook). | $0 | Built into Shopify, no separate install. `AGENT:` can draft flow copy once `copywriter` has it; `HUMAN:` or `AGENT:` (Admin API supports Shopify Email in newer API versions) turns the automations on. |

**Deliberately not installed:** any quantity-break/volume-discount app. Section 5a below builds the
quantity-break table with native product variants instead, at $0 and zero added page weight. If that
approach ever needs replacing, the verified fallback is **One Stop Volume Discounts** (confirmed free
plan, no paid tier forced) — don't install it by default, only if the variant approach turns out to be
insufficient.

**Deliberately not installed:** any estimated-delivery-date app. Section 6 covers the delivery-estimate
requirement with static text, $0, no app. If a calendar-date version is worth testing later, **Delm** and
**EDDer: Estimated Delivery Date** both currently show free plans — that's a future test, not part of the
default build.

**Deliberately not installed:** a post-purchase upsell app. See section 10.

---

## 5. Hero product page: Quiet Pump Cat Water Fountain

Product handle: `/products/quiet-pump-cat-water-fountain`
Title: **Quiet Pump Cat Water Fountain — Fresh, Flowing Water for Cats**
Base price: $34.99. Landed cost: $8-11/unit (COGS, not the customer-facing shipping charge below).
Category anchor: cat water fountains are an established competitor category (PETLIBRO, Catit, Pioneer
Pet), which means this spec is testing positioning and creative against validated demand, not proving a
brand-new category exists.

Section-by-section, top to bottom:

1. **Buy box (above the fold):** product title, star-rating badge (Judge.me), image/video gallery
   (lead with a short looping video if one exists from the TikTok content, product photos after), the
   variant picker doubling as the quantity-break table (section 5a — this is the buy box, not a separate
   block further down the page), Add to Cart / Buy Now buttons, and directly under the buttons: one line
   of shipping/landed-cost transparency (section 5c) plus one line of return-policy transparency. Both are
   real text on the page, not a tooltip, not footer-only.
2. **Quantity-break table** — this IS part of the buy box (section 5a), listed separately here only to
   flag it as its own numbered requirement: it must render above the fold, not below a scroll.
3. **Shipping and returns block:** a short, honest block restating the ETA string and the return window
   in plain language (not just the one-liner in the buy box — this is the fuller version, 2-3 sentences),
   directly below the buy box before any marketing copy. This is what fixes the "43%/44% of sites don't
   show this on the product page" gap.
4. **Benefit bullets (3-5):** benefit-first, not spec-first. Structural brief for `copywriter`: lead each
   bullet with the outcome (fresher water, cat drinks more, less counter mess, quieter than a running tap,
   easy to clean), spec detail second in the same bullet if at all. No bullet over ~15 words.
5. **Video/demo section:** a slightly longer demo clip than the buy-box teaser if one exists (the pump
   running, water flow, quiet-operation proof), or a short GIF-style loop if not. This is the section most
   likely to reuse existing `@dailypawfinds` TikTok footage.
6. **Social proof:** Judge.me review widget, full list with photos where available.
7. **How it works / what's included:** pump mechanism, ABS/plastic build, quiet-operation claim (with
   whatever real dB or comparison number the supplier provides — never invent one), capacity, what ships
   in the box, power source (USB per most units in this category — confirm against the actual sourced
   listing before publishing, don't assume).
8. **FAQ:** noise level, cleaning frequency, multi-cat compatibility, filter replacement if applicable,
   warranty/return path (links back to the Refund Policy).
9. **Cross-sell:** Dawn's native "You may also like" / related-products block, pointed at the rest of
   `Shop All` (and at the heated eye mask once it's live, section 9). No app needed, this is a native Dawn
   section.
10. **Footer:** the five policy pages (section 7), contact email, TikTok link.

### 5a. Quantity-break table: exact mechanic and numbers

**Build method: native product variants, not an app.** Native Shopify quantity discounts only surface at
checkout, which is documented as the reason they get ignored; a bundling app is an ongoing $0 line only if
its free tier holds, and adds a page-weight cost regardless. Modeling the tiers as product **variants**
puts the table directly in the buy box, at $0, forever, using nothing but Dawn's default variant picker.

**Variant setup** (one product, one option, three values):
- Option name: `Bundle`
- Variant 1 — `1 Fountain`: price **$34.99**, compare-at price blank (no fake discount on the base unit).
- Variant 2 — `2 Fountains — Save 10%`: price **$62.98** ($31.49/unit), compare-at price **$69.98** (so
  Dawn's native strike-through savings badge renders automatically).
- Variant 3 — `3 Fountains — Save 15%`: price **$89.22** ($29.74/unit), compare-at price **$104.97**.
- SKUs: `PAWFOUNTAIN-1`, `PAWFOUNTAIN-2`, `PAWFOUNTAIN-3`.
- Inventory tracking: off ("continue selling when out of stock") on all three, standard dropshipping
  practice since the supplier holds the real stock, not us.

**Exact math behind the discount percentages** (shown so nobody re-derives or second-guesses this at
build time):

| Tier | Unit price | Order total | Payment fee (2.9% + $0.30) | COGS (mid, $9.50/unit) | Contribution (mid) | Contribution (mid) rate | COGS (high, $11/unit) | Contribution (high) |
|---|---|---|---|---|---|---|---|---|
| 1 | $34.99 | $34.99 | $1.31 | $9.50 | $24.18 | 69.1% | $11.00 | $22.68 |
| 2 (10% off) | $31.49 | $62.98 | $2.13 | $19.00 | $41.85 | 66.4% | $22.00 | $38.85 |
| 3 (15% off) | $29.74 | $89.22 | $2.89 | $28.50 | $57.83 | 64.8% | $33.00 | $53.33 |

Read this table honestly, not optimistically. **Absolute contribution per order rises with bundle size in
every case** ($24.18 to $41.85 to $57.83 at mid-cost; $22.68 to $38.85 to $53.33 at high-cost), which is
what actually funds CAC. The contribution **rate** declines slightly tier to tier under this table's
assumption, because the table only counts the one cost saving that's certain today: one payment-processing
fixed fee ($0.30) instead of two or three. It does **not** assume any reduction in per-unit shipping cost
for multi-unit parcels, because that number isn't confirmed yet for this specific SKU/supplier.

**The margin-RATE case (not just the absolute-dollar case) depends on one number this spec cannot invent:
the actual marginal shipping cost of a second and third unit in the same parcel from the real supplier.**
Multi-unit dropship parcels commonly cost meaningfully less per additional unit than a fresh single-unit
shipment, which is the mechanism the operator playbook is describing. But until DSers/CJdropshipping
returns a real multi-unit shipping quote for the sourced listing, treat the 10%/15% discounts as tested
against the conservative, worst-case, "no shipping saving" math above, which already clears comfortably at
both the $9.50 and $11.00 landed-cost ends. **Action before going live:** pull the actual 2-unit and
3-unit landed cost from the supplier once sourced, redo this table with the real number, and log the
delta to `tracker/LEDGER.md`. If the real shipping saving is meaningful, the rate case gets even stronger;
if it's zero, the absolute-dollar case above still holds on its own.

**DSers fulfillment mapping — do not skip this step.** Because the three tiers are one product with
three variants rather than three separate SKUs, DSers needs to be told that the `2 Fountains` variant maps
to **2x** the quantity of the supplier's AliExpress/CJ listing, and `3 Fountains` maps to **3x**. DSers
supports a per-mapping order-quantity multiplier; set it explicitly for variants 2 and 3. Skipping this
step ships a customer who paid for three units only one, which is a chargeback and a dispute risk, not
just a fulfillment error, and it's the single most important build-time check in this whole spec.

### 5b. Free-shipping threshold

**Starting number: $54.99.** This is 1.57x the $34.99 base price, inside the +20% to +40%-above-AOV
practitioner band the operator playbook cites, used here as a placeholder in the absence of any real order
data (there is none yet, this store hasn't sold anything). It is **not** derived from an order-value
histogram, because that requires real orders to exist first. Recalibrate against the real histogram, not
the mean, once there's a meaningful sample.

Deliberate design note: $54.99 sits **below** the 2-unit bundle total ($62.98), so a customer who buys the
2-pack clears free shipping automatically without needing to think about the threshold separately. That's
a design choice made now so it doesn't need re-deciding later, not a proven synergy, flag it as one to
watch in the numbers once orders exist.

**Build path:** Settings > Shipping and delivery > Manage rates > add a rate condition "Free shipping"
with the condition "Order total is over $54.99," on top of a flat-rate paid tier below that (section 5c).

### 5c. Landed-cost transparency

Full landed cost (price + shipping) must be visible before checkout starts, not revealed as a surprise at
the cart or payment step. Build:
- **Flat shipping rate below the threshold: $4.99.** Starting placeholder, same caveat as 5a's math: swap
  in the real carrier cost once the supplier is sourced and confirm this rate doesn't run at a loss.
- On the buy box (section 5, item 1), show the line: **"+ $4.99 shipping, free over $54.99"** directly
  under the price, for every tier, so the shopper does the total math before ever reaching checkout.
- Settings > Shipping and delivery: this same $4.99 flat rate and $54.99 threshold need to be the only
  domestic options at launch (no calculated-carrier-rate option muddying the number shown on the product
  page against what checkout actually charges).

---

## 6. CVR checklist: concrete build steps

Every item below is a real setting path, not a principle to remember. `HUMAN:` items need a click only a
signed-in owner can make; `AGENT:` items are Admin-API-doable once a token exists (`docs/AUTOMATION.md`).

1. **Full landed cost visible before checkout.** Built in 5c above. `AGENT:` writes the buy-box shipping
   line into the product template; `HUMAN:` sets the shipping rates (Settings > Shipping requires the
   store owner's session, not the custom-app token).
2. **Guest checkout on.** Settings > Checkout > Customer contact method: leave account creation
   "Optional" or "Don't require an account" (never "Required"). `HUMAN:` (checkout settings aren't
   currently exposed on the standard Admin API token scope set).
3. **Trim checkout form fields toward ~8.** Settings > Checkout > Form options: keep the required minimum
   (email, shipping name/address block, phone off unless the carrier needs it for delivery). `HUMAN:`.
4. **Shipping ETA and return policy shown on the product page**, not just linked in the footer. Built in
   section 5, items 1 and 3. `AGENT:` once `copywriter` supplies the final ETA string (which depends on
   which supplier gets sourced, see section 5a's honesty note).
5. **Estimated delivery date shown.** Static text, $0, no app (per section 4): a line under the buy box
   reading, for example, **"Order today, arrives in [X-Y] business days"** where X-Y comes from the real
   supplier's transit time once sourced (typical AliExpress ranges run 9-15 business days; a CJ US-warehouse
   SKU is faster, roughly 4-8). Never publish a number faster than what the sourced listing actually
   supports; this is an FTC/TikTok honesty requirement, not just a CVR one. `AGENT:` writes it into the
   template once `compliance-guard`/`copywriter` locks the real range against the chosen supplier.
6. **Visual encapsulation specifically around the credit-card fields.** Settings > Checkout > Branding >
   Design > Sections: apply a border + background/shadow style to the "Sections" category, which on
   Shopify's default one-page checkout already renders Payment as its own visually distinct block below
   Contact and Shipping. This is available on Basic (the branding editor ships on Basic and up; only the
   deeper CheckoutBranding API border-radius controls are Plus-only, which this spec doesn't need). No
   fake or homemade trust seal/badge anywhere on the page or at checkout, full stop, even though research
   shows a homemade seal outperforms most real ones. That's a fabrication line, not a tactic. `HUMAN:`
   (checkout branding requires the owner's session).
7. **Stay on free Dawn with a near-empty app list.** Already the plan (section 4). Every app considered
   for this store gets weighed against this rule before it's added, not after.
8. **Free-shipping threshold** built above (5b).
9. **Quantity-break table** built above (5a).
10. **Measure mobile CVR separately** once there's traffic, and treat the desktop rate as the ceiling
    mobile should approach. Nothing to build now; this is a standing instruction for whoever reads the
    analytics later, recorded here so it isn't lost.

---

## 7. The five policy pages

Live before any product content goes out (`docs/WARM-UP.md`), because payment processors treat their
absence as a payout-hold risk factor, not because of SEO or polish:

1. **Refund/Returns Policy**
2. **Shipping Policy** — honest ETA windows, matching whatever section 6 item 5 ends up saying, sourced
   from the real supplier, never rounded down for looks.
3. **Privacy Policy**
4. **Terms of Service**
5. **Contact** — the real business email on the store's own domain (`@pawfinds.com` or whichever domain
   gets bought), not a personal or free-webmail address.

`AGENT:` can build all five as pages via the Admin API once a token exists (`docs/AUTOMATION.md` line 21);
`copywriter` supplies the final text, `compliance-guard` checks the shipping-ETA honesty before publish.

---

## 8. Warm-up items that belong in the day-1 build, not later

Two things this spec insists go in on day one even though $0 is being spent on ads:

- **Meta Pixel + Conversions API and the TikTok Pixel/Events API, installed the same day the store goes
  live, at $0 spend.** Every organic visit from the `@dailypawfinds` content becomes free pixel history,
  which is the single highest-value free warm-up action available and it costs nothing to start early.
  Install path: the two official sales-channel apps in section 4, `HUMAN:` OAuth-connects each once.
- **The real domain, the contact email on it, and the five live policy pages count as payment-processor
  payout-hold warm-up, not cosmetic polish to add once there's traffic.** Build them in the same session
  as store creation, section 1 and section 7, not after the first sale.

---

## 9. Second candidate: rechargeable heated eye mask (staged, not built yet)

$29.99 retail. Not getting its own product page today; it's queued in the `Home Comfort` collection using
this same template the moment it's promoted, so promoting it later costs zero new decisions. Pre-computed
numbers, same method as 5a, ready to paste in when that day comes:

| Tier | Unit price | Order total | Discount |
|---|---|---|---|
| 1 | $29.99 | $29.99 | — |
| 2 | $26.99 | $53.98 | 10% |
| 3 | $25.49 | $76.47 | 15% |

Free-shipping threshold, same 1.5-1.8x placeholder logic against its own price, would start around
$44.99-$53.99; don't set it until the product actually has its own page, since running two different
thresholds on one store at once is an unnecessary complication this spec isn't solving today.

---

## 10. Post-purchase upsell: explicitly not specced yet

Not included in this build, on purpose. Post-purchase upsells don't display at all for Apple Pay, Google
Pay, Amazon Pay, BNPL, gift cards, or non-default currencies, on a funnel that's roughly 70% mobile, which
means a large and currently unknown share of this store's own checkouts may never see one. **Do not add a
post-purchase upsell app until the store's own eligible-order share has been measured from real order
data.** When that measurement exists, it goes in `tracker/LEDGER.md` and this file gets a new section 10
with real numbers, not before.

---

## 11. Master build sequence: HUMAN: and AGENT: steps, in order

This folds the store-creation basics from `docs/SETUP-GUIDE.md` together with everything new in this
spec, in the order to actually execute them. Don't skip the order; later steps need earlier keys.

1. `HUMAN:` Sign up for Shopify, take the $1/mo-for-3-months promo, pick **Basic**.
2. `HUMAN:` Buy the domain (section 1's ranked list), connect it to the store.
3. `HUMAN:` Turn on Shopify Payments (KYC/bank step), connect PayPal. Expect a possible payout reserve on
   a new store, that's normal, not a failure.
4. `HUMAN:` Set up the business email on the new domain.
5. `HUMAN:` Generate a Shopify Admin API token: Settings > Apps and sales channels > Develop apps >
   Create an app > configure scopes for products, pages, themes, orders, read analytics > Install > copy
   the token into `.env` as `SHOPIFY_ADMIN_TOKEN`, store URL as `SHOPIFY_STORE`.
6. `AGENT:` From here, build the product: title, description scaffold, the three `Bundle` variants and
   their exact prices/compare-at prices (section 5a), SKUs, product page sections 1-9 (section 5) as theme
   content/metafields, the `Shop All`/`Pet Comfort`/`Home Comfort` collections (section 2), and the five
   policy pages (section 7) once `copywriter` has final text.
7. `HUMAN:` Confirm Dawn is the active theme (default on a new store) and apply the theme settings in
   section 3 via Customize.
8. `HUMAN:` Settings > Shipping and delivery: create the $4.99 flat rate and the $54.99 free-shipping
   threshold (sections 5b/5c).
9. `HUMAN:` Settings > Checkout: guest checkout on, form fields trimmed, branding editor bordered payment
   section (section 6, items 2/3/6).
10. `HUMAN:` Install DSers, connect it to the sourced AliExpress/CJdropshipping listing(s), and set the
    per-mapping order-quantity multiplier to 2x and 3x for the `2 Fountains`/`3 Fountains` variants
    (section 5a's fulfillment-mapping warning). Fund the DSers/supplier payment method separately from the
    $100 store budget (the fulfillment float, per `docs/BUDGET-RULES.md`).
11. `HUMAN:` Install Judge.me (Forever Free plan), turn on review-request emails.
12. `HUMAN:` Install the Meta and TikTok sales-channel apps, OAuth-connect each Business account, confirm
    the pixel/CAPI are firing (section 8) at $0 spend.
13. `AGENT:` Once `.env` has `SHOPIFY_ADMIN_TOKEN`/`SHOPIFY_STORE`, turn on Shopify Email's welcome flow
    and abandoned-checkout automation with `copywriter`'s copy.
14. `HUMAN:` Final read-through of the live product page against sections 5-6 of this spec before the
    first piece of product content links to it, confirming the honest ETA string actually matches the
    sourced supplier's real transit time.

---

## 12. Recalibrate once real data exists

Every number in this file marked as a "starting placeholder" is exactly that. Once real orders exist:
- Redo the 5a margin table with the actual multi-unit supplier shipping cost.
- Reset the $54.99 free-shipping threshold off the real order-value histogram, not the mean, keeping at
  least 65% of orders qualifying.
- Confirm the $4.99 flat shipping rate isn't running at a loss against the real carrier invoice.
- Measure the eligible-order share for a post-purchase upsell before installing anything for section 10.
- Measure mobile CVR separately from desktop (checklist item 10).

Log all of it to `tracker/LEDGER.md`, and write the conclusion to `docs/LEARNINGS.md` with the sample size,
per `AGENTS.md`'s evidence rule. A number without a sample size is a hypothesis, not a learning.
