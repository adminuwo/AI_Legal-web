// ─── CRIMINAL PROCEDURE & INVESTIGATION (BNSS / CrPC) ──────────────────────
// Authoritative definitions, BNSS vs CrPC comparative provisions, precedents & procedures

export const CRIMINAL_PROCEDURE_TERMS = [
  {
    id: 'dict-cognizable-vs-non-cognizable',
    term: 'Cognizable vs Non-Cognizable Offence (BNSS Sec 2(1)(g))',
    category: 'Procedural Term',
    subCategory: 'Police Powers & FIR Classification',
    jurisdiction: 'India (Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC)',
    language: 'English (Indian Procedural Law)',
    pronunciation: 'kog-nih-zuh-bul vur-sus non-kog-nih-zuh-bul',
    literalTranslation: 'Capable of being judicially noticed and investigated without warrant.',
    conciseDefinition: 'The fundamental categorization of criminal offences in Indian procedural law: in a Cognizable Offence, a police officer has statutory authority to arrest without warrant and commence investigation immediately upon an FIR; in a Non-Cognizable Offence, police cannot arrest without a judicial warrant nor investigate without magistrate permission.',
    detailedMeaning: 'Under Section 2(1)(g) of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 2(c) CrPC), a "cognizable offence" is an offence for which a police officer may arrest without a warrant in accordance with the First Schedule. Sections 173 to 175 BNSS govern cognizable cases, making it mandatory for the station house officer to register an FIR (Lalita Kumari mandate). Conversely, under Section 2(1)(o) BNSS (formerly Section 2(l) CrPC), in a "non-cognizable offence", the police enter the substance in the Daily Diary (NCR) under Section 174 BNSS and direct the informant to the Magistrate; police possess no power to investigate without an order under Section 174(2) BNSS.',
    hindiExplanation: 'संज्ञेय बनाम असंज्ञेय अपराध (Cognizable vs Non-Cognizable Offence - BNSS धारा 2(1)(g)): भारतीय आपराधिक प्रक्रिया में यह सबसे बुनियादी अंतर है। "संज्ञेय अपराध" (गंभीर अपराध जैसे हत्या, बलात्कार, डकैती) में पुलिस को बिना मजिस्ट्रेट के वारंट के आरोपी को तुरंत गिरफ्तार करने और सीधे FIR दर्ज करके जांच शुरू करने का पूरा अधिकार होता है। इसके विपरीत, "असंज्ञेय अपराध" (साधारण अपराध जैसे मामूली मारपीट, मानहानि) में पुलिस न तो बिना वारंट के गिरफ्तार कर सकती है और न ही बिना मजिस्ट्रेट की पूर्व अनुमति के जांच (Investigation) शुरू कर सकती है; ऐसे मामलों में केवल NCR दर्ज की जाती है।',
    etymologyAndHistory: 'Introduced in early colonial procedure codes (1861 and 1898) to regulate police interference in private quarrels. Reinforced in BNSS 2023 with mandatory preliminary inquiry mechanisms.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 2(1)(g) & (o), Section 173 (FIR), Section 174 (Non-cognizable information), Section 175 (Investigation powers); CrPC Sections 2(c), 2(l), 154, 155, 156.',
    essentialElements: [
      'First Schedule Classification: The First Schedule of BNSS classifies every BNS offence as cognizable or non-cognizable.',
      'Arrest Without Warrant: Cognizable allows warrantless arrest subject to Section 35 BNSS safeguards (Arnesh Kumar guidelines).',
      'Mandatory FIR Registration: Mandatory under Section 173 BNSS for cognizable disclosures.',
      'Magisterial Order Requirement: Under Section 174(2) BNSS, investigating a non-cognizable case without magistrate order makes the report illegal.'
    ],
    practicalScenarios: [
      {
        title: 'Police Arresting in a Defamation Dispute Without Warrant',
        facts: 'Following a heated exchange, a complainant accuses a neighbor of simple criminal defamation (a non-cognizable offence). The police officer immediately arrests the neighbor and locks them up.',
        issue: 'Is the arrest lawful?',
        rule: 'Under Section 2(1)(o) and Section 174 BNSS, police cannot arrest without a warrant in non-cognizable offences.',
        application: 'The arrest is illegal, violating Article 21; the arrestee is entitled to immediate release and compensation.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Lalita Kumari v. Govt. of U.P.',
        citation: '(2014) 2 SCC 1',
        court: 'Supreme Court of India (5-Judge Constitution Bench)',
        ratioDecidendi: 'Registration of an FIR is mandatory under Section 154 CrPC (now Section 173 BNSS) if the information discloses the commission of a cognizable offence, and no preliminary inquiry is permissible in such cases except in limited categories (matrimonial, commercial, medical negligence, corruption).',
        relevance: 'The supreme ruling mandating immediate registration of FIRs for cognizable offences.'
      },
      {
        caseName: 'Arnesh Kumar v. State of Bihar',
        citation: '(2014) 8 SCC 273',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Police officers cannot automatically arrest an accused in cognizable offences punishable with imprisonment up to 7 years without satisfying Section 41 CrPC (now Section 35 BNSS) checklist and serving notice of appearance.',
        relevance: 'Protected citizens against indiscriminate arrests in cognizable offences.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: If a case involves three non-cognizable offences and one cognizable offence, the case as a whole is deemed cognizable under Section 174(4) BNSS and police can investigate without warrant.',
    litigationApplication: 'Argued in quashing petitions under Section 528 BNSS (Section 482 CrPC) where police investigated non-cognizable offences without magistrate sanction, rendering proceedings void.',
    relatedTerms: [
      { term: 'Zero FIR', id: 'dict-zero-fir-procedure', relationship: 'Mandatory registration of cognizable offences across jurisdictions.' },
      { term: 'Police Custody vs Judicial Custody', id: 'dict-police-custody-vs-judicial', relationship: 'Custodial stages following cognizable arrest.' }
    ],
    faqs: [
      {
        q: 'What should a citizen do if police refuse to register an FIR for a cognizable offence?',
        a: 'The citizen can send the complaint in writing by post to the Superintendent of Police under Section 173(4) BNSS, and if still unaddressed, file an application before the Magistrate under Section 175(3) BNSS (formerly Section 156(3) CrPC).'
      }
    ],
    examNotes: 'High-frequency question in Criminal Procedure. Explain Section 173 BNSS (FIR), Section 174 BNSS (NCR), and the hybrid rule in Section 174(4) BNSS. Cite Lalita Kumari (2014) and Arnesh Kumar (2014).',
    sourceProvenance: {
      primarySource: 'Bharatiya Nagarik Suraksha Sanhita, 2023, Section 2(1)(g) & (o); Lalita Kumari (2014) 2 SCC 1',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Procedural Classification'
    },
    tags: ['criminal-procedure-bnss', 'cognizable', 'non-cognizable', 'bnss-section-173', 'fir', 'lalita-kumari', 'police-powers']
  },

  {
    id: 'dict-police-custody-vs-judicial',
    term: 'Police Custody vs Judicial Custody (BNSS Sec 187)',
    category: 'Procedural Term',
    subCategory: 'Custodial Investigation & Remand',
    jurisdiction: 'India (Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC)',
    language: 'English (Indian Procedural Law)',
    pronunciation: 'poh-lees kus-tuh-dee vur-sus joo-dish-ul kus-tuh-dee',
    literalTranslation: 'Physical custody of investigating agency vs custody of the court in jail.',
    conciseDefinition: 'The vital distinction between pre-trial custodial states: Police Custody places the accused in the physical lockup of the investigating officers for interrogation and discovery; Judicial Custody lodges the accused in a state prison under the supervisory authority of the Magistrate.',
    detailedMeaning: 'Under Section 187 of the BNSS 2023 (formerly Section 167 CrPC), when an investigation cannot be completed within 24 hours, the accused must be forwarded to the nearest Magistrate. The Magistrate may authorize detention in such custody as thought fit for a term not exceeding 15 days in the whole. Under the BNSS 2023, a significant statutory amendment allows this 15-day police custody to be taken in whole or in parts at any time during the initial 40 or 60 days of the total detention period, departing from the old CrPC rule in CBI v. Anupam Kulkarni which strictly limited police custody to the first 15 days from arrest.',
    hindiExplanation: 'पुलिस कस्टडी बनाम न्यायिक हिरासत (Police Custody vs Judicial Custody - BNSS धारा 187): गिरफ्तारी के बाद आरोपी की हिरासत के दो मुख्य प्रकार हैं। "पुलिस कस्टडी" (Police Remand) में आरोपी पुलिस थाने के लॉकअप में रहता है जहाँ जांच अधिकारी उससे पूछताछ, हथियारों/सबूतों की बरामदगी और निशानदेही करवाते हैं। जबकि "न्यायिक हिरासत" (Judicial Custody / Jail) में आरोपी पुलिस के नियंत्रण से बाहर निकलकर जेल अधीक्षक (Jail Superintendent) और मजिस्ट्रेट की सीधी निगरानी में केंद्रीय/जिला जेल में रहता है। जेल में पुलिस मजिस्ट्रेट की अनुमति के बिना पूछताछ नहीं कर सकती।',
    etymologyAndHistory: 'Emerged from Section 167 of the 1898 and 1973 CrPC. Re-structured substantially under Section 187 of the Bharatiya Nagarik Suraksha Sanhita, 2023.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 187; Code of Criminal Procedure, 1973 — Section 167; Constitution of India — Article 22(2).',
    essentialElements: [
      '24-Hour Production Mandate: Accused must be produced before the Magistrate within 24 hours excluding travel time (Article 22(2) & Sec 58 BNSS).',
      'Maximum Police Custody: Total period of police custody cannot exceed 15 days in aggregate.',
      'BNSS 2023 Split Custody Rule: Police custody can be intermittent across the first 40 or 60 days of detention.',
      'Medical Examination: Mandatory medical examination under Section 53 BNSS before and after police custody remand.',
      'Judicial Supervision: The Magistrate must record reasons for authorizing police custody remand.'
    ],
    practicalScenarios: [
      {
        title: 'Seeking Intermittent Police Custody after 25 Days',
        facts: 'An accused arrested in a cyber-fraud case is sent to judicial custody on day 3. On day 22, police uncover hidden crypto wallets and apply for 5 days of police custody.',
        issue: 'Can police custody be granted after the first 15 days of arrest under Section 187 BNSS?',
        rule: 'Under Section 187(2) BNSS, police custody can be granted in parts at any time during the first 40 or 60 days of detention.',
        application: 'The Magistrate grants 5 days police custody, as the 15-day aggregate cap was not exhausted.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'CBI v. Anupam J. Kulkarni',
        citation: '(1992) 3 SCC 141',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Under Section 167(2) CrPC, police custody cannot be granted after the lapse of the initial 15 days from the date of arrest; any subsequent remand could only be to judicial custody.',
        relevance: 'The historic rule under CrPC 1973, which has now been modified by Parliament under Section 187 of the BNSS 2023.'
      },
      {
        caseName: 'V. Senthil Balaji v. State',
        citation: '(2024) 3 SCC 51',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Referred the Anupam Kulkarni doctrine to a larger bench, holding that days spent in hospital cannot be used to defeat the investigating agency statutory right to 15 days of police custody.',
        relevance: 'Paved the way for the legislative amendment in Section 187 BNSS.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: Police cannot use third-degree physical violence during police custody; interrogation must strictly comply with D.K. Basu guidelines with CCTV surveillance in every police station.',
    litigationApplication: 'Advocates fiercely oppose police custody remand applications, arguing lack of necessity, availability of documents, or medical vulnerability, pressing for immediate judicial custody.',
    relatedTerms: [
      { term: 'Default Bail', id: 'dict-default-bail-statutory', relationship: 'Arises upon expiry of total detention period (60/90 days).' },
      { term: 'Anticipatory Bail', id: 'dict-anticipatory-bail-concept', relationship: 'Pre-arrest remedy to avoid police custody.' }
    ],
    faqs: [
      {
        q: 'Can a lawyer be present during police custody interrogation?',
        a: 'Under Section 38 BNSS (formerly Section 41D CrPC), an arrested person is entitled to meet and consult an advocate of their choice during interrogation, though not throughout the entire interrogation.'
      }
    ],
    examNotes: 'Vital for Judiciary Prelims and Mains. Highlight the major legislative reform in Section 187 BNSS splitting the 15-day police custody over 40/60 days, contrasting with CBI v. Anupam Kulkarni (1992).',
    sourceProvenance: {
      primarySource: 'Bharatiya Nagarik Suraksha Sanhita, 2023, Section 187; V. Senthil Balaji v. State (2024)',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Remand Jurisprudence'
    },
    tags: ['criminal-procedure-bnss', 'police-custody', 'judicial-custody', 'remand', 'bnss-section-187', 'anupam-kulkarni']
  },

  {
    id: 'dict-default-bail-statutory',
    term: 'Default / Statutory Bail (BNSS Section 187(3))',
    category: 'Procedural Term',
    subCategory: 'Bail Remedies & Fundamental Rights',
    jurisdiction: 'India (Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC)',
    language: 'English (Indian Criminal Procedure)',
    pronunciation: 'dee-folt bayl / stach-oo-toree bayl',
    literalTranslation: 'Indefeasible statutory right to release upon prosecution failure to file chargesheet.',
    conciseDefinition: 'An absolute, indefeasible constitutional and statutory right to release on bail that accrues to an accused in custody upon the failure of the investigating agency to file a chargesheet or investigation report within the mandatory statutory period of 60 or 90 days.',
    detailedMeaning: 'Under Section 187(3) of the BNSS 2023 (formerly Section 167(2) CrPC), the maximum total period of detention during investigation is: (1) 90 days where the investigation relates to an offence punishable with death, imprisonment for life, or imprisonment for not less than 10 years; and (2) 60 days where the investigation relates to any other offence. If the police fail to file the chargesheet before the expiry of the 60th or 90th day, the accused acquires an "indefeasible right" to default bail under Article 21, provided the accused is prepared to furnish bail bonds. The subsequent filing of a chargesheet after the right has been availed does not defeat default bail.',
    hindiExplanation: 'डिफ़ॉल्ट बेल या वैधानिक जमानत (Default / Statutory Bail - BNSS धारा 187(3)): यह अभियुक्त का एक "अखंडनीय और पूर्ण अधिकार" (Indefeasible Right) है। यदि पुलिस गिरफ्तारी के बाद निर्धारित समय सीमा—10 वर्ष या अधिक की सजा वाले अपराधों में 90 दिन और अन्य सभी अपराधों में 60 दिन—के भीतर अदालत में चार्जशीट (Challan) दाखिल करने में विफल रहती है, तो 61वें या 91वें दिन अभियुक्त तुरंत डिफ़ॉल्ट बेल पर रिहा होने का हकदार बन जाता है। अदालत मामले की गंभीरता को देखे बिना उसे जमानत देने के लिए बाध्य होती है, क्योंकि यह अनुच्छेद 21 के तहत व्यक्तिगत स्वतंत्रता का हिस्सा है।',
    etymologyAndHistory: 'Introduced by the Law Commission in the 1973 Code of Criminal Procedure to curb prolonged pre-trial incarceration without trial. Elevated to a fundamental right by the Supreme Court in Bikramjit Singh (2020) and M. Ravindran (2020).',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 187(3); Code of Criminal Procedure, 1973 — Section 167(2); Constitution of India — Article 21.',
    essentialElements: [
      'Custody Threshold: The accused has spent 60 or 90 days in custody pursuant to remand orders.',
      'Failure of Agency: Investigating agency failed to file the chargesheet/police report under Section 193 BNSS within time.',
      'Readiness to Furnish Bail: The accused must file an application expressing willingness and readiness to furnish bail.',
      'Indefeasible Right: Once availed, the right cannot be defeated by the police filing the chargesheet later that day or week.'
    ],
    practicalScenarios: [
      {
        title: 'Chargesheet Filed on Day 92 at 2:00 PM',
        facts: 'In an offence punishable with 10 years imprisonment, the 90-day period expires on 10 October. On 11 October at 10:30 AM, the accused files an application for default bail. At 2:00 PM, police rush and file the chargesheet.',
        issue: 'Is the accused entitled to default bail?',
        rule: 'The right to default bail crystalizes and is "availed" the moment the application is filed before the chargesheet arrives.',
        application: 'The court must grant default bail; subsequent filing of the chargesheet cannot extinguish the accrued right (Uday Mohanlal Acharya).'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'M. Ravindran v. Directorate of Revenue Intelligence',
        citation: '(2021) 2 SCC 485',
        court: 'Supreme Court of India (3-Judge Bench)',
        ratioDecidendi: 'Default bail under Section 167(2) is not merely a statutory right, but is part of the procedure established by law under Article 21. Once the accused files an application, the right is perfected and cannot be frustrated by the prosecution filing chargesheet during the pendency of the bail application.',
        relevance: 'Elevated default bail to an integral fundamental right under Article 21.'
      },
      {
        caseName: 'Bikramjit Singh v. State of Punjab',
        citation: '(2020) 10 SCC 616',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Held that default bail is an indefeasible fundamental right. In special statutes like UAPA, extension of time beyond 90 days must strictly follow statutory reports and hearing of the accused.',
        relevance: 'Applied default bail mandates to special anti-terror enactments.'
      }
    ],
    exceptionsAndMisconceptions: 'Under special statutes (e.g. UAPA Section 43D(2) or NDPS Act Section 36A(4)), the 90-day period can be extended up to 180 days by the Special Court upon a formal report by the Public Prosecutor indicating progress of investigation.',
    litigationApplication: 'Calculated down to the hour by defence lawyers. If day 60/90 arrives without a chargesheet, an immediate default bail application is moved at 10:00 AM before the remand court.',
    relatedTerms: [
      { term: 'Police Custody vs Judicial Custody', id: 'dict-police-custody-vs-judicial', relationship: 'The custody periods that trigger default bail.' },
      { term: 'Substantive Due Process', id: 'dict-substantive-due-process', relationship: 'Constitutional basis of default bail.' }
    ],
    faqs: [
      {
        q: 'How is the 60 or 90 day period calculated?',
        a: 'The day the accused is remanded by the Magistrate is excluded, and the chargesheet must be filed on or before the 60th or 90th day (State of M.P. v. Rustam).'
      }
    ],
    examNotes: 'Extremely popular exam topic. Detail the 60 vs 90 day division. Explain the meaning of "availed of" from Uday Mohanlal Acharya (2001) to M. Ravindran (2021). Link with Article 21.',
    sourceProvenance: {
      primarySource: 'Bharatiya Nagarik Suraksha Sanhita, 2023, Section 187(3); M. Ravindran (2021) 2 SCC 485',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Statutory Bail Remedy'
    },
    tags: ['criminal-procedure-bnss', 'default-bail', 'statutory-bail', 'bnss-section-187-3', 'article-21', 'm-ravindran', 'indefeasible-right']
  },

  {
    id: 'dict-zero-fir-procedure',
    term: 'Zero FIR (Statutory Codification under BNSS Sec 173)',
    category: 'Procedural Term',
    subCategory: 'First Information Report & Police Duties',
    jurisdiction: 'India (Bharatiya Nagarik Suraksha Sanhita, 2023 / Ministry of Home Affairs)',
    language: 'English (Indian Procedural Jurisprudence)',
    pronunciation: 'zee-roh ef-eye-ar',
    literalTranslation: 'First Information Report registered with number 0 irrespective of territorial jurisdiction.',
    conciseDefinition: 'A First Information Report registered by any police station in India for a cognizable offence irrespective of whether the territorial jurisdiction of the crime falls within that police station limits, which is subsequently transferred to the competent jurisdictional station for investigation.',
    detailedMeaning: 'Originating as an administrative reform recommended by the Justice J.S. Verma Committee (2013) post-Nirbhaya, Zero FIR was formally codified into statutory law under Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita, 2023. Under Section 173(1), every police station is legally mandated to register information regarding a cognizable offence "irrespective of the area where the offence was committed". The station assigns the report the number "0" (Zero), takes urgent investigative steps (such as sending the victim for medical examination or seizing fleeting evidence), and promptly transfers the case diary to the police station possessing territorial jurisdiction.',
    hindiExplanation: 'जीरो एफआईआर (Zero FIR - BNSS धारा 173): यह एक क्रांतिकारी कानूनी प्रावधान है जिसके तहत यदि कोई संज्ञेय अपराध (Cognizable Offence) घटित होता है, तो पीड़िता या शिकायतकर्ता भारत के किसी भी पुलिस थाने में जाकर तुरंत FIR दर्ज करवा सकता है, भले ही वह अपराध उस थाने के अधिकार क्षेत्र (Jurisdiction) में न हुआ हो। पुलिस "यह हमारे इलाके का मामला नहीं है" कहकर FIR दर्ज करने से इनकार नहीं कर सकती। थाना उस FIR को नंबर "0" देकर दर्ज करता है, तुरंत मेडिकल या प्राथमिक कार्रवाई करता है, और फिर उसे संबंधित थाने को ट्रांसफर कर देता है। BNS 2023 में इसे पहली बार वैधानिक दर्जा दिया गया है।',
    etymologyAndHistory: 'Recommended by the Justice Verma Committee (2013) and mandated through MHA Circulars (2014, 2015). Statutorily codified into parliamentary law for the first time in Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita, 2023.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 173(1) & (2); Ministry of Home Affairs Advisory No. 15011/35/2013-SC/ST-W; BNS Section 199 (Public servant disobeying law).',
    essentialElements: [
      'Universal Accessibility: Can be lodged at ANY police station across India regardless of crime location.',
      'Zero Tagging: Numbered as FIR No. 00/Year to reflect lack of territorial jurisdiction.',
      'Immediate First Steps: Obligation to conduct urgent medical examination, record statements, and preserve digital evidence.',
      'Mandatory Transfer: The case files must be transmitted electronically and physically to the jurisdictional police station.'
    ],
    practicalScenarios: [
      {
        title: 'Highway Robbery and Assault on Travelling Family',
        facts: 'A family travelling by car from Delhi to Jaipur is assaulted and robbed on the highway in Rajasthan. Traumatized, they drive directly to their home police station in Delhi.',
        issue: 'Can the Delhi police refuse to register an FIR because the highway crime occurred in Rajasthan?',
        rule: 'Under Section 173(1) BNSS, police cannot refuse registration on territorial grounds and must register a Zero FIR.',
        application: 'Delhi police register Zero FIR, send the injured victim for medical checkup, and transfer the FIR to Rajasthan police.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Lalita Kumari v. Govt. of U.P.',
        citation: '(2014) 2 SCC 1',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'Section 154 does not permit police to refuse registration of a cognizable offence on territorial grounds; if the station lacks territorial jurisdiction, it must register a Zero FIR and transfer it.',
        relevance: 'The judicial cornerstone enforcing Zero FIR obligations.'
      },
      {
        caseName: 'Kirti Vashisht v. State (NCT of Delhi)',
        citation: '2019 SCC OnLine Del 11713',
        court: 'Delhi High Court',
        ratioDecidendi: 'Reiterated that Zero FIR is a statutory necessity to protect victims of sexual offences and interstate crimes; refusal by an SHO to register a Zero FIR invites departmental inquiry and prosecution under penal law.',
        relevance: 'Enforced penal consequences against police officers refusing Zero FIR.'
      }
    ],
    exceptionsAndMisconceptions: 'Zero FIR is not a separate trial mechanism; once transferred to the competent police station, it is re-numbered as a regular serial FIR and regular investigation proceeds.',
    litigationApplication: 'Invoked by victims when police refuse jurisdiction; cited in Section 175(3) BNSS applications before Magistrates to order police inquiry into recalcitrant stations.',
    relatedTerms: [
      { term: 'Cognizable Offence', id: 'dict-cognizable-vs-non-cognizable', relationship: 'Zero FIR applies only to cognizable offences.' },
      { term: 'First Information Report (FIR)', id: 'proc-fir-investigation', relationship: 'The parent procedural document.' }
    ],
    faqs: [
      {
        q: 'What happens if a police officer refuses to register a Zero FIR?',
        a: 'The police officer commits an offence under Section 199 BNS (Public servant disobeying law to cause injury) and faces disciplinary suspension and contempt of court under Lalita Kumari.'
      }
    ],
    examNotes: 'Highlight the statutory codification of Zero FIR in Section 173(1) BNSS 2023. Trace the origin to the Justice J.S. Verma Committee (2013) post-Nirbhaya.',
    sourceProvenance: {
      primarySource: 'Bharatiya Nagarik Suraksha Sanhita, 2023, Section 173(1); Justice J.S. Verma Committee Report (2013)',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Statutory Innovation'
    },
    tags: ['criminal-procedure-bnss', 'zero-fir', 'bnss-section-173', 'fir', 'police-duties', 'justice-verma-committee']
  },

  {
    id: 'dict-discharge-vs-acquittal',
    term: 'Discharge vs Acquittal (BNSS Sections 250 & 255)',
    category: 'Procedural Term',
    subCategory: 'Trial Stages & Pre-Trial Termination',
    jurisdiction: 'India (Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC)',
    language: 'English (Indian Criminal Procedure)',
    pronunciation: 'dis-charj vur-sus uh-kwit-ul',
    literalTranslation: 'Release before framing of charge vs judicial exoneration after trial.',
    conciseDefinition: 'The vital distinction between pre-trial and post-trial termination: Discharge releases the accused before formal charges are framed because the prosecution allegations disclose no prima facie ground to proceed; Acquittal is a final judicial verdict on merits after full trial declaring the accused not guilty.',
    detailedMeaning: 'Under the BNSS 2023, Discharge occurs at the threshold stage: in Sessions cases under Section 250 BNSS (formerly Sec 227 CrPC), and in warrant cases under Section 262 BNSS (formerly Sec 239 CrPC). At the stage of discharge, the court considers the police report and documents to see whether a prima facie case exists; if the allegations are groundless, the accused is discharged without standing trial. In contrast, Acquittal occurs after formal charge, examination of witnesses, and evaluation of evidence under Section 255 BNSS (formerly Sec 232 CrPC) or Section 271 BNSS. A discharge does not bar a fresh prosecution if fresh evidence emerges, whereas an acquittal attracts the constitutional bar of Double Jeopardy (Article 20(2)) and Section 337 BNSS (Section 300 CrPC).',
    hindiExplanation: 'उन्मोचन बनाम दोषमुक्ति (Discharge vs Acquittal): आपराधिक मुकदमों में यह अत्यंत महत्वपूर्ण अंतर है। "उन्मोचन" (Discharge - BNSS धारा 250) आरोप तय होने (Framing of Charge) से पहले की वह प्रारंभिक अवस्था है जहाँ अदालत पुलिस की चार्जशीट देखकर यह पाती है कि अभियुक्त के खिलाफ मुकदमा चलाने लायक कोई प्रथम दृष्टया सबूत (Prima Facie Case) ही नहीं है, इसलिए उसे बिना मुकदमा चलाए छोड़ दिया जाता है। जबकि "दोषमुक्ति" (Acquittal) पूरा मुकदमा (Trial) चलने, गवाहों के बयान और जिरह के बाद अदालत द्वारा सुनाया गया अंतिम फैसला है जिसमें अभियुक्त को "निर्दोष" पाया जाता है। बरी होने (Acquittal) के बाद उसी मामले में दोबारा मुकदमा नहीं चल सकता (Double Jeopardy), जबकि डिस्चार्ज में नए सबूत आने पर दोबारा कार्यवाही हो सकती है।',
    etymologyAndHistory: 'Formulated in the Criminal Procedure Codes of 1882, 1898, and 1973, refined by the Supreme Court in Union of India v. Prafulla Kumar Samal (1979). Preserved in Sections 250 and 255 of the BNSS 2023.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 250 (Discharge in Sessions), Section 255 (Acquittal in Sessions), Section 262 (Discharge in Warrant Cases), Section 337 (Autrefois Acquit / Double Jeopardy); CrPC Sections 227, 232, 239, 300.',
    essentialElements: [
      'Stage of Occurrence: Discharge occurs before framing of charge; Acquittal occurs after framing of charge and trial.',
      'Evidentiary Standard: Discharge considers only prima facie suspicion; Acquittal requires proof beyond reasonable doubt.',
      'Double Jeopardy Protection: Acquittal activates Section 337 BNSS and Article 20(2); Discharge does not bar re-investigation.',
      'Remedies: Against discharge, the prosecution prefers a Criminal Revision under Section 438 BNSS; against acquittal, an Appeal against Acquittal under Section 419 BNSS.'
    ],
    practicalScenarios: [
      {
        title: 'Discharge in a Fabricated Matrimonial Case',
        facts: 'A chargesheet under Section 85 BNS (cruelty) names the married sister-in-law who lives in the United States and has not visited India for 5 years. There are no specific allegations against her in the FIR or Section 180 BNSS statements.',
        issue: 'Must the sister-in-law stand full 4-year trial in India?',
        rule: 'Under Section 250 BNSS, if the allegations against an accused are vague, general, or groundless, the court must discharge them.',
        application: 'The Sessions Court discharges the sister-in-law before charges are framed.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Union of India v. Prafulla Kumar Samal',
        citation: '(1979) 3 SCC 4',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Laid down the 4 cardinal principles for discharge under Section 227 CrPC: The judge has power to sift and weigh evidence for the limited purpose of finding whether a prima facie case is made out; strong suspicion is enough to frame charge, but mere groundless suspicion warrants discharge.',
        relevance: 'The definitive locus classicus on the test of discharge in criminal trials.'
      },
      {
        caseName: 'Sanjay Kumar Rai v. State of U.P.',
        citation: '(2021) 16 SCC 679',
        court: 'Supreme Court of India',
        ratioDecidendi: 'The consideration of an application for discharge is not a mere formality. Courts have an affirmative duty to protect citizens from prolonged, vexatious, and baseless criminal trials.',
        relevance: 'Reiterated that trial courts must diligently scrutinize discharge applications.'
      }
    ],
    exceptionsAndMisconceptions: 'At the stage of discharge, the court cannot conduct a mini-trial or weigh defence evidence in detail; the inquiry is confined to testing the prosecution case on its face value.',
    litigationApplication: 'Filing a discharge application under Section 250 or 262 BNSS is a crucial preliminary strategy for criminal defence advocates to knock out baseless chargesheets without suffering the ordeal of a multi-year trial.',
    relatedTerms: [
      { term: 'Cognizable vs Non-Cognizable', id: 'dict-cognizable-vs-non-cognizable', relationship: 'The threshold offences leading to trial.' },
      { term: 'Chargesheet and Sessions Trial', id: 'proc-trial-chargesheet', relationship: 'The full court procedure governing discharge.' }
    ],
    faqs: [
      {
        q: 'Does an order of discharge mean the accused is declared innocent?',
        a: 'No. Discharge merely means that there was insufficient material to put the accused on trial. Acquittal is the formal judicial declaration of innocence.'
      }
    ],
    examNotes: 'High-yield procedural distinction. Prepare the 4-point comparison table (Stage, Evidence tested, Double Jeopardy effect, Appeal vs Revision). Cite Prafulla Kumar Samal (1979).',
    sourceProvenance: {
      primarySource: 'Bharatiya Nagarik Suraksha Sanhita, 2023, Sections 250 & 255; Prafulla Kumar Samal (1979) 3 SCC 4',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Criminal Trial Stage'
    },
    tags: ['criminal-procedure-bnss', 'discharge', 'acquittal', 'bnss-section-250', 'bnss-section-255', 'prafulla-kumar-samal', 'trial-stages']
  },

  {
    id: 'dict-anticipatory-bail-concept',
    term: 'Anticipatory Bail (Pre-Arrest Bail under BNSS Sec 482)',
    category: 'Procedural Term',
    subCategory: 'Bail Jurisprudence & Liberty Safeguards',
    jurisdiction: 'India (Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC)',
    language: 'English (Indian Criminal Procedure)',
    pronunciation: 'an-tis-ih-puh-toree bayl',
    literalTranslation: 'Pre-arrest protection against apprehension of arrest.',
    conciseDefinition: 'A statutory judicial direction issued by a Sessions Court or High Court directing that in the event of an arrest of a person on an accusation of having committed a non-bailable offence, that person shall be immediately released on bail.',
    detailedMeaning: 'Under Section 482 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 438 CrPC), when any person has reason to believe that they may be arrested on an accusation of having committed a non-bailable offence, they may apply to the High Court or Sessions Court for a direction for anticipatory bail. Anticipatory bail operates as a constitutional shield to protect innocent citizens from humiliation, political vendetta, or malicious arrest at the hands of influential rivals. In Sushila Aggarwal (2020), a 5-Judge Constitution Bench ruled that anticipatory bail should not ordinarily be limited to a fixed time period and can continue until the end of the trial.',
    hindiExplanation: 'अग्रिम जमानत (Anticipatory Bail - BNSS धारा 482): इसे "गिरफ्तारी-पूर्व जमानत" भी कहा जाता है। यदि किसी व्यक्ति को यह पुख्ता आशंका या अंदेशा (Reason to believe) है कि उसे किसी गैर-जमानती अपराध (Non-Bailable Offence) के झूठे या दुर्भावनापूर्ण मामले में पुलिस द्वारा गिरफ्तार किया जा सकता है, तो वह गिरफ्तारी होने से पहले ही सीधे सत्र न्यायालय (Sessions Court) या उच्च न्यायालय (High Court) में अग्रिम जमानत की याचिका दायर कर सकता है। यदि अदालत अग्रिम जमानत मंजूर कर लेती है, तो पुलिस उसे गिरफ्तार करते ही तुरंत जमानत मुचलके पर रिहा करने के लिए बाध्य होती है।',
    etymologyAndHistory: 'First recommended by the 41st Law Commission Report (1969) and introduced in the 1973 CrPC. Reaffirmed and preserved in Section 482 of the Bharatiya Nagarik Suraksha Sanhita, 2023.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 482; Code of Criminal Procedure, 1973 — Section 438; Constitution of India — Article 21.',
    essentialElements: [
      'Reason to Believe: Genuine, objective apprehension of imminent arrest, not a vague or fanciful fear.',
      'Non-Bailable Offence: The accusation must relate to a non-bailable offence.',
      'Jurisdictional Forum: Application lies concurrently before the Court of Session or the High Court.',
      'Statutory Conditions: Accused must cooperate with investigation, not tamper with witnesses, and not leave India without permission.'
    ],
    practicalScenarios: [
      {
        title: 'Anticipatory Bail in a Fabricated Commercial Cheat Case',
        facts: 'A disgruntled business partner files a police complaint alleging criminal breach of trust (Section 316 BNS). The accused receives calls from the police station threatening imminent arrest unless they pay money.',
        issue: 'Can the accused secure pre-arrest protection?',
        rule: 'Under Section 482 BNSS, when there is reasonable apprehension of arrest in a commercial dispute, anticipatory bail protects personal liberty.',
        application: 'The Sessions Court grants anticipatory bail with conditions to join investigation.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Gurbaksh Singh Sibbia v. State of Punjab',
        citation: '(1980) 2 SCC 565',
        court: 'Supreme Court of India (5-Judge Constitution Bench)',
        ratioDecidendi: 'Chief Justice Chandrachud held that the power to grant anticipatory bail is of wide amplitude and should not be fettered by narrow, judicially created conditions not found in Section 438. Anticipatory bail is an essential device to protect Article 21 liberty.',
        relevance: 'The foundational Constitution Bench ruling on anticipatory bail in India.'
      },
      {
        caseName: 'Sushila Aggarwal v. State (NCT of Delhi)',
        citation: '(2020) 5 SCC 1',
        court: 'Supreme Court of India (5-Judge Constitution Bench)',
        ratioDecidendi: 'Resolved prior conflicting rulings and held that: (1) Anticipatory bail should not ordinarily be restricted to a fixed period; (2) Its protection can continue until the conclusion of the trial unless special circumstances require otherwise.',
        relevance: 'Settled that anticipatory bail operates as a life-long protection for the case.'
      }
    ],
    exceptionsAndMisconceptions: 'Excluded under Section 18 / 18A of the SC/ST (Prevention of Atrocities) Act where a prima facie case is disclosed, and generally disfavored in heinous offences like terrorism or economic crimes involving huge public funds.',
    litigationApplication: 'One of the most frequently argued applications in Indian criminal practice. Drafted urgently to secure interim protection before an FIR is converted into physical arrest.',
    relatedTerms: [
      { term: 'Regular Bail', id: 'dict-default-bail-statutory', relationship: 'Sought post-arrest under Section 480 BNSS.' },
      { term: 'Police Custody vs Judicial Custody', id: 'dict-police-custody-vs-judicial', relationship: 'The custody avoided by anticipatory bail.' }
    ],
    faqs: [
      {
        q: 'Can anticipatory bail be granted even before an FIR is formally registered?',
        a: 'Yes. If there is an objective basis to apprehend arrest (e.g. police notice, inquiry calls, or formal complaints), anticipatory bail is maintainable even before an FIR is formally numbered (Gurbaksh Singh Sibbia).'
      }
    ],
    examNotes: 'High-frequency exam topic. Memorize Sibbia (1980) and Sushila Aggarwal (2020). Explain the concurrent jurisdiction between Sessions Court and High Court.',
    sourceProvenance: {
      primarySource: 'Bharatiya Nagarik Suraksha Sanhita, 2023, Section 482; Sushila Aggarwal (2020) 5 SCC 1',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Bail Jurisprudence'
    },
    tags: ['criminal-procedure-bnss', 'anticipatory-bail', 'bnss-section-482', 'gurbaksh-singh-sibbia', 'sushila-aggarwal', 'personal-liberty']
  }
];
