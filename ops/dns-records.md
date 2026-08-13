# DNS records: exact values to paste on domain-purchase day

Written 2026-08-12 by `challenge-lead`, against `docs/NO-STALL.md` P3 ("draft the verbatim DNS record
values so publishing them is a 10-minute paste") and `docs/WARM-UP.md` Track C.

**Why this file exists:** buying the domain is Founder Action #1 and carries a cost of delay of 1.0,
compounding and unrecoverable, because domain age is calendar-driven. Track C says publish authentication
**the same day the domain is bought**. This file is here so that day needs no research.

**Read this first, it saves a wasted trip:** only two of the three records can be published on purchase
day. SPF and DMARC are static strings and are below, ready to paste. **DKIM cannot be**, because Shopify
generates the CNAME host and value per store and the store does not exist yet. Publish SPF and DMARC on
purchase day, then come back for DKIM at store standup. Both visits are short.

---

## Record 1: SPF, publish on purchase day

SPF states which servers may send mail claiming to be from your domain.

| Field | Value |
|---|---|
| Type | `TXT` |
| Host / Name | `@` (some registrars want the bare domain instead, see the note below) |
| Value | `v=spf1 include:shops.shopify.com ~all` |
| TTL | leave the registrar default (usually 3600 or "Auto") |

**Notes that actually matter:**
- `@` means the root domain. Cloudflare and Namecheap both accept `@`. A few registrars want you to type
  `[PLACEHOLDER: yourdomain.com]` instead. If `@` is rejected, type the bare domain with no trailing dot.
- `~all` is softfail, which is correct while you are starting out. Do not use `-all` (hardfail) yet: if
  any legitimate sender is missing from the record, hardfail sends real mail to nowhere.
- **You may only ever have ONE SPF TXT record on a domain.** Two SPF records is a permanent error that
  fails both, and it is the single most common way this gets broken. If the registrar auto-created one
  when you bought the domain, **edit that record, do not add a second.**
- **The 10-lookup limit is real and it fails silently.** Every `include:` costs at least one DNS lookup,
  and some includes chain into more. Past 10, SPF returns permerror and receivers may treat your mail as
  unauthenticated, with no bounce and no warning. One `include:` is fine. If you later add another sender
  (a helpdesk, a marketing tool), count the lookups before adding, do not just append.

---

## Record 2: DMARC, publish on purchase day

DMARC tells receivers what to do when SPF and DKIM fail, and it is what makes the other two records
observable instead of guesswork.

| Field | Value |
|---|---|
| Type | `TXT` |
| Host / Name | `_dmarc` |
| Value | `v=DMARC1; p=none; rua=mailto:[PLACEHOLDER: dmarc@yourdomain.com]; fo=1` |
| TTL | registrar default |

**Notes:**
- **`p=none` is deliberate and is not a weak setting for now.** It is monitor-only: it changes nothing
  about delivery and asks receivers to send you aggregate reports. You tighten to `p=quarantine` and later
  `p=reject` **only after** the reports show your legitimate mail is passing. Starting at `p=reject` on a
  new domain is how people silently destroy their own transactional mail.
- The `rua` address must be an address you can actually read. It can be on the same domain. Reports arrive
  as daily XML attachments and are ugly but readable.
- `fo=1` asks for a failure report when either SPF or DKIM fails, which is what you want while verifying.
- Do not add `pct=` yet. It only matters once you are past `p=none`.

---

## Record 3: DKIM, published later, at store standup

DKIM cryptographically signs your mail. **Shopify generates these records per store**, so they cannot be
written here in advance without inventing values, which this repo does not do.

**When you get them:** in the Shopify admin, after the store exists and the domain is connected, at
Settings, then Notifications, then the sender-email area, Shopify shows an "authenticate" or "verify"
step that displays the exact records to add. **Verify the current path in the UI: Shopify moves this
screen between releases, and a stale click path here would be worse than none.**

**What they look like:** typically several `CNAME` records, not TXT, with hosts along the lines of
`shopifyemail._domainkey` or a set of Shopify-provided selector names, each pointing at a Shopify
hostname. Copy them character for character. A single wrong character fails silently, exactly like SPF.

**Do this in the same session as connecting the domain**, not "later", because unverified sender domains
are the reason transactional mail lands in spam, and a store's first order confirmation going to spam is
a support ticket and a possible dispute.

---

## Verification, once records are in

DNS propagation is usually minutes on a fresh domain but is allowed to take up to 48 hours.

**Check the records resolve** (run these locally, they need no accounts):

```
nslookup -type=TXT [PLACEHOLDER: yourdomain.com]
nslookup -type=TXT _dmarc.[PLACEHOLDER: yourdomain.com]
```

Expect to see the exact strings above. If nothing comes back, wait and retry before changing anything:
re-editing records mid-propagation is how people end up with duplicates.

**Check a real message passes all three.** The only honest test is an actual send, so this happens after
the store can send. Send an order confirmation to a Gmail address you control, open it, choose "Show
original", and read the header block. You want:

```
SPF:   PASS
DKIM:  PASS
DMARC: PASS
```

`DMARC: PASS` requires **alignment**, not merely SPF or DKIM passing: the domain in the From header has to
match the domain that SPF or DKIM authenticated. It is possible to see SPF pass and DMARC still fail for
this reason, and that is the case worth catching, because it is invisible without this check.

Record the result in `tracker/LEDGER.md` under Track C as **dashboard-confirmed**, with the date. Track C
currently reads "SPF / DKIM / DMARC: not set. Header pass check: not run."

---

## What stays true regardless

- **Transactional mail only in month one.** No bulk sending, per Track C. A new domain sending volume is
  the fastest route to a permanent reputation problem, and our own evidence says the revenue is in the two
  automated flows anyway, not in campaigns.
- These three records authenticate **sending**. They are unrelated to the A and CNAME records that point
  the domain at the storefront, which Shopify walks you through separately at domain connection.
- If the domain registrar and the DNS host are different services, publish these at whichever service the
  domain's **nameservers** actually point to. Editing DNS at a registrar whose nameservers are delegated
  elsewhere changes nothing, and the records will appear absent no matter how many times they are saved.

## Unverified, stated plainly

The SPF include `shops.shopify.com` is Shopify's documented sending include and is stable, but it was
**not re-verified live in this session**. Confirm it on Shopify's own sender-authentication screen at
standup, in the same visit where you collect the DKIM CNAMEs. If Shopify shows a different include string,
theirs wins and this file gets corrected in the same session.
