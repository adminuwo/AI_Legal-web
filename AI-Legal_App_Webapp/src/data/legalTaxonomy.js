// ─── AI LEGAL™ COMPREHENSIVE LEGAL TAXONOMY & INFORMATION ARCHITECTURE ──────
// Dual Navigation System: 10 Primary Content Types + 38+ Core Legal Subjects

/**
 * @typedef {Object} ContentTypeItem
 * @property {string} id
 * @property {string} name
 * @property {string} shortName
 * @property {string} iconName
 * @property {string} [badge]
 * @property {string} description
 * @property {string} kicker
 */

export const PRIMARY_CONTENT_TYPES = [
  {
    id: 'ALL',
    name: 'Explore All Law',
    shortName: 'Explore Law',
    iconName: 'Sparkles',
    badge: 'Overview',
    description: 'Universal discovery across Bare Acts, landmark judgments, procedural workflows, legal drafts, and study treatises.',
    kicker: 'AI LEGAL™ UNIVERSAL REPOSITORY'
  },
  {
    id: 'BARE_ACTS',
    name: 'Bare Acts, Laws & Rules',
    shortName: 'Bare Acts & Rules',
    iconName: 'BookOpen',
    badge: '395+ Statutes',
    description: 'Official verbatim statutory enactments, BNS/BNSS/BSA transition codes, central acts, state amendments, and subordinate rules.',
    kicker: 'STATUTORY ENACTMENTS'
  },
  {
    id: 'CASE_LAWS',
    name: 'Case Laws & Judgments',
    shortName: 'Case Laws',
    iconName: 'Gavel',
    badge: 'Landmark Rulings',
    description: 'Exhaustive Supreme Court and High Court judgments with verified facts, issues, submissions, ratio decidendi, and subsequent citations.',
    kicker: 'JUDICIAL PRECEDENTS'
  },
  {
    id: 'ARTICLES',
    name: 'Legal Articles & Guides',
    shortName: 'Articles & Guides',
    iconName: 'FileText',
    badge: 'Commentaries',
    description: 'Deep analytical commentaries, doctrinal treatises, legal analysis by senior advocates, and comparative jurisprudence.',
    kicker: 'LEGAL SCHOLARSHIP'
  },
  {
    id: 'PROCEDURES',
    name: 'Court Procedures & Practice',
    shortName: 'Court Procedures',
    iconName: 'Scale',
    badge: 'Litigation Flow',
    description: 'Step-by-step litigation workflows, forum selection, limitation periods, court fees, filing checklists, and procedural caveats.',
    kicker: 'ADVOCATE PRACTICE PIPELINE'
  },
  {
    id: 'DRAFTING',
    name: 'Legal Drafting & Document Library',
    shortName: 'Drafting Library',
    iconName: 'FileSignature',
    badge: 'Pleadings & Forms',
    description: 'Court-ready petitions, bail applications, commercial notices, civil plaints, written statements, and contractual clauses.',
    kicker: 'PLEADING & DRAFTING SUITE'
  },
  {
    id: 'RIGHTS_REMEDIES',
    name: 'Rights, Remedies & Legal Help',
    shortName: 'Rights & Remedies',
    iconName: 'ShieldCheck',
    badge: 'Citizen & Counsel',
    description: 'Actionable legal rights, constitutional writs, consumer grievance mechanisms, criminal protection, and emergency remedies.',
    kicker: 'REMEDIAL JURISPRUDENCE'
  },
  {
    id: 'LEGAL_UPDATES',
    name: 'Legal Updates & Amendments',
    shortName: 'Legal Updates',
    iconName: 'Bell',
    badge: 'Live Gazettes',
    description: 'Gazette notifications, statutory amendments, high court circulars, new regulatory guidelines, and BNS implementation advisories.',
    kicker: 'STATUTORY AMENDMENTS'
  },
  {
    id: 'DICTIONARY',
    name: 'Legal Dictionary & Research Reference',
    shortName: 'Legal Dictionary',
    iconName: 'Library',
    badge: 'Latin Maxims',
    description: 'Authoritative legal dictionary, Latin maxims, statutory terms defined by courts, legal abbreviations, and citation deciphering.',
    kicker: 'RESEARCH REFERENCE'
  }
];

