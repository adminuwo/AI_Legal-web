// ─── CHARGESHEET & SESSIONS TRIAL LITIGATION PROCEDURES ───────────────────────
// Comprehensive criminal trial workflows under Bharatiya Nagarik Suraksha Sanhita, 2023

export const TRIAL_SESSIONS_PROCEDURES = [
  {
    id: 'proc-trial-chargesheet-cognizance',
    slug: 'police-report-chargesheet-scrutiny-cognizance-section-193-bnss',
    title: 'Police Report / Chargesheet Scrutiny, Section 230 BNSS Supply of Copies & Cognizance',
    category: 'Chargesheet & Sessions Trial',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 193, 210, 227 & 230 (Old CrPC 173, 190, 204 & 207)',
    courtForum: 'Court of Chief Judicial Magistrate (CJM) / Judicial Magistrate First Class (JMFC)',
    estimatedTimeline: '60/90 days statutory filing → Scrutiny & Cognizance: 15 to 30 days',
    courtFeeLevel: 'Nil for prosecution / Accused copy entitled free of cost under Section 230 BNSS',
    overview: 'Upon conclusion of investigation, the police submit a Final Police Report (commonly called Chargesheet) under Section 193 BNSS containing the nature of information, names of parties, charges framed, and list of witnesses and documents. The Magistrate scrutinizes the report, takes judicial cognizance of the offence under Section 210(1)(b) BNSS, and issues process (summons/warrant) under Section 227 BNSS. Crucially, Section 230 BNSS mandates that the accused must be supplied, free of cost, with copies of the police report, FIR, witness statements, and forensic reports within 14 days of appearance.',
    legalBasis: 'Sections 193 (Police Report), 210 (Cognizance of offences by Magistrate), 227 (Issue of process), and 230 (Supply to accused of copy of police report and other documents) of BNSS 2023; read with Article 21 and SC ruling in P. Gopalkrishnan v. State of Kerala.',
    locusStandi: 'State through Public Prosecutor / Assistant Public Prosecutor. The accused is entitled to appear, challenge defective supply of documents, and apply for regular bail.',
    prerequisites: [
      'Submission of complete Police Report with Case Diary index and list of witnesses and seizures.',
      'Scrutiny by Prosecution Scrutiny Branch to ensure all mandatory sanction orders (under Section 218 BNSS) are annexed.',
      'Judicial application of mind by Magistrate taking cognizance of the offence (not of the offender).',
      'Accused appearance in court in response to summons or execution of bailable/non-bailable warrant.'
    ],
    statutoryLimitation: '60 days where investigation relates to an offence punishable with imprisonment up to 10 years; 90 days for offences punishable with death, life imprisonment, or minimum 10 years imprisonment under Section 187(3) BNSS.',
    mandatoryDocuments: [
      'Police Report in Form prescribed under Section 193 BNSS.',
      'First Information Report (FIR) and General Diary entries.',
      'Statements of all prosecution witnesses recorded under Section 180 BNSS.',
      'Confessional or statement records recorded under Section 183 BNSS by Magistrate.',
      'Seizure Memos (Japthi Panchnama) and Spot Inquest Reports.',
      'Forensic Science Laboratory (FSL) reports, DNA analysis, Ballistic reports, and Post-Mortem Reports.',
      'Certificate under Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA) for electronic records.'
    ],
    draftingGuidance: 'Defense counsel must draft an application under Section 230 BNSS for complete and legible supply of all relied and unrelied documents. Counsel must specifically audit whether any witness statement or document seized during investigation was withheld by the police, and move an application under Manoj v. State of MP for discovery of unrelied material favorable to the defense.',
    courtFeesFilingRules: 'Prosecution pays no court fees. Defense applications require ₹10–₹25 court fee stamp + Vakalatnama welfare stamp.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing of Chargesheet in Court',
        governingRule: 'Section 193(3) BNSS',
        actingParty: 'Investigating Officer & Court Naib Court',
        description: 'Police file the finalized chargesheet with all physical documents, seizure memos, and witness lists before the Magistrate Registry.',
        advocateTips: 'Check whether the chargesheet was filed within the 60/90 day deadline; if not, immediately move a default bail application under Section 187(3) BNSS.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Judicial Cognizance of the Offence',
        governingRule: 'Section 210(1)(b) BNSS',
        actingParty: 'Judicial Magistrate First Class',
        description: 'The Magistrate applies judicial mind to the police report and takes cognizance of the offences disclosed. Cognizance is taken of the offence, not the offender.',
        advocateTips: 'If cognizance is taken without valid sanction under Section 218 BNSS (for public servants), the cognizance order is bad in law and void ab initio.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Issue of Process (Summons / Warrants)',
        governingRule: 'Section 227 BNSS (Old Sec 204 CrPC)',
        actingParty: 'Magistrate',
        description: 'Magistrate issues summons for appearance of the accused (or warrants if accused is absconding or accused of heinous crime).',
        advocateTips: 'If the accused was not arrested during investigation and cooperated throughout, summons must be issued instead of non-bailable warrants (Satender Kumar Antil ruling).'
      },
      {
        stepNumber: 4,
        stepTitle: 'Supply of Copies to Accused under Section 230 BNSS',
        governingRule: 'Section 230 BNSS (Old Sec 207 CrPC)',
        actingParty: 'Court & Public Prosecutor',
        description: 'The Magistrate ensures the accused is supplied, without delay and free of cost, with copies of the police report, FIR, witness statements, and forensic reports within 14 days of appearance.',
        advocateTips: 'Inspect whether all digital files (CCTV, audio) have accompanying Section 63 BSA certificates and legible physical copies.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Defense Scrutiny & Application for Unrelied Documents',
        governingRule: 'Manoj v. State of MP Doctrine',
        actingParty: 'Defense Advocate',
        description: 'Defense scrutinizes the supplied documents and files an application seeking inspection or supply of unrelied documents in the police case diary that substantiate innocence.',
        advocateTips: 'Withheld unrelied documents frequently contain CDR records or initial statements showing the accused was absent from the scene.'
      }
    ],
    hearingAndArguments: 'At the cognizance stage, no formal arguments from the accused are permissible. Upon appearance, hearing revolves around the completeness of documents under Section 230 BNSS and fixing dates for committal or discharge.',
    possibleOutcomes: [
      'Cognizance taken and summons/bailable warrants issued to accused.',
      'Complete chargesheet copies supplied under Section 230 BNSS.',
      'Cognizance declined or chargesheet returned for curing defects or obtaining statutory sanction.'
    ],
    appealRevisionRemedy: 'Cognizance order can be challenged via Criminal Revision under Section 438 BNSS or Quashing Petition under Section 528 BNSS before the High Court if taken without jurisdiction or sanction.',
    commonPitfalls: [
      'Accepting illegible photocopies of witness statements during Section 230 BNSS supply.',
      'Failing to demand the case diary index to identify exculpatory material withheld by the IO.',
      'Allowing committal to proceed without complete supply of all digital media exhibits.'
    ],
    practicalScenario: 'In a corporate embezzlement chargesheet running into 4,000 pages, the police supplied only the first 200 pages and omitted all forensic accounting spreadsheets. Defense counsel filed an application under Section 230 BNSS pointing out the omission. The Magistrate held committal in abeyance and directed the prosecution to provide complete, indexed, and bookmarked digital copies on pen drives to all accused within 14 days.',
    caseLaws: [
      {
        title: 'Satender Kumar Antil v. Central Bureau of Investigation',
        citation: '(2022) 10 SCC 51',
        court: 'Supreme Court of India',
        holding: 'Laid down comprehensive guidelines: when a chargesheet is filed without the accused being arrested during investigation, the court should ordinarily issue summons and not non-bailable warrants.'
      },
      {
        title: 'Manoj v. State of Madhya Pradesh',
        citation: '(2023) 2 SCC 353',
        court: 'Supreme Court of India',
        holding: 'Prosecution has a constitutional duty of disclosure; the accused has a right to access documents collected by the investigating agency even if the prosecution does not propose to rely upon them in the trial.'
      }
    ],
    faqs: [
      {
        q: 'What is the consequence if the chargesheet is filed beyond 90 days?',
        a: 'The accused acquires an indefeasible right to default bail under Section 187(3) BNSS, provided an application is moved before the chargesheet is actually filed.'
      },
      {
        q: 'Can the Magistrate take cognizance if police submit a closure report?',
        a: 'Yes. The Magistrate can reject the closure report and take cognizance under Section 210(1)(b) BNSS based on the materials in the case diary.'
      }
    ],
    tags: ['trial-chargesheet', 'chargesheet', 'section 193 bnss', 'cognizance', 'section 230 bnss', 'crpc 207', 'criminal trial']
  },

  {
    id: 'proc-trial-committal-232-bnss',
    slug: 'committal-proceedings-sessions-trial-section-232-bnss',
    title: 'Committal of Sessions Triable Offences under Section 232 BNSS (Old Sec 209 CrPC)',
    category: 'Chargesheet & Sessions Trial',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 232 (Old CrPC Section 209)',
    courtForum: 'Court of Judicial Magistrate First Class → Court of Session / Special Sessions Court',
    estimatedTimeline: '15 to 45 days after complete supply of Section 230 BNSS documents',
    courtFeeLevel: 'Nil',
    overview: 'Where an offence disclosed in the police report or complaint is triable exclusively by a Court of Session (such as murder under Section 103 BNS, rape under Section 64 BNS, or dacoity), the Magistrate has no jurisdiction to try the case on merits. Under Section 232 BNSS, the Magistrate must formally "commit" the case to the Court of Session after ensuring that all statutory documents have been supplied to the accused under Section 230/231 BNSS. The Magistrate notifies the Public Prosecutor, remands the accused to custody or extends bail, and sends the entire judicial record and physical exhibits to the Sessions Court.',
    legalBasis: 'Section 232 BNSS (Commitment of case to Court of Session when offence is triable exclusively by it); read with Section 211 BNSS (Cognizance by Court of Session) and Section 250-260 BNSS (Trial before Court of Session).',
    locusStandi: 'Mandatory judicial procedure initiated by the Magistrate. Accused and Public Prosecutor participate.',
    prerequisites: [
      'The case must disclose an offence triable exclusively by the Court of Session as specified in the First Schedule of BNSS.',
      'Full compliance with Section 230 BNSS (supply of copies of chargesheet and documents to the accused).',
      'Physical or video-conference appearance of all accused before the committing Magistrate.',
      'Orders regarding custody, remand, or extension of bail pending committal.'
    ],
    statutoryLimitation: 'Should be executed expeditiously within 14 to 30 days after supply of copies. Undue delay in committal violates the right to speedy trial under Article 21.',
    mandatoryDocuments: [
      'Committal Order recorded by the Magistrate detailing satisfaction of Section 230/231 BNSS compliance.',
      'Complete Judicial Record consisting of Chargesheet, FIR, witness statements, and forensic reports.',
      'Custody Warrant (Jail Warrant) or Bail Bond endorsement forwarding the accused to the Sessions Court.',
      'Notice of Commitment served on the Public Prosecutor.',
      'Malkhana Inventory of physical property and weapons to be transferred to the Sessions Malkhana.'
    ],
    draftingGuidance: 'Defense counsel must ensure before the committal order is signed that no documents are missing or illegible. If co-accused are absconding, counsel should verify whether proceedings under Section 84/85 BNSS (proclamation and attachment) were completed or whether the case was properly bifurcated (split-up) to prevent indefinite delay of the present trial.',
    courtFeesFilingRules: 'No fees payable.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Verification of Section 230 BNSS Compliance',
        governingRule: 'Section 232(a) BNSS',
        actingParty: 'Committing Magistrate',
        description: 'Magistrate formally asks the accused whether complete and legible copies of the chargesheet, statements, and documents have been received.',
        advocateTips: 'If any forensic report (e.g. FSL, DNA, Post-Mortem) is missing, object on the record and request the court to direct supply before committal.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Accused Custody & Bail Status Determination',
        governingRule: 'Section 232(b) BNSS',
        actingParty: 'Magistrate',
        description: 'Magistrate remands the accused to custody during and until the conclusion of the trial, or if the accused is on bail, directs the accused to appear before the Sessions Court on a specified date.',
        advocateTips: 'Ensure that the bail bond executed before the Magistrate contains an endorsement that it continues before the Sessions Court, or be prepared to furnish fresh bonds.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Service of Notice of Commitment on Public Prosecutor',
        governingRule: 'Section 232(c) BNSS',
        actingParty: 'Magistrate Registry',
        description: 'The court sends formal written notice of commitment to the Public Prosecutor in charge of the Sessions Court.',
        advocateTips: 'Track the transfer docket to know which specific Additional Sessions Judge (ASJ) court the case is assigned to.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Physical Transmission of Record & Property to Sessions Court',
        governingRule: 'Section 232(d) BNSS',
        actingParty: 'CJM Office & Sessions Registry',
        description: 'Original chargesheet, judicial orders, seized material objects (weapons, clothing), and case diary are transmitted to the Principal District and Sessions Judge.',
        advocateTips: 'Verify that physical exhibits deposited in the Malkhana match the seizure memo description to avoid later chain of custody issues.'
      },
      {
        stepNumber: 5,
        stepTitle: 'First Appearance Before Sessions Court',
        governingRule: 'Section 249 BNSS (Old Sec 225 CrPC)',
        actingParty: 'Sessions Judge & Defense Counsel',
        description: 'Case is assigned a Sessions Case Number (SC No.). Accused appears, trial is opened by the Public Prosecutor under Section 249 BNSS, and date is fixed for hearing on discharge/charge framing.',
        advocateTips: 'Immediately file a memo of appearance before the Sessions Court and request time to file a Section 250 BNSS Discharge Application.'
      }
    ],
    hearingAndArguments: 'Committal is largely an administrative judicial screening proceeding. The committing magistrate has no power to weigh evidence or discharge the accused; that jurisdiction rests solely with the Sessions Court (State of UP v. Lakshmi).'
    ,
    possibleOutcomes: [
      'Order of commitment passed and record transmitted to Sessions Court.',
      'Proceedings deferred pending supply of missing documents or apprehension/split-up of absconding accused.',
      'Conversion to Magistrate trial if offence is found not exclusively triable by Sessions.'
    ],
    appealRevisionRemedy: 'Defective committal orders can be challenged under Section 438 BNSS (Revision) before Sessions or Section 528 BNSS before High Court.',
    commonPitfalls: [
      'Allowing committal when co-accused are not served and case is not bifurcated, resulting in endless adjournments.',
      'Failing to verify that weapon of offence or ballistic report was transmitted with the judicial file.',
      'Assuming that the Magistrate can discharge the accused in a Sessions-triable offence.'
    ],
    practicalScenario: 'In a Section 103 BNS (murder) case, the IO submitted the chargesheet before the JMFC but omitted the ballistic report regarding the country-made pistol. The JMFC was about to sign the committal order. Defense counsel objected under Section 232(a) BNSS, pointing out that without the ballistic report, the defense was handicapped. The JMFC directed the IO to file the ballistic report within 7 days and only committed the case after supplying the report to the accused.',
    caseLaws: [
      {
        title: 'State of U.P. v. Lakshmi Brahman',
        citation: '(1983) 2 SCC 372',
        court: 'Supreme Court of India',
        holding: 'The duty of the Magistrate under Section 209 CrPC (now Section 232 BNSS) is purely judicial; the Magistrate must satisfy himself that the documents have been supplied to the accused and must commit the case without embarking upon an inquiry into the merits of the charge.'
      },
      {
        title: 'Raj Kishore Prasad v. State of Bihar',
        citation: '(1996) 4 SCC 495',
        court: 'Supreme Court of India',
        holding: 'A Magistrate committing a case under Section 209 CrPC has no power to summon additional persons as accused under Section 319 CrPC; that power can only be exercised by the Court of Session after evidence is adduced.'
      }
    ],
    faqs: [
      {
        q: 'Can the Magistrate discharge an accused in an offence exclusively triable by Sessions?',
        a: 'No. The committing Magistrate has no jurisdiction to evaluate evidence for discharge; discharge must be argued exclusively before the Sessions Court under Section 250 BNSS.'
      },
      {
        q: 'Does bail expire upon committal to Sessions Court?',
        a: 'No. Unless cancelled or specifically limited by the Magistrate, bail continues, though the Sessions Court may require execution of fresh personal bonds.'
      }
    ],
    tags: ['trial-chargesheet', 'committal', 'section 232 bnss', 'crpc 209', 'sessions trial', 'district judge']
  },

  {
    id: 'proc-trial-discharge-application',
    slug: 'discharge-application-sessions-court-section-250-bnss',
    title: 'Discharge Application before Sessions Court under Section 250 BNSS (Old Sec 227 CrPC)',
    category: 'Chargesheet & Sessions Trial',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 250 (Old CrPC Section 227)',
    courtForum: 'Court of Session / Additional Sessions Judge (ASJ)',
    estimatedTimeline: '1 to 3 months from filing to judicial disposal',
    courtFeeLevel: '₹10 - ₹25 Court fee stamp on application + Vakalatnama',
    overview: 'A Discharge Application is a critical stage in criminal jurisprudence where the accused asserts that even if the entire prosecution case and documentary material are taken at face value without cross-examination, no prima facie case is made out and there is "no sufficient ground for proceeding against the accused." Governed by Section 250 BNSS for Sessions trials (and Section 262 BNSS for Magistrate trials), the court exercises a screening function to prevent frivolous, baseless, or vexatious prosecutions from burdening the citizen and the judicial system (Sajjan Kumar v. CBI & Union of India v. Prafulla Kumar Samal).',
    legalBasis: 'Section 250 BNSS (Discharge in Sessions trial); Section 251 BNSS (Framing of charge); read with landmark tests in Union of India v. Prafulla Kumar Samal (1979) 3 SCC 4 and Sajjan Kumar v. CBI (2010) 9 SCC 368.',
    locusStandi: 'The accused person committed for trial before the Sessions Court, acting through defense counsel.',
    prerequisites: [
      'Case must have been committed to the Court of Session under Section 232 BNSS.',
      'Charges must not have been formally framed under Section 251 BNSS (discharge cannot be entertained after charge framing).',
      'Accused must demonstrate from the record that the evidence collected by the police does not disclose the essential ingredients of the alleged offence.',
      'Pleadings must be confined to the chargesheet and documents forwarded by the police under Section 193 BNSS.'
    ],
    statutoryLimitation: 'Must be filed before charges are framed by the court. Typically filed within 30 to 60 days of the first listing in the Sessions Court.',
    mandatoryDocuments: [
      'Discharge Application under Section 250 BNSS detailing factual summary and specific legal grounds.',
      'Indexed compilation of the Chargesheet, FIR, and relevant witness statements relied upon by the defense.',
      'True copies of forensic or statutory reports demonstrating absence of offence (e.g. FSL negative report).',
      'Relevant binding judgments of Supreme Court and High Courts establishing lack of prima facie case.',
      'Vakalatnama executed by the accused.'
    ],
    draftingGuidance: 'The application must methodically: (1) Summarize the prosecution case as alleged in the police report; (2) Cite each statutory ingredient of the penal section; (3) Demonstrate that the witness statements recorded under Section 180 BNSS, even if accepted as true, do not satisfy the essential ingredients; (4) Emphasize that "grave suspicion" is required to frame charges and "mere suspicion" warrants discharge under Prafulla Samal; (5) Point out complete absence of overt acts or absence of mandatory statutory sanction.',
    courtFeesFilingRules: 'Affix nominal court fee stamps of ₹10–₹25 on the application along with Welfare stamps.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Drafting & Filing Discharge Application',
        governingRule: 'Section 250 BNSS',
        actingParty: 'Defense Counsel',
        description: 'File application before the Additional Sessions Judge before the date scheduled for consideration of charge. Serve advance copy to the Public Prosecutor.',
        advocateTips: 'Never attach external defense evidence at this stage; courts are legally barred from considering defense defense documents prior to trial (State of Orissa v. Debendra Nath Padhi).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Prosecution Reply / Oral Rebuttal',
        governingRule: 'Section 249 & 250 BNSS',
        actingParty: 'Public Prosecutor',
        description: 'Public Prosecutor files a written reply or argues orally, maintaining that the statements of witnesses create strong suspicion justifying trial.',
        advocateTips: 'Check whether the prosecutor relies on conjectures or inadmissible hearsay statements to bridge missing links.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Judicial Hearing on Discharge',
        governingRule: 'Section 250 BNSS & Prafulla Samal Principles',
        actingParty: 'Sessions Judge, Prosecutor & Defense Counsel',
        description: 'Defense counsel argues that taking the chargesheet at face value, no prima facie case exists. The judge evaluates whether a case of grave suspicion is made out.',
        advocateTips: 'Highlight clear contradictions in ocular vs medical evidence or absence of any specific allegation against the applicant.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Judicial Determination: Discharge Order vs Framing of Charge',
        governingRule: 'Sections 250 & 251 BNSS',
        actingParty: 'Sessions Judge',
        description: 'If the judge considers that there is no sufficient ground for proceeding, the judge discharges the accused and records reasons in writing. Otherwise, the judge proceeds to frame charges under Section 251 BNSS.',
        advocateTips: 'Under Section 250 BNSS, recording written reasons is mandatory for discharge, whereas elaborate reasons are not required for framing charges.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Post-Discharge Procedure / Release of Sureties',
        governingRule: 'Section 250 BNSS',
        actingParty: 'Sessions Court & Accused',
        description: 'Upon discharge, the accused is released from custody if in jail, and bail bonds and surety liabilities stand discharged.',
        advocateTips: 'Obtain a certified copy of the Discharge Order immediately to initiate passport release or expunge police records.'
      }
    ],
    hearingAndArguments: 'Defense counsel must argue the four golden rules of Prafulla Kumar Samal: (1) Judge has plenary screening power; (2) Judge cannot act as a mere post office; (3) Grave suspicion justifies charge, but mere suspicion demands discharge; (4) Test of prima facie case must be applied without conducting a mini-trial.',
    possibleOutcomes: [
      'Accused is discharged from all charges and released from custody/bail.',
      'Partial discharge: serious Sessions-triable charges dropped and case transferred to Magistrate under Section 251(1)(a) BNSS.',
      'Discharge application dismissed and charges formally framed under Section 251 BNSS.'
    ],
    appealRevisionRemedy: 'An order dismissing a discharge application is an interlocutory/intermediate order; challengeable via Criminal Revision under Section 438/442 BNSS or Section 528 BNSS Quashing before the High Court (Asian Resurfacing & Madhu Limaye doctrines).',
    commonPitfalls: [
      'Filing defense documents (affidavits, defense witnesses) which the court cannot look into under Debendra Nath Padhi.',
      'Arguing on the credibility or reliability of prosecution witnesses, which can only be tested during trial cross-examination.',
      'Filing the discharge application after charges have already been framed.'
    ],
    practicalScenario: 'An independent non-executive director was charged with culpable homicide and criminal negligence after a chemical factory fire. Defense counsel filed a Section 250 BNSS discharge application demonstrating from the RoC filings annexed to the chargesheet that the director had resigned two years prior to the incident and was not responsible for factory safety. The Sessions Court held that no prima facie case existed and discharged the director.',
    caseLaws: [
      {
        title: 'Union of India v. Prafulla Kumar Samal',
        citation: '(1979) 3 SCC 4',
        court: 'Supreme Court of India',
        holding: 'Laid down the classic test for discharge: the court has the undoubted power to sift and weigh evidence for the limited purpose of finding whether a prima facie case exists; where two views are equally possible, the court must discharge the accused.'
      },
      {
        title: 'Sajjan Kumar v. Central Bureau of Investigation',
        citation: '(2010) 9 SCC 368',
        court: 'Supreme Court of India',
        holding: 'At the stage of framing charges or discharge, the court is not required to evaluate whether the materials would ultimately lead to conviction; strong suspicion founded on material is sufficient to frame charges.'
      }
    ],
    faqs: [
      {
        q: 'Can the court consider defense evidence during a discharge hearing?',
        a: 'No. The Supreme Court in Debendra Nath Padhi held that the accused has no right to introduce defense documents at the stage of framing of charge or discharge.'
      },
      {
        q: 'What is the difference between acquittal and discharge?',
        a: 'Discharge occurs before trial begins for lack of a prima facie case, and does not bar a fresh prosecution if new evidence emerges; acquittal occurs after trial on merits and attracts double jeopardy protection under Section 337 BNSS (Article 20(2)).'
      }
    ],
    tags: ['trial-chargesheet', 'discharge application', 'section 250 bnss', 'crpc 227', 'prafulla samal', 'framing of charge']
  },

  {
    id: 'proc-trial-sessions-prosecution-examination',
    slug: 'sessions-trial-witness-examination-accused-statement-section-351-bnss',
    title: 'Sessions Trial Conduct: Framing of Charges, Witness Examination & Section 351 BNSS Accused Statement',
    category: 'Chargesheet & Sessions Trial',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 251 to 260 & Section 351 (Old CrPC 228 to 235 & 313)',
    courtForum: 'Court of Session / Special Judge (CBI/PMLA/POCSO/NDPS)',
    estimatedTimeline: '6 months to 2 years (Subject to witness availability and trial backlog)',
    courtFeeLevel: 'Nil',
    overview: 'The Sessions Trial is the judicial trial mechanism for serious and heinous penal offences. If the accused is not discharged under Section 250 BNSS, the Sessions Judge frames specific charges under Section 251 BNSS, reads them over to the accused, and records their plea of guilty or not guilty. The trial proceeds with the prosecution evidence (Examination-in-Chief and Cross-Examination), followed by mandatory questioning of the accused under Section 351 BNSS (Old Sec 313 CrPC) to enable them to personally explain incriminating circumstances. This is followed by defense evidence under Section 256 BNSS, final arguments under Section 257 BNSS, and judgment under Section 258 BNSS.',
    legalBasis: 'Sections 251–260 BNSS (Trial before Court of Session); Section 351 BNSS (Power to examine the accused); Bharatiya Sakshya Adhiniyam, 2023 (BSA) Sections 137–168 (Witness examination & cross-examination); read with Article 20 and 21 Constitution of India.',
    locusStandi: 'Conducted by the Public Prosecutor on behalf of the State. Defense is represented by the accused and their defense counsel (or legal aid counsel under Section 341 BNSS).',
    prerequisites: [
      'Formal framing of charges under Section 251 BNSS signed by the Sessions Judge and plea of "Not Guilty" entered by the accused.',
      'Summoning of prosecution witnesses through court process under Section 253 BNSS.',
      'Presence of accused during trial (physical or via authorized video-conferencing as permitted under Section 532 BNSS).',
      'Appointment of State defense counsel if accused is unrepresented.'
    ],
    statutoryLimitation: 'Trial must proceed on a day-to-day basis under Section 346 BNSS (Old Sec 309 CrPC) once witness examination begins.',
    mandatoryDocuments: [
      'Formal Charge Sheet (Charge Memo) drawn up by the Court with specific penal counts.',
      'Plea of Accused recorded in writing and signed/thumb-impressed by the accused.',
      'Witness Depositions recorded by the Judge (PW-1, PW-2, etc.) with exhibit markings (Ex. P-1).',
      'Electronic Evidence Certificates under Section 63 BSA for CCTV/CDR records.',
      'Section 351 BNSS Questionnaire containing specific questions on each incriminating circumstance.',
      'Written Statement of Accused under Section 351(5) BNSS and defense witness depositions (DW-1).'
    ],
    draftingGuidance: 'Cross-examination strategy must focus on: (a) Establishing contradictions with Section 180 BNSS police statements under Section 148 BSA; (b) Demonstrating interested or partisan witness motives; (c) Proving lack of lighting, distance, or visual obstruction in identification; and (d) Impeaching forensic chain of custody. During Section 351 BNSS examination, prepare a detailed written statement under Section 351(5) BNSS setting out the defense alibi or false implication.',
    courtFeesFilingRules: 'No fees for trial proceedings. Defense summons for defense witnesses requires process fee stamp.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Framing of Charges & Recording of Plea',
        governingRule: 'Section 251 BNSS',
        actingParty: 'Sessions Judge & Accused',
        description: 'The Judge frames charges detailing time, place, and offence, reads them to the accused in a language they understand, and asks: "Do you plead guilty or claim to be tried?" Accused pleads not guilty.',
        advocateTips: 'Ensure charges clearly state specific penal sections and overt acts; vague charges violate Section 234 BNSS (joinder of charges).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Prosecution Evidence (PW Examination & Cross-Examination)',
        governingRule: 'Section 254 BNSS & Sections 137–168 BSA',
        actingParty: 'Prosecutor, Defense Counsel & Witnesses',
        description: 'Prosecution calls witnesses: eye-witnesses, doctors, panch witnesses, forensic experts, and Investigating Officer. Defense counsel conducts cross-examination.',
        advocateTips: 'Confront witnesses with their prior statements under Section 180 BNSS to establish material omissions that amount to substantial contradictions.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Mandatory Accused Examination under Section 351 BNSS',
        governingRule: 'Section 351 BNSS (Old Sec 313 CrPC)',
        actingParty: 'Sessions Judge & Accused',
        description: 'Court puts all incriminating circumstances appearing in evidence to the accused personally. Accused answers each question and may file a written statement under Section 351(5) BNSS.',
        advocateTips: 'Circumstances not put to the accused in Section 351 examination cannot be used by the court to base a conviction (Sharad Birdhichand Sarda doctrine).'
      },
      {
        stepNumber: 4,
        stepTitle: 'Defense Evidence (Optional Stage)',
        governingRule: 'Section 256 BNSS',
        actingParty: 'Defense Counsel & Defense Witnesses',
        description: 'If the accused desires to lead evidence (e.g. proof of alibi, handwriting expert, defense witnesses), defense witnesses (DWs) are examined and cross-examined by the prosecutor.',
        advocateTips: 'The accused can also testify as a defense witness in their own defense under Section 352 BNSS, but will be subject to cross-examination.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Arguments, Judgment & Sentencing',
        governingRule: 'Sections 257 & 258 BNSS',
        actingParty: 'Prosecutor, Defense Counsel & Sessions Judge',
        description: 'Both sides present oral and written arguments. The Judge pronounces judgment of Acquittal or Conviction. In case of conviction, a separate sentencing hearing under Section 258(2) BNSS is conducted.',
        advocateTips: 'In heinous offences, present mitigating circumstances (age, reformation potential, family dependents) during the sentencing hearing.'
      }
    ],
    hearingAndArguments: 'Defense arguments center on: (1) Prosecution failure to prove guilt beyond reasonable doubt; (2) Inconsistencies between ocular evidence and medical/forensic evidence; (3) Failure to prove chain of circumstances in circumstantial evidence cases; (4) Unexplained delay in sending FIR to Magistrate; (5) Violation of Section 63 BSA in proving digital evidence.',
    possibleOutcomes: [
      'Acquittal of all charges under Section 255 or 258 BNSS and immediate release.',
      'Conviction and sentence of fine, term imprisonment, or life imprisonment under Section 258 BNSS.',
      'Conviction on a lesser included offence under Section 245 BNSS.'
    ],
    appealRevisionRemedy: 'Conviction by Sessions Court is appealable before the High Court as a matter of right under Section 415 BNSS (Old Sec 374 CrPC). Acquittal can be appealed by the State or Victim under Section 419 BNSS.',
    commonPitfalls: [
      'Failing to confront prosecution witnesses with Section 180 BNSS police statements during cross-examination.',
      'Giving vague or evasive answers in Section 351 BNSS examination instead of filing a cogent written statement.',
      'Failing to object to inadmissible hearsay evidence or uncertified electronic evidence at the time of exhibition.'
    ],
    practicalScenario: 'In a Sessions trial for robbery and grievous hurt, the prosecution relied on a CCTV recording from a street camera. Defense counsel established during IO cross-examination that no certificate under Section 63 BSA was collected and that the camera memory chip was never seized in a sealed condition. During Section 351 BNSS examination, the accused filed a written statement proving an alibi supported by airport boarding passes. The Sessions Judge acquitted the accused for lack of reliable evidence.',
    caseLaws: [
      {
        title: 'Sharad Birdhichand Sarda v. State of Maharashtra',
        citation: '(1984) 4 SCC 116',
        court: 'Supreme Court of India',
        holding: 'Circumstances not put to the accused under Section 313 CrPC (now Section 351 BNSS) must be completely excluded from consideration; laid down the five golden principles (Panchsheel) for proving guilt in circumstantial evidence cases.'
      },
      {
        title: 'Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal',
        citation: '(2020) 7 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Production of a certificate under Section 65B(4) Evidence Act (now Section 63 BSA) is mandatory for admitting electronic records in evidence; oral evidence cannot substitute for statutory certification.'
      }
    ],
    faqs: [
      {
        q: 'Can an accused be convicted solely on a confession made during Section 351 BNSS examination?',
        a: 'The statement under Section 351 BNSS is not substantive evidence against the accused; it is intended to enable the accused to explain the evidence, but admissions can be considered alongside other evidence.'
      },
      {
        q: 'Is day-to-day trial mandatory in Sessions cases?',
        a: 'Yes. Section 346 BNSS mandates that once examination of witnesses begins, it must continue day-to-day until all witnesses in attendance have been examined.'
      }
    ],
    tags: ['trial-chargesheet', 'sessions trial', 'section 251 bnss', 'witness examination', 'section 351 bnss', 'crpc 313', 'bsa evidence']
  }
];
