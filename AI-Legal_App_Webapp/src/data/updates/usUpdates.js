// ─── AI LEGAL™ UNITED STATES STATUTORY UPDATES & FEDERAL REGISTER NOTICES ───
// Official federal administrative rules, Judicial Conference amendments & regulatory circulars

export const US_LEGAL_UPDATES = [
  {
    id: 'upd-us-fincen-cta-beneficial-ownership',
    slug: 'fincen-corporate-transparency-act-beneficial-ownership-reporting',
    title: 'FinCEN Federal Rule: Corporate Transparency Act (CTA) Beneficial Ownership Reporting',
    category: 'Federal Register Rules (31 CFR Part 1010)',
    jurisdiction: 'US',
    jurisdictionLabel: 'United States Federal (FinCEN / Dept of Treasury)',
    publishDate: 'January 2024 (Ongoing Enactment 2024–2025)',
    effectiveDate: 'January 1, 2024',
    authority: 'Financial Crimes Enforcement Network (FinCEN), U.S. Department of the Treasury',
    summary: 'Landmark federal regulatory mandate requiring millions of US domestic corporations, LLCs, and registered foreign entities to report their Beneficial Ownership Information (BOI) to combat illicit finance and shell company concealment.',
    impactAssessment: 'High Impact across all US small businesses, corporate formations, transactional practices, and general counsel offices.',
    keyChanges: [
      'Entities formed prior to Jan 1, 2024 must file initial BOI report by January 1, 2025; new entities formed in 2024 have 90 days from notice of registration.',
      'Must identify individuals exercising substantial control or owning >= 25% ownership interests.',
      'Civil penalties up to $500/day and criminal penalties up to 2 years imprisonment for willful failure to report or false information.'
    ]
  },
  {
    id: 'upd-us-judicial-conference-frcp-amendments',
    slug: 'judicial-conference-frcp-rule-16-rule-26-ai-case-management',
    title: 'Judicial Conference Advisory Committee: FRCP Amendments on Electronic Discovery & AI Protocols',
    category: 'Federal Rules Amendments',
    jurisdiction: 'US',
    jurisdictionLabel: 'United States Federal Courts',
    publishDate: 'December 2024',
    effectiveDate: 'December 1, 2024',
    authority: 'Supreme Court of the United States & Judicial Conference of the United States',
    summary: 'Standing amendments to Federal Rules of Civil Procedure Rule 16 and Rule 26(f) requiring parties to confer during initial scheduling conferences regarding generative AI usage, data retention, and automated privilege review.',
    impactAssessment: 'Universal application across all civil actions pending in U.S. District Courts.',
    keyChanges: [
      'Pre-trial discovery plans must explicitly address protocols for machine-learning-assisted document review and automated redaction.',
      'Heightened duty to preserve dynamic cloud-hosted collaborative workspaces and ephemeral corporate messaging apps.',
      'Standardized protective order stipulations under Federal Rule of Evidence 502(d) for accidental production of privileged ESI.'
    ]
  },
  {
    id: 'upd-us-sec-cybersecurity-disclosure',
    slug: 'sec-item-106-regulation-sk-cybersecurity-incident-disclosure',
    title: 'SEC Final Rule: Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure',
    category: 'Securities and Exchange Commission (SEC)',
    jurisdiction: 'US',
    jurisdictionLabel: 'United States Federal (SEC)',
    publishDate: 'July 2023',
    effectiveDate: 'December 18, 2023',
    authority: 'Securities and Exchange Commission (17 CFR Parts 229, 232, 239, 240, 249)',
    summary: 'Requires public reporting companies to disclose material cybersecurity incidents on Form 8-K within four business days of determining materiality, and provide periodic disclosures on cybersecurity risk governance on Form 10-K.',
    impactAssessment: 'Essential compliance requirement for all public companies, corporate directors, and securities counsel.',
    keyChanges: [
      'Form 8-K Item 1.05: Mandatory disclosure within 4 business days of materiality determination.',
      'Item 106 of Regulation S-K: Annual disclosure of board oversight and management role in assessing cyber risks.',
      'Limited national security/public safety delay permissible only upon written notification by the U.S. Attorney General.'
    ]
  }
];
