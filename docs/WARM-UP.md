# Warm-Up: no account starts cold

**Doctrine:** every account this challenge depends on (TikTok, ad accounts, the sending domain, the
payment processor) performs worse when it is brand new, so the clock on making them not-new starts before
marketing does and before the product is chosen. Warm-up is time-based and free, cannot be bought or
compressed later, and is the only advantage on a $100 budget that costs $0. Nothing here spends money; it
changes the ORDER of free actions.

**The gate is founder-controlled.** `enabled` in `automation/state/warmup-state.json` defaults to `true`.
- **`true`:** everything below applies. `post` refuses anything the current protocol day does not allow.
- **`node cli.js warmup skip`:** the gate is off. `challenge-lead` and `content-engine` proceed straight
  to product content and CTA/link posts with no block, at the steady-state cap of 3 posts/day, and the
  command writes a dated line to `tracker/LEDGER.md` recording that warm-up was skipped by founder
  decision. Post caps and active holds still apply, because those answer platform signals, not the
  calendar.
- **`node cli.js warmup enable`:** restores the gate. Also logged.

Agents never flip the switch. They read it and act accordingly.

## Automated vs not automated

| AUTOMATED | NOT AUTOMATED |
|---|---|
| Warm-up day tracking and gating, via the `automation/` CLI | In-app scrolling, from the account's own device |
| Content generation | In-app likes |
| Captions and covers | In-app follows |
| Scheduled public posting, via the approved partner API | In-app comments |
| Per-post metric collection | (No official API exposes these actions, and the alternatives terminate the account) |
| Ad account and pixel/tag setup | |
| Paused campaign construction | |

## How to read the numbers here

**Documented by the platforms (reliable):**
- Meta's learning phase, exited after roughly **50 optimization events in 7 days**. New pixels with no
  conversion history take longer.
- TikTok Ads self-serve floors: **$50/day campaign, $20/day ad group**, billing is **prepay** (campaigns
  stop when the balance empties).
- TikTok's AIGC label requirement on realistic AI content (handled by `content-engine`).
- Shopify Payments' risk-evaluation page: new or higher-risk businesses can get a **custom payout schedule
  (5 or 20 business days)** and a **reserve on part or all of transactions**. Verification documents left
  pending is itself a review trigger.
- Gmail/Yahoo-era sender requirements: SPF, DKIM, DMARC expected on any real sending domain, and SPF has a
  hard **10 DNS lookup limit** that fails silently when exceeded.

**Anecdotal or vendor-sourced (directional only):**
- Every day-by-day TikTok warm-up schedule. No official formula exists and nearly every published guide is
  marketing for cloud phones, proxies, anti-detect browsers or clipping tools, several recommending
  techniques that violate TikTok's terms. The principle (build behavioural history before promoting) is
  consistent across all of them; the numbers are folklore. They cluster between 3 and 14 days, which is
  where our 7-day floor and the 10-14 day Spark Ads variant came from.
- A TikTok or Meta "account trust score" as a named, spend-gating mechanism. Agencies assert it; neither
  platform documents it.
- The ~30-50% reach haircut on API posting vs native app posting (consistently reported, never confirmed).
- Reserve percentages and hold durations (10-30% held 30-180 days). Merchant-reported, not policy.

Every number below says which bucket it is in.

---

# The Challenge Warm-Up Protocol v1 (ours, to be validated)

**Status: `HYPOTHESIS`** in the `docs/LEARNINGS.md` sense. Authored 2026-08-10. Our own house protocol,
built on the documented facts above plus stated inference about how a new account earns distribution.
Every day count and engagement count is inference. It exists so the team executes one specific thing
consistently instead of re-deliberating every morning, and so there is something falsifiable to check at
the end.

Nothing in it costs money and nothing in it simulates a human. The hard no below stands unchanged.

**Day numbering:** Day 1 is the first day of the 30-day challenge clock; negative days run before it. If
the clock has already started, run from today and accept that full product posting begins around day 8.

## Track A: the TikTok organic account

