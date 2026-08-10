# Learnings: the knowledge base that changes what we do next

The ledger records **what happened**. This file records **what we now believe, why, and what changes
because of it**. Every agent reads this file before acting and writes to it when a test concludes.
That is the entire mechanism by which this challenge gets smarter instead of just busier.

## What this is NOT (read this before anything else)

**This is retrieval-based learning, not model training.** Nothing in this repo updates any model's
weights. There is no fine-tuning, no gradient, no "training our AI on our data." The compounding comes
from one boring, real thing: every agent reads validated lessons before it acts, and writes validated
lessons after it acts, so the next decision starts from evidence instead of from a blank page.

If any file, brief, prompt or summary in this repo starts implying we are training a model, that is
wrong and it should be corrected on the spot. Overclaiming here is the same failure as reporting a
projection as a result.

Two honest limits of retrieval-based learning:
- It only works if the file is actually read. A stale or unread file compounds nothing.
- It only works if the entries are true. A confidently wrong entry is worse than an empty file, because
  every future agent inherits the error. Hence the evidence rule below.

---

## The rules

1. **Evidence, or it is a hypothesis.** An entry with no numbers behind it is not a learning. Label it
   `HYPOTHESIS` and file it under *Open hypotheses*, with the test that would settle it. Promoting a
   hypothesis to a learning requires real numbers.
2. **Numbers come from the ledger or a dashboard.** Cite where: which `tracker/LEDGER.md` dated entry,
   or which dashboard, and mark **estimated** vs **dashboard-confirmed**. Never a number from memory,
   never a number from a guru video or a case study. Competitor and vendor claims are context, not
   evidence.
3. **Every entry is falsifiable.** State what observation would prove it wrong. "Our audience prefers
   X" with no disconfirming condition is a vibe. If nothing could disprove it, it does not belong here.
4. **Confidence is declared, on this ladder:**
   - **Low** = n=1, a single day, or directional only. One video, one order, one session.
   - **Medium** = repeated across 3+ instances or a full week, in one channel.
   - **High** = repeated, quantified, and it held after a deliberate re-test that could have broken it.
   Say the sample size out loud. n=1 is never Medium.
5. **Supersede, never accumulate contradictions.** See the next section. Do not silently edit a wrong
   entry; mark it superseded and write the replacement.
6. **Product-level learnings expire.** Winners rotate weekly. Any entry about a specific product or a
   specific trend carries an `expires:` date (default 30 days). After that it is history, not guidance.
7. **A day with no learning says so.** "2026-xx-xx: no new learning today, N posts made, no metric
   moved enough to conclude anything" is a correct and useful entry. Inventing a lesson to fill the
   slot poisons the file. This is the single most likely way this file goes bad.
8. **A test that could not fail is not evidence.** If the outcome was guaranteed by the setup, say so
   and do not log a learning from it.

## The entry format (copy this)

```
### [YYYY-MM-DD] Short claim in one line
- **Claim:** what we now believe, stated so it could be wrong.
- **Evidence:** the actual numbers, with source (ledger entry date / dashboard) and estimated vs
  confirmed. Include sample size.
- **Confidence:** Low / Medium / High. What would raise it.
- **Falsified by:** the observation that would kill this claim.
- **So we now:** the concrete behaviour change. If nothing changes, say why it is still worth recording.
- **Expires:** YYYY-MM-DD (product/trend entries) or "no expiry (structural)".
- **Written by:** agent name.
```

## Superseding, expiry and contradiction (the anti-staleness rule)

Knowledge bases fail in two ways: they go stale, and they start disagreeing with themselves. Both are
handled the same way, visibly.

- **To supersede an entry:** leave the original text in place, prepend
  `SUPERSEDED YYYY-MM-DD: <one line on why>` to it, move it to *Superseded and expired* at the bottom,
  and write the new entry in the live section with a pointer back (`supersedes: [date] short claim`).
  Never delete. The history is how we avoid re-learning the same thing twice.
