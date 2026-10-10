// ─── ARREST & BAIL LITIGATION WORKFLOWS ──────────────────────────────────────
// Authoritative procedures under Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)

export const BAIL_PROCEDURES = [
  {
    id: 'proc-bail-regular',
    slug: 'regular-bail-procedure-section-483-bnss-sessions-high-court',
    title: 'Regular Bail Procedure under Section 483 BNSS (Old Sec 439 CrPC)',
    category: 'Arrest & Bail (BNSS 482 / Regular Bail)',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 480, 481 & 483 (Old CrPC 437 & 439)',
    courtForum: 'Court of Session / High Court (or Judicial Magistrate under Section 480 BNSS)',
    estimatedTimeline: '2 to 7 days before Sessions; 7 to 20 days before High Court',
    courtFeeLevel: '₹10 - ₹50 Court fee stamp + Advocate Welfare Fund stamp',
    overview: 'Regular bail is the procedural mechanism to secure the release of an accused person from police or judicial custody after arrest or surrender. Governed by Section 483 BNSS (High Court and Sessions Court) and Section 480 BNSS (Magistrate), this procedure operationalizes the cardinal constitutional principle that "bail is the rule, jail is the exception" (State of Rajasthan v. Balchand & Satender Kumar Antil v. CBI). The court balances individual personal liberty under Article 21 against the societal interest in orderly investigation and trial.',
    legalBasis: 'Sections 479 (maximum period of detention for undertrials), 480 (bail in non-bailable offences before Magistrate), 481 (anticipatory vs regular bail distinctions), 483 (special powers of High Court or Court of Session regarding bail), and 485 (bail bonds and sureties) of the Bharatiya Nagarik Suraksha Sanhita, 2023.',
    locusStandi: 'An accused person who is currently in physical police custody or judicial custody (jail), or who physically surrenders before the court and submits to its custody (Niranjan Singh v. Prabhakar Rajaram Kharote).',
    prerequisites: [
      'Actual physical incarceration or voluntary surrender before the court.',
      'Prior rejection of bail by the jurisdictional Magistrate under Section 480 BNSS (customary before approaching Sessions under Section 483).',
      'Completion of police custodial interrogation (or readiness to cooperate with investigation).',
      'No concealment of past criminal antecedents in the supporting affidavit.'
    ],
    statutoryLimitation: 'No fixed limitation period; an accused may apply for regular bail at any stage of investigation, inquiry, or trial, and file successive bail applications if there is a substantial change in circumstances.',
    mandatoryDocuments: [
      'Bail Application detailing facts, grounds of false implication, and lack of flight risk.',
      'Certified copy of the First Information Report (FIR) and complaint.',
      'Certified copy of the Remand Order / Arrest Memo issued by the Magistrate.',
      'Rejection Order of the Lower Court (if applying before Sessions or High Court).',
      'Affidavit of Pairokar (close relative/friend) swearing to facts and custody status.',
      'Address and Identity Proof of the accused and prospective solvent sureties (Aadhaar / Voter ID).',
      'Medical certificates or hospital records (if bail is sought on medical grounds under Section 480(1) proviso).'
    ],
    draftingGuidance: 'The bail petition must explicitly address the 4 cardinal bail tests: (1) Prima facie lack of involvement or absence of active role, (2) Nature and gravity of punishment (triable by Magistrate vs Sessions), (3) Severity of punishment and parity with co-accused already released, (4) Absence of flight risk, deep roots in society, and non-tampering assurance. Clearly disclose whether any other bail application is pending in any court.',
    courtFeesFilingRules: '₹10 to ₹50 court fee stamp. Advance copy must be served on the Public Prosecutor / Additional Public Prosecutor with dated receiving.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Drafting Bail Application & Pairokar Affidavit',
        governingRule: 'Section 483 BNSS & High Court Criminal Rules',
        actingParty: 'Defence Advocate & Pairokar',
        description: 'Draft the bail memo setting out the prosecution version, defence explanation, completion of custodial recovery, and parity with co-accused.',
        advocateTips: 'Under Section 480(1) proviso BNSS, women, sick, infirm, or persons under 18 years are entitled to special statutory leniency.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Filing & Advance Service on Public Prosecutor',
        governingRule: 'Section 483(1) Proviso BNSS',
        actingParty: 'Defence Clerk & Public Prosecutor',
        description: 'File application before the filing counter of Sessions Court or High Court. Serve copy on Public Prosecutor to requisition the Case Diary and IO status report.',
        advocateTips: 'In offences punishable with death, life imprisonment, or exceeding 7 years, reasonable notice to the Public Prosecutor is mandatory under BNSS.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Production of Case Diary & Status Report by IO',
        governingRule: 'Section 192 BNSS (Old Section 172 CrPC)',
        actingParty: 'Investigating Officer & Public Prosecutor',
        description: 'The Investigating Officer (IO) appears or sends a written status report along with the Case Diary containing witness statements recorded under Section 180 BNSS.',
        advocateTips: 'Review the status report to ascertain if chargesheet has been filed or forensic / FSL reports are pending.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Substantive Oral Arguments before the Court',
        governingRule: 'Satender Kumar Antil Guidelines & Section 483 BNSS',
        actingParty: 'Defence Counsel & Public Prosecutor',
        description: 'Argue that custodial detention is no longer necessary as recoveries under Section 23 BSA (Old Section 27 Evidence Act) are complete and the trial will take considerable time.',
        advocateTips: 'Emphasize parity if a co-accused with identical or more serious allegations has already been admitted to bail.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Pronouncement of Bail Order & Setting Conditions',
        governingRule: 'Section 483(2) BNSS',
        actingParty: 'Sessions Judge / High Court Judge',
        description: 'Court pronounces reasoned bail order directing release subject to personal bond (PB) and solvent sureties, with standard conditions (surrender passport, report to IO).',
        advocateTips: 'If cash bail is preferred over local surety, request the court under Section 487 BNSS to accept cash deposit in lieu of surety.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Furnishing Bail Bonds & Issue of Release Warrant (Robkar)',
        governingRule: 'Section 485 & 486 BNSS',
        actingParty: 'Trial Magistrate, Sureties & Jail Superintendent',
        description: 'Sureties present solvency certificates (revenue registry, tax receipts) and personal bond before the trial Magistrate. Court verifies bonds and transmits Release Warrant (Robkar) to the Jail Superintendent.',
        advocateTips: 'Under the FASTER system, release warrants can be transmitted electronically directly to the jail authorities.'
      }
    ],
    hearingAndArguments: 'The defense counsel must argue that continued incarceration prior to conviction operates as pre-trial punishment, violating Article 21. If the investigation is complete and chargesheet has been filed, custodial necessity ceases unless extraordinary tampering risk is demonstrated.',
    possibleOutcomes: [
      'Grant of regular bail on personal bond and solvent sureties.',
      'Grant of interim bail on medical grounds with direction to surrender upon expiry of period.',
      'Rejection of bail with liberty to apply afresh after examination of material witnesses.',
      'Direction to expedite trial within a fixed timeframe.'
    ],
    appealRevisionRemedy: 'If rejected by the Sessions Court, a fresh regular bail application lies before the High Court under Section 483 BNSS. If rejected by the High Court, a Special Leave Petition (Criminal) lies before the Supreme Court under Article 136.',
    commonPitfalls: [
      'Filing a successive bail application before a different judge of the same court (bench hunting strictly condemned by Supreme Court).',
      'Suppression of previous criminal cases leading to rejection on grounds of unclean hands.',
      'Furnishing fake or unregistered surety documents resulting in criminal prosecution under Section 227 BNS.'
    ],
    practicalScenario: 'An accountant was arrested under Section 318(4) BNS (cheating) for alleged company fund diversion. The Magistrate rejected bail. In the Sessions Court, defence counsel proved that all accounting ledgers, laptops, and hard drives were already seized by police, chargesheet was filed, and the offence was triable by a Magistrate. The Sessions Court granted regular bail on a personal bond of ₹50,000 and one local surety.',
    caseLaws: [
      {
        title: 'Satender Kumar Antil v. Central Bureau of Investigation',
        citation: '(2022) 10 SCC 773',
        court: 'Supreme Court of India',
        holding: 'Categorized offences into Category A to D; held that for Category A offences (punishable up to 7 years), bail should ordinarily be granted without physical arrest if the accused complied with Section 41A / 35 BNSS notices.'
      },
      {
        title: 'State of Rajasthan v. Balchand',
        citation: '(1977) 4 SCC 308 : AIR 1977 SC 2447',
        court: 'Supreme Court of India (Justice V.R. Krishna Iyer)',
        holding: 'Enunciated the foundational legal principle of criminal jurisprudence: "The basic rule may perhaps be tersely put as bail, not jail, save where there are circumstances suggestive of fleeing from justice or thwarting the course of justice."'
      }
    ],
    faqs: [
      {
        q: 'Can regular bail be granted before the chargesheet is filed?',
        a: 'Yes. Regular bail can be granted at any stage of investigation if the court is satisfied that custodial interrogation is no longer required.'
      },
      {
        q: 'What is parity in bail matters?',
        a: 'Parity means that if a co-accused against whom similar or greater allegations are made has been granted bail, the applicant is entitled to equal treatment under Article 14.'
      }
    ],
    tags: ['arrest-bail', 'bail', 'regular bail', 'bnss 483', 'section 439', 'crpc', 'satender antil', 'surety']
  },

  {
    id: 'proc-bail-anticipatory',
    slug: 'anticipatory-pre-arrest-bail-section-482-bnss-procedure',
    title: 'Anticipatory Bail: Pre-Arrest Protection under Section 482 BNSS (Old Sec 438 CrPC)',
    category: 'Arrest & Bail (BNSS 482 / Regular Bail)',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 482 (Old Section 438 CrPC)',
    courtForum: 'Court of Session / High Court (Concurrent jurisdiction)',
    estimatedTimeline: '3 to 10 days (Interim protection often considered on Day 1-2)',
    courtFeeLevel: '₹50 Court fee stamp + Advocate Welfare Fund stamp',
    overview: 'Anticipatory bail (direction for grant of bail to a person apprehending arrest) is a pre-arrest shield granted to protect innocent citizens from humiliation, harassment, and malicious arrest at the behest of influential or vindictive complainants. Inserted under Section 482 BNSS (Old Section 438 CrPC), an order under this section operates the moment an arrest is attempted, commanding the police officer to release the applicant immediately upon furnishing a personal bond.',
    legalBasis: 'Section 482 Bharatiya Nagarik Suraksha Sanhita, 2023; read with constitutional principles under Article 21; Gurbaksh Singh Sibbia (1980) and Sushila Aggarwal (2020) Constitution Bench rulings.',
    locusStandi: 'Any person who has a reasonable, concrete apprehension that they may be arrested on an accusation of having committed a non-bailable offence.',
    prerequisites: [
      'Concrete apprehension of arrest based on tangible materials (e.g., lodging of FIR, complaint, police visit to residence, or notice under Section 35(3) BNSS); vague fear is insufficient.',
      'The applicant must not have been already arrested (anticipatory bail becomes infructuous upon arrest).',
      'The offence must not be barred by special statutes that exclude anticipatory bail (e.g., Section 18/18A SC/ST PoA Act, unless no prima facie case is made out - Prathvi Raj Chauhan v. Union of India).'
    ],
    statutoryLimitation: 'Can be filed at any time prior to actual physical arrest; once granted, it ordinarily continues till the end of the trial unless limited by the court (Sushila Aggarwal v. State of NCT Delhi).',
    mandatoryDocuments: [
      'Anticipatory Bail Application stating grounds, background of civil/business dispute, and clean antecedents.',
      'Copy of the FIR / Complaint / Police Notice (if available to the applicant).',
      'Affidavit of the Applicant swearing to facts and undertaking to join investigation.',
      'Documentary evidence showing civil nature of dispute (contracts, bank receipts, WhatsApp/email communications).',
      'Proof of permanent residence and social standing in society.'
    ],
    draftingGuidance: 'The application must clearly articulate: (1) Reason for apprehension of arrest with dates and incidents, (2) Factual narrative demonstrating mala fides of complainant or civil dispute cloaked as criminal offence, (3) Undertaking to join investigation whenever summoned under Section 482(2) BNSS, (4) Undertaking not to leave India without court permission, (5) Statement whether previous anticipatory bail was filed in any court.',
    courtFeesFilingRules: '₹50 court fee stamp. In many High Courts, advance copy must be served on the State Public Prosecutor 48 hours before listing.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Application in Sessions Court or High Court',
        governingRule: 'Section 482(1) BNSS',
        actingParty: 'Accused Applicant / Advocate',
        description: 'File application before the Sessions Court or directly before the High Court (though judicial convention requires approaching Sessions first unless special circumstances exist).',
        advocateTips: 'If approaching High Court directly, state special reasons (e.g., inter-state transit, political vendetta across multiple districts).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Advance Notice to Public Prosecutor',
        governingRule: 'Section 482(1) Proviso BNSS',
        actingParty: 'Advocate & Public Prosecutor',
        description: 'Serve advance copy on the Public Prosecutor. Under BNSS Section 482(1), a mandatory notice period (typically 7 days) is provided to enable the State to seek instructions.',
        advocateTips: 'Press for ad-interim protection ("No coercive steps" or "In the event of arrest, release on interim bail") during the notice period.'
      },
      {
        stepNumber: 3,
        stepTitle: 'First Hearing & Grant of Ad-Interim Protection',
        governingRule: 'Section 482(1) Proviso BNSS',
        actingParty: 'Sessions Judge / High Court Judge',
        description: 'Court hears preliminary submissions. If a prima facie case of harassment or civil dispute is shown, court grants ad-interim protection directing that in the event of arrest, applicant be released on interim bail.',
        advocateTips: 'Immediate direction must be sought commanding the applicant to report to the Investigating Officer on specific days to demonstrate bona fides.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Joining Investigation & Police Interrogation',
        governingRule: 'Section 482(2)(i) BNSS',
        actingParty: 'Applicant & Investigating Officer',
        description: 'Applicant appears before the police station, participates in questioning, and provides relevant documents. Police cannot arrest in view of interim protection.',
        advocateTips: 'Always obtain a written acknowledgment from the IO or record the visit in the General Diary (GD) with exact time of arrival and departure.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Filing of Status Report by Police',
        governingRule: 'Section 192 BNSS',
        actingParty: 'Investigating Officer & Public Prosecutor',
        description: 'Police submit a status report stating whether the applicant cooperated, whether custodial interrogation is required, and whether incriminating recoveries are pending.',
        advocateTips: 'Argue that refusal to make a self-incriminating confession does not constitute "non-cooperation" (Santosh v. State of Maharashtra).'
      },
      {
        stepNumber: 6,
        stepTitle: 'Final Hearing & Confirmation of Anticipatory Bail',
        governingRule: 'Sushila Aggarwal v. State of NCT Delhi',
        actingParty: 'Sessions / High Court Bench',
        description: 'Court hears final arguments. If custodial interrogation is unnecessary, court confirms anticipatory bail, which will operate throughout the trial until final judgment.',
        advocateTips: 'Ensure order clarifies that in the event of arrest by any agency in connection with the specified FIR, release shall be immediate.'
      }
    ],
    hearingAndArguments: 'The defense must demonstrate: (1) Absence of need for custodial discovery under Section 23 BSA, (2) Deep roots in society, (3) Complainant ulterior motive, and (4) The dispute is predominantly of a civil or contractual nature.',
    possibleOutcomes: [
      'Confirmation of anticipatory bail operating till the conclusion of trial.',
      'Rejection of anticipatory bail if offence is grave (murder, rape, multi-crore scam) requiring custodial interrogation.',
      'Grant of limited transit anticipatory bail for 2 to 3 weeks to enable applicant to approach jurisdictional court in another State.'
    ],
    appealRevisionRemedy: 'If rejected by the Sessions Court, a fresh anticipatory bail application lies before the High Court under Section 482 BNSS. If rejected by the High Court, an SLP (Criminal) lies before the Supreme Court under Article 136.',
    commonPitfalls: [
      'Applying for anticipatory bail after the accused has already been formally arrested by police.',
      'Failing to appear before the IO during the interim protection window, resulting in vacation of protection for non-cooperation.'
    ],
    practicalScenario: 'A software company director was named in an FIR under Section 316(2) BNS (criminal breach of trust) by an ex-partner following a failed contract. The police visited his residence to arrest him. He immediately moved an application under Section 482 BNSS before the Sessions Court. The court granted interim protection, he joined investigation and produced email exchanges proving the commercial settlement dispute, and the court confirmed his anticipatory bail.',
    caseLaws: [
      {
        title: 'Sushila Aggarwal v. State (NCT of Delhi)',
        citation: '(2020) 5 SCC 1',
        court: 'Supreme Court of India (5-Judge Constitution Bench)',
        holding: 'Anticipatory bail should not ordinarily be limited to a fixed period; it should enure till the end of trial. Imposition of restrictive time-limits is unwarranted unless special circumstances exist.'
      },
      {
        title: 'Gurbaksh Singh Sibbia v. State of Punjab',
        citation: '(1980) 2 SCC 565',
        court: 'Supreme Court of India (5-Judge Constitution Bench)',
        holding: 'Section 438 CrPC (now Section 482 BNSS) is an extraordinary provision crafted to protect personal liberty under Article 21; wide discretion is conferred on courts and cannot be circumscribed by rigid rules.'
      }
    ],
    faqs: [
      {
        q: 'Does anticipatory bail expire when the chargesheet is filed?',
        a: 'No. The 5-Judge Constitution Bench in Sushila Aggarwal (2020) authoritatively held that anticipatory bail continues to operate even after the chargesheet is filed, right up to the conclusion of trial.'
      },
      {
        q: 'Can anticipatory bail be granted for offences in another State?',
        a: 'Yes, as "Transit Anticipatory Bail" for a limited period (typically 2 to 4 weeks) to enable the applicant to approach the competent jurisdictional court (Priya Indoria v. State of Karnataka, 2023 SC).'
      }
    ],
    tags: ['arrest-bail', 'bail', 'anticipatory bail', 'bnss 482', 'section 438', 'pre-arrest', 'sushila aggarwal', 'transit bail']
  },

  {
    id: 'proc-bail-default',
    slug: 'default-statutory-bail-section-187-bnss-procedure',
    title: 'Default / Statutory Bail under Section 187(3) BNSS (Old Sec 167(2) CrPC)',
    category: 'Arrest & Bail (BNSS 482 / Regular Bail)',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 187(2) & 187(3) (Old Section 167(2) CrPC)',
    courtForum: 'Court of the Jurisdictional Judicial Magistrate / Special Court',
    estimatedTimeline: '24 to 48 hours (Strict statutory entitlement)',
    courtFeeLevel: '₹10 - ₹20 Court Fee stamp',
    overview: 'Default bail (statutory bail) under Section 187(3) BNSS (Old Section 167(2) CrPC) is an indefeasible fundamental right flowing directly from Article 21 of the Constitution. If the police fail to complete the investigation and file the final report / chargesheet under Section 193 BNSS within the prescribed statutory period (60 days or 90 days), the accused acquires an absolute, non-derogable right to be released on bail, irrespective of the gravity of the offence or the merits of the case.',
    legalBasis: 'Section 187(3) of the Bharatiya Nagarik Suraksha Sanhita, 2023; Article 21 of the Constitution of India; landmark rulings in Bikramjit Singh (2020) and Sanjay Dutt (1994).',
    locusStandi: 'An accused person who has been in continuous police or judicial custody for 60 days (for offences punishable with imprisonment up to 10 years) or 90 days (for offences punishable with death, life imprisonment, or imprisonment not less than 10 years), where no chargesheet has been filed by the prosecution.',
    prerequisites: [
      'Completion of 60 days or 90 days of continuous custody computed from the date of the first judicial remand.',
      'Failure of the investigating agency to file a complete chargesheet under Section 193 BNSS on or before the 60th or 90th day.',
      'The accused must "avail" of the right by filing a formal application or orally offering to furnish bail before the chargesheet is actually lodged in court.'
    ],
    statutoryLimitation: 'The right accrues on the 61st or 91st day. It must be availed of before the prosecution files the chargesheet; once availed, the subsequent filing of a chargesheet cannot extinguish the right (M. Ravindran v. Directorate of Revenue Intelligence).',
    mandatoryDocuments: [
      'Default Bail Application under Section 187(3) BNSS.',
      'Certified copy of the Initial Remand Order establishing the exact starting date of custody.',
      'Court Order Sheets (Roznamcha) proving continuous detention and absence of chargesheet filing.',
      'Undertaking expressing readiness and willingness to furnish solvent sureties.',
      'Affidavit of Pairokar.'
    ],
    draftingGuidance: 'The application is simple and mathematical: (1) Date of first remand by Magistrate, (2) Total number of days elapsed in continuous custody, (3) Statutory time limit applicable (60 or 90 days), (4) Categorical averment that as of 10:30 AM today, no chargesheet has been filed, (5) Explicit statement that applicant is ready and willing to furnish bail bonds and solvent sureties.',
    courtFeesFilingRules: 'Nominal court fee stamp of ₹10. Must be filed directly before the Magistrate having custody of the case record.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Mathematical Computation of Remand Days',
        governingRule: 'Section 187(3) BNSS & State of MP v. Rustam',
        actingParty: 'Defence Advocate',
        description: 'Compute 60 or 90 days excluding the date of first remand. The statutory period expires on the midnight of the 60th/90th day.',
        advocateTips: 'If the 90th day falls on a court holiday, the right still accrues and filing can be done before the Duty Magistrate or on the opening day.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Immediate Morning Filing of Section 187(3) Application',
        governingRule: 'Section 187(3) BNSS',
        actingParty: 'Defence Advocate & Court Reader',
        description: 'File default bail application the first thing in the morning (10:00 AM) and obtain a stamped receiving noting the exact time of filing on the application.',
        advocateTips: 'Timestamping is vital: if police file the chargesheet at 11:30 AM, your 10:00 AM stamped application preserves your indefeasible right.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Magistrate Verification of Court Record',
        governingRule: 'M. Ravindran v. DRI (2021) 2 SCC 485',
        actingParty: 'Judicial Magistrate',
        description: 'The Magistrate inspects the court register and criminal diary to certify whether any chargesheet or supplementary report was received prior to the bail application.',
        advocateTips: 'If police submit an incomplete "dummy" chargesheet without mandatory FSL or sanction, argue that an incomplete report does not defeat default bail.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Notice to Public Prosecutor & Immediate Disposal',
        governingRule: 'Section 187(3) BNSS',
        actingParty: 'Court & Public Prosecutor',
        description: 'Magistrate calls upon Public Prosecutor for confirmation. The court cannot grant an adjournment to the police to file the chargesheet to defeat the right.',
        advocateTips: 'Adjourning default bail to enable police to file chargesheet is a gross violation of Article 21 (Bikramjit Singh v. State of Punjab).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Mandatory Order Granting Default Bail',
        governingRule: 'Section 187(3) BNSS',
        actingParty: 'Judicial Magistrate',
        description: 'Magistrate passes order admitting accused to default bail subject to reasonable surety conditions. The order is deemed to be an order under Section 480/483 BNSS.',
        advocateTips: 'The Magistrate cannot impose onerous or impossible financial conditions that frustrate the statutory release.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Furnishing Bonds & Release of Accused',
        governingRule: 'Section 485 BNSS',
        actingParty: 'Surety & Jail Superintendent',
        description: 'Surety bonds are accepted and verified on the same day. Release warrant is dispatched to the prison immediately.',
        advocateTips: 'Default bail cannot be cancelled merely because the chargesheet is subsequently filed, unless grounds under Section 483(3) are established.'
      }
    ],
    hearingAndArguments: 'Counsel must argue that default bail is an indefeasible right that brooks no judicial discretion. Merits of the case, heinousness of crime, or police workload cannot be considered once the statutory timeline is breached.',
    possibleOutcomes: [
      'Immediate grant of statutory default bail on personal bond and sureties.',
      'Rejection if chargesheet was filed before the expiry of the statutory period or before the application was filed.'
    ],
    appealRevisionRemedy: 'An illegal rejection of default bail is amenable to immediate Criminal Revision under Section 438 BNSS before the Sessions Court or a Petition under Section 528 BNSS / Article 226/227 before the High Court.',
    commonPitfalls: [
      'Delaying filing of default bail application until after police have submitted the chargesheet.',
      'Miscalculating the 60 vs 90 days statutory threshold (e.g., offences punishable with up to 10 years require 60 days, not 90 days - Rakesh Kumar Paul v. State of Assam).'
    ],
    practicalScenario: 'An accused was arrested in a cyber fraud case punishable under Section 318(4) BNS (maximum sentence 7 years). The 60th day of custody ended on Sunday. On Monday morning at 10:00 AM, defence counsel filed an application under Section 187(3) BNSS. At 2:00 PM, the police arrived to file the chargesheet. The Magistrate held that the right to default bail was successfully availed of before the chargesheet was filed, and released the accused on bail.',
    caseLaws: [
      {
        title: 'M. Ravindran v. Directorate of Revenue Intelligence',
        citation: '(2021) 2 SCC 485',
        court: 'Supreme Court of India (3-Judge Bench)',
        holding: 'The right to default bail under Section 167(2) CrPC / Section 187(3) BNSS is an indefeasible right and part of the fundamental right to personal liberty under Article 21; once an application is filed, subsequent filing of chargesheet cannot defeat it.'
      },
      {
        title: 'Bikramjit Singh v. State of Punjab',
        citation: '(2020) 10 SCC 616',
        court: 'Supreme Court of India',
        holding: 'Default bail is a fundamental right; the court cannot adjourn the default bail application to facilitate the filing of a chargesheet by the investigating agency.'
      }
    ],
    faqs: [
      {
        q: 'Does an incomplete chargesheet defeat default bail?',
        a: 'No. Filing a preliminary or incomplete chargesheet without essential expert reports or without completing investigation does not extinguish the right to default bail.'
      },
      {
        q: 'Can default bail be cancelled once chargesheet is filed?',
        a: 'No. Filing of chargesheet is not a ground to cancel default bail; cancellation requires proof of witness tampering, absconding, or misuse of liberty under Section 483(3) BNSS.'
      }
    ],
    tags: ['arrest-bail', 'bail', 'default bail', 'statutory bail', 'bnss 187', 'section 167', 'crpc', 'indefeasible right', '60 days', '90 days']
  },

  {
    id: 'proc-bail-cancellation',
    slug: 'cancellation-of-bail-modification-conditions-section-483-3-bnss',
    title: 'Cancellation of Bail & Modification of Conditions under Section 483(3) BNSS',
    category: 'Arrest & Bail (BNSS 482 / Regular Bail)',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 480(5), 482(3) & 483(3)',
    courtForum: 'Court of Session / High Court (Court which granted bail or superior court)',
    estimatedTimeline: '1 to 3 months',
    courtFeeLevel: '₹50 Court fee stamp',
    overview: 'Cancellation of bail under Section 483(3) BNSS is an exceptional power exercised when an accused who was granted bail abuses their liberty by tampering with prosecution evidence, threatening witnesses, committing further offences, or fleeing from justice. The legal threshold for cancelling bail is significantly higher than that for rejecting bail, as it deprives a citizen of liberty already restored by a judicial order (Dolat Ram v. State of Haryana).',
    legalBasis: 'Sections 480(5) (cancellation by Magistrate) and 483(3) (cancellation by High Court or Court of Session) of the Bharatiya Nagarik Suraksha Sanhita, 2023.',
    locusStandi: 'The State through the Public Prosecutor, the investigating agency, the complainant, the victim, or their legal heirs (Puran v. Rambilas).',
    prerequisites: [
      'An existing, valid bail order in favour of the accused.',
      'Supervening circumstances demonstrating abuse of concession of bail (witness intimidation, tampering with exhibits, commission of cognizable offence, or breach of bail conditions).',
      'Or in the alternative: established perversity, illegality, or non-application of mind in the original bail order itself.'
    ],
    statutoryLimitation: 'Can be filed at any time during the pendency of investigation or trial upon the occurrence of misconduct or breach of conditions.',
    mandatoryDocuments: [
      'Application for Cancellation of Bail under Section 483(3) BNSS.',
      'Certified copy of the original Bail Order.',
      'Copy of the Complaint / FIR / Non-Cognizable Report (NCR) regarding witness threats or intimidation.',
      'Call Data Records (CDR), WhatsApp screenshots, or audio recordings proving threats to witnesses.',
      'Affidavit of the Victim / Witness affirming the specific intimidation incident.'
    ],
    draftingGuidance: 'The application must categorically distinguish between: (a) challenge to the bail order on grounds of perversity (irrelevant factors considered, relevant statutory bars ignored), and (b) supervening misconduct post-bail. Clearly state the exact date, time, and mode of threat delivered to the prosecution witnesses.',
    courtFeesFilingRules: '₹50 court fee stamp. Advance copy must be served on the counsel who represented the accused or directly on the accused.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Cancellation Application with Threat Materials',
        governingRule: 'Section 483(3) BNSS',
        actingParty: 'Complainant / Public Prosecutor',
        description: 'File application before the Court of Session or High Court enclosing concrete evidence of witness intimidation or breach of conditions.',
        advocateTips: 'If direct threats were issued, ensure a formal police complaint (GD entry) was lodged prior to filing the cancellation application.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Issuance of Show Cause Notice to Accused',
        governingRule: 'Principles of Natural Justice & Section 483(3) BNSS',
        actingParty: 'Court & Process Server',
        description: 'The court issues notice to the accused person to show cause why his bail should not be cancelled. Bail cannot be cancelled ex-parte without notice.',
        advocateTips: 'If accused evades notice service, request the court to issue bailable warrants to secure appearance.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Filing of Reply & Rejoinder by Accused',
        governingRule: 'High Court Criminal Rules',
        actingParty: 'Accused Defence Advocate',
        description: 'Accused files a counter-affidavit rebutting the allegations of intimidation and demonstrating compliance with all reporting conditions.',
        advocateTips: 'Produce evidence of alibi or call logs to prove applicant was not present at the location of the alleged threat.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Judicial Scrutiny of Supervening Circumstances',
        governingRule: 'Dolat Ram v. State of Haryana (1995) 1 SCC 349',
        actingParty: 'Sessions Judge / High Court Judge',
        description: 'Court examines whether the accused misused freedom or if the allegations are fabricated to settle personal scores. Vague allegations do not justify cancellation.',
        advocateTips: 'Very cogent and overwhelming circumstances are necessary for an order directing the cancellation of bail already granted.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Order of Cancellation & Non-Bailable Warrant',
        governingRule: 'Section 483(3) BNSS',
        actingParty: 'Court & Police Authorities',
        description: 'If satisfied of witness tampering or breach, court cancels bail bonds, forfeits surety under Section 491 BNSS, and issues Non-Bailable Warrants (NBW) for immediate arrest.',
        advocateTips: 'Police must immediately execute the NBW and commit the accused to judicial custody.'
      }
    ],
    hearingAndArguments: 'Prosecution must prove: (1) Interference with the due course of administration of justice, (2) Evasion of trial or flight risk, (3) Misuse of liberty by committing fresh crimes. Defence must argue that cancellation requires cogent and overwhelming proof, not mere suspicion.',
    possibleOutcomes: [
      'Cancellation of bail and committal of accused to judicial custody.',
      'Dismissal of cancellation application with warning to accused.',
      'Modification or tightening of bail conditions (e.g., daily reporting, movement restriction outside city).'
    ],
    appealRevisionRemedy: 'An order cancelling bail passed by Sessions Court can be challenged before the High Court under Section 483 BNSS or Section 528 BNSS. High Court cancellation order is challengeable before the Supreme Court via SLP (Criminal) under Article 136.',
    commonPitfalls: [
      'Applying for cancellation before the same court on the same grounds without establishing any new supervening misconduct.',
      'Relying on oral assertions without documentary or electronic proof of witness intimidation.'
    ],
    practicalScenario: 'An accused in an assault case was released on bail subject to not contacting the victim. Two weeks later, the accused visited the victim shop with associates and threatened him with death if he deposed in court. The victim recorded the conversation on mobile and lodged an FIR. The complainant filed a Section 483(3) application. The High Court verified the audio recording, cancelled the bail, and ordered the accused taken into custody.',
    caseLaws: [
      {
        title: 'Dolat Ram v. State of Haryana',
        citation: '(1995) 1 SCC 349',
        court: 'Supreme Court of India',
        holding: 'Rejection of bail stands on one footing, but cancellation of bail is a harsh step requiring cogent and overwhelming circumstances; bail cannot be cancelled on mere allegations without substantial proof of tampering.'
      },
      {
        title: 'Puran v. Rambilas',
        citation: '(2001) 6 SCC 338',
        court: 'Supreme Court of India',
        holding: 'Bail can be cancelled not only for post-bail misconduct, but also if the order granting bail was perverse, ignored statutory provisions, or was passed without application of mind.'
      }
    ],
    faqs: [
      {
        q: 'Can a victim or complainant apply for cancellation of bail?',
        a: 'Yes. The Supreme Court in Puran v. Rambilas confirmed that a victim or private complainant has full locus standi to file an application for cancellation of bail.'
      },
      {
        q: 'Can bail conditions be modified without cancelling bail?',
        a: 'Yes. An application for relaxation or modification of bail conditions (such as permission to travel abroad or reducing reporting frequency) can be filed under Section 483(1) BNSS.'
      }
    ],
    tags: ['arrest-bail', 'bail', 'cancellation of bail', 'bnss 483', 'section 439', 'tampering', 'witness protection', 'crpc']
  }
];
