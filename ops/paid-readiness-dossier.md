# Paid Readiness Dossier

Status: prepared, nothing spent, nothing unpaused, no ad account touched. This is `docs/NO-STALL.md`
procedure P7, executed. Purpose stated once: the hour collected revenue clears the **$150 spend trigger**
(`docs/BUDGET-RULES.md`) with the fulfilment float intact, the founder should be able to read this file
top to bottom and press go with zero new thinking. Every number below is either **DOCUMENTED** (a platform
fact, source named), **OUR CALL** (a decision we made and can defend, labelled `HYPOTHESIS` per
`docs/LEARNINGS.md`), or **MODELLED** (our own arithmetic on real bench numbers, not yet observed).
Nothing here is a result. No account has been created for Google Ads or Meta Business Manager as of this
writing; Track E (`docs/WARM-UP.md`) has not started (`tracker/LEDGER.md`, Track B: pixel/CAPI installed
NO). This dossier assumes Track E completes (both accounts created at $0, both tags verified firing, both
campaigns built and PAUSED) before the trigger fires, and gives the exact build for that.

No em dashes in this file, by house rule. Plain voice, no hype.

**Read this alongside:** `docs/MANDATE.md` (kill clocks, backwards math), `docs/BUDGET-RULES.md` (the
trigger), `docs/WARM-UP.md` Track B and Track E, `docs/OPERATOR-PLAYBOOK.md` sections 4-5 (structure,
contribution margin), `tracker/LEDGER.md` Product bench block (the real numbers this file computes from).

---

## 1. The launch decision rule

**Spend trigger, exact** (`docs/BUDGET-RULES.md`, OUR CALL):
- Collected revenue >= **$150.00** (gross, cumulative, dashboard-confirmed in Shopify Payments, not
  projected).
- Fulfilment float intact: the ~$30-50 reserve held per `docs/BUDGET-RULES.md` is not the money being
  spent. Spending float money to hit $150 faster defeats the reason the float exists.
- Pixel/tag meets the Track B pre-spend target (Section 8 below), or the cheap-objective seed plan in
  Section 8 is already running.
- Below all three: the money is worth more as float than as a test that cannot conclude. Do not launch
  early to "not waste the momentum." That is exactly the spike a new processor account is watching for
  (`docs/WARM-UP.md` Track D).

**Which platform launches first** (`docs/WARM-UP.md` Track E, DOCUMENTED as our own rule, not a platform
one): at the moment the trigger clears, compare accumulated pixel/tag events between Meta Events Manager
and Google Ads/Merchant Center conversion tracking. **Whichever has more accumulated events unpauses
first. A tie goes to Meta**, because broad targeting needs less accumulated signal than Search/Shopping
does. Check both dashboards at trigger time; do not assume, count.

