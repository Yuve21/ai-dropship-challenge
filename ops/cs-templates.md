# Customer Service Templates: paste-ready macros

Owner: `ops-support`. Companion file: `ops/fulfilment-runbook.md`, which holds the order-to-delivery
procedure, the dispute defense, and the returns-risk note these templates are written against.

**Status: prepared, never used.** No store exists, no order exists, no message has been sent
(`tracker/LEDGER.md`: out-of-pocket $0.00, revenue $0.00). Everything below is written now so that the
first ticket is a paste, not a decision made under pressure by whoever happens to be awake.

**The condition these templates are built for, stated once.** The founder decided on 2026-08-12 that
**no sample will be ordered** (`tracker/LEDGER.md` decision log). Nobody on this team has held the
product. The customer is therefore the first person who sees it, which raises the odds of quality
complaints, "not as described" disputes and returns. These templates handle that honestly instead of
writing around it. The rule that follows from it: **we may state what the listing says, what our policy
says, and what the tracking page currently shows. We may not state anything about the product from
experience, because we have none.**

---

## The variables, filled once before the store goes live

Every `{{...}}` below is per-order and comes from the Shopify order. Every `[PLACEHOLDER: ...]` is a
business fact that does not exist yet and **must never be guessed**.

| Token | Source | Notes |
|---|---|---|
| `{{first_name}}` | Shopify order | Use the first name only. |
| `{{order_number}}` | Shopify order | Never type an order number that is not in front of you. |
| `{{order_date}}` | Shopify order | The purchase date, not the fulfilment date. |
| `{{item_name}}` | Shopify order | Use our product title, not the supplier's listing title. |
| `{{ship_date}}` | Supplier / DSers | The date tracking was created, not the date we placed the supplier order. |
| `{{carrier}}` `{{tracking_number}}` `{{tracking_url}}` | Supplier tracking | Only after a real number exists. |
| `{{window_end_date}}` | Computed | `{{order_date}}` + processing time + **20 business days**. This is the promised window's last day and the only date we ever commit to. |
| `[PLACEHOLDER: store name]` | Founder | Must match the Shopify store name exactly. |
| `[PLACEHOLDER: contact email on the real domain]` | Founder, after the domain is bought | Same address as `store/copy/policy-contact.md`. |
| `[PLACEHOLDER: processing time, e.g. 1-3 business days]` | Locked when the supplier is locked | Must match `store/copy/policy-shipping.md`. |
| `[PLACEHOLDER: reply-time promise, e.g. 1-2 business days]` | Founder | Must match the Contact page. |
| `[PLACEHOLDER: first name of whoever is replying]` | Founder | A real first name or nothing. Do not invent a persona or a fake support-agent name. |

**Transit window: 7 to 20 business days.** That number comes from `ops/sourcing-dossier.md` and is the
only shipping window that may appear in any message, ad, caption or page until a US-warehouse SKU is
actually confirmed inside a supplier account. It is not negotiable downward to sound better.

## The nine standing rules, which outrank any template below

1. **Never invent a tracking status.** Open the carrier page before replying and describe only what is on
   it right now. "Tracking has not updated since {{ship_date}}" is a fact. "It is at customs" is a guess
   unless the page says so.
2. **Never promise a delivery date.** We promise a window and we say it is a window. The only date we put
   in writing is `{{window_end_date}}`, and only as the outside edge.
3. **Never claim experience with the product.** No "I use mine", no "it is quiet", no "mine has never
   leaked". Attribute every product characteristic to the listing or to the spec.
4. **No health or medical framing, ever.** Not hydration as medicine, not kidney or urinary claims, not
   "vet recommended". Hard no on this product regardless of what a customer asks
   (`compliance/bench-review-2026-08-11.md`).
5. **Refund beats a chargeback every time.** A refund costs us the item cost. A chargeback costs the item,
   the revenue, a fee, and ratio damage that can cost the processor account. When the two are close, refund.
6. **Reply inside `[PLACEHOLDER: reply-time promise]`**, because that promise is published on the Contact
   page and missing it is the first broken promise a customer sees.
