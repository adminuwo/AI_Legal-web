// ─── AI LEGAL™ NEPAL LEGAL DRAFTING & COURT PLEADING TEMPLATES ──────────────
// Court-ready drafting structures, essential clauses, statutory foundations & citations
// Grounded strictly in the Constitution of Nepal 2072, Muluki Codes 2074, and Supreme Court Rules.

export const NEPAL_LEGAL_DRAFTING = [
  {
    id: 'draft-np-writ-article-133',
    slug: 'model-writ-petition-article-133-supreme-court-nepal',
    title: 'Writ Petition under Article 133 of the Constitution of Nepal, 2072',
    category: 'Supreme Court Writ Petitions',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Constitution of Nepal 2072 — Article 133; Supreme Court Rules 2074',
    courtForum: 'Hon\'ble Supreme Court of Nepal, Ramshahpath, Kathmandu (श्री सर्वोच्च अदालत, काठमाडौं)',
    purposeWhenToUse: 'Challenging arbitrary or unconstitutional executive orders, violations of fundamental rights (Part 3), seeking Mandamus (परमादेश) or Certiorari (उत्प्रेषण) where no alternative efficacious remedy exists.',
    statutoryFoundation: 'Article 133(2) of the Constitution vests extraordinary plenary powers in the Supreme Court to issue orders and writs for the enforcement of fundamental rights and settlement of public interest disputes.',
    essentialClauses: [
      'Particulars of Petitioner (नागरिकता नम्बर, ठेगाना) and array of government respondents (concerned Ministry, Department, and Office of Attorney General).',
      'Affidavit of locus standi and statement demonstrating that no other prompt, efficacious legal remedy exists under ordinary law (वैकल्पिक कानूनी उपचारको अभाव).',
      'Chronological sequence of facts, notifications, or impugned administrative decisions.',
      'Grounds of Challenge (दाबीका बुँदाहरू): Violation of Article 16 (Dignity), Article 18 (Equality), Article 20 (Justice), and ultra vires statutory power.',
      'Prayer Clause (माग दाबी): Specific prayer for Writ of Certiorari quashing the impugned decision and Mandamus directing performance of statutory duty.',
      'Application for Interim Order (अन्तरकालीन आदेश) with supporting affirmed affidavit (शपथपत्र).'
    ],
    commonDraftingMistakes: [
      'Omitting to serve copy to the Office of the Attorney General (महान्यायाधिवक्ताको कार्यालय).',
      'Failing to explain the 35-day limitation period from knowledge of the decision.',
      'Seeking writ relief where an ordinary statutory appeal to the High Court was available.'
    ],
    modelPleadingStructure: `श्री सर्वोच्च अदालत, काठमाडौंमा चढाएको
विषय: नेपालको संविधानको धारा १३३(२) बमोजिम उत्प्रेषण, परमादेश लगायत जो चाहिने आज्ञा आदेश जारी पाउँ।

[निवेदकको पूरा नाम, थर]
नागरिकता नं: [...] जिल्ला: [...], ठेगाना: [...]                   ... निवेदक

विरुद्ध

१. [विपक्षी मन्त्रालय / कार्यालयको नाम, ठेगाना]
२. नेपाल सरकार, प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय, सिंहदरबार
३. महान्यायाधिवक्ताको कार्यालय, रामशाहपथ, काठमाडौं                 ... विपक्षीहरू

मुद्दा: उत्प्रेषण तथा परमादेश।

निवेदन पत्रको व्यहोरा निम्न प्रकार छ:
१. निवेदकको परिचय तथा हकदैया (Locus Standi):
निवेदक नेपालको एक सचेत नागरिक तथा [...] पेशामा संलग्न व्यक्ति भएकोले...

२. विवादको संक्षिप्त पृष्ठभूमि र तथ्य:
विपक्षी कार्यालयबाट मिति २०८[...] मा गरिएको गैरकानूनी निर्णयबाट...

३. कानूनी प्रश्न तथा मौलिक हक हननका बुँदाहरू:
(क) नेपालको संविधानको धारा १८ (समानताको हक) विपरीत भएको,
(ख) प्राकृतिक न्यायको सिद्धान्त (Audi Alteram Partem) उल्लङ्घन भएको...

४. अन्तरकालीन आदेश माग गरिएको व्यहोरा:
मुद्दाको अन्तिम किनारा नभएसम्म निर्णय कार्यान्वयन नगर्नु नगराउनु भनी विपक्षीहरूको नाममा सर्वोच्च अदालत नियमावली, २०७४ बमोजिम अन्तरकालीन आदेश जारी पाउँ।

५. माग दाबी (Prayer):
विपक्षीको मिति २०८[...] को निर्णय उत्प्रेषणको आदेशले बदर गरी निवेदकको हकमा परमादेश जारी गरिपाउँ।

निवेदक
[हस्ताक्षर]
मिति: २०८[...]`
  },

  {
    id: 'draft-np-jaheri-darkhast',
    slug: 'model-jaheri-darkhast-criminal-complaint-police-nepal',
    title: 'First Information Report / Jaheri Darkhast (जाहेरी दरखास्त) under Muluki CrPC',
    category: 'Criminal Complaints & Jaheri',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Muluki Criminal Procedure Code, 2074 — Section 4 & Schedule 1',
    courtForum: 'District Police Office / Metropolitan Police Circle (जिल्ला प्रहरी परिसर / वृत्त)',
    purposeWhenToUse: 'Reporting cognizable offences (homicide, fraud, banking crime, cybercrime, physical assault) to police authorities to initiate formal statutory investigation.',
    statutoryFoundation: 'Section 4 of the Muluki Criminal Procedure Code 2074 mandates that any person possessing information regarding a Schedule 1 offence shall submit a written complaint to the nearest police station.',
    essentialClauses: [
      'Heading to the In-Charge of the District Police Office (श्रीमान् कार्यालय प्रमुखज्यू, जिल्ला प्रहरी परिसर).',
      'Informant/Victim particulars, citizenship details, contact phone, and residential address.',
      'Accused particulars (name, address, physical description, relation if any).',
      'Exact time, date, location (घट्ना स्थल) and narrative of how the crime was executed.',
      'List of documentary and material evidence (CCTV, contracts, bank statements, medical reports).',
      'Explicit demand for arrest, investigation, recovery of stolen/defrauded assets (बिगो असुल), and penal sanction under the Muluki Criminal Code 2074.'
    ],
    commonDraftingMistakes: [
      'Omitting exact date/time of incident or delaying submission without explaining reasonable cause.',
      'Failing to specify monetary claim (बिगो) in financial and fraud complaints.'
    ],
    modelPleadingStructure: `श्रीमान् कार्यालय प्रमुखज्यू,
जिल्ला प्रहरी परिसर, [काठमाडौं / ललितपुर / कास्की]।

विषय: मुलुकी अपराध संहिता, २०७४ बमोजिम हदैसम्मको कारबाही गरी बिगो असुल गरिपाउँ।

जाहेरवाला: [नाम, थर], नागरिकता नं: [...], ठेगाना: [...]
विपक्षी (कसूरदार): [नाम, थर], ठेगाना: [...]

म जाहेरवाला निम्न व्यहोराको जाहेरी दरखास्त पेश गर्दछु:
१. म जाहेरवाला [...] व्यवसाय सञ्चालन गर्दै आएको व्यक्ति हुँ।
२. विपक्षीले मिति २०८[...] गतेका दिन [...] स्थानमा मलाई झुक्यानमा पारी...
३. उक्त कार्य मुलुकी अपराध संहिता, २०७४ को दफा [...] बमोजिमको कसूर भएको हुँदा...
४. अतः विपक्षीलाई तत्काल पक्राउ गरी कानूनी कारबाही गरी मेरो बिगो रु. [...] असुलउपर गरिपाउँ।

जाहेरवाला
[हस्ताक्षर / ल्याप्चे]
मिति: २०८[...]`
  },

  {
    id: 'draft-np-bail-application-sec68',
    slug: 'model-bail-petition-section-68-muluki-crpc-nepal',
    title: 'Bail Application (धरौटी वा जमानतमा रिहाइको निवेदन) under Section 68 Muluki CrPC',
    category: 'Criminal Bail Petitions',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Muluki Criminal Procedure Code, 2074 — Sections 68 & 71',
    courtForum: 'District Court / High Court (सम्बन्धित जिल्ला वा उच्च अदालत)',
    purposeWhenToUse: 'Submitted by defense counsel during the Thunchhek hearing following indictment, requesting release on cash deposit, bank guarantee, or property security.',
    statutoryFoundation: 'Section 68 empowers the court to release an accused on bail or guarantee where trial detention under Section 67 is not mandatory.',
    essentialClauses: [
      'Court caption and case registration reference (मुद्दा नं., अभियोगपत्र सन्दर्भ).',
      'Averment of innocence and invocation of constitutional presumption of innocence (Art. 20(5)).',
      'Showing that the alleged offence carries less than 3 years imprisonment or evidence is purely documentary.',
      'Proof of permanent residence, absence of flight risk, and willingness to furnish property guarantee (अचल सम्पत्ति रोक्का).',
      'Specific undertaking to attend every court date (तारेखमा हाजिर रहने प्रतिबद्धता).'
    ],
    commonDraftingMistakes: [
      'Failing to attach local municipal residence verification (स्थानीय वडाको बसोबास सिफारिस).',
      'Not specifying the property valuation or bank guarantee details.'
    ],
    modelPleadingStructure: `श्री [काठमाडौं] जिल्ला अदालतमा पेश गरेको
विषय: मुलुकी फौजदारी कार्यविधि संहिता, २०७४ को दफा ६८ बमोजिम धरौटी/जमानतमा तारेखमा रही मुद्दा पुर्पक्ष गरिपाउँ।

मुद्दा: [मुद्दाको नाम / अभियोगपत्र नं.]
वादी: नेपाल सरकार
विरुद्ध
प्रतिवादी: [अभियुक्तको नाम]                        ... निवेदक / प्रतिवादी

निवेदक प्रतिवादीको तर्फबाट निम्न व्यहोरा अनुरोध गर्दछु:
१. म निवेदक उपर विपक्षी वादीले लगाएको अभियोग निराधार छ...
२. म समाजको प्रतिष्ठित नागरिक भएको, मेरो कुनै आपराधिक पृष्ठभूमि नरहेको...
३. अतः मलाई पुर्पक्षका लागि थुनामा नराखी दफा ६८ बमोजिम मनासिब धरौटी वा बैंक जमानत लिई तारेखमा छाडी मुद्दा पुर्पक्ष गर्न पाउने आदेश जारी गरिपाउँ।

निवेदक / वारिस
[हस्ताक्षर]
मिति: २०८[...]`
  },

  {
    id: 'draft-np-civil-plaint-firaad',
    slug: 'model-civil-plaint-firaadpatra-specific-performance-nepal',
    title: 'Civil Plaint (फिरादपत्र) for Specific Performance under Muluki Civil Code',
    category: 'Civil Plaints & Lawsuits',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    actReference: 'Muluki Civil Procedure Code, 2074 — Section 85; Muluki Civil Code, 2074 — Section 538',
    courtForum: 'Competent District Court (सम्बन्धित जिल्ला अदालत)',
    purposeWhenToUse: 'Instituting a civil lawsuit for enforcement of land sale agreement, contractual compliance, or property partition.',
    statutoryFoundation: 'Section 85 of the Muluki Civil Procedure Code sets forth mandatory format and verification standards for filing a plaint (फिरादपत्र).',
    essentialClauses: [
      'Name of District Court having territorial and pecuniary jurisdiction.',
      'Plaintiff and Defendant full biodata, citizenship number, and address for service of summons.',
      'Detailed factual narrative of contract execution and advance consideration paid.',
      'Proof of defendant\'s default and plaintiff\'s readiness and willingness to perform.',
      'Valuation of suit (मुद्दाको बिगो) and computation of ad valorem court fee.',
      'Statement that suit is filed within statutory limitation under Section 540.'
    ],
    commonDraftingMistakes: [
      'Incorrect calculation of court fees resulting in court registry rejection.',
      'Failing to submit certified copy of land ownership deed or registration pass token.'
    ],
    modelPleadingStructure: `श्री [काठमाडौं] जिल्ला अदालतमा पेश गरेको
फिरादपत्र
विषय: मुलुकी देवानी संहिता, २०७४ को दफा ५३८ बमोजिम करारको यथावत परिपालना (Specific Performance) गराई जग्गा रजिष्ट्रेशन पास गरिपाउँ।

वादी: [वादीको नाम], नागरिकता नं: [...], ठेगाना: [...]
विरुद्ध
प्रतिवादी: [प्रतिवादीको नाम], ठेगाना: [...]

मुद्दाको बिगो: रु. २५,००,०००/- (पच्चीस लाख रुपैयाँ)
कोर्ट फि: नियमबमोजिम दाखिल गरिएको छ।

फिरादपत्रको व्यहोरा निम्न प्रकार छ:
१. वादी र प्रतिवादीबीच मिति २०८[...] मा भएको लिखत करार अनुसार...
२. वादीले कबुलियत बमोजिमको रकम भुक्तानी गरिसकेको भएतापनि प्रतिवादीले...
३. अतः प्रतिवादीको नामको जग्गा वादीको नाममा रजिष्ट्रेशन पास गराई पाउन यो फिरादपत्र पेश गरेको छु।

वादी
[हस्ताक्षर]
मिति: २०८[...]`
  }
];