**The full three-platform order, stated once, OUR CALL (`HYPOTHESIS`):**
1. **Meta or Google, per the tie-break above.** Unpauses the same run the trigger clears. This is the
   channel `docs/30-DAY-PLAN.md` Day 6 names by illustration ("Meta unpauses, or whichever tag has more
   events").
2. **The other of Meta/Google, once channel 1 clears its 72h freeze and takes its first proven budget
   step.** Launching two cold paid tests simultaneously against one still-thin revenue base spreads a
   scarce resource (the founder's attention and the account's early trust signal) thin for no reason. This
   roughly lands on the `docs/30-DAY-PLAN.md` Day 15 "second channel live" checkpoint, earlier if a
   checkpoint-behind lever pulls it forward (`docs/MANDATE.md` "Checkpoints" lever order, item 2).
3. **TikTok Spark Ads third.** Two reasons, not one: it needs an actual proven organic winner to Spark
   (the growth-operator brief: "Spark-Ad the proven-organic winner", not a cold creative), so it is
   naturally gated on organic having produced one; and running three fresh paid tests at once against a
   $150-$300 revenue base tests none of them properly. TikTok's own account is the least "cold" of the
   three by the time this fires (it has been organically warm since Track A Day 1), so once it launches it
   should need the least additional pixel-side warm-up of the three.

**Why this is not contradicted by "budget gates a channel's launch, never its preparation"**
(`docs/MANDATE.md`): all three campaigns are built and PAUSED before any of this matters. The order above
governs which PAUSED campaign gets unpaused when, not which gets built. Build all three now.

---

## 2. Meta: exact campaign structure

Everything below is `docs/OPERATOR-PLAYBOOK.md` section 4 plus the `docs/LEARNINGS.md` External evidence
entry "at our budget the whole ad account is one campaign and one broad ad set" (DOCUMENTED,
COMMUNITY-CONSENSUS, 4 independent 2026 practitioners at this exact budget), applied to bench rank 1.

### 2.1 Structure

| Setting | Value | Why |
|---|---|---|
| Campaigns | **1** | No campaign-level fragmentation. Meta's conversion data is siloed per campaign; splitting concepts across campaigns starves each of signal. |
| Ad sets | **1** | No interest stacking, no lookalikes, no separate retargeting campaign. "Low budgets usually get killed by too much structure, not too little" (DOCUMENTED, r/PPC 2026 thread, 4 practitioners). |
| Ads (creative concepts) | **4** at launch (band is 3-5 per `docs/MANDATE.md`) | 4 sits cleanly inside the $10-15/day-per-ad screening band at $50/day total. Flex to 3 if a concept isn't ready, flex to 5 only if the daily budget also steps up so per-ad funding does not thin out. |
| Objective | **Sales** | Standard conversion-campaign objective, drives to the store checkout. |
| Conversion location | **Website** | Not app, not messaging. |
| Optimisation event | **Purchase**, if the Track B pre-spend target is met at trigger time. **AddToCart or Landing Page Views** for the first 3 days, in a separate ad set, if it is not (Section 8). | Meta's own documented fix for a learning-limited setup is "change to a more frequent optimization event," directly applicable here (DOCUMENTED, `docs/OPERATOR-PLAYBOOK.md` section 4). |
| Budget control | **Ad set budget (ABO), Advantage campaign budget toggled OFF at creation** | "Test with ABO, scale with CBO/Advantage+" (growth-operator brief). CBO on a small daily budget dumps almost everything into whichever ad set wins the first few hours; with only 1 ad set that toggle does nothing useful for us at test stage and only matters once a scale campaign exists (Section 7). |
| Daily budget at launch | **$50.00/day**, set at the ad set (the only ad set in the account) | Matches the `docs/30-DAY-PLAN.md` Day 6 ladder start (`spend(d) = $50 x 1.20^(d-6)`) and the TikTok platform floor, so the whole account's spend curve is legible against one number from day one. |
| Implied per-ad budget | **~$12.50/day** (not a hard per-ad cap; Meta auto-allocates within the one ad set) | Sits inside the documented $10-15/day-per-ad screening band. Do not attempt to set per-ad budgets manually inside one ABO ad set; that is not how ad-set-level budgeting works. |
| Placements | **Advantage+ Placements (automatic, all placements)** | OUR CALL, same "signal not control" logic as the audience decision: manually restricting placements on a $50/day account fragments delivery the same way audience-stacking does. No documented source names this specifically for small budgets; it follows from the audience-stacking correction directly. |
| Audience | **Broad, no interest or lookalike layering, one country (US)** | "You need signal, not control" (DOCUMENTED, same source). Broad targeting for creative tests is near-universal practitioner consensus. |
| Bid strategy | **Lowest cost / highest volume (no manual bid cap) at launch** | Standard default; do not add a bid cap or cost cap until real CPA data exists to set one against. |

### 2.2 The 4 launch concepts, genuinely different

Not 4 small variations of one script. Per the DOCUMENTED Motion Creative Benchmarks finding (hit rate by
format inverts the UGC-only assumption: text-only 11.60%, product image + text 8.75%, UGC 7.56%, high
production 6.87%), the launch set should NOT be 4 UGC videos:

1. **Repurposed organic winner** (the actual best-performing native TikTok post, re-cut for Meta feed
   ratio). Carries real proof of pull.
2. **Static product image + short text overlay**, benefit-led headline. Cheapest to produce, highest
   documented hit rate.
3. **"Product doing its trick, one continuous shot, finger pointing at the moment it works"** (the
   transferable half of the 2026-08-12 "Dashboard-and-pointer" LEARNINGS entry, adapted from B2B screen
   recording to a physical product). Original audio, one bright text overlay naming the moment, caption
   under six words.
4. **Text-first / problem-solution copy ad** with a simple product photo, no video. The second
   highest-hit-rate format in the Motion dataset, essentially free to produce.

All 4 use the fountain's existing hook bank (`creative/scripts/`, 8 hook variants + 2 full scripts,
2026-08-11). Do not commission new footage to fill this; repurpose what already exists.

