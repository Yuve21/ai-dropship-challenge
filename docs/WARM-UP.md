# Warm-Up: no account starts cold

**The doctrine, in one line:** every account this challenge depends on (TikTok, ad accounts, the
sending domain, the payment processor) performs worse when it is brand new, so the clock on making
them *not* new starts before marketing does, and before the product is even chosen.

Why this file exists: warm-up is **time-based and free**. It cannot be bought or compressed later, and
it is the one advantage available on a $100 budget that costs $0. If the accounts are opened on the
same day the first product video goes out, that week is gone and it cannot be recovered. So warm-up
runs in parallel with product research and the store build, not after them.

Nothing in this file costs money or asks anyone to spend. It changes only the ORDER of free actions.

## How to read the numbers in here (honesty first)

Warm-up is an area where operator folklore heavily outweighs documentation. Keep the two separate:

**Documented by the platforms (reliable):**
- Meta's learning phase, and that an ad set is considered out of it after roughly **50 optimization
  events in 7 days**. New pixels with no conversion history take longer.
- TikTok Ads self-serve budget floors: about **$50/day at campaign level, $20/day at ad group level**,
  and TikTok ad billing is **prepay** (campaigns stop when the balance empties).
- TikTok's AIGC label requirement on realistic AI content (already handled by `content-engine`).
- Shopify Payments' own risk-evaluation page: new or higher-risk businesses can be put on a **custom
  payout schedule (5 or 20 business days)** and can have a **reserve on a portion, or in some cases
  all, of transactions** for a specified period. Verification documents left pending is itself a
  review trigger.
- Gmail/Yahoo-era sender requirements: SPF, DKIM and DMARC are expected on any real sending domain,
  and SPF has a hard **10 DNS lookup limit** that fails silently when exceeded.

**Anecdotal, vendor-sourced, or unverified (treat as directional only):**
- Every specific day-by-day TikTok warm-up schedule. There is no official TikTok warm-up formula.
  Almost all the published guides are marketing for cloud phones, proxies, anti-detect browsers or
  clipping tools, and several of them recommend techniques that violate TikTok's terms (see the hard
  no below). The *principle* (build behavioural history before you promote) is consistent across all
  of them; the *numbers* are folklore.
- A TikTok or Meta "account trust score" as a named, spend-gating mechanism. Agencies assert it;
  neither platform documents it.
- The ~30-50% reach haircut on API posting vs native app posting (consistently reported, never
  confirmed by TikTok).
- Reserve percentages and hold durations (10-30% held 30-180 days). Merchant-reported, not policy.

Where this file gives a number, it says which bucket it is in.

**And then we commit anyway.** "No official formula exists" is a true research finding, not an excuse
to leave the schedule open. Sections 1 to 6 below are the reasoning and the evidence; the thing we
actually execute is the protocol immediately below, which we wrote ourselves, dated, labelled, and
built to be proven wrong.

---

# The Challenge Warm-Up Protocol v1 (ours, to be validated)

