# Pixel and Tag Spec: the measurement layer for Track B and Track E

Written 2026-08-12 by `store-architect`. **Status: nothing here is installed.** `tracker/LEDGER.md`
Track B reads "pixel/CAPI installed NO, all four events firing: unverified, organic events accumulated:
0, spend: $0". This file describes the target and how to prove you reached it. It is not a status report.

**What this file owns:** how the Meta pixel, the TikTok pixel and the Google tag get onto a Shopify
store, exactly which events must fire and under exactly which names, **how to verify each one is
actually firing rather than assuming it is**, the Track B pre-spend target and how to read accumulated
counts against it, and an honest account of what cannot be checked until real traffic exists.

**What it does not own, and deliberately does not restate:** the install ordering and its place in the
standup sequence (`store/LAUNCH-RUNBOOK.md` Phases 5 and 6), the campaign structures these events
optimise (`ops/paid-readiness-dossier.md` sections 2 to 4), why warm-up starts at $0 spend
(`docs/WARM-UP.md` Tracks B and E), and the app-discipline rule that keeps this store's app list closed
(`store/BUILD-SPEC.md` section 4).

No em dashes, by house rule.

**The one sentence that justifies the whole file:** an installed-but-not-firing pixel accumulates
nothing, and that failure hides for a week (`docs/WARM-UP.md` Track B). Every organic visit from
`@dailypawfinds` between now and the first paid dollar is free pixel history, and a pixel with no
conversion history costs a reported 20 to 40% more during learning. The cost of a silent install failure
is therefore not "we lost some data", it is "the entire free warm-up window produced nothing and we find
out on the day we start spending".

---

## 1. How events actually reach the platforms

Three layers, and confusing them is where most of the debugging time goes.

**Layer 1: Shopify customer events.** Shopify emits its own standard events from the storefront and
checkout. These are the source. They are managed in **Settings > Customer events**, and pixels run in a
sandboxed environment rather than as free-floating page scripts. Shopify's published list of standard
customer events includes:

`page_viewed`, `collection_viewed`, `product_viewed`, `search_submitted`, `product_added_to_cart`,
`product_removed_from_cart`, `cart_viewed`, `checkout_started`, `checkout_contact_info_submitted`,
`checkout_address_info_submitted`, `checkout_shipping_info_submitted`, `payment_info_submitted`,
`checkout_completed`, `alert_displayed`, `ui_extension_errored`.

**Layer 2: the pixel.** Two ways in. **App pixels**, installed by a marketing or data app, which is what
we use for all three platforms. **Custom pixels**, hand-added in the pixel manager, which we do not use.

**Layer 3: the platform's own event vocabulary.** Meta, TikTok and Google each expect their own event
names. The app translates layer 1 into layer 3 for you. **You verify at layer 3, not layer 1.** A green
tick in Shopify proves the store emitted something; it does not prove Meta received a `Purchase`.

**We install all three as app pixels and hand-paste nothing.** Reasons, in order: checkout runs
sandboxed so pasted checkout scripts do not behave the way people expect; the Conversions API side comes
free with the Meta app and cannot be replicated by a browser snippet; and Google's own documentation
states that non-Plus Shopify merchants have until **26 August 2026** to migrate legacy tagging, such as
order-status-page additional scripts or custom pixels, into the Google and YouTube app before the
post-checkout pages are upgraded, with unmigrated stores facing limitations described as severely
affecting reach and campaign performance. A hand-pasted tag in 2026 is a tag with an expiry date on it.

---

## 2. Install paths

Ordering and elapsed time live in `store/LAUNCH-RUNBOOK.md` Phase 5. Only the mechanics are here.
Everything below is $0 and on a free official app, per `store/BUILD-SPEC.md` section 4.

### 2.1 Meta pixel plus Conversions API

- **App:** Facebook and Instagram by Meta, the official Shopify sales channel app.
- **Path:** install from the Shopify App Store, OAuth-connect the Meta Business account, then
  **Sales channels > Facebook & Instagram > Settings > Share data settings**. In the **Customer
  data-sharing** section, enable the data-sharing toggle, choose the sharing level, select the pixel and
  confirm. *(Path taken from Shopify's own help documentation. Verify in the UI; Shopify renames these
  screens.)*
