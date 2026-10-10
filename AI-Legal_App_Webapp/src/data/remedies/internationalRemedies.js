// ─── AI LEGAL™ INTERNATIONAL & GLOBAL RIGHTS & REMEDIES REPOSITORY ───────────
// Actionable remedies before international treaty bodies, ICJ provisional measures, and arbitral enforcement.

export const INTERNATIONAL_RIGHTS_REMEDIES = [
  {
    id: 'rem-international-iccpr-human-rights-committee',
    slug: 'remedy-un-human-rights-committee-individual-communication-iccpr',
    title: 'Individual Communication to the UN Human Rights Committee (ICCPR Optional Protocol)',
    category: 'International Human Rights Protection',
    jurisdiction: 'GLOBAL',
    jurisdictionLabel: 'United Nations Human Rights Committee (Geneva)',
    remedyType: 'Quasi-Judicial Individual Complaint & Authoritative Views',
    urgencyLevel: 'After Exhaustion of Domestic Remedies',
    forum: 'UN Human Rights Committee (OHCHR, Geneva, Switzerland)',
    summary: 'The formal petition procedure allowing individuals who claim that any of their rights enumerated in the International Covenant on Civil and Political Rights (ICCPR) have been violated by a State party to submit a communication.',
    whenToUse: 'When an individual suffers violations of rights to life, fair trial, freedom from torture, arbitrary detention, or freedom of expression, and has exhausted all effective domestic court appeals without remedy.',
    statutoryBasis: 'First Optional Protocol to the International Covenant on Civil and Political Rights (1966) — Articles 1 to 5; read with ICCPR substantive articles.',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Verification of State Party Ratification and Exhaustion',
        action: 'Confirm that the respondent State has ratified the First Optional Protocol and that all domestic remedies (up to the national Supreme/Constitutional Court) have been exhausted or are unreasonably prolonged.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Submission of Written Communication to Petitions Team',
        action: 'Draft and transmit the individual complaint form to the Petitions and Urgent Actions Section of OHCHR in Geneva, accompanied by court judgments and evidence.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Interim Measures Request (Rule 94 of Rules of Procedure)',
        action: 'In urgent situations (such as imminent execution or extradition facing torture), request the Special Rapporteur on New Communications to issue interim measures restraining the State.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Adoption of Views by Committee & Follow-up',
        action: 'Committee evaluates admissibility and merits, adopting binding "Views" finding violations, recommending financial compensation, release, or retrial, and tracking compliance under its follow-up procedure.'
      }
    ],
    processSteps: [
      'Exhaust all available domestic appeals in national court system.',
      'Prepare individual communication under the First Optional Protocol to the ICCPR.',
      'Submit petition to the Petitions Unit at OHCHR in Geneva.',
      'Request interim measures under Rule 94 if facing imminent irreparable harm.',
      'Monitor State compliance through the Committee\'s Special Rapporteur for Follow-up on Views.'
    ],
    landmarkCase: 'Toonen v. Australia, UN Doc. CCPR/C/50/D/488/1992 — Privacy Rights under ICCPR Article 17'
  },

  {
    id: 'rem-international-enforcement-arbitral-award',
    slug: 'remedy-enforcement-foreign-arbitral-award-new-york-convention-1958',
    title: 'Enforcement of Foreign Arbitral Awards under the New York Convention (1958)',
    category: 'Cross-Border Commercial Dispute Enforcement',
    jurisdiction: 'GLOBAL',
    jurisdictionLabel: 'National Enforcing Courts worldwide (>170 Contracting States)',
    remedyType: 'Judicial Recognition, Seizure & Asset Execution',
    urgencyLevel: 'Standard Commercial Enforcement Procedure',
    forum: 'Competent Commercial Court in jurisdiction where debtor assets are situated',
    summary: 'The global legal mechanism enabling winning commercial parties to take an international arbitral award issued in one country and enforce it against assets located in any other Contracting State as if it were a domestic judgment.',
    whenToUse: 'When a commercial counterparty fails or refuses to comply voluntarily with a final arbitral award issued by an international tribunal (ICC, LCIA, SIAC, ICDR, or UNCITRAL ad hoc).',
    statutoryBasis: 'Convention on the Recognition and Enforcement of Foreign Arbitral Awards (New York, 1958) — Articles III, IV & V; national implementing arbitration statutes.',
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Asset Tracing and Jurisdiction Selection',
        action: 'Locate bank accounts, real estate, receivables, or maritime vessels of the judgment debtor in New York Convention signatory jurisdictions.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Submission of Formal Enforcement Petition under Article IV',
        action: 'Supply the enforcing court with: (a) The duly authenticated original award or a certified copy; and (b) The original arbitration agreement or certified copy, with sworn official translations if required.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Rebutting Debtor Article V Objections',
        action: 'Debtor bears the heavy legal burden of establishing one of the narrow grounds under Article V(1) (incapacity, lack of notice, excess of mandate, invalidity under lex arbitri).'
      },
      {
        stageNumber: 4,
        stageTitle: 'Entry of Judgment & Execution against Debtor Assets',
        action: 'Upon recognition, the court enters judgment on the award, issuing garnishee orders, third-party debt orders, and freezing orders to liquidate assets and satisfy the debt.'
      }
    ],
    processSteps: [
      'Obtain certified, apostilled copies of the Final Arbitral Award and Arbitration Agreement.',
      'File recognition petition in the national court having jurisdiction over debtor\'s assets.',
      'Defeat Article V objections by establishing fair hearing and valid arbitration agreement.',
      'Execute against bank accounts and corporate assets to recover principal sum and interest.'
    ],
    landmarkCase: 'Parsons & Whittemore Overseas Co. v. Société Générale, 508 F.2d 969 (2d Cir. 1974) — Narrow Scope of Public Policy Defense'
  }
];
