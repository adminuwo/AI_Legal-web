// ─── AI LEGAL™ NEPAL COURT PROCEDURES & LITIGATION WORKFLOWS ────────────────
// Authentic, step-by-step litigation flows under the Muluki Criminal Procedure Code 2074,
// Muluki Civil Procedure Code 2074, Administration of Justice Act 2073, and Supreme Court Rules.

export const NEPAL_COURT_PROCEDURES = [
  {
    id: 'proc-np-crpc-investigation',
    slug: 'jaheri-darkhast-police-investigation-procedure-nepal',
    title: 'Registration of Jaheri Darkhast (जाहेरी दरखास्त) & Criminal Investigation Procedure',
    category: 'Criminal Procedure & Investigation',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Muluki Criminal Procedure Code, 2074 — Sections 4 to 30',
    forum: 'District Police Office (जिल्ला प्रहरी कार्यालय) / Judicial Magistrate (जिल्ला अदालत)',
    overview: 'The mandatory statutory procedure for lodging a first information report of crime (जाहेरी दरखास्त) in Nepal, police station entry, preliminary investigation, search and seizure, arrest memo issuance, and 24-hour court production.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Drafting and Submission of Jaheri Darkhast',
        description: 'The informant or victim drafts the Jaheri specifying the time, date, place of incident, details of suspects, and exact facts, submitting it to the local police station (दफा ४).'
      },
      {
        stageNumber: 2,
        title: 'Registration & Refusal Remedy before Government Attorney',
        description: 'If the police refuse registration, Section 5 allows the victim to submit the complaint directly to the District Government Attorney Office (जिल्ला सरकारी वकील कार्यालय), which compels police registration.'
      },
      {
        stageNumber: 3,
        title: 'Arrest and 24-Hour Production before District Court',
        description: 'Under Section 15 of the Code and Article 20(3) of the Constitution, arrested suspects must be produced before the District Court judge within 24 hours excluding travel time for judicial remand (म्याद थप).'
      },
      {
        stageNumber: 4,
        title: 'Investigation Report and Charge Sheet Submission',
        description: 'Police complete investigation within statutory time limits (maximum 25 days for general offenses) and submit the docket to the Government Attorney for formal indictment (अभियोगपत्र दर्ता).'
      }
    ],
    limitationPeriod: 'Generally within statutory limits prescribed under Schedule 1 or 2 of the Code; for fraud and cheating, within 6 months to 1 year.',
    courtFees: 'Zero court fee for state-prosecuted Schedule 1 criminal complaints.'
  },

  {
    id: 'proc-np-bail-application',
    slug: 'bail-hearing-procedure-district-high-court-nepal',
    title: 'Bail Hearing (थुनछेक बहस) & Section 68 Release Procedure in Nepal Courts',
    category: 'Criminal Bail Procedure',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Muluki Criminal Procedure Code, 2074 — Sections 67, 68, 71, 73',
    forum: 'District Court (जिल्ला अदालत) / High Court (उच्च अदालत)',
    overview: 'Complete procedural guide for conducting Thunchhek (थुनछेक बहस) hearings immediately following the filing of an indictment, arguing for pre-trial release on bank guarantee or property deposit under Section 68.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Recording Statement of the Accused (बयान)',
        description: 'Upon production in court following charge sheet filing, the judge formally records the statement of the accused under Section 43.'
      },
      {
        stageNumber: 2,
        title: 'Thunchhek Bail Hearing (थुनछेक बहस)',
        description: 'Government Attorney argues for judicial remand under Section 67; defense counsel argues for release on bail or recognizance under Section 68 or 71.'
      },
      {
        stageNumber: 3,
        title: 'Furnishing Bail Deposit or Property Guarantee (धरौटी वा जमानत)',
        description: 'If bail is granted, the accused submits cash, bank guarantee, or land ownership certificate (लालपुर्जा) to the court registrar for release.'
      },
      {
        stageNumber: 4,
        title: 'Section 73 Review Application before High Court',
        description: 'If the District Court orders detention under Section 67, an interlocutory revision is filed in the High Court under Section 73 within 35 days.'
      }
    ],
    limitationPeriod: 'Immediate hearing within 24 hours of charge sheet filing; Section 73 revision within 35 days.',
    courtFees: 'Application fee NPR 10–50; bail deposit determined by judicial order.'
  },

  {
    id: 'proc-np-supreme-court-writ',
    slug: 'supreme-court-writ-petition-filing-procedure-nepal',
    title: 'Filing Extraordinary Writ Petitions under Article 133 before the Supreme Court of Nepal',
    category: 'Constitutional Writ Litigation',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Constitution of Nepal 2072 — Article 133; Supreme Court Rules 2074',
    forum: 'Supreme Court of Nepal, Kathmandu (सर्वोच्च अदालत)',
    overview: 'Step-by-step litigation roadmap for invoking the extraordinary writ jurisdiction of the apex court for Habeas Corpus, Mandamus, Certiorari, or Public Interest Litigation (PIL).',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Pleading Drafting and Vetting',
        description: 'Drafting writ petition setting forth locus standi, specific fundamental right violated, absence of alternative legal remedy, and specific prayers.'
      },
      {
        stageNumber: 2,
        title: 'Scrutiny and Registration at Supreme Court Registry',
        description: 'Verification of annexures, certified copies of impugned orders, and registration with assigned writ registration number.'
      },
      {
        stageNumber: 3,
        title: 'Preliminary Hearing before Single Bench (प्रारम्भिक सुनुवाइ)',
        description: 'Hearing for Show-Cause Notice (कारण देखाउ आदेश) and consideration of ad-interim stay orders (अन्तरकालीन आदेश).'
      },
      {
        stageNumber: 4,
        title: 'Written Response & Final Hearing before Division Bench',
        description: 'Respondents file written response (लिखित जवाफ) within 15 days, followed by final oral argument and judgment.'
      }
    ],
    limitationPeriod: 'Within 35 days of knowledge of the impugned administrative decision; no limitation for ongoing illegal detention (Habeas Corpus).',
    courtFees: 'NPR 500 for standard writ petitions; zero fee for Habeas Corpus.'
  },

  {
    id: 'proc-np-civil-plaint-injunction',
    slug: 'civil-plaint-interim-injunction-procedure-nepal',
    title: 'Civil Plaint Filing (फिरादपत्र दर्ता) & Section 156 Interim Injunction Procedure',
    category: 'Civil Litigation',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Muluki Civil Procedure Code, 2074 — Sections 10, 85, 156, 157',
    forum: 'District Court (जिल्ला अदालत) of competent territorial jurisdiction',
    overview: 'Procedural flow for filing a civil lawsuit in Nepal, court fee computation, notice to defendants (म्याद तामेल), interim stay applications, and pre-trial judicial mediation (मिलापत्र).',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Filing Plaint and Court Fee Deposit (फिरादपत्र दर्ता र कोर्ट फि)',
        description: 'Submitting verified plaint, evidence inventory, and ad valorem court fee calculated under the Court Fees Act.'
      },
      {
        stageNumber: 2,
        title: 'Hearing on Interim Protective Injunction (दफा १५६ अन्तरकालीन आदेश)',
        description: 'Immediate hearing on status quo restraining the defendant from transferring or demolishing disputed property pending trial.'
      },
      {
        stageNumber: 3,
        title: 'Summons Service on Defendant (म्याद तामेली)',
        description: 'Court summons served on the defendant with a 21-day deadline to file a Written Statement (प्रतिउत्तरपत्र).'
      },
      {
        stageNumber: 4,
        title: 'Mandatory Pre-Trial Mediation (मेलमिलाप प्रक्रिया)',
        description: 'Under Section 188, the court mandatorily refers commercial and family disputes to a certified mediator before trial.'
      }
    ],
    limitationPeriod: 'Contracts: 2 years; Partition: 3 months to 2 years depending on cause of action.',
    courtFees: 'Graduated ad valorem fee: 2% to 5% based on valuation of claim.'
  },

  {
    id: 'proc-np-banking-cheque-bounce',
    slug: 'banking-offence-cheque-bounce-complaint-procedure-nepal',
    title: 'Cheque Bounce Complaint & Criminal Prosecution under Banking Offence Act, 2064',
    category: 'Banking Crime Procedure',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Banking Offence and Punishment Act, 2064 — Sections 3, 15, 17',
    forum: 'District Police / High Court Commercial Bench (उच्च अदालत वाणिज्य इजलास)',
    overview: 'The complete procedural pathway for prosecuting dishonoured cheques in Nepal: bank bounce slip collection, police FIR registration, asset freeze, and trial before the High Court Commercial Bench.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Bank Bounce Slip Collection',
        description: 'Present cheque to drawer bank; receive written dishonour slip stating \"Insufficient Funds\" (खातामा मौज्दात अपर्याप्त).'
      },
      {
        stageNumber: 2,
        title: 'Police FIR Registration with CIB / District Police',
        description: 'Lodge criminal complaint with bank slips and copies of underlying business contracts.'
      },
      {
        stageNumber: 3,
        title: 'Asset Freeze and Arrest of Drawer',
        description: 'Police freeze the bank accounts of the drawer and seek arrest warrant from High Court.'
      },
      {
        stageNumber: 4,
        title: 'Indictment and Trial at High Court Commercial Bench',
        description: 'Government Attorney files charge sheet in High Court for recovery of disputed sum, equal fine, and imprisonment.'
      }
    ],
    limitationPeriod: 'FIR must be filed within 1 year from the date of the bounce slip.',
    courtFees: 'Zero fee for state-prosecuted banking offence FIR.'
  }
];
