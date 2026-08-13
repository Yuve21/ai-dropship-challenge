# Email Flow: Welcome

*Written 2026-08-12 by `copywriter` with `compliance-guard`. Paste-ready copy for the Shopify Email
welcome automation. The store does not exist yet, so nothing here has been sent, installed or published.
Every `[PLACEHOLDER: ...]` is a real open item: do not publish this flow with a placeholder still in the
text, and do not invent a business name, address or email to close one.*

*House style carried from `store/BUILD-SPEC.md`: no em dashes, no hype, plain honest voice, honest
shipping windows, no fake trust signals, no claim the product cannot back.*

---

## Why this flow exists, and what it can realistically do

`docs/LEARNINGS.md` (2026-08-10, EXTERNAL, Omnisend across 150,000 brands and 27 billion emails):

- Automations earn **$3.41 per email**. Campaigns earn **$0.155**. Automations are 2% of sends and 30%
  of email revenue.
- **Welcome is the highest-earning flow we can actually build: $6.16 per email**, 35.5% open, 3.94% CTR,
  2.11% conversion. Back-in-stock earns more and does not apply to us.
- **Abandoned cart plus welcome alone are 76% of all automation-generated orders.** That is why these two
  are built first and nothing else is.
- **Open rates are essentially identical between campaigns and automations, 30.4% vs 30.2%. The entire
  ~20x revenue gap is click and conversion.** So the design lever here is the trigger, the timing and
  what the email actually offers. It is not subject-line cleverness, and this file does not pretend
  otherwise. Every subject below is plain on purpose.

**What this flow is not.** It is not a growth channel on its own. It sends to people who found us first,
almost all of them from `@dailypawfinds`. Judge it on dollars recovered per recipient, which is
measurable, never as a share of total revenue, which is a last-click attribution artifact
(`docs/OPERATOR-PLAYBOOK.md` section 6).

---

## The dependency nobody has built yet

**A welcome flow needs a place to subscribe, and `store/BUILD-SPEC.md` does not spec one.** Two $0
options, both native:

1. **Dawn's footer newsletter block** (Online Store > Themes > Customize > Footer > add the Email signup
   block). This is the intended source for this flow.
2. **The checkout marketing-consent checkbox** (Settings > Checkout > Marketing options). Keep it
   **unchecked by default**. It is not a condition of purchase.

**The trap in option 2, flag it before turning this flow on:** a customer who ticks that box at checkout
subscribes and buys in the same minute, so a naive welcome automation greets a paying customer with an
introduction to the store and a link to the product they just bought. Fixes, in order of preference:

- Add a condition to the automation so it only continues when the customer has **no orders**, if the
  admin exposes that check at build time.
- If it does not, email 1 below is worded so it does not read wrong to someone who just ordered, and
  **email 2 must carry the "no order placed" exit condition regardless**. That exit is not optional.

---

## Trigger, timing and sequence

| Step | Trigger or delay | Sends | Exit condition |
|---|---|---|---|
| Entry | Customer subscribes to email marketing (footer form, or the checkout consent box) | n/a | Already subscribed, do not re-enter |
| Email 1 | **Immediately, no delay** | Welcome and what we sell | n/a |
| Wait | **48 hours** | n/a | **Exit the flow if an order is placed.** Nobody who bought gets email 2 |
| Email 2 | 48 hours after email 1 | The honest shipping and cost answer | Flow ends after this email |

**Build path:** Shopify admin > Marketing > Automations > Create automation > the welcome-new-subscriber
template. Shopify renames these templates periodically, so confirm the exact template name in the admin
at build time rather than trusting this line. Shopify Email is free to 10,000 sends per month
(`docs/OPERATOR-PLAYBOOK.md` section 6), and this flow's volume in month one is a rounding error against
that.

### Why two emails and not five

1. **The domain is brand new and carries our order confirmations.** `docs/WARM-UP.md` Track C: month one
   is transactional mail only, no bulk, DMARC at `p=none`, and one bad sending pattern raises disputes on
   the same domain that answers "where is my order". A triggered, one-at-a-time welcome send is not a
   bulk blast, but the conservative sequence length is the right call while the domain has no reputation.
   **`challenge-lead` and `compliance-guard` own the call on whether this flow starts on Day 1 or after
   the domain has 2-3 weeks of clean sending. This file does not decide it.**
2. **We have nothing to say in emails 3, 4 and 5 that is true.** No founder story we have not lived, no
   customer reviews (we have zero), no product experience (no sample was ordered, founder decision
   2026-08-12), no discount we are authorised to give. A three-to-five email welcome sequence at this
   stage would be padding, and padding on a cold domain costs deliverability for no revenue.
