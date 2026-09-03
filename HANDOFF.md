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

**No stock photos of strangers standing in for real people.** Every image slot is
a marked placeholder component that announces itself to screen readers as
"Placeholder image: <what goes here>. Photography to be supplied by the Academy."
Faculty pages say so in plain text on the page as well.

Three background photos are still hotlinked stock (hero, the big CTA band). They
are marked at the top of `globals.css`. Replace them, move them to `/public/img/`,
and the LCP improves at the same time.

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

**3. Zero horizontal overflow.** Headless Chromium, 26 routes at 320, 360, 390,
414, 768 and 1024 px, asserting `document.documentElement.scrollWidth === clientWidth`:

```
320px  all 26 routes fit
360px  all 26 routes fit
390px  all 26 routes fit
414px  all 26 routes fit
768px  all 26 routes fit
1024px all 26 routes fit
No horizontal overflow at any tested width.
```

Two things in the mockup would have broken this and were fixed before they could:
the giant outlined `Advocacy` word behind the story band is clipped by its
section, and the side reveals go vertical below 1024px because a 40px horizontal
offset is wider than a phone's page gutter.

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

**`.next-STALE-DELETE-ME/`** is a leftover build directory that the session's
file mount refuses to delete: it contains an empty `server 2` folder that reports
"Directory not empty" to every removal attempt. It is a mount artifact, not a code
problem, and it is gitignored. Delete it in Finder.
