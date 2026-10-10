// ─── AI LEGAL™ INTERNATIONAL COURT & ARBITRATION PROCEDURES ─────────────────
// Step-by-step litigation flows under the Statute of the International Court of Justice (ICJ),
// UNCITRAL Arbitration Rules, and the International Criminal Court (ICC) Rules of Procedure.

export const INTERNATIONAL_COURT_PROCEDURES = [
  {
    id: 'proc-international-icj-contentious',
    slug: 'international-court-of-justice-icj-contentious-proceedings-procedure',
    title: 'Contentious Proceedings before the International Court of Justice (ICJ - The Hague)',
    category: 'Public International Law Litigation',
    jurisdiction: 'GLOBAL',
    jurisdictionLabel: 'International Court of Justice (The Peace Palace, The Hague)',
    actReference: 'Statute of the International Court of Justice & Rules of Court (1978, as amended)',
    forum: 'International Court of Justice (Principal Judicial Organ of the United Nations)',
    overview: 'The complete sovereign litigation progression before the World Court: Establishing jurisdictional basis (Optional Clause Article 36(2) or Special Agreement), filing Application, written phase (Memorial and Counter-Memorial), oral pleadings, provisional measures, and final binding judgment under Article 94 of the UN Charter.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Institution of Proceedings & Jurisdictional Basis',
        description: 'Applicant State files an Application with the Registrar at The Hague or notifies a Special Agreement (compromis). Must establish jurisdiction: Compromissory treaty clause, Article 36(2) compulsory jurisdiction declaration, or forum prorogatum.'
      },
      {
        stageNumber: 2,
        title: 'Request for Provisional Measures (Article 41 of Statute)',
        description: 'If there is imminent risk of irreparable harm to rights at issue, the applicant requests urgent provisional measures (injunctions). The Court schedules emergency oral hearings within weeks and issues a binding order.'
      },
      {
        stageNumber: 3,
        title: 'Written Proceedings Phase (Memorial, Counter-Memorial & Preliminary Objections)',
        description: 'The Court fixes time limits. The Applicant submits its Memorial; the Respondent files its Counter-Memorial or files Preliminary Objections to jurisdiction or admissibility (suspending merits proceedings).'
      },
      {
        stageNumber: 4,
        title: 'Oral Public Hearings, Deliberation & Final Judgment',
        description: 'Agents and counsel present oral arguments at the Great Hall of Justice in English and French. The 15-judge bench deliberates in secret and delivers a final, unappealable judgment binding on the parties under Article 94.'
      }
    ],
    limitationPeriod: 'No formal statutory limitation in customary international law; governed by doctrine of extinctive prescription/laches.',
    courtFees: 'Zero administrative fees charged by the UN/ICJ to sovereign Member States.'
  },

  {
    id: 'proc-international-commercial-arbitration',
    slug: 'international-commercial-arbitration-uncitral-procedure-guide',
    title: 'International Commercial Arbitration Procedure under UNCITRAL Rules',
    category: 'International Arbitration',
    jurisdiction: 'GLOBAL',
    jurisdictionLabel: 'International Commercial Arbitration Tribunals (ICC, LCIA, SIAC, PCA)',
    actReference: 'UNCITRAL Arbitration Rules (2013/2021) & UNCITRAL Model Law on International Commercial Arbitration',
    forum: 'Arbitral Tribunal at designated Seat of Arbitration (e.g., London, Paris, Geneva, Singapore)',
    overview: 'The standard procedural workflow for resolving cross-border commercial and investment disputes: Drafting and serving the Notice of Arbitration, constitution of the arbitral tribunal, case management conference (Procedural Order No. 1), document production, evidentiary hearings, and enforcement under the New York Convention.',
    keyStages: [
      {
        stageNumber: 1,
        title: 'Notice of Arbitration & Response (Articles 3 & 4 UNCITRAL)',
        description: 'Claimant serves a formal Notice of Arbitration on Respondent citing the arbitration agreement, nature of the dispute, relief claimed, and nominating an arbitrator. Respondent has 30 days to file an Answer.'
      },
      {
        stageNumber: 2,
        title: 'Constitution of Arbitral Tribunal & Confirmation (Articles 7–10)',
        description: 'Sole arbitrator or three-member tribunal is constituted. Co-arbitrators appoint the presiding arbitrator. Arbitrators sign declarations of independence, impartiality, and availability.'
      },
      {
        stageNumber: 3,
        title: 'Procedural Order No. 1 & Redfern Schedule Document Production',
        description: 'Tribunal holds a case management conference setting procedural rules, timetable, IBA Rules on Taking of Evidence in International Arbitration, and Redfern Schedule requests for relevant, narrow document production.'
      },
      {
        stageNumber: 4,
        title: 'Evidentiary Hearing, Post-Hearing Briefs & Final Arbitral Award',
        description: 'Witnesses and experts undergo cross-examination. Following post-hearing submissions, the Tribunal issues a reasoned final award enforceable in over 170 jurisdictions under Article III of the New York Convention 1958.'
      }
    ],
    limitationPeriod: 'Governed by the substantive law of the contract (lex causae).',
    courtFees: 'Institutional filing fees and hourly rates of arbitrators (typically held in escrow advances).'
  }
];