### 2.3 Settings that must NOT be touched, and for how long

- **72 hour edit freeze from the moment the campaign is unpaused.** No budget change, no targeting change,
  no creative add or edit, no bid change. Editing resets learning (DOCUMENTED, Meta's own significant-edit
  list: pausing the ad set, and changes to optimization event, audience, or creative including adding new
  ads).
- **Do not switch the optimisation event back and forth** between Purchase and AddToCart once chosen for a
  given ad set. If seeding on AddToCart per Section 8, that seed ad set is retired (not edited) when
  switching to the real Purchase-optimised ad set.
- **Do not pause and unpause the ad set.** Pausing is itself a significant edit.
- **Do not add or remove creatives inside the 72h window**, even to "fix" an underperformer. Let the freeze
  run its course; judge after.
- **Do not change budget on the same day as any other edit, ever**, freeze period or not (`docs/MANDATE.md`).
- **Do not turn on Advantage campaign budget (CBO) during the test phase.** That is a scale-phase move
  only, once a winner exists (Section 7).
- **Batch edits weekly once past the freeze**, rather than tinkering daily (DOCUMENTED correction: Meta
  edits recalibrate, they do not fully reset, but frequent small edits still cost more signal than they
  save).

---

## 3. Google: Merchant Center feed and Shopping campaign

### 3.1 Merchant Center feed, exact attributes for bench rank 1 (cat water fountain)

Required attributes, DOCUMENTED (support.google.com/merchants/answer/7052112, pulled live):

