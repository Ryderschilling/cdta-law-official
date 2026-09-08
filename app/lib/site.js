// ============================================================
// SITE DATA - single source of truth
// Every fact here is sourced from cdtalaw.com, the school's own
// published materials, or the State Bar of California.
// Nothing is invented. Anything flagged VERIFY must be confirmed
// by the school before launch. See HANDOFF.md.
// ============================================================

export const school = {
  name: 'California Desert Trial Academy College of Law',
  shortName: 'CDTA College of Law',
  initials: 'CDTA',
  tagline: 'Educating, training, and developing extraordinary legal advocates',
  phone: '(760) 342-0900',
  phoneRaw: '7603420900',
  email: 'Irene@CDTALAW.com', // Registrar, published on cdtalaw.com/admissions
  registrar: 'Irene Garcia Dolan',
  street: '45-290 Fargo Street',
  city: 'Indio',
  state: 'CA',
  zip: '92201',
  county: 'Riverside County',
  region: 'Coachella Valley',
  url: 'https://www.cdtalaw.com',
  social: {
    facebook: 'https://www.facebook.com/CDTALAW/',
    linkedin: 'https://www.linkedin.com/company/california-desert-trial-academy-college-of-law/',
    youtube: 'https://www.youtube.com/channel/UCQJoIf45N0nET3W7KiBxYVA'
  },
  // MCLE provider identity, published on cdtalaw.com/mcle
  mcleProvider: 'LawTalk™ / CDTA',
  mcleProviderNumber: '1167'
};

export const addressLine = `${school.street}, ${school.city}, ${school.state} ${school.zip}`;

// ============================================================
// REQUIRED DISCLOSURES
// The unaccredited-status disclosure is required by the State Bar
// of California and renders in the footer on EVERY page, plus
// prominently on every admissions and program page.
// The wording below is the school's own published language.
// DO NOT paraphrase, shorten, or remove it.
// ============================================================

export const UNACCREDITED_DISCLOSURE =
  'Study at, or graduation from, this law school may not qualify a student to take the bar examination or to satisfy the requirements for admission to practice in jurisdictions other than California.';

export const METHOD_OF_INSTRUCTION =
  'The method of instruction at this law school for the Juris Doctor (J.D.) degree program is principally in physical classroom facilities.';

export const FYLSX_DISCLOSURE =
  'Students enrolled in the J.D. degree program at this law school who successfully complete the first year of law study must pass the First-Year Law Students’ Examination required by Business and Professions Code section 6060(h) as part of the requirements to qualify to take the California Bar Examination. A student who passes the First-Year Law Students’ Examination within three (3) administrations of the examination after first becoming eligible to take it will receive credit for all law studies completed to the time the examination is passed. A student who does not pass the examination within three (3) administrations of the examination after first becoming eligible to take it must be promptly disqualified from the law school’s J.D. degree program. If the dismissed student subsequently passes the examination, the student is eligible for re-enrollment in this law school’s J.D. degree program, but will receive credit for only one year of legal study.';

export const OTHER_JURISDICTIONS =
  'A student intending to seek admission to practice law in a jurisdiction other than California should contact the admitting authority in that jurisdiction for information regarding its education and admission requirements.';

export const NONDISCRIMINATION =
  'Consistent with sound educational policy, CDTA College of Law does not discriminate on the basis of sex, race, color, ancestry, religious creed, national origin, disability, medical condition, age, marital status, political affiliation, gender identity, sexual orientation, or veteran status.';

export const FORM_NOTICE =
  'This form goes to the Admissions Office. It is not an application and it does not create any enrollment or contractual relationship. Please do not send financial account details, government identification numbers, or other sensitive information through this form.';

export const SERVICE_AREA =
  'The desert’s first and only law school. Proudly serving all of Southern California, accepting applications from Imperial, Los Angeles, Orange, Riverside, and San Bernardino Counties.';

// ============================================================
// OUTCOMES
// The single hard number the school publishes. State it exactly as
// the school states it. Never round up. Never imply a General Bar
// Examination passage rate, which the school does not publish.
// ============================================================
export const outcomes = {
  fylsxRate: 'Over 60%',
  fylsxLabel: 'of CDTA students passed the First-Year Law Students’ Examination',
  // The school's own comparative claim, quoted from cdtalaw.com
  fylsxContext:
    'The school states that its success rate is above the overall average for all registered, unaccredited fixed-facility law schools in California.',
  // VERIFY: cdtalaw.com does not state which administration(s) or which
  // years this figure covers. The school must supply the period before
  // launch, and it should be printed next to the number.
  fylsxPeriod: ''
};

