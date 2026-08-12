# The 30-Day Plan: $1,000/day net by Day 30

Target and backwards math: `docs/MANDATE.md`. This file is the sequence and the daily checkpoints.
`HUMAN:` marks an action only the founder can do (open an account, spend money, film, ship). Adjust dates
to the real start; log every day in `tracker/LEDGER.md`.

## Phase 0: warm-up, the seven days before Day 1

Run `docs/WARM-UP.md` -> "The Challenge Warm-Up Protocol v1" day by day, exactly as written. Day -7 through
Day -1 (the protocol has no Day 0: Day -1 is followed by Day 1). $0, time-based only, so it runs before
product selection and in parallel with the store build. Every day it slips is a day that cannot be bought
back. **The gate is founder-controlled:** `node cli.js warmup skip` turns it off and logs the decision to
the ledger; then Day 1 is today and this phase collapses to nothing.

Four tracks, one line each (`docs/WARM-UP.md` holds the exact counts):
- **Track A, TikTok.** `HUMAN:` Day -7 create ONE account per real device, fully completed profile, 20 min
  of feed time, zero engagement. Days -6 and -5 consume-only, 20-30 min, 10 likes / 3 saves / 5 follows / 2
  real comments. Days -4 to -2 one native non-promotional post per day. Day -1 one product-in-frame post,
  still no pitch. Day 1 the real cadence starts at 2 posts/day, 3 from Day 4. Start at Day -14 if the
  account will carry Spark Ads. Recurring `HUMAN:` habit: ~20 min/day during warm-up, 5-10 min/day forever
  after. The posting API cannot do it.
- **Track B, ad account and pixel.** `AGENT:` install pixel/CAPI Day -7 at **$0 spend**, confirm all four
  events fire, so the organic phase warms it free. First spend from earned revenue at the platform
  minimum, then no edits for 72h, then +20% steps.
- **Track C, domain.** `HUMAN:` Day -7 buy it and publish SPF (under the 10-lookup limit) + DKIM 2048 +
  DMARC `p=none` the same day. Day -6 verify headers pass all three. Transactional mail only.
- **Track D, store and processor.** `HUMAN:` Day -7 finish payments verification to 100% the same day
  (pending documents are themselves a hold trigger). Policy pages and branding live before money arrives.
  Week 1: one change at a time, at most one per 72h.
- **Track E, Meta and Google.** Both accounts created at $0, both tags verified firing, both campaigns
  built and PAUSED, ready to launch the hour the spend trigger clears.

**The gate (while enabled):** no product content and no CTA/link posts until Track A reaches Day 1. It
stops the gated action, never the run (`docs/NO-STALL.md`).

## Days 1-5: organic validation, and earn the paid gate

Goal: prove one product pulls, and collect the **$150 of revenue that unlocks paid spend**
(`docs/BUDGET-RULES.md`). This window is the binding constraint on the whole target: paid cannot start
before it clears, and every day it slips shortens the compounding runway on the ladder below.

- `product-scout`: bench at 5 ranked candidates, re-scored weekly. **Time the single Dropship.io 7-day
  trial to the week the bench is finalised**, pull measured revenue for every candidate and its top
  competitors, date each number in the bench table, cancel (`docs/PLAYBOOK.md` section 4).
- `offer-economist`: contribution margin per order and break-even aMER for the top 3 before anything ships.
  Reject under 30% net margin.
- `store-architect` + `copywriter`: store live, five policy pages, the winning product page, quantity-break
  table on the product page, free-shipping threshold set.
- `content-engine`: 3 net-new creatives/day minimum from Day 1, auto-posted 2/day then 3/day from Day 4.
- `growth-operator`: daily read on hooks. Judge hooks in 24-72h, judge the product in weeks.
- Email flows live from the first visitor: **abandoned checkout plus welcome, nothing else**
  (`docs/OPERATOR-PLAYBOOK.md` section 6). Shopify Email, not Klaviyo, at this budget.
- **Commit, do not churn.** One product live at a time. Pivot to bench rank 1 only after ~2 weeks of strong
  volume across many hooks yields zero traction and zero buy-intent comments (`docs/NO-STALL.md` P4).

## Day 6 onward: the scaling ladder, and where the $4,000/day comes from

At target aMER (1.25x break-even) net is 25% of ad spend, so **$1,000/day net needs $4,000/day of ad
spend**. The ladder's maximum safe step is **+20%, once per 24h**. From a $50/day launch on Day 6:

```
spend(d)   = $50 x 1.20^(d - 6)
net(d)     = 0.25 x spend(d)
revenue(d) = 2.5  x spend(d)          (at 50% CM, target aMER 2.50)
```

