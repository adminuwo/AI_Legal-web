// ─── AI LEGAL™ LEGAL DRAFTING & DOCUMENT LIBRARY ─────────────────────────────
// Court-ready drafting structures, essential clauses, statutory foundations & pitfalls
// Fully populated across all major categories: Writs, Civil Plaints, Criminal Complaints,
// Bail Petitions, Legal Demand Notices, Commercial Contracts, and Affidavits/Caveats.

/**
 * @typedef {Object} DraftingTemplate
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} category
 * @property {string} actReference
 * @property {string} courtForum
 * @property {string} purposeWhenToUse
 * @property {string} statutoryFoundation
 * @property {string[]} essentialClauses
 * @property {string[]} commonDraftingMistakes
 * @property {string} modelPleadingStructure
 * @property {string} actionRoute
 * @property {string[]} tags
 */

import { NEPAL_LEGAL_DRAFTING } from './drafting/nepalDrafting.js';
import { US_LEGAL_DRAFTING } from './drafting/usDrafting.js';
import { UK_LEGAL_DRAFTING } from './drafting/ukDrafting.js';
import { INTERNATIONAL_LEGAL_DRAFTING } from './drafting/internationalDrafting.js';

export const INDIAN_LEGAL_DRAFTING = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. WRIT PETITIONS & HIGH COURT FILINGS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'draft-writ-petition-226',
    slug: 'writ-petition-civil-article-226-high-court',
    title: 'Writ Petition (Civil) under Article 226 of the Constitution of India',
    category: 'Writ Petitions & High Court Filings',
    actReference: 'Constitution of India, 1950 — Article 226',
    courtForum: 'Hon\'ble High Court of Respective State (Single / Division Bench)',
    purposeWhenToUse: 'Challenging arbitrary, unconstitutional, or ultra vires State action, executive notifications, or quashing quasi-judicial orders through Mandamus, Certiorari, or Prohibition.',
    statutoryFoundation: 'Article 226 vests plenary constitutional prerogative writ jurisdiction in High Courts for the enforcement of Part III Fundamental Rights and for "any other purpose".',
    essentialClauses: [
      'Particulars of Petitioner and array of State Respondents (concerned Ministry, Secretary, and District Magistrate).',
      'Averment on exhaustion of statutory alternative remedies or reasons explaining why alternative remedy is not efficacious (Whirlpool Corp exception).',
      'Chronological List of Events highlighting factual dates, notifications, and impugned orders.',
      'Grounds of Challenge structured alphabetically: Ground A (Breach of Art. 14 Arbitrariness), Ground B (Violation of Natural Justice Audi Alteram Partem), Ground C (Jurisdictional Ultra Vires).',
      'Plea that the Petitioner has approached with clean hands and without delay or laches.',
      'Prayer Clause: Specific prayer for Writ of Certiorari quashing impugned order, Mandamus directing relief, and ad-interim stay pending disposal.',
      'Duly affirmed Affidavit and Statement of Truth in support of Writ Petition.'
    ],
    commonDraftingMistakes: [
      'Failing to serve mandatory advance copy to the State Standing Counsel prior to filing, causing adjournments.',
      'Omitting to explain delay or laches when challenging executive actions older than 6 months.',
      'Vague pleadings of mala fides without impleading the concerned official by name as a respondent.'
    ],
    modelPleadingStructure: `IN THE HIGH COURT OF JUDICATURE AT [CITY]
(EXTRAORDINARY WRIT JURISDICTION)

WRIT PETITION (CIVIL) NO. _______ OF 2026

IN THE MATTER OF:
[Petitioner Full Name / Company]
S/o [Father Name], Residing at: [Address]               ... PETITIONER

VERSUS

1. State of [State Name]
Through Secretary, Department of [Department Name]
Having office at: [State Secretariat Address]

2. [District Magistrate / Authority Name]
Office of the Collector / District Magistrate
Having office at: [Address]                           ... RESPONDENTS

PETITION UNDER ARTICLE 226 OF THE CONSTITUTION OF INDIA FOR ISSUANCE OF A WRIT OF CERTIORARI / MANDAMUS OR ANY OTHER APPROPRIATE WRIT, ORDER, OR DIRECTION

TO,
THE HON'BLE CHIEF JUSTICE AND COMPANION JUSTICES OF THE HON'BLE HIGH COURT.

THE HUMBLE PETITION OF THE PETITIONER ABOVE-NAMED MOST RESPECTFULLY SHOWETH:

1. That the Petitioner is a law-abiding citizen of India, entitled to the fundamental rights guaranteed under Articles 14, 19(1)(g), and 21 of the Constitution.
2. That Respondent No. 1 is the State instrumentality and Respondent No. 2 is the statutory authority exercising quasi-judicial powers.
3. FACTS OF THE CASE:
   (a) That the Petitioner was granted [License / Lease / Allotment] vide Order dated [Date].
   (b) That without issuance of Show Cause Notice or providing reasonable opportunity of hearing, Respondent No. 2 arbitrarily cancelled said allotment vide Impugned Order dated [Date] (ANNEXURE P-1).
4. GROUNDS OF CHALLENGE:
   A. VIOLATION OF NATURAL JUSTICE: The Impugned Order violates the cardinal rule of Audi Alteram Partem.
   B. MANIFEST ARBITRARINESS: The order is unreasoned and contrary to Article 14 (E.P. Royappa doctrine).
   C. LACK OF JURISDICTION: Respondent No. 2 lacked statutory competence under the governing Act.
5. NO OTHER ALTERNATIVE EFFICACIOUS REMEDY: The Petitioner has no other equally speedy and efficacious legal remedy except approaching this Hon'ble Court.
6. PRAYER:
   It is most respectfully prayed that this Hon'ble Court may graciously be pleased to:
   (i) Issue a Writ of Certiorari or any other appropriate writ quashing the Impugned Order dated [Date];
   (ii) Issue a Writ of Mandamus directing Respondents to restore the lawful status quo;
   (iii) Grant ad-interim stay of the operation of the Impugned Order during pendency;
   (iv) Award costs of the petition to the Petitioner.

PETITIONER THROUGH COUNSEL:
[Name of Advocate], Counsel for Petitioner
Place: [City] | Date: [Date]`,
    actionRoute: '/dashboard/tools/draft-maker?template=writPetition',
    tags: ['writ', 'petition', 'article 226', 'article 32', 'high court', 'mandamus', 'certiorari', 'writs-petitions']
  },

  {
    id: 'draft-slp-article-136',
    slug: 'special-leave-petition-article-136-supreme-court',
    title: 'Special Leave Petition (Civil) under Article 136 of the Constitution of India',
    category: 'Writ Petitions & High Court Filings',
    actReference: 'Constitution of India, 1950 — Article 136 read with Supreme Court Rules, 2013',
    courtForum: 'Hon\'ble Supreme Court of India at New Delhi',
    purposeWhenToUse: 'Invoking the extraordinary appellate jurisdiction of the Supreme Court against final or interlocutory judgments/orders of any High Court or Tribunal involving substantial questions of law of general public importance or manifest injustice.',
    statutoryFoundation: 'Article 136 confers discretionary plenary power on the Supreme Court to grant special leave to appeal from any judgment, decree, sentence, or order in any cause or matter passed by any court or tribunal in India.',
    essentialClauses: [
      'Questions of Law framed prominently at the beginning of the petition.',
      'Declaration of Limitation confirming petition is within 90 days from the date of the impugned judgment.',
      'Synopsis and List of Dates presenting chronology and relevant statutory provisions.',
      'Specific averments stating that no other petition has been filed in the Supreme Court against the same order.',
      'Grounds of Appeal explaining conflict of High Court views or departure from Supreme Court precedent.',
      'Prayer for Special Leave and interim stay of operation of the impugned High Court decree/order.',
      'Affidavit in support executed by authorized advocate-on-record or petitioner.'
    ],
    commonDraftingMistakes: [
      'Framing factual disputes as questions of law without demonstrating substantial legal errors.',
      'Omitting certification that true certified copies of the impugned judgment are annexed.',
      'Failing to file an application for condonation of delay if filed beyond 90 days.'
    ],
    modelPleadingStructure: `IN THE SUPREME COURT OF INDIA
(CIVIL APPELLATE JURISDICTION)

SPECIAL LEAVE PETITION (CIVIL) NO. _______ OF 2026
(Under Article 136 of the Constitution of India)

IN THE MATTER OF:
[Petitioner Full Name]                                  ... PETITIONER

VERSUS

[Respondent Full Name / State Authority]                ... RESPONDENTS

SPECIAL LEAVE PETITION UNDER ARTICLE 136 OF THE CONSTITUTION OF INDIA AGAINST THE IMPUGNED FINAL JUDGMENT AND ORDER DATED [Date] PASSED BY THE HON'BLE HIGH COURT OF [STATE] IN [WRIT PETITION / RFA NO. _______ OF 2025].

TO,
THE HON'BLE CHIEF JUSTICE OF INDIA AND HIS COMPANION JUSTICES OF THE HON'BLE SUPREME COURT OF INDIA.

THE HUMBLE PETITION OF THE PETITIONER ABOVE-NAMED MOST RESPECTFULLY SHOWETH:

1. QUESTIONS OF LAW:
   A. Whether the High Court erred in law by disregarding the binding 3-Judge Bench precedent of this Hon'ble Court?
   B. Whether arbitrary cancellation without notice violates Part III rights?
2. DECLARATION OF LIMITATION:
   The Petitioner declares that the Special Leave Petition is filed within the period of 90 days as prescribed by law.
3. FACTS AND GROUNDS:
   [Detailed chronological matrix and legal submissions].
4. PRAYER:
   The Petitioner most respectfully prays that this Hon'ble Court may be pleased to:
   (a) Grant Special Leave to Appeal against the impugned judgment dated [Date];
   (b) Stay the execution and operation of the impugned order pending disposal;
   (c) Pass such further orders as this Hon'ble Court deems fit in the interest of justice.

ADVOCATE-ON-RECORD FOR PETITIONER:
[Advocate-on-Record Name & Code]
New Delhi | Date: [Date]`,
    actionRoute: '/dashboard/tools/draft-maker?template=specialLeavePetition',
    tags: ['slp', 'special leave petition', 'article 136', 'supreme court', 'writ', 'petition', 'writs-petitions']
  },

  {
    id: 'draft-quashing-petition-528-bnss',
    slug: 'petition-quashing-criminal-proceedings-528-bnss',
    title: 'Petition for Quashing Criminal Proceedings under Section 528 BNSS (CrPC 482)',
    category: 'Writ Petitions & High Court Filings',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 528 (Old Code: CrPC Section 482)',
    courtForum: 'Hon\'ble High Court (Criminal Inherent Jurisdiction)',
    purposeWhenToUse: 'Invoking the inherent powers of the High Court to quash FIRs, charge-sheets, or summoning orders where allegations are civil in nature, manifestly attended with mala fides, or do not disclose any cognizable offence.',
    statutoryFoundation: 'Section 528 BNSS preserves the inherent power of the High Court to make such orders as may be necessary to give effect to any order under this Sanhita, or to prevent abuse of the process of any Court or otherwise to secure the ends of justice (State of Haryana v. Bhajan Lal guidelines).',
    essentialClauses: [
      'Particulars of the FIR/Case: Crime No., Police Station, Sections invoked, and Court of Committal/Magistrate.',
      'Categorical statement that FIR is purely a commercial/civil dispute given a criminal cloak.',
      'Paragraph demonstrating absence of ingredients of cheating, theft, or breach of trust even on face value.',
      'Bhajan Lal Category Analysis: Explicitly matching case facts with Guidelines 1, 3, and 7 of Bhajan Lal.',
      'Proof of prior civil litigation or compromise agreement between parties demonstrating abuse of criminal process.',
      'Prayer for quashing FIR, stay on coercive arrest, and stay of further investigation pending adjudication.'
    ],
    commonDraftingMistakes: [
      'Arguing disputed questions of fact which require a full-fledged criminal trial instead of pure threshold illegality.',
      'Failing to annex the complete FIR, charge-sheet, and 161/180 statements.',
      'Not demonstrating how the civil remedy has been converted into criminal harassment.'
    ],
    modelPleadingStructure: `IN THE HIGH COURT OF JUDICATURE AT [CITY]
(CRIMINAL INHERENT JURISDICTION)

CRIMINAL MISC. WRIT / PETITION UNDER SECTION 528 BNSS NO. _______ OF 2026

IN THE MATTER OF:
[Accused / Petitioner Full Name]                       ... PETITIONER

VERSUS

1. State of [State] Through SHO, P.S. [Name]
2. [Complainant / Respondent No. 2]                     ... RESPONDENTS

PETITION UNDER SECTION 528 OF THE BHARATIYA NAGARIK SURAKSHA SANHITA, 2023 (OLD SECTION 482 CrPC) FOR QUASHING OF FIR NO. [Number] DATED [Date] REGISTERED UNDER SECTIONS 316(2), 318(4) BNS AT P.S. [Name] AND ALL PROCEEDINGS ARISING THEREFROM.

MEMORANDUM OF PETITION:
1. That the Petitioner is invoking the inherent powers of this Hon'ble Court to prevent manifest abuse of the process of law.
2. That the dispute between Petitioner and Respondent No. 2 arises solely from a contractual breach of MoU dated [Date].
3. That the Hon'ble Supreme Court in Indian Oil Corp v. NEPC India held that commercial civil disputes cannot be converted into criminal proceedings.
4. PRAYER:
   Quash FIR No. [Number] and stay all coercive steps against the Petitioner.

COUNSEL FOR PETITIONER: [Advocate Name] | Date: [Date]`,
    actionRoute: '/dashboard/tools/draft-maker?template=quashingPetition',
    tags: ['quashing', 'petition', 'section 528', 'section 482', 'bnss', 'crpc', 'high court', 'writs-petitions']
  },

  {
    id: 'draft-writ-habeas-corpus',
    slug: 'writ-petition-habeas-corpus-article-226',
    title: 'Writ Petition (Criminal) for Habeas Corpus under Article 226 of the Constitution',
    category: 'Writ Petitions & High Court Filings',
    actReference: 'Constitution of India, 1950 — Article 226 & Article 21',
    courtForum: 'Hon\'ble High Court (Division Bench / Criminal Writ Jurisdiction)',
    purposeWhenToUse: 'Seeking the immediate physical production and release of an individual unlawfully or unconstitutionally detained in police custody, illegal confinement, or by private individuals without statutory sanction.',
    statutoryFoundation: 'Prerogative Writ of Habeas Corpus to protect personal liberty and bodily integrity under Article 21 and DK Basu guidelines.',
    essentialClauses: [
      'Relationship of Petitioner with Detenu (Parent, Spouse, Sibling, or Friend).',
      'Exact time, date, location, and circumstances of the detention or kidnapping.',
      'Details of Police Officers / Stations involved and failure to produce detenu before Magistrate within 24 hours under Art. 22(2).',
      'Affidavit of urgency praying for issuance of Rule Nisi and search warrant.',
      'Prayer for immediate production of Detenu and inquiry into custodial illegality.'
    ],
    commonDraftingMistakes: [
      'Not specifying whether the detenu was produced before any Magistrate within 24 hours.',
      'Failing to name the Police Station and superior officers responsible for the precinct.'
    ],
    modelPleadingStructure: `IN THE HIGH COURT OF JUDICATURE AT [CITY]
(EXTRAORDINARY CRIMINAL WRIT JURISDICTION)
WRIT PETITION (CRIMINAL) NO. _______ OF 2026
IN THE MATTER OF:
[Petitioner Name] (Next Friend / Spouse of Detenu)      ... PETITIONER
VERSUS
1. State of [State] Through Principal Secretary (Home)
2. Commissioner of Police / Superintendent of Police
3. Station House Officer, Police Station [Name]        ... RESPONDENTS

PETITION FOR ISSUANCE OF A WRIT OF HABEAS CORPUS UNDER ARTICLE 226 OF THE CONSTITUTION FOR ILLEGAL CUSTODIAL DETENTION.

PRAYER:
Issue a Writ of Habeas Corpus directing Respondents to produce the body of Detenu [Name] forthwith before this Hon'ble Court and set him at liberty.`,
    actionRoute: '/dashboard/tools/draft-maker?template=writPetition',
    tags: ['habeas corpus', 'writ', 'article 226', 'illegal detention', 'custody', 'article 21', 'writs-petitions']
  },

  {
    id: 'draft-arbitration-section-11',
    slug: 'arbitration-petition-appointment-arbitrator-section-11',
    title: 'Arbitration Application under Section 11(6) for Appointment of Sole Arbitrator',
    category: 'Writ Petitions & High Court Filings',
    actReference: 'Arbitration and Conciliation Act, 1996 — Section 11(6)',
    courtForum: 'Hon\'ble High Court (Original / Arbitration Jurisdiction)',
    purposeWhenToUse: 'Approaching the High Court to appoint an independent sole arbitrator when the opposite party fails or refuses to concur on an arbitrator despite statutory 30-day notice.',
    statutoryFoundation: 'Section 11(6) empowers the High Court or its designate to appoint an arbitrator upon failure of the agreed appointment mechanism.',
    essentialClauses: [
      'Existence of valid, stamped, and signed Arbitration Clause in the parent agreement.',
      'Narrative of dispute arising under or in connection with the contract.',
      'Proof of service of Section 21 Notice of Invocation of Arbitration.',
      'Expiry of statutory 30-day period without concurrence from the Respondent.',
      'Prayer for appointment of an independent Sole Arbitrator under Section 11(6).'
    ],
    commonDraftingMistakes: [
      'Failing to serve a formal Section 21 notice invoking arbitration prior to filing.',
      'Omitting to demonstrate that the underlying contract is properly stamped under the Stamp Act.'
    ],
    modelPleadingStructure: `IN THE HIGH COURT OF JUDICATURE AT [CITY]
(ARBITRATION JURISDICTION)
ARBITRATION APPLICATION NO. _______ OF 2026
IN THE MATTER OF:
[Applicant Company Name]                                ... APPLICANT
VERSUS
[Respondent Company Name]                               ... RESPONDENT

APPLICATION UNDER SECTION 11(6) OF THE ARBITRATION AND CONCILIATION ACT, 1996 FOR APPOINTMENT OF AN INDEPENDENT SOLE ARBITRATOR.

PRAYER:
Appoint an independent and impartial Sole Arbitrator to adjudicate disputes arising out of Agreement dated [Date].`,
    actionRoute: '/dashboard/tools/draft-maker?template=arbitrationPetition',
    tags: ['arbitration', 'section 11', 'arbitrator', 'high court', 'dispute resolution', 'writs-petitions']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. CRIMINAL COMPLAINTS & BAIL PETITIONS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'draft-sec-138-complaint',
    slug: 'criminal-complaint-section-138-ni-act-cheque-bounce',
    title: 'Criminal Complaint under Section 138 Negotiable Instruments Act',
    category: 'Criminal Complaints & Bail Petitions',
    actReference: 'Negotiable Instruments Act, 1881 — Section 138 read with Section 142 & Section 223 BNSS',
    courtForum: 'Court of Judicial Magistrate First Class / Metropolitan Magistrate (Special NI Act Court)',
    purposeWhenToUse: 'Filing a private criminal complaint against a drawer of a dishonoured cheque following non-payment within 15 days of statutory legal demand notice.',
    statutoryFoundation: 'Section 138 criminalizes cheque dishonour for insufficiency of funds, creating a statutory presumption of debt under Sections 118 and 139 of the NI Act.',
    essentialClauses: [
      'Description of legally enforceable debt, commercial transaction, or loan agreement.',
      'Particulars of Cheque: Cheque Number, Date, Amount, Drawer Bank, and Drawee Branch.',
      'Bank Return Memo date and statutory reason ("Funds Insufficient" / "Account Closed").',
      'Service of Statutory Demand Notice: Date of dispatch, tracking report, and date of delivery.',
      'Affidavit of Pre-Summoning Evidence in Chief under Section 145 NI Act.',
      'Prayer for summoning accused, conviction, and compensation under Section 143A / 357 CrPC.'
    ],
    commonDraftingMistakes: [
      'Calculating 30-day notice limitation or 15-day cure period incorrectly, leading to bar under Section 142.',
      'Failing to implead the Company and its Directors under Section 141 (Vicarious Liability) with specific role averments.'
    ],
    modelPleadingStructure: `IN THE COURT OF CHIEF JUDICIAL MAGISTRATE / METROPOLITAN MAGISTRATE AT [CITY]
CRIMINAL COMPLAINT CASE NO. _______ OF 2026

IN THE MATTER OF:
[Complainant Name], S/o [Father Name]                    ... COMPLAINANT
VERSUS
1. [Accused Company Pvt Ltd]
2. [Accused Director Name]                               ... ACCUSED

COMPLAINT UNDER SECTION 138 READ WITH SECTION 141 AND 142 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881.

PRAYER:
Summon, try and punish the Accused under Section 138 NI Act and award double the cheque amount as compensation.`,
    actionRoute: '/dashboard/tools/draft-maker?template=chequeBounce',
    tags: ['complaint', 'bail', 'criminal', 'cheque', 'section 138', 'criminal-complaints-bail']
  },

  {
    id: 'draft-anticipatory-bail-482-bnss',
    slug: 'anticipatory-bail-application-section-482-bnss',
    title: 'Anticipatory Bail Application under Section 482 BNSS (CrPC 438)',
    category: 'Criminal Complaints & Bail Petitions',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 482 (Old CrPC 438)',
    courtForum: 'Court of Sessions / Hon\'ble High Court',
    purposeWhenToUse: 'Seeking pre-arrest bail protection where applicant apprehends arrest on false, vexatious, or politically motivated accusations of non-bailable offences.',
    statutoryFoundation: 'Section 482 BNSS gives discretionary power to Court of Session and High Court to grant anticipatory bail to prevent humiliation and arbitrary arrest (Gurbaksh Singh Sibbia doctrine).',
    essentialClauses: [
      'Reasonable apprehension of arrest supported by concrete facts, notices, or police threats.',
      'Clean antecedents declaration: Confirming no prior criminal convictions or pending trials.',
      'Undertaking to cooperate fully with investigation and join interrogation whenever called.',
      'Undertaking not to tamper with prosecution evidence or influence witnesses.',
      'Undertaking not to leave India without prior permission of the Court.'
    ],
    commonDraftingMistakes: [
      'Applying for blanket anticipatory bail without specifying the FIR or exact nature of anticipated charges.',
      'Concealing previous bail rejections or existing criminal history.'
    ],
    modelPleadingStructure: `IN THE COURT OF SESSIONS JUDGE AT [CITY]
CRIMINAL MISC. BAIL APPLICATION NO. _______ OF 2026

IN THE MATTER OF:
[Applicant / Accused Name]                               ... APPLICANT
VERSUS
State of [State] (Through P.S. [Name])                   ... RESPONDENT

APPLICATION UNDER SECTION 482 OF THE BHARATIYA NAGARIK SURAKSHA SANHITA, 2023 FOR GRANT OF ANTICIPATORY BAIL IN FIR NO. [Number].

PRAYER:
Direct that in the event of arrest, Applicant be released on anticipatory bail on terms.`,
    actionRoute: '/dashboard/tools/draft-maker?template=anticipatoryBail',
    tags: ['bail', 'anticipatory bail', 'criminal', 'bnss 482', 'crpc 438', 'criminal-complaints-bail']
  },

  {
    id: 'draft-regular-bail-483-bnss',
    slug: 'regular-bail-application-section-483-bnss',
    title: 'Regular Bail Application under Section 483 BNSS (CrPC 439)',
    category: 'Criminal Complaints & Bail Petitions',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 483 (Old CrPC 439)',
    courtForum: 'Court of Sessions / Hon\'ble High Court',
    purposeWhenToUse: 'Securing post-arrest release of an incarcerated accused during pendency of police investigation or trial.',
    statutoryFoundation: 'Section 483 BNSS confers special powers regarding bail on the High Court or Court of Session based on the principle "Bail is the rule, jail is the exception".',
    essentialClauses: [
      'Date of arrest and duration of judicial custody served by the applicant.',
      'Completion of custodial interrogation and recovery of alleged contraband/weapon.',
      'Lack of flight risk: Deep roots in society, immovable family property, and local sureties.',
      'Parity Ground: Co-accused granted bail on identical role in the incident.',
      'Undertaking to abide by all conditions imposed by the Court.'
    ],
    commonDraftingMistakes: [
      'Failing to mention status of charge-sheet or filing before completion of police remand.',
      'Omitting details of local sureties and permanent address verification.'
    ],
    modelPleadingStructure: `IN THE COURT OF SESSIONS JUDGE AT [CITY]
CRIMINAL BAIL APPLICATION NO. _______ OF 2026
IN THE MATTER OF:
[Applicant Accused Name] (In Judicial Custody)           ... APPLICANT
VERSUS
State of [State]                                        ... RESPONDENT

APPLICATION FOR REGULAR BAIL UNDER SECTION 483 OF BNSS, 2023 IN FIR NO. [Number].

PRAYER:
Release the Applicant on regular bail during the pendency of trial.`,
    actionRoute: '/dashboard/tools/draft-maker?template=regularBail',
    tags: ['bail', 'regular bail', 'criminal', 'bnss 483', 'crpc 439', 'custody', 'criminal-complaints-bail']
  },

  {
    id: 'draft-default-bail-187-bnss',
    slug: 'statutory-default-bail-section-187-bnss',
    title: 'Application for Statutory Default Bail under Section 187(3) BNSS (CrPC 167(2))',
    category: 'Criminal Complaints & Bail Petitions',
    actReference: 'Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 187(3) (Old CrPC 167(2))',
    courtForum: 'Court of Judicial Magistrate / Sessions Judge',
    purposeWhenToUse: 'Enforcing the indefeasible constitutional right to release when investigating agency fails to file charge-sheet within statutory period of 60 or 90 days.',
    statutoryFoundation: 'Section 187(3) creates an indefeasible statutory right to bail upon expiry of prescribed detention period without filing of police report.',
    essentialClauses: [
      'Date of initial remand and exact calculation of 60/90 days of custody.',
      'Certification from court clerk confirming non-filing of police report on or before the 60th/90th day.',
      'Averment that applicant is ready and willing to furnish solvent bail bonds and sureties.',
      'Prayer for immediate release on default bail.'
    ],
    commonDraftingMistakes: [
      'Filing before the statutory 60/90 day period expires.',
      'Failing to promptly offer readiness to furnish bail bonds before charge-sheet is filed.'
    ],
    modelPleadingStructure: `IN THE COURT OF JUDICIAL MAGISTRATE FIRST CLASS AT [CITY]
MISC. CRIMINAL APPLICATION NO. _______ OF 2026
IN FIR NO. _______ OF 2025 P.S. [Name]

APPLICATION UNDER SECTION 187(3) BNSS, 2023 FOR STATUTORY DEFAULT BAIL.

PRAYER:
Enlarge the applicant on indefeasible default bail as the statutory 90-day investigation window has lapsed without charge-sheet.`,
    actionRoute: '/dashboard/tools/draft-maker?template=regularBail',
    tags: ['default bail', 'section 187', 'section 167', 'bnss', 'indefeasible right', 'criminal-complaints-bail']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. CIVIL PLAINTS & INJUNCTIONS (O. 39)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'draft-order-39-injunction',
    slug: 'application-temporary-injunction-order-39-rules-1-2-cpc',
    title: 'Application for Temporary Injunction under Order 39 Rules 1 & 2 CPC',
    category: 'Civil Plaints & Injunctions (O. 39)',
    actReference: 'Code of Civil Procedure, 1908 — Order XXXIX Rules 1 & 2 read with Section 151',
    courtForum: 'Court of Senior Civil Judge / District Court / High Court (Original Side)',
    purposeWhenToUse: 'Securing an urgent ad-interim ex-parte injunction restraining defendants from alienating suit property, creating third-party rights, or changing nature of possession.',
    statutoryFoundation: 'Order 39 Rules 1 & 2 empowers civil courts to preserve the status quo of property in dispute and prevent waste, damage, or alienation.',
    essentialClauses: [
      'Prima Facie Case: Detailed explanation of title documents, registered deeds, or contract proof.',
      'Balance of Convenience: Demonstration that refusal of injunction causes severe imbalance against plaintiff.',
      'Irreparable Injury: Proof that damages cannot adequately compensate if property is alienated or demolished.',
      'Averment under Order 39 Rule 3 stating reasons why prior notice would defeat the object of injunction.',
      'Specific Restraint Prayer: Injunction against sale, mortgage, third-party rights, or demolition.',
      'Affidavit sworn in support of the application.'
    ],
    commonDraftingMistakes: [
      'Failing to establish all 3 cardinal tests (prima facie case, balance of convenience, irreparable injury).',
      'Not providing a clear schedule of property with boundaries and survey numbers.'
    ],
    modelPleadingStructure: `IN THE COURT OF SENIOR CIVIL JUDGE AT [CITY]
I.A. NO. _______ OF 2026 IN CIVIL SUIT NO. _______ OF 2026

IN THE MATTER OF:
[Plaintiff Full Name]                                   ... PLAINTIFF / APPLICANT
VERSUS
[Defendant Full Name]                                   ... DEFENDANT / RESPONDENT

APPLICATION UNDER ORDER XXXIX RULES 1 AND 2 READ WITH SECTION 151 CPC FOR AD-INTERIM EX-PARTE TEMPORARY INJUNCTION.

PRAYER:
Restrain the Defendant from creating any third-party interest or alienating the suit property.`,
    actionRoute: '/dashboard/tools/draft-maker?template=temporaryInjunction',
    tags: ['injunction', 'civil plaint', 'order 39', 'cpc', 'stay', 'interim relief', 'civil-plaints-injunctions']
  },

  {
    id: 'draft-civil-plaint-specific-performance',
    slug: 'civil-plaint-specific-performance-contract-order-7-cpc',
    title: 'Civil Plaint for Specific Performance and Permanent Injunction (Order VII CPC)',
    category: 'Civil Plaints & Injunctions (O. 39)',
    actReference: 'Specific Relief Act, 1963 — Sections 10, 16(c) read with CPC Order VII Rule 1',
    courtForum: 'Court of Civil Judge Senior Division / District Court',
    purposeWhenToUse: 'Instituting a civil suit compelling a seller to execute a registered sale deed after refusing to perform an agreement to sell despite receiving advance consideration.',
    statutoryFoundation: 'Section 10 of Specific Relief Act makes specific performance of contracts mandatory upon fulfilling conditions of Section 16(c) readiness and willingness.',
    essentialClauses: [
      'Full description of the parties, cause of action, and territorial jurisdiction.',
      'Details of Agreement to Sell: Date, total sale consideration, and advance amount paid with receipts.',
      'Mandatory Section 16(c) Averment: Unconditional plea of continuous readiness and willingness to perform.',
      'Service of legal notice demanding execution of sale deed and response received.',
      'Valuation of suit for court fees and jurisdiction under Court Fees Act.',
      'Prayer for decree of specific performance and alternative decree for refund of consideration with 18% interest.'
    ],
    commonDraftingMistakes: [
      'Omitting the mandatory Section 16(c) statutory averment of readiness and willingness.',
      'Inaccurate valuation for pecuniary jurisdiction leading to return of plaint.'
    ],
    modelPleadingStructure: `IN THE COURT OF CIVIL JUDGE (SENIOR DIVISION) AT [CITY]
CIVIL SUIT NO. _______ OF 2026
IN THE MATTER OF:
[Plaintiff Full Name]                                   ... PLAINTIFF
VERSUS
[Defendant Full Name]                                   ... DEFENDANT

SUIT FOR SPECIFIC PERFORMANCE OF AGREEMENT TO SELL DATED [Date] AND PERMANENT INJUNCTION.

PRAYER:
Decree specific performance directing Defendant to execute registered Sale Deed.`,
    actionRoute: '/dashboard/tools/draft-maker?template=civilPlaint',
    tags: ['plaint', 'civil plaint', 'order 7', 'specific performance', 'cpc', 'civil-plaints-injunctions']
  },

  {
    id: 'draft-summary-suit-order-37',
    slug: 'summary-suit-recovery-money-order-37-cpc',
    title: 'Summary Suit for Recovery of Money under Order XXXVII CPC',
    category: 'Civil Plaints & Injunctions (O. 39)',
    actReference: 'Code of Civil Procedure, 1908 — Order XXXVII Rules 1 & 2',
    courtForum: 'Court of Civil Judge / District Court / High Court (Commercial Division)',
    purposeWhenToUse: 'Expedited civil recovery of liquidated debts arising on written contracts, bills of exchange, hundies, or promissory notes without ordinary protracted trial.',
    statutoryFoundation: 'Order 37 establishes a summary procedure where defendant cannot defend unless granting of leave to defend by the court.',
    essentialClauses: [
      'Specific endorsement in the title: "Suit under Order XXXVII of the Code of Civil Procedure, 1908".',
      'Declaration that no relief outside the scope of Order 37 is claimed.',
      'Averments establishing liquidated debt based on written invoice, cheque, or promissory note.',
      'Calculation of principal debt and agreed contractual interest.',
      'Prayer for summary decree in default of defendant entering appearance within 10 days.'
    ],
    commonDraftingMistakes: [
      'Including unliquidated damages or tortious claims which disentitle the suit from Order 37 summary procedure.',
      'Failing to serve summons in Form No. 4 of Appendix B.'
    ],
    modelPleadingStructure: `IN THE COURT OF SENIOR CIVIL JUDGE AT [CITY]
SUMMARY SUIT (UNDER ORDER XXXVII CPC) NO. _______ OF 2026
IN THE MATTER OF:
[Plaintiff Business Name]                               ... PLAINTIFF
VERSUS
[Defendant Debtor Name]                                 ... DEFENDANT

SUMMARY SUIT FOR RECOVERY OF RS. [Amount] UNDER ORDER XXXVII CPC.

PRAYER:
Pass a summary decree against the Defendant for Rs. [Amount] with pendente lite and future interest at 18% p.a.`,
    actionRoute: '/dashboard/tools/draft-maker?template=civilPlaint',
    tags: ['summary suit', 'order 37', 'cpc', 'recovery', 'debt', 'civil-plaints-injunctions']
  },

  {
    id: 'draft-written-statement-cpc',
    slug: 'written-statement-counter-claim-order-8-cpc',
    title: 'Written Statement & Counter-Claim under Order VIII Rules 1 & 6 CPC',
    category: 'Civil Plaints & Injunctions (O. 39)',
    actReference: 'Code of Civil Procedure, 1908 — Order VIII Rules 1, 6 & 6A',
    courtForum: 'Civil Court of Respective Competency',
    purposeWhenToUse: 'Filing defence by defendant within mandatory 30-120 days responding to plaint allegations with preliminary objections and independent cross-claims.',
    statutoryFoundation: 'Order 8 mandates specific and paragraph-by-paragraph traverses, deeming unevaded allegations as admitted under Rule 5.',
    essentialClauses: [
      'Preliminary Objections: Lack of cause of action (O. 7 R. 11), limitation bar, or misjoinder.',
      'Specific paragraph-wise denials (No general or evasive denial per O. 8 R. 3 & 4).',
      'Plea of set-off or independent Counter-Claim with separate court fees.',
      'Verification and Statement of Truth by defendant.'
    ],
    commonDraftingMistakes: [
      'Evasive denials such as "denied for want of knowledge", which the court treats as constructive admission.',
      'Filing after statutory 120 days in Commercial Courts where right to file stands forfeited.'
    ],
    modelPleadingStructure: `IN THE COURT OF CIVIL JUDGE AT [CITY]
CIVIL SUIT NO. _______ OF 2026
IN THE MATTER OF:
[Plaintiff Name]                                        ... PLAINTIFF
VERSUS
[Defendant Name]                                        ... DEFENDANT

WRITTEN STATEMENT ON BEHALF OF DEFENDANT WITH PRELIMINARY OBJECTIONS.

PRAYER:
Dismiss the plaintiff's suit with exemplary costs under Section 35A CPC.`,
    actionRoute: '/dashboard/tools/draft-maker?template=civilPlaint',
    tags: ['written statement', 'order 8', 'cpc', 'defence', 'counter claim', 'civil-plaints-injunctions']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. LEGAL DEMAND NOTICES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'draft-commercial-legal-notice',
    slug: 'legal-notice-breach-contract-recovery-dues',
    title: 'Legal Notice for Breach of Commercial Contract & Demand of Dues',
    category: 'Legal Demand Notices',
    actReference: 'Indian Contract Act, 1872 — Section 73 read with Section 80 CPC (if against State)',
    courtForum: 'Pre-Litigation Advocate Legal Notice (Sent via Registered AD / Speed Post)',
    purposeWhenToUse: 'Formally putting a defaulting counterparty on notice of material contractual breach and demanding outstanding payments within 15 days before initiating civil/insolvency proceedings.',
    statutoryFoundation: 'Establishes crystalized cause of action and date of demand for calculating interest under Interest Act, 1978 and Commercial Courts Act pre-institution mediation.',
    essentialClauses: [
      'Advocate Letterhead details and instructions from the Client.',
      'Narrative of contract execution, invoices issued, and services delivered.',
      'Computation table of outstanding principal amount and accrued interest.',
      'Explicit demand to remit full outstanding sum within 15 days of receipt.',
      'Warning of civil lawsuit, insolvency petition under IBC, or criminal action for cheating.',
      'Demand for advocate notice charges.'
    ],
    commonDraftingMistakes: [
      'Failing to preserve Speed Post postal receipts and online delivery tracking proofs.',
      'Making contradictory admissions that damage subsequent pleadings in court.'
    ],
    modelPleadingStructure: `LEGAL DEMAND NOTICE
(BY REGISTERED POST A.D. & SPEED POST)

DATE: [Date]

TO,
[Defaulting Company Name / Individual]
[Address]

SUBJECT: LEGAL NOTICE UNDER INSTRUCTIONS OF MY CLIENT [CLIENT NAME] FOR RECOVERY OF OUTSTANDING SUM OF RS. [AMOUNT] ALONG WITH INTEREST AT 18% P.A.

SIR/MADAM,
Under instructions and authority from my Client, I hereby serve upon you this Legal Notice:
1. That my Client is engaged in the business of [Business Description].
2. That pursuant to Agreement dated [Date], my Client supplied goods under Invoices [Numbers].
3. That an aggregate amount of Rs. [Amount] remains unpaid despite repeated reminders.
4. I hereby call upon you to pay said amount within 15 days of receipt of this notice, failing which my Client shall institute legal proceedings at your cost and consequences.

[Advocate Signature & Enrollment No.]`,
    actionRoute: '/dashboard/tools/draft-maker?template=legalNotice',
    tags: ['notice', 'legal notice', 'breach', 'demand notice', 'commercial', 'legal-notices']
  },

  {
    id: 'draft-cheque-bounce-notice-138',
    slug: 'statutory-demand-notice-cheque-bounce-section-138',
    title: 'Statutory Demand Notice for Dishonour of Cheque (Section 138 NI Act)',
    category: 'Legal Demand Notices',
    actReference: 'Negotiable Instruments Act, 1881 — Section 138(b)',
    courtForum: 'Statutory Pre-requisite Notice for Section 138 Criminal Complaint',
    purposeWhenToUse: 'Mandatory statutory notice issued within 30 days of receiving cheque return memo, demanding payment within 15 days to trigger cause of action.',
    statutoryFoundation: 'Section 138(b) provides that no offence is complete unless payee makes a demand for payment of cheque amount by notice in writing within 30 days of dishonour information.',
    essentialClauses: [
      'Particulars of cheque: Number, date, drawee bank, and exact amount in words and figures.',
      'Date of presentation and date of receipt of Cheque Return Memo with exact reason.',
      'Strict 15-day cure notice demanding payment of the specific cheque amount.',
      'Warning of criminal prosecution under Section 138 NI Act and BNS sections.'
    ],
    commonDraftingMistakes: [
      'Demanding notice charges or interest combined into one indistinguishable total instead of isolating the exact cheque amount (KR Indira v. Gopinathan doctrine).',
      'Despatching after expiry of the strict 30-day statutory window from the memo date.'
    ],
    modelPleadingStructure: `STATUTORY DEMAND NOTICE UNDER SECTION 138(b) OF THE NEGOTIABLE INSTRUMENTS ACT, 1881

TO,
[Drawer Name & Address]

SUBJECT: DEMAND NOTICE UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT FOR DISHONOUR OF CHEQUE NO. [Number] DATED [Date] FOR RS. [Amount].

1. That you issued Cheque No. [Number] dated [Date] drawn on [Bank Name] for Rs. [Amount] towards discharge of your legal liability.
2. That upon presentation, the said cheque was dishonoured with remark "Funds Insufficient" vide memo dated [Date].
3. I hereby demand payment of the said cheque amount of Rs. [Amount] within 15 days of receipt of this notice.

[Advocate Name]`,
    actionRoute: '/dashboard/tools/draft-maker?template=chequeBounce',
    tags: ['notice', 'cheque bounce', 'section 138', 'ni act', 'demand notice', 'statutory notice', 'legal-notices']
  },

  {
    id: 'draft-eviction-notice-tenancy',
    slug: 'landlord-eviction-notice-tenant-lease-expiry-rent-arrears',
    title: 'Landlord Eviction Notice to Tenant for Lease Expiry & Rent Arrears',
    category: 'Legal Demand Notices',
    actReference: 'Transfer of Property Act, 1882 — Section 106 read with State Rent Control Acts',
    courtForum: 'Pre-Suit Notice for Eviction and Recovery of Mesne Profits',
    purposeWhenToUse: 'Terminating tenancy and requiring tenant to vacate and hand over vacant peaceful possession upon non-payment of rent or expiry of lease term.',
    statutoryFoundation: 'Section 106 Transfer of Property Act governs termination of monthly and yearly leases by written notice of 15 days or 6 months respectively.',
    essentialClauses: [
      'Details of Lease Agreement: Commencing date, monthly rental amount, and security deposit.',
      'Specific defaults: Consecutive months of rent non-payment or lease expiry by efflux of time.',
      'Explicit determination and termination of lease.',
      'Demand to vacate and surrender vacant possession within statutory period (usually 15 days).',
      'Notice that unauthorized holding over will attract market damages / mesne profits per diem.'
    ],
    commonDraftingMistakes: [
      'Giving less than 15 clear days notice under Section 106 T.P. Act.',
      'Accepting rent after notice issuance without reserving rights, causing waiver under Section 113.'
    ],
    modelPleadingStructure: `NOTICE FOR TERMINATION OF LEASE AND VACATION OF PREMISES
(UNDER SECTION 106 TRANSFER OF PROPERTY ACT, 1882)

TO,
[Tenant Name & Address]

SUBJECT: NOTICE OF TERMINATION OF TENANCY AND DEMAND FOR VACANT POSSESSION OF PREMISES [Address].

1. That you were inducted as a monthly tenant vide Agreement dated [Date] at monthly rent of Rs. [Amount].
2. That you have defaulted in payment of rent since [Month, Year].
3. Your tenancy is hereby terminated. Hand over vacant possession within 15 days, failing which an eviction suit with mesne profits will be filed.

[Advocate Name]`,
    actionRoute: '/dashboard/tools/draft-maker?template=legalNotice',
    tags: ['notice', 'eviction notice', 'rent default', 'tenancy', 'property', 'landlord', 'legal-notices']
  },

  {
    id: 'draft-defamation-cease-desist-notice',
    slug: 'defamation-cease-desist-legal-notice',
    title: 'Legal Notice & Cease and Desist for Defamation under Civil Tort & BNS 356',
    category: 'Legal Demand Notices',
    actReference: 'Bharatiya Nyaya Sanhita, 2023 — Section 356 read with Civil Tort of Defamation',
    courtForum: 'Pre-Litigation Cease and Desist Demand Notice',
    purposeWhenToUse: 'Restraining publication of false, malicious, and defamatory social media posts, articles, or broadcasts and demanding unconditional retraction, apology, and damages.',
    statutoryFoundation: 'Protects reputation under Article 21 and actionable tort of libel/slander.',
    essentialClauses: [
      'Standing of client: Professional standing, public reputation, and goodwill built over years.',
      'Exact quotation and URLs of the defamatory statements published by the noticee.',
      'Falsity statement: Demonstrating statements are completely false, malicious, and unverified.',
      'Demand for immediate takedown within 24-48 hours.',
      'Demand for unconditional public written apology.',
      'Assessment of quantified damages for loss of reputation.'
    ],
    commonDraftingMistakes: [
      'Failing to preserve timestamped screenshots and digital evidence of social media posts.',
      'Vague references without identifying the exact defamatory sentences.'
    ],
    modelPleadingStructure: `CEASE AND DESIST LEGAL NOTICE FOR DEFAMATION

TO,
[Defamer Name & Media Handle]

SUBJECT: CEASE AND DESIST NOTICE FOR DEFAMATORY STATEMENTS PUBLISHED AGAINST MY CLIENT [Name].

1. That on [Date], you published defamatory remarks stating "[Quotes]" on your public profile.
2. The said statements are utterly false and intended to harm my client's reputation.
3. Cease and desist from further publications, take down the posts within 24 hours, and tender an unconditional apology, failing which criminal proceedings under Section 356 BNS and civil suit for Rs. [Amount] damages will be instituted.

[Advocate Name]`,
    actionRoute: '/dashboard/tools/draft-maker?template=legalNotice',
    tags: ['defamation', 'cease and desist', 'notice', 'reputation', 'bns 356', 'legal-notices']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. COMMERCIAL CONTRACTS & AGREEMENTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'draft-mutual-nda-agreement',
    slug: 'mutual-non-disclosure-confidentiality-agreement-nda',
    title: 'Mutual Non-Disclosure & Confidentiality Agreement (NDA)',
    category: 'Commercial Contracts & Agreements',
    actReference: 'Indian Contract Act, 1872 — Sections 10, 27 & Specific Relief Act',
    courtForum: 'Commercial Contract (Enforceable via Civil Courts / Arbitration)',
    purposeWhenToUse: 'Protecting proprietary technology, financial projections, client lists, and trade secrets before entering joint ventures, M&A discussions, or technology partnerships.',
    statutoryFoundation: 'Enforceable under contract law to safeguard proprietary commercial secrets, with negative covenants valid during the term of disclosure.',
    essentialClauses: [
      'Comprehensive definition of "Confidential Information" including source code, financials, and IP.',
      'Standard of Care: Covenant to exercise reasonable degree of care (no less than own confidential info).',
      'Permitted Purpose: Strictly limiting disclosure to evaluation of prospective transaction.',
      'Carve-Outs: Information in public domain, already known, or required by court order.',
      'Term of Confidentiality: Surviving termination for 2-5 years; trade secrets indefinitely.',
      'Remedies: Injunctive relief acknowledged as essential remedy for breach.',
      'Governing Law & Dispute Resolution: Exclusive jurisdiction and arbitration clause.'
    ],
    commonDraftingMistakes: [
      'Drafting post-termination non-compete clauses that violate Section 27 Indian Contract Act (restraint of trade).',
      'Failing to include a clause for immediate return or certified destruction of confidential data upon request.'
    ],
    modelPleadingStructure: `MUTUAL NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT

THIS MUTUAL NON-DISCLOSURE AGREEMENT ("Agreement") is made this _____ day of ____________, 2026:
BETWEEN:
[Party 1 Name], a company incorporated under Companies Act, having registered office at [Address] (hereinafter "Party A");
AND
[Party 2 Name], a company having registered office at [Address] (hereinafter "Party B").

1. DEFINITION OF CONFIDENTIAL INFORMATION:
All technical, business, financial, and product data disclosed by Disclosing Party to Receiving Party.
2. OBLIGATIONS:
Receiving Party shall hold in strict confidence and not disclose to third parties without prior written consent.
3. REMEDIES:
Both parties agree that monetary damages may not be sufficient remedy and injunctive relief is available.
4. GOVERNING LAW: Laws of India, exclusive jurisdiction of courts at [City].

IN WITNESS WHEREOF, the parties hereto have executed this Agreement:
FOR PARTY A: _____________________    FOR PARTY B: _____________________`,
    actionRoute: '/dashboard/tools/draft-maker?template=nda',
    tags: ['contract', 'agreement', 'commercial', 'nda', 'confidentiality', 'commercial-contracts']
  },

  {
    id: 'draft-commercial-lease-agreement',
    slug: 'commercial-lease-agreement-tenancy-contract',
    title: 'Commercial Lease Agreement & Tenancy Contract',
    category: 'Commercial Contracts & Agreements',
    actReference: 'Transfer of Property Act, 1882 — Sections 105 to 111 & Registration Act, 1908',
    courtForum: 'Civil Contract (Mandatorily registrable if lease exceeds 11 months)',
    purposeWhenToUse: 'Leasing commercial property, office spaces, warehouses, or retail showrooms setting out rent escalation, fit-out periods, and termination terms.',
    statutoryFoundation: 'Section 105 T.P. Act defines lease of immovable property; Section 17 Registration Act makes registration compulsory for leases exceeding 11 months.',
    essentialClauses: [
      'Demised Premises: Carpet area, super built-up area, and demarcated parking slots.',
      'Term & Lock-in Period: Total duration and mutually binding lock-in period with liquidated damages.',
      'Rent & Escalation: Monthly rent, GST liability, and periodic percentage escalation (e.g. 5% annually).',
      'Interest-Free Refundable Security Deposit: Exact amount and conditions of refund upon handover.',
      'Maintenance, Property Tax & Utilities: Division of operational expenses between Lessor and Lessee.',
      'Termination & Notice Period: Permitted grounds for termination and clear cure period notice.'
    ],
    commonDraftingMistakes: [
      'Not registering a lease exceeding 11 months, rendering it inadmissible in evidence under Section 49 Registration Act.',
      'Omitting clear definitions of Force Majeure and rent abatement during catastrophic events.'
    ],
    modelPleadingStructure: `COMMERCIAL LEASE DEED

THIS LEASE DEED is executed on this _____ day of ____________, 2026:
LESSOR: [Lessor Full Name], Residing at: [Address]
AND
LESSEE: [Lessee Company Name], Through Authorized Director, Office at: [Address]

1. DEMISED PREMISES: Unit No. [Number], [Building Name], [Address] measuring [Area] sq. ft.
2. TERM: [Number] years commencing from [Date] with a lock-in period of [Number] months.
3. RENT: Monthly rent of Rs. [Amount] plus applicable GST, payable by the 7th of each month.
4. SECURITY DEPOSIT: Rs. [Amount] refundable upon vacating premises.
5. REGISTRATION: Both parties agree to register this Deed before Sub-Registrar.

LESSOR: _____________________    LESSEE: _____________________`,
    actionRoute: '/dashboard/tools/draft-maker?template=commercialLease',
    tags: ['contract', 'agreement', 'lease', 'commercial', 'rent', 'commercial-contracts']
  },

  {
    id: 'draft-master-services-agreement',
    slug: 'master-services-agreement-msa-sow-sla',
    title: 'Master Services Agreement (MSA) with SOW & Service Level Terms',
    category: 'Commercial Contracts & Agreements',
    actReference: 'Indian Contract Act, 1872 & Information Technology Act, 2000',
    courtForum: 'Commercial Courts / Institutional Arbitration',
    purposeWhenToUse: 'Framework agreement for ongoing IT consulting, software development, professional services, or business process outsourcing with separate Statements of Work (SOWs).',
    statutoryFoundation: 'Standard commercial master framework governing deliverables, IP assignment, warranty, and indemnities across multiple project milestones.',
    essentialClauses: [
      'Structure of SOWs: SOW incorporation mechanism and precedence in case of conflict.',
      'Intellectual Property: Work-for-hire assignment of all bespoke deliverables to client.',
      'Warranties & SLA: Service level uptime, bug fix response times, and service credits.',
      'Limitation of Liability: Cap on direct damages (e.g. 12 months fees) and exclusion of consequential damages.',
      'Indemnification: Mutual indemnities for third-party IP infringement and data breach.',
      'Governing Law & Multi-tier Dispute Resolution: Amicable resolution followed by arbitration.'
    ],
    commonDraftingMistakes: [
      'Vague acceptance criteria leading to disputes over whether milestone deliverables are accepted.',
      'Failing to explicitly assign copyright in custom code under Section 19 of Copyright Act.'
    ],
    modelPleadingStructure: `MASTER SERVICES AGREEMENT (MSA)

THIS AGREEMENT is entered into on [Date] by and between:
[Service Provider Name] ("Provider") AND [Client Company Name] ("Client").

1. SCOPE: Provider shall perform services specified in Statements of Work (SOW) executed hereunder.
2. IP RIGHTS: All custom deliverables created shall be the exclusive property of Client upon payment.
3. LIMITATION OF LIABILITY: Neither party liable for consequential damages; aggregate liability capped at fees paid in prior 12 months.
4. ARBITRATION: Disputes referred to Sole Arbitrator under Arbitration & Conciliation Act, 1996.

PROVIDER: _____________________    CLIENT: _____________________`,
    actionRoute: '/dashboard/tools/draft-maker?template=vendorAgreement',
    tags: ['msa', 'services agreement', 'contract', 'commercial', 'sla', 'commercial-contracts']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. AFFIDAVITS, CAVEATS & UNDERTAKINGS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'draft-caveat-petition-148a-cpc',
    slug: 'caveat-petition-section-148a-code-of-civil-procedure',
    title: 'Caveat Petition under Section 148A Code of Civil Procedure, 1908',
    category: 'Affidavits, Caveats & Undertakings',
    actReference: 'Code of Civil Procedure, 1908 — Section 148A',
    courtForum: 'High Court / District Court / Commercial Court',
    purposeWhenToUse: 'Lodging a caveat to guarantee that no ex-parte interim injunction, stay order, or decree is granted without advance notice and opportunity of hearing to the caveator.',
    statutoryFoundation: 'Section 148A provides statutory right to any person anticipating filing of a suit or application against them to be served with copies and heard before interim orders are made.',
    essentialClauses: [
      'Name, address, and description of Caveator and anticipated non-applicant / plaintiff.',
      'Details of impugned order, dispute, or property in respect of which suit/appeal is expected.',
      'Specific averment confirming dispatch of caveat notice by Registered AD to the expected plaintiff.',
      'Prayer requesting the Court not to pass any adverse ex-parte order without serving advance notice.',
      'Affidavit of verification supporting the caveat petition.'
    ],
    commonDraftingMistakes: [
      'Failing to serve a copy of the caveat on the opponent by Registered AD prior to filing, rendering caveat ineffective.',
      'Forgetting that a caveat expires automatically after 90 days under Section 148A(5) if not renewed.'
    ],
    modelPleadingStructure: `IN THE HIGH COURT OF JUDICATURE AT [CITY] / COURT OF DISTRICT JUDGE AT [CITY]
CAVEAT PETITION NO. _______ OF 2026
(Under Section 148A of the Code of Civil Procedure, 1908)

IN THE MATTER OF:
[Caveator Full Name], Residing at: [Address]            ... CAVEATOR
VERSUS
[Expected Opposite Party / Plaintiff Name]               ... EXPECTED NON-APPLICANT

CAVEAT PETITION UNDER SECTION 148A CPC

THE CAVEATOR RESPECTFULLY STATES:
1. That the Caveator is the lawful owner and occupant of Property No. [Number].
2. That the Caveator has reasonable grounds to believe that the Non-Applicant is likely to institute a Civil Suit / Appeal seeking ex-parte stay.
3. That the Caveator has sent notice of this Caveat to Non-Applicant by Registered Post on [Date].
4. PRAYER:
   It is prayed that no ex-parte interim order or stay be passed without giving prior notice to the Caveator.

CAVEATOR THROUGH COUNSEL: [Advocate Name] | Date: [Date]`,
    actionRoute: '/dashboard/tools/draft-maker?template=caveatPetition',
    tags: ['caveat', 'affidavit', 'undertaking', 'section 148a', 'cpc', 'affidavits-undertakings']
  },

  {
    id: 'draft-affidavit-evidence-cpc',
    slug: 'affidavit-evidence-examination-in-chief-order-18-rule-4-cpc',
    title: 'Affidavit of Evidence in Examination-in-Chief (Order XVIII Rule 4 CPC)',
    category: 'Affidavits, Caveats & Undertakings',
    actReference: 'Code of Civil Procedure, 1908 — Order XVIII Rule 4 read with Bharatiya Sakshya Adhiniyam, 2023',
    courtForum: 'Civil Trial Court / Commercial Court',
    purposeWhenToUse: 'Tendering sworn evidentiary testimony of plaintiff, defendant, or key witness in examination-in-chief, formally exhibiting original documentary evidence.',
    statutoryFoundation: 'Order 18 Rule 4 CPC mandates that examination-in-chief of all witnesses shall be on affidavit, followed by cross-examination in court or before Court Commissioner.',
    essentialClauses: [
      'Deponent identity, age, occupation, and capacity (Plaintiff, Authorized Representative, or Attesting Witness).',
      'Affirmation of factual events in first person chronologically.',
      'Formal tendering and marking of documents as Exhibits (e.g. "Sale Deed is marked as EXHIBIT PW-1/1").',
      'Explicit statement of which paragraphs are true to personal knowledge and which are derived from legal advice.',
      'Verification clause specifying date and place before Oath Commissioner / Notary Public.'
    ],
    commonDraftingMistakes: [
      'Pleading legal arguments or case citations in an evidentiary affidavit instead of pure factual statements.',
      'Tendering photocopies of documents without laying foundation for secondary evidence under BSA Section 58/60.'
    ],
    modelPleadingStructure: `IN THE COURT OF CIVIL JUDGE (SENIOR DIVISION) AT [CITY]
CIVIL SUIT NO. _______ OF 2026
IN THE MATTER OF:
[Plaintiff Name]                                        ... PLAINTIFF
VERSUS
[Defendant Name]                                        ... DEFENDANT

EVIDENCE AFFIDAVIT OF PW-1 [DEPONENT NAME] UNDER ORDER XVIII RULE 4 CPC

I, [Deponent Name], S/o [Father Name], aged about [Age] years, residing at [Address], do solemnly affirm:
1. That I am the Plaintiff and conversant with the facts of the case.
2. I prove Agreement to Sell dated [Date] which bears my signature and is marked as EXHIBIT PW-1/1.
3. I prove Bank Statement showing payment of advance consideration marked as EXHIBIT PW-1/2.
4. I confirm that I have always been ready and willing to pay the balance consideration.

DEPONENT: _____________________
VERIFICATION: Verified at [City] on [Date] that contents are true to my personal knowledge.
DEPONENT: _____________________`,
    actionRoute: '/dashboard/tools/draft-maker?template=affidavit',
    tags: ['affidavit', 'evidence', 'order 18', 'cpc', 'undertaking', 'oath', 'witness', 'affidavits-undertakings']
  },

  {
    id: 'draft-general-supported-affidavit',
    slug: 'general-verified-affidavit-supporting-application',
    title: 'General Verified Affidavit in Support of Interlocutory Application',
    category: 'Affidavits, Caveats & Undertakings',
    actReference: 'Code of Civil Procedure, 1908 — Order XIX Rules 1 & 3 & Notaries Act, 1952',
    courtForum: 'Civil, Criminal & Constitutional Courts',
    purposeWhenToUse: 'Accompanying any interim application, stay petition, amendment application, or condonation of delay validating factual averments on solemn oath.',
    statutoryFoundation: 'Order 19 CPC governs affidavits, restricting them to facts which the deponent is able of his own knowledge to prove.',
    essentialClauses: [
      'Identity, address, age, and parentage of the deponent.',
      'Statement confirming deponent is applicant and conversant with facts.',
      'Explicit statement of which paragraphs are true to personal knowledge and which are derived from legal advice.',
      'Declaration that no part of the affidavit is false and nothing material has been concealed.',
      'Verification clause specifying date and place before Oath Commissioner / Notary Public.'
    ],
    commonDraftingMistakes: [
      'Vague verification stating "paragraphs are true to best of knowledge and belief" without distinguishing personal knowledge from legal advice.',
      'Failure to sign in presence of Notary Public / Oath Commissioner.'
    ],
    modelPleadingStructure: `IN THE COURT OF THE CIVIL JUDGE / SESSIONS JUDGE AT [CITY]
APPLICATION NO. _______ OF 2026
IN SUIT / CASE NO. _______ OF 2026

IN THE MATTER OF:
[Applicant Name]                                       ... APPLICANT
VERSUS
[Opposite Party Name]                                  ... RESPONDENT

AFFIDAVIT IN SUPPORT OF APPLICATION

I, [Deponent Name], S/o [Father Name], aged about [Age] years, residing at [Address], do hereby solemnly affirm and state on oath:
1. That I am the Applicant in the accompanying Application and well conversant with facts.
2. That contents of accompanying application may kindly be read as part and parcel of this affidavit.
3. That averments in paras 1 to 5 are true to my personal knowledge and paras 6 to 8 are based on legal advice believed to be true.

DEPONENT: _____________________
VERIFICATION: Verified at [City] on [Date] that contents are true and correct.
DEPONENT: _____________________`,
    actionRoute: '/dashboard/tools/draft-maker?template=affidavit',
    tags: ['affidavit', 'undertaking', 'oath', 'order 19', 'verification', 'affidavits-undertakings']
  },

  {
    id: 'draft-electronic-evidence-affidavit-63-bsa',
    slug: 'electronic-evidence-certificate-affidavit-section-63-bsa',
    title: 'Certificate & Affidavit for Electronic Evidence under Section 63 BSA, 2023 (Old Section 65B)',
    category: 'Affidavits, Caveats & Undertakings',
    actReference: 'Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Old Indian Evidence Act Section 65B)',
    courtForum: 'All Civil & Criminal Courts in India',
    purposeWhenToUse: 'Mandatory statutory certificate accompanying printouts or copies of electronic records (WhatsApp chats, emails, CCTV footage, server logs, CDRs) to make them admissible in evidence.',
    statutoryFoundation: 'Section 63 BSA mandates that any information contained in an electronic record printed on paper, stored, recorded, or copied in optical/magnetic media shall be deemed a document upon fulfilling conditions and producing a certificate signed by the person in lawful control.',
    essentialClauses: [
      'Identification of the electronic device (Make, Model, Serial Number, IMEI, OS).',
      'Confirmation of lawful management and control over the device during the relevant period.',
      'Affirmation that computer/phone was operating properly without distortion or tampering.',
      'Process of printout / export generation (e.g. PDF printout from registered email / phone).',
      'Certification of truth and accuracy under Section 63(4) BSA, 2023.'
    ],
    commonDraftingMistakes: [
      'Still citing old Section 65B of the repealed Evidence Act for trials under new BSA laws.',
      'Failing to specify lawful control over the electronic device at the time the record was created.'
    ],
    modelPleadingStructure: `CERTIFICATE UNDER SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM, 2023
(FOR ADMISSIBILITY OF ELECTRONIC RECORDS)

I, [Full Name], S/o [Father Name], residing at [Address], do hereby certify:
1. That I am the owner and lawful custodian of Mobile Device [Make & Model, IMEI No.].
2. That the printouts of WhatsApp messages / Emails annexed hereto as Annexure [X] were produced from the said computer/mobile system in the ordinary course of lawful activities.
3. That during the relevant period, the said device was operating properly and the electronic record has not been tampered with.
4. I certify that the contents of the printout accurately reproduce the electronic record.

DEPONENT: _____________________
Date: [Date] | Place: [City]`,
    actionRoute: '/dashboard/tools/draft-maker?template=affidavit',
    tags: ['electronic evidence', 'section 63', 'bsa', 'section 65b', 'affidavit', 'whatsapp evidence', 'affidavits-undertakings']
  },

  {
    id: 'draft-indemnity-bond-affidavit',
    slug: 'indemnity-bond-affidavit-lost-title-documents',
    title: 'Indemnity Bond & Affidavit for Duplicate Documents / Lost Title Deeds',
    category: 'Affidavits, Caveats & Undertakings',
    actReference: 'Indian Contract Act, 1872 — Section 124 & Registration Act, 1908',
    courtForum: 'Sub-Registrar Office / Banks / Housing Societies / Municipal Corporations',
    purposeWhenToUse: 'Executed by a property owner or shareholder undertaking to indemnify banks, registrars, or societies against any third-party claims arising from loss of original title documents or share certificates.',
    statutoryFoundation: 'Section 124 defines a contract of indemnity protecting the promisee against loss caused by conduct of promisor or any third party.',
    essentialClauses: [
      'Recital of absolute ownership and acquisition of the property/shares.',
      'Circumstances of loss of original documents and police non-traceable report reference.',
      'Public notice in newspapers: Details of publication and lack of objections received.',
      'Absolute and unconditional undertaking to indemnify and keep indemnified the authority.',
      'Covenant to surrender the original if recovered at any time in future.'
    ],
    commonDraftingMistakes: [
      'Not executing on non-judicial stamp paper of prescribed state stamp duty value.',
      'Failing to annex police report and newspaper clippings.'
    ],
    modelPleadingStructure: `INDEMNITY BOND & UNDERTAKING

THIS DEED OF INDEMNITY is executed on this [Date] by:
[Indemnifier Name], Residing at: [Address] ("Indemnifier")
IN FAVOUR OF:
[Bank / Society / Registrar Name] ("Indemnified").

WHEREAS the Indemnifier is the owner of Property [Address] and original Title Deed dated [Date] has been misplaced/lost despite lodging Police Report No. [Number] dated [Date].

NOW THIS DEED WITNESSETH:
The Indemnifier undertakes to save harmless and indemnify the Indemnified against all claims, costs, or damages arising out of issuance of duplicate title deed.

INDEMNIFIER: _____________________
WITNESS 1: _____________________    WITNESS 2: _____________________`,
    actionRoute: '/dashboard/tools/draft-maker?template=affidavit',
    tags: ['indemnity bond', 'undertaking', 'affidavit', 'property', 'duplicate documents', 'affidavits-undertakings']
  }
];

export const LEGAL_DRAFTING_DATABASE = [
  ...INDIAN_LEGAL_DRAFTING.map(d => ({ ...d, jurisdiction: d.jurisdiction || 'IN' })),
  ...NEPAL_LEGAL_DRAFTING,
  ...US_LEGAL_DRAFTING,
  ...UK_LEGAL_DRAFTING,
  ...INTERNATIONAL_LEGAL_DRAFTING
];

/**
 * Authoritative Jurisdiction Drafting Resolver
 * Guarantees zero leakage across all jurisdictions.
 */
export const getDraftingForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  if (norm === 'NP' || norm === 'NEPAL') {
    return NEPAL_LEGAL_DRAFTING;
  }
  if (norm === 'US' || norm === 'USA') {
    return US_LEGAL_DRAFTING;
  }
  if (norm === 'GB' || norm === 'UK') {
    return UK_LEGAL_DRAFTING;
  }
  if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    return INTERNATIONAL_LEGAL_DRAFTING;
  }
  return INDIAN_LEGAL_DRAFTING.map(d => ({ ...d, jurisdiction: 'IN' }));
};

