# The challenge CLI

The automatable parts of the challenge, in two commands. It is not a bot that scrolls, likes, follows,
watches or comments: no official API exposes those actions, and session-token automation is the ban
vector `docs/WARM-UP.md` and the `compliance-guard` brief both call a hard no. That part stays human by
design. Split table: `docs/WARM-UP.md`, "Automated vs not automated".

## Setup

No `npm install`: everything uses Node's built-in `fetch`/`FormData`/`fs` (Node 18.17+).

```
cd automation
cp .env.example .env
```

Fill `.env` only when you have an upload-post.com API key. `warmup` needs none, and `post --dry-run`
tests the posting flow without one.

## `warmup`: the daily dashboard, and the founder's switch

```
node cli.js warmup start --handle @pawfinds        # once, the day the TikTok account is created
node cli.js warmup today                           # every day: what to do, what's allowed
node cli.js warmup hold --hours 48 --reason "..."  # on an action block or warning
node cli.js warmup skip                            # FOUNDER ONLY: turn the gate off
node cli.js warmup enable                          # turn the gate back on (default)
```

`warmup today` prints the current Challenge Warm-Up Protocol v1 day, today's human routine and
engagement targets, and how many posts of what type are authorized.

**The gate is founder-controlled.** `enabled` in `state/warmup-state.json` defaults to `true`.
- **`enabled: true` (default):** `post` refuses anything the current protocol day does not allow. The
  gate is enforced in code, not only in the docs, so an automated run cannot jump the cadence.
- **`warmup skip` (`enabled: false`):** product content and CTA/link posts are allowed immediately at
  the steady-state cap of 3/day, with no day-type check. The command writes a dated line to
  `tracker/LEDGER.md` recording that warm-up was skipped by founder decision. Post caps and active
  holds still apply, because those answer platform signals rather than the calendar.
- `warmup enable` restores the gate and logs that decision too.

Agents never flip this switch. `challenge-lead` and `content-engine` read it and act accordingly.

## `post`: approved posting via upload-post.com

```
node cli.js post --video ./clip.mp4 --title "caption here" --type native --profile pawfinds
```

`--type` is `native`, `product-in-frame` or `product` (see `lib/protocol.js`, transcribed from
`docs/WARM-UP.md`). The command refuses if:
- the gate is on and today's protocol day allows a **less** promotional type than the one you asked for,
- the type is not one of the three valid names,
- you are at today's post cap,
- a hold is active (`warmup hold`), or
- the gate is on and warm-up has not been started (`warmup start`).

**Posting something less promotional than the day allows is permitted** (changed 2026-08-12). The three
types are ranked `native` < `product-in-frame` < `product`, and the gate only blocks moving *faster* than
the protocol, never slower. A `native` post on a `product-in-frame` day is allowed and prints a note, since
it shows the algorithm strictly less selling, not more. Before this change the check was an equality test,
which would have refused the Day -1 native substitute in `creative/NO-SAMPLE-PLAN.md`.

`--dry-run` prints exactly what would be sent, no API call, no paid plan needed.

## `video`: Higgsfield AI b-roll (added 2026-08-13)

```
node cli.js video --image <public image url> --prompt "<motion prompt>" [--model dop-turbo] [--dry-run]
```

Generates a clip through Higgsfield's image-to-video API and polls until it finishes.

**It spends founder money.** Higgsfield is paid: roughly **$15/mo** on the cheapest tier, top-ups around
**$5 per 100 credits**, and **15-25 credits per basic video** (checked 2026-08-13; their pricing has been
restructured repeatedly, so verify before buying). That is real spend against the $100 cap and needs
approval like any other. `--dry-run` needs no key and spends nothing.

**It refuses banned subjects in code, before it looks at your key**, so the refusal does not depend on
having paid first. It will not generate **cats, pets, people, or the product**. Those are standing
decisions, not preferences: we have no cat (2026-08-13) and no sample (2026-08-12), and generating either
to stand in for something we do not have is the fabrication line the whole repo holds. Sanctioned use is
**abstract b-roll only**: water, light, texture, motion.

**Everything it produces is AI and must carry TikTok's AIGC label.** `post` sets that by default, so never
pass `--no-aigc` for a generated clip.

Auth is a **two-part credential** sent as `Authorization: Key <KEY_ID>:<KEY_SECRET>`, not a bearer token.
Both halves go in `.env` as `HF_API_KEY` and `HF_API_SECRET`.

**Honest status:** built and tested end to end against every refusal path (banned subject, missing key,
dry-run request shape), but **never run against the live API**, because no key exists and no plan is
bought. The one thing that could still be wrong is the request envelope: the official SDK nests params
under `input` and this sends that, while the one raw example in their docs posts params at the top level.
If the first real call returns 400 or 422, flip `BODY_ENVELOPE` in `automation/lib/higgsfield.js` before
assuming the key is bad. That uncertainty is flagged in the file itself rather than hidden.

**Cost (verified 2026-08-10, corrects an older `docs/SETUP-GUIDE.md` claim):** upload-post.com TikTok
posting is Basic tier and up, **$24/mo minimum**, not free. Subscribe a day or two before posting
actually starts, not on Day -7, so it does not sit idle against the $100 cap.

## State

`state/warmup-state.json` holds the gate flag, the account start date, any active hold, and the post
log. Committed to git on purpose, like `tracker/LEDGER.md`: operational state, not a secret. `.env`
holds the API key and is gitignored.

## Not wired yet

- **Video generation.** No Creatify/HeyGen/Runway/ElevenLabs keys in `.env` (`docs/SETUP-GUIDE.md`
  section C), so `post` needs a finished video file to exist already.
- **A trigger for `warmup today`.** Run it daily by hand or wire a scheduled task. It does not run
  inside `.github/workflows/challenge-loop.yml`; that loop runs `challenge-lead`, a separate layer.
- **Post-status lookup.** upload-post.com publishes no confirmed "check by publish_id" endpoint, so
  `lib/uploadPost.js` does not guess one. Check `https://docs.upload-post.com/openapi.json` first.