7. **One number, everywhere.** 30 days from delivery for returns, 7 to 20 business days transit, the same
   contact email on every page and in every signature. A number that differs between a policy page and a
   reply reads as improvisation.
8. **Anything we promise in a reply is executed the same day.** A refund promised is a refund issued. If
   the founder has to press the button, the reply does not go out until it is pressed or the reply says
   plainly when it will be.
9. **Log every ticket.** Reason code, order number, outcome, and whether it was product quality, shipping
   time, or our own error. That tally is the input to the returns-risk kill trigger in
   `ops/fulfilment-runbook.md`, and it is worthless if it is reconstructed from memory later.

**Reason codes to tag every ticket with** (one per ticket, pick the dominant one): `WISMO`,
`DELAY`, `DAMAGED`, `DEFECTIVE`, `NOT-AS-DESCRIBED`, `WRONG-ITEM`, `CHANGE-OF-MIND`, `CANCEL`,
`NOT-RECEIVED`, `PRODUCT-QUESTION`, `PRE-PURCHASE`, `DISPUTE`.

---

# 1. Where is my order, still inside the window

**When to use:** the customer asks where their order is and today is on or before `{{window_end_date}}`.
Tracking exists and shows movement, or shows nothing yet but was created recently.

**Action alongside:** open the tracking page and read it before replying. Confirm the order is marked
fulfilled in Shopify with a real tracking number attached. Tag `WISMO`. No refund, no escalation.

```
Subject: Your order {{order_number}}

Hi {{first_name}},

Thanks for checking in. Your order is on its way and is still inside the delivery window we
published when you bought.

Here is where it stands right now:

Shipped: {{ship_date}}
Carrier: {{carrier}}
Tracking: {{tracking_number}}
Track it here: {{tracking_url}}

Our published window is [PLACEHOLDER: processing time, e.g. 1-3 business days] to process plus 7 to
20 business days in transit, so the outside edge for this order is {{window_end_date}}. Most orders
land before that. I am not going to give you a specific day, because the handoffs between carriers
are not something I control and I would rather not promise you a date I cannot hold.

One normal thing worth knowing: tracking can sit without a new scan for several days between
handoffs. That is usually the package moving between carriers rather than a problem.

If it has not arrived by {{window_end_date}}, reply to this email and I will sort it out, either a
replacement or a full refund, your choice.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
[PLACEHOLDER: contact email on the real domain]
```

---

# 2. Where is my order, the window has elapsed

**When to use:** today is past `{{window_end_date}}` and the customer has contacted us. This is a
different message from template 1 and must never be sent as template 1 with a softer date. The window we
published has been missed and the reply says so.

**Action alongside:** before sending, decide which of the three outcomes this order gets, and put it in
the message. Do not send a holding reply. Chase the supplier the same day. Tag `DELAY`. If the customer
picks a refund, the founder issues it the same day and it goes in the money log.

```
Subject: Your order {{order_number}}, past our delivery window

Hi {{first_name}},

Your order has passed the delivery window we published, and that is on us to fix rather than on you
to chase.

Here is what tracking shows right now: [PLACEHOLDER: describe only what the carrier page currently
shows, including "no scan since {{ship_date}}" if that is what it says].

You have two options and either one is fine with me:

1. I refund you in full today, and if the package turns up later you keep it. No return needed.
2. I keep chasing it with our shipping partner and update you by [PLACEHOLDER: a specific date you
   will actually check, e.g. three business days from today].

Reply with 1 or 2 and I will do it. If I do not hear back from you within [PLACEHOLDER: e.g. 3
business days] I will refund you in full rather than leave you waiting on something I cannot
guarantee.

I am sorry this went past what we told you. The window on our Shipping Policy is the real one and it
should have held.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 3. Tracking exists but has not moved

**When to use:** the customer says tracking has been stuck, and the carrier page genuinely shows no new
scan. Use this only when you have looked. Applies inside the window; if the window has also elapsed, use
template 2.

**Action alongside:** open a supplier ticket the same day per the stall ladder in
`ops/fulfilment-runbook.md`. Tag `WISMO`. Set a diary date to follow up whether or not the customer chases
again, and follow up even if they go quiet.

```
Subject: Your order {{order_number}}, tracking update