- **Sharing level:** Shopify documents three, **Standard**, **Enhanced** and **Maximum**. Its
  documentation states that Enhanced uses the Conversions API alongside the browser pixel, with the
  purchase event sent server to server, and that Maximum adds Meta's latest advertising technology on
  top. **Choose Enhanced or Maximum.** Standard is browser-only, and browser-only is exactly the setup
  that ad blockers and tracking prevention degrade.
- **If no pixel exists yet:** one can be created inside the app, or in Meta Events Manager first. Either
  is fine. Creating it in Events Manager first is marginally cleaner because the account structure is
  then already correct for Track E.

### 2.2 TikTok pixel plus Events API

- **App:** TikTok, the official Shopify sales channel app.
- **Path:** install, OAuth-connect the TikTok Business account, let it create and attach the pixel.
- **Note:** the TikTok account is the only one of the three that is not cold when paid eventually
  starts. It has been organically warm since Track A Day 1 (`ops/paid-readiness-dossier.md` section 1),
  but that is account warmth, not pixel warmth. **The pixel is as cold as the other two until events
  accumulate.**

### 2.3 Google tag plus Merchant Center feed

- **App:** Google and YouTube, the official Shopify sales channel app.
- **Path:** install, OAuth-connect Google, connect or create Merchant Center and Google Ads. The app
  installs the Google tag and syncs the product feed from the product data already in Shopify.
- **Note:** this app does two jobs at once, tagging and the feed. The feed's required attributes are
  specified in `ops/paid-readiness-dossier.md` section 3.1 and are not repeated here.
- **Check for a migration warning.** See the 26 August 2026 date in section 1. A store created after
  that announcement should have nothing legacy to migrate, but read what the app says rather than
  assuming.

---

## 3. The events that must fire, and their exact names

Five events carry everything. The rest are noise at our scale.

| What the shopper did | Shopify customer event | Meta standard event | TikTok standard event | Google / GA4 event |
|---|---|---|---|---|
| Loaded any page | `page_viewed` | `PageView` | base page view, fired automatically | `page_view` |
| Opened the product page | `product_viewed` | `ViewContent` | `ViewContent` | `view_item` |
| Added to cart | `product_added_to_cart` | `AddToCart` | `AddToCart` | `add_to_cart` |
| Began checkout | `checkout_started` | `InitiateCheckout` | `InitiateCheckout` | `begin_checkout` |
| Completed the order | `checkout_completed` | `Purchase` | `CompletePayment` | `purchase`, and the Google Ads conversion action |

**Name provenance, so nobody edits these from memory.** The Shopify column is Shopify's published
standard customer event list. The TikTok column is TikTok's published standard event list, which
enumerates `AddPaymentInfo, AddToCart, AddToWishlist, ClickButton, CompletePayment, CompleteRegistration,
Contact, Download, InitiateCheckout, PlaceAnOrder, Search, SubmitForm, Subscribe, ViewContent`. Note
that TikTok's purchase event is **`CompletePayment`**, not `Purchase`, and that the base page view is
fired automatically rather than appearing in that standard list, so **confirm its label in TikTok Events
Manager rather than trusting a name from this table**. The Meta and Google columns are the long-standing
standard names for those platforms and were not re-pulled from a live help page in this session; treat
them as high confidence but check the platform's own event list if a name ever fails to match.

**Two extra events worth knowing exist but not worth optimising to at our size:** `cart_viewed` and
`payment_info_submitted`. `payment_info_submitted` is a useful diagnostic if `checkout_started` fires
and `checkout_completed` never does, because it narrows the drop-off to the payment step specifically.

**Do not create custom events.** `docs/MANDATE.md` and `ops/paid-readiness-dossier.md` section 2.1 have
the campaign optimising to Purchase, or falling back to AddToCart or Landing Page Views if the pre-spend
target is short. All three are standard events. A custom event would add a naming decision, a
verification burden and a second thing to keep in sync, and would move nothing.

---

## 4. Verification: proving each event actually fires

**The rule: an event is verified when the receiving platform says it received it, on its own screen,
with today's date.** Not when the app says "connected". Not when Shopify lists the pixel. Not when the
install completed without an error.

### 4.1 The tools, by platform

