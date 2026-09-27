# What changed — rsv-lab-skd audit

Files in this folder replace the same-named files at the root of the
`rsv8lab/rsv-lab-skd` repo. Everything else in the repo (`_headers`,
`robots.txt`, `sitemap.xml`, `.gitignore`, `404.html`) was checked and
has no issues — leave those as they are.

## content.js
- Removed the `phone` field — a personal phone number that wasn't even
  rendered anywhere on the page, just sitting exposed in public source.
- Fixed a copy-paste bug: Sazal Das in `community.contributors` was
  pointing at Kamol's own GitHub avatar and profile URL. Replaced with
  a generated placeholder avatar and `url: "#"` — **swap in Sazal's
  real GitHub username** when you have it (search `TODO` in the file).

## _redirects
- `/about`, `/research`, `/tools`, `/team` previously rewrote to
  `about.html` / `research.html` / `tools.html` / `team.html` — none
  of which exist, since the whole site lives in one `index.html` with
  anchors. Those URLs were silently broken. Changed them to 301
  redirects straight to the matching anchor (`/#about`, etc.) so they
  actually work.

## index.html
- Added a `twitter:image` meta tag (was missing, even though
  `twitter:card` is set to `summary_large_image`).
- No other changes — the render script itself had no bugs.

## New files: apple-touch-icon.png, rsvlab-logo.png
- These were referenced in `index.html` (`<link rel="apple-touch-icon">`
  and `og:image`) but didn't exist in the repo, so the iOS home-screen
  icon and social-media link previews (Slack, X, Facebook, etc.) were
  silently broken. Generated both in the site's existing purple/navy
  brand — `rsvlab-logo.png` is a standard 1200×630 share image,
  `apple-touch-icon.png` is a 180×180 monogram icon. Feel free to swap
  either for a proper logo later; they just need to keep those exact
  filenames at the repo root, since `index.html` references them by name.

## One thing to know
`index.html`'s `<title>`, `og:description`, and `twitter:description`
are static text in the `<head>` — they do **not** update automatically
when you edit `content.js`, because search/social crawlers read the
raw HTML before your JavaScript runs. If you change the tagline or
description in `content.js`, update those three `<head>` tags in
`index.html` by hand to match, or they'll drift out of sync.