Hi {{first_name}},

You are right that it has not moved. As of today the tracking page shows [PLACEHOLDER: the exact last
scan event and its date, copied from the carrier page] and nothing since.

I am not going to guess at where it is. What I have done today is raise it with our shipping partner
and ask them to trace it. I will come back to you by [PLACEHOLDER: specific date] with either a real
update or a decision.

For context, a gap of several days between scans is common on this route, and packages do often start
moving again on their own. That is not me telling you to be patient indefinitely: your order is
covered by our window either way, and the outside edge is {{window_end_date}}. If it has not arrived
by then, you get a replacement or a full refund, your choice, no return required.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 4. Proactive delay notice, sent before the window expires

**When to use:** we know an order will miss `{{window_end_date}}` and the customer has not contacted us.
Supplier stockout, a supplier processing delay, or a stalled shipment we have already chased. **This is
the FTC prompt-delivery obligation and it is not optional.** We must ship inside the window we promised,
or, before that window runs out, tell the customer, give a revised date, and give them the option to
cancel for a full refund. Where no window was stated the backstop is 30 days. Our window is published, so
the published window is what binds.

**Action alongside:** send it before `{{window_end_date}}` passes, not after. If the customer does not
agree to the revised date, or does not answer inside the deadline in the message, **cancel and refund**
rather than hold their money against a date they never accepted. Tag `DELAY`. Log the cause in the
ledger, because the cause is the transferable part.

```
Subject: Your order {{order_number}} is going to be late, and your options

Hi {{first_name}},

I would rather tell you this before the date passes than after it.

Your order {{order_number}}, placed {{order_date}}, is not going to arrive inside the window we
promised you, which runs to {{window_end_date}}. The reason is [PLACEHOLDER: the real reason, in
plain words, e.g. our supplier is out of stock on this item / the shipment has not been scanned since
{{ship_date}} and our shipping partner has not been able to locate it]. I am not going to dress it up
as anything else.

My revised estimate is [PLACEHOLDER: a specific revised date you actually believe, based on what the
supplier told you]. I want to be straight with you that this is an estimate, not a guarantee.

Your choice, and both are genuinely fine:

1. Cancel now and I refund you in full. No questions, nothing to return, and you will see it back on
   your original payment method.
2. Wait for the revised date above. If it slips again I will come back to you with the same two
   options rather than letting it drift.

If I do not hear from you by [PLACEHOLDER: a date at least a few days out], I will cancel and refund
you automatically. I would rather return your money than sit on it while you wait for something I
cannot promise.

Sorry about this.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 5. Second delay, or no reply to the delay notice: refund issued

**When to use:** the revised date in template 4 has also slipped, or the deadline in template 4 passed
with no answer. Do not send a third delay notice. Refund.

**Action alongside:** issue the refund first, then send this. Cancel the supplier order if it has not
dispatched. Tag `DELAY`. This order goes in the ledger as a real cost, and the supplier gets a note in
the *Operational* learnings if the same supplier does it twice.

```
Subject: Refunded in full, order {{order_number}}

Hi {{first_name}},

I have refunded your order {{order_number}} in full today. Nothing needed from you.

The reason: [PLACEHOLDER: the revised date I gave you has slipped again / I did not hear back and I
was not willing to hold your money against a date I could not promise]. It should show back on your
original payment method within 5 to 10 business days, depending on your bank.

If the package does turn up at your door after this, keep it. I am not going to ask you to send
anything back over a delay that was not your fault.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 6. Item arrived damaged or defective

**When to use:** the customer says the item arrived broken, cracked, leaking, dead on arrival, or stops
working immediately. Covered by our Refund and Returns Policy within 30 days of delivery.

**Action alongside:** ask for the photo or video **before** deciding, then decide fast. Do not request a
return: return shipping to the supplier costs more than the item, so a refund or a replacement without a
return is both cheaper and better. **Tag `DAMAGED` or `DEFECTIVE` and record the specific failure mode in
the ticket log**, because the failure-mode tally is the first real quality signal we will ever get on
this product (`ops/fulfilment-runbook.md`, the returns-risk note). Open a supplier claim with the same
evidence. Any electrical fault, overheating or water reaching a plug is a safety signal and escalates
immediately, not after a second report.

