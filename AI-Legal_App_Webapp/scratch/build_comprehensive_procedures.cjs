const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'data', 'courtProceduresData.js');

const code = `// ─── AI LEGAL™ COURT PROCEDURES & LITIGATION PRACTICE GUIDES ─────────────────
// Authoritative step-by-step litigation pipelines for Indian Advocates & Researchers
// Fully populated across: Writs, Arrest & Bail, FIR Investigation, Cheque Bounce,
// Civil Injunctions, Sessions Trial, Appeals/Quashing, and Execution of Decrees.

/**
 * @typedef {Object} ProcedureStep
 * @property {number} stepNumber
 * @property {string} stepTitle
 * @property {string} description
 * @property {string} keyStatute
 * @property {string} advocateTips
 * 
 * @typedef {Object} ProcedureGuide
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} category
 * @property {string} actReference
 * @property {string} courtForum
 * @property {string} estimatedTimeline
 * @property {string} courtFeeLevel
 * @property {string} overview
 * @property {string} locusStandi
 * @property {string[]} prerequisites
 * @property {string[]} mandatoryDocuments
 * @property {ProcedureStep[]} stepByStepPipeline
 * @property {string[]} commonPitfalls
 * @property {string} statutoryLimitation
 * @property {string} appealRevisionRemedy
 * @property {string[]} tags
 */

export const COURT_PROCEDURES_DATABASE = [
  {
    id: 'proc-writ-226',
    slug: 'filing-writ-petition-article-226-high-court',
    title: 'Filing a Writ Petition under Article 226 (High Court)',
    category: 'Constitutional & Administrative Law',
    actReference: 'Constitution of India, 1950 — Article 226',
    courtForum: 'High Court of Respective State (Single Bench / Division Bench)',
    estimatedTimeline: '2 to 8 months (Urgent motion heard on Day 1-3)',
    courtFeeLevel: '₹100 - ₹500 (Varies by High Court Rules) + ₹500 - ₹2,000 process fee',
    overview: 'Article 226 empowers High Courts to issue directions, orders, or writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari) for enforcement of Fundamental Rights under Part III or for any other purpose against State instrumentalities or quasi-judicial bodies.',
    locusStandi: 'Aggrieved party with direct legal injury; or any public-spirited citizen under Public Interest Litigation (PIL) when fundamental rights of disadvantaged groups are violated.',
    prerequisites: [
      'Exhaustion of statutory alternative remedies (unless fundamental right violated, principles of natural justice breached, or order is wholly without jurisdiction - Whirlpool Corp v. Registrar of Trade Marks).',
      'Demonstration of breach of legal duty or arbitrary State action under Article 14/21.',
      'Prior representation made to the concerned authority seeking demand for justice (essential for Writ of Mandamus).'
    ],
    mandatoryDocuments: [
      'Index, Urgent Application, and Notice of Motion with Court Fee stamp.',
      'Synopsis and Chronological List of Events highlighting factual dates.',
      'Memo of Writ Petition stating facts, grounds, and specific prayers (signed & notarized).',
      'Affidavit of Petitioner duly affirmed before Oath Commissioner / Notary Public.',
      'Impugned Order / Notification / Action challenged (marked as Annexure P-1).',
      'True typed copies of vernacular documents along with official English translation.',
      'Vakalatnama duly executed with welfare stamp and advocate registration number.'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Demand for Justice & Cause of Action Finalization',
        description: 'Serve a formal demand representation upon the respondent authority giving 15-30 days to rectify the illegality (mandatory precursor for Mandamus).',
        keyStatute: 'Article 226 Constitution of India',
        advocateTips: 'Always attach proof of delivery of representation to eliminate objections on preliminary non-exhaustion.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting Petition & Alphabetical Grounds Formulation',
        description: 'Draft memo of writ petition structuring grounds alphabetically: Ground A (Breach of Natural Justice), Ground B (Arbitrariness / Art. 14), Ground C (Jurisdictional Defect).',
        keyStatute: 'High Court Writ Rules & Practice Directions',
        advocateTips: 'Clearly articulate whether relief sought is Certiorari (quashing), Mandamus (compelling duty), or Prohibition.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Advance Service to State Standing Counsel',
        description: 'Serve mandatory advance copies of the entire writ petition on the Standing Counsel / Advocate General for the State and obtain dated acknowledgment stamp.',
        keyStatute: 'High Court Rules regarding Advance Service',
        advocateTips: 'In urgent matters, obtain an urgent mentioning memo approved by the Registrar (Judicial) or Chief Justice bench.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Registry Scrutiny & Removal of Defects',
        description: 'Lodge physical or e-filing packet through High Court portal. Address clerical or paging defects raised by Registry within 48-72 hours.',
        keyStatute: 'High Court E-Filing Rules',
        advocateTips: 'Check index pagination and ensure all annexures are certified as true copies on every page.'
      },
      {
        stepNumber: 5,
        stepTitle: 'First Motion Admission & Ad-Interim Stay Hearing',
        description: 'Matter lists before the Motion Bench. Advocate presents prima facie case and urgency for interim stay against impugned notification.',
        keyStatute: 'Article 226(3) Constitution of India',
        advocateTips: 'If ex-parte stay is granted, respondent has statutory right under Article 226(3) to file application for vacation of stay.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Counter-Affidavit, Rejoinder & Final Disposal',
        description: 'State files Counter-Affidavit within 4-6 weeks. Petitioner files Rejoinder-Affidavit. Court conducts final hearing and pronounces judgment.',
        keyStatute: 'Code of Civil Procedure, 1908 (Section 141 analogously applied)',
        advocateTips: 'Prepare short written synopsis and compilation of binding Division Bench / Supreme Court authorities.'
      }
    ],
    commonPitfalls: [
      'Approaching High Court without exhausting statutory appeal before Tribunal without establishing Whirlpool exceptions.',
      'Unexplained delay and laches: High Courts often dismiss writs filed more than 6-12 months after the impugned order.',
      'Suppression of material facts (Uberrima Fides doctrine): Concealment leads to dismissal with exemplary costs.'
    ],
    statutoryLimitation: 'No strict statutory limitation under Limitation Act, but doctrine of laches applies (generally 90 to 180 days from cause of action).',
    appealRevisionRemedy: 'Special Leave Petition (Civil) under Article 136 before Supreme Court; or Intra-Court Appeal (Letters Patent Appeal / Special Appeal) before Division Bench if order was passed by Single Judge.',
    tags: ['writs-constitutional', 'writ', 'article 226', 'article 32', 'high court', 'supreme court', 'mandamus', 'certiorari']
  },

  {
    id: 'proc-bail-anticipatory-regular',
    slug: 'anticipatory-bail-regular-bail-bnss-482-483',
    title: 'Bail Procedure: Anticipatory (Sec 482 BNSS) & Regular Bail (Sec 483 BNSS)',
    category: 'Criminal Law & Procedure',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 480, 482 & 483 (Old CrPC 437, 438, 439)',
    courtForum: 'Court of Session / High Court',
    estimatedTimeline: 'Anticipatory Bail: 3 to 10 days; Regular Bail: 2 to 7 days',
    courtFeeLevel: '₹10 - ₹50 Court Fee stamp + Advocate Welfare Fund stamp',
    overview: 'Pre-arrest protective bail (Section 482 BNSS) and post-arrest release from judicial custody (Section 483 BNSS). Governed by the landmark constitutional principle in Satender Kumar Antil (2022) and Arnesh Kumar (2014) that bail is the rule and jail is the exception.',
    locusStandi: 'Accused person apprehending arrest on false/frivolous grounds (Anticipatory); or accused incarcerated in police or judicial remand (Regular).',
    prerequisites: [
      'For Anticipatory Bail: Concrete apprehension of arrest based on lodging of FIR, summons, or overt police threats.',
      'For Regular Bail: Physical surrender or actual custodial confinement of the applicant.',
      'Clean antecedents or explanation of prior pending cases in bail memo.'
    ],
    mandatoryDocuments: [
      'Bail Application stating grounds, facts, and clean antecedents.',
      'True copy of First Information Report (FIR) / Complaint.',
      'Case Diary extract / Remand Order (for regular bail).',
      'Affidavit of pairokar / relative of the accused.',
      'Proof of permanent residence (Aadhaar, Voter ID, Utility Bills) to negate flight risk.',
      'Medical certificates or hospital records (if bail sought on medical grounds).'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Bail Application & Service on Public Prosecutor',
        description: 'File application before Sessions Court. Serve advance notice upon Public Prosecutor to obtain Case Diary (CD) and instructions from Investigating Officer (IO).',
        keyStatute: 'Section 482(1) / 483(1) BNSS',
        advocateTips: 'In Section 482 anticipatory bail involving heinous offences, mandatory 7-day notice to Public Prosecutor is required under BNSS.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Case Diary Production & IO Report',
        description: 'Investigating Officer produces Case Diary and files written status report / objections highlighting criminal antecedents or gravity of offence.',
        keyStatute: 'Section 192 BNSS (Old Section 172 CrPC)',
        advocateTips: 'Scrutinize whether Section 35(3) BNSS (Old Section 41A CrPC) notice of appearance was served prior to arrest.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Substantive Bail Arguments on Cardinal Principles',
        description: 'Argue the 4 cardinal bail tests: (1) Prima facie involvement, (2) Gravity of punishment, (3) Flight risk / tampering risk, (4) Co-accused parity.',
        keyStatute: 'Satender Kumar Antil v. CBI (2022) 10 SCC 773',
        advocateTips: 'Highlight completion of custodial interrogation, lack of need for custodial discovery, and willingness to furnish solvent sureties.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Bail Order Pronouncement & Condition Imposition',
        description: 'Court passes reasoned order granting bail subject to personal bond (PB) and solvent sureties, with standard conditions not to influence witnesses.',
        keyStatute: 'Section 482(2) BNSS',
        advocateTips: 'Request court to accept local surety or cash bail if accused is an out-station resident.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Furnishing Bail Bonds & Release Warrant (Robkar)',
        description: 'Furnish bail bonds before the trial magistrate. Court clerk verifies surety documents and issues Release Warrant (Robkar) to Jail Superintendent.',
        keyStatute: 'Section 485 BNSS (Old Section 441 CrPC)',
        advocateTips: 'Ensure surety holds valid revenue registry/tax receipts to prevent delay in surety verification by local police.'
      }
    ],
    commonPitfalls: [
      'Filing successive bail application before another judge without disclosing dismissal of previous bail application (Bench hunting strictly prohibited).',
      'Suppression of criminal antecedents in the affidavit.'
    ],
    statutoryLimitation: 'Anticipatory bail: Prior to arrest; Regular bail: Any time during investigation or trial.',
    appealRevisionRemedy: 'If rejected by Sessions Judge, file fresh bail application under Section 482/483 BNSS before the High Court; if rejected by High Court, SLP (Crl) under Article 136 before Supreme Court.',
    tags: ['arrest-bail', 'bail', 'arrest', 'anticipatory', 'custody', 'bnss 482', 'crpc 438', '480', '483']
  },

  {
    id: 'proc-fir-investigation',
    slug: 'registration-fir-zero-fir-investigation-bnss-173',
    title: 'Registration of FIR, Zero FIR & Police Investigation under BNSS 2023',
    category: 'Criminal Procedure & Police Investigation',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 173, 175, 176 & 193 (Old CrPC 154, 156, 173)',
    courtForum: 'Police Station / Court of Judicial Magistrate First Class (JMFC)',
    estimatedTimeline: 'FIR Registration: Immediate to 14 days (preliminary inquiry); Chargesheet: 60-90 days',
    courtFeeLevel: 'Free (Statutory Duty of State under Section 173 BNSS)',
    overview: 'Statutory framework governing lodging of First Information Report (FIR), e-FIR, Zero FIR, preliminary inquiry under Section 173(3) BNSS, electronic recording of search/seizure under Section 105, and remedies upon police refusal.',
    locusStandi: 'Informant / Victim / Any person having knowledge of commission of a cognizable offence.',
    prerequisites: [
      'Information must disclose the commission of a cognizable offence.',
      'For e-FIR, informant must sign in person within 3 days under Section 173(1) BNSS.',
      'Preliminary inquiry permitted only in offences punishable between 3 to 7 years with prior approval of DSP.'
    ],
    mandatoryDocuments: [
      'Written Complaint signed by informant detailing date, time, place, and names of accused/witnesses.',
      'Medical examination report (MLC) if physical assault, bodily injury, or sexual offence.',
      'Documentary evidence (bank transactions, chats, agreements) in fraud/cheating cases.',
      'Postal receipts of Section 175(1) complaint sent to Superintendent of Police (SP) upon SHO refusal.'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Lodging of Information at Police Station or Zero FIR',
        description: 'Informant submits written complaint to Duty Officer/SHO. If offence occurred outside jurisdiction, police must register Zero FIR and transfer to competent station.',
        keyStatute: 'Section 173(1) BNSS & Lalita Kumari v. Govt of UP',
        advocateTips: 'Mandatory free copy of FIR must be furnished to the informant immediately under Section 173(2).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Preliminary Inquiry in 3-7 Year Offences',
        description: 'Under Section 173(3) BNSS, police may conduct preliminary inquiry within 14 days with prior permission of DSP to ascertain whether cognizable offence exists.',
        keyStatute: 'Section 173(3) BNSS',
        advocateTips: 'Preliminary inquiry is not permissible in offences punishable with death, life, or over 7 years.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Remedy upon Police Refusal: Complaint to SP (Sec 175(1))',
        description: 'If SHO refuses to register FIR, send written complaint by registered post to Superintendent of Police (SP) under Section 175(1) BNSS (Old Sec 154(3)).',
        keyStatute: 'Section 175(1) BNSS',
        advocateTips: 'Preserve postal receipt and online tracking delivery report as prerequisite for Magistrate application.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Magistrate Direction for Investigation: Application u/s 175(3)',
        description: 'If SP fails to act, file Application before JMFC under Section 175(3) BNSS (Old Sec 156(3)) accompanied by sworn affidavit of Priyanka Srivastava compliance.',
        keyStatute: 'Section 175(3) BNSS read with Section 223 BNSS',
        advocateTips: 'Priyanka Srivastava affidavit is mandatory; failure leads to outright rejection of Section 175(3) application.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Investigation & Mandatory Audio-Video Recording',
        description: 'Investigating Officer visits crime scene, prepares site plan, examines witnesses under Section 180, and conducts search/seizure with audio-video recording under Section 105.',
        keyStatute: 'Sections 105 & 180 BNSS',
        advocateTips: 'Electronic seizure logs must be transmitted to Magistrate without delay.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Filing of Final Police Report (Chargesheet / Closure)',
        description: 'IO submits police report under Section 193 BNSS (Old Sec 173(2)) within 60 or 90 days. Magistrate takes cognizance or issues notice on protest petition.',
        keyStatute: 'Section 193 BNSS',
        advocateTips: 'If closure report is submitted, informant has right to notice and filing of Protest Petition.'
      }
    ],
    commonPitfalls: [
      'Approaching High Court under Section 528 BNSS / Art. 226 for FIR registration without exhausting Section 175(1) and 175(3) remedies (Sakiri Vasu doctrine).',
      'Omitting the mandatory affidavit under Priyanka Srivastava.'
    ],
    statutoryLimitation: 'No limitation for serious offences punishable with over 3 years; Section 468 CrPC / BNSS limitation applies for minor offences.',
    appealRevisionRemedy: 'Protest Petition before Magistrate; or Criminal Revision under Section 438 BNSS before Sessions Court.',
    tags: ['fir-investigation', 'fir', 'zero fir', 'investigation', 'chargesheet', 'police', 'bnss 173', 'crpc 154']
  },

  {
    id: 'proc-cheque-bounce-138',
    slug: 'cheque-bounce-litigation-section-138-ni-act',
    title: 'Trial Procedure for Cheque Dishonour under Section 138 NI Act',
    category: 'Commercial & Banking Litigation',
    actReference: 'Negotiable Instruments Act, 1881 — Sections 138, 141, 142, 143A & 148',
    courtForum: 'Court of Judicial Magistrate First Class (JMFC) / Metropolitan Magistrate (Special NI Act Court)',
    estimatedTimeline: '6 to 18 months (Summary Trial mandated to conclude within 6 months)',
    courtFeeLevel: 'Ad-valorem court fee based on cheque amount (1% to 5% as per State Court Fees Act)',
    overview: 'Quasi-criminal summary proceeding governing prosecution for dishonour of cheques for insufficiency of funds. Features reverse burden of proof on the accused drawer under Sections 118 and 139 of the Act.',
    locusStandi: 'Payee or Holder in Due Course of the dishonoured cheque.',
    prerequisites: [
      'Cheque presented to drawee bank within validity period (3 months from issuance date).',
      'Dishonoured with bank memo stating "Funds Insufficient", "Exceeds Arrangement", or "Account Closed".',
      'Statutory demand notice sent within 30 days of receiving dishonour memo.',
      'Drawer fails to pay full cheque amount within 15 days of notice receipt.'
    ],
    mandatoryDocuments: [
      'Original dishonoured Cheque with banker return memo.',
      'Office copy of Statutory Demand Notice with postal Speed Post receipts.',
      'India Post online tracking delivery consignment report proving service.',
      'Complaint under Section 138 signed by complainant or authorized representative with Board Resolution.',
      'Affidavit of Pre-Summoning Evidence under Section 145 NI Act.'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Receipt of Bank Return Memo & 30-Day Notice Issuance',
        description: 'Within 30 days of receiving the cheque dishonour memo, issue a formal statutory notice through advocate demanding payment within 15 days.',
        keyStatute: 'Section 138(b) Negotiable Instruments Act',
        advocateTips: 'Do not bundle unliquidated damages or vague penalty into the cheque demand notice (KR Indira doctrine).'
      },
      {
        stepNumber: 2,
        stepTitle: '15-Day Cure Period & Filing Complaint within 30 Days',
        description: 'Wait for expiry of 15 clear days from the date of notice delivery. File complaint before JMFC within 30 days of the cause of action arising.',
        keyStatute: 'Section 142(1)(b) Negotiable Instruments Act',
        advocateTips: 'If filed after 30 days, file an application for condonation of delay under Section 142(1)(b) Proviso showing sufficient cause.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Pre-Summoning Evidence on Affidavit & Cognizance',
        description: 'Tender complainant pre-summoning evidence on affidavit under Section 145. Magistrate examines verification, marks documents as Exhibits, and issues summons.',
        keyStatute: 'Section 145 NI Act & Section 223 BNSS',
        advocateTips: 'Personal examination of complainant can be dispensed with under Section 145(1) NI Act.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Appearance of Accused & Framing of Notice (Sec 251)',
        description: 'Accused appears, furnishes bail bond, and Court frames notice of accusation under Section 251 CrPC / BNSS recording plea of guilty or not guilty.',
        keyStatute: 'Section 143 NI Act (Summary Trial procedure)',
        advocateTips: 'Complainant should move an immediate application under Section 143A for interim compensation up to 20% of the cheque amount.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Defence Plea & Cross-Examination of Complainant',
        description: 'Accused files application under Section 145(2) to cross-examine complainant to rebut statutory presumptions of debt under Sections 118 and 139.',
        keyStatute: 'Section 145(2) NI Act & Section 139 Presumption',
        advocateTips: 'Accused must establish a probable defence by preponderance of probabilities (Rangappa v. Sri Mohan doctrine).'
      },
      {
        stepNumber: 6,
        stepTitle: 'Final Judgment, Conviction & Compensation Award',
        description: 'Court hears final arguments and pronounces judgment. Accused may be sentenced up to 2 years imprisonment and fine up to twice the cheque amount.',
        keyStatute: 'Section 138 NI Act & Section 357 CrPC / 395 BNSS',
        advocateTips: 'Court can direct the entire fine or part thereof to be paid as compensation to the complainant.'
      }
    ],
    commonPitfalls: [
      'Filing complaint before expiry of 15-day payment period.',
      'Failing to name Directors in active in-charge capacity when drawer is a Private Limited Company under Section 141 (SMS Pharmaceuticals case).'
    ],
    statutoryLimitation: 'Complaint must be filed within 1 month from the date on which the cause of action arises under clause (c) of proviso to Section 138.',
    appealRevisionRemedy: 'Criminal Appeal before Sessions Court against conviction (Section 415 BNSS / 374 CrPC) with mandatory minimum 20% deposit under Section 148 NI Act.',
    tags: ['cheque-bounce', 'cheque', '138', 'negotiable', 'notice', 'dishonour', 'demand notice']
  },

  {
    id: 'proc-order-39-cpc',
    slug: 'temporary-injunction-order-39-rules-1-and-2-cpc',
    title: 'Application for Temporary Injunction under Order 39 Rules 1 & 2 CPC',
    category: 'Civil & Commercial Law',
    actReference: 'Code of Civil Procedure, 1908 — Order XXXIX Rules 1, 2, 3 & 3A',
    courtForum: 'Civil Court (Junior Division / Senior Division / District Judge) where suit is pending',
    estimatedTimeline: 'Ex-parte hearing: Day 1-2; Bilateral disposal: 30 days under Rule 3A',
    courtFeeLevel: '₹50 - ₹100 miscellaneous application fee (Over and above suit court fee)',
    overview: 'Interim relief sought during the pendency of a civil suit to restrain the defendant from wasting, damaging, alienating, selling, or creating third-party interest in the suit property, or committing breach of contract or injury.',
    locusStandi: 'Plaintiff in a pending civil suit who claims an enforceable legal right or title over the suit subject matter.',
    prerequisites: [
      'Must be accompanied by a substantive Plaint under Order VII Rule 1 CPC seeking permanent injunction or declaration.',
      'Tripartite Legal Test satisfied: (1) Prima Facie Case, (2) Balance of Convenience, (3) Irreparable Injury that cannot be compensated in money.',
      'Clean hands doctrine: Plaintiff seeking equitable relief must disclose all material facts.'
    ],
    mandatoryDocuments: [
      'Substantive Plaint and Plaint verification.',
      'Application under Order XXXIX Rules 1 & 2 read with Section 151 CPC.',
      'Affidavit of the applicant affirming urgency and grounds.',
      'Documentary evidence showing prima facie title/possession (Sale Deed, Khata, Electricity bills, possession letter, photographs).',
      'Caveat Search Report (verifying whether defendant has lodged a caveat under Section 148A CPC).'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Injunction Application along with Plaint',
        description: 'File Order 39 Rules 1 & 2 application simultaneously with the suit plaint, specifying exact emergency grounds justifying restraint.',
        keyStatute: 'Order XXXIX Rules 1 & 2 CPC',
        advocateTips: 'State reasons why delay in granting interim injunction would defeat the very purpose of the suit.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Ex-Parte Interim Injunction Hearing (Rule 3 Compliance)',
        description: 'If urgent ex-parte restraint is sought without notice to defendant, advocate must convince court under Order 39 Rule 3 Proviso.',
        keyStatute: 'Order XXXIX Rule 3 CPC Proviso',
        advocateTips: 'If ex-parte stay granted, applicant MUST deliver copies of plaint, application, affidavit, and documents to defendant by Speed Post on the very same day or immediate next day, and file affidavit of compliance.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Defendant Written Statement & Objections under Rule 4',
        description: 'Defendant enters appearance, files objections to injunction application and/or application under Order XXXIX Rule 4 for vacation/variation of stay.',
        keyStatute: 'Order XXXIX Rule 4 CPC',
        advocateTips: 'Defendant should point out suppression of facts, lack of prima facie possession, or adequacy of monetary damages.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Bilateral Arguments & Mandatory 30-Day Disposal',
        description: 'Court hears both parties on the tripartite test and passes a reasoned order confirming, modifying, or vacating the injunction.',
        keyStatute: 'Order XXXIX Rule 3A CPC',
        advocateTips: 'Rule 3A mandates that court shall endeavor to dispose of the injunction application within thirty days from the date on which injunction was granted.'
      }
    ],
    commonPitfalls: [
      'Failure to comply with Order 39 Rule 3 Proviso (sending documents to defendant within 24 hours of ex-parte stay) can result in automatic vacation of stay.',
      'Injunction cannot be granted against a true owner at the instance of a trespasser (sopan Sukhdeo Sable v. Assistant Charity Commissioner).',
      'No injunction if monetary compensation is an adequate remedy under Section 41(h) Specific Relief Act.'
    ],
    statutoryLimitation: 'Can be filed at any stage of the suit before final decree.',
    appealRevisionRemedy: 'Miscellaneous Appeal under Order XLIII Rule 1(r) CPC before Appellate Court (Senior Civil Judge or District Judge); or Revision under Section 115 CPC / Article 227.',
    tags: ['civil-injunctions', 'injunction', 'order 39', 'interim relief', 'cpc', 'plaint', 'stay']
  },

  {
    id: 'proc-sessions-trial',
    slug: 'chargesheet-sessions-trial-framing-charges-bnss-251',
    title: 'Sessions Trial Procedure: Committal to Final Judgment under BNSS',
    category: 'Criminal Trial Procedure',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Chapter XIX (Sections 248 to 260)',
    courtForum: 'Court of Session / Additional Sessions Judge',
    estimatedTimeline: '1 to 3 years',
    courtFeeLevel: 'Exempt (State Prosecution)',
    overview: 'Full procedural trial workflow for serious offences triable exclusively by a Court of Session (murder, rape, dacoity, organized crime) from committal of chargesheet to final acquittal or conviction.',
    locusStandi: 'Public Prosecutor representing State; Accused represented by defence counsel; Victim counsel under Section 26(2) BNSS.',
    prerequisites: [
      'Offence exclusively triable by Court of Session under First Schedule of BNSS.',
      'Police report / Chargesheet filed under Section 193 BNSS.',
      'Committal order passed by Magistrate under Section 232 BNSS (Old Sec 209 CrPC).'
    ],
    mandatoryDocuments: [
      'Committal Order and complete bundle of documents under Section 230 BNSS (FIR, 180 statements, MLC, FSL reports).',
      'Chargesheet under Section 193 BNSS with list of prosecution witnesses and exhibits.',
      'Formal Discharge Application under Section 250 BNSS (if applicable).',
      'Vakalatnama for Defence Counsel.'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Committal & Opening of Case by Public Prosecutor',
        description: 'Following committal under Section 232, the Public Prosecutor opens the case describing charges and evidence to prove accused guilt under Section 249.',
        keyStatute: 'Section 249 BNSS (Old Section 226 CrPC)',
        advocateTips: 'Scrutinize whether all prosecution documents were supplied to accused under Section 230 BNSS.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Discharge Hearing (Section 250 BNSS)',
        description: 'Court considers record and hears submissions. If allegations are groundless, Judge discharges accused and records reasons.',
        keyStatute: 'Section 250 BNSS (Old Section 227 CrPC)',
        advocateTips: 'Discharge is maintainable if even taken at face value, no grave suspicion exists against the accused (Union of India v. Prafulla Kumar Samal).'
      },
      {
        stepNumber: 3,
        stepTitle: 'Framing of Formal Charge (Section 251 BNSS)',
        description: 'If ground exists for presuming offence, Judge frames charges in writing, reads and explains them to accused, and records plea.',
        keyStatute: 'Section 251 BNSS (Old Section 228 CrPC)',
        advocateTips: 'If accused pleads guilty, court may convict; if not guilty, trial date fixed for prosecution evidence.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Prosecution Evidence (Examination-in-Chief & Cross)',
        description: 'Prosecution calls witnesses (PWs). Defence counsel cross-examines key witnesses on inconsistencies, improvements, and alibi.',
        keyStatute: 'Section 254 BNSS & Bharatiya Sakshya Adhiniyam, 2023',
        advocateTips: 'Contradict witnesses with their previous statements recorded by police under Section 180 BNSS per BSA Section 148.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Examination of Accused under Section 351 BNSS (Sec 313 CrPC)',
        description: 'Court personally questions accused on all incriminating evidence appearing against him to enable personal explanation without oath.',
        keyStatute: 'Section 351 BNSS (Old Section 313 CrPC)',
        advocateTips: 'Failure to put any material circumstance to the accused prevents prosecution from relying upon it.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Defence Evidence, Final Arguments & Judgment',
        description: 'Defence enters witness (DW) if desired. Both sides present final arguments. Judge pronounces judgment of acquittal or conviction.',
        keyStatute: 'Sections 255-258 BNSS',
        advocateTips: 'If convicted, separate hearing on question of sentence under Section 258(2) is mandatory before imposing sentence.'
      }
    ],
    commonPitfalls: [
      'Failing to seek supply of Section 230/231 documents prior to framing of charge.',
      'Putting incriminating suggestions to prosecution witnesses during cross-examination that fill lacunae.'
    ],
    statutoryLimitation: 'No limitation for offences punishable with imprisonment exceeding 3 years.',
    appealRevisionRemedy: 'Criminal Appeal against conviction under Section 415 BNSS before High Court; Appeal against acquittal by State/Victim under Section 419 BNSS.',
    tags: ['trial-chargesheet', 'trial', 'sessions', 'chargesheet', 'framing of charge', 'prosecutor', 'discharge']
  },

  {
    id: 'proc-appeals-revisions-quashing',
    slug: 'criminal-appeals-revisions-quashing-high-court',
    title: 'Filing Criminal Appeals, Revisions & Quashing Petitions',
    category: 'Criminal Appellate & Revisional Practice',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 415, 438, 442 & 528 (Old CrPC 374, 397, 401, 482)',
    courtForum: 'High Court / Sessions Court',
    estimatedTimeline: '3 to 12 months',
    courtFeeLevel: '₹100 - ₹500 statutory court fee',
    overview: 'Comprehensive appellate and revisional remedies challenging final convictions, jurisdictional orders, or invoking inherent High Court powers under Section 528 BNSS to quash FIRs and criminal proceedings.',
    locusStandi: 'Convicted person, aggrieved complainant, or victim seeking revisional/appellate scrutiny.',
    prerequisites: [
      'Certified copy of the impugned conviction judgment or interlocutory order.',
      'For Quashing: Abuse of court process or pure civil dispute given criminal colour (Bhajan Lal principles).',
      'For Appeal: Filed within 60 or 90 days from the date of conviction.'
    ],
    mandatoryDocuments: [
      'Memorandum of Appeal / Revision / Section 528 Quashing Petition.',
      'Certified Copy of the Trial Court Judgment / Summoning Order.',
      'Suspension of Sentence Application (Section 430 BNSS / 389 CrPC).',
      'Affidavit of the Appellant / Revisionist.',
      'Trial Court record / depositions compilation.'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Obtaining Certified Copies & Limitation Calculation',
        description: 'Apply for certified copy on date of judgment. Exclude days taken in obtaining copies under Section 12 Limitation Act.',
        keyStatute: 'Limitation Act, 1963 — Articles 114, 115',
        advocateTips: 'If limitation expired, attach Application for Condonation of Delay under Section 5 Limitation Act with medical/genuine proofs.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting Appeal & Suspension of Sentence (SOS)',
        description: 'Draft grounds of appeal highlighting perverse appreciation of evidence. Simultaneously file application for suspension of sentence and bail pending appeal.',
        keyStatute: 'Section 430 BNSS (Old Section 389 CrPC)',
        advocateTips: 'In sentences under 3 years, trial court itself can grant interim bail under Section 430(3) to enable appeal filing.'
      },
      {
        stepNumber: 3,
        stepTitle: 'First Motion Admission & Record Call (LCR)',
        description: 'High Court / Sessions Court admits appeal, issues notice to State, grants suspension of sentence, and summons Lower Court Record (LCR).',
        keyStatute: 'Section 426 BNSS (Old Section 385 CrPC)',
        advocateTips: 'Ensure personal bond and sureties are submitted to avoid execution of warrant.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Final Hearing & Disposal on Merits',
        description: 'Both sides argue on law and evidence. Appellate Court reappreciates entire evidence and passes final judgment upholding, reversing, or remanding.',
        keyStatute: 'Section 427 BNSS (Old Section 386 CrPC)',
        advocateTips: 'Under Section 427, appellate court cannot dismiss appeal for default without examining merits of the record.'
      }
    ],
    commonPitfalls: [
      'Filing revision against interlocutory orders which is expressly barred under Section 438(2) BNSS (Old Sec 397(2) CrPC - Madhu Limaye test).',
      'Failing to surrender before filing appeal in certain High Courts without specific exemption.'
    ],
    statutoryLimitation: 'Appeal to High Court: 60 days; Appeal to Sessions: 30 days; Section 528 Quashing: Reasonable time.',
    appealRevisionRemedy: 'Special Leave Petition (Criminal) under Article 136 before the Supreme Court of India.',
    tags: ['appeals-revisions', 'appeal', 'revision', 'quashing', 'section 528', 'section 482', 'inherent']
  },

  {
    id: 'proc-execution-decree',
    slug: 'execution-civil-decree-warrants-order-21-cpc',
    title: 'Execution of Civil Decrees & Attachment of Property under Order XXI CPC',
    category: 'Civil Execution & Enforcement',
    actReference: 'Code of Civil Procedure, 1908 — Section 36 to 74 & Order XXI (Rules 1 to 106)',
    courtForum: 'Executing Court (Civil Court which passed decree or to which decree is transferred)',
    estimatedTimeline: '6 months to 2 years',
    courtFeeLevel: 'Execution application fee + Process fee + Poundage fee (varies by State)',
    overview: 'Litigation mechanism for a successful decree-holder to enforce money decrees, possession decrees, specific performance, and injunctions through attachment of property, arrest of judgment-debtor, and court auction.',
    locusStandi: 'Decree-Holder or transferee of decree under Section 49 CPC.',
    prerequisites: [
      'Valid and executable civil decree or arbitral award (Section 36 Arbitration Act).',
      'No stay of execution granted by Appellate Court.',
      'Execution petition filed within 12 years under Article 136 Limitation Act.'
    ],
    mandatoryDocuments: [
      'Certified Copy of Decree and Judgment.',
      'Execution Application in Form No. 6, Appendix E (tabular format under Order XXI Rule 11).',
      'Schedule of Property belonging to judgment-debtor with boundary descriptions.',
      'Search report showing title and non-encumbrance of attached property.',
      'Process fee and court fee stamps.'
    ],
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Tabular Execution Petition (Order XXI Rule 11)',
        description: 'File execution application in tabular form stating suit number, date of decree, whether appeal filed, amount due with interest, and mode of execution sought.',
        keyStatute: 'Order XXI Rule 11(2) CPC',
        advocateTips: 'If execution is filed more than 2 years after decree, issuance of notice under Rule 22 to judgment-debtor is mandatory.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Notice to Judgment-Debtor (Rule 22) & Objections (Sec 47)',
        description: 'Court issues show-cause notice. Judgment-debtor may file objections under Section 47 regarding execution, discharge, or satisfaction of decree.',
        keyStatute: 'Section 47 & Order XXI Rule 22 CPC',
        advocateTips: 'Executing court cannot go behind the decree; objections attacking decree on merits are barred.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Warrant of Attachment of Movable / Immovable Property',
        description: 'Court issues warrant of attachment. Bailiff attaches movable goods or affixes attachment order on immovable property with beat of drum (Rule 54).',
        keyStatute: 'Order XXI Rules 43 & 54 CPC',
        advocateTips: 'Any private transfer or alienation of property after attachment is void against all execution claims under Section 64 CPC.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Proclamation of Sale & Public Auction (Rule 66)',
        description: 'Court settles terms of proclamation of sale specifying reserve price and auction date. Court auctioneer conducts public bidding.',
        keyStatute: 'Order XXI Rules 66 & 67 CPC',
        advocateTips: 'Decree-holder must obtain permission of executing court under Rule 72 if decree-holder wishes to bid at the auction.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Confirmation of Sale & Delivery of Possession (Rule 92-95)',
        description: 'Upon expiry of 60 days without application to set aside sale, court confirms sale, issues Sale Certificate (Rule 94), and delivers possession (Rule 95).',
        keyStatute: 'Order XXI Rules 92, 94 & 95 CPC',
        advocateTips: 'Sale Certificate is proof of absolute title and does not require registration if issued under court seal.'
      }
    ],
    commonPitfalls: [
      'Filing after 12-year limitation period under Article 136 Limitation Act.',
      'Attempting to attach properties exempt from attachment under Section 60 CPC (necessary wearing apparel, tools of artisans, pension).'
    ],
    statutoryLimitation: '12 years from the date decree becomes enforceable (Limitation Act Article 136); 3 years for mandatory injunctions (Article 135).',
    appealRevisionRemedy: 'Orders under Section 47 are appealable as decrees; miscellaneous orders subject to Civil Revision under Section 115 CPC.',
    tags: ['execution-decree', 'execution', 'decree', 'attachment', 'warrant of sale', 'garnishee']
  }
];
`;

fs.writeFileSync(targetFile, code, 'utf8');
console.log('Successfully wrote comprehensive COURT_PROCEDURES_DATABASE to', targetFile);
