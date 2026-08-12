# Day -1 Substitute Post: "The Bowl Nobody Drinks From" (fourth native, replaces the product-in-frame slot)

Account: @dailypawfinds
Protocol: Challenge Warm-Up Protocol v1, Track A, Day -1 (2026-08-17).
Post type: **native, non-promotional.** No product, no pitch, no CTA, no link.
Replaces: `creative/scripts/day--1-product-in-frame.md`, which requires the fountain incidentally in frame
and cannot be filmed. No sample was ordered (founder decision, 2026-08-12, `tracker/LEDGER.md`).

## Why a native post is the right substitute, in one paragraph
The Day -1 slot exists as a step-down: three fully native posts, then one post where a product is merely
present, then promotional content from Day 1. Its purpose is to make the account's first product-adjacent
frame unremarkable before anything is pitched. With no product to place in frame, the two honest options
are to post nothing or to post a fourth native. **A fourth native is strictly more conservative than the
protocol asks for**, never less: it satisfies every rule the Day -1 slot imposes and adds none of the risk
the slot was managing. Posting nothing would drop a scheduled posting day during warm-up, which the
protocol's own hold conditions treat as something to avoid without cause. So: post native.

**What we do not do:** film a substitute unit, a competitor's fountain, a borrowed fountain, or a friend's,
and let it read as ours. `docs/LEARNINGS.md` (2026-08-12) already ruled that out by name, and it is the
same fabrication rule that governs everything else in this plan.

## Operational note, and it is a real one
`automation/lib/protocol.js` encodes Day -1 as `postType: "product-in-frame"`, and `automation/cli.js`
refuses a post whose `--type` does not match the day exactly. So `--type native` on 2026-08-17 **will be
refused by the CLI**. Two clean paths, both fine:
1. **Post this one by hand from the phone.** One video, and native app posting avoids the reported ~30-50%
   API reach haircut anyway (`docs/WARM-UP.md`). Log it in the ledger manually.
2. **Ask `challenge-lead` to decide** whether `protocol.js` should accept a post type strictly more
   conservative than the day's allowance. That is a code and protocol question, not a creative one, and it
   is flagged here rather than worked around silently.

Do **not** run `warmup skip` to get around this. That switch turns the whole gate off and is the founder's
call about the entire protocol, not a workaround for one post type.

## Concept, one line
The same full, untouched water bowl that the Day 1 content will build on, filmed as an ordinary observation
with nothing to sell, so the account's first product-adjacent idea arrives one day before the account
starts selling anything.

## Script / shot list (10-12s)
| Time | Shot | Notes |
|---|---|---|
| 0-2s | Overhead close on a full, perfectly still water bowl. Natural light. | Hook is the stillness. No text yet for half a beat. |
| 2-5s | Cat walks through frame, past the bowl, without stopping. If she will not, hold on the bowl and let the emptiness of the shot do the work. | Real behaviour, unstaged. Do not lure her past it with food and present it as spontaneous. |
| 5-8s | Cut to her drinking somewhere else entirely: the tap, a glass, the shower floor, whatever she actually does. | This is the payoff and it is free to film. |
| 8-10s | Person refilling the untouched bowl anyway, quietly. | The joke lands without narration. |
| 10-12s | Loop-friendly close: back to the opening overhead still-bowl frame. | Clean loop. |

## On-screen text (burned-in, sound-off legible)
- 0-2s: "filled this morning"
- 5-8s: "where she actually drinks"
- 10-12s: "refilled it anyway"

## Suggested caption
the bowl is decorative at this point. royalty-free audio only.

## Why this stays compliant with the Day -1 rule
There is no product in this video, so there is nothing to pitch, disclose or route anyone to. It is a
plain-bowl observation of the kind cat accounts post constantly with no commercial intent. It is native by
the same test the Day -4 to -2 scripts pass: remove any single shot and the video is still just a cat being
a cat.

## Format recommendation
Real phone footage. The whole video is objects and an animal we already have, in a room we already have.
Nothing here needs generating and generating it would be worse in every way.

## AIGC label state
Not applicable, real footage. If posted through the CLI on some later date, pass `--no-aigc` (the flag
defaults to true).

## Compliance notes
- No product, no brand, no link, no CTA anywhere in video or caption. Confirmed clean for the Day -1 slot,
  and cleaner than the slot requires.
- No health or medical claim. No hydration framing at all: this video makes no argument, it just shows a
  bowl.
- No income claims, no before/after framing, no copyrighted music.
- The Day 1 posts refer back to this bowl. That is continuity, not a retroactive pitch, and it stays fine
  as long as this post itself sells nothing, which it does not.
