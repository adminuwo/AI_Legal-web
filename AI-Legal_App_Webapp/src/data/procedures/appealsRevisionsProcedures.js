// ─── APPEALS, REVISIONS & QUASHING PROCEDURES ───────────────────────────────
// Authoritative appellate and revision workflows under CPC, BNSS and Constitution

export const APPEALS_REVISIONS_PROCEDURES = [
  {
    id: 'proc-appeal-regular-first-appeal-cpc',
    slug: 'regular-first-appeal-section-96-order-41-cpc',
    title: 'Regular First Appeal under Section 96 & Order XLI CPC before District / High Court',
    category: 'Appeals, Revisions & Quashing',
    actReference: 'Code of Civil Procedure, 1908 — Section 96 & Order XLI & Limitation Act 1963',
    courtForum: 'District Court (for lower civil judge decrees) / High Court (for original side or high-value decrees)',
    estimatedTimeline: '6 months to 2 years (Interim stay application heard on Day 1-7)',
    courtFeeLevel: 'Full ad-valorem court fee as paid on the plaint under State Court Fees Act',
    overview: 'A Regular First Appeal (RFA) under Section 96 CPC is a valuable statutory right of the aggrieved litigant to challenge a decree passed by a court exercising original civil jurisdiction. Governed procedurally by Order XLI CPC, the First Appellate Court is the final court of fact and law (Santosh Hazari v. Purushottam Tiwari). It possesses plenary jurisdiction to re-appreciate, re-analyze, and re-examine the entire oral and documentary evidence, evaluate whether the trial court findings are erroneous, formulate points for determination, and confirm, reverse, vary, or remand the decree under Rule 23/23A.',
    legalBasis: 'Section 96 CPC (Appeal from original decree), Section 107 (Powers of appellate court), Order XLI Rules 1–37 CPC, and Limitation Act, 1963 (Articles 116 & 120).',
    locusStandi: 'Any party to the suit adversely affected by the decree, or their legal representatives. A successful party cannot appeal unless an adverse finding operates as res judicata.',
    prerequisites: [
      'A formal, final decree or deemed decree under Section 2(2) CPC passed by an original civil court.',
      'Procurement of Certified Copy of the Judgment and Decree appealed from (Order XLI Rule 1).',
      'Payment of full ad-valorem court fee on the memorandum of appeal.',
      'Filing within statutory limitation period, or submission of a formal Application for Condonation of Delay under Section 5 Limitation Act supported by an affidavit.',
      'Filing an Application for Stay of Execution of the decree under Order XLI Rule 5 CPC.'
    ],
    statutoryLimitation: '30 days under Article 116(b) Limitation Act if appeal lies to the District Court; 90 days under Article 116(a) if appeal lies to the High Court, computed from the date of the decree (excluding time requisite for obtaining certified copy under Section 12).',
    mandatoryDocuments: [
      'Memorandum of Appeal under Order XLI Rule 1 CPC with concise grounds of objection.',
      'Certified Copy of the impugned Judgment and Decree.',
      'Application for Stay of Execution under Order XLI Rule 5 CPC with supporting affidavit.',
      'Application under Section 5 of the Limitation Act for Condonation of Delay (if filed beyond 30/90 days).',
      'Court fee payment receipt / physical judicial stamp endorsement.',
      'Memo of Parties with complete addresses, emails, and contact details.',
      'Vakalatnama executed by the Appellant.'
    ],
    draftingGuidance: 'Draft the Memorandum of Appeal strictly under Order XLI Rule 1(2) CPC: Grounds must be set forth concisely under distinct heads, numbered consecutively, without any argument or narrative. Formulate specific grounds demonstrating: (a) Misreading of oral or documentary evidence; (b) Erroneous casting of burden of proof under the Bharatiya Sakshya Adhiniyam; (c) Failure to consider vital exhibits; (d) Perversity of trial court findings; and (e) Incorrect application of statutory provisions.',
    courtFeesFilingRules: 'Ad-valorem court fee identical to that payable on the plaint, computed on the subject matter of the appeal. Filing through High Court/District Court registry with defect scrutiny.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Procurement of Certified Copies & Limitation Computation',
        governingRule: 'Section 12 Limitation Act & Order XLI Rule 1 CPC',
        actingParty: 'Appellant Advocate',
        description: 'Apply for certified copies of the judgment and decree immediately. Calculate the net limitation period by deducting the time taken by the copying department under Section 12(2) Limitation Act.',
        advocateTips: 'Retain the certified copy receipt slip showing the exact date of application and date when copies were notified as ready.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting Memorandum of Appeal & Order XLI Rule 5 Stay Application',
        governingRule: 'Order XLI Rules 1 & 5 CPC',
        actingParty: 'Appellant & Counsel',
        description: 'Draft the grounds of appeal and file an urgent application under Order XLI Rule 5 CPC for stay of execution of the trial court decree pending appeal.',
        advocateTips: 'Under Order XLI Rule 5(3), stay of a money decree will not be granted unless the appellant furnishes security or deposits the decretal amount.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Registry Scrutiny & Admission Hearing (Rule 11)',
        governingRule: 'Order XLI Rule 11 CPC',
        actingParty: 'Appellate Court & Appellant Counsel',
        description: 'Appellate court hears the appellant on admission under Rule 11. If the appeal has merit, the court admits the appeal, calls for trial court records (TCR / LCR), and issues notice to respondent.',
        advocateTips: 'If the appeal is dismissed summarily under Rule 11, the court must record reasons (Challamane Huchha Gowda ruling).'
      },
      {
        stepNumber: 4,
        stepTitle: 'Hearing on Stay Application & Order of Security',
        governingRule: 'Order XLI Rule 5 CPC',
        actingParty: 'Appellate Court & Both Advocates',
        description: 'Court hears both sides on stay. In money decrees, court directs deposit of 50%–100% of decretal amount in fixed deposit or furnishing solvent bank guarantee as condition of stay.',
        advocateTips: 'Deposit the amount within the time granted to prevent the decree-holder from executing under Order XXI.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Hearing on Facts and Law & Judgment',
        governingRule: 'Order XLI Rules 30–33 CPC',
        actingParty: 'Appellate Court',
        description: 'Court examines trial court records, hears final arguments on points for determination, and pronounces judgment confirming, reversing, varying the decree, or remanding under Rule 23/23A.',
        advocateTips: 'If crucial evidence was improperly excluded by trial court, file an application under Order XLI Rule 27 CPC for production of additional evidence.'
      }
    ],
    hearingAndArguments: 'Appellant counsel demonstrates that the trial judge committed palpable perversity in assessing witness veracity, ignored crucial documentary exhibits, or misapplied settled precedent. Respondent counsel defends the trial court findings as balanced, plausible, and entitled to appellate deference.',
    possibleOutcomes: [
      'Appeal allowed: trial court decree set aside and suit dismissed or decreed as claimed.',
      'Appeal dismissed: trial court decree confirmed with costs.',
      'Partial modification: decretal amount or interest rate reduced.',
      'Order of Remand under Order XLI Rule 23 or 23A directing trial court to re-adjudicate.'
    ],
    appealRevisionRemedy: 'A judgment passed in First Appeal is subject to a Regular Second Appeal under Section 100 CPC before the High Court, strictly on a "substantial question of law".',
    commonPitfalls: [
      'Filing appeal without certified copy of decree (mere judgment copy is insufficient under Order XLI Rule 1).',
      'Failing to deposit decretal amount or furnish security when seeking stay of a money decree under Rule 5.',
      'Drafting grounds in narrative or argumentative form rather than concise numbered points.'
    ],
    practicalScenario: 'A trial court decreed a suit for specific performance directing the defendant to execute a sale deed for prime agricultural land. The defendant filed a Regular First Appeal under Section 96 CPC before the High Court, demonstrating that the plaintiff had never proved readiness and willingness under Section 16(c) Specific Relief Act. The High Court admitted the appeal, stayed the execution under Order XLI Rule 5, re-evaluated the bank balance proofs, and reversed the decree, granting only refund of advance earnest money.',
    caseLaws: [
      {
        title: 'Santosh Hazari v. Purushottam Tiwari',
        citation: '(2001) 3 SCC 179',
        court: 'Supreme Court of India',
        holding: 'The First Appellate Court is the final court of fact and law; it must address all issues raised, discuss the evidence, and record reasons for differing with the trial court findings.'
      },
      {
        title: 'Challamane Huchha Gowda v. M.R. Tirumala',
        citation: '(2004) 1 SCC 453',
        court: 'Supreme Court of India',
        holding: 'Even when an appeal is dismissed at the admission stage under Order XLI Rule 11 CPC, the appellate court should record brief reasons to enable the superior court to understand the basis of dismissal.'
      }
    ],
    faqs: [
      {
        q: 'Can the First Appellate Court admit fresh evidence not produced before the trial court?',
        a: 'Yes, but only under the strict conditions of Order XLI Rule 27 CPC: where trial court improperly refused evidence, or party establishes due diligence, or appellate court requires the document to pronounce judgment.'
      },
      {
        q: 'Does filing an appeal automatically stay the execution of the trial court decree?',
        a: 'No. Under Order XLI Rule 5(1) CPC, an appeal does not operate as an automatic stay; a specific stay application must be filed and stay granted by the court.'
      }
    ],
    tags: ['appeals-revisions', 'regular first appeal', 'section 96 cpc', 'order 41 cpc', 'stay of execution', 'limitation act', 'civil appeal']
  },

  {
    id: 'proc-appeal-second-appeal-sec-100-cpc',
    slug: 'regular-second-appeal-section-100-cpc-high-court',
    title: 'Regular Second Appeal under Section 100 CPC on Substantial Question of Law',
    category: 'Appeals, Revisions & Quashing',
    actReference: 'Code of Civil Procedure, 1908 — Sections 100, 101, 102 & Order XLII',
    courtForum: 'High Court of the Respective State (Single Judge Bench)',
    estimatedTimeline: 'Admission stage: 1 to 3 months → Final hearing: 1 to 3 years',
    courtFeeLevel: 'Full ad-valorem court fee as paid in the trial court',
    overview: 'A Regular Second Appeal (RSA) under Section 100 CPC is an appellate remedy of limited and specialized scope before the High Court against an appellate decree passed by a District Court. Unlike the First Appeal, a Second Appeal does not lie on findings of fact, however erroneous they may be. Under Section 100(1) CPC, a Second Appeal is maintainable strictly if and only if the High Court is satisfied that the case involves a "substantial question of law" (Sir Chunilal Mehta v. Century Spinning & Nazir Mohamed v. J. Kamala). The High Court must explicitly formulate the substantial question of law at the admission stage under Section 100(4).',
    legalBasis: 'Sections 100, 101 (second appeal on no other grounds), 102 (no second appeal in money suits below ₹25,000), 103 (power to determine issue of fact), and Order XLII CPC.',
    locusStandi: 'Party aggrieved by the appellate decree passed by the District Court or Subordinate Appellate Court.',
    prerequisites: [
      'An appellate decree passed by a civil court subordinate to the High Court.',
      'Involvement of a substantial question of law that is debatable, not settled by statute or binding precedent, and materially affects the outcome.',
      'Clear formulation of the proposed substantial questions of law in the Memorandum of Appeal.',
      'Certified copies of both the trial court judgment/decree and first appellate court judgment/decree.',
      'Suit must not be for recovery of money where value of subject matter does not exceed ₹25,000 (Section 102 CPC).'
    ],
    statutoryLimitation: '90 days under Article 116(a) of the Limitation Act, 1963, commencing from the date of the appellate decree (excluding copying time).',
    mandatoryDocuments: [
      'Memorandum of Second Appeal setting forth proposed Substantial Questions of Law prominently.',
      'Certified Copy of the First Appellate Court Judgment and Decree.',
      'Certified Copy of the Trial Court Judgment and Decree.',
      'Application for Stay of Execution under Order XLI Rule 5 read with Order XLII CPC.',
      'Application under Section 5 Limitation Act for condonation of delay (if applicable).',
      'Court fee receipts / judicial stamps.',
      'Vakalatnama executed by the Appellant.'
    ],
    draftingGuidance: 'Draft the Memorandum of Second Appeal with paramount focus on the "Substantial Questions of Law": (1) Place the proposed questions immediately after the cause title; (2) Frame questions sharply (e.g. "Whether the First Appellate Court committed grave perversity in reversing a concurrent finding on registered partition deed by relying on inadmissible oral hearsay contrary to Section 91/92 Evidence Act?"); (3) Avoid factual questions; (4) Emphasize that finding of fact is vitiated by total absence of evidence or non-consideration of vital statutory presumptions.',
    courtFeesFilingRules: 'Ad-valorem court fee as per State Court Fees Act. Filing through High Court Registry filing counter or e-Filing portal with defect scrutiny.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Formulation of Substantial Questions of Law',
        governingRule: 'Section 100(3) CPC & Chunilal Mehta Test',
        actingParty: 'Appellant Counsel',
        description: 'Scrutinize judgments of both lower courts. Identify where the appellate court misconstrued documents of title, acted without evidence, or ignored binding Supreme Court rulings.',
        advocateTips: 'A question of law is "substantial" if it directly and substantially affects the rights of the parties and is an open, debatable question (Sir Chunilal Mehta ruling).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Filing in High Court Registry & Defect Clearance',
        governingRule: 'Order XLII Rule 1 CPC & High Court Rules',
        actingParty: 'Appellant Advocate',
        description: 'File Memorandum of Appeal with certified copies of both lower court decrees. Registry scrutinizes compliance of Section 100 and verifies court fees.',
        advocateTips: 'Ensure that certified copies of both trial court and first appellate court decrees are annexed.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Admission Hearing & Framing of Substantial Questions',
        governingRule: 'Section 100(4) CPC',
        actingParty: 'High Court Judge & Appellant Counsel',
        description: 'Counsel argues admission. If satisfied, the High Court admits the appeal and formulates the specific substantial question(s) of law in its order sheet.',
        advocateTips: 'If the High Court does not formulate substantial questions of law, the appeal cannot legally proceed and any final judgment passed will be set aside by the Supreme Court.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Issue of Notice & Interim Stay',
        governingRule: 'Section 100(5) & Order XLI Rule 5 CPC',
        actingParty: 'High Court',
        description: 'Court issues notice to respondent on the formulated questions of law, stays the execution of the lower court decree, and calls for lower court records (LCR).',
        advocateTips: 'Ensure stay order is communicated to the executing court immediately to prevent delivery of possession or sale of property.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Hearing on Formulated Questions of Law',
        governingRule: 'Section 100(5) CPC',
        actingParty: 'High Court & Both Counsel',
        description: 'At the hearing, respondent may argue that the question formulated is not a substantial question of law. The court hears arguments strictly on the formulated questions.',
        advocateTips: 'Under the proviso to Section 100(5), the High Court can hear the appeal on any other substantial question of law not formulated earlier, for reasons to be recorded.'
      }
    ],
    hearingAndArguments: 'Appellant counsel argues that the findings of the first appellate court are vitiated by perversity, misconstruction of title documents, or gross statutory violations. Respondent counsel argues that the lower court findings are pure questions of fact based on appreciation of evidence, and that the High Court cannot sit as a third trial court.',
    possibleOutcomes: [
      'Appeal allowed: substantial question of law answered in favor of appellant and decree modified/reversed.',
      'Appeal dismissed: finding of lower court upheld.',
      'Remand to First Appellate Court to re-decide in light of legal principles settled by High Court.'
    ],
    appealRevisionRemedy: 'A judgment passed in Second Appeal by the High Court can only be challenged before the Supreme Court of India via a Special Leave Petition (SLP) under Article 136 of the Constitution.',
    commonPitfalls: [
      'Drafting grounds that challenge concurrent findings of fact rather than pure substantial questions of law.',
      'Failing to formulate proposed questions of law prominently in the memorandum of appeal.',
      'Filing second appeal where subject matter is a money recovery below ₹25,000 (barred by Section 102 CPC).'
    ],
    practicalScenario: 'In a dispute over ancestral property, the First Appellate Court reversed the trial court decree and held an unregistered gift deed valid to transfer immoveable property worth ₹40 Lakhs. The appellant approached the High Court under Section 100 CPC. The High Court formulated the substantial question of law: "Whether the First Appellate Court committed illegality in recognizing transfer of title through an unregistered gift deed contrary to Section 123 Transfer of Property Act and Section 17 Registration Act?" The High Court answered the question in the negative, held the deed void, and restored the trial court decree.',
    caseLaws: [
      {
        title: 'Nazir Mohamed v. J. Kamala',
        citation: '(2020) 19 SCC 57',
        court: 'Supreme Court of India',
        holding: 'Reiterated that the existence of a "substantial question of law" is the sine qua non for exercising jurisdiction under Section 100 CPC; the High Court cannot re-appreciate evidence to arrive at a different factual finding unless the lower court finding is perverse or based on no evidence.'
      },
      {
        title: 'Sir Chunilal V. Mehta and Sons Ltd. v. Century Spinning & Mfg. Co. Ltd.',
        citation: '1962 Supp (3) SCR 549 (Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'The proper test for determining whether a question of law is "substantial" is whether it directly and substantially affects the rights of the parties, is an open question not settled by the highest court, or is not free from difficulty.'
      }
    ],
    faqs: [
      {
        q: 'Can the High Court entertain a Second Appeal on pure questions of fact?',
        a: 'No. Under Section 100 CPC, concurrent findings of fact are binding on the High Court unless proved to be perverse or based on zero evidence.'
      },
      {
        q: 'Is the High Court required to formulate the substantial question of law in its order?',
        a: 'Yes. Section 100(4) CPC mandates that the High Court must formulate the substantial question of law before hearing the appeal.'
      }
    ],
    tags: ['appeals-revisions', 'second appeal', 'section 100 cpc', 'substantial question of law', 'high court', 'order 42 cpc']
  },

  {
    id: 'proc-appeal-criminal-appeal-bnss',
    slug: 'criminal-appeal-conviction-acquittal-section-415-419-bnss',
    title: 'Criminal Appeal against Conviction / Acquittal under Sections 415 & 419 BNSS',
    category: 'Appeals, Revisions & Quashing',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 415, 416, 419, 421 & 430 (Old CrPC 374, 375, 378, 382 & 389)',
    courtForum: 'Sessions Court (against Magistrate conviction) / High Court (against Sessions conviction or for acquittal appeal)',
    estimatedTimeline: 'Suspension of sentence hearing: 1 to 7 days → Appeal disposal: 6 months to 2 years',
    courtFeeLevel: 'Nil or nominal court fee stamp (₹10–₹25) + Vakalatnama stamp',
    overview: 'A Criminal Appeal is a substantive statutory creation that allows an accused convicted of a criminal offence to challenge both the conviction and the sentence before a superior court. Governed by Sections 415 and 416 BNSS (Old Sec 374 CrPC), an appeal against a Magistrate conviction lies to the Sessions Court, while an appeal against a Sessions Court conviction where imprisonment exceeds 7 years lies to the High Court. Section 430 BNSS (Old Sec 389 CrPC) provides the crucial companion remedy: Application for Suspension of Sentence and Bail pending appeal. Section 419 BNSS empowers the State and Victim to appeal against acquittal.',
    legalBasis: 'Sections 415 (Appeals from convictions), 416 (No appeal in certain cases when accused pleads guilty), 419 (Appeal in case of acquittal), 421 (Petition of appeal), 427 (Powers of Appellate Court), and 430 (Suspension of sentence pending appeal and release of appellant on bail) of BNSS 2023.',
    locusStandi: 'Convicted person against conviction/sentence. In acquittal appeals: Public Prosecutor with leave of High Court under Section 419(1)/(3), or Victim under Section 419 Proviso.',
    prerequisites: [
      'A formal judgment of conviction and sentence passed by a criminal court.',
      'Certified copy of the judgment of conviction and sentencing order.',
      'Custody Certificate or proof of surrender in jail, or trial court grant of interim bail under Section 430(3) BNSS for sentences under 3 years.',
      'Filing within statutory limitation period under Limitation Act (Articles 114 & 115).'
    ],
    statutoryLimitation: '30 days under Article 115(b) Limitation Act for appeal to Sessions Court; 60 days under Article 115(a) for appeal to High Court; 90 days for appeal against death sentence (Art. 115(a)). For acquittal appeals: 60 to 90 days under Section 419(5) BNSS.',
    mandatoryDocuments: [
      'Petition of Criminal Appeal under Section 415/421 BNSS setting forth specific grounds.',
      'Certified Copy of the impugned Judgment of Conviction and Order on Sentence.',
      'Application under Section 430 BNSS (Old Sec 389 CrPC) for Suspension of Sentence and Grant of Bail.',
      'Custody Certificate issued by the Jail Superintendent showing sentence served.',
      'Application for Condonation of Delay under Section 5 Limitation Act (if filed beyond limitation).',
      'Vakalatnama executed by the Convict or Pairokar.'
    ],
    draftingGuidance: 'The Criminal Appeal Petition must distinctly articulate: (1) Summary of prosecution allegations; (2) Detailed critique of prosecution witnesses pointing out major discrepancies between Section 180 BNSS statements and court depositions; (3) Failure to prove chain of circumstances; (4) Total disregard of defense witnesses or Section 351 BNSS statement; (5) In the Section 430 BNSS stay application, plead that the appellant was on bail during trial, did not misuse liberty, that the sentence is of fixed duration, and that appeal hearing will take years.',
    courtFeesFilingRules: 'No court fees are payable by convicts lodged in jail under Section 19(xvii) Court Fees Act. Free legal aid appeal can be filed through High Court / DLSA Legal Services Committee.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Procurement of Judgment, Sentence Order & Trial Bail Extension',
        governingRule: 'Section 430(3) BNSS (Old Sec 389(3) CrPC)',
        actingParty: 'Trial Court & Defense Advocate',
        description: 'Where sentence does not exceed 3 years, apply immediately before the trial court under Section 430(3) BNSS for suspension of sentence to enable the convict to file appeal within 30 days.',
        advocateTips: 'If trial court grants 30 days bail, ensure the appeal is lodged and listed before the appellate court before that 30-day window expires.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting Petition of Appeal & Section 430 BNSS Suspension Application',
        governingRule: 'Sections 421 & 430 BNSS',
        actingParty: 'Appellate Counsel',
        description: 'Draft the criminal appeal petition along with an urgent application for suspension of sentence and bail. Annex certified copy of judgment and custody certificate.',
        advocateTips: 'Highlight that the convict has roots in society and that prolonged incarceration pending appeal violates Article 21 (Bihari Prasad Soni ruling).'
      },
      {
        stepNumber: 3,
        stepTitle: 'Urgent Hearing on Admission & Suspension of Sentence',
        governingRule: 'Sections 425 & 430 BNSS',
        actingParty: 'Appellate Court & Public Prosecutor',
        description: 'Appellate court considers admission under Section 425 BNSS and hears the application for suspension of sentence. Notice is served on the State.',
        advocateTips: 'In fixed-term sentences (e.g. 3 to 7 years), suspension of sentence is the normal rule unless exceptional circumstances exist (Kashmira Singh v. State of Punjab).'
      },
      {
        stepNumber: 4,
        stepTitle: 'Furnishing Bail Bonds & Release from Custody',
        governingRule: 'Sections 430 & 485 BNSS',
        actingParty: 'Convict, Sureties & Court Registry',
        description: 'Upon grant of suspension, the convict executes bail bonds with solvent local sureties either before the appellate court or the trial court, securing immediate release.',
        advocateTips: 'Ensure bail conditions (e.g. reporting to police station, deposit of fine) are scrupulously fulfilled.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Hearing of Appeal & Adjudication',
        governingRule: 'Section 427 BNSS (Old Sec 386 CrPC)',
        actingParty: 'Appellate Court',
        description: 'Appellate court calls for Trial Court Records, hears full arguments on evidence, and may: (a) Reverse conviction and acquit; (b) Alter the finding while maintaining sentence; (c) Reduce sentence; (d) Order a retrial.',
        advocateTips: 'Scrutinize medical and ballistic reports during final hearing to establish reasonable doubt.'
      }
    ],
    hearingAndArguments: 'Appellate defense counsel demonstrates prosecution failure to establish guilt beyond reasonable doubt, serious contradictions in eye-witness testimony, and lack of independent corroboration. Public Prosecutor argues that minor discrepancies do not vitiate the conviction and that trial court findings deserve deference.',
    possibleOutcomes: [
      'Conviction reversed and appellant acquitted of all charges with immediate discharge of bail bonds.',
      'Sentence reduced to period already undergone, or altered to a lesser penal section.',
      'Appeal dismissed and conviction/sentence confirmed; appellant surrendered to serve sentence.',
      'Retrial ordered under Section 427 BNSS in exceptional cases of procedural invalidity.'
    ],
    appealRevisionRemedy: 'An appellate judgment passed by the Sessions Court is subject to Criminal Revision before the High Court under Section 438/442 BNSS. An appellate judgment of the High Court is challengeable before the Supreme Court under Article 134 or Article 136 (SLP).',
    commonPitfalls: [
      'Failing to file Section 430 BNSS suspension application simultaneously with the appeal petition.',
      'Allowing the 30-day trial court interim bail under Section 430(3) to lapse without obtaining appellate stay, resulting in arrest warrants.',
      'Failing to deposit the fine amount awarded by the trial court, which may bar release on bail.'
    ],
    practicalScenario: 'A professional was convicted by a Magistrate under Section 318(4) BNS (cheating) and sentenced to 2 years imprisonment with fine. The trial court granted 30 days bail under Section 430(3) BNSS. Counsel drafted a Criminal Appeal under Section 415 BNSS before the Sessions Court along with a Section 430 application. On Day 7, the Sessions Judge admitted the appeal, suspended the sentence pending appeal, and released the appellant on personal bond of ₹25,000.',
    caseLaws: [
      {
        title: 'Kashmira Singh v. State of Punjab',
        citation: '(1977) 4 SCC 291',
        court: 'Supreme Court of India',
        holding: 'Where an appeal against conviction cannot be heard within a reasonable time, suspension of sentence and grant of bail should ordinarily be allowed, as no person should be subjected to incarceration if their conviction may ultimately be set aside.'
      },
      {
        title: 'Babu v. State of Kerala',
        citation: '(2010) 9 SCC 189',
        court: 'Supreme Court of India',
        holding: 'In an appeal against acquittal under Section 378 CrPC (now Section 419 BNSS), the appellate court has full power to review evidence, but must bear in mind that the presumption of innocence is reinforced by the order of acquittal; interference is warranted only if findings are perverse.'
      }
    ],
    faqs: [
      {
        q: 'Can a convicted person get bail pending appeal as a matter of right?',
        a: 'No. Suspension of sentence under Section 430 BNSS is discretionary, but in fixed-term sentences bail is normally granted if the appellant was on bail during trial.'
      },
      {
        q: 'Can an appeal be filed if the accused pleaded guilty before the trial court?',
        a: 'Under Section 416 BNSS, no appeal lies where the accused pleaded guilty and was convicted on such plea, except as to the extent or legality of the sentence.'
      }
    ],
    tags: ['appeals-revisions', 'criminal appeal', 'section 415 bnss', 'suspension of sentence', 'section 430 bnss', 'crpc 374', 'crpc 389']
  },

  {
    id: 'proc-appeal-criminal-revision-bnss',
    slug: 'criminal-revision-petition-section-438-442-bnss',
    title: 'Criminal Revision Petition under Sections 438 & 442 BNSS before Sessions / High Court',
    category: 'Appeals, Revisions & Quashing',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 438, 440, 442 & 444 (Old CrPC 397, 399, 401 & 403)',
    courtForum: 'Court of Session / High Court (Concurrent jurisdiction, but Sessions Court must be approached first)',
    estimatedTimeline: 'Urgent stay of proceedings: 1 to 5 days → Final revision disposal: 3 to 8 months',
    courtFeeLevel: '₹10 - ₹50 Court fee stamp + Vakalatnama stamp',
    overview: 'A Criminal Revision under Section 438 BNSS (Old Sec 397 CrPC) is a supervisory judicial remedy empowering the High Court or Sessions Judge to examine the record of any inferior criminal court for the purpose of satisfying itself as to the "correctness, legality or propriety" of any finding, sentence, or order, and as to the regularity of any proceedings. The revision court does not act as an appellate court to re-weigh evidence, but intervenes to rectify patent illegalities, jurisdictional errors, and perversity. Crucially, Section 438(2) BNSS bars revision against "interlocutory orders" (Madhu Limaye v. State of Maharashtra & Asian Resurfacing).',
    legalBasis: 'Sections 438 (Calling for records to exercise powers of revision), 440 (Sessions Judge powers of revision), 442 (High Court powers of revision), and 438(2) (Bar on interlocutory orders) of BNSS 2023.',
    locusStandi: 'Any party aggrieved by an order passed by an inferior criminal court (accused, complainant, or victim), or the revisional court acting suo motu.',
    prerequisites: [
      'The impugned order must be a "final order" or an "intermediate order" that terminates proceedings or affects vital rights; it must NOT be an interlocutory order.',
      'No appeal must lie against the impugned order (Section 442(4) BNSS: where an appeal lies and no appeal is brought, no revision can be entertained at the instance of that party).',
      'The applicant must not have previously invoked the revision jurisdiction before the Sessions Judge and then approached the High Court on the same order (Section 438(3) BNSS bars second revision).',
      'Procurement of Certified Copy of the impugned order.'
    ],
    statutoryLimitation: '90 days under Article 131 of the Limitation Act, 1963, commencing from the date of the impugned order (excluding copying time).',
    mandatoryDocuments: [
      'Criminal Revision Petition under Section 438 read with Section 442 BNSS.',
      'Certified Copy of the impugned Order passed by the lower criminal court.',
      'Application for Stay of Lower Court Proceedings with supporting affidavit.',
      'Trial court order sheets, complaint, and application on which impugned order was passed.',
      'Application under Section 5 Limitation Act for condonation of delay (if filed beyond 90 days).',
      'Vakalatnama executed by the Petitioner.'
    ],
    draftingGuidance: 'The Revision Petition must strictly tackle the interlocutory bar: In Preliminary Submissions, establish that the order is an "intermediate order" affecting substantial rights (e.g. dismissal of discharge, summoning order, refusal to send complaint to police) relying on Madhu Limaye and Asian Resurfacing. Clearly frame grounds attacking: (1) Inherent lack of jurisdiction; (2) Patent illegality on the face of the record; (3) Complete non-application of judicial mind; and (4) Serious procedural irregularity causing failure of justice.',
    courtFeesFilingRules: 'Affix court fee stamps of ₹10–₹50 on the revision petition along with Welfare Fund stamps.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Ascertaining Maintainability & Interlocutory Bar Check',
        governingRule: 'Section 438(2) BNSS & Madhu Limaye Test',
        actingParty: 'Petitioner Advocate',
        description: 'Verify whether the order is purely interlocutory (adjournment, framing of charge, witness summons) or intermediate (discharge rejection, summoning, bail cancellation). If intermediate, proceed with revision.',
        advocateTips: 'If the order is purely interlocutory, file a petition under Section 528 BNSS (inherent powers) rather than revision under Section 438.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Filing Revision Petition & Urgent Stay Application',
        governingRule: 'Section 438 & 442 BNSS',
        actingParty: 'Petitioner & Counsel',
        description: 'Lodge petition before the Sessions Court (or High Court) with stay application. Serve advance copy on the Public Prosecutor / Standing Counsel.',
        advocateTips: 'Where Sessions Court and High Court have concurrent jurisdiction, customary practice requires approaching the Sessions Court first.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Urgent Motion Hearing & Stay of Trial Proceedings',
        governingRule: 'Section 438(1) BNSS',
        actingParty: 'Revisional Judge & Counsel',
        description: 'Argue urgent motion. If court finds patent illegality, it calls for lower court records (LCR), stays lower court proceedings, and issues notice to respondent.',
        advocateTips: 'Under the 2024 SC ruling in High Court Bar Association Allahabad v. State of UP, stays do not automatically expire after 6 months; express vacation order is required.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Filing Reply / Counter-Affidavit by Respondent',
        governingRule: 'Section 442 BNSS & Natural Justice',
        actingParty: 'Respondent / Public Prosecutor',
        description: 'Respondent enters appearance, files reply contesting the revision, asserting that the order is interlocutory and does not suffer from any jurisdictional error.',
        advocateTips: 'Verify whether Section 438(3) applies: if respondent proves petitioner already exhausted revision before Sessions, second revision is barred.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Hearing on Correctness, Legality & Propriety',
        governingRule: 'Sections 440 & 442 BNSS',
        actingParty: 'Revisional Court',
        description: 'Revisional court hears final arguments, examines lower court record, and may set aside the order, direct further inquiry, or remand for fresh consideration.',
        advocateTips: 'Under Section 442(3) BNSS, the revision court has no power to convert a finding of acquittal into one of conviction.'
      }
    ],
    hearingAndArguments: 'Petitioner counsel argues that the magistrate acted wholly without jurisdiction, ignored statutory preconditions, or committed a patent error of law resulting in miscarriage of justice. Respondent counsel argues the order is interlocutory, revision is barred by Section 438(2), and no prejudice is caused.',
    possibleOutcomes: [
      'Revision allowed: impugned order set aside and proceedings terminated or remanded.',
      'Revision dismissed: lower court order confirmed and trial directed to proceed.',
      'Partial modification of order or directions issued for expeditious disposal.'
    ],
    appealRevisionRemedy: 'Under Section 438(3) BNSS, no second revision lies before the High Court if the Sessions Court has already dismissed the revision. The only remedy against a Sessions revision dismissal is a petition under Section 528 BNSS (inherent powers) or Article 227 before the High Court.',
    commonPitfalls: [
      'Filing revision against a pure interlocutory order (e.g. order rejecting an adjournment), which is barred by Section 438(2).',
      'Filing a second revision before the High Court after dismissal by the Sessions Court, violating Section 438(3).',
      'Failing to pray for stay of trial court proceedings, resulting in the main trial concluding before the revision is heard.'
    ],
    practicalScenario: 'A Magistrate took cognizance of a criminal defamation complaint against an editor without conducting the mandatory inquiry under Section 225 BNSS (Old Sec 202 CrPC) despite the editor residing outside the territorial jurisdiction. The editor filed a Criminal Revision under Section 438 BNSS before the Sessions Judge. The Sessions Court held that non-compliance with the mandatory inquiry is a jurisdictional illegality that vitiates process, allowed the revision, set aside the summoning order, and remanded the matter for compliance with law.',
    caseLaws: [
      {
        title: 'Madhu Limaye v. State of Maharashtra',
        citation: '(1977) 4 SCC 551',
        court: 'Supreme Court of India',
        holding: 'The bar on interlocutory orders in Section 397(2) CrPC (now Section 438(2) BNSS) does not apply to "intermediate orders"—orders that are neither final nor purely interlocutory, and which, if decided in favor of the accused, would terminate the proceedings.'
      },
      {
        title: 'High Court Bar Association, Allahabad v. State of U.P.',
        citation: '(2024) 6 SCC 267 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Overruled Asian Resurfacing; held that stay orders granted by High Courts or Sessions Courts do not automatically expire after 6 months; automatic vacation of stay without judicial application of mind violates judicial independence.'
      }
    ],
    faqs: [
      {
        q: 'Can a Criminal Revision be filed against an order framing charges?',
        a: 'Generally no, because an order framing charges is considered an interlocutory order, unless there is a patent lack of jurisdiction or statutory bar (Asian Resurfacing & Sanjay Kumar Rai).'
      },
      {
        q: 'Can the High Court convert an acquittal into a conviction in revision?',
        a: 'No. Section 442(3) BNSS explicitly prohibits the revisional court from converting a finding of acquittal into one of conviction.'
      }
    ],
    tags: ['appeals-revisions', 'criminal revision', 'section 438 bnss', 'crpc 397', 'madhu limaye', 'interlocutory order bar', 'supervisory jurisdiction']
  },

  {
    id: 'proc-appeal-quashing-fir-528-bnss',
    slug: 'quashing-fir-criminal-complaint-section-528-bnss-high-court',
    title: 'Quashing of FIR / Criminal Complaint under Section 528 BNSS (Old Sec 482 CrPC)',
    category: 'Appeals, Revisions & Quashing',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 528 (Old CrPC Section 482) & Article 226',
    courtForum: 'High Court of Respective State (Single Judge / Division Bench)',
    estimatedTimeline: 'Urgent stay of coercive steps: 1 to 3 days → Final quashing: 3 to 12 months',
    courtFeeLevel: '₹100 - ₹500 Court fee stamp as per High Court Writ/Criminal Rules',
    overview: 'Section 528 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 482 CrPC) preserves the plenary inherent powers of the High Court to make such orders as may be necessary to give effect to any order under the Code, prevent abuse of the process of any court, or otherwise secure the ends of justice. It is the premier constitutional and statutory shield against malicious, vexatious, or fabricated criminal prosecutions. The High Court exercises this power under the foundational principles crystallized in State of Haryana v. Bhajan Lal and Neeharika Infrastructure to quash FIRs, chargesheets, and criminal complaints.',
    legalBasis: 'Section 528 BNSS (Saving of inherent powers of High Court); read with Article 226 of the Constitution of India; and landmark Bhajan Lal guidelines (1992 Supp (1) SCC 335).',
    locusStandi: 'Accused person named in an FIR, chargesheet, or private criminal complaint, seeking quashing of the criminal proceedings to prevent abuse of judicial process.',
    prerequisites: [
      'An existing FIR registered by police, or a private complaint pending before a Magistrate, or a chargesheet filed under Section 193 BNSS.',
      'The case must fall within one of the established categories in Bhajan Lal (e.g. allegations taken at face value do not constitute any offence, or dispute is purely civil, or prosecution is manifestly attended with mala fides).',
      'Demonstration of uncontroverted unimpeachable documentary evidence, or compromise entered between the parties in non-heinous offences (Gian Singh v. State of Punjab).',
      'Clean hands and complete disclosure of all pending proceedings.'
    ],
    statutoryLimitation: 'No formal limitation period; can be invoked at any stage from FIR registration to post-chargesheet. However, prompt filing is critical before charges are formally framed by the trial court.',
    mandatoryDocuments: [
      'Petition under Section 528 BNSS / Section 482 CrPC in the form of a formal High Court petition.',
      'Certified copy of the FIR / Criminal Complaint / Chargesheet sought to be quashed.',
      'Application for Interim Relief (Stay of Arrest / Stay of Investigation / Stay of Trial Court Proceedings) with affidavit.',
      'Uncontroverted documentary evidence establishing false implication (agreements, emails, bank logs, alibi proofs).',
      'Compromise Deed / Settlement Agreement & Affidavits of Complainant/Victim (if quashing on ground of compromise).',
      'Affidavit of the Petitioner verifying all factual averments.',
      'Vakalatnama with Advocate Welfare Stamps.'
    ],
    draftingGuidance: 'Structure the petition methodically around the Seven Golden Rules of Bhajan Lal: (1) Recite that even if all allegations in the FIR are accepted as gospel truth, no cognizable offence is disclosed; (2) Show how a purely commercial or contractual dispute is disguised as a criminal offence of cheating/breach of trust; (3) Highlight that the complainant omitted material facts; (4) Cite specific Bhajan Lal categories in the grounds; (5) If quashing on compromise, plead Gian Singh and Narinder Singh principles; (6) Frame specific prayers seeking quashing of the FIR, investigation, and all consequential proceedings.',
    courtFeesFilingRules: 'High Court criminal petition court fee stamp (₹100–₹500 depending on High Court Rules) + Process fees for serving complainant and State.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Petition under Section 528 BNSS in High Court',
        governingRule: 'Section 528 BNSS & High Court Criminal Rules',
        actingParty: 'Petitioner / Advocate',
        description: 'Lodge petition at High Court filing counter. Serve advance copy on the State Standing Counsel / Public Prosecutor and Complainant.',
        advocateTips: 'If client faces imminent arrest, simultaneously apply for interim protection ("no coercive steps") under Neeharika Infrastructure guidelines.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Urgent Motion Listing & Interim Protection Hearing',
        governingRule: 'Section 528 BNSS & Neeharika Guidelines',
        actingParty: 'High Court Judge & Both Counsel',
        description: 'Counsel argues that allegations do not disclose any offence. High Court issues notice, calls for Case Diary from IO, and may grant interim protection against arrest or stay of trial proceedings.',
        advocateTips: 'SC in Neeharika held that blanket "no arrest" orders without reasons are impermissible; demonstrate why the FIR is a complete abuse of process.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Filing of Status Report / Case Diary by State',
        governingRule: 'Section 528 BNSS',
        actingParty: 'State Public Prosecutor & IO',
        description: 'Investigating Officer files a sworn Status Report detailing evidence collected so far and explaining whether a prima facie case exists.',
        advocateTips: 'Examine the Status Report to see if police have recovered any incriminating material; if not, emphasize lack of progress in oral arguments.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Quashing on Compromise Hearing (If Settlement Reached)',
        governingRule: 'Gian Singh & Narinder Singh Principles',
        actingParty: 'Complainant, Accused & High Court',
        description: 'In matrimonial (Section 85/86 BNS / 498A IPC) or commercial disputes where parties have settled, both parties appear before the High Court or Registrar to verify the compromise.',
        advocateTips: 'High Courts will not quash heinous offences (murder, rape, dacoity) on compromise, but routinely quash private, commercial, and matrimonial disputes.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Hearing & Quashing Judgment',
        governingRule: 'Section 528 BNSS & Bhajan Lal Doctrine',
        actingParty: 'High Court',
        description: 'High Court delivers judgment. If it finds the prosecution is an abuse of process or civil dispute disguised as crime, it quashes the FIR, chargesheet, and all consequential proceedings.',
        advocateTips: 'Obtain certified copy of the quashing judgment immediately and submit to the trial magistrate to close the judicial file and release surety bonds.'
      }
    ],
    hearingAndArguments: 'Petitioner counsel proves that the dispute is civil in nature, contractual remedies exist, and the criminal complaint was filed maliciously to exert pressure. State and Complainant counsel argue that investigation is at a nascent stage, prima facie cognizable ingredients are present, and the court cannot conduct a mini-trial under Section 528 BNSS.',
    possibleOutcomes: [
      'FIR, Chargesheet, and all consequential proceedings quashed in their entirety.',
      'Quashed on compromise between the parties with exemplary costs/donation to legal aid.',
      'Petition dismissed: interim protection vacated and police permitted to conclude investigation.',
      'Liberty granted to raise all grounds before the trial court at the stage of discharge.'
    ],
    appealRevisionRemedy: 'A judgment of the High Court under Section 528 BNSS / Section 482 CrPC is challengeable before the Supreme Court of India via a Special Leave Petition (SLP Criminal) under Article 136 of the Constitution.',
    commonPitfalls: [
      'Filing disputed defense documents that require cross-examination and cannot be evaluated in quashing jurisdiction.',
      'Filing quashing petition after charges have already been framed and trial is substantially advanced.',
      'Seeking to quash serious heinous offences (POCSO, rape, murder) based on private compromise.'
    ],
    practicalScenario: 'A software company entered into a service contract with a vendor. Due to delayed milestones, the company terminated the agreement. The vendor lodged an FIR for cheating under Section 318(4) BNS against the CEO and directors. The CEO filed a Section 528 BNSS petition before the High Court annexing the email correspondence and arbitration clause. The High Court, applying Bhajan Lal and Indian Oil Corp v. NEPC India, held that a breach of contract cannot be converted into criminal cheating, held the FIR to be an abuse of process, and quashed the FIR.',
    caseLaws: [
      {
        title: 'State of Haryana v. Bhajan Lal',
        citation: '1992 Supp (1) SCC 335',
        court: 'Supreme Court of India',
        holding: 'Laid down the seven illustrative categories where the High Court can exercise its inherent powers under Section 482 CrPC (now Section 528 BNSS) to quash an FIR or complaint, including where allegations do not disclose any offence, or where the prosecution is manifestly attended with mala fides.'
      },
      {
        title: 'Neeharika Infrastructure Pvt. Ltd. v. State of Maharashtra',
        citation: '(2021) 19 SCC 401 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'High Courts must exercise circumspection when quashing FIRs; police statutory right to investigate cognizable offences should not be thwarted routinely; courts should not pass interim orders of "no coercive steps" without assigning recorded reasons.'
      },
      {
        title: 'Gian Singh v. State of Punjab',
        citation: '(2012) 10 SCC 303 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'High Court can quash criminal proceedings in non-heinous offences (commercial, commercial, matrimonial, property disputes) where the parties have settled their disputes and continuation of trial would be an exercise in futility.'
      }
    ],
    faqs: [
      {
        q: 'Can an FIR be quashed if a chargesheet has already been filed by the police?',
        a: 'Yes. The petitioner can amend the Section 528 BNSS petition to challenge both the FIR and the consequential chargesheet (Anand Kumar Mohatta v. State).'
      },
      {
        q: 'Can the High Court evaluate the reliability of evidence under Section 528 BNSS?',
        a: 'No. The High Court cannot conduct a mini-trial or appreciate disputed facts; it must evaluate whether the allegations on their face disclose an offence.'
      }
    ],
    tags: ['appeals-revisions', 'quashing fir', 'section 528 bnss', 'crpc 482', 'bhajan lal', 'neeharika infrastructure', 'inherent powers', 'high court']
  }
];
