# Static Ad Spec 2: Product Image Plus Text, "The Spec Card" (Meta, paused bank, permission-gated)

Account: Meta ad account (not yet created, Founder Action #9). **Not a TikTok organic post.**
Product: cat water fountain, $34.99.
Format family: **Product image plus text static**, second static in the bank.
Status: **built for the paused bank** (`ops/paid-readiness-dossier.md`), and additionally gated on supplier
media permission, below.

## Why this format is second and not first
Product image plus text carries an **8.75%** winner hit rate against text-only's **11.60%** in the same
dataset (Motion, 578,750 creatives, `docs/LEARNINGS.md` 2026-08-10), so it ranks below spec 1 on evidence.
It ranks above every video format available to us, and it is worth building because it tests a genuinely
different variable: whether seeing the object beats reading about it, at a moment when we cannot photograph
the object ourselves.

## Asset requirement, and the gate on it
| Asset | Exists? | Produced by |
|---|---|---|
| One clean product photograph of the exact SKU we sell | **Does not exist and cannot be produced by us.** No sample, no photograph | Supplier listing photo only |
| Written supplier permission to use it in paid advertising | **Does not exist** | `HUMAN:` message the supplier. Exact wording in `creative/scripts/day4-script-listing-walkthrough.md` |
| Confirmation the photo shows the SKU we actually ship | **Unverified** | Compare the photo against the exact listing being ordered from, once the supplier account exists (Founder Action #8) |
| Layout card | Must be produced, ~15 minutes | Canva MCP |

**Two hard gates before this spends a dollar.** No written permission, no ad. Photo not confirmed to be the
exact SKU we fulfil from, no ad. The second gate matters more in paid than in organic: an ad image that
does not match the delivered unit is the shape of a dispute, a chargeback and an ad-account review, and our
chargeback ratio is the thing `compliance-guard` protects hardest (`docs/PLAYBOOK.md` section 9).

Ask for the permission and the SKU confirmation in the same message. It is one supplier conversation, not
two.

## The ad

**Creative:** supplier product photograph on a plain background card, unaltered. Around it, three short
spec lines set in plain type, and a single small disclosure line at the bottom edge.

On-card text:
- "$34.99"
- "2.2 L. Plug-in pump. Plastic housing."
- "Ships 7-20 business days."
- Bottom edge, small but legible: "Supplier product photo."

**Primary text (the body):**
"One product, listed honestly.

A quiet plug-in fountain for cats who walk past a full bowl and drink from the tap instead. $34.99, ships
in 7 to 20 business days.

The photo is the supplier's. We are a new shop and our own unit is still in transit, so there is no review
from us yet. When there is one, it will be on our page whether it is good or not."

**Headline (3 variants, the test unit, body and CTA frozen):**
1. "$34.99. 7-20 day shipping. No review from us yet."
2. "A fountain for cats who prefer the tap."
3. "New shop. One product. Nothing hidden."

**Description:** "Full price and shipping window shown before checkout."

**CTA button:** "Shop now"

## Structure, budget and kill thresholds
Identical to `static-ad-1-text-only-still-bowl.md`: one campaign, one broad ad set, $10-15/day per ad, CTR
under 1% at $10 spend or 24h kills it, zero sales at $25 spend kills it.

## The read this spec is for
Run it against spec 1 in the same ad set, same body, same CTA, headline varied per the test-unit rule.
**The question it answers: does adding the object beat text alone for us, when the object is someone else's
photograph of it?** Our own numbers on that question, once they exist, supersede the external hit-rate
entry in `docs/LEARNINGS.md` per that file's own rule.

## Compliance notes
- **Never AI-generate, upscale, restyle or composite the product image.** An altered picture of a unit we
  have never held can drift from what ships, and the drift is invisible to us because we have no reference.
  Unaltered supplier photo, or no image.
- **No borrowed social proof.** The listing's 4.9 stars and 4,000+ sold count (`ops/sourcing-dossier.md`)
  are the supplier's numbers on the supplier's platform and do not appear on this card, in the body, or in
  the headline. We have zero reviews and the card says nothing about reviews.
- The "supplier product photo" disclosure stays on the card. It is small, it is honest, and it costs
  nothing.
- No quiet claim, no BPA-free claim, no leak or durability claim. The three spec lines are capacity, power
  type and housing material, each taken from the listing, and the material line drops entirely if the
  listing does not state it (`store/copy/product-cat-water-fountain.md` already treats BPA-free as an
  unpublishable placeholder).
- Confirm the photo carries no PETLIBRO, Catit or Pioneer Pet branding and is not a photo-rip of one of
  their SKUs before it goes into an ad (`compliance/bench-review-2026-08-11.md`, rank 1).
- No health, medical or income claims. No before/after. Shipping window matches
  `store/copy/policy-shipping.md` exactly.
- AIGC label: not applicable, and must stay not applicable. If any generated element ever enters this card,
  the card is refused rather than relabelled, per the first bullet.
