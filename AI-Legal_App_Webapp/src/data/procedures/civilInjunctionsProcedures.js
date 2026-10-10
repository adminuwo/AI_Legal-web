// ─── CIVIL INJUNCTIONS & INTERIM RELIEF PROCEDURES ───────────────────────────
// Authoritative litigation workflows under Order XXXIX Code of Civil Procedure, 1908

export const CIVIL_INJUNCTIONS_PROCEDURES = [
  {
    id: 'proc-injunction-temporary-order-39',
    slug: 'temporary-injunction-application-order-39-rules-1-2-cpc',
    title: 'Temporary Injunction Application under Order XXXIX Rules 1 & 2 CPC',
    category: 'Civil Injunctions & Interim Relief (O. 39)',
    actReference: 'Code of Civil Procedure, 1908 — Order XXXIX Rules 1 & 2 & Section 94(c)',
    courtForum: 'Civil Court (Junior Civil Judge / Senior Civil Judge / District Judge / High Court Original Side)',
    estimatedTimeline: 'Urgent hearing: 1 to 3 days → Bilateral disposal: 30 to 60 days',
    courtFeeLevel: '₹10 - ₹50 Application fee stamp + Process fee for urgent notice',
    overview: 'A Temporary Injunction is an equitable interlocutory order passed to preserve the status quo of property, restrain illegal alienation or dispossession, or prevent breach of contract pending final adjudication of a civil suit. Governed by Order XXXIX Rules 1 and 2 CPC, the applicant must satisfy the tripartite test crystallized by the Supreme Court: (1) A strong prima facie case; (2) Balance of convenience tilting in favor of the applicant; and (3) Irreparable loss or injury that cannot be adequately compensated in monetary damages (Dalpat Kumar v. Prahlad Singh & Gujarat Bottling v. Coca Cola).',
    legalBasis: 'Order XXXIX Rules 1 & 2, Section 94(c) (interlocutory orders to prevent ends of justice being defeated), Section 151 (inherent powers), and Specific Relief Act, 1963 (Sections 36–37).',
    locusStandi: 'Plaintiff in a pending civil suit, or Defendant filing an independent application under Order XXXIX Rule 1(a) to prevent waste or damage to the suit property.',
    prerequisites: [
      'A properly instituted civil suit with a valid plaint claiming substantive final relief.',
      'Demonstration of imminent threat of alienation, demolition, construction, or dispossession.',
      'Establishment of the Tripartite Test: Prima facie case, Balance of convenience, and Irreparable injury.',
      'Plaintiff must approach the court with clean hands (Uberrima Fides); suppression of material facts disentitles relief.'
    ],
    statutoryLimitation: 'No independent limitation; can be filed along with the plaint or at any stage during the pendency of the suit whenever imminent danger or breach arises.',
    mandatoryDocuments: [
      'Interim Application (IA) under Order XXXIX Rules 1 & 2 read with Section 151 CPC.',
      'Supporting Sworn Affidavit of the applicant verifying all factual averments.',
      'Prima facie title documents (Registered Sale Deed, Lease Deed, Revenue Khatoni, Mutation).',
      'Recent Site Photographs, Site Plan / Map showing possession and contested construction.',
      'Police complaints or legal notices evidencing threats of illegal dispossession or alienation.',
      'Urgent Motion Application explaining why hearing cannot brook delay.'
    ],
    draftingGuidance: 'The application must distinctly plead three separate paragraphs addressing each leg of the tripartite test: Paragraph A (Prima Facie Case demonstrating serious question to be tried); Paragraph B (Balance of Convenience explaining why withholding the injunction causes greater hardship to plaintiff than granting it does to defendant); and Paragraph C (Irreparable Injury showing how monetary damages are incapable of restoring status quo). Specific interim prayers must be framed with precision (e.g. "restraining defendant from changing the nature of suit property or raising construction").',
    courtFeesFilingRules: 'Affix court fee stamp as per State Court Fees Act (₹10–₹50). Pay urgent process fee and registered post speed-post covers for notice service.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Injunction Application along with Plaint',
        governingRule: 'Order XXXIX Rules 1 & 2 & Section 151 CPC',
        actingParty: 'Plaintiff / Advocate',
        description: 'File the Interim Application alongside the Plaint at the filing counter. Obtain Urgent Motion listing for hearing before the Judge on the same or next day.',
        advocateTips: 'Ensure the relief claimed in the interim application is an aid to, and does not exceed, the substantive prayers in the plaint.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Urgent Motion Hearing & Consideration of Ex-Parte Relief',
        governingRule: 'Order XXXIX Rule 3 CPC',
        actingParty: 'Civil Judge & Plaintiff Counsel',
        description: 'Counsel argues urgent interim application. If court finds delay would defeat the purpose, it passes ex-parte ad-interim order; otherwise, it orders urgent show cause notice to defendant.',
        advocateTips: 'If seeking ex-parte relief, strictly comply with the provisos of Order XXXIX Rule 3 CPC by dispatching copies to the defendant on the same day.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Service of Notice & Filing of Reply by Defendant',
        governingRule: 'Order XXXIX Rule 3 & Rule 4 CPC',
        actingParty: 'Defendant / Advocate',
        description: 'Defendant receives summons and interim order, enters appearance, and files a detailed Reply / Objections along with a Counter-Affidavit contesting the tripartite test.',
        advocateTips: 'Defendant should specifically plead suppression of material facts, unclean hands, or that damages are an adequate remedy under Section 41 Specific Relief Act.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Bilateral Hearing on Injunction Application',
        governingRule: 'Order XXXIX Rules 1 & 2 CPC',
        actingParty: 'Civil Judge, Plaintiff & Defendant Counsel',
        description: 'Court hears both sides on rival documentary evidence without conducting a full trial. Court determines who has lawful possession and balance of convenience.',
        advocateTips: 'Rely on registered revenue records and electricity bills to establish actual physical possession as of the date of filing the suit.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Pronouncement of Order & Duration of Injunction',
        governingRule: 'Order XXXIX Rules 1 & 2 CPC',
        actingParty: 'Civil Judge',
        description: 'The court passes a reasoned order either confirming the injunction until final disposal of the suit, modifying the conditions, or dismissing the application.',
        advocateTips: 'Under Order XXXIX Rule 3A CPC, courts are obligated to endeavor to dispose of the injunction application within 30 days.'
      }
    ],
    hearingAndArguments: 'Plaintiff counsel argues the tripartite test: clear chain of registered title, undisturbed possession, and imminent threat of bulldozing or alienation. Defendant counsel argues absence of prima facie title, disputed boundary, lack of irreparable injury, and existence of adequate alternative monetary remedy.',
    possibleOutcomes: [
      'Injunction granted restraining defendant from alienation, construction, or interference until disposal of suit.',
      'Order of Status Quo directing both parties to maintain current physical and legal condition.',
      'Injunction rejected on grounds that damages are an adequate remedy or that plaintiff concealed facts.'
    ],
    appealRevisionRemedy: 'An order granting or refusing an injunction under Order XXXIX Rules 1 & 2 is an appealable order under Order XLIII Rule 1(r) CPC (Miscellaneous Appeal before District Court or High Court).',
    commonPitfalls: [
      'Failing to specifically plead and prove the tripartite test in the body of the application.',
      'Seeking mandatory interim relief (e.g. demolition of already constructed wall) without meeting the exceptional standard of Dorab Cawasji Warden.',
      'Failing to comply with Order XXXIX Rule 3 provisos when ex-parte injunction is secured.'
    ],
    practicalScenario: 'A commercial plot owner discovered that an adjoining developer was encroaching onto his registered 500-yard driveway to lay underground sewer pipelines. The owner immediately filed a suit for permanent injunction along with an Order XXXIX Rules 1 & 2 application. Counsel presented the registered sale deed, municipality sanctioned layout plan, and drone photos showing excavation. The court granted an ad-interim injunction restraining any excavation on the driveway.',
    caseLaws: [
      {
        title: 'Dalpat Kumar v. Prahlad Singh',
        citation: '(1992) 1 SCC 719',
        court: 'Supreme Court of India',
        holding: 'Grant of injunction is an equitable relief; the court must satisfy itself that the three conditions exist: prima facie case, balance of convenience, and irreparable injury. Prima facie case does not mean a case proved to the hilt, but a substantial question requiring investigation.'
      },
      {
        title: 'Gujarat Bottling Co. Ltd. v. Coca Cola Co.',
        citation: '(1995) 5 SCC 545',
        court: 'Supreme Court of India',
        holding: 'The grant of an interlocutory injunction is a discretionary relief; the court must look at the conduct of the party seeking relief; a party who seeks equity must come with clean hands.'
      }
    ],
    faqs: [
      {
        q: 'Can a temporary injunction be granted against a true owner?',
        a: 'No. An injunction cannot be issued against the true owner at the instance of a trespasser or unauthorized occupant (Premji Ratansey v. UOI).'
      },
      {
        q: 'Can an injunction application be decided without issuing notice to the defendant?',
        a: 'Yes, ex-parte ad-interim injunction can be granted under Order XXXIX Rule 3 if issuing notice would defeat the purpose, but strict post-grant compliances are mandatory.'
      }
    ],
    tags: ['civil-injunctions', 'order 39 rules 1 2', 'cpc', 'temporary injunction', 'prima facie case', 'balance of convenience', 'irreparable injury']
  },

  {
    id: 'proc-injunction-exparte-vacation',
    slug: 'exparte-injunction-vacation-discharge-order-39-rule-4-cpc',
    title: 'Ex-Parte Ad-Interim Injunction & Application for Discharge/Vacation under Order XXXIX Rule 4 CPC',
    category: 'Civil Injunctions & Interim Relief (O. 39)',
    actReference: 'Code of Civil Procedure, 1908 — Order XXXIX Rules 3, 3A & 4',
    courtForum: 'Civil Court which passed the ex-parte interim order',
    estimatedTimeline: 'Vacation Application filing: Within 7–15 days of notice → Disposal: Within 30 days under Rule 3A',
    courtFeeLevel: '₹10 - ₹50 Court fee stamp on application',
    overview: 'While the general rule of natural justice requires hearing both sides before granting relief, Order XXXIX Rule 3 CPC allows the court to grant an ex-parte ad-interim injunction where issuing prior notice would cause delay that defeats the very object of the injunction. In such cases, the plaintiff must strictly comply with mandatory notice duties on the same day. Conversely, Order XXXIX Rule 4 CPC provides the aggrieved defendant with a powerful statutory mechanism to apply for the discharge, variation, or vacation of the ex-parte injunction on grounds of suppression of material facts, misstatement, or changed circumstances.',
    legalBasis: 'Order XXXIX Rule 3 (notice before injunction & ex-parte exceptions), Rule 3A (court to dispose of application within thirty days), and Rule 4 (application for discharge, variation, or setting aside of injunction) of the Code of Civil Procedure, 1908.',
    locusStandi: 'Defendant against whom an ex-parte ad-interim injunction was passed without prior notice, or any party affected by an altered factual or legal situation.',
    prerequisites: [
      'Existence of an ex-parte ad-interim injunction order operating against the defendant.',
      'Demonstration that the plaintiff obtained the order by knowingly making a false or misleading statement in relation to a material particular.',
      'Demonstration of non-compliance by the plaintiff with the mandatory requirements of Order XXXIX Rule 3 CPC.',
      'Or establishment of an undue hardship or change of circumstances since the passing of the order.'
    ],
    statutoryLimitation: 'No fixed limitation; should be filed immediately upon receipt of summons or knowledge of the ex-parte order. Under Rule 3A, the court must endeavor to decide within 30 days.',
    mandatoryDocuments: [
      'Application under Order XXXIX Rule 4 CPC for vacation/discharge of the ex-parte ad-interim order.',
      'Supporting Affidavit of the Defendant establishing fraud, suppression, or lack of maintainability.',
      'Documentary proof demonstrating material concealment (e.g. prior dismissed suits, admitted agreements).',
      'Affidavit of non-compliance proving plaintiff failed to deliver copies as mandated by Rule 3 provisos.',
      'Vakalatnama executed by the Defendant.'
    ],
    draftingGuidance: 'The Rule 4 application must be aggressively structured: First, demonstrate non-compliance with Rule 3 CPC (plaintiff did not send plaint copy, injunction order, and documents on the date of order); Second, invoke the First Proviso to Rule 4 CPC which mandates that where an ex-parte injunction was secured by misleading the court, the court "shall vacate the injunction"; Third, reveal concealed facts with documentary annexures; and Fourth, plead irreparable business or property losses suffered due to the ex-parte stay.',
    courtFeesFilingRules: 'Affix standard application court fee stamps (₹10–₹50) + Welfare stamp on Vakalatnama.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Verification of Order XXXIX Rule 3 Compliance',
        governingRule: 'Order XXXIX Rule 3 Provisos',
        actingParty: 'Defendant Advocate',
        description: 'Check postal receipt and delivery date to verify whether plaintiff dispatched a copy of the plaint, interim application, supporting affidavit, documents, and court order on the very day the ex-parte order was passed.',
        advocateTips: 'If plaintiff delayed dispatch by even 2 or 3 days, this statutory default is sufficient ground to vacate the injunction (A. Venkatasubbiah Naidu ruling).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Drafting & Filing Application under Order XXXIX Rule 4 CPC',
        governingRule: 'Order XXXIX Rule 4 CPC',
        actingParty: 'Defendant & Counsel',
        description: 'File vacation application before the same Civil Judge along with counter-affidavit and documents exposing plaintiff suppression. Serve advance copy on plaintiff counsel.',
        advocateTips: 'Invoke the mandatory statutory wording: "the court shall vacate the injunction unless, for reasons to be recorded, it considers that it is not necessary to do so".'
      },
      {
        stepNumber: 3,
        stepTitle: 'Filing Caveat Verification / Rejoinder',
        governingRule: 'Section 148A & Order XXXIX Rule 4 CPC',
        actingParty: 'Plaintiff Counsel',
        description: 'Plaintiff files reply to the vacation application justifying why ex-parte relief was necessary and disproving allegations of fraud or suppression.',
        advocateTips: 'Check whether a caveat under Section 148A CPC was pending when the ex-parte order was granted; if so, the order is void for lack of caveat notice.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Urgent Oral Hearing on Vacation under Rule 3A',
        governingRule: 'Order XXXIX Rule 3A & Rule 4 CPC',
        actingParty: 'Civil Judge & Both Advocates',
        description: 'Court hears oral arguments on the vacation application. Judge examines whether material suppression occurred and whether status quo should be discontinued.',
        advocateTips: 'Rely on S.P. Chengalvaraya Naidu v. Jagannath: fraud and suppression vitiate all judicial proceedings.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Judicial Determination: Vacation, Modification, or Extension',
        governingRule: 'Order XXXIX Rule 4 CPC',
        actingParty: 'Civil Judge',
        description: 'The court passes a reasoned order either vacating the ex-parte injunction with exemplary costs, modifying its scope, or confirming it after hearing both parties.',
        advocateTips: 'If the court reserves judgment indefinitely without deciding within 30 days, file an appeal under Order XLIII Rule 1(r) or High Court petition under Article 227.'
      }
    ],
    hearingAndArguments: 'Defendant counsel demonstrates that plaintiff obtained the stay by active misrepresentation and deliberate suppression of crucial documents, and that Rule 3 notice was violated. Plaintiff counsel argues that the omission was inadvertent, prima facie title remains strong, and vacating the stay would lead to irreversible damage.',
    possibleOutcomes: [
      'Ex-parte injunction vacated completely and defendant permitted to proceed with construction/alienation.',
      'Injunction modified to a limited conditional order (e.g. undertaking not to create third-party rights).',
      'Vacation application rejected and ex-parte order confirmed till disposal of suit.'
    ],
    appealRevisionRemedy: 'An order dismissing an application under Order XXXIX Rule 4 CPC or vacating an injunction is appealable under Order XLIII Rule 1(r) CPC (Miscellaneous Appeal).',
    commonPitfalls: [
      'Filing a general defense without specifically pointing out the false or misleading statement that induced the ex-parte order.',
      'Failing to verify whether the plaintiff complied with the strict same-day postal dispatch requirements under Rule 3.',
      'Filing an appeal directly before the District Court instead of first applying for vacation before the trial court under Rule 4.'
    ],
    practicalScenario: 'A plaintiff obtained an ex-parte ad-interim injunction restraining a bank from encashing an unconditional bank guarantee of ₹10 Crores by concealing that an arbitral tribunal had already rejected an identical stay request. The bank filed an application under Order XXXIX Rule 4 CPC bringing the arbitral order to the judge attention. The court held that the plaintiff committed fraud on the court, vacated the ex-parte injunction immediately, and imposed ₹1 Lakh in costs.',
    caseLaws: [
      {
        title: 'A. Venkatasubbiah Naidu v. S. Challappan',
        citation: '(2000) 7 SCC 695',
        court: 'Supreme Court of India',
        holding: 'Compliance with Order XXXIX Rule 3 CPC provisos is mandatory; if the trial court does not dispose of the injunction application within 30 days under Rule 3A, an appeal under Order XLIII Rule 1(r) CPC is maintainable against the ex-parte order.'
      },
      {
        title: 'S.P. Chengalvaraya Naidu v. Jagannath',
        citation: '(1994) 1 SCC 1',
        court: 'Supreme Court of India',
        holding: 'A litigant who approaches the court with unclean hands and suppresses material facts is guilty of fraud on the court and is not entitled to any equitable or discretionary interim relief.'
      }
    ],
    faqs: [
      {
        q: 'Is it mandatory for the court to decide an injunction application within 30 days?',
        a: 'Yes. Order XXXIX Rule 3A CPC mandates that the court must make an endeavor to finally dispose of the application within 30 days from the date of the ex-parte injunction.'
      },
      {
        q: 'Can a defendant file an appeal against an ex-parte injunction without filing a Rule 4 application?',
        a: 'Yes, an appeal lies under Order XLIII Rule 1(r) CPC, but the Supreme Court in Venkatasubbiah Naidu advised that approaching the trial court under Rule 4 is the preferred first step.'
      }
    ],
    tags: ['civil-injunctions', 'order 39 rule 4', 'ex-parte injunction', 'vacation of stay', 'rule 3a', 'cpc', 'suppression of facts']
  },

  {
    id: 'proc-injunction-breach-disobedience',
    slug: 'breach-of-injunction-disobedience-order-39-rule-2a-cpc',
    title: 'Contempt & Enforcement: Breach of Injunction Proceedings under Order XXXIX Rule 2A CPC',
    category: 'Civil Injunctions & Interim Relief (O. 39)',
    actReference: 'Code of Civil Procedure, 1908 — Order XXXIX Rule 2A & Contempt of Courts Act, 1971',
    courtForum: 'Civil Court which granted the injunction order (or Transferee Court)',
    estimatedTimeline: '2 to 6 months (Summary inquiry into willful disobedience)',
    courtFeeLevel: '₹20 - ₹100 Court fee stamp + Process fees for personal service',
    overview: 'Order XXXIX Rule 2A CPC is the statutory enforcement and penal mechanism against any person who willfully disobeys or breaches an interim injunction order passed by a civil court. The court is empowered to attach the property of the guilty party and direct that they be detained in civil prison for a term not exceeding three months. The proceeding is quasi-criminal in nature: the applicant must prove that the respondent had knowledge of the injunction order and intentionally flouted its mandate (Samee Khan v. Bindu Khan & Amazon v. Future Retail).',
    legalBasis: 'Order XXXIX Rule 2A CPC (Consequence of disobedience or breach of injunction); read with Section 94(c) CPC and Article 215/Contempt of Courts Act, 1971.',
    locusStandi: 'The party in whose favor the injunction was granted, or any party to the suit affected by the flagrant breach of the court order.',
    prerequisites: [
      'A valid, subsisting injunction order passed by the court under Order XXXIX Rules 1 or 2 CPC.',
      'Clear, unambiguous proof that the respondent had notice/knowledge of the injunction order.',
      'Evidence establishing willful, deliberate, and intentional disobedience (not accidental or involuntary breach).',
      'The breach must have occurred while the order was operative and before any vacation or appellate stay.'
    ],
    statutoryLimitation: 'No specific period in CPC; governed by Article 137 Limitation Act (3 years from date of breach). However, prompt filing is necessary to preserve evidence of active violation.',
    mandatoryDocuments: [
      'Application under Order XXXIX Rule 2A CPC signed and verified by the applicant.',
      'Certified Copy of the Injunction Order showing operative restraining terms.',
      'Proof of Service of the Injunction Order on the respondent (Process Server report, Speed Post tracking, Court order sheet recording appearance).',
      'Photographic, Video, or Local Commissioner evidence proving violation (e.g. newly constructed wall, demolition debris).',
      'Police Complaints / Dial 112 PCR calls lodged at the time of illegal violation.',
      'Supporting Sworn Affidavit detailing the exact date, time, and manner of breach.'
    ],
    draftingGuidance: 'Draft the application with criminal-level specificity: (1) State the date and exact operative directions of the injunction order; (2) Detail how the respondent acquired knowledge of the order; (3) Set out the specific acts constituting disobedience with date, time, and photographs; (4) Plead that the breach was intentional, conscious, and contemptuous; and (5) Pray specifically for attachment of respondent properties and their civil detention for up to 3 months.',
    courtFeesFilingRules: 'Affix court fee stamp as per State schedule (₹20–₹100) + Process fees for personal summons.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Filing Application under Order XXXIX Rule 2A CPC',
        governingRule: 'Order XXXIX Rule 2A CPC',
        actingParty: 'Applicant / Advocate',
        description: 'Lodge application supported by affidavit, photographs, and proof of service before the trial court. Court registers an independent Miscellaneous Application.',
        advocateTips: 'Simultaneously file an application under Order XXVI Rule 9 CPC for appointment of a Local Commissioner to immediately inspect the site and record the ongoing violation.'
      },
      {
        stepNumber: 2,
        stepTitle: 'Issue of Show Cause Notice to Contemnor',
        governingRule: 'Order XXXIX Rule 2A & Natural Justice',
        actingParty: 'Civil Court',
        description: 'Court issues personal show cause notice to the respondent directing them to file a written reply and show cause why property should not be attached and civil detention ordered.',
        advocateTips: 'Notice must be served personally; ensure speed post and process server reports are placed on record.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Reply / Defense by Respondent',
        governingRule: 'Order XXXIX Rule 2A CPC',
        actingParty: 'Respondent / Defense Advocate',
        description: 'Respondent files reply denying willful disobedience, claiming lack of knowledge, ambiguous order terms, or that work was done by an unrelated third party.',
        advocateTips: 'If an unconditional apology is tendered, ensure it is bona fide and accompanied by an immediate offer to restore the status quo ante.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Inquiry & Recording of Evidence (Quasi-Criminal Standard)',
        governingRule: 'Order XXXIX Rule 2A CPC & Evidence Act',
        actingParty: 'Civil Judge & Advocates',
        description: 'Court conducts a summary inquiry. Both sides may examine witnesses and cross-examine on the factum of breach, knowledge, and overt acts.',
        advocateTips: 'Standard of proof is higher than ordinary civil preponderance; the applicant must prove willful breach beyond reasonable doubt.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Adjudication & Passing of Penal Orders',
        governingRule: 'Order XXXIX Rule 2A CPC',
        actingParty: 'Civil Judge',
        description: 'The court finds the respondent guilty. Court orders attachment of property for up to 1 year and/or issues civil prison warrant committing contemnor for up to 3 months.',
        advocateTips: 'The court can also exercise inherent power to order the police to demolish the unauthorized construction and restore the status quo ante (Meera Chauhan ruling).'
      }
    ],
    hearingAndArguments: 'Applicant counsel argues deliberate flouting of court majesty, proven service of order, and brazen violation. Respondent counsel argues lack of proper service, ambiguous restraining terms, bona fide misunderstanding, or lack of personal involvement.',
    possibleOutcomes: [
      'Respondent found guilty: civil detention ordered in civil prison for up to 3 months.',
      'Attachment of respondent moveable or immoveable property ordered for up to 1 year.',
      'Direction issued to police and municipal authorities to restore status quo ante at respondent expense.',
      'Application dismissed if breach was not willful or knowledge of order was not proven.'
    ],
    appealRevisionRemedy: 'An order passed under Order XXXIX Rule 2A CPC (whether punishing or refusing to punish) is an appealable order under Order XLIII Rule 1(r) CPC before the Appellate Court.',
    commonPitfalls: [
      'Failing to strictly prove that the contemnor had actual or constructive knowledge of the injunction order.',
      'Relying solely on bare assertions without photographic proof or Local Commissioner inspection report.',
      'Assuming that unconditional apology will automatically expunge flagrant and deliberate disobedience.'
    ],
    practicalScenario: 'A civil court restrained a defendant from raising any construction on a shared boundary wall. The defendant, having appeared through counsel, engaged laborers over a holiday weekend and erected a two-story brick wall. The plaintiff moved an Order XXXIX Rule 2A application along with date-stamped CCTV video and a Local Commissioner report. The Civil Judge found the defendant guilty of willful contempt, ordered 30 days detention in civil prison, and directed the Station House Officer to demolish the newly built wall.',
    caseLaws: [
      {
        title: 'Samee Khan v. Bindu Khan',
        citation: '(1998) 7 SCC 59',
        court: 'Supreme Court of India',
        holding: 'Under Order XXXIX Rule 2A CPC, the court can both attach property and order civil detention; detention in civil prison is not merely to enforce compliance but is also a punitive measure to uphold the majesty of judicial orders.'
      },
      {
        title: 'Meera Chauhan v. Harsh Bishnoi',
        citation: '(2007) 12 SCC 201',
        court: 'Supreme Court of India',
        holding: 'When an order of injunction is breached, the civil court has inherent power under Section 151 CPC to direct restoration of the status quo ante and grant police assistance to undo the wrongful act.'
      }
    ],
    faqs: [
      {
        q: 'What is the maximum period of civil detention under Order XXXIX Rule 2A CPC?',
        a: 'The maximum period of civil imprisonment is three months.'
      },
      {
        q: 'Can an order under Rule 2A be passed if the main suit is subsequently dismissed?',
        a: 'Yes. Disobedience of an interim order while it was alive constitutes contempt of court and can be punished even if the main suit is later dismissed (Tayabbhai M. Bagasarwalla v. Hind Rubber).'
      }
    ],
    tags: ['civil-injunctions', 'order 39 rule 2a', 'breach of injunction', 'civil prison', 'attachment', 'contempt of court', 'cpc']
  },

  {
    id: 'proc-injunction-perpetual-mandatory',
    slug: 'perpetual-mandatory-injunction-suits-specific-relief-act',
    title: 'Perpetual and Mandatory Injunction Suits under Sections 38 & 39 of the Specific Relief Act, 1963',
    category: 'Civil Injunctions & Interim Relief (O. 39)',
    actReference: 'Specific Relief Act, 1963 — Sections 36, 37, 38, 39 & 41 & Code of Civil Procedure, 1908',
    courtForum: 'Civil Court having Pecuniary & Territorial Jurisdiction (Civil Judge / District Judge)',
    estimatedTimeline: '1 to 3 years for regular civil trial and decree',
    courtFeeLevel: 'Ad-valorem or Fixed Court Fee under State Court Fees Act (Sec 7(iv)(d) Court Fees Act 1870)',
    overview: 'While temporary injunctions are interlocutory, Perpetual Injunctions (Section 38 Specific Relief Act) and Mandatory Injunctions (Section 39 Specific Relief Act) are substantive final reliefs decreed after a full trial on merits. A perpetual injunction permanently prevents a defendant from asserting an unlawful right or invading the plaintiff enjoyment of property. A mandatory injunction compels the performance of an affirmative act to prevent breach of an obligation and restore the lawful state of affairs (e.g. demolishing an encroaching wall). Both reliefs are discretionary and governed by statutory bars under Section 41.',
    legalBasis: 'Specific Relief Act, 1963 (Sections 36–42); Code of Civil Procedure, 1908 (Order VII, Order XX Rule 12, Order XXI Rules 32 & 35); read with Dorab Cawasji Warden v. Coomi Sorab Warden (1990) 2 SCC 117.',
    locusStandi: 'Plaintiff having a legal right, ownership, lawful possession, or statutory easement in the property, against an invader, trespasser, or party in breach of legal obligation.',
    prerequisites: [
      'Proof of existing legal right, easement, or title in favor of the plaintiff.',
      'Demonstration of actual invasion or imminent threat to that right under Section 38(3) (no standard for damages, or damages inadequate).',
      'For mandatory injunction: compelling necessity to enforce affirmative acts capable of judicial supervision.',
      'Absence of any statutory bar under Section 41 Specific Relief Act (e.g. an equally efficacious relief available, or plaintiff guilty of disentitling conduct).'
    ],
    statutoryLimitation: 'For perpetual injunction: 3 years under Article 113 Limitation Act from when right to sue accrues. For mandatory injunction: 3 years under Article 113 from completion of the wrongful act.',
    mandatoryDocuments: [
      'Plaint for Perpetual / Mandatory Injunction under Order VII Rule 1 CPC.',
      'Registered Title Deeds, Khata Certificate, Jamabandi, or Lease Agreement establishing possessory right.',
      'Site Plan drawn to scale by an Architect or Registered Surveyor with clear demarcations.',
      'Valuation Slip and proof of Court Fee payment under State Court Fees Act.',
      'Notices served on the defendant and postal acknowledgements.',
      'Photographs, sanctioned layout plans, or municipal sanction orders.'
    ],
    draftingGuidance: 'Draft the plaint with distinct averments satisfying Section 38(3) Specific Relief Act: (a) Establish plaintiff settled lawful possession; (b) Specify that defendant has no right, title, or interest; (c) Demonstrate that defendant invasion is of such a character that monetary compensation would not afford adequate relief; (d) For mandatory injunction, specify the exact structure to be removed or act to be done; (e) Ensure prayers include perpetual injunction, mandatory injunction, costs, and any damages.',
    courtFeesFilingRules: 'Subject to State Court Fees Act. Typically computed on fixed valuation or ad-valorem on the relief sought under Section 7(iv)(d) of the Court Fees Act, 1870.',
    stepByStepPipeline: [
      {
        stepNumber: 1,
        stepTitle: 'Institution of Plaint for Injunction',
        governingRule: 'Order VII CPC & Section 38/39 Specific Relief Act',
        actingParty: 'Plaintiff & Counsel',
        description: 'File the Plaint before the competent Civil Court accompanied by an Order XXXIX Rules 1 & 2 application for interim protection pending suit.',
        advocateTips: 'If plaintiff title is disputed or clouded by defendant, always add a prayer for Declaration of Title under Section 34 Specific Relief Act (Anathula Sudhakar ruling).'
      },
      {
        stepNumber: 2,
        stepTitle: 'Service of Summons & Written Statement',
        governingRule: 'Order V & Order VIII CPC',
        actingParty: 'Defendant / Advocate',
        description: 'Defendant is served summons and files Written Statement within 30 days raising defense of adverse possession, independent title, or Section 41 statutory bars.',
        advocateTips: 'Scrutinize whether defendant claims title; if so, amend the plaint to seek declaration of title and recovery of possession in the alternative.'
      },
      {
        stepNumber: 3,
        stepTitle: 'Framing of Issues by Court',
        governingRule: 'Order XIV CPC',
        actingParty: 'Civil Judge',
        description: 'Court frames specific issues: (1) Whether plaintiff is in lawful possession; (2) Whether defendant interfered with possession; (3) Whether plaintiff is entitled to perpetual/mandatory injunction.',
        advocateTips: 'Ensure that the burden of proving possession on the date of suit is correctly cast on the plaintiff.'
      },
      {
        stepNumber: 4,
        stepTitle: 'Trial: Plaintiff & Defendant Evidence',
        governingRule: 'Order XVIII CPC',
        actingParty: 'Plaintiff, Defendant & Witnesses',
        description: 'Both parties lead oral and documentary evidence. Surveyors or Local Commissioners are examined to prove physical encroachment or easement obstruction.',
        advocateTips: 'Examine neighboring witnesses and local municipal inspectors to prove long-standing continuous physical possession.'
      },
      {
        stepNumber: 5,
        stepTitle: 'Final Arguments, Judgment & Decree',
        governingRule: 'Order XX CPC & Sections 38–39 Specific Relief Act',
        actingParty: 'Civil Judge',
        description: 'Court delivers judgment. If decreed, the decree perpetually enjoins the defendant or mandates removal of unauthorized structures within a specified time (e.g. 60 days).',
        advocateTips: 'If defendant fails to comply with the mandatory injunction, execute under Order XXI Rule 32 CPC by attaching property or seeking court-appointed commissioner demolition.'
      }
    ],
    hearingAndArguments: 'Plaintiff counsel proves lawful settled possession, lack of defendant title, and active threats to peaceful enjoyment. Defendant counsel argues plaintiff is a trespasser, title is clouded, an equally efficacious remedy (such as a suit for partition or possession) exists, and suit is barred under Section 41(h) Specific Relief Act.',
    possibleOutcomes: [
      'Suit decreed granting perpetual and/or mandatory injunction against defendant.',
      'Suit dismissed with liberty to file comprehensive suit for declaration of title and possession under Anathula Sudhakar.',
      'Partial decree granting damages in lieu of injunction under Section 40 Specific Relief Act.'
    ],
    appealRevisionRemedy: 'A final decree of injunction is appealable as a Regular First Appeal under Section 96 CPC before the District Court or High Court.',
    commonPitfalls: [
      'Filing a bare suit for injunction when title is seriously clouded, leading to dismissal under Anathula Sudhakar.',
      'Failing to pray for mandatory demolition in the plaint when construction was already partially commenced.',
      'Seeking mandatory injunction after inordinate delay, attracting the bar of acquiescence under Section 41(h) or (i).'
    ],
    practicalScenario: 'A residential plot owner discovered that the adjacent plot owner had extended a roof cantilever 4 feet into the plaintiff airspace. The plaintiff filed a suit for mandatory and perpetual injunction. The trial court examined the registered deed and surveyor map, held that the defendant had encroached on the plaintiff airspace without authority, and passed a mandatory injunction directing the defendant to dismantle the cantilever within 60 days.',
    caseLaws: [
      {
        title: 'Anathula Sudhakar v. P. Buchi Reddy',
        citation: '(2008) 4 SCC 594',
        court: 'Supreme Court of India',
        holding: 'Where the plaintiff is in lawful possession and the defendant merely threatens interference, a bare suit for injunction lies; but where the title of the plaintiff is seriously disputed or clouded, the plaintiff must file a comprehensive suit for declaration of title and consequential injunction/possession.'
      },
      {
        title: 'Dorab Cawasji Warden v. Coomi Sorab Warden',
        citation: '(1990) 2 SCC 117',
        court: 'Supreme Court of India',
        holding: 'Grant of an interlocutory mandatory injunction is an extraordinary power exercised with great caution; the court must find that the plaintiff has a strong case for trial, grave irreparable injury would occur, and the status quo ante must be restored.'
      }
    ],
    faqs: [
      {
        q: 'Can a perpetual injunction be granted if the plaintiff has an adequate remedy in damages?',
        a: 'No. Under Section 38(3) and Section 41(h) of the Specific Relief Act, 1963, if monetary compensation is an adequate and quantifiable relief, an injunction cannot be granted.'
      },
      {
        q: 'How is a decree for mandatory injunction enforced if the judgment-debtor refuses to comply?',
        a: 'Under Order XXI Rule 32(5) CPC, the executing court may appoint an advocate-commissioner or municipal agency to perform the mandated act at the cost of the judgment-debtor.'
      }
    ],
    tags: ['civil-injunctions', 'perpetual injunction', 'mandatory injunction', 'specific relief act', 'section 38', 'section 39', 'anathula sudhakar']
  }
];
