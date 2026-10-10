// ─── AI LEGAL™ SCHOLARLY ARTICLES, RIGHTS, UPDATES & EXAM PREPARATION ─────────
// Source-grounded treatises, citizen remedial guides, gazette notices & judiciary exam modules
// Fully populated across all sub-filters without empty states or missing fields.

import { DEEP_LEGAL_ARTICLES_DATABASE, getArticlesForJurisdiction } from './articles/index.js';
import { ALL_RIGHTS_REMEDIES, getRemediesForJurisdiction } from './remedies/index.js';
import { ALL_LEGAL_UPDATES, getUpdatesForJurisdiction } from './updates/index.js';

// ═══════════════════════════════════════════════════════════════════════════
// 1. LEGAL ARTICLES & DOCTRINAL TREATISES (16 MASTERCLASS TREATISES)
// ═══════════════════════════════════════════════════════════════════════════
export const LEGAL_ARTICLES_DATABASE = DEEP_LEGAL_ARTICLES_DATABASE;
export { getArticlesForJurisdiction };

// ═══════════════════════════════════════════════════════════════════════════
// 2. RIGHTS, REMEDIES & CITIZEN LEGAL EMPOWERMENT (30 DEEP REMEDIES)
// ═══════════════════════════════════════════════════════════════════════════
export const RIGHTS_REMEDIES_DATABASE = ALL_RIGHTS_REMEDIES;
export { getRemediesForJurisdiction };

// ═══════════════════════════════════════════════════════════════════════════
// 3. STATUTORY UPDATES & GAZETTE AMENDMENTS (25 DEEP VERIFIED UPDATES)
// ═══════════════════════════════════════════════════════════════════════════
export const LEGAL_UPDATES_DATABASE = ALL_LEGAL_UPDATES;
export { getUpdatesForJurisdiction };


