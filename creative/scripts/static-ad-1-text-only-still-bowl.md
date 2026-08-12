# Static Ad Spec 1: Text-Only, "Still Full" (Meta, paused bank)

Account: Meta ad account (not yet created, Founder Action #9). **Not a TikTok organic post.**
Product: cat water fountain, $34.99.
Format family: **Text-only static**, new family, first entry in this repo.
Status: **built for the paused bank**, per `ops/paid-readiness-dossier.md`. It spends nothing until the
$150 collected-revenue trigger clears (`docs/BUDGET-RULES.md`) and the founder unpauses.

Naming note: this bank had no static naming convention because it had no statics. `static-ad-N-slug.md` is
introduced here deliberately without a day prefix, because statics do not sit on the organic calendar in
`creative/CONTENT-CALENDAR.md`; they sit in the paid bank and launch on a revenue trigger, not a date.

## Why this format exists, and why it is first
By winner **hit rate** in the largest public creative dataset we have, text-only ads win most often:
**11.60% text-only, 8.75% product image plus text, 7.56% UGC, 6.87% high-production video** (Motion, 578,750
creatives, 6,015 brands, $1.29B spend, Meta, `docs/LEARNINGS.md` 2026-08-10). We had **zero** statics in the
bank and 12 video scripts, which had the ratio backwards even before the no-sample decision.

Two honest boundaries on that number:
- It is **Meta paid data**. It does not transfer to TikTok organic, where our own brief records that 300+
  scheduled image posts over a year produced nothing. Statics do not replace organic video and this spec
  does not claim they do.
- Hit rate is not the same as return. It says a larger share of these ads become winners, not that each
  winner is bigger.

**The reason it matters most right now:** a text-only ad needs **no product photograph, no footage, no
supplier permission and no sample.** It is the only creative format in this entire plan that is fully
unblocked today, at zero cost, with nothing missing.

## Asset requirement
| Asset | Exists? | Produced by |
|---|---|---|
| Ad copy below | **Exists, it is in this file** | Written here |
| A plain colour background card, brand coral or off-white, no imagery | Must be produced, ~5 minutes | Canva MCP (`docs/AUTOMATION.md`) |
| Landing page: the live product page | Blocked on Founder Action #2 | Shopify, store standup |

Nothing here waits on the supplier, the sample, or a photograph.

## The ad

**Primary text (the body, above the creative):**
"Her water bowl is full right now. It has been full since this morning.

A lot of cats will walk past a still bowl all day and then drink out of a running tap. Moving water is the
part they respond to.

We sell one thing: a quiet plug-in fountain, $34.99. It ships in 7 to 20 business days, which is slow, and
we would rather you read that here than find it at checkout."

**Headline (3 variants, the test unit, body and CTA frozen):**
1. "The bowl is full. She still won't drink."
2. "Cats don't ignore water. They ignore still water."
3. "$34.99. Ships in 7-20 business days. That's the whole pitch."

**Description:** "One product. Honest shipping window. No subscription."

**CTA button:** "Shop now"

**Creative:** plain background card carrying headline variant text only, no product image, no stock photo,
no logo lockup beyond the shop name. High contrast, one type size, legible in a mobile feed at a glance.

## Structure and budget (from `ops/paid-readiness-dossier.md`, not re-decided here)
One sales campaign, one broad ad set, this concept as one of 3-5 genuinely different concepts, $10-15/day
per ad. No interest stacking, no lookalikes, no separate retargeting campaign at this budget.

## Kill thresholds (pre-written, per `docs/MANDATE.md`)
CTR under 1% at $10 spend or 24h, whichever comes first: kill and replace from the bank. Zero sales at $25
spend: kill. Do not judge on CPA at this budget; the account will not exit the learning phase.

## What this spec deliberately does not do
- It does not show the product, so it makes no visual promise the delivered unit has to match.
- It makes no claim about quietness, durability, leaks or ease of cleaning. The word "quiet" appears once
  as a product-category descriptor of a plug-in fountain, **and if `compliance-guard`'s review of the
  product page removes that word for lack of substantiation, remove it here in the same edit** so the ad
  and the page never disagree.
- It contains no review, no rating, no star count and no customer quote, because we have none.

## Compliance notes
- No health, medical or veterinary claim. No UTI, kidney or hydration-as-medicine language, per
  `compliance/bench-review-2026-08-11.md` rank 1 and Meta's personal-health ad standards.
- No income claims. No before/after framing. No countdown, scarcity or "only X left" language.
- Shipping window stated in the ad itself and matching `store/copy/policy-shipping.md` exactly. FTC MITOR
  applies from the moment the first order exists: ship or notify inside the promised window or 30 days.
- Total cost visible before checkout, per the abandonment findings in `docs/LEARNINGS.md`. The ad states
  price and shipping window on purpose.
- AIGC label: not applicable. No generated imagery, no generated voice, no generated person.
