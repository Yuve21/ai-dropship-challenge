# No-Sample Copy Audit, 2026-08-12

Run by `challenge-lead` adopting `compliance-guard`, after the founder decided on 2026-08-12 that **no
product sample will be ordered** (`tracker/LEDGER.md`, decision log).

**Why this audit was necessary.** `store/copy/` was written on 2026-08-11, when the plan still assumed a
sample would be held before anything went live. Several claims were written in the voice of someone who
had used the product. Nobody has, and under the current decision nobody will before a customer does. This
audit finds every such claim and either attributes it or cuts it.

**The standard applied, stated once.** Attribution, not confession. Stating a manufacturer specification
**with attribution** ("the manufacturer lists it as a quiet-running pump") is honest: it is a true
statement about what the supplier published. Stating the same specification **flatly** ("genuinely quiet")
asserts we verified it. That is the line, and it is the only line this audit enforces. This is the same
treatment already applied to `creative/scripts/day1-hook-bank.md` on 2026-08-12.

**Scope:** `store/copy/product-cat-water-fountain.md` and all five policy pages.
**Also swept:** house-style em dashes, and cross-file contradictions.

---

## Summary

| File | Verdict | Changes |
|---|---|---|
| `product-cat-water-fountain.md` | **Substantially rewritten** | 7 claims changed, 1 factual contradiction fixed, 4 em dashes removed |
| `policy-shipping.md` | **Clean, no changes** | Already honest, and it was the file that exposed the product page's error |
| `policy-refund-returns.md` | **Clean, no changes** | 0 unsupportable claims |
| `policy-terms.md` | **Clean, no changes** | Already carries an explicit no-medical-claims clause |
| `policy-contact.md` | **Clean, no changes** | 0 unsupportable claims |
| `policy-privacy.md` | **2 em dashes fixed**, content clean | Security language was already correctly hedged |

**The policy pages held up well and needed no claim changes.** That is worth recording rather than
glossing: whoever wrote them on 2026-08-11 was already disciplined about not over-promising, and the
audit's whole yield is concentrated in the product page, which is exactly where selling pressure lives.

---

## The one finding that was not a soft claim: a factual contradiction between two live pages

**Product page said:** "Ships from **our warehouse partner**."
**Shipping policy said:** items "ship directly from fulfillment centers **rather than a local warehouse**."

These are two pages of the same store contradicting each other on a material fact, and a customer
comparing them would catch it. **The product page was the wrong one.** We have no warehouse and no
warehouse partner; the order ships from an AliExpress supplier.

This is more serious than the tone problems below. "Our warehouse" creates exactly the impression a
dropshipped store must not create, it is the kind of statement that turns an ordinary late-delivery
complaint into a "not as described" dispute, and disputes are the thing our own docs care most about
avoiding on a new processor account. Corrected to "Ships directly from our supplier, not from a local
warehouse", which now matches the shipping policy.

Per `docs/LEARNINGS.md` (Baymard), the shipping ETA belongs **on the product page**, so the line stays.
It is the wording that was wrong, not its presence.

---

## Claim-by-claim: `product-cat-water-fountain.md`

### Changed

**1. Title: "Quiet Flowing Water Fountain for Cats Who Won't Drink Enough"**
Two problems. "Quiet" is a performance claim about a unit nobody has heard, and a title has no room to
attribute it. "For Cats Who Won't Drink Enough" frames the product against a hydration deficit, which
drifts toward the health framing the rest of the page carefully avoids.
**Now:** "Cat Water Fountain, Circulating Pump, 2.2L".

**2. Alt title: "Quiet Pump Cat Water Fountain, Keeps Water Moving, Keeps Cats Interested"**
Same "quiet" problem, plus an em dash.
**Now:** "Plug-In Cat Water Fountain, Keeps Water Moving".

**3. "Cats are naturally drawn to moving water. It's a well-known trait in cat behavior."**
Stated as a universal behavioural fact with no citation. The tap observation immediately after carries the
same point without needing the assertion.
**Now:** "Cats are **often** drawn to moving water."

**4. "This fountain uses a **quiet pump**..."**
Unverified performance claim in body copy.
**Now:** "a circulating pump".

**5. "**Genuinely quiet.** Designed to run in the background without the whirring or buzzing you get from
cheaper pumps. Fine for bedrooms and quiet apartments."**
**The least defensible line on the page, and the reason this audit was worth running.** Three separate
first-hand assertions stacked: "genuinely" claims verification, the comparison to cheaper pumps implies we
have heard several units, and "fine for bedrooms and quiet apartments" is a recommendation from
experience. We have heard none of them.
**Now:** "The manufacturer lists it as a quiet-running pump. That is the supplier's specification and not
something we have measured ourselves", with a placeholder to quote a decibel figure if the listing has one.

**6. "Easy to take apart and clean. No tools needed. Rinse the pump, wipe the basin, back together in
**under a minute**."**
A timed claim about an operation nobody has performed.
**Now:** "Designed to come apart for cleaning without tools, per the manufacturer's description." Timing cut.

**7. "Simple setup. Fill, plug in, done. No app, no complicated parts."**
Mild, but "fill, plug in, done" is still an experience report.
**Now:** "Plug-in operation. No app and no pairing step." Both facts follow from the product category.

### Left unchanged, deliberately

- **The BPA-free bullet.** Already correctly marked as a placeholder requiring a real supplier spec sheet.
  The original author got this right; no change needed.
- **The reviews slot.** Already correctly forbids placeholder review text. **Strengthened** with an
  explicit prohibition on borrowing the supplier listing's 4.9 stars and 4,000+ sold count, which are the
  supplier's numbers for orders we did not fulfil. That was implied before and is now stated.
- **The no-health-claims note.** Already correct and well reasoned.
- **The quantity-break copy.** Describes a household situation, not a product property. No claim to check.
- **The CTA.** Already free of countdowns and false scarcity.

---

## What this audit did NOT do, and what remains open

- **It did not remove the product's claims, it re-sourced them.** Everything the supplier publishes can
  still be said, with attribution. Nothing about the offer got weaker; it got honest about provenance.
- **The capacity figure (2.2L) now in the title comes from `ops/sourcing-dossier.md` Option A** and is
  therefore only correct if that SKU is the one ordered. Flagged in the file itself: **if a different SKU
  is ordered, the title must be corrected in the same session.**
- **`ops/sourcing-dossier.md` still has no record of what imagery the listings carry**, because item pages
  hit a login wall. That gates the product photo, static ad 2, and the Merchant Center feed's
  `image_link`. Unchanged by this audit and still outstanding.
- **Promotion path, for later.** If a unit is ever held, each attributed claim can be promoted to a
  verified one **individually**, each with a note recording what was actually checked. Bulk-promoting them
  because "we have one now" would reintroduce the same defect in one step.

## The standing rule this audit establishes

**Any copy written before 2026-08-12 predates the no-sample decision and must be read with that in mind.**
Files audited and cleared on this date: the six above, plus `creative/scripts/day1-hook-bank.md` (amended
separately the same day). Any copy written **after** this date is authored under the no-sample constraint
and should already comply. If a future run finds an experience-based claim in new copy, that is a defect
in the writing run, not a leftover, and belongs in `docs/LEARNINGS.md` under *Anti-patterns*.
