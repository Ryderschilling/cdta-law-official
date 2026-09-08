// ============================================================
// STUDENT INTAKE
// Requested by John and Irene through Dave, 2026-09-07:
// "the site requires a student intake form."
//
// The questions map one-to-one onto CDTA's published admission
// requirements in site.js. That is the point: the Registrar
// currently learns all of this on the phone, one applicant at a
// time, and the single question that decides most of it (which
// pre-legal education route you satisfy) is the one nobody thinks
// to answer in a contact-form message.
//
// THREE RULES, do not relax them:
//  1. This form NEVER tells anyone they are admitted, eligible,
//     qualified or likely to pass anything. It collects; the
//     Registrar decides. Any copy that drifts toward a verdict is
//     a misrepresentation by an unaccredited law school to a
//     prospective student, which is the exact thing the State Bar
//     disclosure regime exists to prevent.
//  2. The unaccredited-status disclosure appears on the page, in
//     full, in the standard Disclosure component. Not summarised.
//  3. Every question offers "Not sure." Most people asking about
//     law school do not know the answers yet, and forcing a guess
//     produces bad data and abandoned forms.
// ============================================================

export const INTAKE_NOTICE =
  'This form starts a conversation with the Admissions Office. It is not an application, it is not an offer of admission, and nothing here decides whether you are admitted. The Registrar reviews every response personally and will tell you what the next step is.';

export const steps = [
  {
    key: 'program',
    title: 'What you are looking at',
    questions: [
      {
        id: 'program',
        label: 'Which program are you asking about?',
        type: 'radio',
        options: [
          'Juris Doctor, on campus in Indio',
          'Juris Doctor, distance learning',
          'MCLE courses (I am already an attorney)',
          'Saturday Enrichment Program',
          'Not sure yet'
        ]
      },
      {
        id: 'start',
        label: 'When would you want to start?',
        type: 'radio',
        options: ['The next available term', 'Within a year', 'More than a year out', 'Just gathering information']
      },
      {
        id: 'schedule',
        label: 'CDTA runs evenings and Saturdays. Does that work with your situation?',
        type: 'radio',
        options: ['Yes', 'Evenings only', 'Saturdays only', 'I would need to work something out', 'Not sure']
      }
    ]
  },
  {
    key: 'background',
    title: 'Where you are now',
    questions: [
      {
        id: 'prelegal',
        label: 'California requires pre-legal education before law school. Which of these describes you?',
        // Straight off admissionRequirements in site.js. This is the question
        // that decides most files and the one nobody volunteers unprompted.
        options: [
          'Two or more years of undergraduate work',
          '60 or more approved college credits',
          'An Associate degree from a California Community College',
          'A bachelor’s degree or higher',
          'None of these yet',
          'Not sure'
        ],
        type: 'radio'
      },
      {
        id: 'lsat',
        label: 'Have you taken the LSAT?',
        type: 'radio',
        options: ['Yes', 'Registered for an upcoming date', 'Not yet', 'Not sure whether I need to']
      },
      {
        id: 'where',
        label: 'Where would you be studying from?',
        type: 'radio',
        options: [
          'The Coachella Valley',
          'Elsewhere in Riverside County',
          'Elsewhere in California',
          'Another state',
          'Outside the United States'
        ]
      },
      {
        id: 'working',
        label: 'Would you be working while you study?',
        type: 'radio',
        options: ['Yes, full time', 'Yes, part time', 'No', 'Not sure']
      }
    ]
  },
  { key: 'you', title: 'How to reach you', questions: [] } // contact fields, rendered by hand
];