| Attribute | Value for the fountain | Note |
|---|---|---|
| `id` | `PAWFOUNTAIN-1` (matches the Shopify SKU already set in `store/BUILD-SPEC.md` section 5a) | Stable, do not change once submitted. |
| `title` | "Quiet Pump Cat Water Fountain, Fresh Flowing Water for Cats" | Matches the live product-page title. |
| `description` | Full plain-text description, up to 5,000 chars | Pull straight from the product page copy once `copywriter`'s final text is live; do not write a second version. |
| `link` | The live product URL, `/products/quiet-pump-cat-water-fountain` | Must match the landing page's actual price and availability exactly, or Google disapproves the item. |
| `image_link` | Main product photo | **Minimum 500x500px as of the 2026 update; enforcement begins January 31, 2027, but build to this now, not to the old 100x100px floor.** |
| `availability` | `in_stock` | Standard dropship caveat: inventory tracking is off in Shopify (`store/BUILD-SPEC.md` 5a), so this needs to reflect real supplier stock status, not just "always in stock." Revisit if a stockout ever happens (`docs/NO-STALL.md` P8 incident runbook C). |
| `price` | `34.99 USD` | Must equal the checkout price exactly, single-unit variant. |
| `brand` | **`Paw Finds`** | Required for all new products except movies/books/music (DOCUMENTED). The sourced item is deliberately generic/unbranded (no manufacturer brand exists to declare, by design, to avoid trademark proximity per the bench's own compliance review). Declaring the store's own brand here is the standard practice for private-labelled or generically-sourced retail goods; do not invent a fake manufacturer brand name. |
| `condition` | not required | Only required if used or refurbished; this is new. |
| `identifier_exists` | **`no`** | The generic AliExpress-sourced item has no manufacturer-assigned GTIN. Do not fabricate one. Google accepts `identifier_exists: no` for genuinely unbranded/generic goods; submitting a fake GTIN risks the whole feed's suspension. |
| `google_product_category` | Animal & Pet Supplies > Pet Supplies > Cat Supplies (closest matching Google taxonomy leaf, confirm exact leaf ID in Merchant Center's own category picker at setup) | Recommended, not in the hard-required list, but materially improves Shopping-tab matching. |
| `product_type` | `Pet Comfort > Cat Water Fountain` | Mirrors the Shopify collection structure already spec'd. |
| `shipping` | Inherit from Merchant Center account-level shipping settings (flat $4.99, free over $54.99, matching `store/BUILD-SPEC.md` 5b/5c) rather than a per-product override | One shipping table, one place to keep it correct. |

**Bundle variants** (2-pack, 3-pack, per `store/BUILD-SPEC.md` 5a): submit as separate feed rows with their
own `id`, `price`, and `link` (Shopify's variant URLs), same `item_group_id` if grouping is wanted later.
Not required for launch; ship the single-unit row first, add bundle rows once the base listing is approved
and live.

**Feed sync path:** install the official Shopify "Google & YouTube" sales channel app (free, same pattern
as the Meta & Instagram app already in `store/BUILD-SPEC.md` section 4). It auto-generates and keeps the
feed synced from the product data already in Shopify, and installs the Google tag alongside it. This is
the same $0 app-discipline rule as every other app on this store: no per-order cost, one stated purpose.

### 3.2 Shopping vs Performance Max, and the reasoning

**Default recommendation: Standard Shopping campaign, not Performance Max.** DOCUMENTED-adjacent (2026
blog consensus, not a Google support-page pull, so treat this tier as VENDOR/SEO-BLOG, not
PLATFORM-OFFICIAL): under roughly $100/day, Standard Shopping outperforms PMax because PMax spends part of
the budget on Display and YouTube placements with materially lower conversion rates, while Standard
Shopping stays entirely inside the high-intent Shopping tab. This is the same "signal not control" logic
that governs the Meta structure, applied to a platform where the automated option (PMax) is the one that
adds unrequested complexity, not removes it.

**One live, unverified risk that could override this default, flagged plainly:** a single blog source
(not confirmed against Google's own help pages tonight) claims that as of **August 31, 2026, all Shopping
campaigns must include Local Inventory Ads**, which would affect a store with no physical storefront. This
is **UNVERIFIED**, sourced from one SEO-agency blog, not from support.google.com. Today is 2026-08-12; by
the time the $150 trigger clears this date may already have passed either way. **Before building the live
campaign, `HUMAN:` or a future run with working Merchant Center access must check directly in the Merchant
Center / Google Ads UI whether a Shopping-only campaign can still be created without a physical storefront
enrolled.** If the standard Shopping campaign type is blocked or forced into requiring Local Inventory Ads
we cannot supply, the fallback is a **feed-only/Shopping-only-scoped Performance Max campaign** (exclude
Search, Display and YouTube asset groups if the campaign UI allows narrowing PMax's inventory at setup;
accept full PMax if it does not, and say so honestly in the ledger rather than pretending it was scoped).

### 3.3 Campaign settings

| Setting | Value | Why |
|---|---|---|
| Campaign type | Standard Shopping (fallback: scoped/feed-only Performance Max, see 3.2) | See reasoning above. |
| Campaign subtype | Not applicable to Standard Shopping | n/a |
| Country of sale | United States only | Matches the store's fulfilment and shipping-policy scope. |
| Bidding strategy at launch | **Manual CPC** (or Maximize Clicks if manual feels too hands-on at day one) | No conversion history exists yet to feed Target ROAS or Maximize Conversion Value; those strategies need real conversion volume to bid against, which does not exist at launch. Switching too early with no data risks the algorithm optimising against noise. |
| Bidding strategy, switch trigger | Once roughly 15-30 purchases have accumulated in the account (VENDOR-SOURCED range, not a confirmed Google minimum for Target ROAS specifically, flagged as approximate) | Re-verify the exact conversion-count gate in the Google Ads UI itself before switching; different Smart Bidding strategies have published different minimums and this range is not confirmed against a Google support page. |
| Daily budget at launch | **$50.00/day** | Same symmetry logic as Meta and TikTok: one number, one ladder, easy to reason about across all three platforms at once. |
| Ad group structure | **1 ad group**, all live bench products (rank 1 at launch; add ranks 2-3 as they go live) in one product group, no sub-segmentation by price or margin at this budget | Mirrors the Meta "one broad ad set" logic: don't fragment a $50/day budget across product-level bid groups before there is any click data to justify doing so. |
| Priority | High (only matters once PMax exists alongside it; irrelevant with only one Google campaign live) | Set correctly now so it does not need revisiting when a second Google campaign is ever added. |

### 3.4 Settings that must NOT be touched

No Google-specific learning-phase percentage is DOCUMENTED the way Meta's is; the guidance below is OUR
CALL, applied by conservative analogy to the Meta/TikTok rules for consistency across all three platforms,
not because Google publishes an equivalent reset mechanic.
- Do not change the bidding strategy inside the first 1-2 weeks live.
- Do not restructure product groups (splitting by category, price, or margin) until real click and
  conversion data exists to justify the split.
- Do not pause and resume the campaign; treat it the same as the Meta/TikTok freeze rule.
- Apply the same +20%/48-72h budget-step cadence as Meta and TikTok (Section 7), for cross-platform
  consistency, not because Google requires it.

---

## 4. TikTok: platform minimums and launch position

All of this is already DOCUMENTED in `docs/WARM-UP.md` Track B and `docs/OPERATOR-PLAYBOOK.md` section 4;
restated here in dossier form so it does not need re-deriving at spend time.

| Setting | Value | Source |
|---|---|---|
| Campaign daily/lifetime budget | Must **exceed $50.00** (literally, $50.00 does not clear it, $50.01 does) | DOCUMENTED, TikTok self-serve floors. |
| Ad group daily budget | Must **exceed $20.00** (same literal rule, $20.01 clears it) | DOCUMENTED. |
| Billing | **Prepay.** Campaigns stop delivering when the balance empties, no overspend risk but also no grace | DOCUMENTED. |
| Budget type | Cannot be switched once the campaign is live | DOCUMENTED. Decide daily vs lifetime correctly at creation. |
| Structure | 1 campaign, 1 ad group, **3-5 creatives** (TikTok's own recommendation: "creatives with big differences") | DOCUMENTED + growth-operator brief. |
| Creative source | **The proven organic winner**, Spark-Authorized, not fresh paid-only creative | growth-operator brief: "Spark-Ad the proven-organic winner." |
| Add new creatives | To the **existing** ad group, never a new duplicate ad group | DOCUMENTED, opposite of the Meta habit; do not get this backwards. |
| Learning phase | Two different official numbers exist: the general page says ~25 results or 7 days, the Smart+/Smart Performance pages say 50 conversions. Both official; cite whichever page a specific claim is quoting | DOCUMENTED. |
| Change rules after learning | Bid edits up to 15% every 2 days; budget up to +30% only when the campaign regularly exhausts 90%+ of daily budget; run at least 7 days without significant edits | DOCUMENTED, TikTok's own Smart+ docs, the only place either platform publishes a real step-size number. |
| Edit freeze | 72h untouched at launch, same as Meta | growth-operator brief. |
| Spark Ads mechanics | Creator generates the code in-app; up to 20 batch-authorized at once; 10-minute max video; caption **cannot be edited after authorization**; a video **must be un-authorized before it can be deleted**; Duets/Stitches need codes from both creators | DOCUMENTED, `docs/OPERATOR-PLAYBOOK.md` section 3, TikTok's own Spark Ads help page. |

**Where TikTok sits in the launch order:** third, per Section 1. It is prepared now (structure above) but
gated on an actual proven organic winner existing to Spark, which will not be true on Day 1 of the paid
phase regardless of the $150 trigger. Treat the wait as normal, not a stall: the organic account keeps
posting and accumulating candidates the whole time.

**The widely repeated "$30/day North America minimum for web conversions"** is NOT in TikTok's own
documentation. Do not publish or act on it.

---

## 5. The real economics, computed here, worst-case landed cost

Every number below is computed fresh from `tracker/LEDGER.md`'s Product bench block, not copied from it.
The bench table's own margin figures (64.8%, 64.4%, 71.1% worst-case) do **not** subtract a returns
reserve; MANDATE's contribution-margin formula explicitly includes one (`revenue - COGS - shipping -
fulfillment - payment fees - returns`). Both figures are shown below: the bench's confirmed number
(no returns line, cross-referenced for consistency) and this dossier's paid-planning number (with a
**modelled** returns reserve added), used for the actual CPA math because it is the more honest number to
plan ad spend against.

**Stated assumptions, all of them:**
- Worst-case landed cost = the top of each bench candidate's stated range (per `offer-economist`'s own
  worst-case gate convention).
- Shopify Payments fee: **2.9% + $0.30**, real rate for the Basic plan (`store/BUILD-SPEC.md` section 1),
  applied to the single-unit product price only (the store's $4.99 flat shipping charge and its
  approximately-offsetting outbound shipping cost are excluded from both sides, same convention the
  bench's own confirmed margin figures already use, for direct comparability).
- Fulfilment: $0 beyond landed cost. DSers auto-routes orders at no per-order app fee; landed cost already
  includes the supplier's own outbound shipping to the customer (`ops/sourcing-dossier.md`: AliExpress
  folds shipping into the listed item price for these SKUs).
- **Returns reserve: 4% of revenue, MODELLED, not measured.** No return has happened yet; zero real data
  exists. Sourced from the one real line-item P&L found in `docs/LEARNINGS.md` External evidence (a
  $250,843-revenue year reporting 4% returns). This is a stand-in until real data exists, not a
  measurement of our own store, and should be replaced with the real number the first time it is
  observable.
- Single-unit order used throughout (the launch-week baseline; bundle orders carry materially higher
  absolute contribution per `store/BUILD-SPEC.md` section 5a's own table, treated as upside, not the
  planning case).

### 5.1 Bench rank 1: Cat water fountain, worked in full

- Retail: **$34.99**. Worst-case landed cost: **$11.00**.
- Payment fee: 2.9% x $34.99 + $0.30 = **$1.31**.
- Returns reserve (modelled, 4%): **$1.40**.
- **Contribution margin per order: $34.99 - $11.00 - $1.31 - $1.40 = $21.28 (60.8% of revenue).**
- Cross-reference, bench's confirmed figure without the returns line: $22.68 (64.8%), matching
  `tracker/LEDGER.md` exactly. The $1.40 gap is entirely the modelled returns reserve added here.
- **Break-even aMER = 1 / 0.608 = 1.64.**
- **Target aMER (1.25x break-even) = 2.06.**
- **Max allowable CPA (at target aMER) = $34.99 / 2.06 = $17.02.**
- Break-even CPA (zero first-order profit, no buffer) = $34.99 / 1.64 = $21.28. This equals the
  contribution margin dollar figure exactly, which is the correct sanity check: at break-even CPA, ad
  spend consumes precisely the margin and nothing is left.
- **Sanity check in order counts, at the $50/day launch budget:** break-even needs $50 / $21.28 =
  **2.35 orders/day**; hitting the target aMER buffer needs $50 / $17.02 = **2.94, call it 3 orders/day**.
  Anything sustained below ~2.35 orders/day at $50/day spend is already running under 1.0 ROAS on the
  account's own math, independent of the ad-level $25 kill rule below.

### 5.2 Bench rank 2 and rank 3, same method, summary lines only

| Rank | Product | Retail | Worst-case landed | Payment fee | Returns (4%, modelled) | CM $/order | CM % | Break-even aMER | Target aMER | Max CPA |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Cat water fountain | $34.99 | $11.00 | $1.31 | $1.40 | **$21.28** | **60.8%** | **1.64** | **2.06** | **$17.02** |
| 2 | Rechargeable heated eye mask | $29.99 | $9.50 | $1.17 | $1.20 | **$18.12** | **60.4%** | **1.66** | **2.07** | **$14.50** |
| 3 | Modular phone lens clip kit | $29.99 | $7.50 | $1.17 | $1.20 | **$20.12** | **67.1%** | **1.49** | **1.86** | **$16.10** |

This table is the whole point of doing this work now: if rank 1 gets killed and rank 2 or 3 is promoted
(`docs/NO-STALL.md` P4), the paid campaign's max CPA and kill dollar-figures are already sitting here, no
recomputation needed before the replacement product's ads can go live.

---

## 6. Pre-written kill thresholds, in dollars, for THIS product

`docs/MANDATE.md` "Instant kill (paid)" and `docs/30-DAY-PLAN.md`'s kill clocks, expressed against the
Section 5 numbers so nobody re-derives a formula mid-campaign.

**Creative-level kill** (applies identically to all 3 ranked products; this threshold is spend/delivery
based, not margin based):
- **CTR under 1% OR hook rate under 20%, at $10 spent or 24h, whichever comes first.** Kill, replace from
  the hook bank. This is the same $10 regardless of which bench rank is live.

**Ad-level kill, computed per product** (`docs/MANDATE.md`: zero sales at $25 spend OR 2x unit contribution,
whichever first, or ROAS < 1.0 at 48h):

| Rank | 2x unit contribution | Which binds first | Kill trigger, stated in dollars |
|---|---|---|---|
| 1 | $42.56 | **$25 (lower)** | **Kill at $25.00 spent with zero sales.** (2x contribution would need $42.56, never reached first.) |
| 2 | $36.24 | **$25 (lower)** | **Kill at $25.00 spent with zero sales.** |
| 3 | $40.24 | **$25 (lower)** | **Kill at $25.00 spent with zero sales.** |

The $25 flat figure binds before the 2x-contribution alternative on all three ranked products, because
every ranked candidate clears well above a $12.50 unit contribution. This will not always be true on a
thinner-margin future candidate; recompute the "which binds first" column, don't assume it forever.

**Budget-step rollback, in dollars for rank 1:** if the 72h post-step CPA exceeds **$21.28** (the pre-step
target-aMER max CPA of $17.02, +25% = $21.28, which not coincidentally lands on the same number as the
break-even CPA above, a useful cross-check) held for 72 hours, revert to the prior budget level.

**Organic product clock, unchanged, the slow one:** judge hooks in 24-72h; judge the product itself only
after ~2 weeks of full posting volume with zero traction and zero buy-intent comments. This clock governs
whether rank 1 stays live at all, independent of anything above.

---

## 7. The budget step ladder

| Element | Rule | Source |
|---|---|---|
| Trigger to step up | 48h at or above target aMER (2.06 for rank 1) with CPA within 25% of baseline | `docs/MANDATE.md` |
| Additional safety prerequisite (OUR adopted layer, `HYPOTHESIS`) | 3-day ROI above the profitability threshold AND campaign live 5+ days before the first step | `docs/OPERATOR-PLAYBOOK.md` section 4, the "undisputed parts" of the scaling research |
| Step size | **+20%**, max once per 24h | `docs/MANDATE.md`. Carried as `HYPOTHESIS`, not a documented Meta/TikTok threshold (LEARNINGS External evidence, 2026-08-10: no platform publishes a reset percentage). Held for asymmetric-risk reasons: a blown week is survivable at $5,000/day and terminal at our size. |
| Never | Budget change on the same day as any other edit, ever | `docs/MANDATE.md`, cross-platform |
| Rollback | CPA +25% over the pre-step baseline, held 72h, revert to the prior budget | `docs/MANDATE.md`; dollar figure for rank 1 in Section 6 |
| Winner graduation | Track cumulative spend per ad. Recompute the account's median single-ad cumulative spend weekly. The moment one ad's cumulative spend reaches **10x** that median, duplicate that exact ad **by post ID** into a new scale campaign (Advantage+/CBO budget). The original ad keeps running in the test campaign, untouched. | `docs/MANDATE.md` |
| Second/third channel cadence | Follows the launch order in Section 1, each new channel starting its own independent 72h freeze and +20% ladder from its own $50/day (Meta/Google) or $50+/$20+ (TikTok) floor | OUR CALL |

---

## 8. Pixel/tag state

**Current state, as of this writing (`tracker/LEDGER.md` Track B, 2026-08-12): zero.** Pixel/CAPI installed:
NO. Events firing: unverified. Organic events accumulated: 0. Spend: $0. Nothing here has started; this
section describes the target and the fallback, not a status.

**Pre-spend target (Track B, OUR inference, not platform-published):** at least **200 PageView, 20
AddToCart, 1 Purchase**, accumulated organically, before the first paid dollar. Below that at trigger time:

**Cheap-objective seed plan, if short:**
1. Do not launch the Purchase-optimised sales campaign yet.
2. Create a **separate** ad set (Meta) or use the existing ad group with a Landing Page View / traffic
   objective (TikTok, which explicitly recommends adding creatives to the existing ad group rather than a
   new one, so this differs by platform, follow each platform's own documented change rule).
3. Run at the platform minimum for **3 days** on a cheaper, higher-frequency optimisation event
   (Landing Page Views or AddToCart, not Purchase).
4. Do not touch the optimisation event on the seed ad set/group again after this; retire it and start the
   real sales ad set fresh once the target is met, rather than switching the event on the live one, which
   is itself a significant edit that resets learning.
5. This 3-day seed spend counts against the $150-trigger-funded budget, not a separate allowance.

**Why this matters, stated once:** a pixel with no conversion history costs 20-40% more during learning
(merchant-reported, directional). Every organic visit before the trigger fires warms this for free; that
is the entire reason Track B exists starting Day -7, at $0 spend, well before any product is even chosen.

---

## 9. The honesty sentence, for the ledger, every time this test is reported

Paste this verbatim into the ledger entry that reports the first paid test's early numbers:

> A first paid test at platform-minimum budget will not reach the ~50 optimisation events in 7 days
> documented as Meta's learning-phase exit point, nor the 25-50 result range TikTok documents across its
> two official pages. It reads creative direction and CTR/CPC/CVR trend only. It is never reported as this
> product's CPA, and any CPA quoted from this window is 20-40% worse than steady state by the platforms'
> own documented pattern. Judge hooks fast, judge the product and the channel slowly.

Do not round this down to "early results look promising, CPA is $X." That sentence, stated as if it were a
conclusion, is exactly the distorted-number failure mode this file exists to prevent.

---

## 10. Pre-flight checklist, tick every line before pressing go

- [ ] Collected revenue >= $150.00, confirmed in the Shopify Payments dashboard, not projected from
      pending orders.
- [ ] Fulfilment float (~$30-50) is untouched and separately accounted for, not counted toward the $150.
- [ ] Meta Business Manager and ad account exist, pixel installed, all four events (PageView, AddToCart,
      InitiateCheckout, Purchase) confirmed firing in Events Manager.
- [ ] Google Ads account and Merchant Center exist, feed approved (not just submitted, check for
      disapprovals), Google tag confirmed firing.
- [ ] Compared accumulated event counts between Meta Events Manager and Google Ads conversion tracking;
      applied the tie-break rule (Section 1) to decide which unpauses first.
- [ ] Pixel/tag pre-spend target met (200 PageView / 20 AddToCart / 1 Purchase), or the 3-day cheap-objective
      seed plan (Section 8) is scheduled first.
- [ ] The 4 Meta launch creatives exist and are genuinely different formats (not 4 UGC videos), per
      Section 2.2.
- [ ] The Google feed's required attributes are all populated for the fountain listing (Section 3.1),
      identifier_exists set correctly (no fabricated GTIN).
- [ ] The August 31, 2026 Local Inventory Ads claim (Section 3.2) has been checked directly in the Merchant
      Center/Google Ads UI, not assumed either way.
- [ ] Daily budget confirmed at $50.00/day on whichever platform launches first (matches the ladder's Day 6
      start exactly).
- [ ] The 72h edit freeze is understood and will actually be honoured (no "just checking in" edits).
- [ ] The honesty sentence (Section 9) is ready to paste into the first post-launch ledger entry.
- [ ] Kill thresholds (Section 6) and the budget ladder (Section 7) are read and understood before launch,
      not looked up after something goes wrong.
- [ ] Compliance: policy pages live, shipping ETA honest, no claim on the ad creative that the compliance
      review (`compliance/bench-review-2026-08-11.md`) flagged against.

---

## What could not be verified, stated plainly

- **Meta's actual current CPM in the pet/home-comfort niche:** unverified. No live Meta Ad Library or Ads
  Manager access exists in this seat (`docs/LEARNINGS.md`, 2026-08-10 entry: direct WebFetch against Meta
  Ad Library fails outright). Do not plan spend against an assumed CPM; the $50/day launch budget and the
  order-count sanity check in Section 5.1 do not depend on knowing CPM in advance.
- **The "Shopping campaigns require Local Inventory Ads as of August 31, 2026" claim:** unverified,
  single SEO-blog source, not confirmed against a Google support page in this session. Flagged as a
  pre-flight checklist item, not resolved here.
- **The exact Google Smart Bidding conversion-count minimum for Target ROAS:** the 15-30 range used in
  Section 3.3 is a rounded synthesis of several vendor blogs, not a single confirmed Google support-page
  number. Re-check inside the Google Ads UI itself before switching bidding strategies.
- **TikTok's real current CPM/CPC in this niche:** unverified for the same reason as Meta (TikTok Creative
  Center unreachable by direct fetch, per the same 2026-08-10 LEARNINGS entry). Not load-bearing for this
  dossier's numbers, which are built from margin and platform floors, not from an assumed CPM.
