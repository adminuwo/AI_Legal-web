// ─── AI LEGAL™ UNITED STATES COURT PROCEDURES & LITIGATION WORKFLOWS ─────────
// Step-by-step litigation flows under the Federal Rules of Civil Procedure (FRCP),
// Federal Rules of Criminal Procedure (FRCrP), and Federal Rules of Appellate Procedure (FRAP).

export const US_COURT_PROCEDURES = [
  {
    id: 'proc-us-federal-civil-litigation',
    slug: 'us-federal-civil-litigation-frcp-procedure-guide',
    title: 'Federal Civil Litigation Procedure: From Complaint to Rule 56 Summary Judgment',
    category: 'Federal Civil Procedure (FRCP)',
    jurisdiction: 'US',
    jurisdictionLabel: 'United States Federal Courts',
    actReference: 'Federal Rules of Civil Procedure (FRCP) — Rules 3, 4, 8, 12, 26, 56',
    forum: 'United States District Court (Federal Judicial District)',
    overview: 'The complete procedural progression for civil litigation in US Federal District Courts: Filing the complaint, serving the summons, Rule 12(b)(6) motions to dismiss, the Rule 26(f) discovery conference, depositions, and Rule 56 summary judgment practice.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Filing Complaint & Serving Summons (FRCP Rules 3 & 4)',
        description: 'Plaintiff files complaint invoking Subject-Matter Jurisdiction (28 U.S.C. § 1331 or § 1332) and pays federal filing fee. Summons and complaint must be served on each defendant within 90 days of filing.'
      },
      {
        stageNumber: 2,
        title: 'Defendant Appearance or Rule 12(b)(6) Motion (FRCP Rule 12)',
        description: 'Defendant has 21 days (or 60 days if service is waived under Rule 4(d)) to file an Answer or move to dismiss for lack of jurisdiction, improper venue, or failure to state a claim under Twombly/Iqbal.'
      },
      {
        stageNumber: 3,
        title: 'Rule 26(f) Conference, Discovery Plan & Scheduling Order',
        description: 'Parties meet to confer on discovery, submit a joint Rule 26(f) report, and the Magistrate or District Judge enters a Rule 16 scheduling order establishing deadlines for depositions, expert reports, and dispositive motions.'
      },
      {
        stageNumber: 4,
        title: 'Dispositive Motions & Rule 56 Summary Judgment',
        description: 'Following close of discovery, parties file motions for summary judgment demonstrating there is no genuine dispute as to any material fact, accompanied by a statement of undisputed material facts citing deposition excerpts.'
      }
    ],
    limitationPeriod: 'Governed by underlying substantive federal statute or analogous state limitation statutes for diversity claims.',
    courtFees: '$405 federal civil filing fee in US District Courts.'
  },

  {
    id: 'proc-us-federal-criminal-indictment-bail',
    slug: 'us-federal-criminal-indictment-bail-pretrial-procedure',
    title: 'Federal Criminal Procedure: Grand Jury Indictment, Arraignment & Pretrial Detention',
    category: 'Federal Criminal Procedure',
    jurisdiction: 'US',
    jurisdictionLabel: 'United States Federal Courts',
    actReference: 'Federal Rules of Criminal Procedure (FRCrP) & Bail Reform Act (18 U.S.C. § 3142)',
    forum: 'United States District Court (Magistrate & District Judges)',
    overview: 'The step-by-step federal criminal process: Grand Jury indictment, initial appearance, detention hearing under 18 U.S.C. § 3142 (Bail Reform Act), Rule 16 discovery, Brady/Giglio disclosures, and plea negotiations.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Grand Jury Indictment or Criminal Complaint (Rule 6 / Rule 7)',
        description: 'Under the Fifth Amendment, felony prosecutions proceed by Grand Jury Indictment finding probable cause. Magistrate judges issue arrest warrants or summonses based on supported complaints.'
      },
      {
        stageNumber: 2,
        title: 'Initial Appearance and Arraignment (Rule 5 & Rule 10)',
        description: 'Defendant is brought before a US Magistrate Judge without unnecessary delay. Rights to counsel are confirmed, charges are formally read, and defendant enters a plea of not guilty.'
      },
      {
        stageNumber: 3,
        title: 'Detention Hearing under Bail Reform Act (18 U.S.C. § 3142)',
        description: 'Court determines whether conditions of release will reasonably assure defendant\'s appearance and the safety of any other person. Rebuttable presumption of detention applies in major drug and violent offenses.'
      },
      {
        stageNumber: 4,
        title: 'Rule 16 Discovery, Brady Exculpatory Production & Motions',
        description: 'Government produces defendant statements, documents, and expert reports. Defense moves for suppression of evidence under Fourth or Fifth Amendments and requests Brady/Giglio material.'
      }
    ],
    limitationPeriod: 'Generally 5 years under 18 U.S.C. § 3282 for non-capital federal crimes.',
    courtFees: 'No fee for criminal defendants.'
  }
];