export const CORE_LEGAL_SUBJECTS = [
  {
    id: 'constitutional-law',
    name: 'Constitutional Law of India',
    category: 'Public & Constitutional Law',
    icon: '🏛️',
    description: 'Preamble, Fundamental Rights, DPSP, Writs (Art. 32/226), Executive Powers, Judiciary, Federal Structure & Amendments.',
    tagCount: '395 Articles',
    featuredAct: 'Constitution of India, 1950'
  },
  {
    id: 'criminal-law',
    name: 'Criminal Law (BNS & IPC)',
    category: 'Criminal & Procedural Law',
    icon: '⚖️',
    description: 'Offences against body, property, state, public order; Bharatiya Nyaya Sanhita, 2023 transition from Indian Penal Code, 1860.',
    tagCount: '358 Sections',
    featuredAct: 'Bharatiya Nyaya Sanhita (BNS), 2023'
  },
  {
    id: 'criminal-procedure',
    name: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)',
    category: 'Criminal & Procedural Law',
    icon: '🛡️',
    description: 'Arrest, investigation, electronic FIR, charge sheet, regular & anticipatory bail, summary trials, BNSS vs CrPC comparative code.',
    tagCount: '531 Sections',
    featuredAct: 'BNSS, 2023 / CrPC, 1973'
  },
  {
    id: 'evidence-law',
    name: 'Bharatiya Sakshya Adhiniyam (BSA)',
    category: 'Procedural & Adjectival Law',
    icon: '🔍',
    description: 'Electronic evidence, primary/secondary evidence, burden of proof, confessions, BSA, 2023 replacing Indian Evidence Act, 1872.',
    tagCount: '170 Sections',
    featuredAct: 'Bharatiya Sakshya Adhiniyam, 2023'
  },
  {
    id: 'civil-procedure',
    name: 'Civil Procedure (CPC, 1908)',
    category: 'Civil & Commercial Law',
    icon: '📜',
    description: 'Suits, jurisdiction, res judicata, pleadings (Order VI/VII/VIII), temporary injunctions (Order 39), execution, appeals & revisions.',
    tagCount: '158 Sections & 51 Orders',
    featuredAct: 'Code of Civil Procedure, 1908'
  },
  {
    id: 'contract-law',
    name: 'Contract & Commercial Law',
    category: 'Commercial & Corporate Law',
    icon: '🤝',
    description: 'Formation, free consent, lawful consideration, void agreements, breach, damages (Sec 73), specific relief, indemnity & guarantee.',
    tagCount: '238 Sections',
    featuredAct: 'Indian Contract Act, 1872'
  },
  {
    id: 'corporate-law',
    name: 'Corporate & Company Law',
    category: 'Commercial & Corporate Law',
    icon: '🏢',
    description: 'Incorporation, directors duties, board meetings, oppression & mismanagement (Sec 241/242), NCLT/NCLAT jurisdiction, mergers & CSR.',
    tagCount: '470 Sections',
    featuredAct: 'Companies Act, 2013'
  },
  {
    id: 'property-law',
    name: 'Property, Land & Registration Law',
    category: 'Property & Real Estate',
    icon: '🏡',
    description: 'Sale, mortgage, lease, actionable claims, lis pendens, registration requirements, easement rights, land ceiling & title verification.',
    tagCount: '137 Sections',
    featuredAct: 'Transfer of Property Act, 1882'
  },
  {
    id: 'family-law',
    name: 'Family & Matrimonial Law',
    category: 'Personal & Family Law',
    icon: '👨‍👩‍👦',
    description: 'Hindu Marriage Act, Special Marriage Act, divorce, custody, adoption, Muslim personal law, maintenance under Sec 125/BNSS, DV Act.',
    tagCount: 'Personal Statutes',
    featuredAct: 'Hindu Marriage Act, 1955 & Personal Laws'
  },
  {
    id: 'consumer-law',
    name: 'Consumer Protection Law',
    category: 'Civil Wrongs & Regulatory Law',
    icon: '🛍️',
    description: 'Deficiency in service, unfair trade practices, product liability, e-commerce rules, District, State & National Commissions (NCDRC).',
    tagCount: '107 Sections',
    featuredAct: 'Consumer Protection Act, 2019'
  },
  {
    id: 'cyber-law',
    name: 'Cyber Law & Data Protection (DPDPA)',
    category: 'Technology & Privacy Law',
    icon: '💻',
    description: 'IT Act 2000, hacking, electronic contracts, Digital Personal Data Protection Act 2023, data fiduciaries, consent managers, cyber appeals.',
    tagCount: 'IT Act & DPDPA 2023',
    featuredAct: 'Digital Personal Data Protection Act, 2023'
  },
  {
    id: 'ipr-law',
    name: 'Intellectual Property Rights (IPR)',
    category: 'Commercial & Innovation Law',
    icon: '💡',
    description: 'Trademarks Act 1999, Patents Act 1970, Copyright Act 1957, trade secrets, passing off, patent infringement, IP appellate boards.',
    tagCount: 'Patents / TM / Copyright',
    featuredAct: 'Trademarks Act, 1999 & Patents Act'
  },
  {
    id: 'arbitration-adr',
    name: 'Arbitration, Mediation & ADR',
    category: 'Dispute Resolution',
    icon: '⚖️',
    description: 'Section 9 interim measures, Section 11 arbitrator appointments, Section 34 set-aside petitions, Mediation Act 2023, international arbitration.',
    tagCount: '86 Sections',
    featuredAct: 'Arbitration & Conciliation Act, 1996'
  },
  {
    id: 'insolvency-law',
    name: 'Insolvency & Bankruptcy (IBC, 2016)',
    category: 'Commercial & Financial Law',
    icon: '📉',
    description: 'Section 7/9 CIRP initiation, moratorium (Sec 14), resolution plans, liquidation, personal guarantors, NCLT insolvency proceedings.',
    tagCount: '255 Sections',
    featuredAct: 'Insolvency & Bankruptcy Code, 2016'
  },
  {
    id: 'ni-act-law',
    name: 'Negotiable Instruments (Section 138)',
    category: 'Commercial & Criminal Law',
    icon: '🏦',
    description: 'Cheque dishonour, statutory notice within 30 days, 15-day cure period, presumptions under Sec 118/139, interim compensation (Sec 143A).',
    tagCount: '148 Sections',
    featuredAct: 'Negotiable Instruments Act, 1881'
  },
  {
    id: 'taxation-gst',
    name: 'Taxation, Income Tax & GST',
    category: 'Fiscal & Revenue Law',
    icon: '📊',
    description: 'Income Tax Act 1961, CGST Act 2017, input tax credit, assessments, search & seizure (Sec 132), appellate tribunals (ITAT/GSTAT).',
    tagCount: 'Direct & Indirect Tax',
    featuredAct: 'Income Tax Act, 1961 & CGST Act'
  },
  {
    id: 'labour-law',
    name: 'Labour & Employment Law',
    category: 'Social & Industrial Law',
    icon: '👷',
    description: 'Industrial Disputes Act, 4 New Labour Codes (Wages, Social Security, Industrial Relations, OSH), termination, gratuity, POSH Act.',
    tagCount: 'Labour Codes & POSH',
    featuredAct: 'Code on Wages & Industrial Relations Code'
  },
  {
    id: 'environmental-law',
    name: 'Environmental & Forest Law',
    category: 'Public & Environmental Law',
    icon: '🌿',
    description: 'Environment Protection Act 1986, NGT Act 2010, polluter pays principle, public trust doctrine, EIA notifications, forest conservation.',
    tagCount: 'NGT & Environmental Codes',
    featuredAct: 'National Green Tribunal Act, 2010'
  },
  {
    id: 'rera-realestate',
    name: 'Real Estate & RERA',
    category: 'Property & Real Estate',
    icon: '🏗️',
    description: 'Real Estate (Regulation and Development) Act 2016, builder-buyer disputes, delayed possession, RERA Authority & Appellate Tribunal.',
    tagCount: '92 Sections',
    featuredAct: 'RERA Act, 2016'
  },
  {
    id: 'motor-vehicles',
    name: 'Motor Vehicles & MACT Claims',
    category: 'Tort & Compensation Law',
    icon: '🚗',
    description: 'Motor Vehicles Act 1988 (amended 2019), third-party insurance, no-fault liability, MACT compensation computation, hit & run relief.',
    tagCount: '217 Sections',
    featuredAct: 'Motor Vehicles Act, 1988 (Amended 2019)'
  },
  {
    id: 'administrative-service',
    name: 'Administrative & Service Law',
    category: 'Public & Constitutional Law',
    icon: '🏢',
    description: 'Principles of natural justice, CAT/SAT tribunals, government service rules, departmental inquiries, bias & proportionality doctrine.',
    tagCount: 'Tribunals & Service Rules',
    featuredAct: 'Administrative Tribunals Act, 1985'
  },
  {
    id: 'legal-ethics',
    name: 'Legal Ethics & Professional Conduct',
    category: 'Professional Practice',
    icon: '👔',
    description: 'Advocates Act 1961, Bar Council of India Rules, duties to client, court & colleagues, professional misconduct proceedings, contempt of court.',
    tagCount: 'Advocates Act & BCI Rules',
    featuredAct: 'Advocates Act, 1961'
  },
  {
    id: 'specific-relief-limitation',
    name: 'Specific Relief & Limitation Law',
    category: 'Civil & Adjectival Law',
    icon: '⏳',
    description: 'Specific Relief Act 1963 (mandatory injunctions, specific performance), Limitation Act 1963 (condonation of delay Sec 5, computation Sec 12).',
    tagCount: 'SRA 1963 & Limitation Act',
    featuredAct: 'Specific Relief Act, 1963 & Limitation Act'
  },
  {
    id: 'human-rights',
    name: 'Human Rights & Constitutional Liberties',
    category: 'Public & Human Rights Law',
    icon: '🕊️',
    description: 'Protection of Human Rights Act 1993, NHRC/SHRC powers, custodial violence prevention, rights of prisoners, UDHR & ICCPR alignments.',
    tagCount: 'Human Rights Enactments',
    featuredAct: 'Protection of Human Rights Act, 1993'
  }
];

