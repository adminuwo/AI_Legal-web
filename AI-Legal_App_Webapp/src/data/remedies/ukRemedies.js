// ─── AI LEGAL™ UNITED KINGDOM CITIZEN RIGHTS & STATUTORY REMEDIES ───────────
// Actionable consumer protections, employment tribunal claims, and public law remedies under UK law.

export const UK_RIGHTS_REMEDIES = [
  {
    id: 'rem-uk-consumer-rights-act-reject',
    slug: 'remedy-defective-goods-right-to-reject-consumer-rights-act-2015',
    title: 'Remedy for Defective Goods: Short-Term Right to Reject & Refund (CRA 2015)',
    category: 'Consumer Rights & Protection',
    jurisdiction: 'GB',
    jurisdictionLabel: 'United Kingdom (Trading Standards & County Court)',
    remedyType: 'Statutory Right of Rejection, Repair, Replacement or Price Reduction',
    urgencyLevel: 'Strict 30-Day Window for Full Refund',
    forum: 'Retailer / Small Claims Track in the County Court',
    summary: 'The primary statutory remedy available to consumers when goods sold by a business are not of satisfactory quality, not fit for a particular purpose, or not as described.',
    whenToUse: 'When purchasing cars, electronics, machinery, appliances, or consumer items that prove faulty, fail to perform, or are materially defective upon delivery.',
    statutoryBasis: 'Consumer Rights Act 2015 — Sections 9 (Satisfactory Quality), 10 (Fitness for Purpose), 20 (Right to Reject) and 22 (Time Limit for Short-Term Rejection).',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Exercise of 30-Day Short-Term Right to Reject',
        action: 'Notify the trader in writing or orally within 30 days of ownership and delivery that the goods are rejected for breach of statutory quality, demanding a full 100% refund.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Trader Refund and Return Obligations (Section 20)',
        action: 'Trader must provide a full refund without undue delay (strictly within 14 days of agreed rejection) using the same payment method, and collect goods at own expense.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Tier Two Remedies (After 30 Days): Repair or Replacement (Section 23)',
        action: 'If past 30 days, consumer is entitled to require repair or replacement. Within the first 6 months, the defect is presumed to have existed at delivery.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Small Claims Court Recovery (Money Claim Online)',
        action: 'If the trader refuses to refund, issue a Letter Before Claim under the Pre-Action Protocol and file a Small Claims action via Money Claim Online (MCOL).'
      }
    ],
    processSteps: [
      'Document the defect with clear photographs, video recordings, and diagnostic reports.',
      'Serve formal Notice of Rejection on the trader within 30 days under Section 20 CRA 2015.',
      'Give trader 14 days to process full refund to original payment card.',
      'File Small Claims action via Money Claim Online (MCOL) if trader refuses.'
    ],
    landmarkCase: 'Douglas v. Glenvarigill Co Ltd [2010] CSOH 14 — Timeliness of Rejection in Consumer Sales'
  },

  {
    id: 'rem-uk-employment-unfair-dismissal',
    slug: 'remedy-unfair-dismissal-acas-early-conciliation-employment-tribunal',
    title: 'Remedy for Unfair Dismissal & ACAS Early Conciliation (Employment Rights Act 1996)',
    category: 'Workplace & Employment Rights',
    jurisdiction: 'GB',
    jurisdictionLabel: 'Employment Tribunal (England & Wales / Scotland)',
    remedyType: 'Statutory Reinstatement, Re-engagement, or Financial Compensation',
    urgencyLevel: 'Strict 3 Months Minus 1 Day Limitation',
    forum: 'ACAS / Employment Tribunal',
    summary: 'The statutory protection against arbitrary dismissal for qualifying employees (generally 2 years continuous service), providing basic awards and compensatory awards for loss of earnings.',
    whenToUse: 'When an employee is dismissed without a fair statutory reason (conduct, capability, redundancy, statutory illegality, or some other substantial reason) or without fair procedure (Acas Code of Practice).',
    statutoryBasis: 'Employment Rights Act 1996 — Section 94 (Right not to be unfairly dismissed) & Section 98 (Fair reasons for dismissal); Acas Code of Practice on Disciplinary and Grievance Procedures.',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Mandatory ACAS Early Conciliation Notification',
        action: 'Notify Acas before the primary limitation period (3 months minus 1 day from the effective date of termination). This pauses the limitation clock.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Acas Early Conciliation Certificate',
        action: 'If settlement talks fail, Acas issues an Early Conciliation Certificate. The employee has at least one month from the certificate date to present a claim.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Filing Claim on Form ET1 with the Employment Tribunal',
        action: 'Submit Form ET1 outlining the employment history, grounds of unfair dismissal, procedural defects, and financial loss claimed.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Tribunal Hearing & Statutory Compensation Award',
        action: 'Tribunal evaluates substantive fairness and procedure. If unfair, awards Basic Award (formula based on age/service) and Compensatory Award up to the statutory cap.'
      }
    ],
    processSteps: [
      'Note effective date of termination (EDT) and calculate 3 months minus 1 day deadline.',
      'Register for mandatory Early Conciliation with ACAS before expiry.',
      'Obtain ACAS Conciliation Certificate.',
      'Submit Form ET1 online to the Employment Tribunal.'
    ],
    landmarkCase: 'Polkey v. AE Dayton Services Ltd [1988] AC 344 — Procedural Fairness in Dismissal'
  }
];