Open **one** account per real device and real network. A second real device plus a second real person is
fine; otherwise one. Three accounts on one phone is the ban vector, and every extra account restarts this
clock anyway.

| Day | Minutes in-app | Engagement, exact counts | Posts |
|---|---|---|---|
| **-7** | 20 | `HUMAN:` create the account (real device, network, email, phone). Complete the profile in one sitting: photo, handle, display name, one-line bio, niche. No bio link. Scroll For You 20 min, search 3 niche terms, watch 5 videos each to completion. **0 likes, 0 follows, 0 comments.** | 0 |
| **-6** | 20-30 | 10 likes, 3 saves, 5 follows of in-niche creators, 2 comments in real sentences. 10 in-niche videos watched to completion, 3 replayed. | 0 |
| **-5** | 20-30 | Same as Day -6. | 0 |
| **-4** | 15 | Same counts as Day -6. | 1 native, non-promotional: no product, no link, no CTA, no pitch |
| **-3** | 15 | Same. Post inside the same 2-hour window as yesterday. | 1 native |
| **-2** | 15 | Same. | 1 native (3 native total) |
| **-1** | 15 | Same. | 1 with the product incidentally in frame, still no pitch, CTA or link. Last unpromotional post |
| **1** | 5-10 | 5-10 min/day of scrolling and genuine engagement, for the life of the account. | 2/day. Product content and CTA allowed (CTA to a TikTok Shop listing or a pinned comment until the link gate clears) |
| **2-3** | 5-10 | Same. | 2/day |
| **4+** | 5-10 | Same. | 3/day, hold here |

That is **4 posts before Day 1** (3 native plus 1 product-in-frame) and 7 days of behavioural history
before the first promotional post. Encoded in `automation/lib/protocol.js`; republish both together.

**If the account will carry Spark Ads or any paid promotion:** start at **Day -14** and run the Day -6
routine for the extra week, with 3 more native posts on Days -11, -9 and -7. Same ending, longer runway.

**Hold conditions (do not push through these, gate on or off):**
- An action block, a "you're doing too much" notice, or any warning: halve engagement volume for 48h and
  post nothing new that day. Log it. `node cli.js warmup hold --hours 48 --reason "..."`.
- Three consecutive posts at effectively zero views: **hold cadence, do not raise it.** Keep consuming. Do
  not catch up with a burst, and do not conclude shadowban from a flat week.
- Warm-up never ends. An account that publishes and never consumes looks like a bot. The test: are we
  posting more than we are watching and engaging?

**Why the first posts are native:** the algorithm distributes by matching a video to an audience the
account is already classified into, and a day-one account has no consumption history to classify. Register
plus three promotional videos with a link is also the exact shape of a bot farm, and operators consistently
report that the spam-like label sticks even after weeks of normal behaviour. **Diagnosis trap:** low views
on the first 5-7 videos is normal classification behaviour, not proof of a shadowban. Judge on a pattern
over several days.

**The 1,000-follower link gate.** On a personal or creator account the clickable bio website field is gated
at roughly 1,000 followers (long-standing norm, not published policy). Third-party 2026 guides contradict
each other on whether a Business account unlocks it with no follower minimum at the cost of commercially
licensed audio only, so **verify in the app and log what was actually true**. Until a link exists, drive to
a TikTok Shop listing or a pinned comment, never a bare store URL in caption text (`docs/NO-STALL.md` P6).

**API posting makes warm-up matter more, not less.** `content-engine` posts through an approved partner
API, which is the ToS-clean route and stays. But the API post may already carry a reach handicap
(anecdotal, ~30-50%), so a cold account stacks a second one. Keep the hygiene: space posts hours apart,
unique captions and covers, under ~15/day, never mass-duplicate one asset across accounts.

**Hard no. This is a ban vector, not a shortcut.** No bought, aged or recycled accounts, no proxy farms, no
cloud phones, no anti-detect browsers, no bought followers, no engagement pods, no several accounts on one
device, no VPN country hopping, no unofficial login or session-token posting bots. One account per device
and network, consistent geography, real human behaviour. `compliance-guard` hard-bans all of it. This list
is the detail behind `docs/PLAYBOOK.md` "Non-negotiable (account survival)".

