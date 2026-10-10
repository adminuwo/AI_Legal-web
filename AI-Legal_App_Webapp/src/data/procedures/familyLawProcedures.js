// ─── FAMILY LAW & MATRIMONIAL LITIGATION PROCEDURES ──────────────────────────
// Authoritative workflows under Hindu Marriage Act, BNSS and Domestic Violence Act

export const FAMILY_LAW_PROCEDURES = [
  {
    id: 'proc-family-mutual-consent-divorce',
    slug: 'mutual-consent-divorce-section-13b-hindu-marriage-act',
    title: 'Mutual Consent Divorce under Section 13B Hindu Marriage Act (First & Second Motion & Cooling-Off Waiver)',
    category: 'Family & Matrimonial Procedures',
    actReference: 'Hindu Marriage Act, 1955 — Section 13B & Family Courts Act, 1984',
    courtForum: 'Family Court (Principal Judge / Judge Family Court) having Territorial Jurisdiction',
    estimatedTimeline: 'Standard: 6 to 18 months → With cooling-off waiver under Amardeep Singh: 1 to 2 weeks',
    courtFeeLevel: 'Fixed court fee stamp (₹15 - ₹50) + Process fees',
    overview: 'Mutual Consent Divorce under Section 13B of the Hindu Marriage Act, 1955 is the statutory mechanism for dissolving a marriage by bilateral agreement between husband and wife without casting fault or acrimony. The procedure requires proof that the spouses have lived separately for at least one year and cannot live together. It consists of two distinct stages: First Motion (Joint Petition under Section 13B(1)) and Second Motion (Joint Petition under Section 13B(2)) after a statutory 6-month cooling-off period. Under the landmark Supreme Court ruling in Amardeep Singh v. Harveen Kaur, the 6-month cooling-off period is directory and can be waived by the Family Court where parties have settled all disputes.',
    legalBasis: 'Section 13B(1) & (2) Hindu Marriage Act, 1955; Family Courts Act, 1984 (Sections 9 & 19); read with Amardeep Singh v. Harveen Kaur (2017) 8 SCC 746 and Shilpa Sailesh v. Varun Sreenivasan (2023) 7 SCC 633 (Article 142 direct dissolution).',
    locusStandi: 'Both spouses (Husband and Wife) jointly presenting the petition before the competent Family Court.',
    prerequisites: [
      'Both parties were legally married under the Hindu Marriage Act, 1955.',
      'Spouses have been living separately for a continuous period of at least one year immediately preceding the presentation of the petition.',
      'Spouses have not been able to live together and have mutually agreed that the marriage should be dissolved.',
      'Comprehensive Memorandum of Understanding (MoU) / Settlement Deed resolving all issues of permanent alimony, return of Streedhan, and child custody.',
      'Absence of force, fraud, or undue influence; consent must be free and voluntary.'
    ],
    statutoryLimitation: 'Petition can be presented only after one year of separate living. Second Motion must be made not earlier than 6 months and not later than 18 months after the date of presentation of the First Motion (subject to cooling-off waiver).',
    mandatoryDocuments: [
      'Joint Petition under Section 13B(1) HMA signed by both spouses.',
      'Original Marriage Certificate and Marriage Invitation Card / Photographs of wedding ceremonies.',
      'Settlement Deed / Memorandum of Understanding (MoU) detailing alimony and Streedhan terms.',
      'Separate Sworn Affidavits of both spouses verifying mutual consent and separate residence.',
      'Aadhaar Cards / Passports of both spouses establishing identity and address proof.',
      'Photographs of both spouses in passport size.',
      'Application under Section 13B(2) read with Amardeep Singh for waiver of 6-month statutory waiting period.'
    ],
    draftingGuidance: 'Draft the joint petition with transparent clarity: (1) Date and place of solemnization of marriage according to Hindu rites; (2) Date from which parties started living separately (must be more than 1 year); (3) Specific terms of permanent alimony (e.g. "Husband pays ₹35,00,000 in two installments: 50% at First Motion and 50% at Second Motion"); (4) Streedhan clause confirming all gold jewelry and articles have been returned; (5) Child custody and visitation schedule; (6) Reciprocal undertaking to withdraw all pending criminal (Section 85 BNS / 498A IPC, 144 BNSS) and civil complaints upon decree.',
    courtFeesFilingRules: 'Affix nominal court fee stamps of ₹15–₹50 on the joint petition along with advocate welfare stamps.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Execution of Comprehensive Settlement Deed / MoU',
        governingRule: 'Indian Contract Act & Section 13B HMA',
        actingParty: 'Husband, Wife & Respective Advocates',
        description: 'Both spouses execute a notarized MoU resolving all financial claims, permanent alimony, return of Streedhan, child custody, and withdrawal of pending litigations.',
        advocateTips: 'Structure payments such that 50% is handed over via Demand Draft during the First Motion, and the remaining 50% at the Second Motion.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Filing & Recording Statements in First Motion (Sec 13B(1))',
        governingRule: 'Section 13B(1) HMA & Section 9 Family Courts Act',
        actingParty: 'Family Court Judge, Both Spouses & Counsel',
        description: 'File joint petition. Both spouses appear physically before the Family Court Judge. Court conducts conciliation under Section 9, records statements on oath, and passes First Motion order.',
        advocateTips: 'If a party resides abroad, appearance and statement recording via authorized video-conferencing is permitted under High Court VC Rules.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Filing Application for Waiver of 6-Month Cooling-Off Period',
        governingRule: 'Amardeep Singh v. Harveen Kaur Doctrine',
        actingParty: 'Both Spouses & Advocates',
        description: 'After First Motion, file a formal application seeking waiver of the 6-month waiting period under Section 13B(2), demonstrating that parties have lived apart for over 18 months and mediation has ended.',
        advocateTips: 'The court can waive the 6-month period if satisfied that all alimony has been paid, custody is settled, and waiting will only prolong marital agony.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Recording of Statements in Second Motion (Sec 13B(2))',
        governingRule: 'Section 13B(2) HMA',
        actingParty: 'Family Court Judge & Both Spouses',
        description: 'Spouses appear for Second Motion. The balance demand draft of alimony is handed over in open court. Judge again records statements on oath confirming mutual consent is intact.',
        advocateTips: 'Either party has the legal right to unilaterally withdraw consent at any time before the Second Motion decree is signed (Smt. Sureshta Devi v. Om Prakash).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Pronouncement of Judgment & Decree of Dissolution',
        governingRule: 'Section 13B(2) HMA',
        actingParty: 'Principal Judge, Family Court',
        description: 'The Family Court pronounces judgment dissolving the marriage by mutual consent and draws up a formal Decree of Divorce.',
        advocateTips: 'Obtain certified copy of the decree immediately to quash any pending FIR under Section 528 BNSS / Section 482 CrPC.'
      }
    ],
    hearingAndArguments: 'Hearing is in-camera or in open court before the Family Court. Arguments are non-adversarial: counsel confirm all terms of the MoU have been executed, payments completed, Streedhan returned, and free consent affirmed.',
    possibleOutcomes: [
      'Decree of divorce granted dissolving the marriage by mutual consent.',
      'Six-month cooling-off waiver allowed and decree passed within 1 to 2 weeks.',
      'Petition dismissed if either party withdraws consent prior to Second Motion under Sureshta Devi.'
    ],
    appealRevisionRemedy: 'Under Section 19(2) of the Family Courts Act, 1984, no appeal lies from a decree or order passed by the Family Court with the consent of the parties. Can only be challenged for fraud under Article 226/227.',
    commonPitfalls: [
      'Presenting the petition before completing one continuous year of separate living.',
      'Failing to specify clear Streedhan return terms, leading to subsequent criminal complaints.',
      'Either spouse unilaterally withdrawing consent before the second motion is concluded.'
    ],
    practicalScenario: 'A couple married in 2021 separated after 14 months due to irreconcilable differences. In 2024, after structured mediation, they executed an MoU where the husband agreed to pay ₹25 Lakhs alimony. They filed the First Motion under Section 13B(1) and handed over ₹12.5 Lakhs by DD. Counsel immediately filed an application for waiver of the 6-month cooling-off period under Amardeep Singh. The Family Court waived the period, recorded the Second Motion statement 10 days later with delivery of the balance DD, and dissolved the marriage.',
    caseLaws: [
      {
        title: 'Amardeep Singh v. Harveen Kaur',
        citation: '(2017) 8 SCC 746',
        court: 'Supreme Court of India',
        holding: 'The statutory 6-month cooling-off period prescribed in Section 13B(2) HMA is directory, not mandatory; Family Courts have discretion to waive this period where spouses have lived apart for over a year, all disputes are settled, and waiting will only prolong agony.'
      },
      {
        title: 'Shilpa Sailesh v. Varun Sreenivasan',
        citation: '(2023) 7 SCC 633 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Supreme Court can exercise its plenary powers under Article 142 of the Constitution to dissolve a marriage directly on the ground of "irretrievable breakdown of marriage" without requiring the parties to undergo the procedural timeline of Section 13B HMA.'
      },
      {
        title: 'Sureshta Devi v. Om Prakash',
        citation: '(1991) 2 SCC 25',
        court: 'Supreme Court of India',
        holding: 'Mutual consent must continue till the decree is actually passed; either party has a unilateral right to revoke consent at any time before the court passes the decree under Section 13B(2).'
      }
    ],
    faqs: [
      {
        q: 'Can a spouse participate in the mutual consent divorce proceedings through video-conferencing?',
        a: 'Yes. Family Courts allow appearance and recording of statements via video-conferencing, particularly for NRI spouses residing abroad (State of Maharashtra v. Praful Desai principles).'
      },
      {
        q: 'What happens if the husband refuses to pay the second installment of alimony at the Second Motion?',
        a: 'The wife can refuse to give her statement for the Second Motion, resulting in dismissal of the petition, and initiate execution of the settlement agreement or pursue criminal remedies.'
      }
    ],
    tags: ['family-law-procedures', 'mutual consent divorce', 'section 13b hma', 'amardeep singh', 'cooling off waiver', 'settlement deed', 'family court']
  },

  {
    id: 'proc-family-contested-divorce-cruelty',
    slug: 'contested-divorce-cruelty-desertion-section-13-hma',
    title: 'Contested Divorce Petition under Section 13(1) Hindu Marriage Act on Grounds of Cruelty, Desertion & Adultery',
    category: 'Family & Matrimonial Procedures',
    actReference: 'Hindu Marriage Act, 1955 — Sections 13(1)(ia), 13(1)(ib), 19, 21, 23 & Family Courts Act 1984',
    courtForum: 'Family Court having Territorial Jurisdiction under Section 19 HMA',
    estimatedTimeline: '2 to 4 years for full contested matrimonial trial and decree',
    courtFeeLevel: 'Fixed court fee stamp (₹15 - ₹100 depending on State rules)',
    overview: 'A Contested Divorce under Section 13(1) of the Hindu Marriage Act, 1955 is an adversarial proceeding initiated by one spouse against the other seeking dissolution of marriage on established fault grounds, most prominently: Mental and Physical Cruelty (Section 13(1)(ia)), Desertion for a continuous period of at least two years (Section 13(1)(ib)), and Adultery. Matrimonial cruelty has been broadly defined by the Supreme Court to encompass sustained abusive conduct, false criminal complaints, public humiliation, and denial of physical intimacy (Samar Ghosh v. Jaya Ghosh & Naveen Kohli v. Neelu Kohli).',
    legalBasis: 'Section 13(1) Hindu Marriage Act, 1955; Section 19 (Jurisdiction where marriage solemnized, respondent resides, or wife resides); Family Courts Act, 1984 (Sections 7, 9 & 10); and Code of Civil Procedure, 1908 (Section 21 HMA).',
    locusStandi: 'The aggrieved spouse (Husband or Wife) who has been subjected to cruelty, deserted for 2+ years, or whose spouse is guilty of adultery or conversion.',
    prerequisites: [
      'Valid marriage solemnized under Hindu rites and ceremonies between two Hindus.',
      'Existence of one or more statutory grounds under Section 13(1): cruelty, desertion for 2 continuous years, adultery, unsound mind, conversion, or renunciation.',
      'Presentation before the Family Court having territorial jurisdiction under Section 19 HMA.',
      'Petitioner must not be taking advantage of their own wrong under Section 23(1)(a) HMA.',
      'No condonation of the matrimonial offence (Section 23(1)(b) HMA).'
    ],
    statutoryLimitation: 'Under Section 14 HMA, no petition for divorce can be presented within one year of marriage, unless leave of the court is granted on grounds of exceptional hardship or exceptional depravity.',
    mandatoryDocuments: [
      'Divorce Petition under Section 13(1) HMA detailing specific chronological instances of cruelty/desertion.',
      'Marriage Certificate or Marriage Photographs and Invitation Card.',
      'Proof of Residence / Territorial Jurisdiction under Section 19 HMA.',
      'Supporting Affidavit verifying petition averments and confirming no collusion under Section 23.',
      'Documentary evidence of cruelty (WhatsApp chats, abusive emails, police complaints, medical MLCs).',
      'Vakalatnama executed by the Petitioner.'
    ],
    draftingGuidance: 'Draft the petition with extreme chronological detail: (1) Date and place of marriage; (2) Detailed chronological paragraphs setting out specific dates, venues, and verbatim language of abusive conduct; (3) Explicit averment that cruelty caused reasonable apprehension that it is harmful to live with respondent (Samar Ghosh test); (4) If pleading desertion, plead animus deserendi (intention to desert) and lack of reasonable cause; (5) Mandatory non-collusion averment under Section 23(1)(c) HMA affirming the petition is not presented in collusion with the respondent.',
    courtFeesFilingRules: 'Affix nominal court fee stamps of ₹15–₹100 as per State schedule + Process fees for service of summons.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Petition & Registry Scrutiny',
        governingRule: 'Section 19 HMA & Section 7 Family Courts Act',
        actingParty: 'Petitioner & Advocate',
        description: 'Lodge petition at Family Court filing counter. Verify territorial jurisdiction: where marriage solemnized, where parties last resided together, or where wife resides.',
        advocateTips: 'If wife is the petitioner, Section 19(iiia) grants her the exclusive right to file where she currently resides, regardless of where the matrimonial home was.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Service of Summons & Mandatory In-House Counseling',
        governingRule: 'Section 9 Family Courts Act, 1984',
        actingParty: 'Family Court Counselor & Both Spouses',
        description: 'Summons served on respondent. Under Section 9 Family Courts Act, court mandatorily refers spouses to the in-house Family Court Counselor for conciliation/settlement.',
        advocateTips: 'If reconciliation fails, ensure the counselor submits an "Unsuccessful Conciliation Report" so that trial proceedings commence without delay.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Written Statement & Section 24 Interim Maintenance Application',
        governingRule: 'Order VIII CPC & Section 24 HMA',
        actingParty: 'Respondent / Defense Advocate',
        description: 'Respondent files Written Statement denying cruelty and desertion. Respondent (typically wife) files application under Section 24 HMA for interim maintenance and litigation expenses.',
        advocateTips: 'Both parties must file mandatory Affidavits of Assets and Liabilities under the Supreme Court Rajnesh v. Neha guidelines.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Framing of Matrimonial Issues & Trial Evidence',
        governingRule: 'Order XIV & Order XVIII CPC',
        actingParty: 'Family Court Judge & Both Spouses',
        description: 'Court frames issues: (1) Whether respondent treated petitioner with cruelty; (2) Whether respondent deserted petitioner for 2+ years. Both spouses examine themselves and witnesses.',
        advocateTips: 'Cross-examination must focus on uncorroborated allegations, admitted periods of cohabitation (condonation), or false criminal complaints.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Arguments & Judgment Decreeing Dissolution',
        governingRule: 'Section 13 & 23 HMA',
        actingParty: 'Family Court Judge',
        description: 'Court hears final arguments. If cruelty or desertion is proved by preponderance of probability, the court passes a decree of divorce dissolving the marriage.',
        advocateTips: 'Court may simultaneously grant permanent alimony under Section 25 HMA upon application by either spouse.'
      }
    ],
    hearingAndArguments: 'Petitioner counsel demonstrates continuous course of cruel conduct, sustained mental agony, breakdown of matrimonial ties, and filing of false criminal cases. Respondent counsel argues ordinary wear and tear of married life, condonation by resumption of cohabitation, and lack of animus deserendi.',
    possibleOutcomes: [
      'Decree of divorce granted dissolving the marriage on grounds of cruelty or desertion.',
      'Petition dismissed for failure to prove cruelty or desertion, or on ground of condonation under Section 23.',
      'Decree of Judicial Separation granted under Section 13A HMA in lieu of divorce.'
    ],
    appealRevisionRemedy: 'A decree of divorce passed by the Family Court is appealable before a Division Bench of the High Court as a Matrimonial Appeal under Section 19(1) of the Family Courts Act, 1984 within 90 days.',
    commonPitfalls: [
      'Relying on isolated domestic quarrels without demonstrating a sustained pattern of mental or physical cruelty.',
      'Resuming sexual cohabitation after alleged acts of cruelty without realizing it constitutes legal "condonation" under Section 23(1)(b) HMA.',
      'Filing before completing one year of marriage without seeking leave under Section 14 HMA.'
    ],
    practicalScenario: 'A husband filed a contested divorce petition alleging mental cruelty. The wife had filed a fabricated criminal complaint under Section 85 BNS / 498A IPC against the husband and his elderly parents, resulting in their overnight police detention. The criminal trial ended in an honourable acquittal. Relying on K. Srinivas Rao v. D.A. Deepa, the husband argued that filing false criminal complaints against the spouse and family constitutes mental cruelty of the gravest nature. The Family Court accepted the contention and decreed the divorce.',
    caseLaws: [
      {
        title: 'Samar Ghosh v. Jaya Ghosh',
        citation: '(2007) 4 SCC 511 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Laid down comprehensive illustrative guidelines on mental cruelty: it includes continuous ill-treatment, persistent denial of intercourse without valid reason, unilateral decision not to have children, public humiliation, and sustained indifference making it impossible to live together.'
      },
      {
        title: 'K. Srinivas Rao v. D.A. Deepa',
        citation: '(2013) 5 SCC 226',
        court: 'Supreme Court of India',
        holding: 'Making false and scandalous allegations against the husband and his family, and initiating baseless criminal proceedings resulting in arrest or humiliation, constitutes grave mental cruelty entitling the spouse to divorce.'
      }
    ],
    faqs: [
      {
        q: 'Can a divorce petition be filed within one year of marriage?',
        a: 'Under Section 14 HMA, a petition cannot be filed within 1 year unless an application for leave of the court is filed proving "exceptional hardship" to the petitioner or "exceptional depravity" by the respondent.'
      },
      {
        q: 'What is the limitation period to file an appeal against a Family Court divorce decree?',
        a: 'Under Section 19(3) Family Courts Act, 1984, the limitation is 30 days, though the Supreme Court in subsequent rulings held 90 days applies harmoniously with Section 28 HMA.'
      }
    ],
    tags: ['family-law-procedures', 'contested divorce', 'section 13 hma', 'cruelty', 'desertion', 'samar ghosh', 'family courts act', 'matrimonial appeal']
  },

  {
    id: 'proc-family-maintenance-144-bnss',
    slug: 'maintenance-procedure-section-144-bnss-rajnesh-neha-affidavit',
    title: 'Maintenance Application under Section 144 BNSS (Old Sec 125 CrPC) & Interim Maintenance',
    category: 'Family & Matrimonial Procedures',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 144 (Old CrPC 125) & HMA Section 24',
    courtForum: 'Family Court / Court of Judicial Magistrate First Class (JMFC)',
    estimatedTimeline: 'Interim Maintenance order: 60 days under statutory mandate → Final disposal: 6 to 12 months',
    courtFeeLevel: 'Fixed court fee stamp (₹10 - ₹25) / Exempted in many states for women',
    overview: 'Section 144 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 125 CrPC) provides a swift, social-justice summary remedy to prevent vagrancy and destitution by compelling an individual having sufficient means to maintain their wife, minor children, and unable parents. Governed by the landmark Supreme Court decision in Rajnesh v. Neha (2021), both parties must mandatorily file comprehensive Affidavits of Assets and Liabilities disclosing all bank accounts, income tax returns, real estate, and lifestyle expenditures. Maintenance is awarded from the date of filing the application.',
    legalBasis: 'Sections 144 (Order for maintenance of wives, children and parents), 145 (Procedure), 146 (Alteration in allowance), and 147 (Enforcement of order) of BNSS 2023; read with Rajnesh v. Neha (2021) 2 SCC 324 and Aditi alias Mithi v. Jitesh Sharma (2023).',
    locusStandi: 'Wife unable to maintain herself; legitimate or illegitimate minor children; major child suffering physical/mental abnormality; and father or mother unable to maintain themselves.',
    prerequisites: [
      'Proof of lawful marriage (for wife) or parentage (for children/parents). Strict proof of marriage is not required in summary maintenance proceedings (Dwarika Prasad Satpathy).',
      'Proof that the respondent has "sufficient means" (income, employment, business, or ancestral property).',
      'Proof of neglect or refusal by the respondent to maintain the applicant.',
      'Demonstration that the applicant is "unable to maintain herself" and has no independent sufficient income.',
      'Mandatory filing of the Affidavit of Assets and Liabilities in Form Enclosure I/II/III as prescribed in Rajnesh v. Neha.'
    ],
    statutoryLimitation: 'No limitation for filing maintenance application; right to maintenance is a continuous statutory right. Arrears can be executed within one year from the date they became due under Section 144(3) Proviso.',
    mandatoryDocuments: [
      'Application under Section 144 BNSS detailing marriage, abandonment, and respondent income.',
      'Mandatory Affidavit of Assets and Liabilities in Rajnesh v. Neha format.',
      'Income Tax Returns (ITRs) for the last 3 financial years of both parties with computation sheets.',
      'Bank Statements for the last 12 months of all operative savings, current, and salary accounts.',
      'Salary Slips / Form 16 / Salary Certificates (if employed).',
      'Electricity bills, rent agreements, school fee receipts of minor children.',
      'Vakalatnama executed by the Applicant.'
    ],
    draftingGuidance: 'Draft the application emphasizing: (1) Date and solemnization of marriage and birth of children; (2) Acts of desertion or cruelty compelling applicant to reside separately; (3) Applicant complete lack of independent income; (4) Detailed lifestyle and income of the respondent (e.g. luxury cars, foreign trips, credit card statements); (5) Specific computation of monthly expenses (food, rent, medical, school tuition); (6) Prayer for interim maintenance, final maintenance, and litigation expenses.',
    courtFeesFilingRules: 'Nominal court fee stamps (₹10–₹25). Female applicants are exempted from court fees in many State jurisdictions under Social Welfare notifications.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Application under Section 144 BNSS with Rajnesh v. Neha Affidavit',
        governingRule: 'Section 144 BNSS & Rajnesh v. Neha Ruling',
        actingParty: 'Applicant / Advocate',
        description: 'File application before the Family Court/JMFC along with the mandatory sworn Affidavit of Assets and Liabilities disclosing all financial assets.',
        advocateTips: 'Under Rajnesh v. Neha, failure to file the disclosure affidavit can result in adverse inference and striking off defense.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Service of Notice & Direction for Respondent Disclosure',
        governingRule: 'Section 144(2) BNSS',
        actingParty: 'Court & Respondent',
        description: 'Court issues notice to respondent. On first appearance, court directs respondent to file their reply along with their Affidavit of Assets and Liabilities within 4 weeks.',
        advocateTips: 'If respondent conceals bank accounts, apply under Section 94 BNSS / Section 30 CPC to summon their bank branch managers with statement of accounts.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Hearing & Pronouncement of Interim Maintenance (60-Day Mandate)',
        governingRule: 'Section 144(2) Proviso BNSS',
        actingParty: 'Family Court Judge / Magistrate',
        description: 'Court evaluates rival disclosure affidavits without waiting for full trial and fixes an Interim Maintenance sum payable monthly during pendency of proceedings.',
        advocateTips: 'Under Section 144(2) Proviso, the court must endeavor to dispose of the interim maintenance application within 60 days from date of notice service.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Evidence Stage on Standard of Living & Capacity',
        governingRule: 'Section 145 BNSS',
        actingParty: 'Both Parties & Witnesses',
        description: 'Parties lead evidence on income, earning capacity, and lifestyle. Standard of maintenance must correspond to the status and lifestyle enjoyed during matrimonial cohabitation.',
        advocateTips: 'An able-bodied husband is legally presumed to have the capacity to earn and cannot evade maintenance by claiming unemployment (Jaspreet Singh v. Swneet Kaur).'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Maintenance Order & Section 144(3) Enforcement',
        governingRule: 'Sections 144(1) & 144(3) BNSS',
        actingParty: 'Court & Applicant',
        description: 'Court passes final maintenance order awarding monthly maintenance from the date of application. If respondent defaults, court issues warrants of attachment or sends defaulter to civil prison for up to 1 month for each month default under Section 144(3).',
        advocateTips: 'File an execution application under Section 144(3) BNSS immediately upon 2 months default; courts routinely attach salary at source.'
      }
    ],
    hearingAndArguments: 'Applicant counsel argues: husband sufficient means, wife destitution, high standard of living during marriage, and child educational needs. Respondent counsel argues: wife has independent earning capacity, wife voluntarily deserted without reasonable excuse, husband has dependent parents, and claims are inflated.',
    possibleOutcomes: [
      'Maintenance awarded to wife and minor children from the date of application with annual escalation.',
      'Application dismissed if wife is living in adultery or refuses to live with husband without sufficient cause (Section 144(4)).',
      'Interim maintenance fixed and arrears directed to be cleared in monthly installments.'
    ],
    appealRevisionRemedy: 'An order granting or refusing maintenance under Section 144 BNSS is not appealable, but is subject to Criminal Revision under Section 438/442 BNSS before the Sessions Court or High Court.',
    commonPitfalls: [
      'Failing to file the mandatory Affidavit of Assets and Liabilities as per the Rajnesh v. Neha template.',
      'Failing to apply for execution of arrears within one year, attracting the statutory bar under Section 144(3) Proviso.',
      'Concealing employment or freelancing income, resulting in prosecution for perjury under Section 379 BNSS / 340 CrPC.'
    ],
    practicalScenario: 'A wife with two minor school-going children was abandoned by her husband, a software consultant. The wife filed a Section 144 BNSS application. The husband filed a reply claiming he was unemployed and had zero income. Applicant counsel placed on record the husband LinkedIn profile showing senior directorship and bank credit logs. The Family Court, applying Rajnesh v. Neha, drew an adverse inference against the husband for false financial disclosure, awarded ₹45,000 monthly interim maintenance from the date of filing, and ordered attachment of his salary account.',
    caseLaws: [
      {
        title: 'Rajnesh v. Neha',
        citation: '(2021) 2 SCC 324',
        court: 'Supreme Court of India',
        holding: 'Laid down comprehensive national guidelines for maintenance: (1) Mandatory filing of Affidavit of Disclosure of Assets and Liabilities by both parties; (2) Maintenance must be awarded from the date of application; (3) Criteria for determining quantum based on social status, earning capacity, and lifestyle.'
      },
      {
        title: 'Aditi alias Mithi v. Jitesh Sharma',
        citation: '(2023) 15 SCC 372',
        court: 'Supreme Court of India',
        holding: 'Reaffirmed the strict compliance with the Rajnesh v. Neha disclosure affidavit; held that trial courts must dispose of interim maintenance applications expeditiously without granting unnecessary adjournments.'
      }
    ],
    faqs: [
      {
        q: 'From what date is maintenance awarded under Section 144 BNSS?',
        a: 'Under the binding Supreme Court ruling in Rajnesh v. Neha, maintenance must be awarded from the date of filing of the application.'
      },
      {
        q: 'Can a husband be sent to jail for non-payment of maintenance?',
        a: 'Yes. Under Section 144(3) BNSS, the Magistrate may issue a warrant for levying the amount and sentence the defaulter to imprisonment for up to one month for each whole month default until payment is made.'
      }
    ],
    tags: ['family-law-procedures', 'maintenance', 'section 144 bnss', 'crpc 125', 'rajnesh v neha', 'interim maintenance', 'assets and liabilities']
  },

  {
    id: 'proc-family-domestic-violence-relief',
    slug: 'domestic-violence-protection-order-section-12-dv-act',
    title: 'Application for Protection Orders, Residence & Monetary Relief under Section 12 DV Act',
    category: 'Family & Matrimonial Procedures',
    actReference: 'Protection of Women from Domestic Violence Act, 2005 (PWDVA) — Sections 12, 17, 18, 19, 20, 22 & 23',
    courtForum: 'Court of Judicial Magistrate First Class (JMFC) / Metropolitan Magistrate',
    estimatedTimeline: 'Ex-parte interim relief under Sec 23: 3 to 7 days → Statutory mandate: 60 days disposal (Sec 12(5))',
    courtFeeLevel: 'Nil (Free of cost statutory proceeding for women)',
    overview: 'The Protection of Women from Domestic Violence Act, 2005 (PWDVA) is a specialized civil-criminal hybrid enactment designed to protect women from domestic violence in a shared household. Under Section 12, an aggrieved woman or a Protection Officer can file an application before the Magistrate seeking a bundle of urgent emergency reliefs: Protection Orders against violence (Section 18), Residence Orders preventing dispossessing from the shared household (Section 19), Monetary Relief for maintenance and medical expenses (Section 20), Custody Orders for children (Section 21), and Compensation for emotional distress (Section 22). Section 23 empowers the Magistrate to grant ex-parte ad-interim orders on affidavit.',
    legalBasis: 'Sections 12, 17 (Right to reside in a shared household), 18 (Protection orders), 19 (Residence orders), 20 (Monetary relief), 22 (Compensation), 23 (Ex-parte interim orders), and 31 (Penalty for breach of protection order) of the PWDVA, 2005; read with Satish Chander Ahuja and Prabha Tyagi rulings.',
    locusStandi: 'Any "aggrieved person"—meaning any woman who is, or has been, in a domestic relationship with the respondent and who alleges to have been subjected to domestic violence.',
    prerequisites: [
      'Proof of a "domestic relationship" (marriage, relationship in the nature of marriage, blood, adoption, or joint family).',
      'Sharing or having shared a "shared household" with the respondent at some point of time.',
      'Acts of physical, sexual, verbal, emotional, or economic domestic violence as defined in Section 3 PWDVA.',
      'Application must be presented before the Magistrate within whose local limits the aggrieved woman resides or works, or where the respondent resides, or where cause of action arose (Section 27).'
    ],
    statutoryLimitation: 'No fixed limitation period; Supreme Court in Kamlesh Devi held application maintainable even after separation if economic abuse continues. Section 12(5) mandates endeavor to dispose within 60 days of first hearing.',
    mandatoryDocuments: [
      'Application under Section 12 of the PWDVA in the prescribed Form II.',
      'Domestic Incident Report (DIR) prepared by the Protection Officer or Service Provider (if available).',
      'Affidavit in Form III under Section 23(2) PWDVA for grant of ex-parte interim relief.',
      'Medical MLC reports, hospital records, prescription slips (in cases of physical violence).',
      'Photographs, audio-video recordings, WhatsApp chats proving threats or humiliation.',
      'Affidavit of Assets and Liabilities in Rajnesh v. Neha format (for Section 20 monetary relief).'
    ],
    draftingGuidance: 'Draft the application under Section 12 with distinct sub-heads for each statutory relief: (1) Details of Domestic Relationship and description of Shared Household under Section 17; (2) Detailed chronological instances of Physical, Verbal, Emotional, and Economic Abuse under Section 3; (3) Specific prayer under Section 18: restraining respondent from entering place of employment or communicating with aggrieved; (4) Prayer under Section 19: restraining respondent from dispossessing aggrieved from shared household, or directing respondent to pay rent for alternate accommodation; (5) Prayer under Section 20: monthly maintenance and medical expenses; (6) Urgent ex-parte relief prayer under Section 23.',
    courtFeesFilingRules: 'No court fees are payable. Free legal aid is available through DLSA Protection Officers.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Section 12 Application with DIR & Section 23 Affidavit',
        governingRule: 'Sections 12 & 23 PWDVA & Rule 6 DV Rules',
        actingParty: 'Aggrieved Woman / Protection Officer / Advocate',
        description: 'File application before the Magistrate along with Form III affidavit. Court takes cognizance and calls for a Domestic Incident Report (DIR) from the Protection Officer.',
        advocateTips: 'Under Prabha Tyagi (2022), filing of a DIR by the Protection Officer is not mandatory before the court can issue notice or pass orders under Section 12.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Urgent Ex-Parte Interim Hearing under Section 23',
        governingRule: 'Section 23 PWDVA',
        actingParty: 'Magistrate & Counsel',
        description: 'Counsel argues that the woman faces imminent threat of physical assault or dispossession. Magistrate passes an immediate ex-parte Protection Order or Residence Order.',
        advocateTips: 'If the woman has been thrown out of the house, seek an immediate ex-parte Residence Order under Section 19(1)(b) directing police to restore her possession.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Service of Notice & Direction for Respondent Reply',
        governingRule: 'Section 13 PWDVA',
        actingParty: 'Protection Officer & Magistrate',
        description: 'Protection Officer serves notice on the respondent within maximum 2 days under Section 13(1). Respondent appears and files written reply.',
        advocateTips: 'Notice can be served by speed post, courier, email, or through the local police under Section 13.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Hearing on Bilateral Interim Relief & Financial Disclosures',
        governingRule: 'Sections 18, 19, 20 & 22 PWDVA',
        actingParty: 'Magistrate & Both Counsel',
        description: 'Court evaluates rival disclosure affidavits and passes interim monetary relief under Section 20, directs payment of rent under Section 19(1)(f), and grants child visitation.',
        advocateTips: 'Under Satish Chander Ahuja (2021), a woman right to reside in a shared household extends even to a house owned by her mother-in-law or father-in-law.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Orders & Section 31 Penal Sanctions for Breach',
        governingRule: 'Sections 12, 18–22 & Section 31 PWDVA',
        actingParty: 'Magistrate & Protection Officer',
        description: 'After evidence, Magistrate passes final orders. If the respondent breaches any Protection Order, it constitutes a cognizable and non-bailable criminal offence under Section 31 punishable with 1 year imprisonment.',
        advocateTips: 'If the husband violates the protection order, immediately file an application under Section 31 PWDVA for his arrest.'
      }
    ],
    hearingAndArguments: 'Applicant counsel argues existence of domestic relationship, living in shared household, physical and economic abuse, and constitutional right to shelter. Respondent counsel argues no domestic relationship, property belongs to parents where son has no right, no violence occurred, and applicant has independent residence.',
    possibleOutcomes: [
      'Protection order granted restraining respondent from committing acts of domestic violence.',
      'Residence order granted securing woman right to reside in shared household or ordering alternate rented accommodation at respondent expense.',
      'Monetary relief and compensation awarded under Sections 20 and 22.',
      'Application dismissed if domestic relationship or violence is disproved.'
    ],
    appealRevisionRemedy: 'Under Section 29 of the PWDVA, an appeal lies to the Court of Session against any order passed by the Magistrate within 30 days from the date of order service.',
    commonPitfalls: [
      'Failing to file the mandatory Form III affidavit when seeking ex-parte interim relief under Section 23.',
      'Assuming that a shared household is limited to property owned solely by the husband (refuted by Satish Chander Ahuja).',
      'Failing to invoke Section 31 criminal prosecution when respondent willfully breaches the protection order.'
    ],
    practicalScenario: 'A woman was driven out of her matrimonial home by her husband and in-laws after dowry demands. She approached the MM under Section 12 PWDVA seeking residence and monetary relief. The in-laws argued that the bungalow was self-acquired property of the father-in-law and the daughter-in-law had no right. Relying on Satish Chander Ahuja, counsel argued that the property was a "shared household" where she lived as part of a joint family. The Magistrate passed an interim residence order directing the in-laws to provide a dedicated self-contained floor in the bungalow or pay ₹35,000 monthly for an equivalent rented apartment.',
    caseLaws: [
      {
        title: 'Satish Chander Ahuja v. Sneha Ahuja',
        citation: '(2021) 1 SCC 414 (3-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Overruled S.R. Batra v. Taruna Batra; held that "shared household" under Section 2(s) PWDVA is not restricted to property owned by the husband; it includes any household where the woman lived in a domestic relationship, even if owned exclusively by the in-laws.'
      },
      {
        title: 'Prabha Tyagi v. Kamlesh Devi',
        citation: '(2022) 8 SCC 90',
        court: 'Supreme Court of India',
        holding: 'Filing of a Domestic Incident Report (DIR) by a Protection Officer is not a condition precedent for the Magistrate to take cognizance and pass orders under Section 12; an aggrieved woman has an independent right to approach the court directly.'
      }
    ],
    faqs: [
      {
        q: 'Can an application under the Domestic Violence Act be filed after divorce?',
        a: 'The Supreme Court in Juveria Abdul Majid held that an application under the DV Act is maintainable for past acts of domestic violence committed during the subsistence of the marriage even if divorce proceedings are pending.'
      },
      {
        q: 'Is breach of a protection order under Section 18 of the DV Act a criminal offence?',
        a: 'Yes. Under Section 31 of the PWDVA, breach of a protection order is a cognizable and non-bailable criminal offence punishable with imprisonment up to one year and/or fine up to ₹20,000.'
      }
    ],
    tags: ['family-law-procedures', 'domestic violence', 'pwdva 2005', 'section 12 dv act', 'shared household', 'satish chander ahuja', 'protection order', 'residence order']
  }
];
