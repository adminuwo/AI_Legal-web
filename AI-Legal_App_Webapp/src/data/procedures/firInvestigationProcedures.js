// ─── FIR, ZERO FIR & POLICE INVESTIGATION PROCEDURES ─────────────────────────
// Authoritative workflows under Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)

export const FIR_INVESTIGATION_PROCEDURES = [
  {
    id: 'proc-fir-registration-173-bnss',
    slug: 'fir-registration-cognizable-offence-section-173-bnss',
    title: 'FIR Registration & Reporting Cognizable Offences under Section 173 BNSS',
    category: 'FIR, Zero FIR & Investigation',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 173 (Old CrPC Section 154)',
    courtForum: 'Police Station having Territorial Jurisdiction / Jurisdictional Magistrate',
    estimatedTimeline: 'Immediate on disclosure of cognizable offence (Max 14 days if preliminary inquiry conducted under Sec 173(3))',
    courtFeeLevel: 'Nil (Free of Cost as a matter of statutory right)',
    overview: 'First Information Report (FIR) is the earliest information given to the police officer in charge of a police station regarding the commission of a cognizable offence. Under Section 173 BNSS, recording an FIR is mandatory whenever information discloses the commission of a cognizable offence (Lalita Kumari v. Govt of UP). The BNSS modernizes this process by explicitly recognizing electronic information (e-FIR), requiring signature within 3 days, and codifying preliminary inquiry for offences punishable between 3 and 7 years with prior approval of a Deputy Superintendent of Police.',
    legalBasis: 'Section 173 Bharatiya Nagarik Suraksha Sanhita, 2023 (Information in cognizable cases); Section 176 BNSS (Procedure for investigation); read with Article 21 Constitution of India and landmark principles in Lalita Kumari v. Govt. of U.P. (2014) 2 SCC 1.',
    locusStandi: 'Any person having knowledge of the commission of a cognizable offence, including the victim, eye-witness, doctor, relative, or any public informant. Locus standi is not restricted to the aggrieved person.',
    prerequisites: [
      'The disclosed facts must prima facie constitute a cognizable offence under Bharatiya Nyaya Sanhita, 2023 (BNS) or any special penal statute.',
      'Information must be communicated to the Officer-in-Charge of the jurisdictional Police Station (or submitted as e-FIR).',
      'If given orally, it must be reduced to writing by the police officer and read over to the informant before signing.',
      'A free copy of the recorded FIR must be immediately furnished to the informant under Section 173(2) BNSS.'
    ],
    statutoryLimitation: 'No general limitation applies to serious offences punishable with over 3 years imprisonment under Section 514 BNSS (Old Sec 468 CrPC). However, prompt reporting is critical, as unexplained delay creates suspicion of concoction or embellishment.',
    mandatoryDocuments: [
      'Written complaint / application signed by the informant detailing date, time, venue, and sequence of events.',
      'Medico-Legal Certificate (MLC) / Injury Report from a government hospital (in assault/grievous hurt cases).',
      'Photographic or video evidence, CCTV recordings, or CDR logs establishing presence and assault.',
      'Government-issued Photo ID of the informant/complainant (Aadhaar, Voter ID, Passport).',
      'Electronic evidence certificate under Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA) for digital records.'
    ],
    draftingGuidance: 'The complaint must clearly state: (a) Date, exact time, and precise location of occurrence; (b) Names, parentage, and physical descriptions of named accused and unknown accomplices; (c) Specific role played by each accused; (d) Weapon used, injuries inflicted, or property stolen; (e) Names of eye-witnesses; (f) Plausible explanation for any delay in reporting; and (g) Clear prayer requesting registration of FIR under appropriate sections of BNS.',
    courtFeesFilingRules: 'No court fee or stamp duty is payable. Under Section 173(2) BNSS, a copy of the FIR must be given forthwith, free of cost, to the informant or the victim.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Reporting Information to Police Station / e-FIR Lodgment',
        governingRule: 'Section 173(1) BNSS',
        actingParty: 'Complainant / Informant',
        description: 'Informant approaches the local Police Station or submits an electronic communication (e-FIR). The Duty Officer enters the substance into the General Diary (Station Diary / Rojnamcha).',
        advocateTips: 'If submitting an e-FIR, ensure the informant physically visits the police station within 3 days to sign the record, as mandated by the first proviso to Section 173(1) BNSS.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Statutory Preliminary Inquiry (Applicable for 3–7 Year Offences)',
        governingRule: 'Section 173(3) BNSS',
        actingParty: 'Officer-in-Charge & Deputy Superintendent of Police (DSP)',
        description: 'For offences punishable with imprisonment of 3 to 7 years, the police officer may, with prior permission of a DSP rank officer, conduct a preliminary inquiry within 14 days to ascertain whether a prima facie case exists.',
        advocateTips: 'Advise the client that the scope of preliminary inquiry is strictly limited to ascertaining whether cognizable offence is disclosed; police cannot evaluate defense veracity at this stage.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Entry into First Information Book (FIR Formalization)',
        governingRule: 'Section 173(1) & (2) BNSS',
        actingParty: 'Officer-in-Charge of Police Station',
        description: 'The officer registers the FIR in the prescribed form, assigns an annual Serial Number, records the specific BNS sections, and provides an attested copy to the informant free of cost.',
        advocateTips: 'Inspect the free copy immediately to verify that all named accused, specific weapons, and penal sections are accurately reflected without omissions.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Transmission of FIR to Jurisdictional Magistrate',
        governingRule: 'Section 176(1) BNSS (Old Sec 157 CrPC)',
        actingParty: 'Police Station Investigating Officer',
        description: 'The police must forthwith transmit a copy of the FIR (often termed the "Special Report") to the jurisdictional Judicial Magistrate to prevent ante-dating or fabrication.',
        advocateTips: 'Unexplained delay of several days in sending the FIR to the Magistrate constitutes a serious flaw that defense advocates can exploit during cross-examination.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Commencement of Statutory Investigation',
        governingRule: 'Section 176 to 193 BNSS',
        actingParty: 'Investigating Officer (IO)',
        description: 'IO visits crime scene, prepares Spot Map (Nazri Naksha), records witness statements under Section 180 BNSS, seizes physical evidence under Section 185 BNSS, and issues summons under Section 179 BNSS.',
        advocateTips: 'Track IO proceedings and ensure all forensic evidence is collected with audio-video recording as required under Section 176(3) BNSS for serious crimes.'
      }
    ],
    hearingAndArguments: 'At the stage of FIR registration, there is no judicial hearing before a magistrate unless police refuse registration. In cases of refusal, complainant approaches Magistrate under Section 175(3) BNSS where arguments center on disclosing cognizable ingredients in terms of Lalita Kumari guidelines.',
    possibleOutcomes: [
      'Immediate registration of FIR and assigning of crime number.',
      'Preliminary inquiry directed under Section 173(3) BNSS with report due in 14 days.',
      'Refusal by police on grounds of non-cognizable dispute or civil nature, prompting escalation under Section 173(4) or Section 175(3) BNSS.'
    ],
    appealRevisionRemedy: 'If police arbitrarily refuse to register FIR, the remedy lies in Section 173(4) BNSS (written application to Superintendent of Police), followed by Section 175(3) BNSS before Magistrate, or Writ of Mandamus under Article 226 before High Court.',
    commonPitfalls: [
      'Accepting a NCR (Non-Cognizable Report) receipt instead of a formal FIR when cognizable ingredients are present.',
      'Failing to attend the police station within 3 days to sign an e-FIR, resulting in expiry of electronic submission.',
      'Omitting specific roles of multiple accused, which facilitates discharge or bail for co-accused.'
    ],
    practicalScenario: 'A resident was violently assaulted by four neighbors wielding iron rods, sustaining bone fractures. The local Chowki officer refused to write an FIR, claiming it was a civil boundary quarrel. The victim obtained a government hospital MLC, submitted a written complaint via registered speed post to the DCP under Section 173(4) BNSS, and simultaneously filed a petition under Section 175(3) BNSS before the Chief Judicial Magistrate, who ordered immediate FIR registration and compliance monitoring.',
    caseLaws: [
      {
        title: 'Lalita Kumari v. Government of U.P.',
        citation: '(2014) 2 SCC 1 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Registration of FIR is mandatory under Section 154 CrPC (now Section 173 BNSS) if information discloses commission of a cognizable offence; police have no discretion to avoid FIR registration unless preliminary inquiry is strictly warranted in exceptional categories.'
      },
      {
        title: 'Youth Bar Association of India v. Union of India',
        citation: '(2016) 9 SCC 473',
        court: 'Supreme Court of India',
        holding: 'Copies of FIRs must be uploaded on police portal or official state website within 24 hours of registration (extendable to 48-72 hours in sensitive cases) to safeguard accused rights to liberty and legal representation.'
      }
    ],
    faqs: [
      {
        q: 'Can police refuse to register an FIR on the grounds of lack of territorial jurisdiction?',
        a: 'No. The police must register a "Zero FIR" and immediately transfer the case records to the jurisdictional police station.'
      },
      {
        q: 'What is the preliminary inquiry timeframe under BNSS 2023?',
        a: 'Under Section 173(3) BNSS, for offences punishable with 3 to 7 years, preliminary inquiry must be completed within 14 days with prior permission of a DSP.'
      }
    ],
    tags: ['fir-investigation', 'fir', 'section 173 bnss', 'crpc 154', 'investigation', 'police station', 'lalita kumari']
  },

  {
    id: 'proc-fir-zero-fir-transfer',
    slug: 'zero-fir-registration-jurisdictional-transfer-procedure',
    title: 'Zero FIR Registration, Jurisdictional Transfer & Inter-State Handover',
    category: 'FIR, Zero FIR & Investigation',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 173(1) Proviso & MHA Advisory on Zero FIR',
    courtForum: 'Any Police Station across India (irrespective of crime scene) → Transferee Jurisdictional Court',
    estimatedTimeline: 'Immediate registration without serial number → Transfer within 24 to 48 hours',
    courtFeeLevel: 'Nil (Statutory Right)',
    overview: 'A Zero FIR is an FIR registered by any police station irrespective of territorial jurisdiction when information of a cognizable offence is presented. It receives the number "0" (Zero) instead of an annual serial number. The registering officer must record the information, provide immediate medical assistance or emergency investigation, and subsequently transmit all documents, exhibits, and case files to the competent police station having territorial jurisdiction under Section 197-209 BNSS.',
    legalBasis: 'Provisos to Section 173(1) BNSS, 2023; Ministry of Home Affairs (MHA) Advisory Nos. 15011/35/2013-SC/ST-W and 15011/91/2014; Verma Committee Recommendations; and Delhi High Court ruling in Kirti Vashisht v. State.',
    locusStandi: 'Victim of a cognizable crime (especially crimes against women, trafficking, transit crimes, kidnapping, or cyber fraud) or any informant reporting an incident outside the territorial area of the receiving station.',
    prerequisites: [
      'Disclosure of a cognizable offence occurring outside the territorial jurisdiction of the police station approached.',
      'Urgent need for reporting due to victim trauma, ongoing threat, or distance from crime scene.',
      'Informant must furnish details of the occurrence to enable the station to record the Zero FIR.'
    ],
    statutoryLimitation: 'Must be registered immediately upon presentation. Statutory guidelines require transfer of case diary to the jurisdictional station within 24 to 48 hours.',
    mandatoryDocuments: [
      'Signed statement / complaint of the victim or informant.',
      'Emergency Medico-Legal Examination Report (if registered at nearest hospital police post).',
      'Inventory of seized physical articles or garments (in sexual assault cases).',
      'Transfer Memo / Dispatch Slip signed by Station House Officer (SHO).'
    ],
    draftingGuidance: 'The complaint should state upfront: "Application for registration of Zero FIR under Section 173 BNSS for onward transmission to Jurisdictional Police Station [Name of competent PS]". It must detail the exact address of the place of occurrence, the jurisdictional police station if known, and the reasons for approaching the current station.',
    courtFeesFilingRules: 'No fees. Free copy of the Zero FIR must be handed over to the informant immediately with the Zero FIR number clearly endorsed.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Reporting at Nearest Police Station',
        governingRule: 'Section 173(1) BNSS',
        actingParty: 'Victim / Informant',
        description: 'Informant reports cognizable crime at any police station. The officer cannot turn away the complainant citing territorial jurisdiction.',
        advocateTips: 'If the police refuse, cite the MHA Circulars and Section 199 BNS (punishment for public servant disobeying law).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Registration as Zero FIR (Number "0")',
        governingRule: 'Section 173(1) BNSS Proviso',
        actingParty: 'Duty Officer / SHO',
        description: 'Officer registers the FIR assigning number "0/YYYY", records all details, and issues a sealed copy to the victim.',
        advocateTips: 'Ensure medical examination under Section 184 BNSS (in sexual assault) or emergency seizure is conducted before transfer.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Immediate Emergency Action & Preservation of Evidence',
        governingRule: 'Section 176 BNSS',
        actingParty: 'Registering Police Station',
        description: 'Police render immediate medical aid, record victim statement under Section 183 BNSS before a female magistrate if applicable, and secure CCTV/digital logs.',
        advocateTips: 'Insist that samples requiring cold-chain preservation (DNA, viscera) are collected immediately before transport.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Formal Transmission to Competent Jurisdictional Police Station',
        governingRule: 'Section 173 & 192 BNSS',
        actingParty: 'SHO of Registering Police Station',
        description: 'Entire file, case diary, and physical exhibits are dispatched under official courier/special messenger to the jurisdictional police station.',
        advocateTips: 'Obtain copy of the Dispatch Docket number and receiving acknowledgement from the destination police station.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Re-Numbering as Regular FIR by Transferee Police Station',
        governingRule: 'Section 173(1) BNSS',
        actingParty: 'Jurisdictional Police Station',
        description: 'The jurisdictional police station enters the case into its First Information Book, assigns a regular annual serial number, and commences full investigation.',
        advocateTips: 'Advocate must apply for the new regular FIR number to track magistrate committal and remand proceedings.'
      }
    ],
    hearingAndArguments: 'Zero FIR is an executive police procedure. If police refuse, arguments before the Magistrate under Section 175(3) BNSS or High Court under Article 226 center on statutory breach of MHA directives and binding judicial precedent.',
    possibleOutcomes: [
      'Registration of Zero FIR and seamless transfer to jurisdictional station.',
      'Regular FIR assigned by recipient police station with investigation commenced.',
      'Refusal resulting in departmental inquiry or prosecution of officer under Section 199 BNS.'
    ],
    appealRevisionRemedy: 'Writ of Mandamus before the High Court under Article 226 or complaint to Police Complaints Authority (PCA) if an officer refuses registration of Zero FIR.',
    commonPitfalls: [
      'Complainant being sent back and forth between two police stations arguing over jurisdictional boundaries.',
      'Failure to obtain the re-numbered regular FIR number from the transferee police station.',
      'Loss of chain of custody during transit of forensic samples between stations.'
    ],
    practicalScenario: 'A woman traveling on an interstate train from Mumbai to Delhi was assaulted near Kota, Rajasthan. Upon arriving at New Delhi Railway Station, she approached the Nizamuddin GRP. The officer registered a Zero FIR (No. 0/2024), arranged for immediate medical examination at AIIMS, and transferred the case file to GRP Kota within 24 hours, where it was converted to Regular FIR No. 412/2024.',
    caseLaws: [
      {
        title: 'Kirti Vashisht v. State (NCT of Delhi)',
        citation: '2019 SCC OnLine Del 11713',
        court: 'Delhi High Court',
        holding: 'Police officer cannot refuse to record information regarding a cognizable offence on the ground of territorial lack of jurisdiction; Zero FIR must be registered and transferred to the competent police station.'
      },
      {
        title: 'Asiya Khan v. State of U.P.',
        citation: '(2020) 14 SCC 560',
        court: 'Supreme Court of India',
        holding: 'Reiterated that the concept of Zero FIR ensures victims of heinous crimes receive immediate access to the justice system without being victimized by jurisdictional wrangling.'
      }
    ],
    faqs: [
      {
        q: 'Does a Zero FIR expire if not transferred within 24 hours?',
        a: 'No. The Zero FIR remains valid, but administrative delays in transmission can be challenged before the High Court.'
      },
      {
        q: 'Can the police demand an affidavit before registering a Zero FIR?',
        a: 'No. Section 173 BNSS does not mandate any prior affidavit for registering an FIR or Zero FIR.'
      }
    ],
    tags: ['fir-investigation', 'zero fir', 'inter-state transfer', 'section 173 bnss', 'police jurisdiction', 'crimes against women']
  },

  {
    id: 'proc-fir-refusal-magistrate-175-bnss',
    slug: 'remedies-police-refusal-magistrate-investigation-section-175-bnss',
    title: 'Remedies on Police Refusal: SP Escalation & Section 175(3) BNSS Magistrate Investigation',
    category: 'FIR, Zero FIR & Investigation',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 173(4) & 175(3) (Old CrPC 154(3) & 156(3))',
    courtForum: 'Superintendent of Police / Deputy Commissioner of Police → Court of Judicial Magistrate First Class (JMFC)',
    estimatedTimeline: 'SP Representation: 15 days → Magistrate Application: 30 to 60 days',
    courtFeeLevel: '₹10 - ₹25 Court fee stamp on application + Vakalatnama',
    overview: 'When the Officer-in-Charge of a police station refuses to register an FIR disclosing a cognizable offence, the law provides a two-tiered statutory remedy. First, the aggrieved person must send the substance of the information in writing by registered post to the Superintendent of Police (SP/DCP) under Section 173(4) BNSS. If the SP fails to direct an investigation, the complainant may file an application under Section 175(3) BNSS before the jurisdictional Judicial Magistrate, supported by a mandatory affidavit, praying for a direction to the police to register an FIR and investigate.',
    legalBasis: 'Section 173(4) BNSS (escalation to Superintendent of Police); Section 175(3) BNSS (Magistrate power to direct investigation in cognizable cases); Priyanka Srivastava v. State of UP (mandatory affidavit requirement); and Sakiri Vasu v. State of UP.',
    locusStandi: 'Aggrieved informant or complainant whose cognizable complaint was refused or disregarded by both the local Police Station and the district Superintendent of Police.',
    prerequisites: [
      'Prior written complaint submitted to the local police station and documented proof of refusal or inaction.',
      'Prior written representation sent to the Superintendent of Police under Section 173(4) BNSS with registered post receipts.',
      'Mandatory sworn affidavit filed along with the Section 175(3) application as mandated by the Supreme Court in Priyanka Srivastava.',
      'Disclosure of cognizable penal ingredients; commercial or contractual disputes dressed as crime will be dismissed.'
    ],
    statutoryLimitation: 'Reasonable period following expiry of statutory wait for SP response (customarily 15 days). Undue delay should be explained in the supporting affidavit.',
    mandatoryDocuments: [
      'Application under Section 175(3) BNSS drafted in the form of a legal petition.',
      'Mandatory Sworn Affidavit of the applicant verifying all facts and compliance with Section 173(4) BNSS.',
      'Copy of original written complaint submitted to Police Station with receiving diary number.',
      'Copy of written representation sent to SP/DCP under Section 173(4) BNSS with Postal Speed Post Receipt and Tracking Report.',
      'Documentary evidence substantiating cognizable offence (bank statements, WhatsApp chats, agreements, medical certificates).'
    ],
    draftingGuidance: 'Strict compliance with Priyanka Srivastava guidelines is mandatory: (1) Specifically plead the date of visiting the police station; (2) Plead the dispatch date and speed post tracking number of the SP representation; (3) Annex a separate sworn affidavit affirming that the facts are true and the application is not filed to harass business rivals; (4) Frame prayers seeking a direction under Section 175(3) BNSS to the SHO to register an FIR and submit compliance within 7 days.',
    courtFeesFilingRules: 'Affix court fee stamps of ₹10–₹25 (State specific) + Advocate Welfare Fund stamp of ₹25–₹50 on Vakalatnama.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Service of Representation to Superintendent of Police',
        governingRule: 'Section 173(4) BNSS',
        actingParty: 'Complainant / Advocate',
        description: 'Send complete complaint detailing police refusal by Registered Post / Speed Post to the district SP or Commissioner of Police. Retain postal receipts and online delivery confirmations.',
        advocateTips: 'Wait for 15 days after confirmed delivery before drafting the Section 175(3) application.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting & Filing Section 175(3) BNSS Application with Sworn Affidavit',
        governingRule: 'Section 175(3) BNSS & Priyanka Srivastava Precedent',
        actingParty: 'Advocate for Complainant',
        description: 'File application before the jurisdictional Chief Judicial Magistrate / JMFC along with the mandatory affidavit verifying prior compliance of Section 173(1) and 173(4) BNSS.',
        advocateTips: 'Applications filed without the sworn affidavit will be rejected at the threshold.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Magistrate Call for Action Taken Report (ATR)',
        governingRule: 'Judicial Practice under Section 175(3) BNSS',
        actingParty: 'Judicial Magistrate First Class',
        description: 'The Magistrate issues notice to the concerned Police Station calling for an Action Taken Report (ATR) within 15 to 30 days detailing whether any inquiry was conducted.',
        advocateTips: 'Obtain a copy of the police ATR on the date of listing to prepare rejoinder arguments disproving any false closure.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Judicial Hearing on Order of Investigation vs Private Complaint',
        governingRule: 'Sections 175(3) & 223 BNSS',
        actingParty: 'Magistrate & Complainant Advocate',
        description: 'Magistrate hears arguments. If the case requires state machinery for recovery, weapon seizure, or custodial interrogation, the Magistrate orders FIR registration under Section 175(3). If facts are within complainant knowledge, court may treat it as a private complaint under Section 223 BNSS.',
        advocateTips: 'Argue why police investigation is indispensable (e.g., need to seize bank server logs, recover forged stamp papers, or arrest absconding conspirators).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Order Directing Registration of FIR & Compliance Monitoring',
        governingRule: 'Section 175(3) BNSS & Sakiri Vasu Doctrine',
        actingParty: 'Judicial Magistrate & SHO',
        description: 'Magistrate directs SHO to register FIR forthwith and report compliance within 48 to 72 hours. The Magistrate retains supervisory jurisdiction to monitor fair investigation.',
        advocateTips: 'If the police fail to register FIR despite magistrate order, move an application for contempt or initiation of inquiry against the SHO.'
      }
    ],
    hearingAndArguments: 'Complainant advocate must demonstrate: (1) All statutory preconditions under Section 173(1) and 173(4) were satisfied; (2) Allegations disclose clear cognizable ingredients; (3) State police machinery is essential to collect documentary or forensic evidence; (4) The matter is not a purely civil debt or commercial dispute.',
    possibleOutcomes: [
      'Magistrate directs SHO to register an FIR and submit compliance report.',
      'Magistrate declines police investigation and converts application into private complaint under Section 223 BNSS.',
      'Dismissal of application for failure to disclose cognizable offence or lack of compliance with Priyanka Srivastava affidavit.'
    ],
    appealRevisionRemedy: 'Order under Section 175(3) BNSS refusing to direct investigation is an interlocutory/quasi-final order; challengeable via Criminal Revision before Sessions Court under Section 438 BNSS or Quashing/Inherent petition before High Court under Section 528 BNSS.',
    commonPitfalls: [
      'Filing directly before the Magistrate without sending speed post notice to the SP under Section 173(4) BNSS.',
      'Omitting the mandatory affidavit swearing that the allegations are true and not filed for collateral purposes.',
      'Concealing that an earlier complaint on the same facts was compromised or closed.'
    ],
    practicalScenario: 'A real estate investor paid ₹75 Lakhs for commercial land, discovering later that the builder forged the revenue allotment letters. The local police refused to file an FIR, claiming it was an ordinary breach of agreement. The investor sent a detailed complaint with registry records to the Police Commissioner via speed post. After 20 days of inaction, counsel filed an application under Section 175(3) BNSS before the JMFC with a sworn affidavit. The Magistrate held that forgery of government documents requires police investigation, ordering the SHO to register an FIR within 48 hours.',
    caseLaws: [
      {
        title: 'Priyanka Srivastava v. State of U.P.',
        citation: '(2015) 6 SCC 287',
        court: 'Supreme Court of India',
        holding: 'Applications under Section 156(3) CrPC (now Section 175(3) BNSS) must be supported by a sworn affidavit by the applicant; this prevents unscrupulous litigants from misusing the criminal justice system to settle civil scores.'
      },
      {
        title: 'Sakiri Vasu v. State of U.P.',
        citation: '(2008) 2 SCC 409',
        court: 'Supreme Court of India',
        holding: 'Section 156(3) CrPC confers wide ancillary and implied powers on the Magistrate not only to order registration of FIR but also to monitor the investigation to ensure it is conducted properly and impartially.'
      }
    ],
    faqs: [
      {
        q: 'Is the Magistrate bound to order an FIR whenever cognizable offence is disclosed in Section 175(3) BNSS?',
        a: 'No. The Magistrate exercises judicial discretion and may treat the application as a private complaint under Section 223 BNSS if evidence is already in complainant possession.'
      },
      {
        q: 'Can the proposed accused appear and argue at the Section 175(3) BNSS hearing stage?',
        a: 'No. A prospective accused has no locus standi to be heard at the pre-cognizance stage of Section 175(3) BNSS (Chandra Deo Singh v. Prokash Chandra Bose).'
      }
    ],
    tags: ['fir-investigation', 'section 175(3) bnss', 'crpc 156(3)', 'sp representation', 'priyanka srivastava', 'police refusal']
  },

  {
    id: 'proc-fir-closure-protest-petition',
    slug: 'police-closure-report-protest-petition-section-193-bnss',
    title: 'Police Final Report / Closure Report & Complainant Protest Petition under Section 193 BNSS',
    category: 'FIR, Zero FIR & Investigation',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 193 (Old CrPC Section 173(2)) & Bhagwant Singh Precedent',
    courtForum: 'Court of Judicial Magistrate First Class having Jurisdiction over the Police Station',
    estimatedTimeline: 'Notice of Closure Report: 15–30 days → Protest Petition Disposal: 2 to 4 months',
    courtFeeLevel: '₹10 - ₹50 Court fee stamp on protest petition',
    overview: 'Upon conclusion of an investigation where the police find no sufficient evidence or reasonable ground of suspicion against the accused, the Investigating Officer submits a Final Report (Closure Report / Khatma / FR Unoccurred) under Section 193 BNSS. Under the binding constitutional doctrine in Bhagwant Singh v. Commissioner of Police, the Magistrate cannot accept a closure report without issuing prior notice to the first informant. The complainant has a statutory right to file a "Protest Petition" challenging the police investigation, pointing out ignored evidence, and praying for rejection of closure.',
    legalBasis: 'Section 193 BNSS (Report of police officer on completion of investigation); read with Bhagwant Singh v. Commissioner of Police (1985) 2 SCC 537; and Gangadhar Janardan Mhatre v. State of Maharashtra (2004) 7 SCC 768.',
    locusStandi: 'First Informant / Victim of the crime who lodged the FIR, or legal heirs of a deceased victim.',
    prerequisites: [
      'Submission of a Final Closure Report (FR) by the police under Section 193 BNSS recommending closure of investigation.',
      'Receipt of formal judicial notice from the Magistrate informing the complainant of the closure report.',
      'Filing of a verified Protest Petition supported by an affidavit detailing flaws, collusion, or omitted evidence.'
    ],
    statutoryLimitation: 'Within the time granted in the court notice (typically 30 days from service of notice). Application for extension can be made on sufficient cause.',
    mandatoryDocuments: [
      'Copy of Judicial Notice issued by the Magistrate to the Complainant.',
      'Certified copy of the Police Final Report (Closure Report) and Case Diary index under Section 193 BNSS.',
      'Protest Petition formatted as a formal judicial challenge with specific points of objection.',
      'Supporting Affidavit of the Complainant verifying facts and pointing out ignored evidence.',
      'Documentary evidence omitted by the IO (call records, CCTV clips, bank receipts, witness statements).'
    ],
    draftingGuidance: 'The Protest Petition must methodically deconstruct the closure report: (a) Detail the specific witness statements recorded under Section 180 BNSS that the IO disregarded; (b) Highlight physical or documentary evidence provided to the IO that was excluded from the final report; (c) Establish deliberate collusion or procedural flaws; and (d) Conclude with alternative prayers: (i) Reject the closure report and direct further investigation under Section 193(9) BNSS, or (ii) Take cognizance under Section 210 BNSS on the protest petition treated as a complaint.',
    courtFeesFilingRules: 'Affix nominal court fee stamps of ₹10–₹50 on the protest petition along with advocate Vakalatnama.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Police Submission of Closure Report & Issue of Notice',
        governingRule: 'Section 193 BNSS & Bhagwant Singh Ruling',
        actingParty: 'Investigating Officer & Judicial Magistrate',
        description: 'Police file Final Report stating "Mistake of Fact", "Civil Nature", or "Untraced". The Magistrate issues mandatory notice to the informant to appear and show cause.',
        advocateTips: 'If the Magistrate accepts a closure report without issuing notice to the informant, the order is liable to be quashed in revision for denial of natural justice.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Inspection of Case Diary & Copy Procurement',
        governingRule: 'Section 193 & High Court Criminal Rules',
        actingParty: 'Advocate for Informant',
        description: 'Advocate inspects the court file, obtains certified copies of the Final Report, IO summary, and statements of witnesses to pinpoint deliberate investigative lapses.',
        advocateTips: 'Check whether forensic or ballistic reports were received before the IO concluded that no case was made out.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Drafting & Lodging the Protest Petition',
        governingRule: 'Judicial Practice under Section 193 BNSS',
        actingParty: 'Complainant & Advocate',
        description: 'File the Protest Petition before the Magistrate detailing each investigative defect, annexing proof of collusion, and requesting further investigation or cognizance.',
        advocateTips: 'Explicitly pray in the alternative that if further investigation is not ordered, the Protest Petition be treated as a private complaint under Section 223 BNSS.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Oral Arguments on Protest Petition',
        governingRule: 'Section 193 & 210 BNSS',
        actingParty: 'Magistrate & Informant Counsel',
        description: 'Counsel argues that the evidence collected in the Case Diary prima facie establishes guilt, or that crucial evidence was deliberately suppressed by the IO.',
        advocateTips: 'Rely on Vishnu Kumar Tiwari v. State of UP to outline the three distinct judicial paths open to the Magistrate.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Judicial Determination by Magistrate (Three Options)',
        governingRule: 'Gangadhar Janardan Mhatre Doctrine',
        actingParty: 'Judicial Magistrate',
        description: 'Magistrate chooses one of three legal options: (1) Accept closure report; (2) Reject closure and direct further investigation under Section 193(9) BNSS; (3) Disagree with police, take direct cognizance under Section 210 BNSS, or treat protest petition as a complaint under Section 223 BNSS.',
        advocateTips: 'If the court orders further investigation, ensure it is assigned to a superior officer or independent team.'
      }
    ],
    hearingAndArguments: 'Complainant counsel argues that the police report is perverse, biased, or based on incomplete investigation. Counsel demonstrates that material witnesses were never examined, documentary evidence was ignored, and the ingredients of the offence are fully met.',
    possibleOutcomes: [
      'Magistrate rejects closure report and orders further investigation under Section 193(9) BNSS.',
      'Magistrate takes cognizance directly under Section 210(1)(b) BNSS on the basis of materials in the Case Diary.',
      'Magistrate treats the protest petition as a complaint and directs complainant examination under Section 223 BNSS.',
      'Closure report accepted; complainant relegated to revision before Sessions Court.'
    ],
    appealRevisionRemedy: 'An order accepting a closure report over a protest petition is a final order; challengeable via Criminal Revision before the Sessions Court under Section 438 BNSS or High Court under Section 442 BNSS.',
    commonPitfalls: [
      'Failing to appear on the court notice date, resulting in ex-parte acceptance of the closure report.',
      'Filing a general emotional protest petition without pointing out specific legal and evidential flaws in the case diary.',
      'Failing to pray in the alternative to treat the protest petition as a private complaint.'
    ],
    practicalScenario: 'In a cheating and criminal breach of trust case involving ₹1.2 Crores, the local IO filed a closure report stating "civil dispute regarding partnership profits". The complainant received magistrate notice, inspected the case diary, and filed a Protest Petition proving that forged board resolution letters were never sent to the State Forensic Science Laboratory (SFSL). The Chief Judicial Magistrate accepted the protest petition, rejected the closure report, and directed the Commissioner of Police to assign further investigation to the Economic Offences Wing (EOW).',
    caseLaws: [
      {
        title: 'Bhagwant Singh v. Commissioner of Police',
        citation: '(1985) 2 SCC 537 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'When the police submit a report under Section 173(2) indicating no offence appears to have been committed, the Magistrate must give notice to the informant and provide an opportunity to be heard before deciding whether to accept the report.'
      },
      {
        title: 'Vishnu Kumar Tiwari v. State of U.P.',
        citation: '(2019) 8 SCC 27',
        court: 'Supreme Court of India',
        holding: 'Reiterated the four options available to the Magistrate upon receiving a closure report: (1) Accept report; (2) Order further investigation; (3) Disagree and issue process; (4) Treat protest petition as private complaint.'
      }
    ],
    faqs: [
      {
        q: 'Can the Magistrate take cognizance of an offence despite the police recommending closure?',
        a: 'Yes. The Magistrate is not bound by the police conclusion. If the materials in the case diary disclose an offence, the Magistrate can take direct cognizance under Section 210(1)(b) BNSS.'
      },
      {
        q: 'Can the accused participate in the hearing on the protest petition?',
        a: 'No. The accused has no right of audience before process/summons is issued under Section 227 BNSS.'
      }
    ],
    tags: ['fir-investigation', 'closure report', 'protest petition', 'section 193 bnss', 'bhagwant singh', 'final report']
  }
];
