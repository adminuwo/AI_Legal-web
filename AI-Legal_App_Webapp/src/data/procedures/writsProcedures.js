// ─── WRIT PROCEEDINGS & CONSTITUTIONAL LITIGATION ───────────────────────────
// Comprehensive workflows for Articles 32 and 226 of the Constitution of India

export const WRITS_PROCEDURES = [
  {
    id: 'proc-writ-226',
    slug: 'filing-writ-petition-article-226-high-court',
    title: 'Filing a Writ Petition under Article 226 before the High Court',
    category: 'Writ Proceedings (Art. 226 / 32)',
    actReference: 'Constitution of India, 1950 — Article 226 & State High Court Writ Rules',
    courtForum: 'High Court of Respective State (Single Bench / Division Bench)',
    estimatedTimeline: '2 to 8 months (Urgent motion heard on Day 1-3)',
    courtFeeLevel: '₹100 - ₹500 (Varies by High Court Rules) + ₹500 - ₹2,000 process fee',
    overview: 'Article 226 of the Constitution confers extraordinarily plenary powers upon the High Courts to issue directions, orders, or writs—including Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari—for the enforcement of Fundamental Rights under Part III or for any other purpose against the State, its instrumentalities, and quasi-judicial tribunals. The jurisdiction of the High Court under Article 226 is wider than that of the Supreme Court under Article 32 because it extends to any legal right, statutory violation, or administrative excess.',
    legalBasis: 'Constitution of India, 1950, Article 226; Article 226(3) (vacation of ex-parte interim stay); High Court Rules and Practice Directions; Code of Civil Procedure, 1908 (Section 141 analogously applied to procedure).',
    locusStandi: 'Directly aggrieved person who has suffered legal injury or denial of a fundamental/statutory right. In environmental, custodial, or marginalized group rights, any public-spirited citizen under Public Interest Litigation (PIL) doctrine (SP Gupta v. Union of India).',
    prerequisites: [
      'Exhaustion of statutory alternative remedies, unless the case falls under Whirlpool exceptions: (a) breach of fundamental rights, (b) total breach of natural justice, (c) order wholly without jurisdiction, or (d) vires of statute challenged.',
      'Establishment that the respondent is "State" or an instrumentality of the State under Article 12, or a private entity performing a public duty (Zee Telefilms / Federal Bank).',
      'Prior formal Demand for Justice (representation) served on the authority and unheeded for a reasonable period (mandatory for Mandamus).',
      'Clean hands and complete disclosure of all facts; doctrine of Uberrima Fides applies.'
    ],
    statutoryLimitation: 'No formal period under the Limitation Act, 1963; governed by the equitable Doctrine of Laches. Petitions filed after unexplained delay of 6 to 12 months are liable to dismissal for delay and laches (State of MP v. Bhailal Bhai).',
    mandatoryDocuments: [
      'Notice of Motion and Urgent Application with Welfare Stamps.',
      'Index, Memo of Parties with complete addresses, emails, and official designations.',
      'Synopsis and Chronological List of Events highlighting key factual milestones.',
      'Writ Petition formatted with alphabetical grounds (Ground A, Ground B, etc.).',
      'Affidavit of Petitioner duly verified by an Oath Commissioner or Notary Public.',
      'Annexure P-1: Impugned Order / Rejection Letter / Official Gazette Notification.',
      'Certified or true typed copies of all representations, notices, and annexures.',
      'Proof of advance service on the State Standing Counsel / Union of India counsel.',
      'Vakalatnama executed by the petitioner with advocate welfare fund stamp.'
    ],
    draftingGuidance: 'The petition must follow standard High Court format: (1) Jurisdiction statement under Article 226, (2) Parties description establishing State status under Article 12, (3) Facts in chronological order, (4) Specific declaration that no alternative remedy is available or explanation why it is not efficacious, (5) Declaration that no other petition has been filed in this or any other court, (6) Alphabetical grounds of challenge, (7) Prayer Clause distinguishing interim stay prayers from final relief.',
    courtFeesFilingRules: 'Court fees range from ₹100 to ₹500 depending on the State High Court Rules. Advance copy must be physically served or e-served on the office of the Advocate General or Standing Counsel before filing.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Demand Notice & Serving Administrative Representation',
        governingRule: 'Article 226 Constitution & Administrative Law Principles',
        actingParty: 'Aggrieved Party / Advocate',
        description: 'Serve formal written representation upon the competent authority setting out the illegality and demanding remedial action within a specified deadline (15 to 30 days).',
        advocateTips: 'Proof of dispatch and delivery of this representation is the first document scrutinized during admission for a Writ of Mandamus.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting Petition with Categorical Alphabetical Grounds',
        governingRule: 'High Court Writ Rules',
        actingParty: 'High Court Advocate',
        description: 'Draft the writ petition ensuring grounds are clearly categorized: Jurisdictional Error, Violation of Natural Justice (Audi Alteram Partem), Wednesbury Unreasonableness, or Arbitrariness under Article 14.',
        advocateTips: 'Avoid vague allegations; quote the exact statutory section violated by the administrative body.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Mandatory Advance Service to State Standing Counsel',
        governingRule: 'High Court Practice Rules on Advance Service',
        actingParty: 'Advocate Clerk / Process Server',
        description: 'Serve a complete paper book upon the Government Advocate, Union of India Central Government Standing Counsel (CGSC), or institutional counsel, and obtain dated acknowledgment stamp.',
        advocateTips: 'In urgent matters seeking same-day listing, prepare an Urgent Mentioning Memo countersigned by the Registrar (Listing).'
      },
      {
        stepNumber: 4,
        stepTitle: 'Filing, Registry Scrutiny & Removal of Defects',
        governingRule: 'High Court E-Filing Rules',
        actingParty: 'High Court Registry & Advocate',
        description: 'File paper book through e-filing portal. Registry scrutinizes index pagination, legibility of annexures, and court fee stamps. Remove defects within 48 to 72 hours.',
        advocateTips: 'Every page of vernacular documents must carry a verified English translation certificate.'
      },
      {
        stepNumber: 5,
        stepTitle: 'First Motion Admission & Ad-Interim Stay Hearing',
        governingRule: 'Article 226 & High Court Motion Rules',
        actingParty: 'Motion Bench (Single Judge or Division Bench)',
        description: 'Matter is listed for preliminary hearing. Counsel presents prima facie case and irreparable injury to obtain notice and ad-interim stay of the impugned action.',
        advocateTips: 'If an ex-parte stay is granted, Article 226(3) mandates that any application by the State to vacate the stay must be disposed of within two weeks, failing which the stay stands vacated.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Counter-Affidavit, Rejoinder & Final Disposal',
        governingRule: 'Order XIX CPC & High Court Writ Rules',
        actingParty: 'State Respondent & Petitioner',
        description: 'State files Counter-Affidavit within 4 to 6 weeks. Petitioner files Rejoinder-Affidavit within 2 weeks. The court conducts final arguments on questions of law and pronounces judgment.',
        advocateTips: 'File a short convenience compilation of 3 leading Supreme Court judgments rather than voluminous authorities.'
      }
    ],
    hearingAndArguments: 'Counsel must focus on three core pillars during preliminary hearing: (1) Strong prima facie case demonstrating clear violation of law, (2) Balance of convenience favoring the petitioner, and (3) Irreparable injury if interim stay is not granted. Address alternative remedy objections at the threshold by invoking Whirlpool exceptions.',
    possibleOutcomes: [
      'Writ of Certiorari quashing the impugned order or notification.',
      'Writ of Mandamus directing the authority to decide representation or perform statutory duty within a fixed timeframe (e.g., 8 weeks).',
      'Ad-interim stay order operating during pendency of proceedings.',
      'Dismissal at threshold on grounds of alternative efficacious remedy or disputed questions of fact.'
    ],
    appealRevisionRemedy: 'Against an order of a Single Judge: Intra-Court Appeal (Letters Patent Appeal / Special Appeal) before a Division Bench within 30 to 60 days. Against a Division Bench order: Special Leave Petition (Civil) under Article 136 before the Supreme Court within 90 days.',
    commonPitfalls: [
      'Concealment of prior litigation or rejected representations (fatal under Uberrima Fides).',
      'Filing writ where pure disputed questions of fact requiring oral evidence are involved.',
      'Failing to establish Whirlpool exceptions when a statutory tribunal is available.'
    ],
    practicalScenario: 'A state civil servant was dismissed from service without an inquiry or chargesheet. The government argued the employee must appeal to the State Administrative Tribunal. The High Court admitted the Article 226 petition under the Whirlpool exception because the dismissal order violated the mandatory constitutional procedure of Article 311(2) and natural justice, stayed the dismissal, and ordered immediate reinstatement with salary.',
    caseLaws: [
      {
        title: 'Whirlpool Corporation v. Registrar of Trade Marks, Mumbai',
        citation: '(1998) 8 SCC 1',
        court: 'Supreme Court of India',
        holding: 'High Court writ jurisdiction under Article 226 is not barred by an alternative statutory remedy where: (1) fundamental rights are violated, (2) natural justice is breached, (3) proceedings are wholly without jurisdiction, or (4) the vires of an Act is challenged.'
      },
      {
        title: 'Radhey Shyam v. Chhabi Nath',
        citation: '(2015) 5 SCC 423',
        court: 'Supreme Court of India (Constitution Bench)',
        holding: 'Judicial orders of civil courts are not amenable to writ of certiorari under Article 226; challenge lies under Article 227 supervisory jurisdiction or revision.'
      }
    ],
    faqs: [
      {
        q: 'Can a writ petition under Article 226 be filed against a private entity?',
        a: 'Generally no, unless the private entity is discharging an essential public duty or positive statutory obligation of a public character (Zee Telefilms v. Union of India).'
      },
      {
        q: 'What is the effect of Article 226(3) on ex-parte stay orders?',
        a: 'If a respondent files an application to vacate an ex-parte stay and serves a copy on the petitioner, the High Court must dispose of the application within 2 weeks, failing which the stay automatically lapses.'
      }
    ],
    tags: ['writs-constitutional', 'writ', 'article 226', 'high court', 'certiorari', 'mandamus', 'stay', 'whirlpool']
  },

  {
    id: 'proc-writ-32',
    slug: 'constitutional-writ-petition-article-32-supreme-court',
    title: 'Constitutional Writ Petition under Article 32 before the Supreme Court of India',
    category: 'Writ Proceedings (Art. 226 / 32)',
    actReference: 'Constitution of India, 1950 — Article 32 & Supreme Court Rules, 2013',
    courtForum: 'Supreme Court of India, New Delhi (Bench of not less than 2 or 3 Judges / Constitution Bench)',
    estimatedTimeline: '3 months to 2 years',
    courtFeeLevel: '₹500 per petition + Advocate-on-Record (AoR) filing charges',
    overview: 'Article 32 is itself a Fundamental Right under Part III of the Constitution, famously hailed by Dr. B.R. Ambedkar as the "heart and soul of the Constitution". Under Article 32, a citizen has the guaranteed right to directly move the Supreme Court by appropriate proceedings for the enforcement of the Fundamental Rights conferred by Part III. Unlike Article 226, Article 32 is exercisable exclusively for fundamental rights violations and cannot be invoked for ordinary statutory or legal rights.',
    legalBasis: 'Constitution of India, 1950 — Article 32 (Clauses 1 to 4); Supreme Court Rules, 2013, Order XXXVIII; Code of Civil Procedure, 1908 & Supreme Court Practice Directions.',
    locusStandi: 'Any citizen or person whose Fundamental Rights (Articles 14, 19, 21, etc.) have been infringed. In matters of public importance or violation of rights of indigent/incarcerated citizens, locus standi is relaxed under Public Interest Litigation (PIL) principles.',
    prerequisites: [
      'Direct violation of a Fundamental Right in Part III of the Constitution.',
      'Action or inaction by the "State" as defined under Article 12.',
      'Explanation as to why the petitioner has not approached the concerned High Court under Article 226 first, as the Supreme Court generally requires reasons for bypassing the High Court (except in serious liberty or national policy matters).'
    ],
    statutoryLimitation: 'No limitation under the Limitation Act; governed by Doctrine of Laches. Gross, unexplained delay may lead to dismissal (Tilokchand Motichand v. H.B. Munshi).',
    mandatoryDocuments: [
      'Writ Petition in Form No. 28, Supreme Court Rules, 2013.',
      'Notice of Motion and Application for Ad-Interim Ex-Parte Stay / Bail / Direction.',
      'Synopsis and List of Dates and Events highlighting the exact constitutional breach.',
      'Affidavit of Petitioner sworn before an Oath Commissioner / Notary Public.',
      'Impugned Notification / Ordinance / Enactment / Order marked as Annexure P-1.',
      'Certificate of the Advocate-on-Record stating that no other petition has been filed.',
      'Vakalatnama executed by Petitioner in favour of an enrolled Advocate-on-Record (AoR).'
    ],
    draftingGuidance: 'The petition must be drawn by an Advocate-on-Record (AoR) and settled by a Senior Advocate. It must open with a clear jurisdictional statement: "The Petitioner invokes the jurisdiction of this Hon’ble Court under Article 32 of the Constitution of India for the enforcement of Fundamental Rights guaranteed under Articles 14, 19, and 21...". Clear constitutional questions of law must be framed.',
    courtFeesFilingRules: 'Court fees of ₹500 on the main petition, plus ₹50 on each miscellaneous application, as per the Supreme Court Rules, 2013. Must be filed through an enrolled Advocate-on-Record.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Drafting Constitutional Grounds & AoR Certification',
        governingRule: 'Order XXXVIII Supreme Court Rules, 2013',
        actingParty: 'Advocate-on-Record / Senior Counsel',
        description: 'Formulate grounds demonstrating how State action breaches Article 14 (arbitrariness), Article 19 (unreasonable restriction), or Article 21 (procedure not just, fair, or reasonable).',
        advocateTips: 'Address at paragraph 1 why the High Court under Article 226 was not approached first to prevent a remand order.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Supreme Court E-Filing & Registry Scrutiny',
        governingRule: 'Supreme Court E-Filing Guidelines',
        actingParty: 'Advocate-on-Record Clerk & Registry',
        description: 'File petition electronically through the Supreme Court e-filing portal. Address Registry defects (cure list) within 28 days of notification.',
        advocateTips: 'Ensure all pages are bookmarked in the PDF and hyperlinked in the index.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Oral Mentioning for Urgent Listing',
        governingRule: 'Supreme Court Mentioning Rules',
        actingParty: 'Senior Advocate / AoR before Chief Justice Bench',
        description: 'In cases of imminent demolition, personal liberty deprivation, or immediate disqualification, mention the matter before the Bench presided over by the Chief Justice of India.',
        advocateTips: 'Mentioning slips must be filed by 10:00 AM on the day of mentioning specifying the grave urgency.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Preliminary Motion Admission Hearing',
        governingRule: 'Order XXXVIII Rule 2 Supreme Court Rules',
        actingParty: 'Supreme Court Bench',
        description: 'Court hears petitioner counsel on admission. If a prima facie constitutional violation exists, the Court issues Rule Nisi and Notice to the Union of India / State respondents.',
        advocateTips: 'Focus oral arguments on the manifest arbitrariness doctrine (Shayara Bano) or proportionality test (Puttaswamy).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Filing of Counter-Affidavits & Reference to Larger Bench',
        governingRule: 'Article 145(3) Constitution of India',
        actingParty: 'Attorney General / Solicitor General & Petitioner',
        description: 'Respondents file Counter-Affidavit within 4 to 8 weeks. If a substantial question of constitutional interpretation arises, the bench refers the case to a 5-Judge Constitution Bench.',
        advocateTips: 'File written submissions not exceeding 5 pages prior to final oral arguments.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Final Hearing & Declaration of Law under Article 141',
        governingRule: 'Articles 32, 141 & 142 Constitution of India',
        actingParty: 'Supreme Court of India',
        description: 'Court hears final arguments and pronounces judgment. The law declared becomes binding on all courts across India under Article 141; relief can be customized under Article 142 complete justice.',
        advocateTips: 'Specific restitutionary relief or compensation for fundamental rights breach can be granted under Rudul Sah doctrine.'
      }
    ],
    hearingAndArguments: 'Counsel must strictly demonstrate Part III violation. The Supreme Court cannot refuse to entertain an Article 32 petition if fundamental right violation is established, because Article 32 is itself a fundamental right (Romesh Thappar v. State of Madras).',
    possibleOutcomes: [
      'Striking down of unconstitutional statutory provisions or rules under Article 13.',
      'Mandatory writ or directions against central or state authorities.',
      'Monetary compensation awarded for custodial death or illegal detention (Nilabati Behera).',
      'Liberty granted to approach the High Court under Article 226.'
    ],
    appealRevisionRemedy: 'Supreme Court judgments are final. Only remedies available: (1) Review Petition under Article 137 within 30 days; and if dismissed, (2) Curative Petition under Rupa Ashok Hurra doctrine.',
    commonPitfalls: [
      'Invoking Article 32 for purely commercial contract disputes without fundamental right element.',
      'Failing to engage an enrolled Advocate-on-Record (mandatory for filing in Supreme Court).'
    ],
    practicalScenario: 'A group of students challenged a State notification cancelling competitive examinations without providing access to digital answer keys. The Supreme Court entertained the Article 32 petition directly due to pan-India implications affecting 15 Lakh students, declared the process arbitrary under Article 14, and directed the conduct of a re-test under a court-appointed committee.',
    caseLaws: [
      {
        title: 'Romesh Thappar v. State of Madras',
        citation: '1950 SCR 594 : AIR 1950 SC 124',
        court: 'Supreme Court of India',
        holding: 'The Supreme Court is the protector and guarantor of fundamental rights, and it cannot, consistently with the responsibility laid upon it, refuse to entertain applications seeking protection against infringements of those rights under Article 32.'
      },
      {
        title: 'Shayara Bano v. Union of India',
        citation: '(2017) 9 SCC 1',
        court: 'Supreme Court of India (5-Judge Bench)',
        holding: 'Legislation and executive action can be struck down under Article 14 on the ground of manifest arbitrariness where something is done without adequate determining principle.'
      }
    ],
    faqs: [
      {
        q: 'Can an Article 32 petition be filed if a High Court rejected an Article 226 petition on the same issue?',
        a: 'No. The doctrine of res judicata applies between Article 226 and Article 32 (Daryao v. State of UP). The appropriate remedy is a Special Leave Petition (SLP) under Article 136 against the High Court order.'
      },
      {
        q: 'What is the difference between Article 32 and Article 226?',
        a: 'Article 32 is limited strictly to Fundamental Rights violations and is itself a fundamental right; Article 226 covers Fundamental Rights as well as any other legal right and is a constitutional remedy.'
      }
    ],
    tags: ['writs-constitutional', 'writ', 'article 32', 'supreme court', 'fundamental rights', 'pil', 'habeas corpus', 'mandamus']
  },

  {
    id: 'proc-writ-habeas-corpus',
    slug: 'writ-of-habeas-corpus-illegal-detention-liberty',
    title: 'Writ of Habeas Corpus: Challenging Illegal Detention & Safeguarding Personal Liberty',
    category: 'Writ Proceedings (Art. 226 / 32)',
    actReference: 'Constitution of India, 1950 — Articles 21, 22, 32 & 226',
    courtForum: 'High Court (Division Bench / Single Bench) or Supreme Court of India',
    estimatedTimeline: '24 hours to 7 days (Top emergency priority)',
    courtFeeLevel: 'Exempt or Nominal (₹10 - ₹50); Free Legal Aid available',
    overview: 'Habeas Corpus (Latin: "you shall have the body") is the great constitutional writ for the protection of personal liberty against unlawful, arbitrary, or custodial detention. It commands the detaining authority—whether police, prison superintendent, or private individual—to produce the detained person before the court and justify the legal grounds of restraint. If no lawful justification exists, the court immediately orders the detenue set at liberty.',
    legalBasis: 'Articles 21 (Right to Life & Personal Liberty), 22 (Protection against arbitrary arrest and detention), 32 & 226 of the Constitution of India; Section 528 BNSS / Section 491 CrPC (historical statutory equivalent).',
    locusStandi: 'The detained person, any family member, friend, advocate, or public-spirited citizen on behalf of the detenue. The doctrine of strict locus standi does not apply in Habeas Corpus petitions (Sunil Batra v. Delhi Admn).',
    prerequisites: [
      'Actual physical confinement or restraint of movement of the person.',
      'Absence of lawful authority for detention (e.g., detention beyond 24 hours without magistrate remand under Section 58 BNSS / Article 22(2)).',
      'For preventive detention: breach of mandatory statutory safeguards under Article 22(5) (failure to supply grounds of detention in understood language within 5 days).'
    ],
    statutoryLimitation: 'No limitation period whatsoever; available immediately upon illegal arrest or detention and continues as long as illegal custody persists.',
    mandatoryDocuments: [
      'Habeas Corpus Petition stating date, time, and location of apprehension by police or private captor.',
      'Affidavit of the Next Friend / Relative stating relationship and lack of news of detenue.',
      'Police GD (General Diary) complaint or missing person report copy (if lodged).',
      'Medical emergency or custodial apprehension details (photographs, CCTV footage references if available).'
    ],
    draftingGuidance: 'The petition must succinctly allege: (1) Identity and description of detenue, (2) Date, time, and place where detenue was taken into custody, (3) Identity of detaining police station or private individual, (4) Specific averment that detenue has not been produced before a Magistrate within 24 hours in violation of Article 22(2), (5) Prayer for immediate writ commanding production of detenue before the Court and release.',
    courtFeesFilingRules: 'Completely exempt in many High Courts or nominal court fee of ₹10. Registry is required to process and list Habeas Corpus petitions within 24 hours.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Emergency Drafting & Verification by Next Friend',
        governingRule: 'High Court Writ Rules (Habeas Corpus Proceedings)',
        actingParty: 'Next Friend / Advocate',
        description: 'Prepare emergency petition detailing unlawful custody without magistrate authorization. The petition can even be transmitted via telegram, letter, or official email.',
        advocateTips: 'If police station refuses to disclose whereabouts, name the Director General of Police (DGP) and State Home Secretary as respondents.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Urgent Evening or Vacation Listing',
        governingRule: 'Article 21 & High Court Roster Rules',
        actingParty: 'Chief Justice / Vacation Judge',
        description: 'Approach the Registrar (Judicial) or Chief Justice for urgent listing, even on weekends, holidays, or late evenings in cases of grave custodial threat.',
        advocateTips: 'High Courts maintain designated 24/7 emergency phone lines for liberty-related writ listings.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Issuance of Rule Nisi & Search Warrant',
        governingRule: 'Article 226 Constitution & Section 97 CrPC / 94 BNSS',
        actingParty: 'High Court Bench',
        description: 'Court issues Rule Nisi directing the State to produce the detenue before the Court at a specified hour (often 10:30 AM next morning) or file return justifying custody.',
        advocateTips: 'Request the Court to depute a Judicial Officer or Warrant Officer to conduct surprise inspection of the police lockup.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Physical Production of Detenue before Court',
        governingRule: 'Article 22(2) & High Court Practice Directions',
        actingParty: 'Police Authorities / Jail Superintendent',
        description: 'Detenue is produced physically or via high-definition video conferencing. The judges conduct an in-camera interview in judge chambers to ascertain voluntary statement without police intimidation.',
        advocateTips: 'Inspect the detenue for visible marks of custodial violence and request immediate medical examination by a Medical Board.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Adjudication of Lawfulness of Detention',
        governingRule: 'Articles 21 & 22 Constitution',
        actingParty: 'High Court Bench',
        description: 'Court examines detention record. If arrest violated Section 35 BNSS (Arnesh Kumar guidelines) or Article 22(2) (production within 24 hours), detention is held illegal.',
        advocateTips: 'Even if an FIR was registered subsequent to illegal detention, the illegal confinement prior to remand warrants judicial condemnation.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Immediate Release Order & Custodial Compensation',
        governingRule: 'Articles 21, 32 & 226',
        actingParty: 'High Court Bench',
        description: 'Court orders immediate release of the detenue from courtroom itself, and in cases of egregious custodial torture or unlawful abduction, awards compensation against the State (Nilabati Behera).',
        advocateTips: 'Obtain certified copy of order to prevent rearrest outside court premises by local police.'
      }
    ],
    hearingAndArguments: 'The burden of proof in Habeas Corpus is entirely upon the State to show that the deprivation of liberty is authorized by valid law. Strict compliance with procedural safeguards is mandatory.',
    possibleOutcomes: [
      'Immediate release of the detenue from unlawful custody.',
      'Production order with direction to conduct independent medical examination.',
      'Award of interim compensation for unlawful confinement payable by the State.',
      'Dismissal if detention is shown to be pursuant to a valid judicial remand order by a competent Magistrate.'
    ],
    appealRevisionRemedy: 'Special Leave Petition (Criminal) under Article 136 before the Supreme Court if High Court dismisses the petition; or direct Article 32 petition before the Supreme Court.',
    commonPitfalls: [
      'Filing habeas corpus where a person is in lawful judicial remand under a valid magistrate order (habeas corpus generally does not lie against judicial custody).',
      'Failing to establish custody where private dispute or voluntary departure of adult person is involved.'
    ],
    practicalScenario: 'A youth was picked up by police in civil clothes without an arrest memo and kept in unofficial detention for 4 days without production before a Magistrate. The family filed a Habeas Corpus petition. The High Court dispatched a Warrant Officer to the police station who found the youth locked in a back room without GD entry. The High Court ordered his immediate release and awarded ₹2.5 Lakhs compensation against the delinquent police officers.',
    caseLaws: [
      {
        title: 'Sunil Batra (II) v. Delhi Administration',
        citation: '(1980) 3 SCC 488',
        court: 'Supreme Court of India (Justice V.R. Krishna Iyer)',
        holding: 'The writ of habeas corpus is available not only for release from illegal detention, but also to protect prisoners from inhuman treatment or custodial torture inside prison.'
      },
      {
        title: 'Nilabati Behera v. State of Orissa',
        citation: '(1993) 2 SCC 746',
        court: 'Supreme Court of India',
        holding: 'Award of monetary compensation in writ jurisdiction under Article 32/226 for custodial death or violation of personal liberty under Article 21 is a public law remedy distinct from private law tort damages.'
      }
    ],
    faqs: [
      {
        q: 'Can a Habeas Corpus writ be filed against a private individual?',
        a: 'Yes. Habeas Corpus lies against illegal confinement by private individuals (e.g., unlawful confinement of a woman by relatives or illegal detention of a child).'
      },
      {
        q: 'Can a letter or email be treated as a Habeas Corpus petition?',
        a: 'Yes. The Supreme Court and High Courts have repeatedly treated epistolary communications, telegrams, and emails from prisoners or relatives as writ petitions in emergency cases.'
      }
    ],
    tags: ['writs-constitutional', 'writ', 'habeas corpus', 'illegal detention', 'custody', 'article 21', 'article 22', 'liberty']
  },

  {
    id: 'proc-writ-mandamus-certiorari',
    slug: 'writs-mandamus-certiorari-prohibition-administrative-action',
    title: 'Writs of Mandamus, Certiorari & Prohibition against Arbitrary State Action',
    category: 'Writ Proceedings (Art. 226 / 32)',
    actReference: 'Constitution of India, 1950 — Article 226; Specific Relief Act, 1963',
    courtForum: 'High Court of Respective State (Single Bench / Division Bench)',
    estimatedTimeline: '3 to 12 months',
    courtFeeLevel: '₹100 - ₹500 + Process Fees',
    overview: 'Mandamus, Certiorari, and Prohibition form the triumvirate of public law remedies in administrative law. Mandamus commands a public authority to perform a mandatory statutory duty that it has unlawfully refused or neglected to execute. Certiorari quashes an illegal, ultra vires, or jurisdictionally defective order passed by a judicial or quasi-judicial body. Prohibition issues in advance to prevent an inferior tribunal from exceeding its statutory jurisdiction.',
    legalBasis: 'Constitution of India, 1950 — Article 226; Doctrine of Ultra Vires; Principles of Natural Justice (Audi Alteram Partem & Nemo Judex in Causa Sua); Administrative Law doctrines.',
    locusStandi: 'Aggrieved party whose legal right is affected by the refusal of the authority to act (Mandamus) or against whom an illegal order has been passed (Certiorari).',
    prerequisites: [
      'For Mandamus: Existence of a mandatory legal duty on the public body, a corresponding legal right in the petitioner, and a prior demand for justice that remained unheeded.',
      'For Certiorari: The impugned order must be judicial or quasi-judicial, suffering from jurisdictional error, error of law apparent on the face of the record, or natural justice violation.',
      'For Prohibition: The inferior court or tribunal must be currently proceeding without or in excess of jurisdiction, before the final order is passed.'
    ],
    statutoryLimitation: 'Doctrine of Laches applies (generally 90 to 180 days from the date of the impugned order or date of refusal).',
    mandatoryDocuments: [
      'Copy of formal Demand for Justice representation with proof of delivery (Mandamus).',
      'Certified copy of the impugned quasi-judicial order sought to be quashed (Certiorari).',
      'Record of lower tribunal proceedings showing jurisdictional objection raised (Prohibition).',
      'Affidavit of Petitioner swearing to all facts and absence of suppression.'
    ],
    draftingGuidance: 'In Certiorari: Draft grounds specifically demonstrating: (a) Lack of inherent jurisdiction, (b) Bias / conflict of interest, (c) Violation of audi alteram partem (no hearing given), or (d) Error apparent on the face of the record. In Mandamus: Draft grounds demonstrating: (a) Exact statute creating mandatory duty, (b) Failure of officer to act within statutory deadline, and (c) Irreparable injury to petitioner.',
    courtFeesFilingRules: 'Fixed court fee as per State High Court Rules (₹100 to ₹500). Advance notice must be served on the government standing counsel.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Service of Demand for Justice Representation',
        governingRule: 'Administrative Law Doctrine of Demand and Refusal',
        actingParty: 'Petitioner / Advocate',
        description: 'Serve formal notice calling upon the authority to perform its statutory duty within a stipulated period (typically 15 to 30 days).',
        advocateTips: 'Failure to issue a prior demand notice before seeking Mandamus is an incurable defect unless the authority has already shown clear intent to refuse.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Filing Petition for Certiorari / Mandamus with Registry',
        governingRule: 'High Court Writ Rules',
        actingParty: 'High Court Advocate',
        description: 'Lodge petition clearly distinguishing prayers: Certiorari to quash impugned order, and consequential Mandamus to grant license/benefit.',
        advocateTips: 'Always pair Certiorari with Mandamus: first quash the illegal order, then compel the authority to issue the entitlement.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Hearing on Admission & Grant of Interim Stay',
        governingRule: 'Article 226 & High Court Practice Directions',
        actingParty: 'High Court Motion Bench',
        description: 'Argue prima facie jurisdictional defect or patent natural justice breach to secure ad-interim stay of the impugned quasi-judicial order.',
        advocateTips: 'Demonstrate that the authority acted as judge in its own cause (Nemo Judex) to secure an immediate ex-parte stay.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Production of Lower Tribunal Records',
        governingRule: 'Certiorari Practice Directions',
        actingParty: 'Executing Authority / Tribunal Registrar',
        description: 'Under the mandate of Certiorari ("to be certified"), the High Court calls for the entire record of the lower tribunal or authority for judicial scrutiny.',
        advocateTips: 'Review the lower record to verify if file notings show pre-determined malice or bias.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Hearing on Questions of Law and Jurisdiction',
        governingRule: 'Article 226',
        actingParty: 'High Court Bench',
        description: 'High Court examines whether the decision-making process was fair, lawful, and reasonable. The court does not act as a court of appeal on merits.',
        advocateTips: 'Cite Associated Provincial Picture Houses v. Wednesbury Corp to demonstrate manifest unreasonableness.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Pronouncement of Judgment & Remand',
        governingRule: 'Article 226',
        actingParty: 'High Court Bench',
        description: 'Court quashes the impugned order (Certiorari) and remands the matter back with directions to decide afresh within 8 weeks in accordance with law (Mandamus).',
        advocateTips: 'If the authority fails to comply within the court timeline, immediately file a Contempt Petition under Section 12 Contempt of Courts Act.'
      }
    ],
    hearingAndArguments: 'Counsel must reiterate that judicial review under Article 226 is directed not against the decision itself, but against the decision-making process (Tata Cellular v. Union of India).',
    possibleOutcomes: [
      'Writ of Certiorari quashing the impugned order as ultra vires.',
      'Writ of Mandamus directing grant of approval, pension, or license.',
      'Writ of Prohibition restraining the tribunal from proceeding with hearing.',
      'Remand to the authority with directions for a fresh personal hearing.'
    ],
    appealRevisionRemedy: 'Letters Patent Appeal (LPA) before Division Bench within 30 days if decided by Single Judge; or Special Leave Petition (Civil) under Article 136 before Supreme Court.',
    commonPitfalls: [
      'Seeking Mandamus to enforce a purely discretionary power without a mandatory statutory duty.',
      'Seeking Mandamus to enforce a contractual obligation without public law element.'
    ],
    practicalScenario: 'A municipal commissioner cancelled a builder approved construction permit without giving any notice or opportunity of hearing, based on an anonymous complaint. The builder filed a writ petition for Certiorari and Mandamus. The High Court held that cancellation without notice was a direct violation of natural justice, quashed the cancellation order via Certiorari, and issued Mandamus prohibiting the municipality from demolishing the building.',
    caseLaws: [
      {
        title: 'Tata Cellular v. Union of India',
        citation: '(1994) 6 SCC 651',
        court: 'Supreme Court of India',
        holding: 'Judicial review is concerned not with the decision, but with the decision-making process; the court will intervene where the authority acted arbitrarily, without jurisdiction, or in violation of natural justice.'
      },
      {
        title: 'Syed Yakoob v. K.S. Radhakrishnan',
        citation: 'AIR 1964 SC 477',
        court: 'Supreme Court of India (Constitution Bench)',
        holding: 'A writ of certiorari can be issued for correcting errors of jurisdiction, but an error of law must be apparent on the face of the record.'
      }
    ],
    faqs: [
      {
        q: 'What is the key difference between Certiorari and Prohibition?',
        a: 'Prohibition issues while the lower tribunal is still proceedings in excess of jurisdiction to prevent the order; Certiorari issues after the illegal order has been passed to quash it.'
      },
      {
        q: 'Can Mandamus be issued to enforce a government promise?',
        a: 'Yes, under the doctrine of Promissory Estoppel, if the citizen altered their position based on a clear government representation (Motilal Padampat Sugar Mills).'
      }
    ],
    tags: ['writs-constitutional', 'writ', 'mandamus', 'certiorari', 'prohibition', 'article 226', 'administrative law', 'natural justice']
  }
];
