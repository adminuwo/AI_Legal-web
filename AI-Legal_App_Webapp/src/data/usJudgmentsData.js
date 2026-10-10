// ─── AI LEGAL™ SUPREME COURT OF THE UNITED STATES (SCOTUS) LANDMARK PRECEDENTS ──
// Definitive judicial rulings establishing federal constitutional doctrine and procedural precedents.

export const US_LANDMARK_JUDGMENTS = [
  {
    id: 'marbury-v-madison-1803',
    slug: 'marbury-v-madison-judicial-review-scotus',
    aliases: ['marbury-v-madison', 'marbury_madison', 'scotus_1803_marbury'],
    title: 'Marbury v. Madison',
    jurisdiction: 'US',
    parties: {
      petitioner: 'William Marbury',
      respondent: 'James Madison, Secretary of State'
    },
    court: 'Supreme Court of the United States',
    courtId: 'scotus',
    year: '1803',
    date: 'February 24, 1803',
    citation: '5 U.S. (1 Cranch) 137 (1803)',
    bench: 'Full Court',
    judges: [
      "Chief Justice John Marshall",
      "Justice William Cushing",
      "Justice William Paterson",
      "Justice Samuel Chase",
      "Justice Bushrod Washington"
    ],
    caseType: 'Original Action for Writ of Mandamus',
    subjectTags: ['Judicial Review', 'Constitutional Supremacy', 'Separation of Powers', 'Article III Jurisdiction'],
    acts: [
      'Constitution of the United States — Article III',
      'Judiciary Act of 1789 — Section 13'
    ],
    sections: ['Article III, Section 2, Clause 2', 'Judiciary Act Section 13'],
    ratioDecidendi: 'An Act of Congress repugnant to the Constitution is void. It is emphatically the province and duty of the judicial department to say what the law is. The Constitution is superior to any ordinary legislative act.',
    executiveSummary: 'Chief Justice John Marshall established the doctrine of Judicial Review under the United States Constitution. While holding that Marbury had a legal right to his judicial commission, the Court ruled that Section 13 of the Judiciary Act of 1789, which purported to grant SCOTUS original jurisdiction to issue writs of mandamus, violated Article III, Section 2 of the Constitution.',
    caseContext: {
      facts: 'President John Adams appointed William Marbury as a justice of the peace in D.C. in the final days of his presidency. The commission was signed and sealed but not delivered before Thomas Jefferson assumed office. Secretary of State James Madison refused to deliver the commission. Marbury petitioned SCOTUS for a writ of mandamus.',
      legalIssue: '1. Does Marbury have a right to the commission?\n2. Do the laws of the country afford him a remedy?\n3. Can the Supreme Court issue a writ of mandamus as part of its original jurisdiction?'
    },
    reasoning: 'Marshall reasoned that the Constitution is the supreme law of the land. When an ordinary statute conflicts with the Constitution, courts must adhere to the Constitution and declare the statute unconstitutional.'
  },

  {
    id: 'miranda-v-arizona-1966',
    slug: 'miranda-v-arizona-fifth-amendment-warnings',
    aliases: ['miranda-v-arizona', 'miranda_warnings', 'scotus_1966_miranda'],
    title: 'Miranda v. Arizona',
    jurisdiction: 'US',
    parties: {
      petitioner: 'Ernesto Miranda',
      respondent: 'State of Arizona'
    },
    court: 'Supreme Court of the United States',
    courtId: 'scotus',
    year: '1966',
    date: 'June 13, 1966',
    citation: '384 U.S. 436 (1966)',
    bench: 'Full Court',
    judges: [
      "Chief Justice Earl Warren",
      "Justice Hugo Black",
      "Justice William O. Douglas",
      "Justice Tom C. Clark",
      "Justice John M. Harlan II",
      "Justice William J. Brennan Jr.",
      "Justice Potter Stewart",
      "Justice Byron White",
      "Justice Abe Fortas"
    ],
    caseType: 'Criminal Appeal / Constitutional Certiorari',
    subjectTags: ['Fifth Amendment', 'Self-Incrimination', 'Custodial Interrogation', 'Miranda Warnings', 'Right to Counsel'],
    acts: [
      'Constitution of the United States — Fifth Amendment',
      'Constitution of the United States — Sixth Amendment'
    ],
    sections: ['Fifth Amendment Self-Incrimination Clause', 'Sixth Amendment Right to Counsel'],
    ratioDecidendi: 'Statements obtained from defendants during custodial police interrogation are inadmissible in a criminal prosecution unless the prosecution demonstrates the procedural safeguards of warning the accused of the right to remain silent, that anything said can be used against them in court, the right to an attorney, and the right to appointed counsel if indigent.',
    executiveSummary: 'Chief Justice Earl Warren held that the coercive atmosphere of custodial interrogation undermines the privilege against self-incrimination guaranteed by the Fifth Amendment unless concrete procedural safeguards—now known universally as Miranda Warnings—are administered prior to questioning.',
    caseContext: {
      facts: 'Ernesto Miranda was arrested in Phoenix, Arizona, and questioned for two hours by police regarding a kidnapping and rape without being advised of his right to silence or counsel. He signed a written confession that was admitted at trial, leading to his conviction.',
      legalIssue: 'Are statements obtained from an individual who is subjected to custodial police interrogation admissible against him in a criminal trial without prior notification of Fifth and Sixth Amendment rights?'
    },
    reasoning: 'The Court reasoned that without proper safeguards, the process of in-custody interrogation contains inherently compelling pressures that work to undermine the individual\'s will to resist and to compel him to speak where he would not otherwise do so freely.'
  },

  {
    id: 'brown-v-board-of-education-1954',
    slug: 'brown-v-board-of-education-desegregation-fourteenth-amendment',
    aliases: ['brown-v-board', 'brown_board_education', 'scotus_1954_brown'],
    title: 'Brown v. Board of Education of Topeka',
    jurisdiction: 'US',
    parties: {
      petitioner: 'Oliver Brown et al.',
      respondent: 'Board of Education of Topeka, Kansas'
    },
    court: 'Supreme Court of the United States',
    courtId: 'scotus',
    year: '1954',
    date: 'May 17, 1954',
    citation: '347 U.S. 483 (1954)',
    bench: 'Unanimous 9-Judge Court',
    judges: [
      "Chief Justice Earl Warren",
      "Justice Hugo Black",
      "Justice Stanley F. Reed",
      "Justice Felix Frankfurter",
      "Justice William O. Douglas",
      "Justice Robert H. Jackson",
      "Justice Harold H. Burton",
      "Justice Tom C. Clark",
      "Justice Sherman Minton"
    ],
    caseType: 'Civil Rights Class Action / Fourteenth Amendment Certiorari',
    subjectTags: ['Equal Protection Clause', 'Fourteenth Amendment', 'School Desegregation', 'Separate but Equal Doctrine Struck Down'],
    acts: [
      'Constitution of the United States — Fourteenth Amendment, Section 1'
    ],
    sections: ['Fourteenth Amendment Equal Protection Clause'],
    ratioDecidendi: 'Separate educational facilities are inherently unequal. Segregation of children in public schools solely on the basis of race deprives children of the minority group of equal educational opportunities, violating the Equal Protection Clause of the Fourteenth Amendment.',
    executiveSummary: 'A unanimous Supreme Court dismantled state-sanctioned racial segregation in public schools, repudiating the doctrine of "separate but equal" established in Plessy v. Ferguson (1896). The Court held that intangible psychological factors and the stigma of state-enforced segregation generate a feeling of inferiority in minority children that affects their hearts and minds in ways unlikely ever to be undone.',
    caseContext: {
      facts: 'African American students were denied admission to public schools attended by white children under state laws requiring or permitting segregation. Thurgood Marshall and the NAACP Legal Defense Fund challenged the statutes under the Equal Protection Clause.',
      legalIssue: 'Does segregation of children in public schools solely on the basis of race deprive minority children of equal educational opportunities guaranteed by the Fourteenth Amendment?'
    },
    reasoning: 'Education is perhaps the most important function of state and local governments. In the field of public education, the doctrine of "separate but equal" has no place.'
  },

  {
    id: 'brady-v-maryland-1963',
    slug: 'brady-v-maryland-prosecutorial-disclosure-exculpatory-evidence',
    aliases: ['brady-v-maryland', 'brady_material', 'scotus_1963_brady'],
    title: 'Brady v. Maryland',
    jurisdiction: 'US',
    parties: {
      petitioner: 'John L. Brady',
      respondent: 'State of Maryland'
    },
    court: 'Supreme Court of the United States',
    courtId: 'scotus',
    year: '1963',
    date: 'May 13, 1963',
    citation: '373 U.S. 83 (1963)',
    bench: 'Full Court',
    judges: [
      "Justice William O. Douglas",
      "Chief Justice Earl Warren",
      "Justice Hugo Black",
      "Justice Tom C. Clark",
      "Justice John M. Harlan II",
      "Justice William J. Brennan Jr.",
      "Justice Potter Stewart",
      "Justice Byron White",
      "Justice Arthur Goldberg"
    ],
    caseType: 'Criminal Certiorari / Fourteenth Amendment Due Process',
    subjectTags: ['Brady Rule', 'Exculpatory Evidence', 'Due Process', 'Prosecutorial Misconduct', 'Fair Trial'],
    acts: [
      'Constitution of the United States — Fourteenth Amendment'
    ],
    sections: ['Fourteenth Amendment Due Process Clause'],
    ratioDecidendi: 'The suppression by the prosecution of evidence favorable to an accused upon request violates due process where the evidence is material either to guilt or to punishment, irrespective of the good faith or bad faith of the prosecution.',
    executiveSummary: 'Justice William O. Douglas established the fundamental constitutional requirement that prosecutors must disclose all material exculpatory or impeachment evidence to the defense ("Brady material"). Nondisclosure of evidence that could affect the judgment of the jury constitutes a structural violation of Due Process requiring reversal.',
    caseContext: {
      facts: 'John Brady and Donald Boblit were prosecuted for murder. Brady admitted participation but claimed Boblit did the actual killing. Defense counsel asked to examine Boblit\'s extrajudicial statements. The prosecution withheld Boblit\'s statement confessing to the killing.',
      legalIssue: 'Does the prosecution\'s suppression of an accomplice\'s confession that the defendant requested violate the Due Process Clause of the Fourteenth Amendment?'
    },
    reasoning: 'Society wins not only when the guilty are convicted but when criminal trials are fair; our administration of justice suffers when an accused is treated unfairly.'
  }
];
