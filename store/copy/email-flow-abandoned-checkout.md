# Email Flow: Abandoned Checkout

Written 2026-08-12 by `challenge-lead`. Companion to `email-flow-welcome.md`; the two together are the
whole owned-channel build for month one. Nothing else gets built.

**Platform: Shopify Email.** Its abandoned-checkout automations are free and do **not** count against the
10,000/month allowance. We do not use Klaviyo, which bills on **active profiles** and auto-upgrades to a
paid tier at cycle start, a live risk to the $100 cap (`docs/LEARNINGS.md`, *External evidence*,
2026-08-10).

**Status: written, not built.** No store exists, so no flow is live. This is paste-ready for the standup.

---

## Why this flow exists, and what it can realistically do

Abandoned cart plus welcome are **76% of all automation-generated orders**. Automations earn **$3.41 per
email** against **$0.155** for campaigns, while being only 2% of sends and producing 30% of email revenue
(Omnisend, 150,000 brands, 27 billion emails, calendar year 2025).

**Set expectations honestly before this is judged:** a cart-recovery flow converts **1.72% to 3.33% of
recipients**, not the 10-30% that bundling and email vendors imply. On our early volumes that means single
recoveries, not a revenue line. It is still worth building because it costs nothing and runs forever.

**The more important half of that research, and the reason this file is short:** open rates are
essentially identical between campaigns and automations (30.4% vs 30.2%), so the entire ~20x revenue gap
is **click and conversion, not subject lines**. Do not spend time A/B testing clever subjects here. Spend
it on trigger timing and on the structural problem below.

## The structural problem this flow cannot fix, stated up front

Our own evidence says the largest fixable cause of abandonment is **extra costs at 40%**, then slow
delivery at 20%, then not trusting the site with card details at 19% (Baymard). **A recovery email does
not change a $12 shipping fee or a 20-day delivery window.**

For this store the two big abandonment drivers are structural and already known:
1. **A 7 to 20 business day shipping window.** That is slow, and it is disclosed on purpose.
2. **Zero reviews and zero brand recognition** on a store that did not exist last week.

So the fix ranking is: get the full landed cost and the delivery window visible **before** checkout
starts, keep guest checkout on, and put the shipping ETA and return policy **on the product page**. Those
are `store/BUILD-SPEC.md` jobs and they are worth multiples of this flow. This flow catches the residue.

## Trigger, timing and sequence

| Email | Sends | Condition |
|---|---|---|
| 1 | **1 hour** after checkout is abandoned | No order placed |
| 2 | **24 hours** after abandonment | Still no order placed |
| 3 | **72 hours** after abandonment | Still no order placed. **This is the last one.** |

**Why 1 hour and not 10 minutes:** at 10 minutes a meaningful share of "abandonments" are people who are
still deciding, or who got interrupted and will come back on their own. Emailing them takes credit for an
order that was coming anyway and trains us to misread the flow's contribution.

**Why three and not five or seven:** three touches on a store with one product and no brand equity is the
point where a reminder becomes pestering. We have no catalogue to cross-sell into and no reason to keep
talking. Five-email sequences exist in vendor templates because vendors bill on sends.

**Shopify note:** Shopify's native abandoned-checkout automation is straightforward for a single email.
Verify in the UI whether the version you get supports a three-step delay branch; if it does not, build
email 1 natively and accept the single touch for now rather than installing a paid app to get steps 2 and
3. **No app enters this store without a stated per-order cost and the specific number it must move**
(`docs/LEARNINGS.md`, the net-margin entry). Recovering an extra fraction of a percent does not justify a
monthly fee against a $100 cap.

## The offer question

**No discount code in any of these three emails.** Reasons, in order:
1. We have no proven margin history. Contribution margin is $21.28/order modelled
   (`ops/paid-readiness-dossier.md`), and a 10% discount is $3.50 straight off it before we know what
   returns actually cost us.
2. A discount that arrives an hour after abandonment teaches buyers to abandon. On a one-product store
   that lesson is learned fast.
3. Our real objection is not price, it is trust and shipping time. A code does not answer either.

If a discount is ever tested here, it belongs in email 3 only, as a bounded test with the contribution
margin recomputed first, and the result written to `docs/LEARNINGS.md` under *Pricing and AOV*.

## Compliance requirements, all three emails

- Physical postal address in the footer, and a working unsubscribe link. Both are legal requirements for
  commercial email and both are `[PLACEHOLDER]` until the business details exist.
- The shipping window stated must match `store/copy/policy-shipping.md` **exactly**. If one changes they
  all change in the same session.
- No health, medical or veterinary claims. No hydration-as-medicine language, no UTI or kidney
  references (`compliance/bench-review-2026-08-11.md`, rank 1).
- **No invented urgency.** No "only 3 left", no countdown timer, no "your cart expires". We do not know
  our stock level, and a fake scarcity claim on a dropshipped product is a straightforward
  misrepresentation.
