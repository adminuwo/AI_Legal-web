// ─── WORKPLACE & INDUSTRIAL EMPLOYEE RIGHTS REMEDIES ─────────────────────────
// Authoritative statutory remedies under Labour & Industrial legislations

export const WORKPLACE_LABOUR_REMEDIES = [
  {
    id: 'rem-gratuity-recovery-controlling-authority',
    slug: 'recovery-of-withheld-gratuity-controlling-authority-payment-of-gratuity-act',
    title: 'Recovery of Withheld Gratuity with Mandatory 10% Interest under Payment of Gratuity Act, 1972',
    category: 'Workplace & Industrial Employee Rights',
    remedyType: 'Quasi-Judicial Statutory Debt Recovery with Compound Interest',
    urgencyLevel: 'High (Statutory 30-Day Employer Disbursement Mandate)',
    forum: 'Controlling Authority under Payment of Gratuity Act (Assistant Labour Commissioner) / Appellate Authority',
    summary: 'Direct quasi-judicial recovery mechanism compelling recalcitrant employers to disburse unpaid gratuity with mandatory compound interest of 10% per annum under Section 7 and 8 of the Act.',
    whenToUse: 'When an employee who has completed 5 or more years of continuous service resigns, retires, or is terminated, and the employer withholds, delays, or unlawfully deducts their statutory gratuity.',
    overview: 'Gratuity is not a bounty, gratuitous gift, or ex-gratia gesture given at the whim of the employer; it is a hard-earned statutory right and deferred wage earned by an employee through long, meritorious, and faithful service. Under Section 4 of the Payment of Gratuity Act, 1972, gratuity is payable to every employee who has rendered continuous service for not less than 5 years upon superannuation, retirement, resignation, or death/disability (where 5-year requirement is waived). Under Section 7(3), the employer is statutorily mandated to determine and disburse the gratuity within 30 days from the date it becomes payable. If not paid within 30 days, Section 7(3A) imposes a mandatory statutory simple interest (currently 10% per annum). Gratuity can ONLY be forfeited under narrow, strictly proven grounds in Section 4(6) involving termination for riotous conduct or moral turpitude causing quantifiable financial loss.',
    statutoryBasis: 'Payment of Gratuity Act, 1972 — Section 2(e) (Definition of Employee, covering all managerial, administrative, supervisory, and technical personnel), Section 4 (Payment of Gratuity: 15 days wages per completed year of service, capped up to ₹20 Lakhs), Section 4(6) (Limited conditions for forfeiture), Section 7 (Determination of the amount of gratuity), Section 7(3A) (Mandatory 10% interest for delay), Section 8 (Recovery of gratuity as arrears of land revenue through District Collector), Section 9 (Penalties for non-payment: imprisonment up to 1 year); read with Payment of Gratuity (Central) Rules, 1972.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any employee (permanent, temporary, managerial, executive, software engineer, or worker) who has completed at least 4 years and 240 days (deemed 5 years) of continuous service.',
      againstWhom: 'Private companies, factories, mines, ports, IT corporations, hospitals, educational institutions, shops, and commercial establishments employing 10 or more persons.',
      statutoryExceptions: 'Employees who have not completed 5 continuous years (except in cases of death or total disablement, where no minimum service is required).'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Corporate Employer Withholding Gratuity Citing Arbitrary Notice Period Shortfall',
        facts: 'A senior project manager resigned after 7 years of service. The company withheld his ₹9.5 Lakhs gratuity claiming he left 15 days before his 90-day notice period expired, adjusting notice shortfall against his statutory gratuity.',
        legalViolation: 'Flagrant violation of Section 4(6) and Section 13 (Protection of Gratuity from attachment); employers cannot adjust contractual notice pay against statutory gratuity.',
        applicableRemedy: 'Filing statutory Form-I application to the employer followed by Form-N application before the Controlling Authority claiming ₹9.5 Lakhs plus 10% interest.'
      },
      {
        scenarioTitle: 'Refusal of Gratuity by Misclassifying Employee as "Consultant"',
        facts: 'An associate worked for 6 consecutive years with regular monthly pay and designated work hours. Upon resigning, the company refused gratuity claiming she signed an "independent consultant contract".',
        legalViolation: 'Sham contract classification; employee satisfies Section 2(e) definition irrespective of contract nomenclature.',
        applicableRemedy: 'Initiating Form-N proceedings before Assistant Labour Commissioner establishing continuous employment through tax TDS forms (Form 16/26AS) and email supervision.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Submission of Statutory Form-I Application to Employer',
        action: 'Serve a formal application in Form-I under Rule 7 of the Payment of Gratuity Rules demanding calculation and payment of gratuity within 30 days.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Legal Notice on Expiry of 30 Days Demand Window',
        action: 'If the employer fails to pay or rejects the claim within 30 days, issue an advocate legal notice citing Section 7(3A) and Supreme Court rulings on mandatory 10% interest.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Filing Application in Form-N before the Controlling Authority',
        action: 'Submit Application in triplicate (Form-N) under Rule 10 before the Assistant Labour Commissioner (Central or State) having territorial jurisdiction over the establishment.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Summons to Employer & Quasi-Judicial Evidence Adjudication',
        action: 'Controlling Authority issues Form-O summons to the employer. Both parties file pleadings, salary slips, service records, and oral arguments on calculation.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Issuance of Determination Order & Recovery Certificate',
        action: 'Controlling Authority passes a binding order directing employer to pay gratuity with 10% interest. If unpaid within 30 days, a Recovery Certificate under Section 8 is issued to the District Collector.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Execution as Arrears of Land Revenue & Bank Attachment',
        action: 'The District Collector executes the recovery certificate like arrears of land revenue, attaching the employer bank accounts and seizing movable/immovable assets to disburse the full dues.'
      }
    ],
    documentsAndEvidence: [
      'Original Appointment Letter and formal Acceptance of Resignation / Relieving Letter.',
      'Last 3 months salary slips showing "Basic Pay + Dearness Allowance (DA)" for calculation.',
      'Copy of Form-I application served on the employer with Speed Post tracking / email acknowledgment.',
      'Bank statements reflecting regular salary credits over the 5+ years tenure.',
      'Provident Fund (EPFO) statement / UAN passbook corroborating exact dates of joining and exit.',
      'Form 16 / Income tax computation sheets proving employee status.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Controlling Authority under the Payment of Gratuity Act (Office of Assistant Labour Commissioner - State or Central depending on industry).',
      appellateAuthority: 'Appellate Authority under Section 7(7) (Deputy Labour Commissioner) within 60 days (employer must pre-deposit 100% of awarded gratuity).',
      recoveryAuthority: 'District Collector / District Magistrate under Section 8 for executing recovery as arrears of land revenue.',
      writJurisdiction: 'High Court under Article 226 against arbitrary orders of the Appellate Authority.'
    },
    limitationAndDeadlines: 'Form-I should ideally be submitted within 30 days of gratuity becoming payable, but delay can be condoned by the Controlling Authority under Rule 7; Form-N application has no rigid limitation period (delay easily condoned under Rule 10); Appeal under Section 7(7) must be filed within 60 days (extendable by 60 days with sufficient cause); Employer MUST deposit 100% of gratuity before appeal can be entertained.',
    possibleOutcomes: [
      'Binding order directing full payment of statutory gratuity (up to statutory ceiling of ₹20 Lakhs).',
      'Mandatory award of 10% simple annual interest from the 31st day of resignation until actual realization.',
      'Issuance of Revenue Recovery Certificate against company directors and corporate bank accounts.',
      'Rejection of illegal forfeiture or contractual notice deductions.',
      'Criminal prosecution of employer under Section 9 with imprisonment up to 1 year.'
    ],
    landmarkJudgments: [
      {
        title: 'State of Punjab v. Labour Court, Jullundur',
        citation: '(1980) 1 SCC 4',
        court: 'Supreme Court of India',
        holding: 'Held that the Payment of Gratuity Act is a complete and self-contained code. The statutory remedies provided under Section 7 and 8 exclude any private civil suits or arbitrary employer deductions.'
      },
      {
        title: 'Jaswant Singh Gill v. Bharat Coking Coal Ltd.',
        citation: '(2007) 1 SCC 663',
        court: 'Supreme Court of India',
        holding: 'Gratuity can be forfeited under Section 4(6) only if the employee service was terminated for riotous or disorderly conduct or an act involving moral turpitude during active service. Forfeiture cannot be imposed after retirement or resignation.'
      },
      {
        title: 'H. Gangahanume Gowda v. Karnataka Agro Industries Corpn. Ltd.',
        citation: '(2003) 3 SCC 40',
        court: 'Supreme Court of India',
        holding: 'Held that payment of interest under Section 7(3A) is mandatory and not discretionary. When payment is delayed beyond 30 days, the Controlling Authority has no choice but to award statutory interest.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Calculate continuous service accurately: under Section 2A, working 240 days in the 5th year fulfills the 5-year requirement for gratuity entitlement.',
      commonPitfalls: 'Allowing the employer to deduct notice period shortfall from gratuity; Section 13 explicitly immunizes gratuity from any attachment or contractual set-off.',
      tacticalAdvice: 'In Form-N, specifically cite Section 7(3A) and H. Gangahanume Gowda; this puts immense financial pressure on the employer because interest compounds annually at 10%.'
    },
    hindiExplanation: 'ग्रेच्युटी भुगतान अधिनियम, 1972 के तहत यदि किसी कर्मचारी ने किसी कंपनी में लगातार 5 वर्ष (या 4 वर्ष 240 दिन) काम किया है, तो नौकरी छोड़ने, इस्तीफा देने या रिटायर होने पर कंपनी को 30 दिनों के भीतर ग्रेच्युटी का पूरा भुगतान करना अनिवार्य है। यदि कंपनी 30 दिनों में भुगतान नहीं करती, तो धारा 7(3A) के तहत कंपनी को 10% वार्षिक ब्याज देना पड़ता है। कोई भी कंपनी नोटिस पीरियड या नुकसान का बहाना बनाकर ग्रेच्युटी नहीं रोक सकती। कर्मचारी सहायक श्रम आयुक्त (Controlling Authority) के समक्ष Form-N भरकर अपना पूरा पैसा और ब्याज वसूल सकता है।',
    faqs: [
      {
        q: 'Can an employer deduct notice period shortfall or training bond costs from my gratuity?',
        a: 'No. Section 13 of the Payment of Gratuity Act explicitly states that gratuity cannot be attached or set off against any contractual debt, notice pay deficit, or civil claim.'
      },
      {
        q: 'Does an employee who resigns voluntarily qualify for gratuity, or is it only for retirement?',
        a: 'Under Section 4(1)(b), resignation is expressly recognized as a qualifying event. Any employee who resigns after completing 5 years of continuous service is fully entitled to statutory gratuity.'
      }
    ],
    tags: ['labour-workplace-rights', 'gratuity recovery', 'payment of gratuity act', 'controlling authority', 'form n', '10% interest', 'section 13', 'resignation benefits']
  },

  {
    id: 'rem-retrenchment-illegal-termination',
    slug: 'illegal-termination-retrenchment-severance-industrial-disputes-act',
    title: 'Challenging Illegal Termination & Retrenchment without Severance under Section 25F Industrial Disputes Act, 1947',
    category: 'Workplace & Industrial Employee Rights',
    remedyType: 'Industrial Adjudication, Reinstatement & Full Back Wages',
    urgencyLevel: 'High (Raise Industrial Dispute within Reasonable Time)',
    forum: 'Conciliation Officer (Labour Department) / Labour Court / Industrial Tribunal',
    summary: 'Statutory protection for workmen against arbitrary termination, retrenchment without 1-month notice and statutory retrenchment compensation, securing reinstatement with continuity of service.',
    whenToUse: 'When a workman, engineer, operational staff, or non-managerial employee with 1+ year service is abruptly fired, retrenched, or terminated without 30-day notice and 15 days severance pay per completed year.',
    overview: 'The Industrial Disputes Act, 1947 (IDA) provides unmatched statutory job security to "workmen" against hire-and-fire corporate practices. Under Section 2(oo), "retrenchment" includes the termination by the employer of the service of a workman for any reason whatsoever, other than as a punishment inflicted by way of disciplinary action, voluntary retirement, superannuation, or continued ill-health. Section 25F lays down mandatory condition-precedents before retrenching any workman who has been in continuous service for not less than one year: (a) the workman must be given one month notice in writing indicating reasons, or wages in lieu thereof; and (b) the workman must be paid retrenchment compensation equivalent to 15 days average pay for every completed year of continuous service. Violation of Section 25F renders the termination void ab initio in law, entitling the workman to reinstatement with full back wages and seniority benefits.',
    statutoryBasis: 'Industrial Disputes Act, 1947 — Section 2(s) (Definition of Workman: covering all technical, clerical, operational, and non-managerial personnel), Section 2(oo) (Definition of Retrenchment), Section 25F (Conditions precedent to retrenchment of workmen), Section 25G (Procedure for retrenchment: "Last Come, First Go" rule), Section 25H (Re-employment of retrenched workmen), Section 2A (Dismissal of an individual workman deemed an industrial dispute), Section 10 (Reference of disputes to Labour Courts); read with Industrial Employment (Standing Orders) Act, 1946.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any employee qualifying as a "workman" under Section 2(s) (including software developers, analysts, mechanics, operators, and staff without primary managerial/supervisory hiring powers) with 240 days continuous service in the preceding 12 months.',
      againstWhom: 'All industrial establishments, corporate offices, factories, IT establishments, logistics companies, and commercial setups.',
      statutoryExceptions: 'Personnel employed purely in a managerial or administrative capacity drawing wages exceeding statutory supervisory thresholds with power to hire, fire, or grant leave.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Mass Corporate Layoff of 50 Software Engineers without Section 25F Severance',
        facts: 'A tech enterprise laid off 50 software test engineers via a midnight zoom call, giving only 2 days severance instead of the statutory 15 days pay per year of service and without government notification.',
        legalViolation: 'Flagrant contravention of Section 25F and Section 25G (violation of seniority principles); termination is void ab initio.',
        applicableRemedy: 'Filing individual or joint disputes under Section 2A IDA before the Conciliation Officer demanding reinstatement and full back wages.'
      },
      {
        scenarioTitle: 'Termination without Domestic Inquiry on Allegation of Misconduct',
        facts: 'An operations associate with 4 years service was summarily fired on an unproven allegation of data leakage without any charge sheet, explanation letter, or domestic inquiry.',
        legalViolation: 'Violation of natural justice and Section 25F; summary termination cannot be disguised as disciplinary without holding an inquiry.',
        applicableRemedy: 'Raising an industrial dispute challenging the termination as victimisation and unfair labour practice under Fifth Schedule IDA.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Protest Letter & Demand of Justice to Employer',
        action: 'Submit a formal written protest to management asserting that the termination violates Section 25F IDA, demanding immediate reinstatement with continuity of service within 7 days.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Raising Industrial Dispute under Section 2A before Conciliation Officer',
        action: 'File a Statement of Claim under Section 2A before the Conciliation Officer (Assistant Labour Commissioner) asserting illegal retrenchment.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Conciliation Proceedings & Failure Report (FOC)',
        action: 'Conciliation Officer issues notice to employer and attempts mediation. If employer refuses reinstatement, the officer draws up a Failure of Conciliation (FOC) report under Section 12(4).'
      },
      {
        stageNumber: 4,
        stageTitle: 'Direct Approach or Reference to Labour Court / Industrial Tribunal',
        action: 'Under Section 2A(2), after expiry of 45 days from conciliation application, the workman can directly file an application before the Labour Court without waiting for government reference.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Trial, Pleadings & Evidentiary Examination before Labour Court',
        action: 'Workman files Statement of Claim; employer files Written Statement. Labour Court examines whether employee is a "workman" and whether Section 25F conditions were fulfilled.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Labour Court Award: Reinstatement or Substantial Compensation',
        action: 'Court delivers binding Award. If Section 25F is violated, court orders reinstatement with full back wages or awards substantial lumpsum compensation (typically 1 to 5 years salary).'
      }
    ],
    documentsAndEvidence: [
      'Original Appointment Letter, job description, and salary slips proving non-managerial job duties.',
      'Termination letter, layoff email, or abrupt system access deactivation logs.',
      'Calculation sheet showing continuous service of 240 days in the 12 months prior to retrenchment.',
      'Bank statement proving employer failed to credit 15 days severance pay per completed year.',
      'Copy of Demand Notice served on employer demanding reinstatement.',
      'Affidavit of unemployment testifying that workman remained unemployed despite diligent efforts.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Conciliation Officer / Assistant Labour Commissioner of the local labour circle.',
      adjudicatoryForum: 'Labour Court / Industrial Tribunal constituted under Section 7 and 7A of the Industrial Disputes Act.',
      writForum: 'High Court under Articles 226 and 227 challenging perverse awards or enforcing labour court decrees.'
    },
    limitationAndDeadlines: 'Direct application to Labour Court under Section 2A(2) can be filed after 45 days from conciliation application, and must be filed within 3 years from the date of discharge, dismissal, or retrenchment; Conciliation proceedings must theoretically conclude in 14 days.',
    possibleOutcomes: [
      'Judicial declaration that the retrenchment is void ab initio and non-est in the eye of law.',
      'Award of full reinstatement with continuity of service and seniority.',
      'Full back wages from date of illegal termination to date of reinstatement.',
      'Substantial lumpsum compensation in lieu of reinstatement where trust has completely broken down.',
      'Prosecution of employer for unfair labour practices under Section 25U IDA (imprisonment up to 6 months).'
    ],
    landmarkJudgments: [
      {
        title: 'State Bank of India v. N. Sundara Money',
        citation: '(1976) 1 SCC 822',
        court: 'Supreme Court of India',
        holding: 'Authored by Justice Krishna Iyer; established that "retrenchment" under Section 2(oo) has the widest possible meaning. Termination of service for any reason whatsoever (including contract expiry or verbal dismissal) attracts the mandatory protections of Section 25F.'
      },
      {
        title: 'Anoop Sharma v. Executive Engineer, Public Health Division',
        citation: '(2010) 5 SCC 497',
        court: 'Supreme Court of India',
        holding: 'Held that compliance with Section 25F is mandatory and non-negotiable. An order of retrenchment passed without paying compensation simultaneously with termination is void ab initio, entitling the workman to reinstatement.'
      },
      {
        title: 'Deepali Gundu Surwase v. Kranti Junior Adhyapak Mahavidyalaya',
        citation: '(2013) 10 SCC 324',
        court: 'Supreme Court of India',
        holding: 'Laid down comprehensive principles for back wages; held that when termination is held illegal, the normal rule is reinstatement with full back wages unless the employer specifically proves gainful alternative employment.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Scrutinize the job duties, not the job title: even if designated "Manager" or "Lead", if the employee has no administrative power to sanction leave or hire staff, they remain a "workman" under Section 2(s).',
      commonPitfalls: 'Accepting the severance cheque under "full and final settlement" without writing "Accepted under protest without prejudice to rights under IDA"; cashing unconditional settlement checks weakens the claim.',
      tacticalAdvice: 'Ensure the client files an Unemployment Affidavit alongside the claim; under Deepali Gundu Surwase, once the worker affirms non-employment, the burden shifts entirely to the employer to prove otherwise.'
    },
    hindiExplanation: 'औद्योगिक विवाद अधिनियम, 1947 (IDA) की धारा 25F के तहत यदि किसी कर्मचारी (वर्कमैन/तकनीकी कर्मी) ने 1 वर्ष (240 दिन) काम कर लिया है, तो कंपनी उसे बिना 1 महीने के लिखित नोटिस (या 1 महीने के वेतन) और प्रत्येक वर्ष के बदले 15 दिन के हर्जाने (Retrenchment Compensation) के बिना नौकरी से नहीं निकाल सकती। यदि कंपनी इस नियम का उल्लंघन करती है, तो यह बर्खास्तगी कानूनी रूप से "शून्य" (Void) मानी जाती है। कर्मचारी श्रम अदालत (Labour Court) में केस दायर कर नौकरी पर बहाली (Reinstatement) और पिछले पूरे महीनों का बकाया वेतन (Full Back Wages) पाने का हकदार होता है।',
    faqs: [
      {
        q: 'Are IT software engineers and corporate analysts considered "workmen" under the Industrial Disputes Act?',
        a: 'Yes. Various High Courts (including Madras, Karnataka, and Delhi) have held that software engineers, coders, and data analysts performing technical duties without managerial hiring/firing authority are "workmen" under Section 2(s).'
      },
      {
        q: 'What happens if I sign an email agreeing to mutual separation under corporate pressure?',
        a: 'If forced to resign under threat of termination or blacklist, the worker can plead "forced resignation / constructive dismissal", which the Supreme Court treats as illegal retrenchment under Section 2(oo).'
      }
    ],
    tags: ['labour-workplace-rights', 'illegal termination', 'retrenchment', 'section 25f', 'industrial disputes act', 'reinstatement', 'back wages', 'workman rights']
  },

  {
    id: 'rem-epfo-pf-recovery-7a',
    slug: 'provident-fund-recovery-employer-default-section-7a-epfo',
    title: 'Statutory Redressal for Employer Non-Remittance of Provident Fund under Section 7A & 14B EPFO Act, 1952',
    category: 'Workplace & Industrial Employee Rights',
    remedyType: 'Quasi-Judicial Forensic Inquest & Penal Asset Attachment',
    urgencyLevel: 'High (Prevent Corporate Insolvency & Asset Siphoning)',
    forum: 'Regional Provident Fund Commissioner (RPFC) / Central Government Industrial Tribunal (CGIT)',
    summary: 'Statutory quasi-judicial mechanism compelling defaulting employers who deduct employee PF contributions from salaries but fail to deposit them with the EPFO, triggering immediate criminal prosecution and asset seizure.',
    whenToUse: 'When an employer deducts 12% PF from employee monthly pay slips but fails to remit both employee and matching employer shares into the EPFO UAN passbook for consecutive months.',
    overview: 'Deducting Provident Fund contributions from an employee salary and failing to deposit them with the Employees Provident Fund Organisation (EPFO) is not merely a civil default — it is a severe cognizable criminal offence of Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 405 IPC). The Employees Provident Funds and Miscellaneous Provisions Act, 1952 establishes a comprehensive coercive apparatus under Section 7A, empowering the Regional Provident Fund Commissioner (RPFC) to conduct judicial inquiries with powers of a civil court to summon records, examine directors under oath, and determine arrears. Under Section 14B, the RPFC imposes punitive damages up to 100% on defaulting employers, along with mandatory 12% annual penal interest under Section 7Q. Under Section 8B, Recovery Officers have the power to attach company bank accounts and arrest directors.',
    statutoryBasis: 'Employees Provident Funds and Miscellaneous Provisions Act, 1952 — Section 6 (Contribution rates: 12% employee + 12% employer), Section 7A (Determination of moneys due from employers: quasi-judicial inquiry), Section 7Q (Mandatory 12% interest for delayed deposit), Section 8B (Issue of warrant of arrest and attachment of property), Section 14 (Penalties: imprisonment up to 3 years), Section 14B (Power to recover damages up to 100%); Bharatiya Nyaya Sanhita, 2023 — Section 316 / Explanation 1 (Criminal Breach of Trust for PF withholding).',
    scopeAndEligibility: {
      whoCanInvoke: 'Any employee whose salary reflects PF deductions that are not credited to their EPFO UAN passbook, or trade unions on behalf of workforce.',
      againstWhom: 'Employers, corporate directors, managing partners, and trustees of exempt or unexempt establishments employing 20 or more persons.',
      statutoryExceptions: 'Establishments with fewer than 20 employees not voluntarily covered under Section 1(4) of the Act.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Corporate Tech Firm Deducting PF for 14 Months without EPFO Deposit',
        facts: 'A startup deducted ₹6,000 every month from 120 employees pay slips for over a year. Upon checking the EPFO unified portal, employees discovered that their UAN accounts showed zero deposits for 14 months.',
        legalViolation: 'Criminal breach of trust under Section 316 BNS, statutory default under Section 6 of EPF Act, punishable with 3 years imprisonment under Section 14.',
        applicableRemedy: 'Filing Section 7A petition before Regional PF Commissioner; lodging parallel criminal complaint with the Police for criminal breach of trust.'
      },
      {
        scenarioTitle: 'Company Diverting Provident Fund Money to Working Capital before Closure',
        facts: 'A manufacturing firm facing cash-flow shortages diverted ₹45 Lakhs in deducted PF contributions to settle supplier bills before quietly planning factory closure.',
        legalViolation: 'Willful misappropriation of entrusted social security funds; priority debt violation under Section 11 EPF Act.',
        applicableRemedy: 'Urgent petition to RPFC for immediate bank account freeze under Section 8B and attachment of corporate factory machinery.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'EPFO Passbook Download & Forensic Reconciliation',
        action: 'Download monthly UAN e-passbooks from EPFO portal (unifiedportal-mem.epfindia.gov.in) and compare with monthly salary slips to establish exact deficit amounts.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Filing Grievance on EPFiGMS (EPFO Online Grievance System)',
        action: 'Register an official complaint on EPFiGMS (epfigms.gov.in) attaching salary slips and passbook screenshots, generating an official registration number.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Statutory Representation to Regional PF Commissioner (RPFC)',
        action: 'Submit a formal written petition to the jurisdictional RPFC invoking Section 7A, requesting initiation of a quasi-judicial inquiry against the establishment.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Initiation of Section 7A Inquiry & Summons to Directors',
        action: 'RPFC issues formal summons to company directors and principal officers, impounding payroll ledgers, bank statements, and attendance registers.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Assessment Order & Levying of 7Q Interest & 14B Penal Damages',
        action: 'RPFC passes a binding 7A assessment order determining the total default, adding mandatory 12% interest under Section 7Q and up to 100% penal damages under Section 14B.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Execution under Section 8B: Bank Freeze & Director Arrest Warrant',
        action: 'EPFO Recovery Officer executes Section 8B warrant, directing banks to freeze company accounts and transfer funds directly to EPFO, with power to arrest non-compliant directors.'
      }
    ],
    documentsAndEvidence: [
      'Salary slips for all defaulted months displaying PF deduction line items.',
      'EPFO UAN Member e-Passbook establishing missing monthly contribution entries.',
      'Form 26AS / AIS showing TDS credits corroborating active salary disbursement.',
      'Copy of formal EPFiGMS grievance ticket receipt and tracking history.',
      'Appointment letter and company employee ID card verifying employment tenure.',
      'Bank statement showing net salary credit received minus the deducted PF.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Regional Provident Fund Commissioner (RPFC) of the concerned EPFO Regional Office.',
      enforcementWing: 'EPFO Recovery Officer under Section 8B of EPF Act.',
      appellateTribunal: 'Central Government Industrial Tribunal (CGIT) acting as EPF Appellate Tribunal under Section 7-I within 60 days.',
      criminalCourt: 'Judicial Magistrate of First Class (JMFC) for criminal prosecution under Section 14 EPF Act and Section 316 BNS.'
    },
    limitationAndDeadlines: 'No limitation period for initiating Section 7A inquiry; EPFO can recover unpaid PF dues regardless of time lapse; employer appeal before CGIT must be filed within 60 days of the 7A order (subject to pre-depositing 75% of assessed amount under Section 7-O).',
    possibleOutcomes: [
      'Immediate recovery of 100% missing PF contributions credited directly to employee UAN accounts.',
      'Mandatory 12% annual interest under Section 7Q paid directly into employee accounts.',
      'Recovery Officer freezing corporate bank accounts and attaching factory/office premises.',
      'Arrest and civil detention of company directors for continuous willful evasion.',
      'Registration of criminal FIR against company directors for Criminal Breach of Trust under BNS.'
    ],
    landmarkJudgments: [
      {
        title: 'Organo Chemical Industries v. Union of India',
        citation: '(1979) 4 SCC 573',
        court: 'Supreme Court of India',
        holding: 'Upheld constitutional validity of Section 14B damages; held that Provident Fund is an infallible social security safeguard for workers. Employers who divert PF money commit a daylight robbery on working-class welfare.'
      },
      {
        title: 'Employees Provident Fund Commissioner v. O.L. of Esskay Pharmaceuticals Ltd.',
        citation: '(2011) 10 SCC 727',
        court: 'Supreme Court of India',
        holding: 'Held that Section 11 of the EPF Act gives EPFO dues first-charge priority over all other corporate debts, including secured bank loans and liquidation claims under company law.'
      },
      {
        title: 'Hindustan Times Ltd. v. Union of India',
        citation: '(1998) 2 SCC 242',
        court: 'Supreme Court of India',
        holding: 'Held that there is no limitation period for recovery of provident fund arrears under Section 7A. Delayed action by EPFO authorities cannot extinguish the right of workers to recover their hard-earned social security.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Verify whether the establishment is covered under the EPFO Act (20+ employees); check the EPFO establishment search portal using company name to obtain exact EPFO Code.',
      commonPitfalls: 'Filing a simple labour commissioner complaint instead of a dedicated Section 7A petition with the RPFC; normal labour commissioners lack the coercive bank-freezing powers possessed by the EPFO Recovery Officer.',
      tacticalAdvice: 'Simultaneously file a criminal complaint with the police citing Explanation 1 to Section 316 BNS (criminal breach of trust); police are mandated to register an FIR because deducting PF and pocketing it is an express statutory crime.'
    },
    hindiExplanation: 'कर्मचारी भविष्य निधि और प्रकीर्ण उपबंध अधिनियम, 1952 (EPF Act) के अनुसार, यदि कोई कंपनी आपके वेतन से हर महीने PF (12%) काटती है, लेकिन उसे EPFO में जमा नहीं करती, तो यह भारतीय न्याय संहिता की धारा 316 (पुराणी 405 IPC) के तहत "आपराधिक विश्वासघात" (Criminal Breach of Trust) का गंभीर अपराध है। कर्मचारी epfigms.gov.in पर शिकायत कर सकते हैं और क्षेत्रीय भविष्य निधि आयुक्त (RPFC) के समक्ष धारा 7A के तहत जांच शुरू करवा सकते हैं। PF कमिश्नर को कंपनी के बैंक खातों को सील करने और दोषी डायरेक्टर्स को जेल भेजने तक के कानूनी अधिकार प्राप्त हैं।',
    faqs: [
      {
        q: 'Can the EPFO recover unpaid PF from company directors if the company goes into insolvency or liquidation?',
        a: 'Yes. Under Section 11 of the EPF Act and Supreme Court ruling in Esskay Pharmaceuticals, PF dues have absolute priority over all other secured creditors, and directors remain personally accountable for criminal breach of trust.'
      },
      {
        q: 'Does an employee receive any interest on the delayed PF payments recovered from the employer?',
        a: 'Yes. Under Section 7Q of the EPF Act, the employer must pay mandatory penal interest of 12% per annum, which is credited straight into the employee member passbook.'
      }
    ],
    tags: ['labour-workplace-rights', 'epfo recovery', 'provident fund', 'section 7a', 'section 14b', 'uan passbook', 'criminal breach of trust', 'pension dues']
  },

  {
    id: 'rem-unpaid-delayed-wages-claim',
    slug: 'unpaid-delayed-wages-claim-recovery-payment-of-wages-act',
    title: 'Statutory Recovery of Unpaid & Withheld Wages under Payment of Wages Act, 1936 & Code on Wages',
    category: 'Workplace & Industrial Employee Rights',
    remedyType: 'Summary Statutory Wage Recovery & Penalty Adjudication',
    urgencyLevel: 'High (Statutory Requirement to Disburse Wages within 7 to 10 Days)',
    forum: 'Authority under Payment of Wages Act (Labour Court / Assistant Labour Commissioner)',
    summary: 'Speedy statutory recovery mechanism enabling employees to recover withheld, delayed, or unlawfully deducted salaries along with up to 10 times statutory compensation under Section 15 of the Act.',
    whenToUse: 'When an employer delays monthly wages beyond the 7th or 10th of the month, withholds salary during notice period, or makes unauthorized deductions from earned wages.',
    overview: 'The Payment of Wages Act, 1936 (and the corresponding provisions under the Code on Wages, 2019) guarantees that every employee is paid their earned remuneration punctually without unauthorized deductions. Under Section 5, wages must be disbursed before the expiry of the 7th day (for establishments with fewer than 1,000 workers) or the 10th day of the succeeding wage month. Section 7 strictly restricts deductions to statutory items like income tax, provident fund, and court-ordered attachments; arbitrary "performance deductions", "loss penalties", or "training bond recovery" are explicitly illegal. Under Section 15, an aggrieved employee can apply to the designated Authority, who has summary powers to direct not only full payment of withheld wages but also punitive compensation up to 10 times the amount of deducted wages.',
    statutoryBasis: 'Payment of Wages Act, 1936 — Section 3 (Responsibility for payment of wages), Section 5 (Time of payment of wages: 7th/10th of each month), Section 7 (Deductions which may be made from wages: exhaustive list), Section 15 (Claims arising out of deductions from wages or delay in payment of wages), Section 15(3) (Power of Authority to award compensation up to 10 times the deducted amount), Section 17A (Conditional attachment of property of employer); read with Code on Wages, 2019 (Sections 15, 17, 18, 45).',
    scopeAndEligibility: {
      whoCanInvoke: 'Any employed person across industrial establishments, factories, shops, commercial offices, and private firms whose wages have been delayed, withheld, or subjected to unauthorized deductions.',
      againstWhom: 'Employers, managing partners, factory owners, HR heads, and corporate entities responsible for wage disbursement.',
      statutoryExceptions: 'Deductions expressly sanctioned by law (income tax TDS, court-ordered maintenance, employee contribution to PF/ESI).'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Corporate Tech Company Halting Salary for 3 Months Pending Funding Round',
        facts: 'A digital agency told 40 engineers that due to delay in Series-A funding, salaries would be postponed for 3 months, while demanding that employees continue working 10 hours a day.',
        legalViolation: 'Severe violation of Section 5 Payment of Wages Act; wages cannot be made contingent upon third-party investor funding.',
        applicableRemedy: 'Filing joint Section 15 Application before the Payment of Wages Authority seeking 100% salary release plus statutory compensation.'
      },
      {
        scenarioTitle: 'Arbitrary 30% Deduction for Alleged "Non-Performance" or Target Shortfall',
        facts: 'An employer deducted ₹25,000 from a sales executive monthly pay slip claiming he fell 10% short of his quarterly sales target.',
        legalViolation: 'Unlawful deduction violating Section 7; performance penalties cannot be deducted from statutory wages.',
        applicableRemedy: 'Notice demanding immediate refund of ₹25,000, followed by Section 15 petition claiming 10x compensation.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Formal Demand Notice to Employer under Section 5',
        action: 'Issue an immediate written protest and legal demand letter demanding release of unpaid wages within 48 hours, highlighting that failure attracts criminal penalties under Section 20.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Preparation of Claim Petition under Section 15',
        action: 'Draft Claim Petition in prescribed Form-A (for individual) or Form-B (for group of employees) detailing wage period, wage rate, deductions, and total arrears.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Filing before the Payment of Wages Authority',
        action: 'File the petition before the designated Authority under the Payment of Wages Act (Assistant Labour Commissioner or Labour Court Judge).'
      },
      {
        stageNumber: 4,
        stageTitle: 'Application for Conditional Attachment of Employer Assets under Section 17A',
        action: 'If employer is likely to abscond or liquidate assets, file an application under Section 17A for conditional attachment of employer bank accounts and office equipment.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Summary Hearing & Evidence Presentation',
        action: 'Authority conducts summary inquiry, verifies employer attendance and payroll registers, and rejects unauthorized deductions.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Passage of Direction Order & Execution as Judicial Fine',
        action: 'Authority issues direction order under Section 15(3) for payment of wages plus compensation. Under Section 15(5), unpaid amounts are recovered by a Magistrate as if they were a judicial fine.'
      }
    ],
    documentsAndEvidence: [
      'Appointment letter or employment agreement specifying agreed monthly wage/CTC structure.',
      'Salary slips for preceding regular months establishing wage rate.',
      'Bank statement showing missing credit for the disputed wage month(s).',
      'Timesheet logs, biometric attendance records, or login history proving work performed.',
      'Written communications, emails, or WhatsApp messages admitting wage postponement.',
      'Copy of formal Legal Demand Notice served on employer with proof of delivery.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Authority appointed under Section 15 of Payment of Wages Act (Labour Court Judge / Assistant Labour Commissioner).',
      magistrateCourt: 'Judicial Magistrate of First Class (JMFC) for recovery of unpaid wage orders as a criminal fine (Section 15(5)).',
      appellateAuthority: 'District Court under Section 17 within 30 days of the Authority order (employer must deposit awarded sum).',
      criminalCourt: 'Magistrate Court for prosecution under Section 20 (punishable with fine up to ₹3,750 and imprisonment on subsequent conviction).'
    },
    limitationAndDeadlines: 'Application under Section 15 must be filed within 12 months from the date on which the deduction from wages was made or from the date on which wages were due (delay can be condoned upon showing sufficient cause); Appeal under Section 17 within 30 days.',
    possibleOutcomes: [
      'Summary judicial order directing immediate payment of 100% of unpaid wages.',
      'Award of statutory compensation up to 10 times the deducted amount (or up to ₹3,000 for delayed payment).',
      'Conditional attachment of employer bank accounts under Section 17A.',
      'Recovery of wages through Magistrate warrant like a criminal fine.',
      'Criminal prosecution of employer and directors under Section 20.'
    ],
    landmarkJudgments: [
      {
        title: 'Bijay Cotton Mills Ltd. v. State of Ajmer',
        citation: '1955 SCR (1) 752',
        court: 'Supreme Court of India',
        holding: 'Held that payment of fair and timely wages is an intrinsic component of fundamental rights under Article 19(1)(g) and Article 23 (prohibition of begar/forced labour). Non-payment of wages for work done amounts to forced labour.'
      },
      {
        title: 'Divisional Personnel Officer, Southern Railway v. S. Raghavendrachar',
        citation: '(1966) 3 SCR 106',
        court: 'Supreme Court of India',
        holding: 'Held that the Authority under the Payment of Wages Act has summary jurisdiction to adjudicate whether deductions made by the employer are legally authorized under Section 7, and strikes down arbitrary deductions.'
      },
      {
        title: 'People\'s Union for Democratic Rights (PUDR) v. Union of India (Asiad Workers)',
        citation: '(1982) 3 SCC 235',
        court: 'Supreme Court of India',
        holding: 'Held that paying less than the statutory wage or withholding wages of workers constitutes "forced labour" under Article 23 of the Constitution, opening direct writ jurisdiction under Article 32.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Verify whether the employee total wage falls within the state-specific wage ceiling or invoke the Code on Wages which covers all wage brackets without ceiling.',
      commonPitfalls: 'Waiting beyond the 12-month statutory limitation period without an application for condonation of delay.',
      tacticalAdvice: 'Always move a Section 17A application for conditional attachment of employer bank accounts on Day 1; the threat of frozen operational bank accounts forces immediate salary clearance.'
    },
    hindiExplanation: 'वेतन भुगतान अधिनियम, 1936 (Payment of Wages Act) और श्रम संहिता (Code on Wages) के अनुसार, हर नियोक्ता (Employer) को प्रत्येक माह की 7 से 10 तारीख के भीतर कर्मचारी का पूरा वेतन देना अनिवार्य है। कंपनी किसी भी कर्मचारी का वेतन मनमाने ढंग से नहीं काट सकती और न ही "फंडिंग न आने" या "टारगेट पूरा न होने" का बहाना बनाकर रोक सकती है। काम करवाकर वेतन न देना संविधान के अनुच्छेद 23 के तहत "बलात श्रम" (Forced Labour) है। वेतन न मिलने पर कर्मचारी श्रम न्यायालय के समक्ष धारा 15 के तहत दावा कर सकता है, जहां वेतन के साथ 10 गुना तक हर्जाना दिलाने का प्रावधान है।',
    faqs: [
      {
        q: 'Can my company hold back my last month salary if I resign without serving full notice period?',
        a: 'No. While the company may claim contractual notice pay through appropriate legal channels, they cannot arbitrarily withhold wages for days already worked. Forfeiture of earned salary for past work is unlawful.'
      },
      {
        q: 'What is the maximum compensation that the Authority can award for unauthorized salary deduction?',
        a: 'Under Section 15(3), the Authority has statutory power to award compensation up to ten times (10x) the amount unlawfully deducted, over and above the full payment of wages.'
      }
    ],
    tags: ['labour-workplace-rights', 'unpaid wages', 'payment of wages act', 'salary delay', 'section 15', 'forced labour', 'article 23', 'unauthorized deduction']
  },

  {
    id: 'rem-contract-labour-equal-pay',
    slug: 'contract-labour-equal-pay-regularization-remedies-clra',
    title: 'Equal Pay for Equal Work & Regularization Rights for Contract Labourers under CLRA Act & Article 39(d)',
    category: 'Workplace & Industrial Employee Rights',
    remedyType: 'Constitutional Equal Wage Mandate & Sham Contract Abolition',
    urgencyLevel: 'Medium to High (Systemic Wage Disparity Redressal)',
    forum: 'Controlling Authority under CLRA Act / Central Industrial Tribunal / High Court (Article 226)',
    summary: 'Authoritative legal strategy securing identical wage parity and statutory absorption for contractual workers performing identical core duties alongside regular employees under Rule 25(2)(v) and Article 39(d).',
    whenToUse: 'When contract labourers, agency workers, or third-party vendor staff perform the exact same operational duties as permanent employees but are paid a fraction of the wages without benefits.',
    overview: 'The practice of deploying contract workers to execute core, perennial manufacturing or operational functions while paying them discriminatory sub-standard wages is heavily regulated under the Contract Labour (Regulation and Abolition) Act, 1970 (CLRA Act) and the constitutional doctrine of "Equal Pay for Equal Work" enshrined in Article 14 and 39(d). Under Rule 25(2)(v)(a) of the Contract Labour (Regulation and Abolition) Central Rules, 1971, where the workman employed by the contractor performs the same or similar kind of work as the workmen directly employed by the principal employer, the wage rates, holidays, hours of work, and other conditions of service of the contract workman SHALL BE THE SAME as those of regular workmen. Furthermore, where the contract arrangement is a mere camouflage, ruse, or sham contract to evade labour statutes, courts pierce the corporate veil to direct immediate regularization and direct absorption.',
    statutoryBasis: 'Contract Labour (Regulation and Abolition) Act, 1970 — Section 7 (Registration of principal employer), Section 12 (Licensing of contractors), Section 10 (Prohibition of employment of contract labour in perennial work), Section 21 (Responsibility for payment of wages: principal employer secondary liability); CLRA Central Rules, 1971 — Rule 25(2)(v)(a) (Mandatory equal wage parity for same or similar work); Constitution of India — Article 14 (Equality), Article 39(d) (Equal pay for equal work for men and women), Article 21 (Right to live with dignity); read with Steel Authority of India Ltd. v. National Union Waterfront Workers.',
    scopeAndEligibility: {
      whoCanInvoke: 'Contract labourers, outsourced staff, agency workers, and trade unions operating in establishments employing 20 or more contract workers.',
      againstWhom: 'Principal Employers (Corporations, PSUs, Multinational Firms) and Manpower Supply Contractors.',
      statutoryExceptions: 'Does not apply where the work is genuinely temporary, casual, or distinct from the core perennial operations performed by regular permanent employees.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Contract Engineers in PSU Paid ₹18,000 while Regular Counterparts Earn ₹85,000 for Same Work',
        facts: '60 maintenance engineers hired through a vendor were stationed inside an oil refinery executing identical shifts, duties, and responsibilities as permanent PSU cadre engineers, but were paid ₹18,000 versus ₹85,000.',
        legalViolation: 'Flagrant violation of Rule 25(2)(v)(a) CLRA Rules and the constitutional mandate of Equal Pay for Equal Work (State of Punjab v. Jagjit Singh).',
        applicableRemedy: 'Filing claim before Deputy Chief Labour Commissioner (Central) under Rule 25(2)(v)(b) seeking formal parity determination, followed by writ petition before High Court.'
      },
      {
        scenarioTitle: 'Sham Contractor Agreement Used to Evade Permanent Cadre Creation',
        facts: 'Workers operated machines inside a manufacturing plant for 10 consecutive years under rotating intermediary contractor names while real supervision and appraisal were done by the factory manager.',
        legalViolation: 'Sham contract arrangement designed to circumvent labour welfare laws under SAIL doctrine.',
        applicableRemedy: 'Raising an industrial dispute claiming declaration of sham contract and direct permanent absorption into the principal employer payroll.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Duty Mapping & Evidence Collection of Identical Work',
        action: 'Document exact shift rosters, daily logbooks, job descriptions, and supervisory reporting lines proving that contract workers perform identical work as regular employees.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Verification of Principal Employer Registration & Contractor License',
        action: 'Inspect whether the Principal Employer has a Section 7 Registration Certificate and whether the Contractor possesses a Section 12 License; absence of either vitiates the contract arrangement.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Application for Wage Parity Determination under Rule 25(2)(v)(b)',
        action: 'File a formal application before the Chief Labour Commissioner / Commissioner of Labour seeking a determination that the work is "same or similar kind of work" under Rule 25.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Raising Industrial Dispute for Absorption & Abolition under Section 10',
        action: 'Raise a collective dispute through a registered trade union before the Industrial Tribunal challenging the contract as a sham and seeking absorption.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Filing Writ Petition under Article 226 before High Court',
        action: 'If the establishment is a State instrumentality or PSU, file a Writ of Mandamus before the High Court invoking Article 14 and State of Punjab v. Jagjit Singh for immediate wage parity.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Recovery of Wage Arrears from Principal Employer under Section 21',
        action: 'Under Section 21(4), if the contractor fails to pay parity wages, the Principal Employer is legally bound to pay the full difference directly to the contract workers.'
      }
    ],
    documentsAndEvidence: [
      'Gate passes, biometric punch logs, and duty rosters demonstrating continuous presence at principal employer plant.',
      'Copy of vendor contract agreements establishing work nature and supervisory hierarchy.',
      'Comparative job description chart detailing duties of contract staff versus permanent staff.',
      'Salary slips of contract workers and sample salary slips of regular cadre workers.',
      'Registration Certificate under Section 7 CLRA Act and Contractor License under Section 12.',
      'Official communications or emails from principal employer managers directing daily tasks.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Chief Labour Commissioner (Central or State) / Authority under Rule 25(2)(v) CLRA Rules.',
      adjudicatoryTribunal: 'Central Government Industrial Tribunal (CGIT) / Industrial Tribunal under Industrial Disputes Act.',
      writCourt: 'High Court under Article 226 for enforcement of fundamental right to Equal Pay for Equal Work.',
      advisoryBoard: 'Central / State Advisory Contract Labour Board for abolition of contract labour under Section 10.'
    },
    limitationAndDeadlines: 'Application under Rule 25 can be filed during continuous employment; wage arrears can be claimed for preceding 3 years under general law of limitation; no limitation for raising industrial dispute challenging sham contract during subsistence of contract.',
    possibleOutcomes: [
      'Binding determination by Labour Commissioner declaring work as "same or similar", granting 100% wage parity.',
      'Order directing Principal Employer to directly disburse wage differences to contract workers under Section 21(4).',
      'Industrial Tribunal award declaring contractor arrangement a sham and ordering direct permanent absorption.',
      'Direction prohibiting deployment of contract labour in perennial operational processes under Section 10.',
      'Recovery of statutory benefits (Gratuity, PF, Bonus, ESI) matching permanent employees.'
    ],
    landmarkJudgments: [
      {
        title: 'State of Punjab v. Jagjit Singh',
        citation: '(2017) 1 SCC 148',
        court: 'Supreme Court of India',
        holding: 'Historic ruling establishing that the principle of "Equal Pay for Equal Work" is an enforceable constitutional fundamental right under Article 14. Temporary, daily-wage, contractual, or ad-hoc employees discharging identical duties are entitled to the minimum of the pay scale of regular employees.'
      },
      {
        title: 'Steel Authority of India Ltd. (SAIL) v. National Union Waterfront Workers',
        citation: '(2001) 7 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Laid down the definitive test for sham contracts: if the contract labour arrangement is merely a camouflage or facade to conceal true employer-employee relationship, the Industrial Tribunal can declare the contract a sham and order direct absorption.'
      },
      {
        title: 'Dharwad District PWD Literate Daily Wage Employees Assn. v. State of Karnataka',
        citation: '(1990) 2 SCC 396',
        court: 'Supreme Court of India',
        holding: 'Held that continuous employment of workers on contractual or daily-wage terms for years while denying them equal pay amounts to unfair labour practice and exploitation incompatible with the socialist democratic republic.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Collect evidence of direct control: who sanctions leave, who conducts performance appraisals, and who issues daily task sheets; direct supervision by principal employer proves sham contract.',
      commonPitfalls: 'Claiming regularization under Article 226 without establishing that the contract was a sham before the Industrial Tribunal (Secretary, State of Karnataka v. Umadevi restrictions).',
      tacticalAdvice: 'Focus first on claiming "Equal Pay for Equal Work" under Rule 25 and Jagjit Singh; courts grant wage parity readily even while the more complex regularization dispute is pending before the tribunal.'
    },
    hindiExplanation: 'ठेका श्रम (विनियमन एवं उन्मूलन) अधिनियम, 1970 (CLRA Act) और संविधान के अनुच्छेद 39(d) के तहत "समान कार्य के लिए समान वेतन" (Equal Pay for Equal Work) एक मौलिक अधिकार है। यदि कोई ठेका कर्मचारी (Contract Worker/Agency Staff) कंपनी के नियमित कर्मचारियों जैसा ही काम करता है, तो नियम 25(2)(v) के अनुसार उसे नियमित कर्मचारियों के बराबर ही वेतन और सुविधाएं पाने का कानूनी हक है। सुप्रीम कोर्ट के जगजीत सिंह (2017) फैसले के अनुसार ठेका श्रमिकों को कम वेतन देना उनके साथ भेदभाव है। ठेकेदार द्वारा भुगतान न करने पर मुख्य कंपनी (Principal Employer) को पूरा वेतन देना होगा।',
    faqs: [
      {
        q: 'Can contract workers demand the exact same salary scale as permanent staff?',
        a: 'Yes. Under Rule 25(2)(v)(a) of CLRA Central Rules and Supreme Court in State of Punjab v. Jagjit Singh, if contract workers perform the same or similar duties, they are entitled to the same wage rates and allowances as regular employees.'
      },
      {
        q: 'If the contractor does not pay wages or runs away, who is responsible to pay the contract workers?',
        a: 'Under Section 21(4) of the CLRA Act, the Principal Employer (the main company where work was performed) is statutorily liable to pay the full wages and statutory dues to the contract workers.'
      }
    ],
    tags: ['labour-workplace-rights', 'contract labour', 'equal pay for equal work', 'clra act', 'jagjit singh', 'sham contract', 'regularization', 'wage parity']
  }
];