| Platform | Live-firing check | Received-by-platform check |
|---|---|---|
| Meta | **Meta Ads Data Advisor** Chrome extension. Note the rename: Meta's documentation states this is the former **Meta Pixel Helper**, and that existing installs auto-updated to Data Advisor. It shows a badge with the number of pixel events fired on the current page, and a side panel listing them. | **Events Manager > your data source > Test events**, which is the tool Meta names for verifying web and app events. |
| Google | **Tag Assistant** Chrome extension, or `tagassistant.google.com` directly. Click through the site with a debug session running and the tags and events appear as you go. | **Tag Diagnostics** in the Google tag section of Google Ads, which reports tag quality by status, and the conversion action's own tracking status column. |
| TikTok | **TikTok Pixel Helper** browser extension. | **TikTok Events Manager**, the pixel's event detail view. |
| Shopify | **Settings > Customer events** lists every app pixel attached to the store. | Not a receipt. This proves attachment only. |

### 4.2 The verification walk, about 12 minutes

Run it once with all three platform diagnostics open. **Do this on the live storefront, not on a theme
preview URL**, and do it once on desktop and once on a phone-width window, because roughly 70% of the
funnel is mobile and mobile is where tracking prevention bites hardest.

1. **Home page.** Expect `PageView` on Meta, a page view on TikTok, `page_view` on Google.
2. **Collection page** (`Shop All`). Expect the same three again. If page view fires on the home page
   but not here, the pixel is attached to one template rather than the store.
3. **Product page** (`/products/quiet-pump-cat-water-fountain`). Expect page view **plus** `ViewContent`
   on Meta and TikTok, and `view_item` on Google. **Check the payload, not just the event name:** the
   product ID and the value should match the variant you are looking at. A `ViewContent` with no value
   or a wrong ID will optimise against garbage later.
4. **Switch to the `2 Fountains` variant.** Expect the value in the payload to change to the 2-pack
   price in `store/BUILD-SPEC.md` section 5a. This is the one check specific to our build: the tiers are
   variants of one product, not separate products, so a pixel that reports a single flat price for all
   three tiers is misreporting two thirds of our intended AOV.
5. **Add to cart.** Expect `AddToCart` on Meta and TikTok, `add_to_cart` on Google.
6. **Begin checkout, stop before paying.** Expect `InitiateCheckout` and `begin_checkout`. **This is the
   step most likely to fail silently**, because checkout is a separate sandboxed surface from the
   storefront.
7. **Open each platform's received-by check** and confirm the same events arrived there, not only in the
   browser extension. Browser extension plus platform confirmation is the pair. Either alone is half a
   verification.

Record the result in `tracker/LEDGER.md` Track B as **dashboard-confirmed**, with the date and which
events were seen on which platform. "Pixel installed" is not a ledger entry. "PageView, ViewContent,
AddToCart and InitiateCheckout confirmed in Meta Test Events on 2026-xx-xx, Purchase not yet observed"
is.

### 4.3 Purchase: the event you cannot verify by browsing

`Purchase`, `CompletePayment` and `purchase` only fire on a completed order. There is no way to browse
your way to one.

**The test-mode order** (`store/LAUNCH-RUNBOOK.md` Phase 8, `docs/WARM-UP.md` Track D) is the intended
proof of the event path. Place it on a **bundle variant**, which simultaneously verifies the DSers
quantity multiplier. Watch each platform's live diagnostic while the order completes.

**Two honest caveats on it:**

1. **Whether a test-mode order registers as a valid conversion in each platform's reporting, as opposed
   to merely appearing in a live diagnostic, was not verified.** The event path can be proven; the
   accounting treatment cannot be assumed. Note what each platform actually showed.
2. **A test purchase does not count toward the Track B pre-spend target.** That target is stated as
   accumulated **organically** (`docs/WARM-UP.md` Track B, `ops/paid-readiness-dossier.md` section 8).
   Counting a self-placed order toward it would be false data, and `docs/PLAYBOOK.md`'s non-negotiables
   put "the ledger records measured reality" alongside account survival for a reason: false data scales
   losers. If a test order does land in the counts, **note the offset in the ledger and subtract it**
   when reading the target.

**Until a real customer buys, `Purchase` is verified as a path, not as a working conversion.** Say that
in the ledger rather than writing "all events confirmed".

---

## 5. The Track B pre-spend target, and how to read counts against it

**The target, unchanged, restated once for convenience: at least 200 `PageView`, 20 `AddToCart`, 1
`Purchase`, accumulated organically, before the first paid dollar.** It is **our inference, not a
platform-published number**, and `docs/WARM-UP.md` lists it explicitly under "Our inference, unvalidated,
the part that could simply be wrong". Treat it as a floor we chose, not a rule we discovered.

