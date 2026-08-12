# MANDATE: $1,000/day net profit by Day 30

Read this immediately after `BOOTSTRAP.md`, before anything else. Every run is measured against one
number: **current daily net profit vs $1,000/day, with days remaining.** `challenge-lead` opens every
run with the gap and the single fastest lever to close it, then executes.

The ledger's standing tallies (`tracker/LEDGER.md`) track: current daily net, days remaining, gap to
$1,000/day. Update them every run.

## The backwards math

Definitions: contribution margin (CM) = (revenue − COGS − shipping − fulfillment − payment fees −
returns) / revenue, before ad spend. Break-even aMER = 1 / CM. Target aMER = 1.25 × break-even (25%
buffer). At target aMER, net = 25% of ad spend, so **$1,000/day net requires $4,000/day ad spend at any
margin**; margin sets how much revenue and how many orders that spend must buy. AOV planning figure:
$35 (bench rank 1 retails $34.99; the quantity-break table lifts it).

Paid-only worst case:

| CM | Break-even aMER | Target aMER | Ad spend/day | Revenue/day | Orders/day @ $35 AOV | Max CPA |
|---|---|---|---|---|---|---|
| 30% | 3.33 | 4.17 | $4,000 | $16,667 | 477 | $8.39 |
| 40% | 2.50 | 3.13 | $4,000 | $12,500 | 358 | $11.17 |
| 50% | 2.00 | 2.50 | $4,000 | $10,000 | 286 | $13.99 |

Organic-only bound: an organic order carries no CAC, so net per order = AOV × CM. At $35 AOV that is
$10.50 / $14.00 / $17.50 per order, so $1,000/day = 95 / 71 / 57 orders/day at 30/40/50% CM. Reality is
a blend: every organic order reduces the paid revenue requirement dollar for dollar.

Bench consistency check: confirmed bench products carry 63-71% CM at worst-case landed cost
(`tracker/LEDGER.md`), so plan on the 50% row and treat the extra margin as buffer. Full margin
mechanics: `docs/OPERATOR-PLAYBOOK.md` section 5.

## Creative volume floor: 3 net-new creatives per DAY

5-8% of ads become winners; 20 ads yield 1-1.6 winners (Motion, 578,750 creatives; see
`docs/OPERATOR-PLAYBOOK.md` section 3). Fatigue is 2-4 weeks and ads peak in week one, so scaling to
$1,000/day needs at least one fresh winner per week, continuously, plus 4-6 variations per winner.

Arithmetic: 3/day = 21/week × 5-8% = **1.05-1.68 expected winners/week**. The old 5/week floor yields
0.25-0.4 winners/week, one winner per 2.5-4 weeks: too slow for a 30-day target. So:

- **Floor: 3 net-new creatives/day (21/week). Target: 5/day.** `creative-director` reports the shipped
  count every run; `content-engine` already produces 3-5 videos/day once keyed.
- Test unit: one concept × 3 hooks, body and CTA frozen. Judge on hook rate (>30%) and hold rate (>10%).
- Judge every creative inside week one. Cut a winner into 4-6 variations immediately.

## Daily scaling ladder

Launch structure (per `docs/OPERATOR-PLAYBOOK.md` section 4): Meta = one sales campaign, one broad ad
set, 3-5 genuinely different concepts, $10-15/day per ad. TikTok = one campaign (> $50/day) / one ad
group (> $20/day), 3-5 creatives, prepay funded.

**Budget step (up):**
- Trigger: 48h at or above target aMER (1.25 × break-even) with CPA within 25% of baseline.
- Step size: +20%. Max one step per 24h. Never a budget change on the same day as any other edit.
- Winner graduation: an ad at 10× the account's median single-ad spend duplicates into the scale
  campaign by post ID; the original keeps running.

**Instant kill (paid), faster clocks:**
- Creative: CTR < 1% or hook rate < 20% at $10 spend or 24h, whichever first. Kill, replace from the bank.
- Ad: zero sales at $25 spend or 2× unit contribution (whichever first), or ROAS < 1.0 at 48h. Kill.
- Rollback: CPA +25% over pre-step baseline held 72h. Revert to prior budget.

**Organic product clock (unchanged, the slow clock):** judge hooks in 24-72h, judge the product only
after ~2 weeks of full posting volume with zero traction and zero buy-intent comments. Kill triggers
`docs/NO-STALL.md` P4: promote bench rank 1 the same run.

## Full-channel from day one

Budget gates a channel's LAUNCH, never its PREPARATION. All channels are built during warm-up
(`docs/WARM-UP.md`) and launch the hour their gate clears:

| Channel | Prepared during warm-up | Gate | Launch action |
|---|---|---|---|
| Organic TikTok | Track A protocol, content bank queued | Track A Day 1 | 2 posts/day, 3 from Day 4 |
| Meta Ads | Track E: account + pixel firing, campaign built PAUSED | $150 collected revenue (`docs/BUDGET-RULES.md`) | Founder unpauses |
| Google Shopping/PMax | Track E: Merchant Center feed + campaign PAUSED | Same $150 trigger | Founder unpauses |
| Email flows | Track C domain authenticated; Shopify Email abandoned-checkout + welcome flows built | Store live | Flows on from first visitor |

At the $150 trigger, launch whichever paid platform's pixel/tag has more accumulated events; tie goes
to Meta.

Cash-flow constraint, stated once: paid spend precedes processor payouts (~3 business day lag plus a
possible reserve on a new account), so scale is funded by collected revenue per the `docs/BUDGET-RULES.md`
spend trigger.

## Checkpoints

Daily net-profit checkpoints live in `docs/30-DAY-PLAN.md`. Behind a checkpoint, pull levers in this
order: (1) double creative output on the winning hook family, (2) launch the next prepared channel,
(3) step budget per the ladder, (4) kill-and-promote bench rank 1.
