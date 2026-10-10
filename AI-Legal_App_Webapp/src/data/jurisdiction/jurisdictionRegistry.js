/**
 * AI LEGAL™ CENTRAL JURISDICTION & TAXONOMY REGISTRY
 * Authoritative multi-jurisdiction registry defining sovereign legal frameworks,
 * official sources, apex courts, subdivisions, and dynamic subject taxonomies.
 */

import { CORE_LEGAL_SUBJECTS } from '../legalTaxonomy.js';

export const JURISDICTIONS = {
  IN: {
    id: 'IN',
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    subTitle: 'Constitution, BNS, BNSS, BSA, CPC',
    legalSystem: 'Common Law with Codified Constitutional Supremacy',
    apexCourt: 'Supreme Court of India (sci.gov.in)',
    courtHierarchy: ['District & Sessions Courts', 'High Courts of States', 'Supreme Court of India'],
    officialSources: [
      { name: 'India Code', url: 'https://www.indiacode.nic.in', authority: 'Legislative Department' },
      { name: 'Supreme Court of India', url: 'https://sci.gov.in', authority: 'Apex Judiciary' },
      { name: 'The Gazette of India', url: 'https://egazette.gov.in', authority: 'Official Gazette' }
    ],
    currency: 'INR (₹)',
    subdivisionsName: 'States & Union Territories',
    subdivisions: [
      'Maharashtra', 'Delhi (NCT)', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 
      'West Bengal', 'Gujarat', 'Rajasthan', 'Kerala', 'Telangana'
    ]
  },

  NP: {
    id: 'NP',
    code: 'NP',
    name: 'Nepal',
    flag: '🇳🇵',
    subTitle: 'Constitution 2072, Muluki Codes, Supreme Court (नेपाल कानून)',
    legalSystem: 'Civil & Common Law Synthesis under Federal Constitution 2072',
    apexCourt: 'Supreme Court of Nepal (सर्वोच्च अदालत - supremecourt.gov.np)',
    courtHierarchy: [
      'District Courts (जिल्ला अदालत - 77 Districts)', 
      'High Courts (उच्च अदालत - 7 Provinces)', 
      'Supreme Court of Nepal (सर्वोच्च अदालत)'
    ],
    officialSources: [
      { name: 'Nepal Law Commission', url: 'https://lawcommission.gov.np', authority: 'Nepal Law Commission' },
      { name: 'Supreme Court of Nepal', url: 'https://supremecourt.gov.np', authority: 'Apex Judiciary & NLR' },
      { name: 'Nepal Gazette (नेपाल राजपत्र)', url: 'http://rajpatra.dop.gov.np', authority: 'Department of Printing' },
      { name: 'Nepal Rastra Bank', url: 'https://nrb.org.np', authority: 'Central Bank Regulations' }
    ],
    currency: 'NPR (रू)',
    subdivisionsName: 'Provinces (प्रदेशहरू)',
    subdivisions: [
      'Bagmati (बागमती)', 'Koshi (कोशी)', 'Gandaki (गण्डकी)', 
      'Lumbini (लुम्बिनी)', 'Madhesh (मधेश)', 'Karnali (कर्णाली)', 'Sudurpashchim (सुदूरपश्चिम)'
    ]
  },

  US: {
    id: 'US',
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    subTitle: 'US Constitution, Title 18, UCC, FRCP, SCOTUS',
    legalSystem: 'Federal Common Law & Constitutional Republic',
    apexCourt: 'Supreme Court of the United States (SCOTUS - supremecourt.gov)',
    courtHierarchy: ['US District Courts / State Trial Courts', 'US Circuit Courts of Appeals / State Appellate Courts', 'Supreme Court of the United States'],
    officialSources: [
      { name: 'United States Code (LII Cornell)', url: 'https://www.law.cornell.edu/uscode', authority: 'Federal Statutes' },
      { name: 'Supreme Court of the United States', url: 'https://supremecourt.gov', authority: 'Federal Apex Court' },
      { name: 'Federal Register', url: 'https://federalregister.gov', authority: 'Official Federal Gazette' }
    ],
    currency: 'USD ($)',
    subdivisionsName: 'States & Federal Circuits',
    subdivisions: ['Federal Law', 'California', 'New York', 'Texas', 'Florida', 'Delaware', 'Illinois']
  },

  GB: {
    id: 'GB',
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    subTitle: 'UK Constitutional Law, English Contract, UKSC, Acts of Parliament',
    legalSystem: 'English Common Law, Scots Law, Northern Ireland Law',
    apexCourt: 'Supreme Court of the United Kingdom (UKSC - supremecourt.uk)',
    courtHierarchy: ['Magistrates & County Courts', 'Crown Court & High Court of Justice', 'Court of Appeal', 'Supreme Court of the UK'],
    officialSources: [
      { name: 'legislation.gov.uk', url: 'https://legislation.gov.uk', authority: 'The National Archives' },
      { name: 'Supreme Court of the UK', url: 'https://supremecourt.uk', authority: 'Apex Judiciary' },
      { name: 'BAILII', url: 'https://bailii.org', authority: 'British and Irish Legal Information Institute' }
    ],
    currency: 'GBP (£)',
    subdivisionsName: 'Legal Jurisdictions',
    subdivisions: ['England & Wales', 'Scotland', 'Northern Ireland']
  },

  GLOBAL: {
    id: 'GLOBAL',
    code: 'GLOBAL',
    name: 'International',
    flag: '🌐',
    subTitle: 'UN Charter, UDHR, Geneva Conventions, Rome Statute, ICJ',
    legalSystem: 'Public & Private International Law, Treaties & Customary Law',
    apexCourt: 'International Court of Justice (ICJ - The Hague) & ICC',
    courtHierarchy: ['International Arbitration Tribunals (PCA, ICSID)', 'Specialist Tribunals (ITLOS)', 'International Court of Justice'],
    officialSources: [
      { name: 'UN Treaty Collection', url: 'https://treaties.un.org', authority: 'United Nations' },
      { name: 'International Court of Justice', url: 'https://icj-cij.org', authority: 'UN Principal Judicial Organ' },
      { name: 'OHCHR Human Rights Instruments', url: 'https://ohchr.org', authority: 'UN Human Rights' }
    ],
    currency: 'International / USD',
    subdivisionsName: 'International Treaties & Regimes',
    subdivisions: ['UN System', 'International Human Rights', 'International Trade (WTO)', 'International Commercial Arbitration']
  }
};

export const JURISDICTION_REGISTRY = JURISDICTIONS;

/**
 * Jurisdiction-Specific Core Subjects Taxonomy
 */