**Why those three numbers and not others.** They are the cheapest proxy for "the pixel has seen a funnel
work end to end at least once". The documented fact underneath is different and firmer: roughly 50
optimisation events in 7 days exits Meta's learning phase, and a pixel with no conversion history costs
more while it learns. We cannot reach 50 purchases organically before the paid gate, so 200/20/1 is a
sanity floor on the shape of the funnel, not a shortcut to exiting learning.

### 5.1 Where to read the accumulated counts

| Platform | Where | What to set |
|---|---|---|
| Meta | Events Manager, the data source's overview or event breakdown | Set the date range to the **widest available**, not the default last 7 days. The whole point is cumulative history since install. |
| Google | Google Ads conversions or the Google tag section, and GA4 if connected | Same widest-range rule. Google Ads reports **conversions**, which is not the same denominator as raw events. |
| TikTok | TikTok Events Manager, the pixel's event detail | Same widest-range rule. |

### 5.2 Reading them without fooling yourself

- **Default date ranges lie.** Every one of these dashboards defaults to a recent window. A cumulative
  target read against a 7-day default will look like a failure on week three.
- **Browser and server events can double count.** With the Conversions API on, the same purchase can
  arrive twice, once from the browser and once server to server. Meta deduplicates on an event ID
  supplied by the integration, and the official app is expected to supply it. **If purchase counts look
  exactly double, suspect deduplication before suspecting a miracle.**
- **Counts will differ across platforms and that is normal.** Different definitions, different
  deduplication, different consent handling, different bot filtering. A 10 to 30% spread between two
  platforms on the same event is unremarkable. A platform showing zero while another shows hundreds is a
  broken install.
- **Bot and preview traffic inflates page views specifically.** `PageView` is the easiest number to hit
  and the least meaningful. `AddToCart` is the honest signal in that trio, and the one to read first.

### 5.3 If the target is not met when the spend trigger clears

Do not launch the Purchase-optimised campaign. Run the cheap-objective seed plan in
`ops/paid-readiness-dossier.md` section 8 exactly as written, including its most important line: retire
the seed ad set rather than editing its optimisation event, because changing the optimisation event on a
live ad set is itself a significant edit that resets learning.

### 5.4 The launch-order tie-break needs these counts

`ops/paid-readiness-dossier.md` section 1 decides which platform unpauses first by **comparing
accumulated pixel and tag events between Meta and Google, with a tie going to Meta**. Two cautions when
making that comparison:

- **Compare like with like.** Meta's event count and Google Ads' conversion count are different things.
  Compare the same funnel step, ideally `AddToCart` against `add_to_cart`, over the same date range, and
  write down both raw numbers rather than a verdict.
- **The dossier says count, do not assume.** Check both dashboards at trigger time. It also says a tie
  goes to Meta because broad targeting needs less accumulated signal than Search and Shopping.

---

## 6. What cannot be verified until real traffic exists

Stated plainly, because the alternative is a green checklist that means nothing.

- **That the pixel fires for real visitors, not just for you.** Your own session is one browser, one
  device, one network, with no ad blocker unless you installed one. Roughly 70% of this funnel is mobile
  and in-app browsers behave differently. **The verification walk proves the install. It does not prove
  the coverage rate.**
- **The real event-to-session ratio.** Until there is traffic there is no denominator, so there is no
  way to know what share of visits produce a `PageView`, or what share of add-to-carts arrive.
- **Whether `Purchase` works as a conversion**, as opposed to as a path. See 4.3.
- **Attribution of any kind.** No paid click has happened, so no attribution model has been exercised.
- **Whether Conversions API deduplication is working.** It cannot be observed on zero purchases. First
  observable at the first two or three real orders, which is exactly when to look.
- **Current CPM or CPC in this niche on either platform.** Unresolved and already flagged in
  `ops/paid-readiness-dossier.md`, "What could not be verified": Meta Ad Library and TikTok Creative
  Center are unreachable by direct fetch from this seat (`docs/LEARNINGS.md`, 2026-08-10 anti-pattern).
  Nothing in this file depends on knowing them.
- **Mobile conversion rate separately from desktop.** `store/BUILD-SPEC.md` section 6 item 10 makes this
  a standing instruction, and it needs sessions before it means anything. Treat our own desktop rate as
  the ceiling mobile should approach.

---

## 7. Failure modes, and how each one presents

