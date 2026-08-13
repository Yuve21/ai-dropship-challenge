# Day -1 Substitute Post: "What a bowl of water looks like after a day" (fourth native, replaces the product-in-frame slot)

> **AMENDED 2026-08-13 by `creative-director` (no-cat constraint). This slot has now been substituted
> twice, and it is worth saying why in one place.** The original, `day--1-product-in-frame.md`, needed the
> fountain sitting on the counter as an ordinary object; no sample was ordered (founder decision
> 2026-08-12), so it was replaced by a fourth native, "The Bowl Nobody Drinks From". That substitute needed
> **a cat walking past the bowl and then drinking at the tap**, which is unfilmable now that the founder
> has no cat and no access to one. So the concept is replaced again and the constraint is now fully
> absorbed rather than partly: **this version contains no product and no animal.** What survives from the
> previous version is the bowl, which is an object the founder owns, and the reason the slot exists at all.
> The step-down logic below is unchanged and still correct.

Account: @dailypawfinds
Protocol: Challenge Warm-Up Protocol v1, Track A, Day -1 (2026-08-17).
Post type: **native, non-promotional.** No product, no pitch, no CTA, no link.
Replaces: `creative/scripts/day--1-product-in-frame.md` (needs the fountain in frame, nothing is arriving).
Filming requirement: **one phone, one kitchen, one bowl, one tap, own hands. No animal, no product.**

## Why a native post is still the right substitute, in one paragraph
The Day -1 slot exists as a step-down: three fully native posts, then one post where a product is merely
present, then promotional content from Day 1. Its purpose is to make the account's first product-adjacent
frame unremarkable before anything is pitched. With no product to place in frame, the two honest options are
to post nothing or to post a fourth native. **A fourth native is strictly more conservative than the
protocol asks for**, never less: it satisfies every rule the Day -1 slot imposes and adds none of the risk
the slot was managing. Posting nothing would drop a scheduled posting day during warm-up, which the
protocol's own hold conditions treat as something to avoid without cause. So: post native.

**What this version does that the last one could not.** It still does the one useful job the product-in-frame
slot was for, which is to put the **idea** the Day 1 content argues from into the account one day early,
without arguing it. Day 1 onward is about moving water. This post shows still water, filmed honestly in our
own kitchen, and says nothing about cats until the last card, which uses the pre-cleared behavioural line
and sells nothing.

**What we do not do:** film a substitute unit, a competitor's fountain, a borrowed one, or a borrowed cat,
and let any of it read as ours. `docs/LEARNINGS.md` (2026-08-12) ruled the product half out by name, and the
no-cat constraint extends the same rule to animals.

## Operational note: RESOLVED 2026-08-12, this script's earlier warning is now out of date
`automation/lib/protocol.js` still encodes Day -1 as `postType: "product-in-frame"`, and that is correct
and unchanged. **What changed is the check in `automation/cli.js`.** It previously compared post type with
`!==`, which would have refused `--type native` on Day -1, meaning our own tooling would have blocked this
substitute.

**`challenge-lead` fixed this on 2026-08-12**, before this script was written, so the flag raised here has
already been closed. The equality check was replaced with a promotional-intensity ranking
(`native` 0 < `product-in-frame` 1 < `product` 2). The gate exists to stop the cadence being jumped
**forward**, so a post less promotional than the day allows is always safe: it shows the algorithm strictly
less selling, never more. **`--type native` on Day -1 is now allowed** and prints a note saying so. A
request *above* the day's allowance is still refused with exit code 1, and an unknown type is now rejected
explicitly. Verified by execution in all four cases (`tracker/LEDGER.md`, 2026-08-12, part 3).

**Recommendation stands anyway: post this one by hand from the phone.** Not because the CLI would refuse
it, but because native app posting avoids the reported API reach haircut (`docs/WARM-UP.md`) and there is
no paid upload-post subscription yet. Log it in the ledger manually.

Do **not** run `warmup skip` to get around anything. That switch turns the whole gate off and is the
founder's call about the entire protocol, not a workaround for one post type.

## Asset requirement