## Track B: the ad account and pixel

- **Day -7:** `HUMAN:` create or claim the ad account with real business details. `AGENT:` install the
  pixel/CAPI on the store the same day at **$0 spend** and complete domain verification. Confirm in the
  events manager that PageView, AddToCart, InitiateCheckout and Purchase all fire. An
  installed-but-not-firing pixel accumulates nothing, and that failure hides for a week.
- **Day -7 through Day 1 and beyond: spend stays $0.** The whole organic phase is free pixel warm-up.
- **Pre-spend target before the first dollar (inference):** at least **200 PageView, 20 AddToCart, 1
  Purchase** recorded organically. Below that when revenue arrives, seed with a cheap **traffic or
  video-views** objective at the floor for 3 days first, as a **new ad group**, because changing the
  optimisation event on an existing one resets learning.
- **First spend, from earned revenue only:** at the **platform minimum** ($20/day ad group, $50/day
  campaign on TikTok self-serve), prepay topped up. Structure: 1 campaign, 1 ad group, 3-5 creatives.
- **Then nothing for 72 hours.** No budget, targeting, creative or bid change. Each resets learning.
- **After 72h, step at most +20%, no more often than every 48h.**
- **State in the ledger every time:** a test at this budget cannot reach ~50 optimisation events in 7 days,
  so it never exits the learning phase, where CPAs run a reported 20-40% above steady state. It reads
  creative, CTR, CPC and CVR direction. It is not a CPA. Fragmented thin ad sets learn slower than one
  funded ad set, which is why the structure is 1/1/3-5.

## Track C: the sending domain

- **Day -7:** buy the domain and publish authentication the **same day**. SPF with as few `include:`
  mechanisms as possible (the **10 DNS lookup limit** is hard and fails silently past it), DKIM at
  2048-bit with the public key in DNS, DMARC at **`p=none`** with a `rua` address. Put a real landing page
  up and create the real contact mailbox on the domain. Mail from a domain registered yesterday is itself
  a red flag; the domain needs 7-14 days of age, which is free if the records go in on purchase day.
- **Day -6:** verify with an external checker, wait 24h for propagation, then send 3 test messages to
  mailboxes you control at Gmail, Outlook and Yahoo and confirm `spf=pass dkim=pass dmarc=pass` in the raw
  headers. Fix failures now, not after the store is live.
- **Days -6 to -1:** no sends beyond your own tests.
- **Day 1 onward: transactional mail only** (order confirmation, shipping notification, one abandoned-cart
  note). Low volume opened by real buyers is the best warm-up available and is all this challenge sends.
  **No bulk email in month one.** Move DMARC to `p=quarantine` only after 2-3 weeks of clean reports;
  `p=reject` on day one rejects your own order confirmations.
- **If bulk ever starts** (not in month one, and from a **subdomain**, never the domain carrying order
  confirmations): ramp **10/day, then 25, 50, 100**, one full day per step, most engaged recipients first.
  **Check between every step:** bounce under **2%**, spam complaints under **0.1%**, opens not collapsing.
  A failed step drops back one volume for 3 days before retrying. Reputation accrues per domain and is slow
  to rebuild, and the same domain answers "where is my order", so one bad send raises disputes.

## Track D: the store and the payment processor

- **Day -7:** create the store and **finish payments verification to 100% the same day**: bank account
  linked, real business address, real phone, contact email on the domain. Pending documents are themselves
  a hold trigger per the processor's own risk page.
- **Days -7 to -1:** five policy pages live with honest shipping windows, real branding, a real product
  page. Run one order end to end through the store's **test mode** (free, no real card, no risk signal) to
  prove checkout, confirmation email and fulfilment routing.