| Symptom | Most likely cause | What to do |
|---|---|---|
| App says connected, no events anywhere | The data-sharing toggle was never enabled, or no pixel was selected | Re-open Share data settings and confirm both the toggle and the selected pixel |
| Page view fires, `ViewContent` does not | Product template not emitting, or the app pixel scoped wrong | Re-check on a second product URL before touching anything |
| Everything fires except `InitiateCheckout` | Checkout is a separate sandboxed surface | Confirm the app pixel is the install method, not a hand-pasted script |
| `Purchase` never appears after a real order | Order-status and thank-you page tagging, the exact area covered by the 26 Aug 2026 migration | Check the Google and YouTube app for a migration warning; for Meta, confirm the sharing level is Enhanced or higher |
| Purchase counts look exactly doubled | Browser plus server events not deduplicating | Check the event ID is being sent by the integration; do not "fix" it by disabling CAPI |
| Counts far lower than sessions | Ad blockers, tracking prevention, consent gating | Expected to some degree. This is the argument for CAPI, not a bug to chase |
| A platform shows zero while others show hundreds | Broken install on that platform only | Re-run the section 4.2 walk against that platform alone |
| Numbers looked fine last week, now flat | An app update, a theme change, or a permission revoked | Re-run the walk. **Re-run it after any theme change**, which is why it is a repeatable procedure and not a one-time task |

**Standing rule: re-run the section 4.2 walk after any theme edit, app install or app removal.** The
verification is cheap. Discovering a week later that the warm-up window produced nothing is not.

---

## 8. Privacy and consent, briefly

The store launches US-only (`ops/paid-readiness-dossier.md` section 3.3, country of sale United States).
That limits, but does not eliminate, consent exposure. Two things stay true:

- **Shopify's customer privacy settings can gate whether marketing pixels fire for a given visitor.** If
  counts are lower than expected, check the privacy and consent configuration before concluding the
  install is broken.
- **`store/copy/policy-privacy.md` must describe what is actually collected.** Three ad platforms now
  receive behavioural data from this store. If the published privacy policy does not say so, it is
  wrong, and that is a `compliance-guard` item rather than a measurement item. Flagged here because this
  file is where the three pixels are decided.

---

## 9. What we deliberately do not install

Same discipline as `store/BUILD-SPEC.md` section 4: no app enters without a stated per-order cost and
the specific metric it must move.

- **No Google Tag Manager container.** It can run as a custom pixel, and anything it loads is subject to
  the same sandbox restrictions, so it buys flexibility we do not need and adds a layer to debug.
- **No third-party analytics or heatmap app.** Shopify's own analytics plus three platform dashboards
  already exceed what we can act on at zero traffic. Every app is also a speed cost paid on every mobile
  session.
- **No server-side tagging infrastructure.** The Conversions API arrives free with the Meta app. That is
  the whole benefit at this scale.
- **No hand-pasted pixel snippets.** See section 1.

---

## 10. What could not be verified, stated plainly

- **The Meta and Google event names in section 3** were not re-pulled from a live platform help page in
  this session. They are long-standing standard names and are high confidence, but if one fails to
  match, the platform's own event list wins over this table.
- **TikTok's automatic page-view event label.** TikTok's published standard event list does not include
  it, because it is fired automatically. Read the label off TikTok Events Manager rather than assuming
  it is called `Pageview`.
- **Whether the official Shopify apps supply an event ID for Conversions API deduplication.** Expected,
  not confirmed. First observable at the first real purchases.
- **Whether a test-mode order counts as a conversion** in each platform's reporting. See 4.3.
- **The practical effect of the 26 August 2026 Google tag migration deadline on a store created after
  the announcement.** The deadline itself is documented by Google. Its effect on a new install is
  expected to be nil and was not confirmed.
- **Every admin path here.** Shopify moves these screens between releases, and Meta renamed its own
  verification extension from Pixel Helper to Ads Data Advisor as recently as August 2026. Verify in the
  UI, and correct this file in the same session if it is wrong.

---

*Sources consulted: Shopify help and developer documentation for customer events, pixels overview,
custom pixels and the standard customer events list; Shopify help for Facebook and Instagram data
sharing; Meta developer and business documentation for the Pixel Helper and Ads Data Advisor rename and
the Test events tool; TikTok Ads Manager documentation for the standard events and parameters list;
Google Merchant Center, Google Ads and Tag Assistant documentation for the Google and YouTube app,
conversion tracking setup, the tag migration deadline and Tag Assistant troubleshooting.*
