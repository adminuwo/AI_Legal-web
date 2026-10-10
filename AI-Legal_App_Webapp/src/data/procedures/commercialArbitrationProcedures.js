// ─── COMMERCIAL, ARBITRATION & CONSUMER DISPUTES PROCEDURES ─────────────────
// Authoritative workflows under Commercial Courts Act, Arbitration Act & CPA 2019

export const COMMERCIAL_ARBITRATION_PROCEDURES = [
  {
    id: 'proc-consumer-complaint-cpa-2019',
    slug: 'consumer-complaint-filing-procedure-cpa-2019-edaakhil',
    title: 'Consumer Complaint Filing before District, State & National Consumer Commissions under CPA 2019 (e-Daakhil)',
    category: 'Commercial, Arbitration & Consumer Disputes',
    actReference: 'Consumer Protection Act, 2019 — Sections 34, 35, 47, 58 & e-Daakhil Portal Rules',
    courtForum: 'District Consumer Disputes Redressal Commission (DCDRC) / State Commission (SCDRC) / NCDRC',
    estimatedTimeline: 'Admission hearing: 21 days under statutory mandate → Final disposal: 3 to 6 months',
    courtFeeLevel: 'Nil for claims up to ₹5 Lakhs; ₹200 to ₹7,500 for higher slabs via Bharatkosh',
    overview: 'The Consumer Protection Act, 2019 overhauled consumer jurisprudence in India, providing a three-tier quasi-judicial machinery for speedy resolution of consumer disputes involving defective goods, deficient services, misleading advertisements, and unfair trade practices. Key reforms include revised pecuniary thresholds, explicit inclusion of e-commerce transactions, nationwide online filing via the e-Daakhil portal, right to file where the complainant resides or works (Section 34(2)(d)), and establishment of the Central Consumer Protection Authority (CCPA).',
    legalBasis: 'Sections 34–39 (District Commission), Sections 47–49 (State Commission), Sections 58–60 (National Commission) of CPA 2019; Consumer Protection (Consumer Disputes Redressal Commissions) Rules, 2020; read with SC ruling in Neena Aneja v. Jai Prakash Associates.',
    locusStandi: 'A "consumer" who buys goods or hires services for consideration, not for commercial purpose (except self-employment); registered consumer associations; Central/State Governments; or legal heirs of a deceased consumer.',
    prerequisites: [
      'Proof of purchase of goods or hiring of services for consideration (cash memo, invoice, booking receipt).',
      'Existence of "Defect" in goods (Section 2(10)) or "Deficiency" in services (Section 2(11)) or "Unfair Trade Practice" (Section 2(47)).',
      'Determination of Pecuniary Jurisdiction: District Commission (up to ₹50 Lakhs); State Commission (₹50 Lakhs to ₹2 Crores); NCDRC (exceeding ₹2 Crores) as amended by 2021 Rules.',
      'Territorial Jurisdiction: where opposite party resides/works, where cause of action arose, or where complainant resides or works personally (Section 34(2)(d)).',
      'Payment of prescribed statutory consumer fee through Bharatkosh online portal.'
    ],
    statutoryLimitation: '2 years from the date on which the cause of action arose under Section 69 of CPA 2019. Delay condonable under Section 69(2) if sufficient cause is shown.',
    mandatoryDocuments: [
      'Consumer Complaint in the form of a legal petition containing Index, Synopsis, and Memo of Parties.',
      'Purchase Invoices, Retail Bills, Payment Receipts, Account Statements showing consideration paid.',
      'Warranty / Guarantee Cards, Terms of Service agreements, Brochure or Product Literature.',
      'Photographs, Video evidence, or Independent Expert Technical Laboratory Report (under Section 38(2)(c)).',
      'Written Communications, Customer Support emails, Grievance tickets, and Legal Notice with postal proof.',
      'Affidavit of Verification of the Complainant.',
      'Payment receipt of statutory fee generated via Bharatkosh / e-Daakhil.'
    ],
    draftingGuidance: 'Draft the consumer complaint with consumer-centric precision: (1) Details of purchase and consideration paid; (2) Specific representation made by opposite party; (3) Exact nature of defect or deficiency; (4) Financial loss and mental agony caused; (5) Clear statement of territorial jurisdiction invoking Section 34(2)(d); (6) Statement that complaint is within 2-year limitation period under Section 69; (7) Prayers detailing: (a) Refund of amount with 12% interest, (b) Removal of defect / replacement, (c) Compensation for harassment and mental agony, and (d) Litigation costs.',
    courtFeesFilingRules: 'Fee structure under 2020 Rules: Claims up to ₹5 Lakhs: Nil; ₹5L–₹10L: ₹200; ₹10L–₹20L: ₹400; ₹20L–₹50L: ₹1,000; ₹50L–₹1 Crore: ₹2,000; ₹1Cr–₹2Cr: ₹2,500; Above ₹2Cr: ₹7,500. Paid online via e-Daakhil.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Pecuniary & Territorial Jurisdiction Assessment',
        governingRule: 'Section 34 CPA 2019 & 2021 Pecuniary Rules',
        actingParty: 'Complainant / Advocate',
        description: 'Calculate the total consideration paid (not the inflated compensation claimed, as under 2019 Act pecuniary jurisdiction is determined by "value of goods or services paid as consideration").',
        advocateTips: 'Under the 2019 Act, pecuniary jurisdiction is based on the actual consideration paid, not the damages claimed (Neena Aneja ruling).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Electronic Filing on e-Daakhil Portal / Physical Filing',
        governingRule: 'Section 35 CPA 2019 & e-Daakhil Guidelines',
        actingParty: 'Complainant & Registry',
        description: 'Upload complaint, annexures, and verification affidavit in bookmarked PDF format on e-Daakhil portal. Pay fee through Bharatkosh gateway.',
        advocateTips: 'Ensure all annexures are clearly legible; e-Daakhil automatically flags non-OCR compliant uploads.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Admission Scrutiny & Issue of Notice within 21 Days',
        governingRule: 'Section 36 CPA 2019',
        actingParty: 'Consumer Commission Bench',
        description: 'Commission conducts admission scrutiny. Under Section 36(2), admissibility must be decided within 21 days; if not decided, complaint is deemed admitted by operation of law.',
        advocateTips: 'If the Commission raises objections regarding "commercial use", cite Lilavati Kirtilal Mehta: purchase of cars or equipment by doctors/professionals for personal use is not commercial.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Service of Notice & Mandatory 30-Day Written Version by Opposite Party',
        governingRule: 'Section 38(2)(a) CPA 2019 & New India Assurance Ruling',
        actingParty: 'Opposite Party / Defense Counsel',
        description: 'Opposite party is served notice and must file Written Version within 30 days (extendable by maximum 15 days). The 45-day outer limit is strict and non-extendable.',
        advocateTips: 'Under the 5-Judge Constitution Bench in New India Assurance v. Hilli Multipurpose Cold Storage, consumer commissions have zero power to extend time beyond 45 days.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Evidence by Affidavits, Hearing & Final Disposal',
        governingRule: 'Section 38 CPA 2019',
        actingParty: 'Consumer Commission',
        description: 'Both parties file Evidence on Affidavit (CW and RW) and written synopsis of arguments. Commission passes final award with compensation and litigation costs.',
        advocateTips: 'If the opposite party fails to comply with the award, execute under Section 71 (attachment like civil decree) or Section 72 (criminal penalty with jail up to 3 years).'
      }
    ],
    hearingAndArguments: 'Complainant counsel proves consumer status, payment of consideration, deficiency of service or product defect, and breach of contractual commitment. Opposite party argues purchase was for commercial purpose, no defect as per expert tests, terms of warranty exclude liability, or complaint is barred by limitation.',
    possibleOutcomes: [
      'Complaint allowed: direction to refund consideration with interest, replace product, and pay compensation for mental agony.',
      'Direction to remove defect or rectify deficiency within 30 days with litigation costs.',
      'Complaint dismissed on merits or as not falling within consumer definition.'
    ],
    appealRevisionRemedy: 'An order of the District Commission is appealable before the State Commission under Section 41 CPA 2019 within 45 days. An order of State Commission is appealable before NCDRC under Section 51 within 30 days (subject to 50% deposit of awarded amount).',
    commonPitfalls: [
      'Opposite party failing to file Written Version within the strict 45-day non-extendable hard cap.',
      'Calculating pecuniary jurisdiction based on the damages claimed rather than consideration paid.',
      'Failing to seek an expert laboratory report under Section 38(2)(c) when asserting manufacturing defects.'
    ],
    practicalScenario: 'A homebuyer paid ₹48 Lakhs to a real estate developer with promised possession in 2021. In 2024, the project remained an empty shell. The buyer filed a complaint before the District Consumer Commission under Section 35 CPA 2019 via e-Daakhil, claiming refund with interest. The builder argued commercial dispute and arbitral clause. Relying on Emaar MGF Land v. Aftab Singh, counsel argued consumer remedy is an additional remedy not barred by arbitration. The Commission directed the builder to refund ₹48 Lakhs with 9% interest and ₹1 Lakh compensation.',
    caseLaws: [
      {
        title: 'New India Assurance Co. Ltd. v. Hilli Multipurpose Cold Storage Pvt. Ltd.',
        citation: '(2020) 5 SCC 757 (5-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'The Consumer Commission has no power to extend the time for filing the response/written version beyond the period of 15 days beyond 30 days as prescribed in the Act; the 45-day period is an absolute and mandatory statutory limitation.'
      },
      {
        title: 'Neena Aneja v. Jai Prakash Associates Ltd.',
        citation: '(2022) 2 SCC 161',
        court: 'Supreme Court of India',
        holding: 'Clarified the transitional pecuniary jurisdiction between the 1986 Act and 2019 Act; pending complaints filed before the 2019 Act commencement continue before their respective commissions and are not transferred.'
      },
      {
        title: 'Emaar MGF Land Ltd. v. Aftab Singh',
        citation: '(2019) 12 SCC 751',
        court: 'Supreme Court of India',
        holding: 'An arbitration clause in an agreement does not bar an aggrieved consumer from approaching the Consumer Commission; consumer remedies under Section 100 CPA 2019 are in addition to and not in derogation of other laws.'
      }
    ],
    faqs: [
      {
        q: 'Can a consumer file a complaint from their home town if the company office is located in another state?',
        a: 'Yes. Under Section 34(2)(d) of CPA 2019, a complaint can be instituted in the District Commission within whose local limits the complainant resides or personally works for gain.'
      },
      {
        q: 'What is the consequence if the opposite party does not comply with the Consumer Commission order?',
        a: 'Under Section 72 CPA 2019, the Commission can punish the defaulter with imprisonment for a term between one month and three years and/or fine up to ₹1 Lakh.'
      }
    ],
    tags: ['commercial-arbitration', 'consumer protection act 2019', 'e-daakhil', 'deficiency in service', 'hilli multipurpose', 'neena aneja', 'district commission']
  },

  {
    id: 'proc-commercial-suit-pre-institution-mediation',
    slug: 'commercial-suit-pre-institution-mediation-section-12a',
    title: 'Commercial Suit under Commercial Courts Act, 2015 & Mandatory Section 12A Pre-Institution Mediation',
    category: 'Commercial, Arbitration & Consumer Disputes',
    actReference: 'Commercial Courts Act, 2015 — Sections 2(1)(c), 12A & Schedule CPC Amendments',
    courtForum: 'District Legal Services Authority (DLSA) / High Court Mediation Centre → Commercial Court / Commercial Division',
    estimatedTimeline: 'Mediation: 3 months (Extendable by 2 months under Sec 12A(3)) → Commercial Suit trial: 6 to 12 months',
    courtFeeLevel: '₹1,000 DLSA Mediation Fee + Ad-valorem Court Fee on Commercial Plaint',
    overview: 'The Commercial Courts Act, 2015 was enacted to provide for the speedy disposal of commercial disputes of "Specified Value" (minimum ₹3 Lakhs). The cornerstone procedural requirement of this regime is Section 12A, which mandates that a commercial suit which does not contemplate any "urgent interim relief" shall not be instituted unless the plaintiff exhausts the remedy of Pre-Institution Mediation through the Legal Services Authority. In the landmark Constitution Bench ruling in Patil Automation v. Rakheja Engineers, the Supreme Court held that Section 12A is mandatory, and any suit filed without exhausting pre-institution mediation or seeking urgent interim relief must be rejected at the threshold under Order VII Rule 11 CPC.',
    legalBasis: 'Sections 2(1)(c) (Definition of commercial dispute), 2(1)(i) (Specified Value), 12A (Pre-institution mediation and settlement), and amended CPC Schedule of Commercial Courts Act, 2015; read with Patil Automation (2022) 10 SCC 1 and Yamini Manohar v. T.K.D. Keerthi (2024).',
    locusStandi: 'Plaintiff claiming rights in a commercial dispute arising out of trade, mercantile documents, export/import, franchising, intellectual property, joint ventures, or partnership.',
    prerequisites: [
      'The dispute must strictly fall within the definition of "Commercial Dispute" under Section 2(1)(c) of the Act.',
      'The value of the subject matter must equal or exceed the "Specified Value" (₹3 Lakhs under central threshold; ₹10 Lakhs in Delhi / Maharashtra).',
      'Mandatory exhaustion of Section 12A Pre-Institution Mediation, UNLESS the plaintiff seeks genuine and urgent interim relief under Order XXXIX or Section 94 CPC.',
      'Pleadings must be accompanied by the mandatory Statement of Truth in Appendix I.'
    ],
    statutoryLimitation: 'Under Section 12A(3), the period during which the parties were engaged in pre-institution mediation (up to 3 to 5 months) is statutorily excluded from the computation of the limitation period under the Limitation Act, 1963.',
    mandatoryDocuments: [
      'Form 1: Application for Pre-Institution Mediation under Commercial Courts (Pre-Institution Mediation) Rules, 2018.',
      'Non-Starter Report issued by the Legal Services Authority (if defendant fails to appear or mediation fails).',
      'Commercial Plaint with concise statement of commercial dispute and Specified Value.',
      'Mandatory Statement of Truth on sworn affidavit under Order VI Rule 15A CPC.',
      'Comprehensive List of All Documents in plaintiff power/possession under amended Order XI Rule 1 CPC.',
      'Urgent Interim Application under Order XXXIX Rules 1 & 2 CPC (if seeking exemption from Section 12A).'
    ],
    draftingGuidance: 'Draft the commercial plaint strictly conforming to the Commercial Courts Act Schedule: (1) Specifically plead that the dispute is a "Commercial Dispute" under Section 2(1)(c)(i)–(xxii); (2) Plead the "Specified Value" with itemized valuation under Section 12; (3) Plead compliance with Section 12A: annex the DLSA Non-Starter Report, or if seeking exemption, specifically plead in a dedicated paragraph why "Urgent Interim Relief" is indispensable (Yamini Manohar test); (4) Annex the Statement of Truth in prescribed wording; (5) Annex the Declaration that all documents in power/possession have been disclosed.',
    courtFeesFilingRules: 'Mediation fee of ₹1,000 paid to DLSA. Ad-valorem court fee paid on the commercial suit via e-Challan.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Pre-Institution Mediation Application before DLSA',
        governingRule: 'Section 12A Commercial Courts Act & 2018 Rules',
        actingParty: 'Plaintiff / Advocate & DLSA',
        description: 'File Form 1 before the District Legal Services Authority with ₹1,000 fee. DLSA issues notice to opposite party to appear within 10 days.',
        advocateTips: 'If the opposite party refuses to participate or fails to appear twice, DLSA issues a "Non-Starter Report".'
      },
      {
        stepNumber: 2,
        stepTitle: 'Conduct of Mediation or Issuance of Non-Starter Report',
        governingRule: 'Section 12A(2) & (3) Commercial Courts Act',
        actingParty: 'Mediator, Both Parties & DLSA',
        description: 'If party appears, mediator conducts sessions within 3 months. If settled, a mediated settlement agreement is executed having the force of a Section 73 arbitral award/decree. If failed, Non-Starter Report is issued.',
        advocateTips: 'The time spent in mediation (from date of filing Form 1 to date of Non-Starter Report) is excluded from limitation under Section 12A(3).'
      },
      {
        stepNumber: 3,
        stepTitle: 'Filing Commercial Suit with Statement of Truth & Non-Starter Report',
        governingRule: 'Order VI Rule 15A & Order XI CPC',
        actingParty: 'Plaintiff Counsel',
        description: 'Lodge commercial plaint annexing the Non-Starter Report, Statement of Truth, and complete documents. If seeking Section 12A exemption, file urgent interim relief application.',
        advocateTips: 'Under Yamini Manohar (2024), the court must examine whether the prayer for urgent interim relief is genuine or an illusion created to bypass Section 12A.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Case Management Hearing & Strict 120-Day Defense Cap',
        governingRule: 'Order VIII Rule 1 & Order XV-A CPC',
        actingParty: 'Commercial Judge & Both Counsel',
        description: 'Summons issued. Defendant must file Written Statement within 30 days (maximum non-extendable hard cap of 120 days). Court conducts mandatory Case Management Hearing under Order XV-A.',
        advocateTips: 'Commercial Court frames issues, fixes trial schedule, and limits oral witness examination time during Case Management Hearing.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Summary Judgment Application / Expeditious Trial',
        governingRule: 'Order XIII-A CPC (Summary Judgment)',
        actingParty: 'Commercial Court',
        description: 'Either party may apply for Summary Judgment under Order XIII-A without oral trial if the adversary has no real prospect of succeeding. If trial is required, it must conclude within 6 months.',
        advocateTips: 'Move for Summary Judgment under Order XIII-A whenever the defense relies on bare oral denials contrary to written contract terms.'
      }
    ],
    hearingAndArguments: 'Defendant moves an application under Order VII Rule 11 CPC praying for rejection of plaint if Section 12A mediation was bypassed without genuine urgent relief. Plaintiff argues that urgent ex-parte protection of intellectual property or bank guarantee encashment necessitated immediate institution.',
    possibleOutcomes: [
      'Plaint rejected under Order VII Rule 11 CPC for failure to exhaust mandatory Section 12A mediation under Patil Automation.',
      'Exemption granted on urgent interim relief and ad-interim injunction granted.',
      'Summary Judgment decreed under Order XIII-A without regular trial.',
      'Mediation settlement executed and decree passed under Section 12A(2).'
    ],
    appealRevisionRemedy: 'Under Section 13 of the Commercial Courts Act, 2015, an appeal lies to the Commercial Appellate Division of the High Court within 60 days against specified orders or decrees. Section 8 completely bars any interlocutory revision or petition under Section 115 CPC.',
    commonPitfalls: [
      'Instituting a commercial suit without Section 12A mediation when no urgent interim relief is prayed for (attracting mandatory rejection under Patil Automation).',
      'Filing a plaint without the mandatory Statement of Truth in Appendix I, which renders pleadings unverified.',
      'Missing the 120-day outer deadline for filing Written Statement, which permanently extinguishes defense.'
    ],
    practicalScenario: 'A commercial vendor filed a recovery suit of ₹75 Lakhs against a retailer. The plaintiff did not pray for any interim injunction, but omitted Section 12A pre-institution mediation, asserting that mediation was useless. The defendant moved an application under Order VII Rule 11 CPC citing Patil Automation v. Rakheja Engineers. The Commercial Court held that Section 12A is mandatory and non-negotiable, rejected the plaint, and directed the plaintiff to approach DLSA for mediation.',
    caseLaws: [
      {
        title: 'Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.',
        citation: '(2022) 10 SCC 1 (2-Judge Bench)',
        court: 'Supreme Court of India',
        holding: 'Section 12A of the Commercial Courts Act, 2015 is mandatory; any commercial suit instituted without complying with Section 12A pre-institution mediation (where urgent interim relief is not contemplated) must be rejected under Order VII Rule 11 CPC.'
      },
      {
        title: 'Yamini Manohar v. T.K.D. Keerthi',
        citation: '(2024) 5 SCC 815',
        court: 'Supreme Court of India',
        holding: 'When a commercial suit is filed praying for urgent interim relief to bypass Section 12A, the court must apply a holistic and objective test to determine whether the prayer for interim relief is genuine or a mere subterfuge to circumvent the mandatory statutory mandate.'
      }
    ],
    faqs: [
      {
        q: 'Is a settlement arrived at in Section 12A pre-institution mediation enforceable like a court decree?',
        a: 'Yes. Under Section 12A(2) of the Commercial Courts Act, a mediated settlement agreement has the same status and effect as an arbitral award under Section 30(4) of the Arbitration Act and is directly executable as a court decree.'
      },
      {
        q: 'Can the court extend the 120-day limit for filing a Written Statement in a commercial suit?',
        a: 'No. The Supreme Court in SCG Contracts held that the 120-day time limit is an unextendable hard cap; after 120 days, the right to file WS is permanently forfeited.'
      }
    ],
    tags: ['commercial-arbitration', 'commercial courts act 2015', 'section 12a', 'pre-institution mediation', 'patil automation', 'statement of truth', 'yamini manohar']
  },

  {
    id: 'proc-arbitration-section-9-interim',
    slug: 'arbitration-interim-measures-court-section-9-act-1996',
    title: 'Petition for Interim Measures before Court under Section 9 of the Arbitration and Conciliation Act, 1996',
    category: 'Commercial, Arbitration & Consumer Disputes',
    actReference: 'Arbitration and Conciliation Act, 1996 — Section 9 & Commercial Courts Act 2015',
    courtForum: 'Principal Civil Court of Original Jurisdiction / High Court exercising Original Civil Jurisdiction',
    estimatedTimeline: 'Urgent hearing: 1 to 3 days → Final interim disposal: 30 to 60 days',
    courtFeeLevel: 'Fixed court fee stamp (₹200 - ₹1,000 depending on High Court Original Side Rules)',
    overview: 'Section 9 of the Arbitration and Conciliation Act, 1996 empowers a party to apply to a competent court for interim measures of protection before, during arbitral proceedings, or at any time after the making of the arbitral award but before it is enforced under Section 36. Interim measures encompass preservation of goods, securing the amount in dispute, detention/inspection of property, interim injunctions, and appointment of a receiver. Under Section 9(2), if interim protection is obtained before arbitration commences, the arbitral proceedings must be initiated within 90 days from the date of the order.',
    legalBasis: 'Section 9 (Interim measures by Court), Section 9(2) (Mandatory 90-day arbitration invocation), Section 9(3) (Bar on Section 9 after arbitral tribunal is constituted), and Section 17 (Interim measures by arbitral tribunal) of the Arbitration and Conciliation Act, 1996; read with SC rulings in Sundaram Finance and Essar House.',
    locusStandi: 'Any party to a valid, written arbitration agreement within the meaning of Section 7 of the Act.',
    prerequisites: [
      'A valid, subsisting, and binding arbitration agreement in writing under Section 7.',
      'Demonstration of manifest intention to arbitrate (Sundaram Finance v. NEPC India).',
      'If filed after constitution of the arbitral tribunal, petitioner must demonstrate that remedy under Section 17 before the tribunal is not efficacious (Section 9(3)).',
      'Satisfaction of standard interim relief principles: Prima facie case, Balance of convenience, and Irreparable injury.'
    ],
    statutoryLimitation: 'No fixed limitation; can be filed before, during, or after arbitral award. If filed pre-arbitration, Section 9(2) mandates that arbitration must be commenced within 90 days of the order.',
    mandatoryDocuments: [
      'Petition under Section 9 of the Arbitration and Conciliation Act, 1996.',
      'Underlying Commercial Agreement containing the formal Arbitration Clause (Section 7).',
      'Statutory Notice Invoking Arbitration under Section 21 of the Act (or draft notice to be issued).',
      'Prima facie proof of risk of dissipation of assets, encashment of bank guarantee, or breach of exclusivity.',
      'Affidavit of Verification / Statement of Truth of the Petitioner.',
      'Vakalatnama with Advocate Welfare Stamps.'
    ],
    draftingGuidance: 'The Section 9 petition must specifically plead: (1) Existence of valid arbitration agreement (quote arbitration clause verbatim); (2) Unambiguous intent to initiate arbitration within 90 days; (3) Precise description of the subject matter requiring emergency protection; (4) Substantive averments satisfying prima facie case, balance of convenience, and irreparable injury; (5) If seeking deposit of money, plead Essar House v. ArcellorMittal: proof of actual fraudulent disposal is not required if prima facie liability is clear; (6) Specific prayers matching Section 9(1)(ii)(a)–(e).',
    courtFeesFilingRules: 'Affix court fee stamp as per State/High Court schedule (₹200–₹1,000). Commercial Court e-Filing rules apply.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Section 9 Petition & Urgent Motion Listing',
        governingRule: 'Section 9 Arbitration Act & Commercial Courts Act',
        actingParty: 'Petitioner & Counsel',
        description: 'File petition before the Commercial Court or High Court having original jurisdiction. Move urgent listing application for same-day or next-day hearing.',
        advocateTips: 'If seeking ex-parte restraining order on bank guarantee encashment, prove established fraud of egregious nature or irretrievable injustice (UP State Sugar Corp).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Urgent Hearing & Ad-Interim Protective Orders',
        governingRule: 'Section 9(1) Arbitration Act',
        actingParty: 'Commercial Judge & Petitioner Counsel',
        description: 'Court hears urgent motion. If satisfied, court passes ad-interim orders restraining alienation, freezing disputed funds, or appointing a court receiver.',
        advocateTips: 'Under Section 9(2), the 90-day clock to initiate arbitral proceedings starts ticking immediately from the date of the ad-interim order.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Service of Notice & Section 21 Arbitration Invocation',
        governingRule: 'Sections 9(2) & 21 Arbitration Act',
        actingParty: 'Petitioner Advocate',
        description: 'Serve court notice and order on respondent. Simultaneously dispatch formal Section 21 notice invoking arbitration and nominating an arbitrator to comply with the 90-day mandate.',
        advocateTips: 'Never delay sending the Section 21 invocation notice; failure to invoke arbitration within 90 days results in automatic vacation of the Section 9 interim order.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Respondent Reply & Bilateral Hearing',
        governingRule: 'Section 9 & Section 9(3) Arbitration Act',
        actingParty: 'Commercial Court & Both Counsel',
        description: 'Respondent files reply asserting that dispute is not arbitrable, contract is un-stamped, or that an arbitral tribunal is now constituted and Section 9(3) bars court intervention.',
        advocateTips: 'Under the 7-Judge Constitution Bench in In Re: Interplay, non-stamping of an agreement is no longer a bar to granting Section 9 interim measures.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Interim Order & Transition to Arbitral Tribunal (Sec 17)',
        governingRule: 'Sections 9 & 17 Arbitration Act',
        actingParty: 'Commercial Court',
        description: 'Court confirms or modifies the interim protection, directing that once the arbitral tribunal is constituted, all further interim modifications must be sought before the tribunal under Section 17.',
        advocateTips: 'Under Section 17(2), an interim order of an arbitral tribunal is deemed to be an order of the court and is directly executable under CPC.'
      }
    ],
    hearingAndArguments: 'Petitioner counsel proves valid arbitration clause, imminent danger of asset dissipation, prima facie breach of contract, and compliance with the 90-day invocation rule. Respondent counsel argues absence of prima facie case, speculative damages, existence of adequate monetary remedy, and bar under Section 9(3).',
    possibleOutcomes: [
      'Interim measure granted directing respondent to furnish security or deposit disputed amount in court.',
      'Injunction granted restraining encashment of bank guarantee or alienation of assets.',
      'Receiver appointed under Section 9(1)(ii)(d) to take custody of disputed equipment/property.',
      'Petition dismissed with direction to seek interim relief before the arbitral tribunal under Section 17.'
    ],
    appealRevisionRemedy: 'An order granting or refusing an interim measure under Section 9 is appealable under Section 37(1)(b) of the Arbitration and Conciliation Act, 1996 before the Commercial Appellate Division of the High Court.',
    commonPitfalls: [
      'Failing to invoke arbitration under Section 21 within 90 days of securing pre-arbitration Section 9 relief, leading to order lapse.',
      'Approaching the court under Section 9 after the arbitral tribunal has been constituted without demonstrating Section 9(3) inefficacy.',
      'Seeking mandatory final reliefs in the guise of interim protection.'
    ],
    practicalScenario: 'A national highway concessionaire terminated an EPC sub-contract and threatened to encash performance bank guarantees worth ₹25 Crores. The EPC contractor filed an urgent Section 9 petition before the High Court. Counsel demonstrated special equities and complete performance certificates issued by the project engineer. The High Court granted an ad-interim injunction restraining the bank from releasing funds, subject to the contractor extending the bank guarantee validity and issuing Section 21 arbitration notice within 30 days.',
    caseLaws: [
      {
        title: 'Essar House Pvt. Ltd. v. Arcellor Mittal Nippon Steel India Ltd.',
        citation: '(2022) 14 SCC 595',
        court: 'Supreme Court of India',
        holding: 'For granting interim relief under Section 9, proof of actual fraudulent disposal or removal of property is not required; if a strong prima facie case is made out and there is a real possibility that the award may become an empty paper, the court has ample power to order security.'
      },
      {
        title: 'Sundaram Finance Ltd. v. NEPC India Ltd.',
        citation: '(1999) 2 SCC 479',
        court: 'Supreme Court of India',
        holding: 'The court can entertain an application for interim measures under Section 9 even before commencement of arbitral proceedings, provided the applicant shows a manifest intention to take the dispute to arbitration.'
      },
      {
        title: 'In Re: Interplay Between Arbitration Agreements & Stamp Act',
        citation: '(2024) 6 SCC 1 (7-Judge Constitution Bench)',
        court: 'Supreme Court of India',
        holding: 'Overruled NN Global; held that non-stamping or insufficient stamping of an agreement does not render the arbitration clause void ab initio; courts can grant interim measures under Section 9 without waiting for impounding.'
      }
    ],
    faqs: [
      {
        q: 'Can a Section 9 petition be filed after the arbitral tribunal is already constituted?',
        a: 'Under Section 9(3), once the arbitral tribunal is constituted, the court shall not entertain a Section 9 application unless it finds that circumstances exist which may not render the remedy under Section 17 efficacious.'
      },
      {
        q: 'What is the consequence if arbitration is not invoked within 90 days of an interim order under Section 9?',
        a: 'Under Section 9(2), the interim order is liable to be vacated and dismissed for breach of statutory condition.'
      }
    ],
    tags: ['commercial-arbitration', 'section 9 arbitration', 'interim measures', 'bank guarantee stay', 'essar house', 'sundaram finance', 'commercial court']
  },

  {
    id: 'proc-arbitration-section-34-setting-aside',
    slug: 'setting-aside-arbitral-award-section-34-arbitration-act',
    title: 'Application for Setting Aside Arbitral Award under Section 34 of the Arbitration and Conciliation Act, 1996',
    category: 'Commercial, Arbitration & Consumer Disputes',
    actReference: 'Arbitration and Conciliation Act, 1996 — Sections 34, 34(2), 34(2A) & 36 & Commercial Courts Act 2015',
    courtForum: 'Principal Civil Court of Original Jurisdiction / High Court exercising Commercial Appellate/Original Jurisdiction',
    estimatedTimeline: 'Statutory mandate: 1 year for disposal under Section 34(6) → Actual: 1 to 2 years',
    courtFeeLevel: 'Fixed or Ad-valorem Court Fee as per State Court Fees Act',
    overview: 'Section 34 of the Arbitration and Conciliation Act, 1996 provides the exclusive judicial recourse for setting aside an arbitral award. In line with the principle of minimal judicial intervention (Section 5), a Section 34 court does not sit as a court of appeal and cannot re-appreciate evidence or correct factual errors (Associate Builders & Ssangyong Engineering). An award can be set aside only on narrow, exhaustively codified grounds: lack of capacity, invalid arbitration agreement, lack of proper notice, dispute outside submission, irregular tribunal composition, conflict with the "Public Policy of India", or "Patent Illegality" appearing on the face of the award (Section 34(2A)). Crucially, Section 34 filing does not operate as an automatic stay of the award.',
    legalBasis: 'Section 34 (Application for setting aside arbitral award), Section 34(2) (Grounds for challenge), Section 34(2A) (Patent illegality for domestic awards), Section 34(3) (Strict limitation), Section 34(5) (Prior notice), Section 34(6) (1-year disposal mandate), and Section 36 (Stay and enforcement) of the Act; read with Ssangyong and Delhi Airport Metro Express (DAMEPL).',
    locusStandi: 'Any party to the arbitration agreement aggrieved by the final or interim arbitral award.',
    prerequisites: [
      'A signed copy of the Arbitral Award delivered to the party under Section 31(5) of the Act.',
      'Filing strictly within 3 months from the date of receipt of the signed award (extendable by maximum 30 days under Section 34(3) proviso; hard limit cannot be extended even by Supreme Court under Article 142).',
      'Mandatory prior written notice served on the opposite party under Section 34(5) accompanied by an affidavit of compliance.',
      'Filing an independent Application for Stay of Award under Section 36(2) CPC (no automatic stay post-2015).',
      'Grounds must be strictly confined to Section 34(2) and 34(2A).'
    ],
    statutoryLimitation: 'Strict 3 months from the date on which the party received the arbitral award under Section 34(3). The court may condone a delay of up to 30 days upon sufficient cause, but not a single day beyond (Union of India v. Popular Construction).',
    mandatoryDocuments: [
      'Application under Section 34 of the Arbitration and Conciliation Act, 1996.',
      'Original or Certified True Copy of the signed Arbitral Award.',
      'Arbitration Agreement / Contract containing the dispute resolution clause.',
      'Prior Written Notice issued under Section 34(5) along with proof of service.',
      'Mandatory Affidavit of Compliance under Section 34(5) of the Act.',
      'Application under Section 36(2) of the Act for Stay of Operation of the Award with supporting affidavit.',
      'Complete Arbitral Record: Claim Statement, Statement of Defense, Evidence Affidavits, and Exhibits.',
      'Court fee payment challan / stamps.',
      'Vakalatnama executed by the Petitioner.'
    ],
    draftingGuidance: 'Drafting a Section 34 challenge requires surgical restraint: (1) Do NOT draft grounds alleging that the arbitrator wrongly weighed evidence or came to an erroneous factual conclusion; (2) Grounds must be mapped directly to Section 34(2): "Fundamental Policy of Indian Law", "Most Basic Notions of Morality or Justice", or Section 34(2A) "Patent Illegality"; (3) Demonstrate that the arbitrator rewrote the contract contrary to its express terms (violating Section 28(3)); (4) Plead perversity in the strict legal sense—that the finding is so irrational that no reasonable person could have reached it (Associate Builders test); (5) Draft Section 36(2) stay application with prayer for stay without condition or with reasonable bank guarantee.',
    courtFeesFilingRules: 'Pay court fees as per State Court Fees schedule. Commercial Division filing rules apply.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Receipt of Signed Award & Limitation Computation',
        governingRule: 'Sections 31(5) & 34(3) Arbitration Act',
        actingParty: 'Petitioner & Counsel',
        description: 'Verify the exact date of receipt of the signed copy of the arbitral award delivered by the tribunal under Section 31(5). Calculate the 3-month and 30-day outer limitation periods.',
        advocateTips: 'If an application under Section 33 for correction or interpretation was filed, limitation runs from the date that application was disposed of.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Issue of Prior Written Notice under Section 34(5)',
        governingRule: 'Section 34(5) Arbitration Act',
        actingParty: 'Petitioner Advocate',
        description: 'Serve a formal written notice on the opposite party stating the intention to file the Section 34 application. Draft a sworn affidavit of service to annex with the petition.',
        advocateTips: 'Though directory under State of Bihar v. Bihar Rajya Bhumi Vikas Bank, complying with Section 34(5) avoids procedural challenges.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Filing Section 34 Petition with Section 36(2) Stay Application',
        governingRule: 'Sections 34 & 36(2) Arbitration Act',
        actingParty: 'Petitioner / Counsel',
        description: 'Lodge petition before the competent Commercial Court or High Court. File a separate Section 36(2) application seeking stay of the execution of the award.',
        advocateTips: 'Under amended Section 36, mere filing of a Section 34 petition does not stay execution; the award-holder can execute immediately unless stay is granted.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Hearing on Stay Application & Order of Deposit',
        governingRule: 'Section 36(3) Arbitration Act & Order XLI Rule 5 CPC',
        actingParty: 'Court & Both Counsel',
        description: 'Court hears stay application. Under Section 36(3), court applies CPC Order XLI Rule 5 principles, directing the petitioner to deposit 50%–100% of the awarded amount in court or furnish a bank guarantee.',
        advocateTips: 'Under Section 36(3) second proviso, if the court finds a prima facie case that the arbitration agreement or award was induced by fraud or corruption, it must grant an unconditional stay.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Hearing on Grounds of Challenge & Disposal',
        governingRule: 'Section 34(2), (2A) & (6) Arbitration Act',
        actingParty: 'Court',
        description: 'Court hears arguments strictly on Section 34 grounds within 1 year as mandated by Section 34(6). The court can only set aside the award or uphold it; it cannot modify or rewrite the award.',
        advocateTips: 'Under the 2021 SC ruling in NHAI v. M. Hakeem, a Section 34 court has no power to modify an arbitral award; it can only set it aside or dismiss the challenge.'
      }
    ],
    hearingAndArguments: 'Petitioner counsel proves patent illegality, arbitrary rewriting of contractual covenants, or violation of basic notions of justice. Award-holder counsel argues minimal judicial interference under Section 5, that arbitrator is the sole judge of quality and quantity of evidence, and that a plausible view of the arbitrator cannot be substituted by the court.',
    possibleOutcomes: [
      'Application dismissed: arbitral award upheld in its entirety with costs.',
      'Arbitral award set aside in whole or in severable part under Section 34(2).',
      'Stay of award granted subject to depositing 100% of awarded sum in court.'
    ],
    appealRevisionRemedy: 'An order setting aside or refusing to set aside an arbitral award under Section 34 is appealable under Section 37(1)(c) of the Arbitration Act before the Commercial Appellate Division of the High Court.',
    commonPitfalls: [
      'Filing after 3 months plus 30 days; the court has zero power to condone delay beyond 30 days under Popular Construction.',
      'Assuming that filing Section 34 automatically stays execution, allowing the award-holder to attach bank accounts under Section 36.',
      'Requesting the court to modify the award, which is barred under NHAI v. M. Hakeem.'
    ],
    practicalScenario: 'An arbitral tribunal awarded ₹30 Crores in damages for loss of profits against a state corporation. The contract contained an explicit bar clause prohibiting claims for indirect damages. The corporation challenged the award under Section 34. The High Court, applying Ssangyong Engineering and Delhi Airport Metro Express, held that the arbitrator ignored an express negative covenant of the contract, thereby committing patent illegality under Section 34(2A) and Section 28(3), and set aside the award.',
    caseLaws: [
      {
        title: 'Ssangyong Engineering & Construction Co. Ltd. v. NHAI',
        citation: '(2019) 15 SCC 131',
        court: 'Supreme Court of India',
        holding: 'Elucidated the post-2015 scope of Section 34: "Public Policy of India" is restricted to Fundamental Policy of Indian law and most basic notions of justice; "Patent Illegality" under Section 34(2A) requires an illegality going to the root of the matter; an award cannot be set aside merely on an erroneous application of law or by re-appreciating evidence.'
      },
      {
        title: 'National Highways Authority of India (NHAI) v. M. Hakeem',
        citation: '(2021) 9 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Section 34 of the Arbitration Act does not confer any power on the court to modify, vary, or rewrite an arbitral award; the court can only set aside the award in whole or in severable part, or dismiss the application.'
      },
      {
        title: 'Union of India v. Popular Construction Co.',
        citation: '(2001) 8 SCC 470',
        court: 'Supreme Court of India',
        holding: 'Section 5 of the Limitation Act does not apply to Section 34 applications; the 3-month plus 30-day time limit in Section 34(3) is an absolute bar and the court cannot condone delay beyond 30 days.'
      }
    ],
    faqs: [
      {
        q: 'Can the court modify an arbitral award under Section 34?',
        a: 'No. The Supreme Court in NHAI v. M. Hakeem held that a Section 34 court can only set aside the award or dismiss the petition; it has no jurisdiction to modify the award.'
      },
      {
        q: 'Does an application under Section 34 automatically stay the execution of the award?',
        a: 'No. Post-2015 amendment, Section 36(2) requires a separate stay application, and the court may impose conditions such as deposit of the awarded amount.'
      }
    ],
    tags: ['commercial-arbitration', 'section 34 arbitration', 'setting aside award', 'patent illegality', 'ssangyong engineering', 'm hakeem', 'section 36 stay']
  }
];
