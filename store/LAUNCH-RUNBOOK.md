# Launch Runbook: domain and plan paid, to store live with everything firing

Written 2026-08-12 by `store-architect`. **Status: nothing in this file has been done.** No domain is
owned, no Shopify account exists, no processor is verified, no ad account is created
(`tracker/LEDGER.md`, Tracks B/C/D/E). This is the sequence, not a report.

**What this file owns: the ORDER.** Every number, price, policy word, campaign setting and DNS string
already lives somewhere else in this repo and is cited here rather than restated. Restating them would
create a second copy to keep in sync, and the two would disagree in front of a customer. What did not
exist until now is a single dependency-ordered sequence with a clock and a running cost against the
$100 cap.

**Where the detail lives:**

| Need | File |
|---|---|
| Every store number, variant price, threshold, theme setting, app list, CVR checklist | `store/BUILD-SPEC.md` |
| Account-creation order and which keys unlock which agent | `docs/SETUP-GUIDE.md` |
| Why each warm-up action is timed the way it is, and the four tracks | `docs/WARM-UP.md` Tracks A-E |
| Verbatim SPF and DMARC strings, the two silent failure modes, the DMARC alignment check | `ops/dns-records.md` |
| Meta / Google / TikTok campaign structure, kill thresholds, the paid pre-flight | `ops/paid-readiness-dossier.md` |
| Pixel and tag install, event names, how to verify each one is really firing | `ops/pixel-and-tag-spec.md` |
| Page and policy text to paste | `store/copy/` (8 files) |
| Supplier picks and the honest transit window | `ops/sourcing-dossier.md` |
| Support macros for the first ticket | `ops/cs-templates.md` |
| The cap, the float, the $150 spend trigger | `docs/BUDGET-RULES.md` |

**House style, enforced:** no em dashes. Plain voice. No hype. Honest shipping windows. No fabricated
trust signals. No claim that anything here has been created, installed or published.

**One standing constraint that shapes several steps: no product sample will ever be ordered** (founder
decision 2026-08-12, `tracker/LEDGER.md`). Nothing in the store, the emails or the ads may state a
first-hand finding about the product. Manufacturer specifications may be stated with attribution. The
detail is in `store/copy/email-flow-welcome.md` under "Compliance requirements" and in
`creative/NO-SAMPLE-PLAN.md`.

---

## How to read a step

```
N. [PHASE] Title                                  [flags]  [time]  [cost]
   Where:    exact screen or URL
   Do:       exact clicks and exact values, or the file to paste from
   Expect:   what you should see if it worked
   If wrong: the most likely failure and what to do about it
```

Flags used, and they mean exactly this:

- **IRREVERSIBLE**: money leaves, or a record is created that cannot be un-created cleanly.
- **STARTS A CLOCK**: a waiting period begins that cannot be compressed later. Doing this step earlier
  is worth more than doing it well.
- **ONE SITTING**: stopping halfway leaves the account in a worse state than not starting.
- **SAFE STOP**: you can close the laptop here and nothing is half configured.
- **VERIFY IN UI**: Shopify moves this screen between releases. The path below is the best current
  reading, not a guarantee. If it does not match, search the admin for the setting name and trust the
  UI over this file.

---

## Phase map: the clock and the money

Time is hands-on minutes, not calendar time. Two waits are calendar-bound and are called out.

| Phase | What it does | Hands-on | Running clock | Cost | Running out-of-pocket |
|---|---|---|---|---|---|
| 0 | Assemble what cannot be guessed | 25 min | 0:25 | $0.00 | $0.00 |
| 1 | The two purchases, and the branch they set | 40 min | 1:05 | $12.00 to $16.00 | **$12.00 to $16.00** |
| 2 | DNS and sender authentication (Track C) | 30 min | 1:35 | $0.00 | $12.00 to $16.00 |
| 3 | Payments verification (Track D), **one sitting** | 30 min | 2:05 | $0.00 | $12.00 to $16.00 |
| 4 | The store itself: theme, product, policies, checkout | 170 min | 4:55 | $0.00 | $12.00 to $16.00 |
| 5 | Apps and fulfilment routing | 65 min | 6:00 | $0.00 plus the float | $12.00 to $16.00 |
| 6 | Pixel and tag verification (Track B) | 40 min | 6:40 | $0.00 | $12.00 to $16.00 |
| 7 | The two email flows | 45 min | 7:25 | $0.00 | $12.00 to $16.00 |
| 8 | End-to-end test order | 40 min | 8:05 | $0.00 | $12.00 to $16.00 |
| 9 | Track E: both ad accounts, both campaigns PAUSED | 70 min | 9:15 | $0.00 | $12.00 to $16.00 |
| 10 | Publish, and the store-live pre-flight | 30 min | **9:45** | $0.00 | **$12.00 to $16.00** |

**Total: about 9 hours 45 minutes of hands-on work and $12 to $16 against the $100 cap**, leaving
roughly $84 to $88, of which `docs/BUDGET-RULES.md` earmarks $30 to $50 as the fulfilment float. No
step in this runbook spends anything except Phase 1. If a step asks you for money, you are on the wrong
step or an app has switched you to a paid tier: stop and check.

**Two calendar waits, neither of which blocks the other phases:**
1. **DNS propagation**, up to 48 hours, usually minutes. Phase 2 step 13 to the header check in step 47.
2. **Domain age**, 7 to 14 days before mail from it looks normal (`docs/WARM-UP.md` Track C). Buying the
   domain is the only action that starts this, which is why it is the first thing that costs money.

---

## Irreversible steps and clocks, in one list

Every one of these is flagged again inline. Collected here so they can be read before starting.

