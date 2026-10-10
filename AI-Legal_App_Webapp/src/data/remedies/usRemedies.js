// ─── AI LEGAL™ UNITED STATES CITIZEN RIGHTS & STATUTORY REMEDIES ───────────
// Actionable rights, federal remedies, civil rights protections, and statutory relief in the US.

export const US_RIGHTS_REMEDIES = [
  {
    id: 'rem-us-section-1983-civil-rights',
    slug: 'remedy-police-misconduct-constitutional-deprivation-section-1983',
    title: 'Remedy for Civil Rights Violations & Police Misconduct (42 U.S.C. § 1983)',
    category: 'Civil Rights & Constitutional Liberties',
    jurisdiction: 'US',
    jurisdictionLabel: 'United States Federal Courts',
    remedyType: 'Federal Civil Action for Damages & Injunction',
    urgencyLevel: 'High (Governed by State Personal Injury Limitation)',
    forum: 'United States District Court',
    summary: 'A powerful federal cause of action permitting citizens to recover compensatory and punitive damages and injunctive relief against state and local government officials who deprive them of constitutional rights under color of state law.',
    whenToUse: 'When excessive force, unlawful arrest without probable cause, illegal search, or deliberate indifference to medical needs in custody is committed by police, correctional officers, or municipal employees.',
    statutoryBasis: '42 U.S.C. § 1983 (Civil Action for Deprivation of Rights); read with Fourth, Eighth, and Fourteenth Amendments to the US Constitution.',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Evidence Preservation & Public Records Request',
        action: 'Immediately serve spoliation letters on police departments to preserve dashcam/bodycam footage, dispatch 911 audio recordings, CAD logs, and internal affairs complaint files.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Notice of Claim Compliance (State Law Tort Claims)',
        action: 'Where supplemental state-law claims (assault, false imprisonment) are joined, file mandatory statutory tort notices within strict state deadlines (often 90 to 180 days).'
      },
      {
        stageNumber: 3,
        stageTitle: 'Filing Federal § 1983 Complaint & Overcoming Qualified Immunity',
        action: 'Draft and file federal complaint pleading specific factual conduct establishing clearly established constitutional rights under the Graham v. Connor objective reasonableness standard.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Trial & Statutory Attorney\'s Fees Recovery',
        action: 'Prevail at jury trial and seek mandatory shifting of plaintiff\'s reasonable attorneys\' fees under the Civil Rights Attorney\'s Fees Awards Act (42 U.S.C. § 1988).'
      }
    ],
    processSteps: [
      'Preserve electronic bodycam and 911 dispatch records.',
      'File timely notice of tort claim with municipality.',
      'File federal complaint in US District Court under 42 U.S.C. § 1983.',
      'Overcome defense motion for qualified immunity using established circuit precedents.',
      'Obtain damages and attorney fees under 42 U.S.C. § 1988.'
    ],
    landmarkCase: 'Monell v. Department of Social Services, 436 U.S. 658 (1978) — Municipal Liability'
  },

  {
    id: 'rem-us-title7-workplace-discrimination',
    slug: 'remedy-employment-discrimination-title-vii-eeoc-charge',
    title: 'Remedy for Employment Discrimination & Harassment (Title VII & EEOC Charge)',
    category: 'Employment & Civil Rights',
    jurisdiction: 'US',
    jurisdictionLabel: 'Equal Employment Opportunity Commission (EEOC) & US District Court',
    remedyType: 'Administrative Exhaustion & Federal Lawsuit',
    urgencyLevel: 'Strict Statutory Deadline (180 or 300 Days)',
    forum: 'EEOC / US District Court',
    summary: 'The statutory process to obtain back pay, front pay, compensatory and punitive damages, and reinstatement for workplace discrimination based on race, color, religion, sex, sexual orientation, gender identity, or national origin.',
    whenToUse: 'When an employee experiences wrongful termination, hostile work environment, demotion, pay disparity, or retaliatory action for reporting discrimination.',
    statutoryBasis: 'Title VII of the Civil Rights Act of 1964 (42 U.S.C. § 2000e et seq.); Civil Rights Act of 1991.',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Filing EEOC Charge of Discrimination',
        action: 'File a formal Charge of Discrimination with the Equal Employment Opportunity Commission within 180 days (extended to 300 days in states with fair employment practices agencies).'
      },
      {
        stageNumber: 2,
        stageTitle: 'EEOC Mediation & Investigation',
        action: 'Participate in voluntary EEOC mediation or submit Position Statement and corroborating emails, performance reviews, and witness declarations to the investigator.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Receipt of Notice of Right to Sue',
        action: 'Upon conclusion of investigation, obtain the official Notice of Right to Sue letter. A federal lawsuit must be filed strictly within 90 days of receipt.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Federal Court Litigation & Damages Recovery',
        action: 'File Title VII complaint in US District Court seeking lost wages, emotional distress damages, punitive damages (subject to statutory caps), and attorney fees.'
      }
    ],
    processSteps: [
      'Document all discriminatory remarks, emails, and timeline of adverse employment actions.',
      'File Charge of Discrimination with EEOC within 180/300 days.',
      'Obtain Right to Sue Letter from EEOC.',
      'File federal complaint within 90 days of receipt of Right to Sue notice.'
    ],
    landmarkCase: 'Bostock v. Clayton County, 590 U.S. 644 (2020) — Title VII Sex Discrimination'
  }
];