// ============================================================
// PROGRAMS
// ============================================================
export const programs = [
  {
    slug: 'juris-doctor',
    num: '01',
    name: 'Juris Doctor Program',
    short: 'J.D. Program',
    teaser:
      'A four-year course of study built on California bar-tested subjects, skills training, and values reinforcement, taught inside a real courtroom.',
    meta:
      'Juris Doctor program at California Desert Trial Academy College of Law in Indio, CA. A four-year course of study in bar-tested subjects, taught in a real courtroom by practicing attorneys and judges.'
  },
  {
    slug: 'distance-learning',
    num: '02',
    name: 'Distance Learning Option',
    short: 'Distance Learning',
    teaser:
      'Live 50 miles or more from the Indio campus? Complete most of your studies from home and still earn your J.D.',
    meta:
      'Distance learning J.D. option at CDTA College of Law. Students living 50 miles or more from the Indio campus may complete most of their studies from home.'
  },
  {
    slug: 'bar-preparation',
    num: '03',
    name: 'Bar Preparation',
    short: 'Bar Prep',
    teaser:
      'Internal FYLSX course reviews, AdaptiBar, and ExamSoft, all included in tuition, so exam day is not the first time you sit under exam conditions.',
    meta:
      'Bar exam preparation at CDTA College of Law. First-Year Law Students’ Examination reviews, AdaptiBar, ExamSoft and simulated exam conditions included in tuition.'
  },
  {
    slug: 'saturday-enrichment',
    num: '04',
    name: 'Saturday Enrichment Program',
    short: 'Saturday Enrichment',
    teaser:
      'Direct and cross examination, opening and closing, motions and objections, practiced on Saturdays in the courtrooms on campus.',
    meta:
      'The Saturday Enrichment Program at CDTA College of Law: direct and cross examination, mock trials and advocacy skills practice in the courtrooms on the Indio campus.'
  }
];

// ============================================================
// MCLE
// California MCLE requirements as published by the State Bar of
// California. Requirements change; every MCLE page links to the
// State Bar so a visitor can confirm the current rule.
// VERIFY the hour figures against calbar.ca.gov at each launch and
// at the start of every compliance cycle.
// ============================================================
export const MCLE_TOTAL_HOURS = 25;
export const MCLE_CYCLE_YEARS = 3;
export const MCLE_STATE_BAR_URL =
  'https://www.calbar.ca.gov/Attorneys/MCLE-CLE/Requirements';

export const mcleSubjects = [
  {
    slug: 'legal-ethics',
    num: '01',
    name: 'Legal Ethics',
    hours: 4,
    teaser:
      'The largest single required block in the California cycle. Conflicts, confidentiality, fees, candour to the tribunal, and the duties that follow you out of the courtroom.',
    meta:
      'Legal ethics MCLE credit in Indio, CA from LawTalk / CDTA, State Bar approved MCLE provider #1167. Part of the required 25-hour California compliance cycle.'
  },
  {
    slug: 'competence-issues',
    num: '02',
    name: 'Competence Issues',
    hours: 2,
    teaser:
      'Recognizing and addressing the substance-use, stress and wellness issues that impair competent practice, in yourself and in colleagues.',
    meta:
      'Competence issues MCLE credit in Indio, CA from LawTalk / CDTA, State Bar approved MCLE provider #1167.'
  },
  {
    slug: 'elimination-of-bias',
    num: '03',
    name: 'Elimination of Bias',
    hours: 2,
    teaser:
      'Bias in the legal profession and in society, including a required hour on implicit bias and the strategies that reduce it.',
    meta:
      'Elimination of bias and implicit bias MCLE credit in Indio, CA from LawTalk / CDTA, State Bar approved MCLE provider #1167.'
  },
  {
    slug: 'technology-in-the-practice-of-law',
    num: '04',
    name: 'Technology in the Practice of Law',
    hours: 1,
    teaser:
      'Remote proceedings, electronic evidence, and the duty of competence as it applies to the tools now sitting on every practitioner’s desk.',
    meta:
      'Technology in the practice of law MCLE credit in Indio, CA from LawTalk / CDTA, State Bar approved MCLE provider #1167.'
  },
  {
    slug: 'civility',
    num: '05',
    name: 'Civility in the Legal Profession',
    hours: 1,
    teaser:
      'Professionalism toward opposing counsel, court staff, clients and colleagues, and why incivility is a case-management problem as much as a manners problem.',
    meta:
      'Civility MCLE credit in Indio, CA from LawTalk / CDTA, State Bar approved MCLE provider #1167.'
  }
];

