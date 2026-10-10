// ─── AI LEGAL™ UNITED STATES JURISPRUDENCE & DOCTRINAL TREATISES ─────────
// Authoritative doctrinal treatises on US Constitutional Law, Federal Criminal Law,
// Federal Civil Procedure (FRCP), and Commercial Law (Uniform Commercial Code).

export const US_LEGAL_ARTICLES = [
  {
    id: 'us-const-due-process-equal-protection',
    title: 'Constitutional Due Process, Equal Protection & Levels of Judicial Scrutiny',
    slug: 'us-constitutional-due-process-equal-protection-scrutiny',
    category: 'US Constitutional Law',
    jurisdiction: 'US',
    readTime: '12 min',
    summary: 'A definitive analysis of the Fifth and Fourteenth Amendments: Procedural Due Process, Substantive Due Process, and the tripartite tiers of Equal Protection scrutiny (Rational Basis, Intermediate Scrutiny, and Strict Scrutiny).',
    keyStatutes: [
      'United States Constitution — Fifth Amendment',
      'United States Constitution — Fourteenth Amendment, Section 1',
      'Civil Rights Act of 1871 (42 U.S.C. § 1983)'
    ],
    landmarkPrecedents: [
      'Brown v. Board of Education, 347 U.S. 483 (1954)',
      'Obergefell v. Hodges, 576 U.S. 644 (2015)',
      'Mathews v. Eldridge, 424 U.S. 319 (1976)'
    ],
    fullArticleContent: `### I. THE ARCHITECTURE OF CONSTITUTIONAL SCRUTINY
Under the Fifth Amendment (binding on the federal government) and the Fourteenth Amendment (binding on the States), no person shall be deprived of life, liberty, or property without due process of law, nor denied the equal protection of the laws.

Modern American constitutional adjudication separates constitutional challenges into two analytical doctrines:
1. **Procedural Due Process:** Mandates notice and a meaningful opportunity to be heard before the government deprives an individual of a protected liberty or property interest (*Mathews v. Eldridge* balancing test).
2. **Substantive Due Process:** Protects fundamental unenumerated rights that are deeply rooted in the nation's history and tradition (*Washington v. Glucksberg*).

### II. THE TRIPARTITE EQUAL PROTECTION TIERS
When a legislative enactment or executive classification treats similarly situated classes differently, federal courts evaluate the classification under one of three standards of review:

1. **Strict Scrutiny:**
   - **Trigger:** Classifications based on suspect criteria (race, national origin, religion) or laws infringing fundamental rights (voting, interstate travel, speech).
   - **Test:** The government must prove the measure is *narrowly tailored* to achieve a *compelling government interest*, utilizing the least restrictive means.
2. **Intermediate Scrutiny:**
   - **Trigger:** Quasi-suspect classifications (gender/sex, illegitimacy).
   - **Test:** The government must demonstrate the classification is *substantially related* to an *important government objective* (*United States v. Virginia*, VMI case).
3. **Rational Basis Review:**
   - **Trigger:** General socio-economic legislation, age, disability, or commercial regulations.
   - **Test:** The challenger carries the heavy burden of demonstrating the classification bears no *rational relation* to any *legitimate government interest* (*FCC v. Beach Communications*).

### III. LITIGATION PRACTICE & PLEADING STANDARDS
In section 1983 civil rights claims, plaintiff's counsel must specifically plead:
- Action taken under color of state law;
- Deprivation of an express constitutional right or established liberty interest;
- Inapplicability of qualified immunity for government actors performing discretionary functions (*Harlow v. Fitzgerald*).`,
    practicalChecklist: [
      'Identify whether the defendant acted under color of state or federal law.',
      'Establish whether the infringed right is classified as fundamental under Glucksberg doctrine.',
      'Select the appropriate level of scrutiny and anticipate the state\'s defense of compelling interest.',
      'Check statutes of limitations under analogous state personal injury law for § 1983 claims.'
    ],
    tags: ['us-constitutional-law', 'due-process', 'equal-protection', 'strict-scrutiny', 'fourteenth-amendment']
  },

  {
    id: 'us-frcp-plausibility-summary-judgment',
    title: 'Federal Civil Procedure: From Twombly/Iqbal Plausibility to Rule 56 Summary Judgment',
    slug: 'us-frcp-pleading-discovery-summary-judgment-guide',
    category: 'Federal Civil Procedure (FRCP)',
    jurisdiction: 'US',
    readTime: '15 min',
    summary: 'Master guide to litigating in US Federal District Courts: Navigating Rule 8(a)(2) notice pleading post-Twombly and Iqbal, Rule 26 proportionality in e-discovery, and prevailing on Rule 56 summary judgment motions.',
    keyStatutes: [
      'Federal Rules of Civil Procedure — Rule 8(a)(2)',
      'Federal Rules of Civil Procedure — Rule 12(b)(6)',
      'Federal Rules of Civil Procedure — Rule 26(b)(1)',
      'Federal Rules of Civil Procedure — Rule 56(a)',
      '28 U.S.C. § 1331 (Federal Question) & § 1332 (Diversity Jurisdiction)'
    ],
    landmarkPrecedents: [
      'Bell Atlantic Corp. v. Twombly, 550 U.S. 544 (2007)',
      'Ashcroft v. Iqbal, 556 U.S. 662 (2009)',
      'Celotex Corp. v. Catrett, 477 U.S. 317 (1986)'
    ],
    fullArticleContent: `### I. THE TWOMBLY/IQBAL TWO-PRONGED PLEADING STANDARD
Rule 8(a)(2) requires a complaint to contain "a short and plain statement of the claim showing that the pleader is entitled to relief." Prior to 2007, under *Conley v. Gibson*, a complaint was sufficient unless it appeared beyond doubt that plaintiff could prove "no set of facts."

The Supreme Court fundamentally heightened federal pleading standards in *Bell Atlantic Corp. v. Twombly* and *Ashcroft v. Iqbal*:
1. **Prong 1 (Discard Conclusory Allegations):** The court identifies legal conclusions, bare formulaic recitations of statutory elements, and strips them of the presumption of truth.
2. **Prong 2 (Plausibility Determination):** The court accepts well-pleaded factual allegations as true and evaluates whether they state a plausible claim for relief, drawing upon judicial experience and common sense. Mere conceivability or speculative suspicion is legally fatal under Rule 12(b)(6).

### II. E-DISCOVERY & PROPORTIONALITY (RULE 26)
Following the 2015 amendments to Rule 26(b)(1), discovery scope is governed strictly by relevance and **proportionality**:
- The importance of the issues at stake;
- The amount in controversy;
- Parties' relative access to information;
- The parties' financial resources;
- The importance of discovery in resolving issues;
- Whether the burden or expense outweighs its likely benefit.

### III. RULE 56 SUMMARY JUDGMENT DOCTRINE
Under Rule 56(a), a court grants summary judgment where the movant shows that there is **no genuine dispute as to any material fact** and the movant is entitled to judgment as a matter of law.

Under the *Celotex* trilogy (*Celotex*, *Anderson v. Liberty Lobby*, *Matsushita*):
- The moving party may satisfy its burden by pointing out an absence of evidence to support the non-moving party's case.
- The non-moving party cannot rest on mere allegations or denials in pleadings; it must cite specific depositions, affidavits, interrogatory answers, and admissions in the record.
- A "scintilla" of evidence is insufficient; the inquiry is whether a reasonable jury could return a verdict for the non-moving party.`,
    practicalChecklist: [
      'Verify subject-matter jurisdiction: Federal Question (28 U.S.C. § 1331) or Diversity with >$75k (28 U.S.C. § 1332).',
      'Draft complaint with factual anchors (who, what, when, where) to withstand Rule 12(b)(6) Iqbal challenge.',
      'Serve initial disclosures under Rule 26(a)(1) within 14 days of Rule 26(f) planning conference.',
      'Prepare statement of undisputed material facts matching every paragraph to deposition page and line numbers.'
    ],
    tags: ['us-civil-procedure', 'frcp', 'twombly', 'iqbal', 'rule-56-summary-judgment']
  },

  {
    id: 'us-commercial-ucc-article-2-9',
    title: 'Uniform Commercial Code (UCC): Contract Formation, Breach & Article 9 Secured Transactions',
    slug: 'us-commercial-law-ucc-article-2-sales-article-9-secured-transactions',
    category: 'Commercial Law (Uniform Commercial Code)',
    jurisdiction: 'US',
    readTime: '14 min',
    summary: 'Comprehensive analysis of UCC Article 2 governing sales of goods: battle of the forms (UCC § 2-207), implied warranties (merchantability & fitness), risk of loss, and perfection of security interests under Article 9.',
    keyStatutes: [
      'Uniform Commercial Code — Section 2-201 (Statute of Frauds)',
      'Uniform Commercial Code — Section 2-207 (Battle of the Forms)',
      'Uniform Commercial Code — Sections 2-314 & 2-315 (Warranties)',
      'Uniform Commercial Code — Article 9 (Secured Transactions)'
    ],
    landmarkPrecedents: [
      'Daitom, Inc. v. Pennwalt Corp., 741 F.2d 1569 (10th Cir. 1984)',
      'ProCD, Inc. v. Zeidenberg, 86 F.3d 1447 (7th Cir. 1996)'
    ],
    fullArticleContent: `### I. UCC ARTICLE 2: THE MODERN LAW OF SALES
The Uniform Commercial Code (UCC) governs all contracts for the sale of movable goods. It departs significantly from common law formalisms:
- **Good Faith Requirement (UCC § 1-304):** Every contract or duty under the UCC imposes an obligation of good faith in its performance and enforcement.
- **Statute of Frauds (UCC § 2-201):** A contract for the sale of goods for $500 or more requires a writing sufficient to indicate a contract, signed by the party against whom enforcement is sought.

### II. RESOLVING THE "BATTLE OF THE FORMS" (§ 2-207)
Common law adhered to the rigid "Mirror Image Rule" and the "Last Shot Rule." UCC § 2-207 was drafted to prevent sellers or buyers from escaping contracts when confirmations contain additional or different terms:
1. **Definite Expression of Acceptance:** An acceptance operates as a binding contract even if it states additional or different terms, unless acceptance is expressly made conditional on assent to the additional terms.
2. **Between Merchants:** Additional terms become part of the contract unless:
   - The offer expressly limits acceptance to the terms of the offer;
   - They materially alter the contract (e.g., surprise arbitration or uncapped indemnities);
   - Notification of objection has already been given or is given within a reasonable time.
3. **Different Terms:** Jurisdictions follow the *Knockout Rule* (conflicting terms knock each other out, replaced by UCC gap-fillers).

### III. ARTICLE 9 SECURED TRANSACTIONS: ATTACHMENT & PERFECTION
Article 9 governs consensual security interests in personal property:
- **Attachment (§ 9-203):** The security interest becomes enforceable against the debtor when (1) value has been given, (2) the debtor has rights in the collateral, and (3) an authenticated security agreement or possession/control exists.
- **Perfection (§ 9-310):** Perfection establishes priority over third parties and bankruptcy trustees, typically achieved by filing a UCC-1 Financing Statement with the Secretary of State or obtaining control.`,
    practicalChecklist: [
      'Review purchase orders and vendor acknowledgments to determine which terms govern under § 2-207.',
      'Explicitly disclaim implied warranty of merchantability using conspicuous language and the word "merchantability".',
      'Verify debtor legal name from certificate of incorporation before filing UCC-1 financing statement.',
      'Check local Secretary of State commercial registry for pre-existing perfected liens.'
    ],
    tags: ['us-commercial-ucc', 'article-2', 'article-9', 'sales-contracts', 'secured-transactions']
  }
];
