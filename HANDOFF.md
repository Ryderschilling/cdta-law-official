# CDTA College of Law: Build Handoff

California Desert Trial Academy College of Law.
Built by Ryder Schilling, Ryder Schilling LLC.

## Run it

```
cd "cdta-law-site"
npm install
npm run dev
```

## Deploy

```
npx vercel login
npx vercel link --scope ryder-schillings-projects
npx vercel --prod
```

Then in Vercel project settings, add:

```
RESEND_API_KEY=<from resend.com>
CONTACT_TO=Irene@CDTALAW.com
CONTACT_FROM=CDTA Website <website@cdtalaw.com>
```

Until `RESEND_API_KEY` is set, the inquiry form returns a polite
"call the Academy on (760) 342-0900" message instead of silently dropping
submissions. Verified: HTTP 503 with that exact message.

## What's here

45 build outputs, 44 pages plus the contact API. Everything statically
prerendered except `/api/contact`.

- `/` home, the approved mockup rebuilt
- `/about` the Academy, mission, the Ten Reasons, the three courtrooms
- `/campus`
- `/faculty` plus 11 individual faculty pages
- `/programs` plus `/juris-doctor`, `/distance-learning`, `/bar-preparation`,
  `/saturday-enrichment`, each with long-form content and its own FAQ schema
- `/mcle` plus a page for each of the 5 California required MCLE subjects
- `/admissions`, `/admissions/tuition`, `/admissions/apply`
- `/required-disclosures`, linked from the main footer and from the legal row,
  not orphaned
- `/blog` plus 6 posts
- `/contact`
- `/disclaimer`, `/privacy-policy`, `/accessibility`
- `/sitemap.xml` (41 URLs), `/robots.txt`
- 301 redirects from every old Wix URL

All content came off cdtalaw.com and the State Bar of California. Nothing was
invented. Everything the school still owes is flagged `VERIFY` in
`app/lib/site.js` and listed at the bottom of this document.

## Compliance built in

**This is a school, not a law firm. SB 37 does not apply and is not used here.**
There is no attorney-advertising footer and no responsible-attorney line. Do not
copy those across from the Dolan build.

**The unaccredited-status disclosure** is the one that matters, and it renders:

- in the footer, on every page, in bold
- again in a bordered `Disclosure` block on every admissions page and every
  program page
- in full on `/required-disclosures`
- inside the J.D. and distance-learning FAQ answers, so it also appears in the
  FAQ structured data Google reads

Verified by grepping the served HTML, not the source. All 41 HTML routes carry
the exact sentence. Occurrences: home 4, `/admissions` 6, `/programs/juris-doctor` 8,
`/required-disclosures` 6, `/blog` 2, the 404 page 1.

Exact wording, unchanged from the school's own filing:

> Study at, or graduation from, this law school may not qualify a student to take
> the bar examination or to satisfy the requirements for admission to practice in
> jurisdictions other than California.

**The other required disclosures** are on `/required-disclosures`: method of
instruction, the full First-Year Law Students' Examination three-administration
rule, admission in other jurisdictions, accreditation status, the
nondiscrimination statement, and the service area.

**MCLE.** Every MCLE page carries the provider approval line, LawTalk / CDTA,
State Bar of California approved MCLE provider number 1167, plus a link to
calbar.ca.gov and a line saying requirements change and the reader should confirm
their own. The five subject pages state the State Bar's own required hours
(4 ethics, 2 competence, 2 elimination of bias with 1 on implicit bias,
1 technology, 1 civility, inside 25 hours per three-year cycle), attributed to the
State Bar rather than to CDTA.

**Outcome claims.** The school publishes exactly one number and it is stated
exactly as the school states it: "Over 60%" passed the First-Year Law Students'
Examination. Every place that number appears, it is immediately followed by the
sentence that the FYLSX is not the California Bar Examination and that CDTA does
not publish a General Bar Examination passage rate. It is never rounded up and
never restated as a bar passage rate.

**FERPA.** No student portal, no login, no student records. Nothing in scope
triggers FERPA. If the school asks for a portal, price it separately and budget
for the FERPA work.

**ADA / WCAG 2.1 AA.** See the verification section. **CCPA** privacy policy with
know / delete / correct / opt-out plus a cookie banner that stores nothing until
the visitor chooses.

## Palette: what was measured and what changed

