// ─── CHEQUE BOUNCE & NEGOTIABLE INSTRUMENTS PROCEDURES ──────────────────────
// Comprehensive litigation workflows under Negotiable Instruments Act, 1881

export const CHEQUE_BOUNCE_PROCEDURES = [
  {
    id: 'proc-cheque-statutory-demand-notice',
    slug: 'statutory-demand-notice-section-138-negotiable-instruments-act',
    title: 'Statutory Demand Notice under Section 138(b) Negotiable Instruments Act (15-Day Cure Period)',
    category: 'Cheque Bounce (Sec 138 NI Act)',
    actReference: 'Negotiable Instruments Act, 1881 — Section 138 Provisos (a), (b), (c) & Section 142',
    courtForum: 'Pre-litigation Statutory Notice served on Drawer / Accused',
    estimatedTimeline: 'Present cheque within 3 months → Notice within 30 days of memo → 15 days cure window',
    courtFeeLevel: 'Nil (Advocate Legal Notice Fee + Postal Speed Post / Registered AD Charges)',
    overview: 'The Statutory Demand Notice under Section 138 proviso (b) of the Negotiable Instruments Act, 1881 is the mandatory condition precedent without which no criminal complaint for cheque bounce can be instituted. The payee must present the cheque within its validity period (3 months), receive the Bank Return Memo, and dispatch a written demand notice within exactly 30 days of receiving information of dishonour. The drawer is granted a statutory grace period of 15 days from receipt of the notice to make payment. The cause of action to file a criminal complaint arises strictly on the 16th day upon default of payment.',
    legalBasis: 'Sections 138 (Dishonour of cheque for insufficiency of funds), 139 (Presumption in favor of holder), 142 (Cognizance of offences), and General Clauses Act, 1897 Section 27 (Presumption of service); read with C.C. Alavi Haji v. Palapetty Muhammed (2007) 6 SCC 555.',
    locusStandi: 'Payee or the Holder in Due Course of the dishonoured cheque, acting through an authorized legal counsel.',
    prerequisites: [
      'The cheque was drawn by the drawer on an account maintained with a banker for discharge of a legally enforceable debt or liability.',
      'The cheque was presented to the bank within a period of three months from the date on which it was drawn.',
      'The cheque was returned unpaid by the bank with a formal Bank Return Memo (e.g. "Funds Insufficient", "Account Closed", "Refer to Drawer", "Stop Payment").',
      'The demand notice must be dispatched in writing within 30 days of receipt of information of dishonour from the bank.',
      'The notice must demand the exact cheque amount, without clubbing unliquidated damages or penalty charges.'
    ],
    statutoryLimitation: 'Cheque presentation: Within 3 months of date of drawing. Notice dispatch: Strictly within 30 days of receipt of Bank Return Memo. Notice cure window: 15 days from receipt. Filing limitation: 30 days starting on Day 16.',
    mandatoryDocuments: [
      'Original Cheque returned unpaid by the bank.',
      'Original Bank Return Memo (Dishonour Memo) bearing bank seal and return reason code.',
      'Statutory Legal Demand Notice drafted under Section 138(b) NI Act.',
      'Postal Speed Post / Registered AD receipts establishing dispatch to all known addresses.',
      'India Post Online Delivery Tracking Report showing "Item Delivered" or "Refused" / "Unclaimed".',
      'Underlying transaction documents (Loan Agreement, Invoice, Ledger, Delivery Challan).'
    ],
    draftingGuidance: 'Draft the notice with mathematical and statutory precision: (1) State the date, cheque number, amount, and bank details; (2) Explain the legally enforceable debt for which the cheque was issued; (3) State the presentation date and the date of receipt of the bank return memo; (4) Demand the EXACT cheque amount (e.g. "pay the cheque amount of ₹15,00,000 within 15 days of receipt of this notice"); (5) Give clear notice that failure to pay will result in criminal prosecution under Section 138 NI Act and civil recovery; (6) Avoid demanding arbitrary interest or damages within the principal demand.',
    courtFeesFilingRules: 'No court fee. Dispatch via Registered Post AD and Speed Post with tracking.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Cheque Presentation & Receipt of Dishonour Memo',
        governingRule: 'Section 138 Proviso (a) NI Act',
        actingParty: 'Payee & Drawee Bank',
        description: 'Payee deposits the cheque in their bank account within 3 months of cheque date. Bank returns the unpaid cheque with a sealed Return Memo stating the reason.',
        advocateTips: 'Record the exact date when the bank intimated dishonour or when the return memo was physically collected.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting & Dispatching Statutory Demand Notice within 30 Days',
        governingRule: 'Section 138 Proviso (b) NI Act',
        actingParty: 'Payee Counsel',
        description: 'Draft the legal demand notice demanding the exact cheque amount. Dispatch by Registered Post Acknowledgement Due (RPAD) and Speed Post within 30 days.',
        advocateTips: 'Dispatch the notice to both the residential address and registered corporate office of the drawer, and also send via email and WhatsApp (BSA digital service).'
      },
      {
        stepNumber: 3,
        stepTitle: 'Tracking Delivery & Deemed Service under Section 27 General Clauses Act',
        governingRule: 'C.C. Alavi Haji & Section 27 General Clauses Act',
        actingParty: 'Payee Counsel',
        description: 'Download the official Postal Tracking Report. If the postal envelope returns endorsed "Refused", "Unclaimed", "Door Locked", service is deemed complete in law.',
        advocateTips: 'Under C.C. Alavi Haji, even if notice is returned unclaimed, service is legally presumed if sent to the correct address.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Statutory 15-Day Cure Window for Drawer',
        governingRule: 'Section 138 Proviso (c) NI Act',
        actingParty: 'Drawer / Accused',
        description: 'The drawer has exactly 15 days from the date of receipt (or deemed receipt) of notice to make payment of the demanded cheque amount.',
        advocateTips: 'No complaint can be filed during these 15 days; premature filing is illegal and will result in dismissal of the complaint (Yogendra Pratap Singh).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Accrual of Cause of Action on Day 16',
        governingRule: 'Section 142(1)(b) NI Act',
        actingParty: 'Payee & Advocate',
        description: 'If the drawer fails to make payment within 15 days, the cause of action to file a criminal complaint arises on the 16th day. Payee has 30 days to file the complaint.',
        advocateTips: 'Calculate the 30-day filing window starting from Day 16; do not let the 30-day deadline expire.'
      }
    ],
    hearingAndArguments: 'At the notice stage, there is no judicial hearing. However, drawer counsel frequently sends a formal Reply to Notice denying liability, asserting lost cheque, theft, security cheque misuse, or absence of consideration to lay the foundation for defense during trial.',
    possibleOutcomes: [
      'Drawer pays the full cheque amount within 15 days, completely discharging liability and terminating dispute.',
      'Drawer sends a frivolous or evasive reply denying liability, prompting immediate complaint filing on Day 16.',
      'Drawer fails to respond or pay, giving payee an uncontroverted basis to file criminal complaint.'
    ],
    appealRevisionRemedy: 'Notice is a pre-litigation step; not appealable. Defective notice can be made a ground for quashing the subsequent complaint under Section 528 BNSS / Section 482 CrPC.',
    commonPitfalls: [
      'Dispatching notice on the 31st day after receiving the return memo, which renders the entire prosecution non-maintainable.',
      'Demanding arbitrary sums (e.g. damages, legal fees) as part of the principal demand rather than stating them separately.',
      'Filing the criminal complaint before the 15-day cure window has elapsed (premature complaint).'
    ],
    practicalScenario: 'A supplier received a cheque of ₹28 Lakhs which was dishonoured for "Funds Insufficient" on March 1. The bank return memo was delivered to the supplier on March 3. Counsel drafted and dispatched the Statutory Demand Notice via Speed Post on March 18 (within 30 days). The postal tracking showed delivery on March 22. The 15-day cure window ended on April 6. The drawer defaulted. The cause of action arose on April 7, and counsel filed the criminal complaint on April 15 (well within the 30-day filing window).',
    caseLaws: [
      {
        title: 'C.C. Alavi Haji v. Palapetty Muhammed',
        citation: '(2007) 6 SCC 555 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Where notice is dispatched by registered post to the correct address of the drawer, Section 27 of General Clauses Act raises a mandatory presumption of service; a drawer who claims non-receipt can make payment within 15 days of receiving summons from the court to avoid prosecution.'
      },
      {
        title: 'Yogendra Pratap Singh v. Savitri Pandey',
        citation: '(2014) 10 SCC 713 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'No complaint can be maintained for the offence under Section 138 NI Act before the expiry of the 15-day cure period from the date of receipt of notice by the drawer; a premature complaint is non-est in the eyes of law.'
      }
    ],
    faqs: [
      {
        q: 'Can a demand notice under Section 138 NI Act be sent by email or WhatsApp?',
        a: 'Yes, provided proof of transmission and delivery is supported by an electronic evidence certificate under Section 63 BSA, but dispatching by Registered Post/Speed Post remains the safest statutory practice.'
      },
      {
        q: 'What if the drawer changes address and the notice returns with "Left without address"?',
        a: 'Under Section 27 General Clauses Act and D. Vinod Shivappa v. Nanda Belliappa, if the payee dispatched to the last known address, service is deemed complete.'
      }
    ],
    tags: ['cheque-bounce', 'section 138 ni act', 'statutory notice', 'demand notice', '15 days cure window', 'bank memo', 'c.c. alavi haji']
  },

  {
    id: 'proc-cheque-criminal-complaint-filing',
    slug: 'criminal-complaint-filing-section-142-ni-act-jurisdiction',
    title: 'Criminal Complaint Filing under Section 142 NI Act (Territorial Jurisdiction & Pre-Summoning Evidence)',
    category: 'Cheque Bounce (Sec 138 NI Act)',
    actReference: 'Negotiable Instruments Act, 1881 — Sections 142, 142A, 143, 145 & BNSS Section 223',
    courtForum: 'Court of Judicial Magistrate First Class / Metropolitan Magistrate having Territorial Jurisdiction under Section 142(2)',
    estimatedTimeline: 'Complaint filing: Within 30 days of Day 16 → Pre-summoning & Summons: 15 to 45 days',
    courtFeeLevel: 'Ad-valorem Court Fee as per State Court Fees Act schedule (typically 1% to 5% of cheque amount)',
    overview: 'A Criminal Complaint under Section 138 read with Section 142 of the Negotiable Instruments Act, 1881 is a specialized penal proceeding for enforcing financial integrity. Following the 2015 statutory amendment, Section 142(2) statutorily fixes territorial jurisdiction exclusively at the place where the branch of the payee bank is situated if delivered for collection through an account. Section 145 NI Act permits the complainant to give pre-summoning evidence on affidavit, dispensing with the need for personal oral examination. Upon scrutiny of the complaint, original cheque, memo, and affidavit, the Magistrate issues summons to the accused.',
    legalBasis: 'Sections 138, 141 (Offences by companies), 142 (Cognizance of offences), 142(2) (Territorial jurisdiction), 142A (Validation for transfer of pending cases), 145 (Evidence on affidavit) of the NI Act, 1881; and Supreme Court In Re: Expeditious Trial of Cases under Section 138 NI Act (2021).',
    locusStandi: 'Payee or Holder in Due Course who served the Section 138(b) notice and received no payment within 15 days.',
    prerequisites: [
      'Statutory Demand Notice dispatched within 30 days of dishonour and 15 days elapsed without payment.',
      'Filing within exactly 30 days from the date cause of action arose (Day 16) under Section 142(1)(b).',
      'Filing before the Magistrate having territorial jurisdiction where the payee bank branch is situated under Section 142(2)(a).',
      'Production of original Cheque, Bank Return Memo, copy of Legal Notice, and Postal Receipts/Tracking.',
      'Mandatory Pre-Summoning Evidence Affidavit under Section 145 NI Act.'
    ],
    statutoryLimitation: 'One month (30 days) from the date on which the cause of action arose under Section 142(1)(b). Condonation of delay is permissible under Section 142(1)(b) Proviso if sufficient cause is demonstrated.',
    mandatoryDocuments: [
      'Criminal Complaint under Section 138 & 142 NI Act signed and verified by complainant.',
      'Pre-Summoning Evidence Affidavit of Complainant under Section 145 NI Act.',
      'Original Dishonoured Cheque (Ex. CW-1/A).',
      'Original Bank Return Memo (Ex. CW-1/B).',
      'Office Copy of the Legal Demand Notice (Ex. CW-1/C).',
      'Original Postal Speed Post Receipts (Ex. CW-1/D) and Internet Tracking Report (Ex. CW-1/E).',
      'Board Resolution / Power of Attorney authorizing the authorized representative (if complainant is a company).',
      'Court Fee payment receipt / judicial stamps.',
      'Vakalatnama executed by the Complainant.'
    ],
    draftingGuidance: 'The Complaint must strictly establish the complete factual and chronological chain: (1) Cheque issuance details and legal liability; (2) Cheque presentation and bank memo details; (3) Date of dispatch and delivery of legal notice; (4) Explicit assertion that 15 days expired and no payment was received; (5) If accused is a company, plead Section 141 specifically: name the Directors and affirm they were in charge of and responsible for the conduct of company business at the relevant time (SMS Pharmaceuticals ruling); (6) Territorial jurisdiction clause citing Section 142(2)(a) and the address of payee bank branch.',
    courtFeesFilingRules: 'Pay requisite court fee stamps as per State schedule. Pay process fees and furnish registered post envelopes for issuing summons.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Territorial Jurisdiction Verification under Section 142(2)',
        governingRule: 'Section 142(2)(a) NI Act (2015 Amendment)',
        actingParty: 'Complainant Advocate',
        description: 'Verify the location of the payee bank branch where the cheque was presented for clearance. The court having jurisdiction over that bank branch has exclusive jurisdiction.',
        advocateTips: 'Under Dashrath Rupsingh Rathod (overruled by 2015 amendment), jurisdiction is now firmly where the payee maintains their account branch.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Filing Complaint with Section 145 NI Act Affidavit',
        governingRule: 'Sections 142 & 145 NI Act',
        actingParty: 'Complainant / Counsel',
        description: 'Lodge complaint with list of witnesses, original documents, and pre-summoning evidence affidavit in the court registry. Court registers Complaint Case (CC No.).',
        advocateTips: 'Under SC 2021 Expeditious Trial directions, the Magistrate must accept the Section 145 affidavit without requiring oral examination of the complainant.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Pre-Summoning Scrutiny & Issue of Summons',
        governingRule: 'Section 227 BNSS & Section 143 NI Act',
        actingParty: 'Judicial Magistrate / MM',
        description: 'Magistrate scrutinizes the documents, verifies limitation and jurisdiction, takes cognizance, and issues summons to the accused returnable within 30 days.',
        advocateTips: 'Provide speed post envelopes, email IDs, and WhatsApp phone numbers of the accused to ensure immediate electronic and physical service under Section 144 NI Act.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Service of Summons & Bailable / Non-Bailable Warrants on Default',
        governingRule: 'Section 144 NI Act & BNSS',
        actingParty: 'Court & Police',
        description: 'Summons served. If accused fails to appear on the date fixed, the court issues Bailable Warrants (BW), followed by Non-Bailable Warrants (NBW) if evasion continues.',
        advocateTips: 'If accused is evading, move an application under Section 84 BNSS for proclamation and attachment of property.'
      },
      {
        stepNumber: 5,
        stepTitle: 'First Appearance of Accused & Grant of Bail',
        governingRule: 'Section 480 BNSS & Section 143 NI Act',
        actingParty: 'Accused & Magistrate',
        description: 'Accused appears physically, applies for regular bail (Section 138 is a bailable offence), and furnishes a personal bond and surety bond.',
        advocateTips: 'Complainant counsel should immediately move an application on this very date for interim compensation under Section 143A NI Act.'
      }
    ],
    hearingAndArguments: 'At the pre-summoning stage, proceedings are ex-parte. Complainant counsel establishes statutory compliance: valid notice, postal delivery, expiry of 15 days, and filing within 30 days. Accused has no right of hearing before summons are issued.',
    possibleOutcomes: [
      'Cognizance taken and summons issued to accused drawer and company directors.',
      'Condonation of delay granted under Section 142(1)(b) proviso if filed beyond 30 days for sufficient cause.',
      'Complaint dismissed under Section 226 BNSS for failure to establish essential Section 138 ingredients.'
    ],
    appealRevisionRemedy: 'A summoning order under Section 138 NI Act can be challenged via Criminal Revision under Section 438 BNSS or Quashing Petition under Section 528 BNSS before the High Court on pure jurisdictional grounds.',
    commonPitfalls: [
      'Filing before the court having jurisdiction over drawer bank instead of payee account branch under Section 142(2)(a).',
      'Failing to aver specific director roles under Section 141 NI Act when prosecuting a company, inviting quashing.',
      'Missing the 30-day limitation window from Day 16 without filing a condonation application.'
    ],
    practicalScenario: 'A wholesale dealer in Mumbai deposited a ₹40 Lakhs cheque drawn on an SBI branch in Pune at his HDFC Bank branch in Bandra, Mumbai. Upon dishonour and default of notice, the dealer filed the Section 138 complaint before the Metropolitan Magistrate at Bandra, citing Section 142(2)(a). Counsel filed the Section 145 evidence affidavit along with bank deposit slips. The Magistrate took cognizance and issued summons to the drawer company and its managing director returnable in 30 days.',
    caseLaws: [
      {
        title: 'In Re: Expeditious Trial of Cases under Section 138 of N.I. Act',
        citation: '2021 SCC OnLine SC 325 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Issued binding directions: Magistrates must accept pre-summoning evidence on affidavit without examining complainant orally; courts can convert summary trial into summons trial only after recording reasons; section 142(2) governs exclusive territorial jurisdiction.'
      },
      {
        title: 'SMS Pharmaceuticals Ltd. v. Neeta Bhalla',
        citation: '(2005) 8 SCC 89 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'To hold a director liable under Section 141 NI Act, the complaint must contain specific averments showing that at the time the offence was committed, the director was in charge of and responsible to the company for the conduct of its business; mere designation as director is insufficient.'
      }
    ],
    faqs: [
      {
        q: 'Can a delay in filing a Section 138 complaint be condoned?',
        a: 'Yes. Under the Proviso to Section 142(1)(b) NI Act, the court may take cognizance after the prescribed 30-day period if the complainant satisfies the court that there was sufficient cause for not making the complaint within time.'
      },
      {
        q: 'Is the offence under Section 138 NI Act bailable?',
        a: 'Yes, Section 138 is a bailable and compoundable offence; the accused is entitled to bail upon furnishing personal bond and surety.'
      }
    ],
    tags: ['cheque-bounce', 'section 142 ni act', 'criminal complaint', 'territorial jurisdiction', 'pre-summoning evidence', 'section 145 ni act', 'section 141']
  },

  {
    id: 'proc-cheque-summary-trial-interim-comp',
    slug: 'summary-trial-interim-compensation-section-143a-148-ni-act',
    title: 'Summary Trial Procedure, Section 143A Interim Compensation & Section 148 Appellate Deposit',
    category: 'Cheque Bounce (Sec 138 NI Act)',
    actReference: 'Negotiable Instruments Act, 1881 — Sections 139, 143, 143A, 147 & 148',
    courtForum: 'Court of Judicial Magistrate / Metropolitan Magistrate → Appellate Sessions Court',
    estimatedTimeline: 'Statutory mandate: 6 months for trial disposal under Section 143(3)',
    courtFeeLevel: '₹10 - ₹25 Application fee stamp',
    overview: 'Section 143 of the Negotiable Instruments Act mandates that all cheque bounce trials shall be conducted as summary trials under the Code of Criminal Procedure, with a statutory mandate to conclude the trial within six months. The 2018 legislative amendments introduced two game-changing provisions: Section 143A, empowering the trial court to order the drawer to deposit up to 20% of the cheque amount as "Interim Compensation" within 60 days of framing of notice/charge; and Section 148, empowering the appellate court to order deposit of a minimum of 20% of the fine or compensation awarded upon appeal by the convict.',
    legalBasis: 'Sections 139 (Presumption of debt), 143 (Summary trial power), 143A (Power to direct interim compensation), 147 (Compounding of offences), and 148 (Power of Appellate Court to direct deposit) of NI Act, 1881; and SC rulings in Surinder Singh Deswal and Rakesh Ranjan Shrivastava.',
    locusStandi: 'Complainant seeking interim compensation and conviction. Accused raising statutory defense to rebut Section 139 presumption.',
    prerequisites: [
      'Accused must have appeared in court and entered a plea of "Not Guilty" under Section 274 BNSS (Old Sec 251 CrPC).',
      'Complainant must file a formal application under Section 143A NI Act seeking interim compensation.',
      'For Section 148: Conviction by trial court and appeal preferred by the convict before Sessions Court.',
      'Accused must demonstrate a prima facie defense to resist interim compensation deposit.'
    ],
    statutoryLimitation: 'Under Section 143(3) NI Act, trial must be concluded within six months from the date of filing of the complaint. Under Section 143A(3), interim compensation must be deposited within 60 days (extendable by 30 days on sufficient cause).',
    mandatoryDocuments: [
      'Application under Section 143A NI Act for Interim Compensation.',
      'Plea / Notice of Accused recorded under Section 274 BNSS.',
      'Complainant Affidavit of Evidence under Section 145 NI Act.',
      'Application under Section 145(2) NI Act by Accused seeking leave to cross-examine Complainant.',
      'Defense Witness Depositions and Documentary Evidence disproving debt (Ex. DW-1).',
      'Compounding Application under Section 147 NI Act (if settlement reached).'
    ],
    draftingGuidance: 'Draft the Section 143A application emphasizing: (a) Clear admission of signature on the cheque; (b) Invocation of mandatory statutory presumption under Section 139 NI Act; (c) Legislative intent to protect commercial credit; (d) Prayer for 20% interim compensation payable within 60 days. In the defense application under Section 145(2), specifically articulate the defense theory (e.g. security cheque for unsupplied goods, payment made through RTGS) to satisfy the court that cross-examination is necessary.',
    courtFeesFilingRules: 'Affix nominal application stamps. Interim compensation is deposited directly in court or paid to complainant bank account.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Framing of Notice / Plea Recording',
        governingRule: 'Section 274 BNSS (Old Sec 251 CrPC)',
        actingParty: 'Magistrate & Accused',
        description: 'Magistrate states the particulars of the offence to the accused and asks: "Do you plead guilty or have any defense to make?" Accused pleads not guilty and discloses defense.',
        advocateTips: 'Accused must state their defense theory clearly on the notice sheet, as it sets the boundary for cross-examination.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Application & Order for Section 143A Interim Compensation',
        governingRule: 'Section 143A NI Act & Rakesh Ranjan Ruling',
        actingParty: 'Magistrate, Complainant & Accused',
        description: 'Complainant applies for interim compensation. Court exercises judicial discretion and directs accused to deposit up to 20% of cheque amount within 60 days.',
        advocateTips: 'Under SC in Rakesh Ranjan Shrivastava (2024), Section 143A is discretionary, not mandatory; the court must apply its mind to the prima facie merits of the defense.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Accused Application to Cross-Examine Complainant under Section 145(2)',
        governingRule: 'Section 145(2) NI Act',
        actingParty: 'Defense Counsel & Magistrate',
        description: 'Accused moves application under Section 145(2) seeking to recall the complainant for cross-examination. Court grants permission and fixes day-to-day dates.',
        advocateTips: 'Focus cross-examination on: (1) Complainant income tax returns (ITRs) not reflecting loan; (2) Inability of complainant to prove source of cash funds; (3) Lack of contemporaneous receipts.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Defense Evidence (Rebutting Section 139 Presumption)',
        governingRule: 'Section 139 NI Act & Rangappa v. Sri Mohan',
        actingParty: 'Defense Counsel & Defense Witnesses',
        description: 'Accused leads defense evidence (DW) to rebut the presumption on a "preponderance of probabilities". Accused may produce bank statements, ledger accounts, or examine bank managers.',
        advocateTips: 'Accused is not required to prove defense beyond reasonable doubt; raising a probable defense is sufficient to shift the burden back to complainant (Rangappa).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Judgment, Sentencing & Section 148 Appellate Deposit',
        governingRule: 'Section 138 & Section 148 NI Act',
        actingParty: 'Magistrate / Sessions Court',
        description: 'If convicted, court imposes sentence of up to 2 years imprisonment and/or fine up to twice the cheque amount. If convict appeals before Sessions Court, the appellate court orders minimum 20% deposit under Section 148.',
        advocateTips: 'Under Surinder Singh Deswal, deposit of minimum 20% under Section 148 in appeal is the normal rule; non-deposit can lead to cancellation of bail.'
      }
    ],
    hearingAndArguments: 'Complainant counsel argues: admitted signature attracts Section 139 presumption, defense is bare denial without documentary backing, and commercial honesty must be enforced. Accused counsel argues: standard of proof for rebuttal is preponderance of probabilities, transaction not reflected in ITR, unaccounted cash loan barred by law, and cheque was an unreturned security instrument.',
    possibleOutcomes: [
      'Conviction: accused sentenced to imprisonment and directed to pay compensation equal to or exceeding cheque amount.',
      'Acquittal: accused rebuts Section 139 presumption and complaint is dismissed with discharge of bail bonds.',
      'Compounding under Section 147 NI Act: parties settle, full or negotiated amount paid, and accused acquitted.'
    ],
    appealRevisionRemedy: 'A judgment of conviction is appealable before the Sessions Court under Section 415 BNSS / Section 374 CrPC. An order of acquittal is appealable before the High Court under Section 419(4) BNSS / Section 378(4) CrPC.',
    commonPitfalls: [
      'Failing to deposit the 20% interim compensation within 60 days under Section 143A, leading to recovery as land revenue or fine.',
      'Failing to rebut the Section 139 presumption with documentary evidence, relying merely on oral denials in cross-examination.',
      'Assuming that Section 148 appellate deposit can be avoided without exceptional reasons.'
    ],
    practicalScenario: 'A builder was prosecuted for dishonour of three cheques totaling ₹60 Lakhs. Upon notice framing, the Magistrate ordered 20% interim compensation (₹12 Lakhs) under Section 143A. During trial, the builder demonstrated from the complainant own cross-examination and income tax returns that the complainant had never declared this alleged loan and had no banking source for ₹60 Lakhs. Applying Rangappa v. Sri Mohan, the Magistrate held the presumption stood rebutted, acquitted the builder, and directed the complainant to refund the ₹12 Lakhs interim compensation with interest.',
    caseLaws: [
      {
        title: 'Rangappa v. Sri Mohan',
        citation: '(2010) 11 SCC 441 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Section 139 of the NI Act includes a presumption that there exists a legally enforceable debt or liability; however, the accused can rebut this presumption on a preponderance of probabilities by relying on material brought on record or cross-examination of the complainant without entering the witness box.'
      },
      {
        title: 'Rakesh Ranjan Shrivastava v. State of Jharkhand',
        citation: '(2024) 4 SCC 719',
        court: 'Supreme Court of India',
        holding: 'The power of the trial court under Section 143A to direct interim compensation is directory and discretionary, not mandatory; the court must exercise judicial discretion, consider whether a prima facie case exists, and record reasons.'
      },
      {
        title: 'Surinder Singh Deswal v. Virender Gandhi',
        citation: '(2019) 11 SCC 341',
        court: 'Supreme Court of India',
        holding: 'Section 148 of the NI Act empowers the Appellate Court to direct deposit of a minimum of 20% of the fine or compensation awarded by the trial court; the word "may" in Section 148 is generally construed as "shall" unless exceptional circumstances are made out.'
      }
    ],
    faqs: [
      {
        q: 'Is the accused refunded the Section 143A interim compensation if ultimately acquitted?',
        a: 'Yes. Under Section 143A(4) NI Act, if the accused is acquitted, the court must direct the complainant to repay the amount of interim compensation with interest within 60 days.'
      },
      {
        q: 'Can a cheque bounce case be compounded without the consent of the complainant?',
        a: 'The Supreme Court in Meters and Instruments v. Kanchan Mehta held that if the accused offers to pay the entire cheque amount with interest and costs, the court may discharge the accused even without complainant consent.'
      }
    ],
    tags: ['cheque-bounce', 'section 143a', 'section 148', 'interim compensation', 'summary trial', 'rangappa v sri mohan', 'compounding 147']
  }
];
