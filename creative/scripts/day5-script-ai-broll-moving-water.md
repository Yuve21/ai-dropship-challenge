# Day 5 Script: "Moving Water" (AI B-roll, AIGC-labelled, no product and no animal generated)

Account: @dailypawfinds
Protocol: Challenge Warm-Up Protocol v1, Track A, Day 5 (2026-08-22). 3 posts/day.
Product being sold: cat water fountain, $34.99. **Not generated, not depicted, not claimed.**
Hook family: **Text-on-Screen Story**, second entry, generated-visual variant.
Post slot: Day 5, slot 2 of 3.

## Asset requirement
| Asset | Exists? | Produced by |
|---|---|---|
| 8-10s of generated abstract moving-water footage: water over a surface, a stream, ripples, light on water | **Must be generated** | Runway or Kling via API key in `.env` (`docs/SETUP-GUIDE.md` section C; keys are Founder Action #3 and **not yet pasted**, so this cannot be produced today) |
| 3 text overlays | Must be produced | Canva MCP or the editor |
| Optional voiceover | Skip it. Text carries this one | n/a |

**Hard constraints on what may be generated for this account, and they are not negotiable:**
1. **Never generate the product.** Not the fountain, not "a cat fountain," not a stand-in that looks like
   one. We have never seen the unit, so any generated depiction is a picture of a thing that may not be
   what ships. That is a misrepresentation risk, separate from and worse than the AI-tell problem.
2. **Never generate a cat that reads as our cat.** The account's whole first-person voice depends on the
   cat being real. A generated cat in a first-person post is a fabricated personal experience with extra
   steps.
3. **Never generate a person delivering a testimonial.** Avatar UGC saying "I bought this" is the exact
   fabrication `creative/NO-SAMPLE-PLAN.md` section 6 forbids, whoever or whatever is speaking.

What is left, and what this script uses: **abstract water**. No product, no animal, no person, no claim.

## The idea, one line
A calm, sound-off, near-ASMR water clip carrying three short lines of text about why moving water matters
to cats, with the shop named once at the end. It exists to hold cadence on a day with no filming, and it is
honest about being generated.

## Hook (first 3 seconds, the opening VISUAL frame)
Generated water in motion, filling the frame, from 0.0s. High contrast, no text for the first half second,
then line one.

## Shot list (11s)
| Time | Beat | Visual | On-screen text |
|---|---|---|---|
| 0-3s | Hook | Generated close water motion, light catching the surface. | "cats notice moving water" |
| 3-6s | Turn | Same clip continuing, or a second generated water angle. | "a still bowl reads as old to them. moving water reads as fresh" |
| 6-9s | Honest line | Water slowing. | "that is the entire idea behind a cat fountain" |
| 9-11s | Loop | Back to the opening motion. | "we sell one. $34.99. ships 7-20 business days" |

## Hook variants (one concept, three hooks, body and CTA frozen)
1. "cats notice moving water." **(the version scheduled)**
2. "the difference between water your cat drinks and water she ignores."
3. Sound-off first, no text for 1.5s, letting the motion hold alone before line one appears.

## CTA rung
Rung 1 (pinned comment). Verbatim: "shop name typed below, $34.99, 7-20 business days. this clip is
AI-generated water, labelled as such. the product is real and my own unit has not arrived yet."

## Comment-bait element
Single-emoji, lowest friction in the bank: "comment the emoji for how your cat drinks, tap, bowl, or
glass-of-water-you-were-using." Reads the same lever as `day4-script-silent-comparison.md` did before that
script became unfilmable.

## Caption (under six words)
"why fountains exist at all"

## Hashtags
#catsoftiktok #cattok #catbehavior #petfinds #satisfying #catcare

## Cover-frame brief
A high-motion water frame from 0-3s with "cats notice moving water" legible. Do not pick a frame that could
be mistaken for a product shot.

## Format recommendation
Generated B-roll, used as B-roll, which is exactly the narrow role `.claude/agents/creative-director.md`
allows it: *"recommend AI video only for B-roll or when the founder truly cannot film."* Our own docs say
plainly that AI video converts below authentic human UGC (`docs/AUTOMATION.md`), so this format is a
cadence filler, not a hero slot. **Cap it at one post per day and never both slots of the same day.** If it
outperforms the real-footage scripts on hook rate and hold rate over a full week, that is a genuine finding
and belongs in `docs/LEARNINGS.md` under *Hooks and creative*, stated as the surprise it would be.

## AIGC label state
**REQUIRED, and this is the whole reason the format is specified this way.** Realistic generated footage
goes out with TikTok's AIGC label applied. Post using the CLI default (`isAigc` is true in
`automation/cli.js` unless `--no-aigc` is passed) and **do not pass `--no-aigc`**. TikTok auto-detects via
C2PA and unlabelled realistic AI gets down-ranked or removed (`docs/WARM-UP.md`, documented facts). The
label is not a ranking penalty; hiding it is.

## Compliance notes
- No product depicted, no animal depicted, no person depicted. Nothing in frame can be mistaken for a
  photograph of the item we ship.
- The behaviour lines are the already-cleared moving-water observation. No health, hydration-as-medicine or
  veterinary claim.
- No personal experience claimed anywhere in this script. It does not say "my cat," because the visual is
  not ours.
- The pinned comment discloses the generation in plain language on top of the platform label. Doing both is
  cheap and it is what we would want a competitor to do.
- No invented statistics, no income claims, no bare link. Royalty-free or silent audio only.
