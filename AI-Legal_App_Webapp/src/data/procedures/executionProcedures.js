// ─── EXECUTION OF DECREES & ENFORCEMENT PROCEDURES ───────────────────────────
// Comprehensive litigation workflows under Order XXI Code of Civil Procedure, 1908

export const EXECUTION_PROCEDURES = [
  {
    id: 'proc-execution-decree',
    slug: 'execution-civil-decree-warrants-order-21-cpc',
    title: 'Execution of Civil Decrees & Attachment of Property under Order XXI CPC',
    category: 'Execution of Decrees & Warrants',
    actReference: 'Code of Civil Procedure, 1908 — Sections 36 to 74 & Order XXI Rules 10 to 54',
    courtForum: 'Executing Court (Court which passed the decree or Court to which decree is sent for execution)',
    estimatedTimeline: '6 months to 2 years (Interlocutory resistance may extend timeline)',
    courtFeeLevel: 'Fixed Court Fee (₹50 - ₹250) + Process Fee & Poundage Fee for warrant execution',
    overview: 'Execution is the judicial enforcement mechanism by which a decree-holder compels the judgment-debtor to satisfy the mandate of a judgment or decree. Under Section 38 CPC, a decree may be executed either by the court which passed it, or by the court to which it is sent for execution under Section 39. Execution proceedings under Order XXI encompass attachment of moveable and immoveable assets, arrest and detention, appointment of a receiver, or delivery of specific property.',
    legalBasis: 'Sections 36–74, Order XXI Rules 1–106 of the Code of Civil Procedure, 1908; read with the Limitation Act, 1963 (Article 136). Execution of money decrees is governed by Section 51, Rules 11, 30, and 41–54; execution of immoveable property decrees by Rules 35–36; and enforcement against legal representatives by Section 50.',
    locusStandi: 'The decree-holder, their legal representative (under Section 50/146 CPC), or an assignee of the decree by written assignment (Order XXI Rule 16). The proceeding lies exclusively against the judgment-debtor, their legal representatives to the extent of assets inherited, or transferees pendente lite under Section 52 Transfer of Property Act.',
    prerequisites: [
      'A final and executable decree or executable order under Section 36 CPC against which no stay of execution has been granted by an appellate court.',
      'Verification that the decree has not been satisfied, adjusted, or certified under Order XXI Rule 2 CPC.',
      'Identification of the executing court having territorial or pecuniary jurisdiction, or obtaining a Transfer Certificate under Section 39 CPC.',
      'Ascertainment of identifiable moveable or immoveable assets of the judgment-debtor within the jurisdiction of the executing court.'
    ],
    statutoryLimitation: '12 years under Article 136 of the Limitation Act, 1963, commencing from the date when the decree or order becomes enforceable. For mandatory injunction decrees, limitation is 3 years under Article 135.',
    mandatoryDocuments: [
      'Certified Copy of the Decree and Judgment sought to be executed.',
      'Execution Petition in tabular form under Order XXI Rule 11(2) CPC signed and verified by the decree-holder.',
      'Schedule of Property with full boundaries, municipal number, revenue survey number, and estimated value.',
      'Affidavit of Assets under Order XXI Rule 41(2) CPC seeking disclosure of judgment-debtor assets.',
      'Non-Satisfaction Certificate (if transmitted from another court under Section 39/Order XXI Rule 6).',
      'Process fee memo along with appropriate court fee stamps and postal covers for notice service.',
      'Vakalatnama executed by the decree-holder in favour of the executing advocate.'
    ],
    draftingGuidance: 'The Execution Petition must strictly follow the tabular format prescribed under Order XXI Rule 11(2) CPC containing: (a) Suit Number, (b) Names of Parties, (c) Date of Decree, (d) Whether any appeal preferred, (e) Payment or adjustment made, (f) Previous execution applications, (g) Amount with interest due, (h) Amount of costs awarded, (i) Name of person against whom execution is sought, and (j) Mode of execution sought (Attachment/Arrest/Possession).',
    courtFeesFilingRules: 'Fixed court fee stamp as per State Court Fees Act (generally ₹50–₹250). Process fee must be paid for issuing notices under Rule 22 and warrants of attachment. If auction sale is ordered, poundage fee (typically 1–2% of auction bid) is payable to the Nazir.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing of Execution Petition in Tabular Form',
        governingRule: 'Order XXI Rule 11(2) CPC',
        actingParty: 'Decree-Holder / Advocate',
        description: 'Lodge execution application in tabular format before the Executing Court with certified copy of decree, schedule of property, and computation of accrued interest up to date of filing.',
        advocateTips: 'Ensure calculations of post-decree interest under Section 34 CPC are supported by a sworn interest memo.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Registry Scrutiny & Issue of Notice under Rule 22',
        governingRule: 'Order XXI Rule 22 CPC',
        actingParty: 'Executing Court Registry & Judge',
        description: 'Where execution is filed more than 2 years after the decree date or against legal representatives, the court issues mandatory Show Cause Notice under Rule 22 calling upon the judgment-debtor to show cause why the decree should not be executed.',
        advocateTips: 'Omission to issue Rule 22 notice when required by law renders subsequent attachment void ab initio (SC in Ramana v. Nallaparaju).'
      },
      {
        stepNumber: 3,
        stepTitle: 'Oral Examination & Disclosure of Assets',
        governingRule: 'Order XXI Rule 41 CPC',
        actingParty: 'Executing Judge',
        description: 'Court summons judgment-debtor to make oral discovery or file an affidavit in Form 16A Appendix E detailing all bank accounts, immoveable properties, securities, and debt receivables.',
        advocateTips: 'If the judgment-debtor refuses to disclose assets, immediately move an application for civil imprisonment under Order XXI Rule 41(3) CPC.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Issuance of Warrant of Attachment',
        governingRule: 'Order XXI Rules 43 & 54 CPC',
        actingParty: 'Court Bailiff / Nazir',
        description: 'For moveable property, bailiff attaches by actual seizure under Rule 43. For immoveable property, court issues prohibitory order under Rule 54 prohibiting alienation, proclaimed by beat of drum and pasted at the property and Collector office.',
        advocateTips: 'Obtain dasti warrant of attachment and accompany the court bailiff with local police assistance under Section 151 CPC if resistance is anticipated.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Adjudication of Third-Party Objections',
        governingRule: 'Order XXI Rule 58 CPC',
        actingParty: 'Executing Court',
        description: 'Any third party claiming title or interest prior to attachment may file an objection claim. The court must adjudicate the claim like a full civil suit under Rule 58; no separate civil suit lies.',
        advocateTips: 'Third-party objection orders have the force of a decree and are appealable under Rule 58(4) CPC.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Proclamation & Public Auction Sale',
        governingRule: 'Order XXI Rules 64–73 CPC',
        actingParty: 'Court Commissioner / Nazir',
        description: 'Court orders sale of attached property under Rule 64, settles terms of sale proclamation under Rule 66, publishes auction notice, and conducts public auction under Rule 67. Successful bidder deposits 25% earnest money immediately and remainder within 15 days.',
        advocateTips: 'Decree-holder must seek express permission of court under Order XXI Rule 72 CPC to bid at the auction.'
      },
      {
        stepNumber: 7,
        stepTitle: 'Confirmation of Sale & Issue of Sale Certificate',
        governingRule: 'Order XXI Rules 92 & 94 CPC',
        actingParty: 'Executing Court',
        description: 'After 60 days if no application to set aside sale under Rules 89, 90, or 91 is filed (or if dismissed), the court confirms the sale under Rule 92 and grants a formal Sale Certificate under Rule 94.',
        advocateTips: 'The sale certificate constitutes absolute title and does not require mandatory stamp registration in some States (B. Arvind Kumar v. Govt. of India).'
      }
    ],
    hearingAndArguments: 'At the preliminary stage, the decree-holder must satisfy the court regarding the enforceability of the decree and absence of any appellate stay. The executing court cannot go behind the decree except where the decree is passed by a court lacking inherent subject-matter jurisdiction, making it a coram non judice nullity (Vasudev Dhanjibhai Modi v. Rajabhai Abdul Rehman).',
    possibleOutcomes: [
      'Full satisfaction of decree upon payment or realization of auction sale proceeds.',
      'Partial satisfaction with attachment of continuing salary under Rule 48 or garnishee recovery under Rule 46B.',
      'Dismissal of execution for default of decree-holder or non-prosecution (appealable as a decree).',
      'Stay of execution under Order XXI Rule 26 to enable judgment-debtor to obtain stay from appellate court.'
    ],
    appealRevisionRemedy: 'Orders under Section 47 CPC deciding questions between parties relating to execution, discharge, or satisfaction are not appealable as decrees post-1976 amendment, but are subject to Civil Revision under Section 115 CPC. Orders under Order XXI Rules 58 (claims) and 103 (obstruction) are deemed decrees and are appealable as Regular First Appeals.',
    commonPitfalls: [
      'Filing execution beyond the 12-year limitation period without establishing acknowledgement of liability under Section 18 Limitation Act.',
      'Failing to issue Rule 22 show cause notice where execution is filed more than two years after the decree.',
      'Attaching properties exempted from execution under Section 60(1) CPC (tools of artisans, agricultural implements, wearing apparel, pensions).'
    ],
    practicalScenario: 'A decree-holder obtained a money decree of ₹45 Lakhs with 9% interest from the District Court, Delhi. The judgment-debtor shifted assets to Noida, UP. The decree-holder applied under Section 39 CPC for a precept and transmission certificate to the District Judge, Gautam Buddha Nagar, who attached the commercial warehouse of the debtor under Order XXI Rule 54 and realized ₹58 Lakhs through court auction.',
    caseLaws: [
      {
        title: 'Rahul S. Shah v. Jinendra Kumar Gandhi',
        citation: '(2021) 6 SCC 418',
        court: 'Supreme Court of India',
        holding: 'Laid down mandatory guidelines for executing courts: executing proceedings must be disposed of within 6 months; executing courts must actively examine judgment-debtors under Order XXI Rule 41 and use police assistance to enforce decrees.'
      },
      {
        title: 'Vasudev Dhanjibhai Modi v. Rajabhai Abdul Rehman',
        citation: '(1970) 1 SCC 670',
        court: 'Supreme Court of India',
        holding: 'An executing court cannot go behind the decree; it must execute the decree as it stands and has no jurisdiction to evaluate its correctness in law or on facts unless the decree is a patent nullity.'
      }
    ],
    faqs: [
      {
        q: 'Can the executing court go behind the decree?',
        a: 'No. The settled legal doctrine is that the executing court cannot challenge or alter the terms of the decree, unless the decree was passed by a court lacking inherent jurisdiction, making it a void nullity.'
      },
      {
        q: 'What is the limitation period for executing a civil decree?',
        a: '12 years under Article 136 of the Limitation Act, 1963 for general decrees; and 3 years under Article 135 for mandatory injunction decrees.'
      }
    ],
    tags: ['execution-decree', 'execution', 'order 21', 'cpc', 'attachment', 'auction sale', 'decree holder']
  },

  {
    id: 'proc-execution-delivery-possession',
    slug: 'delivery-of-possession-removal-obstruction-order-21-rules-35-97',
    title: 'Delivery of Possession & Removal of Obstruction under Order XXI Rules 35, 97–103 CPC',
    category: 'Execution of Decrees & Warrants',
    actReference: 'Code of Civil Procedure, 1908 — Order XXI Rules 35, 36, 97, 98, 99, 101 & 103',
    courtForum: 'Executing Civil Court / Court of Senior Civil Judge / District Court',
    estimatedTimeline: '3 to 12 months (Extended if third-party obstruction is adjudicated)',
    courtFeeLevel: '₹50 - ₹150 Execution application fee + Police assistance fees as assessed by Court Nazir',
    overview: 'Execution of a decree for immoveable property requires physical delivery of possession by removing any person bound by the decree. Where the judgment-debtor or a third party resists or obstructs delivery of possession, the decree-holder must apply under Order XXI Rule 97 CPC for removal of resistance. The executing court is empowered under Rule 101 to adjudicate all questions of right, title, and interest arising between the parties without relegating them to an independent civil suit.',
    legalBasis: 'Order XXI Rule 35 (decree for immoveable property in occupancy of judgment-debtor), Rule 36 (symbolical possession of property in tenant occupancy), Rules 97–103 (resistance to delivery of possession), and Section 74 CPC (penal detention for obstinate resistance).',
    locusStandi: 'The decree-holder or auction-purchaser in an execution sale. The respondent is the judgment-debtor or any third party offering resistance or asserting independent possessory title.',
    prerequisites: [
      'A final decree for possession of immoveable property (e.g., ejectment, eviction, partition, specific performance).',
      'Issuance of a formal Warrant of Possession (Parwana Dakhil) under Order XXI Rule 35 CPC directed to the Court Bailiff.',
      'Actual physical resistance or obstruction reported by the bailiff in the execution report.',
      'Filing of an application under Rule 97 CPC within 30 days of the date of resistance.'
    ],
    statutoryLimitation: '30 days under Article 129 of the Limitation Act, 1963, from the date of resistance or obstruction to possession.',
    mandatoryDocuments: [
      'Certified copy of the Decree for Possession.',
      'Warrant of Possession issued by Executing Court.',
      'Bailiff Report (Mauqa Report) detailing the date, time, and identity of persons obstructing possession.',
      'Application under Order XXI Rule 97 CPC supported by Decree-Holder Affidavit.',
      'Application under Section 151 CPC for police assistance with break-open lock permission.'
    ],
    draftingGuidance: 'The Rule 97 application must clearly state: (1) Date on which bailiff went to execute warrant, (2) Names and descriptions of persons offering resistance, (3) Whether resistors claim through the judgment-debtor or under independent title, (4) Specific prayer for removal of resistance, break-open of locks, police assistance, and physical delivery.',
    courtFeesFilingRules: 'Application fee of ₹10–₹50. For police deployment, the court directs deposit of police charges as per the State Police Regulations (typically ₹2,000–₹10,000 based on police force size).',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Issuance & Attempted Execution of Warrant of Possession',
        governingRule: 'Order XXI Rule 35 CPC',
        actingParty: 'Executing Court & Bailiff',
        description: 'Court issues warrant of possession directing the bailiff to put decree-holder in actual physical possession by removing judgment-debtor or any person refusing to vacate.',
        advocateTips: 'Request appointment of a Court Process Server accompanied by decree-holder identifier.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Bailiff Mauqa Report Documenting Obstruction',
        governingRule: 'Order XXI Rule 35(1) CPC',
        actingParty: 'Court Bailiff',
        description: 'Bailiff visits the spot. If premises are locked or occupied by third parties asserting independent title, bailiff prepares a detailed spot report (Mauqa Report) and returns warrant unexecuted.',
        advocateTips: 'Obtain an immediate certified copy of the bailiff report to compute the 30-day limitation clock.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Filing Application under Order XXI Rule 97 CPC',
        governingRule: 'Order XXI Rule 97 CPC',
        actingParty: 'Decree-Holder Advocate',
        description: 'Decree-holder files formal application complaining of resistance and seeking adjudication under Rule 97. The court issues notice to the obstructing party.',
        advocateTips: 'Do not file a separate civil suit; Rule 101 CPC explicitly bars a separate suit and mandates adjudication by the executing court.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Adjudication of All Questions of Title under Rule 101',
        governingRule: 'Order XXI Rule 101 CPC',
        actingParty: 'Executing Judge',
        description: 'Court frames issues, examines documentary evidence, and decides whether the obstructionist holds valid independent legal title or is a frivolous occupant set up by the debtor.',
        advocateTips: 'If the resistor is a pendente lite transferee, Section 52 TPA applies; Rule 102 bars any protection to such transferees.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Order for Removal of Obstruction & Police Aid',
        governingRule: 'Order XXI Rule 98 CPC',
        actingParty: 'Executing Court',
        description: 'Upon finding resistance frivolous or by a person bound by the decree, the court passes an order under Rule 98 directing that the applicant be put into possession and authorizes breaking open of locks with police force.',
        advocateTips: 'If obstruction continues after order, move court for 30-day civil imprisonment of the resistor under Rule 98(2) CPC.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Actual Physical Delivery & Panchnama Handover',
        governingRule: 'Order XXI Rule 35 CPC',
        actingParty: 'Court Bailiff, Police & Decree-Holder',
        description: 'Bailiff breaks locks with police presence, evicts occupants, prepares an inventory of moveables found inside, hands over keys to decree-holder, and executes a formal delivery receipt (Dakhilnama).',
        advocateTips: 'Have two independent respectable local witnesses sign the Panchnama on the spot.'
      }
    ],
    hearingAndArguments: 'The decree-holder must argue that under Order XXI Rule 102 CPC, the provisions of Rule 98 and Rule 100 do not apply to resistance by a transferee pendente lite. If the obstructor claims independent tenancy created after suit institution, it is hit by lis pendens and must be summarily rejected.',
    possibleOutcomes: [
      'Order under Rule 98 directing removal of obstruction and issuance of fresh warrant with police aid.',
      'Order under Rule 98(2) committing obstinate judgment-debtor to civil prison for up to 30 days.',
      'Dismissal of Rule 97 application if third party establishes paramount title prior to suit institution.'
    ],
    appealRevisionRemedy: 'Under Order XXI Rule 103 CPC, any order made under Rule 98 or Rule 100 has the same force and is subject to the same conditions as to an appeal as if it were a decree. A Regular First Appeal lies before the District Court or High Court.',
    commonPitfalls: [
      'Filing Rule 97 application beyond the 30-day limitation period under Article 129.',
      'Filing an independent fresh suit for ejectment instead of invoking Order XXI Rule 97 CPC.',
      'Failing to verify whether the premises are locked, preventing bailiff execution without specific break-open orders.'
    ],
    practicalScenario: 'A landlord obtained a decree for eviction of a commercial shop against Tenant X. When the bailiff arrived, third-party Y was sitting on the premises claiming X had sub-let the shop to him 3 years ago without landlord consent. The landlord filed an Order XXI Rule 97 application. The executing court held Y was a pendente lite sub-tenant hit by Section 52 TPA and Rule 102 CPC, ordered police aid, and delivered vacant possession to the landlord.',
    caseLaws: [
      {
        title: 'Brahmdeo Chaudhary v. Rishikesh Prasad Jaiswal',
        citation: '(1997) 3 SCC 694',
        court: 'Supreme Court of India',
        holding: 'A stranger to the decree offering resistance cannot be physically dispossessed without adjudication of their objections under Order XXI Rule 97 read with Rule 101 CPC.'
      },
      {
        title: 'Silverline Forum Pvt. Ltd. v. Rajiv Trust',
        citation: '(1998) 3 SCC 723',
        court: 'Supreme Court of India',
        holding: 'The executing court is bound to decide all questions, including title, right, or interest, raised by the resister under Rule 101; separate suit is barred.'
      }
    ],
    faqs: [
      {
        q: 'What is the remedy if a stranger obstructs execution of a possession decree?',
        a: 'The decree-holder must file an application under Order XXI Rule 97 CPC. The executing court will adjudicate the stranger’s claim under Rule 101 like a regular suit.'
      },
      {
        q: 'Can police force be used to execute a possession decree?',
        a: 'Yes. The executing court has inherent powers under Section 151 and Order XXI Rule 98 CPC to direct the jurisdictional Police Station to provide armed police assistance to the bailiff.'
      }
    ],
    tags: ['execution-decree', 'execution', 'possession', 'order 21 rule 35', 'rule 97', 'obstruction', 'bailiff']
  },

  {
    id: 'proc-execution-garnishee-order',
    slug: 'garnishee-proceedings-attachment-debts-order-21-rule-46a',
    title: 'Garnishee Proceedings: Attachment & Recovery of Debts under Order XXI Rules 46A–46I CPC',
    category: 'Execution of Decrees & Warrants',
    actReference: 'Code of Civil Procedure, 1908 — Order XXI Rules 46, 46A, 46B, 46C, 46E & 46H',
    courtForum: 'Executing Court (Civil Court having jurisdiction over execution of money decree)',
    estimatedTimeline: '2 to 6 months',
    courtFeeLevel: '₹50 Court fee stamp + Process fee for Garnishee Notice service',
    overview: 'Garnishee proceedings are a potent enforcement mechanism whereby the executing court directs a third party (the Garnishee) who owes money to the judgment-debtor, or holds funds belonging to the judgment-debtor (such as a bank or employer), to pay those funds directly into court or to the decree-holder, bypassing the debtor entirely.',
    legalBasis: 'Order XXI Rule 46 (attachment of debt, share, and other moveable property not in possession of judgment-debtor) and Rules 46A through 46I (inserted by CPC Amendment Act 104 of 1976), modeled on the English garnishee procedure.',
    locusStandi: 'The decree-holder of an unsatisfied money decree. The garnishee is any debtor of the judgment-debtor or bank holding deposits of the judgment-debtor.',
    prerequisites: [
      'A valid, subsisting, and executable money decree.',
      'Existence of an existing legal debt payable by the garnishee to the judgment-debtor (in praesenti or solvendum in futuro).',
      'Accurate identification of the garnishee (e.g., Bank Branch Name, Account Number, IFSC, or debtor company name).'
    ],
    statutoryLimitation: 'Within the 12-year limitation period for execution of decrees under Article 136 of the Limitation Act, 1963.',
    mandatoryDocuments: [
      'Execution Application under Order XXI Rule 11 CPC.',
      'Application under Order XXI Rule 46A CPC for issuance of Garnishee Notice.',
      'Affidavit of Decree-Holder establishing existence of debt due from garnishee to debtor.',
      'Bank Account details, passbook copy, or contract proof showing receivable due to the debtor.',
      'Draft Garnishee Notice in prescribed Form No. 20A, Appendix E.'
    ],
    draftingGuidance: 'The Rule 46A application must set out: (1) Details of the money decree and balance due, (2) Details of the third-party garnishee, (3) Particulars of the debt/deposit held by the garnishee for the debtor, and (4) Specific prayer calling upon the garnishee to appear and show cause why they should not pay into court the debt due.',
    courtFeesFilingRules: 'Application stamp fee of ₹20–₹50. Process fee for registered post service or dasti service on the garnishee bank/corporate office.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Rule 46A Application with Debt Particulars',
        governingRule: 'Order XXI Rule 46A CPC',
        actingParty: 'Decree-Holder Advocate',
        description: 'File application before the executing court specifying the name and address of the garnishee and the nature of the debt or bank account maintained by the judgment-debtor.',
        advocateTips: 'If exact account balance is unknown, request court to order the Bank Manager to produce statement of accounts under Section 165 BSA / Section 75 CPC.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Issuance of Prohibitory Order & Garnishee Notice',
        governingRule: 'Order XXI Rules 46 & 46A CPC',
        actingParty: 'Executing Court',
        description: 'Court issues prohibitory order under Rule 46 prohibiting the garnishee from paying the debt to the debtor, and issues Notice in Form 20A calling upon the garnishee to show cause.',
        advocateTips: 'Ensure notice is served immediately on the Branch Manager to freeze withdrawals before debtor siphons funds.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Appearance or Default by Garnishee',
        governingRule: 'Order XXI Rule 46B CPC',
        actingParty: 'Garnishee / Bank',
        description: 'The garnishee must either: (a) deposit the money into court, (b) appear and show cause why the debt is not due, or (c) default in appearance.',
        advocateTips: 'If the garnishee fails to appear or dispute liability, the court has no option but to pass a payment order under Rule 46B.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Execution against Defaulting Garnishee',
        governingRule: 'Order XXI Rule 46B CPC',
        actingParty: 'Executing Court',
        description: 'Where the garnishee does not pay or appear, the court orders execution against the property of the garnishee as if the order were a decree against them personally.',
        advocateTips: 'This allows attachment of the bank own assets if the bank officer permits unauthorized withdrawals after service of notice.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Trial of Disputed Liability',
        governingRule: 'Order XXI Rule 46C CPC',
        actingParty: 'Executing Court',
        description: 'If the garnishee disputes liability (e.g., claiming prior lien, set-off, or that no debt is due), the court frames issues and determines liability like a suit.',
        advocateTips: 'Garnishee claims of Banker lien under Section 171 Indian Contract Act must be scrutinized to ensure lien arose before notice service.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Payment & Statutory Discharge of Garnishee',
        governingRule: 'Order XXI Rule 46F CPC',
        actingParty: 'Garnishee & Executing Court',
        description: 'Payment made by the garnishee into court or pursuant to execution constitutes a full valid discharge to them as against the judgment-debtor.',
        advocateTips: 'Obtain payment voucher / court deposit memo and file application for release of voucher to decree-holder.'
      }
    ],
    hearingAndArguments: 'Decree-holder must demonstrate that the debt is not a mere contingent or unliquidated claim, but an existing debt. In bank deposits, the debtor-creditor relationship between the depositor and bank satisfies the definition of debt under Rule 46A.',
    possibleOutcomes: [
      'Garnishee deposits entire decree amount or account balance into court.',
      'Execution order under Rule 46B against garnishee assets upon failure to show cause.',
      'Discharge of garnishee under Rule 46C if proven that no debt is due or funds are exhausted.'
    ],
    appealRevisionRemedy: 'Under Order XXI Rule 46H CPC, an order made under Rule 46B, Rule 46C, or Rule 46E is appealable as a decree (Regular First Appeal).',
    commonPitfalls: [
      'Attempting garnishee proceedings for future unearned salary or contingent damages not yet determined.',
      'Failing to serve prohibitory notice on the designated Branch where the debtor holds the specific account.'
    ],
    practicalScenario: 'A supplier obtained a decree of ₹18 Lakhs against a contractor. The contractor closed office, but had an active fixed deposit of ₹22 Lakhs with HDFC Bank. The supplier moved an application under Order XXI Rule 46A. The court issued notice to HDFC Bank. The bank appeared, confirmed the deposit, and transmitted ₹18 Lakhs directly into the court treasury, satisfying the decree within 45 days.',
    caseLaws: [
      {
        title: 'Mackinnon Mackenzie & Co. v. Anil Kumar Sen',
        citation: 'AIR 1975 Cal 150',
        court: 'Calcutta High Court',
        holding: 'Garnishee proceedings are designed to enforce a debt against a third party; the debt must be an existing obligation, not a mere expectancy.'
      },
      {
        title: 'F.C.I. v. Sukh Deo',
        citation: '(1998) 3 SCC 495',
        court: 'Supreme Court of India',
        holding: 'The liability of a garnishee under Rule 46A is determined by the executing court as a decree; payment under court order grants full statutory discharge.'
      }
    ],
    faqs: [
      {
        q: 'Can a Bank Account be attached through Garnishee proceedings?',
        a: 'Yes. Credit balances in current, savings, or fixed deposit accounts constitute a debt owed by the bank to the account holder and are readily attachable under Order XXI Rule 46A CPC.'
      },
      {
        q: 'What happens if the Garnishee ignores the court notice?',
        a: 'Under Order XXI Rule 46B CPC, the court will pass a decree directly against the garnishee and attach the garnishee’s own property to satisfy the decree.'
      }
    ],
    tags: ['execution-decree', 'execution', 'garnishee', 'bank attachment', 'order 21 rule 46a', 'cpc', 'debt attachment']
  },

  {
    id: 'proc-execution-arrest-detention',
    slug: 'arrest-civil-imprisonment-execution-money-decree-order-21-rule-37',
    title: 'Arrest & Detention in Civil Prison under Order XXI Rules 37–40 CPC',
    category: 'Execution of Decrees & Warrants',
    actReference: 'Code of Civil Procedure, 1908 — Sections 51, 55–59 & Order XXI Rules 37, 38, 39 & 40',
    courtForum: 'Executing Court (Civil Judge / Sub-Judge / District Judge)',
    estimatedTimeline: '2 to 6 months',
    courtFeeLevel: '₹50 Application fee + Subsistence allowance deposit (daily rate fixed by State Govt)',
    overview: 'Execution by arrest and detention in civil prison under Section 51(c) CPC is an exceptional mode of enforcement for money decrees. Under the constitutional doctrine laid down in Jolly George Varghese (1980), mere inability to pay due to poverty or misfortune is not ground for civil imprisonment. The executing court must find that the debtor has the means to pay and is dishonestly refusing or neglecting to pay, or has transferred assets fraudulently to defeat the decree.',
    legalBasis: 'Sections 51(c), 55 (arrest and detention), 56 (prohibition of arrest of women in money decrees), 57 (subsistence allowance), 58 (period of detention), 59 (release on illness), and Order XXI Rules 37–40 CPC.',
    locusStandi: 'The decree-holder of an unsatisfied money decree. Lies against a male judgment-debtor who has the means to pay but wilfully defaults. Section 56 CPC imposes an absolute statutory bar against arresting women in execution of a money decree.',
    prerequisites: [
      'An unsatisfied money decree exceeding ₹2,000 (Section 58 CPC).',
      'The debtor is not a woman (Section 56 CPC bar is absolute).',
      'Issuance of Show Cause Notice under Order XXI Rule 37(1) CPC prior to issuing warrant of arrest.',
      'Evidence establishing that the debtor has sufficient means to pay the decree or has fraudulently concealed/transferred assets.',
      'Deposit of subsistence allowance in advance by the decree-holder under Section 57 CPC.'
    ],
    statutoryLimitation: '12 years from decree date under Article 136 of Limitation Act, 1963.',
    mandatoryDocuments: [
      'Execution Application under Order XXI Rule 11 CPC.',
      'Application under Order XXI Rule 37 supported by Decree-Holder Affidavit proving means to pay.',
      'Documentary evidence of debtor income, luxury vehicles, foreign travel, or business turnover.',
      'Receipt of advance deposit of subsistence allowance with the Nazir under Rule 39 CPC.'
    ],
    draftingGuidance: 'The application under Rule 37 must contain specific factual averments matching Section 51 proviso: (a) that debtor has had the means to pay and refused or neglected to pay, or (b) that debtor is about to abscond or leave jurisdiction, or (c) that debtor has dishonestly transferred or concealed assets. Citing Jolly George Varghese v. Bank of Cochin is mandatory.',
    courtFeesFilingRules: 'Application fee of ₹50. Subsistence allowance must be deposited monthly in advance with the Nazir as per scales fixed by the State Government under Section 57 CPC (typically ₹300–₹1,000 per day).',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Application & Discretionary Notice to Show Cause',
        governingRule: 'Order XXI Rule 37(1) CPC',
        actingParty: 'Decree-Holder & Executing Court',
        description: 'File application under Rule 37. Court issues show cause notice calling upon the judgment-debtor to appear and show cause why he should not be committed to civil prison.',
        advocateTips: 'Warrant of arrest cannot be issued straightaway without notice unless the court records satisfaction by affidavit that debtor is likely to abscond.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Bailable / Non-Bailable Arrest Warrant upon Failure to Appear',
        governingRule: 'Order XXI Rule 37(2) CPC',
        actingParty: 'Court Bailiff & Police',
        description: 'If debtor fails to appear in response to notice, court issues warrant of arrest under Rule 38 directed to the bailiff to bring debtor before court.',
        advocateTips: 'Bailiff cannot arrest after sunset or before sunrise, nor break open outer doors of dwelling house without complying with Section 55(1) CPC.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Advance Deposit of Subsistence Allowance',
        governingRule: 'Order XXI Rule 39 CPC',
        actingParty: 'Decree-Holder',
        description: 'Decree-holder must deposit subsistence allowance with court Nazir. Failure to deposit subsistence money results in immediate release of the debtor.',
        advocateTips: 'Subsistence allowance paid by decree-holder is added to the costs of execution and recoverable from debtor.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Judicial Inquiry into Means to Pay',
        governingRule: 'Order XXI Rule 40 CPC & Section 51 Proviso',
        actingParty: 'Executing Judge',
        description: 'Upon debtor appearance or production, court conducts a mandatory summary inquiry under Rule 40. Debtor is given full opportunity to show cause and produce evidence of insolvency.',
        advocateTips: 'The court must record a specific finding of mala fide refusal or fraudulent concealment under Section 51 proviso before committing to prison.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Warrant of Committal to Civil Prison',
        governingRule: 'Section 58 CPC & Form 14 Appendix E',
        actingParty: 'Executing Court & Jail Superintendent',
        description: 'If satisfied of contumacious refusal, court issues committal warrant. Maximum period of detention: 3 months for decree exceeding ₹5,000; up to 6 weeks for decree between ₹2,000 and ₹5,000.',
        advocateTips: 'Detention in civil prison does not satisfy or extinguish the debt (Section 58(2) CPC); decree-holder can still attach property.'
      },
      {
        stepNumber: 6,
        stepTitle: 'Release on Payment or Illness',
        governingRule: 'Sections 58 & 59 CPC',
        actingParty: 'Jail Superintendent / Executing Court',
        description: 'Debtor is immediately released upon payment of decree amount, on request of decree-holder, on failure to pay subsistence money, or on grounds of serious illness under Section 59.',
        advocateTips: 'A debtor once released cannot be rearrested under the same decree (Section 58(2) CPC).'
      }
    ],
    hearingAndArguments: 'Under Article 21 of the Constitution and Section 51 CPC, poverty alone is not a crime. The decree-holder bears the initial burden of proving that the debtor has current realisable means or income and has wilfully evaded payment with mala fide intent.',
    possibleOutcomes: [
      'Debtor pays decree amount or furnishes bank guarantee on the spot to avoid imprisonment.',
      'Warrant of committal to civil prison for a term not exceeding 3 months.',
      'Refusal of arrest where debtor is proven to be completely destitute without current means.'
    ],
    appealRevisionRemedy: 'An order committing a debtor to civil prison is not appealable as a decree, but an appeal lies under Order XLIII Rule 1(i) against orders under Section 47. A Civil Revision under Section 115 CPC or a supervisory petition under Article 227 lies before the High Court.',
    commonPitfalls: [
      'Seeking arrest of a female judgment-debtor in violation of the strict prohibition in Section 56 CPC.',
      'Failing to deposit monthly subsistence allowance resulting in automatic statutory release.',
      'Failing to establish fraudulent conduct or means to pay as mandated by Jolly George Varghese.'
    ],
    practicalScenario: 'A businessman held a decree of ₹32 Lakhs against a contractor who lived in a luxury villa and ran business in his wife name while claiming zero personal assets. The decree-holder produced GST returns and luxury foreign travel records under Order XXI Rule 40. The court found contumacious refusal to pay under Section 51(b) and issued a 3-month committal warrant. Within 24 hours of arrest, the contractor arranged a demand draft of ₹32 Lakhs and obtained release.',
    caseLaws: [
      {
        title: 'Jolly George Varghese v. Bank of Cochin',
        citation: '(1980) 2 SCC 360',
        court: 'Supreme Court of India (Justice V.R. Krishna Iyer)',
        holding: 'To cast a person into prison merely because of their poverty and inability to pay is a violation of Article 21 of the Constitution and Article 11 of the ICCPR; imprisonment under Section 51 CPC requires an element of bad faith, wilful refusal, or fraudulent concealment.'
      }
    ],
    faqs: [
      {
        q: 'Can a woman be arrested in execution of a money decree?',
        a: 'No. Section 56 of the Code of Civil Procedure, 1908 imposes an absolute statutory prohibition against the arrest or detention of women in the execution of a decree for the payment of money.'
      },
      {
        q: 'Does civil imprisonment wipe out the decree debt?',
        a: 'No. Section 58(2) CPC explicitly provides that release from civil prison does not discharge the judgment-debtor from the debt, though he cannot be rearrested under the same decree.'
      }
    ],
    tags: ['execution-decree', 'execution', 'civil prison', 'arrest', 'order 21 rule 37', 'jolly george varghese', 'cpc']
  }
];
