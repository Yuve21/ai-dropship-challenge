# Budget Rules: the money discipline

The mechanics behind rule 4 of `docs/PLAYBOOK.md` "Non-negotiable (account survival)".
`offer-economist` owns this file; `challenge-lead` enforces it; every session updates the ledger.

## How the cap works
- Track out-of-pocket as a single running number in `tracker/LEDGER.md` (`out_of_pocket_spent`). At the cap,
  no more founder money goes in, full stop.
- **Revenue is not out-of-pocket.** Reinvest customer money freely (ads, stock, tools); it does not count
  against the $100. Example: put in $80, earn $800, spend $600 on ads, out-of-pocket is still $80.
- If a plan needs more than $100 of founder money, the plan is wrong for this challenge. Find a cheaper path
  or wait for revenue.
- **Waiting for revenue is not idling.** Per `docs/NO-STALL.md` P7 the Paid Readiness Dossier is built
  during the organic phase so the first earned dollar spends within the hour: campaign structure,
  platform-minimum budget, break-even ROAS from real margin, pre-written kill thresholds, pixel event state.
- **Spend trigger: at least $150 collected revenue with the float intact.** That is what unlocks Day 6 of
  the ladder in `docs/30-DAY-PLAN.md`, so earning it is the binding constraint on the whole target.

## Allocation of the first $100 (organic-first)
- **Store standup: ~$2-15.** Shopify $1/mo promo (first 3 months), domain ~$10-12/yr. DSers free, free Dawn
  theme, native reviews. No paid apps and no spy tools at start (single exception: the Dropship.io 7-day
  free trial, `docs/PLAYBOOK.md` section 4, cost $0).
- **Product sample(s): ~$15-30.** Buy the lead product and maybe a backup, to verify quality and film real
  UGC. Never advertise a product you have not held.
- **Fulfillment float: ~$30-50 held in reserve.** This is the cash-flow trap: organic orders must be paid to
  the supplier at dispatch while the processor holds your payout ~3 days and may reserve a portion. The
  float fronts your first orders so you never fail to fulfil.
- **First paid test: remainder plus early revenue.** Only after a product proves organically.

## Reinvestment ladder (earned revenue only)
1. First profits: replenish the fulfillment float, then faster-shipping SKUs.
2. A small paid test on the proven winner.
3. Scale paid on winners (<=20% per step, max one step per 24h), more creative production, real branding.
4. Only once cash flow is comfortable: a paid research subscription or a private sourcing agent.

## Tracking (every session)
Log, dated: money in (founder vs revenue), money out (line-item), `out_of_pocket_spent` running total,
per-product test result, every kill/scale decision with its reason, running gross and net, and the gap to
$1,000/day net. Mark estimated vs dashboard-confirmed.

## Reserve and hold awareness
Assume a chunk of revenue is untouchable for up to 90 days on a new store. Do not spend money you only have
on paper. Keep the float. Ramp spend slowly to avoid a larger reserve or a processor review. Documented
Shopify examples are "$1,000 for 120 days" or "10% for 120 days"; the widely quoted 5-15% band is
merchant-reported, not policy (`docs/LEARNINGS.md`, *External evidence*).
