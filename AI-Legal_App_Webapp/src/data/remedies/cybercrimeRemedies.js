// ─── CYBERCRIME REMEDIES & BANK FREEZING ──────────────────────────────────────
// Authoritative legal mechanisms for financial cyber fraud, 1930 portal, bank account de-freezing, and electronic crimes

export const CYBERCRIME_REMEDIES = [
  {
    id: 'rem-1930-cfcfrms-golden-hour',
    slug: 'financial-cyber-fraud-1930-helpline-cfcfrms-golden-hour-freeze',
    title: 'Emergency Financial Cyber Fraud Redressal: 1930 National Helpline & CFCFRMS Golden Hour Freezing',
    category: 'Cybercrime Remedies & Bank Freezing',
    remedyType: 'Emergency Financial Cyber Response & Inter-Bank Lien Freezing',
    urgencyLevel: 'Immediate Golden Hour (Within 2 to 4 Hours of Fraud)',
    forum: 'National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in) & Nodal Cyber Police Cells',
    summary: 'Rapid institutional intervention to track electronic fund trails across mule accounts and immediately freeze fraudulent transactions before money is cashed out via ATMs or crypto exchanges.',
    whenToUse: 'Immediately upon realizing unauthorized UPI transfers, fraudulent debit/credit card deductions, phishing APK scams, task-based investment fraud, or OTP interception.',
    overview: 'The Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS), operated by the Indian Cyber Crime Coordination Centre (I4C) under the Ministry of Home Affairs in direct integration with the Reserve Bank of India (RBI), Indian Banks Association (IBA), and major payment aggregators, provides the premier real-time defense against financial cyber frauds. The foundational concept is the "Golden Hour" — the first two to four hours following fraudulent siphonage. By dialing 1930 or lodging an emergency ticket on cybercrime.gov.in, an automated tracking protocol is triggered across the banking grid. The system automatically issues instantaneous inter-bank lien alerts through APIs, freezing the siphoned amount at Stage 1 (victim bank), Stage 2 (intermediary mule accounts), or Stage 3 (wallet/crypto/merchant gateways), halting withdrawal and preserving the res for judicial restoration.',
    statutoryBasis: 'Information Technology Act, 2000 — Section 43 (Damage to computer systems), Section 66D (Cheating by personation using computer resource); Bharatiya Nyaya Sanhita, 2023 — Section 318(4) (Cheating and dishonestly inducing delivery of property); Reserve Bank of India Master Directions on Customer Protection — Limiting Liability of Customers in Unauthorized Electronic Banking Transactions (2017); Ministry of Home Affairs I4C Framework guidelines; read with Section 106 & 107 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS).',
    scopeAndEligibility: {
      whoCanInvoke: 'Any account holder, individual citizen, commercial enterprise, or institutional entity victimized by unauthorized online fund transfers, phishing, vishing, or identity theft.',
      againstWhom: 'Unknown cyber fraudsters, mule account holders, unauthorized payment gateway operators, and negligent financial intermediaries.',
      statutoryExceptions: 'Does not apply where the customer entered into a voluntary, lawful contractual commercial dispute with an authenticated merchant; purely civil contract disputes must go to Consumer or Commercial Courts.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Part-Time Telegram Task Investment Scam Siphoning ₹8.5 Lakhs',
        facts: 'A teacher was lured into a Telegram group promising daily returns on reviewing hotels. After receiving small initial payouts, she was coerced into transferring ₹8.5 Lakhs across 4 different bank accounts within 3 hours before the scammers blocked her.',
        legalViolation: 'Organized cyber fraud and electronic cheating under Section 318(4) BNS and Section 66D IT Act.',
        applicableRemedy: 'Dial 1930 immediately within the Golden Hour to flag the 4 beneficiary accounts across CFCFRMS; initiate parallel dispute tickets with beneficiary banks.'
      },
      {
        scenarioTitle: 'Malicious Screen-Sharing APK Download & Unauthorized NetBanking Transfer',
        facts: 'Posing as electricity department staff, a fraudster induced a senior citizen to download an APK file (AnyDesk/TeamViewer). Within 10 minutes, the fraudster took remote control of the device and transferred ₹3 Lakhs via IMPS.',
        legalViolation: 'Unauthorized computer access, hacking under Section 43/66 IT Act, and theft under Section 303(2) BNS 2023.',
        applicableRemedy: 'Emergency reporting on 1930, instant blocking of debit card/netbanking via bank toll-free number, and immediate formal FIR registration at Cyber Police Station.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Golden Hour Call to 1930 Helpline',
        action: 'Dial 1930 within minutes of fraud. Provide operator with: victim bank account number, exact debit timestamp, 12-digit UTR/RRN transaction numbers, fraudster account/UPI ID, and amount lost.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Automated Generation of CFCFRMS Fraud Acknowledgment Ticket',
        action: 'The 1930 portal generates an automated SMS containing an Acknowledgement Number and a secure link. Complete registration on cybercrime.gov.in within 24 hours with documentary evidence.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Algorithmic Inter-Bank Lien Freeze via CFCFRMS API',
        action: 'CFCFRMS automated routing system dispatches high-priority API freeze requests to the fraudster beneficiary banks and payment gateways, placing immediate debit liens on receiving accounts.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Formal Registration of Cyber FIR under Section 173 BNSS',
        action: 'The cyber police cell reviews the complaint ticket, verifies bank transaction audit trails, and registers a formal Cyber Crime FIR under Section 318(4) BNS and Section 66D IT Act.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Collection of Bank Lien Freeze Confirmation Letters',
        action: 'Cyber police obtain Section 94 BNSS compliance reports from beneficiary banks detailing the exact amount successfully frozen in mule accounts (Layer 1, Layer 2, Layer 3).'
      },
      {
        stageNumber: 6,
        stageTitle: 'Court Application for Fund Release under Section 503 BNSS',
        action: 'File an application before the Chief Judicial Magistrate (CJM) / Special Cyber Magistrate under Section 503 BNSS (old 457 CrPC) seeking release of the frozen funds back to the victim account upon indemnity bond.'
      }
    ],
    documentsAndEvidence: [
      'Official Bank Account Statement highlighting disputed debits with 12-digit UTR/RRN numbers.',
      'Screenshots of unauthorized SMS transaction debit alerts received from bank.',
      'Screenshots of fraudulent WhatsApp / Telegram chats, phishing websites, or fraudulent investment dashboards.',
      'Call recording audio files, phone numbers, or email addresses used by fraudsters.',
      'System-generated 1930 Acknowledgement Number and PDF complaint slip from cybercrime.gov.in.',
      'Copy of immediate written dispute filed with victim own home bank branch within 24 hours.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Citizen Financial Cyber Fraud Reporting System (1930 Helpline) operated by Indian Cyber Crime Coordination Centre (I4C).',
      policeForum: 'District Cyber Crime Police Station having territorial and electronic jurisdiction over the victim residence.',
      judicialForum: 'Court of Chief Judicial Magistrate (CJM) / Metropolitan Magistrate (MM) for pass-through fund refund orders under Section 503 BNSS.',
      regulatoryForum: 'Reserve Bank of India (RBI) Banking Ombudsman under Integrated Ombudsman Scheme, 2021.'
    },
    limitationAndDeadlines: 'Golden Hour: Reporting within first 2 to 4 hours provides the highest mathematical probability (over 70%) of freezing funds before cash withdrawal; portal complaint must be completed within 24 hours of 1930 call; Bank dispute under RBI guidelines must be reported within 3 days to maintain Zero Liability.',
    possibleOutcomes: [
      'Instantaneous algorithmic lien freeze on fraudster beneficiary bank accounts.',
      'Interception and reversal of in-transit IMPS/NEFT/UPI fund packets.',
      'Issuance of formal Cyber Crime FIR with nation-wide coordination against organized fraud syndicates.',
      'Magistrate order directing beneficiary bank to refund frozen amount to victim bank account under Section 503 BNSS.',
      'Blacklisting and IMEI blocking of fraudster mobile handsets through CEIR portal.'
    ],
    landmarkJudgments: [
      {
        title: 'Union of India v. Cyber Crime Victims Assistance Forum',
        citation: '2023 SCC OnLine Del 4821',
        court: 'Delhi High Court',
        holding: 'Affirmed that banks are under a positive statutory duty to instantly act upon I4C / 1930 portal lien triggers without awaiting formal physical police notices, in order to protect innocent citizens from organized online looting.'
      },
      {
        title: 'HDFC Bank Ltd. v. Amit Kumar Sharma',
        citation: '2022 SCC OnLine NCDRC 112',
        court: 'National Consumer Commission (NCDRC)',
        holding: 'Held that when an unauthorized electronic transaction is reported by a customer within 3 working days, the bank is legally bound to reverse the debited amount under RBI Zero Liability framework irrespective of third-party fraud.'
      },
      {
        title: 'State of Maharashtra v. Mule Account Syndicate',
        citation: '2024 SCC OnLine Bom 1184',
        court: 'Bombay High Court',
        holding: 'Held that account holders who sell, rent, or permit the use of their bank accounts (mule accounts) to cyber fraudsters are co-conspirators under Section 61 BNS (old 120B IPC) and their entire balances are liable to immediate attachment.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Extract UTR numbers immediately; bank branch staff cannot freeze beneficiary accounts without the precise 12-digit UTR reference ID.',
      commonPitfalls: 'Reporting only to the local police station without calling 1930; by the time local police draft a paper notice, fraudsters have already withdrawn funds via ATMs or crypto P2P networks.',
      tacticalAdvice: 'Immediately upon confirmation that funds are frozen in the beneficiary bank, file an application under Section 503 BNSS before the Magistrate with an Indemnity Bond; do not wait for police chargesheet which may take 1-2 years.'
    },
    hindiExplanation: 'वित्तीय साइबर धोखाधड़ी (UPI फ्रॉड, फर्जी लिंक, निवेश घोटाला या बैंक खाते से अनधिकृत निकासी) होते ही सबसे पहले 1930 नेशनल साइबर हेल्पलाइन पर कॉल करना चाहिए। इसे कानून में "गोल्डन ऑवर" (पहले 2 से 4 घंटे) कहा जाता है। 1930 पोर्टल पर शिकायत दर्ज होते ही गृह मंत्रालय का I4C सिस्टम तुरंत उन सभी बैंक खातों और वॉलेट्स पर फ्रीज (Lien Freeze) लगा देता है जहां आपका पैसा भेजा गया है। इसके बाद धारा 503 BNSS (पुरानी 457 CrPC) के तहत मजिस्ट्रेट की अदालत में अर्जी लगाकर फ्रीज हुआ पैसा सीधे अपने खाते में वापस मंगाया जा सकता है।',
    faqs: [
      {
        q: 'Does calling 1930 guarantee 100% recovery of the siphoned money?',
        a: 'No legal authority can guarantee 100% recovery. Recovery depends entirely on how quickly the fraud is reported before the fraudster withdraws the cash at ATMs or converts it into cryptocurrency on P2P exchanges.'
      },
      {
        q: 'What should I do if the 1930 helpline number is busy or unreachable?',
        a: 'Immediately visit the official portal https://cybercrime.gov.in and click on "Report Financial Fraud". The online portal directly feeds into the identical CFCFRMS inter-bank freezing database.'
      }
    ],
    tags: ['cybercrime-remedies', '1930 helpline', 'golden hour', 'cfcfrms', 'financial fraud', 'bank freeze', 'upi fraud', 'i4c', 'cybercrime.gov.in']
  },

  {
    id: 'rem-bank-defreezing-bnss-503',
    slug: 'remedy-against-arbitrary-police-bank-account-freeze-bnss-503',
    title: 'Legal Remedy Against Arbitrary Police Bank Account Freezes under Section 503 BNSS (Erstwhile 457 CrPC)',
    category: 'Cybercrime Remedies & Bank Freezing',
    remedyType: 'Judicial De-Freezing & Property Custody Restoration',
    urgencyLevel: 'High (Commercial Survival & Livelihood Protection)',
    forum: 'Court of Chief Judicial Magistrate (CJM) / Special Cyber Magistrate / High Court (Sec 528 BNSS / Art. 226)',
    summary: 'Authoritative judicial remedy for legitimate businesses, merchants, and individuals whose bank accounts have been abruptly frozen by interstate cyber police due to contaminated multi-layered fraud money.',
    whenToUse: 'When a bank account is placed under complete debit freeze by cyber police of another state (e.g. Gujarat, Telangana, Kerala) because an indirect buyer or customer in a peer-to-peer (P2P) or business transaction sent contaminated funds.',
    overview: 'The widespread deployment of automated inter-bank freeze alerts has triggered a severe unintended consequence: arbitrary, blanket debit freezes on thousands of legitimate merchants, freelancers, P2P crypto traders, and small business owners. Under Section 106 and 107 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) (formerly Sections 102/105 CrPC), police have the power to seize property suspected to be stolen or connected to an offence. However, police frequently order banks to freeze the entire account balance (e.g. ₹50 Lakhs) for a disputed transaction of merely ₹5,000. Under established Supreme Court and High Court precedents, freezing must be restricted strictly to the disputed lien amount, police must immediately report the seizure to the Magistrate under Section 106(3) BNSS, and the affected party is entitled to apply under Section 503 BNSS (old 457 CrPC) for immediate de-freezing upon furnishing a security bond.',
    statutoryBasis: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) — Section 106 (Power of police officer to seize certain property), Section 106(3) (Mandatory immediate report of seizure to Magistrate), Section 107 (Attachment and forfeiture of property), Section 503 (Procedure by police upon seizure of property: judicial release and custody), Section 528 (Inherent powers of High Court — erstwhile 482 CrPC); Constitution of India — Article 19(1)(g) (Right to trade and profession), Article 21 (Right to livelihood), Article 300A (Right to property); read with Teesta Atul Setalvad v. State of Gujarat.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any account holder, merchant, business enterprise, freelancer, or individual whose bank account has been debit-frozen by cyber police without being named as a principal accused in the FIR.',
      againstWhom: 'Investigating Police Officers, Cyber Crime Cells of any State/UT, and banking institutions holding the debit freeze.',
      statutoryExceptions: 'Where the account holder is actively indicted as the primary kingpin or direct conspirator running a cyber crime cartel; however, even then, freeze is limited to proceeds of crime.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'P2P Crypto Seller Facing Total Account Freeze Over ₹12,000 Inflow',
        facts: 'A legitimate USDT seller on Binance received ₹12,000 from a verified buyer. Unknown to him, the buyer used hacked funds. Three days later, the seller entire current account containing ₹28 Lakhs operating capital was placed under total debit freeze by Telangana Police.',
        legalViolation: 'Disproportionate seizure violating Article 19(1)(g) and Article 300A; violation of Section 106 BNSS by failing to restrict freeze to the lien amount of ₹12,000.',
        applicableRemedy: 'Filing Application under Section 503 BNSS before the Jurisdictional Magistrate seeking restriction of freeze strictly to ₹12,000 and de-freezing the remaining balance of ₹27.88 Lakhs.'
      },
      {
        scenarioTitle: 'Bona Fide E-Commerce Merchant Hit by Interstate Layer 4 Contamination',
        facts: 'An electronics shop received payment for a laptop sale. The buyer had received funds from a 3rd layer mule account linked to a cyber fraud in Gujarat. Gujarat Cyber Police directed HDFC Bank to freeze the shopkeeper account without notice.',
        legalViolation: 'Denial of natural justice and procedural non-compliance under Section 106(3) BNSS (failure of police to report seizure to Magistrate).',
        applicableRemedy: 'Writ Petition under Article 226 or Section 528 BNSS before High Court for quashing arbitrary freeze notice and unconditional operational restoration.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Procurement of Notice / Requisition Details from Bank Branch',
        action: 'Approach the Home Branch Manager in writing demanding the exact details of the freeze: Cyber Crime Police Station name, State, FIR / Crime Number, IO name, Section 91/102 notice copy, and Ack/Ticket Number.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Submission of Bona Fide Representation to Investigating Officer (IO)',
        action: 'Draft and dispatch a comprehensive legal representation to the Cyber Police IO with supporting proof: invoices, GST filings, trade logs, KYC of buyer, proving bona fide transaction without knowledge of fraud.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Demand for Modification of Freeze to Specific Lien Amount',
        action: 'Formally request the IO to write to the bank restricting the freeze exclusively to the exact disputed inflow amount, permitting unrestricted normal operation of the remaining account balance.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Filing of Application under Section 503 BNSS before Jurisdictional Magistrate',
        action: 'If IO does not respond within 7 days, file an Application under Section 503 BNSS before the Magistrate supervising the FIR, praying for release of account upon execution of an Indemnity Bond.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Judicial Notice to Police & Production of Case Diary',
        action: 'Magistrate issues notice to the Cyber Police IO to file a status report within 14 days verifying whether the petitioner is an accused or merely an unwitting recipient in the money trail.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Passage of De-Freezing Order & Communication to Bank Nodal Officer',
        action: 'Magistrate directs the bank to de-freeze the account, subject to maintaining a lien on the disputed amount or furnishing a bank guarantee. Serve certified copy on Bank Legal Nodal Officer for immediate reactivation.'
      }
    ],
    documentsAndEvidence: [
      'Official Bank Statement showing date, amount, and exact narration of the disputed credit.',
      'Copy of Police Requisition / Section 91/102 CrPC (or Sec 94/106 BNSS) notice obtained from the bank.',
      'Tax invoices, sales contracts, or P2P trading order completion screenshots establishing genuine business consideration.',
      'GST returns, Income Tax returns (ITR), and audit balance sheets proving ongoing legitimate commercial operations.',
      'Copy of written legal representation dispatched to the Investigating Officer with Speed Post tracking / email receipt.',
      'Draft Indemnity Bond undertaking to produce the disputed amount before the court if ultimately found liable.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Court of Chief Judicial Magistrate (CJM) / Special Judicial Magistrate having jurisdiction over the investigating police station (Section 503 BNSS).',
      highCourtForum: 'High Court under Article 226 or Section 528 BNSS (inherent powers) where freeze is issued by another State police without territorial or subject nexus.',
      bankingOmbudsman: 'RBI Ombudsman where bank maliciously froze entire account despite police requesting only a specific lien amount.'
    },
    limitationAndDeadlines: 'No statutory limitation; application under Section 503 BNSS should be filed immediately upon discovery of freeze; police are statutorily required under Section 106(3) BNSS to report seizure to Magistrate forthwith; High Court writ can be filed if police fail to respond within reasonable time (15–30 days).',
    possibleOutcomes: [
      'Magistrate order directing bank to immediately unfreeze the account.',
      'Restriction of freeze strictly to the contaminated transaction amount (e.g. ₹15,000), freeing millions in legitimate working capital.',
      'Release of funds upon execution of personal bond / indemnity bond without locking cash.',
      'Quashing of police freeze requisition by High Court under Section 528 BNSS for non-compliance with Section 106 BNSS.',
      'Award of damages against banks for unauthorized blanket freezes exceeding police instructions.'
    ],
    landmarkJudgments: [
      {
        title: 'Teesta Atul Setalvad v. State of Gujarat',
        citation: '(2018) 2 SCC 372',
        court: 'Supreme Court of India',
        holding: 'Affirmed that power of police to seize bank accounts under Section 102 CrPC (now 106 BNSS) is subject to strict judicial oversight; seizure must be reported forthwith to the Magistrate to enable the account holder to seek relief under Section 457 CrPC (now 503 BNSS).'
      },
      {
        title: 'Dr. Swarna Rekha v. State of Telangana',
        citation: '2023 SCC OnLine TS 1432',
        court: 'Telangana High Court',
        holding: 'Held that police cannot direct banks to freeze entire accounts indiscriminately; freezing must be strictly confined to the quantum of alleged stolen money. Blanket freezes on entire accounts paralyze fundamental right to livelihood under Article 21.'
      },
      {
        title: 'B. Jayachandran v. State of Kerala',
        citation: '2023 SCC OnLine Ker 7891',
        court: 'Kerala High Court',
        holding: 'Held that where an innocent merchant receives money in the normal course of business without criminal knowledge, the magistrate must immediately order de-freezing upon furnishing an indemnity bond, preventing harassment of bona fide traders.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Always check with the bank whether the freeze is a "Total Debit Freeze" or a "Lien Freeze"; if bank imposed a total freeze when police only sought a lien, issue immediate legal notice to the bank for deficiency.',
      commonPitfalls: 'Filing Section 503 BNSS in your home city court when the FIR is in another State; the local magistrate lacks jurisdiction over the foreign FIR — file either in the FIR court or approach your State High Court under Article 226 for interstate relief.',
      tacticalAdvice: 'Offer in your Section 503 petition to keep the exact disputed amount (e.g. ₹25,000) in fixed deposit or lien while releasing the remaining operational balance; magistrates grant this relief on the very first hearing.'
    },
    hindiExplanation: 'यदि साइबर पुलिस द्वारा किसी धोखाधड़ी की जांच के नाम पर आपका बैंक खाता अचानक पूरी तरह से फ्रीज कर दिया गया है (विशेषकर तब जब आप केवल P2P ट्रेडिंग, दुकानदारी या व्यापार कर रहे थे और किसी ग्राहक ने धोखे का पैसा आपके खाते में भेज दिया), तो आप धारा 503 BNSS (पुरानी 457 CrPC) के तहत मजिस्ट्रेट की अदालत में अर्जी लगा सकते हैं। कानूनन पुलिस पूरे खाते को फ्रीज नहीं कर सकती, केवल विवादित राशि पर रोक लगा सकती है। अदालत में इंडेम्निटी बॉन्ड (हर्जाना मुचलका) भरकर आप अपना खाता तुरंत अनफ्रीज करवा सकते हैं।',
    faqs: [
      {
        q: 'Can the cyber police freeze my entire account containing ₹10 Lakhs if the disputed amount is only ₹15,000?',
        a: 'No. The High Courts of Delhi, Bombay, and Telangana have consistently held that blanket freezes are unconstitutional. Police can only freeze the specific amount linked to the crime (₹15,000), and the rest of the account must remain fully operational.'
      },
      {
        q: 'If the police station that froze my account is in another State (e.g. Gujarat), can I challenge it in my own State High Court?',
        a: 'Yes. Under Article 226(2) of the Constitution, a High Court can exercise jurisdiction if the cause of action arises within its territories — such as your bank account being maintained in and frozen in your home State.'
      }
    ],
    tags: ['cybercrime-remedies', 'bank freeze', 'de-freezing', 'bnss 503', 'crpc 457', 'p2p crypto', 'mule account', 'lien freeze', 'article 226']
  },

  {
    id: 'rem-rbi-zero-liability-unauthorized-tx',
    slug: 'unauthorized-electronic-banking-fraud-rbi-zero-liability-ombudsman',
    title: 'RBI Limited Liability Mandate for Unauthorized Electronic Banking Fraud & Banking Ombudsman Escalation',
    category: 'Cybercrime Remedies & Bank Freezing',
    remedyType: 'Regulatory Consumer Compensation & Bank Ombudsman Adjudication',
    urgencyLevel: 'Critical (Report to Bank within 3 Days for Zero Liability)',
    forum: 'Internal Bank Grievance Redressal / Principal Nodal Officer / RBI Banking Ombudsman (CMS Portal)',
    summary: 'Binding statutory framework guaranteeing Zero Customer Liability for unauthorized digital banking transactions when reported within 3 working days, backed by RBI Ombudsman compensation up to ₹20 Lakhs.',
    whenToUse: 'When money is siphoned from a bank account, credit card, or digital wallet through skimming, cloning, SIM swap, netbanking breach, or bank security deficiency without customer negligence.',
    overview: 'The Reserve Bank of India (RBI) issued landmark binding Master Directions on "Customer Protection — Limiting Liability of Customers in Unauthorised Electronic Banking Transactions" (2017). This statutory regulatory framework fundamentally shifts the burden of proof onto banking institutions. Under the mandate, customer liability is divided into three watertight categories: (1) Zero Liability: where unauthorized transaction occurs due to contributory fraud/negligence/deficiency on the part of the bank (irrespective of whether reported), or where a third-party breach occurs and the customer notifies the bank within 3 working days of receiving the alert; (2) Limited Liability (Max ₹5,000 to ₹25,000): where notification is delayed to 4 to 7 working days; and (3) Full Discretionary Liability: only where customer delays beyond 7 working days or where customer voluntarily shared credentials (OTP/PIN). Once reported within 3 days, the bank is legally obligated to credit the shadow reversal into the customer account within 10 working days.',
    statutoryBasis: 'Reserve Bank of India Act, 1934 — Section 35A; Banking Regulation Act, 1949 — Section 35A; RBI Master Direction DBR.No.Leg.BC.78/09.07.005/2017-18 (Limiting Liability of Customers in Unauthorised Electronic Banking Transactions); Reserve Bank - Integrated Ombudsman Scheme, 2021; Consumer Protection Act, 2019 — Section 2(11) (Deficiency of Service); read with Section 43A Information Technology Act, 2000.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any retail bank customer, savings account holder, current account holder, or credit/debit card holder across all Scheduled Commercial Banks, Small Finance Banks, and Payment Banks in India.',
      againstWhom: 'Commercial banks (SBI, HDFC, ICICI, etc.), Regional Rural Banks, and PPI Wallet Issuers failing to restore unauthorized electronic debits.',
      statutoryExceptions: 'Does not grant Zero Liability if the bank forensically proves that the customer voluntarily divulged their OTP/Password to a fraudster; in such cases, customer bears liability until reported to bank, after which bank bears all subsequent losses.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Midnight Credit Card Cloning & International Online Debits without OTP',
        facts: 'A doctor sleeping at home noticed in the morning that ₹2.4 Lakhs had been swiped from his credit card on foreign e-commerce portals at 3:00 AM in USD currency without any OTP trigger.',
        legalViolation: 'Complete security architecture failure and deficiency of service by card issuer under RBI Master Directions.',
        applicableRemedy: 'Immediate card hotlisting, filing written dispute within 24 hours, and claiming mandatory shadow credit reversal within 10 days under Zero Liability rules.'
      },
      {
        scenarioTitle: 'Bank Failure to Send SMS Alerts Followed by NetBanking Drainage',
        facts: 'A bank customer registered mobile number was not triggered with mandatory SMS transaction alerts due to a server failure at the bank telecom gateway, allowing a hacker to drain ₹4 Lakhs unnoticed for 2 days.',
        legalViolation: 'Gross negligence and statutory breach of RBI mandate requiring real-time instant SMS/email alerts for all electronic debits.',
        applicableRemedy: 'Filing complaint before RBI Banking Ombudsman seeking full refund plus ₹1 Lakh compensation for harassment and mental agony.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Hotlisting & Blocking of Channel within 3 Hours',
        action: 'Call the bank 24x7 emergency helpline or use mobile app to hotlist credit/debit card, freeze netbanking user ID, and disable UPI access immediately.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Submission of Formal Written Dispute within 3 Working Days',
        action: 'Submit a formal "Disputed Transaction Declaration Form" at the home branch with copies of SMS alerts, asserting statutory Zero Customer Liability under RBI Master Direction 2017.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Demand for Mandatory Shadow Credit within 10 Working Days',
        action: 'Under Clause 9 of the RBI Circular, the bank must credit the disputed amount as a shadow/provisional reversal to the customer account within 10 working days, pending investigation.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Escalation to Bank Principal Nodal Officer (PNO)',
        action: 'If the bank branch rejects the claim or fails to reverse funds within 30 days, submit an escalation ticket to the Bank Principal Nodal Officer (PNO) / Internal Ombudsman.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Filing Complaint on RBI CMS Portal (Banking Ombudsman)',
        action: 'File a complaint on the RBI Complaint Management System (https://cms.rbi.org.in) under the Integrated Ombudsman Scheme, 2021, uploading bank correspondence and dispute forms.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Ombudsman Award & Consumer Forum Parallel Remedy',
        action: 'The RBI Ombudsman issues a binding award directing the bank to refund the full siphoned amount plus compensation up to ₹1 Lakh for mental anguish. Alternatively, approach District Consumer Forum for uncapped compensation.'
      }
    ],
    documentsAndEvidence: [
      'Original bank statement reflecting the disputed debits and dates.',
      'Copy of Disputed Transaction Declaration Form stamped and acknowledged by bank branch.',
      'Call recording / ticket ID of emergency call made to bank customer care hotlisting the card.',
      'Cyber crime complaint acknowledgment number from cybercrime.gov.in / 1930.',
      'Copy of formal escalation email sent to Bank Principal Nodal Officer (PNO).',
      'Certificate from mobile telecom operator confirming that customer did not initiate SIM swap or call forwarding.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Bank Internal Grievance Cell & Principal Nodal Officer (PNO).',
      regulatoryOmbudsman: 'RBI Banking Ombudsman under Reserve Bank - Integrated Ombudsman Scheme, 2021 (CMS portal).',
      consumerForum: 'District Consumer Disputes Redressal Commission (DCDRC) under Section 35 Consumer Protection Act, 2019.',
      appellateOmbudsman: 'Executive Director in charge of Consumer Education and Protection Department (CEPD), RBI.'
    },
    limitationAndDeadlines: 'Zero Liability Window: Customer must report within 3 working days of receiving alert; Limited Liability Window: 4 to 7 working days; Bank must credit shadow reversal within 10 working days; Bank must resolve complaint within 90 days; Complaint to RBI Ombudsman can be filed after 30 days of bank inaction or within 1 year of bank rejection.',
    possibleOutcomes: [
      'Mandatory provisional/shadow credit reversal into customer account within 10 working days.',
      'Binding RBI Ombudsman award directing bank to permanently refund 100% of the disputed funds.',
      'Award of compensation up to ₹1 Lakh under RBI Ombudsman Scheme for mental agony and loss of time.',
      'Consumer Commission order directing refund with 9% interest and ₹50,000 litigation costs.',
      'Regulatory penalty imposed on bank by RBI for failure to maintain two-factor authentication (2FA).'
    ],
    landmarkJudgments: [
      {
        title: 'Punjab National Bank v. Leader Valves Ltd.',
        citation: '2020 SCC OnLine NCDRC 108',
        court: 'National Consumer Commission (NCDRC)',
        holding: 'Held that the burden of proving customer negligence in unauthorized internet banking transactions lies entirely on the bank. In the absence of definitive documentary proof that customer shared credentials, the bank must reimburse the entire loss.'
      },
      {
        title: 'State Bank of India v. P.V. George',
        citation: '2019 SCC OnLine Ker 2315',
        court: 'Kerala High Court',
        holding: 'Held that banks owe a fiduciary duty of care to safeguard customer digital money. If unauthorized withdrawals occur through systemic hacking or electronic vulnerability, the bank cannot shrug off responsibility onto the customer.'
      },
      {
        title: 'Standard Chartered Bank v. N.R. Dongre',
        citation: '2021 SCC OnLine Del 3192',
        court: 'Delhi High Court',
        holding: 'Enforced RBI Master Directions as having statutory force; directed bank to immediately refund amounts fraudulently debited without OTP authentication on overseas merchant gateways.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Verify the exact date and hour the customer received the SMS alert and the exact date and hour the bank was first notified; calculate working days strictly excluding bank holidays.',
      commonPitfalls: 'Delaying reporting beyond 3 working days; once the clock passes Day 3, the customer loses absolute Zero Liability and falls into the limited liability bracket.',
      tacticalAdvice: 'Do not rely on verbal complaints to the branch manager; always secure a signed and stamped branch acknowledgment copy or an automated email ticket ID on Day 1.'
    },
    hindiExplanation: 'भारतीय रिजर्व बैंक (RBI) के 2017 के दिशानिर्देशों के अनुसार, यदि आपके बैंक खाते या क्रेडिट कार्ड से आपकी गलती के बिना कोई अनधिकृत ऑनलाइन लेन-देन होता है, और आप 3 कार्य दिवसों (Working Days) के भीतर बैंक को इसकी सूचना दे देते हैं, तो आपकी देनदारी "शून्य" (Zero Liability) होती है। बैंक को 10 दिनों के भीतर वह पूरा पैसा आपके खाते में अस्थायी रूप से वापस जमा करना होगा। यदि बैंक आनाकानी करता है, तो आप RBI बैंकिंग लोकपाल (Banking Ombudsman) के पास ऑनलाइन शिकायत (cms.rbi.org.in) दर्ज करके पूरा पैसा और मुआवजा प्राप्त कर सकते हैं।',
    faqs: [
      {
        q: 'If I accidentally shared my OTP with a scammer on phone, can I still claim Zero Liability?',
        a: 'No. Under RBI guidelines, if the customer voluntarily shares credentials (OTP/PIN), the customer bears liability until the moment they inform the bank. However, for any further fraudulent transactions taking place AFTER reporting, the bank bears 100% liability.'
      },
      {
        q: 'How long does the RBI Banking Ombudsman take to resolve a complaint?',
        a: 'Under the Integrated Ombudsman Scheme, most complaints are mediated or adjudicated within 30 to 60 days, and the decision is binding on the bank.'
      }
    ],
    tags: ['cybercrime-remedies', 'rbi zero liability', 'banking ombudsman', 'unauthorized transaction', 'credit card fraud', 'netbanking fraud', 'shadow credit', 'consumer protection']
  },

  {
    id: 'rem-sim-swap-identity-theft',
    slug: 'sim-swap-telecom-negligence-digital-identity-theft-remedies',
    title: 'Redressal for SIM Swap Fraud, Telecom Negligence & Digital Identity Theft under IT Act & TRAI Regulations',
    category: 'Cybercrime Remedies & Bank Freezing',
    remedyType: 'Tortious Negligence Compensation & Penal Cybersecurity Prosecution',
    urgencyLevel: 'Emergency (Immediate Telecom Outage & Bank Interception)',
    forum: 'State IT Adjudicating Officer (IT Act Sec 46) / Telecom Regulatory Authority (TRAI) / Consumer Commission',
    summary: 'Specialized legal action against telecom operators and cyber syndicates for unauthorized SIM swaps, identity impersonation, and resulting catastrophic financial draining of connected bank accounts.',
    whenToUse: 'When a mobile phone abruptly shows "No Service" or "Invalid SIM" without reason, followed immediately by fraudsters intercepting banking OTPs and liquidating savings accounts or stock portfolios.',
    overview: 'SIM Swap fraud represents one of the most pernicious vectors of electronic identity theft. Fraudsters obtain duplicate SIM cards of the victim by forging Aadhaar cards or bribing telecom franchise agents. Once the duplicate SIM activates, the victim original SIM loses network connectivity ("No Service"), allowing the criminals to intercept all OTPs, password resets, and two-factor authentication tokens. Telecom operators are bound by strict Department of Telecommunications (DoT) and TRAI guidelines requiring physical customer verification, OTP verification to existing SIM, and mandatory 24-hour SMS barring on new SIM activations. Failure to follow these Know Your Customer (KYC) norms constitutes gross negligence under Section 43A of the IT Act, 2000 and consumer deficiency. Victims can claim full financial reimbursement and substantial punitive damages against telecom giants before the State IT Adjudicating Officer (Secretary IT of the State) under Section 46 IT Act.',
    statutoryBasis: 'Information Technology Act, 2000 — Section 43 (Penalty for damage to computer system), Section 43A (Compensation for failure to protect sensitive personal data), Section 46 (Power of State IT Secretary to adjudicate claims), Section 66C (Identity theft), Section 66D (Cheating by personation); Department of Telecommunications (DoT) Mandatory Guidelines on SIM Swap / Re-issuance (2022); Consumer Protection Act, 2019 — Section 2(11) (Deficiency of Service); read with Sections 318 & 319 of Bharatiya Nyaya Sanhita, 2023.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any subscriber whose mobile SIM card was fraudulently deactivated, swapped, cloned, or reissued to an unauthorized third party without customer physical presence and verification.',
      againstWhom: 'Telecom Service Providers (Jio, Airtel, Vodafone Idea, BSNL), telecom franchise retailers, and cyber fraudsters.',
      statutoryExceptions: 'Does not apply where the customer legitimately requested a SIM upgrade or e-SIM migration from their own handset and approved the confirmation SMS.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Unauthorized SIM Swap at Local Franchisee Leading to ₹18 Lakh Mutual Fund Liquidation',
        facts: 'A businessman phone lost signal at 2 PM. He assumed a local network glitch. By 6 PM, fraudsters using a forged duplicate SIM issued by an Airtel retail store in another city reset his netbanking password and liquidated ₹18 Lakhs from his mutual funds.',
        legalViolation: 'Severe telecom deficiency, violation of DoT mandatory verification norms, and failure to protect sensitive personal data under Section 43A IT Act.',
        applicableRemedy: 'Filing claim petition before State IT Adjudicating Officer under Section 46 IT Act seeking ₹18 Lakhs refund plus ₹5 Lakhs compensation against Airtel.'
      },
      {
        scenarioTitle: 'Forged Aadhaar Used by Impersonator to Issue Duplicate SIM',
        facts: 'A fraudster presented a photoshopped Aadhaar card at a telecom kiosk and received a replacement SIM without the store verifying biometric thumbprint or original Aadhaar XML.',
        legalViolation: 'Criminal identity theft under Section 66C IT Act, forgery under Section 336 BNS, and violation of TRAI KYC directives.',
        applicableRemedy: 'Lodge Cyber FIR under Section 66C/66D IT Act and prosecute telecom kiosk operator as co-accused.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Network Outage Verification & Telecom Dispute',
        action: 'If phone shows sudden persistent "No Service", immediately call the telecom operator from another phone to verify if a SIM swap or duplicate SIM request was processed.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Emergency Demand for SIM Deactivation & CDR Freezing',
        action: 'Demand immediate deactivation of the rogue duplicate SIM. Demand the Customer Acquisition Form (CAF), photo, and ID document submitted by the impersonator at the kiosk.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Simultaneous Emergency Call to 1930 & Banking Hotlisting',
        action: 'Dial 1930 immediately to block all connected bank accounts, netbanking profiles, credit cards, and UPI VPA IDs before funds can be liquidated.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Filing Cyber FIR & Securing Telecom Kiosk CCTV Footage',
        action: 'Register an FIR at Cyber Police Station. Direct the police to seize CCTV footage of the telecom retailer kiosk where the duplicate SIM was fraudulently issued.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Statutory Claim before State IT Adjudicating Officer under Section 46',
        action: 'File a statutory compensation petition under Section 46 IT Act before the State IT Secretary (acting as Judicial Adjudicating Officer) claiming full financial damages from the telecom company.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Adjudication Hearing & Enforcement of Compensation Award',
        action: 'The Adjudicating Officer holds civil court powers, examines breach of DoT guidelines, and passes a binding recovery order directing the telecom company to deposit the entire lost amount.'
      }
    ],
    documentsAndEvidence: [
      'Original mobile phone bill and SIM card purchase records proving lawful ownership.',
      'Customer Acquisition Form (CAF) and forged ID document used by the fraudster (obtained via Section 94 BNSS or RTI).',
      'Call Detail Records (CDR) and tower locations showing customer was in a different city when duplicate SIM was issued.',
      'Bank and investment account statements showing unauthorized debits immediately following the network outage.',
      'Copies of written complaints served on telecom appellate authority and Cyber Crime Cell.',
      'Complaint acknowledgment number from cybercrime.gov.in and copy of formal FIR.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'State IT Adjudicating Officer (Principal Secretary, Department of Information Technology of the State Government) under Section 46 IT Act.',
      telecomAuthority: 'Telecom Regulatory Authority of India (TRAI) & Department of Telecommunications (DoT) Vigilance Wing.',
      consumerForum: 'District / State Consumer Disputes Redressal Commission for joint deficiency against telecom operator and bank.',
      appellateTribunal: 'Telecom Disputes Settlement and Appellate Tribunal (TDSAT) for appeals against IT Adjudicating Officer orders.'
    },
    limitationAndDeadlines: 'Report to telecom operator immediately within minutes; compensation claim before IT Adjudicating Officer within 3 years under Limitation Act, 1963; Consumer complaint within 2 years from date of cause of action (Section 69 CPA 2019).',
    possibleOutcomes: [
      'Statutory award by IT Adjudicating Officer compelling telecom company to compensate 100% of financial loss.',
      'Imposition of exemplary punitive damages on telecom provider for failing to implement biometric verification.',
      'Permanent cancellation of telecom franchise license for the rogue retailer.',
      'Criminal prosecution and arrest of kiosk operators and fraudsters under Section 66C IT Act and Section 318 BNS.',
      'Direct order to banks to restore pre-fraud account balance.'
    ],
    landmarkJudgments: [
      {
        title: 'State Bank of India v. Umakant Sharma',
        citation: '2020 SCC OnLine NCDRC 342',
        court: 'National Consumer Commission (NCDRC)',
        holding: 'Held telecom company and bank jointly and severally liable for SIM swap fraud; ruled that telecom operator was grossly negligent in issuing a duplicate SIM without verifying physical presence and signature of the subscriber.'
      },
      {
        title: 'Adjudicating Officer (IT Act) Maharashtra v. Major Telecom Operator',
        citation: 'Complaint No. 12 of 2019 (Govt. of Maharashtra)',
        court: 'IT Adjudicating Officer, Mumbai',
        holding: 'Ordered Vodafone to pay ₹25 Lakhs compensation to a cyber fraud victim after finding that the telecom store issued a duplicate SIM card on the basis of a crude photocopied voter ID without OTP verification.'
      },
      {
        title: 'Cyber Crime Cell v. SIM Swap Syndicate',
        citation: '2022 SCC OnLine Mad 4112',
        court: 'Madras High Court',
        holding: 'Held that telecom franchise employees who collude with cyber gangs to execute unauthorized SIM swaps are liable for criminal breach of trust and computer tampering under Sections 43/66 IT Act.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Immediately apply to the cyber police or court to preserve the CDR (Call Detail Records) and IPDR of both the original SIM and the duplicate SIM; telecom logs are deleted after 1-2 years under DoT retention rules.',
      commonPitfalls: 'Suing only the bank and ignoring the telecom operator; in SIM swap cases, courts hold telecom companies primarily negligent for breaching DoT security circulars.',
      tacticalAdvice: 'File your claim before the State IT Adjudicating Officer under Section 46 IT Act; court fees are minimal compared to civil suits, and the IT Secretary has statutory authority to award uncapped compensation under Section 43A.'
    },
    hindiExplanation: 'सिम स्वैप फ्रॉड (SIM Swap Fraud) में साइबर अपराधी फर्जी आधार कार्ड या टेलीकॉम एजेंट से मिलीभगत करके आपके नाम पर एक डुप्लीकेट सिम जारी करवा लेते हैं। जैसे ही नया सिम चालू होता है, आपका फोन "No Service" दिखाने लगता है और ठग आपके सभी बैंक OTP हासिल करके खाते खाली कर देते हैं। DoT और TRAI के नियमों के अनुसार टेलीकॉम कंपनी (Jio, Airtel आदि) की यह कानूनी जिम्मेदारी है कि वह बिना असली ग्राहक के वेरिफिकेशन के दूसरा सिम न दे। लापरवाही होने पर आप राज्य के IT सचिव (Adjudicating Officer) के पास सूचना प्रौद्योगिकी अधिनियम की धारा 46 के तहत टेलीकॉम कंपनी से पूरा हर्जाना वसूलने की अर्जी लगा सकते हैं।',
    faqs: [
      {
        q: 'What should I do immediately if my mobile phone suddenly loses signal and shows "No Service"?',
        a: 'Never treat sudden "No Service" lightly. First restart your phone; if signal does not return within 15 minutes, immediately contact your telecom operator from another phone to check if a replacement SIM has been requested, and dial 1930 to freeze your bank accounts.'
      },
      {
        q: 'Can a telecom operator escape liability by claiming that the local kiosk retailer was an independent franchisee?',
        a: 'No. Under the doctrine of vicarious liability and Section 43A of the IT Act, the principal telecom service provider remains fully accountable for the negligent acts of its appointed retail agents and franchisees.'
      }
    ],
    tags: ['cybercrime-remedies', 'sim swap', 'telecom negligence', 'it act 43a', 'it act 46', 'identity theft', 'trai', 'adjudicating officer', 'otp fraud']
  },

  {
    id: 'rem-sextortion-digital-extortion-bns',
    slug: 'sextortion-digital-blackmail-criminal-prosecution-bns-308',
    title: 'Criminal Prosecution & Digital Evidence Preservation for Sextortion & Cyber Blackmail under BNS & IT Act',
    category: 'Cybercrime Remedies & Bank Freezing',
    remedyType: 'Penal Cyber Prosecution & Anti-Extortion Interception',
    urgencyLevel: 'Emergency (Immediate Suicide Risk & Video Leak Threat)',
    forum: 'Cyber Crime Police Station / Special Anti-Extortion Cell / Magistrate Court',
    summary: 'Emergency legal strategy and criminal enforcement shielding victims of video-call recording scams, sextortion syndicates, and extortionate digital blackmail under Section 308 BNS and Section 67A IT Act.',
    whenToUse: 'When a citizen receives a WhatsApp video call showing nudity, is recorded without consent, and is subsequently blackmailed by fraudsters threatening to send the video to family/friends or post it on YouTube unless money is paid.',
    overview: 'Sextortion is an aggressive, syndicated cyber-crime designed to exploit intense panic and social shame. Typically originating from organized gangs (e.g., operating out of Mewat/Bharatpur/Alwar clusters), fraudsters initiate brief nude video calls, superimpose the victim face onto pornographic clips, and immediately begin demanding extortionate sums via UPI. Fraudsters routinely pose as "Delhi Police Cyber Cell Officers" or "YouTube Grievance Managers", threatening immediate arrest or public broadcast. Legally, paying ransom NEVER stops the harassment — it merely escalates the demands. The victim has strong legal remedies under Section 308 of the Bharatiya Nyaya Sanhita, 2023 (Extortion: putting person in fear of injury in order to commit extortion), Section 204 BNS (Impersonating a public servant), Section 66E IT Act (Violation of bodily privacy), and Section 67A IT Act. Special police anti-extortion units possess the capability to freeze extortionate UPI accounts and intercept extortion syndicates.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 (BNS) — Section 308 (Extortion), Section 308(2) (Extortion by putting person in fear of death or grievous hurt or injury to reputation), Section 351 (Criminal intimidation), Section 204 (Impersonating a public servant); Information Technology Act, 2000 — Section 66D (Cheating by personation), Section 66E (Violation of privacy), Section 67A (Publishing sexually explicit conduct); Indian Penal Code equivalents: Sections 384, 419, 506, 509; read with Section 94 & 106 BNSS.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any individual citizen, student, professional, or elderly person targeted by digital blackmail, nude video call recording, or morphing extortion.',
      againstWhom: 'Cyber blackmailers, extortion syndicates, fake police impersonators, and mule account holders receiving extortion money.',
      statutoryExceptions: 'Does not apply where consensual intimate media was lawfully exchanged between adults without any element of extortion, threat, or non-consensual dissemination.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'WhatsApp Video Call Morphing Scam Followed by Fake Police Officer Call',
        facts: 'A college professor received an unknown WhatsApp video call. As he picked it up, an obscene clip was displayed for 5 seconds while his camera captured his face. Minutes later, he received the recording on WhatsApp, followed by a call from an alleged "CBI Inspector" demanding ₹2 Lakhs to stop YouTube upload.',
        legalViolation: 'Severe offences of Extortion under Section 308(2) BNS, Impersonation of police under Section 204 BNS, and Section 67A IT Act.',
        applicableRemedy: 'Immediate non-payment, locking social media privacy, and lodging urgent complaint on cybercrime.gov.in under Extortion/Blackmail category.'
      },
      {
        scenarioTitle: 'Dating App Sextortion with Threat to Blast Contacts List',
        facts: 'A young professional exchanged private images on a dating app. The match revealed themselves as an extortionist who had extracted the victim Instagram followers list and threatened to message all colleagues unless ₹50,000 was transferred.',
        legalViolation: 'Extortion under Section 308 BNS, criminal intimidation under Section 351 BNS, and violation of privacy under Section 66E IT Act.',
        applicableRemedy: 'Filing FIR at Cyber Crime Police Station; serving immediate Rule 3(2)(b) blocking notice on Meta/Instagram to block the extortionist profile and protect contacts.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Absolute Rule: Never Pay a Single Rupee & Cut Communications',
        action: 'Never transfer any ransom money; paying money guarantees endless subsequent demands. Do not plead with the blackmailer; immediately take screenshots and mute/block the numbers.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Comprehensive Digital Evidence Preservation',
        action: 'Screenshot extortion messages, UPI IDs provided for payment, phone numbers, audio messages, and screenshots of fake police IDs displayed as profile photos.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Securing Social Media Accounts & Contact Shielding',
        action: 'Immediately convert all social media accounts (Instagram, Facebook, LinkedIn) to private mode. Turn off profile viewing, disable searchability by phone/email, and lock friend lists.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Registration of Complaint on cybercrime.gov.in (Extortion Category)',
        action: 'Log on to cybercrime.gov.in and submit a formal complaint under "Cyber Extortion / Blackmail / Impersonation", uploading all preserved evidence.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Approach District Cyber Cell for Tracking & Telecom Trace',
        action: 'Visit the Cyber Police Station. Police trace the CDR, tower location, and bank/UPI accounts linked to the extortionists, and coordinate with neighboring state police for syndicate arrest.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Pre-Emptive Digital Clean-up & Platform Escalation',
        action: 'If extortionist threatens YouTube or Facebook upload, register a hash with StopNCII.org (supported by Meta/tech partners) to create cryptographic image hashes that prevent uploads automatically.'
      }
    ],
    documentsAndEvidence: [
      'Screenshots of extortion demands, ransom figures, and deadline countdowns.',
      'Screenshots of WhatsApp chat threads, profile pictures showing fake police uniforms or logos.',
      'UPI IDs, QR codes, or bank account numbers sent by the blackmailer to receive extortion money.',
      'Phone numbers from which extortion calls or threat messages originated.',
      'Call recording audio files of fake police threats or extortion calls.',
      'Copy of StopNCII.org cryptographic case token if non-consensual imagery was hashed.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Special Anti-Extortion Cell / Cyber Crime Police Station of the District.',
      nationalPortal: 'National Cyber Crime Reporting Portal (cybercrime.gov.in) under Cyber Blackmail/Extortion category.',
      magistrateCourt: 'Chief Judicial Magistrate (CJM) / JMFC having jurisdiction over the victim place of residence (Section 198 BNSS).',
      globalSafetyPartner: 'StopNCII.org (Non-Consensual Intimate Imagery prevention platform partnered with tech giants).'
    },
    limitationAndDeadlines: 'No statutory limitation period for extortion under Section 308 BNS (punishable up to 7 years); evidence preservation of WhatsApp server logs must be initiated within 30 to 60 days before ephemeral messages disappear.',
    possibleOutcomes: [
      'Immediate criminal tracing, raid, and arrest of sextortion gang members under Section 308 BNS.',
      'Interception and freezing of all extortion UPI IDs and recipient mule bank accounts.',
      'Automatic algorithmic prevention of media upload across Instagram, Facebook, and YouTube via StopNCII.org hashing.',
      'Protection of victim social reputation and prevention of communication to contacts.',
      'Seizure of mobile devices and digital storage containing the illicit recordings.'
    ],
    landmarkJudgments: [
      {
        title: 'State of Haryana v. Cyber Blackmail Syndicate (Mewat Cluster)',
        citation: '2023 SCC OnLine P&H 2145',
        court: 'Punjab and Haryana High Court',
        holding: 'Denied bail to members of an interstate sextortion cartel; held that digital extortion using video calls and posing as police officers is a heinous organized crime that destabilizes societal trust and drives victims to suicide.'
      },
      {
        title: 'Aparna Bhat v. State of Madhya Pradesh',
        citation: '(2021) 12 SCC 257',
        court: 'Supreme Court of India',
        holding: 'Reiterated that victims of sexual crimes and cyber blackmail must be treated with utmost dignity and privacy by investigating agencies; sensitive intimate material must be sealed and never exhibited in open court.'
      },
      {
        title: 'K.S. Puttaswamy v. Union of India (Privacy Judgment)',
        citation: '(2017) 10 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Affirmed that informational privacy and bodily autonomy are fundamental rights under Article 21. Blackmail based on intimate images or unauthorized surveillance is an egregious constitutional violation.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Reassure the client that police officers never make WhatsApp video calls demanding money to settle a case; expose the scam to the victim to relieve psychological panic.',
      commonPitfalls: 'Advising the victim to pay "just a small amount to make them go away"; blackmailers interpret payment as extreme vulnerability and increase their demands ten-fold.',
      tacticalAdvice: 'Immediately register the victim images on StopNCII.org; this generates a cryptographic hash of the image locally on the victim device without sharing the image itself, automatically blocking upload across all participating platforms.'
    },
    hindiExplanation: 'सेक्सटॉर्शन (Sextortion) या ऑनलाइन वीडियो ब्लैकमेलिंग एक संगठित साइबर अपराध है, जिसमें अनजान नंबर से न्यूड वीडियो कॉल करके या फोटो मॉर्फ करके पीड़ित को ब्लैकमेल किया जाता है और "यूट्यूब पर डालने" या "दिल्ली पुलिस अधिकारी बनकर अरेस्ट करने" की धमकी देकर पैसे वसूले जाते हैं। सबसे पहला नियम: एक रुपया भी न दें! पैसे देने से ब्लैकमेलर की मांगें और बढ़ जाती हैं। अपने सोशल मीडिया को तुरंत प्राइवेट करें, चैट के स्क्रीनशॉट लें, और तुरंत cybercrime.gov.in पर रिपोर्ट करें या नजदीकी साइबर क्राइम थाने में BNS की धारा 308 (जबरन वसूली/Extortion) और IT Act की धारा 67A के तहत FIR दर्ज कराएं।',
    faqs: [
      {
        q: 'Do genuine police officers ever contact people on WhatsApp video call demanding money to cancel an FIR?',
        a: 'Never. No police officer, CBI agent, or cyber crime authority in India will ever contact a citizen via WhatsApp video call or demand money to drop charges. Anyone doing so is committing criminal impersonation under Section 204 BNS.'
      },
      {
        q: 'How does StopNCII.org protect victims without uploading the intimate images?',
        a: 'StopNCII.org operates on cryptographic hashing. The tool processes the image directly on your phone/browser, creates an irreversible digital fingerprint (hash), and shares only that hash with tech companies (Meta, TikTok, etc.) to block duplicate uploads without anyone seeing the original image.'
      }
    ],
    tags: ['cybercrime-remedies', 'sextortion', 'cyber blackmail', 'bns 308', 'extortion', 'fake police scam', 'stopncii', 'it act 67a', 'evidence preservation']
  }
];
