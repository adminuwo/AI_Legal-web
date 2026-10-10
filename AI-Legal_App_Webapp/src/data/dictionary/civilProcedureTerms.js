// ─── CIVIL PROCEDURE, PLEADINGS & DECREES (CPC) ────────────────────────────
// Authoritative definitions, CPC provisions, execution mechanics & leading precedents

export const CIVIL_PROCEDURE_TERMS = [
  {
    id: 'dict-mesne-profits-cpc',
    term: 'Mesne Profits (CPC Section 2(12))',
    category: 'Procedural Term',
    subCategory: 'Property Restitution & Damages for Wrongful Possession',
    jurisdiction: 'India (Code of Civil Procedure, 1908)',
    language: 'Anglo-French / English Procedural Law',
    pronunciation: 'meen prof-its',
    literalTranslation: 'Intermediate profits / Profits earned during wrongful occupation.',
    conciseDefinition: 'Those profits which the person in wrongful possession of immovable property actually received, or might with ordinary diligence have received therefrom, together with interest on such profits, payable to the rightful owner upon eviction.',
    detailedMeaning: 'Under Section 2(12) of the Code of Civil Procedure, 1908, Mesne Profits represent compensation for the deprivation of the rightful owner use and occupation of immovable property by an unauthorized occupant or tenant holding over after termination of lease. The calculation is based not on what the rightful owner would have made, but on what the wrongful possessor actually received or might with ordinary diligence have received, excluding profits due to permanent improvements made by the possessor. Under Order XX Rule 12 CPC, the court may pass a preliminary decree for possession and direct an inquiry into future mesne profits up to eviction.',
    hindiExplanation: 'मध्यवर्ती लाभ या अंतःकालीन लाभ (Mesne Profits - CPC धारा 2(12)): जब कोई व्यक्ति किसी अचल संपत्ति (जैसे मकान, दुकान या जमीन) पर गैर-कानूनी या अनधिकृत कब्जा (Wrongful Possession) करके बैठा रहता है (जैसे किराया अनुबंध खत्म होने के बाद भी मकान खाली न करने वाला किरायेदार), तो उस अनधिकृत कब्जे के दौरान उसने उस संपत्ति से वास्तव में जो भी किराया या मुनाफा कमाया, या साधारण समझदारी से जो कमा सकता था, ब्याज सहित वह पूरी रकम असली मालिक को हर्जाने के रूप में देनी होती है। इसे ही मध्यवर्ती लाभ कहते हैं।',
    etymologyAndHistory: 'Derived from Anglo-Norman French "mesne" (middle or intermediate), reflecting profits accrued in the intermediate period between wrongful dispossession and legal recovery under the writ of ejectment.',
    statutoryBasis: 'Code of Civil Procedure, 1908 — Section 2(12) (Definition), Order XX Rule 12 (Decree for possession and mesne profits), Order VII Rule 2.',
    essentialElements: [
      'Wrongful Possession: The possession of the defendant must be unlawful, unauthorized, or without valid legal title.',
      'Immovable Property: Relates strictly to lands, buildings, or premises.',
      'Profits Realized or Realizable: Profits actually received or which with ordinary diligence might have been received.',
      'Interest Payable: Interest on mesne profits is expressly included within the statutory definition (usually 6% p.a.).',
      'Exclusion of Improvements: Profits attributable to permanent improvements erected by the defendant are excluded.'
    ],
    practicalScenarios: [
      {
        title: 'Commercial Tenant Holding Over After Lease Expiry',
        facts: 'A bank commercial lease for a prime branch expired on 31 December 2020. The bank refused to vacate, paying the old 1990 rent of ₹5,000/month while market rent was ₹1,50,000/month. The owner obtained eviction in 2024.',
        issue: 'How should mesne profits be calculated for the 4 years of unauthorized possession?',
        rule: 'Mesne profits must be assessed based on the prevailing open-market rental value of similar premises in the locality, not the contractual expired rent.',
        application: 'The court decrees mesne profits at ₹1,50,000 per month with 6% interest, ordering payment of ₹72 Lakhs.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Fateh Chand v. Balkishan Dass',
        citation: 'AIR 1963 SC 1405',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'Mesne profits are in the nature of damages for wrongful deprivation of possession. The normal measure of mesne profits is the value of the user of the land to the person in wrongful possession.',
        relevance: 'The foundational Constitution Bench ruling on the standard of computation of mesne profits.'
      },
      {
        caseName: 'Indian Oil Corporation Ltd. v. Saroj Baweja',
        citation: '(2005) 124 DLT 259',
        court: 'Delhi High Court',
        ratioDecidendi: 'Upon determination of a lease, a tenant holding over without consent is an unauthorized occupant; mesne profits are calculated on current commercial market rent of surrounding premises.',
        relevance: 'Standard benchmark used across High Courts for commercial premises mesne profits.'
      }
    ],
    exceptionsAndMisconceptions: 'Mesne profits cannot be claimed against a co-owner whose possession is deemed to be on behalf of all co-owners, unless there has been an actual ouster.',
    litigationApplication: 'Pleadings for eviction must always include a specific prayer under Order XX Rule 12 CPC for mesne profits from date of suit until actual physical delivery of possession, with court fees paid on estimated arrears.',
    relatedTerms: [
      { term: 'Garnishee Order', id: 'dict-garnishee-order-cpc', relationship: 'Used in execution to recover mesne profits decrees.' },
      { term: 'Execution of Decrees', id: 'proc-execution-decree', relationship: 'The full court procedure governing decree execution.' }
    ],
    faqs: [
      {
        q: 'What is the limitation period for recovering mesne profits?',
        a: 'Under Article 109 of the Limitation Act, 1963, the limitation period is 3 years from the date when the profits are received.'
      }
    ],
    examNotes: 'High-frequency question in Civil Procedure Code. Memorize the definition in Section 2(12) CPC verbatim. Explain Order XX Rule 12 preliminary vs final decree.',
    sourceProvenance: {
      primarySource: 'Code of Civil Procedure, 1908, Section 2(12) & Order XX Rule 12; Fateh Chand (1964) 1 SCR 515',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified CPC Statutory Definition'
    },
    tags: ['civil-procedure-cpc', 'mesne-profits', 'cpc-section-2-12', 'wrongful-possession', 'order-20-rule-12', 'damages', 'tenancy']
  },

  {
    id: 'dict-garnishee-order-cpc',
    term: 'Garnishee Order (CPC Order XXI Rules 46A–46I)',
    category: 'Procedural Term',
    subCategory: 'Execution of Money Decrees & Attachment of Debts',
    jurisdiction: 'India (Code of Civil Procedure, 1908)',
    language: 'Anglo-French / English Procedural Law',
    pronunciation: 'gar-nih-shee or-dur',
    literalTranslation: 'Warn / Garnish a third-party debtor.',
    conciseDefinition: 'An execution order passed by a civil court directing a third party (the garnishee) who owes money to the judgment-debtor, to pay that debt directly to the decree-holder instead of paying it to the judgment-debtor.',
    detailedMeaning: 'Under Order XXI Rules 46A to 46I of the CPC, Garnishee Proceedings provide a swift mechanism to satisfy money decrees by intercepting receivables, bank balances, or debts owed to the judgment-debtor. The court first issues a notice (Rule 46A) calling upon the garnishee to either deposit the debt into court or show cause why they should not do so. If the garnishee fails to appear or dispute the debt, the court issues a mandatory execution order against the garnishee under Rule 46B as if it were a decree against them. Payment made by the garnishee operates as a valid statutory discharge of their debt to the judgment-debtor.',
    hindiExplanation: 'गार्निशी आदेश या पर-ऋणी आदेश (Garnishee Order - CPC आदेश 21 नियम 46A): यह डिक्री के निष्पादन (Execution) का एक अत्यंत शक्तिशाली हथियार है। जब अदालत से किसी व्यक्ति के पक्ष में पैसे की डिक्री (Money Decree) हो जाती है और देनदार (Judgment-Debtor) पैसे देने से बचता है, लेकिन किसी तीसरे पक्ष (जैसे बैंक, नियोक्ता या कोई तीसरा व्यापारी) पर उस देनदार का पैसा बकाया है, तो अदालत उस तीसरे पक्ष (गार्निशी) को आदेश देती है कि वह देनदार को पैसा न देकर सीधे अदालत या डिक्रीदार को पैसा जमा करे। सबसे आम उदाहरण देनदार के बैंक खाते को फ्रीज करके पैसा वसूलना है।',
    etymologyAndHistory: 'Derived from Old French "garnir" (to warn or notify). Codified into English Common Law via the Common Law Procedure Act 1854 and incorporated into the Indian CPC 1908 by amendment through Rules 46A–46I.',
    statutoryBasis: 'Code of Civil Procedure, 1908 — Order XXI Rules 46A to 46I, Section 60 (Property liable to attachment).',
    essentialElements: [
      'Valid Money Decree: Existence of an unsatisfied, executable money decree.',
      'Debt Owed by Third Party: The garnishee must owe an existing, unconditional debt in praesenti or solvendum in futuro to the judgment-debtor.',
      'Show-Cause Notice (Rule 46A): Mandatory notice calling upon the third party to deposit or dispute liability.',
      'Execution Against Garnishee (Rule 46B): If undisputed, the order is executed directly against the garnishee assets.',
      'Statutory Discharge (Rule 46F): Payment into court discharges the garnishee debt to the judgment-debtor.'
    ],
    practicalScenarios: [
      {
        title: 'Freezing Corporate Bank Account for ₹50 Lakh Arbitral Award',
        facts: 'A contractor secures an execution order for an arbitral award of ₹50 Lakhs against a developer. The developer refuses to pay, but maintains active bank balances with State Bank of India.',
        issue: 'Can the court order the bank to remit the developer money directly to the contractor?',
        rule: 'Under Order XXI Rule 46A, the bank is a debtor (garnishee) to its depositor and can be directed to remit funds into court.',
        application: 'The court issues a Garnishee Order; SBI debits ₹50 Lakhs from the developer account and deposits it with the court registry.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Mackinnon Mackenzie & Co. Ltd. v. I.C.I. Ltd.',
        citation: 'AIR 1987 Cal 357',
        court: 'Calcutta High Court',
        ratioDecidendi: 'A garnishee order attaches the debt in the hands of the third party from the instant it is served. The judgment-debtor loses all power to assign, charge, or withdraw the attached sum.',
        relevance: 'The leading precedent explaining the proprietary attachment effect of garnishee notices.'
      },
      {
        caseName: 'Radhey Shyam v. Shyam Behari',
        citation: '(1970) 2 SCC 405',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Attachment under Order XXI Rule 46 creates a legal charge over the debt preventing private alienations in violation of Section 64 CPC.',
        relevance: 'Affirmed that private settlements cannot bypass garnishee attachments.'
      }
    ],
    exceptionsAndMisconceptions: 'Cannot attach a conditional or contingent debt (a debt that may or may not become payable based on an uncertain future event), unliquidated damages, or salary beyond the exempt limits in Section 60 CPC.',
    litigationApplication: 'Drafted in Execution Petitions under Order XXI Rule 11 CPC accompanied by an affidavit identifying the judgment-debtor bank accounts or contract receivables.',
    relatedTerms: [
      { term: 'Caveat Petition', id: 'dict-caveat-petition-cpc', relationship: 'Precautionary notice to prevent ex-parte attachments.' },
      { term: 'Execution of Decrees', id: 'proc-execution-decree', relationship: 'The parent procedural framework.' }
    ],
    faqs: [
      {
        q: 'What happens if the Garnishee disputes that they owe money to the debtor?',
        a: 'Under Order XXI Rule 46C, the executing court must frame an issue and try the dispute between the decree-holder and the garnishee as if it were a regular suit.'
      }
    ],
    examNotes: 'High-frequency question in Civil Procedure. Explain Order XXI Rule 46A (Show cause), Rule 46B (Execution order), and Rule 46F (Discharge). Contrast with Section 60 CPC exemptions.',
    sourceProvenance: {
      primarySource: 'Code of Civil Procedure, 1908, Order XXI Rules 46A–46I; Calcutta High Court Rulings',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Execution Procedure'
    },
    tags: ['civil-procedure-cpc', 'garnishee-order', 'order-21-rule-46a', 'execution', 'money-decree', 'bank-attachment']
  },

  {
    id: 'dict-caveat-petition-cpc',
    term: 'Caveat Petition (CPC Section 148A)',
    category: 'Procedural Term',
    subCategory: 'Precautionary Practice & Natural Justice',
    jurisdiction: 'India (Code of Civil Procedure, 1908)',
    language: 'Latin / English Procedural Law',
    pronunciation: 'kay-vee-at puh-tish-un',
    literalTranslation: 'Caveat / Let him beware (A formal warning to the court).',
    conciseDefinition: 'A formal precautionary application lodged in a civil court by a person anticipating legal proceedings against them, requesting that no ex-parte interim stay or adverse order be passed without giving them prior advance notice and a fair opportunity of hearing.',
    detailedMeaning: 'Codified into the CPC by the 1976 Amendment Act under Section 148A, a Caveat Petition operationalizes the natural justice canon Audi Alteram Partem at the threshold stage. Any person claiming a right to appear before the court on the hearing of an anticipated application for interim relief in a suit or proceeding may lodge a caveat. Under Section 148A(2), the caveator must serve a copy on the prospective applicant by registered post. Once lodged, the court is statutorily mandated to serve notice on the caveator before passing any adverse order. A caveat remains valid for a maximum period of 90 days under Section 148A(5).',
    hindiExplanation: 'कैविएट याचिका (Caveat Petition - CPC धारा 148A): यह मुकदमेबाजी में अपनाई जाने वाली एक अत्यंत महत्वपूर्ण "सावधानी याचिका" है। जब किसी व्यक्ति को यह पुख्ता अंदेशा होता है कि उसका विरोधी पक्ष अदालत में जाकर उसके खिलाफ चुपके से कोई एकतरफा स्टे ऑर्डर (Ex-Parte Stay) या अंतरिम निषेधाज्ञा (Injunction) ले सकता है, तो वह पहले ही अदालत में कैविएट दायर कर देता है। कैविएट का मतलब है "अदालत को चेतावनी"। इसके बाद अदालत विरोधी पक्ष को कोई भी अंतरिम राहत देने से पहले कैविएटर (Caveator) को नोटिस जारी करने और उसकी दलीलें सुनने के लिए कानूनी रूप से बाध्य होती है। कैविएट की वैधता 90 दिनों की होती है।',
    etymologyAndHistory: 'Originated in English ecclesiastical courts and probate practice (warning against issuing letters of administration without notice). Introduced into the Indian CPC by the Code of Civil Procedure (Amendment) Act, 1976 based on the 54th Law Commission Report.',
    statutoryBasis: 'Code of Civil Procedure, 1908 — Section 148A(1) to 148A(5); High Court Original and Appellate Side Rules.',
    essentialElements: [
      'Anticipated Application: The caveator must have a genuine basis to believe an application will be made against them in an existing or expected suit.',
      'Service on Opponent (Section 148A(2)): Mandatory service of the caveat on the prospective applicant by registered post or courier.',
      'Duty of Court (Section 148A(3)): Statutory duty of the court registry and judge to serve notice on the caveator before hearing the interim application.',
      '90-Day Validity (Section 148A(5)): The caveat automatically expires after 90 days unless renewed by a fresh caveat.'
    ],
    practicalScenarios: [
      {
        title: 'Preventing Ex-Parte Stay on Municipal Construction',
        facts: 'A developer wins a municipal sanction dispute after 2 years. Knowing the disgruntled neighbor intends to rush to a vacation judge on a holiday to seek an ex-parte stay on construction, the developer files a Caveat in the District Court.',
        issue: 'Can the court grant the neighbor an ex-parte stay without calling the developer?',
        rule: 'Under Section 148A(3), once a caveat is registered, the court cannot pass an interim order without serving notice on the caveator.',
        application: 'The court refuses ex-parte stay and lists the application for hearing with notice to the developer.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Deepak Khosla v. Union of India',
        citation: '(2011) 183 DLT 647',
        court: 'Delhi High Court',
        ratioDecidendi: 'The right under Section 148A is a substantive statutory safeguard against ambush litigation. If an ex-parte order is passed in ignorance of a validly registered caveat, the order is liable to be set aside on that ground alone.',
        relevance: 'The leading modern judgment on the binding nature of caveat filings.'
      },
      {
        caseName: 'G.C. Siddalingappa v. G.C. Veeranna',
        citation: 'AIR 1981 Kant 242',
        court: 'Karnataka High Court',
        ratioDecidendi: 'Held that an ex-parte interim order passed without notice to a caveator is not an absolute nullity, but is an irregular order that must be recalled immediately upon the caveator application.',
        relevance: 'Clarified the procedural status of orders passed in breach of Section 148A.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: A caveat does not prevent the opponent from filing the suit; it only prevents the grant of ex-parte interim relief without hearing the caveator.',
    litigationApplication: 'Routinely filed by successful litigants upon winning a trial court decree, arbitral award, or high court single judge order to prevent the opponent from obtaining an ex-parte stay in appeal.',
    relatedTerms: [
      { term: 'Ex-Parte Order / Decree', id: 'dict-ex-parte-decree-cpc', relationship: 'The order a caveat is designed to prevent.' },
      { term: 'Interlocutory Application', id: 'dict-interlocutory-application-ia', relationship: 'The interim petition heard with notice.' }
    ],
    faqs: [
      {
        q: 'Can a Caveat Petition be filed in criminal proceedings?',
        a: 'No. The Code of Criminal Procedure / BNSS contains no provision corresponding to Section 148A CPC; caveats are confined to civil and writ proceedings, although some High Court rules allow caveat in criminal revisions.'
      }
    ],
    examNotes: 'Memorize Section 148A subsections (1) to (5). Focus on the 90-day statutory validity period and the dual duties (duty of caveator to serve opponent and duty of court to notify caveator).',
    sourceProvenance: {
      primarySource: 'Code of Civil Procedure, 1908, Section 148A; Law Commission of India 54th Report (1973)',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified CPC Statutory Procedure'
    },
    tags: ['civil-procedure-cpc', 'caveat-petition', 'cpc-section-148a', 'stay-prevention', 'natural-justice', 'audi-alteram-partem']
  },

  {
    id: 'dict-ex-parte-decree-cpc',
    term: 'Ex-Parte Decree & Order IX Rule 13 CPC',
    category: 'Procedural Term',
    subCategory: 'Civil Adjudication & Default Remedies',
    jurisdiction: 'India (Code of Civil Procedure, 1908)',
    language: 'Latin / English Procedural Law',
    pronunciation: 'eks par-tay dih-kree',
    literalTranslation: 'From one party / A decree passed in the absence of the defendant.',
    conciseDefinition: 'A final judicial decree passed by a civil court in favor of the plaintiff when the defendant, despite being duly served with summons, fails to appear on the appointed date of hearing, or a decree passed where summons was not duly served.',
    detailedMeaning: 'Under Order IX Rule 6(1)(a) CPC, where the plaintiff appears and the defendant does not appear when the suit is called on for hearing, if it is proved that the summons was duly served, the court may make an order that the suit be heard ex-parte. An ex-parte decree is nonetheless a decree on merits and has the same legal force and execution power as a bi-parte decree. Under Order IX Rule 13 CPC, the defendant may apply to the court that passed the decree to set it aside by satisfying the court that: (1) The summons was not duly served; or (2) The defendant was prevented by any sufficient cause from appearing when the suit was called on for hearing.',
    hindiExplanation: 'एकतरफा डिक्री (Ex-Parte Decree - CPC आदेश 9 नियम 13): जब किसी दीवानी मुकदमे में वादी (Plaintiff) उपस्थित होता है लेकिन प्रतिवादी (Defendant) समन तामील (Summons Service) होने के बावजूद अदालत में पेश नहीं होता, तो अदालत प्रतिवादी को गैर-हाजिर मानकर "एकतरफा कार्यवाही" (Ex-Parte) करते हुए वादी के पक्ष में डिक्री पारित कर देती है। पीड़ित प्रतिवादी के पास इससे बचने के दो रास्ते होते हैं: (1) आदेश 9 नियम 13 के तहत उसी अदालत में अर्जी देकर साबित करना कि समन ठीक से नहीं मिला था या पेश न होने का पर्याप्त कारण (Sufficient Cause) था, या (2) धारा 96(2) CPC के तहत उच्च अदालत में प्रथम अपील (First Appeal) दायर करना।',
    etymologyAndHistory: 'Classical Latin "ex parte" (from one side). Formulated in early equity practice and systematized in Order IX of the Code of Civil Procedure, 1908.',
    statutoryBasis: 'Code of Civil Procedure, 1908 — Order IX Rule 6, Order IX Rule 13, Section 96(2) (Appeal against ex-parte decree); Limitation Act, 1963 — Article 123 (30 days limitation).',
    essentialElements: [
      'Absence of Defendant: The defendant failed to appear when the suit was called on for hearing.',
      'Hearing on Merits: The court considered the plaintiff evidence and passed an ex-parte decree.',
      'Order IX Rule 13 Remedy: Application to set aside decree within 30 days from decree date (or knowledge date if summons not served).',
      'Grounds for Setting Aside: (a) Summons not duly served; or (b) Prevented by "sufficient cause" (illness, accident, advocate default).',
      'Second Proviso Protection: Decree cannot be set aside on mere irregularity of service if defendant had notice in time.'
    ],
    practicalScenarios: [
      {
        title: 'Setting Aside Ex-Parte Partition Decree Based on Fraudulent Summons',
        facts: 'A brother files a suit for partition and intentionally provides a fake old village address for his sister. Summons returns unserved, and service is effected by newspaper publication in a local village weekly. The court decrees partition ex-parte.',
        issue: 'Can the sister set aside the ex-parte partition decree under Order IX Rule 13?',
        rule: 'Under Order IX Rule 13, if summons was not duly served, the defendant has an absolute right to have the ex-parte decree set aside.',
        application: 'The court sets aside the decree; the limitation period of 30 days runs from the date of knowledge of the decree.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Bhanu Kumar Jain v. Archana Kumar',
        citation: '(2005) 1 SCC 787',
        court: 'Supreme Court of India (3-Judge Bench)',
        ratioDecidendi: 'A defendant against whom an ex-parte decree is passed has concurrent remedies: (1) File an application under Order IX Rule 13; and (2) File a First Appeal under Section 96(2). If Order IX Rule 13 is dismissed on merits, the appeal under Section 96(2) survives on the merits of the suit.',
        relevance: 'The definitive authority mapping the concurrent remedies against an ex-parte decree.'
      },
      {
        caseName: 'Parimal v. Veena',
        citation: '(2011) 3 SCC 545',
        court: 'Supreme Court of India',
        ratioDecidendi: '"Sufficient cause" under Order IX Rule 13 means an elastic expression capable of doing substantial justice. The party must show that they were prevented from attending by reasons beyond their reasonable control and acted bona fide without negligence.',
        relevance: 'Settled the judicial definition of "sufficient cause" in setting aside ex-parte decrees.'
      }
    ],
    exceptionsAndMisconceptions: 'Under the Second Proviso to Order IX Rule 13, a court shall NOT set aside an ex-parte decree merely on the ground of an irregularity in the service of summons, if it is satisfied that the defendant had notice of the date of hearing in sufficient time to appear.',
    litigationApplication: 'Extremely common civil application. Accompanied by a stay of execution under Order XXI Rule 26 CPC and a Section 5 Limitation Act application if filed beyond 30 days.',
    relatedTerms: [
      { term: 'Caveat Petition', id: 'dict-caveat-petition-cpc', relationship: 'Precaution to prevent ex-parte orders.' },
      { term: 'Res Judicata', id: 'dict-res-judicata', relationship: 'An ex-parte decree on merits operates as Res Judicata.' }
    ],
    faqs: [
      {
        q: 'What is the limitation period to file an application under Order IX Rule 13 CPC?',
        a: 'Under Article 123 of the Limitation Act, 1963, the limitation period is 30 days from the date of the decree, or where summons was not duly served, 30 days from when the applicant had knowledge of the decree.'
      }
    ],
    examNotes: 'Master Bhanu Kumar Jain (2005) mapping the 4 remedies against ex-parte decrees (Order IX Rule 13, Section 96(2) Appeal, Review under Order XLVII, and a separate suit for fraud). Memorize Article 123 Limitation Act.',
    sourceProvenance: {
      primarySource: 'Code of Civil Procedure, 1908, Order IX Rule 6 & 13; Bhanu Kumar Jain (2005) 1 SCC 787',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Civil Procedure Remedy'
    },
    tags: ['civil-procedure-cpc', 'ex-parte-decree', 'order-9-rule-13', 'cpc', 'sufficient-cause', 'bhanu-kumar-jain', 'summons']
  },

  {
    id: 'dict-interlocutory-application-ia',
    term: 'Interlocutory Application (IA & Order XXXIX CPC)',
    category: 'Procedural Term',
    subCategory: 'Interim Injunctions & Case Management',
    jurisdiction: 'India (Code of Civil Procedure, 1908)',
    language: 'Latin / English Procedural Law',
    pronunciation: 'in-ter-lok-yoo-toree ap-lih-kay-shun',
    literalTranslation: 'Interlocutio / Speaking in between the principal proceedings.',
    conciseDefinition: 'A provisional or incidental application moved by a party during the active pendency of a principal civil suit, appeal, or writ proceeding seeking interim urgent relief—such as a temporary injunction, receiver, amendment of pleadings, or delay condonation—before final judgment.',
    detailedMeaning: 'Under the Code of Civil Procedure, 1908, an Interlocutory Application (IA) does not decide the final rights or liabilities of the parties on merits; it regulates the procedure, preserves the subject-matter (status quo), or protects assets pendente lite (pending litigation). The most prominent interlocutory application is under Order XXXIX Rules 1 and 2 CPC for Temporary Injunctions, governed by the classic triple test: (1) Prima Facie Case; (2) Balance of Convenience; and (3) Irreparable Injury. Other critical IAs include Order VI Rule 17 (Amendment of Pleadings), Order XXVI (Local Commissioner), and Section 151 (Inherent Powers).',
    hindiExplanation: 'अंतरिम आवेदन या इंटरलोक्यूट्री एप्लिकेशन (Interlocutory Application - IA): जब कोई मुख्य दीवानी मुकदमा, अपील या रिट याचिका अदालत में लंबित होती है, तो उस मुकदमे के अंतिम फैसले से पहले बीच में तात्कालिक राहत पाने के लिए जो अर्जी लगाई जाती है, उसे IA (अंतरिम आवेदन) कहते हैं। इसका सबसे प्रमुख उदाहरण आदेश 39 नियम 1 और 2 के तहत "अस्थाई रोक" (Temporary Injunction / Stay) मांगना है, ताकि विवादित जमीन या संपत्ति की यथास्थिति (Status Quo) बनी रहे और विपक्षी पक्ष उसे बेच या तोड़ न सके। अंतरिम आदेश मुख्य मुकदमे का अंतिम फैसला नहीं होता।',
    etymologyAndHistory: 'Derived from Latin "interloqui" (to speak between). Governed in Indian practice by Order XXXIX, Order XL, Order XXVI, and High Court practice rules.',
    statutoryBasis: 'Code of Civil Procedure, 1908 — Section 141 (Miscellaneous proceedings), Order XXXIX Rules 1 to 5 (Temporary Injunctions), Order VI Rule 17 (Amendment), Section 151 (Inherent powers).',
    essentialElements: [
      'Pendente Lite Character: Moved while the principal proceeding is actively pending before the court.',
      'Incidental Relief: Seeks provisional protection or procedural facilitation, not final decree.',
      'The Triple Test for Injunction (Order XXXIX): (1) Strong prima facie case; (2) Balance of convenience tilting in applicant favor; (3) Irreparable injury incapable of compensation in money.',
      'Appealability: Orders granting or refusing injunction under Order XXXIX are appealable under Order XLIII Rule 1(r) (Misc. Appeal).'
    ],
    practicalScenarios: [
      {
        title: 'Restraining Demolition of Ancestral Wall Pending Title Suit',
        facts: 'A plaintiff files a suit for declaration of title over an ancestral courtyard. While the suit is pending, the defendant brings laborers with sledgehammers to demolish the courtyard boundary wall.',
        issue: 'Can the plaintiff obtain immediate protection before the 3-year trial concludes?',
        rule: 'Under Order XXXIX Rules 1 & 2 CPC, an IA for temporary injunction preserves the property status quo pendente lite.',
        application: 'The court grants an ad-interim injunction restraining demolition until final disposal of the suit.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Gujarat Bottling Co. Ltd. v. Coca Cola Co.',
        citation: '(1995) 5 SCC 545',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Laid down the authoritative modern formulation of the Triple Test for interim injunctions under Order XXXIX CPC: The court must weigh prima facie case, balance of convenience, irreparable injury, and equitable conduct of the applicant.',
        relevance: 'The most cited Indian authority on the grant of interlocutory injunctions.'
      },
      {
        caseName: 'Dalpat Kumar v. Prahlad Singh',
        citation: '(1992) 1 SCC 719',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Prima facie case alone is not sufficient to grant an interlocutory injunction; the court must be satisfied that irreparable injury will occur if injunction is withheld, which cannot be adequately remedied by damages.',
        relevance: 'Clarified the mandatory nature of the irreparable injury requirement.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: An ad-interim ex-parte injunction granted under Order XXXIX Rule 3 must be disposed of within 30 days under Rule 3A, failing which the court must record reasons for delay.',
    litigationApplication: 'Numbered sequentially in court registries as IA No. 1, IA No. 2, etc. Forms 80% of day-to-day courtroom advocacy in civil courts and High Courts.',
    relatedTerms: [
      { term: 'Civil Injunctions (O. 39)', id: 'proc-civil-injunctions', relationship: 'The full court workflow for interlocutory injunctions.' },
      { term: 'Caveat Petition', id: 'dict-caveat-petition-cpc', relationship: 'Protects against ex-parte interlocutory orders.' }
    ],
    faqs: [
      {
        q: 'Is an order on an Interlocutory Application subject to appeal or revision?',
        a: 'Orders passed under Order XXXIX Rules 1 & 2 are appealable under Order XLIII Rule 1(r) CPC (Misc. First Appeal); orders not covered under Order XLIII can be challenged only via Section 115 CPC Revision or Article 227 supervisory petition.'
      }
    ],
    examNotes: 'High-frequency question in Civil Procedure. Explain the Triple Test in detail (Prima Facie Case, Balance of Convenience, Irreparable Injury). Cite Gujarat Bottling (1995) and Dalpat Kumar (1992).',
    sourceProvenance: {
      primarySource: 'Code of Civil Procedure, 1908, Order XXXIX Rules 1–5; Gujarat Bottling Co. (1995) 5 SCC 545',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Civil Injunction Rule'
    },
    tags: ['civil-procedure-cpc', 'interlocutory-application', 'ia', 'order-39-rules-1-2', 'temporary-injunction', 'gujarat-bottling', 'triple-test']
  },

  {
    id: 'dict-res-sub-judice',
    term: 'Res Sub-Judice / Stay of Suit (CPC Section 10)',
    category: 'Procedural Term',
    subCategory: 'Multiplicity of Litigation & Case Management',
    jurisdiction: 'India (Code of Civil Procedure, 1908)',
    language: 'Latin / English Procedural Law',
    pronunciation: 'rayz sub joo-dih-see',
    literalTranslation: 'A matter under judicial consideration / Pending before a judge.',
    conciseDefinition: 'A mandatory procedural rule codified in Section 10 of the CPC requiring a civil court to stay the trial of any subsequently instituted suit where the matter in issue is directly and substantially in issue in a previously instituted pending suit between the same parties.',
    detailedMeaning: 'Under Section 10 of the Code of Civil Procedure, 1908, no court shall proceed with the trial of any suit in which the matter in issue is also directly and substantially in issue in a previously instituted suit between the same parties or between parties under whom they claim, litigating under the same title, where such suit is pending in the same or any other court in India having jurisdiction to grant the relief. The object of Section 10 is to prevent courts of concurrent jurisdiction from simultaneously entertaining two parallel litigations in respect of the same cause of action, avoiding conflicting decrees and unnecessary harassment.',
    hindiExplanation: 'रेस सब-ज्यूडिस या विचाराधीन वाद का स्थगन (Res Sub-Judice - CPC धारा 10): इसका अर्थ है "न्यायालय में विचाराधीन मामला"। यह नियम एक ही विवाद पर दो अलग-अलग अदालतों में एक साथ दो मुकदमे चलने से रोकता है। यदि दो पक्षों के बीच किसी संपत्ति या कानूनी अधिकार को लेकर पहले से ही किसी सक्षम अदालत में मुकदमा चल रहा है, और उसी दौरान एक पक्ष किसी दूसरी अदालत में उसी विषय पर एक नया मुकदमा दायर कर देता है, तो CPC की धारा 10 के तहत दूसरी अदालत को अपने बाद वाले मुकदमे की सुनवाई (Trial) पर अनिवार्य रूप से रोक (Stay) लगानी होगी, जब तक कि पहले वाले मुकदमे का अंतिम फैसला न आ जाए।',
    etymologyAndHistory: 'Derived from Latin "sub judice" (under a judge). Codified in Section 12 of the 1882 CPC and re-enacted in Section 10 of the Code of Civil Procedure, 1908.',
    statutoryBasis: 'Code of Civil Procedure, 1908 — Section 10 (Stay of Suit); Specific Relief Act, 1963 — Section 41(b).',
    essentialElements: [
      'Two Suits: Existence of a previously instituted suit and a subsequently instituted suit.',
      'Identical Matter in Issue: The matter in issue in the subsequent suit must be directly and substantially the same as in the previous suit.',
      'Same Parties or Privies: Both suits must be between the same parties or their legal representatives.',
      'Same Title: Parties must be litigating under the same title or capacity in both suits.',
      'Competency: The previous court must possess jurisdiction to grant the relief claimed in the subsequent suit.',
      'Pending Proceeding: The previous suit must be actively pending in an Indian court or Supreme Court.'
    ],
    practicalScenarios: [
      {
        title: 'Parallel Suits for Cancellation of Sale Deed in Delhi and Gurgaon',
        facts: 'A seller files a suit in Gurgaon District Court for declaration that a land sale deed was procured by fraud. One month later, the buyer files a suit in Delhi High Court seeking specific enforcement of the same sale deed.',
        issue: 'Can the Delhi High Court proceed with the trial while the Gurgaon suit is pending?',
        rule: 'Under Section 10 CPC, the subsequent suit trial must be stayed because the validity of the sale deed is directly and substantially in issue in both suits.',
        application: 'The Delhi High Court stays the trial of the subsequent suit pending the Gurgaon judgment.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'National Institute of Mental Health & Neuro Sciences (NIMHANS) v. C. Parameshwara',
        citation: '(2005) 2 SCC 344',
        court: 'Supreme Court of India',
        ratioDecidendi: 'The fundamental test for applying Section 10 CPC is whether on final decision being reached in the previously instituted suit, such decision would operate as Res Judicata in the subsequent suit. If yes, Section 10 is mandatory.',
        relevance: 'The definitive modern authority explaining the exact nexus between Section 10 (Sub-Judice) and Section 11 (Res Judicata).'
      },
      {
        caseName: 'Aspi Jal v. Khushroo Rustom Dhandina',
        citation: '(2013) 4 SCC 333',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Section 10 applies only when the whole of the subject-matter in both suits is identical; the key is whether the decision in the prior suit would completely non-suit the plaintiff in the subsequent suit.',
        relevance: 'Narrowed the scope of Section 10 to cases of substantial identity of issues.'
      }
    ],
    exceptionsAndMisconceptions: 'Section 10 bars the "trial" of the suit, not the institution of the suit; the plaint can be registered and interlocutory orders (such as temporary injunctions) can still be passed. Does not apply if the previous suit is pending in a foreign court (Explanation to Section 10).',
    litigationApplication: 'Moved by the defendant by filing an application under Section 10 CPC immediately upon receipt of summons in a duplicate or retaliatory civil suit.',
    relatedTerms: [
      { term: 'Res Judicata', id: 'dict-res-judicata', relationship: 'Section 10 applies to pending suits; Section 11 applies to decided suits.' },
      { term: 'Interlocutory Application', id: 'dict-interlocutory-application-ia', relationship: 'Can be passed even when trial is stayed under Section 10.' }
    ],
    faqs: [
      {
        q: 'Can the court grant an interim injunction in a suit whose trial is stayed under Section 10 CPC?',
        a: 'Yes. Section 10 bars only the trial (examination of witnesses and final arguments); it does not prevent the court from passing interim orders under Order XXXIX to protect property (Sennaji Kapurchand v. Pannaji Devichand).'
      }
    ],
    examNotes: 'Differentiate Section 10 (Res Sub-Judice: stay of trial in pending suits) from Section 11 (Res Judicata: bar of trial in decided suits). Cite NIMHANS (2005) and Aspi Jal (2013).',
    sourceProvenance: {
      primarySource: 'Code of Civil Procedure, 1908, Section 10; NIMHANS v. C. Parameshwara (2005) 2 SCC 344',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified CPC Stay Principle'
    },
    tags: ['civil-procedure-cpc', 'res-sub-judice', 'cpc-section-10', 'stay-of-suit', 'nimhans', 'parallel-litigation']
  }
];
