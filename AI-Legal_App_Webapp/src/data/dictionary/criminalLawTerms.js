// ─── CRIMINAL LAW & PENAL CONCEPTS (BNS / IPC) ─────────────────────────────
// Authoritative definitions, BNS vs IPC mappings, landmark criminal precedents & legal tests

export const CRIMINAL_LAW_TERMS = [
  {
    id: 'dict-mens-rea-criminal-intent',
    term: 'Mens Rea (Culpable Mental State)',
    category: 'Substantive Doctrine',
    subCategory: 'General Principles of Penal Culpability',
    jurisdiction: 'India (Bharatiya Nyaya Sanhita, 2023 / IPC)',
    language: 'Latin / English Legal Term',
    pronunciation: 'menz ray-ah',
    literalTranslation: 'Guilty mind / Blameworthy mental state.',
    conciseDefinition: 'The state of mind expressly or impliedly required by a penal statute to establish criminal liability, encompassing varying degrees of mental fault such as intention, knowledge, recklessness, or gross negligence.',
    detailedMeaning: 'Under the Bharatiya Nyaya Sanhita, 2023, criminal offences are structured around distinct gradations of culpability. The statute generally does not use the Latin label "mens rea" in isolation, but defines crimes with specific mental state adverbs such as "intentionally", "knowingly", "voluntarily", "fraudulently", "dishonestly", or "rashly". Without the concurrence of the required mental element with the physical conduct (actus reus), an act remains a civil wrong or innocent accident. Under Section 108 of the Bharatiya Sakshya Adhiniyam, the prosecution must prove mens rea beyond reasonable doubt, unless a reverse burden applies.',
    hindiExplanation: 'मेन्स रिया (Mens Rea) का अर्थ है "दोषी मन" या "आपराधिक मनःस्थिति"। भारतीय दंड विधि (BNS 2023) के तहत किसी भी कृत्य को अपराध सिद्ध करने के लिए केवल गलत काम (Actus Reus) होना काफी नहीं है, बल्कि उस काम को करने वाले के मन में कानून द्वारा निर्धारित बुरी नीयत या ज्ञान होना अनिवार्य है। कानून में इसे "जानबूझकर" (Voluntarily), "बेईमानी से" (Dishonestly), "धोखाधड़ी से" (Fraudulently) या "उतावलेपन से" (Rashly) जैसे शब्दों द्वारा व्यक्त किया जाता है।',
    etymologyAndHistory: 'Formulated in canon law and early common law maxims (Coke Third Institute, 1641). Structured analytically in English law through R v. Tolson (1889) and imported into Indian penal jurisprudence via Macaulay 1837 Draft Penal Code and preserved in BNS 2023.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 — General Exceptions (Sections 14–44), Section 2 (Definitions of "dishonestly", "fraudulently", "voluntarily"); Bharatiya Sakshya Adhiniyam, 2023 — Section 108 & 111.',
    essentialElements: [
      'Voluntary Conduct: The accused exercised conscious mental control over their actions.',
      'Culpable State of Mind: The mental condition conforms to the specific statutory requirement (e.g. dishonest intention in theft, knowledge in culpable homicide).',
      'Contemporaneity: The mental state must accompany the physical act at the time of execution.',
      'Absence of Exculpatory Exception: Accused does not fall within general exceptions such as infancy, insanity, or involuntary intoxication.'
    ],
    practicalScenarios: [
      {
        title: 'Shooting at a Tree Stump Believing it is an Enemy',
        facts: 'A night guard spots a dark silhouette in a restricted area, mistakes it for an armed intruder, and shoots. It turns out to be a wooden dummy left by landscapers.',
        issue: 'Has the guard committed an attempt to murder under Section 109 BNS?',
        rule: 'An impossible attempt where the intention is clearly directed at committing the prohibited harm carries criminal liability.',
        application: 'The guard had the mens rea to cause death and executed an actus reus towards that end.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'State of Maharashtra v. Mayer Hans George',
        citation: 'AIR 1965 SC 722',
        court: 'Supreme Court of India (3-Judge Bench)',
        ratioDecidendi: 'The common law doctrine that mens rea is an essential ingredient of every offence applies to India. Unless a statute by clear words or necessary implication excludes mens rea, it must be read into penal provisions.',
        relevance: 'The definitive benchmark authority on the presumption of mens rea in Indian statutory offences.'
      },
      {
        caseName: 'K.M. Nanavati v. State of Maharashtra',
        citation: 'AIR 1962 SC 605',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Analyzed the difference between sudden and grave provocation negating premeditated intention versus planned, calculated revenge where mens rea remains intact.',
        relevance: 'Benchmark ruling analyzing mental intent, cooling-off periods, and murder vs culpable homicide.'
      }
    ],
    exceptionsAndMisconceptions: 'Excluded in Strict Liability offences (such as Section 63/64 BNS for statutory rape, certain food safety violations, and environmental hazards) where proof of mental state is unnecessary.',
    litigationApplication: 'The primary battlefield in cross-examination and defence arguments in sessions trials to establish absence of dishonest intention or reduce charges from Murder (Sec 101 BNS) to Culpable Homicide (Sec 100 BNS).',
    relatedTerms: [
      { term: 'Actus Reus', id: 'dict-actus-reus-criminal-conduct', relationship: 'The physical counterpart of mens rea.' },
      { term: 'Actus Non Facit Reum', id: 'dict-actus-non-facit-reum', relationship: 'The Latin maxim encapsulating the doctrine.' }
    ],
    faqs: [
      {
        q: 'What is the difference between "Intention" and "Knowledge"?',
        a: 'Intention is the conscious desire to bring about a specific prohibited consequence. Knowledge is the awareness that a consequence will practically certainly follow, even if not desired.'
      }
    ],
    examNotes: 'Essential question across Judicial Services. Detail the 4 stages of crime: Intention -> Preparation -> Attempt -> Commission. Explain when preparation becomes punishable (e.g. dacoity, waging war).',
    sourceProvenance: {
      primarySource: 'Bharatiya Nyaya Sanhita, 2023, Sections 14–44; Mayer Hans George (1965) 1 SCR 123',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Criminal Jurisprudence'
    },
    tags: ['criminal-law-bns', 'mens-rea', 'bns', 'culpability', 'intention', 'knowledge', 'penal-code']
  },

  {
    id: 'dict-actus-reus-criminal-conduct',
    term: 'Actus Reus (Voluntary Prohibited Conduct)',
    category: 'Substantive Doctrine',
    subCategory: 'General Principles of Penal Culpability',
    jurisdiction: 'India (Bharatiya Nyaya Sanhita, 2023 / IPC)',
    language: 'Latin / English Legal Term',
    pronunciation: 'ak-tus ray-us',
    literalTranslation: 'Guilty act / Prohibited physical conduct.',
    conciseDefinition: 'The external, physical, or conduct element of a criminal offence consisting of a voluntary human act, an omission in violation of a legal duty, or a prohibited state of affairs and its harmful consequences.',
    detailedMeaning: 'Under Indian penal law, a person cannot be punished for wicked thoughts or unexecuted evil desires alone; there must be an external manifestation in the physical world. Actus Reus includes: (1) The voluntary bodily movement of the accused; (2) The surrounding factual circumstances required by statute (e.g. taking property "out of the possession of another" without consent); and (3) The resulting consequence caused directly by that conduct (e.g. death of a human being in homicide). Under Section 2(1) BNS, the word "act" includes an illegal omission.',
    hindiExplanation: 'एक्टस रियस (Actus Reus) का अर्थ है "आपराधिक कृत्य" या "निषिद्ध शारीरिक आचरण"। केवल मन में बुरा सोचना अपराध नहीं है; जब तक उस दुर्भावना को शारीरिक रूप से किसी गैर-कानूनी कार्य या वैधानिक कर्तव्य के अवैध लोप (Illegal Omission) के रूप में अंजाम नहीं दिया जाता, तब तक अपराध नहीं बनता। इसमें कार्य की स्वैच्छिकता (Voluntary Action) और उसके द्वारा उत्पन्न परिणाम (Causation) शामिल हैं।',
    etymologyAndHistory: 'Conceptualized in classical Roman criminal jurisprudence and systematized by 19th-century jurists such as Austin and Kenny. Embedded in Section 32/33 of the IPC 1860 and reiterated in Section 2 and 3 of the Bharatiya Nyaya Sanhita 2023.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 — Section 2 (Acts include illegal omissions), Sections 14–44 (General Exceptions); Indian Penal Code, 1860 — Sections 32 & 33.',
    essentialElements: [
      'Voluntary Human Conduct: Bodily movements controlled by the conscious mind (excludes sleepwalking or reflex spasms).',
      'Illegal Omission: Failure to perform a positive duty specifically imposed by law (e.g. a jailer refusing food to an inmate).',
      'Causation: Direct chain of causation between the accused act and the prohibited result (causa causans).',
      'Concurrence with Mens Rea: The physical conduct must occur at the time the blameworthy intent is operative.'
    ],
    practicalScenarios: [
      {
        title: 'Starvation by Parental Omission',
        facts: 'Parents lock their 4-year-old child in a room and intentionally refuse to provide food or water for 10 days, resulting in the child death.',
        issue: 'Can the parents be convicted of murder when they committed no positive violent act?',
        rule: 'Under Section 2 BNS, an act includes an illegal omission in breach of a parent legal duty of care under law.',
        application: 'The intentional omission to provide life-sustaining food constitutes the actus reus of homicide.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Om Prakash v. State of Punjab',
        citation: 'AIR 1961 SC 1782',
        court: 'Supreme Court of India',
        ratioDecidendi: 'A husband who deliberately subjected his wife to systematic starvation and refused her medical treatment was held guilty of attempt to murder. The actus reus was accomplished through deliberate illegal omissions in breach of legal duty.',
        relevance: 'Leading precedent confirming that illegal omission constitutes actus reus in homicide.'
      },
      {
        caseName: 'R. v. Miller',
        citation: '[1983] 2 AC 161',
        court: 'House of Lords (Persuasive in Common Law)',
        ratioDecidendi: 'A person who accidentally starts a fire and, upon realizing the danger, fails to take steps to extinguish it or call help is guilty of arson because creating a dangerous situation generates an immediate legal duty to act.',
        relevance: 'The duty theory of actus reus through omission.'
      }
    ],
    exceptionsAndMisconceptions: 'Involuntary conduct (automatism, epileptic seizure while driving, hypnotic trance, or acts compelled by overwhelming physical force) lacks the voluntary nature required for actus reus.',
    litigationApplication: 'Pivotal in challenging causation in medical negligence cases, industrial accidents, and differentiating proximate cause from novus actus interveniens (intervening cause).',
    relatedTerms: [
      { term: 'Mens Rea', id: 'dict-mens-rea-criminal-intent', relationship: 'The mental element of crime.' },
      { term: 'Actus Non Facit Reum', id: 'dict-actus-non-facit-reum', relationship: 'The governing Latin canon.' }
    ],
    faqs: [
      {
        q: 'What is Novus Actus Interveniens?',
        a: 'An independent intervening act that breaks the chain of causation between the original conduct of the accused and the ultimate injury, relieving the accused of liability for the final consequence.'
      }
    ],
    examNotes: 'Explain the difference between positive acts and omissions. Remember Section 2(1) BNS (words referring to acts done extend also to illegal omissions). Cite Om Prakash (1961).',
    sourceProvenance: {
      primarySource: 'Bharatiya Nyaya Sanhita, 2023, Section 2 & 100; Om Prakash v. State of Punjab',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Penal Jurisprudence'
    },
    tags: ['criminal-law-bns', 'actus-reus', 'bns', 'conduct', 'omission', 'causation']
  },

  {
    id: 'dict-culpable-homicide-vs-murder',
    term: 'Culpable Homicide vs Murder (BNS Sec 100 vs 101)',
    category: 'Substantive Doctrine',
    subCategory: 'Offences Affecting the Human Body',
    jurisdiction: 'India (Bharatiya Nyaya Sanhita, 2023 / IPC)',
    language: 'English (Indian Penal Jurisprudence)',
    pronunciation: 'kul-puh-bul hom-ih-syde vur-sus mur-dur',
    literalTranslation: 'Culpable homicide: Genus / Murder: Species.',
    conciseDefinition: 'The core distinction in Indian homicide law establishing that all murders are culpable homicide, but not all culpable homicides are murder; the distinction lies in the degree of probability and lethal certainty of the intended bodily injury.',
    detailedMeaning: 'Under Section 100 of the BNS 2023 (formerly Section 299 IPC), Culpable Homicide is causing death by doing an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that the act is likely to cause death. Under Section 101 BNS (formerly Section 300 IPC), Culpable Homicide escalates into Murder if: (1) Done with the intention of causing death; or (2) Done with the intention of causing such injury as the offender knows to be likely to cause death of that particular person; or (3) Done with intention to cause injury sufficient in the ordinary course of nature to cause death; or (4) Imminently dangerous with knowledge that it must in all probability cause death. If any of the 5 statutory exceptions (Grave & Sudden Provocation, Private Defence excess, Public Servant excess, Sudden Fight, or Adult Consent) applies, murder drops back to Culpable Homicide Not Amounting to Murder (Section 105 BNS).',
    hindiExplanation: 'आपराधिक मानव वध बनाम हत्या (Culpable Homicide vs Murder): भारतीय कानून में यह सबसे महत्वपूर्ण कानूनी अंतर है। कानूनी सूत्र है: "सभी हत्याएं आपराधिक मानव वध हैं, लेकिन सभी आपराधिक मानव वध हत्या नहीं हैं" (All murder is culpable homicide, but not all culpable homicide is murder)। दोनों के बीच का अंतर केवल "मृत्यु की संभावना की डिग्री" (Degree of Probability) पर निर्भर करता है। यदि शारीरिक चोट ऐसी है जिससे मृत्यु होने की केवल "संभावना" (Likely) है, तो वह BNS की धारा 100 (Culpable Homicide) है। लेकिन यदि चोट प्रकृति के सामान्य अनुक्रम में मृत्यु कारित करने के लिए "पर्याप्त" (Sufficient in ordinary course) है या मृत्यु होना लगभग तय है, तो वह BNS की धारा 101 के तहत "हत्या" (Murder) है।',
    etymologyAndHistory: 'Formulated by Lord Macaulay in the Indian Penal Code 1860, and historically synthesized by Melvill J. in the celebrated case of Reg. v. Govinda (1876). Re-enacted verbatim in Sections 100, 101, and 105 of the Bharatiya Nyaya Sanhita, 2023.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 — Section 100 (Culpable Homicide), Section 101 (Murder), Section 105 (Punishment for culpable homicide not amounting to murder); IPC Sections 299, 300, 304.',
    essentialElements: [
      'Genus & Species Relationship: Culpable Homicide is the broader genus; Murder is the aggravated species.',
      'Degree of Intention: Intention to cause injury "likely to cause death" (Sec 100 BNS) vs injury "sufficient in the ordinary course of nature to cause death" (Sec 101(c) BNS).',
      'Knowledge Threshold: Knowledge that act is "likely" to cause death vs knowledge that act is "so imminently dangerous that it must in all probability cause death".',
      'Application of 5 Exceptions: Grave provocation, sudden fight, etc., reduce Murder to Culpable Homicide Part I or II.'
    ],
    practicalScenarios: [
      {
        title: 'Single Blow with a Wooden Stick in Sudden Quarrel',
        facts: 'During a heated verbal altercation over land boundary, the accused picks up an ordinary wooden lathi and strikes the victim once on the head, causing a skull fracture resulting in death 3 days later.',
        issue: 'Is the accused guilty of Murder under Section 101 BNS or Culpable Homicide under Section 105 BNS?',
        rule: 'In a sudden quarrel without premeditation (Exception 4), a single lathi blow without cruelty negates the third clause of Section 101.',
        application: 'The Supreme Court convicts under Section 105 Part I/II BNS, holding the act was culpable homicide not amounting to murder.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Reg. v. Govinda',
        citation: '(1876) ILR 1 Bom 342',
        court: 'Bombay High Court (Melvill J.)',
        ratioDecidendi: 'Laid down the classic comparative grid distinguishing Section 299 from Section 300 IPC. The distinction turns on the degree of probability of death: likely = culpable homicide; sufficient in the ordinary course of nature = murder.',
        relevance: 'The most cited judgment on homicide across all Common Law jurisdictions.'
      },
      {
        caseName: 'Virsa Singh v. State of Punjab',
        citation: 'AIR 1958 SC 465',
        court: 'Supreme Court of India (Vivian Bose J.)',
        ratioDecidendi: 'Laid down the 4-step test for Section 300 Clause 3 (now BNS Sec 101(c)): (1) Establish bodily injury present; (2) Prove nature of injury; (3) Prove intent to inflict that particular injury; (4) Objective medical inquiry whether injury is sufficient in ordinary course of nature to cause death.',
        relevance: 'The definitive test for Section 300(3) IPC / Section 101(c) BNS.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: Premeditation is NOT required for all forms of murder; an intentional infliction of an injury objectively sufficient to cause death is murder even if conceived in a second (Virsa Singh).',
    litigationApplication: 'The central trial battleground in sessions trials: defence advocates present medical evidence to downgrade charges from BNS 101 (life imprisonment or death) to BNS 105 (imprisonment up to 10 years or life).',
    relatedTerms: [
      { term: 'Mens Rea', id: 'dict-mens-rea-criminal-intent', relationship: 'Determines the level of homicide culpability.' },
      { term: 'Private Defence', id: 'dict-private-defence-necessity', relationship: 'Exception 2 reducing murder to culpable homicide.' }
    ],
    faqs: [
      {
        q: 'What is the punishment difference between Section 101 and Section 105 BNS?',
        a: 'Section 101 (Murder) carries mandatory Death or Life Imprisonment plus fine. Section 105 (Culpable Homicide Not Amounting to Murder) carries Life Imprisonment or up to 10 years imprisonment under Part I, and up to 10 years or fine under Part II.'
      }
    ],
    examNotes: 'The ultimate criminal law exam question. Reproduce the Reg v. Govinda (1876) parallel comparison table and explain the 4 steps of the Virsa Singh (1958) test.',
    sourceProvenance: {
      primarySource: 'Bharatiya Nyaya Sanhita, 2023, Sections 100, 101, 105; Reg. v. Govinda (1876)',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Statutory Framework'
    },
    tags: ['criminal-law-bns', 'culpable-homicide', 'murder', 'bns-section-100', 'bns-section-101', 'virsa-singh', 'reg-v-govinda']
  },

  {
    id: 'dict-common-intention-vs-object',
    term: 'Common Intention (BNS Sec 3(5)) vs Common Object (BNS Sec 190)',
    category: 'Substantive Doctrine',
    subCategory: 'Joint Liability & Group Crimes',
    jurisdiction: 'India (Bharatiya Nyaya Sanhita, 2023 / IPC)',
    language: 'English (Indian Criminal Jurisprudence)',
    pronunciation: 'kom-on in-ten-shun vur-sus kom-on ob-jekt',
    literalTranslation: 'Shared prior meeting of minds vs common unlawful purpose of an assembly.',
    conciseDefinition: 'The two foundational rules of joint and constructive criminal liability in Indian penal law: Common Intention imposes joint liability where a criminal act is done by several persons in furtherance of a shared prior mental plan; Common Object imposes vicarious liability on every member of an unlawful assembly of five or more persons.',
    detailedMeaning: 'Under Section 3(5) of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 34 IPC), when a criminal act is done by several persons in furtherance of the common intention of all, each such person is liable for that act in the same manner as if it were done by them alone. It requires prior meeting of minds and active physical or psychological participation. In contrast, under Section 190 of the BNS 2023 (formerly Section 149 IPC), if an offence is committed by any member of an unlawful assembly (minimum 5 persons under Section 189 BNS) in prosecution of the common object of that assembly, every person who is a member at that time is guilty of that offence, even if they performed no overt violent act.',
    hindiExplanation: 'सामान्य आशय बनाम सामान्य उद्देश्य (Common Intention vs Common Object): भारतीय दंड विधि में सामूहिक दायित्व (Joint Liability) के दो सबसे बड़े सिद्धांत हैं। BNS की धारा 3(5) (पूर्व धारा 34 IPC) "सामान्य आशय" से संबंधित है, जिसमें कम से कम दो व्यक्तियों के बीच घटना से पूर्व "मस्तिष्क का पूर्व-मिलन" (Prior Meeting of Minds) और अपराध में सक्रिय भागीदारी आवश्यक है। जबकि BNS की धारा 190 (पूर्व धारा 149 IPC) "सामान्य उद्देश्य" से संबंधित है, जो न्यूनतम 5 व्यक्तियों की "विधि-विरुद्ध सभा" (Unlawful Assembly) पर लागू होती है; इसमें यदि सभा का कोई भी सदस्य सामान्य उद्देश्य की पूर्ति में अपराध करता है, तो भीड़ में खड़ा हर व्यक्ति दोषी माना जाता है, भले ही उसने खुद कोई हमला न किया हो।',
    etymologyAndHistory: 'Section 34 was added to the IPC in 1870 and interpreted by the Privy Council in Barendra Kumar Ghosh v. Emperor (1925) (The Shankari Tola Post Office Case). Modernized and placed under Section 3(5) and Section 190 of the BNS 2023.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 — Section 3(5) (Joint Liability / Common Intention), Section 189 (Unlawful Assembly), Section 190 (Every member guilty of offence committed in prosecution of common object); IPC Sections 34, 141, 149.',
    essentialElements: [
      'Common Intention (BNS 3(5)): Minimum 2 persons; Prior meeting of minds (pre-arranged plan or formed on the spot); Active physical or psychological participation in furtherance of the plan.',
      'Common Object (BNS 190): Minimum 5 persons; Existence of an unlawful assembly sharing one of the 5 unlawful objects in Section 189 BNS; Offence committed in prosecution of that object or known to be likely.',
      'Substantive Offence: Section 3(5) is a rule of evidence and does not create a distinct offence; Section 190 creates a specific substantive offence.',
      'Constructive Liability: In both, a person who did not strike the fatal blow is punished equally as a principal.'
    ],
    practicalScenarios: [
      {
        title: 'Guarding the Door in an Armed Bank Robbery',
        facts: 'Three armed men enter a bank to commit robbery. A fourth man stands at the entrance holding a weapon to prevent bystanders from entering. Inside, one robber shoots and kills the bank teller.',
        issue: 'Can the guard outside be convicted of murder under Section 101 read with Section 3(5) BNS?',
        rule: 'Under Common Intention, standing guard to facilitate the criminal enterprise constitutes active participation in furtherance of the common intention.',
        application: 'The guard is convicted of murder equally with the shooter, following Barendra Kumar Ghosh.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Barendra Kumar Ghosh v. Emperor',
        citation: 'AIR 1925 PC 1',
        court: 'Privy Council (Lord Sumner)',
        ratioDecidendi: '"They also serve who only stand and wait." A person standing outside a post office holding a pistol while accomplices inside shot the postmaster was equally guilty of murder under Section 34.',
        relevance: 'The landmark ruling establishing constructive joint liability for acts done in furtherance of common intention.'
      },
      {
        caseName: 'Mahbub Shah v. Emperor',
        citation: 'AIR 1945 PC 118 (Indus River Case)',
        court: 'Privy Council (Sir Madhavan Nair)',
        ratioDecidendi: 'Distinguished "common intention" from "similar intention". The essence of Section 34 is prior meeting of minds; the fact that two persons simultaneously fired guns at the same victim does not establish common intention without prior concerted plan.',
        relevance: 'Benchmark ruling differentiating common intention from similar intention.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: Common Intention does NOT require a long pre-meditated conspiracy; it can develop on the spot during the incident (Kripal Singh v. State of U.P.).',
    litigationApplication: 'Invoked in almost every multi-accused criminal chargesheet. Defence advocates focus on demonstrating absence of prior concert, passive presence, or individual excess by a co-accused.',
    relatedTerms: [
      { term: 'Criminal Conspiracy', id: 'dict-criminal-conspiracy', relationship: 'Conspiracy is an agreement before execution; common intention operates during execution.' },
      { term: 'Mens Rea', id: 'dict-mens-rea-criminal-intent', relationship: 'The shared mental culpability.' }
    ],
    faqs: [
      {
        q: 'Can Section 3(5) BNS be applied if only one accused is identified and the rest are unknown?',
        a: 'Yes, if the court is satisfied that the identified accused acted in concert with others sharing common intention, even if the co-accused cannot be identified.'
      }
    ],
    examNotes: 'High-frequency exam comparison: Prepare the 5-point comparison table (Minimum members: 2 vs 5; Distinct offence: No vs Yes; Prior concert: Required vs Not required; Participation: Active vs Membership). Cite Barendra Kumar Ghosh (1925) and Mahbub Shah (1945).',
    sourceProvenance: {
      primarySource: 'Bharatiya Nyaya Sanhita, 2023, Sections 3(5) & 190; Barendra Kumar Ghosh (1925) 52 IA 40',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Statutory Group Liability'
    },
    tags: ['criminal-law-bns', 'common-intention', 'common-object', 'bns-section-3-5', 'bns-section-190', 'barendra-kumar-ghosh', 'joint-liability']
  },

  {
    id: 'dict-criminal-conspiracy',
    term: 'Criminal Conspiracy (BNS Section 61)',
    category: 'Substantive Doctrine',
    subCategory: 'Inchoate Crimes & Joint Enterprise',
    jurisdiction: 'India (Bharatiya Nyaya Sanhita, 2023 / IPC)',
    language: 'English (Indian Penal Jurisprudence)',
    pronunciation: 'krim-ih-nul kun-speer-uh-see',
    literalTranslation: 'Conspirare / Breathing together in an agreement.',
    conciseDefinition: 'An inchoate criminal offence committed when two or more persons agree to do, or cause to be done, an illegal act or an act which is not illegal by illegal means, where the agreement itself constitutes the completed substantive offence.',
    detailedMeaning: 'Under Section 61 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 120A/120B IPC), the essence of criminal conspiracy is the unlawful agreement between two or more minds. Where the agreement is to commit a crime, no overt act in pursuance thereof is required; the criminal agreement itself is punishable. Because conspiracies are hatched in secret, direct evidence is rarely available; the prosecution may prove conspiracy through circumstantial evidence under Section 10 of the Bharatiya Sakshya Adhiniyam, 2023 (Section 10 Indian Evidence Act), where the acts and declarations of any co-conspirator are admissible against all.',
    hindiExplanation: 'आपराधिक षड्यंत्र (Criminal Conspiracy) BNS की धारा 61 (पूर्व धारा 120A/120B IPC) के तहत एक अत्यंत गंभीर और स्वतंत्र अपराध है। जब दो या दो से अधिक व्यक्ति मिलकर कोई अवैध कार्य करने या किसी वैध कार्य को अवैध साधनों द्वारा करने के लिए "सहमति" (Agreement) बनाते हैं, तो वह सहमति बनते ही आपराधिक षड्यंत्र का अपराध पूरा हो जाता है। यदि षड्यंत्र किसी अपराध को अंजाम देने के लिए है, तो उसके लिए कोई वास्तविक हमला या चोरी होना जरूरी नहीं है; केवल सहमति ही सजा के लिए पर्याप्त है।',
    etymologyAndHistory: 'Developed in English Star Chamber cases (Poulterers Case, 1611) and codified into the Indian Penal Code by the Criminal Law Amendment Act, 1913. Preserved in Section 61 of the Bharatiya Nyaya Sanhita, 2023.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 — Section 61 (Criminal Conspiracy); Bharatiya Sakshya Adhiniyam, 2023 — Section 10 (Things said or done by conspirator in reference to common design).',
    essentialElements: [
      'Two or More Persons: An individual cannot conspire with themselves.',
      'Agreement: A shared consensus ad idem between the parties.',
      'Illegal Object or Means: To do an illegal act or an act by illegal means.',
      'Overt Act Rule: If the agreement is to commit an offence, no overt act is needed; if the agreement is to do an act not an offence, some overt act must be done in pursuance thereof.'
    ],
    practicalScenarios: [
      {
        title: 'Meeting in a Hotel to Plan an Arms Robbery',
        facts: 'Three persons meet in a hotel room and finalize a written plan to rob a cash transit van on Monday. Police raid the hotel on Sunday and seize the plans and floor maps before any robbery occurs.',
        issue: 'Can the three persons be convicted of Criminal Conspiracy under Section 61 BNS?',
        rule: 'An agreement to commit an offence is a completed crime the moment the agreement is reached.',
        application: 'The seizure of plans proves the agreement; all are convicted of criminal conspiracy.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'State (NCT of Delhi) v. Navjot Sandhu (Parliament Attack Case)',
        citation: '(2005) 11 SCC 600',
        court: 'Supreme Court of India',
        ratioDecidendi: 'A conspiracy is hatched in secrecy and executed in darkness. Direct evidence is seldom available; its existence must be deduced from the cumulative effect of circumstantial evidence, mobile phone calls, and joint movements.',
        relevance: 'The benchmark modern judgment on standard of proof in criminal conspiracy.'
      },
      {
        caseName: 'Kehar Singh v. State (Delhi Administration)',
        citation: '(1988) 3 SCC 609',
        court: 'Supreme Court of India',
        ratioDecidendi: 'The most important ingredient of conspiracy is the agreement between two or more persons. Meeting of minds is essential; mere association or friendship with an accused does not establish conspiracy.',
        relevance: 'Reaffirmed that guilt cannot be inferred from mere association.'
      }
    ],
    exceptionsAndMisconceptions: 'Mere knowledge of a conspiracy or passive silence without agreement does not make a person a co-conspirator.',
    litigationApplication: 'Routinely added in police chargesheets to rope in masterminds, financiers, and conspirators who were physically absent from the crime scene. Defence advocates cross-examine on Section 10 BSA agency principles.',
    relatedTerms: [
      { term: 'Common Intention', id: 'dict-common-intention-vs-object', relationship: 'Conspiracy is an agreement prior to execution.' },
      { term: 'Mens Rea', id: 'dict-mens-rea-criminal-intent', relationship: 'The shared mental agreement.' }
    ],
    faqs: [
      {
        q: 'If all other co-conspirators are acquitted, can a single accused remain convicted of conspiracy?',
        a: 'No. Since conspiracy requires at least two persons, if all other alleged conspirators are acquitted on merits, a single remaining accused cannot be convicted of conspiracy (Topandas v. State of Bombay).'
      }
    ],
    examNotes: 'Differentiate Section 61 BNS (Criminal Conspiracy) from Section 3(5) BNS (Common Intention). Explain Section 10 BSA (Agency rule in conspiracy).',
    sourceProvenance: {
      primarySource: 'Bharatiya Nyaya Sanhita, 2023, Section 61; Navjot Sandhu (2005) 11 SCC 600',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Statutory Inchoate Offence'
    },
    tags: ['criminal-law-bns', 'criminal-conspiracy', 'bns-section-61', 'navjot-sandhu', 'agreement', 'inchoate-crimes']
  },

  {
    id: 'dict-private-defence-necessity',
    term: 'Right of Private Defence & Necessity (BNS Sections 34–44)',
    category: 'Substantive Doctrine',
    subCategory: 'General Exceptions to Criminal Liability',
    jurisdiction: 'India (Bharatiya Nyaya Sanhita, 2023 / IPC)',
    language: 'English (Indian Penal Jurisprudence)',
    pronunciation: 'pry-vit dih-fens and nuh-ses-ih-tee',
    literalTranslation: 'Vim vi repellere licet (It is lawful to repel force by force).',
    conciseDefinition: 'A statutory general exception permitting an individual to use reasonable and proportional force, including in extreme circumstances causing death, to defend their own body, the body of another, or property against unlawful aggression where state protection is not immediately accessible.',
    detailedMeaning: 'Under Sections 34 to 44 of the Bharatiya Nyaya Sanhita, 2023 (formerly Sections 96 to 106 IPC), nothing is an offence which is done in the exercise of the right of private defence. It is a defensive right, not a retributive or punitive license. The right commences as soon as a reasonable apprehension of danger arises from an attempt or threat to commit the offence, and continues as long as that apprehension lasts. Under Section 38 BNS, the right extends to voluntarily causing death if the assault creates reasonable apprehension of death, grievous hurt, rape, unnatural lust, kidnapping/abduction, acid attack, or wrongful confinement.',
    hindiExplanation: 'आत्मरक्षा का अधिकार (Right of Private Defence - BNS धारा 34 से 44): कानून किसी भी नागरिक को कायर बनने के लिए बाध्य नहीं करता। यदि किसी व्यक्ति या उसके परिवार/संपत्ति पर कोई जानलेवा हमला होता है और तुरंत पुलिस सहायता उपलब्ध नहीं है, तो वह बलपूर्वक अपना या किसी अन्य व्यक्ति का बचाव करने के लिए उचित बल प्रयोग कर सकता है। BNS की धारा 38 के तहत यदि हमले से मृत्यु, गंभीर चोट, बलात्कार, अपहरण या एसिड अटैक की उचित आशंका उत्पन्न हो जाए, तो आत्मरक्षा में हमलावर की जान लेना भी कानूनी रूप से क्षम्य है।',
    etymologyAndHistory: 'Traced to the Roman law principle "Vim vi repellere licet" and English Common Law self-defence doctrines. Formulated comprehensively by Macaulay in 1860 and modernized in Sections 34–44 of the BNS 2023.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 — Sections 34 to 44; Indian Penal Code, 1860 — Sections 96 to 106; Bharatiya Sakshya Adhiniyam, 2023 — Section 108 (Burden of proving exceptions).',
    essentialElements: [
      'Reasonable Apprehension: Imminent danger to life, body, or property creating genuine apprehension.',
      'No Recourse to Public Authorities: State police protection is not immediately accessible in time to prevent the harm.',
      'Proportionality of Force: The force used must not be more than is necessary for the purpose of defence.',
      'No Right Against Legal Acts: No right of private defence against acts of public servants acting in good faith under color of office.',
      'No Retribution: The right ceases the moment the attacker flees or the threat terminates.'
    ],
    practicalScenarios: [
      {
        title: 'Defending Against Nighttime Armed Housebreak with Deadly Force',
        facts: 'Armed intruders break into a home at 2:00 AM wielding machetes. The homeowner fires a licensed gun, killing one intruder while the rest flee.',
        issue: 'Can the homeowner claim the right of private defence under Section 41 BNS?',
        rule: 'Under Section 41 BNS, private defence of property extends to causing death in cases of house-breaking by night or robbery accompanied by threat of death.',
        application: 'The homeowner is entitled to full acquittal under general exceptions.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Darshan Singh v. State of Punjab',
        citation: '(2010) 2 SCC 333',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Laid down 10 comprehensive principles governing the right of private defence. A person who is faced with imminent danger is not expected to weigh his blows in golden scales; he cannot be expected to modulate his defence with mathematical precision.',
        relevance: 'The modern locus classicus governing self-defence in Indian criminal law.'
      },
      {
        caseName: 'Munshi Ram v. Delhi Administration',
        citation: 'AIR 1968 SC 702',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Even if the accused does not explicitly plead private defence in his Section 313 statement, the court is bound to consider it if it arises from the prosecution evidence.',
        relevance: 'Affirmed that private defence can be culled out from the record by the court suo motu.'
      }
    ],
    exceptionsAndMisconceptions: 'There is no right of private defence where there is ample time to seek the protection of public authorities, nor does it apply in a free-fight between two armed groups eager to clash without legitimate defensive need.',
    litigationApplication: 'Pivotal defence in murder trials. Accused must establish private defence on a preponderance of probabilities under Section 108 BSA to secure outright acquittal or reduce the charge under Exception 2 to Section 101 BNS.',
    relatedTerms: [
      { term: 'Actus Non Facit Reum', id: 'dict-actus-non-facit-reum', relationship: 'General exceptions negate criminal liability.' },
      { term: 'Culpable Homicide vs Murder', id: 'dict-culpable-homicide-vs-murder', relationship: 'Exceeding private defence reduces murder to culpable homicide.' }
    ],
    faqs: [
      {
        q: 'Does an accused have to prove self-defence beyond reasonable doubt?',
        a: 'No. The prosecution must prove guilt beyond reasonable doubt; the accused only needs to establish private defence on a "preponderance of probabilities" (Section 108 BSA).'
      }
    ],
    examNotes: 'High-yield criminal law topic. Memorize the 10 guidelines in Darshan Singh (2010). Detail the 7 circumstances under Section 38 BNS where private defence of body extends to causing death.',
    sourceProvenance: {
      primarySource: 'Bharatiya Nyaya Sanhita, 2023, Sections 34–44; Darshan Singh (2010) 2 SCC 333',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Statutory General Exception'
    },
    tags: ['criminal-law-bns', 'private-defence', 'self-defence', 'bns-sections-34-44', 'darshan-singh', 'general-exceptions']
  }
];