// ============================================================
// TUITION
// Figures published on cdtalaw.com/admissions.
// VERIFY before launch. The published deposit and monthly payment
// schedule ($7,000 deposit, $1,000/mo in year one, $1,250/mo for the
// remaining 36 months) does not reconcile to the stated $60,000
// four-year total, so it is deliberately NOT rendered on the site.
// The Registrar must confirm the current schedule before it is added.
// ============================================================
export const tuition = {
  annual: '$15,000',
  total: '$60,000',
  years: 4,
  included: [
    'All textbooks for the full course of study',
    'A LexisNexis research license',
    'ExamSoft, the software used in the First-Year Law Students’ Examination and the General Bar Examination',
    'AdaptiBar, included with first-year tuition',
    'Internal First-Year Law Students’ Examination course reviews',
    'The Saturday Enrichment Program',
    'Weekly Barrister networking luncheons',
    'MCLE classes, for current students in good standing'
  ]
};

// ============================================================
// ADMISSIONS
// ============================================================
export const admissionRequirements = [
  {
    t: 'Be 18 years of age or older',
    s: 'There is no upper age limit and no traditional-student assumption built into the program.'
  },
  {
    t: 'Meet the pre-legal education requirement',
    s: 'Complete at least two years of undergraduate work, obtain 60 approved college credits, earn an Associate degree from a California Community College, or pass the equivalency examinations the State Bar accepts.'
  },
  {
    t: 'Achieve an appropriate LSAT score',
    s: 'The Admissions Office will tell you what is appropriate for the current entering class.'
  },
  {
    t: 'Complete an initial admissions application',
    s: 'A short first step that opens the file and starts the conversation.'
  },
  {
    t: 'Complete the comprehensive CDTA application',
    s: 'Qualified applicants are then invited to complete the full admissions application.'
  }
];

export const admissionPaths = [
  { tag: 'Path 01', h: 'Four-Year Degree Holders', p: 'Bachelor’s degree in hand? You are ready to apply to the J.D. program directly.' },
  { tag: 'Path 02', h: 'Two-Year Degree Holders', p: 'CDTA admits students holding a two-year degree. Your Associate degree opens the door.' },
  { tag: 'Path 03', h: '60+ Transferable Credits', p: 'No completed degree, but at least 60 transferable college credits? You qualify for admission consideration.' },
  { tag: 'Path 04', h: 'Distance Students', p: 'Living 50 miles or more from the Indio campus? Pursue your J.D. through the Distance Learning Option.' }
];

// The school's published "Top Ten Reasons", rewritten but not embellished.
export const tenReasons = [
  ['01', 'Your textbooks are included', 'Every textbook for the full course of study is covered by tuition. No separate book bill each term.'],
  ['02', 'LexisNexis is included', 'A research license from day one, so you learn to find and apply case authority the way practicing lawyers do.'],
  ['03', 'ExamSoft is included', 'Every practice, midterm and final exam is taken on the same software used in the First-Year Law Students’ Examination and the General Bar Examination.'],
  ['04', 'AdaptiBar is included in first-year tuition', 'Thousands of real bar examination questions, available while you are still in your first year.'],
  ['05', 'The Distance Learning Option', 'Students living 50 miles or more from campus can complete most of their studies from home and still earn the J.D.'],
  ['06', 'Internal FYLSX reviews are included', 'Substantive video reviews for the First-Year Law Students’ Examination, built into tuition rather than sold as an add-on.'],
  ['07', 'The Saturday Enrichment Program', 'Direct and cross examination, opening and closing, motions and objections, practiced in the courtrooms on campus.'],
  ['08', 'Student support that is real', 'Students and alumni share study strategies and advice on balancing school, work and home. Together they manage what would be impossible alone.'],
  ['09', 'Weekly Barrister luncheons', 'Every Saturday, students, attorneys and judicial officers eat together, swap experience, and build the network you will practice inside.'],
  ['10', 'A commitment to keeping you in school', 'Law school is partly an exercise in attrition. CDTA is built around helping students get past the obstacles rather than filtering them out.']
];