**Status: `HYPOTHESIS` in the `docs/LEARNINGS.md` sense.** Authored 2026-08-10. This is our own house
protocol, not a vendor schedule and not a guarantee. It is engineering judgement built on top of the
documented facts in the split above (platform budget floors, the learning-phase event threshold, the
SPF lookup limit, the processor's own risk-evaluation page) plus stated inference about how a new
account earns distribution. Every day count and every engagement count in it is inference. It exists
so the team executes one specific thing consistently instead of re-deliberating every morning, and so
that at the end of warm-up there is something falsifiable to check against real numbers.

**Nothing in this protocol costs money, and nothing in it simulates a human.** It is "behave like a
real new account, patiently." The hard no in section 1 stands unchanged: no proxies, no cloud phones,
no anti-detect browsers, no bought followers, no engagement pods, no bought or aged or previously
banned accounts, no several accounts on one device. `compliance-guard` hard-bans all of it. Those are
terms-of-service violations, and on a $100 budget a ban is the end of the challenge.

**Day numbering:** Day 1 is the first day of the 30-day challenge clock. Negative days run before it.
If the clock has already started, run the protocol from today and accept that full product posting
begins around day 8, which is what Phase 0a of `docs/30-DAY-PLAN.md` already says out loud.

## Track A: the TikTok organic account

Open **one** account per real device and real network. If there is genuinely a second device and a
second real person, a second account is fine; otherwise one. Do not open three accounts on one phone
to hit a number, that is the ban vector, and every extra account restarts this same clock anyway.

| Day | Human, in the app (about 20 min) | Posting |
|---|---|---|
| **Day -7** | `HUMAN:` create the account on a real device with a real email (a mailbox on the store domain or a normal personal one) and a real phone number. Complete the profile fully in one sitting: photo, handle, display name, one-line bio, niche set. No link in the bio, nothing to click. Then scroll the For You feed for 20 min and search 3 niche terms, watching 5 videos each to completion. **Zero likes, zero follows, zero comments on day one.** | none |
| **Day -6** | Scroll 20 to 30 min, mostly in-niche. Engage: **10 likes, 3 saves, 5 follows** of in-niche creators, **2 genuine comments** (real sentences, not emoji). Watch 10 in-niche videos to completion and replay 3. | none |
| **Day -5** | Same as Day -6. Consume only. | none |
| **Day -4** | Consume 15 min, same engagement volume. Then post **1 native, non-promotional video** in the niche: no product, no link, no CTA, no brand pitch. | 1 |
| **Day -3** | Same. Post **1** more native video. Post inside the same 2-hour window as yesterday. | 1 |
| **Day -2** | Same. Post **1** more native video (3 native posts total now). | 1 |
| **Day -1** | Consume 15 min. Post **1** video with the product **incidentally in frame** and still no pitch, no CTA, no link. This is the last unpromotional post. | 1 |
| **Day 1** | Consume 5 to 10 min, then continue this daily forever. Begin the real cadence: **2 posts/day**, product content and CTA now allowed (CTA goes to a TikTok Shop listing or a pinned comment until the follower link gate clears). | 2 |
| **Day 4 onward** | Same daily consumption. Step to **3 posts/day** and hold. | 3 |

That is **4 posts before Day 1** (3 native plus 1 product-in-frame), inside the 2 to 5 range section 1
calls for, and 7 days of behavioural history before the first promotional post.

**If the account will later carry Spark Ads or any paid promotion:** start at **Day -14** and run the
Day -6 routine for the extra week, with 3 more native posts spread across Days -11, -9 and -7. Same
ending, longer runway.

**Hold conditions (do not push through these):**
- An action block, a "you're doing too much" notice, or any warning: halve engagement volume for 48h
  and post nothing new that day. Log it.
- Three consecutive posts at effectively zero views: **hold cadence, do not raise it.** Keep consuming.
  Do not "catch up" with a burst, and do not conclude shadowban from a flat week (section 1's
  diagnosis trap).
- Warm-up never ends. An account that publishes and never consumes looks like a bot. The test stays:
  are we posting more than we are watching and engaging?

## Track B: the ad account and pixel

- **Day -7:** `HUMAN:` create or claim the ad account with real business details. `AGENT:` install the
  pixel/CAPI on the store the same day, at **$0 spend**, and complete domain verification. Confirm in
  the events manager that PageView, AddToCart, InitiateCheckout and Purchase all actually fire. An
  installed-but-not-firing pixel accumulates nothing, which is the failure that hides for a week.
- **Day -7 through Day 1 and beyond: spend stays $0.** The whole organic phase is free pixel warm-up.
  Every organic visit, add-to-cart and first order becomes conversion history at no cost.
- **Pre-spend target before the first dollar (inference):** at least **200 PageView, 20 AddToCart and
  1 Purchase** recorded organically. If the pixel is below that when revenue arrives, seed with a
  cheap **traffic or video-views** objective at the floor for 3 days first, and create it as a **new ad
  group** rather than switching the optimisation event on an existing one, because changing the event
  resets learning.
- **First spend, funded from earned revenue only:** at the **platform minimum**, which on TikTok
  self-serve is **$20/day at ad group level and $50/day at campaign level**, prepay balance topped up.
  Structure: 1 campaign, 1 ad group, 3 to 5 creatives.
- **Then do nothing for 72 hours.** No budget change, no targeting change, no creative swap, no bid
  change. Every one of those resets the learning phase.
- **After 72h, step at most +20% and no more often than every 48h.**
- **Stated honestly in the ledger, every time:** a test at this budget cannot reach roughly 50
  optimisation events in 7 days, so it never exits the learning phase. It reads creative, CTR, CPC and
  CVR direction. It is not a CPA. Reporting the learning-phase CPA as "the" CPA would be a distorted
  number presented as a result.

## Track C: the sending domain

- **Day -7:** buy the domain and publish authentication the **same day**, before any send exists to
  authenticate. SPF with as few `include:` mechanisms as possible (the **10 DNS lookup limit** is hard
  and fails silently past it), DKIM at 2048-bit with the public key in DNS, DMARC at **`p=none`** with
  a `rua` address. Put a real landing page up and create the real contact mailbox on the domain.
- **Day -6:** verify with an external checker, then wait 24h for propagation before testing anything.
  Send 3 test messages to mailboxes you control at Gmail, Outlook and Yahoo, open the raw headers and
  confirm `spf=pass dkim=pass dmarc=pass`. If any fails, fix it now, not after the store is live.
- **Days -6 to -1:** no sends beyond your own tests. The domain ages for free while the store is built.
- **Day 1 onward: transactional mail only** (order confirmation, shipping notification, one abandoned
  cart note). Low volume, opened by real buyers, is the best warm-up available and it is what this
  challenge sends anyway. **No bulk email in month one.**
- **If bulk ever starts** (not in month one, and from a **subdomain**, never the domain carrying order
  confirmations), the ramp is **10/day, then 25, then 50, then 100**, one full day at each step, most
  engaged recipients first. **Check between every step:** bounce under **2%**, spam-complaint rate under
  **0.1%**, and opens not collapsing. If a step fails the check, drop back to the previous volume for 3
  days before retrying. Move DMARC to `p=quarantine` only after 2 to 3 weeks of clean aggregate reports.

## Track D: the store and the payment processor

- **Day -7:** create the store and **finish payments verification to 100% the same day**, bank account
  linked, real business address, real phone, contact email on the domain. Documents left pending are
  themselves a hold trigger per the processor's own risk page. Do not discover this during the first
  video that pops.
- **Days -7 to -1:** the five policy pages live with honest shipping windows, real branding, a real
  product page. Run one order end to end through the store's **test mode** (free, no real card, no risk
  signal) to prove checkout, confirmation email and fulfilment routing all work.