The CDTA mockup's dark palette held up far better than Dolan's did. Three pairs
were checked and corrected anyway:

| pair | mockup | result | now |
| --- | --- | --- | --- |
| footer meta `rgba(244,241,234,.35)` on ink | 2.96:1 | **FAILED** | `--dim #9c9b99`, 6.91:1 |
| light-section gold `#8a6d33` on paper | 4.31:1 | **FAILED** | `--gold-dark #7a6029`, 5.27:1 |
| body dim `rgba(244,241,234,.62)` | 6.91:1 | passed, but alpha over three different ink shades | solid `--dim #9c9b99` |
| dark dim `rgba(12,15,20,.62)` on paper | 5.19:1 | passed | solid `--dim-dark #5f6062`, 5.58:1 |
| gold `#c8a45c` on ink | 8.15:1 | passed, kept | unchanged |
| gold-bright `#e3c079` on ink | 11.04:1 | passed, kept | unchanged |
| ink on gold button | 8.15:1 | passed, kept | unchanged |

Alpha colors were replaced with solid tokens so the ratio does not drift when the
same text sits on `--ink`, `--ink-2` or `--ink-3`.

Then every rendered pair was measured, not just the tokens: a script walked every
text node on all 41 pages at 1280px and 390px, resolved the real composited
background through the ancestor chain, and computed the ratio.

**111 distinct foreground/background pairs. Every one passes.** Lowest four:

```
5.27  need 4.5  #7a6029 on #f4f1ea @12.5px   "Programs of Study"
5.58  need 4.5  #5f6062 on #f4f1ea @14.5px   body copy on the light section
6.58  need 4.5  #9c9b99 on #11151d @11px     breadcrumbs on interior heroes
6.91  need 4.5  #9c9b99 on #0c0f14 @10.5px   image placeholder captions
```

`--gold-line` is borders and rules only. It is never used for text.

## Photography

Everything visual is now in place and nothing is hotlinked. Seven licensed stock
images live in `/public/img/`, self-hosted as WebP, **532 KB for the whole set**:

| file | where | size |
| --- | --- | --- |
| `hero.webp` | home hero background | 89 KB |
| `cta.webp` | the big CTA band, every page | 156 KB |
| `columns.webp` | home mission frame, campus stack | 111 KB |
| `library.webp` | home courtroom stack, campus stack | 49 KB |
| `busts.webp` | about page stack | 82 KB |
| `books.webp` | home courtroom stack | 15 KB |
| `desk.webp` | about page stack | 15 KB |

Replace any file in place, keep the name, and the whole site updates. Every one is
served from our own origin, so nothing breaks if a third-party image host goes
away or is blocked on a visitor's network.

**Two rules were kept, and they matter:**