// ============================================================
// CAMPUS
// ============================================================
export const courtrooms = [
  { n: '01', h: 'A California Trial Courtroom', p: 'A fully functioning authentic California trial courtroom. It is where most instruction happens, so the room you learn in is the room you will one day work in.' },
  { n: '02', h: 'A California Appellate Courtroom', p: 'A realistic appellate courtroom for argument practice, where the questions come from the bench and there is no jury to persuade.' },
  { n: '03', h: 'A Federal Courtroom', p: 'An operational federal courtroom on the same campus, so federal practice is not an abstraction.' }
];

// Complete sentences: these are dropped straight into body copy, so they must
// not be lowercased (they carry weekday names) or have a full stop appended.
export const classSchedule = {
  evenings: 'Tuesday, Wednesday and Thursday evenings, 6:00 p.m. to 9:30 p.m.',
  saturday: 'Saturday, 8:30 a.m. to 3:00 p.m.'
};

// ============================================================
// FACULTY
// Bios sourced from cdtalaw.com/faculty. Photographs are marked
// placeholders. The school owes real photography before launch.
// ============================================================
export const faculty = [
  {
    slug: 'john-patrick-dolan',
    name: 'John Patrick Dolan',
    role: 'President, CEO & Dean',
    teaching: 'Founder',
    initials: 'JD',
    teaser:
      'A California criminal trial lawyer who has been practicing criminal defense for over forty years, and a State Bar Certified Specialist in Criminal Law. He co-founded CDTA to close the gap between what law schools teach and what a courtroom demands.',
    credentials: [
      'California State Bar Certified Specialist in Criminal Law',
      'J.D., Western State University College of Law, 1977',
      'B.A., California State University, Fullerton, 1971'
    ],
    detail: [
      'John Patrick Dolan is President, Chief Executive Officer and Dean of the California Desert Trial Academy College of Law, and a co-founder of the school.',
      'He has practiced criminal defense for over forty years and is a California State Bar Certified Specialist in Criminal Law, a designation held by a small fraction of California attorneys and awarded by the State Bar Board of Legal Specialization on the basis of examination, experience and peer review.',
      'CDTA grew out of conversations he and Irene Garcia Dolan had with the trial attorneys F. Lee Bailey and Gerry Spence, and out of a plain observation about legal education: law schools were producing graduates who understood doctrine and had never stood up in a courtroom.'
    ]
  },
  {
    slug: 'irene-garcia-dolan',
    name: 'Irene Garcia Dolan',
    role: 'Co-Founder & Registrar',
    teaching: 'Administration',
    initials: 'IG',
    teaser:
      'Co-founder of CDTA and the person who runs it day to day: admissions, eligibility, State Bar compliance and certifications. She is also President of LawTalk, MCLE.',
    credentials: [
      'Co-founder, California Desert Trial Academy College of Law',
      'President, LawTalk, MCLE, a continuing legal education provider for over 22 years'
    ],
    detail: [
      'Irene Garcia Dolan co-founded the California Desert Trial Academy College of Law and manages all aspects of the school, including admissions, student eligibility, State Bar compliance and certifications.',
      'She is President of LawTalk, MCLE, which has provided continuing legal education to California attorneys for over twenty-two years and is the State Bar approved MCLE provider behind CDTA’s MCLE program.',
      'She is the Registrar, and the person prospective students speak to first.'
    ]
  },
  {
    slug: 'sue-steding',
    name: 'Sue Steding',
    role: 'Dean of Students',
    teaching: 'Professor of Criminal Law',
    initials: 'SS',
    teaser:
      'Thirty-four years in the Riverside County District Attorney’s Office and more than a hundred cases tried. She teaches criminal law and looks after the students.',
    credentials: [
      'Licensed to practice in California since 1975',
      'J.D., University of San Diego, 1975',
      'B.A., cum laude, University of Washington, 1972'
    ],
    detail: [
      'Sue Steding is Dean of Students and Professor of Criminal Law at CDTA.',
      'She served the Office of the District Attorney of Riverside County for over thirty-four years and tried more than one hundred cases.',
      'She has been licensed to practice law in California since 1975.'
    ]
  },
  {
    slug: 'john-g-evans',
    name: 'Hon. John G. Evans, Ret.',
    role: 'Dean of Academic Excellence',
    teaching: 'Retired Judge, Riverside County Superior Court',
    initials: 'JE',
    teaser:
      'A judge of the Riverside County Superior Court from 2008 to 2024, and a civil litigator in private practice for the twenty-nine years before that.',
    credentials: [
      'Judge, Riverside County Superior Court, 2008 to 2024',
      'Civil litigation in private practice, 1979 to 2008',
      'J.D., Citrus Belt Law School, 1979',
      'B.S., University of California, Riverside'
    ],
    detail: [
      'Judge Evans is Dean of Academic Excellence at CDTA.',
      'He sat as a judge of the Riverside County Superior Court from his appointment in 2008 until 2024, and practiced civil litigation in private practice from 1979 to 2008.',
      'Students at CDTA argue in front of him. That is the point of the school.'
    ]
  },
  {
    slug: 'andrea-dolan-bouchard',
    name: 'Andrea Dolan Bouchard',
    role: 'Professor of Real Property Law',
    teaching: 'Criminal Defense Attorney',
    initials: 'AB',
    teaser:
      'A criminal defense attorney with Dolan Law Offices in Indio since 2012, who graduated first in her class academically from the College of the Desert Public Safety Academy.',
    credentials: [
      'J.D., Trinity Law School, 2011',
      'B.A., California State University San Bernardino, Palm Desert Campus, 2008',
      'Level III P.O.S.T. Certification'
    ],
    detail: [
      'Andrea Dolan Bouchard teaches real property law at CDTA.',
      'She has been a criminal defense attorney with Dolan Law Offices in Indio since 2012.',
      'She graduated first in her class academically from the College of the Desert Public Safety Academy and holds a Level III P.O.S.T. certification.'
    ]
  },
  {
    slug: 'peter-nolan',
    name: 'Peter Nolan',
    role: 'Professor of Evidence Law & Trial Advocacy',
    teaching: 'Of Counsel, Slovak, Baron, Empey, Murphy & Pinkney',
    initials: 'PN',
    teaser:
      'Nineteen years prosecuting for Riverside County, named Statewide Prosecutor of the Year in 2013, now Of Counsel in civil litigation and municipal law.',
    credentials: [
      '2013 Statewide Prosecutor of the Year',
      'Riverside County District Attorney’s Office, prosecutor, 1999 to 2018',
      'Of Counsel, Slovak, Baron, Empey, Murphy & Pinkney',
      'J.D., Loyola Law School, 1999',
      'B.A., Fresno State, 1992'
    ],
    detail: [
      'Peter Nolan teaches evidence law and trial advocacy at CDTA, which is to say he teaches the two subjects that decide most trials.',
      'He prosecuted for the Riverside County District Attorney’s Office from 1999 to 2018 and was named Statewide Prosecutor of the Year in 2013.',
      'He is Of Counsel with Slovak, Baron, Empey, Murphy & Pinkney in civil litigation, public agency and municipal law.'
    ]
  },
  {
    slug: 'charles-roby',
    name: 'Charles Roby',
    role: 'Professor of Criminal Procedure',
    teaching: 'Deputy Public Defender, Riverside County',
    initials: 'CR',
    teaser:
      'A Deputy Public Defender in Indio since 2013, teaching the procedure he uses in the Larson Justice Center every week.',
    credentials: [
      'Deputy Public Defender, Riverside County Public Defender’s Office, Indio, 2013 to present',
      'Criminal Defense Attorney, Dolan Law Offices, Indio, 2011 to 2013',
      'J.D., University of San Diego School of Law, 2011',
      'B.A., Bowling Green State University, 2007'
    ],
    detail: [
      'Charles Roby teaches criminal procedure at CDTA.',
      'He has been a Deputy Public Defender with the Riverside County Public Defender’s Office in Indio since 2013, and before that was a criminal defense attorney with Dolan Law Offices.'
    ]
  },
  {
    slug: 'alex-reed',
    name: 'Alex Reed',
    role: 'Professor of Contract Law',
    teaching: 'Principal, The Reed Firm',
    initials: 'AR',
    teaser:
      'Principal of The Reed Firm in Indio, practicing employment law and criminal defense, and teaching the contract doctrine underneath both.',
    credentials: [
      'Principal, The Reed Firm, Indio, 2018 to present',
      'J.D., magna cum laude, David A. Clarke School of Law, University of the District of Columbia, 2015',
      'B.A., Loyola Marymount University, 2006'
    ],
    detail: [
      'Alex Reed teaches contract law at CDTA.',
      'He is Principal of The Reed Firm in Indio, with a practice focused on employment law and criminal defense, and previously practiced civil litigation relating to employment law, including employment and service agreements and harassment and discrimination disputes.'
    ]
  },
  {
    slug: 'samuel-trussell',
    name: 'Samuel Trussell',
    role: 'Professor of Tort Law & Civil Procedure',
    teaching: 'Sole Practitioner, Law Offices of Samuel F. Trussell',
    initials: 'ST',
    teaser:
      'Practicing personal injury law since 1986, teaching torts and civil procedure from the plaintiff’s side of the room.',
    credentials: [
      'Practicing personal injury law since 1986',
      'Sole Practitioner, The Law Offices of Samuel F. Trussell',
      'J.D., Southwestern University School of Law, 1985',
      'B.A. and M.A., San Francisco State University'
    ],
    detail: [
      'Samuel Trussell teaches tort law and civil procedure at CDTA.',
      'He has practiced personal injury law since 1986 and is a sole practitioner at The Law Offices of Samuel F. Trussell.'
    ]
  },
  {
    slug: 'danielle-dye',
    name: 'Danielle Dye',
    role: 'Professor of Professional Responsibility & Ethics',
    teaching: 'Co-Founder, Blalock Dye Law, LLP',
    initials: 'DD',
    teaser:
      'A CDTA graduate, class of 2017, who came back to teach professional responsibility and ethics.',
    credentials: [
      'J.D., California Desert Trial Academy College of Law, 2017',
      'Co-founder, Blalock Dye Law, LLP'
    ],
    detail: [
      'Danielle Dye teaches professional responsibility and ethics at CDTA.',
      'She earned her J.D. at CDTA in 2017 and co-founded Blalock Dye Law, LLP.'
    ]
  },
  {
    slug: 'elizabeth-tucker',
    name: 'Hon. Elizabeth Tucker',
    role: 'Faculty',
    teaching: 'Judge, Riverside County Superior Court',
    initials: 'ET',
    teaser:
      'Twenty-three years as a Riverside County Deputy District Attorney, six as a court commissioner, and elected to the Superior Court bench in 2024.',
    credentials: [
      'Judge, Riverside County Superior Court, elected 2024',
      'Riverside County Superior Court Commissioner, 2018 to 2024',
      'Riverside County Deputy District Attorney, 1995 to 2018',
      'J.D., UC Law San Francisco (formerly UC Hastings College of the Law), 1995',
      'B.A., UC Santa Barbara, 1992'
    ],
    detail: [
      'Judge Tucker was elected to the Riverside County Superior Court in 2024, after six years as a Superior Court Commissioner and twenty-three years as a Riverside County Deputy District Attorney.'
    ]
  }
];