```
Subject: Sorry, let us fix your order {{order_number}}

Hi {{first_name}},

That is not what should have arrived and I am sorry. Let me make it right today.

Could you reply with a photo or a short video of the problem? It does not need to be a good photo. I
need it for two reasons: it lets me raise it with our supplier so the next one does not go out the
same way, and it means in almost every case you will not need to ship anything back to us.

While you send that, tell me which you would rather have:

1. A replacement sent out at no cost to you.
2. A full refund to your original payment method.

Either is fine and there is no wrong answer. If you pick the replacement, I will be honest that it
ships on the same 7 to 20 business day window as the original, so if you would rather just have your
money back, say so and it is done.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 7. Item not as described

**When to use:** the item works but is not what the customer believed they were buying: smaller, a
different colour or material, a different capacity, a missing accessory, a different look from the
product photos. **This is the ticket type most likely to bite us, because nobody here has inspected a
unit and our product page is built from the supplier's listing rather than from a unit in hand.** Treat
it as credible on first report, not as a customer misunderstanding.

**Action alongside:** get the photo, then **compare it against our own product page and the supplier
listing yourself**. Two outcomes, and they are handled differently. If the item genuinely differs from
what we published, that is our page being wrong: refund in full, no return, and **fix the page the same
day**. If it matches what we published but not what the customer expected, refund or return under policy
anyway and check whether our page's wording invited the misunderstanding. Tag `NOT-AS-DESCRIBED` and
**record the exact attribute named**. Two reports naming the same attribute is a structural signal, not
noise, and it fires the trigger in `ops/fulfilment-runbook.md`.

```
Subject: Your order {{order_number}}

Hi {{first_name}},

Thank you for telling me, and specifically for telling me what does not match rather than just that
something is off. That is genuinely useful.

Could you send a photo of what arrived, and tell me in one line which part is different from what you
expected? I want to check it against our own product page rather than take a guess.

Two things I want to be straight with you about:

If what arrived does not match what our page said, that is our mistake, not yours. In that case I
refund you in full, you keep the item, and I fix the page today so nobody else buys on the strength
of a wrong description.

If it does match our page but not what you had in mind, you are still covered: our 30 day return
window applies, and I would rather sort you out than argue about whose reading was right.

Tell me which of those it looks like from your end, or just send the photo and I will work it out.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 8. Return or refund request, inside policy

**When to use:** the customer changed their mind, within 30 days of delivery, item unused and in its
packaging. Nothing is wrong with the item.

**Action alongside:** this is the one case where the customer pays return shipping, per
`store/copy/policy-refund-returns.md`. **Do the arithmetic before you insist on it.** Return shipping on
a low-value item usually costs more than the item does, and a return we pay to receive at an address we
do not operate is worse than a refund. Default to refund-without-return unless the item value clearly
justifies otherwise, and say so plainly rather than pretending it is a favour. Tag `CHANGE-OF-MIND`.
Never send a customer to the address on the shipping label.

```
Subject: Your return, order {{order_number}}

Hi {{first_name}},

No problem at all, and thanks for asking inside the 30 day window.

[USE ONE OF THESE TWO OPENINGS AND DELETE THE OTHER]

[Option A, the default:] Rather than have you pay to post this back, I am going to refund you in full
and you can keep the item or pass it on to someone who wants it. Return shipping on this would cost
you more than the item is worth, and I would rather not put you through that.

[Option B, if a return is genuinely worth processing:] Here is how the return works. Our policy is
that return shipping for a change of mind is the customer's cost, so that part is on you. Please do
not send it to the address on the shipping label: that is our supplier's facility and it will not get
back to us. Send it to [PLACEHOLDER: the real return address, confirmed with the supplier first] and
reply with the tracking number.

Either way, once it is processed the refund goes back to your original payment method and usually
shows up within 5 to 10 business days, though the exact timing is set by your bank rather than by us.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 9. Return or refund request, outside policy

**When to use:** the request arrives more than 30 days after delivery, or the item is used, opened and
unsellable, or missing parts, and none of the covered reasons apply.

**Action alongside:** decide before replying whether this is a goodwill refund or a decline, and say
which one it is. **Do not decline and then reverse under pressure**, which teaches customers to escalate.
Weigh the cost: the item costs us roughly $7 to $11 landed, a chargeback costs the item plus the revenue
plus a fee plus ratio damage, and at our order volume a single chargeback is a material share of the 1%
ceiling (`ops/fulfilment-runbook.md`). A goodwill refund is usually the cheaper answer, and if you are
declining, be sure the reason survives being read out loud. Tag `CHANGE-OF-MIND` and note the outcome.

```
Subject: Your order {{order_number}}

