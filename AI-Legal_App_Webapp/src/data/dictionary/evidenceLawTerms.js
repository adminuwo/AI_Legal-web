// ─── LAW OF EVIDENCE & FORENSICS (BSA / IEA) ───────────────────────────────
// Authoritative definitions, BSA vs IEA mappings, certificate requirements & precedents

export const EVIDENCE_LAW_TERMS = [
  {
    id: 'dict-burden-of-proof-onus',
    term: 'Burden of Proof vs Onus of Proof (BSA Sec 104–106)',
    category: 'Substantive Doctrine',
    subCategory: 'Evidentiary Standards & Legal Presumptions',
    jurisdiction: 'India (Bharatiya Sakshya Adhiniyam, 2023 / IEA)',
    language: 'English (Indian Evidence Jurisprudence)',
    pronunciation: 'bur-dun ov proof vur-sus oh-nus ov proof',
    literalTranslation: 'Burden of establishing a case (static) vs Onus of introducing evidence (shifting).',
    conciseDefinition: 'The fundamental evidentiary distinction between the legal burden of proof (which remains fixed throughout the trial on the party asserting the affirmative of the issue) and the evidential onus of proof (which continuously shifts from one party to the other as evidence is adduced).',
    detailedMeaning: 'Under Section 104 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 101 Indian Evidence Act), whoever desires any court to give judgment as to any legal right or liability dependent on the existence of facts which they assert, must prove that those facts exist. This is the legal "Burden of Proof" (Burden of establishing the case). It never shifts; in criminal trials, it rests permanently on the prosecution to prove guilt beyond reasonable doubt. In contrast, under Section 105 and 106 BSA (formerly Sections 102 and 103 IEA), the "Onus of Proof" (the burden of adducing evidence) shifts back and forth between the parties like a pendulum. Under Section 109 BSA (formerly Section 106 IEA), when any fact is especially within the knowledge of any person, the burden of proving that fact is upon them.',
    hindiExplanation: 'सबूत का भार बनाम सबूत पेश करने का दायित्व (Burden of Proof vs Onus of Proof - BSA धारा 104 से 106): भारतीय साक्ष्य विधि में यह अंतर समझना सबसे महत्वपूर्ण है। "सबूत का भार" (Burden of Proof - धारा 104 BSA) वह मुख्य कानूनी जिम्मेदारी है जो उस व्यक्ति पर होती है जो किसी अधिकार या अपराध का दावा करता है; यह भार मुकदमे की शुरुआत से अंत तक कभी नहीं बदलता (जैसे आपराधिक मामलों में आरोपी का दोष साबित करने का भार हमेशा अभियोजन/पुलिस पर ही रहता है)। जबकि "सबूत पेश करने का दायित्व" (Onus of Proof - धारा 105 BSA) एक पेंडुलम की तरह दोनों पक्षों के बीच लगातार बदलता रहता है। जैसे ही अभियोजन कोई ठोस सबूत पेश करता है, उसका खंडन करने का दायित्व आरोपी पर आ जाता है।',
    etymologyAndHistory: 'Formulated in Roman maxims ("Semper necessitas probandi incumbit ei qui agit" - the necessity of proof always lies with him who brings the charge). Systematized by Sir James Fitzjames Stephen in 1872 and reaffirmed in Sections 104–106 of the BSA 2023.',
    statutoryBasis: 'Bharatiya Sakshya Adhiniyam, 2023 — Section 104 (Burden of proof), Section 105 (On whom burden of proof lies), Section 106 (Burden of proof as to particular fact), Section 109 (Fact especially within knowledge); IEA Sections 101, 102, 103, 106.',
    essentialElements: [
      'Legal Burden (Sec 104 BSA): Static and fixed on the pleadings; never shifts during trial.',
      'Evidential Onus (Sec 105 BSA): Dynamic and shifts as soon as prima facie evidence is introduced.',
      'Criminal Standard: Prosecution must prove guilt beyond reasonable doubt; defence need only prove exceptions on preponderance of probabilities (Sec 108 BSA).',
      'Special Knowledge Rule (Sec 109 BSA): Applies when a fact is exclusively within the personal knowledge of the accused (e.g. what happened behind locked doors).'
    ],
    practicalScenarios: [
      {
        title: 'Wife Murder Behind Locked Doors with Husband',
        facts: 'A woman is found strangled inside a locked bedroom where only she and her husband were present. The husband claims an unknown intruder entered through the roof and killed her.',
        issue: 'Does the burden of explaining how the wife died fall on the husband under Section 109 BSA (Section 106 IEA)?',
        rule: 'Under Section 109 BSA, when a fact is especially within the knowledge of the accused, the burden of proving that fact shifts to them once the initial presence is proved.',
        application: 'The husband fails to offer any plausible explanation; the court draws an adverse inference and convicts him.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Addagada Raghavamma v. Addagada Chenchamma',
        citation: 'AIR 1964 SC 136',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'There is an essential distinction between burden of proof and onus of proof: Burden of proof lies upon the person who has to prove a fact and it never shifts; onus of proof shifts. Such a shifting of onus is a continuous process in the evaluation of evidence.',
        relevance: 'The definitive locus classicus on the distinction between burden of proof and onus of proof.'
      },
      {
        caseName: 'Shambhu Nath Mehra v. State of Ajmer',
        citation: 'AIR 1956 SC 404',
        court: 'Supreme Court of India (Vivian Bose J.)',
        ratioDecidendi: 'Section 106 cannot be used to relieve the prosecution of its primary duty to establish the accused guilt beyond reasonable doubt. It only applies to facts especially within the knowledge of the accused which the prosecution cannot discover.',
        relevance: 'Protected the presumption of innocence against misuse of Section 106 IEA / Section 109 BSA.'
      }
    ],
    exceptionsAndMisconceptions: 'Section 109 BSA (Section 106 IEA) does NOT shift the primary burden of proving murder onto the accused; the prosecution must first prove foundational facts establishing the accused presence and custody.',
    litigationApplication: 'Argued in final criminal arguments and civil trial submissions. Defence advocates scrutinize whether the prosecution has discharged its legal burden before the court can ask the defence to explain facts.',
    relatedTerms: [
      { term: 'Presumption of Innocence', id: 'dict-presumption-of-innocence', relationship: 'The constitutional bedrock dictating the burden of proof.' },
      { term: 'Doctrine of Estoppel', id: 'dict-estoppel-doctrine', relationship: 'Precludes a party from discharging their burden by contradicting earlier representations.' }
    ],
    faqs: [
      {
        q: 'What is the test to determine upon whom the onus of proof lies under Section 105 BSA?',
        a: 'The test is: if no evidence at all were given on either side, which party would fail? The party that would fail bears the evidential onus.'
      }
    ],
    examNotes: 'High-frequency question in Evidence Law. Reproduce the Raghavamma (1964) distinction verbatim: Burden of proof (fixed, Section 104 BSA) vs Onus of proof (shifting, Section 105 BSA). Explain Shambhu Nath Mehra (1956).',
    sourceProvenance: {
      primarySource: 'Bharatiya Sakshya Adhiniyam, 2023, Sections 104–109; Raghavamma (1964) 2 SCR 933',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Evidentiary Standard'
    },
    tags: ['evidence-law-bsa', 'burden-of-proof', 'onus-of-proof', 'bsa-section-104', 'bsa-section-109', 'raghavamma', 'shambhu-nath-mehra']
  },

  {
    id: 'dict-electronic-evidence-certificate',
    term: 'Electronic Evidence & Section 63 BSA Certificate',
    category: 'Procedural Term',
    subCategory: 'Digital Forensics & Admissibility of Records',
    jurisdiction: 'India (Bharatiya Sakshya Adhiniyam, 2023 / IEA)',
    language: 'English (Indian Evidence Law)',
    pronunciation: 'el-ek-tron-ik ev-ih-dens and ser-tif-ih-kayt',
    literalTranslation: 'Statutory certificate for admissibility of electronic records.',
    conciseDefinition: 'A mandatory statutory certificate signed by an authorized custodian of a computer system, server, or digital device certifying the integrity, hash value, and lawful operation of the device, which is an absolute condition precedent for admitting secondary electronic records into evidence.',
    detailedMeaning: 'Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act, 1872), electronic records—including WhatsApp chats, emails, CCTV footage, mobile phone CDRs, server logs, and audio recordings—are deemed to be documents. However, if the primary device (the physical phone or hard disk itself) is not produced before the court, any printout, copy, or exported digital media constitutes secondary electronic evidence. Under Section 63(4) BSA, such secondary electronic evidence is completely inadmissible in a court of law unless accompanied by a statutory Section 63 certificate signed by the person in lawful control of the device or an authorized expert (Arjun Panditrao mandate).',
    hindiExplanation: 'इलेक्ट्रॉनिक साक्ष्य और धारा 63 BSA प्रमाणपत्र (Section 63 BSA Certificate): आधुनिक युग में डिजिटल सबूत (जैसे व्हाट्सएप चैट, ईमेल, CCTV फुटेज, कॉल डिटेल रिकॉर्ड-CDR, ऑडियो-वीडियो रिकॉर्डिंग) मुकदमों में सबसे मुख्य साक्ष्य बन चुके हैं। भारतीय साक्ष्य अधिनियम (BSA 2023) की धारा 63 (पूर्व धारा 65B IEA) के अनुसार यदि मूल मोबाइल या हार्ड डिस्क के बजाय उसका प्रिंटआउट, पेनड्राइव या सीडी अदालत में पेश की जा रही है, तो उसके साथ धारा 63(4) के तहत एक "वैधानिक प्रमाणपत्र" (Certificate) लगाना अनिवार्य है। बिना इस सर्टिफिकेट के कोई भी डिजिटल सबूत अदालत में पूरी तरह अस्वीकार्य (Inadmissible) होता है।',
    etymologyAndHistory: 'Introduced by the Information Technology Act, 2000 under Section 65A/65B IEA to handle computer evidence. Clarified in Anvar P.V. (2014) and authoritatively settled by a 3-Judge Bench in Arjun Panditrao Khotkar (2020). Codified into Section 61 and 63 of the Bharatiya Sakshya Adhiniyam, 2023.',
    statutoryBasis: 'Bharatiya Sakshya Adhiniyam, 2023 — Section 61 (Admissibility of electronic records), Section 63 (Conditions of admissibility of electronic records & Certificate); Information Technology Act, 2000 — Section 2(t) & 79A.',
    essentialElements: [
      'Primary vs Secondary Digital Evidence: Producing the original device itself (under Section 57/62 BSA) requires no certificate; producing a copy, export, or printout strictly requires a certificate.',
      'Section 63(4) Certificate Conditions: Identifying the electronic record; describing device specifications; certifying that the computer was operating properly during the relevant period.',
      'Authorized Signatory: Signed by a person occupying a responsible official position in relation to the operation of the device or management of the relevant activities.',
      'Timing of Production: Must be filed along with the chargesheet or civil plaint, though the court may permit it subsequently before trial concludes.'
    ],
    practicalScenarios: [
      {
        title: 'Relying on WhatsApp Chat Screenshots in a Commercial Fraud Case',
        facts: 'A plaintiff files screenshots of WhatsApp conversations printed on A4 paper showing loan admissions by the defendant. The plaintiff does not produce the phone and fails to file a Section 63 BSA certificate.',
        issue: 'Can the court admit the WhatsApp printouts as evidence of loan admission?',
        rule: 'Under Section 63(4) BSA, secondary electronic records cannot be admitted without a signed statutory certificate.',
        application: 'The court rejects the WhatsApp printouts as completely inadmissible (Arjun Panditrao Khotkar).'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal',
        citation: '(2020) 7 SCC 1',
        court: 'Supreme Court of India (3-Judge Bench)',
        ratioDecidendi: 'The certificate required under Section 65B(4) is a condition precedent to the admissibility of secondary electronic evidence. Producing the original device itself dispenses with the certificate, but all copies or printouts require the certificate without exception.',
        relevance: 'The definitive locus classicus on electronic evidence across India, overruling Shafhi Mohammad.'
      },
      {
        caseName: 'Anvar P.V. v. P.K. Basheer',
        citation: '(2014) 10 SCC 473',
        court: 'Supreme Court of India (3-Judge Bench)',
        ratioDecidendi: 'Electronic evidence cannot be admitted under general secondary evidence provisions (Sections 63/65 IEA); Section 65B is a special complete code. In the absence of a Section 65B certificate, oral evidence to prove digital records is barred.',
        relevance: 'Overruled State (NCT of Delhi) v. Navjot Sandhu on digital evidence.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: If the person owning the phone refuses to sign a certificate, the party is not helpless; under Section 63(5) BSA and Section 94 BNSS, the party can apply to the court to issue a summons to the custodian or telecom service provider to produce the certificate.',
    litigationApplication: 'The #1 evidentiary objection in criminal trials and commercial arbitrations. If the prosecution fails to annex a Section 63 BSA certificate to Call Detail Records (CDRs) or CCTV footage, the entire electronic chain collapses.',
    relatedTerms: [
      { term: 'Electronic Evidence Admissibility', id: 'upd-bsa-sec-63-electronic-evidence', relationship: 'The full statutory update analyzing BSA Section 63.' },
      { term: 'Presumption of Innocence', id: 'dict-presumption-of-innocence', relationship: 'Digital evidence must meet strict standards to displace innocence.' }
    ],
    faqs: [
      {
        q: 'What should be the content of a Section 63 BSA Certificate?',
        a: 'It must specify the electronic record, state the make and model of the device, confirm the device was in regular lawful use, state that data was produced during the ordinary course of activities, and confirm the system was operating properly.'
      }
    ],
    examNotes: 'The most important modern evidence topic. Memorize Arjun Panditrao Khotkar (2020) and Anvar P.V. (2014). Note that under Section 63 BSA 2023, hash value verification and cloud backup norms are explicitly integrated.',
    sourceProvenance: {
      primarySource: 'Bharatiya Sakshya Adhiniyam, 2023, Section 63; Arjun Panditrao Khotkar (2020) 7 SCC 1',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Digital Evidence Code'
    },
    tags: ['evidence-law-bsa', 'electronic-evidence', 'bsa-section-63', 'section-65b', 'arjun-panditrao', 'digital-forensics', 'cctv', 'whatsapp']
  },

  {
    id: 'dict-dying-declaration-bsa',
    term: 'Dying Declaration (BSA Section 26(a))',
    category: 'Substantive Doctrine',
    subCategory: 'Admissibility of Hearsay Exceptions',
    jurisdiction: 'India (Bharatiya Sakshya Adhiniyam, 2023 / IEA)',
    language: 'Latin Maxim / English Evidence Law',
    pronunciation: 'dy-ing dek-luh-ray-shun',
    literalTranslation: 'Nemo moriturus praesumitur mentiri (A person who is about to die is presumed not to lie).',
    conciseDefinition: 'A statement, written or verbal, made by a person as to the cause of their death, or as to any of the circumstances of the transaction which resulted in their death, admissible in evidence in cases where the cause of that person death comes into question.',
    detailedMeaning: 'Under Section 26(a) of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 32(1) Indian Evidence Act), a Dying Declaration forms an exceptional statutory deviation from the rule excluding hearsay evidence. The doctrine is based on the sacred presumption that a person on the threshold of death, facing their Creator, will not utter a falsehood. Under Indian law, unlike English law, it is NOT necessary that the deceased was under an expectation of imminent death (in extremis) when making the statement. A dying declaration alone, if found truthful, voluntary, and untutored by the court, can form the sole basis of a conviction for murder without requiring independent corroboration (Atbir v. Govt. of NCT of Delhi).',
    hindiExplanation: 'मृत्युकालिक कथन (Dying Declaration - BSA धारा 26(a)): साक्ष्य विधि का यह एक अत्यंत पवित्र और अपवाद स्वरूप नियम है। इसका लैटिन सिद्धांत है "Nemo moriturus praesumitur mentiri", जिसका अर्थ है "मरने वाला व्यक्ति झूठ नहीं बोलता"। यदि कोई मृत व्यक्ति अपनी मृत्यु से पूर्व अपनी मौत के कारणों या उन परिस्थितियों के बारे में कोई मौखिक या लिखित बयान देकर जाता है जिसकी वजह से उसकी मृत्यु हुई, तो वह बयान उसकी मृत्यु के मुकदमे में अत्यंत ठोस सबूत माना जाता है। भारत में अंग्रेजी कानून के विपरीत यह जरूरी नहीं है कि बयान देते समय व्यक्ति को अपनी तत्काल मौत का निश्चित अहसास हो। यदि बयान स्वैच्छिक और सच्चा है, तो केवल एक डाइंग डिक्लेरेशन के आधार पर भी हत्यारे को फांसी या उम्रकैद की सजा दी जा सकती है।',
    etymologyAndHistory: 'Classical Common Law doctrine formulated in R v. Woodcock (1789) by Eyre C.B. Broadened by Macaulay in Section 32(1) of the Indian Evidence Act 1872 by removing the English requirement of immediate expectation of death, preserved in Section 26(a) BSA 2023.',
    statutoryBasis: 'Bharatiya Sakshya Adhiniyam, 2023 — Section 26(a); Indian Evidence Act, 1872 — Section 32(1).',
    essentialElements: [
      'Cause of Death: The statement must relate to the cause of the maker death or the circumstances resulting in death.',
      'Death of Maker: The person making the statement must actually have died subsequently.',
      'Fit State of Mind: The declarant must be in a fit, conscious, and compos mentis state to narrate the facts (doctor certification).',
      'Untutored: Free from tutoring, prompting, or coaching by family members or police.',
      'Form of Declaration: Can be oral, written, recorded by magistrate, or conveyed by signs and gestures (Queen-Empress v. Abdullah).'
    ],
    practicalScenarios: [
      {
        title: 'Burn Injury Statement Recorded by Judicial Magistrate',
        facts: 'A dowry victim admitted to hospital with 80% burns tells the attending doctor her in-laws poured kerosene. The Executive/Judicial Magistrate records her statement in Q&A form with doctor fitness certificate before she dies.',
        issue: 'Can the in-laws be convicted of murder based solely on this dying declaration?',
        rule: 'A dying declaration recorded by a magistrate following proper medical certification can form the sole foundation of conviction.',
        application: 'The court convicts the in-laws under Section 103 BNS without needing independent eyewitness corroboration.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Atbir v. Govt. of NCT of Delhi',
        citation: '(2010) 9 SCC 1',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Laid down 10 golden principles governing dying declarations: A dying declaration can be the sole basis of conviction if found credible; it does not require corroboration as a rule of law; where multiple dying declarations exist, courts must scrutinize them for consistency.',
        relevance: 'The modern locus classicus governing dying declarations in Indian criminal trials.'
      },
      {
        caseName: 'Sharad Birdhichand Sarda v. State of Maharashtra',
        citation: '(1984) 4 SCC 116',
        court: 'Supreme Court of India (3-Judge Bench)',
        ratioDecidendi: 'Letters written by a married woman months before her unnatural death complaining of torture by in-laws are admissible under Section 32(1) as circumstances of the transaction resulting in her death.',
        relevance: 'Expanded the scope of "circumstances of the transaction" to prior letters and diaries.'
      }
    ],
    exceptionsAndMisconceptions: 'If the declarant survives, the statement ceases to be a dying declaration under Section 26(a) BSA; it can only be used as a previous statement to contradict (Section 148 BSA) or corroborate (Section 160 BSA) the witness.',
    litigationApplication: 'Defence advocates closely cross-examine the recording doctor regarding the sedatives administered, consciousness level, pulse rate, and presence of relatives near the bed at the time of recording to establish tutoring.',
    relatedTerms: [
      { term: 'Res Gestae', id: 'dict-res-gestae-doctrine', relationship: 'Spontaneous statements made during the transaction.' },
      { term: 'Culpable Homicide vs Murder', id: 'dict-culpable-homicide-vs-murder', relationship: 'The substantive offence proven by dying declarations.' }
    ],
    faqs: [
      {
        q: 'Can gestures and nodding by an injured person unable to speak constitute a valid Dying Declaration?',
        a: 'Yes. In the historic Queen-Empress v. Abdullah (1885), the Allahabad High Court held that where a victim whose throat was slit nodded her head in response to questions naming her assailant, the signs constituted a valid dying declaration.'
      }
    ],
    examNotes: 'High-frequency exam topic. Differentiate Indian law (no expectation of death needed) from English law (strict expectation of imminent death required). Cite Atbir (2010) and Sharad Birdhichand Sarda (1984).',
    sourceProvenance: {
      primarySource: 'Bharatiya Sakshya Adhiniyam, 2023, Section 26(a); Atbir v. Govt. of NCT of Delhi (2010) 9 SCC 1',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Statutory Hearsay Exception'
    },
    tags: ['evidence-law-bsa', 'dying-declaration', 'bsa-section-26-a', 'section-32-1', 'atbir', 'hearsay-exception', 'murder-evidence']
  },

  {
    id: 'dict-estoppel-doctrine',
    term: 'Doctrine of Estoppel (BSA Section 121)',
    category: 'Substantive Doctrine',
    subCategory: 'Rules of Evidence & Equitable Rights',
    jurisdiction: 'India (Bharatiya Sakshya Adhiniyam, 2023 / IEA)',
    language: 'Anglo-French / English Common Law',
    pronunciation: 'es-top-ul dok-trin',
    literalTranslation: 'Estoppe / Stopped or shut of mouth.',
    conciseDefinition: 'A rule of evidence and equity providing that when one person has, by their declaration, act, or omission, intentionally caused or permitted another person to believe a thing to be true and to act upon such belief, neither they nor their representative can deny the truth of that thing in subsequent legal proceedings.',
    detailedMeaning: 'Codified in Section 121 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 115 Indian Evidence Act), the Doctrine of Estoppel is based on the equitable principle that it would be fraudulent and unjust to allow a party to deny the truth of a representation after inducing another to alter their position relying upon it. Estoppel is primarily a rule of evidence, not an independent cause of action (estoppel is a shield, not a sword), although Promissory Estoppel has evolved in administrative law into a substantive cause of action against the government to enforce legitimate expectations.',
    hindiExplanation: 'विबंधन का सिद्धांत (Doctrine of Estoppel - BSA धारा 121): इसका शाब्दिक अर्थ है "मुंह बंद कर देना"। यह साक्ष्य विधि और न्याय का वह नियम है जो किसी व्यक्ति को अपनी ही कही हुई बात या किए गए आचरण से मुकरने से रोकता है। यदि किसी व्यक्ति ने अपने किसी बयान, वादे या आचरण द्वारा किसी दूसरे व्यक्ति को किसी बात का विश्वास दिलाया और उस दूसरे व्यक्ति ने उस विश्वास पर भरोसा करके अपना कोई कदम उठा लिया (जैसे पैसे खर्च कर दिए या जमीन खरीद ली), तो बाद में पहला व्यक्ति मुकर कर यह नहीं कह सकता कि "मेरी वह बात झूठी थी"। कानून उसे अपनी पुरानी बात से मुकरने की अनुमति नहीं देता।',
    etymologyAndHistory: 'Formulated by Lord Denman in Pickard v. Sears (1837): "Where one by his words or conduct wilfully causes another to believe the existence of a certain state of things, and induces him to act on that belief..." Codified in Section 115 IEA 1872 and preserved in Section 121 BSA 2023.',
    statutoryBasis: 'Bharatiya Sakshya Adhiniyam, 2023 — Section 121 (Estoppel), Section 122 (Estoppel of tenant), Section 123 (Estoppel of acceptor of bill of exchange); IEA Sections 115, 116, 117.',
    essentialElements: [
      'Representation: A clear, unequivocal declaration, act, or omission as to existing facts.',
      'Intention: Intentionally causing or permitting another person to believe the representation to be true.',
      'Action upon Belief: The other party acted upon the faith of that representation.',
      'Detrimental Alteration: The other party altered their position to their prejudice or detriment.',
      'Rule of Evidence: Shuts the mouth of the representor from denying the representation in court.'
    ],
    practicalScenarios: [
      {
        title: 'Landowner Permitting Construction by Misleading Title Representation',
        facts: 'A person knowingly stands by and tells a purchaser: "This plot belongs to my brother, you can purchase it and build a house." The purchaser buys from the brother and builds a factory. Later, the person sues the purchaser for eviction claiming the land actually belonged to him.',
        issue: 'Can the true owner evict the purchaser after misleading him?',
        rule: 'Under Section 121 BSA, the true owner is estopped by his own representation and conduct from asserting his title.',
        application: 'The suit is dismissed under the Doctrine of Estoppel.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Motilal Padampat Sugar Mills v. State of U.P.',
        citation: '(1979) 2 SCC 409',
        court: 'Supreme Court of India (P.N. Bhagwati J.)',
        ratioDecidendi: 'Promissory estoppel can be the basis of a cause of action against the State. Where the government makes a clear representation to grant sales tax exemption for 3 years, and an enterprise sets up a factory acting upon it, the State cannot resile from its promise.',
        relevance: 'The landmark ruling establishing Promissory Estoppel against the government in India.'
      },
      {
        caseName: 'B.L. Sreedhar v. K.M. Munireddy',
        citation: '(2003) 2 SCC 355',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Estoppel is based on the maxim "allegans contraria non est audiendus" (a person alleging contrary things is not to be heard). Estoppel is an equitable rule designed to prevent fraud and promote justice.',
        relevance: 'Authoritatively analyzed the classical ingredients of Section 115 IEA / Section 121 BSA.'
      }
    ],
    exceptionsAndMisconceptions: 'Vital exceptions: (1) No Estoppel Against a Statute (there can be no estoppel against an Act of Parliament or constitutional provision); (2) No Estoppel on a pure question of law; (3) No Estoppel against a minor (a minor misrepresenting their age is not estopped from pleading minority under Section 11 Contract Act - Mohori Bibee).',
    litigationApplication: 'Pleaded in Written Statements in civil suits, property title disputes, and administrative writ petitions enforcing government industrial subsidies and tax incentives.',
    relatedTerms: [
      { term: 'Promissory Estoppel', id: 'dict-promissory-estoppel-contract', relationship: 'The substantive contractual application of estoppel.' },
      { term: 'Res Judicata', id: 'dict-res-judicata', relationship: 'Res Judicata is estoppel by record.' }
    ],
    faqs: [
      {
        q: 'Can the Government claim immunity from Promissory Estoppel?',
        a: 'The Government can only resile from a promissory representation if it establishes that overwhelming public interest or national emergency overrides the equity in favor of the citizen (MP Sugar Mills).'
      }
    ],
    examNotes: 'High-frequency question in Evidence and Administrative Law. Master the 3 exceptions: No estoppel against law, no estoppel against sovereign public duty, and no estoppel against a minor. Cite Pickard v. Sears (1837) and MP Sugar Mills (1979).',
    sourceProvenance: {
      primarySource: 'Bharatiya Sakshya Adhiniyam, 2023, Section 121; Motilal Padampat Sugar Mills (1979) 2 SCC 409',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Evidentiary Rule'
    },
    tags: ['evidence-law-bsa', 'estoppel', 'bsa-section-121', 'section-115', 'promissory-estoppel', 'motilal-padampat', 'equity']
  },

  {
    id: 'dict-res-gestae-doctrine',
    term: 'Doctrine of Res Gestae (BSA Section 4)',
    category: 'Substantive Doctrine',
    subCategory: 'Relevancy of Facts Forming Part of Same Transaction',
    jurisdiction: 'India (Bharatiya Sakshya Adhiniyam, 2023 / IEA)',
    language: 'Latin / English Evidence Law',
    pronunciation: 'rayz jes-ty',
    literalTranslation: 'Things done / Transaction as a spontaneous whole.',
    conciseDefinition: 'A rule of evidence providing that facts which, though not in issue, are so connected with a fact in issue as to form part of the same transaction, are relevant and admissible, whether they occurred at the same time and place or at different times and places.',
    detailedMeaning: 'Under Section 4 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 6 Indian Evidence Act), Res Gestae forms a celebrated exception to the rule excluding hearsay evidence. It admits spontaneous statements, shouts, cries of bystanders, and contemporaneous physical acts that occur concurrently with the event. The justification is spontaneity: the statement must be a spontaneous and uncalculated reaction to the startling event, made so contemporary with the act that there was no opportunity for fabrication, deliberation, or concoction. If there is an interval of time permitting reflection, the statement loses its res gestae character and becomes inadmissible hearsay.',
    hindiExplanation: 'रेस जेस्टे का सिद्धांत (Doctrine of Res Gestae - BSA धारा 4): इसका शाब्दिक अर्थ है "एक ही संव्यवहार (Transaction) का हिस्सा बनने वाले तथ्य"। सामान्य नियम यह है कि अदालत में सुनी-सुनाई बातें (Hearsay Evidence) मान्य नहीं होतीं। लेकिन रेस जेस्टे इसका एक प्रमुख अपवाद है। यदि किसी अपराध या घटना के घटित होते समय आसपास खड़े लोगों की चीख-पुकार, तत्काल कही गई बातें, या तुरंत की गई शारीरिक हरकतें उस घटना से इतनी गहराई से जुड़ी हों कि वे उसी घटना का हिस्सा बन जाएं, तो वे अदालत में वैध साक्ष्य मानी जाती हैं। शर्त केवल यह है कि बयान पूरी तरह स्वाभाविक (Spontaneous) होना चाहिए और उसमें सोच-समझकर झूठी कहानी बनाने का समय न मिला हो।',
    etymologyAndHistory: 'Developed in English Common Law to capture the totality of a crime scene. Authoritatively tested in R v. Bedingfield (1879) (strict contemporaneous test) and modernized by the Privy Council in Ratten v. R (1972). Codified in Section 4 of the BSA 2023.',
    statutoryBasis: 'Bharatiya Sakshya Adhiniyam, 2023 — Section 4 (Relevancy of facts forming part of same transaction); Indian Evidence Act, 1872 — Section 6.',
    essentialElements: [
      'Same Transaction: The fact or statement must be part of the continuous transaction in issue.',
      'Contemporaneity & Spontaneity: Uttered concurrently with the event or immediately thereafter under the stress of excitement.',
      'No Opportunity for Fabrication: The time interval must be so negligible as to exclude deliberate invention.',
      'Spontaneous Reaction: The statement must be an instinctive reaction, not a narrative of past history.'
    ],
    practicalScenarios: [
      {
        title: 'Emergency Phone Call: "Get me the police please, he is shooting!"',
        facts: 'A terrified woman calls a telephone exchange operator sobbing: "Get me the police please, 133 Camden Street, he is shooting!" The line goes dead. Five minutes later, police arrive and find the woman shot dead by her husband.',
        issue: 'Is the phone operator testimony of what the woman shouted admissible, or is it excluded as hearsay?',
        rule: 'Under the Doctrine of Res Gestae, a statement forced out by the startling occurrence without time for concoction is admissible as part of the transaction.',
        application: 'The Privy Council in Ratten v. R admitted the statement under Res Gestae to convict the husband.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Gentela Vijayavardhan Rao v. State of A.P.',
        citation: '(1996) 6 SCC 241',
        court: 'Supreme Court of India',
        ratioDecidendi: 'The principle of res gestae embodied in Section 6 is an exception to the hearsay rule. The statement must be contemporaneous with the acts which constitute the offence; a statement recorded after the fire had been extinguished and the victims had reached the hospital was not res gestae.',
        relevance: 'The leading Indian authority enforcing the strict test of contemporaneity for Res Gestae.'
      },
      {
        caseName: 'Ratten v. The Queen',
        citation: '[1972] AC 378',
        court: 'Privy Council (Lord Wilberforce)',
        ratioDecidendi: 'The test of res gestae is not whether the words were uttered at the exact second of the shooting, but whether the statement was made in conditions of involvement and pressure of the event so as to exclude the possibility of concoction.',
        relevance: 'The international common law benchmark modernizing Res Gestae.'
      }
    ],
    exceptionsAndMisconceptions: 'Narratives of past events: If a victim is assaulted and tells a friend 3 hours later what happened, that narrative is NOT res gestae; it is post-factum hearsay and can only be used under Section 160 BSA for corroboration.',
    litigationApplication: 'Proving cries of eye-witnesses at the scene of an accident, frantic calls to emergency police helpline (112), and spontaneous reactions of crowds during riots.',
    relatedTerms: [
      { term: 'Dying Declaration', id: 'dict-dying-declaration-bsa', relationship: 'Statements regarding cause of death (Section 26(a) BSA).' },
      { term: 'Burden of Proof', id: 'dict-burden-of-proof-onus', relationship: 'Prosecution must establish res gestae connection.' }
    ],
    faqs: [
      {
        q: 'What is the English Bedingfield Case and why is it criticized?',
        a: 'In R v. Bedingfield (1879), a woman with her throat cut staggered out of a room shouting "Oh dear aunt, see what Harry has done to me!" The court rigidly excluded the statement as not res gestae because the act was already completed. Ratten v. R overruled this hyper-technical view.'
      }
    ],
    examNotes: 'High-frequency Evidence Law topic. Contrast R v. Bedingfield (1879) with Ratten v. R (1972) and Gentela Vijayavardhan Rao (1996). Explain Section 4 BSA (Section 6 IEA).',
    sourceProvenance: {
      primarySource: 'Bharatiya Sakshya Adhiniyam, 2023, Section 4; Ratten v. R [1972] AC 378',
      officialUrl: 'https://www.mha.gov.in',
      verificationStatus: 'Verified Evidentiary Rule'
    },
    tags: ['evidence-law-bsa', 'res-gestae', 'bsa-section-4', 'section-6', 'same-transaction', 'hearsay-exception', 'ratten-v-r']
  },

  {
    id: 'dict-presumption-of-innocence',
    term: 'Presumption of Innocence & Reverse Burden Clauses',
    category: 'Substantive Doctrine',
    subCategory: 'Constitutional Criminal Jurisprudence',
    jurisdiction: 'India (Constitutional & Penal Law)',
    language: 'English (Golden Thread of Criminal Law)',
    pronunciation: 'pree-zump-shun ov in-oh-sens',
    literalTranslation: 'Ei incumbit probatio qui dicit, non qui negat (Proof lies upon him who asserts, not upon him who denies).',
    conciseDefinition: 'The cardinal rule of criminal justice holding that every person accused of a crime is presumed innocent until proven guilty beyond reasonable doubt by the prosecution, subject to limited statutory exceptions shifting the evidential burden.',
    detailedMeaning: 'Described by Viscount Sankey in Woolmington v. DPP (1935) as the "golden thread that runs throughout the web of the criminal law", the Presumption of Innocence is a recognized human right under Article 21 of the Indian Constitution and Article 14(2) of the ICCPR. The prosecution must prove every ingredient of the charge beyond reasonable doubt. However, modern special statutes—such as the POCSO Act (Sections 29 & 30), NDPS Act (Sections 35 & 54), PMLA (Section 24), and Prevention of Corruption Act (Section 20)—contain "Reverse Burden Clauses" where, once foundational facts are established, the court presumes guilt, shifting the burden onto the accused to prove innocence on a preponderance of probabilities.',
    hindiExplanation: 'निर्दोषता की उपधारणा और विपरीत भार (Presumption of Innocence & Reverse Burden Clauses): यह आपराधिक न्याय का सबसे पवित्र "स्वर्णिम धागा" (Golden Thread) है, जिसके अनुसार जब तक किसी आरोपी के खिलाफ अपराध संदेह से परे साबित न हो जाए, तब तक कानून उसे पूरी तरह "निर्दोष" मानता है। अभियोजन को ही हर आरोप साबित करना होता है। लेकिन कुछ विशेष कानूनों (जैसे POCSO एक्ट, NDPS नशा निरोधक कानून, PMLA मनी लॉन्ड्रिंग और भ्रष्टाचार निवारण अधिनियम) में संसद ने "रिवर्स बर्डन" (उलटा भार) का प्रावधान किया है, जिसमें प्रतिबंधित वस्तु (जैसे ड्रग्स या बेहिसाब नकदी) बरामद होने पर अदालत पहले ही मान लेती है कि आरोपी दोषी है, और अपनी बेगुनाही साबित करने का जिम्मा आरोपी पर आ जाता है।',
    etymologyAndHistory: 'Traced to Roman law in Ulpian Digest (D. 48.19.5): "Satius enim esse impunitum relinqui facinus nocentis quam innocentem damnari" (Better that the crime of a guilty person should go unpunished than an innocent person should be condemned). Immortalized in Woolmington v. DPP (1935).',
    statutoryBasis: 'Constitution of India — Article 21; Bharatiya Sakshya Adhiniyam, 2023 — Sections 104, 108, 117–120; NDPS Act, 1985 — Sections 35 & 54; POCSO Act, 2012 — Section 29.',
    essentialElements: [
      'Golden Thread Rule: Prosecution must prove every element of the crime beyond reasonable doubt.',
      'Benefit of Doubt: Any genuine, reasonable doubt in the prosecution case must resolve in favor of the accused.',
      'Reverse Burden Trigger: Statutory presumption operates only AFTER the prosecution proves the foundational facts.',
      'Accused Standard of Rebuttal: Accused can rebut the statutory presumption on a mere "preponderance of probabilities".'
    ],
    practicalScenarios: [
      {
        title: 'Recovery of Commercial Quantity of Heroin from a Suitcase',
        facts: 'Police intercept a traveler with 2 kg of heroin in a hidden compartment of their suitcase. Under Section 35 and 54 of the NDPS Act, a statutory presumption of culpable mental state and possession arises against the accused.',
        issue: 'Must the prosecution prove that the traveler knew the heroin was inside the suitcase?',
        rule: 'Once physical recovery (foundational fact) is proved, the statutory presumption shifts the burden onto the accused to prove lack of knowledge.',
        application: 'The accused must show on a preponderance of probabilities that the suitcase was handed to them locked by a third party without knowledge.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Noor Aga v. State of Punjab',
        citation: '(2008) 16 SCC 417',
        court: 'Supreme Court of India',
        ratioDecidendi: 'The presumption of innocence is a human right protected under Article 21. While reverse burden clauses in the NDPS Act are constitutional, the foundational facts must be strictly proved by the prosecution before the presumption can be triggered, and the accused can rebut it by preponderance of probability.',
        relevance: 'The leading authority harmonizing reverse burden clauses with Article 21 human rights.'
      },
      {
        caseName: 'Woolmington v. DPP',
        citation: '[1935] AC 462',
        court: 'House of Lords (Viscount Sankey)',
        ratioDecidendi: 'Throughout the web of English criminal law one golden thread is always to be seen—that it is the duty of the prosecution to prove the prisoner guilt. If at the end of the case there is reasonable doubt, the prisoner is entitled to an acquittal.',
        relevance: 'The international common law benchmark defining the presumption of innocence.'
      }
    ],
    exceptionsAndMisconceptions: 'A reverse burden does NOT relieve the prosecution of proving the initial search, seizure, and identity of the accused; if the recovery itself is doubtful, the presumption never arises.',
    litigationApplication: 'Crucial in bail hearings and trial defense in NDPS, PMLA, and POCSO cases, where advocates cross-examine investigating officers on seizure panchnamas to prevent the reverse presumption from triggering.',
    relatedTerms: [
      { term: 'Burden of Proof vs Onus', id: 'dict-burden-of-proof-onus', relationship: 'The mechanism through which innocence is tested.' },
      { term: 'Substantive Due Process', id: 'dict-substantive-due-process', relationship: 'Presumption of innocence is part of due process.' }
    ],
    faqs: [
      {
        q: 'Does an accused have to enter the witness box to rebut a reverse burden presumption?',
        a: 'No. The accused can rebut the statutory presumption through admissions elicited during the cross-examination of prosecution witnesses or by relying on circumstantial evidence on record.'
      }
    ],
    examNotes: 'Master Woolmington v. DPP (1935) and Noor Aga (2008). Explain the difference between "Proof beyond reasonable doubt" (prosecution) and "Preponderance of probabilities" (defence rebuttal).',
    sourceProvenance: {
      primarySource: 'Constitution of India, Article 21; Noor Aga v. State of Punjab (2008) 16 SCC 417',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Constitutional Evidentiary Doctrine'
    },
    tags: ['evidence-law-bsa', 'presumption-of-innocence', 'reverse-burden', 'ndps-act', 'pocso-act', 'noor-aga', 'woolmington', 'article-21']
  }
];