| Asset | Exists? | Produced by |
|---|---|---|
| A bowl of water, filled and left standing for roughly 24 hours in the founder's own kitchen | **Fill it on 2026-08-16 so it has genuinely been standing when it is filmed.** $0 | Founder |
| The founder's own tap, and own hands | Already exists | Founder's phone |
| 5 text cards | Produced in the edit | Phone editor or Canva MCP |
| Stock footage | **None required** | n/a |
| Cat | **None required, and none implied** | n/a |

## Concept, one line
Still water and moving water, filmed side by side in one kitchen with one bowl and one tap, as a plain
observation about what water does when nothing disturbs it.

## Hook (first 3 seconds, the opening VISUAL frame)
Extreme close, near-macro, on the surface of the standing bowl. Completely motionless. Whatever is genuinely
on the surface after a day (dust, a settled film, a stray hair, the light sitting perfectly flat) is the
hook, and it should be **whatever is actually there**, not dressed. A frame with zero motion in a feed of
motion is the whole idea.

## Script / shot list (12-14s)

| Time | Shot | On-screen text |
|---|---|---|
| 0-2s | Macro on the still surface. No movement at all. Hold it longer than feels comfortable. | "this was filled yesterday morning" |
| 2-4s | Pull back slightly, same bowl, still full to the same line. | "still full to the same line" |
| 4-6s | Hands tip the bowl a few degrees. The surface film slides as one sheet, then settles flat again. | "the surface sets like that in about a day" |
| 6-9s | Cut to the tap running into the same bowl. Water breaking up, aerated, obviously moving. One continuous shot. | "same water. moving" |
| 9-11s | Hands turn the tap off. Watch the surface go flat again and stop. | "and then it stops" |
| 11-14s | Loop-friendly close: the exact opening macro frame. | "a lot of cats will pick the moving one" |

**Shooting note:** the 6-9s tap beat is the video's payoff and should be **one unedited continuous shot**,
same mechanic as the Day -3 mat move. Shoot the still-surface frames in daylight where the flatness reads.

## On-screen text, collected (burned in, sound-off legible)
- 0-2s: "this was filled yesterday morning"
- 2-4s: "still full to the same line"
- 4-6s: "the surface sets like that in about a day"
- 6-9s: "same water. moving"
- 9-11s: "and then it stops"
- 11-14s: "a lot of cats will pick the moving one"

## Suggested caption (under six words)
"water gets boring apparently"

## Hashtags
#catsoftiktok #cattok #catbehavior #petfinds #homefinds #catcare

## Cover-frame brief
The 0-2s macro still-surface frame with the hook card. It will be the flattest, quietest thumbnail on the
grid, which is the point.

## Why this stays compliant with the Day -1 rule
There is no product in this video, so there is nothing to pitch, disclose or route anyone to. There is no
animal in it either, so nothing is implied about a household that does not exist. The only cat reference is
the closing card, which is the behavioural line already cleared as allowed-and-true in
`creative/scripts/day1-hook-bank.md` and `store/copy/product-cat-water-fountain.md` ("cats are **often**
drawn to moving water"), stated about cats in general and attached to nothing for sale.

## Format recommendation
Real phone footage. Every object in this video is already in the founder's kitchen. Nothing here needs
generating, and generating water for a video whose entire claim is "this is our actual bowl after a day"
would destroy the only thing it has.

## AIGC label state
**Not applicable, real footage.** Pass `--no-aigc` if posted through the CLI (the flag defaults to true).

## Compliance notes
- **No cat is filmed or implied to live here.** The closing card is third person about cats in general. No
  "she", no "my cat", no suggestion that this bowl belongs to an animal.
- No product, no brand, no link, no CTA anywhere in video or caption. Confirmed clean for the Day -1 slot,
  and cleaner than the slot requires.
- No health or medical claim, and no hydration-as-medicine framing. The video makes no argument about
  hydration at all: it shows what water does.
- The claim "the surface sets like that in about a day" must be **true of the bowl actually filmed**. Fill
  it on 08-16 and film it on 08-17. If the surface shows nothing after a day, cut that card rather than
  overstating what is on camera.
- No income claims, no before/after framing, no copyrighted music.
- The Day 1 posts build on this water-motion idea. That is continuity, not a retroactive pitch, and it stays
  fine as long as this post itself sells nothing, which it does not.
