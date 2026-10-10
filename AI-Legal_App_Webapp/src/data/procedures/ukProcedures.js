// ─── AI LEGAL™ UNITED KINGDOM COURT PROCEDURES & LITIGATION WORKFLOWS ───────
// Step-by-step litigation flows under the Civil Procedure Rules (CPR), Criminal Procedure Rules (CrimPR),
// and Administrative Court Judicial Review guides (Senior Courts Act 1981).

export const UK_COURT_PROCEDURES = [
  {
    id: 'proc-uk-cpr-part7-civil-claim',
    slug: 'uk-cpr-part7-civil-litigation-procedure-guide',
    title: 'Civil Litigation under Civil Procedure Rules (CPR Part 7): High Court & County Court',
    category: 'Civil Procedure Rules (CPR)',
    jurisdiction: 'GB',
    jurisdictionLabel: 'England & Wales (HM Courts & Tribunals Service)',
    actReference: 'Civil Procedure Rules 1998 (CPR) — Parts 7, 16, 26, 29, 31',
    forum: 'High Court of Justice (King\'s Bench / Chancery) or County Court',
    overview: 'The definitive procedural progression for civil and commercial claims in England and Wales: Compliance with Pre-Action Protocols, issue of Claim Form (Form N1), Particulars of Claim, Directions Questionnaire, case management conferences, standard disclosure, and trial.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Pre-Action Protocol & Letter of Claim',
        description: 'Before issuing court proceedings, the claimant must send a formal Letter of Claim setting out full basis of liability and financial loss. The defendant is allowed a reasonable time (14 to 90 days depending on the protocol) to respond.'
      },
      {
        stageNumber: 2,
        title: 'Issue & Service of Claim Form (CPR Part 7 & Part 16)',
        description: 'Claimant files Form N1 with the court and pays the issue fee. Particulars of Claim must be served with the Claim Form or within 14 days thereafter. The defendant has 14 days to acknowledge service or file a Defence.'
      },
      {
        stageNumber: 3,
        title: 'Allocation to Track & Directions Questionnaire (CPR Part 26)',
        description: 'Cases are allocated to Small Claims (under £10k), Fast Track (£10k–£25k), Intermediate Track (£25k–£100k), or Multi-Track (>£100k or complex). Parties submit Directions Questionnaires proposing trial timetables.'
      },
      {
        stageNumber: 4,
        title: 'Standard Disclosure & Witness Statements (CPR Parts 31 & 32)',
        description: 'Parties exchange lists of documents they rely upon, documents which adversely affect their case or support another party\'s case. Signed witness statements and CPR Part 35 expert reports are exchanged.'
      }
    ],
    limitationPeriod: 'Generally 6 years for simple contract and tort claims under the Limitation Act 1980; 3 years for personal injury.',
    courtFees: 'Sliding scale up to 5% of claim value (capped at £10,000 for money claims exceeding £200,000).'
  },

  {
    id: 'proc-uk-judicial-review-admin-court',
    slug: 'uk-judicial-review-procedure-administrative-court-form-n461',
    title: 'Judicial Review Procedure in the Administrative Court (High Court King\'s Bench)',
    category: 'Public & Administrative Law',
    jurisdiction: 'GB',
    jurisdictionLabel: 'England & Wales (High Court of Justice)',
    actReference: 'Civil Procedure Rules (CPR) — Part 54 & Senior Courts Act 1981 Section 31',
    forum: 'Administrative Court (King\'s Bench Division, Royal Courts of Justice)',
    overview: 'The procedure for challenging the lawfulness of decisions, actions, or failures to act of public bodies, ministers, and local authorities: Pre-action protocol, urgent applications, permission stage (oral renewal), and full substantive hearing for quashing orders or declarations.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Pre-Action Protocol Letter Before Claim',
        description: 'Claimant sends a standardized pre-action letter identifying the impugned decision, legal grounds (illegality, irrationality, procedural unfairness), and the specific remedy sought. Public authority has 14 days to respond.'
      },
      {
        stageNumber: 2,
        title: 'Filing Claim for Judicial Review (Form N461)',
        description: 'Claimant files Form N461 with the Administrative Court within strict time limits (promptly and in any event within 3 months). Accompanied by statement of grounds, written evidence, and decision challenged.'
      },
      {
        stageNumber: 3,
        title: 'Permission Stage (Paper Consideration & Oral Renewal)',
        description: 'A High Court judge considers whether the claim is "arguable" on the papers. If permission is refused on papers, the claimant may renew the application orally in open court within 7 days.'
      },
      {
        stageNumber: 4,
        title: 'Substantive Hearing and Judicial Remedies',
        description: 'If permission is granted, the defendant files Detailed Grounds and evidence. Following full argument, the Court may grant a Quashing Order (certiorari), Mandatory Order (mandamus), Prohibition, or Declaration.'
      }
    ],
    limitationPeriod: 'Promptly and in any event not later than 3 months after the grounds first arose (6 weeks for public procurement claims).',
    courtFees: '£154 for application for permission; £770 for substantive hearing.'
  }
];