export const JURISDICTION_SUBJECTS = {
  IN: CORE_LEGAL_SUBJECTS,

  NP: [
    {
      id: 'constitutional-law-np',
      name: 'Constitutional Law of Nepal (नेपालको संविधान)',
      category: 'Public & Constitutional Law',
      icon: '🇳🇵',
      description: 'Constitution of Nepal 2072: 35 Parts, 308 Articles, 33 Fundamental Rights (Part 3), Extraordinary Jurisdiction & Writs under Articles 133 & 144, Judicial Review, Federal Structure.',
      tagCount: '308 Articles',
      featuredAct: 'Constitution of Nepal, 2072 (२०७२)'
    },
    {
      id: 'muluki-criminal-code',
      name: 'Muluki Criminal Code (मुलुकी अपराध संहिता)',
      category: 'Criminal Law',
      icon: '⚖️',
      description: 'Substantive penal law of Nepal: Criminal liability, offenses against life, property, public peace, state integrity, financial crimes and penal sanctions under the 2074 Code.',
      tagCount: '308 Sections',
      featuredAct: 'Muluki Criminal Code, 2074 (मुलुकी अपराध संहिता)'
    },
    {
      id: 'muluki-criminal-procedure',
      name: 'Muluki Criminal Procedure (मुलुकी फौजदारी कार्यविधि)',
      category: 'Criminal Procedure',
      icon: '🛡️',
      description: 'Jaheri Darkhast (जाहेरी), investigation, arrest, charge sheet, custodial & regular bail (Sec 67, 68, 71), trial procedure and appeals in District, High, and Supreme Courts.',
      tagCount: '192 Sections',
      featuredAct: 'Muluki Criminal Procedure Code, 2074'
    },
    {
      id: 'muluki-civil-code',
      name: 'Muluki Civil Code (मुलुकी देवानी संहिता)',
      category: 'Civil & Commercial Law',
      icon: '📜',
      description: 'Substantive civil law: Contracts, obligations, property rights, transfer of ownership, inheritance & partition (अंशबन्डा), family relations, marriage and tortious liabilities.',
      tagCount: '721 Sections',
      featuredAct: 'Muluki Civil Code, 2074 (मुलुकी देवानी संहिता)'
    },
    {
      id: 'muluki-civil-procedure',
      name: 'Muluki Civil Procedure (मुलुकी देवानी कार्यविधि)',
      category: 'Civil Procedure',
      icon: '⚖️',
      description: 'Filing of plaint (फिरादपत्र), limitation (हदम्याद), Res Judicata (प्राङ्न्याय), Interim Orders (अन्तरकालीन आदेश), execution of judgments (फैसला कार्यान्वयन), mediation (मिलापत्र).',
      tagCount: '312 Sections',
      featuredAct: 'Muluki Civil Procedure Code, 2074'
    },
    {
      id: 'nepal-evidence-act',
      name: 'Evidence Law of Nepal (प्रमाण ऐन, २०३१)',
      category: 'Adjectival & Procedural Law',
      icon: '🔍',
      description: 'Admissibility of documentary and electronic evidence, burden of proof (प्रमाणको भार), presumptions, confessions, expert testimony, and examination of witnesses.',
      tagCount: '54 Sections',
      featuredAct: 'Evidence Act, 2031 (प्रमाण ऐन, २०३१)'
    },
    {
      id: 'banking-offences-nepal',
      name: 'Banking Offences & Cheque Dishonour',
      category: 'Financial & Commercial Law',
      icon: '🏦',
      description: 'Banking Offence and Punishment Act 2064: Criminal prosecution for bounced cheques (बाउन्स चेक), unauthorised transactions, banking fraud, financial penalties, and blacklisting.',
      tagCount: 'Banking Offence Act',
      featuredAct: 'Banking Offence and Punishment Act, 2064'
    },
    {
      id: 'nepal-corporate-labour',
      name: 'Corporate & Labour Law of Nepal',
      category: 'Corporate & Labour Law',
      icon: '🏢',
      description: 'Companies Act 2063 (company incorporation, shareholder remedies) and Labour Act 2074 (employment contracts, minimum wages, social security fund, severance).',
      tagCount: 'Company & Labour Acts',
      featuredAct: 'Companies Act 2063 & Labour Act 2074'
    }
  ],

  US: [
    {
      id: 'us-constitutional-law',
      name: 'US Constitutional Law',
      category: 'Constitutional Law',
      icon: '🏛️',
      description: 'US Constitution 1787: Articles I-VII, Bill of Rights (1st-10th Amendments), 14th Amendment Due Process & Equal Protection, Judicial Review, Federalism.',
      tagCount: '7 Articles & 27 Amdts',
      featuredAct: 'United States Constitution (1787)'
    },
    {
      id: 'us-federal-crimes',
      name: 'Federal Criminal Law (Title 18 U.S.C.)',
      category: 'Criminal Law',
      icon: '⚖️',
      description: 'Title 18 Crimes and Criminal Procedure: Federal mail & wire fraud, RICO, conspiracy, drug offenses, Federal Sentencing Guidelines.',
      tagCount: 'Title 18 U.S.C.',
      featuredAct: 'Title 18, United States Code'
    },
    {
      id: 'us-civil-procedure',
      name: 'Federal Civil Procedure (FRCP)',
      category: 'Civil Procedure',
      icon: '📜',
      description: 'Federal Rules of Civil Procedure: Rule 8 pleading standards (Twombly/Iqbal), Rule 12(b)(6) motions, Rule 26 discovery, Rule 56 summary judgment.',
      tagCount: '86 Rules',
      featuredAct: 'Federal Rules of Civil Procedure (FRCP)'
    },
    {
      id: 'us-commercial-ucc',
      name: 'Commercial Law (Uniform Commercial Code)',
      category: 'Commercial Law',
      icon: '🤝',
      description: 'Uniform Commercial Code: Article 2 (Sales of Goods), Article 9 (Secured Transactions), negotiable instruments, breach and commercial remedies.',
      tagCount: 'UCC Articles 1-9',
      featuredAct: 'Uniform Commercial Code (UCC)'
    },
    {
      id: 'us-torts-liability',
      name: 'Torts & Products Liability',
      category: 'Tort Law',
      icon: '🛡️',
      description: 'Restatement (Third) of Torts: Negligence, strict products liability, intentional torts, proximate cause, punitive damages, multi-district litigation.',
      tagCount: 'Restatement of Torts',
      featuredAct: 'Restatement of the Law of Torts'
    }
  ],

  GB: [
    {
      id: 'uk-constitutional-admin',
      name: 'UK Public & Constitutional Law',
      category: 'Public Law',
      icon: '🏛️',
      description: 'Parliamentary Sovereignty, Rule of Law, Human Rights Act 1998, Judicial Review in Administrative Court, Prerogative Powers (*Miller I & II*).',
      tagCount: 'Statutes & Precedents',
      featuredAct: 'Human Rights Act 1998 & Const. Reform Act 2005'
    },
    {
      id: 'english-contract-law',
      name: 'English Law of Contract',
      category: 'Commercial Law',
      icon: '🤝',
      description: 'Offer, acceptance, consideration (*Currie v Misa*), terms & warranties, frustration, breach, damages (*Hadley v Baxendale*), Consumer Rights Act 2015.',
      tagCount: 'Common Law & Statutes',
      featuredAct: 'Sale of Goods Act 1979 & CRA 2015'
    },
    {
      id: 'english-tort-law',
      name: 'English Law of Torts',
      category: 'Tort Law',
      icon: '⚖️',
      description: 'Negligence duty of care (*Caparo/Robinson*), breach, causation (*Bolitho*), occupiers liability, vicarious liability, nuisance (*Rylands v Fletcher*).',
      tagCount: 'Common Law Doctrine',
      featuredAct: 'Civil Liability & Common Law'
    },
    {
      id: 'uk-criminal-law',
      name: 'English Criminal Law & PACE',
      category: 'Criminal Law & Procedure',
      icon: '🛡️',
      description: 'Offences Against the Person Act 1861, Theft Act 1968, Fraud Act 2006, PACE 1984 (powers of arrest, search, detention), Criminal Procedure Rules (CrimPR).',
      tagCount: 'Criminal Enactments',
      featuredAct: 'PACE 1984 & Theft Act 1968'
    },
    {
      id: 'uk-company-law',
      name: 'UK Corporate Law (Companies Act 2006)',
      category: 'Corporate Law',
      icon: '🏢',
      description: 'Companies Act 2006: Directors general duties (Sec 171-177), derivative claims, unfair prejudice (Sec 994), corporate governance, insolvency.',
      tagCount: '1300 Sections',
      featuredAct: 'Companies Act 2006'
    }
  ],

  GLOBAL: [
    {
      id: 'public-international-law',
      name: 'Public International Law & UN Charter',
      category: 'International Law',
      icon: '🌐',
      description: 'Charter of the United Nations (1945), sovereignty, non-intervention, use of force (Article 2(4) & 51), Security Council resolutions, ICJ jurisdiction.',
      tagCount: '111 Articles',
      featuredAct: 'Charter of the United Nations (1945)'
    },
    {
      id: 'international-human-rights',
      name: 'International Human Rights Law',
      category: 'Human Rights',
      icon: '🕊️',
      description: 'Universal Declaration of Human Rights (UDHR, 1948), ICCPR (1966), ICESCR (1966), CAT, non-refoulement principle, regional conventions (ECHR, IACHR).',
      tagCount: 'Universal Covenants',
      featuredAct: 'UDHR (1948) & ICCPR (1966)'
    },
    {
      id: 'law-of-treaties',
      name: 'Law of Treaties (VCLT 1969)',
      category: 'Treaty Law',
      icon: '📜',
      description: 'Vienna Convention on the Law of Treaties (1969): Pacta sunt servanda, treaty interpretation (Articles 31-32), reservations, invalidity, jus cogens (Art 53).',
      tagCount: '85 Articles',
      featuredAct: 'Vienna Convention on the Law of Treaties, 1969'
    },
    {
      id: 'international-humanitarian-law',
      name: 'International Humanitarian Law & ICC',
      category: 'IHL & Criminal Law',
      icon: '⚔️',
      description: 'Geneva Conventions of 1949 and Additional Protocols; Rome Statute of the International Criminal Court (ICC, 1998): War crimes, crimes against humanity, genocide.',
      tagCount: 'Rome Statute & Geneva Convs',
      featuredAct: 'Rome Statute of the ICC (1998)'
    },
    {
      id: 'international-commercial-arbitration',
      name: 'International Commercial Arbitration',
      category: 'Dispute Resolution',
      icon: '⚖️',
      description: 'New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards (1958), UNCITRAL Model Law, Kompetenz-Kompetenz, seat vs venue.',
      tagCount: 'NY Convention 1958',
      featuredAct: 'New York Convention (1958)'
    }
  ]
};

