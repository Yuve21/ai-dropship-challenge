# Learnings: the knowledge base that changes what we do next

The ledger records **what happened**. This file records **what we now believe, why, and what changes
because of it**. Read it before acting; write to it when a test concludes. That is the entire mechanism
by which this challenge gets smarter instead of just busier. Retrieval-based learning, not model
training: no weights change, agents just start from validated lessons instead of a blank page.

---

## The rules

1. **Evidence, or it is a hypothesis.** No numbers behind it means it is not a learning: label it `HYPOTHESIS`, file it under *Open
   hypotheses* with the test that would settle it. Promotion to a learning requires real numbers.
2. **Numbers come from the ledger or a dashboard.** Cite which `tracker/LEDGER.md` dated entry or which dashboard, and mark
   **estimated** vs **dashboard-confirmed**. Never a number from memory, a guru video or a case study. Competitor and vendor claims
   are context, not evidence.
3. **Every entry is falsifiable.** State the observation that would prove it wrong. If nothing could disprove it, it does not belong.
4. **Confidence is declared, on this ladder:**
   - **Low** = n=1, a single day, or directional only. One video, one order, one session.
   - **Medium** = repeated across 3+ instances or a full week, in one channel.
   - **High** = repeated, quantified, and it held after a deliberate re-test that could have broken it.
   State the sample size out loud. n=1 is never Medium.
5. **Supersede, never accumulate contradictions.** Never silently edit a wrong entry: mark it superseded and write the replacement
   (next section).
6. **Product-level learnings expire.** Winners rotate weekly. Any entry about a specific product or trend carries an `expires:` date
   (default 30 days). After that it is history, not guidance.
7. **A day with no learning says so.** "2026-xx-xx: no new learning today, N posts made, no metric moved enough to conclude
   anything" is a correct and useful entry. Inventing a lesson to fill the slot poisons the file, and is the single most likely way
   this file goes bad.
8. **A test that could not fail is not evidence.** If the setup guaranteed the outcome, say so and log no learning.

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

Knowledge bases go stale and start disagreeing with themselves. Handle both visibly.

- **To supersede an entry:** leave the original text in place, prepend `SUPERSEDED YYYY-MM-DD: <one line on why>`, move it to
  *Superseded and expired* at the bottom, and write the new entry in the live section with a pointer back (`supersedes: [date] short
  claim`). Never delete: the history is how we avoid re-learning the same thing twice.
- **Two live entries may never contradict each other.** Resolving a conflict is part of writing the new entry: either supersede the
  old one, or narrow both ("true on TikTok organic, not true in paid") so they no longer collide. Leaving both standing is a defect.
- **Expiry is not deletion.** An expired product learning moves to *Superseded and expired* with `EXPIRED YYYY-MM-DD` and stays
  readable: "this product won in August" still documents *why* it won (price band, hook shape, audience). Extract the durable
  pattern into the right section before archiving the specific.
- **Expiry speeds:** specific products and trends, ~30 days. Hook formulas, pricing/AOV findings and channel tactics, re-check
  quarterly. Operational lessons (supplier reliability, shipping reality) and anti-patterns rarely expire.
- **Weekly maintenance:** `challenge-lead` sweeps this file weekly, checks expiry dates, resolves contradictions, moves dead entries
  to the archive. Live sections stay at the top.

---

# External evidence (borrowed, NOT ours)

Findings from a 2026-08-10 research run, solid enough to change what we do, several of which correct our
own playbook. **Fenced off from Live knowledge on purpose:**

- **None of these is a learning.** A learning means *we* measured it. These are other people's numbers,
  labelled `DOCUMENTED` (a sourced fact) or `HYPOTHESIS` (an inference or unverified operator claim), with
  the source tier named.
- **Our own number on the same question supersedes the external entry,** with a pointer to the live one.
- **Confidence is not declared here:** the ladder measures *our* sample size and we have none. Source tier
  instead.
- Full reasoning, the staging table and the source list: **`docs/OPERATOR-PLAYBOOK.md`**.

### [2026-08-10] EXTERNAL: profit lives in contribution margin per order, not in ROAS or LTV
- **Claim:** the gate on whether a product works is **first-order contribution margin at or above zero** (revenue minus COGS,
  shipping, fulfillment, payment fees, returns and CAC). Break-even **aMER (new-customer revenue / total ad spend) = 1 /
  contribution margin**: 3.33 at 30% CM, 2.0 at 50%.
- **Evidence:** `DOCUMENTED`, OPERATOR tier. Common Thread Collective, forecasting for hundreds of DTC brands,
  <https://commonthreadco.com/blogs/bridges/unlock-first-order-profitability>. Their case data: optimizing for 60-day LTV meant
  **spending $70,000 more to generate $12,000 of incremental lifetime profit**. Blended MER lies: $1M/mo on $250k spend reads as 4:1
  MER but is break-even at 2:1 aMER, and doubling spend at equal efficiency produces zero incremental contribution margin while the
  headline improves. DTC median contribution margin ~25% (bookkeeping platform aggregating $3.16B of brand revenue); healthy above
  30%, 20% minimum, under 10% structurally broken.
- **Falsified by:** our own repeat-purchase data showing a second order arriving fast and reliably enough that a negative
  first-order margin is recovered inside our cash cycle.
- **So we now:** `offer-economist` computes contribution margin per order and break-even aMER before any spend, alongside break-even
  ROAS. We do not plan on an LTV we have not observed.
- **Contradicts:** the standard DTC line (and the premise of the brief that commissioned this research) that a first purchase only
  breaks even and profit lives in repeat purchase. Recorded as a correction, not silently applied.