Hi {{first_name}},

Thanks for writing in, and let me give you a straight answer rather than a policy paragraph.

Our return window is 30 days from delivery, and your order was delivered on [PLACEHOLDER: delivery
date from the tracking page], which puts this request outside it.

[USE ONE AND DELETE THE OTHER]

[Goodwill:] I am going to refund you anyway this time, in full, and you do not need to send anything
back. I would rather do that than hold you to a date when you have taken the time to explain the
situation. It should be back on your original payment method within 5 to 10 business days.

[Decline:] Because of that I am not able to refund this one, and I do not want to leave you with a
maybe. What I can do is [PLACEHOLDER: the real, specific alternative you are actually willing to
offer, e.g. send the replacement part at no cost / a partial refund of $X. Delete this line entirely
if there is no alternative rather than inventing one].

If something about the item itself is faulty rather than unwanted, tell me and send a photo, because
that is handled differently and the window does not work the same way.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 10. Cancellation request before dispatch

**When to use:** the customer asks to cancel and the supplier order has either not been placed or has not
dispatched. Check the real status before replying.

**Action alongside:** cancel the supplier order first, in DSers or in the supplier account, then refund,
then reply. In that order, so we never refund an order that is still going to ship. If the supplier
cannot cancel, use the variant below. Tag `CANCEL`.

```
Subject: Cancelled and refunded, order {{order_number}}

Hi {{first_name}},

Done. Order {{order_number}} is cancelled and I have refunded you in full today. There is nothing you
need to do.

The refund goes back to your original payment method and usually appears within 5 to 10 business
days, depending on your bank.

If you cancelled because of the shipping time, that is fair, and I would rather you knew it up front
than found out after paying. If it was something else and there is a version of this that works for
you, tell me.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

### 10b. Cancellation request after dispatch

**When to use:** the customer asks to cancel but the supplier has already dispatched and tracking exists.
**Do not tell a customer we have cancelled something we have not.**

**Action alongside:** try the supplier cancellation anyway and record the answer. Default to refunding on
arrival without requiring a return, because the return costs more than the item. Tag `CANCEL`.

```
Subject: Your order {{order_number}}

Hi {{first_name}},

I am sorry, I got to this one just after it left the warehouse, so I cannot pull it back. I would
rather tell you that than say it is cancelled and have a box turn up anyway.

Here is what I can do. When it arrives, email me and I will refund you in full, and you will not need
to post it back to us. So you are not stuck with it and you are not out of pocket, it just takes the
delivery time to resolve.

Tracking, so you know when to expect it: {{tracking_url}}

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 11. Wrong item received

**When to use:** the supplier shipped something other than what was ordered: wrong variant, wrong colour,
wrong product entirely.

**Action alongside:** this is fully our cost, including any return shipping, per
`store/copy/policy-refund-returns.md`. Do not ask for a return unless the supplier specifically requires
one and pays for it. Open a supplier claim with the photo the same day. Tag `WRONG-ITEM`. **Count it:
wrong-item rate is a supplier reliability signal and belongs in the weekly tally**, and two on the same
supplier inside one week routes to the supplier-failure path in `ops/fulfilment-runbook.md`.

