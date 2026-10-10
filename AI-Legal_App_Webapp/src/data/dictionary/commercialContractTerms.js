// ─── CONTRACT & COMMERCIAL LAW DOCTRINES ──────────────────────────────────
// Authoritative definitions, Indian Contract Act provisions, commercial precedents & remedies

export const COMMERCIAL_CONTRACT_TERMS = [
  {
    id: 'dict-force-majeure-frustration',
    term: 'Force Majeure vs Doctrine of Frustration (ICA Sec 56)',
    category: 'Substantive Doctrine',
    subCategory: 'Impossibility of Performance & Contract Discharge',
    jurisdiction: 'India (Indian Contract Act, 1872)',
    language: 'French / English Commercial Law',
    pronunciation: 'fors ma-zhoor vur-sus fruhs-tray-shun',
    literalTranslation: 'Superior force vs Judicial frustration of commercial purpose.',
    conciseDefinition: 'The core commercial distinction in contract discharge: Force Majeure is an express contractual clause excusing performance or suspending obligations upon the occurrence of unforeseen catastrophic events (war, pandemics, natural disasters); the Doctrine of Frustration (Section 56 ICA) is a statutory rule automatically terminating a contract by operation of law when an unexpected supervening event renders performance physically or legally impossible.',
    detailedMeaning: 'In Indian commercial jurisprudence, as settled by the Supreme Court in Satyabrata Ghose (1954) and Energy Watchdog (2017), the relationship between Force Majeure and Frustration is hierarchical: (1) If the contract contains an express Force Majeure clause that covers the supervening event, the matter is governed by Section 32 of the Indian Contract Act (Contingent Contracts) according to the terms of the agreement; (2) If the contract contains no clause or the event falls outside it, Section 56 of the Contract Act applies. Under Section 56, a contract to do an act which, after the contract is made, becomes impossible or by reason of some event which the promisor could not prevent, becomes unlawful, becomes void. Frustration discharges both parties automatically and restitution of benefits is governed by Section 65 ICA.',
    hindiExplanation: 'फोर्स मेज्योर बनाम संविदा की निष्फलता (Force Majeure vs Doctrine of Frustration - ICA धारा 56): व्यापारिक और वाणिज्यिक अनुबंधों में यह सबसे महत्वपूर्ण सिद्धांत है। "फोर्स मेज्योर" (अपरिहार्य घटना / दैवीय आपदा) अनुबंध की वह विशेष शर्त होती है जिसमें दोनों पक्ष पहले से तय करते हैं कि यदि कोई अप्रत्याशित संकट (जैसे युद्ध, महामारी, बाढ़, भूकंप) आता है, तो उनके दायित्व निलंबित रहेंगे या उन्हें हर्जाने से छूट मिलेगी। जबकि "संविदा की निष्फलता का सिद्धांत" (Doctrine of Frustration - धारा 56) एक कानूनी नियम है; यदि किसी अनुबंध के होने के बाद कोई ऐसी अप्रत्याशित घटना घट जाए जिससे अनुबंध का पालन करना शारीरिक या कानूनी रूप से पूरी तरह असंभव हो जाए, तो वह अनुबंध कानूनन शून्य (Void) हो जाता है। केवल व्यापार में घाटा होना या काम महंगा हो जाना निष्फलता नहीं माना जाता।',
    etymologyAndHistory: 'Force majeure originates in the French Napoleonic Code (Art. 1148). The Common Law doctrine of frustration was formulated in Taylor v. Caldwell (1863) (destruction of music hall by fire) and Krell v. Henry (1903) (coronation cases). Codified in Section 56 of the Indian Contract Act, 1872.',
    statutoryBasis: 'Indian Contract Act, 1872 — Section 56 (Agreement to do impossible act / supervening impossibility), Section 32 (Contingent contracts), Section 65 (Obligation of person who has received advantage under void agreement).',
    essentialElements: [
      'Valid Subsisting Contract: A binding, enforceable contract entered into between the parties.',
      'Supervening Event: An unexpected event occurring AFTER the formation of the contract without the fault of either party.',
      'Destruction of Foundation: The event must completely overturn the fundamental commercial basis of the bargain.',
      'Beyond Financial Hardship: Mere increase in costs, loss of profit, or commercial difficulty is NOT frustration.',
      'Automatic Voidness (Section 56): The contract is automatically discharged and restitution follows under Section 65 ICA.'
    ],
    practicalScenarios: [
      {
        title: 'Coal Price Increase Due to Indonesian Export Law Change',
        facts: 'A power producer signs a 25-year Power Purchase Agreement (PPA) with power distribution utilities to supply electricity at a levelized tariff. Later, Indonesian mining law changes, increasing imported coal prices by 100%. The power company claims the contract is frustrated.',
        issue: 'Does steep commercial price escalation constitute frustration under Section 56 ICA?',
        rule: 'Under Energy Watchdog (2017), an unexpected rise in raw material prices or change in law making performance economically unviable is NOT impossibility or frustration.',
        application: 'The Supreme Court rejects the frustration plea, holding the producer bound by the contract.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Satyabrata Ghose v. Mugneeram Bangur & Co.',
        citation: 'AIR 1954 SC 44',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'Section 56 is exhaustive on the doctrine of frustration in India. "Impossible" does not mean solely physical or literal impossibility; if an untoward event completely upsets the very foundation of the contract, the contract stands frustrated.',
        relevance: 'The foundational locus classicus on Section 56 of the Indian Contract Act.'
      },
      {
        caseName: 'Energy Watchdog v. CERC',
        citation: '(2017) 14 SCC 80',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Where the contract contains a Force Majeure clause, Section 56 does not apply; the clause must be interpreted under Section 32 ICA. Furthermore, an increase in coal prices making performance commercially onerous does not discharge the agreement.',
        relevance: 'The modern commercial benchmark governing Force Majeure and energy contracts.'
      }
    ],
    exceptionsAndMisconceptions: 'Self-induced frustration (where a party own breach, negligence, or strike created the impossibility) does NOT excuse performance. Commercial difficulty or alternative expensive routes do not frustrate a contract (Tsakiroglou v. Noblee Thorl).',
    litigationApplication: 'Extensively invoked in commercial arbitrations and infrastructure disputes following lockdowns, international trade embargoes, or canal blockades to resist liquidated damages claims.',
    relatedTerms: [
      { term: 'Anticipatory Breach of Contract', id: 'dict-anticipatory-breach-contract', relationship: 'Opposite: unexcused refusal to perform.' },
      { term: 'Specific Performance', id: 'dict-specific-performance', relationship: 'Frustration defeats claims for specific performance.' }
    ],
    faqs: [
      {
        q: 'Did COVID-19 lockdowns automatically frustrate all commercial contracts in India?',
        a: 'No. The Supreme Court in various rulings held that COVID-19 constituted an unprecedented event, but whether it excused performance depended strictly on whether performance was actually physically impossible or merely delayed, and on the wording of the Force Majeure clause.'
      }
    ],
    examNotes: 'High-frequency question in Contract Law. Always analyze the dual track: Force Majeure clause (Section 32 ICA) vs Statutory Frustration (Section 56 ICA). Cite Satyabrata Ghose (1954) and Energy Watchdog (2017).',
    sourceProvenance: {
      primarySource: 'Indian Contract Act, 1872, Section 56; Energy Watchdog v. CERC (2017) 14 SCC 80',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Commercial Contract Doctrine'
    },
    tags: ['commercial-contract', 'force-majeure', 'doctrine-of-frustration', 'section-56-ica', 'satyabrata-ghose', 'energy-watchdog', 'contract-discharge']
  },

  {
    id: 'dict-liquidated-damages-penalty',
    term: 'Liquidated Damages vs Penalty (ICA Section 74)',
    category: 'Substantive Doctrine',
    subCategory: 'Breach of Contract & Compensation',
    jurisdiction: 'India (Indian Contract Act, 1872)',
    language: 'English (Indian Contract Law)',
    pronunciation: 'lik-wih-day-ted dam-ih-jez vur-sus pen-ul-tee',
    literalTranslation: 'Pre-estimated genuine loss vs punitive in terrorem stipulation.',
    conciseDefinition: 'The legal framework governing contractual compensation for breach: Liquidated Damages represent a genuine pre-estimate of anticipated loss agreed by the parties; a Penalty is a disproportionate punitive sum stipulated in terrorem to compel performance, which Indian courts will not enforce beyond reasonable compensation.',
    detailedMeaning: 'Under English Common Law, liquidated damages are enforceable while penalties are wholly void. In Indian law, Section 74 of the Indian Contract Act, 1872 eliminates this rigid English distinction by treating both under a unified statutory rule: whether the contract names a sum as liquidated damages or as a penalty, the aggrieved party is entitled only to "reasonable compensation not exceeding the amount so named". In Kailash Nath Associates (2015), the Supreme Court clarified that: (1) Where damage or loss is capable of assessment, the claimant must prove actual loss suffered; (2) Only where loss is impossible or difficult to prove (e.g. government highway contracts), the liquidated sum can be awarded as reasonable compensation without detailed proof.',
    hindiExplanation: 'परिनिर्धारित हर्जाना बनाम शास्ति/दंड (Liquidated Damages vs Penalty - ICA धारा 74): अनुबंध के उल्लंघन पर हर्जाना तय करने का यह मुख्य नियम है। "परिनिर्धारित हर्जाना" (Liquidated Damages) वह राशि है जिसे दोनों पक्ष अनुबंध करते समय संभावित नुकसान का सच्चा और वाजिब अनुमान लगाकर पहले से तय करते हैं। जबकि "शास्ति" (Penalty) किसी पक्ष को डराने (In Terrorem) के लिए रखी गई बहुत बड़ी और अनुचित रकम होती है। भारतीय अनुबंध अधिनियम की धारा 74 दोनों में एक ही नियम लागू करती है: अनुबंध में चाहे कोई भी बड़ी रकम क्यों न लिखी हो, अदालत केवल "उचित मुआवजा" (Reasonable Compensation) ही दिलाएगी जो वास्तव में हुए नुकसान से अधिक नहीं हो सकता।',
    etymologyAndHistory: 'Formulated in English equity (Dunlop Pneumatic Tyre v. New Garage, 1915). Re-engineered in India under Section 74 of the 1872 Act and authoritatively synthesized by Constitution Benches in Fateh Chand (1963) and Kailash Nath (2015).',
    statutoryBasis: 'Indian Contract Act, 1872 — Section 74 (Compensation for breach of contract where penalty stipulated for), Section 73 (Compensation for loss or damage caused by breach).',
    essentialElements: [
      'Stipulated Sum or Penalty Clause: An express term naming an amount payable or forfeiture of deposit upon breach.',
      'Ceiling, Not Automatic Award: The stipulated sum operates as an upper ceiling; the claimant is not automatically entitled to the entire amount.',
      'Reasonable Compensation: The court will award only fair and reasonable compensation based on the principle of restitution in integrum.',
      'Proof of Actual Loss: Where loss can be proved, actual loss must be established by evidence; where loss is impossible to compute, the pre-estimate serves as benchmark.'
    ],
    practicalScenarios: [
      {
        title: 'Forfeiture of 25% Earnest Money in Land Auction',
        facts: 'A bidder deposits ₹1 Crore earnest money in a commercial land auction. The bidder defaults in paying the balance due to financing issues. The government agency forfeits the entire ₹1 Crore and re-auctions the land at a profit of ₹3 Crores.',
        issue: 'Can the agency retain the ₹1 Crore deposit under Section 74 ICA when it suffered no actual loss?',
        rule: 'Under Kailash Nath Associates (2015), forfeiture of earnest money cannot be sustained where the seller has suffered zero loss.',
        application: 'The court directs the agency to refund the entire ₹1 Crore earnest money deposit with interest.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Kailash Nath Associates v. Delhi Development Authority',
        citation: '(2015) 4 SCC 136',
        court: 'Supreme Court of India (R.F. Nariman J.)',
        ratioDecidendi: 'Laid down comprehensive principles on Section 74 ICA: (1) Damage or loss is the sine qua non for compensation; (2) Where it is possible to prove loss, such proof is not dispensed with; (3) Forfeiture of earnest money without loss is unconstitutional and arbitrary.',
        relevance: 'The definitive modern judgment on liquidated damages and earnest money forfeiture in India.'
      },
      {
        caseName: 'Fateh Chand v. Balkishan Dass',
        citation: 'AIR 1963 SC 1405',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'Section 74 dispenses with proof of actual loss only where the court is unable to assess damages; it does not confer a windfall on the plaintiff to recover an arbitrary figure where no injury occurred.',
        relevance: 'The historic Constitution Bench ruling establishing the reasonable compensation rule.'
      },
      {
        caseName: 'ONGC Ltd. v. Saw Pipes Ltd.',
        citation: '(2003) 5 SCC 705',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Where the contract contains a genuine pre-estimate of loss for delay in high-stakes public infrastructure projects where actual delay damages are difficult to quantify, the court/arbitrator can award the stipulated sum without demanding proof of daily loss.',
        relevance: 'Protected genuine pre-estimate clauses in infrastructure procurement.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: An agreed liquidated damages clause does NOT give an automatic right to deduct the sum from contractor bills; the employer must establish breach and justify reasonableness.',
    litigationApplication: 'Extensively contested in construction arbitrations and software development disputes regarding liquidated damages deductions and bank guarantee invocations.',
    relatedTerms: [
      { term: 'Specific Performance', id: 'dict-specific-performance', relationship: 'Remedy in lieu of or in addition to damages.' },
      { term: 'Quantum Meruit', id: 'dict-quantum-meruit', relationship: 'Restitutionary remedy where no contract rate applies.' }
    ],
    faqs: [
      {
        q: 'Can a bank guarantee be invoked for alleged liquidated damages?',
        a: 'Unconditional bank guarantees can generally be invoked unless there is egregious fraud vitiating the underlying transaction or irretrievable injustice (U.P. State Sugar Corp.).'
      }
    ],
    examNotes: 'High-yield Contract Law topic. Reconcile Fateh Chand (1963), Saw Pipes (2003), and Kailash Nath (2015). Explain that Section 74 eliminates the English dichotomy between liquidated damages and penalties.',
    sourceProvenance: {
      primarySource: 'Indian Contract Act, 1872, Section 74; Kailash Nath Associates (2015) 4 SCC 136',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Contractual Damages Standard'
    },
    tags: ['commercial-contract', 'liquidated-damages', 'penalty', 'section-74-ica', 'kailash-nath', 'fateh-chand', 'earnest-money']
  },

  {
    id: 'dict-quantum-meruit',
    term: 'Quantum Meruit (As Much as Earned / ICA Sec 70)',
    category: 'Substantive Doctrine',
    subCategory: 'Quasi-Contracts & Unjust Enrichment',
    jurisdiction: 'India (Indian Contract Act, 1872)',
    language: 'Latin / English Quasi-Contract Law',
    pronunciation: 'kwan-tum meh-roo-it',
    literalTranslation: 'As much as he has deserved / As much as is earned.',
    conciseDefinition: 'A restitutionary legal remedy in contract and quasi-contract entitling a person who has provided goods or performed services to recover the reasonable market value of the work actually executed, in the absence of a fixed contractual price or where the contract has been wrongfully discharged.',
    detailedMeaning: 'Quantum Meruit prevents unjust enrichment where work has been performed under an agreement that is discovered to be void (Section 65 ICA) or where a person lawfully does something for another non-gratuitously and the other enjoys the benefit thereof (Section 70 ICA). Unlike a claim for contractual damages (which seeks to put the party in the position they would have been had the contract been performed), Quantum Meruit is a restitutionary claim based on the actual value of the benefit received by the defendant. It arises when: (1) An express contract is terminated prematurely by the defendant breach; (2) Services are rendered without a price agreement; or (3) A contract is discovered to be legally void.',
    hindiExplanation: 'क्वांटम मेरुइट (Quantum Meruit - ICA धारा 70): इसका लैटिन अर्थ है "उतना जितना कमाया गया है" (As much as earned)। यह न्याय और गैर-कानूनी संवृद्धि रोकने (Unjust Enrichment) का नियम है। यदि किसी व्यक्ति ने दूसरे व्यक्ति के लिए कोई वैध काम किया है या सेवाएं दी हैं, और वह काम मुफ्त (Gratuitous) नहीं था, बल्कि दूसरे पक्ष ने उस काम का पूरा लाभ उठाया है, तो काम करने वाला व्यक्ति अपने द्वारा किए गए वास्तविक कार्य के उचित पारिश्रमिक (Reasonable Remuneration) का दावा कर सकता है—भले ही उनके बीच कोई औपचारिक लिखित अनुबंध न हो या अनुबंध किसी तकनीकी कारण से रद्द हो गया हो।',
    etymologyAndHistory: 'Developed in English Common Law through the action of assumpsit to prevent a client from retaining services without paying a reasonable fee. Systematized in Sections 65 and 70 of the Indian Contract Act, 1872.',
    statutoryBasis: 'Indian Contract Act, 1872 — Section 70 (Obligation of person enjoying benefit of non-gratuitous act), Section 65 (Obligation where agreement discovered void), Section 73.',
    essentialElements: [
      'Lawful Performance: The claimant lawfully did something for another person or delivered something to them.',
      'Non-Gratuitous Intent: The claimant did not intend to act gratuitously (charity/gift).',
      'Enjoyment of Benefit: The other person enjoyed and retained the benefit of the act or goods.',
      'Reasonable Remuneration: Entitlement to recover the fair market value of the executed work.'
    ],
    practicalScenarios: [
      {
        title: 'Building Constructed Under Void Municipal Contract',
        facts: 'A contractor constructs a public school building for a municipality following official tenders. Later, an auditor finds the contract lacked the formal signature of the Municipal Commissioner under Section 175 of the State Municipalities Act, rendering the formal contract void.',
        issue: 'Can the contractor claim payment for the completed building?',
        rule: 'Under Section 70 ICA, a person enjoying the benefit of a non-gratuitous act must pay reasonable compensation even if the formal contract is void.',
        application: 'The Supreme Court in State of W.B. v. B.K. Mondal orders the municipality to pay the contractor on a quantum meruit basis.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'State of West Bengal v. B.K. Mondal & Sons',
        citation: 'AIR 1962 SC 779',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'Section 70 of the Contract Act is based on the equitable doctrine of restitution against unjust enrichment. Where a contractor constructed buildings for the government under an agreement that did not comply with Article 299 of the Constitution, the government had enjoyed the benefit and was bound to make compensation on quantum meruit.',
        relevance: 'The foundational Constitution Bench ruling on Section 70 ICA and government contracts.'
      },
      {
        caseName: 'Craven-Ellis v. Canons Ltd.',
        citation: '[1936] 2 KB 403',
        court: 'Court of Appeal (England)',
        ratioDecidendi: 'Where an appointment as managing director was void because the director held no qualification shares, he was nonetheless entitled to recover fair remuneration on quantum meruit for work actually performed that benefited the company.',
        relevance: 'Leading precedent on quantum meruit where an agreement is discovered to be void.'
      }
    ],
    exceptionsAndMisconceptions: 'Quantum Meruit cannot be claimed by a party who has wrongfully abandoned an entire lump-sum contract halfway through (Sumpter v. Hedges), unless the contract is severable or the employer accepted partial performance.',
    litigationApplication: 'Routinely included as an alternative claim in construction arbitrations and service fee litigations alongside claims for contractual payment and damages.',
    relatedTerms: [
      { term: 'Liquidated Damages', id: 'dict-liquidated-damages-penalty', relationship: 'Damages for breach vs restitution for work done.' },
      { term: 'Specific Performance', id: 'dict-specific-performance', relationship: 'Enforcing the contract vs paying for executed part.' }
    ],
    faqs: [
      {
        q: 'What is the difference between an action for damages and a claim on Quantum Meruit?',
        a: 'Damages compensate for the loss of the bargain caused by a breach (expectation interest); Quantum Meruit compensates for the fair market value of the work actually executed and delivered (restitution interest).'
      }
    ],
    examNotes: 'Explain Section 70 ICA (3 ingredients: lawful act, non-gratuitous intent, enjoyment of benefit). Link with Article 299 government contracts and B.K. Mondal (1962).',
    sourceProvenance: {
      primarySource: 'Indian Contract Act, 1872, Section 70; State of W.B. v. B.K. Mondal & Sons (1962) Supp (1) SCR 876',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Quasi-Contract Remedy'
    },
    tags: ['commercial-contract', 'quantum-meruit', 'section-70-ica', 'unjust-enrichment', 'quasi-contract', 'bk-mondal', 'restitution']
  },

  {
    id: 'dict-promissory-estoppel-contract',
    term: 'Doctrine of Promissory Estoppel',
    category: 'Substantive Doctrine',
    subCategory: 'Equity & Enforcement of Promises',
    jurisdiction: 'India (Contract & Administrative Law)',
    language: 'English (Equitable Jurisprudence)',
    pronunciation: 'prom-ih-soree es-top-ul',
    literalTranslation: 'Estoppel arising from a clear and unequivocal promise.',
    conciseDefinition: 'An equitable doctrine holding that where one party has by their words or conduct made a clear and unequivocal promise or assurance to another intending that it be acted upon, and the other party alters their position in reliance upon it, the promisor will not be permitted to resile from the promise, even in the absence of consideration.',
    detailedMeaning: 'Under classical contract law, an agreement without consideration is void (nudum pactum). Promissory Estoppel bridges this gap by enforcing promises grounded on detrimental reliance. In India, under the transformative jurisprudence of the Supreme Court in MP Sugar Mills (1979), Promissory Estoppel is not merely a rule of evidence (like Section 121 BSA) but can form the basis of an independent cause of action (a sword) against the State. When the government announces industrial policies, tax holidays, or export incentives and private parties invest capital relying upon them, the government is bound to honor its promise, unless it demonstrates an overriding public interest.',
    hindiExplanation: 'वचनात्मक विबंधन का सिद्धांत (Doctrine of Promissory Estoppel): यह समता (Equity) और न्याय का वह सिद्धांत है जो किसी व्यक्ति या सरकार को अपने दिए गए वादे से मुकरने से रोकता है। यदि किसी पक्ष (विशेष रूप से सरकार ने) कोई स्पष्ट वादा किया (जैसे नई फैक्ट्री लगाने पर 5 साल तक टैक्स छूट का वादा), और उस वादे पर भरोसा करके किसी नागरिक या उद्योगपति ने अपनी स्थिति बदल ली (जैसे करोड़ों रुपये का निवेश कर दिया), तो बाद में सरकार अपने वादे से मुकर नहीं सकती, भले ही उनके बीच कोई औपचारिक अनुबंध न हुआ हो। भारत में यह सरकार के खिलाफ मुकदमा चलाने का एक स्वतंत्र आधार बन चुका है।',
    etymologyAndHistory: 'Formulated by Lord Denning in the High Trees Case (Central London Property Trust Ltd. v. High Trees House Ltd., 1947). Elevated to constitutional status in India by Justice P.N. Bhagwati in Motilal Padampat Sugar Mills (1979).',
    statutoryBasis: 'Indian Contract Act, 1872 — Section 25; Bharatiya Sakshya Adhiniyam, 2023 — Section 121 (Estoppel); Constitution of India — Article 14 & 226.',
    essentialElements: [
      'Clear and Unequivocal Promise: A definite representation or assurance intended to create legal relations.',
      'Intention to Induce Action: The promisor intended or knew the promisee would act upon it.',
      'Alteration of Position: The promisee altered their position relying on the assurance (actual detriment is not mandatory, alteration of position suffices).',
      'Inequity: It would be unconscionable and inequitable to permit the promisor to resile.'
    ],
    practicalScenarios: [
      {
        title: 'Retraction of 5-Year Industrial Tax Holiday After Capital Investment',
        facts: 'A State Government issues an industrial policy granting a 5-year electricity subsidy to new manufacturing units. A textile firm invests ₹50 Crores and builds a plant. Two years later, the State abruptly withdraws the policy citing budget deficits.',
        issue: 'Can the firm compel the State to provide the subsidy for the full 5 years?',
        rule: 'Under Promissory Estoppel, the State is bound to honor its promise unless it proves overwhelming supervening public interest.',
        application: 'The High Court issues a writ of Mandamus directing the State to grant the subsidy for the full 5-year term.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Motilal Padampat Sugar Mills v. State of U.P.',
        citation: '(1979) 2 SCC 409',
        court: 'Supreme Court of India (P.N. Bhagwati J.)',
        ratioDecidendi: 'Promissory estoppel can be the basis of a cause of action; it is not merely a shield but a sword. The government is subject to the rule of promissory estoppel like any private individual and cannot claim immunity unless public interest overrides.',
        relevance: 'The landmark Constitution Bench authority establishing Promissory Estoppel against the State.'
      },
      {
        caseName: 'Central London Property Trust Ltd. v. High Trees House Ltd.',
        citation: '[1947] KB 130',
        court: 'King Bench (Lord Denning)',
        ratioDecidendi: 'A promise intended to be binding, intended to be acted upon, and in fact acted on, is binding so far as its terms properly apply, even if consideration is absent.',
        relevance: 'The historic English case that resurrected Promissory Estoppel.'
      }
    ],
    exceptionsAndMisconceptions: 'Vital exceptions: (1) No promissory estoppel against a statute (the State cannot be compelled to act contrary to law); (2) Overriding Public Interest (the State can resile if public necessity compels); (3) No estoppel against legislative power (cannot compel Parliament to pass an Act).',
    litigationApplication: 'Routinely pleaded under Article 226 in writ petitions against state industrial development corporations, revenue departments, and municipal boards for unilateral rollback of tax incentives.',
    relatedTerms: [
      { term: 'Doctrine of Estoppel', id: 'dict-estoppel-doctrine', relationship: 'The evidentiary parent doctrine (Section 121 BSA).' },
      { term: 'Rule of Law', id: 'dict-rule-of-law', relationship: 'Accountability of the executive.' }
    ],
    faqs: [
      {
        q: 'Does a claimant have to prove financial damage or detriment under Promissory Estoppel in India?',
        a: 'No. As held in MP Sugar Mills, it is only necessary to prove that the promisee has "altered their position" in reliance upon the promise; actual financial loss or detriment is not mandatory.'
      }
    ],
    examNotes: 'Essential for Contract Law and Administrative Law. Contrast High Trees (1947) with MP Sugar Mills (1979) and Union of India v. Godfrey Philips (1985). Memorize the 3 exceptions.',
    sourceProvenance: {
      primarySource: 'Indian Contract Act, 1872; Motilal Padampat Sugar Mills (1979) 2 SCC 409',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Equitable Doctrine'
    },
    tags: ['commercial-contract', 'promissory-estoppel', 'motilal-padampat', 'high-trees', 'article-226', 'legitimate-expectation']
  },

  {
    id: 'dict-specific-performance',
    term: 'Specific Performance of Contracts (Specific Relief Act)',
    category: 'Substantive Doctrine',
    subCategory: 'Equitable Remedies & Contract Enforcement',
    jurisdiction: 'India (Specific Relief Act, 1963 as amended in 2018)',
    language: 'English (Equitable Legal Remedy)',
    pronunciation: 'spuh-sif-ik per-for-mans',
    literalTranslation: 'Exact execution of the contractual obligation as agreed.',
    conciseDefinition: 'An equitable remedy compelling a defaulting party to a contract to perform their exact substantive obligations under the agreement (e.g. executing a land sale deed), now transformed into a mandatory general rule under the 2018 amendment to the Specific Relief Act.',
    detailedMeaning: 'Prior to 2018, specific performance in India was a discretionary equitable remedy under Section 20 of the Specific Relief Act, 1963, granted only where damages were inadequate. By the Specific Relief (Amendment) Act, 2018, Parliament amended Section 10 to make specific performance MANDATORY: "The specific performance of a contract shall be enforced by the court subject to the provisions contained in sub-section (2) of section 11, section 14 and section 16." Contracts not specifically enforceable (Section 14) are restricted to: (a) Contracts where substituted performance was obtained; (b) Contracts running into minute details or continuous supervision; (c) Contracts dependent on personal qualifications (singing, painting); and (d) Determinable contracts. Under Section 16(c), the plaintiff must aver and prove continuous "readiness and willingness" to perform.',
    hindiExplanation: 'संविदा का विनिर्दिष्ट पालन (Specific Performance of Contracts): यह अनुबंध उल्लंघन पर मिलने वाली वह कानूनी राहत है जिसमें अदालत दोषी पक्ष को केवल हर्जाना देने के बजाय वही काम पूरा करने का आदेश देती है जिसका उसने अनुबंध किया था (जैसे जमीन या मकान की रजिस्ट्री करने का वादा करके मुकर जाने पर अदालत द्वारा रजिस्ट्री कराने का आदेश)। 2018 के संशोधन से पहले यह अदालत का विवेकाधिकार (Discretion) था, लेकिन 2018 के बाद धारा 10 में संशोधन करके विनिर्दिष्ट पालन को "अनिवार्य नियम" (Mandatory Rule) बना दिया गया है। वादी को केवल यह साबित करना होता है कि वह हमेशा अपनी तरफ से अनुबंध पूरा करने के लिए "तैयार और इच्छुक" (Ready and Willing) था।',
    etymologyAndHistory: 'Developed by the English Court of Chancery to overcome the inadequacy of Common Law damages. Enacted in the Specific Relief Act 1877, revised in 1963, and fundamentally restructured by the Specific Relief (Amendment) Act, 2018.',
    statutoryBasis: 'Specific Relief Act, 1963 — Section 10 (Mandatory specific performance), Section 14 (Contracts not specifically enforceable), Section 16(c) (Personal bar regarding readiness and willingness), Section 20 (Substituted performance).',
    essentialElements: [
      'Mandatory Enforcement (Section 10): Courts must enforce performance unless barred under Section 11(2), 14, or 16.',
      'Continuous Readiness & Willingness (Section 16(c)): Plaintiff must aver and prove continuous willingness to pay balance price from contract date to trial date.',
      'Non-Enforceable Exceptions (Section 14): Excludes determinable contracts, personal skill contracts, and contracts requiring continuous court supervision.',
      'Limitation Period: Under Article 54 of the Limitation Act 1963, 3 years from the date fixed for performance or when plaintiff has notice of refusal.'
    ],
    practicalScenarios: [
      {
        title: 'Seller Refusing to Execute Sale Deed After Property Price Rises',
        facts: 'A seller signs an Agreement to Sell an apartment for ₹1 Crore, receiving ₹20 Lakh advance. Before registry, market rates double to ₹2 Crores. The seller offers to refund ₹20 Lakhs with interest and refuses to register the sale deed.',
        issue: 'Can the buyer compel the seller to execute the sale deed under the amended Section 10?',
        rule: 'Under Section 10 SRA (post-2018), specific performance of a land contract is mandatory upon proof of readiness and willingness.',
        application: 'The court orders the seller to execute the sale deed upon receiving the balance ₹80 Lakhs.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'B. Santoshamma v. D. Sarala',
        citation: '(2020) 19 SCC 80',
        court: 'Supreme Court of India',
        ratioDecidendi: 'The 2018 Amendment to the Specific Relief Act fundamentally shifted specific performance from a discretionary remedy to a mandatory statutory right. Relief can only be refused if the case falls squarely within Section 14 or 16.',
        relevance: 'The leading Supreme Court decision interpreting the mandatory post-2018 framework.'
      },
      {
        caseName: 'Syed Dastagir v. T.R. Gopalakrishna Setty',
        citation: '(1999) 6 SCC 337',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Compliance with Section 16(c) (readiness and willingness) does not require mathematical incantation of statutory words; the pleadings and conduct of the plaintiff viewed as a whole must demonstrate continuous readiness to pay.',
        relevance: 'Settled that substantive readiness overrides rigid mechanical phrasing in plaints.'
      }
    ],
    exceptionsAndMisconceptions: 'Under Section 14(d), determinable contracts (contracts that can be terminated at will by either party upon notice) cannot be specifically enforced (Indian Oil Corp. v. Amritsar Gas Service).',
    litigationApplication: 'The foundation of property litigation in civil courts. Plaints must strictly plead Section 16(c) readiness and willingness and annex proof of financial capacity (bank statements, loan sanctions).',
    relatedTerms: [
      { term: 'Liquidated Damages', id: 'dict-liquidated-damages-penalty', relationship: 'Damages in addition to or in lieu of specific performance.' },
      { term: 'Doctrine of Lis Pendens', id: 'dict-doctrine-lis-pendens', relationship: 'Protects the property while specific performance suit is pending.' }
    ],
    faqs: [
      {
        q: 'What is "Substituted Performance" under Section 20 of the Specific Relief Act?',
        a: 'The 2018 amendment allows an aggrieved party to get the contract performed through a third party or agency at the expense of the defaulting party, after giving 30 days written notice.'
      }
    ],
    examNotes: 'Critical topic. Contrast the pre-2018 discretionary framework (Section 20 old) with the post-2018 mandatory regime (Section 10 amended). Master Section 16(c) readiness and willingness and Article 54 Limitation Act.',
    sourceProvenance: {
      primarySource: 'Specific Relief Act, 1963 (amended 2018), Sections 10, 14, 16(c); B. Santoshamma (2020) 19 SCC 80',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Statutory Contract Remedy'
    },
    tags: ['commercial-contract', 'specific-performance', 'specific-relief-act', 'section-10-sra', 'readiness-and-willingness', 'property-contracts']
  },

  {
    id: 'dict-anticipatory-breach-contract',
    term: 'Anticipatory Breach of Contract (ICA Section 39)',
    category: 'Substantive Doctrine',
    subCategory: 'Repudiation & Premature Termination',
    jurisdiction: 'India (Indian Contract Act, 1872)',
    language: 'English (Contract Jurisprudence)',
    pronunciation: 'an-tis-ih-puh-toree breech ov kon-trakt',
    literalTranslation: 'Repudiation of contractual obligations before the due date of performance.',
    conciseDefinition: 'A repudiation by a promisor of their contractual obligations before the arrival of the scheduled date of performance, entitling the innocent promisee to either accept the breach immediately and sue for damages or keep the contract alive until the due date.',
    detailedMeaning: 'Under Section 39 of the Indian Contract Act, 1872, when a party to a contract has refused to perform, or disabled themselves from performing, their promise in its entirety, the promisee may put an end to the contract, unless they have signified, by words or conduct, their acquiescence in its continuance. Anticipatory breach gives the innocent party an immediate election: (1) Accept the repudiation immediately, terminate the contract, and file an action for damages without waiting for the due date; or (2) Refuse the repudiation, keep the contract alive for the benefit of both parties, and wait until the due date (Hochster v. De La Tour). However, if the contract is kept alive, the promisor may take advantage of supervening events (such as frustration) to escape liability.',
    hindiExplanation: 'संविदा का प्रत्याशित भंग (Anticipatory Breach of Contract - ICA धारा 39): जब किसी अनुबंध के पूरा होने की तय तारीख आने से पहले ही कोई पक्ष स्पष्ट रूप से काम करने से इनकार कर देता है या खुद को काम करने के अयोग्य बना लेता है (जैसे 1 दिसंबर को सामान सप्लाई करने का अनुबंध था, लेकिन 10 नवंबर को ही पत्र लिखकर कह दिया कि "मैं सामान नहीं दूंगा"), तो इसे प्रत्याशित उल्लंघन कहते हैं। निर्दोष पक्ष को दो विकल्प मिलते हैं: वह तुरंत अनुबंध समाप्त मानकर उसी दिन अदालत में हर्जाने का मुकदमा कर सकता है, या 1 दिसंबर तक का इंतजार कर सकता है।',
    etymologyAndHistory: 'Formulated in the celebrated English decision in Hochster v. De La Tour (1853) (courier contract repudiated before tour commenced). Codified into Section 39 of the Indian Contract Act, 1872.',
    statutoryBasis: 'Indian Contract Act, 1872 — Section 39 (Effect of refusal of party to perform promise wholly), Section 73 (Compensation for breach of contract).',
    essentialElements: [
      'Executory Contract: The date for performance has not yet arrived.',
      'Absolute Refusal: Clear, unequivocal, and unconditional refusal to perform the contract in its entirety.',
      'Self-Disablement: Alternatively, performing an act that renders performance impossible (e.g. selling the contracted unique car to a third party).',
      'Right of Election: Innocent party can accept breach immediately or maintain the contract alive until due date.'
    ],
    practicalScenarios: [
      {
        title: 'Manufacturer Announcing Cancellation 2 Months Before Delivery',
        facts: 'A supplier contracts to deliver 500 electric motors on 1 October. On 1 August, the supplier sends an email stating: "Due to factory reorganization, we will not deliver any motors under the contract."',
        issue: 'Must the buyer wait until 1 October before suing for breach of contract?',
        rule: 'Under Section 39 ICA and Hochster v. De La Tour, anticipatory breach gives the buyer the immediate right to terminate and sue.',
        application: 'The buyer immediately purchases motors elsewhere and sues the supplier for the price difference on 5 August.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Hochster v. De La Tour',
        citation: '(1853) 2 E & B 678',
        court: 'Queen Bench (Lord Campbell C.J.)',
        ratioDecidendi: 'Where a defendant contracted to employ a courier starting on 1 June and renounced the agreement on 11 May, the courier was entitled to bring an action for breach immediately without waiting until 1 June.',
        relevance: 'The founding Common Law authority that created the doctrine of anticipatory breach.'
      },
      {
        caseName: 'Frost v. Knight',
        citation: '(1872) LR 7 Ex 111',
        court: 'Exchequer Chamber (Cockburn C.J.)',
        ratioDecidendi: 'If the promisee keeps the contract alive after an anticipatory repudiation, it remains in force for the benefit of both parties, and the promisor may change their mind or rely on any subsequent frustration.',
        relevance: 'Established the risks of keeping a repudiated contract alive.'
      }
    ],
    exceptionsAndMisconceptions: 'A mere request for an extension of time or an expression of financial difficulty does NOT constitute anticipatory repudiation; there must be an unequivocal, absolute refusal to perform.',
    litigationApplication: 'Forms the basis of urgent commercial termination notices and pre-litigation arbitration invocations under Section 21 of the Arbitration Act.',
    relatedTerms: [
      { term: 'Doctrine of Frustration', id: 'dict-force-majeure-frustration', relationship: 'Frustration discharges without breach.' },
      { term: 'Liquidated Damages', id: 'dict-liquidated-damages-penalty', relationship: 'Recoverable upon accepted anticipatory breach.' }
    ],
    faqs: [
      {
        q: 'How are damages assessed in an anticipatory breach of contract?',
        a: 'Damages are assessed based on the difference between the contract price and the market price on the date when the contract ought to have been performed, or the date of accepted repudiation depending on mitigation.'
      }
    ],
    examNotes: 'Memorize Hochster v. De La Tour (1853) and Frost v. Knight (1872). Explain Section 39 ICA and the doctrine of election (accept immediate breach vs wait until due date).',
    sourceProvenance: {
      primarySource: 'Indian Contract Act, 1872, Section 39; Hochster v. De La Tour (1853) 118 ER 922',
      officialUrl: 'https://www.indiacode.nic.in',
      verificationStatus: 'Verified Commercial Contract Doctrine'
    },
    tags: ['commercial-contract', 'anticipatory-breach', 'section-39-ica', 'hochster-v-de-la-tour', 'repudiation', 'contract-termination']
  }
];