$50 x 1.20^24 = **$3,975 on Day 30, net $994.** So the 30-day target is the maximum safe step taken every
single day from Day 6, and even then the paid ladder lands 0.6% short: **organic supplies the remainder,
which is why the organic cadence never stops when paid starts.** There is no slack. Every missed step is
recovered by creative volume or by launching the second prepared channel, never by a bigger jump (a step
above 20% risks a learning reset, and a blown week is terminal at our size).

**Checkpoints.** Behind one, pull levers in this order: (1) double creative output on the winning hook
family, (2) launch the next prepared channel (Google Shopping/PMax, already built and paused), (3) step
budget per the ladder, (4) kill and promote bench rank 1.

| Day | Ad spend/day | Revenue/day | **Net/day** | Milestone |
|---|---|---|---|---|
| 1 | $0 | first sales | ~$0 | Organic cadence starts, 2 posts/day |
| 4 | $0 | - | - | 3 posts/day, hold |
| 5 | $0 | **$150 cumulative** | - | Paid gate clears. `HUMAN:` approve first spend |
| 6 | $50 | $125 | $13 | Meta unpauses (or whichever tag has more events) |
| 9 | $86 | $216 | $22 | 72h edit freeze ends, first budget step |
| 12 | $149 | $373 | $37 | First winner expected (21 creatives/wk at 5-8%) |
| 15 | $258 | $645 | $65 | Second channel live. 4-6 variations per winner |
| 18 | $446 | $1,114 | $111 | Winner graduates to the scale campaign by post ID |
| 21 | $770 | $1,926 | $193 | Third fresh winner. Bench re-scored |
| 24 | $1,331 | $3,327 | $333 | Float check: payouts lag spend by ~3 business days |
| 27 | $2,300 | $5,751 | $575 | Reserve watch. One change at a time |
| 30 | $3,975 | $9,937 | **$994 paid + organic** | Day-30 readout |

Revenue and net assume the 50% CM row of `docs/MANDATE.md`; the confirmed bench carries 63-71% CM at
worst-case landed cost, so treat the extra margin as buffer. Every organic order carries no CAC and reduces
the paid revenue requirement dollar for dollar: at $35 AOV and 50% CM, 57 organic orders/day would cover
the whole target with no ad spend at all.

## Creative volume: the rate that feeds the ladder

**Floor 3 net-new creatives/day (21/week). Target 5/day (35/week).** Reported by `creative-director` every
run, shipped count not written count.

Arithmetic (`docs/OPERATOR-PLAYBOOK.md` section 3): 5-8% of ads become winners, and fatigue is 2-4 weeks
with ads peaking in week one, so the ladder needs at least one fresh winner per week, continuously.
- 21/week x 5-8% = **1.05 to 1.68 expected winners/week.** Clears the requirement.
- 35/week against Common Thread Collective's stricter 3.5% outlier rate (`ads = outliers / 0.035`) = **1.2
  outliers/week.** That is why the target is 5/day, not 3.
- The old 5/week floor: 0.25 to 0.4 winners/week, one winner every 2.5 to 4 weeks. Too slow for 30 days.

Test unit: one concept x 3 hooks, body and CTA frozen. Judge on hook rate (>30%) and hold rate (>10%),
inside week one. Cut a winner into 4-6 variations immediately.

## Kill clocks

- **Creative:** CTR < 1% or hook rate < 20% at $10 spend or 24h, whichever first. Kill, replace from the bank.
- **Ad:** zero sales at $25 spend or 2x unit contribution (whichever first), or ROAS < 1.0 at 48h. Kill.
- **Budget rollback:** CPA +25% over the pre-step baseline held 72h. Revert to the prior budget.
- **Organic product (the slow clock, unchanged):** judge hooks in 24-72h; judge the product only after ~2
  weeks of full posting volume with zero traction and zero buy-intent comments.

## Every day

The loop closes with **"what did we learn today, and what changes tomorrow"** in `docs/LEARNINGS.md`, with
the evidence. A day that produced no new learning is recorded as exactly that. `challenge-lead` opens every
run with the gap to $1,000/day net and the single fastest lever to close it.

## Day-30 readout

`challenge-lead` writes the scorecard to the ledger: net profit on Day 30 against $1,000, out-of-pocket
spent (must be <= $100), gross revenue, the winning product, which checkpoint the run first fell behind and
what closed or failed to close the gap. Report measured reality, never a projection. The day-30 knowledge
base in `docs/LEARNINGS.md` is part of the deliverable: it is the asset that carries into month two.