```
Subject: We sent the wrong thing, order {{order_number}}

Hi {{first_name}},

That is our mistake and I will fix it at no cost to you.

Could you send a quick photo of what arrived, including the shipping label if it is still on the box?
That lets me raise it with our supplier properly rather than just describing it.

Which would you prefer:

1. The correct item sent out, at no cost. It ships on the same 7 to 20 business day window, which I
   want to be upfront about rather than have you find out.
2. A full refund today.

Keep the wrong item either way. I am not going to make you pay to post it, and if a return does turn
out to be needed, we cover the shipping.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 12. A product question we cannot answer from experience

**When to use:** any question that would need a unit in hand to answer. "How loud is the pump?" "Does it
leak?" "Is the plastic sturdy?" "Will it hold up to a cat that knocks things over?" **This is not an edge
case. It is a recurring daily ticket type for this store, because we sell a product nobody here has
held.**

**Action alongside:** answer what we genuinely know, which is the published spec and what the listing
says, attributed. Never fill the gap with a plausible guess and never repeat the supplier's star rating
or sold count as if it were our own review evidence. If the question is one we could actually settle,
settle it: ask the supplier and come back with their answer, attributed to them. Tag `PRODUCT-QUESTION`
and **log the question**, because the questions we cannot answer are a ranked list of what to check the
day a unit finally exists, and repeated questions about the same attribute are also a listing-clarity
defect on our product page.

```
Subject: Your question about the {{item_name}}

Hi {{first_name}},

Honest answer first: I do not know, because I have not used one myself. I am not going to tell you
otherwise to make the sale.

What I can tell you is what is actually documented. The listing specifies [PLACEHOLDER: the exact
specs, quoted from the supplier listing, e.g. capacity, material, power source, dimensions]. On
[PLACEHOLDER: the specific thing they asked about], the supplier describes it as [PLACEHOLDER: their
wording, or delete this sentence entirely if the listing does not address it]. That is their claim
about their product, not a result I have tested.

[USE IF YOU CAN ACTUALLY CHECK:] I have asked our supplier directly about this and I will come back
to you with what they say by [PLACEHOLDER: specific date], again as their answer rather than mine.

If that is too much of an unknown to buy on, I completely understand, and I would rather you waited
than bought on something I made up. If you do order and it is not right, we have a 30 day return
window from delivery and I will sort it out.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 13. Pre-purchase shipping-time question

**When to use:** someone asks how long shipping takes before ordering. Answer it with the real window.
**A pre-purchase question answered honestly costs one sale. Answered optimistically it costs a refund, a
dispute, and the processor account.**

**Action alongside:** tag `PRE-PURCHASE`. If this question keeps arriving, the shipping window is not
visible enough on the product page, which is a store fix rather than a support fix: our own evidence puts
extra costs and slow delivery among the largest fixable abandonment causes, and 43% of sites omit
shipping information from the product page (`docs/LEARNINGS.md`, Baymard entry).

```
Subject: Shipping times

Hi {{first_name}},

Straight answer: [PLACEHOLDER: processing time, e.g. 1-3 business days] to process, then 7 to 20
business days in transit. So somewhere between roughly two and four and a half weeks, door to door.

That is slower than a big-box retailer and I am not going to pretend otherwise. It is slower because
the item ships from our supplier's fulfilment centre rather than a local warehouse, which is the
trade for the price. You will get a tracking number by email as soon as it ships.

If you need it faster than that, I would genuinely rather you bought it somewhere that can get it to
you in time than have you disappointed by us.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 14. Tracking says delivered, the customer does not have it

**When to use:** the carrier page shows a delivery scan and the customer says nothing arrived. Covered by
`store/copy/policy-shipping.md` within 30 days of the expected delivery date.

**Action alongside:** read the tracking page and note the exact delivery scan wording and timestamp. Do
not accuse and do not immediately refund without the two checks below, which resolve a real share of
these. Tag `NOT-RECEIVED`. If unresolved after the check window, refund: an unresolved
item-not-received is the highest-probability chargeback in the entire ticket set, and a chargeback costs
strictly more than the refund.

```
Subject: Your order {{order_number}}

Hi {{first_name}},

Tracking shows this as delivered on [PLACEHOLDER: exact date and any location wording shown on the
carrier page]. Since you do not have it, let me help rather than leave it there.

Two things that resolve most of these, and I am asking rather than assuming:

1. Could you check with anyone else at the address, and any spot a driver might use, porch, side
   door, mailroom, a neighbour.