- **Week 1 revenue smoothness rule (inference, and the one most likely to be violated by excitement):**
  **one change at a time, at most one per 72h.** Do **not** pair a discount blast with a price change
  and a new SKU in the same week. No sitewide discount above 20% in week 1. If a video pops and orders
  spike, that spike is the only anomaly the processor gets to see that week: change nothing else.
- **Protect the ratio:** chargebacks under 1%, disputes answered same day, refunds fast.
- **Honest limit:** you cannot manufacture processor history without real sales. There is no schedule
  to follow here. The levers are verification completeness, dispute discipline, and not spiking. If a
  reserve lands anyway that is a documented possibility, not a failure, and the float exists for it.

## Which parts rest on documented facts, and which are our inference

**Documented by the platform or the provider (load-bearing, still worth re-verifying):**
- Roughly **50 optimisation events in 7 days** exits Meta's learning phase; targeting, creative,
  optimisation-event, bid and large budget changes reset it. (Track B's 72h freeze and +20% steps.)
- TikTok self-serve floors of about **$50/day campaign and $20/day ad group**, and prepay billing that
  stops campaigns when the balance empties. (Track B's "platform minimum".)
- **SPF's 10 DNS lookup limit**, and that exceeding it fails silently. DKIM and DMARC being expected of
  any real sender; `p=none` is monitor-only. Mailbox providers publishing a **0.1% spam-complaint**
  target. (Track C.)
- The processor's own risk-evaluation page: **custom payout schedules (5 or 20 business days)** and
  **reserves on part or all of transactions**, and that **pending verification documents are themselves
  a trigger**. (Track D's Day -7.)
- TikTok's **AIGC label** requirement on realistic AI content, and that a bio link on a personal
  account is gated at roughly **1,000 followers** (long-observed norm rather than published policy).

**Our inference, unvalidated, the part that could simply be wrong:**
- **Every day count.** The 7-day span, the 3 consume-only days, the 3 native posts, the single
  product-in-frame post, the 14-day Spark Ads variant. Published schedules cluster between 3 and 14
  days and all of them are vendor marketing. We picked 7 because it is the cheapest number that still
  buys a week of history.
- **Every engagement count.** 10 likes, 3 saves, 5 follows, 2 comments, 10 completions, 3 replays. These
  are "plausibly like a real person's first week", nothing more.
- **That consuming before posting improves distribution at all.** The mechanism (the algorithm has to
  classify an account before it can distribute it) is a reasonable model of how recommendation works,
  and it is not something TikTok documents.
- **The 200/20/1 pre-spend pixel target** and the 3-day cheap-objective seed.
- **The 10/25/50/100 email ramp** and the 2% bounce ceiling. Vendor ranges run 50 to 200/day in week 1;
  ours is deliberately more conservative because our volume is tiny anyway.
- **The whole week-1 store smoothness rule**, including the 72h spacing and the 20% discount ceiling.
- **Any notion of an account "trust score"** that this protocol improves. Neither platform documents
  one. We are not claiming it exists; the mitigations happen to cost nothing either way.

## What we measure during warm-up (this is what turns the protocol into knowledge)

Record these daily in the **Warm-up status** block of `tracker/LEDGER.md`. `growth-operator` owns the
collection.

- **Per post:** views at 1h, 24h and 72h; average watch time and completion rate; saves; shares;
  comments (and specifically any buy-intent comments); profile taps.
- **Account:** follower count daily, follower delta per post, and a daily yes/no on **"is the For You
  feed serving the niche"** with a 1 to 5 note. That readiness signal matters more than the day count.
- **Incidents:** any action block, warning, removal, AIGC flag, or reach collapse, with the date.
- **Pixel:** date of first event, cumulative count by event type, and whether all four events fire.
- **Email:** bounce rate, spam-complaint rate, header pass/fail for SPF, DKIM and DMARC, DMARC
  aggregate report pass rate.
- **Processor:** payout schedule shown in the admin, whether a reserve notice appeared and at what
  revenue level, days to first payout, dispute count.

## How this protocol corrects itself

1. **On Day 1**, the day the real cadence starts, `challenge-lead` writes a dated entry to
   `docs/LEARNINGS.md` that walks every element of this protocol and marks it **CONFIRMED**,
   **ADJUSTED**, **REFUTED** or **UNTESTED**, each with the real number from the ledger, marked
   estimated or dashboard-confirmed, with the sample size said out loud.
2. **On Day 7**, repeat it with a week of post-warm-up data, because the thing the protocol claims to
   buy (distribution on promotional content) is only visible after promotional content exists.
3. **If any element is adjusted or refuted, the protocol is republished here in full as v2**, with
   `SUPERSEDES v1 (YYYY-MM-DD): <reason>` at the top, and v1 is marked superseded in place rather than
   deleted, per the superseding rule in `docs/LEARNINGS.md`. Two live versions of this protocol may
   never exist at once.
4. **The honest ceiling on what step 1 can prove:** with one account and no control group, "CONFIRMED"
   means "we ran it and the outcome we wanted happened", not "the protocol caused it". n=1 is
   confidence **Low**, permanently, until a second account or a deliberate variation tests one element
   against another. Say that in the entry. Claiming the protocol worked because the account did fine
   would be exactly the survivorship-bias reasoning this repo is built to refuse.
5. **A warm-up that taught us nothing is recorded as teaching us nothing.** If the numbers are too thin
   to conclude anything, the entry says so and every element stays `UNTESTED`.

---

## 1. TikTok organic accounts (the one that matters most here)

This challenge is organic-first, so a suppressed TikTok account is not an inconvenience, it is the
whole strategy failing quietly.

### Why a brand-new account that immediately blasts product/link content gets suppressed
- **The algorithm has no idea what the account is.** Distribution works by matching a video to an
  audience the account has already been categorised into. A day-one account has no consumption
  history, no interest graph, and no baseline, so there is no audience to test it against.
- **The pattern is identical to spam.** Register, upload three promotional videos with a CTA and a
  link, repeat. That is exactly what a bot farm looks like, and the classifier does not get to read
  your intentions. The commonly reported failure is not what a new account posted but what it never
  did before posting.
- **The label sticks.** Operators consistently report that once an account is treated as spam-like,
  behaving normally weeks later does not undo it. Anecdotal, but the cost of being wrong is
  asymmetric: a week of patience versus an account that never recovers.
- **Diagnosis trap:** low views on the first posts is NOT proof of a shadowban. New accounts routinely
  get very low reach on the first 5-7 videos while the algorithm is still classifying them. Judge on a
  pattern over several days, not on one flat video.

### The sequence in the published guides (folklore-sourced numbers, principle is sound)
**This table is the source material, not the instruction.** It records what the vendor guides
collectively say, so the reasoning behind our own protocol is auditable. **Execute the Challenge Warm-Up
Protocol v1 at the top of this file instead;** where the two differ, the protocol wins, because it is the
version we committed to, dated, and measured. Sources cluster between 3 and 14 days, which is where our
**7-day floor** and the **10-14 day** variant for an account that will carry Spark Ads came from.

| Window | What the human does in the app (about 10-20 min/day) | Posting |
|---|---|---|
| Day 0-1 | Complete the profile properly: photo, short bio, name that matches the content to come. Then scroll the For You feed 20-30 min. No follows, no likes yet. | None |
| Day 2-3 | Keep scrolling 20-30 min/day, now in-niche. Light engagement: a handful of likes, a few saves, 3-5 follows of relevant creators. | None |
| Day 4-5 | Same, plus 2-3 genuine comments on popular in-niche videos. Watch some videos to completion and replay a few (watch-time is the signal). | Optional first **native, non-promotional** post |
| Day 5-7 | First posts land: **1/day**, native content in the niche, no link, no CTA, no brand pitch. 2-5 of these before any product content. | 1/day |
| Day 8-10 | Ramp cadence, do not jump it: 1 post, then 2, then 3. Product can start appearing *in frame* without a pitch. | 1-3/day |
| Day 10-14 | Full product content and CTA. This is when Phase 1 posting in the 30-day plan really begins. | 2-3/day |

**Readiness signals** (better than counting days): the For You feed consistently serves the niche
rather than random viral content, and videos are clearing roughly 100+ views. If the feed is still
random after 5 days of in-niche engagement, keep warming.

**Warm-up does not end at launch.** An account that only publishes and never consumes looks like a
bot. Keep 5-10 min/day of scrolling and engagement for the life of the account. The test: are we
posting more than we are watching and engaging?

### The 1,000-follower link gate
- On a **personal/creator account**, the clickable website field in the bio is gated at roughly
  **1,000 followers**, regardless of how many views a video gets. Long-standing norm, not a
  guaranteed-permanent rule.
- **Nuance worth checking in-app before assuming the gate applies:** multiple third-party guides
  (2026) say a **Business account** unlocks the website field with no follower minimum, at the cost of
  being restricted to commercially licensed audio (you lose trending sounds, which matters for
  organic reach). Other guides claim the requirements are cumulative. The sources contradict each
  other and none is TikTok documentation, so **verify it in the app rather than trusting either
  claim**, and log what was actually true.
- Until a link exists: drive to a TikTok Shop listing or a pinned comment CTA, never a bare store URL
  in caption text.

### API posting makes warm-up MORE important, not less
`content-engine` posts through an approved partner API. That is the ToS-clean route and it stays. But:
- The API post may already be carrying a reach handicap (anecdotal, ~30-50%). A cold account is a
  second handicap on top. Do not stack them.
- **The posting backend does not warm the account.** Scrolling, watching, liking and commenting have
  to happen in the app, by a human. This is a genuine recurring `HUMAN:` step of roughly 10-20 min/day
  during warm-up, then 5-10 min/day after. It is unglamorous and it is the cheapest edge available.
- Keep the existing API hygiene: space posts hours apart, unique captions and covers, under ~15/day,
  never mass-duplicate the same asset across accounts.

### Hard no (this is a ban vector, not a shortcut)
Most published warm-up guides are selling proxy stacks, anti-detect browsers, cloud phone farms and
aged accounts. **None of that is in scope here.** No bought or aged accounts, no proxy farms, no
anti-detect browsers, no running several accounts from one device, no VPN country hopping. One
account per device and network, consistent geography, real human behaviour. Violating this trades a
one-week delay for a permanent ban, which on a $100 budget ends the challenge.

---

## 2. Ad accounts (Meta and TikTok)

Paid only ever runs on **earned revenue** here (see `docs/BUDGET-RULES.md`), so this section is about
not wasting the first earned dollars.

### Why a brand-new account/pixel with a sudden high budget underperforms
- **No prior model.** A pixel with no conversion history gives the optimiser nothing to generalise
  from, so the learning phase runs longer and, per the reporting above, CPAs during learning run
  roughly 20-40% above steady state.
- **The 50-events-in-7-days math is unforgiving.** Roughly 7 conversions/day are needed to exit
  learning. A budget that cannot mathematically produce that never exits, so it pays learning-phase
  prices forever. This is the honest reason a $20-30 first paid test cannot be judged as a scaling
  attempt (see the reframe below).
- **Every big edit resets the clock.** Targeting, creative, optimisation event, bid strategy and large
  budget changes all reset learning. Reported 2026 tightening on Meta means changes that used to be
  safe now reset.
- **Fragmentation starves the signal.** Several thin ad sets learn slower than one funded ad set. On
  this budget: 1 campaign, 1 ad group, 3-5 creatives, which is already the playbook rule.
- **Sudden high spend on a fresh account also draws a compliance/payment look**, on top of the
  performance cost. Agencies frame this as a trust score; unverified, but the mitigation (ramp
  gradually) costs nothing either way.

### The ramp
1. **Warm the pixel for free during the organic phase.** Install the pixel/CAPI on the store on day 1,
   before there is any ad spend at all. Organic TikTok traffic, add-to-carts and the first organic
   orders all become pixel history at zero cost. This is the single highest-value free warm-up action
   available to an ad account and it happens while nobody is spending.
2. **Seed with a cheap objective before optimising for purchases.** A traffic or video-views campaign
   generates events far cheaper than conversions and teaches the pixel what a good visitor looks like.
   Move to conversion optimisation once real click/event volume exists.
3. **Respect the floors.** TikTok: $50/day campaign, $20/day ad group, prepay balance topped up (a
   campaign that runs the balance to zero stops dead, which also disrupts learning).
4. **Freeze edits for the first 72h.** Already the playbook rule; the learning-phase reset math is why.
5. **Scale in steps: no more than 20% every 48-72h.** Already the playbook rule.

### The honest reframe for this challenge
A first paid test funded by early revenue at $20-50/day will **not** exit the learning phase. So it is
not a profitability test, it is a read on whether a proven-organic creative can also be bought, and on
CTR/CPC/CVR direction. Judge it that way and say so in the ledger. Reporting a learning-phase CPA as
"the" CPA would be presenting a distorted number as a result.

---

## 3. Email and the sending domain

### Set authentication BEFORE the first send, not after
- **SPF** published and validating. Watch the **10 DNS lookup limit**: every `include:` counts, and
  going over makes SPF fail silently so the mail looks unauthenticated.
- **DKIM** configured at the sending provider with the public key in DNS. 2048-bit.
- **DMARC** published at **p=none** first (monitor, do not reject), then move to `p=quarantine` after
  2-3 weeks of clean reports. Setting `p=reject` on day one, before every sending path is
  authenticated, is a common self-inflicted outage: it rejects your own order confirmations.
- Verify propagation and allow up to 24h before testing anything.

### Age the domain before sending
Let the domain sit **7-14 days** with DNS records live and a real site/landing page up. Mail from a
domain registered yesterday is a red flag on its own. The store domain is bought in Phase 0 anyway, so
this window is free if the records go in on the day of purchase rather than on the day of the first
send.

### Ramp volume, never blast
- **Transactional mail** (order confirmation, shipping notification) is low-volume and effectively
  self-warming. That is almost all the mail this challenge sends in month one.
- **Bulk/marketing sends need a real ramp:** start small to the most engaged recipients only
  (reported ranges: 50-200/day in week 1), increase gradually over 3-6 weeks. Brand-new domains are
  reported to need 30-60 days for meaningful volume. The old "14-day warm-up" advice is out of date.
- **Why a cold domain blasting launch mail is permanent damage:** reputation is accumulated per
  domain/IP and is slow to rebuild. A launch blast from a cold domain gets filtered, the filtering
  itself teaches the providers to keep filtering, and the same domain then also carries your order
  confirmations. Customers stop receiving "where is my order" answers, tickets and disputes rise, and
  disputes threaten payouts. One bad send can undo weeks of reputation.
- **Insulate:** if bulk marketing ever starts, send it from a **subdomain** (or a separate domain), so
  the domain carrying transactional mail is never the one taking the reputation risk.

### The rule for this challenge
**No bulk email in month one.** Transactional plus a small abandoned-cart note only. That is both the
cheapest option and the best warm-up: real mail, opened by real buyers, at low volume. Anything
resembling a launch blast to a bought or scraped list is out of scope and would put the store's own
order emails at risk.

---

## 4. Shopify and the payment processor

The reserve/payout trap itself is already documented (`docs/PLAYBOOK.md` section 1, and the
"Reserve/hold awareness" section of `docs/BUDGET-RULES.md`). What belongs here is the warm-up framing
of it:

**A reserve is triggered by a spike measured against your own history. A new store has no history, so
its first good day IS the spike.** That is the connection. The warm-up goal is therefore to make the
processor's first several weeks of observation boring: revenue that climbs rather than jumps, complete
paperwork, real branding, fast dispute handling.

What that means in practice, all free:
- **Finish verification on day 1.** Documents left pending are themselves a hold trigger, per
  Shopify's own risk-evaluation page. Do not leave KYC half-done and discover it during the first
  viral video.
- **Look like a real business before the money arrives:** real domain, real contact email on that
  domain, the five policy pages live, honest shipping windows. These are already Phase 0 tasks; the
  point is that they are also processor warm-up, so do not defer them until traffic exists.
- **Let the first orders be small and steady.** A trickle of orders in week one is not a
  disappointment, it is history being built. The organic-first strategy happens to produce exactly
  this shape.
- **Protect the ratio.** Chargebacks under 1% and fast dispute response. `ops-support` owns this.
- **Keep the float and do not book reserved cash as available.** Already a budget rule.

**Honest limit:** unlike TikTok and the pixel, you cannot manufacture processor history without real
sales. There is no schedule to follow here. The only levers are verification completeness, dispute
discipline, and not spiking. If a reserve lands anyway, that is a known and documented possibility,
not a failure, and the float exists for exactly that.

---

## 5. What the ledger tracks

`tracker/LEDGER.md` carries a **Warm-up status** block in the standing tallies. Keep it current:
account creation dates, warm-up day count per account, native posts made before product content,
whether product content has started, pixel install date and whether it has organic events, domain
registration date and whether SPF/DKIM/DMARC are verified, and processor verification status.

`growth-operator` reports the warm-up state in its daily read, naming the protocol track and day.
`challenge-lead` refuses to authorise product-content posting or any paid ramp while the relevant warm-up
gate is unmet, and says plainly which gate is blocking. **Naming the gate is not the end of the run:** per
`docs/NO-STALL.md`, the gate stops the gated action only, and if warm-up has not started then starting it
is the day's decisive move while the loop prepares everything that gate will consume the hour it clears.

## 6. The trade-off, stated plainly

A 7-10 day warm-up spends a quarter to a third of a 30-day challenge before the first product video
goes out. That is a real cost and this file will not pretend otherwise. The alternative is worse: an
account that gets classified as spam-like in week one may never distribute product content at all, and
on this budget there is no paid channel to fall back on.

Two consequences, both honest:
1. **Start the warm-up before the challenge clock if at all possible.** Creating the TikTok accounts
   and buying the domain a week before Day 1 costs about $12 and 20 minutes a day, and it buys back
   the entire week. This is why warm-up sits in Phase 0 ahead of product selection: it does not need
   to know what the product is.
2. **If the clock has already started, warm and build in parallel** (product research, store build,
   policy pages and the sample order all happen during the warm-up window anyway), accept that full
   product posting begins around day 8-10, and record in the ledger that the effective
   product-validation window inside the 30 days is shorter than 30 days. Do not quietly compare the
   result against a 30-day expectation it never had.

**Do not "solve" a cold account by opening more accounts.** Every new account restarts the same clock,
and multi-account operation from one device is a ban vector, not a warm-up.

## Sources

TikTok organic warm-up (all vendor blogs, treat the schedules as folklore): conbersa.ai, duoplus.net,
streamclipping.ai, 360uniquizer.com, tokportal.com, multilogin.com, geelark.com, reel.farm,
superscale.ai, ssemble.com. Bio link gate (third-party, contradictory): buffer.com, stan.store,
socialrails.com, outfy.com. Ad accounts: cometly.com, adsgo.ai, thesocialoutline.com,
modernmarketinginstitute.com, jetfuel.agency (Meta learning phase, reset triggers, ramp steps),
stackmatix.com and shopify.com/blog/tiktok-ads and ads.tiktok.com help (TikTok floors, prepay,
new-advertiser credits), adscrewph.com (agency warm-up claims, vendor-influenced). Email:
prospeo.io, mailflowauthority.com, mailivery.io, blog.ozigi.app, leadhaste.com, salesforge.ai,
asphia.consulting, devcommx.com. Processor: help.shopify.com risk-evaluation page (authoritative),
directpaynet.com, witscode.com, eightx.co, disputifier.com (merchant-reported figures).

Researched 2026-08-10. Platform rules change; re-verify anything load-bearing before acting on it, and
write what actually happened to `docs/LEARNINGS.md`.
