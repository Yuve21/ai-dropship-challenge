# Transactional Email: order confirmation and shipping notification

Written 2026-08-12 by `challenge-lead`. Created to close a dangling reference: both
`email-flow-welcome.md` and `email-flow-abandoned-checkout.md` cite this file in their consistency notes,
and `store/LAUNCH-RUNBOOK.md` flagged that it did not exist.

**These are transactional, not marketing.** Different legal footing from the two flows: they are sent
because of an order rather than a subscription, they do not require an unsubscribe link, and a customer
cannot opt out of them. Do not put promotional content in them, because that is what reclassifies a
transactional message as a commercial one and drags it under CAN-SPAM's full requirements.

**Status: written, not built.** No store exists. **Shopify sends both of these automatically from built-in
templates**, so unlike the two flows, launch is not blocked on this file. What this file exists to do is
correct the default template's wording, which is generic and does not state our delivery reality.

---

## Why these are worth editing at all

Our own evidence (`docs/LEARNINGS.md`, Omnisend, 150,000 brands): **shipping confirmation earns $3.08 per
email and order confirmation $2.88.** Those beat every flow except welcome and back-in-stock. They are
opened at rates no marketing email reaches, because the customer is actively waiting for them.

But the reason to edit them here is narrower and more important than revenue. Per Baymard, **slow delivery
is 20% of abandonment** and **64% of consumers are likelier to buy when shown an estimated delivery date**.
Our delivery window is 7 to 20 business days, which is slow and disclosed on purpose. **The order
confirmation is the last chance to set that expectation before the wait begins**, and an expectation set
here is a support ticket and possibly a dispute that never happens.

Restraint that matters: **no upsell block, no cross-sell, no discount code for next time** in either
email. We have one product, so there is nothing to cross-sell into, and promotional content in a
transactional email is the specific thing that changes its legal classification.

---

## Email 1: Order confirmation

**Sends:** immediately on order, automatically, Shopify built-in.
**Shopify admin:** Settings, then Notifications, then Order confirmation. `[VERIFY IN UI: Shopify moves
this screen between releases.]`

**Subject:** `Order [PLACEHOLDER: order number] confirmed. Here is when to expect it.`

**Body, replacing the default template's opening block. Keep Shopify's line-item, totals and address
blocks as they are, they are already correct and dynamic.**

> Thanks for your order.
>
> **What happens next, and the honest timeline:**
>
> Your order goes to our supplier within 1 business day. From there, **delivery typically takes 7 to 20
> business days.** That is slower than a big retailer, and it is the tradeoff that keeps the price at
> $34.99. We would rather put that in writing now than have it be a surprise in two weeks.
>
> **You will get a second email with tracking as soon as the parcel is scanned.** That usually happens a
> few days after you order, not the same day. If you have not heard from us in 5 business days, reply to
> this email and ask. It reaches a real person.
>
> [Shopify's order summary, items, totals and shipping address block renders here]
>
> Questions about this order: [PLACEHOLDER: support@yourdomain.com]
>
> [PLACEHOLDER: Store name]
> [PLACEHOLDER: physical postal address]

**Why the "5 business days" line is in there:** it pre-empts the single most common support ticket, "I
ordered and heard nothing." It tells the customer what silence means and gives them a defined moment to
act, which converts an anxious customer into a patient one. It also matches the "where is my order"
macros in `ops/cs-templates.md`; if one changes, both change.

---

## Email 2: Shipping notification

**Sends:** automatically when a tracking number is attached to the order.
**Shopify admin:** Settings, then Notifications, then Shipping confirmation. `[VERIFY IN UI]`

**Subject:** `Your order has shipped. Tracking inside.`

**Body:**

> Your order is on its way.
>
> **Tracking:** [Shopify's tracking number and carrier link block renders here]
>
> **Two honest notes about tracking on this route**, because they cause most of the questions we get:
>
> 1. **It can take several days for the first scan to appear.** A tracking number that shows nothing yet
>    is normal at this stage and does not mean the parcel is lost.
> 2. **Tracking may go quiet for a stretch mid-journey**, particularly when the parcel changes carrier.
>    That is also normal. It usually reappears closer to delivery.
>
> If tracking has not moved at all for **10 business days**, reply to this email and we will chase it. You
> are covered by our refund policy either way: [PLACEHOLDER: link to policy-refund-returns.md page]
>
> [PLACEHOLDER: Store name]
> [PLACEHOLDER: physical postal address]

**Why the two tracking notes are in there:** they are the two things that generate "where is my order"
tickets on long international routes, and both are genuinely normal rather than problems. Explaining them
once, in the email that introduces tracking, is cheaper than answering them one at a time. **Neither note
invents a tracking status**, which is a hard line in `ops/cs-templates.md`: we describe how tracking behaves
in general, we never tell a customer where their specific parcel is without the carrier saying so.

---

## What must NOT go in either email

- **No promotional content**, no discount code, no "shop again", no product recommendations. This is the
  line that keeps them transactional.
- **No delivery date we cannot control.** A range, always, matching `policy-shipping.md` exactly. Never a
  specific date.
- **No invented tracking status or location.**
- **No review request.** `ops/cs-templates.md` deliberately declines to write a review-solicitation macro,
  and the same reasoning holds here: nobody has seen this product, and asking for a review before the
  customer has formed an opinion is soliciting a rating rather than a review. Once real orders have landed
  and quality is known, revisit it as its own decision with `compliance-guard`.
- **No claim about the product's performance.** Same no-sample standard as everywhere else
  (`compliance/no-sample-copy-audit-2026-08-12.md`).

## FTC obligation these emails carry

Prompt delivery (16 CFR 435, MITOR): we must **ship within the promised window or notify the customer with
a revised date and a chance to cancel**, and absent a stated window the default is 30 days. The order
confirmation above is what establishes our promised window, which is why its wording is a compliance
artifact and not just copy. The delay-notification template lives in `ops/cs-templates.md` and is the one
that discharges this obligation when a shipment slips.

---

*Consistency note: `[PLACEHOLDER: Store name]`, `[PLACEHOLDER: support@yourdomain.com]`, the postal address
and the **7 to 20 business day** window must match `policy-shipping.md`, `policy-refund-returns.md`,
`policy-contact.md`, `product-cat-water-fountain.md`, `email-flow-welcome.md`,
`email-flow-abandoned-checkout.md` and `ops/cs-templates.md` exactly. The window comes from
`ops/sourcing-dossier.md` and applies to the AliExpress primary pick. If a CJdropshipping US-warehouse SKU
is confirmed it becomes 3 to 8 business days, and every one of those files changes in the same session or
they will disagree in front of a customer.*
