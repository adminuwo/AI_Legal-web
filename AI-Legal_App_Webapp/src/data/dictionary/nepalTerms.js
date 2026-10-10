// ─── AI LEGAL™ NEPAL LEGAL DICTIONARY & STATUTORY TERMS ─────────────────────
// Authoritative definitions of Nepalese legal terms, statutory doctrines & judicial canons
// Grounded strictly in the Constitution of Nepal 2072 and Muluki Codes 2074.

export const NEPAL_LEGAL_TERMS = [
  {
    id: 'term-np-prangnyaya',
    term: 'प्राङ्न्याय (Prangnyaya / Res Judicata)',
    literalTranslation: 'Previously Adjudicated Matter (पूर्व-फैसला भएको विषय)',
    plainMeaning: 'A fundamental rule of justice that a lawsuit cannot be filed again on an issue between the same parties that has already been heard and finally decided by a competent court.',
    conciseDefinition: 'The statutory principle codified under Section 10 of the Muluki Civil Procedure Code 2074 barring courts from hearing or re-adjudicating claims previously resolved on merits.',
    detailedLegalMeaning: 'Under Nepalese jurisprudence, Prangnyaya (प्राङ्न्याय) bars multiplicity of suits, harassment of defendants, and inconsistent judicial verdicts. Once a competent District Court, High Court, or Supreme Court renders a final decree on merits, no fresh plaint or claim may be instituted concerning the same cause of action.',
    statutoryBasis: 'Muluki Civil Procedure Code, 2074 — Section 10; Evidence Act, 2031 — Section 34.',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    category: 'Civil Procedure & Jurisprudence',
    tags: ['prangnyaya', 'res-judicata', 'nepal-legal-terms', 'muluki-civil-procedure', 'finality']
  },

  {
    id: 'term-np-jaheri-darkhast',
    term: 'जाहेरी दरखास्त (Jaheri Darkhast / FIR)',
    literalTranslation: 'Informing Petition / First Information of Crime',
    plainMeaning: 'The formal written complaint submitted to the police informing them that a criminal offense has occurred and requesting investigation and arrest.',
    conciseDefinition: 'The statutory first report of a cognizable offence submitted under Section 4 of the Muluki Criminal Procedure Code 2074 setting the criminal justice system in motion.',
    detailedLegalMeaning: 'A Jaheri Darkhast is not an encyclopaedia of all evidence, but the earliest documentary trigger of an investigation. Once registered, the police are bound to prepare an arrest memo, conduct spot inspection (घट्ना स्थल मुचुल्का), and produce arrested suspects within 24 hours before a judge.',
    statutoryBasis: 'Muluki Criminal Procedure Code, 2074 — Sections 4 & 5; Constitution of Nepal — Article 20.',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    category: 'Criminal Procedure',
    tags: ['jaheri', 'fir', 'nepal-crpc', 'police-investigation', 'complaint']
  },

  {
    id: 'term-np-bandi-pratyakshikaran',
    term: 'बन्दी प्रत्यक्षीकरण (Bandi Pratyakshikaran / Habeas Corpus)',
    literalTranslation: 'Produce the Body in Court (थुनामा रहेको व्यक्तिलाई अदालतमा सशरीर उपस्थित गराउने)',
    plainMeaning: 'An extraordinary court order commanding police or jailers to produce an illegally detained person before the judge and release them if held without law.',
    conciseDefinition: 'Prerogative constitutional writ issued by the Supreme Court (Art. 133) or High Court (Art. 144) to immediately terminate illegal detention and uphold personal liberty.',
    detailedLegalMeaning: 'Bandi Pratyakshikaran is the supreme guardian of personal liberty in Nepal. Where police fail to produce a suspect before a Judicial Magistrate within 24 hours or hold an individual without valid remand, the High Court immediately commands release.',
    statutoryBasis: 'Constitution of Nepal, 2072 — Articles 20(3), 133(2), 144(2); Muluki CrPC Section 15.',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    category: 'Constitutional Law & Writs',
    tags: ['habeas-corpus', 'bandi-pratyakshikaran', 'personal-liberty', 'nepal-constitution', 'article-133']
  },

  {
    id: 'term-np-thunchhek',
    term: 'थुनछेक (Thunchhek / Bail Hearing on Charge Sheet)',
    literalTranslation: 'Detention or Release Hearing (थुना वा धरौटी सम्बन्धी प्रारम्भिक सुनुवाइ)',
    plainMeaning: 'The preliminary court hearing conducted immediately after police file charges, where the judge decides whether to send the accused to jail or release them on bail.',
    conciseDefinition: 'The judicial inquiry under Sections 67, 68, and 71 of the Muluki Criminal Procedure Code 2074 determining pre-trial detention versus bail on bank guarantee or recognizance.',
    detailedLegalMeaning: 'Thunchhek is the pivotal battleground of liberty in Nepal\'s criminal trial. The court evaluates prima facie evidence: if the offence carries over 3 years imprisonment and proof is strong, detention under Section 67 is ordered; otherwise, bail under Section 68 is granted.',
    statutoryBasis: 'Muluki Criminal Procedure Code, 2074 — Sections 67, 68, 71, 73.',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    category: 'Criminal Procedure',
    tags: ['thunchhek', 'bail-hearing', 'section-67', 'section-68', 'nepal-courts']
  },

  {
    id: 'term-np-antarkalin-aadesh',
    term: 'अन्तरकालीन आदेश (Antarkalin Aadesh / Interim Order)',
    literalTranslation: 'Interim Injunction Order (मुद्दाको विचाराधीन अवस्थामा गरिने आदेश)',
    plainMeaning: 'A temporary protective court order maintaining the status quo and preventing property from being sold or demolished while the lawsuit is ongoing.',
    conciseDefinition: 'Interim protective injunction issued under Section 156 of the Muluki Civil Procedure Code 2074 to prevent irreparable harm to the subject matter of litigation.',
    detailedLegalMeaning: 'Granted upon satisfying the threefold test: prima facie case, balance of convenience, and irreparable injury. Violation of an interim order triggers contempt proceedings and statutory enforcement under Section 240.',
    statutoryBasis: 'Muluki Civil Procedure Code, 2074 — Sections 156, 157, 240.',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    category: 'Civil Procedure',
    tags: ['interim-order', 'antarkalin-aadesh', 'injunction', 'muluki-cpc']
  },

  {
    id: 'term-np-anshabanda',
    term: 'अंशबन्डा (Anshabanda / Partition of Ancestral Property)',
    literalTranslation: 'Division of Ancestral Shares among Coparceners',
    plainMeaning: 'The legal division of family ancestral property into equal shares among all coparceners, including parents, sons, and daughters.',
    conciseDefinition: 'The statutory partition of coparcenary property codified under Part 3 Chapter 10 of the Muluki Civil Code 2074 guaranteeing equal birthright shares to sons and daughters.',
    detailedLegalMeaning: 'Historically conditioned on daughters remaining unmarried, the landmark ruling in *Meera Dhungana (NLR 2052)* and the 2074 Code established complete gender parity: each son and daughter acquires an equal undivided share in ancestral assets from birth.',
    statutoryBasis: 'Muluki Civil Code, 2074 — Part 3 Chapter 10 (Sections 205–236); Constitution of Nepal Article 18.',
    jurisdiction: 'NP',
    jurisdictionLabel: 'Nepal (नेपाल सरकार)',
    category: 'Family & Property Law',
    tags: ['anshabanda', 'partition', 'daughter-property', 'muluki-civil-code', 'gender-equality']
  }
];
