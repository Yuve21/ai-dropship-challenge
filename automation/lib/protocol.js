// The Challenge Warm-Up Protocol v1, Track A (TikTok organic), encoded from docs/WARM-UP.md.
// This is a direct transcription of that table, not a reinterpretation. If docs/WARM-UP.md is ever
// republished as v2, update this file in the same run and note it, per that doc's own supersede rule.
//
// Day numbering matches the doc: there is no "Day 0". Day -1 is immediately followed by Day 1.

export const TIMELINE = [
  {
    day: -7,
    label: "Day -7: create the account",
    humanRoutine:
      "Create the account today on a real device, real network, real email + phone, if you " +
      "haven't already. Complete the profile fully in one sitting: photo, handle, display name, " +
      "one-line bio, niche set. No link in the bio, nothing to click. Then scroll the For You feed " +
      "for ~20 min and search 3 niche terms, watching 5 videos each to completion.",
    engagement: "Zero likes, zero follows, zero comments today.",
    postsAllowed: 0,
    postType: null,
  },
  {
    day: -6,
    label: "Day -6: consume only",
    humanRoutine: "Scroll 20-30 min, mostly in-niche.",
    engagement:
      "10 likes, 3 saves, 5 follows of in-niche creators, 2 genuine comments (real sentences, " +
      "not emoji). Watch 10 in-niche videos to completion and replay 3.",
    postsAllowed: 0,
    postType: null,
  },
  {
    day: -5,
    label: "Day -5: consume only",
    humanRoutine: "Same as Day -6. Consume only.",
    engagement: "Same as Day -6.",
    postsAllowed: 0,
    postType: null,
  },
  {
    day: -4,
    label: "Day -4: first native post",
    humanRoutine: "Consume 15 min, same engagement volume as Day -6.",
    engagement: "Same as Day -6.",
    postsAllowed: 1,
    postType: "native",
    postNote: "1 native, non-promotional video: no product, no link, no CTA, no brand pitch.",
  },
  {
    day: -3,
    label: "Day -3: second native post",
    humanRoutine: "Same as Day -4. Post inside the same 2-hour window as yesterday.",
    engagement: "Same as Day -6.",
    postsAllowed: 1,
    postType: "native",
    postNote: "1 more native video.",
  },
  {
    day: -2,
    label: "Day -2: third native post",
    humanRoutine: "Same as Day -4.",
    engagement: "Same as Day -6.",
    postsAllowed: 1,
    postType: "native",
    postNote: "1 more native video (3 native posts total now).",
  },
  {
    day: -1,
    label: "Day -1: product-in-frame post (last unpromotional post)",
    humanRoutine: "Consume 15 min.",
    engagement: "Same as Day -6.",
    postsAllowed: 1,
    postType: "product-in-frame",
    postNote:
      "1 video with the product incidentally in frame, still no pitch, no CTA, no link. This is " +
      "the last unpromotional post.",
  },
  {
    day: 1,
    label: "Day 1: real cadence begins",
    humanRoutine: "Consume 5-10 min, then continue this daily forever.",
    engagement: "5-10 min/day of scrolling and genuine engagement, for the life of the account.",
    postsAllowed: 2,
    postType: "product",
    postNote:
      "2 posts/day. Product content and CTA now allowed (CTA goes to a TikTok Shop listing or a " +
      "pinned comment until the 1,000-follower link gate clears).",
  },
  {
    day: 2,
    label: "Day 2",
    humanRoutine: "Same as Day 1.",
    engagement: "Same as Day 1.",
    postsAllowed: 2,
    postType: "product",
  },
  {
    day: 3,
    label: "Day 3",
    humanRoutine: "Same as Day 1.",
    engagement: "Same as Day 1.",
    postsAllowed: 2,
    postType: "product",
  },
  {
    day: 4,
    label: "Day 4 onward: hold at 3/day",
    humanRoutine: "Same daily consumption as Day 1.",
    engagement: "Same as Day 1.",
    postsAllowed: 3,
    postType: "product",
    postNote: "Step to 3 posts/day and hold here.",
    holdsForever: true,
  },
];

// Hold conditions from docs/WARM-UP.md - do not push through these even if the calendar says otherwise.
export const HOLD_CONDITIONS = [
  "An action block, a \"you're doing too much\" notice, or any warning: halve engagement volume " +
    "for 48h and post nothing new that day. Log it.",
  "Three consecutive posts at effectively zero views: hold cadence, do not raise it. Keep " +
    "consuming. Do not \"catch up\" with a burst, and do not conclude shadowban from a flat week.",
  "Warm-up never ends. An account that publishes and never consumes looks like a bot.",
];

/**
 * Calendar-day offset from the Day -7 start date to a given date, both as YYYY-MM-DD strings.
 */
export function calendarOffset(startDateISO, todayISO) {
  const start = new Date(`${startDateISO}T00:00:00Z`);
  const today = new Date(`${todayISO}T00:00:00Z`);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((today - start) / msPerDay);
}

/**
 * Look up the protocol entry for a given calendar-day offset from the Day -7 start date.
 * Offsets before 0 mean the account hasn't been created yet (protocol hasn't started).
 * Offsets past the end of the table hold at the final (Day 4+) entry forever, per the doc.
 */
export function entryForOffset(offset) {
  if (offset < 0) return null;
  if (offset < TIMELINE.length) return TIMELINE[offset];
  return TIMELINE[TIMELINE.length - 1];
}