- **Week 1 revenue smoothness rule (inference, and the one most likely to break under excitement):** **one
  change at a time, at most one per 72h.** No discount blast plus price change plus new SKU in the same
  week. No sitewide discount above 20% in week 1. If a video pops and orders spike, that spike is the only
  anomaly the processor gets to see that week: change nothing else.
- **Protect the ratio:** chargebacks under 1%, disputes answered same day, refunds fast. `ops-support` owns
  this.
- **The mechanism, stated once:** a reserve is triggered by a spike measured against your own history, and
  a new store has none, so its first good day IS the spike. You cannot manufacture processor history
  without real sales. The only levers are verification completeness, dispute discipline, and not spiking.
  A reserve landing anyway is a documented possibility, and the float exists for it
  (`docs/BUDGET-RULES.md`).

## Track E: Meta and Google ad accounts

Budget gates a channel's LAUNCH, never its PREPARATION. Both paid platforms are stood up in parallel with
Track A so they launch the hour the spend trigger fires.

- **Day -7:** create Meta Business Manager plus ad account AND the Google Ads account. $0 spend on both.
  The Meta pixel is already installed (Track B); add the Google tag beside it and verify BOTH fire
  PageView/ViewContent/AddToCart on the test order.
- **Day -7 to Day 1:** build the Paid Readiness Dossier for both platforms (`docs/NO-STALL.md` P7). Meta: 1
  campaign, 1 broad ad set, 3-5 creatives, PAUSED. Google: Merchant Center product feed drafted plus a
  Shopping / Performance Max campaign, PAUSED. Nothing spends.
- New ad accounts have no history: first spend at platform minimum, no edits for 72h, then +20% steps no
  more often than 48h. `HYPOTHESIS`, same provenance and review cadence as Track B.
- **Spend trigger** (`docs/BUDGET-RULES.md`): at least $150 collected revenue with the float intact. Launch
  order: whichever platform's pixel/tag has more accumulated events; a tie goes to Meta, since broad
  targeting needs less signal than Search.

Account creation at $0 is `DOCUMENTED` free on both platforms. The ramp numbers and the launch-order rule
are ours.

## Documented facts vs our inference