// ═══════════════════════════════════════════════════════════════════════════
// 4. LEGAL EDUCATION, JUDICIARY & EXAM PREPARATION
// ═══════════════════════════════════════════════════════════════════════════
export const EXAM_PREPARATION_DATABASE = [
  {
    id: 'exam-judiciary-pcs-j',
    title: 'Judicial Services Examination (PCS-J) Preliminary Mastery Module: Criminal Major Acts',
    category: 'Judicial Services Examination (PCS-J)',
    examTarget: 'State Judicial Services (Delhi, UP, MP, Bihar, Rajasthan, Maharashtra)',
    subject: 'BNS 2023, BNSS 2023, BSA 2023, IPC & CrPC Transitions',
    description: 'High-yield conceptual diagnostic questions, statutory sections, landmark precedents, and analytical reasoning keys curated for judicial magistrates and civil judges.',
    questionsCount: '15 High-Yield Diagnostic MCQs',
    tags: ['judiciary-services', 'judiciary', 'pcs-j', 'prelims', 'mains', 'judgment writing', 'civil judge'],
    sampleQuestions: [
      {
        q: 'Under Section 101(2) of the Bharatiya Nyaya Sanhita (BNS), 2023, when murder is committed by five or more persons acting in concert on grounds of race, caste, community, or personal belief, what is the prescribed punishment?',
        opts: [
          'A. Imprisonment for not less than 10 years and fine.',
          'B. Death or imprisonment for life, and shall also be liable to fine.',
          'C. Imprisonment up to 7 years with community service.',
          'D. Rigorous imprisonment for 14 years.'
        ],
        ans: 'B. Death or imprisonment for life, and shall also be liable to fine.',
        rationale: 'Section 101(2) BNS codifies mob lynching as an aggravated form of murder, prescribing death or imprisonment for life along with a mandatory fine.'
      },
      {
        q: 'Under Section 187(3) of BNSS 2023 (Old Section 167(2) CrPC), what is the maximum detention period beyond which an accused acquires an indefeasible right to default bail in offences punishable with death, life, or imprisonment not less than 10 years?',
        opts: [
          'A. 60 days',
          'B. 90 days',
          'C. 120 days',
          'D. 180 days'
        ],
        ans: 'B. 90 days',
        rationale: 'Section 187(3) BNSS provides for statutory default bail upon expiry of 90 days for serious offences where investigation is not concluded within that period.'
      },
      {
        q: 'Which landmark Supreme Court judgment laid down the comprehensive 11-point guidelines governing arrest and custodial interrogation to prevent torture?',
        opts: [
          'A. A.K. Gopalan v. State of Madras',
          'B. D.K. Basu v. State of West Bengal',
          'C. Maneka Gandhi v. Union of India',
          'D. Hussainara Khatoon v. Home Secretary, Bihar'
        ],
        ans: 'B. D.K. Basu v. State of West Bengal',
        rationale: 'In D.K. Basu (1997) 1 SCC 416, the Supreme Court laid down mandatory requirements for arrest including identification tags, arrest memo, notification to relatives, and medical examination.'
      },
      {
        q: 'Under Section 4(f) of the BNS 2023, which new punishment has been introduced into Indian penal jurisprudence for minor offences like defamation?',
        opts: [
          'A. Solitary Confinement',
          'B. Community Service',
          'C. Deportation',
          'D. Electronic Tagging'
        ],
        ans: 'B. Community Service',
        rationale: 'Section 4(f) BNS adds Community Service as a formal punishment category for minor infractions.'
      }
    ]
  },

  {
    id: 'exam-clat-llm-constitutional',
    title: 'CLAT PG & LL.M. Entrance: Advanced Constitutional Law & Jurisprudence',
    category: 'CLAT PG & LL.M. Entrance',
    examTarget: 'Consortium of NLUs (CLAT PG), AILET LL.M., Delhi University LL.M.',
    subject: 'Constitutional Law, Jurisprudence, International Law & Landmark Benches',
    description: 'Comprehension-based questions testing judicial interpretation, transformative constitutionalism, Basic Structure evolution, and jurisprudential schools.',
    questionsCount: '12 Advanced Analytical MCQs',
    tags: ['clat-llm', 'clat', 'llm', 'postgraduate', 'comprehension', 'constitutional law'],
    sampleQuestions: [
      {
        q: 'In which landmark case did the Supreme Court hold that the "Basic Structure" doctrine applies to Constitutional Amendments but cannot be invoked to strike down ordinary statutory legislation?',
        opts: [
          'A. State of Karnataka v. Union of India (1977)',
          'B. Indira Nehru Gandhi v. Raj Narain (1975)',
          'C. State of Bihar v. Bal Mukund Sah (2000)',
          'D. Kuldip Nayar v. Union of India (2006)'
        ],
        ans: 'B. Indira Nehru Gandhi v. Raj Narain (1975)',
        rationale: 'The Supreme Court held that ordinary legislation is tested against Part III and legislative competence, whereas the Basic Structure doctrine tests the constituent power under Article 368.'
      },
      {
        q: 'The principle of "Transformative Constitutionalism" was prominently articulated by Chief Justice Dipak Misra in which landmark constitutional bench judgment?',
        opts: [
          'A. Navtej Singh Johar v. Union of India (2018)',
          'B. Shayara Bano v. Union of India (2017)',
          'C. Joseph Shine v. Union of India (2018)',
          'D. All of the above'
        ],
        ans: 'D. All of the above',
        rationale: 'Transformative constitutionalism guided the decriminalization of Section 377 (Navtej Johar), striking down Triple Talaq (Shayara Bano), and striking down adultery (Joseph Shine).'
      }
    ]
  },

  {
    id: 'exam-aibe-bar-exam',
    title: 'All India Bar Examination (AIBE) Module: Professional Ethics & Procedural Law',
    category: 'All India Bar Examination (AIBE)',
    examTarget: 'Bar Council of India Certificate of Practice (COP)',
    subject: 'BCI Rules, Advocates Act 1961, CPC, CrPC / BNSS, Arbitration & Contempt',
    description: 'Practical scenario-based practice questions reflecting the Bar Council syllabus on advocate conduct, client privilege, and court decorum.',
    questionsCount: '10 High-Yield Exam MCQs',
    tags: ['aibe-bar-exam', 'aibe', 'bar council', 'advocate exam', 'qualifying'],
    sampleQuestions: [
      {
        q: 'Under Rule 20 of Section II of the Bar Council of India Rules, an advocate shall NOT accept a brief or appear in a matter where:',
        opts: [
          'A. The client is indigent and cannot pay full fees.',
          'B. The advocate is himself a material witness.',
          'C. The matter is against a Government Department.',
          'D. The matter involves a criminal offence punishable with life.'
        ],
        ans: 'B. The advocate is himself a material witness.',
        rationale: 'An advocate must decline a brief if they have reason to believe that they will be a witness in the case, preserving advocate independence.'
      },
      {
        q: 'Under Section 35 of the Advocates Act, 1961, who possesses the disciplinary power to reprimand, suspend, or remove an advocate from the state roll for professional misconduct?',
        opts: [
          'A. High Court Single Judge Bench',
          'B. Disciplinary Committee of the State Bar Council',
          'C. Chief Judicial Magistrate',
          'D. District & Sessions Judge'
        ],
        ans: 'B. Disciplinary Committee of the State Bar Council',
        rationale: 'Section 35 empowers the Disciplinary Committee of the State Bar Council to conduct inquiries and impose sanctions for professional misconduct.'
      }
    ]
  },

  {
    id: 'exam-practice-mcqs-diagnostic',
    title: 'Comprehensive Multi-Subject Self-Assessment Diagnostic Test',
    category: 'Self-Assessment MCQs with Answers',
    examTarget: 'Judiciary, CLAT, AIBE & Law School Terminals',
    subject: 'Contract Law, Tort Law, Evidence & Civil Procedure',
    description: 'Interactive diagnostic quiz with full step-by-step ratio decidendi and statutory cross-references.',
    questionsCount: '10 High-Yield Diagnostic MCQs',
    tags: ['practice-mcqs', 'mcq', 'quiz', 'multiple choice', 'question', 'assessment'],
    sampleQuestions: [
      {
        q: 'Under the Indian Contract Act, 1872, an agreement in restraint of trade is void under Section 27, EXCEPT in the case of:',
        opts: [
          'A. Sale of Goodwill of a business with reasonable territorial limits.',
          'B. Employment contracts preventing post-termination competition.',
          'C. Agreements between competing traders to fix commodity prices.',
          'D. Exclusive marketing partnerships.'
        ],
        ans: 'A. Sale of Goodwill of a business with reasonable territorial limits.',
        rationale: 'Section 27 contains a solitary statutory exception permitting reasonable restrictions on trade upon the sale of the goodwill of a business.'
      },
      {
        q: 'In the law of Torts, the doctrine of "Absolute Liability" without any exceptions was established in India in which landmark judgment?',
        opts: [
          'A. Rylands v. Fletcher (1868)',
          'B. M.C. Mehta v. Union of India (Oleum Gas Leak Case, 1987)',
          'C. Donoghue v. Stevenson (1932)',
          'D. Municipal Corporation of Delhi v. Subhagwanti (1966)'
        ],
        ans: 'B. M.C. Mehta v. Union of India (Oleum Gas Leak Case, 1987)',
        rationale: 'Chief Justice P.N. Bhagwati held that enterprises engaged in hazardous or inherently dangerous activities owe an absolute and non-delegable duty to the community, rejecting the exceptions in Rylands v. Fletcher.'
      }
    ]
  },

  {
    id: 'exam-high-yield-latin-maxims',
    title: 'High-Yield Latin Maxims & Legal Canons for Judicial Services & CLAT',
    category: 'High-Yield Latin Maxims for Exams',
    examTarget: 'Judiciary (Prelims), CLAT PG, AIBE',
    subject: 'Latin Maxims, Canons of Statutory Interpretation & Case Law Origins',
    description: 'Exhaustive compilation of high-frequency Latin maxims with literal translations, plain-English meanings, and Supreme Court citations.',
    questionsCount: '8 High-Frequency Exam Maxims',
    tags: ['legal-maxims-exam', 'maxim', 'latin', 'ratio', 'audi alteram', 'res judicata'],
    sampleQuestions: [
      {
        q: 'What is the literal translation and legal effect of the Latin maxim "Damnum Sine Injuria"?',
        opts: [
          'A. Injury caused without financial damage — actionable per se.',
          'B. Actual damage or loss suffered without the violation of a legal right — not actionable in tort.',
          'C. An unlawful act committed in emergency.',
          'D. A criminal offence without guilty mind.'
        ],
        ans: 'B. Actual damage or loss suffered without the violation of a legal right — not actionable in tort.',
        rationale: 'As established in the Gloucester Grammar School case (1410), mere financial loss caused by lawful competition without infringement of a legal right gives no cause of action.'
      },
      {
        q: 'The maxim "Nemo Debet Bis Vexari Pro Una Et Eadem Causa" forms the jurisprudential foundation of which fundamental right and procedural doctrine?',
        opts: [
          'A. Right to Equality & Writ of Quo Warranto',
          'B. Protection against Double Jeopardy (Article 20(2)) & Res Judicata (Section 11 CPC)',
          'C. Freedom of Speech & Defamation',
          'D. Right to Constitutional Remedies under Article 32'
        ],
        ans: 'B. Protection against Double Jeopardy (Article 20(2)) & Res Judicata (Section 11 CPC)',
        rationale: 'The maxim translates to "No one ought to be twice vexed for one and the same cause", underpinning Article 20(2) Constitution and Section 11 CPC.'
      }
    ]
  },

  {
    id: 'exam-quick-revision-notes',
    title: '1-Minute Revision Takeaways: Core Legal Doctrines & Statutory Tables',
    category: '1-Minute Revision Takeaways',
    examTarget: 'Quick Revision for Advocates & Aspirants',
    subject: 'Fundamental Rights, BNS Sections, CPC Orders & Limitation Timelines',
    description: 'Ultra-compressed, high-yield statutory summary cards designed for rapid last-minute recall before courtroom appearances or examinations.',
    questionsCount: '5 Core Takeaways Modules',
    tags: ['quick-revision-notes', 'revision', 'summary', 'flashcards', 'takeaways', 'quick notes'],
    sampleQuestions: [
      {
        q: 'Quick Check: Under Order VII Rule 11 of the CPC, which of the following is a mandatory ground for the rejection of a civil plaint?',
        opts: [
          'A. Where the plaintiff fails to file duplicate copies of the plaint.',
          'B. Where the suit appears from the statement in the plaint to be barred by any law.',
          'C. Where the plaint does not disclose a cause of action.',
          'D. All of the above.'
        ],
        ans: 'D. All of the above.',
        rationale: 'Order VII Rule 11 CPC mandates rejection of plaint on grounds (a) to (f) including non-disclosure of cause of action and bar by limitation or other statutory law.'
      }
    ]
  }
];
