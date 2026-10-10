// ─── CIVIL LITIGATION & PLEADINGS PROCEDURES ─────────────────────────────────
// Authoritative civil trial workflows under Code of Civil Procedure, 1908 (CPC)

export const CIVIL_LITIGATION_PROCEDURES = [
  {
    id: 'proc-civil-institution-plaint-order-7',
    slug: 'institution-civil-suit-plaint-preparation-order-7-cpc',
    title: 'Institution of Civil Suit & Plaint Preparation under Order VII CPC',
    category: 'Civil Litigation & Pleadings',
    actReference: 'Code of Civil Procedure, 1908 — Section 26, Order IV & Order VII',
    courtForum: 'Civil Court of Lowest Competent Grade (Section 15 CPC) / Junior/Senior Civil Judge / Commercial Court',
    estimatedTimeline: 'Plaint filing & scrutiny: 2 to 7 days → Issue of Summons: 7 to 15 days',
    courtFeeLevel: 'Ad-valorem Court Fee as per State Court Fees Act based on suit valuation',
    overview: 'The institution of a civil suit is the formal invocation of judicial remedy to enforce civil rights, recover debts, or obtain property decrees. Under Section 26 and Order IV Rule 1 CPC, every suit is instituted by presenting a Plaint in duplicate to the Court or its authorized officer, supported by an affidavit under Order VI Rule 15A. Order VII CPC prescribes the mandatory contents of a plaint, requiring clear statements of material facts (not evidence), establishment of cause of action, demonstration of territorial and pecuniary jurisdiction, accurate valuation for court fees, and annexure of all relied documents under Rule 14.',
    legalBasis: 'Sections 15–20 (Territorial & Pecuniary Jurisdiction), Section 26 (Institution of suits), Order IV (Commencement of Suit), Order VI (Pleadings Generally), Order VII (Plaint), Court Fees Act, 1870, and Limitation Act, 1963.',
    locusStandi: 'Any natural or juristic person having a cause of action, a legal right invaded, or an actionable civil injury against the named defendant.',
    prerequisites: [
      'Identification of the competent Court of lowest pecuniary and territorial grade under Section 15 and Sections 16–20 CPC.',
      'Clear, continuous cause of action that is alive and not barred by limitation.',
      'Payment of requisite ad-valorem or fixed court fees under the applicable State Court Fees and Suits Valuation Act.',
      'Statutory pre-suit notices served where mandatory (e.g. 2 months notice under Section 80 CPC for government defendants, or Section 12A Commercial Courts Act mediation).',
      'Plaint verification and Statement of Truth in commercial matters.'
    ],
    statutoryLimitation: 'Governed strictly by the Limitation Act, 1963. Suits for money recovery: 3 years from due date (Art. 19–22); specific performance: 3 years from breach date (Art. 54); possession based on title: 12 years (Art. 65).',
    mandatoryDocuments: [
      'Plaint in duplicate signed and verified under Order VI Rule 15 CPC.',
      'Affidavit in support of plaint verification / Statement of Truth under Order VI Rule 15A CPC.',
      'List of Documents relied upon under Order VII Rule 14(1) CPC along with original/photocopies.',
      'Address Form / Memo of Parties containing complete physical, email, and mobile contact details under Order VI Rule 14A.',
      'Court Fee payment receipt / e-Court fee challan.',
      'Vakalatnama duly accepted by advocate with welfare stamps.',
      'Process fee memo, summons forms in duplicate, and registered post envelopes.'
    ],
    draftingGuidance: 'The Plaint must be structured methodically: (1) Title of Court and Cause Title; (2) Description of parties; (3) Chronological statement of material facts (Order VI Rule 2) without pleading law or evidence; (4) Specific paragraph on when Cause of Action arose (mandatory under Order VII Rule 1(e)); (5) Paragraph establishing Territorial and Pecuniary Jurisdiction (Order VII Rule 1(f)); (6) Valuation and Court Fees paragraph (Order VII Rule 1(i)); (7) Prayers detailing main, alternative, and ancillary reliefs; and (8) Verification clause.',
    courtFeesFilingRules: 'Ad-valorem court fee computed on the market value or debt amount under Section 7 of the Court Fees Act. Filing through e-Filing portal (in High Courts/District Courts) or physical filing counter with registration and defect scrutiny.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Pre-Filing Limitation, Jurisdiction & Notice Scrutiny',
        governingRule: 'Section 15–20 CPC & Section 3 Limitation Act',
        actingParty: 'Plaintiff Advocate',
        description: 'Verify limitation deadlines, ascertain court grade, and confirm whether statutory pre-litigation notices (Section 80 CPC or Section 12A Commercial Courts Act) have matured.',
        advocateTips: 'If limitation is expiring, prepare an urgent filing; under Section 3 Limitation Act, the court is bound to dismiss a time-barred suit even if defense does not plead it.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting Plaint & Compiling Documents under Order VII Rule 14',
        governingRule: 'Order VI & Order VII CPC',
        actingParty: 'Plaintiff & Counsel',
        description: 'Draft plaint with distinct factual paragraphs. Compile all original agreements, invoices, or deeds in a List of Documents under Order VII Rule 14(1) CPC.',
        advocateTips: 'Documents not produced with the plaint cannot be received in evidence at the hearing without leave of the court under Order VII Rule 14(3).'
      },
      {
        stepNumber: 3,
        stepTitle: 'Lodging at Filing Counter & Registry Scrutiny',
        governingRule: 'Order IV Rule 1 CPC & High Court Rules',
        actingParty: 'Court Registry / Filing Counter',
        description: 'Plaint is lodged in duplicate with court fee receipt. Registry scrutinizes the plaint for defects (court fee shortage, caveat, index mismatch). Defect memo is issued if required.',
        advocateTips: 'Cure registry defects within the standard 7-day cure window to preserve original date of presentation.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Registration of Suit & Assignment of Case Number',
        governingRule: 'Order IV Rule 2 CPC',
        actingParty: 'Registry Superintendent',
        description: 'When plaint conforms to statutory rules, the court registry enters the suit particulars in the Register of Civil Suits and assigns a Civil Suit Number (CS No.).',
        advocateTips: 'Check whether any caveat under Section 148A CPC is lodged against the suit property or defendant name.'
      },
      {
        stepNumber: 5,
        stepTitle: 'First Listing Before Judge & Issue of Summons',
        governingRule: 'Order V Rules 1 & 9 CPC',
        actingParty: 'Civil Judge',
        description: 'Suit is placed before the Civil Judge. Court takes cognizance of the plaint, considers interim injunction applications under Order XXXIX, and orders summons to defendant returnable in 30 days.',
        advocateTips: 'Take summons by hand (Dasti summons) under Order V Rule 9A CPC to ensure personal service without relying exclusively on postal delays.'
      }
    ],
    hearingAndArguments: 'At the institution stage, hearing is typically ex-parte on admission and interim injunction. Plaintiff counsel establishes prima facie jurisdiction, payment of adequate court fees, compliance with limitation, and imminent necessity for interim restraining orders.',
    possibleOutcomes: [
      'Suit admitted, registered, and summons issued to defendant with interim relief.',
      'Rejection of Plaint under Order VII Rule 11 CPC (no cause of action, barred by limitation, or undervalued).',
      'Return of Plaint under Order VII Rule 10 CPC for presentation before the court having proper jurisdiction.'
    ],
    appealRevisionRemedy: 'Rejection of plaint under Order VII Rule 11 CPC is a deemed decree under Section 2(2) CPC, appealable as a Regular First Appeal under Section 96 CPC. Return of plaint under Order VII Rule 10 is appealable under Order XLIII Rule 1(a) CPC.',
    commonPitfalls: [
      'Failing to disclose when the cause of action specifically arose, inviting rejection under Order VII Rule 11(a).',
      'Omitting to produce all relied documents with the plaint under Order VII Rule 14, requiring costly condonation applications later.',
      'Filing against government authorities without 2 months statutory notice under Section 80 CPC without an urgent exemption application under Section 80(2).'
    ],
    practicalScenario: 'A manufacturing supplier filed a civil suit for recovery of ₹62 Lakhs against a distributor. The plaintiff annexed all purchase orders, bills of lading, GST invoices, and demand notices under Order VII Rule 14(1). The registry raised an objection regarding court fee calculation. Counsel submitted a revised court fee challan under the State Court Fees Act, cured the defect within 3 days, and obtained summons along with an ex-parte conditional attachment order under Order XXXVIII Rule 5 CPC.',
    caseLaws: [
      {
        title: 'Dahiben v. Arvindbhai Kalyanji Bhanusali',
        citation: '(2020) 7 SCC 366',
        court: 'Supreme Court of India',
        holding: 'Under Order VII Rule 11 CPC, the court must reject a plaint if on a meaningful reading of the plaint it is found to be manifestly vexatious, devoid of cause of action, or barred by limitation; the court cannot be misled by clever drafting creating an illusion of cause of action.'
      },
      {
        title: 'Salem Advocate Bar Association v. Union of India',
        citation: '(2005) 6 SCC 344',
        court: 'Supreme Court of India',
        holding: 'Upheld CPC amendments regarding production of documents under Order VII Rule 14 and service of summons under Order V; emphasized speedy civil trial management.'
      }
    ],
    faqs: [
      {
        q: 'What happens if a document relied upon is not filed with the plaint?',
        a: 'Under Order VII Rule 14(3) CPC, it cannot be produced in evidence during the trial without the prior leave of the court.'
      },
      {
        q: 'Can a plaint be rejected in part under Order VII Rule 11 CPC?',
        a: 'No. The Supreme Court in Madhav Prasad Aggarwal held that a plaint must be rejected as a whole or not at all; partial rejection is impermissible in law.'
      }
    ],
    tags: ['civil-litigation', 'plaint', 'order 7 cpc', 'institution of suit', 'order 7 rule 11', 'summons', 'limitation act']
  },

  {
    id: 'proc-civil-written-statement-counterclaim',
    slug: 'written-statement-counterclaim-order-8-cpc-limitation',
    title: 'Filing Written Statement, Set-Off & Counter-Claim under Order VIII CPC (Mandatory 30/120 Day Rule)',
    category: 'Civil Litigation & Pleadings',
    actReference: 'Code of Civil Procedure, 1908 — Order VIII Rules 1, 6 & 6A & Commercial Courts Act 2015',
    courtForum: 'Civil Court hearing the civil suit / Commercial Court',
    estimatedTimeline: 'Mandatory 30 days from summons service (Extendable up to 90 days in ordinary suits; strictly 120 days hard limit in commercial suits)',
    courtFeeLevel: 'Fixed court fee for WS / Ad-valorem court fee on Counter-Claim as per suit valuation',
    overview: 'The Written Statement (WS) is the defendant formal defense and response to the claims raised in the plaint. Under Order VIII Rule 1 CPC, the defendant must present a written statement within 30 days from the date of service of summons. Under Order VIII Rule 3–5 CPC, every allegation of fact in the plaint must be specifically denied; evasive denial or bare denial is deemed an admission under law. Order VIII also empowers the defendant to plead a legal or equitable Set-Off (Rule 6) or institute an independent Counter-Claim (Rule 6A), which operates with the force of a cross-suit.',
    legalBasis: 'Order VIII Rules 1–10 CPC (Written Statement, Set-Off and Counter-Claim); read with SC decisions in Kailash v. Nanhku, SCG Contracts v. K.S. Chamankar Infrastructure, and Order VIII Rule 5 doctrine of non-traverse.',
    locusStandi: 'Defendant served with summons in a pending civil suit, or their duly authorized power of attorney holder.',
    prerequisites: [
      'Valid service of summons along with a complete copy of the plaint and annexures.',
      'Filing within statutory timelines: 30 days default; maximum 90 days upon recorded reasons in ordinary civil suits.',
      'In Commercial Suits under Commercial Courts Act, 2015: strict non-extendable hard cap of 120 days, after which right to file WS is forfeited forever.',
      'Payment of ad-valorem court fees if pleading a Counter-Claim or legal Set-Off.'
    ],
    statutoryLimitation: '30 days from service of summons (extendable up to 90 days under Order VIII Rule 1 proviso). In commercial suits, exactly 120 days hard cap under Order VIII Rule 1 proviso as amended by Commercial Courts Act.',
    mandatoryDocuments: [
      'Written Statement drafted with paragraph-by-paragraph specific denials.',
      'Preliminary Objections detailing maintainability, lack of cause of action, non-joinder, or limitation.',
      'Affidavit verifying the Written Statement / Statement of Truth in commercial suits.',
      'List of Documents relied upon by defendant under Order VIII Rule 1A CPC along with original/true copies.',
      'Counter-Claim application and schedule of valuation (if claiming cross-relief).',
      'Vakalatnama executed by defendant.'
    ],
    draftingGuidance: 'Structure the Written Statement into two distinct parts: (Part I) Preliminary Objections: Plead maintainability bars, Order VII Rule 11 grounds, non-joinder of necessary parties under Order I Rule 9, and lack of cause of action; (Part II) Reply on Merits: Paragraph-by-paragraph traversal of plaint averments. Crucial rule: Avoid evasive denial; state the defendant version of each transaction specifically. If asserting Counter-Claim under Order VIII Rule 6A, treat it as a cross-plaint with its own cause of action, jurisdiction, valuation, and prayer paragraphs.',
    courtFeesFilingRules: 'Written statement requires standard application court fees (₹10–₹50). If a Counter-Claim or Set-Off is pleaded, ad-valorem court fee must be paid on the counter-claim amount as if it were a separate plaint.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Receipt of Summons & Timeline Computation',
        governingRule: 'Order V & Order VIII Rule 1 CPC',
        actingParty: 'Defendant / Advocate',
        description: 'Record the exact date and mode of service of summons (postal stamp, bailiff report). Calculate the 30-day and 90-day outer limits immediately.',
        advocateTips: 'If served only with summons without plaint copy, immediately file an application on the first date recording that summons is incomplete and limitation has not commenced.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting Specific Denials & Preliminary Objections',
        governingRule: 'Order VIII Rules 2, 3, 4 & 5 CPC',
        actingParty: 'Defendant Counsel',
        description: 'Draft specific traversal of every fact. Plead new facts (e.g. fraud, release, limitation, illegality) under Rule 2. Remember that any fact not specifically denied is treated as admitted under Rule 5.',
        advocateTips: 'Never write "contents of paragraph X are denied for want of knowledge"; provide defendant substantive counter-narrative.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Drafting Counter-Claim / Set-Off (Optional Cross-Suit)',
        governingRule: 'Order VIII Rules 6 & 6A CPC',
        actingParty: 'Defendant & Counsel',
        description: 'If defendant has an independent claim against plaintiff arising before or after filing suit but before defendant has delivered defense, incorporate Counter-Claim under Rule 6A.',
        advocateTips: 'Counter-claim survives even if the plaintiff suit is stayed, discontinued, or dismissed under Order VIII Rule 6D CPC.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Compiling Defense Documents under Order VIII Rule 1A',
        governingRule: 'Order VIII Rule 1A CPC',
        actingParty: 'Defendant Advocate',
        description: 'Compile all documents supporting defense into a List of Documents. File original or authenticated copies simultaneously with the written statement.',
        advocateTips: 'Documents not produced with WS cannot be received later without court leave under Rule 1A(3).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Filing & Condonation of Delay (if beyond 30 days)',
        governingRule: 'Order VIII Rule 1 Proviso & Section 148 CPC',
        actingParty: 'Civil Court & Defendant',
        description: 'If filing after 30 days, accompany the WS with a formal application for condonation of delay detailing exceptional reasons (illness, bereavement) supported by affidavit.',
        advocateTips: 'In commercial suits, if 120 days have passed, no court (not even High Court under Article 227) can condone the delay (SCG Contracts ruling).'
      }
    ],
    hearingAndArguments: 'Plaintiff counsel argues that defendant right to file WS should be closed for inordinate delay or that vague denials amount to admission under Order VIII Rule 5. Defendant counsel argues sufficient cause for delay within 90 days, meritorious defense, and right to contest claims on merits.',
    possibleOutcomes: [
      'Written Statement taken on record (with or without nominal costs).',
      'Counter-Claim registered and plaintiff directed to file Replication/Written Statement to Counter-Claim.',
      'Right to file Written Statement closed and judgment pronounced under Order VIII Rule 10 CPC.'
    ],
    appealRevisionRemedy: 'An order closing the right to file WS or striking off defense is challengeable via Civil Revision under Section 115 CPC or Supervisory Petition under Article 227 before the High Court. An order on Counter-Claim is a decree appealable under Section 96 CPC.',
    commonPitfalls: [
      'Exceeding the 120-day outer deadline in a Commercial Suit, resulting in forfeiture of defense without exception.',
      'Making general or evasive denials, which courts treat as deemed admissions under Order VIII Rule 5.',
      'Failing to pay court fees on a Counter-Claim, resulting in its rejection.'
    ],
    practicalScenario: 'In a commercial recovery suit before the Delhi High Court Commercial Division, the defendant was served on January 5. The defendant filed the Written Statement on May 15 (Day 130) citing medical treatment of the managing director. The plaintiff moved an application to strike off defense. The court, applying SCG Contracts v. K.S. Chamankar, held that the 120-day limit in commercial suits is mandatory and non-extendable, forfeited the right to file WS, and took the plaint averments as unchallenged.',
    caseLaws: [
      {
        title: 'SCG Contracts (India) Pvt. Ltd. v. K.S. Chamankar Infrastructure',
        citation: '(2019) 12 SCC 210',
        court: 'Supreme Court of India',
        holding: 'The 120-day time limit for filing a Written Statement in a Commercial Suit under the amended Order VIII Rule 1 CPC is mandatory; after expiry of 120 days, the right of the defendant to file WS is extinguished and no court has inherent power to extend time.'
      },
      {
        title: 'Kailash v. Nanhku',
        citation: '(2005) 4 SCC 480',
        court: 'Supreme Court of India',
        holding: 'In non-commercial ordinary civil suits, the 90-day time limit in Order VIII Rule 1 is directory and procedural; the court retains discretion to extend time in exceptional and rare circumstances upon payment of costs.'
      }
    ],
    faqs: [
      {
        q: 'What is the consequence of not specifically denying an allegation in the plaint?',
        a: 'Under Order VIII Rule 5 CPC, every allegation of fact not denied specifically or by necessary implication is taken to be admitted by the defendant.'
      },
      {
        q: 'Does a Counter-Claim terminate if the main suit is dismissed?',
        a: 'No. Under Order VIII Rule 6D CPC, if the plaintiff suit is stayed, discontinued, or dismissed, the counter-claim may nevertheless be proceeded with.'
      }
    ],
    tags: ['civil-litigation', 'written statement', 'counter claim', 'order 8 cpc', 'limitation 120 days', 'scg contracts', 'doctrine of non-traverse']
  },

  {
    id: 'proc-civil-summary-suit-order-37',
    slug: 'summary-suit-procedure-commercial-debt-order-37-cpc',
    title: 'Summary Suit Procedure for Commercial Debts under Order XXXVII CPC & Leave to Defend',
    category: 'Civil Litigation & Pleadings',
    actReference: 'Code of Civil Procedure, 1908 — Order XXXVII Rules 1 to 7',
    courtForum: 'Civil Court / Commercial Court / High Court having Pecuniary & Territorial Jurisdiction',
    estimatedTimeline: 'Summary disposal: 3 to 8 months (Compared to 3–5 years for ordinary suits)',
    courtFeeLevel: 'Full ad-valorem court fee as per State Court Fees Act',
    overview: 'Order XXXVII CPC provides a fast-track summary procedure for recovery of debts or liquidated commercial demands arising out of bills of exchange, hundies, promissory notes, written contracts, or statutory enactments. Unlike ordinary civil suits where the defendant has an automatic right to defend, in a summary suit the defendant is not entitled to defend as a matter of right. The defendant must enter an appearance within 10 days of summons, and upon service of the Summons for Judgment, must file an application seeking "Leave to Defend" within 10 days, demonstrating a triable issue or bona fide defense (IDBI Trusteeship v. Hubtown & Mechalec Engineers).',
    legalBasis: 'Order XXXVII Rules 1–7 CPC (Summary Procedure); read with landmark principles on leave to defend in IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) 1 SCC 568.',
    locusStandi: 'Plaintiff claiming a debt or liquidated demand in money payable by the defendant with or without interest arising on negotiable instruments, written contracts, or guarantees.',
    prerequisites: [
      'The claim must be based strictly on: (a) Bills of exchange, hundies, or promissory notes; or (b) A written contract; or (c) An enactment where the sum sought to be recovered is a fixed sum or a debt; or (d) A guarantee where the claim against principal is in respect of a debt.',
      'Plaint must contain an explicit endorsement that the suit is filed under Order XXXVII CPC.',
      'Plaint must affirm that no relief which does not fall within the ambit of Rule 1 is claimed.',
      'Strict adherence to statutory 10-day notice and appearance timelines.'
    ],
    statutoryLimitation: '3 years from the date the debt or liquidated demand became due under Articles 19, 21, or 55 of the Limitation Act, 1963.',
    mandatoryDocuments: [
      'Plaint with statutory Order XXXVII endorsement and Statement of Truth.',
      'Original Negotiable Instrument (Cheque, Promissory Note, Bill of Exchange) or Written Agreement.',
      'Form No. 4 Appendix B: Summons in Summary Suit under Order XXXVII Rule 2(1).',
      'Form No. 4A Appendix B: Summons for Judgment under Order XXXVII Rule 3(1).',
      'Defendant Memo of Appearance under Order XXXVII Rule 3(1) CPC.',
      'Leave to Defend Application supported by affidavit disclosing substantial defense.'
    ],
    draftingGuidance: 'The plaint must strictly comply with Order XXXVII Rule 2(1) CPC: (1) Specific title: "Suit under Order XXXVII of the Code of Civil Procedure, 1908"; (2) Recital: "No relief which does not fall within the ambit of this rule has been claimed in the plaint"; (3) Precise computation of liquidated debt and interest. If drafting Leave to Defend, structure the affidavit around the IDBI Trusteeship tests: establish that the defense is not frivolous or sham, present documentary proof of payment or failure of consideration, and show why a trial is indispensable.',
    courtFeesFilingRules: 'Ad-valorem court fee on the total principal and pre-suit interest claimed.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Summary Plaint & Service of Form 4 Summons',
        governingRule: 'Order XXXVII Rule 2 CPC',
        actingParty: 'Plaintiff & Civil Court',
        description: 'File plaint with Order XXXVII endorsement. Court issues special summons in Form 4 Appendix B. Defendant is given notice to enter appearance within 10 days.',
        advocateTips: 'If defendant fails to enter appearance within 10 days, the allegations in the plaint are deemed admitted and plaintiff is entitled to an immediate decree under Rule 2(3).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Defendant Enters Appearance within 10 Days',
        governingRule: 'Order XXXVII Rule 3(1) & (3) CPC',
        actingParty: 'Defendant / Advocate',
        description: 'Defendant files Memo of Appearance giving an address for service in court and serves notice of appearance on plaintiff counsel on the same day.',
        advocateTips: 'Entering appearance does not require filing a written statement; only a memo giving advocate address is required.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Plaintiff Serves Summons for Judgment in Form 4A',
        governingRule: 'Order XXXVII Rule 3(4) CPC',
        actingParty: 'Plaintiff / Advocate',
        description: 'Upon receiving notice of appearance, plaintiff serves on the defendant a Summons for Judgment in Form 4A Appendix B, supported by an affidavit verifying the cause of action and amount claimed.',
        advocateTips: 'Serve the summons for judgment promptly; delay of several months can be grounds for granting unconditional leave to defend.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Defendant Files Leave to Defend within 10 Days',
        governingRule: 'Order XXXVII Rule 3(5) CPC',
        actingParty: 'Defendant Counsel',
        description: 'Defendant must file an Application for Leave to Defend supported by a sworn affidavit within 10 days from service of the summons for judgment, setting out facts disclosing a triable issue.',
        advocateTips: 'Failure to file within 10 days entitles the plaintiff to immediate judgment under Order XXXVII Rule 3(6)(a).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Hearing & Adjudication on Leave to Defend (IDBI Principles)',
        governingRule: 'Order XXXVII Rule 3(5) & (6) CPC',
        actingParty: 'Civil Judge & Both Advocates',
        description: 'Court hears arguments and applies IDBI Trusteeship tests: (1) Unconditional leave if substantial defense is shown; (2) Conditional leave (e.g. deposit of 50% amount) if defense is plausible; (3) Refusal of leave and immediate decree if defense is sham.',
        advocateTips: 'If the court orders conditional leave, ensure the deposit deadline is strictly complied with to prevent automatic decree.'
      }
    ],
    hearingAndArguments: 'Plaintiff counsel argues the claim is liquidated, admitted in writing, and defense is moonshine intended to delay. Defendant counsel argues existence of triable issues: dispute regarding quality of goods, lack of mutual accounting, failure of consideration, or fraud.',
    possibleOutcomes: [
      'Unconditional Leave to Defend granted: suit converted into ordinary civil suit and defendant directed to file WS within 30 days.',
      'Conditional Leave to Defend granted subject to depositing 25%–100% of suit amount in court within 30 days.',
      'Leave to Defend refused: immediate judgment and decree passed in favor of plaintiff for suit amount with interest.'
    ],
    appealRevisionRemedy: 'An order granting conditional leave or refusing leave is not directly appealable as an interlocutory order, but challengeable via Civil Revision under Section 115 CPC or Article 227 before High Court. Once final decree is drawn, a Regular First Appeal lies under Section 96 CPC.',
    commonPitfalls: [
      'Including unliquidated damages or tortious claims in the plaint, which disqualifies the suit from Order XXXVII procedure.',
      'Missing the strict 10-day statutory window for entering appearance or filing leave to defend.',
      'Failing to deposit the security amount within time when conditional leave is granted.'
    ],
    practicalScenario: 'A textile wholesaler supplied fabrics worth ₹85 Lakhs against signed invoices and accepted bills of exchange. When the buyer defaulted, the wholesaler filed an Order XXXVII suit. The defendant entered appearance and applied for leave to defend, claiming verbal discounts. The High Court applied IDBI Trusteeship, observed that the defendant had formally accepted the bills without qualification, rejected the oral defense as moonshine, refused leave to defend, and decreed the suit for ₹85 Lakhs with 9% interest.',
    caseLaws: [
      {
        title: 'IDBI Trusteeship Services Ltd. v. Hubtown Ltd.',
        citation: '(2017) 1 SCC 568',
        court: 'Supreme Court of India',
        holding: 'Recast the principles for grant of leave to defend: (a) If defendant discloses substantial defense, unconditional leave is granted; (b) If plausible defense raising triable issues is shown, conditional leave with deposit is ordered; (c) If defense is moonshine or sham, leave is refused and decree follows.'
      },
      {
        title: 'Mechelec Engineers & Manufacturers v. Basic Equipment Corp.',
        citation: '(1976) 4 SCC 687',
        court: 'Supreme Court of India',
        holding: 'Historical foundation of summary suit principles; clarified that leave to defend should not be denied unless the defense is practically impossible to substantiate or a complete sham.'
      }
    ],
    faqs: [
      {
        q: 'Can a summary suit be filed on the basis of unpaid invoices?',
        a: 'Yes, provided the invoices contain clear terms, signed delivery acknowledgements, and constitute a written contract under Order XXXVII Rule 1(2)(b).'
      },
      {
        q: 'What can a defendant do if a decree is passed ex-parte under Order XXXVII?',
        a: 'Under Order XXXVII Rule 4 CPC, the court may, under special circumstances, set aside the decree and grant leave to defend.'
      }
    ],
    tags: ['civil-litigation', 'order 37 cpc', 'summary suit', 'leave to defend', 'idbi trusteeship', 'liquidated debt', 'commercial recovery']
  },

  {
    id: 'proc-civil-discovery-inspection-order-11',
    slug: 'discovery-interrogatories-inspection-documents-order-11-cpc',
    title: 'Discovery, Interrogatories & Inspection of Documents under Order XI CPC',
    category: 'Civil Litigation & Pleadings',
    actReference: 'Code of Civil Procedure, 1908 — Order XI Rules 1 to 23 & Commercial Courts Act Amendments',
    courtForum: 'Civil Court hearing the civil suit / Commercial Court',
    estimatedTimeline: 'Interrogatories: 10 to 20 days → Document Discovery: 15 to 30 days',
    courtFeeLevel: '₹10 - ₹50 Application fee stamp',
    overview: 'Discovery and Inspection under Order XI CPC is an essential pre-trial procedural mechanism designed to narrow controversy, eliminate surprises, extract admissions, and compel disclosure of documents in the possession or power of the opposite party. Governed by Rules 1–11 (Discovery by Interrogatories) and Rules 12–21 (Discovery and Inspection of Documents), this procedure empowers a party to administer written questions that the adversary must answer on affidavit within 10 days. The 2015 Commercial Courts Act overhaul substituted Order XI for commercial disputes, establishing a regime of mandatory document disclosure and strict consequences for non-disclosure.',
    legalBasis: 'Order XI Rules 1–23 CPC; Section 30 CPC (power of court to order discovery and inspection); and amended Order XI under the Schedule to the Commercial Courts Act, 2015.',
    locusStandi: 'Any party to a civil suit (Plaintiff or Defendant) seeking information or documents from an adverse party relating to any matter in question in the suit.',
    prerequisites: [
      'Pleadings must be complete (Plaint and Written Statement filed).',
      'The interrogatories or documents sought must be directly relevant to the matters in question in the suit.',
      'Leave of the Court must be obtained before delivering interrogatories under Rule 1.',
      'The requested materials must not be privileged under law (e.g. attorney-client communications under Section 132 BSA or state secrets under Section 165 BSA).'
    ],
    statutoryLimitation: 'Typically invoked within 15 to 30 days after completion of pleadings and before framing of issues.',
    mandatoryDocuments: [
      'Application under Order XI Rule 1 CPC seeking leave to deliver Interrogatories.',
      'Schedule of Interrogatories containing specific, numbered, non-argumentative questions.',
      'Application for Discovery of Documents under Order XI Rule 12 CPC.',
      'Notice to Produce Documents for Inspection in Form No. 7 Appendix C under Rule 16.',
      'Affidavit in Answer to Interrogatories under Order XI Rule 8 CPC.',
      'Affidavit of Documents in Form No. 5 Appendix C under Rule 13.'
    ],
    draftingGuidance: 'Draft interrogatories with surgical precision: Questions must seek admissions of objective facts (dates, payments, communications, signatures), not legal conclusions or expert opinions. Avoid scandalous, vexatious, or fishing inquiries. In the Affidavit of Documents under Rule 13, classify documents into two schedules: Schedule 1 (Documents in party possession which it does not object to produce); and Schedule 2 (Documents in party possession for which privilege is claimed, with legal grounds for privilege).',
    courtFeesFilingRules: 'Affix nominal court fee stamps of ₹10–₹50 on applications and notices.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Application for Leave to Deliver Interrogatories',
        governingRule: 'Order XI Rules 1 & 2 CPC',
        actingParty: 'Applicant / Advocate',
        description: 'File application annexing the proposed interrogatories. Serve copy on opposite counsel. Court decides within 7 days whether the questions are relevant.',
        advocateTips: 'Focus questions on eliminating need to prove admitted facts, thereby saving costs and trial duration.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Filing Affidavit in Answer to Interrogatories within 10 Days',
        governingRule: 'Order XI Rules 8 & 9 CPC',
        actingParty: 'Responding Party / Advocate',
        description: 'The party served must file an Affidavit in Answer in Form 2 Appendix C within 10 days, answering each question directly or raising specific objections under Rule 6.',
        advocateTips: 'Objections can be raised if interrogatories are scandalous, unreasonable, fishing, or privileged.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Application for Discovery of Documents on Oath',
        governingRule: 'Order XI Rule 12 CPC',
        actingParty: 'Applicant & Civil Court',
        description: 'Apply for an order directing the adversary to make discovery on oath of the documents which are or have been in their possession or power relating to the suit.',
        advocateTips: 'Discovery under Rule 12 can be sought even if the applicant does not know the exact description of the documents.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Inspection of Documents Produced',
        governingRule: 'Order XI Rules 15 & 17 CPC',
        actingParty: 'Both Advocates',
        description: 'Serve Notice to Produce for Inspection in Form 7 Appendix C. The responding party fixes a date within 3 days for inspection at their advocate office or in court.',
        advocateTips: 'Examine original wet-ink signatures, letterheads, and stamps during inspection; take certified photocopies.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Enforcement & Penalties for Non-Compliance',
        governingRule: 'Order XI Rule 21 CPC',
        actingParty: 'Civil Court',
        description: 'If a party fails to comply with an order to answer interrogatories or for discovery/inspection, the court may dismiss the suit for want of prosecution (if plaintiff) or strike out defense (if defendant).',
        advocateTips: 'Striking off defense under Rule 21 is a severe sanction; move an application immediately upon expiry of court-ordered disclosure deadline (Babbar Sewing Machine ruling).'
      }
    ],
    hearingAndArguments: 'Applicant argues that disclosure is essential to adjudicate the real dispute, shorten trial time, and save trial expenditure. Responding counsel argues that the questions are fishing, oppressive, irrelevant, intended to elicit confidential trade secrets, or protected by statutory privilege.',
    possibleOutcomes: [
      'Leave granted and opposite party ordered to answer interrogatories on affidavit within 10 days.',
      'Order for discovery of documents passed directing production for inspection within 14 days.',
      'Interrogatories set aside or struck out under Rule 7 as unreasonable or vexatious.',
      'Defense struck off or suit dismissed under Rule 21 for willful disobedience of discovery orders.'
    ],
    appealRevisionRemedy: 'An order under Order XI Rule 21 CPC dismissing the suit or striking off defense is appealable under Order XLIII Rule 1(f) CPC. Other interlocutory discovery orders are subject to Section 115 CPC Revision or Article 227.',
    commonPitfalls: [
      'Serving interrogatories without first obtaining the mandatory leave of the court under Order XI Rule 1.',
      'Asking argumentative or speculative questions instead of targeting specific objective facts.',
      'Failing to invoke Rule 21 when the opposite party refuses to comply with discovery orders.'
    ],
    practicalScenario: 'In a suit for infringement of software copyright and trade secrets, the plaintiff moved an application under Order XI Rules 1 & 12 CPC seeking interrogatories and production of the defendant software source-code repositories. The defendant refused to disclose, claiming trade secrecy. The Commercial Court held that source-code comparison was essential, rejected the objection, ordered disclosure within 14 days under a confidentiality club mechanism, and warned that failure to comply would result in striking out defense under Rule 21.',
    caseLaws: [
      {
        title: 'Babbar Sewing Machine Co. v. Trilok Nath Mahajan',
        citation: '(1978) 4 SCC 188',
        court: 'Supreme Court of India',
        holding: 'The power to strike out defense under Order XI Rule 21 CPC is a stringent power to be used only as a last resort where there is obstinate and contumacious refusal to comply with court orders of discovery.'
      },
      {
        title: 'Sharda v. Dharmpal',
        citation: '(2003) 4 SCC 493',
        court: 'Supreme Court of India',
        holding: 'Section 30 CPC and Order XI confer wide powers on the civil court to issue directions for discovery, inspection, and production of documents to ensure complete justice.'
      }
    ],
    faqs: [
      {
        q: 'What is the main purpose of administering interrogatories under Order XI CPC?',
        a: 'To obtain admissions of facts from the adversary, narrow the issues for trial, eliminate surprises, and substantially reduce the time and cost of leading oral evidence.'
      },
      {
        q: 'What happens if a defendant fails to comply with an order for discovery of documents?',
        a: 'Under Order XI Rule 21 CPC, the court may strike out the defendant defense and place them in the same position as if they had not defended.'
      }
    ],
    tags: ['civil-litigation', 'order 11 cpc', 'discovery', 'interrogatories', 'inspection of documents', 'commercial courts', 'order 11 rule 21']
  }
];