- **Expires:** no expiry (structural). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: creative volume is a weekly rate with a published winner probability
- **Claim:** the operating variable is **net-new creatives per week**, not creatives per product. Roughly **5-8% of ads become
  winners** (a winner spends 10x the account's median single-ad spend); **about half of all ads never get meaningful spend**; **20
  ads yields 1 to 1.6 winners**; **5 creatives/week gives a ~26% probability of finding a winner that week**.
- **Evidence:** `DOCUMENTED`, PLATFORM-AGGREGATE tier. Motion Creative Benchmarks 2026: **578,750 creatives, 6,015 brands, $1.29B
  spend**, Meta, Sept 2025 to Jan 2026, <https://go.motionapp.com/benchmarks>. The under-$10k-spend tier averages **2.80 new
  creatives/week**, top quartile **4.83**; the spread inside a tier (top quartile ships 2-3x its same-budget peers) matters more than
  the average. Independent corroboration from Common Thread Collective across 170+ brands: outlier rate **3.5%**, the **top 3.5% of
  ads take 66% of spend**, **79% of ads never reach $1,000**, and `ads to launch = desired outliers / 0.035`. Motion sells creative
  analytics, so its framing favours volume; still the largest public dataset.
- **Falsified by:** our own posting data showing winners arriving at a materially different rate per creative shipped, in which case
  we recompute the floor from our own hit rate.
- **So we now:** **3 net-new creatives per DAY is our floor (21/week), 5/day the target**, tracked as a rate, owned and reported by
  `creative-director`. Arithmetic in `docs/MANDATE.md`; this supersedes the 5/week floor first set from this entry, which yielded only
  0.25-0.4 winners/week against a 30-day target. 3-5 per product remains the launch minimum only.
- **Narrows:** `docs/PLAYBOOK.md` section 5's "minimum 3-5 creatives per product", a launch minimum that reads like an ongoing rate.
- **Also `DOCUMENTED`:** by winner **hit rate**, text-only ads (11.60%) and product image plus text (8.75%) beat UGC (7.56%) and
  high-production video (6.87%); static images are 55.6% of all ads and 64.8% among DTC brands. The all-video assumption is wrong.
- **Expires:** re-check quarterly (channel tactic). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: creative fatigue compressed to 2-4 weeks and ads now peak in week one
- **Claim:** creative decays far faster than the older 6-8 week folklore, and **an ad peaks in its first week and then plateaus**
  rather than improving through weeks 2-3.
- **Evidence:** `DOCUMENTED`, PLATFORM-AGGREGATE tier. Confect Andromeda study: **3,014 ecommerce advertisers, 73 countries, $834M
  spend, 115.7B impressions, 1M ads, 44.3M purchases**, full-year 2025, <https://confect.io/tactics/meta-andromeda-2026>. Same
  dataset: overall ROAS **-7%** with no recovery signal, landing-page CVR **-17%**, prospecting ROAS **-13%**, the **top third of
  advertisers by ROAS fell 31%** while bottom performers trended up, **affordable products -35%**, **single image/video the worst
  format at -17%**, top performers ran **395 live ads vs 296**. Confect sells catalog-ad tooling, so discount its catalog-specific
  prescriptions. Meta's only official fatigue definition is lagging: "Creative limited" is cost per result under 2x past ads,
  "Creative fatigue" is 2x or more.
- **Falsified by:** our own creative data showing a video that materially improves in weeks 2-3 relative to week 1, repeatedly.
- **So we now:** judge a creative inside its **first week**, refresh on signal (hook-rate decay is the earliest tell) rather than on
  a calendar, and plan **4-6 variations per winner** since half of everything is switched off before day 28.
- **Note:** this **strengthens** our two-kill-clocks rule. Creative signal arrives in week one while product validation still takes
  weeks, so "judge hooks fast, judge the product slowly" is more correct than before, not less.
- **Expires:** re-check quarterly (channel tactic). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: nobody documents 20% as a scaling threshold, and credible operators disagree flatly
- **Claim:** **no Meta documentation establishes any percentage as a budget-change reset threshold.** Meta says only that budget and
  bid changes "may" be significant depending on magnitude. Named operators managing $50M to $200M+ prescribe **+20%/day on a single
  CBO** and **30-50%/day on a separate scale CBO** respectively, each explicitly rejecting the other's method.
- **Evidence:** `DOCUMENTED` for the absence: Meta's significant-edits documentation enumerates which edits restart learning
  (pausing, and changes to optimization event, audience or creative including adding new ads) and publishes **no percentage**.
  `HYPOTHESIS` for every specific step size in circulation. The most complete published ruleset sits at +15-30% per change, minimum
  2-3 days apart, with above 50% "significantly increasing the risk" of a reset. TikTok **does** publish step sizes, only inside its
  Smart+ docs: bid edits up to **15% every 2 days** after learning, daily budget up to **+30%** when a campaign regularly exhausts
  90%+ of budget.
- **Falsified by:** a platform-published percentage threshold appearing, or our own data showing a 20% increase demonstrably
  resetting learning where a 15% one did not.
- **So we now:** **keep our +20% every 48-72h rule but carry it as `HYPOTHESIS`, not as a documented threshold.** We hold the
  conservative end for asymmetric-risk reasons, not evidentiary ones: a blown week is survivable at $5,000/day and terminal at our
  size. Adopt the undisputed parts: no budget change on the same day as any other edit; prerequisites of 3-day ROI above threshold
  and campaign live 5+ days; stop condition of CPA +25% within 72h; rollback if the drop persists 5-7 days.
- **Expires:** re-check quarterly. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: owned-channel revenue lives in two flows, and the famous 27% stat is from 2016
- **Claim:** automated flows, not campaigns, are where owned-channel revenue is, and **abandoned cart plus welcome alone account for
  76% of all automation-generated orders.** The ubiquitous "email drives 27% of ecommerce revenue, per Klaviyo" figure is **Q4 2016
  data**.
- **Evidence:** `DOCUMENTED`, PLATFORM-AGGREGATE tier. Omnisend, calendar year 2025, **150,000 brands, 27 billion emails**,
  <https://www.omnisend.com/blog/email-marketing-benchmarks/>: automations **$3.41 per email** vs campaigns **$0.155**, and
  automations are **2% of sends producing 30% of email revenue**. Per flow: back-in-stock **$9.14** (6.72% conversion), welcome
  **$6.16**, abandoned cart **$3.59** (1.72%), shipping confirmation $3.08, order confirmation $2.88, cross-sell $0.95, browse
  abandonment $0.76, reactivation $0.51. **Open rates are essentially identical between campaigns and automations (30.4% vs 30.2%),
  so the entire ~20x revenue gap is click and conversion, not subject lines.** Klaviyo across 183,000+ brands agrees on shape: flows
  are 5.3% of sends and ~41% of email revenue, ~18x campaign revenue-per-recipient, and **48% of flow revenue comes from NEW
  buyers**, so flows close acquisition and are not only retention. The 2016 provenance of the "27%" figure is visible on its own
  source page, <https://www.klaviyo.com/marketing-resources/ecommerce-benchmarks>.
- **Falsified by:** our own flow revenue landing outside these bands by an order of magnitude, or browse abandonment out-earning our
  cart flow.
- **So we now:** build **welcome plus abandoned checkout first and nothing else**; optimize triggers and timing rather than subject
  lines; use **Shopify Email**, whose abandoned-checkout automations are free forever and do **not** count against the 10,000/month
  allowance, rather than Klaviyo, which bills on **active profiles** and auto-upgrades to a paid tier at cycle start (a live risk to
  the $100 cap).
- **Also `DOCUMENTED`, and why the flow is not the main fix:** a cart-recovery flow converts only **1.72% to 3.33% of recipients**,
  not the 10-30% vendors imply.
- **Expires:** re-check quarterly. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: post-purchase upsells are suppressed for most mobile payment methods
- **Claim:** Shopify post-purchase offers require a **card vaulted during a non-redirect checkout**, so they **do not display at
  all** for Apple Pay, Google Pay, Amazon Pay, Klarna, Affirm, Afterpay, Shop Pay Installments, gift cards, non-default currencies,
  orders including duties, local delivery, or orders under $0.50. Shop Pay at full payment works; PayPal Express needs Reference
  Transactions approval, requires a login, and supports only **one** offer.
- **Evidence:** `DOCUMENTED`, a platform constraint documented consistently by multiple independent app vendors implementing it, e.g.
  <https://help.rebuyengine.com/en/articles/6706477-shopify-s-post-purchase-offer-considerations-limitations> and
  <https://help.zipify.com/en/articles/4684879-supported-payment-processors-for-post-purchase-offers-ocu>. Separately `DOCUMENTED`:
  **Shopify publishes no first-party data on post-purchase upsell take rates**; its own blog on the subject is entirely CartHook
  merchant case studies, and it is the most-cited "Shopify data" in the category.
- **Falsified by:** measuring our own orders and finding the eligible share is high.
- **So we now:** **measure the eligible share of our own orders BEFORE installing any post-purchase upsell app**, on a funnel where
  roughly 70% of retail orders are mobile. Planning band if we do install one: **8-15% take rate, 5-10% AOV lift**, treating
  anything above 20% as vendor territory. One mechanic beats the benchmark: if it is not one-click on a card already on file, it
  does not work.
- **Reorders our AOV levers:** product-page quantity breaks and a free-shipping threshold become primary; the post-purchase upsell
  becomes conditional. Checkout-page order bumps are effectively Plus-gated, so the pre-payment bump available to us is a cart-page
  offer.
- **Expires:** re-check quarterly (platform behaviour changes). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: multi-unit bundles are the only AOV lever that raises margin RATE
- **Claim:** per-order shipping and the ~2.9% + $0.30 payment fee are near-fixed while COGS scales linearly, so a multi-unit bundle
  amortizes one shipping event and one payment fee across several units and **raises contribution margin per order faster than
  revenue, even at a 20-25% unit discount.** The other AOV levers raise absolute contribution while diluting margin rate, and rate
  is what we are short of.
- **Evidence:** `HYPOTHESIS` for the mechanism, which is our own arithmetic and is checkable against our ledger. `DOCUMENTED` that
  this is the weakest-evidenced lever in the AOV area: **every published bundle AOV-lift figure originates from a bundling-app
  vendor's own blog**, and we deliberately quote none of them. `DOCUMENTED` design constraint: **native Shopify quantity discounts
  only surface at checkout**, so a tier table that is not on the product page is invisible and the tactic dies.
- **Falsified by:** our own contribution-margin-per-order data on bundled vs single orders showing no rate improvement.
- **So we now:** make a **product-page quantity-break table** the primary AOV mechanic, and judge it on contribution margin per
  order rather than on AOV.
- **Expires:** re-check quarterly (pricing/AOV finding). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: free-shipping thresholds are the one AOV lever with peer-reviewed support
- **Claim:** threshold free shipping reliably increases basket size, and **the mechanism is setting the threshold ABOVE current
  AOV.** It raises basket size, not conversion.
- **Evidence:** `DOCUMENTED`, INDEPENDENT/ACADEMIC tier. Lewis, Singh and Fay (2006) using an online retailer's database; Huang and
  Cheng (2015) on the above-AOV mechanism; <https://www.sciencedirect.com/science/article/abs/pii/S0969698918305757>, which also
  finds only a minor effect on order incidence. A commissioned Forrester study reported a 10-20% revenue increase during threshold
  periods. Practitioner guardrails, `HYPOTHESIS`: set at **+20% to +40% above AOV** with **at least 65% of orders still qualifying**.
- **Falsified by:** our own data showing contribution margin per visitor falling after introducing a threshold.
- **So we now:** set the threshold **from the order-value histogram, not the mean**, because thresholds move a cluster rather than
  the average; judge it on **contribution margin per visitor**, because AOV can rise while profit falls once we absorb shipping on
  every newly-qualifying order.
- **Expires:** re-check quarterly. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the first five reviews carry the lift, and a 5.0 rating converts worse than 4.2-4.7
- **Claim:** nearly all review-driven purchase-likelihood uplift occurs **within the first 10 reviews, with the first five driving
  the bulk**; lower-priced items need only **2-4**; **purchase likelihood peaks at a 4.0-4.7 star rating and declines toward 5.0.** A
  verified-buyer badge adds **~15%**.
- **Evidence:** `DOCUMENTED`, INDEPENDENT tier. Spiegel Research Center at Northwestern with PowerReviews, 2017,
  <https://spiegel.medill.northwestern.edu/wp-content/uploads/sites/2/2021/04/Spiegel_Online-Review_eBook_Jun2017_FINAL.pdf>.
  **Scoping:** the famous "**+270% purchase likelihood at five reviews**" comes from the high-end gift retailer dataset only (~15.5M
  page views, 1,800 products, one year) and is **not** "reviews raise your store's conversion rate 270%". Price interaction: **+190%
  on lower-priced items, +380% on higher-priced**. The report is 9 years old and is effectively the sole primary behind the entire
  "reviews lift conversion" genre, so treat every 2026 blog citing 270% as citing this one PDF.
- **Falsified by:** our own product-page CVR showing no step change between 0 and 5 reviews.
- **So we now:** treat **getting to five genuine reviews on the hero product** as a launch task with a deadline, because that is
  where the documented curve is steepest and it costs nothing. **We do not chase or fake a 5.0**, both because it converts worse and
  because fabricated reviews are a `compliance-guard` hard no.
- **Expires:** re-check quarterly. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the biggest fixable cause of abandonment is structural, not a flow
- **Claim:** after isolating the **42%** who were "just browsing" and are unfixable, the largest fixable abandonment cause is
  **extra costs (shipping, tax, fees) at 40%**, then slow delivery 20%, not trusting the site with card details 19%, forced account
  creation 18%, checkout too long 17%, and **total cost not visible before checkout 12%**. A recovery email does not change a $12
  shipping fee, so **the structural fix is worth multiples more than the flow.**
- **Evidence:** `DOCUMENTED`, INDEPENDENT tier. Baymard, <https://baymard.com/learn/ux-statistics>. The headline **70.22%**
  abandonment rate is a **meta-average of 50 studies spanning 2006-2025**, an anchor rather than a current measurement
  (<https://baymard.com/lists/cart-abandonment-rate>). The widely circulated "48% extra costs" figure is **wrong**; the current
  number is 40%. Checkout benchmark: **5.1 steps and 11.3 form fields** average, ideal around 8. Product-page defect rates: **43% of
  sites omit shipping info and 44% omit the return policy from the product page.** On trust, from Baymard's own survey work
  (n=2,510, waves 2013-2023): users judge security by appearance, **visual encapsulation unique to the credit card fields** raises
  confidence, and a **homemade seal outperformed every real SSL seal except Norton.**
- **Falsified by:** our own checkout data showing abandonment concentrated somewhere else entirely.
- **So we now:** show **full landed cost before checkout begins**, keep guest checkout on, put the shipping ETA and return policy
  **on the product page**, show an estimated delivery date, and add visual encapsulation unique to the card fields. **We do not
  display a fake or homemade trust seal.** Baymard's finding is a fact about perception, not a licence to fabricate a security
  certification.
- **Expires:** no expiry (structural). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: faster shipping does NOT reduce returns
- **Claim:** **every day a package arrives earlier than average increases return likelihood**, far more strongly for **first-time
  buyers**. Late delivery also increases returns.
- **Evidence:** `DOCUMENTED`, INDEPENDENT/PEER-REVIEWED tier, the strongest single study in this research. Masuch, Landwehr, Flath
  and Thiesse, "The faster, the better? The impact of short delivery times on product returns in online retailing," *Journal of
  Retailing* 100 (2024) 475-485, <https://d-nb.info/1373505605/34>. **1,802,467 single-line transactions**, 1,473,481 customers, US
  platform of a global fashion retailer, logistic regression exploiting **random variation in delivery times** with time,
  product-group, article and customer fixed effects. Earliness **+0.012 per day** (p<0.05); **earliness x new customer +0.030 per
  day** (p<0.001); lateness +0.011 per day (p<0.05). The authors' own managerial suggestion: retailers "could benefit from slowing
  their deliveries to new customers." **Stated limits:** one industry (fashion, 26% US return rate vs 5% for pet products), one
  retailer, one country, unintentionally-fast deliveries only, and **they did not measure the effect on purchase likelihood**, so the
  net revenue effect of faster shipping is unresolved.
- **Falsified by:** our own return data showing returns falling as delivery time falls in a non-apparel category, plausible given
  the stated scope limit.
- **So we now:** **keep preferring faster domestic fulfillment, but justify it on conversion, trust, item-not-received dispute
  exposure and ad-account health, NOT on reducing returns.** Instrument **delivery promise accuracy** and variance from the promised
  date rather than raw speed. Supporting evidence for the reliability framing (relayed by a cross-border fulfillment vendor with an
  interest in it, weight accordingly): **35% of consumers permanently abandon after a single late delivery**, **over 80% will wait
  4-7 days to avoid fees**, **64% are more likely to complete a purchase when shown an estimated delivery date.**
- **Corrects:** the `ops-support` brief's phrase "faster shipping and fewer disputes", which conflated disputes with returns.
- **Expires:** no expiry (structural). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: reserve percentages are merchant folklore, and Mastercard's threshold is the one that could catch us
- **Claim:** **Stripe publishes no typical reserve percentage and no typical duration.** The "5-15% held 30-180 days" convention is
  Stripe's general education content and consultant reporting, **not policy**. Shopify's own documented reserve examples are
  **"$1,000 reserved for 120 days"** and **"10% reserve for 120 days"**, and **some reserves cannot be appealed.** **Visa VAMP cannot
  catch a store our size**: Excessive Merchant status in the US and EU needs **both** a ratio at or above 220 basis points (150 from
  1 April 2026) **and at least 1,500 fraud-plus-disputes in a single month**. **Mastercard ECM is the real threshold: 100-299
  chargebacks in a month AND a ratio at or above 1.50%**, with fines from the second consecutive month and exit requiring three
  consecutive clean months.
- **Evidence:** `DOCUMENTED`, PLATFORM-OFFICIAL tier.
  <https://help.shopify.com/en/manual/payments/shopify-payments/payouts/reserves> and
  <https://help.shopify.com/en/manual/payments/shopify-payments/payouts/payout-timing> (which also states that **higher-risk
  accounts get custom extended payout periods of 5 to 20 business days** and that weekends and holidays do not count toward
  settlement), <https://docs.stripe.com/payouts>, <https://support.stripe.com/questions/reserves-frequently-asked-questions>, the
  Visa VAMP fact sheet, and Mastercard ECP thresholds via an acquirer guide. **The ECM trap:** the ratio divides this month's
  chargebacks by the **PRECEDING** month's sales, so **a month of falling sales mechanically inflates the ratio**, exactly the shape
  of an organic spike followed by a cooling month.
- **Falsified by:** a platform publishing an actual reserve rate card, or our own account receiving a reserve on documented terms
  different from these.
- **So we now:** state reserve risk as Shopify's documented examples plus "merchant-reported, not policy", which is how
  `docs/WARM-UP.md` already has it. **`docs/PLAYBOOK.md` section 1 and `docs/BUDGET-RULES.md` carry the older 5-15% phrasing and
  should be read as directional, not policy.** We never spend against unsettled revenue, and we keep the one-change-per-72h rule,
  which the ECM lagged denominator independently justifies. Also: **no debt, no Shopify Capital, no credit-card-funded ad spend**,
  since the accessible tier of capital documents at 50-180% APR.
- **Expires:** no expiry (structural), but re-check the April 2026 VAMP change. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: among surviving merchants, owned product wins, and AI adoption showed no financial edge
- **Claim:** across nine years of the same survey, merchants selling **their own products grow faster and earn better margins** than
  resellers and dropshippers, and the industry has been migrating that way.
- **Evidence:** `DOCUMENTED`, the best non-vendor dataset we found on business models. eCommerceFuel State of the Merchant / Trends,
  <https://www.ecommercefuel.com/ecommerce-trends/>. 2026 edition: **300 store owners, $3.5B combined revenue**; gross margins
  **49.5%, an all-time high**, while net margins hit an **all-time low of 10.6%**; **manufacturing adoption rose 41% to 58%**;
  **DTC-primary revenue growth 30.2% vs Amazon-primary 18.3%**; **outsourced fulfillment growing 22.2%/yr vs owned warehouse 3.9%**;
  high performers (20%+ net margin) run **38% less COGS**. 2019 edition: **dropshipping as a model fell 51%** while manufacturing
  rose a third, with **manufacturing gross margins 53% vs 45% overall**. 2017 edition: own-product companies grew **~50% faster**.
  **Sample bias is upward and stated:** a paid community of already-profitable merchants, so this is evidence about what wins among
  survivors, **not** a failure rate. From the same 2026 survey: **AI adoption 72% with no financial edge** (adopters 26.7% revenue
  growth vs 27.8% for non-adopters; net income growth **32.7% for adopters vs 55.3% for non-adopters**).
- **Falsified by:** a later edition reversing the manufacturing trend, or our own margins on owned product coming in below our
  dropshipped margins.
- **So we now:** treat the dropship-to-brand path as the direction of travel rather than a someday aspiration, and treat our own
  agent team as a **leverage hypothesis rather than a proven advantage**. The staged ladder (sticker at ~$0.10/unit, printed mailers
  at 500 units, private label at 500-1,000 units per SKU, 3PL at ~500 orders/month against a ~$517 average monthly minimum) is in
  `docs/OPERATOR-PLAYBOOK.md`. Corroborating documented arc: **Gymshark started by dropshipping supplements in 2012 and moved to
  own-manufacture in 2013**, one year in.
- **Expires:** no expiry (structural), re-check with each annual edition. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the only rigorous data on dropshipping-education outcomes is FTC litigation
- **Claim:** buyers of ecommerce business-opportunity programs overwhelmingly do not make money, and the headline income figures in
  the genre are marketing assets belonging to businesses whose revenue is education, not products.
- **Evidence:** `DOCUMENTED`, the hardest source in this research. **FTC v. Automators LLC** (Automators AI / Empire Ecommerce /
  Onyx Distribution): consumers invested **$22 million**, and the FTC states **"the vast majority of clients did not make the
  promised earnings or even break even on their investments."** Charged under the FTC Act, the Business Opportunity Rule and the
  Consumer Review Fairness Act (complainants were pressured into non-disparagement agreements instead of refunds). Feb 2024
  settlement: lifetime ban on selling business opportunities or ecommerce coaching.
  <https://www.ftc.gov/legal-library/browse/cases-proceedings/automators>. Related: **Ecommerce Empire Builders / Peter
  Prusinowski** under FTC "Operation AI Comply", May 2025 order. Supporting `DOCUMENTED` items: **DESIRICHKID's Forbes India feature
  is slugged "Brand Connect"**, which Forbes itself defines as **"equivalent to advertisements and not written and produced by
  Forbes India journalists"**; and one prominent operator's own podcast numbers put his store's best month at **~$80k profit**
  against **~$350k in a single month** from his education and software business, roughly 4x.
- **Falsified by:** a methodologically sound independent study showing positive median outcomes for course buyers. None exists that
  we could find.
- **So we now:** buy no courses, ever, inside this challenge, and weight any tactic by whether its source shows a **denominator**
  rather than a big number. The 18-item omission-pattern checklist in `docs/OPERATOR-PLAYBOOK.md` section 2 is the standing
  instruction for reading this material in future research runs.
- **Also honest about our own file:** the "**90% of dropshippers fail**" figure has **no traceable primary study**; its timeframe
  mutates across sources (one year / 60 days / four months / one month) and every publisher of it sells a remedy.
  `docs/PLAYBOOK.md` section 2 labels its 80-90% as vendor estimates, which is correct, and we should stop treating the number as
  settled in either direction. **The one large-n reframe we did find says something narrower and far more useful:** a supplier
  platform's former President, with visibility into how many products a store connects versus whether it ever sold anything, states
  **"the reason 90%+ of dropshippers never make a sale is because 90%+ only connect 0 to 1 products before quitting"**
  (<https://reddit.com/comments/1qc5bx7>). Single-source insider data, and he left to build a competitor in the same space so the
  advice conveniently increases supplier volume, but **it recasts the headline number from a claim about the model's ceiling into a
  claim about attrition.** Most people do not fail at this, they quit before running the experiment.
- **Expires:** no expiry (structural). **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: the industry's path to a winning product costs 50-200 paid tests
- **Claim:** a funded operator's real product-testing funnel is **10-20 products tested per one that gets traction, then 5-10 with
  traction per one real winner**, i.e. **50 to 200 tests per winner**, at roughly **$20 of broad-ad spend per test**.
- **Evidence:** `DOCUMENTED` in the sense that it is a named operator's stated regime **with the denominator spelled out**, from a
  full podcast transcript rather than a thumbnail. OPERATOR tier, and the operator also sells software, so weight accordingly. Their
  kill rule: **"if we get one add-to-cart, keep the ad going; if we get no add-to-cart, kill it."**
- **Falsified by:** our own hit rate on pre-validated products differing materially, which is the whole question our pre-validation
  work exists to answer.
- **So we now:** say plainly that **$1,000-$4,000 is the brute-force price of a winner and we have $100.** All of our expected value
  therefore has to come from **pre-validation quality and creative volume**, not from test count. That is a substitution forced by
  the budget, not a superior method, and the day-30 readout should say so rather than claiming we found a better way.
- **Expires:** re-check quarterly. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: a healthy ecommerce net margin is ~10-13%, and ROAS does not predict it
- **Claim:** net margin, not ROAS, is the scoreboard, and the honest band for a well-run store is around **10-13% net**, not the
  20-40% that circulates in success posts.
- **Evidence:** `DOCUMENTED`, converging from four independent directions. **Survey:** eCommerceFuel 2026, n=300, **gross margin
  49.5% at an all-time high while net margin hit an all-time low of 10.6%**, and its own conclusion, **"winning with paid is about
  great margins and low overhead, not ROAS."** **Practitioner with n=350:** a bookkeeper serving 350+ ecommerce companies, replying
  to an operator who called an 11.8% net "brutal": **"This isn't 'brutal'. This is normal. Almost 13% net is what a lot of the
  owners would love to see."** <https://reddit.com/comments/1l76kw9>, where the full line-item year was **$250,843 revenue to
  $29,497 net** at COGS 45%, shipping and fulfillment 15%, ads 14% on a blended ROAS of ~3.5, returns 4%. **The ROAS disconnect,
  measured twice:** a blended **3.5 ROAS produced 11.8% net**, while a **2.3 ROAS week produced 5.1% net** on $22k of revenue
  (<https://reddit.com/comments/1olq8v1>). **The hidden line item:** at an **$85 AOV** an operator measured **$4-$5 per order of
  amortized app subscriptions**, contributing to **"like $20+ in costs before I even count what I actually paid for the product"**
  (<https://reddit.com/comments/1r0afdl>). All community figures are self-reported and unaudited.
- **Falsified by:** our own net margin landing well outside this band with the arithmetic shown.
- **So we now:** report **net and contribution margin as the headline in every ledger entry, with ROAS as a supporting input**, and
  **admit no app into the store without a stated per-order cost and the specific number it must move.** Assume every self-reported
  margin found online is inflated by the markup-versus-margin error, per the correction **"if your gross margin is 100%, it means
  you got the product for free."**
- **Expires:** re-check quarterly. **Written by:** research run, via `challenge-lead`.

### [2026-08-10] EXTERNAL: at our budget the whole ad account is one campaign and one broad ad set
- **Claim:** under roughly $1,000/month of ad spend, the correct Meta structure is **one sales campaign, one broad ad set, 3-5
  genuinely different creative concepts, no interest stacking, no lookalikes and no separate retargeting campaign.**
- **Evidence:** `DOCUMENTED`, COMMUNITY-CONSENSUS. Four independent practitioners agreeing in one 2026 r/PPC thread asked at exactly
  this budget, <https://reddit.com/comments/1sikbwx>: **"Low budgets usually get killed by too much structure, not too little"** and
  **"You need signal, not control."** Their numbers: **$50/day per creative is "way overkill"** at $33/day total, so **$10-$15/day
  per ad, killing anything that has not hit a 2-3% CTR by day 3**; on read thresholds they are honest that "2x target CPA per ad set
  is usually still pretty light, so I'd treat that as directional only." A separate operator's kill rule ties it to unit economics
  instead: **spend 3x the unit profit testing a product** (a $17-profit product gets $51). The bottleneck they all name is
  **creative supply, not structure**. From the platform side: TikTok officially recommends **3-5 creatives per ad group** and
  creatives with **"big differences"**.
- **Falsified by:** our own data showing a segmented structure outperforming a single broad ad set at this spend level.
- **So we now:** run one campaign and one broad ad set when paid begins, and spend the saved effort on creative volume. **The
  stacked-interests, 1%-lookalike, separate-MOF/BOF structure still recited in these communities is from a 2021 post and every
  2025-26 practitioner in the corpus says to delete the audience-stacking half and keep the creative half.** A guide telling us to
  build five audience segments on $30/day is quoting 2021.
- **Expires:** re-check quarterly. **Written by:** research run, via `challenge-lead`.

### [2026-08-12] EXTERNAL HYPOTHESIS: Dropship.io Sales Tracker gives measured per-product revenue, on a 7-day trial
- **Claim:** Dropship.io (Instagram `@dropship`) is a $39-99/mo product-research SaaS with a 7-day free
  trial, not an operator. Its Sales Tracker reports **measured per-product revenue for tracked Shopify and
  TikTok Shop stores**, which would be stronger evidence than our inferred-demand signals (competitor ad
  longevity, comment counts). Their free profit and ROAS calculators are a cross-check for
  `offer-economist`, never a source of truth.
- **Evidence:** `HYPOTHESIS`, VENDOR-CLAIM tier. Identified 2026-08-12. The product exists and the trial
  terms are published; the accuracy and coverage of the tracked-revenue numbers are **unverified by us**
  and stay unverified until a real trial pull happens. Their own content is vendor marketing, weighted per
  `docs/OPERATOR-PLAYBOOK.md` sections 0-2.
- **Falsified by:** a trial pull whose reported revenue contradicts a number we can check independently
  (our own store, or a competitor's public order count), or coverage that misses our bench categories.
- **So we now:** time **ONE** trial to the week the bench is finalised, pull measured revenue for every
  bench candidate and its top competitors, record each figure in the bench table with its date and source,
  cancel before day 7. Cost $0. A pull is a point-in-time snapshot: expiring evidence, not a standing
  fact. Procedure in `docs/PLAYBOOK.md` section 4 and the `product-scout` brief.
- **Expires:** on the first real pull, which replaces this entry with a dated measurement.
  **Written by:** `challenge-lead`.

### [2026-08-12] EXTERNAL: the outlier format on a large dropshipping account is "Dashboard-and-pointer", confirmed across two posts
- **Claim:** on the biggest dropshipping account on Instagram, both outliers share one skeleton: **a screen
  recording of a tool doing the thing, a real hand with a pen physically pointing at the field that matters,
  one short bright text overlay naming that field, original audio, and a caption under six words plus
  hashtags.** No face, no talking head, no avatar, no trending sound. Production value beyond the screen
  capture is zero. Two posts, two different subjects, both outliers, so this is a repeatable pattern on that
  account rather than one lucky post.
- **Evidence:** `DOCUMENTED` for the metrics, VENDOR-CLAIM tier for the publisher. Logged-in browser pulls of
  the public `@dropship` profile (Dropship.io), 2026-08-12: **4.1M followers, 957 posts**, bio "We help you
  discover winning products to sell, Try Dropship for free", link dropship.io, so vendor marketing confirmed.
  - **Reel `DID-kLKPZaL`, posted 2025-04-05, PINNED: 8.3M views, 16.2K comments, 490 shares.** Screen
    recording of a supplier dashboard (AutoDS, on-screen text "Browse over 500M trending dropshipping
    suppliers"), pen pointing at the screen, small overlays, original audio. Caption verbatim: "The future of
    Dropshipping" plus #dropshipping #ecommerce #ecom #ecomtips #dropshippingtips #ecommercetips
    #onlinebusiness #onlinestore #shopifydropshipping #entrepreneur. Held permanently at the top as a lead
    magnet.
  - **Reel `Db3qex1ugwX`, posted 2026-08-11: 1M views, 156 comments, 44 shares in ~24h.** Screen recording of
    **Meta Ads Manager mid-setup** (New Sales Campaign, Budget strategy, Campaign budget, Daily budget field
    showing 20.00 AED), a **physical blue pen pointing at the field**, and a **bright green highlighted
    overlay reading "DAILY BUDGET"** over the frame. Original audio. Caption: "High margins problem solving
    product" plus a clap emoji and five hashtags (#entrepreneur #winningproducts #dropship #dropshippingtips
    #onlinestore). Six words of copy.
- **The engagement asymmetry, and it changes what we copy:** the 8.3M pinned reel drew **0.2% comments per
  view** (16.2K) while the 1M reel drew **0.016%** (156). A **12x difference in comment rate** between the
  account's own two outliers. Distribution at the very top correlates with comment volume, not view volume
  alone, which points to deliberate comment-bait on the pinned post and its absence on routine ones. So
  **engineering a reason to comment is a lever separate from the format itself.** We have tested neither.
- **Their per-post variance, same account, recent grid:** 8.3M (pinned), 1M, 1M, 403K, 396K, 158K, 140K,
  98.3K, 26.6K. A 300x spread means their own per-post winner rate is low, which **corroborates the 5-8%
  winner-rate creative math rather than contradicting it**: a single flop tells us nothing, and cadence beats
  per-post polish.
- **Their profile Highlights**, their own topic taxonomy and a free read on what their audience clicks: "Our
  tools", "Start", "Chargeback", "Winning Ads", "Products", "Drops", "Claim Store", "Community".
- **Falsified by:** our own posts showing caption copy moving watch-through more than the first visual frame,
  or dashboard-and-pointer videos underperforming standard UGC on hook rate in our niche.
- **Transfer caveat, sharpened:** both examples show B2B software screens to an audience of aspiring
  dropshippers. Our audience buys a consumer product. **The transferable claim is the mechanic** (screen-record
  the proof, point at it, label it, keep the caption short), **not the subject.** For a physical product the
  analogue of the dashboard is the product doing its trick in **one continuous unedited shot with a finger
  pointing at the moment it works.**
- **So we now:** carry **"Dashboard-and-pointer"** as a named five-element recipe in the `creative-director`
  hook bank, labelled `HYPOTHESIS` for our niche. **Corollary, and the most transferable part: the caption is
  not the hook, the first visual frame is.** Weight briefs toward the opening frame and the on-screen overlay
  rather than caption copy.
- **The test that settles it:** 3 dashboard-and-pointer videos against 3 standard UGC-style videos in the
  same week, compared on hook rate and comment rate.
- **Expires:** re-check quarterly (channel tactic). **Written by:** `challenge-lead`, from two logged-in
  Instagram pulls of the public profile.

---

# Live knowledge

**Status: 4 learnings as of 2026-08-12**, all under *Anti-patterns*. Two are research-tooling notes (direct
WebFetch is blocked by the three main research surfaces, 2026-08-10; TikTok-virality-first product research
surfaces items already at big-box retail, 2026-08-11). Two are planning findings from 2026-08-12: supplier
lead time rather than the warm-up calendar is what gates product content, and one thorough creative run does
not clear the 3/day floor. All are n=1 and confidence **Low**, except the structural half of the lead-time
entry, which is arithmetic on documented transit times rather than an inference and is **Medium**. The
challenge has not started (`tracker/LEDGER.md`: out-of-pocket $0.00, no product live, no posts, no
sales), so every other live section is deliberately blank. Live sections hold only what **we** observed
with **our own** numbers. Do not seed them with internet dropshipping wisdom: that goes in
`docs/PLAYBOOK.md` or `docs/OPERATOR-PLAYBOOK.md` as marked research, with its short form in *External
evidence* above. Product-bench picks and their modelled margins are not learnings; they live in
`tracker/LEDGER.md`'s Product bench block until a test concludes.

**19 entries in *External evidence*** are other people's sourced numbers, several of them corrections to
our own playbook. Never cite them as our results. **2 entries in *Open hypotheses*** below are our own
authored protocols (`docs/WARM-UP.md` Protocol v1 and the `docs/NO-STALL.md` procedures), each filed with
the test that would settle it. Not learnings either.

## Winning products
What won and **why**: price band, landed cost and margin, hook style that carried it, audience it landed with, and which
pre-validation signal actually predicted the win. *(no entries yet)*

## Losing products
What lost and why, so it is not retried. Include the pre-validation signal that misled us: that is the transferable lesson. A
product that lost in a bad week is not banned forever, but re-testing it needs a stated reason. *(no entries yet)*

## Hooks and creative
Which hook formulas pulled, with the numbers (watch-through, saves, shares, comments, profile taps, any attributable sales). Hook
family, not just individual videos. Also: which AI-video formats read as AI and cost conversion. *(no entries yet)*

## Channels and tactics
What beat what, with numbers. Posting cadence, posting time, caption style, cover/thumbnail effects, TikTok Shop vs pinned-comment
CTA, API posting vs anything else, warm-up outcomes, organic vs the first paid test. *(no entries yet)*

## Pricing and AOV
Price points tested, conversion at each, bundle and order-bump results, real net margin vs modelled net margin, break-even ROAS as
computed vs as experienced. *(no entries yet)*

## Operational
Supplier reliability, real shipping times vs promised, defect and return rates, support ticket volume and causes,
dispute/chargeback reality, processor behaviour (payout timing, reserves if any). *(no entries yet)*

## Anti-patterns
Things **proven** not to work here, with the evidence. The most valuable section over time, because it stops repeated spending of
attention. Same evidence standard as anything else: a bad feeling is a hypothesis.

### [2026-08-11] TikTok-virality-first product research finds things after they're already at big-box retail
- **Claim:** searching for products via "what's trending/viral on TikTok" and then checking mainstream-retail availability
  systematically surfaces items already commoditized by Walmart, Target, Best Buy, Costco, Amazon Basics, Chewy or Petco, because
  virality and retail buyer attention move on similar or faster timescales than this research process can catch. Switching the
  discovery order (supplier/AliExpress-first, checking retail availability only after finding a candidate) did not fix this on the
  one night it was tried here.
- **Evidence:** two full research sweeps, 2026-08-11, `tracker/LEDGER.md` session note. Sweep 1 (TikTok-trend-first,
  tech/wellness/comfort niche): ~28 candidates checked, 0 cleared a mainstream-retail screen. Sweep 2 (AliExpress/supplier-first,
  pet/home-kitchen niche): ~20 candidates checked, 0 cleared. Combined n=~48 candidates, 0 survivors, across two different niches
  and two different discovery methods, in a single research session. Estimated, not dashboard-confirmed (WebSearch-mediated
  secondary evidence, not a live TikTok Ad Library or Meta Ad Library pull, and those remain unreachable by direct fetch, see the
  2026-08-10 entry below).
- **Confidence:** Low. n=1 session, one night, one seat's tooling (unauthenticated WebSearch/WebFetch, with AliExpress bot-blocking
  automated requests after roughly 2 attempts per sweep). Could differ with a human logged into a real browser session, which was
  specifically NOT tried yet: the Founder Action Card in the ledger asks for exactly this as the next test.
- **Falsified by:** a future sweep, especially one run by a human with real logged-in browser access to TikTok Creative Center, Meta
  Ad Library and AliExpress, finding a genuinely clean candidate (no mainstream-retail presence, real supplier quote, real demand
  evidence) in a reasonable amount of time.
- **So we now:** do not keep re-running the same unauthenticated-fetch research method expecting a different result once it has
  failed twice on two different methods in one session; that is a diminishing-returns signal, not a reason to try a third automated
  sweep the same way. The next test of this claim routes through a real browser session (human-assisted), not another agent-only
  sweep. Also: do not force-fill the product bench with a candidate that fails this screen just to hit a target count. The bench
  stayed at 3 confirmed candidates rather than 5 padded ones as a direct consequence of this finding, a founder decision recorded in
  the 2026-08-11 ledger entry.
- **Expires:** re-check quarterly (research-tooling/market-timing finding, not structural: retail buying cycles and what's
  bot-blocked both change).
- **Written by:** challenge-lead, from two product-scout runs, 2026-08-11.

### [2026-08-12] Supplier lead time, not the warm-up calendar, is what actually gates the start of product content
- **Claim:** this challenge's schedule was built around the warm-up calendar (Day -7 to Day 1) while treating the physical sample as a
  side errand, and that is backwards. "Never advertise a product you have not held" is a hard gate in `docs/PLAYBOOK.md` section 4 and
  in `challenge-lead`'s brief, and the sample's lead time is longer than the entire warm-up runway. **On any 30-day dropshipping
  challenge sourced from overseas suppliers, the sample order is the earliest-needed long-lead item and belongs on day zero, ahead of
  the domain and ahead of the store.**
- **Evidence:** arithmetic against our own two documents, not an outside claim. `ops/sourcing-dossier.md` (2026-08-11) puts the
  recommended primary fountain supplier at **12-20 business days**, and the single listing carrying a real posted delivery date at
  **2026-08-16 to 08-21**. `tracker/LEDGER.md` records out-of-pocket $0.00, so no sample has been ordered as of 2026-08-12.
  `docs/WARM-UP.md` Track A puts the product-in-frame post on **Day -1 = 2026-08-17** and product content from **Day 1 = 2026-08-18**.
  Ordering on 2026-08-12, the fast option arrives somewhere between one day before and four days after Day -1, and the recommended
  option arrives roughly **2026-08-28 to 2026-09-09, which is 10 days to 3 weeks after Day 1**. Estimated, not confirmed: both
  shipping figures are supplier-page estimates, and one of the two is a general range rather than a listing-specific promise.
- **Confidence:** Medium for the structural claim, which is arithmetic on documented lead times rather than an inference about
  behaviour, and does not depend on our sample size. **Low** for the specific dates, n=1 product, one sourcing run, one night's
  supplier data, and AliExpress bot-blocked deeper checks. Raised to High only by actually ordering and recording the delivered date.
- **Falsified by:** a confirmed US-warehouse SKU for this product at an acceptable landed cost, which would collapse transit to 3-8
  business days and dissolve the collision entirely. `ops/sourcing-dossier.md` already flags that CJ advertises NJ and CA warehouses
  but that no specific cat-fountain SKU could be confirmed from outside the app, so this is a live and checkable possibility, not a
  hypothetical.
- **So we now:** (1) **the sample order is Founder Action #1 and today's one thing**, ahead of the domain, and the recommendation is to
  order two suppliers at once (~$17) so the schedule is hedged rather than bet on one transit estimate. (2) **Every future venture run
  from this repo costs long-lead physical items against the calendar on day zero**, before building any content schedule around dates
  the goods cannot meet. (3) Day -1 and Day 1 content get re-planned against the real arrival date rather than the protocol's
  ideal one, and that re-plan is owed the moment a tracking number exists. **We do not resolve this by filming a substitute unit or a
  competitor's product**, which would be a fabrication of exactly the kind this repo refuses elsewhere.
- **Expires:** no expiry (structural). The specific dates expire on arrival of the sample.
- **Written by:** challenge-lead, 2026-08-12, from `ops/sourcing-dossier.md` against `docs/WARM-UP.md` Track A.

### [2026-08-12] One thorough creative run does not clear a 3/day creative floor, so the floor needs a different production model
- **Claim:** the 3 net-new creatives/day floor in `docs/MANDATE.md` cannot be met by one deep specialist run per day. A single
  creative-director run producing full scripts (timed shot lists, overlays, captions, cover briefs, hook-family labels) tops out well
  under a day's floor when it is also asked to build a named format test and retrofit the existing bank. **Either the unit of "a
  creative" is smaller than a full script, or production has to be parallel and templated rather than one considered run per day.**
- **Evidence:** one run, 2026-08-12, `tracker/LEDGER.md` session note. Output: **7 net-new scripts** (~495 lines) plus 10 hooks and a
  183-line calendar. Against the floor counted from Challenge Day 1, that is **short 5 by Day 4 and short 14 by Day 7** (7 shipped vs
  21 required), with Days 5-7 holding zero assets. Measured by file count and the calendar's own tally, not estimated. The floor
  itself rests on the Motion 578,750-creative dataset in *External evidence* above, which is not in question here; what is in question
  is our ability to feed it.
- **Confidence:** Low. n=1 run, one seat, one product, and the run was also carrying two other jobs. A dedicated run doing nothing else
  might clear it. This is a real observation about throughput, not yet a proven ceiling.
- **Falsified by:** a single focused creative run shipping 15-21 usable scripts, or the arrival of the video pipeline (keys plus
  upload-post) making the script the wrong unit to count in the first place.
- **So we now:** count and report the shortfall out loud every run rather than quietly filling the calendar with weak filler to hit a
  number, which is the failure mode the floor would otherwise cause. The next creative run owes **9 scripts minimum before
  2026-08-22**. Flagged for a decision that is not ours to make silently: whether "3 net-new creatives/day" means 3 scripts, 3 filmed
  variants of one script, or 3 posted videos. **Those are three very different workloads and `docs/MANDATE.md` does not currently
  say which**, so the floor is unmeasurable until it is pinned down.
- **Expires:** re-check when the video pipeline exists, since that changes the unit.
- **Written by:** challenge-lead, 2026-08-12, from the creative-director run.

### [2026-08-10] Direct WebFetch against TikTok Creative Center, Meta Ad Library and Amazon Movers & Shakers returns no usable data
- **Claim:** an agent calling WebFetch directly against these three research sources does not get real data back: TikTok Creative
  Center returns a client-rendered SPA shell with "No search results found," Meta Ad Library fails outright (socket hang-up), and
  Amazon (root, category, and best-seller URLs) returned HTTP 503 on every attempt. Only WebSearch-mediated secondary results
  (indexed pages, press coverage, individual TikTok posts) came back usable, plus exactly one AliExpress category page that
  rendered live data on direct fetch.
- **Evidence:** `tracker/LEDGER.md`, 2026-08-10 session note. n=1 research run, one agent, one session: every attempt logged in that
  entry. Estimated, not dashboard-confirmed (there is no dashboard for "did the fetch work"), but a direct first-hand observation,
  not a guess.
- **Confidence:** Low. n=1, one seat's tooling, one day. Could differ with a different fetch mechanism (e.g. an actual
  browser-rendering tool) or if the sites change their bot-detection tomorrow.
- **Falsified by:** a future run where direct WebFetch against any of these three sources returns real, parseable data.
- **So we now:** default to WebSearch-mediated secondary sources for these three rather than spending budget on direct fetch
  attempts, and treat live ad-longevity data (Meta/TikTok Ad Library specifically) as something that needs a human logged into a
  real browser session when it matters for a real spend decision. See the founder action card "spend 10 min logged into Meta Ad
  Library + TikTok Creative Center" in `tracker/LEDGER.md`, which exists because of this gap. Referenced by name rather than by rank,
  because the cost-of-delay ranking is re-sorted every run.
- **Expires:** re-check quarterly (platform/tooling behaviour, not a product or trend).
- **Written by:** challenge-lead, from the 2026-08-10 product-scout run.

---

# Open hypotheses (untested, NOT learnings)

Labelled guesses waiting on evidence, each with the test that would settle it. Anything moved out of here into the live sections
arrives with numbers.

### [2026-08-10] HYPOTHESIS: the Challenge Warm-Up Protocol v1 buys distribution that a cold account would not get
- **Claim:** running `docs/WARM-UP.md` -> Challenge Warm-Up Protocol v1 as written (7 days of human in-app behaviour, 3 native
  non-promotional posts, 1 product-in-frame post, then 2 then 3 posts/day, with the pixel warmed at $0 spend, the domain
  authenticated on purchase day, and processor verification finished same-day) produces better distribution on the first
  promotional posts, and fewer platform interventions, than opening an account and posting product content immediately.
- **Evidence:** **none yet.** Zero posts exist and no account has been created (`tracker/LEDGER.md`, out-of-pocket $0.00). The
  protocol's foundations are documented platform facts (roughly 50 optimisation events in 7 days exits Meta's learning phase and
  edits reset it; TikTok floors of ~$50/day campaign and ~$20/day ad group with prepay billing; SPF's hard 10 DNS lookup limit; the
  processor's published custom payout schedules, reserves, and pending-documents trigger). **Every day count and every engagement
  count in the protocol is our inference**, listed explicitly in the doc's documented-versus-inference split.
- **Confidence:** none, it is untested. It will be **Low** even after warm-up, permanently, because with one account there is no
  control group.
- **Falsified by:** first promotional posts performing no better than a cold account's would, or a platform intervention arriving
  anyway, or the FYP failing to serve the niche after 5 days of in-niche engagement.
- **The test that settles it:** the measurement list in the protocol's "What we measure during warm-up" section, recorded daily in
  the ledger's Warm-up status block, then an element-by-element verdict on protocol Day 1 and again on Day 7.
- **So we now:** execute the protocol as written rather than re-deliberating a schedule each morning, and publish v2 with
  `SUPERSEDES v1` if any element is adjusted or refuted.
- **Expires:** no expiry (structural), but the Day 7 verdict replaces this entry.
- **Written by:** challenge-lead (authored by the setup seat, 2026-08-10).

### [2026-08-10] HYPOTHESIS: the no-stall procedures keep every run productive without inventing work
- **Claim:** the ten procedures in `docs/NO-STALL.md` (5-candidate bench, kill-and-promote in the same run, Prepared Action Cards,
  cost-of-delay ranking, the Widening Ladder, the CTA ladder, the Paid Readiness Dossier with its $150 trigger, the five incident
  runbooks, the reduced-mode ladder, and the twelve-item Standing Work Queue) mean every run produces a real named artifact, and
  that a blocked gate or a failed product never costs a day.
- **Evidence:** **none yet.** No run has happened. These are our inventions, authored 2026-08-10; the documented parts (kill
  thresholds, platform budget floors, the learning-phase threshold, FTC prompt-delivery, the 1% chargeback ceiling) are cited in the
  file and are not what is being tested here.
- **Confidence:** none, untested.
- **Falsified by:** any run that ends with only a blocker and no artifact; a kill that takes more than one run to promote a
  replacement; founder action cards that are consistently skipped, which would mean the cards or the day-rates are wrong; or a
  procedure that is never triggered at all, which proves nothing either way and stays UNTESTED.
- **The test that settles it:** at day 30, count the runs that produced a named artifact (target: all of them), the days between
  each kill and its replacement's first asset (target: 0), and the share of founder actions completed on the day they were first
  presented.
- **So we now:** run the procedures as written and mark each one CONFIRMED / ADJUSTED / REFUTED / UNTESTED once data exists,
  republishing as v2 on any change.
- **Expires:** no expiry (structural).
- **Written by:** challenge-lead (authored by the setup seat, 2026-08-10).

---

# Superseded and expired (archive, keep readable)

*(no entries yet)*

---

# Who writes what

Reading this file is mandatory for every agent in `.claude/agents/`, at the start of every run, before acting. Writing is owed at
these moments:

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

**No agent writes a learning it cannot evidence.** The correct output in that case is a `HYPOTHESIS` entry, or nothing at all.