// ─── DYNAMIC SECOND-ROW FILTERS CONFIGURATION ────────────────────────────────
// Centralized mapping linking each first-row content type tab to its relevant second-row filters
export const CONTENT_TYPE_FILTERS_CONFIG = {
  ALL: {
    label: 'Explore Law',
    defaultFilter: 'ALL',
    filterKicker: 'Subjects:',
    filters: [
      { id: 'ALL', label: 'All Subjects', shortLabel: 'All', matchKeywords: [] },
      { id: 'constitutional-law', label: 'Constitutional Law of India', shortLabel: 'Constitutional', matchKeywords: ['constitution', 'fundamental rights', 'writs', 'article 21', 'article 14'] },
      { id: 'criminal-law', label: 'Criminal Law (BNS & IPC)', shortLabel: 'Criminal (BNS)', matchKeywords: ['criminal', 'bns', 'ipc', 'murder', 'penal'] },
      { id: 'criminal-procedure', label: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)', shortLabel: 'BNSS Procedure', matchKeywords: ['bnss', 'crpc', 'procedure', 'bail', 'fir', 'arrest', 'investigation'] },
      { id: 'evidence-law', label: 'Bharatiya Sakshya Adhiniyam (BSA)', shortLabel: 'BSA Evidence', matchKeywords: ['bsa', 'evidence', 'sakshya'] },
      { id: 'civil-procedure', label: 'Civil Procedure (CPC)', shortLabel: 'Civil (CPC)', matchKeywords: ['civil', 'cpc', 'injunction', 'res judicata', 'suit'] },
      { id: 'contract-law', label: 'Contract & Commercial Law', shortLabel: 'Contract', matchKeywords: ['contract', 'commercial', 'breach', 'agreement'] },
      { id: 'corporate-law', label: 'Corporate & Company Law', shortLabel: 'Corporate', matchKeywords: ['company', 'corporate', 'companies act', 'director'] },
      { id: 'property-law', label: 'Property & Land Law', shortLabel: 'Property', matchKeywords: ['property', 'transfer of property', 'land', 'lease'] },
      { id: 'family-law', label: 'Family & Personal Law', shortLabel: 'Family', matchKeywords: ['family', 'marriage', 'divorce', 'hindu', 'succession'] },
      { id: 'cyber-law', label: 'Cyber Law & DPDPA', shortLabel: 'Cyber & DPDPA', matchKeywords: ['cyber', 'information technology', 'data protection', 'dpdpa', 'it act'] },
      { id: 'consumer-law', label: 'Consumer Protection', shortLabel: 'Consumer', matchKeywords: ['consumer', 'deficiency', 'ncdrc'] },
      { id: 'taxation-gst', label: 'Taxation & GST', shortLabel: 'Tax & GST', matchKeywords: ['tax', 'gst', 'income tax'] },
      { id: 'arbitration-adr', label: 'Arbitration & ADR', shortLabel: 'Arbitration', matchKeywords: ['arbitration', 'mediation', 'adr', 'conciliation'] },
      { id: 'environmental-law', label: 'Environmental Law', shortLabel: 'Environment', matchKeywords: ['environment', 'ngt', 'pollution', 'forest'] },
      { id: 'ipr-law', label: 'Intellectual Property (IPR)', shortLabel: 'IPR', matchKeywords: ['ipr', 'patent', 'trademark', 'copyright'] }
    ]
  },

  BARE_ACTS: {
    label: 'Bare Acts & Rules',
    defaultFilter: 'ALL',
    filterKicker: 'Statutory Categories:',
    filters: [
      { id: 'ALL', label: 'All Acts & Rules', shortLabel: 'All Acts', matchKeywords: [] },
      { id: 'constitution', label: 'Constitution of India', shortLabel: 'Constitution', matchKeywords: ['constitution', 'preamble', 'fundamental rights', 'articles'] },
      { id: 'criminal-codes', label: 'Criminal Law (BNS/BNSS/BSA)', shortLabel: 'BNS/BNSS/BSA', matchKeywords: ['bns', 'bnss', 'bsa', 'criminal', 'penal', 'suraksha', 'sakshya', 'ipc', 'crpc'] },
      { id: 'civil-cpc', label: 'Civil Law & CPC', shortLabel: 'Civil & CPC', matchKeywords: ['civil', 'cpc', 'procedure 1908', 'specific relief', 'limitation'] },
      { id: 'commercial-contract', label: 'Commercial & Contract Law', shortLabel: 'Contracts', matchKeywords: ['contract', 'commercial', 'sale of goods', 'partnership', 'negotiable'] },
      { id: 'corporate-companies', label: 'Corporate & Company Law', shortLabel: 'Corporate', matchKeywords: ['company', 'corporate', 'companies act', 'competition', 'insolvency', 'ibc'] },
      { id: 'family-personal', label: 'Family & Matrimonial Law', shortLabel: 'Family Law', matchKeywords: ['family', 'marriage', 'divorce', 'succession', 'hindu', 'muslim', 'guardian'] },
      { id: 'property-land', label: 'Property & Real Estate (RERA)', shortLabel: 'Property & RERA', matchKeywords: ['property', 'transfer of property', 'rera', 'registration', 'land'] },
      { id: 'cyber-it', label: 'Cyber Law & IT Act (DPDPA)', shortLabel: 'Cyber & IT', matchKeywords: ['cyber', 'information technology', 'dpdpa', 'data protection', 'privacy'] },
      { id: 'labour-industrial', label: 'Labour & Industrial Laws', shortLabel: 'Labour', matchKeywords: ['labour', 'industrial', 'wages', 'factories', 'social security'] },
      { id: 'taxation-fiscal', label: 'Taxation & Fiscal Laws', shortLabel: 'Taxation', matchKeywords: ['tax', 'income tax', 'gst', 'customs', 'revenue'] },
      { id: 'consumer-protection', label: 'Consumer Protection', shortLabel: 'Consumer', matchKeywords: ['consumer', 'consumer protection', 'e-commerce'] },
      { id: 'environmental-codes', label: 'Environmental & Forest Law', shortLabel: 'Environment', matchKeywords: ['environment', 'forest', 'ngt', 'wildlife', 'air', 'water'] },
      { id: 'rules-regulations', label: 'Rules & Regulations', shortLabel: 'Rules', matchKeywords: ['rule', 'regulation', 'order', 'subordinate', 'ordinance'] }
    ]
  },

  CASE_LAWS: {
    label: 'Case Laws & Judgments',
    defaultFilter: 'ALL',
    filterKicker: 'Judgment Filters:',
    filters: [
      { id: 'ALL', label: 'All Judgments', shortLabel: 'All Cases', matchKeywords: [] },
      { id: 'supreme-court', label: 'Supreme Court of India', shortLabel: 'Supreme Court', matchKeywords: ['supreme court', 'sc', 'insc'] },
      { id: 'high-courts', label: 'High Courts', shortLabel: 'High Courts', matchKeywords: ['high court', 'delhi', 'bombay', 'calcutta', 'madras'] },
      { id: 'constitution-bench', label: 'Constitutional Benches (5+ Judges)', shortLabel: 'Const. Benches', matchKeywords: ['constitutional bench', '5-judge', '9-judge', '13-judge', 'basic structure'] },
      { id: 'criminal-matters', label: 'Criminal Law & Bail Rulings', shortLabel: 'Criminal & Bail', matchKeywords: ['criminal', 'bail', 'murder', 'quashing', 'fir', 'bns', 'ipc', 'crpc', 'anticipatory'] },
      { id: 'civil-commercial', label: 'Civil & Commercial Disputes', shortLabel: 'Civil & Comm.', matchKeywords: ['civil', 'contract', 'arbitration', 'commercial', 'cpc', 'property', 'specific relief'] },
      { id: 'fundamental-rights', label: 'Fundamental Rights & Writs', shortLabel: 'Writs & Rights', matchKeywords: ['article 21', 'article 14', 'article 19', 'article 32', 'article 226', 'writ', 'privacy'] },
      { id: 'corporate-ibc', label: 'Corporate & IBC Judgments', shortLabel: 'Corporate / IBC', matchKeywords: ['company', 'insolvency', 'ibc', 'nclt', 'nclat', 'merger'] },
      { id: 'landmark-historic', label: 'Landmark Precedents', shortLabel: 'Landmark Rulings', matchKeywords: ['landmark', 'historic', 'kesavananda', 'maneka', 'bommai', 'puttaswamy', 'bachan singh', 'danial'] },
      { id: 'recent-rulings', label: 'Recent Judgments (2020-2024)', shortLabel: 'Recent (2020+)', matchKeywords: ['2020', '2021', '2022', '2023', '2024'] }
    ]
  },

  ARTICLES: {
    label: 'Legal Articles & Guides',
    defaultFilter: 'ALL',
    filterKicker: 'Article Categories:',
    filters: [
      { id: 'ALL', label: 'All Articles & Guides', shortLabel: 'All Articles', matchKeywords: [] },
      { id: 'constitutional-analysis', label: 'Constitutional Analysis', shortLabel: 'Constitutional', matchKeywords: ['constitution', 'basic structure', 'federalism', 'fundamental rights', 'preamble', 'article 21'] },
      { id: 'criminal-analysis', label: 'Criminal Law & BNS Commentary', shortLabel: 'Criminal & BNS', matchKeywords: ['criminal', 'bns', 'bnss', 'bsa', 'mob lynching', 'arrest', 'ipc'] },
      { id: 'civil-guides', label: 'Civil Litigation Guides', shortLabel: 'Civil & CPC', matchKeywords: ['civil', 'cpc', 'injunction', 'res judicata', 'plaint', 'execution'] },
      { id: 'advocate-practice', label: 'Advocate Practice & Strategy', shortLabel: 'Litigation Practice', matchKeywords: ['litigation', 'courtroom', 'advocate', 'cross-examination', 'trial', 'strategy'] },
      { id: 'rights-remedies-guides', label: 'Legal Rights & Remedies', shortLabel: 'Rights & Help', matchKeywords: ['rights', 'remedies', 'writ', 'consumer', 'police', 'liberty'] },
      { id: 'case-commentaries', label: 'Case Law Commentaries', shortLabel: 'Case Notes', matchKeywords: ['precedent', 'judgment', 'ratio', 'case comment', 'ruling'] },
      { id: 'comparative-law', label: 'Comparative Legal Studies', shortLabel: 'Comparative', matchKeywords: ['comparative', 'international', 'uk', 'us', 'jurisprudence'] },
      { id: 'practical-guides', label: 'Step-by-Step Practice Guides', shortLabel: 'Checklists', matchKeywords: ['procedure', 'checklist', 'step-by-step', 'practice'] }
    ]
  },

  PROCEDURES: {
    label: 'Court Procedures & Practice',
    defaultFilter: 'ALL',
    filterKicker: 'Litigation Stages:',
    filters: [
      { id: 'ALL', label: 'All Procedures', shortLabel: 'All Procedures', matchKeywords: [] },
      { id: 'writs-constitutional', label: 'Writ Proceedings (Art. 226 / 32)', shortLabel: 'Writs (Art 226)', matchKeywords: ['writ', 'article 226', 'article 32', 'high court', 'supreme court', 'mandamus', 'certiorari', 'habeas corpus'] },
      { id: 'arrest-bail', label: 'Arrest & Bail (BNSS 482 / Regular Bail)', shortLabel: 'Arrest & Bail', matchKeywords: ['bail', 'arrest', 'anticipatory', 'custody', 'bnss 482', 'crpc 438', '480', '483', 'default bail'] },
      { id: 'fir-investigation', label: 'FIR, Zero FIR & Investigation', shortLabel: 'FIR & Police', matchKeywords: ['fir', 'investigation', 'zero fir', 'chargesheet', 'police', 'bnss 173', 'crpc 154', 'section 175', 'protest petition'] },
      { id: 'cheque-bounce', label: 'Cheque Bounce (Sec 138 NI Act)', shortLabel: 'Cheque Bounce', matchKeywords: ['cheque', '138', 'negotiable', 'notice', 'dishonour', 'demand notice', 'section 143a', 'section 142'] },
      { id: 'civil-injunctions', label: 'Civil Injunctions & Interim Relief (O. 39)', shortLabel: 'Injunctions (O. 39)', matchKeywords: ['injunction', 'order 39', 'interim relief', 'cpc', 'plaint', 'stay', 'ex parte', 'rule 2a', 'perpetual'] },
      { id: 'civil-litigation', label: 'Civil Litigation & Pleadings', shortLabel: 'Civil Pleadings', matchKeywords: ['civil', 'plaint', 'written statement', 'order 7', 'order 8', 'summary suit', 'order 37', 'discovery', 'interrogatories'] },
      { id: 'trial-chargesheet', label: 'Chargesheet & Sessions Trial', shortLabel: 'Sessions Trial', matchKeywords: ['trial', 'sessions', 'chargesheet', 'framing of charge', 'prosecutor', 'discharge', 'section 250', 'section 232', 'section 351'] },
      { id: 'appeals-revisions', label: 'Appeals, Revisions & Quashing', shortLabel: 'Appeals & Quashing', matchKeywords: ['appeal', 'revision', 'quashing', 'section 528', 'section 482', 'inherent', 'first appeal', 'second appeal', 'section 100', 'section 415'] },
      { id: 'execution-decree', label: 'Execution of Decrees & Warrants', shortLabel: 'Execution', matchKeywords: ['execution', 'decree', 'attachment', 'warrant of sale', 'garnishee', 'order 21', 'possession', 'arrest detention'] },
      { id: 'family-law-procedures', label: 'Family & Matrimonial Procedures', shortLabel: 'Family Law', matchKeywords: ['family', 'divorce', 'mutual consent', 'maintenance', 'section 144 bnss', 'crpc 125', 'domestic violence', 'dv act', 'cruelty'] },
      { id: 'commercial-arbitration', label: 'Commercial, Arbitration & Consumer Disputes', shortLabel: 'Commercial & Arbitration', matchKeywords: ['commercial', 'arbitration', 'consumer', 'commercial courts act', 'section 12a', 'section 9', 'section 34', 'cpa 2019', 'e-daakhil'] }
    ]
  },

  DRAFTING: {
    label: 'Legal Drafting & Document Library',
    defaultFilter: 'ALL',
    filterKicker: 'Pleading Types:',
    filters: [
      { id: 'ALL', label: 'All Drafts & Pleadings', shortLabel: 'All Drafts', matchKeywords: [] },
      { id: 'criminal-complaints-bail', label: 'Criminal Complaints & Bail Petitions', shortLabel: 'Criminal & Bail', matchKeywords: ['complaint', 'bail', 'criminal', 'anticipatory bail', 'section 138', 'bnss 482'] },
      { id: 'civil-plaints-injunctions', label: 'Civil Plaints & Injunctions (O. 39)', shortLabel: 'Plaints & Injunctions', matchKeywords: ['injunction', 'civil plaint', 'written statement', 'order 39', 'cpc'] },
      { id: 'legal-notices', label: 'Legal Demand Notices', shortLabel: 'Legal Notices', matchKeywords: ['notice', 'legal notice', 'breach', 'demand notice', 'statutory notice', 'section 138 notice'] },
      { id: 'writs-petitions', label: 'Writ Petitions & High Court Filings', shortLabel: 'Writ Petitions', matchKeywords: ['writ', 'petition', 'affidavit', 'article 226', 'article 32'] },
      { id: 'commercial-contracts', label: 'Commercial Contracts & Agreements', shortLabel: 'Agreements', matchKeywords: ['contract', 'agreement', 'commercial', 'nda', 'vendor', 'service'] },
      { id: 'affidavits-undertakings', label: 'Affidavits, Caveats & Undertakings', shortLabel: 'Affidavits & Caveats', matchKeywords: ['affidavit', 'caveat', 'undertaking', 'oath', 'section 148a'] }
    ]
  },

  RIGHTS_REMEDIES: {
    label: 'Rights, Remedies & Legal Help',
    defaultFilter: 'ALL',
    filterKicker: 'Remedies & Protections:',
    filters: [
      { id: 'ALL', label: 'All Rights & Remedies', shortLabel: 'All Remedies', matchKeywords: [] },
      { id: 'fundamental-liberties', label: 'Fundamental Rights & Constitutional Writs', shortLabel: 'Const. Writs', matchKeywords: ['fundamental rights', 'habeas corpus', 'mandamus', 'article 21', 'liberty', 'article 14'] },
      { id: 'arrest-detention-rights', label: 'Arrest, Custodial Rights & Bail Remedies', shortLabel: 'Arrest & Custody', matchKeywords: ['arrest', 'custody', 'bail', 'detention', 'handcuffing', 'dk basu', 'torture'] },
      { id: 'consumer-grievance', label: 'Consumer Rights & Forum Grievance', shortLabel: 'Consumer Rights', matchKeywords: ['consumer', 'refund', 'deficiency in service', 'ncdrc', 'district commission'] },
      { id: 'womens-rights', label: "Women's Legal Protections & DV Act", shortLabel: "Women's Rights", matchKeywords: ['women', 'domestic violence', 'posh', 'maintenance', 'dowry', 'section 498a'] },
      { id: 'cybercrime-remedies', label: 'Cybercrime Remedies & Bank Freezing', shortLabel: 'Cyber Remedies', matchKeywords: ['cybercrime', 'financial fraud', 'bank freezing', 'ncrp', 'data privacy', '1930'] },
      { id: 'labour-workplace-rights', label: 'Workplace & Industrial Employee Rights', shortLabel: 'Workplace Rights', matchKeywords: ['labour', 'workplace', 'gratuity', 'termination', 'provident fund', 'wages'] }
    ]
  },

  LEGAL_UPDATES: {
    label: 'Legal Updates & Amendments',
    defaultFilter: 'ALL',
    filterKicker: 'Update Classifications:',
    filters: [
      { id: 'ALL', label: 'All Legal Updates', shortLabel: 'All Updates', matchKeywords: [] },
      { id: 'bns-rollout', label: 'New Criminal Laws (BNS/BNSS/BSA)', shortLabel: 'BNS Rollout', matchKeywords: ['bns', 'bnss', 'bsa', 'criminal codes', 'july 1 2024', 'transition'] },
      { id: 'gazette-notifications', label: 'Central Government Gazette Notifications', shortLabel: 'Gazettes', matchKeywords: ['gazette', 'notification', 'ministry', 'e-gazette', 'statutory order'] },
      { id: 'high-court-circulars', label: 'High Court Rules & E-Filing Circulars', shortLabel: 'HC Circulars', matchKeywords: ['high court', 'circular', 'registry', 'e-filing rules', 'practice directions'] },
      { id: 'statutory-amendments', label: 'Enacted Statutory Amendments', shortLabel: 'Amendments', matchKeywords: ['amendment', 'ordinance', 'repeal', 'act amendment', 'bill'] },
      { id: 'regulator-guidelines', label: 'Regulatory Directives (RBI / SEBI / CCI / TRAI)', shortLabel: 'Regulators', matchKeywords: ['rbi', 'sebi', 'cci', 'trai', 'guidelines', 'circular', 'compliance'] }
    ]
  },

  DICTIONARY: {
    label: 'Legal Dictionary & Jurisprudence Knowledge Engine',
    defaultFilter: 'ALL',
    filterKicker: 'Reference Classifications & Jurisprudence Domains:',
    filters: [
      { id: 'ALL', label: 'All Terms & Maxims (70 Entries)', shortLabel: 'All Reference', matchKeywords: [] },
      { id: 'latin-maxims', label: 'Latin Maxims & Legal Canons', shortLabel: 'Latin Maxims', matchKeywords: ['latin-maxims', 'latin maxim', 'maxim', 'canon'] },
      { id: 'constitutional-law', label: 'Constitutional Law & Doctrines', shortLabel: 'Constitutional Law', matchKeywords: ['constitutional-law', 'constitutional-concepts', 'basic structure', 'doctrine of eclipse', 'due process', 'pith and substance'] },
      { id: 'criminal-law-bns', label: 'Criminal Law — BNS 2023', shortLabel: 'Criminal Law (BNS)', matchKeywords: ['criminal-law-bns', 'bns', 'mens rea', 'actus reus', 'culpable homicide', 'criminal conspiracy'] },
      { id: 'criminal-procedure-bnss', label: 'Criminal Procedure — BNSS 2023', shortLabel: 'Criminal Procedure', matchKeywords: ['criminal-procedure-bnss', 'bnss', 'cognizable', 'police custody', 'default bail', 'anticipatory bail', 'zero fir'] },
      { id: 'civil-procedure-cpc', label: 'Civil Procedure — CPC 1908', shortLabel: 'Civil Procedure (CPC)', matchKeywords: ['civil-procedure-cpc', 'procedural-terms', 'cpc', 'mesne profits', 'garnishee', 'caveat', 'ex-parte', 'res sub-judice'] },
      { id: 'law-of-evidence-bsa', label: 'Law of Evidence — BSA 2023', shortLabel: 'Evidence Law (BSA)', matchKeywords: ['law-of-evidence-bsa', 'bsa', 'burden of proof', 'electronic evidence', 'dying declaration', 'estoppel', 'res gestae'] },
      { id: 'contract-commercial-law', label: 'Contract & Commercial Law', shortLabel: 'Contract & Commercial', matchKeywords: ['contract-commercial-law', 'force majeure', 'frustration', 'liquidated damages', 'quantum meruit', 'promissory estoppel', 'specific performance'] },
      { id: 'tort-civil-liability', label: 'Tort Law & Civil Liability', shortLabel: 'Tort & Civil Liability', matchKeywords: ['tort-civil-liability', 'absolute liability', 'strict liability', 'vicarious liability', 'contributory negligence', 'res ipsa loquitur', 'defamation'] },
      { id: 'property-land-law', label: 'Property, Land & Registration Law', shortLabel: 'Property & Land Law', matchKeywords: ['property-land-law', 'lis pendens', 'adverse possession', 'easement', 'part performance', 'eminent domain', 'tpa'] },
      { id: 'arbitration-adr', label: 'Arbitration, Mediation & ADR', shortLabel: 'Arbitration & ADR', matchKeywords: ['arbitration-adr', 'kompetenz-kompetenz', 'seat vs venue', 'patent illegality', 'section 9', 'section 17', 'mediation'] },
      { id: 'jurisprudence-philosophy', label: 'Jurisprudence & Statutory Interpretation', shortLabel: 'Jurisprudence & Canons', matchKeywords: ['jurisprudence-philosophy', 'substantive-doctrines', 'stare decisis', 'ratio decidendi', 'per incuriam', 'prospective overruling', 'ejusdem generis', 'noscitur a sociis'] }
    ]
  }
};

