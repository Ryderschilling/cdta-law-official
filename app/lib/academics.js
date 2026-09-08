// ============================================================
// CURRICULUM, ALUMNI AND STATISTICS
//
// All three were asked for by John and Irene through Dave on
// 2026-09-07. All three are EMPTY on purpose.
//
// cdtalaw.com publishes no course list, no alumni, and exactly one
// number ("Over 60%" on the FYLSX, with no period attached). None
// of it can be written from the outside.
//
// This is not caution for its own sake. CDTA is a State Bar
// registered, unaccredited law school. Its published curriculum,
// its outcome numbers and the people it claims as alumni are the
// material a prospective student uses to decide whether to spend
// four years and tens of thousands of dollars. Inventing a
// plausible course list or a plausible pass rate for a school in
// that position is a misrepresentation, not a placeholder.
//
// THE ROUTES ARE BUILT AND GUARDED. /curriculum and /alumni call
// notFound() while their array is empty, and add themselves to the
// navigation and the sitemap the moment it is not. Fill the arrays
// below and both pages go live on the next deploy. Nothing else
// needs to change.
//
// What to ask the Academy for is written out in
// CDTA-CONTENT-REQUEST.md in the project folder.
// ============================================================

// ------------------------------------------------------------
// CURRICULUM
// Shape:
//   { year: 'First Year',
//     note: 'optional line about the year',
//     courses: [{ title: 'Contracts', units: 4, description: '' }] }
// Units are optional; omit rather than guess.
// ------------------------------------------------------------
export const curriculum = [];

// ------------------------------------------------------------
// ALUMNI
// Shape:
//   { slug: 'jane-doe', name: 'Jane Doe', classYear: '2019',
//     practice: 'Criminal defense, Riverside County',
//     admitted: 'California, 2020',      // only if true and verifiable
//     bio: 'Two or three sentences in their own words.',
//     img: null }                        // school-supplied photo, never stock
//
// TWO RULES:
//  1. Nobody appears here without their permission. A law school
//     publishing a former student's name, employer and bar status
//     is publishing about a real person.
//  2. Never state or imply a bar passage outcome for an individual
//     unless the Academy confirms it in writing.
// ------------------------------------------------------------
export const alumni = [];

// ------------------------------------------------------------
// STATISTICS
// The one published figure is already handled in site.js under
// `outcomes` and carries its required qualifier. Anything added
// here needs the same three things or it does not go up:
//   label   — what the number counts, in the Academy's own words
//   value   — verbatim, never rounded ("Over 60%", not "60%")
//   period  — the years it covers. A rate with no period is not a
//             statistic, and this is the exact field the Academy
//             has never supplied.
//   source  — who published it (the Academy, or the State Bar)
// ------------------------------------------------------------
export const statistics = [];

export const hasCurriculum = () => curriculum.length > 0;
export const hasAlumni = () => alumni.length > 0;
