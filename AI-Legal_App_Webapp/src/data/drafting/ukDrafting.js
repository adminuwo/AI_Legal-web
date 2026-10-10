// ─── AI LEGAL™ UNITED KINGDOM COURT-READY DRAFTING TEMPLATES ─────────────────
// High-grade pleadings, CPR Part 7 Claim Forms, Particulars of Claim, and English law contracts.

export const UK_LEGAL_DRAFTING = [
  {
    id: 'draft-uk-cpr7-particulars-of-claim',
    slug: 'uk-cpr-part7-particulars-of-claim-kings-bench',
    title: 'Particulars of Claim under CPR Part 7: Breach of Commercial Contract & Debt Recovery',
    category: 'Civil & Commercial Pleadings (CPR)',
    jurisdiction: 'GB',
    actReference: 'Civil Procedure Rules (CPR) — Part 7, Part 16 & Practice Direction 16',
    courtForum: 'High Court of Justice (King\'s Bench Division, Commercial Court) or County Court',
    purposeWhenToUse: 'Formally setting out the factual and legal basis of a civil or commercial claim for debt, breach of contract, or damages in England and Wales pursuant to CPR Part 7.',
    statutoryFoundation: 'CPR Rule 16.4 mandates that Particulars of Claim must contain a concise statement of the facts on which claimant relies, interest claimed under Section 35A Senior Courts Act 1981, and a signed Statement of Truth.',
    essentialClauses: [
      'Court heading identifying the High Court of Justice, King\'s Bench Division, and claim number.',
      'Parties recital identifying the Claimant and Defendant as incorporated entities under the Companies Act 2006.',
      'Recital of Contract: Date, parties, consideration, and key express terms relied upon.',
      'Averments of Claimant\'s full performance of all contractual obligations.',
      'Particulars of Breach: Paragraph-by-paragraph itemisation of the Defendant\'s failure to perform or pay.',
      'Loss and Damage: Financial quantum calculation and causation linkage under Hadley v. Baxendale.',
      'Statutory Interest claim under Section 35A of the Senior Courts Act 1981 or Late Payment of Commercial Debts Act 1998.',
      'Prayer for Relief: Claiming the specified sum, contractual or statutory interest, and costs under CPR Part 44.',
      'Mandatory Statement of Truth signed by the Claimant or Claimant\'s legal representative under CPR Part 22.'
    ],
    commonDraftingMistakes: [
      'Omitting the mandatory Statement of Truth in the exact phrasing prescribed by Practice Direction 22, rendering the pleading liable to be struck out.',
      'Failing to specifically plead statutory interest under Section 35A Senior Courts Act 1981 with starting date and daily rate accrual.'
    ],
    modelPleadingStructure: `IN THE HIGH COURT OF JUSTICE
KING'S BENCH DIVISION
[COMMERCIAL COURT / BUSINESS AND PROPERTY COURTS]
CLAIM NO. [YEAR] EWHC [NUMBER] (KB)

BETWEEN:
[CLAIMANT COMPANY LIMITED]
(A company incorporated under the laws of England and Wales, Company No. [Number])
                                                            Claimant
- and -

[DEFENDANT COMPANY LIMITED]
(A company incorporated under the laws of England and Wales, Company No. [Number])
                                                            Defendant

PARTICULARS OF CLAIM

1. The Claimant is, and was at all material times, a technology and logistics enterprise carrying on business from [Address].
2. The Defendant is, and was at all material times, a commercial distributor carrying on business from [Address].

THE CONTRACT
3. By an agreement in writing dated [Date] ("the Agreement"), the Claimant agreed to supply and the Defendant agreed to purchase [Goods/Services] at the agreed price of £[Sum].
4. It was an express term of Clause [Number] of the Agreement that:
   (a) The Claimant would deliver the Goods by [Date]; and
   (b) The Defendant would make payment in full within 30 days of invoice date.

PERFORMANCE AND BREACH
5. In accordance with the Agreement, the Claimant duly delivered the Goods on [Date] under Delivery Note No. [Number].
6. On [Date], the Claimant issued and served Invoice No. [Number] in the sum of £[Sum], which fell due for payment on [Date].
7. In breach of Clause [Number] of the Agreement, the Defendant has failed and refused to pay the sum of £[Sum] or any part thereof.

LOSS AND STATUTORY INTEREST
8. By reason of the Defendant's breach, the Claimant has suffered loss and damage in the principal sum of £[Sum].
9. The Claimant claims interest pursuant to Section 35A of the Senior Courts Act 1981 at the rate of 8% per annum from [Due Date] to [Date of Issue], amounting to £[Sum], and continuing at the daily rate of £[Sum] until judgment or sooner payment.

AND THE CLAIMANT CLAIMS:
(1) The sum of £[Principal Sum];
(2) Interest pursuant to Section 35A Senior Courts Act 1981 in the sum of £[Sum] to date and continuing;
(3) Costs of this action pursuant to CPR Part 44.

STATEMENT OF TRUTH
The Claimant believes that the facts stated in these Particulars of Claim are true. I understand that proceedings for contempt of court may be brought against anyone who makes, or causes to be made, a false statement in a document verified by a statement of truth without an honest belief in its truth.

Dated this [Day] day of [Month], [Year]
Signed: ___________________________
[Solicitor Name / Partner]
[Law Firm LLP, Solicitors for the Claimant]`,
    actionRoute: '/dashboard/tools/draft-maker?template=uk-particulars-of-claim',
    tags: ['uk-civil-drafts', 'cpr-part-7', 'particulars-of-claim', 'statement-of-truth', 'kings-bench']
  },

  {
    id: 'draft-uk-commercial-services-agreement',
    slug: 'uk-commercial-master-services-agreement-english-law',
    title: 'Master Commercial Services Agreement (English Law Governing Law)',
    category: 'Commercial Contracts',
    jurisdiction: 'GB',
    actReference: 'Supply of Goods and Services Act 1982 & Unfair Contract Terms Act 1977 (UCTA)',
    courtForum: 'Courts of England and Wales',
    purposeWhenToUse: 'B2B commercial agreement setting out the overarching terms on which a service provider supplies enterprise software, consultancy, or managed professional services.',
    statutoryFoundation: 'Grounded in English freedom of contract, subject to statutory reasonableness controls on limitation of liability clauses under UCTA 1977 and implied reasonable care under SGSA 1982.',
    essentialClauses: [
      'Appointment, Statements of Work (SOWs), and delivery milestones.',
      'Charges, payment terms (standard 30 days), and statutory interest under the Late Payment Act 1998.',
      'Intellectual Property Rights: Clear assignment of Customer Deliverables vs. retention of Provider Background IP.',
      'Warranties: Express warranty that services will be performed with reasonable skill, care, and diligence.',
      'Limitation of Liability: Separate mutual cap (e.g. 100% of fees paid in prior 12 months) and express non-limitation of death, personal injury, fraud, or wilful default.',
      'Termination for convenience on 60 days notice and immediate termination for material uncured breach or insolvency.',
      'Governing Law & Jurisdiction Clause expressly conferring exclusive jurisdiction on the Courts of England and Wales.'
    ],
    commonDraftingMistakes: [
      'Attempting to exclude liability for death or personal injury caused by negligence, which is rendered strictly void under Section 2(1) of UCTA 1977.',
      'Drafting liquidated damages clauses that violate the Supreme Court rule against penalties in Cavendish Square Holding BV v. Makdessi [2015].'
    ],
    modelPleadingStructure: `MASTER SERVICES AGREEMENT

DATED: [Date]
PARTIES:
(1) [PROVIDER COMPANY LIMITED], incorporated in England and Wales (Company No. [Number]) ("Provider"); and
(2) [CUSTOMER COMPANY LIMITED], incorporated in England and Wales (Company No. [Number]) ("Customer").

1. SERVICES AND STATEMENTS OF WORK
Provider shall provide the Services to Customer in accordance with the terms of this Agreement and any applicable Statement of Work ("SOW") executed by both parties.

2. STANDARD OF CARE
Provider warrants that it will perform the Services with reasonable skill and care in accordance with recognized industry standards and all applicable laws.

3. FEES AND PAYMENT
Customer shall pay all undisputed invoices within 30 days of the date of invoice. Without prejudice to any other right, Provider may charge statutory interest on overdue sums under the Late Payment of Commercial Debts (Interest) Act 1998.

4. INTELLECTUAL PROPERTY
Provider grants Customer an irrevocable, non-exclusive, royalty-free licence to use all Deliverables. Provider retains all rights in its pre-existing Background IP and proprietary software.

5. LIMITATION OF LIABILITY
(a) Neither party excludes or limits liability for: (i) death or personal injury caused by negligence; (ii) fraud or fraudulent misrepresentation; or (iii) any liability which cannot be limited by law.
(b) Subject to clause 5(a), neither party shall be liable for indirect, special, or consequential loss.
(c) Subject to clause 5(a) and (b), each party's total aggregate liability arising out of this Agreement shall be limited to 100% of the total fees paid by Customer in the 12 months preceding the claim.

6. GOVERNING LAW AND JURISDICTION
This Agreement and any dispute or claim arising out of or in connection with it shall be governed by and construed in accordance with the law of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.

SIGNED for and on behalf of:
[PROVIDER COMPANY LIMITED]                [CUSTOMER COMPANY LIMITED]
Signature: _______________________        Signature: _______________________
Name:                                     Name:
Title:                                    Title:`,
    actionRoute: '/dashboard/tools/draft-maker?template=uk-services-agreement',
    tags: ['uk-commercial-drafts', 'english-law', 'master-services-agreement', 'ucta-1977', 'limitation-of-liability']
  }
];