2. Occasionally a carrier scans a package as delivered a day or two before it actually lands. If it
   is going to turn up, it is usually within about 48 hours of that scan.

If it has not appeared by [PLACEHOLDER: a date roughly 2 to 3 days out], reply and I will refund you
in full or send a replacement, whichever you prefer. I am not going to leave you paying for something
you never received.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 15. Customer says they will file a chargeback, or already has

**When to use:** the words "chargeback", "dispute", or "my bank" appear. Treat this as the highest
priority ticket in the queue on the day it arrives.

**Action alongside:** **if they have not filed yet, resolve it now, in full, whatever it takes up to the
order value.** A refund costs us the item. A chargeback costs the item, the revenue, a fee, and ratio
damage against a 1% ceiling that at our order volume a single dispute can blow through
(`ops/fulfilment-runbook.md`). **If they have already filed**, refunding does not automatically withdraw
the dispute, so respond to the processor with the evidence pack the same day **and** reply to the
customer. Never argue with a customer inside a dispute. Tag `DISPUTE`, and log the cause rather than only
the count, because the cause is what is transferable.

```
Subject: Your order {{order_number}}, sorted today

Hi {{first_name}},

You should not have to go to your bank to get this resolved, so let me just resolve it.

[IF NOT YET FILED:] I have refunded your order {{order_number}} in full today. Nothing to return,
nothing else needed from you. It should be back on your original payment method within 5 to 10
business days, depending on your bank.

[IF ALREADY FILED:] I have refunded your order {{order_number}} in full today. One thing worth
knowing so you are not surprised: because a dispute is already open with your bank, their process
runs separately from mine and can take a few weeks to close. If you would rather have the refund
directly from me than wait for their process, it may be worth letting them know it has been settled.
Either way you are not out of pocket, and I am not going to contest anything.

If you want to tell me what went wrong, I would like to know, because it is the only way I fix it for
the next person. No obligation.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

# 16. Post-delivery check-in, first 10 delivered orders only

**When to use:** proactively, roughly 3 days after a delivery scan, for the **first 10 delivered orders
only**. This is not a review request and it is not a marketing email.

**Why it exists:** nobody here has inspected this product, and the first delivery is roughly 7 to 20
business days after the first sale, so we are structurally blind to quality for at least three weeks
after we start selling. **These ten emails are the only mechanism we have to shorten that.** They buy
information, not fewer returns. Our own evidence is explicit that faster or better post-purchase handling
does not reduce returns (`docs/LEARNINGS.md`, *faster shipping does NOT reduce returns*), so this is
justified on early defect detection and on dispute exposure, not on return rate.

**Action alongside:** every reply is logged against the failure-mode tally in
`ops/fulfilment-runbook.md`. Stop after 10 sends. Do not offer an incentive, do not ask for a review, do
not ask for a rating: an incentivised review is a `compliance-guard` hard no and a fabricated one is
worse. Tag `PRODUCT-QUESTION` unless it turns into a real fault.

```
Subject: Did it arrive OK?

Hi {{first_name}},

Your order should have landed a few days ago. This is not a review request and there is nothing to
click.

We are a new store and yours is one of the first orders we have shipped, so I would like to know one
thing: did it arrive in one piece and does it work?

If anything is wrong, damaged, different from the photos, or just not what you expected, reply and
tell me and I will fix it, replacement or refund, your choice. If it is fine, a one word reply is
genuinely useful to me.

Thanks for taking a chance on a new store.

[PLACEHOLDER: first name of whoever is replying]
[PLACEHOLDER: store name]
```

---

## What is deliberately not in this file

- **No review request template.** We have zero reviews and getting the first five genuine ones is a
  launch task (`docs/LEARNINGS.md`), but a request written before a single order exists would be written
  blind, and incentivised or scripted review solicitation is a compliance line we do not go near.
- **No "your order has shipped" template.** Shopify sends the shipping confirmation automatically the
  moment a real tracking number is attached, and `ops/fulfilment-runbook.md` covers when that happens. A
  hand-written duplicate is one more place for the window to be misquoted.
- **No apology template that promises a discount code.** A discount on a store with no proven margin
  history is a decision, not a macro.
