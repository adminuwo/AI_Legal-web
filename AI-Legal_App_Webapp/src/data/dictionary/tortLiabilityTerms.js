// ─── TORT LAW, NEGLIGENCE & CIVIL LIABILITY DOCTRINES ──────────────────────
// Authoritative definitions, indigenous Indian tort doctrines, precedents & defences

export const TORT_LIABILITY_TERMS = [
  {
    id: 'dict-doctrine-absolute-liability',
    term: 'Doctrine of Absolute Liability (Oleum Gas / MC Mehta)',
    category: 'Substantive Doctrine',
    subCategory: 'Industrial Hazards & Strict Enterprise Responsibility',
    jurisdiction: 'India (Supreme Court Indigenous Jurisprudence)',
    language: 'English (Indian Environmental Jurisprudence)',
    pronunciation: 'ab-so-loot ly-uh-bil-ih-tee',
    literalTranslation: 'Enterprise liability without any common law exceptions or defences.',
    conciseDefinition: 'An indigenous Indian tort doctrine holding that an enterprise engaged in a hazardous or inherently dangerous industry owes an absolute and non-delegable duty to the community; if escape of hazardous material causes harm, the enterprise is liable to compensate victims regardless of reasonable care and without any of the exceptions recognized in strict liability.',
    detailedMeaning: 'Formulated by Chief Justice P.N. Bhagwati in M.C. Mehta v. Union of India (1987) following the Shriram Foods & Fertilizer Oleum Gas Leak and the Bhopal Gas Disaster, the Doctrine of Absolute Liability explicitly discarded the 19th-century English rule in Rylands v. Fletcher (1868). The Supreme Court held that Indian law could not be bound by foreign common law rules formulated in an era prior to modern chemical and industrial technology. Under Absolute Liability: (1) The liability is absolute and subject to NO exceptions (Act of God, third-party sabotage, or plaintiff consent cannot be pleaded); and (2) The measure of compensation is punitive and correlated to the financial capacity of the enterprise (the larger and more prosperous the enterprise, the greater the compensation).',
    hindiExplanation: 'पूर्ण दायित्व का सिद्धांत (Doctrine of Absolute Liability - MC Mehta केस 1987): यह भारतीय न्यायपालिका (विशेष रूप से जस्टिस पी.एन. भगवती) द्वारा दुनिया को दिया गया एक युगांतरकारी पर्यावरण व टॉर्ट विधि का सिद्धांत है। इसके अनुसार यदि कोई औद्योगिक प्रतिष्ठान या फैक्ट्री किसी खतरनाक या हानिकारक पदार्थ (जैसे जहरीली गैस, रसायन या रेडियोधर्मी पदार्थ) से जुड़ा उद्योग चलाती है, तो समाज के प्रति उसका दायित्व "पूर्ण और गैर-हस्तांतरणीय" (Absolute and Non-Delegable) होता है। यदि उस उद्योग से कोई खतरनाक गैस या रसायन लीक होकर लोगों को नुकसान पहुँचाता है, तो कंपनी किसी भी बहाने (जैसे एक्ट ऑफ गॉड, भूकंप, या बाहरी व्यक्ति की साजिश) से बच नहीं सकती। कंपनी को हर हाल में पूरा हर्जाना देना होगा, और हर्जाना कंपनी की आर्थिक हैसियत के हिसाब से तय होगा।',
    etymologyAndHistory: 'Formulated in the Oleum Gas Leak Case (M.C. Mehta v. Union of India, 1987) and reaffirmed in the Bhopal Gas Disaster litigation (Union Carbide Corp. v. Union of India, 1991). Statutorily codified in the Public Liability Insurance Act 1991 and Section 17 of the National Green Tribunal Act 2010.',
    statutoryBasis: 'Constitution of India — Article 21 (Right to a clean environment) & Article 32; Public Liability Insurance Act, 1991 — Section 3; National Green Tribunal Act, 2010 — Section 17; Civil Liability for Nuclear Damage Act, 2010.',
    essentialElements: [
      'Hazardous or Inherently Dangerous Activity: Enterprise engaged in an activity posing a health and safety threat to those working in or residing near the plant.',
      'Escape of Hazardous Substance: Release or leakage of the toxic, chemical, or dangerous agent.',
      'Absolute Liability: Zero exceptions permitted (Act of God, vis major, third party sabotage, or consent are unavailable).',
      'Capacity-Linked Damages: The quantum of compensation must be deterrent and proportional to the economic size and financial capacity of the enterprise.'
    ],
    practicalScenarios: [
      {
        title: 'Chemical Factory Blast Caused by Unprecedented Earthquake',
        facts: 'A chemical manufacturer stores lethal methyl isocyanate gas. An unprecedented massive earthquake (Act of God) ruptures the pressurized tank, killing 50 neighbors. The company proves it had adopted state-of-the-art safety valves.',
        issue: 'Can the company escape liability by pleading Act of God (Vis Major)?',
        rule: 'Under the Doctrine of Absolute Liability, Act of God is NOT an exception; liability is absolute.',
        application: 'The company is held liable to pay full compensatory and exemplary damages to all victims.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'M.C. Mehta v. Union of India (Oleum Gas Leak Case)',
        citation: '(1987) 1 SCC 395',
        court: 'Supreme Court of India (5-Judge Constitution Bench)',
        ratioDecidendi: 'Where an enterprise is engaged in a hazardous or inherently dangerous activity, it owes an absolute and non-delegable duty to the community. The enterprise cannot plead that it had taken all reasonable care and that the harm occurred without any negligence on its part. The rule in Rylands v. Fletcher has no application.',
        relevance: 'The founding decision creating the Doctrine of Absolute Liability in Indian jurisprudence.'
      },
      {
        caseName: 'Union Carbide Corporation v. Union of India (Bhopal Gas Case)',
        citation: '(1991) 4 SCC 584',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'Reaffirmed the principle of absolute liability for mass toxic disasters, enforcing the polluter pays principle and confirming that compensation must be deterrent and adequate for rehabilitation.',
        relevance: 'Enforced absolute liability on a multinational parent corporation for catastrophic mass tort.'
      },
      {
        caseName: 'Indian Council for Enviro-Legal Action v. Union of India',
        citation: '(1996) 3 SCC 212 (Bichhri Case)',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Applied absolute liability to chemical sludge polluting groundwater, affirming the "Polluter Pays Principle" as part of the law of the land.',
        relevance: 'Extended absolute liability to long-term soil and water remediation.'
      }
    ],
    exceptionsAndMisconceptions: 'Unlike English Strict Liability (Rylands v. Fletcher), Absolute Liability permits NO exceptions whatsoever. It does not require proof of "non-natural use of land" or "escape" in the narrow English sense.',
    litigationApplication: 'The primary legal ground in National Green Tribunal (NGT) original applications and High Court environmental PILs against polluting chemical refineries, tanneries, and nuclear power installations.',
    relatedTerms: [
      { term: 'Strict Liability (Rylands)', id: 'dict-strict-liability-rylands', relationship: 'The English parent rule from which India departed.' },
      { term: 'Vicarious Liability', id: 'dict-vicarious-liability-tort', relationship: 'Corporate employer liability.' }
    ],
    faqs: [
      {
        q: 'Why did the Supreme Court discard the English rule in Rylands v. Fletcher?',
        a: 'Because Rylands v. Fletcher was decided in 1868 in agrarian Victorian England with numerous exceptions (Act of God, consent, third-party sabotage) that allowed modern chemical corporations to escape liability for industrial disasters in populous nations.'
      }
    ],
    examNotes: 'The absolute #1 question in Tort Law and Environmental Law across all universities and Judicial Services. Contrast Rylands v. Fletcher (1868) with M.C. Mehta (1987). Explain the 2 unique innovations: No exceptions + Capacity-linked damages.',
    sourceProvenance: {
      primarySource: 'M.C. Mehta v. Union of India (1987) 1 SCC 395; National Green Tribunal Act, 2010 Section 17',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Indigenous Indian Doctrine'
    },
    tags: ['tort-civil-liability', 'absolute-liability', 'mc-mehta', 'oleum-gas-leak', 'bhopal-gas', 'rylands-v-fletcher', 'polluter-pays']
  },

  {
    id: 'dict-strict-liability-rylands',
    term: 'Strict Liability & Rylands v. Fletcher Exceptions',
    category: 'Substantive Doctrine',
    subCategory: 'Common Law Torts & Escape of Dangerous Things',
    jurisdiction: 'India (Common Law of Torts) / United Kingdom',
    language: 'English (19th-Century English Common Law)',
    pronunciation: 'strikt ly-uh-bil-ih-tee',
    literalTranslation: 'Liability without fault subject to recognized common law exceptions.',
    conciseDefinition: 'The classic English tort rule holding that any person who, for their own purposes, brings on their lands and collects and keeps there anything likely to do mischief if it escapes, must keep it in at their peril, and if they do not do so, is prima facie answerable for all the damage which is the natural consequence of its escape, subject to 5 established exceptions.',
    detailedMeaning: 'Formulated by Blackburn J. in Rylands v. Fletcher (1868) and affirmed by the House of Lords (Lord Cairns adding the requirement of "non-natural use of land"), Strict Liability imposes liability without requiring proof of negligence or wrongful intention. However, unlike Indian Absolute Liability, the rule in Rylands v. Fletcher is subject to five major exceptions: (1) Act of God (Vis Major - extraordinary natural catastrophe); (2) Plaintiff own fault or consent (Volenti Non Fit Injuria); (3) Act of a stranger or third-party saboteur; (4) Statutory authority; and (5) Common benefit. In India, while hazardous industries are governed by Absolute Liability, ordinary non-hazardous escapes (e.g. domestic water pipes or livestock trespass) remain guided by strict liability principles.',
    hindiExplanation: 'कठोर दायित्व का सिद्धांत (Doctrine of Strict Liability - Rylands v. Fletcher 1868): यह 19वीं सदी का अंग्रेजी टॉर्ट कानून है जिसके अनुसार यदि कोई व्यक्ति अपनी जमीन पर कोई ऐसी खतरनाक चीज लाता और इकट्ठा करता है जो लीक होने पर भारी नुकसान कर सकती है, तो वह बिना किसी लापरवाही के भी उत्तरदायी होगा। लेकिन इस पुराने अंग्रेजी नियम में 5 प्रमुख बचाव (Exceptions) दिए गए थे: (1) ईश्वर का कृत्य (Act of God / प्राकृतिक आपदा), (2) वादी की अपनी गलती या सहमति, (3) किसी तीसरे अजनबी की हरकत (Sabotage), (4) वैधानिक अधिकार, और (5) दोनों पक्षों का साझा लाभ। भारत में खतरनाक उद्योगों पर यह नियम लागू नहीं होता (वहाँ पूर्ण दायित्व लागू होता है), लेकिन सामान्य गैर-खतरनाक मामलों में यह आज भी प्रासंगिक है।',
    etymologyAndHistory: 'Formulated in the Court of Exchequer Chamber by Blackburn J. (1866) and affirmed by the House of Lords in Rylands v. Fletcher (1868) LR 3 HL 330.',
    statutoryBasis: 'Indian Common Law of Torts; Indian Electricity Act rules; Consumer Protection Act, 2019.',
    essentialElements: [
      'Dangerous Thing: Bringing or keeping something on land likely to do mischief if it escapes (water, gas, electricity, noxious fumes).',
      'Non-Natural Use of Land: An extraordinary or unnatural use introducing special danger to others, not ordinary domestic utility.',
      'Escape: The dangerous thing must actually escape from the defendant premises to an area outside their occupation.',
      'Availability of 5 Defences: Act of God, Plaintiff Consent, Act of Stranger, Statutory Authority, or Common Benefit.'
    ],
    practicalScenarios: [
      {
        title: 'Burst Reservoir Flooding Coal Mines',
        facts: 'A mill owner constructs a water reservoir on his land using independent contractors. The contractors negligently fail to block old abandoned mine shafts underneath. When filled, the water bursts through the shafts and floods the neighbor coal mine.',
        issue: 'Is the mill owner liable when he was not personally negligent?',
        rule: 'Under Strict Liability, the person who collects a dangerous thing that escapes is strictly liable without proof of personal negligence.',
        application: 'The House of Lords in Rylands v. Fletcher holds the mill owner strictly liable.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Rylands v. Fletcher',
        citation: '(1868) LR 3 HL 330',
        court: 'House of Lords (Lord Cairns & Blackburn J.)',
        ratioDecidendi: 'The true rule of law is that the person who for his own purposes brings on his lands and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril.',
        relevance: 'The foundational Common Law authority creating Strict Liability.'
      },
      {
        caseName: 'Nichols v. Marsland',
        citation: '(1876) 2 Ex D 1',
        court: 'Court of Appeal (England)',
        ratioDecidendi: 'Artificial lakes on the defendant land overflowed and destroyed bridges due to an extraordinary cloudburst rainfall that no human foresight could anticipate. The defendant was excused under the exception of Act of God (Vis Major).',
        relevance: 'The classic authority establishing Act of God as a complete exception to Strict Liability.'
      },
      {
        caseName: 'Rickards v. Lothian',
        citation: '[1913] AC 263',
        court: 'Privy Council',
        ratioDecidendi: 'A third-party intruder maliciously plugged a washbasin and turned on taps, flooding the floor below. The defendant was excused under the exception of the act of a stranger (third-party sabotage).',
        relevance: 'Established the third-party sabotage exception.'
      }
    ],
    exceptionsAndMisconceptions: 'Common misconception: If the dangerous thing does not leave the defendant land (e.g. an explosion injuring a worker inside the factory), Rylands v. Fletcher does NOT apply because there was no "escape" to outside land (Read v. J. Lyons & Co.).',
    litigationApplication: 'Pleaded in claims against municipal water authorities for burst water mains, non-hazardous industrial escapes, and electricity distribution companies for electrocution.',
    relatedTerms: [
      { term: 'Absolute Liability', id: 'dict-doctrine-absolute-liability', relationship: 'The Indian successor doctrine with zero exceptions.' },
      { term: 'Volenti Non Fit Injuria', id: 'dict-volenti-non-fit-injuria', relationship: 'Recognized as an exception to Strict Liability.' }
    ],
    faqs: [
      {
        q: 'What is the requirement of "Non-Natural Use of Land" in Strict Liability?',
        a: 'It must be some special use bringing with it increased danger to others, and not merely the ordinary use of land or such a use as is proper for the general benefit of the community (Rickards v. Lothian).'
      }
    ],
    examNotes: 'Classic Tort Law exam question. Memorize the 3 elements (Dangerous thing, Non-natural use, Escape) and the 5 exceptions. Contrast with M.C. Mehta (1987).',
    sourceProvenance: {
      primarySource: 'Rylands v. Fletcher (1868) LR 3 HL 330; Salmond on Torts',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Common Law Doctrine'
    },
    tags: ['tort-civil-liability', 'strict-liability', 'rylands-v-fletcher', 'escape', 'act-of-god', 'non-natural-use']
  },

  {
    id: 'dict-vicarious-liability-tort',
    term: 'Vicarious Liability (Respondeat Superior & Master-Servant)',
    category: 'Substantive Doctrine',
    subCategory: 'Employment Torts & Sovereign State Liability',
    jurisdiction: 'India (Torts & Constitutional Law)',
    language: 'Latin / English Common Law',
    pronunciation: 'vy-kair-ee-us ly-uh-bil-ih-tee',
    literalTranslation: 'Qui facit per alium facit per se / Respondeat Superior (Let the master answer).',
    conciseDefinition: 'A legal doctrine imposing secondary civil liability upon one person for the tortious or unlawful acts of another, arising out of a specific legal relationship between them (such as Master and Servant, Principal and Agent, or Partners in a firm), where the tort was committed in the course of employment.',
    detailedMeaning: 'Vicarious Liability is based on two classical Latin maxims: "Qui facit per alium facit per se" (he who acts through another acts himself) and "Respondeat Superior" (let the master answer). The master is held liable because they selected the servant, put the servant in motion, and possess the deeper pockets to compensate victims. Under Indian law: (1) In private employment, the master is liable for all torts committed by the servant in the course of employment, even if the servant acted in unauthorized or prohibited ways (Limpus v. London General Omnibus Co.); (2) In State liability under Article 300, the historic sovereign immunity doctrine in Kasturi Lal (1965) has been largely dismantled by the Supreme Court in State of Rajasthan v. Vidyawati (1962), Nilabati Behera (1993), and N. Nagendra Rao (1994).',
    hindiExplanation: 'प्रतिनिधिक दायित्व (Vicarious Liability): इसका मूल लैटिन नियम है "Respondeat Superior", जिसका अर्थ है "मालिक को जिम्मेदार ठहराया जाए"। यह वह कानूनी सिद्धांत है जिसके तहत एक व्यक्ति (मालिक/कंपनी/सरकार) को किसी दूसरे व्यक्ति (कर्मचारी/ड्राइवर/एजेंट) द्वारा किए गए गलत काम या लापरवाही के लिए जिम्मेदार ठहराया जाता है, बशर्ते वह काम "नौकरी या रोजगार के दौरान" (Course of Employment) किया गया हो। जैसे यदि किसी कंपनी का ड्राइवर ड्यूटी पर गाड़ी चलाते समय किसी को टक्कर मार देता है, तो पीड़ित व्यक्ति ड्राइवर के साथ-साथ कंपनी से भी पूरे मुआवजे की मांग कर सकता है।',
    etymologyAndHistory: 'Formulated in early Common Law master-servant rules (Hern v. Nichols, 1700). Constitutionalized against the Indian State under Article 300 and refined in Vidyawati (1962).',
    statutoryBasis: 'Constitution of India — Article 300 (Suits and proceedings against the State); Motor Vehicles Act, 1988 — Section 166; Indian Partnership Act, 1932 — Section 26.',
    essentialElements: [
      'Relationship: Existence of a recognized Master-Servant, Principal-Agent, or Employer-Employee relationship (Control Test / Integration Test).',
      'Tort Committed: The servant committed an actionable tort against a third party.',
      'Course of Employment: The tort was committed during the performance of duties authorized by the master or as an unauthorized mode of doing an authorized act.',
      'Joint and Several Liability: Both the master and servant are jointly and severally liable.'
    ],
    practicalScenarios: [
      {
        title: 'Bank Cashier Embezzling Depositor Funds',
        facts: 'A bank customer hands cash to a designated counter cashier inside the branch for deposit into their savings account. The cashier takes the cash, stamps the receipt, but steals the money and absconds.',
        issue: 'Is the bank vicariously liable to refund the money to the customer?',
        rule: 'An employer is vicariously liable for fraud or theft committed by an employee in the course of their employment and apparent authority.',
        application: 'The Supreme Court in State Bank of India v. Shyama Devi affirms the bank vicarious liability for authorized counter transactions.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'State of Rajasthan v. Vidyawati',
        citation: 'AIR 1962 SC 933',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'The State is vicariously liable for the tortious acts of its driver who, while driving a government jeep from a repair workshop back to the Collector bungalow, negligently knocked down a pedestrian. Sovereign immunity does not apply to non-sovereign commercial or administrative tasks.',
        relevance: 'The foundational Indian judgment establishing State vicarious liability under Article 300.'
      },
      {
        caseName: 'Kasturi Lal Ralia Ram Jain v. State of U.P.',
        citation: 'AIR 1965 SC 1039',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'Held that the State was immune for gold stolen by a police head constable from a malkhana, holding that arrest and seizure was a sovereign function. (Substantially narrowed and practically overruled by modern Article 21 public law decisions).',
        relevance: 'The controversial historical ruling on sovereign immunity.'
      },
      {
        caseName: 'N. Nagendra Rao & Co. v. State of A.P.',
        citation: '(1994) 6 SCC 205',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Dismantled the sovereign immunity defence for commercial and welfare state activities, holding that in a modern welfare state, sovereign functions are restricted to war, diplomacy, and defense.',
        relevance: 'Confined sovereign immunity to an extreme minimum.'
      }
    ],
    exceptionsAndMisconceptions: 'A master is NOT liable if the servant was on a "frolic of their own" (doing something totally unconnected with their duties for their own exclusive purpose), nor is a principal generally liable for torts of an independent contractor (subject to non-delegable duty exceptions).',
    litigationApplication: 'The foundation of motor accident claims (MACT), medical negligence claims against hospitals, consumer claims against banks, and tortious suits against the Union of India.',
    relatedTerms: [
      { term: 'Absolute Liability', id: 'dict-doctrine-absolute-liability', relationship: 'Enterprise liability for hazardous acts.' },
      { term: 'Contributory Negligence', id: 'dict-contributory-negligence', relationship: 'Victim own fault reducing vicarious liability.' }
    ],
    faqs: [
      {
        q: 'What is the "Control Test" vs "Organization/Integration Test"?',
        a: 'The classical Control Test asks: Does the master control not only WHAT work is done, but HOW it is done? The modern Integration Test asks: Is the worker an integral part of the enterprise business (e.g. surgeons in a hospital)?'
      }
    ],
    examNotes: 'High-frequency exam topic. Explain the dual Latin maxims (Respondeat Superior & Qui Facit Per Alium). Trace State liability under Article 300: Vidyawati (1962) -> Kasturi Lal (1965) -> Nagendra Rao (1994) -> Nilabati Behera (1993).',
    sourceProvenance: {
      primarySource: 'Constitution of India, Article 300; State of Rajasthan v. Vidyawati AIR 1962 SC 933',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Common Law & Constitutional Tort'
    },
    tags: ['tort-civil-liability', 'vicarious-liability', 'respondeat-superior', 'article-300', 'vidyawati', 'kasturi-lal', 'master-servant']
  },

  {
    id: 'dict-contributory-negligence',
    term: 'Contributory Negligence & Last Opportunity Rule',
    category: 'Substantive Doctrine',
    subCategory: 'Tortious Negligence & Apportionment of Blame',
    jurisdiction: 'India (Law of Torts & Motor Vehicles Act)',
    language: 'English (Tort Jurisprudence)',
    pronunciation: 'kun-trib-yoo-toree neg-lih-jens',
    literalTranslation: 'Negligence of the plaintiff contributing to the injury.',
    conciseDefinition: 'A defence in tort law establishing that the plaintiff failed to exercise reasonable care for their own safety, contributing to the resulting harm, which under modern law results in a proportionate reduction of damages according to the degree of comparative fault.',
    detailedMeaning: 'Under classical English Common Law (Butterfield v. Forrester, 1809), contributory negligence was a complete bar: if the plaintiff was even 1% at fault, they recovered zero. To mitigate this harshness, courts developed the "Last Opportunity Rule" (Davies v. Mann, 1842 - whoever had the last clear opportunity to avoid the accident was liable). In modern Indian law, governed by the Law Reform (Contributory Negligence) principles and Section 166 of the Motor Vehicles Act, 1988, contributory negligence is an apportionment rule: damages are reduced proportionately to the plaintiff share of responsibility (e.g. not wearing a helmet or crossing on a red signal).',
    hindiExplanation: 'अंशदायी लापरवाही (Contributory Negligence): जब किसी दुर्घटना में केवल आरोपी की ही गलती नहीं होती, बल्कि पीड़ित व्यक्ति (Plaintiff) ने भी अपनी सुरक्षा के प्रति लापरवाही बरती होती है और उसकी लापरवाही ने भी उस दुर्घटना या चोट को बढ़ाने में योगदान दिया होता है, तो इसे अंशदायी लापरवाही कहते हैं। उदाहरण के लिए, यदि कोई कार चालक लापरवाही से आ रहा था लेकिन पीड़ित व्यक्ति भी बिना हेलमेट के और लाल बत्ती पार करके बाइक चला रहा था, तो अदालत मुआवजे को पूरी तरह रद्द करने के बजाय पीड़ित की गलती के अनुपात (जैसे 30% या 50%) में मुआवजे की राशि काट लेती है।',
    etymologyAndHistory: 'Formulated in Butterfield v. Forrester (1809) (riding violently into a pole) and modified by the Last Clear Chance doctrine in Davies v. Mann (1842). Apportionment codified into modern Indian tort practice under Motor Vehicles Act jurisprudence.',
    statutoryBasis: 'Indian Common Law of Torts; Motor Vehicles Act, 1988 — Section 166 (Compensation claims); Law Reform (Contributory Negligence) Act principles.',
    essentialElements: [
      'Breach of Self-Care Duty: The plaintiff failed to exercise the ordinary standard of care expected of a reasonable person for their own safety.',
      'Causal Contribution: The plaintiff lack of care contributed directly to the occurrence of the accident or aggravated the resulting injury.',
      'Foreseeability: The danger was reasonably foreseeable by the plaintiff.',
      'Proportionate Apportionment: Damages are assessed in full and then reduced in proportion to the plaintiff degree of fault.'
    ],
    practicalScenarios: [
      {
        title: 'Two-Wheeler Rider Without Helmet Struck by Speeding Truck',
        facts: 'A motorcyclist is hit from behind by a speeding truck driving on the wrong side. The motorcyclist suffers a fatal skull fracture; medical evidence proves a standard helmet would have saved his life.',
        issue: 'Does failure to wear a helmet constitute contributory negligence?',
        rule: 'Under Motor Vehicles Act jurisprudence, failure to wear a statutory helmet constitutes contributory negligence reducing compensation.',
        application: 'The High Court holds the truck 80% liable and deducts 20% compensation for the rider contributory negligence.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Municipal Corporation of Greater Bombay v. Laxman Iyer',
        citation: '(2003) 8 SCC 731',
        court: 'Supreme Court of India',
        ratioDecidendi: 'Where both parties are negligent, the question is who had the last opportunity of avoiding the accident. In modern Indian law, the court apportions liability between the parties based on their comparative degree of negligence.',
        relevance: 'The definitive Supreme Court authority on apportionment in contributory negligence.'
      },
      {
        caseName: 'Butterfield v. Forrester',
        citation: '(1809) 11 East 60',
        court: 'King Bench (Lord Ellenborough C.J.)',
        ratioDecidendi: 'A plaintiff who rode his horse at an excessive, furious speed and crashed into an obstruction left in the road could recover nothing, as his own lack of ordinary care caused the mishap.',
        relevance: 'The historical ruling establishing the defence of contributory negligence.'
      }
    ],
    exceptionsAndMisconceptions: 'The "Doctrine of Alternative Danger" (Jones v. Boyce, 1816): If the defendant negligence places the plaintiff in an agony of imminent peril, and the plaintiff makes a wrong decision in the heat of the moment (e.g. jumping from a runaway carriage), the plaintiff is NOT guilty of contributory negligence.',
    litigationApplication: 'Argued by insurance companies in Motor Accident Claims Tribunals (MACT) to reduce compensation payouts by proving seatbelt non-compliance, over-speeding, or illegal lane changes.',
    relatedTerms: [
      { term: 'Volenti Non Fit Injuria', id: 'dict-volenti-non-fit-injuria', relationship: 'Consent is a complete bar; contributory negligence is a partial reduction.' },
      { term: 'Res Ipsa Loquitur', id: 'dict-res-ipsa-loquitur', relationship: 'Presumption of defendant negligence.' }
    ],
    faqs: [
      {
        q: 'Can a young child be held guilty of Contributory Negligence in India?',
        a: 'The standard of care expected of a child is only that which can reasonably be expected of a child of that specific age; young children are rarely held guilty of contributory negligence (Gopalakrishna Pillai v. K.M. Mani).'
      }
    ],
    examNotes: 'Differentiate Contributory Negligence (partial defence, damages apportioned) from Volenti Non Fit Injuria (complete defence, zero damages). Explain the Doctrine of Alternative Danger (Jones v. Boyce).',
    sourceProvenance: {
      primarySource: 'Motor Vehicles Act, 1988, Section 166; MCGM v. Laxman Iyer (2003) 8 SCC 731',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Tortious Apportionment Rule'
    },
    tags: ['tort-civil-liability', 'contributory-negligence', 'apportionment', 'motor-vehicles-act', 'mact', 'last-opportunity-rule', 'negligence']
  },

  {
    id: 'dict-res-ipsa-loquitur',
    term: 'Res Ipsa Loquitur (The Thing Speaks for Itself)',
    category: 'Substantive Doctrine',
    subCategory: 'Evidentiary Rules in Tortious Negligence',
    jurisdiction: 'India (Law of Torts & Consumer Protection)',
    language: 'Latin / English Common Law',
    pronunciation: 'rayz ip-suh loh-kwi-tur',
    literalTranslation: 'The thing speaks for itself.',
    conciseDefinition: 'A rule of evidence in the law of torts permitting a court to infer negligence on the part of the defendant from the very nature of the accident itself, shifting the burden onto the defendant to prove absence of negligence, where the instrumentality causing harm was under the defendant exclusive control.',
    detailedMeaning: 'Normally, in an action for negligence, the burden of proving breach of duty rests on the plaintiff. However, where an accident occurs in circumstances so extraordinary that it would not happen in the ordinary course of events without negligence (e.g. a surgical sponge left inside an abdomen, a barrel of flour rolling out of a warehouse window, or a clock tower collapsing on passersby), the maxim Res Ipsa Loquitur applies. The plaintiff need only prove the accident and the defendant exclusive management; the court raises a presumption of negligence, and the evidential burden shifts to the defendant to explain how the mishap occurred without fault.',
    hindiExplanation: 'रेस इप्सा लोक्विटुर (Res Ipsa Loquitur): इसका लैटिन अर्थ है "घटना खुद अपनी कहानी बयां करती है" (The thing speaks for itself)। आम तौर पर टॉर्ट या लापरवाही के मुकदमे में वादी को यह साबित करना पड़ता है कि सामने वाले ने लापरवाही की थी। लेकिन जब कोई दुर्घटना ऐसी अजीबोगरीब परिस्थितियों में होती है जो बिना घोर लापरवाही के घट ही नहीं सकती (जैसे ऑपरेशन के बाद मरीज के पेट में कैंची छूट जाना, या चलती ट्रेन के डिब्बे का पहिया अचानक निकल जाना), तो अदालत मान लेती है कि लापरवाही हुई है। यहाँ सबूत देने की जिम्मेदारी उलट जाती है और डॉक्टर या कंपनी को यह साबित करना पड़ता है कि उसने कोई लापरवाही नहीं की थी।',
    etymologyAndHistory: 'Formulated by Erle C.J. in the landmark English case Scott v. London and St. Katherine Docks Co. (1865): "Where the thing is shown to be under the management of the defendant or his servants, and the accident is such as in the ordinary course of things does not happen if those who have the management use proper care..."',
    statutoryBasis: 'Indian Common Law of Torts; Consumer Protection Act, 2019 — Section 2(11) (Deficiency in service); Bharatiya Sakshya Adhiniyam, 2023 — Section 119 (Presumptions).',
    essentialElements: [
      'Exclusive Control: The apparatus, premises, or instrumentality causing the harm was under the sole control of the defendant.',
      'Unusual Occurrence: The accident is of such a nature that it does not ordinarily occur in the absence of negligence.',
      'Unknown Cause: The precise mechanism of how the accident happened is unknown to the plaintiff.',
      'Rebuttal Burden: Shifts the burden onto the defendant to provide an innocent, plausible explanation consistent with due care.'
    ],
    practicalScenarios: [
      {
        title: 'Surgical Mop Left Inside Abdomen After Gallbladder Operation',
        facts: 'Following a surgical operation, a patient suffers agonizing abdominal pain for 6 months. An X-ray reveals a surgical sponge/mop left inside the peritoneal cavity.',
        issue: 'Does the patient have to prove which specific doctor or nurse dropped the sponge?',
        rule: 'Under Res Ipsa Loquitur, leaving a foreign body inside a patient during surgery is conclusive proof of negligence by the surgical team.',
        application: 'The Consumer National Commission applies Res Ipsa Loquitur and awards ₹25 Lakhs compensation against the hospital.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Municipal Corporation of Delhi v. Subhagwanti',
        citation: 'AIR 1966 SC 1750',
        court: 'Supreme Court of India (Constitution Bench)',
        ratioDecidendi: 'The historic Clock Tower in Chandni Chowk, Delhi, which was in the sole management of the Municipal Corporation, collapsed in normal weather, killing several pedestrians. Held that the maxim Res Ipsa Loquitur applied; the collapse of an 80-year-old tower spoke for itself, and the Corporation was liable for failure to maintain.',
        relevance: 'The foundational Indian judgment applying Res Ipsa Loquitur to municipal structural collapses.'
      },
      {
        caseName: 'Jacob Mathew v. State of Punjab',
        citation: '(2005) 6 SCC 1',
        court: 'Supreme Court of India (3-Judge Bench)',
        ratioDecidendi: 'Analyzed the application of Res Ipsa Loquitur in medical negligence, holding that an accident in surgery does not automatically attract the maxim unless the mistake is so obvious that no medical professional exercising ordinary skill would have made it.',
        relevance: 'Established the boundaries of Res Ipsa Loquitur in medical malpractice.'
      }
    ],
    exceptionsAndMisconceptions: 'Res Ipsa Loquitur is a rule of evidence, not a rule of substantive law; it does NOT apply if all the facts and causes of the accident are fully known and before the court.',
    litigationApplication: 'Heavily relied upon in consumer forums in medical negligence complaints, airline crash claims, elevator failure accidents, and electrocution suits.',
    relatedTerms: [
      { term: 'Strict Liability', id: 'dict-strict-liability-rylands', relationship: 'Liability without fault vs presumption of fault.' },
      { term: 'Contributory Negligence', id: 'dict-contributory-negligence', relationship: 'Victim own fault can rebut res ipsa loquitur.' }
    ],
    faqs: [
      {
        q: 'Can a criminal conviction be based solely on Res Ipsa Loquitur?',
        a: 'No. In criminal law under Section 106 BNS (negligent death), the prosecution must prove gross criminal rashness beyond reasonable doubt; Res Ipsa Loquitur is restricted to civil tort and consumer actions (Jacob Mathew).'
      }
    ],
    examNotes: 'Classic Tort Law question. Quote Erle C.J. in Scott v. London Docks (1865). Detail MCD v. Subhagwanti (1966) (Clock Tower case) and Jacob Mathew (2005).',
    sourceProvenance: {
      primarySource: 'Scott v. London Docks (1865) 159 ER 665; MCD v. Subhagwanti AIR 1966 SC 1750',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Evidentiary Maxim'
    },
    tags: ['tort-civil-liability', 'res-ipsa-loquitur', 'negligence', 'medical-negligence', 'subhagwanti', 'jacob-mathew', 'burden-of-proof']
  },

  {
    id: 'dict-tort-of-defamation',
    term: 'Civil Defamation (Libel vs Slander & Defences)',
    category: 'Substantive Doctrine',
    subCategory: 'Injury to Reputation & Free Speech Balance',
    jurisdiction: 'India (Common Law of Torts & BNS Sec 356)',
    language: 'English (Civil & Criminal Defamation)',
    pronunciation: 'def-uh-may-shun',
    literalTranslation: 'Diffamare / Diminishing a person reputation in the estimation of right-thinking members of society.',
    conciseDefinition: 'A civil wrong (tort) and criminal offence (Section 356 BNS) committed by publishing a false and unprivileged statement concerning a person that tends to lower their reputation, expose them to hatred, contempt, or ridicule, or cause them to be shunned in society.',
    detailedMeaning: 'Under Indian law, defamation exists in dual forms: as an actionable civil tort for unliquidated damages, and as a criminal offence under Section 356 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 499 IPC). While English Common Law strictly divides defamation into Libel (permanent written/recorded form, actionable per se) and Slander (transitory spoken form, requiring proof of special damage), Indian courts generally treat both libel and slander as actionable without proof of special damage. The recognized defences are: (1) Justification by Truth (absolute defence in civil tort; in criminal law, truth must be accompanied by public good); (2) Fair Comment on a matter of public interest; and (3) Absolute and Qualified Privilege.',
    hindiExplanation: 'मानहानि का टॉर्ट (Civil Defamation - Libel vs Slander): किसी भी नागरिक की प्रतिष्ठा (Reputation) उसका अमूल्य अधिकार है। मानहानि तब होती है जब कोई व्यक्ति किसी अन्य व्यक्ति के बारे में बिना किसी कानूनी आधार के कोई ऐसा झूठा बयान प्रकाशित करता है जिससे समाज के सम्मानित लोगों की नजरों में उस व्यक्ति की साख, सम्मान या प्रतिष्ठा गिरती है। अंग्रेजी कानून में लिखित मानहानि को "लिबेल" (Libel) और मौखिक को "स्लैंडर" (Slander) कहते हैं। भारत में मानहानि सिविल टॉर्ट (मुआवजे के लिए) और आपराधिक अपराध (BNS धारा 356 में 2 साल तक की जेल) दोनों है। इसके मुख्य बचाव हैं: सच बोलना (Truth), जनहित में निष्पक्ष टिप्पणी (Fair Comment), और विशेषाधिकार (Privilege)।',
    etymologyAndHistory: 'Developed from Roman "actio injuriarum" and English Star Chamber criminal libel. Codified criminally in Section 499 IPC 1860 (now Section 356 BNS 2023) and upheld as a constitutional restriction on free speech under Article 19(2) in Subramanian Swamy (2016).',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 — Section 356 (Criminal Defamation); Constitution of India — Article 19(1)(a) & Article 19(2) (Reasonable restrictions); Code of Civil Procedure, 1908 — Section 19.',
    essentialElements: [
      'Defamatory Statement: Statement tending to lower reputation in the estimation of right-thinking members of society.',
      'Reference to Plaintiff: The statement must reasonably be understood by third parties to refer to the plaintiff.',
      'Publication: Communication of the defamatory statement to at least one third party other than the plaintiff.',
      'Absence of Lawful Defence: Must not be protected by Truth, Fair Comment, or Privilege.'
    ],
    practicalScenarios: [
      {
        title: 'Newspaper Publishing Unverified Corruption Accusations Against a Doctor',
        facts: 'A newspaper publishes an article falsely claiming a renowned surgeon runs an illegal kidney harvesting racket, causing patients to cancel all surgeries. The allegations are completely baseless.',
        issue: 'Can the surgeon sue the newspaper for civil damages and criminal prosecution?',
        rule: 'Publishing unverified false statements injuring professional reputation constitutes actionable civil defamation and Section 356 BNS.',
        application: 'The civil court awards ₹50 Lakhs damages and the criminal magistrate issues summons under Section 356 BNS.'
      }
    ],
    landmarkJudgments: [
      {
        caseName: 'Subramanian Swamy v. Union of India',
        citation: '(2016) 7 SCC 221',
        court: 'Supreme Court of India (2-Judge Bench)',
        ratioDecidendi: 'Upheld the constitutional validity of criminal defamation under Sections 499/500 IPC (now Sec 356 BNS), holding that the right to reputation is an integral facet of the Right to Life under Article 21, and serves as a reasonable restriction on free speech under Article 19(2).',
        relevance: 'The landmark ruling establishing reputation as a protected Article 21 right against defamation.'
      },
      {
        caseName: 'D.P. Choudhury v. Manjulata',
        citation: 'AIR 1997 Raj 170',
        court: 'Rajasthan High Court',
        ratioDecidendi: 'A local daily published a false report that a 17-year-old college girl had eloped, shocking her community. Held that the statement was defamatory per se, and general damages were awarded without proof of financial loss.',
        relevance: 'Affirmed that false news injuring personal reputation is actionable per se.'
      }
    ],
    exceptionsAndMisconceptions: 'Truth alone is a complete defence in civil tort; but in criminal defamation under Section 356 BNS (Exception 1), the accused must prove BOTH that the imputation is true AND that it was made for the "public good".',
    litigationApplication: 'Begins with a formal Legal Demand Notice under Section 356 BNS demanding unconditional apology and damages. Followed by a civil suit under Section 19 CPC or a criminal complaint under Section 223 BNSS.',
    relatedTerms: [
      { term: 'Injuria Sine Damno', id: 'dict-injuria-sine-damno', relationship: 'Libel is actionable per se without proving damage.' },
      { term: 'Legal Demand Notices', id: 'draft-legal-notices', relationship: 'Pre-litigation defamation notices.' }
    ],
    faqs: [
      {
        q: 'What is the difference between Absolute Privilege and Qualified Privilege?',
        a: 'Absolute Privilege (parliamentary debates, judicial proceedings) protects statements completely, even if made with malice. Qualified Privilege (employment references, police complaints) protects statements made without actual malice.'
      }
    ],
    examNotes: 'Differentiate Civil Defamation (tort damages) from Criminal Defamation (BNS Section 356). Master Subramanian Swamy (2016) and memorize the 4 defences: Truth, Fair Comment, Absolute Privilege, Qualified Privilege.',
    sourceProvenance: {
      primarySource: 'Bharatiya Nyaya Sanhita, 2023, Section 356; Subramanian Swamy (2016) 7 SCC 221',
      officialUrl: 'https://main.sci.gov.in',
      verificationStatus: 'Verified Civil & Penal Tort'
    },
    tags: ['tort-civil-liability', 'defamation', 'bns-section-356', 'libel', 'slander', 'subramanian-swamy', 'reputation', 'article-21']
  }
];
