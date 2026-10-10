// ─── ARREST, CUSTODIAL RIGHTS & BAIL REMEDIES ─────────────────────────────────
// Authoritative procedural and constitutional protections under BNSS 2023 & Constitution

export const ARREST_BAIL_REMEDIES = [
  {
    id: 'rem-arrest-handcuffing-custody',
    slug: 'arrest-safeguards-handcuffing-custodial-rights-dk-basu',
    title: 'Arrest & Custodial Safeguards: Rights Against Handcuffing, Third-Degree Torture & Arbitrary Detention',
    category: 'Arrest, Custodial Rights & Bail Remedies',
    remedyType: 'Constitutional & Statutory Rights Enforcement',
    urgencyLevel: 'Emergency (Immediate during Arrest)',
    forum: 'Jurisdictional Judicial Magistrate / Sessions Court / High Court / NHRC',
    summary: 'Enforceable constitutional and statutory safeguards during police arrest: mandatory grounds communication, right to inform family within 8–12 hours, presence of an advocate during interrogation, and strict constitutional ban on routine handcuffing.',
    whenToUse: 'When police effect an arrest without specifying grounds, refuse phone access to relatives/advocate, use physical violence, or place handcuffs on an undertrial without magistrate permission.',
    overview: 'The moment of arrest is the most vulnerable point in the interface between a citizen and the state coercive apparatus. The Supreme Court in D.K. Basu v. State of West Bengal and Arnesh Kumar v. State of Bihar transformed statutory arrest rules into binding constitutional mandates. The Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) codifies these safeguards: Section 35(3) requires prior notice before arrest for offences under 7 years; Section 36 mandates the preparation of an Arrest Memo with an attesting witness; Section 37 guarantees the right to inform a friend/relative; Section 38 guarantees the right to meet an advocate during interrogation; and Section 53 mandates medical examination before magistrate production. Furthermore, routine handcuffing is unconstitutional under Prem Shankar Shukla v. Delhi Administration.',
    statutoryBasis: 'Constitution of India — Article 21, Article 22(1), Article 22(2); BNSS 2023 — Section 35 (Arrest when police may arrest without warrant), Section 35(3) (Notice of appearance), Section 36 (Arrest memo), Section 37 (Information of arrest to nominated person), Section 38 (Right of arrested person to meet advocate), Section 43 (Arrest how made & Handcuffing parameters), and Section 53 (Examination of arrested person by medical officer).',
    scopeAndEligibility: {
      whoCanInvoke: 'Every person arrested, detained, or summoned by the police, state law enforcement, or central investigative agencies (CBI, ED, NIA).',
      againstWhom: 'Police officers, investigating agencies, and custodial detention officers.',
      statutoryExceptions: 'Under Section 43(3) BNSS, police may use handcuffs during arrest or court production ONLY for habitual, repeat offenders, or persons accused of heinous offences (terrorist act, murder, rape, acid attack, organized crime), after recording reasons in writing; routine handcuffing remains barred.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Arrest for 3-Year Offence Without Prior Section 35(3) BNSS Notice',
        facts: 'Police arrested a shopkeeper for alleged copyright infringement (punishable up to 3 years) directly from his shop without issuing a prior Notice of Appearance under Section 35(3) BNSS (Old Sec 41A CrPC).',
        legalViolation: 'Direct violation of Arnesh Kumar v. State of Bihar and Section 35(3) BNSS; arrest for offences under 7 years without written reasons is illegal and constitutes contempt of court.',
        applicableRemedy: 'Advocate mentions the violation before the Magistrate during remand hearing, praying for rejection of remand and initiation of departmental proceedings against the IO.'
      },
      {
        scenarioTitle: 'Handcuffing of a White-Collar Professional in Public Courtroom',
        facts: 'A bank accountant accused of financial irregularities was paraded in handcuffs from the police lockup through the court corridors without any order from the Magistrate permitting handcuffs.',
        legalViolation: 'Violation of human dignity under Article 21 and binding rulings in Prem Shankar Shukla and Citizens for Democracy v. State of Assam.',
        applicableRemedy: 'Filing an application before the Magistrate for immediate removal of handcuffs, recording judicial censure in the order sheet, and reporting to State Human Rights Commission.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Demand for Grounds of Arrest & Section 36 BNSS Memo',
        action: 'The arrested person or advocate immediately demands to know the exact penal sections and grounds of arrest in writing. Demand the execution of the Arrest Memo signed by at least one family member or respected neighborhood witness.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Activation of Right to Inform Family (Sec 37 BNSS)',
        action: 'Insist that the police Duty Officer dial and inform the nominated friend, relative, or advocate of the arrest and the exact police station location within 8 to 12 hours, and enter this call into the Station Diary.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Invoking Right to Advocate Presence (Sec 38 BNSS)',
        action: 'Under Section 38 BNSS, the arrested person has the statutory right to meet their advocate throughout interrogation, though not throughout the entire interrogation period (Senior Advocate presence permitted during questioning).'
      },
      {
        stageNumber: 4,
        stageTitle: 'Mandatory Government Medical Examination (Sec 53 BNSS)',
        action: 'Before being taken to the Magistrate, the police must produce the accused before a government medical officer. The accused must point out any custodial beatings, bruises, or torture so they are recorded in the Medico-Legal Certificate (MLC).'
      },
      {
        stageNumber: 5,
        stageTitle: 'Opposition to Police Remand before Magistrate (Sec 187 BNSS)',
        action: 'At the remand hearing within 24 hours, defense counsel points out all procedural violations (handcuffing, missing arrest memo, torture). Counsel argues that custodial remand is unnecessary and moves for regular bail.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Contempt Petition & NHRC Redressal for Custodial Violence',
        action: 'If the police subjected the accused to custodial torture or illegal detention, file a Contempt Petition before the High Court under Arnesh Kumar / D.K. Basu guidelines and claim monetary compensation.'
      }
    ],
    documentsAndEvidence: [
      'Copy of the Arrest Memo signed under Section 36 BNSS.',
      'Copy of the Medico-Legal Examination Report (MLC) under Section 53 BNSS.',
      'General Diary (GD) extract showing time of arrival at the police station.',
      'Photographs or video evidence of unauthorized handcuffing or public parading.',
      'Remand Application submitted by the police and written objections filed by defense.',
      'Vakalatnama executed by the accused or their pairokar.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Court of Judicial Magistrate First Class (JMFC) / Metropolitan Magistrate conducting remand.',
      supervisoryForum: 'Chief Judicial Magistrate (CJM) / Sessions Court.',
      constitutionalForum: 'High Court under Article 226 / Contempt of Courts Act, 1971.',
      humanRightsForum: 'National Human Rights Commission (NHRC) / State Human Rights Commission (SHRC).'
    },
    limitationAndDeadlines: 'Strict 24-hour limit under Article 22(2) and Section 58 BNSS to produce arrested person before the nearest Magistrate (excluding travel time).',
    possibleOutcomes: [
      'Magistrate refuses police custodial remand and releases accused on regular bail.',
      'Magistrate orders immediate medical re-examination by a Medical Board at a civil hospital.',
      'Departmental action and contempt proceedings initiated against the Investigating Officer.',
      'Removal of handcuffs ordered with judicial strictures against the police escort.'
    ],
    landmarkJudgments: [
      {
        title: 'Arnesh Kumar v. State of Bihar',
        citation: '(2014) 8 SCC 273',
        court: 'Supreme Court of India',
        holding: 'Mandatory guidelines for offences punishable up to 7 years: police shall not automatically arrest the accused upon registration of FIR; police must serve Notice of Appearance under Section 41A (now Sec 35(3) BNSS); failure to do so renders officers liable for departmental action and contempt.'
      },
      {
        title: 'Prem Shankar Shukla v. Delhi Administration',
        citation: '(1980) 3 SCC 526 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Handcuffing is prima facie inhuman, degrading, and violative of Article 21; routine handcuffing of undertrials without recording compelling reasons and obtaining prior magistrate permission is unconstitutional.'
      },
      {
        title: 'Satender Kumar Antil v. CBI',
        citation: '(2022) 10 SCC 51',
        court: 'Supreme Court of India',
        holding: 'Reiterated that personal liberty is paramount; Magistrates must ensure strict compliance with arrest guidelines before granting remand; bail must be granted when the accused was not arrested during investigation.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'During the 24-hour magistrate production, always ask the magistrate to inspect the physical body of the client for custodial injuries and endorse "No injuries" or document marks on the remand order.',
      commonPitfalls: 'Failing to complain to the magistrate on the first production date about custodial torture, which makes subsequent torture claims appear as an afterthought.',
      tacticalAdvice: 'If the police used handcuffs in court corridors, immediately photograph the client on phone (if permitted) and file an application on the spot before the Magistrate recording the contempt.'
    },
    hindiExplanation: 'गिरफ्तारी और हिरासत में कानूनी सुरक्षा: भारत में पुलिस किसी भी नागरिक को बिना कारण बताए गिरफ्तार नहीं कर सकती। 7 साल से कम सजा वाले मामलों में पहले नोटिस देना अनिवार्य है। गिरफ्तारी का मेमो (Arrest Memo) बनना जरूरी है, परिवार को 8-12 घंटे में सूचना देना पुलिस का कर्तव्य है, वकील से मिलने का अधिकार है, और 24 घंटे के भीतर मजिस्ट्रेट के सामने पेश करना अनिवार्य है। इसके अलावा, सुप्रीम कोर्ट के अनुसार कैदियों को बिना मजिस्ट्रेट की अनुमति के हथकड़ी लगाना असंवैधानिक और मानवाधिकारों का उल्लंघन है।',
    faqs: [
      {
        q: 'Can a female be arrested after sunset and before sunrise?',
        a: 'Under Section 43(6) BNSS (Old Sec 46(4) CrPC), no woman can be arrested after sunset and before sunrise, except in exceptional circumstances with prior written permission of a Judicial Magistrate First Class and in the presence of a woman police officer.'
      },
      {
        q: 'What should a citizen do if police refuse to disclose the grounds of arrest?',
        a: 'Under Section 47 BNSS and Article 22(1), grounds of arrest must be communicated immediately; refusal makes the arrest illegal, entitling the citizen to resist unlawful confinement and move the High Court via Habeas Corpus.'
      }
    ],
    tags: ['arrest-detention-rights', 'arrest safeguards', 'handcuffing ban', 'arnesh kumar', 'prem shankar shukla', 'section 35 bnss', 'section 53 medical', 'custodial torture']
  },

  {
    id: 'rem-anticipatory-bail-arrest-shield',
    slug: 'anticipatory-bail-pre-arrest-protection-section-482-bnss',
    title: 'Pre-Arrest Protection: Anticipatory Bail under Section 482 BNSS (Old Sec 438 CrPC)',
    category: 'Arrest, Custodial Rights & Bail Remedies',
    remedyType: 'Statutory Pre-Arrest Judicial Injunction',
    urgencyLevel: 'Emergency (Imminent Threat of Arrest)',
    forum: 'Court of Session / High Court (Concurrent Statutory Jurisdiction)',
    summary: 'Proactive judicial shield protecting an individual from arrest in anticipation of being falsely implicated or arrested in a non-bailable offence, directing that in the event of arrest, the person shall be released immediately on bail.',
    whenToUse: 'When an FIR has been lodged or is imminent in a non-bailable case, and the applicant has reasonable apprehension of arrest stemming from commercial rivalry, political vendetta, or matrimonial dispute.',
    overview: 'Anticipatory Bail under Section 482 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 438 CrPC) is a vital procedural instrument for preserving personal liberty and preventing the ignominy of custodial arrest. In the 5-Judge Constitution Bench ruling in Sushila Aggarwal v. State (NCT of Delhi), the Supreme Court ruled that protection granted under anticipatory bail should not ordinarily be limited to a fixed time period and can continue till the conclusion of trial. The court balances individual liberty against the requirements of effective investigation, typically attaching conditions to join investigation and surrender passport.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 482 (Direction for grant of bail to person apprehending arrest), Section 484 (Anticipatory bail in transit), and Section 485 (Bonds of accused and sureties); read with Article 21 of the Constitution.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any person who has a reasonable apprehension of arrest in connection with an alleged non-bailable offence.',
      againstWhom: 'Police authorities and state prosecuting agencies.',
      statutoryExceptions: 'Under Section 18/18A of the SC/ST (Prevention of Atrocities) Act, 1989, anticipatory bail is barred unless a prima facie reading of the complaint discloses no caste-based offence (Prathvi Raj Chauhan v. Union of India).'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Imminent Arrest in Fabricated Commercial Cheating Case',
        facts: 'A business partner in a real estate development dispute lodged a criminal FIR alleging cheating (Sec 318(4) BNS) and criminal breach of trust against his co-director following an audited profit dispute.',
        legalViolation: 'Abuse of criminal process to settle commercial disputes; risk of arrest and incarceration for a contractual controversy.',
        applicableRemedy: 'Filing an Anticipatory Bail application under Section 482 BNSS before the Sessions Court demonstrating civil nature and willingness to cooperate with investigation.'
      },
      {
        scenarioTitle: 'Threat of Custodial Arrest of Elderly In-Laws in Matrimonial Dispute',
        facts: 'Following marital separation, a spouse filed a complaint naming the husband 78-year-old bedridden mother and brother residing abroad under Section 85 BNS (498A IPC).',
        legalViolation: 'Over-implication of distant relatives contrary to Geeta Mehrotra and Preeti Gupta guidelines.',
        applicableRemedy: 'Urgent Anticipatory Bail petition before the High Court seeking interim protection ("no coercive steps") for elderly relatives.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Drafting Anticipatory Bail Petition & Interim Protection Memo',
        action: 'Draft petition detailing facts, lack of criminal antecedents, deep roots in society, and willingness to join investigation. Move an urgent application for ad-interim protection pending notice.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Filing in Sessions Court (or High Court directly in exceptional cases)',
        action: 'Lodge petition before the Sessions Judge / ASJ. Serve advance copy on the Public Prosecutor. Court registers Anticipatory Bail (ABA No.) and calls for Case Diary from the IO.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Hearing on Ad-Interim Protection',
        action: 'On the first hearing date, defense counsel argues that arrest would cause irreparable loss of reputation. Court grants ad-interim order: "In the event of arrest, applicant shall be released on furnishing personal bond of ₹50,000, subject to joining investigation".'
      },
      {
        stageNumber: 4,
        stageTitle: 'Joining Police Investigation & Cooperation',
        action: 'The applicant visits the police station as directed, meets the IO, submits written statement and documents, and obtains a signed written acknowledgement of joining investigation.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Final Hearing on Confirmation of Bail',
        action: 'Court hears Public Prosecutor and Defense Counsel. Court confirms the anticipatory bail order till the conclusion of trial under Sushila Aggarwal doctrine, attaching standard bail conditions.'
      }
    ],
    documentsAndEvidence: [
      'Copy of the First Information Report (FIR) or complaint (if available).',
      'Proof of reasonable apprehension of arrest (police notices, news reports, witness summons).',
      'Documentary evidence establishing innocence or civil nature of dispute (contracts, bank receipts, emails).',
      'Clean criminal antecedent affidavit by the applicant.',
      'Address and identity proofs establishing deep roots in society (passport, Aadhaar, property ownership).',
      'Vakalatnama executed by the applicant.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Court of Session having territorial jurisdiction over the police station.',
      concurrentHighCourtForum: 'High Court of the State (can be approached directly or after rejection by Sessions).',
      transitBailForum: 'High Court / Sessions Court of the state where applicant currently resides (Transit Anticipatory Bail under Priya Indoria doctrine).'
    },
    limitationAndDeadlines: 'Must be filed BEFORE physical arrest is effected. Once the person is arrested, Section 482 is no longer maintainable; the remedy shifts to regular bail under Section 483 BNSS.',
    possibleOutcomes: [
      'Anticipatory bail granted till conclusion of trial with standard cooperation conditions.',
      'Interim protection granted directing notice to IO with date fixed for final hearing.',
      'Dismissal of anticipatory bail if custodial interrogation is indispensable (e.g. recovery of murder weapon).',
      'Grant of Transit Anticipatory Bail for 2 to 4 weeks to enable approaching the jurisdictional state court.'
    ],
    landmarkJudgments: [
      {
        title: 'Sushila Aggarwal v. State (NCT of Delhi)',
        citation: '(2020) 5 SCC 1 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Anticipatory bail granted under Section 438 CrPC (now Section 482 BNSS) should not be restricted to a limited time period as a general rule; it can continue until the conclusion of the trial unless special circumstances warrant limitation.'
      },
      {
        title: 'Gurbaksh Singh Sibbia v. State of Punjab',
        citation: '(1980) 2 SCC 565 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Section 438 is a device to secure the personal liberty of a citizen; courts should not read in restrictions not found in the statute; the power to grant anticipatory bail is extraordinary and discretionary.'
      },
      {
        title: 'Priya Indoria v. State of Karnataka',
        citation: '(2024) 4 SCC 749',
        court: 'Supreme Court of India',
        holding: 'Recognized the jurisdiction of Sessions Courts and High Courts to grant "Transit Anticipatory Bail" to protect citizens residing outside the state where the FIR was lodged, granting interim protection to approach the jurisdictional court.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Ensure the client has NOT been arrested before filing; once custody occurs, Section 482 becomes non-maintainable and will be dismissed as infructuous.',
      commonPitfalls: 'Failing to join investigation after securing interim protection; police will immediately move for cancellation of bail under Section 483(3) BNSS for non-cooperation.',
      tacticalAdvice: 'In inter-state cases, file for Transit Anticipatory Bail before your local High Court citing Priya Indoria to secure 3 weeks protection before traveling to the other state.'
    },
    hindiExplanation: 'अग्रिम जमानत (Anticipatory Bail) भारतीय नागरिक सुरक्षा संहिता की धारा 482 के तहत एक सुरक्षा कवच है। जब किसी व्यक्ति को यह आशंका होती है कि उसे किसी गैर-जमानती अपराध में झूठा फंसाकर गिरफ्तार किया जा सकता है, तो वह गिरफ्तारी से पहले ही सत्र न्यायालय या उच्च न्यायालय से अग्रिम जमानत मांग सकता है। अदालत अग्रिम जमानत देते हुए आदेश देती है कि यदि पुलिस गिरफ्तार करने आए, तो व्यक्ति को तुरंत मुचलके पर रिहा कर दिया जाए।',
    faqs: [
      {
        q: 'Can anticipatory bail be applied for after a chargesheet is filed?',
        a: 'Yes. The Supreme Court in Sushila Aggarwal held that anticipatory bail can be granted even after the chargesheet is filed if the accused was not arrested during investigation.'
      },
      {
        q: 'What is Transit Anticipatory Bail?',
        a: 'It is a temporary pre-arrest bail granted by a court where the accused resides, giving them time (usually 2 to 4 weeks) to travel and apply for regular anticipatory bail in the state where the FIR is registered.'
      }
    ],
    tags: ['arrest-detention-rights', 'anticipatory bail', 'section 482 bnss', 'crpc 438', 'sushila aggarwal', 'transit bail', 'pre-arrest', 'liberty']
  },

  {
    id: 'rem-default-statutory-bail-187',
    slug: 'default-bail-statutory-indefeasible-right-section-187-bnss',
    title: 'Indefeasible Right to Default/Statutory Bail under Section 187(3) BNSS upon 60/90 Day Expiry',
    category: 'Arrest, Custodial Rights & Bail Remedies',
    remedyType: 'Statutory Indefeasible Fundamental Right',
    urgencyLevel: 'Emergency (On 61st / 91st Day of Custody)',
    forum: 'Court of Judicial Magistrate / Special Court trying the offence',
    summary: 'Absolute and non-negotiable statutory right of an undertrial prisoner to be released on bail when the police fail to file the complete Chargesheet within 60 or 90 days of initial remand, flowing directly from Article 21 personal liberty.',
    whenToUse: 'On the morning of the 61st day (for offences under 10 years) or 91st day (for offences punishable with 10+ years/life/death) when no chargesheet has been filed in court.',
    overview: 'Section 187(3) of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 167(2) CrPC) establishes the "Default Bail" or "Statutory Bail" regime. It is not a discretionary concession; it is an indefeasible statutory right flowing directly from the constitutional guarantee of speedy justice under Article 21 (Bikramjit Singh v. State of Punjab & M. Ravindran v. Directorate of Revenue Intelligence). If the investigating agency fails to complete the investigation and file a valid, complete chargesheet within the statutory window of 60 or 90 days, the accused acquires an absolute right to be released on bail, provided an oral or written application is made and the accused is ready to furnish bail bonds.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 187(2) & 187(3) (Procedure when investigation cannot be completed in twenty-four hours); read with Article 21 of the Constitution.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any undertrial prisoner in judicial custody who has completed 60 or 90 days of continuous detention without a chargesheet being filed.',
      timePeriodComputation: '60 days: Where investigation relates to any offence punishable with imprisonment up to 10 years; 90 days: Where investigation relates to an offence punishable with death, life imprisonment, or minimum 10 years imprisonment.',
      statutoryExceptions: 'Under special statutes like UAPA (Section 43D(2)) or NDPS Act (Section 36A(4)), the 90-day period can be extended up to 180 days by the Special Court upon a formal report submitted by the Public Prosecutor indicating progress and compelling reasons.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Police Filing Incomplete Chargesheet on 89th Day to Defeat Default Bail',
        facts: 'Police filed a skeletal "chargesheet" on Day 89 without annexing the mandatory FSL chemical analysis report, ballistic opinion, or sanction order, intending solely to block default bail.',
        legalViolation: 'An incomplete chargesheet that is a mere placeholder is not a police report under Section 193 BNSS; it does not extinguish the right to default bail (Ritu Chhabaria v. Union of India).',
        applicableRemedy: 'Filing Section 187(3) default bail application asserting that a piecemeal investigation does not extinguish the accrued right to statutory release.'
      },
      {
        scenarioTitle: 'Magistrate Entertaining Belated Chargesheet While Bail Application is Pending',
        facts: 'Accused filed Section 187(3) application at 10:30 AM on Day 91. At 2:00 PM, the police submitted the chargesheet. The Magistrate rejected the bail application citing the afternoon chargesheet.',
        legalViolation: 'Direct violation of M. Ravindran and Sanjay Dutt: the moment the accused files for default bail before the chargesheet is submitted, the right gets "availed of" and cannot be defeated by a subsequent chargesheet.',
        applicableRemedy: 'Criminal Revision before the High Court challenging the magistrate order as illegal and contrary to binding Constitution Bench precedents.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Exact Day Count & Computation of Remand Period',
        action: 'Calculate the continuous days of custody starting from the day of initial remand by the magistrate. Confirm whether the 60-day or 90-day period expired at midnight of Day 60/90.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Immediate Filing of Section 187(3) BNSS Application',
        action: 'File the application before the Magistrate at the opening of court (10:00 AM) on the 61st or 91st day, affirming that the statutory period has expired, no chargesheet is on record, and the accused is ready to furnish solvent sureties.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Verification of Court Scrutiny Register',
        action: 'Ensure the court reader / peshkar endorses the exact filing timestamp (e.g. "Filed at 10:15 AM on 15.04.2025") to prove the application was lodged before any late police chargesheet arrival.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Judicial Hearing & Verification of Accrued Right',
        action: 'The Magistrate verifies from the court registry whether a complete police report under Section 193 BNSS was filed before the application. The Magistrate cannot evaluate the merits or gravity of the offence.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Order Granting Default Bail & Furnishing Sureties',
        action: 'The court is bound to pass an order granting default bail. Accused furnishes bail bonds and sureties, securing immediate release from jail.'
      }
    ],
    documentsAndEvidence: [
      'Copy of the initial Remand Order showing the date on which custody commenced.',
      'Court filing receipt with date and timestamp showing presentation before chargesheet.',
      'Certificate from the Court Naib Court / Registry stating no chargesheet was filed till expiry date.',
      'Affidavit of readiness to furnish solvent bail bonds.',
      'Vakalatnama executed by the accused in jail (attested by Jail Superintendent).'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Jurisdictional Judicial Magistrate / Special Court having custody of the accused.',
      revisionForum: 'Sessions Court / High Court under Section 438/442 BNSS against wrongful rejection of default bail.'
    },
    limitationAndDeadlines: 'Application MUST be filed before the chargesheet is actually submitted in court. If the chargesheet is filed even 5 minutes before the bail application is lodged, the indefeasible right is extinguished (Sanjay Dutt ruling).',
    possibleOutcomes: [
      'Immediate grant of default bail upon furnishing personal bond and sureties.',
      'Magistrate wrongful rejection quashed in criminal revision by Sessions / High Court with immediate release.',
      'Rejection if police filed chargesheet within 60/90 days or obtained statutory extension under UAPA/NDPS.'
    ],
    landmarkJudgments: [
      {
        title: 'M. Ravindran v. Directorate of Revenue Intelligence',
        citation: '(2021) 2 SCC 485 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Default bail under Section 167(2) CrPC (now Section 187(3) BNSS) is an indefeasible fundamental right; the moment the accused files an application on the expiry of the statutory period, the right becomes complete and cannot be frustrated by the prosecution filing a subsequent chargesheet.'
      },
      {
        title: 'Bikramjit Singh v. State of Punjab',
        citation: '(2020) 10 SCC 616',
        court: 'Supreme Court of India',
        holding: 'The right to default bail is not merely a statutory right under criminal procedure, but is part of the procedure established by law under Article 21; any detention beyond 60/90 days without a chargesheet or valid extension is unconstitutional.'
      },
      {
        title: 'Ritu Chhabaria v. Union of India',
        citation: '(2023) SCC OnLine SC 502',
        court: 'Supreme Court of India',
        holding: 'Filing of an incomplete chargesheet without completing the investigation does not extinguish the right of the accused to default bail; investigation cannot be kept pending endlessly while depriving undertrials of default bail.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Count calendar days with surgical precision; make sure not to file on Day 60/90 (premature), but strictly on Day 61/91; file at the earliest hour of court opening.',
      commonPitfalls: 'Filing the application after the police have already filed the chargesheet at 11:00 AM; the right is lost the moment a valid chargesheet enters the court record.',
      tacticalAdvice: 'Ensure your application explicitly states: "The applicant is ready and willing to furnish solvent bail bonds as directed by this Hon ble Court."'
    },
    hindiExplanation: 'डिफ़ॉल्ट या वैधानिक जमानत (Default Bail) धारा 187(3) BNSS के तहत एक ऐसा अधिकार है जिसे छीना नहीं जा सकता। यदि पुलिस किसी गिरफ्तार व्यक्ति के खिलाफ कानूनन तय समय (10 साल से कम सजा वाले मामलों में 60 दिन और गंभीर मामलों में 90 दिन) के भीतर चार्जशीट (आरोप पत्र) दाखिल नहीं कर पाती है, तो आरोपी को बिना केस के मेरिट पर विचार किए जमानत पर रिहा होने का कानूनी और संवैधानिक अधिकार मिल जाता है।',
    faqs: [
      {
        q: 'Can the court refuse default bail by looking at the gravity of the crime (e.g. murder)?',
        a: 'No. The Supreme Court has repeatedly held that the gravity of the offence is completely irrelevant when deciding an application for default bail under Section 187(3) BNSS.'
      },
      {
        q: 'Does default bail expire after the chargesheet is subsequently filed?',
        a: 'No. Once default bail is granted, it is treated as regular bail under Section 480/483 BNSS and remains valid throughout the trial unless cancelled for breach of conditions.'
      }
    ],
    tags: ['arrest-detention-rights', 'default bail', 'statutory bail', 'section 187 bnss', 'crpc 167(2)', 'm ravindran', 'bikramjit singh', 'indefeasible right']
  },

  {
    id: 'rem-medical-examination-custodial-rights',
    slug: 'mandatory-medical-examination-custodial-violence-safeguards',
    title: 'Mandatory Medical Examination & Section 53 BNSS Safeguards Against Custodial Violence',
    category: 'Arrest, Custodial Rights & Bail Remedies',
    remedyType: 'Statutory Health & Human Rights Protection',
    urgencyLevel: 'Emergency (Within 12 to 24 Hours)',
    forum: 'Jurisdictional Judicial Magistrate / Government District Hospital / NHRC',
    summary: 'Absolute statutory right of every arrested person to be medically examined by a registered government medical officer immediately after arrest, with injuries recorded in writing to prevent and prosecute custodial third-degree torture.',
    whenToUse: 'Immediately upon arrest, during police remand, before magistrate production, or whenever an accused is subjected to police assault, beating, or denial of emergency medical treatment.',
    overview: 'Section 53 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 54 CrPC) transforms medical examination from an administrative formality into an essential constitutional shield against police brutality. Under Section 53, every person arrested shall be examined by a medical officer in the service of the Central or State Government immediately after arrest. The medical officer is legally obligated to prepare a detailed injury report recording the exact nature of bruises, contusions, and fractures, and the approximate time when they were inflicted. A copy of the medical report must be furnished to the arrested person or their nominee.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 53 (Examination of arrested person by medical officer), Section 54 (Identification of person arrested); read with Article 21 and Supreme Court guidelines in D.K. Basu.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any person arrested or taken into police or judicial custody, or their family members and defense counsel.',
      againstWhom: 'Investigating officers, lockup guards, and medical officers who falsify or conceal injury reports.',
      statutoryExceptions: 'Female arrestees can only be examined by, or under the supervision of, a female registered medical practitioner.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Police Concealing Custodial Assault by Presenting Fake "Fit" Certificate',
        facts: 'An accused was beaten with leather belts during overnight police interrogation. The IO brought a private clinic prescription stating "no fresh external injuries" instead of conducting an examination at a government civil hospital.',
        legalViolation: 'Violation of Section 53 BNSS and D.K. Basu guidelines; private doctor certificates cannot substitute for mandatory government medical officer examination.',
        applicableRemedy: 'Defense counsel moves an immediate application before the Magistrate requesting an independent Medical Board examination at a tertiary hospital (AIIMS / Government Medical College).'
      },
      {
        scenarioTitle: 'Denial of Insulin and Cardiac Medication to Chronically Ill Detenu',
        facts: 'A 60-year-old diabetic undertrial was denied his prescribed insulin injections and heart medication for three days in the police lockup, causing severe diabetic ketoacidosis.',
        legalViolation: 'Deprivation of essential medical care constitutes cruel and unusual punishment violating Article 21 right to life (Sunil Batra v. Delhi Administration).',
        applicableRemedy: 'Filing an emergency application before the Duty Magistrate for immediate transfer to an intensive care unit (ICU) and grant of interim medical bail.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Demand for Government Medical Officer Examination',
        action: 'Arrested person or counsel demands that medical examination be conducted strictly at a recognized government civil hospital under Section 53 BNSS before being produced in court.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Detailed Narration of Custodial Assault to the Doctor',
        action: 'The accused must explicitly inform the examining doctor of every blow, belt strike, or torture technique used by the police, and insist that each contusion and laceration be recorded in the MLC.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Procurement of Copy of Section 53 BNSS Medical Report',
        action: 'Under Section 53(2) BNSS, the medical officer must provide a copy of the examination report to the arrested person or their nominated person. Counsel obtains this copy immediately.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Physical Inspection Request before the Magistrate',
        action: 'During the 24-hour magistrate production, counsel requests the Magistrate to visually inspect the injuries on the accused body and record them in the judicial order sheet.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Application for Constitution of an Independent Medical Board',
        action: 'If police manipulated the initial medical report, move an application under Section 53 BNSS for the constitution of a 3-member Medical Board at a government medical college for forensic re-examination.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Initiation of Criminal Complaint for Custodial Torture',
        action: 'Based on the Medical Board report, file an application under Section 175(3) BNSS or criminal complaint under Section 115/118 BNS (voluntarily causing hurt) against the delinquent police officers.'
      }
    ],
    documentsAndEvidence: [
      'Original or certified copy of the Medico-Legal Examination Report (MLC).',
      'Medical prescriptions, prior hospital treatment records for chronic ailments.',
      'Order sheet of the Magistrate recording physical inspection of injuries.',
      'Photographs of contusions and injuries taken pursuant to court directions.',
      'Vakalatnama executed by the accused or family member.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Court of Judicial Magistrate First Class (conducting remand).',
      medicalForum: 'Government Civil Hospital / District Medical Board.',
      humanRightsForum: 'National Human Rights Commission (mandatory reporting of custodial deaths/injuries within 24 hours).'
    },
    limitationAndDeadlines: 'Medical examination must be conducted within 24 hours of arrest and repeated every 48 hours during police custody under D.K. Basu guidelines.',
    possibleOutcomes: [
      'Magistrate refuses police custodial remand and sends accused to judicial custody or grants interim medical bail.',
      'Magistrate orders immediate admission to a government specialty hospital at state expense.',
      'Judicial inquiry initiated under Section 196 BNSS into custodial violence.',
      'Registration of criminal FIR against investigating officers for custodial torture.'
    ],
    landmarkJudgments: [
      {
        title: 'Sheela Barse v. State of Maharashtra',
        citation: '(1983) 2 SCC 96',
        court: 'Supreme Court of India',
        holding: 'Mandatory duty of magistrates to inform arrested persons of their right to be medically examined; Magistrates must physically inspect the body of the accused if any allegation of custodial torture is raised.'
      },
      {
        title: 'Munshi Singh Gautam v. State of M.P.',
        citation: '(2005) 9 SCC 631',
        court: 'Supreme Court of India',
        holding: 'Custodial violence and torture are a calculated assault on human dignity; courts must deal with delinquent police officers with an iron hand; medical records are primary evidence to prove custodial brutality.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Always request the magistrate to mention in the remand order: "Accused was physically inspected; complaints of back pain and contusions recorded; directed to be medically examined again tomorrow."',
      commonPitfalls: 'Relying on verbal claims of torture without ensuring that the civil hospital doctor records the injuries in the official MLC register.',
      tacticalAdvice: 'If police delay medical examination, immediately send a telegram/email to the Chief Medical Officer (CMO) and District Judge recording the intentional deprivation.'
    },
    hindiExplanation: 'हिरासत में चिकित्सीय जांच का अधिकार: धारा 53 BNSS के तहत हर गिरफ्तार व्यक्ति का यह कानूनी अधिकार है कि गिरफ्तारी के तुरंत बाद किसी सरकारी अस्पताल के डॉक्टर से उसका मेडिकल कराया जाए। यदि पुलिस हिरासत में मारपीट या थर्ड डिग्री टॉर्चर करती है, तो डॉक्टर का यह कानूनी दायित्व है कि वह शरीर पर आई हर चोट और निशान को अपनी मेडिकल रिपोर्ट (MLC) में दर्ज करे। यह रिपोर्ट अदालत में पुलिस के खिलाफ सबूत बनती है और आरोपी को तुरंत जमानत दिलाने में मदद करती है।',
    faqs: [
      {
        q: 'Can a female arrestee be examined by a male doctor?',
        a: 'No. The law strictly mandates that a female arrested person can only be medically examined by, or under the direct supervision of, a female registered medical practitioner.'
      },
      {
        q: 'How often must an accused in police custody be medically examined?',
        a: 'Under the Supreme Court D.K. Basu guidelines, an accused in police custody must be medically examined by a doctor from the approved panel every 48 hours throughout the custody period.'
      }
    ],
    tags: ['arrest-detention-rights', 'medical examination', 'section 53 bnss', 'crpc 54', 'custodial violence', 'dk basu', 'sheela barse', 'human rights']
  },

  {
    id: 'rem-magistrate-production-24hr-rule',
    slug: '24-hour-magistrate-production-rule-article-22-section-58-bnss',
    title: '24-Hour Production Mandate Before Nearest Magistrate: Section 58 BNSS & Article 22(2)',
    category: 'Arrest, Custodial Rights & Bail Remedies',
    remedyType: 'Constitutional Mandatory Safeguard',
    urgencyLevel: 'Emergency (Strict 24-Hour Hard Stop)',
    forum: 'Nearest Judicial Magistrate / Duty Magistrate / High Court',
    summary: 'Non-negotiable constitutional requirement mandating that any person arrested and detained in custody must be produced before the nearest Judicial Magistrate within exactly 24 hours of arrest, excluding travel time.',
    whenToUse: 'Whenever police detain an individual beyond 24 hours without producing them physically or via authorized video-conferencing before a Judicial Magistrate.',
    overview: 'The 24-hour rule is the supreme constitutional bridge between executive arrest and judicial scrutiny. Enshrined in Article 22(2) of the Constitution and codified in Section 58 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 57 CrPC), it mandates that no police officer shall detain in custody a person arrested without a warrant for a longer period than under all the circumstances of the case is reasonable, and such period shall not exceed twenty-four hours exclusive of the time necessary for the journey. Detention beyond 24 hours without an order of remand passed by a magistrate is unlawful detention, renders the officers liable for false imprisonment, and entitles the citizen to immediate release.',
    statutoryBasis: 'Constitution of India — Article 22(2), Article 21; Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 58 (Person arrested not to be detained more than twenty-four hours), Section 187 (Procedure when investigation cannot be completed in 24 hours).',
    scopeAndEligibility: {
      whoCanInvoke: 'Every person arrested without warrant by the police anywhere in India.',
      againstWhom: 'Police officers, station house officers, and investigating agencies.',
      statutoryExceptions: 'Applies to every arrest except persons arrested under preventive detention laws or enemy aliens under Article 22(3).'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Inter-State Transit Arrest Without Local Magistrate Transit Remand',
        facts: 'Delhi Police arrested a tech professional in Bengaluru on a cybercrime complaint and flew him to Delhi without producing him before the nearest Bengaluru Judicial Magistrate for transit remand.',
        legalViolation: 'Gross violation of Article 22(2) and Section 58 BNSS; transit remand from the nearest magistrate is mandatory before moving an arrestee across state borders.',
        applicableRemedy: 'Filing a Writ of Habeas Corpus before the High Court of Karnataka or Delhi High Court challenging the arrest as void ab initio.'
      },
      {
        scenarioTitle: 'Informal Lockup Detention Over a Long Weekend',
        facts: 'Police arrested a citizen on Friday afternoon and kept him in the police lockup until Monday morning, claiming that the magistrate courts were closed for the weekend.',
        legalViolation: 'Magistrate availability is 24/7; every district has a designated "Duty Magistrate" for weekend and holiday productions; detention over the weekend without duty magistrate production is illegal.',
        applicableRemedy: 'Advocate approaches the designated Duty Magistrate at their residential office or moves the High Court for illegal confinement.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Calculation of the 24-Hour Production Clock',
        action: 'Record the exact time of physical apprehension (e.g., Friday 2:00 PM). The 24-hour production deadline expires exactly on Saturday at 2:00 PM (plus documented journey transit hours).'
      },
      {
        stageNumber: 2,
        stageTitle: 'Verification of Duty Magistrate Roster on Holidays',
        action: 'If the arrest occurs on a weekend or public holiday, consult the official District Court website to identify the designated "Duty Magistrate" on roster duty for that day.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Appearance before Duty Magistrate at Court / Residence',
        action: 'Defense advocate appears before the Duty Magistrate, presents a memo of appearance, and points out that the police have exceeded 24 hours without producing the accused.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Demand for Immediate Release on Default of Production',
        action: 'Under settled Supreme Court law (Manoj v. State of MP), if 24 hours elapse without magistrate production, the custody becomes illegal and the magistrate must decline remand and order release.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Execution of Bail Bonds & Filing of Compensation Claim',
        action: 'Upon release, preserve the remand rejection order and initiate a claim for monetary compensation before the High Court under Article 226 for unlawful deprivation of liberty.'
      }
    ],
    documentsAndEvidence: [
      'Station Diary (GD) extract showing time of arrest vs time of court departure.',
      'CCTV footage of police station entrance establishing arrival time.',
      'Order sheet of the Duty Magistrate recording the exact time of production.',
      'Flight or train journey tickets (in inter-state transit cases) to audit travel time exclusion.',
      'Vakalatnama executed by the relative/advocate.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Nearest Judicial Magistrate / Designated Duty Magistrate having jurisdiction.',
      appellateForum: 'Sessions Court / High Court under Article 226 (Habeas Corpus).'
    },
    limitationAndDeadlines: 'Strict 24-hour mandate; non-extendable by police under any administrative pretext.',
    possibleOutcomes: [
      'Immediate release of the accused due to expiry of the 24-hour constitutional window.',
      'Rejection of police remand application for violation of Article 22(2).',
      'Award of public law compensation against the State for illegal custodial detention.',
      'Disciplinary inquiry ordered against the arresting officer.'
    ],
    landmarkJudgments: [
      {
        title: 'State of Punjab v. Ajaib Singh',
        citation: '1953 SCR 254 (Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Article 22(2) provides a vital constitutional safeguard against arbitrary executive action; the arrested person must be brought before an independent judicial authority within 24 hours so that the judicial mind can be applied to the legality of the detention.'
      },
      {
        title: 'Manoj v. State of M.P.',
        citation: '(1999) 3 SCC 715',
        court: 'Supreme Court of India',
        holding: 'Production before a magistrate within 24 hours is a constitutional obligation; police cannot justify detention beyond 24 hours under the pretext of ongoing interrogation or lack of transport.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Always check the local Duty Magistrate roster on weekends; every district judiciary publishes a monthly duty roster ensuring 24/7 magistrate availability.',
      commonPitfalls: 'Accepting the police excuse that "the courts were closed for holiday"; duty magistrates are legally required to hold court at their official residence on holidays.',
      tacticalAdvice: 'Ensure the court reader notes the exact minute of production on the order sheet (e.g. "Produced at 4:35 PM") to establish that 24 hours were exceeded.'
    },
    hindiExplanation: '24 घंटे के भीतर मजिस्ट्रेट के समक्ष पेशी का अधिकार: भारतीय संविधान के अनुच्छेद 22(2) और BNSS की धारा 58 के अनुसार, पुलिस किसी भी गिरफ्तार व्यक्ति को 24 घंटे से अधिक समय तक अपनी हिरासत में नहीं रख सकती। यात्रा के समय को छोड़कर, 24 घंटे के भीतर निकटतम न्यायिक मजिस्ट्रेट (या अवकाश के दिन ड्यूटी मजिस्ट्रेट) के सामने पेश करना अनिवार्य है। यदि 24 घंटे में पेश नहीं किया जाता, तो वह हिरासत पूरी तरह अवैध हो जाती है और व्यक्ति को तुरंत रिहा किया जाना चाहिए।',
    faqs: [
      {
        q: 'Can the police produce the accused before an Executive Magistrate instead of a Judicial Magistrate?',
        a: 'Under Section 58 & 187 BNSS, production must strictly be before a Judicial Magistrate. Production before an Executive Magistrate is permissible only in exceptional situations where a Judicial Magistrate is unavailable, and detention cannot exceed 7 days.'
      },
      {
        q: 'Does the 24-hour clock stop during travel between states?',
        a: 'The time necessary for the journey from the place of arrest to the magistrate court is excluded, but the journey must be conducted without unreasonable delay and transit remand must be obtained from the local magistrate.'
      }
    ],
    tags: ['arrest-detention-rights', '24 hour rule', 'section 58 bnss', 'crpc 57', 'article 22(2)', 'duty magistrate', 'transit remand', 'illegal detention']
  }
];