| Step | Flag | What it starts or spends |
|---|---|---|
| 5 | IRREVERSIBLE | Shopify plan charge. Also starts the 3-month promo window, after which the rate rises. |
| 6 | IRREVERSIBLE, STARTS A CLOCK | Domain purchase. Registrations are typically non-refundable and the name is yours for a year. **Starts the 7 to 14 day domain-age clock, which cannot be bought back later.** |
| 7 | STARTS A CLOCK | Connecting the domain begins DNS propagation, up to 48 hours. |
| 12 | STARTS A CLOCK | Sender-domain authentication starts the DNS wait that gates the first honest header check. |
| 14 to 17 | IRREVERSIBLE, ONE SITTING | Shopify Payments verification. **Documents left pending are themselves a payout-hold trigger** (`docs/WARM-UP.md` Track D, the processor's own risk page). Starting and not finishing is worse than not starting. |
| 31 to 33 | IRREVERSIBLE | Funding the supplier account. This is the fulfilment float, not store budget (`docs/BUDGET-RULES.md`). |
| 35 to 37 | IRREVERSIBLE | OAuth grants to Meta, TikTok and Google. Revocable, but each creates a business record on their side. |
| 56 | STARTS A CLOCK | Removing the store password. First real visitor, first real order, first processor history. |
| Later, not here | IRREVERSIBLE | **The first ad-account dollar.** Not in this runbook at all. Gated on $150 collected revenue (`docs/BUDGET-RULES.md`) and governed by `ops/paid-readiness-dossier.md`. Phase 9 builds campaigns PAUSED and stops. |

---

## Safe stopping points

Stop only at these. Anywhere else and something is half configured.

- **After step 13** (DNS published, records resolving). Natural stop, and the 24-hour wait wants one.
- **After step 17** (payments verification at 100%, zero pending documents). **Do not stop inside Phase 3.**
- **After step 30** (store built but unpublished, still behind the password).
- **After step 37** (all apps installed and connected).
- **After step 45** (email flows built, not yet on).
- **After step 50** (test order run, test mode turned back off).
- **After step 55** (both paid campaigns built and PAUSED).

**Why Phase 3 is the exception, stated plainly.** `docs/WARM-UP.md` Track D takes this from the
processor's own risk-evaluation page: an account with verification documents **pending** is treated as a
review candidate, and a pending state is not neutral, it is a hold trigger. Half-finished verification
is therefore worse than untouched verification. Allocate 30 uninterrupted minutes and have the bank
details and photo ID physically in front of you before you open the screen. If you cannot do that today,
do not open it today.

---

# Phase 0: assemble what cannot be guessed

**25 minutes. $0.00. Running out-of-pocket $0.00.**

Nothing here touches an account. It exists because half the steps below stop dead on a value nobody has
decided, and deciding it mid-build is how a guess ends up published.

---

**1. [P0] Assemble the business identity pack** [10 min] [$0]
- **Where:** offline.
- **Do:** write down, in one place: legal business name, real postal address, real phone, the bank
  account for payouts, and government photo ID. These are the Phase 3 inputs and the CAN-SPAM footer
  inputs.
- **Expect:** five values, none of them invented.
- **If wrong:** if there is no business entity, a sole proprietorship under a personal legal name and
  address is normally acceptable to the processor. **Do not invent a company name or an address.** The
  address is a legal requirement in commercial email footers (`store/copy/email-flow-welcome.md`,
  "Compliance requirements"), and a fabricated one is both a compliance failure and a processor risk
  signal. If you are unwilling to publish a home address, resolve that before Phase 1, not after.

**2. [P0] Pick the domain from the ranked list and check availability** [5 min] [$0]
- **Where:** any registrar search, or the Shopify domain search once step 5 is done.
- **Do:** work down the ranked list in `store/BUILD-SPEC.md` section 1 and take the first available.
- **Expect:** one name, decided, before any purchase screen is open.
- **If wrong:** if none are available, the naming constraint is that the store name matches the live
  TikTok account `@dailypawfinds` closely enough that a visitor arriving from a video recognises it
  (`store/BUILD-SPEC.md` sections 1 and 2). Extend the list under that constraint. Do not rename the
  store.

**3. [P0] Fix the two shipping numbers that must not be guessed** [5 min] [$0]
- **Where:** `ops/sourcing-dossier.md`, "Ship-time strings to actually use".
- **Do:** confirm the transit window you will publish. The dossier's answer for the fountain is **7 to
  20 business days**, and it is deliberately the wide end because no US-warehouse SKU is confirmed. The
  **processing time** is still a `[PLACEHOLDER]` in `store/copy/policy-shipping.md`; decide it now, and
  1 to 3 business days is the defensible answer for a DSers-routed order.
- **Expect:** two numbers written down, both defensible against the real supplier.
- **If wrong:** a number faster than the supplier can hit is an FTC prompt-delivery problem and a TikTok
  disclosure problem, not just a conversion problem (`docs/PLAYBOOK.md` section 9). When in doubt,
  publish the slower number. If a CJdropshipping US-warehouse SKU is confirmed later, the window becomes
  3 to 8 business days and **every file listed in the consistency notes at the bottom of
  `store/copy/email-flow-welcome.md` changes in the same session**, or they will contradict each other
  in front of a customer.

**4. [P0] Read the placeholder register below and decide every line** [5 min] [$0]
- **Where:** the "Placeholder register" section near the end of this file.
- **Do:** every `[PLACEHOLDER: ...]` in `store/copy/` is a real open item. Resolve each or accept that
  the page carrying it cannot be published.
- **Expect:** a decision per line, including the deliberate "cut it" decisions.
- **If wrong:** the BPA-free bullet in `store/copy/product-cat-water-fountain.md` is the trap. It is
  a material claim, nobody has held the unit, and the copy file already says to cut the bullet rather
  than publish it unconfirmed. Cut it.

---

# Phase 1: the two purchases

**40 minutes. $12.00 to $16.00. Running out-of-pocket $12.00 to $16.00.**

This phase is the only one that spends money. It also sets a branch that changes Phase 2 substantially,
so read step 6 before you buy anything.

---

**5. [P1] Create the Shopify account and take the Basic plan** [IRREVERSIBLE] [10 min] [~$1, verify]
- **Where:** `shopify.com`, sign up, then the plan selection screen.
- **Do:** create the account with the business email you control today (it does not have to be the
  domain address yet, that comes in step 12). Select **Basic**. Take the promotional first-months rate
  if it is offered.
- **Expect:** an admin at `admin.shopify.com/store/[your-store]`, and a plan line showing Basic.
- **If wrong:** **the "$1/mo for 3 months" figure in `docs/SETUP-GUIDE.md` A.1 and
  `store/BUILD-SPEC.md` section 1 is a promotion, not a price, and this runbook could not verify it is
  still live.** Read the actual number on the checkout screen and log that number in
  `tracker/LEDGER.md`, not the one in our docs. If the real charge is materially higher, it still fits
  the cap, but the cap arithmetic in `docs/BUDGET-RULES.md` needs the true figure. Also note the promo
  end date: Basic reverts to full price after the promo window, and that is a month-4 cost the challenge
  should be paying from revenue.

**6. [P1] Buy the domain** [IRREVERSIBLE] [STARTS A CLOCK] [10 min] [$11 to $15]
- **Where:** either **Settings > Domains > Buy new domain** inside the Shopify admin, or a third-party
  registrar. [VERIFY IN UI]
- **Do:** buy the name from step 2. **Decide the branch here:**
  - **Branch A, bought inside Shopify.** Shopify's help documentation states that for a
    Shopify-purchased domain, email authentication is configured automatically, including DKIM, SPF and
    DMARC. This collapses most of Phase 2 into a verification pass. It is the lower-failure path and it
    is what this runbook recommends for a founder standing everything up in one day.
  - **Branch B, bought at a third-party registrar.** You publish records by hand, per
    `ops/dns-records.md`. More control, more ways to break it silently.
- **Expect:** a registration confirmation and the name showing as owned.
- **If wrong:** domain registrations are generally non-refundable and typos are permanent for a year.
  Read the name character by character before confirming. **This is the step whose delay compounds:**
  domain age is calendar-driven, the aging window is 7 to 14 days, and no later action recovers a day
  of it (`docs/WARM-UP.md` Track C, and `tracker/LEDGER.md` Founder Action #1, cost of delay 1.0).

**7. [P1] Connect the domain and set it primary** [STARTS A CLOCK] [5 min] [$0]
- **Where:** **Settings > Domains**. [VERIFY IN UI]
- **Do:** Branch A is already connected. Branch B: use Shopify's connect flow and follow the A and CNAME
  values **it shows you**. Set the domain as primary. Leave "redirect all traffic to this domain" on.
- **Expect:** the domain listed as **Connected** and marked primary. Propagation can take up to 48 hours
  and usually takes minutes.
- **If wrong:** the single most common failure is editing DNS at a registrar whose **nameservers are
  delegated elsewhere**, which changes nothing no matter how many times you save. `ops/dns-records.md`,
  "What stays true regardless", covers this. Check where the nameservers actually point before editing
  anything.

**8. [P1] Fill Store details truthfully** [10 min] [$0]
- **Where:** **Settings > Store details**. [VERIFY IN UI]
- **Do:** legal business name, the real postal address, phone, store contact email, and the customer-
  facing sender email on the new domain.
- **Expect:** every field populated with a real value.
- **If wrong:** **this field is load-bearing for the email flows.** Shopify Email pulls the CAN-SPAM
  postal address from here rather than from the email body, so `store/copy/email-flow-welcome.md` states
  plainly that if this field has no real address, the welcome flow may not be turned on. Phase 7 will
  stop here if you skipped it.

**9. [P1] Set currency to USD only** [5 min] [$0]
- **Where:** **Settings > Store details**, currency. [VERIFY IN UI]
- **Do:** single default currency, USD. Do not enable multi-currency.
- **Expect:** one currency, no conversion offered at checkout.
- **If wrong:** this is not cosmetic. `store/BUILD-SPEC.md` section 3 keeps the store single-currency
  because post-purchase offers do not display in non-default currencies, so enabling multi-currency
  quietly closes a door we deliberately left open (`docs/LEARNINGS.md`, the post-purchase-upsell entry).

---

# Phase 2: DNS and sender authentication (Track C)

**30 minutes. $0.00. Running out-of-pocket unchanged.**

Do this the same day as step 6. `docs/WARM-UP.md` Track C: publish authentication on purchase day, so
the domain ages with its records already in place.

---

**10. [P2] Establish where DNS actually lives** [5 min] [$0]
- **Where:** your registrar's nameserver settings.
- **Do:** confirm whether the nameservers point at Shopify or at the registrar or at a third party such
  as Cloudflare. **Publish records only at the service the nameservers point to.**
- **Expect:** one unambiguous answer.
- **If wrong:** see step 7's failure note. This five-minute check prevents the most common hour-long
  DNS dead end.

**11. [P2] Publish SPF and DMARC** [10 min] [$0]
- **Where:** the DNS zone editor identified in step 10.
- **Do:** paste the two records **exactly as written in `ops/dns-records.md`**, Records 1 and 2. That
  file is the single source for these strings and this runbook deliberately does not copy them. Branch A
  may find these already present: **read them, do not blindly add a second one.**
- **Expect:** one TXT at the root and one TXT at `_dmarc`.
- **If wrong:** the two silent failure modes are both documented in `ops/dns-records.md`: **two SPF
  records is a permanent error that fails both**, and the **10 DNS lookup limit fails silently**. Neither
  produces a bounce or a warning. If a record already exists, edit it, never append a second.

**12. [P2] Authenticate the sender domain and collect the DKIM records** [STARTS A CLOCK] [10 min] [$0]
- **Where:** **Settings > Notifications**, then in the **Sender email** section, **Email domain
  authentication**. [VERIFY IN UI]
- **Do:** Shopify displays the CNAME records for this specific store, which handle DKIM and SPF for your
  sender address. Add **every** record shown. `ops/dns-records.md` Record 3 explains why these could not
  be written in advance: Shopify generates them per store, so they did not exist until step 5 did.
  Shopify's help documentation states it can configure these automatically for Shopify-purchased domains
  and for third-party domains hosted on certain providers, so this step may already be done for you.
  Confirm rather than assume.
- **Expect:** the sender email showing as authenticated, or pending while DNS propagates.
- **If wrong:** the number of records varies, and adding some but not all leaves it failing. Copy them
  character for character. **A DMARC record must exist alongside these** or the sender address gets
  rewritten to a Shopify address, which defeats the point of a domain contact email. That is exactly
  what step 11 published.

**13. [P2] Confirm the records resolve** [SAFE STOP] [5 min] [$0]
- **Where:** your own terminal.
- **Do:** run the two `nslookup` commands given in `ops/dns-records.md`, "Verification, once records are
  in".
- **Expect:** the exact strings you published come back.
- **If wrong:** if nothing returns, **wait and retry rather than re-editing.** Re-editing mid-propagation
  is how duplicates get created, and duplicates are the permanent failure in step 11.
- **This is a safe stop.** The real proof is a message header, and that needs the store to be able to
  send, so it happens in step 47. Do not skip it because this step passed: `ops/dns-records.md` explains
  that **SPF can pass while DMARC still fails on alignment**, and that case is invisible without reading
  a real header.

---

# Phase 3: payments verification (Track D)

**30 minutes. ONE SITTING. $0.00. Running out-of-pocket unchanged.**

**Read the "Safe stopping points" section above before opening this phase.** Documents left pending are
themselves a payout-hold trigger. Do not start this with 10 minutes free.

---

**14. [P3] Activate Shopify Payments** [IRREVERSIBLE] [ONE SITTING] [15 min] [$0]
- **Where:** **Settings > Payments**. [VERIFY IN UI]
- **Do:** activate Shopify Payments and complete every field: business type, legal name, address, phone,
  tax identifier, statement descriptor, and the bank account for payouts. Use the identity pack from
  step 1.
- **Expect:** the section shows active with **no outstanding or pending items**.
- **If wrong:** Shopify Payments avoids the third-party-gateway surcharge, which is why
  `store/BUILD-SPEC.md` section 1 specifies it. If it is unavailable in your region or you are declined,
  that is a founder-level decision about a different processor and its surcharge, not something to
  improvise mid-build. Log it and stop.

**15. [P3] Upload every requested verification document, to 100%** [ONE SITTING] [10 min] [$0]
- **Where:** the same screen, verification or "action required" area. [VERIFY IN UI]
- **Do:** upload photo ID and any business document requested, immediately, in this sitting.
- **Expect:** zero items in a pending or requested state.
- **If wrong:** **this is the single highest-value step in Phase 3 and the reason it is one sitting.**
  Per `docs/WARM-UP.md` Track D, the processor's own risk page treats pending documents as a trigger.
  If a document genuinely cannot be produced today, that is a real blocker to record in
  `tracker/LEDGER.md`, not a step to leave half open.

**16. [P3] Connect PayPal** [5 min] [$0]
- **Where:** **Settings > Payments**, additional payment methods. [VERIFY IN UI]
- **Do:** connect the PayPal business account (`store/BUILD-SPEC.md` section 1).
- **Expect:** PayPal listed as an active payment method.
- **If wrong:** PayPal can be added later without breaking anything. It is not worth blocking Phase 4.

**17. [P3] Record the payout schedule and any reserve notice** [SAFE STOP] [5 min] [$0]
- **Where:** the payouts area of the payments settings. [VERIFY IN UI]
- **Do:** write the payout schedule shown, and whether any reserve notice appeared, into
  `tracker/LEDGER.md` Track D, marked dashboard-confirmed with today's date.
- **Expect:** a schedule in business days.
- **If wrong:** a longer custom schedule or a reserve is a **documented possibility on a new account**,
  not a failure (`docs/LEARNINGS.md`, the reserves and payout-timing entry: Shopify's own published
  examples are "$1,000 reserved for 120 days" and "10% reserve for 120 days", and some reserves cannot
  be appealed). The float exists for exactly this (`docs/BUDGET-RULES.md`). Record it and continue.
- **This is a safe stop.**

---

# Phase 4: the store itself

**170 minutes. $0.00. Running out-of-pocket unchanged.**

Everything in this phase is a transcription job. `store/BUILD-SPEC.md` fixes every number and
`store/copy/` holds every word. If you hit a decision, it is a gap in the spec, not a place to
improvise.

**Keep the store password on for this whole phase.** It comes off in step 56.

---

**18. [P4] Confirm Dawn is the active theme** [5 min] [$0]
- **Where:** **Online Store > Themes**. [VERIFY IN UI]
- **Do:** confirm the free Dawn theme is live. Do not buy a theme.
- **Expect:** Dawn, current version, published.
- **If wrong:** if a new store now ships a different default free theme, that is acceptable, but log the
  substitution: `store/BUILD-SPEC.md` section 3 names Dawn's specific settings and some section names
  will differ.

**19. [P4] Apply theme settings** [25 min] [$0]
- **Where:** **Online Store > Themes > Customize > Theme settings**.
- **Do:** paste the palette, typography, button and card settings from `store/BUILD-SPEC.md` section 3.
  Do not re-litigate the palette. Set the logo and favicon from the existing `@dailypawfinds` profile
  mark rather than commissioning a new one, and connect the TikTok link under social.
- **Expect:** a warm cream store, not a stark white default.
- **If wrong:** if a named font is unavailable, `store/BUILD-SPEC.md` section 3 already lists the ranked
  alternates. Body size stays at Dawn's default scale: about 70% of the funnel is mobile and small type
  is a conversion tax.

**20. [P4] Create the three collections** [10 min] [$0]
- **Where:** **Products > Collections**.
- **Do:** `Shop All`, `Pet Comfort`, `Home Comfort` exactly as specified in `store/BUILD-SPEC.md`
  section 2, with the manual sort and the fountain pinned first.
- **Expect:** three collections, two of them empty for now.
- **If wrong:** `Home Comfort` being empty at launch is intended. It is the landing spot for bench rank
  2 when it is promoted (`store/BUILD-SPEC.md` section 9), and building it now means promotion later
  costs zero new decisions.

**21. [P4] Create the hero product with three Bundle variants** [25 min] [$0]
- **Where:** **Products > Add product**.
- **Do:** title, handle, SKUs, the single `Bundle` option and its three values, all three prices and
  both compare-at prices, exactly from `store/BUILD-SPEC.md` section 5a. Inventory tracking off,
  continue selling when out of stock.
- **Expect:** one product, three variants, Dawn's variant picker rendering the tier table in the buy box.
- **If wrong:** the prices in 5a are worked arithmetic with the margin table attached, computed against
  worst-case landed cost. Do not round them for looks. If you change one, the contribution table in 5a
  is wrong and `ops/paid-readiness-dossier.md` section 5's CPA math is wrong with it.

**22. [P4] Build the product page sections in the specified order** [30 min] [$0]
- **Where:** **Online Store > Themes > Customize**, the product template.
- **Do:** sections 1 through 10 in `store/BUILD-SPEC.md` section 5, in that order, with the words from
  `store/copy/product-cat-water-fountain.md`.
- **Expect:** the quantity-break table **above the fold**, inside the buy box, not below a scroll.
- **If wrong:** the tier table's position is the whole mechanic. `docs/LEARNINGS.md`, the quantity-break
  entry, records that native Shopify quantity discounts surface only at checkout, which is the
  documented reason they get ignored. A tier table below the fold is the same failure with extra steps.

**23. [P4] Add the landed-cost, ETA and returns lines to the buy box** [10 min] [$0]
- **Where:** the product template, directly under the price and under the buttons.
- **Do:** the shipping line, the estimated delivery line and the return-policy line specified in
  `store/BUILD-SPEC.md` sections 5c and 6 items 4 and 5, using the numbers fixed in step 3. Real text on
  the page, not a tooltip, not footer-only.
- **Expect:** a visitor can compute the full total before ever reaching a cart.
- **If wrong:** this is the highest-value CVR item in the build and it is free. `docs/LEARNINGS.md`, the
  Baymard abandonment entry: extra costs at checkout are the largest fixable abandonment cause at 40%,
  43% of sites omit shipping info from the product page and 44% omit the return policy, and 64% of
  people are more likely to complete when shown an estimated delivery date. Do not publish a date
  faster than step 3's window supports.

**24. [P4] Publish the five policy pages** [20 min] [$0]
- **Where:** **Online Store > Pages**.
- **Do:** paste `store/copy/policy-refund-returns.md`, `policy-shipping.md`, `policy-privacy.md`,
  `policy-terms.md` and `policy-contact.md`. Resolve every `[PLACEHOLDER]` first.
- **Expect:** five live pages, each with a real contact address on the new domain.
- **If wrong:** **these are processor warm-up, not polish** (`store/BUILD-SPEC.md` section 8,
  `docs/WARM-UP.md` Track D). Their absence is a payout-hold risk factor. Publishing one with a
  `[PLACEHOLDER]` still in the body is worse than not publishing it.

**25. [P4] Build navigation and footer** [10 min] [$0]
- **Where:** **Online Store > Navigation**, then the footer sections in Customize.
- **Do:** the top nav and the four footer columns exactly as in `store/BUILD-SPEC.md` section 2.
- **Expect:** all five policy pages reachable from the footer, plus the TikTok link.

**26. [P4] Add the footer newsletter block** [5 min] [$0]
- **Where:** **Online Store > Themes > Customize > Footer**, add the email signup block.
- **Do:** add it. This is the subscribe surface the welcome flow needs.
- **Expect:** an email capture field in the footer.
- **If wrong:** **do not skip this.** `store/copy/email-flow-welcome.md` found that
  `store/BUILD-SPEC.md` never specced a subscribe surface, so without this block the welcome flow built
  in Phase 7 has no entry point and will simply never trigger. That defect was found on paper and this
  step is the fix.

**27. [P4] Set shipping rates** [10 min] [$0]
- **Where:** **Settings > Shipping and delivery**, then the shipping profile, then the zone. [VERIFY IN UI]
- **Do:** create the flat rate and the price-conditioned free rate using the exact figures in
  `store/BUILD-SPEC.md` sections 5b and 5c. Shopify's own documentation describes adding a condition
  based on order price with a minimum value, which is the mechanic these numbers assume. Domestic only:
  make these the only two options at launch.
- **Expect:** two rates at checkout, and the free one appearing above the threshold.
- **If wrong:** do not add a carrier-calculated rate alongside them. A calculated rate makes checkout
  charge a number the product page did not promise, which recreates the exact surprise-cost abandonment
  the buy-box line in step 23 exists to prevent. Both figures are flagged as placeholders in
  `store/BUILD-SPEC.md` section 12 and get recalibrated against the real order histogram, not the mean,
  once orders exist.

**28. [P4] Checkout: guest checkout on, form fields trimmed** [10 min] [$0]
- **Where:** **Settings > Checkout**. [VERIFY IN UI]
- **Do:** customer accounts optional or not required, never required. Trim the form toward roughly 8
  fields per `store/BUILD-SPEC.md` section 6 items 2 and 3. Phone off unless a carrier needs it.
- **Expect:** a guest can complete checkout without creating an account.
- **If wrong:** forced account creation is an 18% abandonment cause and the average checkout runs 5.1
  steps and 11.3 fields against an ideal of about 8 (`docs/LEARNINGS.md`, the Baymard entry).

**29. [P4] Checkout style: give the payment section its own visual encapsulation** [10 min] [$0] [VERIFY IN UI]
- **Where:** **Settings > Checkout**, then in the **Configurations** section click **Edit** to open the
  checkout and accounts editor.
- **Do:** use the available style controls to make the payment area read as its own distinct block.
  Shopify's documentation lists header colors, main content background, **form field colors including
  input and error states**, order summary background, typography and button and accent colors as
  available to all plans, with the Checkout Branding API restricted to Plus.
- **Expect:** the card fields visually separated from the contact and shipping blocks.
- **If wrong:** **`store/BUILD-SPEC.md` section 6 item 6 gives this as "Settings > Checkout > Branding >
  Design > Sections", and that path did not match current documentation when this runbook was written.**
  The current entry point is the checkout and accounts editor reached from the Configurations section.
  More importantly, **Shopify's style documentation does not list per-section borders as a customisable
  element on any tier**, so the exact encapsulation the build spec describes may not be achievable on
  Basic. Get as close as the editor allows, log what was actually possible, and correct
  `store/BUILD-SPEC.md` section 6 item 6 in the same session. **Do not substitute a trust seal.** A
  homemade seal outperforming real ones is a documented fact about perception, not a licence to
  fabricate a certification, and the build spec, the learnings file and `compliance-guard` all say the
  same thing.

**30. [P4] Publish the About and Contact pages** [SAFE STOP] [10 min] [$0]
- **Where:** **Online Store > Pages**.
- **Do:** About names the TikTok handle explicitly (`store/BUILD-SPEC.md` section 2). Contact is
  `store/copy/policy-contact.md` with the real domain email.
- **Expect:** a visitor arriving from a video recognises they are in the right place.
- **This is a safe stop.** The store is built and still behind the password.

---

# Phase 5: apps and fulfilment routing

**65 minutes. $0.00 in subscriptions, plus the fulfilment float. Running out-of-pocket unchanged.**

The app list is closed. `store/BUILD-SPEC.md` section 4 names five apps, each with a stated $0
per-order cost, and names three categories deliberately not installed. **No app enters the store without
a stated per-order cost and the specific metric it must move**, because operators at an $85 AOV measured
$4 to $5 per order of amortized app fees with half of it forgotten (`docs/LEARNINGS.md`, the net-margin
entry).

---

**31. [P5] Install DSers and connect the supplier listing** [20 min] [$0]
- **Where:** Shopify App Store, then DSers, then connect the store.
- **Do:** install on its free plan. Map the product to the listing chosen in `ops/sourcing-dossier.md`,
  "Recommended pick, Product 1".
- **Expect:** the Shopify product mapped to a real supplier listing.
- **If wrong:** `ops/sourcing-dossier.md` open items 1 and 2 are still open: item-level AliExpress pages
  could not be fetched from outside, and no US-warehouse SKU could be confirmed. **Inside the supplier
  account, re-check the live price and search for a US-warehouse SKU.** A confirmed US-warehouse SKU
  changes the transit window to 3 to 8 business days and forces the file cascade described in step 3.
  Also do the five-minute check nobody has done: what imagery and video the listing actually carries
  (`tracker/LEDGER.md`, 2026-08-12 part 3, "Also flagged, not yet done"). With no sample, supplier media
  is a real content input.

**32. [P5] Set the DSers order-quantity multipliers to 2x and 3x** [10 min] [$0]
- **Where:** the DSers mapping screen for this product.
- **Do:** set the `2 Fountains` variant to order **2** units of the supplier listing and `3 Fountains`
  to order **3**.
- **Expect:** three variants, three different supplier quantities.
- **If wrong:** **`store/BUILD-SPEC.md` section 5a calls this the single most important build-time check
  in the whole spec, and it is right.** The three tiers are one product with three variants, not three
  SKUs, so without the multiplier a customer who paid for three units receives one. That is a
  chargeback and a dispute, not a fulfilment error, and chargebacks are the ratio that decides whether
  the processor holds your money (`docs/WARM-UP.md` Track D, `docs/LEARNINGS.md`, the reserves entry:
  Mastercard ECM at 100 to 299 chargebacks and a 1.50% ratio is the threshold that could actually catch
  a store this size). **Verify by placing the test order in Phase 8 on a bundle variant, not on the
  single unit.**

**33. [P5] Fund the supplier payment method** [IRREVERSIBLE] [10 min] [$0 from the store budget]
- **Where:** the supplier account's payment settings.
- **Do:** attach a payment method. This is the **fulfilment float**, $30 to $50 per
  `docs/BUDGET-RULES.md`, and it is accounted separately from the store standup spend.
- **Expect:** a funded method able to pay for an order the day it arrives.
- **If wrong:** the structural trap of this business is that you collect at checkout but the processor
  settles on a lag, with a possible reserve, while the supplier wants paying at dispatch
  (`docs/PLAYBOOK.md` section 1). An unfunded supplier account means the first order cannot ship. Do not
  spend the float to hit the $150 paid-spend trigger faster: `ops/paid-readiness-dossier.md` section 1
  makes float integrity an explicit condition of that trigger.

**34. [P5] Install Judge.me on the Forever Free plan** [10 min] [$0]
- **Where:** Shopify App Store.
- **Do:** install, place the widget and the star badge on the product page per
  `store/BUILD-SPEC.md` section 5 item 6, turn on review-request emails.
- **Expect:** an empty review widget. Empty is correct.
- **If wrong:** **write no reviews, seed no ratings, import nothing from the supplier's platform.** The
  supplier listing's stars belong to the supplier's platform. `docs/LEARNINGS.md`, the reviews entry,
  makes getting to **five genuine reviews** a launch task with a deadline, because that is where the
  documented uplift curve is steepest, and separately records that purchase likelihood **peaks at 4.0
  to 4.7 stars and declines toward 5.0**. So there is no upside to faking it even before the compliance
  answer, which is a hard no.

**35. [P5] Install the Facebook and Instagram app and turn on data sharing** [IRREVERSIBLE] [10 min] [$0]
- **Where:** Shopify App Store, then **Sales channels > Facebook & Instagram > Settings > Share data
  settings**. [VERIFY IN UI]
- **Do:** OAuth-connect the Meta Business account, then in the **Customer data-sharing** section enable
  the toggle and select the data-sharing level. Shopify's documentation describes Standard, Enhanced and
  Maximum, with Enhanced and above using the Conversions API alongside the browser pixel. Select the
  pixel and confirm.
- **Expect:** a pixel connected and data sharing on.
- **If wrong:** full install and verification detail is in `ops/pixel-and-tag-spec.md`, which this step
  intentionally does not duplicate. Do not hand-paste pixel code into `theme.liquid`.

**36. [P5] Install the TikTok app** [IRREVERSIBLE] [5 min] [$0]
- **Where:** Shopify App Store, then OAuth-connect the TikTok Business account.
- **Do:** connect, and let it install the TikTok pixel and Events API.
- **Expect:** a TikTok pixel listed among the store's app pixels.

**37. [P5] Install the Google and YouTube app** [IRREVERSIBLE] [SAFE STOP] [10 min] [$0]
- **Where:** Shopify App Store, then OAuth-connect Google.
- **Do:** connect the Google account, which installs the Google tag and creates and syncs the Merchant
  Center product feed. Feed attributes are specified in `ops/paid-readiness-dossier.md` section 3.1.
- **Expect:** the Google tag present and a feed syncing to Merchant Center.
- **If wrong:** **there is a live date on this one.** Google's documentation states that non-Plus
  Shopify merchants have until **26 August 2026** to migrate Google tagging into the Google and YouTube
  app before upgrading the thank-you and order-status pages, and that unmigrated stores face
  limitations that affect reach and campaign performance. **Today is 2026-08-12, which is 14 days out.**
  A brand new store installing the app now has no legacy tagging to migrate, so the expected answer is
  that this is already the correct path, but **confirm in the app that no migration warning is shown**
  rather than assuming, and log what it says.
- **This is a safe stop.**

---

# Phase 6: pixel and tag verification (Track B)

**40 minutes. $0.00. Running out-of-pocket unchanged.**

---

**38 to 41. [P6] Verify every event, per `ops/pixel-and-tag-spec.md`** [40 min] [$0]
- **Where:** the store's own pages, plus Meta Events Manager, Google Tag Assistant and TikTok Events
  Manager.
- **Do:** work through `ops/pixel-and-tag-spec.md` section by section. It carries the event-name
  mapping, the per-platform verification procedure, the Track B 200 PageView / 20 AddToCart / 1 Purchase
  pre-spend target, how to read accumulated counts, and an honest list of what cannot be checked until
  real traffic exists. This runbook deliberately holds no second copy of any of it.
- **Expect:** three pixels present in **Settings > Customer events**, and page view, product view and
  add-to-cart confirmed firing on each platform's own diagnostic. Checkout and purchase events wait for
  Phase 8.
- **If wrong:** **an installed-but-not-firing pixel accumulates nothing and that failure hides for a
  week** (`docs/WARM-UP.md` Track B). This is the entire reason the pixel goes in on day one at $0
  spend: every organic visit from `@dailypawfinds` is free pixel history, and a pixel with no conversion
  history costs a reported 20 to 40% more during learning.

---

# Phase 7: the two email flows

**45 minutes. $0.00. Running out-of-pocket unchanged.**

Two flows and nothing else. Abandoned checkout plus welcome are **76% of all automation-generated
orders** (`docs/LEARNINGS.md`, the owned-channel entry). Shopify Email, not Klaviyo, which bills on
active profiles and auto-upgrades at cycle start, a live risk to the cap.

---

**42. [P7] Confirm the CAN-SPAM prerequisites before building anything** [5 min] [$0]
- **Where:** **Settings > Store details**.
- **Do:** confirm the real business name and postal address from step 8 are there.
- **Expect:** both present.
- **If wrong:** **stop.** `store/copy/email-flow-welcome.md` states the rule directly: if Store details
  has no real address, this flow may not be turned on. Shopify Email pulls the required postal address
  from that field.

**43. [P7] Build the welcome automation** [15 min] [$0] [VERIFY IN UI]
- **Where:** **Marketing > Automations**, then **View templates**. Shopify documentation also shows
  **Apps > Messaging > Automations** as an entry point, and the Shopify Email feature set now appears
  under the **Shopify Messaging** name in current help pages. Both routes reach the same automations.
- **Do:** select the welcome-new-subscriber template. Paste emails 1 and 2 and set the timings from
  `store/copy/email-flow-welcome.md`. **Set the exit condition on email 2 so nobody who has ordered
  receives it.**
- **Expect:** a two-email automation, built, not yet on.
- **If wrong:** the exit condition is not optional. The trap is documented in the same file: a customer
  who ticks the marketing box at checkout subscribes and buys in the same minute, so a naive automation
  greets a paying customer with an introduction to the product they just bought. If the admin does not
  expose a "has no orders" condition, email 1's wording already tolerates it and email 2 must carry the
  exit regardless.

**44. [P7] Build the abandoned-checkout automation** [15 min] [$0] [VERIFY IN UI]
- **Where:** the same automations area, recover-abandoned-checkout template.
- **Do:** three emails at 1 hour, 24 hours and 72 hours, text from
  `store/copy/email-flow-abandoned-checkout.md`. No discount code in any of them, for the three reasons
  that file gives.
- **Expect:** a three-step automation, built, not yet on.
- **If wrong:** if the native automation does not support a three-step delay branch, **build email 1 and
  accept the single touch**. Do not install a paid app to buy steps 2 and 3. That instruction is in the
  flow file and it follows the same app-discipline rule as step 34.

**45. [P7] Decide the switch-on date, and do not decide it alone** [SAFE STOP] [10 min] [$0]
- **Where:** a note in `tracker/LEDGER.md`.
- **Do:** `store/copy/email-flow-welcome.md` explicitly hands this call to `challenge-lead` and
  `compliance-guard`: the flows go on from Day 1, or after the domain has 2 to 3 weeks of clean
  sending. The tension is real. `docs/MANDATE.md` says flows are on from the first visitor, and
  `docs/WARM-UP.md` Track C says transactional mail only in month one on a domain with no reputation.
  Record the decision and the reasoning either way.
- **Expect:** a dated decision, not a default.
- **This is a safe stop.**

**Also owed and not yet written:** `store/copy/email-transactional.md`. Both flow files cite it in their
consistency notes as a file the shipping window must match, and it does not exist in `store/copy/` as of
this writing. Shopify's built-in order and shipping notification templates will send without it, so this
does not block launch, but the transactional templates are the highest-volume mail this store sends and
nobody has reviewed their wording against the 7 to 20 business day window. Flagged, not fixed here.

---

# Phase 8: the end-to-end test order

**40 minutes. $0.00. Running out-of-pocket unchanged.**

`docs/WARM-UP.md` Track D asks for exactly this: one order end to end through test mode, free, no real
card, no risk signal, to prove checkout, the confirmation email and fulfilment routing before a real
customer is the one finding out.

---

**46. [P8] Enable Shopify Payments test mode and place a test order** [15 min] [$0]
- **Where:** **Settings > Payments**, then in the Shopify Payments section click **Manage**, then the
  **Test mode** section, then enable and save. [VERIFY IN UI]
- **Do:** Shopify's documentation states test mode is available only after Shopify Payments setup is
  complete and only on a paid plan, both of which are true by now. Place a test order **on a bundle
  variant**, using the test card details Shopify's help page specifies and an email address ending in
  `@example.com`, which its documentation names as safe for this purpose.
- **Expect:** a completed checkout and an order in the admin.
- **If wrong:** **while any payment provider is in test mode, customers cannot place live orders.** That
  is the trap in this phase, and step 50 exists because of it.

**47. [P8] Read the confirmation email's raw headers** [10 min] [$0]
- **Where:** a Gmail address you control, "Show original".
- **Do:** the check described in `ops/dns-records.md`, "Check a real message passes all three". Confirm
  SPF, DKIM and DMARC all pass.
- **Expect:** three passes.
- **If wrong:** **DMARC requires alignment, not merely SPF passing.** `ops/dns-records.md` explains that
  SPF can pass while DMARC fails because the From domain does not match the authenticated domain, and
  that this case is invisible without reading the header. This is the only honest test of Phase 2, and
  a first order confirmation landing in spam becomes a support ticket and then a dispute. Record the
  result in `tracker/LEDGER.md` Track C as dashboard-confirmed, with the date.

**48. [P8] Confirm the order routed to the supplier at the right quantity** [10 min] [$0]
- **Where:** DSers.
- **Do:** confirm the test order appears with **the multiplied quantity** from step 32. Do not place the
  supplier order.
- **Expect:** a 2-pack order showing 2 units, or a 3-pack showing 3.
- **If wrong:** go back to step 32. This is the check that catches the failure described there before a
  customer does.

**49. [P8] Check the pixel side of the test order** [5 min] [$0]
- **Where:** `ops/pixel-and-tag-spec.md`, the checkout and purchase verification section.
- **Do:** confirm `checkout_started` and `checkout_completed` mapped through to each platform.
- **Expect:** checkout and purchase events visible in each platform's diagnostic.
- **If wrong:** **do not count a test order toward the Track B pre-spend target.** That target is 200
  PageView, 20 AddToCart and 1 Purchase **accumulated organically** (`docs/WARM-UP.md` Track B,
  `ops/paid-readiness-dossier.md` section 8). A self-placed test purchase is not organic evidence and
  counting it would be exactly the false-data failure `docs/PLAYBOOK.md` bans.

**50. [P8] Turn test mode OFF, then confirm it is off** [SAFE STOP] [10 min] [$0]
- **Where:** the same test mode screen.
- **Do:** disable test mode. Save. Reload the page and read it again. Cancel or archive the test order
  so it does not pollute the order history you will be reading for real signal.
- **Expect:** test mode showing disabled on a fresh page load.
- **If wrong:** **this is the highest-consequence single toggle in the runbook.** Leaving it on means a
  live store that silently cannot take a live card, and the symptom is indistinguishable from having no
  demand. Read it twice.
- **This is a safe stop.**

---

# Phase 9: Track E, both ad accounts, both campaigns PAUSED

**70 minutes. $0.00. Running out-of-pocket unchanged.**

**Budget gates a channel's LAUNCH, never its PREPARATION** (`docs/MANDATE.md`). Everything here is built
and left paused so that the hour the $150 trigger clears, launching is a button press rather than a
setup day. `tracker/LEDGER.md` records Track E as not started and one day late.

---

**51 to 55. [P9] Build both accounts and both campaigns, exactly as specified** [70 min] [$0]
- **Where:** Meta Business Manager, Google Ads, Google Merchant Center.
- **Do:** follow `ops/paid-readiness-dossier.md`: section 2 for the Meta campaign structure and the four
  genuinely different launch concepts, section 3 for the Merchant Center feed attributes and the
  Standard Shopping campaign, section 4 for TikTok's floors and why it sequences third. Create both
  accounts at $0 spend. Build both campaigns. **Leave both PAUSED.**
- **Expect:** two accounts, one Meta campaign paused, one Google campaign paused, a feed submitted, and
  spend of exactly $0.00 on both platforms.
- **If wrong:** two open items travel with this phase and both are already flagged in the dossier's own
  "What could not be verified" section: the unverified single-source claim that Shopping campaigns
  require Local Inventory Ads from **31 August 2026**, which must be checked in the Merchant Center UI
  rather than assumed either way, and the approximate conversion-count gate for switching Google's
  bidding strategy. Also expect feed **disapprovals** rather than instant approval, and check for them:
  the dossier's pre-flight asks for a feed approved, not merely submitted.
- **The first ad-account dollar is not in this runbook.** It is gated on $150 collected revenue with the
  float intact (`docs/BUDGET-RULES.md`), and the moment it is spent it starts the 72-hour edit freeze
  and the new-account learning clock. `ops/paid-readiness-dossier.md` owns that entire decision.

---

# Phase 10: publish, and the store-live pre-flight

**30 minutes. $0.00. Running out-of-pocket $12.00 to $16.00 of $100.00.**

---

**56. [P10] Final read-through against the spec, then remove the password** [STARTS A CLOCK] [30 min] [$0]
- **Where:** the live storefront on a phone, not only on a desktop.
- **Do:** work the checklist below. Then **Online Store > Preferences**, remove the store password.
  [VERIFY IN UI]
- **Expect:** a store a stranger can buy from.
- **If wrong:** the read-through is `store/BUILD-SPEC.md` section 11 step 14, and it exists specifically
  to catch an ETA string that does not match the real supplier before the first piece of content links
  to it. Read the page on a phone: about 70% of the funnel is mobile and the build spec asks for mobile
  conversion to be measured separately from day one.

---

## The store-live pre-flight

Tick every line before removing the password. **This is the store-live gate. It is not the paid-launch
gate**, and it deliberately does not restate it: `ops/paid-readiness-dossier.md` section 10 owns the
paid pre-flight, it fires at $150 collected revenue, and where the two touch, the dossier's wording
wins.

**Money and identity**
- [ ] Out-of-pocket spent is recorded in `tracker/LEDGER.md` with the **real** plan and domain figures,
      not the docs' estimates, against the $100.00 cap.
- [ ] Fulfilment float is funded and accounted separately from store standup spend.
- [ ] Real business name and real postal address are in Settings > Store details. Nothing invented.

**Track C, the domain**
- [ ] SPF exists and there is exactly **one** SPF record.
- [ ] DMARC exists at `p=none` with a `rua` address someone can actually read.
- [ ] DKIM records from Settings > Notifications are published, all of them.
- [ ] A real message's raw headers show SPF, DKIM and DMARC all passing, including DMARC **alignment**.
- [ ] Result recorded in `tracker/LEDGER.md` Track C as dashboard-confirmed, with the date.

**Track D, the processor and the store**
- [ ] Shopify Payments is active with **zero pending or requested documents**.
- [ ] Payout schedule and any reserve notice are recorded in the ledger.
- [ ] **Test mode is OFF**, confirmed on a fresh page load.
- [ ] Test order was placed on a bundle variant and DSers showed the multiplied quantity.
- [ ] Five policy pages are live, all `[PLACEHOLDER]` values resolved, contact email on the real domain.
- [ ] Shipping policy, product page shipping line, both email flows and the transit window all state the
      **same** window. Step 3's number, everywhere.

**The store itself**
- [ ] Quantity-break table renders in the buy box, above the fold, on a phone.
- [ ] Full landed cost, estimated delivery date and return policy are all visible on the product page as
      real text.
- [ ] Guest checkout is on and checkout form fields are trimmed.
- [ ] Free-shipping threshold and flat rate are the only domestic options, matching the product page.
- [ ] Footer newsletter block exists, so the welcome flow has an entry point.
- [ ] No fabricated review, star rating, testimonial or trust seal anywhere.
- [ ] **No first-hand product claim anywhere.** No sample was ordered. Manufacturer specifications are
      attributed as theirs.
- [ ] No health, medical or veterinary claim on the fountain
      (`compliance/bench-review-2026-08-11.md`, rank 1).

**Track B and Track E, measurement**
- [ ] Three pixels present in Settings > Customer events, verified per `ops/pixel-and-tag-spec.md`, not
      assumed.
- [ ] Page view, product view and add to cart confirmed firing on each platform's own diagnostic.
- [ ] Checkout and purchase events confirmed via the test order, and **not** counted toward the Track B
      organic 200 / 20 / 1 target.
- [ ] Both ad accounts exist at $0.00 spend, both campaigns built and **PAUSED**, Merchant Center feed
      checked for **disapprovals**.
- [ ] Google and YouTube app shows no outstanding tag-migration warning against the 26 August 2026 date.

**Handover**
- [ ] `tracker/LEDGER.md` standing tallies, Track B/C/D/E blocks and money log all updated with what
      actually happened, marked estimated or dashboard-confirmed.
- [ ] `ops/cs-templates.md` variables filled in, so the first ticket is a paste job.
- [ ] Any step where this runbook's admin path did not match the UI is **corrected in this file** in the
      same session.

---

## Placeholder register

Every one of these is a real open item. **Do not publish a page carrying one, and do not invent a value
to close one.**

| Placeholder | Lives in | Resolved by |
|---|---|---|
| Business name | all 5 policy files, both email flows | Step 1 |
| Business postal address | policy files, both email flows, Settings > Store details | Step 1 |
| Contact email on the real domain | all 5 policy files, both email flows, product page | Steps 6 and 12 |
| Store domain | both email flows, product links | Step 6 |
| DMARC `rua` address | `ops/dns-records.md` Record 2 | Step 11 |
| Processing time, X business days | `policy-shipping.md`, product page, both email flows | Step 3 |
| Transit window, Y to Z business days | same files | Step 3, from `ops/sourcing-dossier.md` |
| Tracking-movement delay | `policy-shipping.md` | Step 3 |
| International shipping, yes or no | `policy-shipping.md` | Step 27. US-only is the default the rest of the build assumes |
| Fountain capacity | `product-cat-water-fountain.md`, welcome email | Step 31, from the supplier listing, attributed |
| BPA-free material claim | `product-cat-water-fountain.md` | **Cut it** unless the supplier spec sheet confirms it |
| Welcome discount code | `email-flow-welcome.md` | Not a copy decision. `offer-economist` only, with the margin math at each tier |
| Response-time promise | `policy-contact.md`, `ops/cs-templates.md` | Step 24 |

---

## What could not be verified, stated plainly

- **The Shopify Basic promotional price.** `docs/SETUP-GUIDE.md` and `store/BUILD-SPEC.md` both carry
  "$1/mo for 3 months". This runbook did not verify that promotion is still live. Read the real number
  at checkout and log that one.
- **The checkout style controls needed for step 29.** `store/BUILD-SPEC.md` section 6 item 6 specifies a
  bordered payment section reached via "Settings > Checkout > Branding > Design > Sections". The current
  documented entry point is the checkout and accounts editor from Settings > Checkout > Configurations >
  Edit, and Shopify's published list of style options **does not include per-section borders on any
  tier**. Whether the intended encapsulation is achievable on Basic is unresolved and must be settled in
  the UI.
- **Whether Shopify Email automations still appear under that name.** Current help documentation
  presents this functionality under **Shopify Messaging**, reachable from both Marketing > Automations
  and Apps > Messaging > Automations. Template names are also renamed periodically, which
  `store/copy/email-flow-welcome.md` already warns about. Confirm at build time.
- **Whether the native abandoned-checkout automation supports a three-step delay branch** on Basic. If
  it does not, `store/copy/email-flow-abandoned-checkout.md` already rules: build email 1 and accept the
  single touch rather than paying for an app.
- **Whether a test-mode order registers as a valid conversion** in each ad platform's reporting, as
  opposed to merely appearing in a live diagnostic. Treated conservatively in step 49: the test order
  proves the event path, and is not counted toward the Track B organic target either way.
- **The 26 August 2026 Google tag migration date** is documented by Google, but its practical effect on
  a store created after the announcement was not verified. Expected to be a non-event for a new store.
  Confirm in the app.
- **The 31 August 2026 Local Inventory Ads claim** for Shopping campaigns remains a single unverified
  SEO-blog source, exactly as `ops/paid-readiness-dossier.md` section 3.2 flags it. Unchanged here.
- **Every admin path marked [VERIFY IN UI].** Shopify moves these screens between releases. Where the
  path below did not match a current Shopify help page at the time of writing, this file says so rather
  than stating it as fact. If the UI disagrees, the UI is right and this file is wrong: fix it in the
  same session.

---

*Sources consulted while writing this file, for the paths that were checked rather than assumed:
Shopify help pages for customer events and pixels, Facebook and Instagram data sharing, marketing
automations under Shopify Messaging, checkout configurations and checkout style, shipping zones and
rates, sender email domain authentication, Shopify Payments test mode and test orders; Google Merchant
Center help for the Google and YouTube app tag migration deadline. Paths not confirmed against a live
help page carry a [VERIFY IN UI] flag.*
