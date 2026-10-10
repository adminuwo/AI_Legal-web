// ─── AI LEGAL™ NEPAL RIGHTS & REMEDIES REPOSITORY ───────────────────────────
// Actionable citizen rights, constitutional remedies & statutory protections under Nepal law

export const NEPAL_RIGHTS_REMEDIES = [
  {
    id: 'rem-np-habeas-corpus',
    slug: 'remedy-against-illegal-detention-habeas-corpus-nepal',
    title: 'Remedy Against Unlawful Police Detention: Habeas Corpus (बन्दी प्रत्यक्षीकरण)',
    category: 'Fundamental Rights & Liberty',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    remedyType: 'Prerogative Constitutional Writ',
    urgencyLevel: 'Emergency (Within 24 Hours)',
    forum: 'High Court of Province (उच्च अदालत - धारा १४४) / Supreme Court (सर्वोच्च अदालत - धारा १३३)',
    summary: 'Immediate judicial command securing physical production and liberty of any citizen or person held in police custody beyond 24 hours without an official judicial remand order from a District Court.',
    whenToUse: 'When an individual is detained without an arrest memo, held in police custody over 24 hours without court production, or unlawfully confined by private individuals.',
    statutoryBasis: 'Constitution of Nepal 2072 — Article 20(3) (24-hour Magistrate Production) & Article 133/144 (Writ Jurisdiction); read with Muluki Criminal Procedure Code 2074 Section 15.',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Verification & Demand for Custody Records',
        action: 'Family member or advocate visits the police station, demands inspection of the Daily Register (दैनिक डायरी), and asks for copy of remand order from District Court.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Urgent Filing of Habeas Corpus Writ',
        action: 'Draft and file a petition for Writ of Habeas Corpus before the provincial High Court or Supreme Court specifying unlawful detention details.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Immediate Order for Physical Production',
        action: 'Single Bench issues immediate order directing the police chief to produce the detainee in court within 24 hours with written justification (लिखित जवाफ).'
      },
      {
        stageNumber: 4,
        stageTitle: 'Judicial Release & Compensation Order',
        action: 'If detention lacks valid statutory remand, the court directs immediate release and may award compensation against errant police officers.'
      }
    ]
  },

  {
    id: 'rem-np-banking-cheque-fraud',
    slug: 'remedy-bounced-cheque-financial-fraud-banking-offence-nepal',
    title: 'Remedy for Dishonoured Cheques & Banking Fraud (बैंकिङ कसूर तथा चेक अनादर)',
    category: 'Banking & Financial Remedies',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    remedyType: 'Criminal Prosecution & Asset Recovery',
    urgencyLevel: 'High (Within 1 Year Limitation)',
    forum: 'District Police Office / High Court Commercial Bench (वाणिज्य इजलास)',
    summary: 'Actionable criminal complaint mechanism to recover disputed funds, impose equivalent fines, and freeze the banking assets of a fraudulent cheque drawer.',
    whenToUse: 'When a cheque issued for business dues, loans, or goods bounces due to insufficient funds or deliberate account closure.',
    statutoryBasis: 'Banking Offence and Punishment Act, 2064 — Sections 3, 15, and 17; read with Nepal Rastra Bank Unified Directives on Blacklisting.',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Obtain Official Bank Bounce Slip',
        action: 'Present the cheque to the bank and obtain official written dishonour memo with stamp certifying \"Insufficient Balance\" (खातामा मौज्दात अपर्याप्त).'
      },
      {
        stageNumber: 2,
        stageTitle: 'File Criminal Jaheri with Police',
        action: 'Lodge First Information Report (जाहेरी) with the District Police Office attaching the original cheque and bounce slips within 1 year.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Bank Account Freeze & Arrest',
        action: 'Police request High Court order to freeze all bank accounts of the accused and issue arrest warrant.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Judicial Recovery with Fines',
        action: 'High Court Commercial Bench convicts the drawer, ordering full reimbursement of the cheque sum plus equal fine and imprisonment.'
      }
    ]
  },

  {
    id: 'rem-np-domestic-violence-protection',
    slug: 'protection-order-domestic-violence-nepal',
    title: 'Emergency Protection Orders & Maintenance against Domestic Violence',
    category: 'Women & Family Rights',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    remedyType: 'Judicial Protection Order (संरक्षण आदेश)',
    urgencyLevel: 'Emergency (Within 24 Hours)',
    forum: 'District Court (जिल्ला अदालत) / Local Judicial Committee (न्यायिक समिति)',
    summary: 'Immediate judicial protective injunction restraining abusive family members, securing residence rights, and awarding interim financial maintenance to affected women and children.',
    whenToUse: 'When a woman or minor is subjected to physical, psychological, economic, or sexual violence by domestic relations.',
    statutoryBasis: 'Domestic Violence (Offence and Punishment) Act, 2066 — Sections 4, 5, and 6; Constitution of Nepal Article 38 (Rights of Women).',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Complaint Lodging',
        action: 'File emergency application before the District Court or local municipal Judicial Committee.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Immediate Ex-Parte Protection Order',
        action: 'Court issues immediate order within 24 hours restraining abuser from entering the shared residence or approaching victim.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Medical Care & Interim Maintenance',
        action: 'Court directs the respondent to cover all medical expenses and pay monthly maintenance for the victim and children.'
      }
    ]
  }
];
