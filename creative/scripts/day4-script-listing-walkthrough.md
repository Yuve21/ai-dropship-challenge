# Day 4 Script: "Reading The Listing Out Loud" (Supplier Media, permission-gated)

Account: @dailypawfinds
Protocol: Challenge Warm-Up Protocol v1, Track A, Day 4 (2026-08-21). 3 posts/day from today.
Product being sold: cat water fountain, $34.99. **Shown only as supplier listing imagery, labelled on
screen as supplier listing imagery.**
Hook family: **Honest Shop**, second entry.
Post slot: Day 4, slot 1 of 3.

## Asset requirement, and the gate on it
| Asset | Exists? | Produced by |
|---|---|---|
| Supplier listing photos, and listing video if the listing carries one | **UNKNOWN.** `ops/sourcing-dossier.md` records price, rating and sold count for all three fountain options but **never recorded what imagery or video the listings carry**, because AliExpress item pages redirected to a login wall and could not be fetched. Nobody has looked | `HUMAN:` step, logged into AliExpress or DSers: open the Option A and Option C listings, screenshot or download what media exists, and record it in `ops/sourcing-dossier.md` |
| Written permission from the supplier to use that media | **Does not exist** | `HUMAN:` message the supplier before filming. Exact wording below |

**This script does not get produced until both rows are satisfied.** It is written now so that the moment
the founder opens the supplier account (Founder Action #8), producing it is a 20-minute job.

### The permission question, stated honestly rather than assumed away
Dropshipping merchants routinely reuse supplier listing photos and it is the normal practice of the
industry. That is a fact about practice, not a licence. The images belong to the supplier or the
manufacturer, some marketplaces grant reseller media rights in their own terms and some do not, and we have
verified nothing about these specific listings. `compliance-guard`'s position: **ask in writing, keep the
reply, and use only what is granted.** It costs one message and it converts an assumption into a record.

Message to send, verbatim:
"Hi, I run a small US store and I am considering selling your cat water fountain. May I use your product
photos and product video on my store listing and in social posts? Please confirm yes or no in this chat. I
will credit the listing if you prefer."

If the supplier does not answer within 48 hours, **this script does not run**, and the slot falls back to
`day2-script-textcard-bowl-audit.md` hook variant 2, which needs no third-party media. Silence is not
permission.

## The idea, one line
Walk through what the listing actually claims, on screen, marking clearly which parts we have confirmed
(none of them) and which are the seller's word (all of them). It is product content that makes no product
claim of our own.

## Hook (first 3 seconds, the opening VISUAL frame)
Supplier listing photo full frame with a bright overlay across it reading "SELLER'S PHOTO, NOT MINE" from
frame one. The disclosure is the hook. Nobody in this niche opens a video that way and it is the only
version of this video that is honest.

## Shot list (13s)
| Time | Beat | Shot | On-screen text |
|---|---|---|---|
| 0-2s | Hook | Supplier listing photo, full frame. | "SELLER'S PHOTO, NOT MINE" |
| 2-5s | Spec | Same or second listing photo. | "2.2 litres. plastic housing. plug-in pump. $34.99" |
| 5-8s | The claim, attributed | Listing photo or listing video segment. | "the listing says the pump is quiet. I have not heard it" |
| 8-11s | The gap | Cut to our real, empty kitchen counter. | "this is where it goes when it lands" |
| 11-13s | Loop | Back to the opening photo with the same overlay. | "seller's photo. mine is in transit" |

Every product statement on screen is either a spec quoted from the listing or an explicit statement that we
have not verified it. There is no third category in this script.

## Hook variants (one concept, three hooks, body and CTA frozen)
1. "SELLER'S PHOTO, NOT MINE" overlay from frame one. **(the version scheduled)**
2. "here is everything the seller claims and nothing I have checked."
3. "I am selling this and I have not touched it yet."

## CTA rung
Rung 1 (pinned comment). Verbatim: "$34.99, shop name typed below, 7-20 business days. photos in this video
are the supplier's, used with their permission. my own unit is not here yet, so nothing in this video is a
review."

## Comment-bait element
Closed two-option poll with a real stake: "comment BUY or WAIT, would you order before I have reviewed it."
It is a poll, it is honest, and the answers are the closest thing to a demand read this account can get
before revenue exists. Log the split.

## Caption (under six words)
"not my photo"

## Hashtags
#catsoftiktok #cattok #petfinds #catwaterfountain #newshop #shopsmall

## Cover-frame brief
The 0-2s frame with the "SELLER'S PHOTO, NOT MINE" overlay legible at thumbnail size. Do not crop the
overlay out for a cleaner thumbnail; the disclosure is the point.

## Format recommendation
Supplier media plus our own real counter shot. Do **not** upscale, restyle or AI-enhance the supplier
photos: an altered image of a product we have never seen can stop matching what actually ships, which is
where an image stops being marketing and starts being a misrepresentation.

## AIGC label state
Not applicable if the supplier media is used unaltered and the counter shot is real, which is the specified
version. Any generative alteration of the product imagery changes both the AIGC answer and the accuracy
answer, and is refused above for the second reason.

## Compliance notes
- **Permission gate is a hard gate.** No permission, no post.
- **Never present supplier media as our own footage.** The on-screen disclosure runs in frame one and again
  in the loop frame.
- **Do not quote the listing's 4.9 stars or its 4,000+ sold count** (`ops/sourcing-dossier.md`). Those are
  the supplier's numbers on the supplier's platform. Repeating them in our own marketing reads as our
  store's reviews, which we have zero of, and inventing or borrowing a review is a hard no in
  `docs/LEARNINGS.md` and `.claude/agents/compliance-guard.md` alike.
- Every quiet, capacity or material claim is attributed to the listing on screen, in the same frame as the
  claim. The BPA-free line is not stated at all, matching the placeholder rule in
  `store/copy/product-cat-water-fountain.md`.
- Confirm before filming that the listing photos show no PETLIBRO, Catit or Pioneer Pet branding and are
  not a photo-rip of one of their SKUs (`compliance/bench-review-2026-08-11.md`, rank 1). Publishing a
  competitor's photograph would be a second, worse problem than the one this permission check solves.
- Honest shipping window. No health claims, no income claims, no bare link.