// Listed on cdtalaw.com/faculty without published credentials or bios.
// VERIFY: the school must supply titles and bios, or confirm removal.
export const additionalFaculty = [
  { name: 'Jenny Doling', role: '' },
  { name: 'Natalie Keller', role: 'Riverside County Superior Court Commissioner' },
  { name: 'Sheila Williams', role: '' },
  { name: 'Anyse Smith', role: '' },
  { name: 'Isabel Torres', role: '' },
  { name: 'Cindy Myers', role: '' }
];

// ============================================================
// 360 CAMPUS TOUR
// The Academy already has a CloudPano tour of the building, embedded
// on the old cdtalaw.com/campus page. It is the single most
// persuasive thing on that site: three real courtrooms you can walk
// through before you ever call.
//
// TO TURN IT ON: open the tour on the old site, right-click inside
// it and choose "Copy frame address", or get the share link from
// whoever owns the CloudPano account. Paste it as `url` below.
// Nothing else needs to change.
//
// NOTE FOR THE ACADEMY: the tour's own overlay currently reads
// "Dolan Law Offices" with John's direct phone and email, and every
// scene is labelled DolanLaw#6 through DolanLaw#16. Same building,
// but on a law school's campus page it reads as the wrong
// organisation. Worth re-branding inside CloudPano before launch.
// ============================================================
export const virtualTour = {
  url: null,
  title: 'Walk the trial, appellate and federal courtrooms'
};