3. **The two emails each do one documented job.** Email 1 sets the offer and the delivery expectation.
   Email 2 attacks the two largest fixable causes of abandonment before the person ever reaches a cart:
   **extra costs at 40%, slow delivery at 20%** (Baymard, `docs/LEARNINGS.md` 2026-08-10).

**The third email, deliberately not written:** add one only when there is something real to put in it,
which in practice means the first five genuine reviews or a confirmed US-warehouse SKU that changes the
shipping answer. Adding it needs a stated reason and a number it has to move, the same discipline
`store/BUILD-SPEC.md` applies to apps.

### The offer question, which is not ours to answer

**There is no welcome discount in this flow, and none should be added without `offer-economist`.** A
percentage-off code changes contribution margin per order, which is the number the whole challenge is
measured on (`docs/MANDATE.md`), and no discount has been modelled. What this flow offers instead is
already built and already costed in `store/BUILD-SPEC.md` section 5: the quantity-break table and the
$54.99 free-shipping threshold.

`[PLACEHOLDER: DECISION for offer-economist. If a welcome code is ever authorised, record the code, the
value, the margin math at each bundle tier and the expiry here, then add it to email 1's offer block and
email 2's closing line. Do not paste a code into this flow without that math.]`

---

## Compliance requirements that apply to both emails

- **These are commercial emails, not transactional ones.** CAN-SPAM (15 U.S.C. 7701 et seq., 16 CFR 316)
  therefore requires all of: accurate From and Reply-To identifying the sender, a non-deceptive subject
  line, a clear opt-out, opt-out honored within **10 business days**, and a **valid physical postal
  address** in the message.
- **Shopify Email inserts the unsubscribe link and pulls the address from Settings > Store details.** So
  the requirement is met by filling that field truthfully, not by writing an address into the body.
  **If Settings > Store details has no real address, this flow may not be turned on.** See the note in
  `store/copy/policy-contact.md`, which this audit corrected on the same date.
- **No SMS.** Not in this flow, not anywhere, per `.claude/agents/copywriter.md` and
  `docs/OPERATOR-PLAYBOOK.md` section 6.
- **The product claims in this flow are the manufacturer's, and they are attributed as such.** Nobody
  here has held the fountain (founder decision 2026-08-12, `tracker/LEDGER.md`). The store standard is
  **attribution, not confession**: we state what the listing specifies and we never state it as our own
  tested finding. The first-person "mine has not arrived yet" line belongs to `@dailypawfinds`, where the
  founder is speaking as themselves, not to store email, where the sender is the business.

---

# Email 1: sends immediately

**Subject:** Welcome to Paw Finds

**Preview text:** What we sell, what it costs to get to you, and how long it actually takes.

**Body:**

