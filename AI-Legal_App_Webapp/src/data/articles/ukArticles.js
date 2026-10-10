// ─── AI LEGAL™ UNITED KINGDOM DOCTRINAL TREATISES & SCHOLARSHIP ─────────────
// Authoritative doctrinal treatises on UK Public & Constitutional Law, English Law of Contract,
// English Law of Torts, and Criminal Justice & PACE 1984.

export const UK_LEGAL_ARTICLES = [
  {
    id: 'uk-constitutional-sovereignty-human-rights',
    title: 'Parliamentary Sovereignty, Prerogative Powers & The Human Rights Act 1998',
    slug: 'uk-constitutional-parliamentary-sovereignty-human-rights-act-1998',
    category: 'UK Public & Constitutional Law',
    jurisdiction: 'GB',
    readTime: '13 min',
    summary: 'Doctrinal analysis of the British unwritten constitution: A.V. Dicey\'s doctrine of Parliamentary Sovereignty, the limits of Royal Prerogative post-Miller, and judicial declarations of incompatibility under Section 4 of the Human Rights Act 1998.',
    keyStatutes: [
      'Human Rights Act 1998 — Sections 3, 4 & 6',
      'Constitutional Reform Act 2005',
      'European Convention on Human Rights (Articles 2, 6, 8, 10)'
    ],
    landmarkPrecedents: [
      'R (Miller) v. Prime Minister [2019] UKSC 41 (Miller II Prorogation)',
      'R (Jackson) v. Attorney General [2005] UKHL 56',
      'Entick v. Carrington (1765) 19 St Tr 1029'
    ],
    fullArticleContent: `### I. THE FOUNDATIONAL PRINCIPLE: PARLIAMENTARY SOVEREIGNTY
In constitutional doctrine, as formulated by A.V. Dicey, the United Kingdom Parliament has "the right to make or unmake any law whatever; and, further, that no person or body is recognised by the law of England as having a right to override or set aside the legislation of Parliament."

Key tenets:
1. **No Parliament can bind its successors:** Implied repeal ensures that later Acts prevail over earlier inconsistent Acts (with the exception of recognized constitutional statutes such as Magna Carta, the Bill of Rights 1689, and the European Communities Act 1972 as noted in *Thoburn v. Sunderland City Council*).
2. **No judicial strike-down of primary legislation:** Courts cannot declare primary Acts of Parliament void or invalid (*British Railways Board v. Pickin*).

### II. JUDICIAL REVIEW OF PREROGATIVE POWERS: MILLER I & II
While the Crown exercises historic prerogative powers, the UK Supreme Court in *R (Miller) v. Prime Minister* [2019] UKSC 41 established that the courts have jurisdiction to determine the legal limits of prerogative powers:
- A prerogative power cannot be used to frustrate or prevent Parliament from carrying out its constitutional functions as a legislature without reasonable justification.
- The Prime Minister's advice to Her Majesty to prorogue Parliament for five weeks during intense Brexit deliberations was held unlawful and of no legal effect.

### III. THE HUMAN RIGHTS ACT 1998 MECHANISM
The Human Rights Act 1998 (HRA) incorporated Convention rights into domestic English law through a unique constitutional balance:
- **Section 3(1):** Requires legislation to be read and given effect in a way that is compatible with Convention rights "so far as it is possible to do so."
- **Section 4:** Where a compatible interpretation is impossible, the High Court or Supreme Court may make a **Declaration of Incompatibility**. Crucially, this does *not* invalidate the statute, preserving Parliamentary Sovereignty while triggering executive and parliamentary reconsiderations.
- **Section 6(1):** Makes it unlawful for a public authority to act in a way which is incompatible with a Convention right.`,
    practicalChecklist: [
      'Determine whether the contested action is primary legislation, delegated legislation, or an exercise of prerogative power.',
      'Check pre-action protocol for judicial review before filing Form N461 in the Administrative Court.',
      'Assess whether an argument can be framed under Section 3 HRA interpretation before seeking a Section 4 declaration.',
      'File judicial review claim promptly, and in any event within three months of the grounds arising.'
    ],
    tags: ['uk-constitutional-admin', 'parliamentary-sovereignty', 'human-rights-act-1998', 'miller-2', 'judicial-review']
  },

  {
    id: 'english-contract-formation-breach-damages',
    title: 'English Law of Contract: Formation, Frustration & The Measure of Expectation Damages',
    slug: 'english-law-of-contract-formation-breach-damages-frustration',
    category: 'English Law of Contract',
    jurisdiction: 'GB',
    readTime: '14 min',
    summary: 'Master treatise on English commercial contract law: Offer and acceptance (*Carlill*), consideration and promissory estoppel (*Central London Property*), doctrine of frustration, and recovery of damages under the rule in *Hadley v. Baxendale*.',
    keyStatutes: [
      'Sale of Goods Act 1979',
      'Contracts (Rights of Third Parties) Act 1999',
      'Consumer Rights Act 2015',
      'Law Reform (Frustrated Contracts) Act 1943'
    ],
    landmarkPrecedents: [
      'Carlill v. Carbolic Smoke Ball Co [1893] 1 QB 256',
      'Hadley v. Baxendale (1854) 9 Exch 341',
      'Taylor v. Caldwell (1863) 3 B&S 826',
      'The Achilleas (Transfield Shipping) [2008] UKHL 48'
    ],
    fullArticleContent: `### I. ESSENTIAL ELEMENTS OF AN ENGLISH CONTRACT
Under English law, an enforceable contract requires four indispensable pillars:
1. **Agreement:** Clear offer and unqualified acceptance (*Mirror Image Rule*).
2. **Consideration:** Quid pro quo — an act or forbearance of one party which purchases the promise of the other (*Currie v. Misa*). Past consideration is no consideration (*Roscorla v. Thomas*).
3. **Intention to Create Legal Relations:** Presumed in commercial contexts (*Balfour v. Balfour* vs. *Edwards v. Skyways*).
4. **Certainty of Terms:** Courts will not create a contract where material terms are left vague.

### II. DOCTRINE OF FRUSTRATION
Where an unforeseen supervening event occurs after contract formation, without fault of either party, which renders performance physically, legally, or commercially impossible or transforms obligation into something fundamentally different from that contemplated (*Davis Contractors v. Fareham UDC*):
- The contract is discharged automatically at common law.
- Financial adjustments (restitution of advance payments and recovery of incurred expenses) are governed by the **Law Reform (Frustrated Contracts) Act 1943**.
- Mere hardship, commercial inconvenience, or increased market prices do *not* constitute frustration.

### III. REMEDIES FOR BREACH: THE HADLEY V. BAXENDALE RULE
The primary remedy under English law is compensatory damages aimed at placing the innocent party in the financial position they would have occupied had the contract been performed (the *expectation interest*, *Robinson v. Harman*).

Under *Hadley v. Baxendale* (1854), damages are recoverable under two limbs:
1. **Limb 1 (General Damages):** Losses arising naturally, according to the usual course of things, from the breach itself.
2. **Limb 2 (Special Damages):** Losses that were in the reasonable contemplation of both parties at the time of entering the contract as the probable result of breach.

In *The Achilleas* [2008], the House of Lords clarified that liability also depends on whether the defendant assumed legal responsibility for the specific type of loss.`,
    practicalChecklist: [
      'Ensure standard terms and conditions include clear exclusion and limitation of liability clauses under UCTA 1977.',
      'Check whether the contract contains an express force majeure clause drafted to supersede the common law doctrine of frustration.',
      'Review whether Third Party Rights are excluded under the Contracts (Rights of Third Parties) Act 1999.',
      'Serve notice of breach specifying required cure period before exercising common law rights of termination for repudiatory breach.'
    ],
    tags: ['english-contract-law', 'hadley-v-baxendale', 'frustration', 'consideration', 'commercial-contracts']
  },

  {
    id: 'english-tort-negligence-duty-of-care',
    title: 'The Law of Torts: Evolution of Negligence from Donoghue v. Stevenson to Robinson',
    slug: 'english-tort-law-negligence-duty-of-care-caparo-robinson',
    category: 'English Law of Torts',
    jurisdiction: 'GB',
    readTime: '12 min',
    summary: 'Critical review of English negligence jurisprudence: Lord Atkin\'s landmark Neighbour Principle in Donoghue v. Stevenson, the misapplication of the Caparo three-stage test, and the UK Supreme Court\'s return to incremental common law in Robinson.',
    keyStatutes: [
      'Law Reform (Contributory Negligence) Act 1945',
      'Civil Liability (Contribution) Act 1978',
      'Compensation Act 2006'
    ],
    landmarkPrecedents: [
      'Donoghue v. Stevenson [1932] AC 562',
      'Caparo Industries plc v. Dickman [1990] 2 AC 605',
      'Robinson v. Chief Constable of West Yorkshire [2018] UKSC 4',
      'Bolam v. Friern Hospital Management Committee [1957] 1 WLR 582'
    ],
    fullArticleContent: `### I. THE GENESIS OF THE MODERN LAW OF TORT
Prior to 1932, a plaintiff could not recover for accidental harm caused by manufactured goods without privity of contract. In *Donoghue v. Stevenson* [1932], Lord Atkin formulated the universal **Neighbour Principle**:
> "You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour... persons who are so closely and directly affected by my act that I ought reasonably to have them in contemplation."

### II. THE RE-CALIBRATION: FROM CAPARO TO ROBINSON
For three decades, lower courts applied the *Caparo* three-fold criteria (foreseeability, proximity, and whether it is fair, just and reasonable to impose a duty) as an indiscriminate universal test.

In *Robinson v. Chief Constable of West Yorkshire* [2018] UKSC 4, the UK Supreme Court authoritatively re-established proper doctrine:
1. **Established Categories:** Where an established category of duty exists (e.g., driver to pedestrian, doctor to patient, manufacturer to consumer, employer to employee), the court directly applies precedent. The *Caparo* test must *not* be reapplied.
2. **Novel Situations:** Only where a case involves a truly novel situation should courts consider incremental extension by analogy, inquiring whether imposing liability is fair, just, and reasonable.
3. **Acts vs. Omissions:** The common law does not impose a general duty to rescue or prevent third-party wrongdoing in the absence of assumption of responsibility.

### III. BREACH, CAUSATION & REMOTENESS
1. **Standard of Care:** Evaluated against the reasonable person. Professionals are judged under the *Bolam* test as modified by *Bolitho* (must withstand logical judicial scrutiny).
2. **Factual Causation:** The "but for" test (*Barnett v. Chelsea & Kensington Hospital*).
3. **Legal Causation & Remoteness:** Harm must be of a foreseeable type (*The Wagon Mound No. 1*).`,
    practicalChecklist: [
      'Identify whether the relationship falls into a pre-existing recognized category of duty of care.',
      'Gather contemporaneous expert reports to evaluate the Bolam/Bolitho standard in clinical or professional negligence.',
      'Check whether the defence of contributory negligence under the 1945 Act applies to reduce recoverable damages.',
      'Review 3-year limitation period under the Limitation Act 1980 for personal injury actions.'
    ],
    tags: ['english-tort-law', 'donoghue-v-stevenson', 'caparo-v-dickman', 'robinson-v-chief-constable', 'duty-of-care']
  }
];
