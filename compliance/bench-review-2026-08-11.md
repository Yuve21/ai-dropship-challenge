# Compliance review: product bench, 2026-08-11

Reviewer: compliance-guard. Scope: the four ranked bench items in `tracker/LEDGER.md` as of 2026-08-10.
Checked against `docs/PLAYBOOK.md` section 9 and the fuller checklist in
`.claude/agents/compliance-guard.md`. Rank 5 is still being researched by product-scout tonight and is
not in this file. It needs the same review once chosen. Do not let it launch unreviewed just because it
missed this pass.

Format per item: verdict, the specific concern, the rule it's checked against, and what has to be true
before it ships or gets an ad spent on it.

---

## Rank 1: Cat water fountain (ABS/plastic pump, quiet), $34.99

**Verdict: PASS, conditional.**

- **Trademark/counterfeit.** Multiple established competitors (PETLIBRO, Catit, Pioneer Pet) in this
  category is not itself a red flag, per `docs/PLAYBOOK.md` section 3, established competition validates
  demand. The risk is narrower than "same category": don't source a listing whose housing shape, button
  layout, or packaging is a close copy of a specific PETLIBRO/Catit/Pioneer Pet SKU. Generic circular
  reservoir-and-pump fountains are a commodity form factor with many independent generic sellers, so a
  plain unbranded version clears this. **Fix before sourcing:** when picking a supplier listing, visually
  compare it against current PETLIBRO/Catit/Pioneer Pet product photos and reject any listing that is a
  near-identical match, not just "also a cat fountain."