> Hi,
>
> Thanks for signing up. Paw Finds is the store behind the TikTok account @dailypawfinds. We are small,
> we sell a short list of pet and home comfort things, and we would rather tell you the boring true
> version of how this works than the exciting one.
>
> **What we sell right now**
>
> One thing, properly: the Quiet Pump Cat Water Fountain, $34.99.
>
> It is a plug-in fountain that keeps water circulating instead of letting it sit still all day. A lot of
> cats are drawn to moving water and will walk past a full bowl to get to a running tap. That is a
> behavior thing, not a health claim, and we are not going to tell you a water bowl treats or prevents
> any medical condition. Nobody should.
>
> The manufacturer's listing specifies `[PLACEHOLDER: capacity, e.g. "a 2.2 litre reservoir"]`, a
> plug-in pump described as quiet, and tool-free disassembly for cleaning. Those are the manufacturer's
> specifications, quoted as theirs. When we have our own first-hand answers on noise and cleaning, we
> will publish them, including if they are unflattering.
>
> **What it costs, all of it, before you get to a checkout**
>
> - 1 fountain: $34.99
> - 2 fountains: $62.98, which is $31.49 each
> - 3 fountains: $89.22, which is $29.74 each
> - Shipping: $4.99 flat, free on orders over $54.99
>
> That is the whole cost. No handling fee appears later.
>
> **How long it takes**
>
> `[PLACEHOLDER: processing time, e.g. "1-3"]` business days to process, then **7 to 20 business days**
> in transit. It ships from our supplier's fulfillment center, not a local warehouse, which is the honest
> reason it is slower than a big-box order. If that is too slow for a gift with a date on it, we are not
> the right fit and we would rather say so now.
>
> **If something goes wrong**
>
> 30 days from delivery to return or ask for a refund. Damaged, defective or wrong item, send us a photo
> and we will replace it or refund you, your choice, and we cover return shipping when it was our error.
> A real person reads `[PLACEHOLDER: contact email on the real domain]`.
>
> **What we will send you**
>
> Order updates when you order. One more email after this one if you have not bought yet. Nothing daily,
> no countdown timers, no fake stock warnings.
>
> [See the fountain](https://[PLACEHOLDER: store domain]/products/quiet-pump-cat-water-fountain)
>
> Paw Finds

**Footer (Shopify Email inserts this, confirm it renders before turning the flow on):** unsubscribe link,
plus `[PLACEHOLDER: business name]` and `[PLACEHOLDER: business postal address]` from Settings > Store
details.

---

# Email 2: sends 48 hours later, only if no order has been placed

**Subject:** The honest version of our shipping times

**Preview text:** 7 to 20 business days, why it is that long, and what happens if it goes wrong.

**Body:**

> Hi,
>
> Two days ago you signed up. You have not ordered, which is completely fine. Most people who look do not
> buy, and the most common reasons are not mysterious, so here are ours answered directly.
>
> **"How much is shipping, really?"**
>
> $4.99 flat, free over $54.99. The 2-pack at $62.98 clears that on its own. There is no separate
> handling charge, no fee that appears at the payment step. The number you see on the product page is the
> number you pay.
>
> **"How long does it take?"**
>
> `[PLACEHOLDER: processing time, e.g. "1-3"]` business days to process, then 7 to 20 business days in
> transit. Not two days. It ships direct from our supplier's fulfillment center, which is how the price
> stays where it is. We would rather publish the slow true window than a fast one we cannot hit.
>
> **"What if it arrives broken, or does not arrive?"**
>
> Send a photo to `[PLACEHOLDER: contact email on the real domain]` within 30 days of delivery and you
> get a replacement or a full refund, your choice. We pay return shipping when the fault is ours. If
> tracking says delivered and it is not there, tell us and we will chase it.
>
> **"Is it actually any good?"**
>
> Here is where we stay honest. The manufacturer's listing specifies a quiet plug-in pump,
> `[PLACEHOLDER: capacity]` of water, and tool-free disassembly for cleaning. Those are their
> specifications and we are quoting them as such rather than dressing them up as a review. We do not have
> customer reviews yet, and we are not going to write ourselves any. When real ones arrive they go on the
> product page, good and bad.
>
> **What you are actually buying**
>
> A fountain that keeps water moving so it is not the same still bowl it was at breakfast. If your cat
> already drinks happily from a bowl, you do not need this. If she ignores the bowl and licks the
> bathroom tap, that is the behavior this is aimed at.
>
> [See the fountain](https://[PLACEHOLDER: store domain]/products/quiet-pump-cat-water-fountain)
>
> That is the last email in this sequence. If you order, you will hear from us about that order and
> nothing else.
>
> Paw Finds

**Footer:** as email 1. Unsubscribe link plus the real business name and postal address.

---

## What to measure, and what a good result looks like

Record in `tracker/LEDGER.md`, and only write a `docs/LEARNINGS.md` entry once the sample size is real:

| Metric | Where it comes from | The external band, for context only |
|---|---|---|
| Recipients | Shopify Email automation report | n/a |
| Open rate | Same | 35.5% welcome average (Omnisend) |
| Click rate | Same | 3.94% |
| Placed-order rate | Same | 2.11% |
| **Dollars recovered per recipient** | Orders attributed / recipients | $6.16 per email is the external figure |

**Those are other people's numbers and they are not a forecast for us.** Our list will be tiny, sourced
from one TikTok account, on a store with zero reviews and a 7 to 20 business day window. Under a few
hundred recipients, any rate computed from it is noise, and saying so is the correct entry.

---

*Internal note: `[PLACEHOLDER: business name]`, `[PLACEHOLDER: contact email on the real domain]`,
`[PLACEHOLDER: store domain]` and the processing-time figure must match `policy-shipping.md`,
`policy-refund-returns.md`, `policy-contact.md`, `policy-privacy.md`, `policy-terms.md`,
`product-cat-water-fountain.md` and `email-transactional.md` exactly. The 7 to 20 business day transit
window comes from `ops/sourcing-dossier.md` and applies to the AliExpress primary pick. If a
CJdropshipping US-warehouse SKU is ever confirmed, that window becomes 3-8 business days and every one of
those files changes together, in the same session, or they will disagree in front of a customer.*
