// ─── AI LEGAL™ INTERNATIONAL & CROSS-BORDER COURT-READY DRAFTING TEMPLATES ──
// Sovereign pleadings, applications instituting proceedings before the ICJ, and UNCITRAL arbitration notices.

export const INTERNATIONAL_LEGAL_DRAFTING = [
  {
    id: 'draft-international-icj-application',
    slug: 'icj-application-instituting-proceedings-state-responsibility',
    title: 'Application Instituting Proceedings before the International Court of Justice (ICJ)',
    category: 'Sovereign Diplomatic & ICJ Pleadings',
    jurisdiction: 'GLOBAL',
    actReference: 'Statute of the International Court of Justice — Article 40 & Rules of Court Article 38',
    courtForum: 'International Court of Justice (Peace Palace, The Hague, Netherlands)',
    purposeWhenToUse: 'Instituting contentious proceedings by an Applicant State against a Respondent State for breaches of bilateral treaties, customary international law, or transboundary environmental harm.',
    statutoryFoundation: 'Article 40(1) of the ICJ Statute requires cases to be brought by written application addressed to the Registrar, specifying the subject of the dispute and the parties.',
    essentialClauses: [
      'Formal Heading: To the Registrar of the International Court of Justice, The Hague.',
      'Designation of Applicant State and identification of accredited Agent and Co-Agent.',
      'Statement of Facts: Factual narrative of the cross-border incident, diplomatic exchanges, and exhaustion of negotiations.',
      'The Jurisdictional Grounds: Explicit citation of Article 36(1) compromissory clauses in the relevant treaty or reciprocal Article 36(2) declarations under the Optional Clause.',
      'Legal Claims: Systematic pleading of violations of specific treaty articles, customary principles of state sovereignty, and non-intervention.',
      'Submissions / Relief: Formally asking the Court to adjudge and declare that Respondent breached international law and is under an obligation to cease the wrongful acts, make full reparation, and provide guarantees of non-repetition.',
      'Appointment of Judge ad hoc pursuant to Article 31(2) of the ICJ Statute if the bench includes no judge of Applicant nationality.'
    ],
    commonDraftingMistakes: [
      'Failing to establish a genuine legal dispute existing at the date of filing the application (the South West Africa requirement).',
      'Invoking treaty jurisdiction without satisfying mandatory pre-conditions, such as prior six-month diplomatic negotiations or conciliation under the treaty text.'
    ],
    modelPleadingStructure: `TO THE REGISTRAR OF THE INTERNATIONAL COURT OF JUSTICE,
THE HAGUE, NETHERLANDS.

APPLICATION INSTITUTING PROCEEDINGS

submitted by the Government of the Republic of [APPLICANT STATE]
against the Government of the State of [RESPONDENT STATE]

1. I have the honour to submit, on behalf of the Government of [Applicant State], this Application instituting proceedings against [Respondent State] concerning violations of international obligations under the [Convention Name] and customary international law.

I. THE PARTIES
2. The Applicant is the Republic of [Applicant State]. The undersigned has been duly appointed as Agent of the Applicant Government.
3. The Respondent is the State of [Respondent State].

II. JURISDICTION OF THE COURT
4. The Court has jurisdiction under Article 36, paragraph 1, of the Statute of the Court, read in conjunction with Article [Number] of the [Convention Name], which provides: "Any dispute between Contracting States concerning the interpretation or application of this Convention shall be referred to the International Court of Justice at the request of any of the parties."
5. The dispute between the Parties has not been settled by diplomatic negotiation, satisfying all procedural preconditions.

III. THE FACTS
6. Commencing on [Date], the Respondent State engaged in [Factual Description of Unlawful Acts] within the sovereign territory and maritime zones of the Applicant.
7. Despite formal diplomatic protests conveyed on [Date] and [Date], the Respondent State persisted in its unlawful conduct.

IV. THE LEGAL GROUNDS
8. By its actions described above, the Respondent State has violated:
   (a) Its solemn obligations under Articles [Numbers] of the [Convention Name];
   (b) The fundamental principle of sovereign equality of States under Article 2(1) of the UN Charter;
   (c) The customary obligation not to knowingly allow its territory to be used for acts contrary to the rights of other States.

V. SUBMISSIONS
9. Accordingly, the Republic of [Applicant State] respectfully requests the Court to adjudge and declare:
   (1) That it has jurisdiction to entertain this Application;
   (2) That [Respondent State] has breached its international legal obligations owed to [Applicant State];
   (3) That [Respondent State] must immediately cease all ongoing violations;
   (4) That [Respondent State] is under an obligation to make full reparation to [Applicant State] for the injury caused, in an amount to be determined by the Court.

Dated: [Date]
Signed: ___________________________
[Agent Name]
Agent of the Government of the Republic of [Applicant State]`,
    actionRoute: '/dashboard/tools/draft-maker?template=icj-application',
    tags: ['international-drafts', 'icj', 'the-hague', 'state-responsibility', 'un-charter']
  },

  {
    id: 'draft-international-uncitral-notice-arbitration',
    slug: 'uncitral-notice-of-arbitration-cross-border-commercial',
    title: 'UNCITRAL Notice of Arbitration: Cross-Border Commercial Dispute',
    category: 'International Arbitration',
    jurisdiction: 'GLOBAL',
    actReference: 'UNCITRAL Arbitration Rules (2013/2021) — Article 3 & Model Law',
    courtForum: 'International Arbitral Tribunal (Designated Seat of Arbitration)',
    purposeWhenToUse: 'Formally commencing international commercial or investment arbitration proceedings against a foreign counterparty pursuant to an UNCITRAL arbitration agreement.',
    statutoryFoundation: 'Article 3 of the UNCITRAL Arbitration Rules provides that arbitral proceedings commence on the date on which the Notice of Arbitration is received by the Respondent.',
    essentialClauses: [
      'Demand that the dispute be referred to arbitration under the UNCITRAL Arbitration Rules.',
      'Names, corporate identifiers, and contact details of the Claimant and Respondent.',
      'Identification of the contract containing the arbitration agreement and an exact copy of the clause.',
      'Brief description of the factual dispute and identification of breach of contract.',
      'Relief or remedy sought, including an estimated financial quantum of damages claimed.',
      'Proposal regarding the number of arbitrators (one or three), language of arbitration, and legal seat.',
      'Nomination of Claimant\'s party-appointed arbitrator, including CV and contact details.'
    ],
    commonDraftingMistakes: [
      'Failing to verify the designated Appointing Authority under the contract clause, causing administrative deadlock if the Respondent refuses to nominate an arbitrator.',
      'Confusing the "seat" (legal domicile of arbitration determining procedural law) with the "venue" (physical hearing location).'
    ],
    modelPleadingStructure: `IN THE MATTER OF AN ARBITRATION UNDER THE UNCITRAL ARBITRATION RULES

BETWEEN:
[CLAIMANT CORPORATION], a corporation organized under the laws of [Country A]
                                                            Claimant
- and -

[RESPONDENT CORPORATION], a corporation organized under the laws of [Country B]
                                                            Respondent

NOTICE OF ARBITRATION

TO: [RESPONDENT CORPORATION & COUNSEL]

1. DEMAND FOR ARBITRATION
Pursuant to Article 3 of the UNCITRAL Arbitration Rules, the Claimant hereby demands that the dispute described herein be referred to arbitration.

2. THE ARBITRATION AGREEMENT
This arbitration is commenced pursuant to Clause [Number] of the [Commercial Agreement Name] dated [Date], which provides:
"Any dispute, controversy or claim arising out of or relating to this contract, or the breach, termination or invalidity thereof, shall be settled by arbitration in accordance with the UNCITRAL Arbitration Rules. The place of arbitration shall be [City, Country]. The language of the arbitration shall be English."

3. SUMMARY OF THE DISPUTE
On [Date], Claimant and Respondent entered into the Agreement for the delivery of [Commodity/Services].
Claimant fulfilled all performance obligations. Respondent failed to make payment of Invoice Nos. [Numbers] totalling US$ [Amount], in repudiatory breach of contract.

4. RELIEF SOUGHT
Claimant requests an Award:
(a) Declaring that Respondent breached the Agreement;
(b) Ordering Respondent to pay damages in the sum of US$ [Amount];
(c) Ordering Respondent to pay contractual interest at [Rate]% per annum; and
(d) Ordering Respondent to reimburse all costs of arbitration, including Claimant's legal fees.

5. CONSTITUTION OF TRIBUNAL & ARBITRATOR NOMINATION
Pursuant to the Agreement, the Tribunal shall consist of three arbitrators.
Claimant hereby nominates as its party-appointed arbitrator:
[Arbitrator Full Name], [Chambers / Law Firm], [Email & Contact Details].

Dated this [Day] day of [Month], [Year]
For and on behalf of Claimant,
___________________________
[Counsel Name / Law Firm LLP]
Counsel for Claimant`,
    actionRoute: '/dashboard/tools/draft-maker?template=uncitral-notice-arbitration',
    tags: ['international-arbitration-drafts', 'uncitral', 'notice-of-arbitration', 'new-york-convention', 'commercial-disputes']
  }
];