- **Category.** Pet accessory, not restricted. Pass.
- **Honest shipping.** Small, light, non-perishable plastic item. A real delivery window can be stated
  honestly regardless of whether it ships from China or a US-based generic supplier; nothing about this
  item requires hiding shipping time. **Fix:** whatever the actual AliExpress/agent lead time is, state
  that number on the shipping policy page and at checkout, not a faster number. FTC MITOR (16 CFR 435,
  <https://www.ftc.gov/business-guidance/resources/mail-internet-or-telephone-order-merchandise-rule>)
  requires shipping or a delay notice within the promised window or 30 days.
- **Ad policy.** "Quiet," "circulates water," "encourages cats to drink more" are fine as general product
  claims. The line not to cross: no implied veterinary/medical claim like "prevents kidney disease,"
  "prevents UTIs," or "vet recommended" unless that's literally true and documented. Pet-health claims sit
  in the same ad-policy bucket as human health claims on Meta/TikTok (personal health/wellness claims
  policy) and can trigger disapprovals or account flags even though the product itself is not restricted.
  **Fix:** keep marketing language to hydration/behavior ("cats prefer moving water") and product features
  (quiet pump, filter, capacity), not disease prevention.
- **Dispute/shipping-weight risk.** Low. Small, light, not fragile in the glass/ceramic sense (ABS
  plastic), but it is a water-handling electrical device: pump failure and leaking are the two most common
  return reasons for this category. Note this as an ops item (sample-order the unit before launch, per
  section 8's "order a sample under a plain name first"), not a launch blocker.

---

## Rank 2: Rechargeable heated eye mask (USB warm-compress), $28.99-29.99

**Verdict: PASS, conditional, with an ad-copy constraint that has to be enforced before any ad is written, not after.**

- **Trademark/counterfeit.** No named competitor-copy risk flagged for this item (unlike ranks 3 and 4).
  Pass, standard sourcing hygiene applies (no logos, no packaging that copies a specific brand).
- **Category.** This is the item most likely to drift into a restricted category if worded wrong. As a
  comfort/relaxation heating accessory (same bucket as a heating pad or a weighted eye pillow) it is not a
  medical device and not restricted. It becomes a problem the moment marketing frames it as treating a
  diagnosed condition. **This stays a comfort product, not a medical one, and that has to be a hard rule
  the copywriter is given up front, not caught after an ad gets rejected.**
- **Honest shipping.** Small electronics item, standard window can be stated honestly. One added wrinkle:
  it's rechargeable, meaning it has a lithium battery. Lithium batteries (UN3480/UN3481) have their own
  air-shipping declaration rules; a supplier that ships it mislabeled to dodge battery restrictions is a
  customs/compliance problem independent of the marketing-honesty question, and it can also just make the
  package slower or get it held at customs, which is itself a shipping-window promise you'd then be
  breaking. **Fix:** confirm with the supplier how they ship the battery (declared lithium-ion, correct
  customs paperwork) before setting the promised delivery window, not after.
- **Ad policy — the specific risk called out in the brief.** "Warm compress" is a phrase borrowed directly
  from optometrist-recommended dry-eye treatment protocol. That makes it very easy for ad copy to drift
  from "feels relaxing" into an implied treatment claim. **Hard no on:** "treats dry eye," "relieves
  meibomian gland dysfunction," "doctor recommended for dry eye," "reduces under-eye bags/wrinkles"
  (also a before/after claim risk), "relieves migraines/sinus pressure" as a medical claim. **What's
  fine:** "soothing warmth," "relaxation," "self-care," "unwind after a long day," describing the heat
  function and battery life as features. This is a Meta/TikTok personal-health-claims policy issue as much
  as an FTC one (Meta Advertising Standards, health & wellness section:
  <https://transparency.meta.com/policies/ad-standards/sensitive-topics/personal-health/>; TikTok's
  equivalent is in its Advertising Policies "Health & wellness" section,
  <https://ads.tiktok.com/help/article/prohibited-restricted-content>), and the fastest way this product
  gets an ad account throttled. **Fix before any ad ships:** copywriter gets an explicit banned-phrase
  list for this SKU, and compliance-guard reviews the first batch of ad copy before it spends, not after a
  rejection.

---

## Rank 3: Modular magnetic phone camera lens clip kit (macro/wide/fisheye), $29.99

**Verdict: PASS, conditional, and the enforcement point is at sourcing, before the supplier is picked.**

- **Trademark/counterfeit — the specific ask: is this checkable at sourcing?** Partially, and the honest
  limit has to be stated, not glossed over. What IS checkable and must be checked before committing budget
  to a supplier: (1) the supplier listing's title, description and photos don't use "KEYWING" or "MIAO
  LAB" anywhere, (2) the physical product and its packaging carry no KEYWING/MIAO LAB branding or logos,
  (3) a side-by-side visual comparison against current KEYWING/MIAO LAB product photos to catch a listing
  that's a straight photo-rip or packaging clone. What is NOT fully checkable without legal review: whether
  a specific clip mechanism or lens-housing shape infringes a design patent either brand holds, since that
  requires a patent search, not a visual check. The clip-on multi-lens kit format itself is a widely
  genericized category with many independent generic sellers, so an unbranded generic version is a
  reasonable sourcing target, but this file is not a substitute for an actual patent search if this product
  moves past small-budget testing into real spend. **Fix:** run the three-point visual/branding check above
  on the actual supplier listing before ordering a sample, order the sample under a plain name (section 8),
  and never let ad copy name KEYWING or MIAO LAB even for comparison ("better than KEYWING") — naming a
  competitor's brand in ad copy is its own trademark-use risk, separate from the sourcing question.
- **Category.** Phone accessory, not restricted. Pass.
- **Honest shipping.** Small, light, not fragile in a way that changes the calculus. Standard honest
  window applies, nothing here requires hiding shipping time.
- **Ad policy.** No health/medical angle available for this product, low risk. The main wording risk is
  photography-quality overclaims ("professional DSLR-quality photos from your phone") — keep this to
  "enhance your phone photos" / "try macro, wide, fisheye" rather than quality-equivalence claims that
  read as deceptive/misleading under general FTC truth-in-advertising rules
  (<https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business>), plus the
  no-competitor-naming rule above.

---

## Rank 4: Mini handheld pet deshedding/grooming vacuum kit, $59.99

**Verdict: PASS, conditional, and this is the item with the most open conditions of the four — treat it as the highest-risk pass on the bench, consistent with the ledger's own "thin margin cushion" flag.**

- **Trademark/counterfeit.** Same sourcing-stage check as rank 3 applies (no branded names/logos from
  Geoorood, Airbot, LMVVC, Neakasa, oneisall in listing or on the unit; visual comparison against their
  current product photos before ordering a sample). The residual risk is higher here than for the lens
  kit: this is an electromechanical product (motor, brush roller, battery, housing), and that combination
  is more likely to carry an actual design patent on a specific brand's brush/canister shape than a passive
  clip-on lens kit is. `tracker/LEDGER.md` already notes every strong real-world demand example found for
  this product was a named branded listing, meaning the generic-sourcing requirement is doing real work
  here, not a formality. **Fix:** same three-point check as rank 3, applied more strictly, and if the
  cheapest available generic supplier's unit is visually indistinguishable from one of the five named
  brands' actual product (not just "same general shape as a handheld vacuum"), that specific supplier is a
  no, find another one.
- **Category.** Pet grooming device, not restricted. Pass. Watch the ad-copy allergy angle below.
- **Honest shipping.** Passable, but this is the item flagged in the brief for a reason. It's heavier and
  bulkier than the other three (motor + battery + canister housing), which means: (1) higher
  damage-in-transit risk shipping internationally, meaning a higher expected DOA/defective-on-arrival rate
  than the other three items, which converts directly into more disputes and returns; (2) a
  lithium-ion battery again (same UN3480/3481 declared-shipping requirement as the eye mask, larger
  battery here, larger the same issue); (3) it's the item most likely to actually need a longer or less
  certain shipping window because of the above, which is fine as long as that longer window is the one
  that's promised, not a shorter one. **This does not fail the honest-shipping check, but it's the one
  item on the bench where "honest" means "the promised window has to account for higher breakage/reship
  risk," not just raw transit days.** **Fix:** get the supplier's actual DOA/defect rate if available, add
  buffer to the promised window rather than promising the theoretical best case, and treat this SKU's
  chargeback ratio as the one to watch most closely per the payout-hold section of
  `.claude/agents/compliance-guard.md`.
- **Ad policy.** Avoid pet-allergy medical framing ("eliminates pet dander allergies," "stops allergic
  reactions") — that's a health claim about a human condition attached to a pet product, same bucket as
  the eye mask risk. Fine: "less fur on your furniture," "faster cleanup," "quieter than a full-size
  vacuum."
- **Dispute/return risk — explicit per the brief's ask.** This is the item to flag hardest on this axis.
  Higher unit cost ($59.99, top of the bench's price band) means a higher-stakes dispute if it arrives
  broken, and the ledger already notes the margin cushion is thinner here than on the other three because
  landed cost is close to the ceiling. A DOA unit on this product costs more, in both refund dollars and
  chargeback-ratio impact, than a DOA unit on the $29.99 lens kit. **Recommendation, not a hard block:**
  this is a reasonable item to keep on the bench, but if ad spend has to be rationed across the bench, this
  is the item where a bad supplier pick does the most damage, so verify the supplier and get a sample
  in-hand before this one gets any paid traffic.

---

## Rank 5 — not reviewed yet

Product-scout is still researching a fifth candidate as of this writing. It has not been chosen, so
there is nothing here to review. **This is a placeholder, not a pass.** Whoever picks rank 5 needs to
route it back through this same four-part check (trademark/counterfeit, category, honest shipping, ad
policy) plus the dispute/shipping-weight angle before it goes on the bench for real, the same as the four
items above. Do not treat "it wasn't flagged in this file" as clearance.

---

## Summary table

| Rank | Item | Verdict | Sharpest open risk |
|---|---|---|---|
| 1 | Cat water fountain | PASS, conditional | Don't clone a specific PETLIBRO/Catit/Pioneer Pet SKU's look; no disease-prevention ad claims |
| 2 | Heated eye mask | PASS, conditional | "Warm compress" language must stay comfort/relaxation, never dry-eye/medical treatment framing |
| 3 | Magnetic lens clip kit | PASS, conditional | Sourcing-stage brand/logo check against KEYWING and MIAO LAB is checkable and required; never name them in ads |
| 4 | Pet deshedding vacuum | PASS, conditional | Highest dispute/damage risk of the four (heavier, batteried, thinnest margin cushion); sourcing-stage brand check against all five named competitors required |
| 5 | (not yet chosen) | NOT REVIEWED | Route through this same checklist once product-scout picks it |

No item on the bench is a hard block. All four fail-safe on the trademark question specifically at the
sourcing/supplier-selection step, not at the "is this category okay" step, so the fix in every case is
procedural (check before you buy the sample, check before the ad copy ships) rather than a reason to drop
the product.
