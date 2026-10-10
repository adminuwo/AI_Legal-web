// ─── AI LEGAL™ UK SUPREME COURT & HOUSE OF LORDS LANDMARK PRECEDENTS ─────────
// Authoritative judicial rulings establishing English Common Law, Constitutional, and Tort doctrine.

export const UK_LANDMARK_JUDGMENTS = [
  {
    id: 'donoghue-v-stevenson-1932',
    slug: 'donoghue-v-stevenson-neighbour-principle-duty-of-care',
    aliases: ['donoghue-v-stevenson', 'snail-in-the-bottle', 'ukhl_1932_donoghue'],
    title: 'M\'Alister (or Donoghue) v. Stevenson',
    jurisdiction: 'GB',
    parties: {
      petitioner: 'Mrs. May Donoghue (Appellant)',
      respondent: 'David Stevenson (Aerated Water Manufacturer, Respondent)'
    },
    court: 'House of Lords (Judicial Committee)',
    courtId: 'ukhl',
    year: '1932',
    date: '26 May 1932',
    citation: '[1932] AC 562 / 1932 SC (HL) 31',
    bench: '5-Judge Appellate Committee',
    judges: [
      "Lord Buckmaster",
      "Lord Atkin",
      "Lord Tomlin",
      "Lord Thankerton",
      "Lord Macmillan"
    ],
    caseType: 'Scots / English Delict & Tort Appeal',
    subjectTags: ['Duty of Care', 'Neighbour Principle', 'Negligence', 'Manufacturer Liability', 'Privity of Contract Overcome'],
    acts: [
      'Common Law of Torts / Scots Law of Delict'
    ],
    sections: ['Duty of Care Formulation', 'Doctrine of Reasonable Foreseeability'],
    ratioDecidendi: 'A manufacturer of products, which he sells in such a form as to show that he intends them to reach the ultimate consumer in the form in which they left him with no reasonable possibility of intermediate examination, owes a duty to the consumer to take reasonable care that the product is free from defect likely to cause injury to health.',
    executiveSummary: 'Lord Atkin formulated the celebrated "Neighbour Principle," founding the modern common law of negligence. The House of Lords severed liability in tort from privity of contract, establishing that an injured consumer can sue a manufacturer directly for foreseeable harm caused by a defective product.',
    caseContext: {
      facts: 'Mrs. Donoghue drank ginger beer from an opaque glass bottle purchased for her by a friend at a café in Paisley. When the remainder was poured, the decomposed remains of a snail floated out. Mrs. Donoghue suffered gastroenteritis and nervous shock, suing the manufacturer Stevenson in delict.',
      legalIssue: 'Does a manufacturer owe a legal duty of care to the ultimate consumer of goods where there is no contractual relationship between them?'
    },
    reasoning: 'Lord Atkin synthesized the rule: "The rule that you are to love your neighbour becomes in law, you must not injure your neighbour... You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour."'
  },

  {
    id: 'r-miller-v-prime-minister-2019',
    slug: 'r-miller-v-prime-minister-cherry-prorogation-parliamentary-sovereignty',
    aliases: ['miller-2', 'prorogation-case', 'uksc_2019_miller'],
    title: 'R (on the application of Miller) v. The Prime Minister / Cherry v. Advocate General for Scotland',
    jurisdiction: 'GB',
    parties: {
      petitioner: 'Gina Miller and Joanna Cherry MP QC',
      respondent: 'The Prime Minister (Boris Johnson) and the Advocate General for Scotland'
    },
    court: 'Supreme Court of the United Kingdom',
    courtId: 'uksc',
    year: '2019',
    date: '24 September 2019',
    citation: '[2019] UKSC 41 / [2020] AC 373',
    bench: 'Historic 11-Justice Full Bench',
    judges: [
      "Lady Hale (President)",
      "Lord Reed (Deputy President)",
      "Lord Kerr",
      "Lord Wilson",
      "Lord Carnwath",
      "Lord Hodge",
      "Lady Black",
      "Lord Lloyd-Jones",
      "Lady Arden",
      "Lord Kitchin",
      "Lord Sales"
    ],
    caseType: 'Constitutional Judicial Review Appeal',
    subjectTags: ['Parliamentary Sovereignty', 'Prorogation', 'Royal Prerogative', 'Judicial Review', 'Separation of Powers'],
    acts: [
      'Bill of Rights 1689',
      'Constitutional Reform Act 2005'
    ],
    sections: ['Limits of Prerogative Power', 'Article 9 Bill of Rights 1689'],
    ratioDecidendi: 'An exercise of the Royal Prerogative to prorogue Parliament will be unlawful if the prorogation has the effect of frustrating or preventing, without reasonable justification, the ability of Parliament to carry out its constitutional functions as a legislature and as the body responsible for the supervision of the executive.',
    executiveSummary: 'An unprecedented 11-Justice UK Supreme Court ruled unanimously that Prime Minister Boris Johnson\'s advice to the Queen to prorogue Parliament for five weeks ahead of the Brexit deadline was justiciable, unlawful, and void. Consequently, the prorogation was of no legal effect, and Parliament had not been prorogued.',
    caseContext: {
      facts: 'In August 2019, Prime Minister Boris Johnson advised the Queen to prorogue Parliament from a date between 9-12 September until 14 October 2019 (a 5-week shutdown during crucial Brexit debates). Gina Miller in England and Joanna Cherry MP in Scotland challenged the lawfulness of the advice.',
      legalIssue: '1. Is the Prime Minister\'s advice to prorogue Parliament justiciable in a court of law?\n2. What are the legal limits of the prerogative power to prorogue?\n3. Did the prorogation unlawfully infringe Parliamentary Sovereignty?'
    },
    reasoning: 'Lady Hale and Lord Reed held that the principle of Parliamentary Sovereignty would be an empty principle if the executive could use the prerogative to remove Parliament from the scene for as long as it pleased when decisions of fundamental importance were being made.'
  },

  {
    id: 'carlill-v-carbolic-smoke-ball-1893',
    slug: 'carlill-v-carbolic-smoke-ball-unilateral-contracts-advertisement',
    aliases: ['carlill-v-carbolic', 'smoke-ball', 'ukca_1893_carlill'],
    title: 'Carlill v. Carbolic Smoke Ball Company',
    jurisdiction: 'GB',
    parties: {
      petitioner: 'Mrs. Louisa Elizabeth Carlill (Plaintiff)',
      respondent: 'The Carbolic Smoke Ball Company (Defendants)'
    },
    court: 'Court of Appeal (Civil Division)',
    courtId: 'ukca',
    year: '1893',
    date: '7 December 1892',
    citation: '[1893] 1 QB 256 / 62 LJ QB 257',
    bench: '3-Judge Bench',
    judges: [
      "Lord Justice Lindley",
      "Lord Justice Bowen",
      "Lord Justice A.L. Smith"
    ],
    caseType: 'Commercial Contract Appeal',
    subjectTags: ['Unilateral Contracts', 'Offer to the World', 'Intention to Create Legal Relations', 'Consideration', 'Waiver of Communication'],
    acts: [
      'English Common Law of Contract'
    ],
    sections: ['Formation of Contract: Offer and Acceptance'],
    ratioDecidendi: 'An advertisement containing an offer to pay a reward upon the performance of a condition is an offer made to the world at large which ripens into a binding unilateral contract when an individual performs the condition without need for prior notice of acceptance.',
    executiveSummary: 'The Court of Appeal established the validity of unilateral contracts. The defendants\' advertisement offering £100 reward to anyone who used their smoke ball product and contracted influenza, backed by a £1,000 deposit in the Alliance Bank, was held to be a binding contractual offer rather than a mere sales puff.',
    caseContext: {
      facts: 'The Carbolic Smoke Ball Co. advertised that it would pay £100 reward to anyone who contracted influenza after using its carbolic smoke ball three times daily for two weeks, stating that £1,000 was deposited with Alliance Bank to show sincerity. Mrs. Carlill used the ball as directed and contracted the flu. The company refused to pay.',
      legalIssue: '1. Was the advertisement a mere puff or a legally binding offer?\n2. Did the contract fail for lack of notification of acceptance?\n3. Was there consideration moving from the plaintiff?'
    },
    reasoning: 'The deposit of £1,000 showed an undeniable intention to create legal relations. In unilateral contracts, performance of the condition is sufficient acceptance, and using the smoke ball at the defendants\' request constituted valid consideration.'
  },

  {
    id: 'wednesbury-unreasonableness-1948',
    slug: 'associated-provincial-picture-houses-wednesbury-unreasonableness',
    aliases: ['wednesbury', 'wednesbury_unreasonableness', 'ukca_1948_wednesbury'],
    title: 'Associated Provincial Picture Houses Ltd v. Wednesbury Corporation',
    jurisdiction: 'GB',
    parties: {
      petitioner: 'Associated Provincial Picture Houses Ltd',
      respondent: 'Wednesbury Corporation'
    },
    court: 'Court of Appeal',
    courtId: 'ukca',
    year: '1948',
    date: '10 November 1947',
    citation: '[1948] 1 KB 223 / [1947] 2 All ER 680',
    bench: '3-Judge Bench',
    judges: [
      "Lord Greene MR (Master of the Rolls)",
      "Lord Justice Somervell",
      "Mr Justice Singleton"
    ],
    caseType: 'Administrative Judicial Review Appeal',
    subjectTags: ['Wednesbury Unreasonableness', 'Judicial Review', 'Discretionary Executive Power', 'Ultra Vires'],
    acts: [
      'Sunday Entertainments Act 1932'
    ],
    sections: ['Section 1(1) Sunday Entertainments Act 1932'],
    ratioDecidendi: 'A court will not interfere with an administrative discretion unless the decision-maker has taken into account irrelevant matters, failed to consider relevant matters, or reached a decision so unreasonable that no reasonable authority could ever have come to it.',
    executiveSummary: 'Lord Greene MR established the canonical test for "Wednesbury Unreasonableness" in English administrative law. Judicial review does not act as an appeal on the merits; courts intervene only where a public decision is so irrational that no sensible authority properly directing itself on the law could have arrived at it.',
    caseContext: {
      facts: 'The Wednesbury Corporation granted the cinema owners a license to open on Sundays under the Sunday Entertainments Act 1932, but imposed a condition that no children under the age of 15 should be admitted, with or without an adult. The cinema owners challenged the condition as ultra vires and unreasonable.',
      legalIssue: 'Under what circumstances can a court review and strike down an administrative body\'s discretionary decision on grounds of unreasonableness?'
    },
    reasoning: 'The law recognizes that matters of public policy are entrusted to local authorities. The court must not substitute its own opinion for that of the authority. The standard of unreasonableness required for judicial intervention is exceptionally high.'
  }
];