- **No reviews, ratings or star counts**, because we have none. The supplier listing's 4.9 stars belong to
  the supplier's platform and never appear in our mail.
- **Nothing claiming we have tested the product.** No sample was ordered
  (`tracker/LEDGER.md`, 2026-08-12). Manufacturer specifications may be stated **with attribution**.

---

# Email 1: sends 1 hour after abandonment

**Subject:** `You left the fountain in your cart`

**Preview text:** `No pressure. Here is the link back, plus the shipping window in writing.`

**Body:**

> Hi [PLACEHOLDER: first name, falls back to "there"],
>
> You started checking out and did not finish. That happens, and there is no urgency here.
>
> Your cart: **the quiet cat water fountain, $34.99.**
>
> If what stopped you was the delivery time, here it is in plain text so you do not have to hunt for it:
> **7 to 20 business days.** We ship from an overseas supplier, which is why it is slow and why the price
> is what it is. We would rather you know that now than be annoyed in two weeks.
>
> [ Return to checkout ]
>
> If something else stopped you, reply to this email. It comes to a real person at
> [PLACEHOLDER: support@yourdomain.com].
>
> [PLACEHOLDER: Store name]
> [PLACEHOLDER: physical postal address]
> [ Unsubscribe ]

---

# Email 2: sends 24 hours after abandonment

**Subject:** `The honest version of why it ships slowly`

**Preview text:** `One product, one supplier, no warehouse. Here is what that means for you.`

**Body:**

> Hi [PLACEHOLDER: first name, falls back to "there"],
>
> Your cart is still saved. Before you decide, here is how this store actually works, because it explains
> both the price and the wait.
>
> We sell one product. We do not hold stock. When you order, it ships from the supplier directly to you,
> which is why it takes **7 to 20 business days** and why it costs $34.99 instead of what a retail shelf
> would charge for the same thing.
>
> What that means for you, stated plainly:
>
> - **You wait longer than Amazon.** That is the real tradeoff and we are not going to dress it up.
> - **You pay less than retail** for a plug-in fountain.
> - **If it arrives damaged or not as described, you are covered.** See our refund policy, linked below.
>
> [ Return to checkout ]
>
> [PLACEHOLDER: Store name]
> [PLACEHOLDER: physical postal address]
> [ Unsubscribe ]

---

# Email 3: sends 72 hours after abandonment, and this is the last one

**Subject:** `Last one about this, I promise`

**Preview text:** `Closing the loop on your cart. No discount, no countdown.`

**Body:**

> Hi [PLACEHOLDER: first name, falls back to "there"],
>
> This is the last email about your cart. No countdown, no discount code, no "act now". If the wait or the
> price is not right for you, that is a completely reasonable answer and I would rather you skip it than
> be disappointed.
>
> Your cart: **the quiet cat water fountain, $34.99. Ships in 7 to 20 business days.**
>
> [ Return to checkout ]
>
> If you have a question I have not answered, reply and ask. I read them.
>
> [PLACEHOLDER: Store name]
> [PLACEHOLDER: physical postal address]
> [ Unsubscribe ]

---

## What to measure, and what a good result looks like

Record in `tracker/LEDGER.md`, and write the conclusion to `docs/LEARNINGS.md` under *Pricing and AOV*
once there is enough volume to conclude anything.

| Metric | Where it comes from | Our band |
|---|---|---|
| Recipients entering the flow | Shopify Email | n/a, it is the denominator |
| Recovery rate (orders / recipients) | Shopify | **1.72% to 3.33%** is the documented band. Above 5% on small n is noise, not a win |
| Revenue per email | Shopify | External benchmark for this flow is **$3.59**. Ours will be lower at first |
| Which email recovered the order | Shopify | Tells us whether 3 touches earn their place or whether email 1 does all the work |

**The honest read on sample size:** at these conversion rates you need **hundreds** of abandonments before
a recovery-rate figure means anything. Early numbers here are n=1 anecdotes. Do not tune the flow on them,
and do not write a learning from them. If email 1 recovers one order in the first week, that is one order,
not a 100% recovery rate.

**The falsifiable claim this flow makes:** that three touches beat one. If the data eventually shows
emails 2 and 3 recovering nothing that email 1 would not have recovered anyway, cut them, and write that
down as a real finding rather than leaving them running because they are already built.

---

*Consistency note: `[PLACEHOLDER: Store name]`, `[PLACEHOLDER: support@yourdomain.com]`, the postal
address and the **7 to 20 business day** window must match `policy-shipping.md`,
`policy-refund-returns.md`, `policy-contact.md`, `product-cat-water-fountain.md`,
`email-flow-welcome.md` and `email-transactional.md` exactly. That window comes from
`ops/sourcing-dossier.md` and applies to the AliExpress primary pick. If a CJdropshipping US-warehouse SKU
is ever confirmed it becomes 3-8 business days, and every one of those files changes in the same session
or they will disagree in front of a customer.*