**Documented (load-bearing, still worth re-verifying):** ~50 optimisation events in 7 days exits Meta's
learning phase, and targeting/creative/optimisation-event/bid/large-budget changes reset it (Track B's 72h
freeze and +20% steps). TikTok floors of ~$50/day campaign and ~$20/day ad group, prepay billing that stops
campaigns at zero balance (Track B's "platform minimum"). SPF's 10 DNS lookup limit failing silently, DKIM
and DMARC expected of any real sender, `p=none` being monitor-only, the 0.1% spam-complaint target (Track
C). The processor's custom payout schedules (5 or 20 business days), reserves on part or all of
transactions, and pending documents as a trigger (Track D). TikTok's AIGC label requirement, and the bio
link gated at roughly 1,000 followers (long-observed norm rather than published policy).

**Our inference, unvalidated, the part that could simply be wrong:**
- **Every day count.** The 7-day span, 3 consume-only days, 3 native posts, 1 product-in-frame post, the
  14-day Spark Ads variant. We picked 7 because it is the cheapest number that still buys a week of history.
- **Every engagement count.** 10 likes, 3 saves, 5 follows, 2 comments, 10 completions, 3 replays. These
  are "plausibly like a real person's first week", nothing more.
- **That consuming before posting improves distribution at all.** The mechanism is a reasonable model of
  how recommendation works and is not something TikTok documents.
- **The 200/20/1 pre-spend pixel target** and the 3-day cheap-objective seed.
- **The 10/25/50/100 email ramp** and the 2% bounce ceiling. Vendor ranges run 50-200/day in week 1; ours
  is deliberately more conservative because our volume is tiny.
- **The week-1 store smoothness rule**, including the 72h spacing and the 20% discount ceiling.
- **Any notion of an account "trust score"** this protocol improves. Neither platform documents one. The
  mitigations cost nothing either way.

## What we measure during warm-up

Record daily in the **Warm-up status** block of `tracker/LEDGER.md`. `growth-operator` owns collection.

- **Per post:** views at 1h, 24h and 72h; average watch time and completion rate; saves; shares; comments
  (and specifically buy-intent comments); profile taps.
- **Account:** follower count daily, follower delta per post, and a daily yes/no plus 1-5 note on **"is the
  For You feed serving the niche"**. That readiness signal matters more than the day count.
- **Incidents:** any action block, warning, removal, AIGC flag or reach collapse, with the date.
- **Pixel:** date of first event, cumulative count by event type, whether all four events fire.
- **Email:** bounce rate, spam-complaint rate, SPF/DKIM/DMARC header pass/fail, DMARC aggregate pass rate.
- **Processor:** payout schedule shown in the admin, whether a reserve notice appeared and at what revenue
  level, days to first payout, dispute count.

`growth-operator` reports the track and day by name in its daily read. `challenge-lead` refuses to
authorise product-content posting or a paid ramp while a gate is unmet **and the gate is enabled**, and
says which gate is blocking. Naming the gate is not the end of the run: per `docs/NO-STALL.md` the gate
stops the gated action only, and if warm-up has not started then starting it is the day's decisive move.

## How this protocol corrects itself

1. **On Day 1**, `challenge-lead` writes a dated entry to `docs/LEARNINGS.md` marking every element
   **CONFIRMED**, **ADJUSTED**, **REFUTED** or **UNTESTED**, each with the real number from the ledger,
   marked estimated or dashboard-confirmed, sample size stated.
2. **On Day 7**, repeat with a week of post-warm-up data, because what the protocol claims to buy
   (distribution on promotional content) is only visible after promotional content exists.
3. **Any element adjusted or refuted: republish the protocol here in full as v2** with
   `SUPERSEDES v1 (YYYY-MM-DD): <reason>` at the top, mark v1 superseded in place, and update
   `automation/lib/protocol.js` in the same run. Two live versions may never exist at once.
4. **The ceiling on what step 1 can prove:** with one account and no control group, CONFIRMED means "we ran
   it and the outcome we wanted happened", not "the protocol caused it". n=1 is confidence **Low**
   permanently until a second account or a deliberate variation tests one element against another. Say
   that in the entry.
5. **A warm-up that taught us nothing is recorded as teaching us nothing**, with every element `UNTESTED`.

## The cost, stated once

A 7-10 day warm-up spends a quarter to a third of a 30-day challenge. Recover it by starting the accounts
and buying the domain a week before Day 1: about $12 and 20 minutes a day. If the clock has already
started, warm and build in parallel (product research, store build, policy pages and the sample order all
happen inside the warm-up window), and record in the ledger that the effective product-validation window
is shorter than 30 days. Do not solve a cold account by opening more accounts: every new one restarts the
same clock, and multi-account operation from one device is a ban vector.

## Sources

TikTok organic warm-up (all vendor blogs, schedules are folklore): conbersa.ai, duoplus.net,
streamclipping.ai, 360uniquizer.com, tokportal.com, multilogin.com, geelark.com, reel.farm, superscale.ai,
ssemble.com. Bio link gate (third-party, contradictory): buffer.com, stan.store, socialrails.com,
outfy.com. Ad accounts: cometly.com, adsgo.ai, thesocialoutline.com, modernmarketinginstitute.com,
jetfuel.agency (Meta learning phase, reset triggers, ramp steps), stackmatix.com,
shopify.com/blog/tiktok-ads and ads.tiktok.com help (TikTok floors, prepay, new-advertiser credits),
adscrewph.com (agency warm-up claims, vendor-influenced). Email: prospeo.io, mailflowauthority.com,
mailivery.io, blog.ozigi.app, leadhaste.com, salesforge.ai, asphia.consulting, devcommx.com. Processor:
help.shopify.com risk-evaluation page (authoritative), directpaynet.com, witscode.com, eightx.co,
disputifier.com (merchant-reported figures).

Researched 2026-08-10. Platform rules change; re-verify anything load-bearing before acting on it, and
write what actually happened to `docs/LEARNINGS.md`.
