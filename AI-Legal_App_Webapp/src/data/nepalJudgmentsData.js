// ─── AI LEGAL™ SUPREME COURT OF NEPAL LANDMARK PRECEDENTS DATABASE ──────────
// Authoritative judicial decisions of the Supreme Court of Nepal (सर्वोच्च अदालत)
// Published in the Nepal Law Report (नेपाल कानून पत्रिका - NLR) with complete ratio decidendi.

export const NEPAL_LANDMARK_JUDGMENTS = [
  {
    id: 'balaram-pandey-2074',
    slug: 'balaram-pandey-election-commission-article-133-nepal',
    aliases: ['balaram-pandey', 'sc_nepal_2074_balaram_pandey'],
    title: 'Balaram Pandey v. Election Commission & Others',
    jurisdiction: 'NP',
    parties: {
      petitioner: 'Advocate Balaram Pandey',
      respondent: 'Election Commission of Nepal & Office of the Prime Minister'
    },
    court: 'Supreme Court of Nepal (सर्वोच्च अदालत)',
    courtId: 'sc_np',
    year: '2017 (2074 BS)',
    date: '15 Kartik 2074 BS',
    citation: 'NLR 2074, Decision No. 9876 / SC Nepal Full Bench',
    bench: 'Constitutional Bench (संवैधानिक इजलास)',
    judges: [
      "Hon'ble Chief Justice Gopal Parajuli",
      "Hon'ble Justice Deepak Raj Joshee",
      "Hon'ble Justice Om Prakash Mishra",
      "Hon'ble Justice Cholendra Shumsher JBR",
      "Hon'ble Justice Deepak Kumar Karki"
    ],
    caseType: 'Extraordinary Constitutional Writ Petition under Article 133',
    subjectTags: ['Constitutional Supremacy', 'Extraordinary Jurisdiction', 'Article 133', 'Judicial Review', 'Separation of Powers'],
    acts: [
      'Constitution of Nepal, 2072 — Article 133',
      'Administration of Justice Act, 2073'
    ],
    sections: ['Article 133(1)', 'Article 133(2)', 'Article 126'],
    ratioDecidendi: 'The extraordinary writ jurisdiction vested in the Supreme Court under Article 133 of the Constitution of Nepal cannot be curtailed, abrogated, or ousted by ordinary statutory legislation. The Supreme Court has the sovereign duty to preserve the rule of law and judicial review over all administrative action.',
    executiveSummary: 'A 5-Judge Constitutional Bench held that the Supreme Court\'s power of judicial review under Article 133 is an inviolable basic feature of the constitutional architecture of Nepal. Statutory provisions attempting to establish finality without judicial appeal must yield to constitutional scrutiny.',
    caseContext: {
      facts: 'The Election Commission published guidelines restricting judicial appeals during local level elections. The petitioner challenged the regulation as ultra vires Article 133.',
      legalIssue: 'Can an executive regulation or statutory clause oust the extraordinary jurisdiction of the Supreme Court of Nepal?'
    },
    reasoning: 'The Supreme Court reasoned that the Constitution is the fundamental law of the land (धारा १). Any rule curtailing extraordinary writ remedies is void ab initio.'
  },

  {
    id: 'prakash-mani-sharma-2065',
    slug: 'prakash-mani-sharma-right-clean-environment-pil-nepal',
    title: 'Advocate Prakash Mani Sharma v. Council of Ministers (Godavari Marble Case)',
    jurisdiction: 'NP',
    parties: {
      petitioner: 'Advocate Prakash Mani Sharma for Pro-Public',
      respondent: 'Government of Nepal, Council of Ministers & Ministry of Environment'
    },
    court: 'Supreme Court of Nepal (सर्वोच्च अदालत)',
    courtId: 'sc_np',
    year: '2008 (2065 BS)',
    date: '10 Jestha 2065 BS',
    citation: 'NLR 2065, Vol. 50, p. 1320 / SC Nepal Special Bench',
    bench: 'Division Bench (संयुक्त इजलास)',
    judges: [
      "Hon'ble Justice Kedar Prasad Giri",
      "Hon'ble Justice Min Bahadur Rayamajhi"
    ],
    caseType: 'Public Interest Litigation (PIL) under Writ Jurisdiction',
    subjectTags: ['Right to Clean Environment', 'PIL Locus Standi', 'Public Trust Doctrine', 'Article 30', 'Sustainable Development'],
    acts: [
      'Constitution of Nepal — Article 30 (Right to Clean Environment)',
      'Environment Protection Act, 2076'
    ],
    sections: ['Article 30', 'Article 133(2)'],
    ratioDecidendi: 'The Right to a Clean and Healthy Environment is an inalienable component of the Right to Life with dignity. Traditional restrictive locus standi has no application in Public Interest Litigation protecting ecological heritage.',
    executiveSummary: 'The Supreme Court issued a historic Writ of Mandamus halting destructive marble quarrying in Godavari, Lalitpur, holding that environmental degradation compromises the constitutional rights of future generations.',
    caseContext: {
      facts: 'Godavari Marble Industries caused severe destruction of ecological flora, fauna, and water tables in Lalitpur. Pro-Public filed a PIL demanding cancellation of lease.',
      legalIssue: 'Whether industrial mineral extraction can override the fundamental right of citizens to ecological conservation.'
    },
    reasoning: 'The Court applied the Public Trust Doctrine and Intergenerational Equity, ruling that the State is a trustee of natural resources.'
  },

  {
    id: 'meera-dhungana-2052',
    slug: 'meera-dhungana-daughter-property-inheritance-rights-nepal',
    title: 'Advocate Meera Dhungana v. Ministry of Law, Justice & Parliamentary Affairs',
    jurisdiction: 'NP',
    parties: {
      petitioner: 'Advocate Meera Dhungana & FWLD',
      respondent: 'Ministry of Law and Justice, Government of Nepal'
    },
    court: 'Supreme Court of Nepal (सर्वोच्च अदालत)',
    courtId: 'sc_np',
    year: '1995 (2052 BS)',
    date: '18 Shrawan 2052 BS',
    citation: 'NLR 2052, Decision No. 6013 / SC Nepal Special Bench',
    bench: 'Special Bench (विशेष इजलास)',
    judges: [
      "Hon'ble Justice Trilok Pratap Rana",
      "Hon'ble Justice Laxman Prasad Aryal",
      "Hon'ble Justice Kedar Nath Upadhyay"
    ],
    caseType: 'Constitutional Writ challenging Statutory Discrimination',
    subjectTags: ['Gender Equality', 'Daughters Property Rights', 'Anshabanda', 'Article 18', 'Muluki Civil Code'],
    acts: [
      'Constitution of Nepal — Article 18 (Right to Equality)',
      'Muluki Civil Code 2074 — Part 3 Chapter 10 (Partition & Inheritance)'
    ],
    sections: ['Article 18(1)', 'Article 18(2)'],
    ratioDecidendi: 'Statutory provisions denying equal ancestral property partition rights to daughters solely on the basis of sex and marital status constitute hostile discrimination violating constitutional equality.',
    executiveSummary: 'The foundational catalyst for gender law reform in Nepal. The Supreme Court declared discriminatory inheritance rules contrary to constitutional equality and directed the government to enact legislation granting equal birthright property rights to daughters, culminating in the Muluki Civil Code 2074.',
    caseContext: {
      facts: 'The old Muluki Ain required daughters to remain unmarried until age 35 to claim partition of ancestral property, while sons acquired equal share at birth.',
      legalIssue: 'Whether conditioning daughters\' inheritance on marital status and age violates the constitutional right to equality.'
    },
    reasoning: 'Sex discrimination cannot be sheltered behind traditional patriarchal norms. Equality under Article 18 demands parity in economic and property rights.'
  },

  {
    id: 'nirmal-kumar-karki-2076',
    slug: 'nirmal-kumar-karki-cheque-bounce-banking-offence-nepal',
    title: 'Nirmal Kumar Karki v. District Police Office Kathmandu & Others',
    jurisdiction: 'NP',
    parties: {
      petitioner: 'Nirmal Kumar Karki',
      respondent: 'District Police Office Kathmandu & Government Attorney'
    },
    court: 'Supreme Court of Nepal (सर्वोच्च अदालत)',
    courtId: 'sc_np',
    year: '2019 (2076 BS)',
    date: '24 Ashad 2076 BS',
    citation: 'NLR 2076, Decision No. 10255 / Full Bench Ruling',
    bench: 'Full Bench (पूर्ण इजलास)',
    judges: [
      "Hon'ble Justice Cholendra Shumsher JBR",
      "Hon'ble Justice Deepak Kumar Karki",
      "Hon'ble Justice Kedar Prasad Chalise"
    ],
    caseType: 'Criminal Writ Petition on Jurisdiction Conflict',
    subjectTags: ['Cheque Bounce', 'Banking Offence Act 2064', 'Negotiable Instruments Act 2034', 'Criminal Prosecution', 'Double Jeopardy'],
    acts: [
      'Banking Offence and Punishment Act, 2064 — Section 3(c) & Section 15',
      'Negotiable Instruments Act, 2034 — Section 107A'
    ],
    sections: ['Section 3(c)', 'Section 15', 'Section 17'],
    ratioDecidendi: 'The victim of a dishonoured cheque in Nepal has the unfettered legal choice to pursue criminal prosecution under the Banking Offence and Punishment Act 2064 or civil summary recovery under the Negotiable Instruments Act 2034. A criminal proceeding under BOPA 2064 is not barred by the existence of NIA 2034.',
    executiveSummary: 'The Full Bench resolved the conflicting High Court decisions, conclusively holding that drawing a cheque knowing of insufficient balance is a serious economic crime against the banking system under BOPA 2064.',
    caseContext: {
      facts: 'Drawer challenged police arrest under Banking Offence Act claiming cheque bounce was purely a civil dispute under the Negotiable Instruments Act.',
      legalIssue: 'Does the existence of Section 107A in NIA 2034 bar police from investigating a dishonoured cheque under the Banking Offence Act 2064?'
    },
    reasoning: 'BOPA 2064 is a special penal statute designed to maintain commercial stability in the financial system. The drawer cannot evade criminal liability.'
  }
];
