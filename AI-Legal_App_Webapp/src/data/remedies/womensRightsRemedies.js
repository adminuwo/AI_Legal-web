// ─── WOMEN'S LEGAL PROTECTIONS & DOMESTIC VIOLENCE REMEDIES ─────────────────
// Authoritative statutory remedies under PWDVA 2005, POSH Act 2013, Maternity Benefit Act 1961, and BNS 2023

export const WOMENS_RIGHTS_REMEDIES = [
  {
    id: 'rem-pwdva-protection-orders',
    slug: 'protection-against-domestic-violence-residence-maintenance-pwdva',
    title: 'Protection Orders, Right of Residence & Monetary Relief under Domestic Violence Act (PWDVA 2005)',
    category: "Women's Legal Protections & DV Act",
    remedyType: 'Civil-Criminal Quasi-Adjudicatory Statutory Protection',
    urgencyLevel: 'Emergency (Ex-Parte Interim Orders within 3 Days)',
    forum: 'Court of Judicial Magistrate of First Class (JMFC) / Metropolitan Magistrate (MM)',
    summary: 'Comprehensive statutory remedy for aggrieved women facing domestic violence, providing immediate protection orders against abusers, non-dispossession from shared household, monthly maintenance, and compensation.',
    whenToUse: 'When a woman is subjected to physical abuse, emotional cruelty, verbal humiliation, economic deprivation, or threat of illegal eviction from the matrimonial or shared residence by husband or in-laws.',
    overview: 'The Protection of Women from Domestic Violence Act, 2005 (PWDVA) is a transformative social welfare statute designed to provide immediate civil remedies backed by criminal enforcement for women in domestic relationships. Unlike criminal prosecution under Section 85 BNS (formerly 498A IPC) which focuses on penal incarceration, the PWDVA prioritizes civil security: safeguarding the woman right to reside peacefully in the shared household (Section 17), restraining the abuser from committing acts of domestic violence or entering her workplace (Section 18), awarding monthly interim maintenance for herself and minor children (Section 20), granting temporary custody of children (Section 21), and awarding compensation for mental and physical trauma (Section 22). Breach of an interim or final protection order is made a cognizable and non-bailable criminal offence under Section 31.',
    statutoryBasis: 'Protection of Women from Domestic Violence Act, 2005 — Section 3 (Definition of Domestic Violence: Physical, Sexual, Verbal, Emotional, and Economic Abuse), Section 12 (Application to Magistrate), Section 17 (Right to reside in a shared household), Section 18 (Protection orders), Section 19 (Residence orders), Section 20 (Monetary reliefs), Section 21 (Custody orders), Section 22 (Compensation orders), Section 23 (Power to grant ex-parte interim orders), and Section 31 (Penalty for breach of protection order); read with PWDVA Rules, 2006.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any aggrieved woman who is, or has been, in a domestic relationship with the respondent (husband, live-in partner, or in-laws living in a shared household).',
      againstWhom: 'Adult male partner/husband, and pursuant to Supreme Court landmark ruling in Hiral P. Harsora v. Kusum Narottamdas Harsora, female relatives of the husband (mother-in-law, sister-in-law) are also amenable to proceedings.',
      statutoryExceptions: 'A casual acquaintance or brief guest not sharing a domestic household does not fall within the definition of "domestic relationship". Does not apply to disputes purely arising between commercial or business partners.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Threat of Throwing Out from Matrimonial Home & Financial Starvation',
        facts: 'A woman married for 4 years was locked out of her matrimonial apartment by her husband and mother-in-law while her husband emptied the joint bank account, leaving her with no shelter or financial means.',
        legalViolation: 'Severe economic and physical abuse under Section 3(a) & 3(iv) PWDVA; violation of the statutory Right to Shared Household under Section 17.',
        applicableRemedy: 'Filing Section 12 Application with Section 23 Affidavit seeking emergency ex-parte Residence Order under Section 19(1)(a) restraining dispossession and Section 20 interim maintenance.'
      },
      {
        scenarioTitle: 'Intimidation and Workplace Stalking by Estranged Husband',
        facts: 'Following separation, the husband constantly followed the woman to her office, made threatening calls to her employer, and harassed her colleagues to get her dismissed.',
        legalViolation: 'Verbal, emotional, and psychological domestic violence under Section 3(c) PWDVA, infringing personal dignity and right to livelihood.',
        applicableRemedy: 'Application for immediate Protection Order under Section 18(b) prohibiting the respondent from entering the place of employment or communicating with the aggrieved woman.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Immediate Approach to Protection Officer (PO) or Service Provider',
        action: 'Contact the designated District Protection Officer (PO) or registered Service Provider to prepare a statutory Domestic Incident Report (DIR) in Form-I as per PWDVA Rules.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Direct Filing of Application under Section 12 before JMFC / MM',
        action: 'Draft and file an Application under Section 12 before the Judicial Magistrate / Metropolitan Magistrate having jurisdiction over the woman current residence (permanent or temporary).'
      },
      {
        stageNumber: 3,
        stageTitle: 'Application for Ex-Parte Interim Orders under Section 23',
        action: 'Attach an Affidavit in Form-III seeking immediate ex-parte relief for residence, restrain orders against dispossession, and emergency maintenance without waiting for respondent notice.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Service of Notice & Magistrate First Hearing within 3 Days',
        action: 'Magistrate directs the Protection Officer to serve notice upon respondents and fixes the first returnable date within 3 days as required under Section 12(4) & (5).'
      },
      {
        stageNumber: 5,
        stageTitle: 'Filing of Income & Asset Affidavits (Rajnesh v. Neha Mandate)',
        action: 'Both petitioner and respondent must file comprehensive affidavits of disclosure of assets and liabilities strictly in accordance with the Supreme Court binding template in Rajnesh v. Neha.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Enforcement & Criminal Action for Breach under Section 31',
        action: 'If the respondent disobeys a protection order (e.g., attempts dispossession or harassment), immediately lodge a complaint; magistrate frames charge under Section 31 (imprisonment up to 1 year or fine).'
      }
    ],
    documentsAndEvidence: [
      'Domestic Incident Report (DIR) prepared by Protection Officer or Service Provider.',
      'Affidavit in support of Application in prescribed Form-III under PWDVA Rules, 2006.',
      'Mandatory Comprehensive Affidavit of Assets and Liabilities as per Rajnesh v. Neha guidelines.',
      'Proof of marriage (Certificate, photographs, wedding invitation, or joint documents) or proof of shared domestic living.',
      'Proof of current residence of the aggrieved woman (rent agreement, utility bill, or parents address proof).',
      'Medical injury reports (MLC), prescriptions, or psychiatric consultation notes documenting physical/mental abuse.',
      'WhatsApp messages, emails, audio/video recordings, call logs showing abuse, dowry demands, or eviction threats.',
      'Bank account statements of both spouses demonstrating standard of living and respondent financial capacity.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Judicial Magistrate of First Class (JMFC) or Metropolitan Magistrate (MM) having territorial jurisdiction over the place where the aggrieved woman permanently or temporarily resides or carries on business (Section 27).',
      protectionOfficers: 'District Protection Officers (PO) appointed by State Social Welfare Department under Section 8.',
      sessionsCourt: 'Sessions Court under Section 29 for statutory statutory appeal within 30 days against any order passed by the Magistrate.'
    },
    limitationAndDeadlines: 'Application under Section 12 has no strict limitation period for continuing domestic violence (Kamlesh Devi v. Jaipal); ex-parte interim orders under Section 23 must be considered within 3 days; total disposal of Section 12 application mandated within 60 days from first hearing (Section 12(5)); Appeal under Section 29 must be filed within 30 days.',
    possibleOutcomes: [
      'Ex-parte Interim Protection Order under Section 18 restraining violence, stalking, and communications.',
      'Residence Order under Section 19 restraining dispossession from shared household or directing husband to provide alternate suitable accommodation at his expense.',
      'Monetary Relief under Section 20 providing monthly maintenance, medical expenses, and loss of earnings.',
      'Temporary Custody Order under Section 21 granting physical custody of minor children to the mother.',
      'Lump-sum Compensation Order under Section 22 for emotional distress, mental agony, and physical injuries.',
      'Registration of non-bailable criminal proceedings under Section 31 for breach of court order.'
    ],
    landmarkJudgments: [
      {
        title: 'Satish Chander Ahuja v. Sneha Ahuja',
        citation: '(2021) 1 SCC 414',
        court: 'Supreme Court of India',
        holding: 'Overruled S.R. Batra; held that "shared household" under Section 2(s) is not limited to premises owned exclusively by the husband. An aggrieved woman has a statutory right to live in a house belonging to or rented by in-laws where she lived in a domestic relationship.'
      },
      {
        title: 'Hiral P. Harsora v. Kusum Narottamdas Harsora',
        citation: '(2016) 10 SCC 165',
        court: 'Supreme Court of India',
        holding: 'Struck down the words "adult male person" in Section 2(q); held that domestic violence complaints are maintainable against female relatives of the husband (mother-in-law, sister-in-law) who subject the woman to abuse in a shared household.'
      },
      {
        title: 'Rajnesh v. Neha',
        citation: '(2021) 2 SCC 324',
        court: 'Supreme Court of India',
        holding: 'Laid down mandatory uniform procedural guidelines for maintenance applications across India. Both parties must compulsorily file detailed asset and income disclosures to eliminate false income denials and ensure rapid interim maintenance from the date of application.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Always route a parallel copy through the Protection Officer to obtain a formal DIR; courts give strong initial weight to a DIR filed by an independent public officer under Section 12(1) proviso.',
      commonPitfalls: 'Failing to file the Rajnesh v. Neha asset disclosure affidavit alongside the Section 12 petition, resulting in prolonged adjournment and delay in securing interim maintenance.',
      tacticalAdvice: 'Do not wait for trial to seek residence protection; invoke Section 23 on Day 1 for an immediate ex-parte status quo order preventing changing of locks or alienation of the shared apartment.'
    },
    hindiExplanation: 'घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005 (PWDVA) पीड़ित महिलाओं को तुरंत सुरक्षा, साझा घर में रहने का अधिकार (Residence Right), मासिक गुजारा भत्ता (Maintenance), और बच्चों की कस्टडी दिलाने वाला एक सशक्त कानून है। यदि कोई महिला पति या ससुराल वालों द्वारा मारपीट, मानसिक प्रताड़ना, ताने, या घर से निकाले जाने की धमकी का सामना करती है, तो वह सीधे मजिस्ट्रेट की अदालत में अर्जी देकर सुरक्षा आदेश और साझा घर में रहने का आदेश प्राप्त कर सकती है। आदेश का उल्लंघन होने पर आरोपी को धारा 31 के तहत गैर-जमानती जेल हो सकती है।',
    faqs: [
      {
        q: 'Can a woman claim right of residence if the house is in the sole name of her father-in-law?',
        a: 'Yes. Following the Supreme Court ruling in Satish Chander Ahuja v. Sneha Ahuja (2021), a woman cannot be arbitrarily evicted from the shared household merely because title belongs to the father-in-law, provided she resided there in a domestic relationship.'
      },
      {
        q: 'Does filing a domestic violence case prevent claiming maintenance under Section 144 BNSS (old 125 CrPC)?',
        a: 'No. The remedies under PWDVA are in addition to and not in derogation of any other law. However, as per Rajnesh v. Neha, any maintenance awarded in one forum will be adjusted against awards in another to avoid duplicate enrichment.'
      }
    ],
    tags: ['womens-rights', 'domestic violence', 'pwdva', 'shared household', 'protection order', 'residence order', 'rajnesh v neha', 'maintenance']
  },

  {
    id: 'rem-posh-workplace-harassment',
    slug: 'workplace-sexual-harassment-redressal-internal-committee-posh',
    title: 'Workplace Sexual Harassment Redressal: Internal Committee Inquiry & Protections under POSH Act, 2013',
    category: "Women's Legal Protections & DV Act",
    remedyType: 'Statutory Workplace Grievance & Disciplinary Adjudication',
    urgencyLevel: 'High (Complaint within 90 Days; Inquiry in 90 Days)',
    forum: 'Internal Committee (IC) / Local Committee (LC) / Central Industrial Tribunal / High Court (Writ)',
    summary: 'Statutory quasi-judicial framework ensuring zero tolerance for sexual harassment at workplaces, time-bound inquiries within 90 days, interim protective transfers, and disciplinary termination of perpetrators.',
    whenToUse: 'When a female employee, intern, contract worker, or visitor is subjected to unwelcome physical contact, sexually colored remarks, demands for sexual favors (quid pro quo), or hostile work environment.',
    overview: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act) translates the historic Vishaka guidelines into a robust statutory code. Every workplace employing 10 or more employees is mandated to establish an Internal Committee (IC) headed by a senior woman presiding officer with at least one external independent NGO member (Section 4). The statute empowers women across all employment categories (regular, temporary, contractual, intern, or voluntary) to lodge complaints of sexual harassment. The IC holds statutory powers of a civil court to summon witnesses and compel document production. During inquiry, the IC can recommend interim reliefs such as transferring the complainant or respondent, granting up to 3 months paid leave, and restraining appraisal interference. Disciplinary recommendations are binding on the management.',
    statutoryBasis: 'POSH Act, 2013 — Section 2(n) (Definition of Sexual Harassment: physical contact, demand for sexual favors, sexually colored remarks, showing pornography, unwelcome conduct), Section 3 (Prevention of hostile work environment), Section 4 (Constitution of Internal Committee), Section 9 (Complaint within 3 months), Section 10 (Conciliation), Section 11 (Formal Inquiry as per Service Rules / Principles of Natural Justice), Section 12 (Action during pendency of inquiry: interim reliefs), Section 13 (Inquiry report & penalties), Section 18 (Statutory Appeal within 90 days); read with POSH Rules, 2013.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any aggrieved woman of any age, employed or not, who alleges having been subjected to any act of sexual harassment in a workplace (including remote working/virtual office).',
      againstWhom: 'Any male employee, manager, supervisor, director, vendor, contractor, or co-worker operating within the employer organization.',
      statutoryExceptions: 'Does not adjudicate generalized salary or performance review disputes lacking any gender or sexual undertone; however, retaliation linked to rejecting advances constitutes sexual harassment.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Quid Pro Quo: Advancement Conditioned on Sexual Compliance',
        facts: 'A marketing associate was told by her vice president that her confirmed promotion and foreign assignment depended on her attending a private weekend dinner alone with him.',
        legalViolation: 'Classic Quid Pro Quo sexual harassment under Section 3(2)(i) & (ii) POSH Act; blatant abuse of managerial authority.',
        applicableRemedy: 'Filing written complaint before the Internal Committee (IC) with Section 12 request for immediate reassignment of reporting hierarchy and protection against adverse appraisal.'
      },
      {
        scenarioTitle: 'Hostile Digital Work Environment & Inappropriate Virtual Messages',
        facts: 'During work-from-home hours, a senior manager repeatedly sent suggestive late-night WhatsApp emojis, commented on the woman appearance during Zoom meetings, and passed sexualized innuendos.',
        legalViolation: 'Creation of an intimidating, hostile, and offensive work environment under Section 3(2)(iv) & Section 2(n) POSH Act.',
        applicableRemedy: 'Submission of formal POSH complaint with archived digital screenshots, requesting IC to restrain respondent from any digital or physical interaction.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Submission of Written Complaint to IC Presiding Officer',
        action: 'Submit 6 copies of the written complaint along with supporting documents and list of witnesses to the Internal Committee within 3 months of the incident.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Notice to Respondent & Submission of Reply within 10 Days',
        action: 'The IC sends a copy of the complaint to the respondent within 7 working days. The respondent must submit his written response with supporting documents within 10 working days.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Application for Interim Protections under Section 12',
        action: 'The complainant can request the IC to recommend: (a) transfer of complainant or respondent to another department, (b) grant of up to 3 months paid leave in addition to statutory leave, or (c) restraining respondent from writing appraisal.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Formal Inquiry Adhering to Principles of Natural Justice',
        action: 'The IC conducts formal inquiry, examines complainant and respondent separately, hears witnesses, examines electronic records, and maintains strict confidentiality. Legal practitioners are barred from representing parties (Section 16).'
      },
      {
        stageNumber: 5,
        stageTitle: 'Submission of Inquiry Report within 90 Days',
        action: 'The IC must conclude the entire inquiry within 90 days from receipt of complaint and dispatch its final Inquiry Report with findings and recommendations to the Employer and both parties within 10 days.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Implementation of Disciplinary Action by Employer',
        action: 'The employer is statutorily mandated to act upon the recommendations of the IC (warning, withholding promotion, salary deduction for compensation, or termination of service) within 60 days.'
      }
    ],
    documentsAndEvidence: [
      'Written complaint detailing chronology, exact words, physical conduct, dates, and locations.',
      'Screenshots of emails, Slack/Teams chats, WhatsApp messages, and text messages (accompanied by Section 63 BSA certificate).',
      'Call logs, voice recordings, or CCTV footage of shared office spaces.',
      'List of witnesses (colleagues, team members, security staff) with contact details.',
      'Performance reviews or appraisal records demonstrating work competence prior to reporting.',
      'Medical or psychological counseling records documenting stress, anxiety, or trauma.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Internal Committee (IC) of the establishment (mandatory for organizations with 10+ employees).',
      localCommittee: 'Local Committee (LC) constituted by District Officer for establishments with fewer than 10 workers or where complaint is against the Employer himself.',
      appellateAuthority: 'Appellate Authority under Service Rules or Industrial Tribunal / Labour Court under Section 18 of POSH Act within 90 days.',
      writJurisdiction: 'High Court under Article 226 for quashing biased or defectively constituted IC proceedings.'
    },
    limitationAndDeadlines: 'Complaint must be filed within 3 months from the date of incident (extendable by another 3 months by IC for valid reasons recorded in writing); inquiry must be concluded within 90 days; IC report to be submitted within 10 days of completion; employer must act within 60 days; appeal under Section 18 within 90 days.',
    possibleOutcomes: [
      'Written apology and mandatory reprimand recorded in service record.',
      'Withholding of promotion, bonus, increment, or pay raise of the respondent.',
      'Deduction from respondent salary towards monetary compensation paid directly to the aggrieved woman.',
      'Termination of employment / dismissal from service without severance benefits.',
      'Parallel criminal complaint forwarded to police under Section 78/79 BNS if cognizable criminal offence is disclosed.'
    ],
    landmarkJudgments: [
      {
        title: 'Vishaka v. State of Rajasthan',
        citation: '(1997) 6 SCC 241',
        court: 'Supreme Court of India',
        holding: 'Laid down original binding guidelines declaring gender equality includes protection from sexual harassment; held that workplace sexual harassment violates Articles 14, 19(1)(g), and 21 of the Constitution.'
      },
      {
        title: 'Aureliano Fernandes v. State of Goa',
        citation: '(2023) SCC OnLine SC 621',
        court: 'Supreme Court of India',
        holding: 'Expressly highlighted systemic non-compliance with the POSH Act nationwide; issued time-bound directions to all Union ministries, state governments, professional bodies, and private establishments to verify proper constitution and publicization of ICs.'
      },
      {
        title: 'Punjab National Bank v. Astik Kumar',
        citation: '2023 SCC OnLine Del 3412',
        court: 'Delhi High Court',
        holding: 'Held that inquiry under POSH Act must strictly adhere to principles of natural justice and cannot be conducted casually; external member presence is mandatory to prevent internal institutional bias.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Verify whether the IC constitution complies with Section 4 (at least 50% women members and a verified independent external NGO member); defective IC composition vitiates the entire inquiry.',
      commonPitfalls: 'Engaging in informal HR conciliation without a formal written complaint, causing the 90-day statutory limitation clock to run out.',
      tacticalAdvice: 'Immediately seek written interim protection under Section 12 to ensure the respondent cannot tamper with witnesses, influence performance ratings, or intimidate junior colleagues.'
    },
    hindiExplanation: 'कार्यस्थल पर महिलाओं का यौन उत्पीड़न (रोकथाम, निषेध और निवारण) अधिनियम, 2013 (POSH Act) के तहत हर उस कंपनी या संस्थान में, जहां 10 या अधिक कर्मचारी हैं, एक आंतरिक समिति (Internal Committee - IC) बनाना अनिवार्य है। किसी भी महिला कर्मचारी, इंटर्न या अनुबंध कर्मी के साथ अवांछित शारीरिक स्पर्श, अश्लील फब्तियां, यौन संबंध की मांग, या पोर्नोग्राफी दिखाना गैरकानूनी है। महिला घटना के 3 महीने के भीतर IC को शिकायत दे सकती है। IC को 90 दिनों में निष्पक्ष जांच पूरी करनी होती है और दोषी पाए जाने पर आरोपी की नौकरी समाप्त की जा सकती है।',
    faqs: [
      {
        q: 'Can a woman file a POSH complaint if the sexual harassment took place during an official office party outside the office premises?',
        a: 'Yes. Section 2(o) defines "workplace" widely to include any place visited by the employee arising out of or during the course of employment, including transportation provided by the employer, off-site retreats, and client dinners.'
      },
      {
        q: 'Can a lawyer appear and argue on behalf of the parties during the Internal Committee inquiry?',
        a: 'No. Section 16 of the POSH Act and Rule 7(6) explicitly prohibit the presence of legal practitioners during IC proceedings to keep the atmosphere non-adversarial, although parties may seek external legal advice outside hearing sessions.'
      }
    ],
    tags: ['womens-rights', 'posh act', 'sexual harassment', 'internal committee', 'quid pro quo', 'vishaka', 'workplace equality', 'natural justice']
  },

  {
    id: 'rem-maternity-benefits-denial',
    slug: 'maternity-leave-benefit-recovery-unlawful-discharge-protection',
    title: 'Protection against Maternity Discrimination, Termination & Wage Recovery under Maternity Benefit Act, 1961',
    category: "Women's Legal Protections & DV Act",
    remedyType: 'Statutory Employment Welfare Enforcement & Recovery',
    urgencyLevel: 'High (Immediate Injunction Against Discharge)',
    forum: 'Inspector / Controlling Authority under Maternity Benefit Act / Labour Court / High Court',
    summary: 'Statutory protection securing 26 weeks of paid maternity leave, crèche facilities, and absolute legal prohibition against firing, demoting, or altering service conditions of pregnant or newly-mother employees.',
    whenToUse: 'When an employer terminates, lays off, reduces salary, denies statutory 26-week paid leave, or fails to pay maternity bonus to an eligible female employee during pregnancy or postnatal care.',
    overview: 'The Maternity Benefit Act, 1961 (as amended extensively by the Maternity Benefit Amendment Act, 2017) is an unyielding social welfare legislation enacting the constitutional mandate of Article 42 (just and humane conditions of work and maternity relief). Section 12 enacts an absolute statutory embargo: it is completely unlawful for an employer to discharge, dismiss, or give notice of termination to a woman during or on account of her absence on maternity leave. Section 5 guarantees 26 weeks of fully paid maternity benefit for women who worked with the employer for at least 80 days in the preceding 12 months. Any dismissal made during this period is void ab initio, and the employer remains legally bound to pay full maternity benefits and wages. Furthermore, establishments with 50 or more employees are legally bound to provide a crèche facility with 4 daily visits allowed to the mother.',
    statutoryBasis: 'Maternity Benefit Act, 1961 — Section 5 (Right to payment of maternity benefit for 26 weeks), Section 5A (Continuance of benefit in case of death), Section 6 (Notice of claim for maternity benefit), Section 8 (Payment of medical bonus of ₹3,500), Section 9 (Leave for miscarriage or medical termination of pregnancy for 6 weeks), Section 11A (Mandatory crèche facility for establishments with 50+ workers), Section 12 (Dismissal during absence or pregnancy void and unlawful), Section 17 (Power of Inspector to direct payments), and Section 21 (Penalty for contravention: imprisonment up to 1 year and fine); read with Article 42 Constitution of India.',
    scopeAndEligibility: {
      whoCanInvoke: 'Any female employee (permanent, contractual, ad-hoc, consultant, or probationer) who has worked in the establishment for a period of not less than 80 days in the 12 months immediately preceding the date of expected delivery.',
      againstWhom: 'Private companies, factories, mines, plantations, IT/corporate offices, shops, establishments, and government bodies employing 10 or more persons.',
      statutoryExceptions: 'Does not apply to establishments covered under the Employees State Insurance Act, 1948 (ESI Act), where corresponding maternity benefits are disbursed directly by ESIC.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Sudden Retrenchment on Disclosing 4 Months Pregnancy',
        facts: 'A software engineer with 2 years of outstanding reviews disclosed her pregnancy to HR and requested maternity leave scheduling. Two weeks later, she was served a termination letter citing sudden "restructuring".',
        legalViolation: 'Flagrant violation of Section 12 of the Maternity Benefit Act, 1961; constitutes null and void termination in law and actionable gender discrimination.',
        applicableRemedy: 'Filing statutory complaint before the State Labour Inspector under Section 17 seeking reinstatement, back wages, and punitive prosecution under Section 21.'
      },
      {
        scenarioTitle: 'Contract Termination of a Contractual Doctor upon Maternity Leave',
        facts: 'A medical doctor hired on an annually renewed contract was refused contract renewal purely because she applied for 6 months maternity leave.',
        legalViolation: 'Violation of Section 5 & 12; contract non-renewal purely due to maternity leave is invalid under Supreme Court ruling in Dr. Kavita Yadav v. Secy., Ministry of Health.',
        applicableRemedy: 'Filing writ petition under Article 226 before High Court seeking declaration that maternity benefit continues beyond contract expiration.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Submission of Formal Written Notice under Section 6',
        action: 'Submit written notice in Form-E to the employer specifying the date from which absence is required, accompanied by a medical certificate of pregnancy (Form-B) from a registered medical practitioner.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Legal Protest against Unlawful Termination / Denial Letter',
        action: 'If the employer issues a termination notice or denies leave, serve a formal Legal Notice citing Section 12 and Dr. Kavita Yadav ruling, demanding immediate revocation within 7 days.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Statutory Complaint before the District Labour Inspector under Section 17',
        action: 'File a formal complaint before the Competent Authority / Labour Inspector under Section 17(1) for recovery of improperly withheld maternity benefits and wages.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Inspector Inquiry & Summary Recovery Order',
        action: 'The Inspector conducts an inquiry, examines employer payroll records, and passes a binding recovery order directing the employer to pay the entire maternity benefit within a specified timeline.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Filing of Criminal Complaint under Section 21',
        action: 'If the employer refuses to comply, the Inspector or the employee can initiate criminal prosecution before the JMFC under Section 21 (punishable with mandatory imprisonment of 3 months to 1 year).'
      },
      {
        stageNumber: 6,
        stageTitle: 'High Court Writ Petition / Industrial Tribunal Dispute',
        action: 'Approach High Court (for PSUs/State instrumentalities) or Labour Court for quashing the illegal termination order, full reinstatement with continuity of service, and punitive damages.'
      }
    ],
    documentsAndEvidence: [
      'Statutory Notice of pregnancy submitted under Section 6 (Form-E) with proof of delivery/email.',
      'Medical Certificate of pregnancy / expected date of confinement issued by MBBS/MD Gynecologist.',
      'Appointment letter, employment contract, and continuous salary slips proving 80 days of work in preceding 12 months.',
      'Termination letter, layoff email, or written refusal of maternity leave issued by employer.',
      'Bank statements reflecting salary credits prior to leave.',
      'Copies of HR email correspondences requesting leave and employer arbitrary rejection.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Inspector appointed under Section 14 of Maternity Benefit Act / Deputy Labour Commissioner.',
      appellateAuthority: 'Competent Authority prescribed under State Rules within 30 days of Inspector decision.',
      labourCourt: 'Labour Court / Industrial Tribunal under Industrial Disputes Act for full reinstatement and back-wages.',
      highCourt: 'High Court under Article 226 for writ of certiorari against arbitrary termination.'
    },
    limitationAndDeadlines: 'Notice of claim under Section 6 should be given before or immediately after delivery; complaint to Inspector under Section 17 can be filed immediately upon withholding; appeal against Inspector decision within 30 days; criminal complaint under Section 21 within 1 year.',
    possibleOutcomes: [
      'Order holding termination letter void ab initio and directing full reinstatement.',
      'Full payment of 26 weeks paid salary along with medical bonus of ₹3,500.',
      'Imposition of interest on delayed maternity disbursements.',
      'Prosecution of directors/management under Section 21 with imprisonment up to 1 year.',
      'Direction to the establishment to install crèche facilities under Section 11A.'
    ],
    landmarkJudgments: [
      {
        title: 'Municipal Corporation of Delhi v. Female Workers (Muster Roll)',
        citation: '(2000) 3 SCC 224',
        court: 'Supreme Court of India',
        holding: 'Held that maternity benefits cannot be denied to daily-wage, muster roll, or contractual women workers. The provisions of the Maternity Benefit Act are anchored in constitutional human rights under Articles 14, 15, and 42.'
      },
      {
        title: 'Dr. Kavita Yadav v. Secy., Ministry of Health and Family Welfare',
        citation: '(2024) 1 SCC 421',
        court: 'Supreme Court of India',
        holding: 'Held that an eligible female employee on contract is entitled to the full 26 weeks of maternity benefits under Section 5, even if her fixed-term employment contract expires during the period of her maternity leave.'
      },
      {
        title: 'B. Shah v. Presiding Officer, Labour Court, Coimbatore',
        citation: '(1977) 4 SCC 584',
        court: 'Supreme Court of India',
        holding: 'Computation of maternity benefit wages must include Sundays and rest days; the objective of the Act is to ensure that the woman worker maintains her normal economic status without deprivation during maternity.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Count the exact number of days worked in the preceding 12 months; establish that 80 days threshold is crossed through payslips or attendance punch logs.',
      commonPitfalls: 'Accepting a severance package with an all-inclusive waiver clause before challenging unlawful pregnancy-related retrenchment.',
      tacticalAdvice: 'Immediately issue an advocate legal notice invoking Section 12; employers face mandatory criminal prosecution under Section 21 for terminating pregnant employees, leading to rapid out-of-court settlements.'
    },
    hindiExplanation: 'मातृत्व लाभ अधिनियम, 1961 (Maternity Benefit Act) के तहत हर कामकाजी महिला को 26 सप्ताह (लगभग 6 महीने) का सवेतन (Paid) मातृत्व अवकाश पाने का कानूनी अधिकार है। धारा 12 के तहत गर्भावस्था के दौरान या मातृत्व अवकाश पर होने के कारण किसी भी महिला को नौकरी से निकालना, डिमोट करना या वेतन काटना पूरी तरह गैरकानूनी और अमान्य है। यदि कोई कंपनी ऐसा करती है, तो महिला श्रम निरीक्षक (Labour Inspector) के पास शिकायत कर सकती है। कंपनी के निदेशकों को 1 साल तक की जेल हो सकती है और महिला को नौकरी पर वापस रखने का आदेश दिया जाता है।',
    faqs: [
      {
        q: 'Does a contractual or probationary employee have the right to 26 weeks paid maternity leave?',
        a: 'Yes. The Supreme Court in Dr. Kavita Yadav (2024) and Municipal Corporation of Delhi (2000) held that contractual, temporary, and probationer women workers are equally entitled to full 26 weeks maternity benefits if they worked 80 days.'
      },
      {
        q: 'What is the remedy if the employer terminates employment before the maternity leave begins?',
        a: 'Under Section 12(2)(a), even if discharge occurs during pregnancy, the employer cannot deprive the woman of the maternity benefit or medical bonus unless dismissal was for gross misconduct proven through domestic inquiry.'
      }
    ],
    tags: ['womens-rights', 'maternity benefit', 'pregnancy discrimination', 'section 12', 'dr kavita yadav', 'paid leave', 'labour law', 'unlawful termination']
  },

  {
    id: 'rem-dowry-cruelty-bns-85',
    slug: 'protection-against-dowry-harassment-matrimonial-cruelty-bns-85-86',
    title: 'Remedies Against Matrimonial Cruelty & Dowry Harassment under Sections 85 & 86 Bharatiya Nyaya Sanhita, 2023',
    category: "Women's Legal Protections & DV Act",
    remedyType: 'Penal Prosecution & Protective Police Safeguards',
    urgencyLevel: 'Emergency (Arrest Safeguards & Strife Injunctions)',
    forum: 'Mahila Police Station / Judicial Magistrate of First Class (JMFC) / Sessions Court',
    summary: 'Criminal legal remedy empowering married women against physical torture, mental torment, and unlawful demands for dowry/property by husband or relatives under the newly enacted Bharatiya Nyaya Sanhita.',
    whenToUse: 'When a woman is subjected to willful conduct causing grave injury or suicide risk, persistent taunting, physical beatings, or extortionate demands for valuable security or money by her marital family.',
    overview: 'Sections 85 and 86 of the Bharatiya Nyaya Sanhita, 2023 (BNS) succeed the landmark Section 498A of the Indian Penal Code, codifying penal sanctions against matrimonial cruelty and dowry harassment. Section 85 penalizes the husband or his relative with imprisonment up to 3 years and fine for subjecting a woman to cruelty. Cruelty is exhaustively defined in Section 86 as: (a) any willful conduct of such a nature as is likely to drive the woman to commit suicide or cause grave injury or danger to life, limb, or physical/mental health; or (b) harassment of the woman with a view to coercing her or any person related to her to meet any unlawful demand for any property or valuable security. Additionally, Sections 3 and 4 of the Dowry Prohibition Act, 1961 penalize the giving, taking, or demanding of dowry, while Section 6 mandates that any dowry given must be held in trust for the benefit of the woman and restored to her within 3 months.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 (BNS) — Section 85 (Husband or relative of husband subjecting woman to cruelty), Section 86 (Statutory Definition of Cruelty: physical/mental harm or coercion for property), Section 80 (Dowry death within 7 years of marriage); Dowry Prohibition Act, 1961 — Section 3 (Penalty for giving or taking dowry), Section 4 (Penalty for demanding dowry), Section 6 (Restitution of dowry/stridhan to woman); read with Sections 35 & 173 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS).',
    scopeAndEligibility: {
      whoCanInvoke: 'The aggrieved married woman, or her father, mother, brother, sister, or other blood relatives.',
      againstWhom: 'Husband of the woman, and relatives of the husband (blood, marriage, or adoption).',
      statutoryExceptions: 'Does not apply to general matrimonial wear and tear, petty domestic arguments, or refusal to accommodate unreasonable demands without cruelty or dowry linkage.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Extortionate Demands for Car & Flat after Marriage',
        facts: 'Six months after marriage, the husband and his parents began repeatedly locking the wife in a dark room and physically assaulting her, demanding ₹15 Lakhs and a luxury vehicle from her retired father.',
        legalViolation: 'Cognizable offence of Cruelty under Sections 85 & 86(b) BNS 2023 and Section 4 Dowry Prohibition Act, 1961.',
        applicableRemedy: 'Lodge written FIR at Mahila Police Station; apply for recovery of Stridhan items and gold jewelry under Section 6 Dowry Prohibition Act.'
      },
      {
        scenarioTitle: 'Systematic Mental Torture and Provocation to Suicide',
        facts: 'A woman was denied food, constantly insulted about her appearance, stripped of her phone, and told daily to jump off the balcony so the husband could remarry a wealthy heiress.',
        legalViolation: 'Willful conduct likely to drive a woman to commit suicide under Section 86(a) BNS 2023.',
        applicableRemedy: 'Emergency complaint to Police Commissioner under Section 173(4) BNSS; immediate referral to medical examination and filing Section 12 PWDVA application.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Medical Examination & Documentation of Physical Assault',
        action: 'Immediately visit a Government Hospital for Medico-Legal Examination (MLC) to create an official forensic record of bruises, fractures, or abrasions.'
      },
      {
        stageNumber: 2,
        stageTitle: 'Submission of Detailed Written Complaint at Mahila Police Station',
        action: 'Submit a chronologically organized complaint detailing specific roles of husband and in-laws, dowry demands, dates, and locations at the specialized Women Police Station (Crime Against Women Cell).'
      },
      {
        stageNumber: 3,
        stageTitle: 'Preliminary Conciliation / Arnesh Kumar Safeguards Compliance',
        action: 'Under Arnesh Kumar v. State of Bihar and Section 35(3) BNSS, police issue notice of appearance to accused. Pre-litigation mediation is conducted by CAW Cell for amicable reconciliation or peaceful settlement.'
      },
      {
        stageNumber: 4,
        stageTitle: 'Registration of Zero FIR / Regular FIR under Section 173 BNSS',
        action: 'If mediation fails or physical violence is evident, police must register formal FIR under Section 85 BNS and Section 3/4 Dowry Prohibition Act.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Recovery of Stridhan under Section 6 Dowry Prohibition Act',
        action: 'Police seize Stridhan (gold jewelry, gifts, furniture, cash, vehicle) listed during marriage ceremonies and execute a Panchnama handing over items into the woman custody.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Filing of Chargesheet & Framing of Charges before JMFC',
        action: 'Police complete investigation, record witness statements under Section 180 BNSS, and file Chargesheet under Section 193 BNSS for trial before the Judicial Magistrate.'
      }
    ],
    documentsAndEvidence: [
      'Original Medico-Legal Examination Report (MLC) documenting physical injuries and trauma.',
      'Comprehensive signed list of Stridhan items, jewelry, and gifts prepared during wedding functions.',
      'Receipts, bills, and bank statements showing purchase of gold jewelry, electronics, and cash transfers.',
      'Audio recordings, WhatsApp chats, text messages, or emails proving dowry demands or verbal threats.',
      'Photographs and wedding invitations proving solemnization of marriage.',
      'Independent witness statements from neighbors, building security, or relatives who witnessed cruelty.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Specialized Mahila Police Station / Crime Against Women (CAW) Cell of the district.',
      magistrateCourt: 'Court of Judicial Magistrate of First Class (JMFC) having jurisdiction over place of marriage, matrimonial home, or parental home where woman took shelter (Section 198 BNSS / Sunita Kumari Soni ruling).',
      sessionsCourt: 'Sessions Court for regular trial or revisional applications.'
    },
    limitationAndDeadlines: 'Limitation under Section 468 CrPC / 514 BNSS is 3 years from the date of the last act of cruelty; however, ongoing denial of Stridhan or continuing cruelty creates a continuing cause of action; Stridhan must be restored within 3 months under Section 6 DP Act.',
    possibleOutcomes: [
      'Registration of FIR under Section 85 BNS 2023 and Section 3/4 Dowry Prohibition Act.',
      'Recovery and immediate physical restoration of all Stridhan and gold jewelry.',
      'Trial and conviction with rigorous imprisonment up to 3 years and substantial fine.',
      'Parallel civil injunction restraining husband from alienating assets or matrimonial property.',
      'Possibility of mediated compromise and execution of settlement agreement with full financial alimony.'
    ],
    landmarkJudgments: [
      {
        title: 'Arnesh Kumar v. State of Bihar',
        citation: '(2014) 8 SCC 273',
        court: 'Supreme Court of India',
        holding: 'Held that police cannot automatically arrest the husband or in-laws upon registration of Section 498A IPC (now 85 BNS); mandatory compliance with Section 41 CrPC (now Section 35 BNSS) requiring notice of appearance and recorded objective reasons before arrest.'
      },
      {
        title: 'Social Action Forum for Manav Adhikar v. Union of India',
        citation: '(2018) 10 SCC 443',
        court: 'Supreme Court of India',
        holding: 'Modified Rajesh Sharma; dismantled Family Welfare Committees as extra-statutory barriers, reiterating that legitimate criminal investigation by police cannot be delayed or impeded in genuine cases of cruelty.'
      },
      {
        title: 'Rupali Devi v. State of Uttar Pradesh',
        citation: '(2019) 5 SCC 384',
        court: 'Supreme Court of India',
        holding: 'Held that a married woman forced out of her matrimonial home can file a cruelty complaint at the place where she takes shelter with her parents, as the adverse mental impact of cruelty continues at her parental residence.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Draft a clear, itemized Stridhan list with original bills and photographs; courts give paramount importance to immediate retrieval of wedding jewelry.',
      commonPitfalls: 'Over-implicating distant relatives (married sisters-in-law living abroad, distant cousins) without specific overt acts; such names are frequently quashed by the High Court under Section 528 BNSS (old 482 CrPC).',
      tacticalAdvice: 'Simultaneously initiate proceedings under Section 12 PWDVA for immediate maintenance and residence orders while the police pursue the criminal complaint under Section 85 BNS.'
    },
    hindiExplanation: 'भारतीय न्याय संहिता, 2023 (BNS) की धारा 85 और 86 (पूर्व में IPC 498A) विवाहित महिलाओं को दहेज उत्पीड़न और ससुराल में क्रूरता के खिलाफ कड़ा कानूनी संरक्षण प्रदान करती है। यदि पति या उसके रिश्तेदार महिला के साथ मारपीट करते हैं, आत्महत्या के लिए उकसाते हैं, या दहेज/संपत्ति के लिए प्रताड़ित करते हैं, तो यह एक गैर-जमानती अपराध है जिसमें 3 साल तक की जेल हो सकती है। सुप्रीम कोर्ट के रूपाली देवी फैसले के अनुसार, पीड़िता अपने मायके के थाने में भी FIR दर्ज करवा सकती है और अपना पूरा स्त्रीधन (गहने, सामान) वापस ले सकती है।',
    faqs: [
      {
        q: 'Can a married woman register an FIR under Section 85 BNS at her parents city if the cruelty occurred in another state?',
        a: 'Yes. The Supreme Court in Rupali Devi v. State of U.P. (2019) authoritatively established that the emotional distress of cruelty follows the woman to her parental home, conferring territorial jurisdiction on the court where she resides.'
      },
      {
        q: 'Does Stridhan belong exclusively to the wife or does the husband have a joint share in it?',
        a: 'Stridhan belongs exclusively to the woman. Under Pratibha Rani v. Suraj Kumar and Section 6 of the Dowry Prohibition Act, the husband and in-laws hold Stridhan purely as trustees and commit criminal breach of trust if they refuse to return it.'
      }
    ],
    tags: ['womens-rights', 'dowry harassment', 'bns 85', 'bns 86', 'section 498a', 'stridhan', 'cruelty', 'arnesh kumar', 'mahila police']
  },

  {
    id: 'rem-cyber-stalking-morphing-women',
    slug: 'protection-against-cyberstalking-morphed-media-doxxing-women',
    title: 'Legal Remedies Against Cyberstalking, Morphed Media & Digital Harassment under Sections 78 & 79 BNS & IT Act',
    category: "Women's Legal Protections & DV Act",
    remedyType: 'Cyber-Criminal Prosecution & Rapid Takedown Injunction',
    urgencyLevel: 'Emergency (Urgent Digital Takedown within 24 Hours)',
    forum: 'Cyber Crime Police Station / National Cyber Crime Portal (cybercrime.gov.in) / JMFC',
    summary: 'Rapid criminal prosecution and mandatory digital takedown mechanisms protecting women against cyberstalking, non-consensual deepfake pornography, morphed images, doxxing, and online threats.',
    whenToUse: 'When an individual monitors a woman online activity, sends unwanted sexualized messages, posts morphed/doctored explicit pictures, creates fake impersonation profiles, or leaks private phone numbers online.',
    overview: 'Digital violence against women is vigorously prosecuted under the combined machinery of the Bharatiya Nyaya Sanhita, 2023 (BNS) and the Information Technology Act, 2000 (IT Act). Section 78 BNS codifies the offence of Stalking: any man who monitors the use by a woman of the internet, email, or any other form of electronic communication commits cyberstalking, punishable with imprisonment up to 3 years on first conviction and 5 years on subsequent conviction. Section 79 BNS penalizes acts, words, or gestures intending to insult the modesty of a woman. Furthermore, Section 66E IT Act penalizes violation of bodily privacy, and Section 67A IT Act imposes rigorous imprisonment up to 5 years for publishing sexually explicit materials or deepfakes. Under Rule 3(2)(b) of the Information Technology (Intermediary Guidelines) Rules, 2021, social media platforms are legally compelled to take down non-consensual explicit or morphed media within 24 hours of receiving notice.',
    statutoryBasis: 'Bharatiya Nyaya Sanhita, 2023 (BNS) — Section 78 (Stalking, including electronic monitoring), Section 79 (Word, gesture or act intended to insult modesty of woman), Section 351(2) (Criminal intimidation); Information Technology Act, 2000 — Section 66C (Identity theft), Section 66D (Cheating by impersonation), Section 66E (Violation of privacy: capturing/publishing images of private areas), Section 67 (Publishing obscene electronic material), Section 67A (Publishing sexually explicit act or conduct); Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — Rule 3(2)(b) (Mandatory 24-hour takedown of non-consensual intimate imagery).',
    scopeAndEligibility: {
      whoCanInvoke: 'Any woman, or any person authorized by her (parents, guardians, or advocates in case of minors or severe trauma).',
      againstWhom: 'Any individual creator, stalker, ex-partner, hacker, or administrator of social media pages, Telegram channels, or WhatsApp groups distributing objectionable material.',
      statutoryExceptions: 'Does not apply where surveillance or monitoring was conducted under sovereign interception orders authorized under Section 69 IT Act for national security by competent intelligence agencies.'
    },
    violationScenarios: [
      {
        scenarioTitle: 'Fake Instagram Profile Circulating AI-Deepfake Explicit Photos',
        facts: 'An anonymous Instagram handle began posting AI-generated deepfake explicit photographs of a college student with her mobile phone number and college name, soliciting strangers.',
        legalViolation: 'Severe criminal violations under Section 78 & 79 BNS, Section 66E, 67 & 67A IT Act, and defamation under Section 356 BNS.',
        applicableRemedy: 'Lodge urgent complaint on cybercrime.gov.in under "Report Crime Against Women"; issue Rule 3(2)(b) Notice to Meta Grievance Officer for 24-hour takedown.'
      },
      {
        scenarioTitle: 'Persistent Online Surveillance and Threatening Emails from Ex-Partner',
        facts: 'Following a breakup, a man created multiple email accounts, logged into the woman Google accounts, tracked her GPS location, and emailed her employers making derogatory claims.',
        legalViolation: 'Electronic stalking under Section 78 BNS, unauthorized computer access under Section 43/66 IT Act, and criminal intimidation under Section 351 BNS.',
        applicableRemedy: 'Filing FIR at Cyber Crime Police Station seeking IP address preservation and seizure of digital devices under Section 106 BNSS.'
      }
    ],
    remedyProcess: [
      {
        stageNumber: 1,
        stageTitle: 'Forensic Evidence Preservation (Do Not Delete)',
        action: 'Preserve complete URL links, account handles, screenshots with full timestamps, raw email headers, chat export files, and mobile screen recordings before posts are deleted.'
      },
      {
        stageNumber: 2,
        stageTitle: '24-Hour Emergency Takedown Notice to Social Media Intermediary',
        action: 'Serve formal notice to the Resident Grievance Officer of the platform (Meta, X, Telegram, Google) citing Rule 3(2)(b) of IT Rules, 2021, compelling takedown of explicit content within 24 hours.'
      },
      {
        stageNumber: 3,
        stageTitle: 'Filing on National Cyber Crime Reporting Portal (cybercrime.gov.in)',
        action: 'Register an emergency complaint under the dedicated category "Crime Against Women and Children" (with option to report anonymously if desired).'
      },
      {
        stageNumber: 4,
        stageTitle: 'Registration of FIR at District Cyber Crime Police Station',
        action: 'Approach the designated Cyber Crime Police Station for registration of FIR under Section 78/79 BNS and Section 66E/67A IT Act.'
      },
      {
        stageNumber: 5,
        stageTitle: 'Issuance of Section 94 BNSS Notice to Intermediary & Telecoms',
        action: 'Cyber police issue statutory notices to platforms and Internet Service Providers (ISPs) to requisition IP logs, registration phone numbers, device IMEIs, and MAC addresses.'
      },
      {
        stageNumber: 6,
        stageTitle: 'Arrest of Perpetrator & Seizure of Electronic Devices',
        action: 'Police identify suspect via IP analysis, conduct search and seizure of mobile phones/laptops, and send hard drives to State Forensic Science Laboratory (FSL) under Section 63 BSA compliance.'
      }
    ],
    documentsAndEvidence: [
      'Screenshots of defamatory posts, morphed images, fake profile pages showing exact username and URL.',
      'Raw email headers showing originating IP addresses for threatening emails.',
      'Chat backups (WhatsApp, Telegram) exported in raw text format.',
      'Copy of Rule 3(2)(b) statutory takedown request served on Intermediary Grievance Officer.',
      'Complaint acknowledgment number generated from cybercrime.gov.in portal.',
      'Certificate under Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA) certifying electronic evidence authenticity.'
    ],
    authoritiesAndJurisdiction: {
      primaryForum: 'Specialized Cyber Crime Police Station of the district / State Cyber Cell.',
      nationalPortal: 'National Cyber Crime Reporting Portal (cybercrime.gov.in) maintained by Ministry of Home Affairs (MHA).',
      magistrateCourt: 'Court of Chief Judicial Magistrate (CJM) / JMFC having cyber jurisdiction.',
      takedownAuthority: 'Resident Grievance Officers of Intermediaries (WhatsApp, Instagram, X, YouTube) and MeitY under Section 69A IT Act.'
    },
    limitationAndDeadlines: 'No statutory limitation for cyber offenses under Section 67A IT Act (punishable up to 5 years); Rule 3(2)(b) mandates social media platforms to remove non-consensual sexually explicit content within 24 hours of notification; urgent preservation of ISP server logs must be sought within 30 to 90 days before logs are overwritten.',
    possibleOutcomes: [
      'Mandatory takedown and global blocking of objectionable morphed media within 24 hours.',
      'Permanent deletion and suspension of perpetrator social media accounts and phone numbers.',
      'Immediate arrest and judicial custody of perpetrator under non-bailable Section 67A IT Act.',
      'Forensic confiscation of all hard drives, mobile phones, and cloud drives containing illegal media.',
      'Award of civil compensation under Section 43A IT Act for failure of intermediary to protect sensitive personal data.'
    ],
    landmarkJudgments: [
      {
        title: 'Shreya Singhal v. Union of India',
        citation: '(2015) 5 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Struck down Section 66A IT Act as unconstitutional; clarified intermediary liability under Section 79, holding that platforms must take down unlawful content upon receiving actual knowledge via court order or authorized government notification.'
      },
      {
        title: 'X v. Union of India & Ors.',
        citation: '2021 SCC OnLine Del 1761',
        court: 'Delhi High Court',
        holding: 'Issued landmark binding directions to search engines (Google, Yahoo) and social platforms to permanently de-index and scrub non-consensual intimate images (NCII) across all mirrors and cache servers globally.'
      },
      {
        title: 'State of Tamil Nadu v. Suhas Katti',
        citation: 'CC No. 4680 of 2004',
        court: 'Chief Metropolitan Magistrate, Egmore',
        holding: 'India first landmark conviction for online harassment and posting obscene messages in a Yahoo message group; established that cyber harassment against women invites strict penal incarceration under Section 67 IT Act.'
      }
    ],
    advocateGuide: {
      preFilingChecklist: 'Ensure that the victim does NOT delete messages or chats out of embarrassment; capture screenshots with full timestamp, system clock, and network header visible.',
      commonPitfalls: 'Serving a general complaint without precise URLs or profile IDs; intermediaries will reject requests that do not specify the exact web locator.',
      tacticalAdvice: 'Immediately invoke Rule 3(2)(b) of the IT Rules 2021 directly to the platform grievance email (e.g. grievance-officer@meta.com); this triggers a mandatory 24-hour algorithmic takedown without waiting for formal police FIR.'
    },
    hindiExplanation: 'भारतीय न्याय संहिता की धारा 78 (साइबर स्टॉकिंग) और 79, तथा सूचना प्रौद्योगिकी अधिनियम (IT Act) की धारा 66E और 67A के तहत महिलाओं का ऑनलाइन पीछा करना, सोशल मीडिया पर नजर रखना, फर्जी प्रोफाइल बनाना, या AI से मॉर्फ की गई अश्लील फोटो/वीडियो पोस्ट करना एक गंभीर गैर-जमानती अपराध है। IT नियम 2021 के तहत इंस्टाग्राम, फेसबुक आदि प्लेटफॉर्म को शिकायत मिलने के 24 घंटे के भीतर ऐसी तस्वीरें हटानी होती हैं। पीड़िता राष्ट्रीय साइबर पोर्टल (cybercrime.gov.in) पर गोपनीय रूप से शिकायत दर्ज करा सकती है और दोषी को 5 साल तक की जेल हो सकती है।',
    faqs: [
      {
        q: 'Can a woman report cyber harassment anonymously without revealing her identity to the public?',
        a: 'Yes. The National Cyber Crime Reporting Portal (cybercrime.gov.in) provides an option to "Report Anonymously" for crimes against women and children, where identifying details are shielded during initial investigation.'
      },
      {
        q: 'What is the immediate remedy if explicit deepfake photos are circulating on Telegram channels?',
        a: 'File an emergency takedown request directly with Telegram abuse desk (abuse@telegram.org) and simultaneously file a complaint on cybercrime.gov.in; police can issue blocking orders under Section 69A IT Act to MeitY for blocking the channel.'
      }
    ],
    tags: ['womens-rights', 'cyberstalking', 'bns 78', 'bns 79', 'deepfakes', 'morphed media', 'it act 67a', 'rule 3(2)(b)', 'online harassment']
  }
];
