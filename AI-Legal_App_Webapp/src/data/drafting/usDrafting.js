// ─── AI LEGAL™ UNITED STATES COURT-READY DRAFTING TEMPLATES ─────────────────
// Pleadings, federal complaints, motions to dismiss, and commercial agreements conforming to the FRCP.

export const US_LEGAL_DRAFTING = [
  {
    id: 'draft-us-federal-civil-complaint',
    slug: 'us-federal-court-civil-complaint-frcp-rule-8',
    title: 'Federal Civil Complaint (FRCP Rule 8): Breach of Contract & Commercial Damages',
    category: 'Federal Civil Pleadings (FRCP)',
    jurisdiction: 'US',
    actReference: 'Federal Rules of Civil Procedure (FRCP) — Rules 8(a), 10 & 28 U.S.C. § 1332',
    courtForum: 'United States District Court (Designated Judicial District)',
    purposeWhenToUse: 'Initiating a formal federal civil lawsuit in US District Court asserting breach of contract, promissory estoppel, and damages under Diversity of Citizenship or Federal Question jurisdiction.',
    statutoryFoundation: 'FRCP Rule 8(a)(2) requires a short and plain statement of the claim showing that the pleader is entitled to relief, satisfying the Twombly/Iqbal plausible factual pleading standard.',
    essentialClauses: [
      'Formal Federal Court Caption identifying the District, Division, Parties, and Jury Trial Demand.',
      'Jurisdiction & Venue allegations: Specifically pleading 28 U.S.C. § 1332 (Diversity of Citizenship and >$75,000 in controversy) or 28 U.S.C. § 1331 (Federal Question).',
      'Venue statement under 28 U.S.C. § 1391 confirming proper judicial district.',
      'Factual background pleaded chronologically with specific dates, contract attachments, and performance milestones.',
      'Counts of Relief structured distinctly: Count I (Breach of Contract), Count II (Breach of Implied Covenant of Good Faith and Fair Dealing).',
      'Prayer for Relief: Demanding compensatory damages, pre-judgment interest, post-judgment interest, and attorney\'s fees.',
      'Jury Demand pursuant to the Seventh Amendment and FRCP Rule 38(b).'
    ],
    commonDraftingMistakes: [
      'Pleading the citizenship of a Limited Liability Company (LLC) by state of organization rather than the citizenship of every member.',
      'Pleading generic legal conclusions ("Defendant breached the agreement") without specific factual dates and performance metrics, causing dismissal under Rule 12(b)(6).',
      'Failing to demand a trial by jury in the complaint header, resulting in waiver of Seventh Amendment jury rights.'
    ],
    modelPleadingStructure: `UNITED STATES DISTRICT COURT
FOR THE [DISTRICT NAME] DISTRICT OF [STATE]
[DIVISION NAME] DIVISION

[PLAINTIFF NAME], an individual,
    Plaintiff,
v.                                            CIVIL ACTION NO. [YEAR]-cv-[NUMBER]
[DEFENDANT CORPORATION], a [State]
Corporation,                                   JURY TRIAL DEMANDED
    Defendant.

COMPLAINT FOR DAMAGES AND EQUITABLE RELIEF

Plaintiff, [PLAINTIFF NAME], by and through undersigned counsel, files this Complaint against Defendant, [DEFENDANT CORPORATION], alleging as follows:

PARTIES
1. Plaintiff is an individual citizen and resident of the State of [State A].
2. Defendant is a corporation incorporated under the laws of the State of [State B], with its principal place of business located at [City, State B].

JURISDICTION AND VENUE
3. This Court has subject-matter jurisdiction over this action pursuant to 28 U.S.C. § 1332(a)(1) because there is complete diversity of citizenship between Plaintiff and Defendant, and the amount in controversy exceeds $75,000, exclusive of interest and costs.
4. Venue is proper in this District pursuant to 28 U.S.C. § 1391(b)(2) because a substantial part of the events giving rise to the claims occurred within this judicial district.

FACTUAL ALLEGATIONS
5. On [Date], Plaintiff and Defendant entered into a valid, written [Agreement Name] (attached hereto as Exhibit A).
6. Under Section [Number] of the Agreement, Defendant promised to [Specific Obligation] on or before [Date].
7. Plaintiff performed all conditions, covenants, and obligations required of him under the Agreement.
8. On [Date], Defendant willfully breached the Agreement by failing and refusing to [Breach Description].

COUNT I: BREACH OF CONTRACT
9. Plaintiff realleges and incorporates by reference Paragraphs 1 through 8 as if fully set forth herein.
10. The Agreement constitutes an enforceable contract between the parties supported by valuable consideration.
11. Defendant material breach of the Agreement directly and proximately caused Plaintiff to suffer substantial economic damages in an amount to be proven at trial, but exceeding $150,000.

PRAYER FOR RELIEF
WHEREFORE, Plaintiff respectfully requests that this Court enter judgment in his favor and against Defendant:
A. Awarding actual and compensatory damages in an amount exceeding $150,000;
B. Awarding pre-judgment and post-judgment interest at the maximum statutory rate;
C. Awarding reasonable attorneys' fees and costs of suit; and
D. Granting such other and further relief as the Court deems just and equitable.

DEMAND FOR JURY TRIAL
Pursuant to Rule 38(b) of the Federal Rules of Civil Procedure, Plaintiff demands a trial by jury on all issues so triable.

Dated: [Date]
Respectfully submitted,
By: ___________________________
[Counsel Name], Bar No. [Number]
[Law Firm Name & Address]
Attorneys for Plaintiff`,
    actionRoute: '/dashboard/tools/draft-maker?template=us-civil-complaint',
    tags: ['us-civil-drafts', 'frcp-rule-8', 'federal-complaint', 'diversity-jurisdiction', 'jury-demand']
  },

  {
    id: 'draft-us-commercial-nda',
    slug: 'us-commercial-mutual-non-disclosure-agreement-delaware',
    title: 'Mutual Non-Disclosure & Confidentiality Agreement (Delaware Governing Law)',
    category: 'Commercial & Corporate Agreements',
    jurisdiction: 'US',
    actReference: 'Uniform Trade Secrets Act (UTSA) & Defend Trade Secrets Act (18 U.S.C. § 1836)',
    courtForum: 'State of Delaware (Court of Chancery / Superior Court)',
    purposeWhenToUse: 'Protecting proprietary technology, customer lists, algorithms, source code, and business financials prior to merger, acquisition, joint venture, or investment talks.',
    statutoryFoundation: 'Enforceable under Delaware contract law and the federal Defend Trade Secrets Act (DTSA), providing injunctive relief without necessity of posting bond.',
    essentialClauses: [
      'Comprehensive definition of "Confidential Information" including written, oral, and electronic disclosures.',
      'Standard exclusions: Information already public, rightfully known prior to disclosure, independently developed without reference to information, or rightfully obtained from third parties.',
      'Standard of Care: Obligation to protect information with at least the same degree of care used for own confidential materials, but not less than reasonable care.',
      'Permitted disclosures to employees, officers, and legal/financial advisors on a strict need-to-know basis subject to written confidentiality obligations.',
      'Mandatory DTSA Whistleblower Immunity Notice pursuant to 18 U.S.C. § 1833(b).',
      'Governing Law & Forum Selection designating the State of Delaware and waiver of jury trial.'
    ],
    commonDraftingMistakes: [
      'Omitting the mandatory Defend Trade Secrets Act whistleblower immunity carve-out under 18 U.S.C. § 1833(b), which forfeits exemplary damages and attorney\'s fees.',
      'Setting an unreasonable survival period (e.g. perpetual for standard marketing information), leading to judicial refusal of enforcement.'
    ],
    modelPleadingStructure: `MUTUAL NON-DISCLOSURE AGREEMENT

This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of [Date] ("Effective Date"), by and between:
[COMPANY A NAME], a Delaware corporation ("Party A"), and
[COMPANY B NAME], a [State] corporation ("Party B").

1. PURPOSE
The parties wish to explore a potential business relationship or commercial transaction (the "Purpose"), in connection with which either party may disclose confidential business and technical information.

2. CONFIDENTIAL INFORMATION
"Confidential Information" means any non-public proprietary information disclosed by one party ("Disclosing Party") to the other ("Receiving Party"), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential.

3. EXCLUSIONS
Confidential Information does not include information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was known to Receiving Party prior to disclosure; (c) is independently developed by Receiving Party without reference to or use of Disclosing Party's information; or (d) is rightfully received from a third party without duty of confidentiality.

4. OBLIGATIONS
Receiving Party agrees to: (a) hold Confidential Information in strict confidence using at least reasonable care; (b) not disclose it to any third party except to its employees, officers, and legal/financial advisors who need to know and are bound by confidentiality obligations; and (c) use it solely for the Purpose.

5. DTSA NOTICE (18 U.S.C. § 1833(b))
An individual shall not be held criminally or civilly liable under any federal or state trade secret law for disclosure of a trade secret made in confidence to a government official or attorney solely for reporting or investigating a suspected violation of law.

6. GOVERNING LAW & JURISDICTION
This Agreement shall be governed by and construed in accordance with the internal laws of the State of Delaware, without regard to conflict of laws principles. The parties consent to exclusive jurisdiction in the state and federal courts located in Wilmington, Delaware.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

[COMPANY A NAME]                          [COMPANY B NAME]
By: ___________________________           By: ___________________________
Name:                                     Name:
Title:                                    Title:`,
    actionRoute: '/dashboard/tools/draft-maker?template=us-nda',
    tags: ['us-commercial-drafts', 'nda', 'confidentiality', 'delaware-law', 'dtsa']
  }
];