- **Two live entries may never contradict each other.** If a new finding conflicts with a live entry,
  resolving it is part of writing it: either supersede the old one, or narrow both ("true on TikTok
  organic, not true in paid") so they no longer collide. Leaving both standing is a defect.
- **Expiry is not deletion.** An expired product learning moves to *Superseded and expired* with
  `EXPIRED YYYY-MM-DD` and stays readable. "This product won in August" remains a useful data point
  about *why* it won (price band, hook shape, audience) even after the product itself is dead. Extract
  the durable pattern into the right section before archiving the specific.
- **What expires fast vs slow:** specific products and trends expire in ~30 days. Hook formulas,
  pricing/AOV findings and channel tactics expire slowly (re-check quarterly). Operational lessons
  (supplier reliability, shipping reality) and anti-patterns rarely expire.
- **Weekly maintenance:** `challenge-lead` sweeps this file once a week, checks expiry dates, resolves
  any contradictions, and moves dead entries down to the archive. Live sections stay at the top so
  agents read current knowledge first.

---

# External evidence (borrowed, NOT ours)

**Read the rule before the entries.** This section exists because a research run on 2026-08-10 produced
findings solid enough to change what we do, several of which correct our own playbook. They are **fenced
off from Live knowledge on purpose**:

- **None of these is a learning.** A learning in this file means *we* measured it. These are other people's
  numbers, labelled `DOCUMENTED` (a sourced fact) or `HYPOTHESIS` (an inference or an unverified operator
  claim) per the entry contract, with the source tier named.
- **The moment we have our own number on the same question, our number wins** and the external entry is
  marked superseded with a pointer to the live entry. That is the point of keeping them visible instead of
  dissolving them into prose.
- **Confidence is not declared here**, because the ladder in the rules above measures *our* sample size and
  we have none. Source tier is stated instead.
- Full reasoning, the day-1 / at-first-revenue / later staging, and the complete source list live in
  **`docs/OPERATOR-PLAYBOOK.md`**. These are the short forms, so an agent reading only this file still sees
  the corrections.

### [2026-08-10] EXTERNAL: profit lives in contribution margin per order, not in ROAS or LTV
- **Claim:** the gate on whether a product works is **first-order contribution margin at or above zero**
  (revenue minus COGS, shipping, fulfillment, payment fees, returns and CAC). Break-even **aMER
  (new-customer revenue / total ad spend) = 1 / contribution margin**: 3.33 at 30% CM, 2.0 at 50%.
- **Evidence:** `DOCUMENTED`, OPERATOR tier. Common Thread Collective, forecasting for hundreds of DTC
  brands, <https://commonthreadco.com/blogs/bridges/unlock-first-order-profitability>. Their own case data:
  optimizing for 60-day LTV meant **spending $70,000 more to generate $12,000 of incremental lifetime
  profit**. Blended MER lies: $1M/mo on $250k spend reads as 4:1 MER but is break-even at 2:1 aMER, and
  doubling spend at equal efficiency produces zero incremental contribution margin while the headline number
  improves. Supporting margin data: DTC median contribution margin ~25% (bookkeeping platform aggregating
  $3.16B of brand revenue); healthy above 30%, 20% minimum, under 10% structurally broken.
- **Falsified by:** our own repeat-purchase data showing a second order arriving fast enough and reliably
  enough that a negative first-order margin is recovered inside our cash cycle.
- **So we now:** `offer-economist` computes contribution margin per order and break-even aMER before any
  spend, alongside break-even ROAS. We do not plan on an LTV we have not observed.
- **Contradicts:** the standard DTC line (and the premise of the brief that commissioned this research) that
  a first purchase only breaks even and profit lives in repeat purchase. Recorded as a correction rather
  than silently applied.
- **Expires:** no expiry (structural).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: creative volume is a weekly rate with a published winner probability
- **Claim:** the operating variable is **net-new creatives per week**, not creatives per product. Roughly
  **5-8% of ads become winners** (a winner being an ad that spends 10x the account's median single-ad
  spend); **about half of all ads never get meaningful spend**; **20 ads yields 1 to 1.6 winners**; and
  **5 creatives/week gives a ~26% probability of finding a winner that week**.
- **Evidence:** `DOCUMENTED`, PLATFORM-AGGREGATE tier. Motion Creative Benchmarks 2026: **578,750
  creatives, 6,015 brands, $1.29B spend**, Meta, Sept 2025 to Jan 2026,
  <https://go.motionapp.com/benchmarks>. The under-$10k-spend tier averages **2.80 new creatives/week**,
  top quartile **4.83**; the spread inside a tier (top quartile ships 2-3x its same-budget peers) matters
  more than the average. Independent corroboration of the shape from Common Thread Collective across 170+
  brands: outlier rate **3.5%**, the **top 3.5% of ads take 66% of spend**, **79% of ads never reach
  $1,000**, and `ads to launch = desired outliers / 0.035`. Motion sells creative analytics so its framing
  favours volume; the dataset is still the largest public one.
- **Falsified by:** our own posting data showing winners arriving at a materially different rate per
  creative shipped, in which case we recompute the floor from our own hit rate.
- **So we now:** **5 net-new creatives per week is our floor, tracked as a rate**, owned and reported by
  `creative-director`. 3-5 per product remains the launch minimum only.
- **Narrows:** `docs/PLAYBOOK.md` section 5's "minimum 3-5 creatives per product", which is a launch
  minimum that reads like an ongoing rate.
- **Also `DOCUMENTED` and counter-intuitive:** by winner **hit rate**, text-only ads (11.60%) and product
  image plus text (8.75%) beat UGC (7.56%) and high-production video (6.87%), and static images are 55.6%
  of all ads and 64.8% among DTC brands. The all-video assumption is wrong.
- **Expires:** re-check quarterly (channel tactic).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: creative fatigue compressed to 2-4 weeks and ads now peak in week one
- **Claim:** creative decays far faster than the older 6-8 week folklore, and **an ad peaks in its first
  week and then plateaus** rather than improving through weeks 2-3.
- **Evidence:** `DOCUMENTED`, PLATFORM-AGGREGATE tier. Confect Andromeda study: **3,014 ecommerce
  advertisers, 73 countries, $834M spend, 115.7B impressions, 1M ads, 44.3M purchases**, full-year 2025,
  <https://confect.io/tactics/meta-andromeda-2026>. Same dataset: overall ROAS **-7%** with no recovery
  signal, landing-page CVR **-17%**, prospecting ROAS **-13%**, the **top third of advertisers by ROAS fell
  31%** while bottom performers trended up, **affordable products -35%**, **single image/video the worst
  format at -17%**, and top performers ran **395 live ads vs 296**. Confect sells catalog-ad tooling, so
  discount its catalog-specific prescriptions. Meta's only official fatigue definition is a lagging one:
  "Creative limited" is cost per result under 2x past ads, "Creative fatigue" is 2x or more.
- **Falsified by:** our own creative data showing a video that materially improves in weeks 2-3 relative to
  week 1, repeatedly.
- **So we now:** judge a creative inside its **first week**, refresh on signal (hook-rate decay is the
  earliest tell) rather than on a calendar, and plan **4-6 variations per winner** since half of everything
  is switched off before day 28.
- **Note, and it matters:** this **strengthens** our two-kill-clocks rule rather than weakening it. Creative
  signal now arrives in week one while product validation still takes weeks, so "judge hooks fast, judge
  the product slowly" is more correct than before, not less.
- **Expires:** re-check quarterly (channel tactic).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: nobody documents 20% as a scaling threshold, and credible operators disagree flatly
- **Claim:** **no Meta documentation establishes any percentage as a budget-change reset threshold.** Meta
  says only that budget and bid changes "may" be significant depending on magnitude. Named operators
  managing $50M to $200M+ prescribe **+20%/day on a single CBO** and **30-50%/day on a separate scale CBO**
  respectively, each explicitly rejecting the other's method.
- **Evidence:** `DOCUMENTED` for the absence: Meta's significant-edits documentation enumerates which edits
  restart learning (pausing, and changes to optimization event, audience or creative including adding new
  ads) and publishes **no percentage**. `HYPOTHESIS` for every specific step size in circulation. The most
  complete published ruleset sits at +15-30% per change, minimum 2-3 days apart, with above 50%
  "significantly increasing the risk" of a reset. For contrast, TikTok **does** publish step sizes, and only
  inside its Smart+ docs: bid edits up to **15% every 2 days** after learning, and daily budget up to
  **+30%** when a campaign regularly exhausts 90%+ of budget.
- **Falsified by:** a platform-published percentage threshold appearing, or our own data showing a 20%
  increase demonstrably resetting learning where a 15% one did not.
- **So we now:** **keep our +20% every 48-72h rule but carry it as `HYPOTHESIS`, not as a documented
  threshold.** We hold the conservative end for asymmetric-risk reasons, not evidentiary ones: a blown week
  is survivable at $5,000/day and terminal at our size. We adopt the undisputed parts: no budget change on
  the same day as any other edit; prerequisites of 3-day ROI above threshold and campaign live 5+ days; stop
  condition of CPA +25% within 72h; rollback if the drop persists 5-7 days.
- **Expires:** re-check quarterly.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: owned-channel revenue lives in two flows, and the famous 27% stat is from 2016
- **Claim:** automated flows, not campaigns, are where owned-channel revenue is, and **abandoned cart plus
  welcome alone account for 76% of all automation-generated orders.** Separately: the ubiquitous "email
  drives 27% of ecommerce revenue, per Klaviyo" figure is **Q4 2016 data**.
- **Evidence:** `DOCUMENTED`, PLATFORM-AGGREGATE tier. Omnisend, calendar year 2025, **150,000 brands, 27
  billion emails**, <https://www.omnisend.com/blog/email-marketing-benchmarks/>: automations **$3.41 per
  email** vs campaigns **$0.155**, and automations are **2% of sends producing 30% of email revenue**. Per
  flow: back-in-stock **$9.14** (6.72% conversion), welcome **$6.16**, abandoned cart **$3.59** (1.72%),
  shipping confirmation $3.08, order confirmation $2.88, cross-sell $0.95, browse abandonment $0.76,
  reactivation $0.51. **Open rates are essentially identical between campaigns and automations (30.4% vs
  30.2%), so the entire ~20x revenue gap is click and conversion, not subject lines.** Klaviyo across
  183,000+ brands agrees on shape: flows are 5.3% of sends and ~41% of email revenue, ~18x campaign
  revenue-per-recipient, and **48% of flow revenue comes from NEW buyers**, so flows are an
  acquisition-closing tool and not only a retention tool. The 2016 provenance of the "27%" figure is visible
  on its own source page, <https://www.klaviyo.com/marketing-resources/ecommerce-benchmarks>.
- **Falsified by:** our own flow revenue landing outside these bands by an order of magnitude, or browse
  abandonment out-earning our cart flow.
- **So we now:** build **welcome plus abandoned checkout first and nothing else**; optimize triggers and
  timing rather than subject lines; and use **Shopify Email**, whose abandoned-checkout automations are free
  forever and do **not** count against the 10,000/month allowance, rather than Klaviyo, which bills on
  **active profiles** and auto-upgrades to a paid tier at cycle start (a live risk to the $100 cap).
- **Also `DOCUMENTED`, and why the flow is not the main fix:** a cart-recovery flow converts only **1.72%
  to 3.33% of recipients**, not the 10-30% vendors imply.
- **Expires:** re-check quarterly.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: post-purchase upsells are suppressed for most mobile payment methods
- **Claim:** Shopify post-purchase offers require a **card vaulted during a non-redirect checkout**, and
  therefore **do not display at all** for Apple Pay, Google Pay, Amazon Pay, Klarna, Affirm, Afterpay, Shop
  Pay Installments, gift cards, non-default currencies, orders including duties, local delivery, or orders
  under $0.50. Shop Pay at full payment works; PayPal Express needs Reference Transactions approval,
  requires a login, and supports only **one** offer.
- **Evidence:** `DOCUMENTED`, a platform constraint documented consistently by multiple independent app
  vendors implementing it, e.g.
  <https://help.rebuyengine.com/en/articles/6706477-shopify-s-post-purchase-offer-considerations-limitations>
  and <https://help.zipify.com/en/articles/4684879-supported-payment-processors-for-post-purchase-offers-ocu>.
  Separately `DOCUMENTED`: **Shopify publishes no first-party data on post-purchase upsell take rates**; its
  own blog on the subject is entirely CartHook merchant case studies, and it is the most-cited "Shopify
  data" in the category.
- **Falsified by:** measuring our own orders and finding the eligible share is high.
- **So we now:** **measure the eligible share of our own orders BEFORE installing any post-purchase upsell
  app**, on a funnel where roughly 70% of retail orders are mobile. Planning band if we do install one:
  **8-15% take rate, 5-10% AOV lift**, treating anything above 20% as vendor territory. One mechanic beats
  the benchmark: if it is not one-click on a card already on file, it does not work.
- **Reorders our AOV levers:** product-page quantity breaks and a free-shipping threshold become primary;
  the post-purchase upsell becomes conditional. Checkout-page order bumps are effectively Plus-gated, so the
  pre-payment bump available to us is a cart-page offer.
- **Expires:** re-check quarterly (platform behaviour changes).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: multi-unit bundles are the only AOV lever that raises margin RATE
- **Claim:** per-order shipping and the ~2.9% + $0.30 payment fee are near-fixed while COGS scales
  linearly, so a multi-unit bundle amortizes one shipping event and one payment fee across several units and
  **raises contribution margin per order faster than revenue, even at a 20-25% unit discount.** The other
  AOV levers raise absolute contribution while diluting margin rate, and rate is what we are short of.
- **Evidence:** `HYPOTHESIS` for the mechanism, which is our own arithmetic and is checkable against our
  ledger. `DOCUMENTED` that this is the weakest-evidenced lever in the AOV area: **every published bundle
  AOV-lift figure originates from a bundling-app vendor's own blog**, and we deliberately quote none of
  them. `DOCUMENTED` design constraint: **native Shopify quantity discounts only surface at checkout**, so
  a tier table that is not on the product page is invisible and the tactic dies.
- **Falsified by:** our own contribution-margin-per-order data on bundled vs single orders showing no rate
  improvement.
- **So we now:** make a **product-page quantity-break table** the primary AOV mechanic, and judge it on
  contribution margin per order rather than on AOV.
- **Expires:** re-check quarterly (pricing/AOV finding).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: free-shipping thresholds are the one AOV lever with peer-reviewed support
- **Claim:** threshold free shipping reliably increases basket size, and **the mechanism is setting the
  threshold ABOVE current AOV.** It raises basket size, not conversion.
- **Evidence:** `DOCUMENTED`, INDEPENDENT/ACADEMIC tier. Lewis, Singh and Fay (2006) using an online
  retailer's database; Huang and Cheng (2015) on the above-AOV mechanism;
  <https://www.sciencedirect.com/science/article/abs/pii/S0969698918305757>, which also finds only a minor
  effect on order incidence. A commissioned Forrester study reported a 10-20% revenue increase during
  threshold periods. Practitioner guardrails, `HYPOTHESIS`: set at **+20% to +40% above AOV** with **at
  least 65% of orders still qualifying**.
- **Falsified by:** our own data showing contribution margin per visitor falling after introducing a
  threshold.
- **So we now:** set the threshold **from the order-value histogram, not the mean**, because thresholds move
  a cluster rather than the average; and judge it on **contribution margin per visitor**, because AOV can
  rise while profit falls once we absorb shipping on every newly-qualifying order.
- **Expires:** re-check quarterly.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the first five reviews carry the lift, and a 5.0 rating converts worse than 4.2-4.7
- **Claim:** nearly all review-driven purchase-likelihood uplift occurs **within the first 10 reviews, with
  the first five driving the bulk**; lower-priced items need only **2-4**; and **purchase likelihood peaks at
  a 4.0-4.7 star rating and declines toward 5.0.** A verified-buyer badge adds **~15%**.
- **Evidence:** `DOCUMENTED`, INDEPENDENT tier. Spiegel Research Center at Northwestern with PowerReviews,
  2017,
  <https://spiegel.medill.northwestern.edu/wp-content/uploads/sites/2/2021/04/Spiegel_Online-Review_eBook_Jun2017_FINAL.pdf>.
  **Important scoping:** the famous "**+270% purchase likelihood at five reviews**" comes from the high-end
  gift retailer dataset only (~15.5M page views, 1,800 products, one year) and is **not** "reviews raise
  your store's conversion rate 270%". Price interaction: **+190% on lower-priced items, +380% on
  higher-priced**. The report is 9 years old and is effectively the sole primary behind the entire "reviews
  lift conversion" genre, so treat every 2026 blog citing 270% as citing this one PDF.
- **Falsified by:** our own product-page CVR showing no step change between 0 and 5 reviews.
- **So we now:** treat **getting to five genuine reviews on the hero product** as a launch task with a
  deadline, because that is where the documented curve is steepest and it costs nothing. **We do not chase
  or fake a 5.0**, both because it converts worse and because fabricated reviews are a `compliance-guard`
  hard no.
- **Expires:** re-check quarterly.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the biggest fixable cause of abandonment is structural, not a flow
- **Claim:** after isolating the **42%** who were "just browsing" and are unfixable, the largest fixable
  abandonment cause is **extra costs (shipping, tax, fees) at 40%**, then slow delivery 20%, not trusting the
  site with card details 19%, forced account creation 18%, checkout too long 17%, and **total cost not
  visible before checkout 12%**. A recovery email does not change a $12 shipping fee, so **the structural
  fix is worth multiples more than the flow.**
- **Evidence:** `DOCUMENTED`, INDEPENDENT tier. Baymard, <https://baymard.com/learn/ux-statistics>. The
  headline **70.22%** abandonment rate is a **meta-average of 50 studies spanning 2006-2025**, an anchor
  rather than a current measurement (<https://baymard.com/lists/cart-abandonment-rate>). The widely
  circulated "48% extra costs" figure is **wrong**; the current number is 40%. Checkout benchmark: **5.1
  steps and 11.3 form fields** average, ideal around 8. Product-page defect rates: **43% of sites omit
  shipping info and 44% omit the return policy from the product page.** On trust, from Baymard's own survey
  work (n=2,510, waves 2013-2023): users judge security by appearance, and **visual encapsulation unique to
  the credit card fields** raises confidence, while a **homemade seal outperformed every real SSL seal
  except Norton.**
- **Falsified by:** our own checkout data showing abandonment concentrated somewhere else entirely.
- **So we now:** show **full landed cost before checkout begins**, keep guest checkout on, put the shipping
  ETA and return policy **on the product page**, show an estimated delivery date, and add visual
  encapsulation unique to the card fields. **We do not display a fake or homemade trust seal.** Baymard's
  finding is a fact about perception, not a licence to fabricate a security certification.
- **Expires:** no expiry (structural).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: faster shipping does NOT reduce returns
- **Claim:** **every day a package arrives earlier than average increases return likelihood**, and the
  effect is far stronger for **first-time buyers**. Late delivery also increases returns.
- **Evidence:** `DOCUMENTED`, INDEPENDENT/PEER-REVIEWED tier, and the strongest single study in this
  research. Masuch, Landwehr, Flath and Thiesse, "The faster, the better? The impact of short delivery times
  on product returns in online retailing," *Journal of Retailing* 100 (2024) 475-485,
  <https://d-nb.info/1373505605/34>. **1,802,467 single-line transactions**, 1,473,481 customers, US
  platform of a global fashion retailer, logistic regression exploiting **random variation in delivery
  times** with time, product-group, article and customer fixed effects. Earliness **+0.012 per day**
  (p<0.05); **earliness x new customer +0.030 per day** (p<0.001); lateness +0.011 per day (p<0.05). The
  authors' own managerial suggestion: retailers "could benefit from slowing their deliveries to new
  customers." **Stated limits:** one industry (fashion, 26% US return rate vs 5% for pet products), one
  retailer, one country, unintentionally-fast deliveries only, and **they did not measure the effect on
  purchase likelihood**, so the net revenue effect of faster shipping is unresolved.
- **Falsified by:** our own return data showing returns falling as delivery time falls in a non-apparel
  category, which is plausible given the stated scope limit.
- **So we now:** **keep preferring faster domestic fulfillment, but justify it on conversion, trust,
  item-not-received dispute exposure and ad-account health, NOT on reducing returns.** Instrument **delivery
  promise accuracy** and variance from the promised date rather than raw speed. Supporting evidence for the
  reliability framing (relayed by a cross-border fulfillment vendor with an interest in it, weight
  accordingly): **35% of consumers permanently abandon after a single late delivery**, **over 80% will wait
  4-7 days to avoid fees**, and **64% are more likely to complete a purchase when shown an estimated
  delivery date.**
- **Corrects:** the `ops-support` brief's phrase "faster shipping and fewer disputes", which conflated
  disputes with returns.
- **Expires:** no expiry (structural).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: reserve percentages are merchant folklore, and Mastercard's threshold is the one that could catch us
- **Claim:** **Stripe publishes no typical reserve percentage and no typical duration.** The "5-15% held
  30-180 days" convention is Stripe's general education content and consultant reporting, **not policy**.
  Shopify's own documented reserve examples are **"$1,000 reserved for 120 days"** and **"10% reserve for
  120 days"**, and **some reserves cannot be appealed.** Separately: **Visa VAMP cannot catch a store our
  size**, because Excessive Merchant status in the US and EU needs **both** a ratio at or above 220 basis
  points (150 from 1 April 2026) **and at least 1,500 fraud-plus-disputes in a single month**. **Mastercard
  ECM is the real threshold: 100-299 chargebacks in a month AND a ratio at or above 1.50%**, with fines from
  the second consecutive month and exit requiring three consecutive clean months.
- **Evidence:** `DOCUMENTED`, PLATFORM-OFFICIAL tier.
  <https://help.shopify.com/en/manual/payments/shopify-payments/payouts/reserves> and
  <https://help.shopify.com/en/manual/payments/shopify-payments/payouts/payout-timing> (which also states
  that **higher-risk accounts get custom extended payout periods of 5 to 20 business days** and that
  weekends and holidays do not count toward settlement), <https://docs.stripe.com/payouts>,
  <https://support.stripe.com/questions/reserves-frequently-asked-questions>, the Visa VAMP fact sheet, and
  Mastercard ECP thresholds via an acquirer guide. **The ECM trap:** the ratio divides this month's
  chargebacks by the **PRECEDING** month's sales, so **a month of falling sales mechanically inflates the
  ratio**, which is exactly the shape of an organic spike followed by a cooling month.
- **Falsified by:** a platform publishing an actual reserve rate card, or our own account receiving a
  reserve on documented terms different from these.
- **So we now:** state reserve risk as Shopify's documented examples plus "merchant-reported, not policy",
  which is how `docs/WARM-UP.md` already has it. **`docs/PLAYBOOK.md` section 1 and `docs/BUDGET-RULES.md`
  carry the older 5-15% phrasing and should be read as directional, not policy.** We never spend against
  unsettled revenue, and we keep the one-change-per-72h rule, which the ECM lagged denominator independently
  justifies. Also: **no debt, no Shopify Capital, no credit-card-funded ad spend**, since the accessible
  tier of capital documents at 50-180% APR.
- **Expires:** no expiry (structural), but re-check the April 2026 VAMP change.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: among surviving merchants, owned product wins, and AI adoption showed no financial edge
- **Claim:** across nine years of the same survey, merchants selling **their own products grow faster and
  earn better margins** than resellers and dropshippers, and the industry has been migrating that way.
- **Evidence:** `DOCUMENTED`, and the best non-vendor dataset we found on business models. eCommerceFuel
  State of the Merchant / Trends, <https://www.ecommercefuel.com/ecommerce-trends/>. 2026 edition: **300
  store owners, $3.5B combined revenue**; gross margins **49.5%, an all-time high**, while net margins hit
  an **all-time low of 10.6%**; **manufacturing adoption rose 41% to 58%**; **DTC-primary revenue growth
  30.2% vs Amazon-primary 18.3%**; **outsourced fulfillment growing 22.2%/yr vs owned warehouse 3.9%**; high
  performers (20%+ net margin) run **38% less COGS**. 2019 edition: **dropshipping as a model fell 51%**
  while manufacturing rose a third, with **manufacturing gross margins 53% vs 45% overall**. 2017 edition:
  own-product companies grew **~50% faster**. **Sample bias is upward and stated:** it is a paid community of
  already-profitable merchants, so this is evidence about what wins among survivors, **not** a failure rate.
  From the same 2026 survey, and worth carrying honestly given what this repo is: **AI adoption 72% with no
  financial edge** (adopters 26.7% revenue growth vs 27.8% for non-adopters; net income growth **32.7% for
  adopters vs 55.3% for non-adopters**).
- **Falsified by:** a later edition reversing the manufacturing trend, or our own margins on owned product
  coming in below our dropshipped margins.
- **So we now:** treat the dropship-to-brand path as the direction of travel rather than a someday
  aspiration, and treat our own agent team as a **leverage hypothesis rather than a proven advantage**. The
  staged ladder (sticker at ~$0.10/unit, printed mailers at 500 units, private label at 500-1,000 units per
  SKU, 3PL at ~500 orders/month against a ~$517 average monthly minimum) is in
  `docs/OPERATOR-PLAYBOOK.md`. Corroborating documented arc: **Gymshark started by dropshipping supplements
  in 2012 and moved to own-manufacture in 2013**, one year in.
- **Expires:** no expiry (structural), re-check with each annual edition.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the only rigorous data on dropshipping-education outcomes is FTC litigation
- **Claim:** buyers of ecommerce business-opportunity programs overwhelmingly do not make money, and the
  headline income figures in the genre are marketing assets belonging to businesses whose revenue is
  education, not products.
- **Evidence:** `DOCUMENTED`, and the hardest source in this research. **FTC v. Automators LLC** (Automators
  AI / Empire Ecommerce / Onyx Distribution): consumers invested **$22 million**, and the FTC states **"the
  vast majority of clients did not make the promised earnings or even break even on their investments."**
  Charged under the FTC Act, the Business Opportunity Rule and the Consumer Review Fairness Act
  (complainants were pressured into non-disparagement agreements instead of refunds). Feb 2024 settlement:
  lifetime ban on selling business opportunities or ecommerce coaching.
  <https://www.ftc.gov/legal-library/browse/cases-proceedings/automators>. Related: **Ecommerce Empire
  Builders / Peter Prusinowski** under FTC "Operation AI Comply", May 2025 order. Supporting `DOCUMENTED`
  items: **DESIRICHKID's Forbes India feature is slugged "Brand Connect"**, which Forbes itself defines as
  **"equivalent to advertisements and not written and produced by Forbes India journalists"**; and one
  prominent operator's own podcast numbers put his store's best month at **~$80k profit** against
  **~$350k in a single month** from his education and software business, roughly 4x.
- **Falsified by:** a methodologically sound independent study showing positive median outcomes for course
  buyers. None exists that we could find.
- **So we now:** buy no courses, ever, inside this challenge, and weight any tactic by whether its source
  shows a **denominator** rather than a big number. The 18-item omission-pattern checklist in
  `docs/OPERATOR-PLAYBOOK.md` section 2 is the standing instruction for reading this material in future
  research runs.
- **Also honest about our own file:** the "**90% of dropshippers fail**" figure has **no traceable primary
  study**; its timeframe mutates across sources (one year / 60 days / four months / one month) and every
  publisher of it sells a remedy. `docs/PLAYBOOK.md` section 2 labels its 80-90% as vendor estimates, which
  is correct, and we should stop treating the number as settled in either direction. **The one large-n
  reframe we did find says something narrower and far more useful:** a supplier platform's former President,
  with visibility into how many products a store connects versus whether it ever sold anything, states
  **"the reason 90%+ of dropshippers never make a sale is because 90%+ only connect 0 to 1 products before
  quitting"** (<https://reddit.com/comments/1qc5bx7>). Single-source insider data, and he left to build a
  competitor in the same space so the advice conveniently increases supplier volume, but **it recasts the
  headline number from a claim about the model's ceiling into a claim about attrition.** Most people do not
  fail at this, they quit before running the experiment.
- **Expires:** no expiry (structural).
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the industry's path to a winning product costs 50-200 paid tests
- **Claim:** a funded operator's real product-testing funnel is **10-20 products tested per one that gets
  traction, then 5-10 with traction per one real winner**, i.e. **50 to 200 tests per winner**, at roughly
  **$20 of broad-ad spend per test**.
- **Evidence:** `DOCUMENTED` in the sense that it is a named operator's stated regime **with the denominator
  spelled out**, from a full podcast transcript rather than a thumbnail. OPERATOR tier, and the operator also
  sells software, so weight accordingly. Their kill rule: **"if we get one add-to-cart, keep the ad going;
  if we get no add-to-cart, kill it."**
- **Falsified by:** our own hit rate on pre-validated products differing materially, which is the whole
  question our pre-validation work exists to answer.
- **So we now:** say plainly that **$1,000-$4,000 is the brute-force price of a winner and we have $100.**
  All of our expected value therefore has to come from **pre-validation quality and creative volume**, not
  from test count. That is a substitution forced by the budget, not a superior method, and the day-30
  readout should say so rather than claiming we found a better way.
- **Expires:** re-check quarterly.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: a healthy ecommerce net margin is ~10-13%, and ROAS does not predict it
- **Claim:** net margin, not ROAS, is the scoreboard, and the honest band for a well-run store is around
  **10-13% net**, not the 20-40% that circulates in success posts.
- **Evidence:** `DOCUMENTED`, converging from four independent directions. **Survey:** eCommerceFuel 2026,
  n=300, **gross margin 49.5% at an all-time high while net margin hit an all-time low of 10.6%**, and its
  own conclusion, **"winning with paid is about great margins and low overhead, not ROAS."**
  **Practitioner with n=350:** a bookkeeper serving 350+ ecommerce companies, replying to an operator who
  called an 11.8% net "brutal": **"This isn't 'brutal'. This is normal. Almost 13% net is what a lot of the
  owners would love to see."** <https://reddit.com/comments/1l76kw9>, where the full line-item year was
  **$250,843 revenue to $29,497 net** at COGS 45%, shipping and fulfillment 15%, ads 14% on a blended ROAS
  of ~3.5, returns 4%. **The ROAS disconnect, measured twice:** a blended **3.5 ROAS produced 11.8% net**,
  while a **2.3 ROAS week produced 5.1% net** on $22k of revenue (<https://reddit.com/comments/1olq8v1>).
  **The hidden line item:** at an **$85 AOV** an operator measured **$4-$5 per order of amortized app
  subscriptions**, contributing to **"like $20+ in costs before I even count what I actually paid for the
  product"** (<https://reddit.com/comments/1r0afdl>). All community figures are self-reported and unaudited.
- **Falsified by:** our own net margin landing well outside this band with the arithmetic shown.
- **So we now:** report **net and contribution margin as the headline in every ledger entry, with ROAS as a
  supporting input**, and **admit no app into the store without a stated per-order cost and the specific
  number it must move.** Also: assume every self-reported margin found online is inflated by the
  markup-versus-margin error, per the correction **"if your gross margin is 100%, it means you got the
  product for free."**
- **Expires:** re-check quarterly.
- **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: at our budget the whole ad account is one campaign and one broad ad set
- **Claim:** under roughly $1,000/month of ad spend, the correct Meta structure is **one sales campaign, one
  broad ad set, 3-5 genuinely different creative concepts, no interest stacking, no lookalikes and no
  separate retargeting campaign.**
- **Evidence:** `DOCUMENTED`, COMMUNITY-CONSENSUS. Four independent practitioners agreeing in one 2026 r/PPC
  thread asked at exactly this budget, <https://reddit.com/comments/1sikbwx>: **"Low budgets usually get
  killed by too much structure, not too little"** and **"You need signal, not control."** Their numbers:
  **$50/day per creative is "way overkill"** at $33/day total, so **$10-$15/day per ad, killing anything that
  has not hit a 2-3% CTR by day 3**; and on read thresholds they are honest that "2x target CPA per ad set is
  usually still pretty light, so I'd treat that as directional only." A separate operator's kill rule ties it
  to unit economics instead: **spend 3x the unit profit testing a product** (a $17-profit product gets $51).
  The bottleneck they all name is **creative supply, not structure**. Corroborating the direction from the
  platform side: TikTok officially recommends **3-5 creatives per ad group** and creatives with **"big
  differences"**.
- **Falsified by:** our own data showing a segmented structure outperforming a single broad ad set at this
  spend level.
- **So we now:** run one campaign and one broad ad set when paid begins, and spend the saved effort on
  creative volume. **The stacked-interests, 1%-lookalike, separate-MOF/BOF structure still recited in these
  communities is from a 2021 post and every 2025-26 practitioner in the corpus says to delete the
  audience-stacking half and keep the creative half.** If a guide tells us to build five audience segments on
  $30/day, it is quoting 2021.
- **Expires:** re-check quarterly.
- **Written by:** research run, via `challenge-lead`.

---

# Live knowledge

**Status: no learnings yet. The challenge has not started (see `tracker/LEDGER.md`, out-of-pocket
$0.00).** Every live section below is deliberately blank. Do not seed it with plausible-sounding
dropshipping wisdom from the internet; that belongs in `docs/PLAYBOOK.md` (or `docs/OPERATOR-PLAYBOOK.md`)
as research, clearly marked as such, and its short form belongs in *External evidence* above, never here.
This file's live sections only hold things **we** observed with **our own** numbers.

There are **17 entries in *External evidence* above**, which are other people's sourced numbers, several of
them corrections to our own playbook. They are not learnings and must never be cited as our results; the
moment we have our own number on the same question, ours supersedes.

There are **2 entries in *Open hypotheses*** further down, both of them our own authored protocols
(`docs/WARM-UP.md` Protocol v1, and the `docs/NO-STALL.md` procedures) filed correctly as untested
hypotheses with the test that would settle each. That is what the section is for. They are not learnings
and must not be cited as though they were.

## Winning products
What won, and **why** it won: price band, landed cost and margin, hook style that carried it, audience
it landed with, and which pre-validation signal actually predicted the win.

*(no entries yet)*

## Losing products
What lost and why, so it is not retried. Include the pre-validation signal that misled us, because that
is the transferable lesson. Note the expiry: a product that lost in a bad week is not banned forever,
but re-testing it needs a stated reason.

*(no entries yet)*

## Hooks and creative
Which hook formulas actually pulled, with the numbers (watch-through, saves, shares, comments, profile
taps, and any sales attributable). Hook family, not just individual videos. Also: which AI-video
formats read as AI and cost conversion.

*(no entries yet)*

## Channels and tactics
What beat what, with numbers. Posting cadence, posting time, caption style, cover/thumbnail effects,
TikTok Shop vs pinned-comment CTA, API posting vs anything else, warm-up outcomes, organic vs the first
paid test.

*(no entries yet)*

## Pricing and AOV
Price points tested, conversion at each, bundle and order-bump results, real net margin vs modelled net
margin, break-even ROAS as computed vs as experienced.

*(no entries yet)*

## Operational
Supplier reliability, real shipping times vs promised, defect and return rates, support ticket volume
and causes, dispute/chargeback reality, processor behaviour (payout timing, reserves if any).

*(no entries yet)*

## Anti-patterns
Things **proven** not to work here, with the evidence. This section is the most valuable one over time
because it stops repeated spending of attention. An anti-pattern needs the same evidence standard as
anything else; a bad feeling is a hypothesis.

*(no entries yet)*

---

# Open hypotheses (untested, NOT learnings)

Labelled guesses waiting on evidence, each with the test that would settle it. Anything moved out of
here into the live sections must arrive with numbers.

### [2026-08-10] HYPOTHESIS: the Challenge Warm-Up Protocol v1 buys distribution that a cold account would not get
- **Claim:** running `docs/WARM-UP.md` -> Challenge Warm-Up Protocol v1 as written (7 days of human
  in-app behaviour, 3 native non-promotional posts, 1 product-in-frame post, then 2 then 3 posts/day, with
  the pixel warmed at $0 spend, the domain authenticated on purchase day, and processor verification
  finished same-day) produces better distribution on the first promotional posts, and fewer platform
  interventions, than opening an account and posting product content immediately.
- **Evidence:** **none yet.** Zero posts exist and no account has been created (`tracker/LEDGER.md`,
  out-of-pocket $0.00). The protocol's foundations are documented platform facts (roughly 50 optimisation
  events in 7 days exits Meta's learning phase and edits reset it; TikTok floors of ~$50/day campaign and
  ~$20/day ad group with prepay billing; SPF's hard 10 DNS lookup limit; the processor's published custom
  payout schedules, reserves, and pending-documents trigger). **Every day count and every engagement count
  in the protocol is our inference**, listed explicitly in the doc's documented-versus-inference split.
- **Confidence:** none, it is untested. It will be **Low** even after warm-up, permanently, because with
  one account there is no control group.
- **Falsified by:** first promotional posts performing no better than a cold account's would, or a
  platform intervention arriving anyway, or the FYP failing to serve the niche after 5 days of in-niche
  engagement.
- **The test that settles it:** the measurement list in the protocol's "What we measure during warm-up"
  section, recorded daily in the ledger's Warm-up status block, then an element-by-element verdict on
  protocol Day 1 and again on Day 7.
- **So we now:** execute the protocol as written rather than re-deliberating a schedule each morning, and
  publish v2 with `SUPERSEDES v1` if any element is adjusted or refuted.
- **Expires:** no expiry (structural), but the Day 7 verdict replaces this entry.
- **Written by:** challenge-lead (authored by the setup seat, 2026-08-10).

### [2026-08-10] HYPOTHESIS: the no-stall procedures keep every run productive without inventing work
- **Claim:** the ten procedures in `docs/NO-STALL.md` (5-candidate bench, kill-and-promote in the same
  run, Prepared Action Cards, cost-of-delay ranking, the Widening Ladder, the CTA ladder, the Paid
  Readiness Dossier with its $150 trigger, the five incident runbooks, the reduced-mode ladder, and the
  twelve-item Standing Work Queue) mean every run produces a real named artifact, and that a blocked gate
  or a failed product never costs a day.
- **Evidence:** **none yet.** No run has happened. These are our inventions, authored 2026-08-10; the
  documented parts (kill thresholds, platform budget floors, the learning-phase threshold, FTC
  prompt-delivery, the 1% chargeback ceiling) are cited in the file and are not what is being tested here.
- **Confidence:** none, untested.
- **Falsified by:** any run that ends with only a blocker and no artifact; a kill that takes more than
  one run to promote a replacement; founder action cards that are consistently skipped, which would mean
  the cards or the day-rates are wrong; or a procedure that is never triggered at all, which proves
  nothing either way and stays UNTESTED.
- **The test that settles it:** at day 30, count the runs that produced a named artifact (target: all of
  them), the days between each kill and its replacement's first asset (target: 0), and the share of
  founder actions completed on the day they were first presented.
- **So we now:** run the procedures as written and mark each one CONFIRMED / ADJUSTED / REFUTED /
  UNTESTED once data exists, republishing as v2 on any change.
- **Expires:** no expiry (structural).
- **Written by:** challenge-lead (authored by the setup seat, 2026-08-10).

---

# Superseded and expired (archive, keep readable)

*(no entries yet)*

---

# Who writes what

Reading this file is mandatory for every agent in `.claude/agents/`, at the start of every run, before
acting. Writing is owed at these moments:

| Agent | Writes a learning when | Into |
|---|---|---|
| `product-scout` | a product test concludes (win or lose), and whether its pre-validation evidence predicted the outcome | Winning / Losing products |
| `offer-economist` | modelled economics meet reality: real margin, real break-even, price/bundle test results, and every kill/scale call with its number | Pricing and AOV, Anti-patterns |
| `creative-director` | a hook family has enough posts to judge | Hooks and creative |
| `content-engine` | a video format, tool or posting cadence shows a measurable difference (including AI tells and API posting effects) | Hooks and creative, Channels and tactics |
| `growth-operator` | the daily numbers support a conclusion about a channel, cadence, CTA route or warm-up outcome | Channels and tactics |
| `ops-support` | a supplier, shipping window, support pattern or dispute teaches something durable | Operational |
| `compliance-guard` | something gets flagged, rejected or blocked, or a rule turns out to differ from what we assumed | Anti-patterns |
| `store-architect`, `copywriter` | a page, layout or copy change moves CVR or ticket volume measurably | Pricing and AOV, Channels and tactics |
| `challenge-lead` | daily, as the last step of the loop, including plainly recording days that produced nothing | any section, plus the weekly maintenance sweep |

**No agent writes a learning it cannot evidence.** The correct output in that case is a `HYPOTHESIS`
entry, or nothing at all.