1. **No image claims to be a CDTA room, building or person.** Alt text is
   deliberately generic ("A law library corridor lined floor to ceiling with bound
   volumes", not "our trial courtroom"). The pages describe the real facilities in
   text; the photographs are atmospheric. When the Academy sends real campus
   photography, swap the files and tighten the alt text to match.
2. **Faculty portraits are not stock photos of strangers.** They render as a
   designed monogram: the professor's initials in the serif face inside a gold
   ring, on the Academy's own gradient, with the name beneath. It reads as a
   deliberate design choice rather than a missing image, and it stays honest.
   Replace with real headshots and the monogram disappears.

## Verification, and what it output

Run against a production build.

**1. `npx next build` from inside "Dave's projects", apostrophe and all**
Compiles clean, 45/45 static pages generated. The apostrophe problem is avoided
the same way as on Dolan: sitemap is a route handler at `app/sitemap.xml/route.js`
and robots is a static `public/robots.txt`. Do not convert them to the
`sitemap.js` / `robots.js` metadata conventions.

**2. Every route returns 200.** 43 routes checked, all 200. Old-URL redirects
return 308 with the correct Location, including the catch-all `/post/:slug` to
`/blog`. The 404 page returns 404 and still carries the required disclosure.

**3. Zero horizontal overflow, with the safety net removed.** `globals.css` sets
`html,body{overflow-x:clip}` as a backstop. That forces
`scrollWidth === clientWidth` to be true no matter how badly something overflows,
so asserting it proves nothing: `widths.mjs` strips the backstop first, then
measures. Run across all 41 routes:

```
320px  all routes fit          768px   all routes fit
360px  all routes fit          1024px  all routes fit
390px  all routes fit
414px  all routes fit
Nothing overflows even with the overflow-x:clip safety net removed.
```

The first honest run found two real blowouts the clip had been hiding:

- **`/mcle` at 360 to 414px was 480px over.** `.prose-body` is a grid item, and
  grid and flex items default to `min-width:auto`, which refuses to shrink below
  their content's min-content width and drags the whole `1fr` track wider than the
  screen. Fixed with `min-width:0` on `.prose-grid > *` and on the rail cards.
- **Every route was 3px over at 320px.** The three footer social buttons need
  301px side by side and could not shrink, pushing the footer past the viewport.
  Fixed with `flex-wrap` on `.foot-social` and `min-width:0` on the footer columns.

Two things in the mockup would also have broken this and were fixed earlier: the
giant outlined `Advocacy` word behind the story band is clipped by its section,
and the side reveals go vertical below 1024px because a 40px horizontal offset is
wider than a phone's page gutter.

**3b. Scroll reveals actually fire.** Every `.img-reveal` element carries a solid
ink `::after` panel that only slides away once the element gets `.in` from
`ScrollFX`. A headless pass scrolls each image section into view, waits, and
asserts the class landed, with no manual forcing anywhere in the script:

```
/            @1440   img-reveal on screen: 1, revealed: 1, still covered: 0
/            @1440   img-reveal on screen: 2, revealed: 2, still covered: 0
/            @390    img-reveal on screen: 1, revealed: 1, still covered: 0
/campus      @1440   img-reveal on screen: 2, revealed: 2, still covered: 0
/faculty     @1440   img-reveal on screen: 6, revealed: 6, still covered: 0
```

This test exists because the first build shipped with `.img-reveal` missing from
the `ScrollFX` selector list, which left the overlay in place forever and rendered
every image slot on the site as an empty box. Do not remove `.img-reveal` from
that `querySelectorAll` call.

**3c. The sidebar parks centred and never traps its own button.** The "at a
glance" card is sticky. A headless pass scrolls each sidebar page at six viewport
heights and measures where the card sits on every step:

```
1440 x 1200 / 1050 / 900   every page: centre 52-53%, drift 0%, fully visible
1440 x 820                 all but /mcle/legal-ethics centred; that one is taller
                           than the viewport, so its column scrolls instead
1440 x 760 / 700           short cards still centre; tall ones stay reachable
```

The card is centred whenever it fits and, when it does not, the column scrolls so
the Apply button can always be reached. It never sits underneath the fixed nav.

Two things had to be true for any of this to work:

- **The sticky element must be the grid item, not the card.** `.prose-grid` uses
  `align-items:start`, which makes each column exactly as tall as its content. A
  sticky card inside a column that is its own height has **0px of travel**, which
  is why this sidebar never stuck on any of the eight pages that use it.
  `.side-col` is now the sticky item and the card sits inside it.
- **`justify-content: safe center` rather than `center`.** Plain `center` overflows
  a too-tall card equally off both ends and hides the top under the nav with no way
  to scroll to it. `safe` falls back to flex-start the moment the content does not
  fit. Paired with `overflow-y:auto` on the column (scrollbar hidden), a tall card
  stays fully reachable.

Checked for regressions: the 100svh column does not inflate any grid row. The
shortest prose column on the site is 1104px, comfortably taller.

**3d. Tile grids reveal as a wave and never paint their empty cells.** Every card
grid on the site (ten reasons, programs, faculty, blog, MCLE subjects) uses a
shared `.tile` reveal: a 20px lift over 600ms, staggered left to right across each
row. Checked at three widths on six grids:

```
1440px   3 cols: delays 0 / .07 / .14s     2 cols: 0 / .07s
1100px   all grids 2 cols: 0 / .07s
700px    all grids 1 col: no delay, every tile is its own row
```

Two things worth knowing:

- **The stagger is CSS, keyed off an explicit `cols-2` / `cols-3` class on the
  grid.** It used to be index arithmetic in JSX (`i % 3`), which is only correct at
  one breakpoint: at two columns the wave order came out 0, 1, 2, 0, 1, 2 across
  rows of two and looked random. Change a grid's column count in CSS and you must
  change its `cols-*` class to match.
- **Hairlines are borders on the tiles, not a coloured grid background.** Ten tiles
  in a three-wide grid leaves two empty cells in the last row, and a grid that
  paints its own background renders those as a solid grey block. `/about`,
  `/faculty` and `/mcle` all shipped with that block. Empty cells now show the
  section behind them; the test asserts every grid's `background-color` is
  transparent.

**3e. Card grids become swipeable rails on a phone.** Below 760px every tile grid
turns into a horizontal, snap-scrolling rail: one card at a time with the next
peeking, full bleed to the screen edges. A stack of four 420px cards was a 1,700px
scroll for one section; a rail costs one screen. Checked on six rails at five
widths:

```
320 / 360 / 390 / 414 / 760px, six grids each:
  flex + overflow-x:auto, x-mandatory snap, swipes to the last card,
  every card reveals, rail is full bleed, keyboard focusable,
  page overflow while swiping: 0px at every step
```

Notes for changing it:

- **The rail is the scroll container, never the page.** It is pulled out by the
  page gutter and padded back in (`margin-inline: calc(var(--gutter) * -1)`),
  which is why `--gutter` is a token rather than a literal 22px.
- **`overscroll-behavior-x: contain`** stops a swipe past the last card from
  triggering the browser's back gesture on iOS.
- **`tabindex="0"` plus a name on each rail is not optional.** A scroll region
  that is not focusable cannot be reached by keyboard, so everything past the
  first card would be unreachable. The ten-reasons rail is an `<ol>` and keeps
  list semantics with a plain `aria-label`; the others take `role="group"`.
- **Body copy is line-clamped in a rail** so a card fits on screen. Tallest is now
  the faculty card at 556px against an 844px viewport. Without the clamp it was
  over 1,100px and swiping stopped being the interaction.

**3f. The mobile footer is 40% shorter.** It was 2,172px on an 844px phone: two and
a half screens, a fifth of the whole page. Now 1,307px at 390px wide.

```
                     before      after
footer total         2172px      1307px
  link grid          1083px       560px
  legal block         630px       402px
  bottom bar          188px       160px
page total          10510px      9645px
```

What did NOT change, deliberately:

- **All 15 footer nav links stay.** They are the internal linking the SEO retainer
  is sold on, and `display:none` on mobile would drop them from a mobile-first
  crawl. They moved from one column to two, with the Admissions column spanning
  and splitting its own links so it does not sit alone in a half-empty row.
- **The required disclosure is untouched** and still grepped from the served HTML
  on all 41 routes, along with the method-of-instruction and nondiscrimination
  statements.
- **Link rows stay at 44px.** That floor is not negotiable for a tap target, so the
  height came out of layout and typesetting instead.

Two paragraphs were cut from the footer at every breakpoint, not hidden on small
screens: the service-area line (old-site marketing, still on `/campus` and
`/required-disclosures`) and the campus address inside the legal block (duplicated
three inches above it in the Contact column). Cutting rather than hiding keeps
desktop and mobile identical to a crawler.

**4. Headings and images.** One `<h1>` per page on all 41 HTML routes, no
heading-level jumps, every `<img>` and `role="img"` carries alt text or an
`aria-label`, every iframe has a title, every link and button has an accessible
name, `lang="en"` everywhere.

**5. The disclosure renders on every page.** Grepped from the served HTML with
curl, JavaScript off. Zero missing.

**6. Contrast.** 111 pairs measured on the rendered pages, all passing. Numbers
above.

**7. The form.** Validates, submits, and degrades:

```
empty submit         4 field errors, status banner, focus moves to the first bad field
bad email            "That email address does not look right."
no contact method    400, "Please provide an email address or a phone number."
honeypot filled      200 {ok:true}, nothing sent
malformed JSON       400, "Invalid request."
no RESEND_API_KEY    503, "The inquiry form is not yet connected. Please call (760) 342-0900."
```

Errors are announced through an `aria-live="polite"` region. Every field is
reachable by Tab.

**8. Touch targets and font size.** Every interactive element is at least 44px on
its short side at 390px, and every form input is 16px so iOS does not zoom on
focus. Two deliberate exceptions, both allowed:

- inline links inside a sentence of running text (the WCAG inline exception)
- the consent checkbox is a 24px box inside a 44px-tall `<label>`, and the label
  is the click target

**Note for the Dolan site:** its contact form has a focus bug that this build
fixed. `document.querySelector('.field .err')` inside the submit handler runs
before React commits the error markup, finds nothing, and leaves focus where it
was. Fixed here with a `useEffect` on `errors`. Port the same fix to Dolan.

## Editorial decisions worth knowing

**The blog was consolidated from 10 posts to 6.** The old Wix blog had two posts
about small class sizes and two about non-traditional students, saying nearly the
same thing under different titles. That splits ranking signal and reads as filler.
The duplicates were merged and both old URLs 301 to the surviving post.

Two more were retired rather than migrated:

- The Dean profile post is now `/faculty/john-patrick-dolan` and redirects there.
- **The "Laurence H. Tribe Award" post was not republished.** It reads as a
  reproduced Cal State Fullerton alumni article, so the school probably does not
  own the text, and an award claim in education marketing has to be sourced before
  it goes back up. It redirects to the Dean's profile. This is the same claim that
  was pulled from the Dolan mockup for SB 37 reasons. If the school wants it back,
  they need to supply the source and permission.

**The tuition payment schedule is deliberately not published.** cdtalaw.com states
$15,000 a year, $60,000 over four years, a $7,000 deposit by mid-July, then
$1,000/month in year one and $1,250/month for the remaining 36 months. That adds
to $64,000, not $60,000. Publishing a schedule that does not reconcile is worse
than publishing none. The page shows the annual and total figures, says monthly
payment plans are available, and sends the reader to the Registrar for the current
schedule. **This needs resolving before launch.**

**MCLE course pages are per required subject, not per course.** The old site lists
no individual course titles, dates or prices, so inventing them was not an option.
The five pages map to the five California required subjects, which are factual and
citable, and each page carries the provider approval and links to the State Bar.
When the Academy supplies the real course calendar, drop it into `mcleSubjects` in
`site.js`.

## Before launch, the Academy must supply

1. **Photography.** Campus exterior, all three courtrooms, students in argument,
   and portraits for the 11 faculty pages. Everything is a marked placeholder now.
2. **The period the "Over 60%" figure covers.** cdtalaw.com does not say which
   administration or which years. `outcomes.fylsxPeriod` in `site.js` is empty and
   should be printed next to the number.
3. **The tuition payment schedule that reconciles.** See above.
4. **The official State Bar disclosure filing** as text or a PDF. The old site
   published it as two images, which cannot be read by a screen reader and cannot
   be indexed. `/required-disclosures` reproduces the standard language; the
   school's actual current filing should be linked or attached.
5. **Confirmation of the contact email.** `Irene@CDTALAW.com` was taken from the
   old admissions page. Confirm it is the right destination for web inquiries.
6. **Titles and bios for six faculty** listed with no detail on the old site:
   Jenny Doling, Natalie Keller, Sheila Williams, Anyse Smith, Isabel Torres,
   Cindy Myers. Or confirmation to remove them.
7. **The MCLE course calendar** with dates and pricing, if they want it on the site.
8. **Attorney review of all legal copy before launch.** Ryder is a web developer,
   not a lawyer. The disclosures, the disclaimer, the privacy policy and every
   statement about admission and bar eligibility need the school's sign-off. This
   belongs in the contract.

## Where to change things

Everything factual lives in `app/lib/site.js`: school details, the disclosure
strings, programs, MCLE subjects and hours, tuition, admission paths, faculty.
Long-form copy is in `app/lib/content.js` and `app/lib/posts.js`. Design tokens are
the `:root` block in `app/globals.css`, with the measured contrast ratios in the
comment above them.

## Known quirks

**Next.js cannot build from a folder path containing an apostrophe** when using
its `sitemap.js` / `robots.js` metadata conventions. Because this lives under
"Dave's projects", the sitemap is a route handler and robots is a static file.
Do not convert them back.

**This project lives inside an iCloud-synced folder, and iCloud fights the build.**
`~/Documents/Claude/...` is synced, so iCloud keeps making conflict copies of the
build output: `.next/server 2`, `.next/dev 2` and similar. Those duplicates are
undeletable through the sync layer and they make `next build` fail at the
finalization step with `EPERM: operation not permitted, unlink`.

It is a sync problem, not a code problem, and it will keep happening. Options, best
first:

1. Move the project out of the iCloud-synced tree, e.g. `~/Projects/cdta-law-site`.
   Git is the backup; iCloud does not need to see `node_modules` or `.next` anyway.
2. If it must stay put, `rm -rf .next` before each build, and when the delete
   fails, `mv .next .next-old` and build again.

Vercel builds from the git repo, so this never affects a deploy.