/**
 * Dynamic Content-Type Filters Configuration by Jurisdiction
 */
export const getFiltersConfigForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();

  if (norm === 'NP') {
    return {
      ALL: {
        label: 'Explore Law (नेपाल कानून)',
        defaultFilter: 'ALL',
        filterKicker: 'Nepal Legal Domains (कानूनी क्षेत्रहरू):',
        filters: [
          { id: 'ALL', label: 'All Subjects (सबै विषयहरू)', shortLabel: 'All Law', matchKeywords: [] },
          { id: 'constitutional-law-np', label: 'Constitutional Law (नेपालको संविधान)', shortLabel: 'Constitution', matchKeywords: ['constitution', 'fundamental rights', 'writs', 'article 133', 'article 144', 'नेपालको संविधान'] },
          { id: 'muluki-criminal-code', label: 'Criminal Law (मुलुकी अपराध संहिता)', shortLabel: 'Criminal Code', matchKeywords: ['criminal', 'penal', 'muluki crime', 'homicide', 'fraud', 'अपराध संहिता'] },
          { id: 'muluki-criminal-procedure', label: 'Criminal Procedure (फौजदारी कार्यविधि)', shortLabel: 'CrPC (फौजदारी)', matchKeywords: ['procedure', 'bail', 'jaheri', 'arrest', 'investigation', 'फौजदारी कार्यविधि'] },
          { id: 'muluki-civil-code', label: 'Civil Code (मुलुकी देवानी संहिता)', shortLabel: 'Civil Code', matchKeywords: ['civil', 'contract', 'property', 'devani', 'inheritance', 'देवानी संहिता'] },
          { id: 'muluki-civil-procedure', label: 'Civil Procedure (देवानी कार्यविधि)', shortLabel: 'CPC (देवानी)', matchKeywords: ['civil procedure', 'injunction', 'res judicata', 'firaad', 'interim order', 'देवानी कार्यविधि'] },
          { id: 'nepal-evidence-act', label: 'Evidence Law (प्रमाण ऐन, २०३१)', shortLabel: 'Evidence Act', matchKeywords: ['evidence', 'burden of proof', 'praman', 'प्रमाण ऐन'] },
          { id: 'banking-offences-nepal', label: 'Banking Offences (बैंकिङ कसूर)', shortLabel: 'Banking Offence', matchKeywords: ['banking offence', 'cheque bounce', 'dishonour', 'बैंकिङ कसूर'] }
        ]
      },
      BARE_ACTS: {
        label: 'Statutes & Codes of Nepal (नेपालका ऐन तथा संहिताहरू)',
        defaultFilter: 'ALL',
        filterKicker: 'Nepalese Statutory Codes:',
        filters: [
          { id: 'ALL', label: 'All Nepal Acts & Codes (8 Major Codes)', shortLabel: 'All Codes', matchKeywords: [] },
          { id: 'consti-np', label: 'Constitution of Nepal 2072', shortLabel: 'Constitution 2072', matchKeywords: ['constitution', '2072', 'fundamental rights'] },
          { id: 'muluki-crim', label: 'Muluki Criminal Code 2074', shortLabel: 'Criminal Code', matchKeywords: ['muluki criminal', 'crime', 'penal'] },
          { id: 'muluki-cr-proc', label: 'Muluki Criminal Procedure 2074', shortLabel: 'Criminal Procedure', matchKeywords: ['criminal procedure', 'bail', 'jaheri'] },
          { id: 'muluki-civil', label: 'Muluki Civil Code 2074', shortLabel: 'Civil Code', matchKeywords: ['civil code', 'contract', 'property'] },
          { id: 'muluki-civ-proc', label: 'Muluki Civil Procedure 2074', shortLabel: 'Civil Procedure', matchKeywords: ['civil procedure', 'injunction', 'decree'] },
          { id: 'nepal-evidence', label: 'Evidence Act 2031', shortLabel: 'Evidence Act', matchKeywords: ['evidence', 'proof', 'praman'] },
          { id: 'nepal-companies', label: 'Companies Act 2063', shortLabel: 'Companies Act', matchKeywords: ['company', 'corporate'] },
          { id: 'nepal-labour', label: 'Labour Act 2074', shortLabel: 'Labour Act', matchKeywords: ['labour', 'employment', 'wages'] }
        ]
      },
      CASE_LAWS: {
        label: 'Supreme Court of Nepal Landmark Decisions (सर्वोच्च अदालतका नजिरहरू)',
        defaultFilter: 'ALL',
        filterKicker: 'Nepalese Precedent Domains:',
        filters: [
          { id: 'ALL', label: 'All Supreme Court Rulings', shortLabel: 'All Rulings', matchKeywords: [] },
          { id: 'constitutional-benches-np', label: 'Constitutional Bench (संवैधानिक इजलास)', shortLabel: 'Const. Bench', matchKeywords: ['constitutional', 'fundamental rights', 'article 133'] },
          { id: 'pil-environmental-np', label: 'Public Interest & Environment (सार्वजनिक सरोकार)', shortLabel: 'PIL & Env.', matchKeywords: ['pil', 'environment', 'prakash mani'] },
          { id: 'gender-equality-np', label: 'Gender Equality & Property Rights (लैङ्गिक समानता)', shortLabel: 'Gender Rights', matchKeywords: ['gender', 'daughter property', 'meera dhungana'] },
          { id: 'criminal-bail-np', label: 'Criminal Law & Bail Decisions (फौजदारी तथा जमानत)', shortLabel: 'Criminal Precedents', matchKeywords: ['criminal', 'bail', 'habeas corpus', 'muluki'] }
        ]
      },
      ARTICLES: {
        label: 'Scholarly Treatises on Nepalese Law (नेपाली कानूनी विश्लेषणात्मक लेखहरू)',
        defaultFilter: 'ALL',
        filterKicker: 'Nepalese Doctrinal Treatises:',
        filters: [
          { id: 'ALL', label: 'All Nepal Treatises (8 Master Treatises)', shortLabel: 'All Treatises', matchKeywords: [] },
          { id: 'np-consti-writs', label: 'Constitutional Law & Extraordinary Writs (धारा १३३)', shortLabel: 'Constitutional Writs', matchKeywords: ['constitutional', 'writ', 'habeas corpus', 'mandamus', '133', '144'] },
          { id: 'np-criminal-code', label: 'Muluki Criminal Code & Penal Principles', shortLabel: 'Criminal Liability', matchKeywords: ['criminal liability', 'penal', 'homicide', 'mens rea', 'banking fraud'] },
          { id: 'np-bail-jurisprudence', label: 'Bail Jurisprudence (दफा ६७ र ६८ जमानत)', shortLabel: 'Bail Jurisprudence', matchKeywords: ['bail', 'pre-trial liberty', 'custody', 'section 67', 'section 68'] },
          { id: 'np-civil-contracts', label: 'Civil Obligations & Contracts (करार कानून)', shortLabel: 'Contracts & Civil', matchKeywords: ['civil code', 'contract', 'breach', 'damages', 'property'] },
          { id: 'np-civil-procedure', label: 'Res Judicata & Injunctions (प्राङ्न्याय र अन्तरकालीन)', shortLabel: 'Civil Procedure', matchKeywords: ['res judicata', 'injunction', 'interim order', 'plaint', 'प्राङ्न्याय'] },
          { id: 'np-evidence-law', label: 'Evidence Standards & Digital Proof (प्रमाण ऐन)', shortLabel: 'Evidence Law', matchKeywords: ['evidence', 'burden of proof', 'digital evidence', 'admissibility'] },
          { id: 'np-banking-crimes', label: 'Banking Offences & Cheque Dishonour (बैंकिङ कसूर)', shortLabel: 'Banking Offence', matchKeywords: ['banking offence', 'cheque bounce', 'dishonour', 'financial fraud'] },
          { id: 'np-gender-justice', label: 'Gender Equality & Property Jurisprudence', shortLabel: 'Gender Justice', matchKeywords: ['gender equality', 'daughter property', 'meera dhungana', 'succession'] }
        ]
      },
      PROCEDURES: {
        label: 'Court Procedures of Nepal (अदालती कार्यविधि निर्देशिका)',
        defaultFilter: 'ALL',
        filterKicker: 'Litigation Workflows in Nepal Courts:',
        filters: [
          { id: 'ALL', label: 'All Nepalese Court Procedures', shortLabel: 'All Procedures', matchKeywords: [] },
          { id: 'np-crpc-investigation', label: 'Jaheri Darkhast & Police Investigation (जाहेरी दर्ता)', shortLabel: 'Jaheri & FIR', matchKeywords: ['jaheri', 'fir', 'police investigation', 'arrest'] },
          { id: 'np-crpc-bail', label: 'Bail Application in District & High Court (जमानत निवेदन)', shortLabel: 'Bail Application', matchKeywords: ['bail', 'district court', 'high court', 'sec 67', 'sec 68'] },
          { id: 'np-writ-filing', label: 'Supreme Court Writ Petition (सर्वोच्चमा रिट निवेदन)', shortLabel: 'Supreme Court Writs', matchKeywords: ['writ', 'article 133', 'habeas corpus', 'mandamus'] },
          { id: 'np-cpc-injunction', label: 'Civil Plaint & Interim Injunction (फिराद र अन्तरकालीन)', shortLabel: 'Plaint & Injunction', matchKeywords: ['civil plaint', 'interim order', 'injunction', 'firaad'] },
          { id: 'np-banking-cheque', label: 'Banking Offence Cheque Bounce Complaint', shortLabel: 'Cheque Bounce Complaint', matchKeywords: ['banking offence', 'cheque bounce', 'police complaint'] }
        ]
      },
      DRAFTING: {
        label: 'Nepal Legal Drafting Library (नेपाली कानूनी मस्यौदा पुस्तकालय)',
        defaultFilter: 'ALL',
        filterKicker: 'Court-Ready Nepalese Pleadings:',
        filters: [
          { id: 'ALL', label: 'All Nepal Templates', shortLabel: 'All Templates', matchKeywords: [] },
          { id: 'np-writ-drafts', label: 'Supreme Court Writ Petitions (धारा १३३ रिट मस्यौदा)', shortLabel: 'Writ Petitions', matchKeywords: ['writ', 'habeas corpus', 'mandamus', 'certiorari'] },
          { id: 'np-criminal-drafts', label: 'Jaheri & Bail Petitions (जाहेरी तथा जमानत निवेदन)', shortLabel: 'Jaheri & Bail', matchKeywords: ['jaheri darkhast', 'bail petition', 'section 68'] },
          { id: 'np-civil-drafts', label: 'Civil Plaints & Interim Orders (फिरादपत्र तथा अन्तरकालीन)', shortLabel: 'Plaints & Contracts', matchKeywords: ['firaadpatra', 'civil plaint', 'interim order', 'contract'] }
        ]
      },
      RIGHTS_REMEDIES: {
        label: 'Citizen Rights & Remedies in Nepal (नागरिक हक तथा कानूनी उपचार)',
        defaultFilter: 'ALL',
        filterKicker: 'Enforceable Remedies under Nepal Law:',
        filters: [
          { id: 'ALL', label: 'All Nepal Remedies', shortLabel: 'All Remedies', matchKeywords: [] },
          { id: 'np-remedy-habeas', label: 'Remedy Against Illegal Detention (बन्दी प्रत्यक्षीकरण)', shortLabel: 'Habeas Corpus', matchKeywords: ['habeas corpus', 'illegal detention', 'police custody'] },
          { id: 'np-remedy-banking', label: 'Remedy for Cheque Bouncing & Financial Fraud', shortLabel: 'Banking Remedies', matchKeywords: ['banking offence', 'cheque bounce', 'compensation'] },
          { id: 'np-remedy-domestic-violence', label: 'Protection from Domestic Violence (घरेलु हिंसा नियन्त्रण)', shortLabel: 'Domestic Violence', matchKeywords: ['domestic violence', 'protection order', 'women rights'] }
        ]
      },
      LEGAL_UPDATES: {
        label: 'Nepal Gazette & Supreme Court Circulars (नेपाल राजपत्र तथा सूचनाहरू)',
        defaultFilter: 'ALL',
        filterKicker: 'Official Nepalese Publications:',
        filters: [
          { id: 'ALL', label: 'All Nepal Gazette Updates', shortLabel: 'All Updates', matchKeywords: [] },
          { id: 'np-gazette-notices', label: 'Nepal Gazette Notifications (नेपाल राजपत्र)', shortLabel: 'Nepal Gazette', matchKeywords: ['rajpatra', 'gazette', 'amendment'] },
          { id: 'np-supreme-court-circulars', label: 'Supreme Court Circulars & Full Bench Rules', shortLabel: 'SC Circulars', matchKeywords: ['supreme court', 'circular', 'full bench'] },
          { id: 'np-nrb-directives', label: 'Nepal Rastra Bank Banking Directives', shortLabel: 'NRB Directives', matchKeywords: ['nrb', 'rastra bank', 'banking directives'] }
        ]
      },
      DICTIONARY: {
        label: 'Legal Terms & Judicial Maxims of Nepal (कानूनी शब्दकोश तथा शब्दावली)',
        defaultFilter: 'ALL',
        filterKicker: 'Nepalese Statutory Terms:',
        filters: [
          { id: 'ALL', label: 'All Terms & Maxims', shortLabel: 'All Terms', matchKeywords: [] },
          { id: 'nepal-statutory-terms', label: 'Nepalese Statutory Terms (ऐनका पारिभाषिक शब्दहरू)', shortLabel: 'Nepali Terms', matchKeywords: ['nepal', 'muluki', 'jaheri', 'praman', 'firaad', 'prangnyaya'] },
          { id: 'latin-maxims-universal', label: 'Universal Latin Maxims & Legal Canons', shortLabel: 'Latin Maxims', matchKeywords: ['latin', 'maxim', 'doctrine'] }
        ]
      }
    };
  }

  if (norm === 'US') {
    return {
      ALL: {
        label: 'Explore US Law',
        defaultFilter: 'ALL',
        filterKicker: 'United States Legal Domains:',
        filters: [
          { id: 'ALL', label: 'All US Subjects', shortLabel: 'All Law', matchKeywords: [] },
          { id: 'us-constitutional-law', label: 'US Constitutional Law', shortLabel: 'Constitution', matchKeywords: ['constitution', 'bill of rights', 'scotus', 'due process'] },
          { id: 'us-federal-crimes', label: 'Federal Criminal Law (Title 18)', shortLabel: 'Federal Crimes', matchKeywords: ['title 18', 'rico', 'fraud', 'criminal'] },
          { id: 'us-civil-procedure', label: 'Federal Civil Procedure (FRCP)', shortLabel: 'FRCP Procedure', matchKeywords: ['frcp', 'civil procedure', 'discovery', 'summary judgment'] },
          { id: 'us-commercial-ucc', label: 'Commercial Law (UCC)', shortLabel: 'UCC Commercial', matchKeywords: ['ucc', 'sales', 'article 2', 'article 9'] }
        ]
      },
      BARE_ACTS: {
        label: 'US Federal Codes & Uniform Laws',
        defaultFilter: 'ALL',
        filterKicker: 'Statutory Titles:',
        filters: [
          { id: 'ALL', label: 'All US Titles & Rules', shortLabel: 'All Titles', matchKeywords: [] },
          { id: 'us-consti', label: 'United States Constitution (1787)', shortLabel: 'Constitution', matchKeywords: ['constitution', 'amendment'] },
          { id: 'us-title18', label: 'Title 18 U.S. Code (Crimes)', shortLabel: 'Title 18', matchKeywords: ['title 18', 'crimes'] },
          { id: 'us-frcp', label: 'Federal Rules of Civil Procedure', shortLabel: 'FRCP', matchKeywords: ['frcp', 'rules'] },
          { id: 'us-ucc', label: 'Uniform Commercial Code', shortLabel: 'UCC', matchKeywords: ['ucc'] }
        ]
      },
      CASE_LAWS: {
        label: 'SCOTUS & Federal Circuit Landmark Decisions',
        defaultFilter: 'ALL',
        filterKicker: 'Federal Judicial Precedents:',
        filters: [
          { id: 'ALL', label: 'All US Precedents', shortLabel: 'All Cases', matchKeywords: [] },
          { id: 'scotus-constitutional', label: 'SCOTUS Constitutional Rulings', shortLabel: 'SCOTUS', matchKeywords: ['scotus', 'marbury', 'miranda', 'brown'] }
        ]
      },
      ARTICLES: {
        label: 'Scholarly Treatises on US Jurisprudence',
        defaultFilter: 'ALL',
        filterKicker: 'Federal Jurisprudential Treatises:',
        filters: [
          { id: 'ALL', label: 'All US Treatises', shortLabel: 'All Treatises', matchKeywords: [] },
          { id: 'us-consti-doctrines', label: 'Constitutional Due Process & Commerce Clause', shortLabel: 'Constitutional', matchKeywords: ['constitutional', 'due process', 'commerce'] }
        ]
      },
      PROCEDURES: {
        label: 'Federal Litigation Practice Workflows',
        defaultFilter: 'ALL',
        filterKicker: 'FRCP Litigation Flow:',
        filters: [
          { id: 'ALL', label: 'All Federal Procedures', shortLabel: 'All Procedures', matchKeywords: [] }
        ]
      },
      DRAFTING: {
        label: 'US Federal & Commercial Pleadings',
        defaultFilter: 'ALL',
        filterKicker: 'Court-Ready US Pleadings:',
        filters: [
          { id: 'ALL', label: 'All US Templates', shortLabel: 'All Templates', matchKeywords: [] }
        ]
      },
      RIGHTS_REMEDIES: {
        label: 'Federal Rights & Statutory Remedies',
        defaultFilter: 'ALL',
        filterKicker: 'US Remedial Framework:',
        filters: [
          { id: 'ALL', label: 'All US Remedies', shortLabel: 'All Remedies', matchKeywords: [] }
        ]
      },
      LEGAL_UPDATES: {
        label: 'Federal Register & Congressional Acts',
        defaultFilter: 'ALL',
        filterKicker: 'Federal Gazettes:',
        filters: [
          { id: 'ALL', label: 'All Federal Updates', shortLabel: 'All Updates', matchKeywords: [] }
        ]
      },
      DICTIONARY: {
        label: 'US Legal Terminology & Black\'s Law Reference',
        defaultFilter: 'ALL',
        filterKicker: 'US Legal Terms:',
        filters: [
          { id: 'ALL', label: 'All US Terms & Maxims', shortLabel: 'All Terms', matchKeywords: [] },
          { id: 'latin-maxims-universal', label: 'Universal Latin Maxims', shortLabel: 'Latin Maxims', matchKeywords: ['latin', 'maxim'] }
        ]
      }
    };
  }

  if (norm === 'GB' || norm === 'UK') {
    return {
      ALL: {
        label: 'Explore UK Law (English Legal System)',
        defaultFilter: 'ALL',
        filterKicker: 'English Legal Domains:',
        filters: [
          { id: 'ALL', label: 'All UK Subjects', shortLabel: 'All Law', matchKeywords: [] },
          { id: 'uk-constitutional-admin', label: 'UK Public & Constitutional Law', shortLabel: 'Constitutional', matchKeywords: ['constitution', 'parliamentary', 'sovereignty', 'human rights', 'hra', 'judicial review'] },
          { id: 'english-contract-law', label: 'English Law of Contract', shortLabel: 'Contract', matchKeywords: ['contract', 'commercial', 'breach', 'damages', 'consideration', 'cpa'] },
          { id: 'english-tort-law', label: 'English Law of Torts & Negligence', shortLabel: 'Tort Law', matchKeywords: ['tort', 'negligence', 'duty of care', 'caparo', 'robinson', 'nuisance'] },
          { id: 'uk-criminal-law', label: 'English Criminal Law & PACE', shortLabel: 'Criminal & PACE', matchKeywords: ['criminal', 'pace', 'theft act', 'fraud', 'arrest', 'detention'] },
          { id: 'uk-company-law', label: 'UK Corporate Law (Companies Act 2006)', shortLabel: 'Company Law', matchKeywords: ['company', 'corporate', 'directors', 'insolvency', 'companies act'] }
        ]
      },
      BARE_ACTS: {
        label: 'Acts of the UK Parliament & Civil Procedure Rules',
        defaultFilter: 'ALL',
        filterKicker: 'English Statutory Acts & Rules:',
        filters: [
          { id: 'ALL', label: 'All UK Acts & Codes', shortLabel: 'All Acts', matchKeywords: [] },
          { id: 'uk-hra', label: 'Human Rights Act 1998', shortLabel: 'HRA 1998', matchKeywords: ['human rights', 'hra'] },
          { id: 'uk-companies', label: 'Companies Act 2006', shortLabel: 'Companies Act', matchKeywords: ['companies act', 'company'] },
          { id: 'uk-pace', label: 'Police and Criminal Evidence Act 1984 (PACE)', shortLabel: 'PACE 1984', matchKeywords: ['pace', 'police'] },
          { id: 'uk-cra', label: 'Consumer Rights Act 2015', shortLabel: 'CRA 2015', matchKeywords: ['consumer rights', 'goods'] },
          { id: 'uk-cpr', label: 'Civil Procedure Rules (CPR 1998)', shortLabel: 'CPR 1998', matchKeywords: ['cpr', 'civil procedure'] }
        ]
      },
      CASE_LAWS: {
        label: 'Landmark Precedents of England & Wales (UKSC, EWCA, HL)',
        defaultFilter: 'ALL',
        filterKicker: 'English Judicial Precedents:',
        filters: [
          { id: 'ALL', label: 'All UK Precedents', shortLabel: 'All Cases', matchKeywords: [] },
          { id: 'uk-tort-cases', label: 'Negligence & Duty of Care Landmark Cases', shortLabel: 'Tort Precedents', matchKeywords: ['donoghue', 'caparo', 'robinson', 'negligence'] },
          { id: 'uk-const-cases', label: 'Constitutional & Prerogative Rulings (Miller)', shortLabel: 'Constitutional', matchKeywords: ['miller', 'prerogative', 'parliamentary', 'supreme court'] },
          { id: 'uk-contract-cases', label: 'Contract Law Landmark Rulings', shortLabel: 'Contract Cases', matchKeywords: ['carlill', 'hadley', 'baxendale', 'contract'] },
          { id: 'uk-admin-cases', label: 'Judicial Review & Public Law Canons', shortLabel: 'Judicial Review', matchKeywords: ['wednesbury', 'irrationality', 'administrative'] }
        ]
      },
      ARTICLES: {
        label: 'Scholarly Treatises on English Jurisprudence',
        defaultFilter: 'ALL',
        filterKicker: 'English Doctrinal Treatises:',
        filters: [
          { id: 'ALL', label: 'All UK Treatises', shortLabel: 'All Treatises', matchKeywords: [] },
          { id: 'uk-parliamentary-sovereignty', label: 'Parliamentary Sovereignty & Human Rights Act', shortLabel: 'Sovereignty & HRA', matchKeywords: ['sovereignty', 'human rights', 'miller', 'constitutional'] },
          { id: 'uk-contract-treatise', label: 'Expectation Damages & Liquidated Clauses', shortLabel: 'Contract Treatises', matchKeywords: ['contract', 'hadley', 'damages', 'penalties'] },
          { id: 'uk-negligence-treatise', label: 'Modern Duty of Care from Donoghue to Robinson', shortLabel: 'Negligence Treatises', matchKeywords: ['negligence', 'duty of care', 'robinson', 'caparo'] }
        ]
      },
      PROCEDURES: {
        label: 'Civil Procedure Rules & Litigation Workflows',
        defaultFilter: 'ALL',
        filterKicker: 'English Court Practice Workflows:',
        filters: [
          { id: 'ALL', label: 'All UK Procedures', shortLabel: 'All Procedures', matchKeywords: [] },
          { id: 'cpr-civil-claim', label: 'CPR Part 7 Multi-Track Civil Action', shortLabel: 'CPR Part 7', matchKeywords: ['cpr', 'part 7', 'claim form', 'particulars'] },
          { id: 'uk-judicial-review-proc', label: 'Administrative Court Judicial Review (Form N461)', shortLabel: 'Judicial Review', matchKeywords: ['judicial review', 'n461', 'permission', 'administrative'] }
        ]
      },
      DRAFTING: {
        label: 'English Court Pleadings & Commercial Master Agreements',
        defaultFilter: 'ALL',
        filterKicker: 'Court-Ready English Templates:',
        filters: [
          { id: 'ALL', label: 'All UK Templates', shortLabel: 'All Templates', matchKeywords: [] },
          { id: 'cpr-pleadings', label: 'King\'s Bench Particulars of Claim', shortLabel: 'Particulars of Claim', matchKeywords: ['particulars of claim', 'cpr', 'high court', 'pleading'] },
          { id: 'uk-commercial-agreements', label: 'English Law Master Services Agreement', shortLabel: 'Commercial Contracts', matchKeywords: ['master services', 'msa', 'english law', 'agreement'] }
        ]
      },
      RIGHTS_REMEDIES: {
        label: 'Actionable Rights & Statutory Remedies in the UK',
        defaultFilter: 'ALL',
        filterKicker: 'UK Statutory Remedial Regimes:',
        filters: [
          { id: 'ALL', label: 'All UK Remedies', shortLabel: 'All Remedies', matchKeywords: [] },
          { id: 'uk-consumer-remedies', label: 'Consumer Rights Act Short-Term Rejection & Refund', shortLabel: 'Consumer Rejection', matchKeywords: ['consumer', 'reject', 'goods', 'refund'] },
          { id: 'uk-employment-tribunal', label: 'Employment Tribunal & ACAS Conciliation', shortLabel: 'Employment Tribunal', matchKeywords: ['employment', 'acas', 'unfair dismissal'] }
        ]
      },
      LEGAL_UPDATES: {
        label: 'UK Statutory Instruments & Gazette Notifications',
        defaultFilter: 'ALL',
        filterKicker: 'Official UK Publications:',
        filters: [
          { id: 'ALL', label: 'All UK Updates', shortLabel: 'All Updates', matchKeywords: [] },
          { id: 'uk-eccta-updates', label: 'Economic Crime & Corporate Transparency Act', shortLabel: 'ECCTA Reforms', matchKeywords: ['eccta', 'companies house', 'corporate transparency'] },
          { id: 'uk-cpr-updates', label: 'Civil Procedure Rules Committee (CPRC) Updates', shortLabel: 'CPR Updates', matchKeywords: ['cpr', 'fixed recoverable costs', 'intermediate track'] }
        ]
      },
      DICTIONARY: {
        label: 'English Legal Terminology & Common Law Maxims',
        defaultFilter: 'ALL',
        filterKicker: 'English Legal Terms:',
        filters: [
          { id: 'ALL', label: 'All English Terms & Maxims', shortLabel: 'All Terms', matchKeywords: [] },
          { id: 'uk-common-law-terms', label: 'English Common Law Doctrines & Writs', shortLabel: 'Common Law Terms', matchKeywords: ['mareva', 'anton piller', 'wednesbury', 'estoppel'] },
          { id: 'latin-maxims-universal', label: 'Universal Latin Maxims & Legal Canons', shortLabel: 'Latin Maxims', matchKeywords: ['latin', 'maxim'] }
        ]
      }
    };
  }

  if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    return {
      ALL: {
        label: 'Explore International Law & Global Treaties',
        defaultFilter: 'ALL',
        filterKicker: 'International Legal Regimes:',
        filters: [
          { id: 'ALL', label: 'All International Domains', shortLabel: 'All Law', matchKeywords: [] },
          { id: 'public-international-law', label: 'Public International Law & UN Charter', shortLabel: 'Public Intl Law', matchKeywords: ['un charter', 'sovereignty', 'use of force', 'icj', 'security council'] },
          { id: 'international-human-rights', label: 'International Human Rights Law (UDHR & Covenants)', shortLabel: 'Human Rights', matchKeywords: ['human rights', 'udhr', 'iccpr', 'icescr', 'refugee'] },
          { id: 'law-of-treaties', label: 'Law of Treaties (VCLT 1969)', shortLabel: 'Treaty Law', matchKeywords: ['vclt', 'treaty', 'pacta sunt servanda', 'jus cogens'] },
          { id: 'international-humanitarian-law', label: 'International Humanitarian Law & ICC', shortLabel: 'IHL & Rome Statute', matchKeywords: ['ihl', 'geneva conventions', 'rome statute', 'icc', 'war crimes'] },
          { id: 'international-commercial-arbitration', label: 'International Commercial Arbitration', shortLabel: 'Arbitration', matchKeywords: ['arbitration', 'new york convention', 'uncitral', 'kompetenz-kompetenz'] }
        ]
      },
      BARE_ACTS: {
        label: 'Multilateral Conventions & United Nations Treaties',
        defaultFilter: 'ALL',
        filterKicker: 'Global Multilateral Instruments:',
        filters: [
          { id: 'ALL', label: 'All International Conventions', shortLabel: 'All Treaties', matchKeywords: [] },
          { id: 'un-charter', label: 'Charter of the United Nations (1945)', shortLabel: 'UN Charter', matchKeywords: ['un charter', 'united nations'] },
          { id: 'vclt-treaty', label: 'Vienna Convention on the Law of Treaties (1969)', shortLabel: 'VCLT 1969', matchKeywords: ['vclt', 'treaties'] },
          { id: 'ny-convention', label: 'New York Convention on Arbitral Awards (1958)', shortLabel: 'NY Convention', matchKeywords: ['new york convention', 'arbitration'] },
          { id: 'icj-statute', label: 'Statute of the International Court of Justice', shortLabel: 'ICJ Statute', matchKeywords: ['icj statute', 'court of justice'] },
          { id: 'rome-statute', label: 'Rome Statute of the International Criminal Court', shortLabel: 'Rome Statute', matchKeywords: ['rome statute', 'icc'] }
        ]
      },
      CASE_LAWS: {
        label: 'International Court of Justice (ICJ) Precedents',
        defaultFilter: 'ALL',
        filterKicker: 'International Judicial Precedents:',
        filters: [
          { id: 'ALL', label: 'All ICJ Precedents', shortLabel: 'All Rulings', matchKeywords: [] },
          { id: 'icj-use-of-force', label: 'Prohibition of Use of Force (Nicaragua Case)', shortLabel: 'Use of Force', matchKeywords: ['nicaragua', 'force', 'intervention', 'self-defense'] },
          { id: 'icj-maritime-territorial', label: 'Maritime Security & Innocent Passage (Corfu Channel)', shortLabel: 'Maritime / Territorial', matchKeywords: ['corfu channel', 'innocent passage', 'mines'] },
          { id: 'icj-erga-omnes', label: 'Diplomatic Protection & Erga Omnes (Barcelona Traction)', shortLabel: 'Erga Omnes', matchKeywords: ['barcelona traction', 'corporate personality', 'erga omnes'] }
        ]
      },
      ARTICLES: {
        label: 'Scholarly Treatises on Public International Law',
        defaultFilter: 'ALL',
        filterKicker: 'Multilateral Treatises & Commentary:',
        filters: [
          { id: 'ALL', label: 'All International Treatises', shortLabel: 'All Treatises', matchKeywords: [] },
          { id: 'un-charter-treatise', label: 'Article 2(4) Prohibition & Article 51 Self-Defense', shortLabel: 'UN Charter Treatises', matchKeywords: ['un charter', 'article 2(4)', 'self-defense', 'article 51'] },
          { id: 'vclt-treatise', label: 'VCLT Articles 31-32 & Peremptory Norms (Jus Cogens)', shortLabel: 'VCLT Treatises', matchKeywords: ['vclt', 'jus cogens', 'treaty interpretation'] },
          { id: 'arbitration-treatise', label: 'New York Convention Article V Non-Enforcement Grounds', shortLabel: 'Arbitral Enforcement', matchKeywords: ['new york convention', 'arbitration', 'enforcement'] }
        ]
      },
      PROCEDURES: {
        label: 'International Judicial & Arbitral Procedures',
        defaultFilter: 'ALL',
        filterKicker: 'International Adjudication Workflows:',
        filters: [
          { id: 'ALL', label: 'All International Procedures', shortLabel: 'All Procedures', matchKeywords: [] },
          { id: 'icj-contentious-proc', label: 'ICJ Contentious Proceedings (Application to Judgment)', shortLabel: 'ICJ Procedure', matchKeywords: ['icj', 'rules of court', 'contentious', 'provisional measures'] },
          { id: 'uncitral-arbitral-proc', label: 'UNCITRAL International Commercial Arbitration', shortLabel: 'UNCITRAL Arbitration', matchKeywords: ['uncitral', 'arbitration', 'notice', 'tribunal'] }
        ]
      },
      DRAFTING: {
        label: 'International Judicial Applications & Arbitral Notices',
        defaultFilter: 'ALL',
        filterKicker: 'International Filings & Notices:',
        filters: [
          { id: 'ALL', label: 'All International Templates', shortLabel: 'All Templates', matchKeywords: [] },
          { id: 'icj-application-draft', label: 'ICJ Application Instituting Proceedings', shortLabel: 'ICJ Application', matchKeywords: ['icj application', 'proceedings', 'sovereign'] },
          { id: 'uncitral-notice-draft', label: 'UNCITRAL Notice of Arbitration', shortLabel: 'Notice of Arbitration', matchKeywords: ['notice of arbitration', 'uncitral', 'claimant'] }
        ]
      },
      RIGHTS_REMEDIES: {
        label: 'International Human Rights & Arbitral Remedies',
        defaultFilter: 'ALL',
        filterKicker: 'Multilateral Remedial Mechanisms:',
        filters: [
          { id: 'ALL', label: 'All International Remedies', shortLabel: 'All Remedies', matchKeywords: [] },
          { id: 'iccpr-communication', label: 'Individual Communication to UN Human Rights Committee', shortLabel: 'UN HRC Communication', matchKeywords: ['iccpr', 'human rights committee', 'geneva', 'optional protocol'] },
          { id: 'foreign-arbitral-enforcement', label: 'New York Convention Foreign Arbitral Award Enforcement', shortLabel: 'Arbitral Award Enforcement', matchKeywords: ['new york convention', 'arbitral award', 'execution'] }
        ]
      },
      LEGAL_UPDATES: {
        label: 'Multilateral Treaties & International Court Updates',
        defaultFilter: 'ALL',
        filterKicker: 'Global Legal Developments:',
        filters: [
          { id: 'ALL', label: 'All International Updates', shortLabel: 'All Updates', matchKeywords: [] },
          { id: 'hague-convention-updates', label: 'Hague Conference Judgments Convention (HCCH)', shortLabel: 'Hague Convention', matchKeywords: ['hague', 'hcch', 'judgments convention'] },
          { id: 'icj-advisory-updates', label: 'ICJ & ITLOS Advisory Opinions on Climate Obligations', shortLabel: 'ICJ Advisory Opinions', matchKeywords: ['icj', 'itlos', 'climate change', 'advisory'] }
        ]
      },
      DICTIONARY: {
        label: 'Public International Law Terms & Canons',
        defaultFilter: 'ALL',
        filterKicker: 'International Legal Canons:',
        filters: [
          { id: 'ALL', label: 'All International Terms & Maxims', shortLabel: 'All Terms', matchKeywords: [] },
          { id: 'public-intl-canons', label: 'Peremptory Norms & State Responsibility Canons', shortLabel: 'Peremptory Norms', matchKeywords: ['jus cogens', 'erga omnes', 'kompetenz-kompetenz', 'non-refoulement'] },
          { id: 'latin-maxims-universal', label: 'Universal Latin Maxims & Legal Canons', shortLabel: 'Latin Maxims', matchKeywords: ['latin', 'maxim'] }
        ]
      }
    };
  }

  // Default: India
  return {
    ALL: {
      label: 'Explore Law',
      defaultFilter: 'ALL',
      filterKicker: 'Subjects:',
      filters: [
        { id: 'ALL', label: 'All Subjects', shortLabel: 'All', matchKeywords: [] },
        { id: 'constitutional-law', label: 'Constitutional Law of India', shortLabel: 'Constitutional', matchKeywords: ['constitution', 'fundamental rights', 'writs', 'article 21', 'article 14'] },
        { id: 'criminal-law', label: 'Criminal Law (BNS & IPC)', shortLabel: 'Criminal (BNS)', matchKeywords: ['criminal', 'bns', 'ipc', 'murder', 'penal'] },
        { id: 'criminal-procedure', label: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)', shortLabel: 'BNSS Procedure', matchKeywords: ['bnss', 'crpc', 'procedure', 'bail', 'fir', 'arrest', 'investigation'] },
        { id: 'evidence-law', label: 'Bharatiya Sakshya Adhiniyam (BSA)', shortLabel: 'BSA Evidence', matchKeywords: ['bsa', 'evidence', 'sakshya'] },
        { id: 'civil-procedure', label: 'Civil Procedure (CPC)', shortLabel: 'Civil (CPC)', matchKeywords: ['civil', 'cpc', 'injunction', 'res judicata', 'suit'] },
        { id: 'contract-law', label: 'Contract & Commercial Law', shortLabel: 'Contract', matchKeywords: ['contract', 'commercial', 'breach', 'agreement'] },
        { id: 'corporate-law', label: 'Corporate & Company Law', shortLabel: 'Corporate', matchKeywords: ['company', 'corporate', 'companies act', 'director'] },
        { id: 'property-law', label: 'Property & Land Law', shortLabel: 'Property', matchKeywords: ['property', 'transfer of property', 'land', 'lease'] },
        { id: 'family-law', label: 'Family & Personal Law', shortLabel: 'Family', matchKeywords: ['family', 'marriage', 'divorce', 'hindu', 'succession'] }
      ]
    },
    BARE_ACTS: {
      label: 'Bare Acts & Rules',
      defaultFilter: 'ALL',
      filterKicker: 'Statutory Categories:',
      filters: [
        { id: 'ALL', label: 'All Acts & Rules', shortLabel: 'All Acts', matchKeywords: [] },
        { id: 'constitution', label: 'Constitution of India', shortLabel: 'Constitution', matchKeywords: ['constitution', 'preamble', 'fundamental rights', 'articles'] },
        { id: 'criminal-codes', label: 'Criminal Law (BNS/BNSS/BSA)', shortLabel: 'BNS/BNSS/BSA', matchKeywords: ['bns', 'bnss', 'bsa', 'criminal', 'penal', 'suraksha', 'sakshya', 'ipc', 'crpc'] },
        { id: 'civil-cpc', label: 'Civil Law & CPC', shortLabel: 'Civil & CPC', matchKeywords: ['civil', 'cpc', 'procedure 1908', 'specific relief', 'limitation'] },
        { id: 'commercial-contract', label: 'Commercial & Contract Law', shortLabel: 'Contracts', matchKeywords: ['contract', 'commercial', 'sale of goods', 'partnership', 'negotiable'] },
        { id: 'corporate-companies', label: 'Corporate & Company Law', shortLabel: 'Corporate', matchKeywords: ['company', 'corporate', 'companies act', 'competition', 'insolvency', 'ibc'] }
      ]
    },
    CASE_LAWS: {
      label: 'Case Laws & Judgments',
      defaultFilter: 'ALL',
      filterKicker: 'Judgment Filters:',
      filters: [
        { id: 'ALL', label: 'All Judgments', shortLabel: 'All Cases', matchKeywords: [] },
        { id: 'supreme-court', label: 'Supreme Court of India', shortLabel: 'Supreme Court', matchKeywords: ['supreme court', 'sc', 'insc'] },
        { id: 'high-courts', label: 'High Courts', shortLabel: 'High Courts', matchKeywords: ['high court', 'delhi', 'bombay', 'calcutta', 'madras'] },
        { id: 'constitution-bench', label: 'Constitutional Benches (5+ Judges)', shortLabel: 'Const. Benches', matchKeywords: ['constitutional bench', '5-judge', '9-judge', '13-judge', 'basic structure'] },
        { id: 'criminal-matters', label: 'Criminal Law & Bail Rulings', shortLabel: 'Criminal & Bail', matchKeywords: ['criminal', 'bail', 'murder', 'quashing', 'fir', 'bns', 'ipc', 'crpc', 'anticipatory'] },
        { id: 'civil-commercial', label: 'Civil & Commercial Disputes', shortLabel: 'Civil & Comm.', matchKeywords: ['civil', 'contract', 'arbitration', 'commercial', 'cpc', 'property', 'specific relief'] }
      ]
    },
    ARTICLES: {
      label: 'Articles, Research & Practice Guides',
      defaultFilter: 'ALL',
      filterKicker: 'Analytical Domains & Practice Guides:',
      filters: [
        { id: 'ALL', label: 'All Articles & Practice Guides (India Treatises)', shortLabel: 'All Treatises', matchKeywords: [] },
        { id: 'constitutional-analysis', label: 'Constitutional Analysis & Basic Structure', shortLabel: 'Constitutional', matchKeywords: ['constitutional-analysis', 'basic structure', 'article 21', 'article 14', 'due process', 'federalism', 'writs'] },
        { id: 'criminal-jurisprudence', label: 'Criminal Law & BNS 2023 Commentary', shortLabel: 'Criminal (BNS)', matchKeywords: ['criminal-jurisprudence', 'bns', 'ipc', 'homicide', 'mens rea', 'cheating', 'cybercrime'] },
        { id: 'civil-litigation-guides', label: 'Civil Litigation Guides (CPC 1908)', shortLabel: 'Civil (CPC)', matchKeywords: ['civil-litigation-guides', 'cpc', 'res judicata', 'injunction', 'order 39', 'plaint', 'written statement'] },
        { id: 'commercial-corporate', label: 'Commercial Contracts & Arbitration', shortLabel: 'Commercial & ADR', matchKeywords: ['commercial-corporate', 'arbitration', 'contract act', 'frustration', 'damages', 'corporate'] },
        { id: 'procedure-evidence', label: 'Procedural Codes & Evidence (BNSS & BSA)', shortLabel: 'BNSS & BSA', matchKeywords: ['procedure-evidence', 'bnss', 'bsa', 'bail', 'electronic evidence', 'fir', 'investigation'] }
      ]
    },
    PROCEDURES: {
      label: 'Court Procedures & Litigation Workflows',
      defaultFilter: 'ALL',
      filterKicker: 'Practice Areas:',
      filters: [
        { id: 'ALL', label: 'All Indian Procedures', shortLabel: 'All Procedures', matchKeywords: [] },
        { id: 'bail-procedures', label: 'Bail & Personal Liberty Workflows', shortLabel: 'Bail & Liberty', matchKeywords: ['bail', 'anticipatory', 'default bail', 'bnss 480', 'bnss 482'] },
        { id: 'civil-litigation-cpc', label: 'Civil Suits & Injunctions (CPC)', shortLabel: 'Civil Suits', matchKeywords: ['civil suit', 'injunction', 'plaint', 'order 39'] }
      ]
    },
    DRAFTING: {
      label: 'Legal Drafting & Pleading Library',
      defaultFilter: 'ALL',
      filterKicker: 'Court-Ready Pleading Categories:',
      filters: [
        { id: 'ALL', label: 'All Indian Templates', shortLabel: 'All Templates', matchKeywords: [] },
        { id: 'writ-petitions-highcourt', label: 'Writ Petitions & High Court Filings', shortLabel: 'Writs (Art 226)', matchKeywords: ['writ', 'article 226', 'mandamus', 'certiorari'] },
        { id: 'bail-petitions-criminal', label: 'Bail Petitions & Criminal Applications', shortLabel: 'Bail Petitions', matchKeywords: ['bail', 'section 482', 'bnss', 'crpc'] }
      ]
    },
    RIGHTS_REMEDIES: {
      label: 'Actionable Citizen Rights & Remedies',
      defaultFilter: 'ALL',
      filterKicker: 'Remedial Categories:',
      filters: [
        { id: 'ALL', label: 'All Indian Remedies', shortLabel: 'All Remedies', matchKeywords: [] },
        { id: 'fundamental-writs', label: 'Fundamental Rights & Constitutional Writs', shortLabel: 'Writs (Art 32/226)', matchKeywords: ['habeas corpus', 'article 32', 'article 226'] }
      ]
    },
    LEGAL_UPDATES: {
      label: 'Legal Updates & Gazette Notifications',
      defaultFilter: 'ALL',
      filterKicker: 'Official Sources:',
      filters: [
        { id: 'ALL', label: 'All Indian Updates', shortLabel: 'All Updates', matchKeywords: [] },
        { id: 'gazette-notices', label: 'The Gazette of India Notifications', shortLabel: 'Gazette of India', matchKeywords: ['gazette', 'notification'] }
      ]
    },
    DICTIONARY: {
      label: 'Legal Dictionary & Research Reference',
      defaultFilter: 'ALL',
      filterKicker: 'Jurisprudence Classifications:',
      filters: [
        { id: 'ALL', label: 'All Terms & Maxims (India & Maxims)', shortLabel: 'All Reference', matchKeywords: [] },
        { id: 'latin-maxims', label: 'Latin Maxims & Legal Canons', shortLabel: 'Latin Maxims', matchKeywords: ['latin', 'maxim'] }
      ]
    }
  };
};

export const getSubjectsForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  return JURISDICTION_SUBJECTS[norm] || JURISDICTION_SUBJECTS.IN;
};
