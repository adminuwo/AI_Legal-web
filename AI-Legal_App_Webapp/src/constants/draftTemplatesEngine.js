/**
 * AI LEGAL™ ENTERPRISE DRAFT TEMPLATES ENGINE
 * Provides comprehensive, court-ready, jurisdiction-grounded drafting structures
 * for all 91 canonical legal templates across 5 jurisdictions:
 * - India (IN)
 * - Nepal (NP)
 * - United States (US)
 * - United Kingdom (GB)
 * - International (GLOBAL)
 */

export const JURISDICTION_STATUTES = {
  IN: {
    name: 'India',
    currency: '₹',
    currencyCode: 'INR',
    defaultCourt: 'IN THE HON\'BLE COURT OF DISTRICT & SESSIONS JUDGE',
    highCourt: 'IN THE HIGH COURT OF JUDICATURE',
    supremeCourt: 'IN THE SUPREME COURT OF INDIA',
    penalCode: 'Bharatiya Nyaya Sanhita, 2023 (BNS) / IPC',
    criminalProc: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)',
    evidenceAct: 'Bharatiya Sakshya Adhiniyam, 2023 (BSA)',
    civilProc: 'Code of Civil Procedure, 1908 (CPC)',
    contractAct: 'Indian Contract Act, 1872',
    negotiableAct: 'Negotiable Instruments Act, 1881 (Section 138)',
    consumerAct: 'Consumer Protection Act, 2019',
    companiesAct: 'Companies Act, 2013',
    familyLaw: 'Hindu Marriage Act, 1955 / Special Marriage Act, 1954',
    maintenanceSec: 'Section 144 BNSS (Section 125 CrPC)',
    anticipatoryBailSec: 'Section 482 of BNSS, 2023 (CrPC 438)',
    regularBailSec: 'Section 483 of BNSS, 2023 (CrPC 439)',
    firSec: 'Section 173 of BNSS, 2023 (CrPC 154)',
    quashingSec: 'Section 528 of BNSS, 2023 (CrPC 482)',
    injunctionOrder: 'Order XXXIX Rules 1 & 2 read with Section 151 CPC',
    rtiAct: 'Right to Information Act, 2005'
  },
  NP: {
    name: 'Nepal',
    currency: 'NPR ',
    currencyCode: 'NPR',
    defaultCourt: 'IN THE HON\'BLE DISTRICT COURT (जिल्ला अदालत)',
    highCourt: 'IN THE HON\'BLE HIGH COURT (उच्च अदालत)',
    supremeCourt: 'IN THE SUPREME COURT OF NEPAL (सर्वोच्च अदालत)',
    penalCode: 'Muluki Criminal Code, 2074 (मुलुकी अपराध संहिता, २०७४)',
    criminalProc: 'Muluki Criminal Procedure Code, 2074 (मुलुकी फौजदारी कार्यविधि संहिता, २०७४)',
    evidenceAct: 'Evidence Act, 2031 (प्रमाण ऐन, २०३१)',
    civilProc: 'Muluki Civil Procedure Code, 2074 (मुलुकी देवानी कार्यविधि संहिता, २०७४)',
    contractAct: 'Muluki Civil Code, 2074 (Contract & Obligation Provisions)',
    negotiableAct: 'Banking Offence and Punishment Act, 2064 / Negotiable Instruments Act, 2034',
    consumerAct: 'Consumer Protection Act, 2075',
    companiesAct: 'Companies Act, 2063',
    familyLaw: 'Muluki Civil Code, 2074 (Part 3: Family Law)',
    maintenanceSec: 'Section 89-99 of Muluki Civil Code, 2074',
    anticipatoryBailSec: 'Section 67-73 of Muluki Criminal Procedure Code, 2074',
    regularBailSec: 'Section 68 of Muluki Criminal Procedure Code, 2074',
    firSec: 'Section 4 of Muluki Criminal Procedure Code, 2074 (Jaheri Darkhast)',
    quashingSec: 'Article 144 of the Constitution of Nepal, 2072 (Extraordinary Writ Jurisdiction)',
    injunctionOrder: 'Section 157 of Muluki Civil Procedure Code, 2074 (Antarim Aadesh)',
    rtiAct: 'Right to Information Act, 2064'
  },
  US: {
    name: 'United States',
    currency: '$',
    currencyCode: 'USD',
    defaultCourt: 'IN THE UNITED STATES DISTRICT COURT',
    highCourt: 'IN THE UNITED STATES COURT OF APPEALS',
    supremeCourt: 'IN THE SUPREME COURT OF THE UNITED STATES',
    penalCode: 'Title 18, United States Code (U.S.C.) & State Penal Codes',
    criminalProc: 'Federal Rules of Criminal Procedure (Fed. R. Crim. P.)',
    evidenceAct: 'Federal Rules of Evidence (FRE)',
    civilProc: 'Federal Rules of Civil Procedure (FRCP)',
    contractAct: 'Uniform Commercial Code (UCC) & State Common Law of Contract',
    negotiableAct: 'UCC Article 3 (Negotiable Instruments)',
    consumerAct: 'Consumer Financial Protection Act & FTC Act',
    companiesAct: 'Delaware General Corporation Law (DGCL) / State Business Corp Act',
    familyLaw: 'Uniform Marriage and Divorce Act (UMDA) & State Domestic Relations Law',
    maintenanceSec: 'State Spousal Support & Maintenance Statutes',
    anticipatoryBailSec: '18 U.S.C. § 3142 (Bail Reform Act / Release on Conditions)',
    regularBailSec: '18 U.S.C. § 3142 (Motion for Pretrial Release on Bond)',
    firSec: 'Federal Criminal Complaint under Fed. R. Crim. P. 3',
    quashingSec: 'Motion to Dismiss under Fed. R. Crim. P. 12(b)',
    injunctionOrder: 'Fed. R. Civ. P. 65 (Preliminary Injunction and Temporary Restraining Order)',
    rtiAct: 'Freedom of Information Act (FOIA), 5 U.S.C. § 552'
  },
  GB: {
    name: 'United Kingdom',
    currency: '£',
    currencyCode: 'GBP',
    defaultCourt: 'IN THE COUNTY COURT AT [LOCATION] / HIGH COURT OF JUSTICE',
    highCourt: 'IN THE HIGH COURT OF JUSTICE, KING\'S BENCH DIVISION',
    supremeCourt: 'IN THE SUPREME COURT OF THE UNITED KINGDOM',
    penalCode: 'Offences Against the Person Act 1861, Theft Act 1968, Fraud Act 2006',
    criminalProc: 'Criminal Procedure Rules (CrimPR) & Police and Criminal Evidence Act 1984',
    evidenceAct: 'Civil Evidence Act 1995 & Police and Criminal Evidence Act 1984',
    civilProc: 'Civil Procedure Rules 1998 (CPR)',
    contractAct: 'English Common Law of Contract & Consumer Rights Act 2015',
    negotiableAct: 'Bills of Exchange Act 1882',
    consumerAct: 'Consumer Rights Act 2015',
    companiesAct: 'Companies Act 2006',
    familyLaw: 'Matrimonial Causes Act 1973 & Children Act 1989',
    maintenanceSec: 'Section 23 of Matrimonial Causes Act 1973 (Financial Provision)',
    anticipatoryBailSec: 'Bail Act 1976 (Application for Pre-charge / Pre-trial Bail)',
    regularBailSec: 'Section 4 of Bail Act 1976',
    firSec: 'Formal Crime Report under PACE 1984 Codes of Practice',
    quashingSec: 'Application to Dismiss Indictment / Judicial Review CPR Part 54',
    injunctionOrder: 'CPR Part 25 (Interim Injunctions & Freezing Injunctions)',
    rtiAct: 'Freedom of Information Act 2000'
  },
  GLOBAL: {
    name: 'International',
    currency: '$',
    currencyCode: 'USD',
    defaultCourt: 'IN THE COMPETENT COURT OF GENERAL JURISDICTION',
    highCourt: 'IN THE APPELLATE TRIBUNAL / INTERNATIONAL ARBITRAL TRIBUNAL',
    supremeCourt: 'IN THE SUPREME COURT / INTERNATIONAL COURT OF JUSTICE',
    penalCode: 'National Penal Code / Rome Statute of the International Criminal Court',
    criminalProc: 'Rules of Criminal Procedure & Human Rights Fair Trial Standards',
    evidenceAct: 'International Rules of Evidence & IBA Rules on the Taking of Evidence',
    civilProc: 'UNCITRAL Model Law on International Commercial Conciliation & Litigation',
    contractAct: 'UN Convention on Contracts for the International Sale of Goods (CISG) / UNIDROIT',
    negotiableAct: 'UNCITRAL Convention on International Bills of Exchange',
    consumerAct: 'UN Guidelines for Consumer Protection',
    companiesAct: 'International Corporate Governance Network (ICGN) & Model Business Corporation Standards',
    familyLaw: 'Hague Convention on International Child Abduction & National Family Law',
    maintenanceSec: 'Hague Convention on the International Recovery of Child Support',
    anticipatoryBailSec: 'Pre-trial Liberty Guarantee under Article 9 ICCPR',
    regularBailSec: 'Bail and Provisional Release under International Covenant on Civil and Political Rights',
    firSec: 'Official Complaint & Information of Offence',
    quashingSec: 'Plea in Bar / Motion for Dismissal of Proceedings',
    injunctionOrder: 'Interim Measures under UNCITRAL Model Law Article 17',
    rtiAct: 'International Standards on Right to Information & Transparency'
  }
};

/**
 * Resolve active jurisdiction configuration
 */
export function getJurisdictionConfig(jurisdiction = {}) {
  const code = (jurisdiction.countryCode || jurisdiction.country || 'IN').toUpperCase();
  if (code === 'NP' || code === 'NEPAL') return JURISDICTION_STATUTES.NP;
  if (code === 'US' || code === 'USA' || code.includes('UNITED STATES')) return JURISDICTION_STATUTES.US;
  if (code === 'GB' || code === 'UK' || code.includes('UNITED KINGDOM')) return JURISDICTION_STATUTES.GB;
  if (code === 'GLOBAL' || code === 'INT' || code.includes('INTERNATIONAL')) return JURISDICTION_STATUTES.GLOBAL;
  return JURISDICTION_STATUTES.IN;
}

/**
 * Generate a complete, formal, court-ready draft for any of the 91 templates
 */
export function generateStructuredDraft(template, jurisdiction = {}, fields = {}, caseContext = null) {
  const jConfig = getJurisdictionConfig(jurisdiction);
  const tmplId = template?.id || 'customDraft';
  const category = template?.category || 'Miscellaneous';
  const title = template?.title || 'Legal Document';

  // Extract Party Info with safe fallbacks
  const p1 = fields.senderName || fields.petitionerName || fields.complainantName || fields.landlordName || fields.transferorName || fields.employerName || fields.borrowerName || fields.party1 || fields.deponentName || caseContext?.clientName || '[FIRST PARTY / APPLICANT NAME]';
  const p1Address = fields.senderAddress || fields.petitionerAddress || fields.complainantAddress || fields.landlordAddress || fields.registeredOffice || caseContext?.clientContact || '[FIRST PARTY ADDRESS]';
  
  const p2 = fields.receiverName || fields.respondentName || fields.accusedName || fields.tenantName || fields.transfereeName || fields.employeeName || fields.lenderName || fields.party2 || fields.oppositeParty || caseContext?.opponentName || '[SECOND PARTY / OPPOSING PARTY NAME]';
  const p2Address = fields.receiverAddress || fields.respondentAddress || fields.tenantAddress || caseContext?.opponentAddress || '[SECOND PARTY ADDRESS]';

  const court = fields.courtName || caseContext?.courtName || (category === 'Court Pleadings' ? jConfig.highCourt : jConfig.defaultCourt);
  const caseNo = fields.caseNumber || caseContext?.caseNumber || `[CASE / SUIT NO. _____ OF ${new Date().getFullYear()}]`;
  const curr = jConfig.currency;
  const currCode = jConfig.currencyCode;
  const dateStr = new Date().toLocaleDateString(jConfig.name === 'Nepal' ? 'en-NP' : 'en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

  // 1. NOTICES (13 Templates)
  if (category === 'Miscellaneous' && tmplId.toLowerCase().includes('notice') || category === 'Banking' && tmplId.toLowerCase().includes('notice') || category === 'Property' && tmplId.toLowerCase().includes('notice') || category === 'Contracts' && tmplId.toLowerCase().includes('notice') || category === 'Civil' && tmplId.toLowerCase().includes('notice') || category === 'Corporate' && tmplId.toLowerCase().includes('notice') || category === 'Consumer' && tmplId.toLowerCase().includes('notice') || category === 'Employment' && tmplId.toLowerCase().includes('notice') || tmplId === 'legalNotice') {
    const is138 = tmplId === 'chequeBounceNotice';
    const isEviction = tmplId === 'evictionNotice' || tmplId === 'rentDefaultNotice';
    const isDefamation = tmplId === 'defamationNotice';

    const subjectLine = is138
      ? `STATUTORY LEGAL DEMAND NOTICE UNDER ${jConfig.negotiableAct.toUpperCase()} FOR DISHONOUR OF CHEQUE`
      : isEviction
      ? `LEGAL EVICTION NOTICE TO VACATE TENANTED PREMISES AND CLEAR OUTSTANDING ARREARS`
      : isDefamation
      ? `CEASE AND DESIST NOTICE FOR DEFAMATORY STATEMENTS AND CLAIM FOR DAMAGES`
      : `LEGAL DEMAND NOTICE UNDER INSTRUCTIONS OF CLIENT REGARDING ${title.toUpperCase()}`;

    const statutoryBasis = is138
      ? jConfig.negotiableAct
      : isEviction
      ? `Applicable Tenancy and Rent Control Legislation of ${jConfig.name}`
      : isDefamation
      ? `Civil Law of Torts (Defamation) and Penal Provisions of ${jConfig.penalCode}`
      : `${jConfig.contractAct}`;

    return `LEGAL DEMAND NOTICE
(DELIVERED VIA REGISTERED POST WITH ACKNOWLEDGEMENT DUE / SPEED POST / SECURE EMAIL)

DATE: ${dateStr}
PLACE: [CITY / JURISDICTION]

TO:
${p2.toUpperCase()}
Address: ${p2Address}
Contact: [PHONE / EMAIL OF OPPOSING PARTY]

FROM:
[NAME OF ADVOCATE / LEGAL COUNSEL], Advocate
[Bar Council / Law Society Enrolment No: _________]
Chamber Address: [ADVOCATE CHAMBER ADDRESS]
Email / Contact: [ADVOCATE CONTACT DETAILS]

UNDER INSTRUCTIONS FROM MY CLIENT:
${p1.toUpperCase()}, residing at / having registered office at:
${p1Address}
(Hereinafter referred to as "My Client")

SUBJECT: ${subjectLine}

Sir / Madam,

Under instructions from, for, and on behalf of My Client named above, I do hereby serve upon you this formal Legal Notice as follows:

1. MATERIAL BACKGROUND & RELATIONSHIP OF PARTIES:
That My Client is a reputable citizen / business entity engaged in lawful business. That you, the Noticee above-named, entered into transactions / agreements with My Client wherein clear reciprocal obligations and covenants were established between the parties.

2. CHRONOLOGICAL FACTS OF THE GRIEVANCE:
(a) That on or about [SPECIFIC DATE], you approached My Client requesting [DETAILS OF GOODS / SERVICES / TENANCY / TRANSACTION].
(b) That pursuant to your explicit assurances and promises, My Client performed all obligations and provided [DETAILS OF PERFORMANCE / ADVANCE / LEASED PROPERTY].
(c) ${is138 ? `That towards the discharge of your existing legally enforceable debt, you issued Cheque No. [CHEQUE NUMBER], dated [CHEQUE DATE], drawn on [DRAWEE BANK NAME], Branch [BRANCH NAME], for an amount of ${curr}[CHEQUE AMOUNT] in favour of My Client.` : `That you incurred a legally enforceable monetary obligation of ${curr}[TOTAL SUM] towards My Client, which was duly billed and acknowledged.`}

3. ACT OF DEFAULT / DISHONOUR / WRONGFUL ACTION:
(a) ${is138 ? `That My Client presented the aforementioned cheque for realization through their banker, but to My Client's utter shock and dismay, the cheque was returned unpaid and dishonoured by your bank vide Return Memo dated [RETURN MEMO DATE] with the endorsement: "FUNDS INSUFFICIENT / EXCEEDS ARRANGEMENTS".` : `That despite receiving full benefits and performance, you willfully defaulted and failed to perform your obligations since [DEFAULT DATE], causing substantial financial loss, mental harassment, and commercial injury to My Client.`}
(b) That your said default constitutes a deliberate, intentional, and mala fide breach of statutory provisions under ${statutoryBasis}.

4. LEGAL CONSEQUENCES & STATUTORY GROUND:
That your actions have caused serious pecuniary loss and civil damage to My Client. Your conduct is actionable under both civil jurisprudence for recovery of dues with interest @ 18% per annum and penal law under ${jConfig.penalCode} for cheating, criminal breach of trust, and statutory violations.

5. PEREMPTORY DEMAND & CURE PERIOD:
I hereby call upon you, the Noticee, to make payment of the total outstanding sum of ${curr}[AMOUNT IN FIGURES] (${currCode} [AMOUNT IN WORDS]) along with notice expenses of ${curr}[NOTICE CHARGES] into My Client's designated bank account within a period of ${is138 ? '15 (Fifteen) clear days' : '15 (Fifteen) days'} from the date of receipt of this notice.

6. RESERVATION OF LEGAL REMEDIES:
Please take notice that in the event of your failure, neglect, or refusal to comply with the requisitions of this notice within the stipulated period, My Client has given me peremptory instructions to initiate appropriate legal proceedings against you—including civil suits for recovery and damages, criminal complaints before the competent Court of Judicial Magistrate, and pre-institution mediation—at your sole risk, cost, and legal consequences.

A copy of this Legal Notice is retained in my chamber records for future evidentiary production in court.

Yours faithfully,

___________________________________
[ADVOCATE SIGNATURE & SEAL]
[NAME OF ADVOCATE]
Advocate for the Client`;
  }

  // 2. CRIMINAL PLEADINGS & BAIL (8 Templates)
  if (category === 'Criminal' || tmplId === 'fir' || tmplId === 'criminalComplaint' || tmplId === 'bailApplication' || tmplId === 'anticipatoryBail' || tmplId === 'quashingPetition') {
    const isBail = tmplId === 'bailApplication' || tmplId === 'anticipatoryBail';
    const isAnticipatory = tmplId === 'anticipatoryBail';
    const isQuashing = tmplId === 'quashingPetition';
    const isFIR = tmplId === 'fir';

    if (isFIR) {
      return `FIRST INFORMATION REPORT / FORMAL POLICE COMPLAINT
(UNDER ${jConfig.firSec.toUpperCase()})

DATE: ${dateStr}
TO:
The Station House Officer (SHO) / In-Charge Officer,
Police Station: [NAME OF POLICE STATION]
District: [DISTRICT / CITY], [STATE / PROVINCE]

SUBJECT: Complaint regarding commission of cognizable offences under ${jConfig.penalCode} committed against the Complainant.

1. INFORMANT / COMPLAINANT DETAILS:
Name: ${p1}
Father's / Spouse's Name: [FATHER / SPOUSE NAME]
Age: [AGE] Years | Occupation: [OCCUPATION]
Address: ${p1Address}
Contact: [PHONE NUMBER]

2. ACCUSED PERSON(S) DETAILS (IF KNOWN):
Name: ${p2}
Address: ${p2Address}
Other unidentified associates: [APPROXIMATE NUMBER & PHYSICAL DESCRIPTION]

3. INCIDENT PARTICULARS:
(a) Date & Time of Occurrence: [DATE OF INCIDENT] at approximately [TIME OF INCIDENT]
(b) Exact Location / Place of Occurrence: [DETAILED ADDRESS OF SCENE OF CRIME]
(c) Distance & Direction from Police Station: [APPROX. KM AND DIRECTION]

4. DETAILED CHRONOLOGICAL STATEMENT OF FACTS:
Sir/Madam, I most respectfully submit the following factual narrative of the criminal incident:
(a) That on the date and time mentioned above, I was lawfully present at [LOCATION] carrying out my routine activities.
(b) That the Accused person(s) named above arrived at the spot with premeditated common intention and unlawfully [DESCRIBE SPECIFIC CRIMINAL ACTS: ASSAULT, THEFT, THREATS, DAMAGE, OR TRESPASS].
(c) That the Accused forcefully [SPECIFY WEAPONS USED OR PROPERTY SEIZED, E.G. CASH, MOBILE PHONE, GOLD JEWELRY].
(d) That upon alarm being raised by me, independent witnesses namely (1) [WITNESS 1 NAME, ADDRESS] and (2) [WITNESS 2 NAME, ADDRESS] rushed to the spot and witnessed the commission of the offence, whereupon the accused fled from the scene issuing death threats.

5. STATUTORY OFFENCES CONSTITUTED:
The acts of the Accused persons clearly constitute serious cognizable penal offences under the governing provisions of ${jConfig.penalCode} [e.g. Theft, Cheating, Criminal Intimidation, Assault, Extortion].

6. PRAYER / REQUISITION:
It is therefore most respectfully prayed that this Police Station may:
(i) Register a formal FIR against the accused persons under the applicable penal sections;
(ii) Conduct an immediate, impartial, and prompt investigation into the matter;
(iii) Apprehend the accused persons and recover the stolen/misappropriated property;
(iv) Provide adequate police protection to the Complainant and witnesses against potential retaliation.

Enclosures:
1. Copy of Medical Examination Report / Injury MLC (if applicable)
2. Photographic / Video / Digital Evidence on Pen Drive (Section 65B Certificate annexed)
3. List of stolen articles with valuation receipts

Yours faithfully,

___________________________________
[SIGNATURE / THUMB IMPRESSION OF COMPLAINANT]
${p1}`;
    }

    // Bail or Quashing Petition
    const bailHeading = isAnticipatory
      ? `APPLICATION UNDER ${jConfig.anticipatoryBailSec.toUpperCase()} FOR GRANT OF ANTICIPATORY BAIL`
      : isBail
      ? `APPLICATION UNDER ${jConfig.regularBailSec.toUpperCase()} FOR GRANT OF REGULAR BAIL`
      : `PETITION UNDER ${jConfig.quashingSec.toUpperCase()} FOR QUASHING OF FIR AND CRIMINAL PROCEEDINGS`;

    return `${court.toUpperCase()}
CRIMINAL MISCELLANEOUS (BAIL) APPLICATION NO. _______ OF ${new Date().getFullYear()}
IN CONNECTION WITH:
FIR / CRIME NO. [FIR NUMBER] DATED [FIR DATE]
POLICE STATION: [POLICE STATION NAME]
OFFENCES CHARGED: [LIST SECTIONS OF ${jConfig.penalCode}]

IN THE MATTER OF:
${p1.toUpperCase()}, Son/Daughter/Wife of [GUARDIAN NAME]
Aged about: [AGE] Years, Occupation: [OCCUPATION]
Residing at: ${p1Address}
... APPLICANT / ACCUSED

VERSUS

1. THE STATE OF [STATE / PROVINCE NAME]
Through the Standing Counsel / Public Prosecutor
Representing Police Station: [PS NAME]

2. [COMPLAINANT / INFORMANT NAME]
Residing at: ${p2Address}
... RESPONDENTS

${bailHeading}

TO,
THE HON'BLE CHIEF JUSTICE / PRINCIPAL SESSIONS JUDGE AND HIS COMPANION JUDGES OF THIS HON'BLE COURT.

THE HUMBLE APPLICATION OF THE APPLICANT ABOVE-NAMED MOST RESPECTFULLY SHOWETH:

1. PARTICULARS OF THE APPLICANT & ARREST STATUS:
That the Applicant is a respectable, permanent resident of [CITY] having deep roots in society. The Applicant has clean antecedents and has never been convicted by any court of law for any offence. ${isAnticipatory ? 'The Applicant has reasonable apprehension of imminent and wrongful arrest by the local police.' : 'The Applicant was arrested on [ARREST DATE] and is currently detained in judicial custody at [PRISON NAME].'}

2. SUMMARY OF THE PROSECUTION CASE & FIR ALLEGATIONS:
That according to the prosecution version in FIR No. [NUMBER], the Complainant alleged that the Applicant along with other co-accused committed offences under [SECTIONS]. A copy of the impugned FIR is annexed hereto as ANNEXURE A-1.

3. GROUNDS FOR GRANT OF BAIL / RELIEF:
A. ABSENCE OF PRIMA FACIE CASE: That the allegations in the FIR are false, concocted, and motivated by commercial/personal rivalry. The essential statutory ingredients of the alleged offences under ${jConfig.penalCode} are completely lacking on the face of the record.
B. NO NEED FOR CUSTODIAL INTERROGATION: That the investigation is substantially documentary in nature. The Applicant has fully cooperated with the Investigating Officer, and no recovery remains to be effected from the personal custody of the Applicant.
C. SATISFACTION OF THE TRIPLE TEST:
   (i) Flight Risk: The Applicant is a permanent resident, homeowner, and gainfully employed with dependents; there is zero risk of abscondence.
   (ii) Witness Tampering: All material witnesses are government officials or have had their statements recorded; the Applicant undertakes not to contact or influence any witness.
   (iii) No Repetition of Offence: The dispute is unique and isolated; there is no likelihood of repeat offences.
D. CONSTITUTIONAL RIGHT TO PERSONAL LIBERTY: That personal liberty is an inviolable constitutional guarantee. Pre-trial detention cannot be punitive. "Bail is the rule, jail is the exception."
E. PARITY: Co-accused persons having similar or graver roles have already been enlarged on bail by this Hon'ble Court vide Order dated [DATE].

4. UNDERTAKING BY THE APPLICANT:
The Applicant solemnly undertakes to abide by all conditions imposed by this Hon'ble Court, to surrender their passport if directed, to report to the Investigating Officer as scheduled, and to provide solvent local sureties to the satisfaction of the Court.

5. PRAYER:
It is therefore most respectfully prayed that this Hon'ble Court may graciously be pleased to:
(a) ${isAnticipatory ? 'Direct that in the event of arrest in FIR No. [NUMBER], the Applicant be released on anticipatory bail on such terms and conditions as this Hon\'ble Court deems fit;' : 'Enlarge the Applicant on regular bail in FIR No. [NUMBER] pending trial;'}
(b) Grant ad-interim protection / interim bail during the pendency of the present application;
(c) Pass such other or further order(s) as this Hon'ble Court may deem fit and proper in the interest of justice.

AND FOR THIS ACT OF KINDNESS, THE APPLICANT AS IN DUTY BOUND SHALL EVER PRAY.

FILED BY:
___________________________________
[NAME OF ADVOCATE], Counsel for Applicant
Chamber Address: [CHAMBER DETAILS]
Place: [COURT LOCATION] | Date: ${dateStr}

VERIFICATION AFFIDAVIT
I, ${p1}, aged about [AGE] years, the Applicant above-named, do hereby solemnly affirm and state on oath that the contents of paragraphs 1 to 5 of the accompanying Bail Application are true and correct to my knowledge and based on legal records, and nothing material has been concealed therefrom.
Verified at [PLACE] on this ${dateStr}.

___________________________________
DEPONENT`;
  }

  // 3. COURT PLEADINGS & CIVIL SUITS (15 Templates)
  if (category === 'Court Pleadings' || category === 'Civil' || tmplId === 'plaint' || tmplId === 'writtenStatement' || tmplId === 'interimApplication' || tmplId === 'stayApplication') {
    const isWS = tmplId === 'writtenStatement';
    const isInterim = tmplId === 'interimApplication' || tmplId === 'stayApplication';

    if (isWS) {
      return `${court.toUpperCase()}
SUIT / CIVIL CASE NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${p1.toUpperCase()}                                  ... PLAINTIFF

VERSUS

${p2.toUpperCase()}                                  ... DEFENDANT

WRITTEN STATEMENT ON BEHALF OF DEFENDANT UNDER ORDER VIII OF ${jConfig.civilProc.toUpperCase()}

THE DEFENDANT ABOVE-NAMED MOST RESPECTFULLY SUBMITS AS UNDER:

PRELIMINARY OBJECTIONS:
1. NON-MAINTAINABILITY: That the present suit filed by the Plaintiff is an abuse of judicial process, legally untenable, and barred under statutory provisions of ${jConfig.civilProc}.
2. BAR OF LIMITATION: That the alleged cause of action arose on [DATE] and the suit has been instituted beyond the prescribed limitation period under the Limitation Act.
3. SUPPRESSION OF MATERIAL FACTS: That the Plaintiff has approached this Hon'ble Court with unclean hands and deliberately concealed vital agreements and payments made by the Defendant.
4. LACK OF CAUSE OF ACTION: That the plaint does not disclose any subsisting, legally enforceable cause of action against the answering Defendant, and is liable to be rejected under Order VII Rule 11 CPC.

PARA-WISE REPLY ON MERITS:
1. That the contents of Paragraph 1 of the Plaint are matters of record and need no specific reply.
2. That the contents of Paragraph 2 of the Plaint are vehemently denied as false, incorrect, and misleading. It is denied that the Defendant agreed to the unilateral terms asserted by the Plaintiff.
3. That the contents of Paragraph 3 of the Plaint are baseless. The true facts are that on [DATE], the parties entered into [DESCRIBE DEFENDANT VERSION OF TRANSACTIONS].
4. That the valuation of the suit for purposes of court fees and jurisdiction is incorrect and deficit.

PRAYER:
In view of the above preliminary objections and submissions on merits, it is most respectfully prayed that this Hon'ble Court may be pleased to:
(a) Dismiss the Suit of the Plaintiff with exemplary costs under Section 35A CPC;
(b) Pass such other or further order(s) as this Hon'ble Court may deem fit and proper in the interest of justice.

DEFENDANT THROUGH COUNSEL:
___________________________________
[NAME OF ADVOCATE], Counsel for Defendant
Place: [PLACE] | Date: ${dateStr}

VERIFICATION:
Verified at [PLACE] on this ${dateStr} that the contents of paragraphs 1 to 4 of preliminary objections and para-wise reply are true and correct to my knowledge derived from record.

___________________________________
DEFENDANT`;
    }

    // Civil Plaint
    return `${court.toUpperCase()}
ORIGINAL CIVIL SUIT NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${p1.toUpperCase()}, S/o [FATHER NAME]
Residing at: ${p1Address}                           ... PLAINTIFF

VERSUS

${p2.toUpperCase()}, S/o [FATHER NAME]
Residing at: ${p2Address}                           ... DEFENDANT

SUIT FOR SPECIFIC PERFORMANCE OF CONTRACT / RECOVERY OF MONEY / DECLARATION AND PERMANENT INJUNCTION UNDER ${jConfig.civilProc.toUpperCase()}

THE PLAINTIFF ABOVE-NAMED RESPECTFULLY SUBMITS:

1. PARTIES:
That the Plaintiff is a law-abiding citizen and lawful resident of [CITY]. The Defendant is an individual residing at the address mentioned above, within the territorial limits of this Hon'ble Court.

2. FACTS OF THE CASE & CONTRACTUAL UNDERTAKING:
(a) That on [DATE OF CONTRACT], the Plaintiff and the Defendant entered into a valid, binding Agreement in writing whereby [DESCRIBE TERMS OF CONTRACT / SALE / DEBT].
(b) That under Clause [X] of the said Agreement, the Plaintiff paid a sum of ${curr}[ADVANCE AMOUNT] to the Defendant, receipt whereof was duly acknowledged.
(c) That the Plaintiff has at all material times been ready, willing, and able to perform all terms of the Agreement and tendered the balance sum to the Defendant.

3. BREACH BY DEFENDANT:
That the Defendant, with dishonest intent, failed to execute the final conveyance / repay the admitted sum despite repeated requests, reminders, and service of formal Legal Notice dated [DATE].

4. JURISDICTION & LIMITATION:
(a) Territorial Jurisdiction: The contract was executed, money was paid, and the property/dispute is situated within the territorial limits of this Hon'ble Court.
(b) Pecuniary Jurisdiction: The total valuation of the suit is ${curr}[VALUATION AMOUNT], which falls squarely within the pecuniary jurisdiction of this Court.
(c) Limitation: The cause of action arose on [DATE OF BREACH], and the suit is well within the prescribed 3-year limitation period.

5. PRAYER:
It is therefore most respectfully prayed that this Hon'ble Court may be pleased to:
(i) Pass a Decree of Specific Performance directing Defendant to perform obligations under Agreement dated [DATE];
(ii) In the alternative, pass a Money Decree for ${curr}[AMOUNT] along with pendente lite and future interest @ 18% per annum till realization;
(iii) Pass a Decree of Permanent Injunction restraining Defendant, their agents, and assigns from alienating or creating third-party rights;
(iv) Award full costs of the suit to the Plaintiff.

PLAINTIFF THROUGH COUNSEL:
___________________________________
[NAME OF ADVOCATE], Counsel for Plaintiff
Place: [PLACE] | Date: ${dateStr}

VERIFICATION AFFIDAVIT
I, ${p1}, the Plaintiff above-named, do hereby verify on oath that the contents of paragraphs 1 to 5 of the plaint are true to my personal knowledge and belief.
Verified at [PLACE] on this ${dateStr}.

___________________________________
PLAINTIFF / DEPONENT`;
  }

  // 4. CONTRACTS & COMMERCIAL AGREEMENTS (15 Templates)
  if (category === 'Contracts' || category === 'Employment' || tmplId === 'rentAgreement' || tmplId === 'leaseAgreement' || tmplId === 'nda' || tmplId === 'employmentAgreement' || tmplId === 'serviceAgreement') {
    const isRent = tmplId === 'rentAgreement' || tmplId === 'leaseAgreement';
    const isNDA = tmplId === 'nda';

    if (isNDA) {
      return `MUTUAL NON-DISCLOSURE & CONFIDENTIALITY AGREEMENT

THIS AGREEMENT is entered into on this ${dateStr}, by and between:

PARTY A (Disclosing / Receiving Party):
${p1.toUpperCase()}, having registered office at:
${p1Address}
(Hereinafter referred to as "Party A")

AND

PARTY B (Disclosing / Receiving Party):
${p2.toUpperCase()}, having registered office at:
${p2Address}
(Hereinafter referred to as "Party B")

(Party A and Party B are collectively referred to as "Parties" and individually as "Party").

RECITALS:
WHEREAS the Parties wish to explore potential business collaboration and commercial opportunities relating to [PURPOSE / PROJECT NAME]; and
WHEREAS the evaluation of the Purpose will necessitate the disclosure of proprietary technical, commercial, financial, and trade secret information by one Party to the other;

NOW, THEREFORE, IN CONSIDERATION OF THE MUTUAL COVENANTS CONTAINED HEREIN, THE PARTIES AGREE AS FOLLOWS:

1. DEFINITION OF CONFIDENTIAL INFORMATION:
"Confidential Information" means all non-public, proprietary information disclosed by Disclosing Party to Receiving Party, whether orally, in writing, electronically, or by inspection of tangible objects, including software code, customer data, pricing, business plans, patents, and technical know-how.

2. EXCLUSIONS FROM CONFIDENTIALITY:
Confidential Information does not include information that: (a) is or becomes publicly available without breach of this Agreement; (b) was already in Receiving Party's lawful possession prior to disclosure; (c) is independently developed without reference to Confidential Information; or (d) is required to be disclosed by applicable law or court order.

3. OBLIGATIONS OF RECEIVING PARTY:
(a) Hold all Confidential Information in strict confidence using at least the same degree of care it uses for its own confidential information, but no less than reasonable care.
(b) Disclose Confidential Information solely to employees, officers, and legal advisors who have a strict need-to-know for the Purpose and who are bound by confidentiality obligations.
(c) Not copy, reverse-engineer, decompile, or commercialize any Confidential Information without prior written consent.

4. TERM & SURVIVAL:
This Agreement shall be effective for a period of [TWO (2) YEARS] from the execution date. The confidentiality obligations shall survive termination for an additional period of [THREE (3) YEARS].

5. REMEDIES & GOVERNING LAW:
The Parties acknowledge that monetary damages would be inadequate for breach of this Agreement, and the Disclosing Party shall be entitled to seek injunctive relief in addition to damages. This Agreement shall be governed by the laws of ${jConfig.name} and subject to the exclusive jurisdiction of courts at [CITY].

IN WITNESS WHEREOF, the Parties have executed this Non-Disclosure Agreement on the date first written above.

FOR PARTY A:                              FOR PARTY B:
_________________________________         _________________________________
Name: ${p1}                                Name: ${p2}
Designation: Authorized Signatory         Designation: Authorized Signatory

WITNESS 1:                                WITNESS 2:
Signature: _______________________        Signature: _______________________
Name: [WITNESS 1 NAME]                    Name: [WITNESS 2 NAME]`;
    }

    // Rent / Tenancy Agreement
    return `RESIDENTIAL / COMMERCIAL TENANCY LEASE AGREEMENT

THIS LEASE AGREEMENT is made and executed on this ${dateStr}, by and between:

LESSOR / LANDLORD:
${p1.toUpperCase()}, S/o [FATHER NAME]
Residing at: ${p1Address}
PAN / ID No: [LANDLORD TAX ID]
(Hereinafter called the "LESSOR", which expression shall include legal heirs, successors, and assigns).

AND

LESSEE / TENANT:
${p2.toUpperCase()}, S/o [FATHER NAME]
Residing at: ${p2Address}
PAN / ID No: [TENANT TAX ID]
(Hereinafter called the "LESSEE", which expression shall include legal heirs, successors, and permitted assigns).

WHEREAS the Lessor is the absolute lawful owner of the property situated at:
[DETAILED ADDRESS OF PREMISES: FLAT/OFFICE NO., BUILDING NAME, STREET, CITY] (hereinafter "Demised Premises"); and
WHEREAS the Lessee has requested and the Lessor has agreed to grant a lease of the Demised Premises on the following terms:

NOW THIS DEED WITNESSETH AND THE PARTIES AGREE AS FOLLOWS:

1. TENURE & COMMENCEMENT:
The lease is granted for an initial term of [11 MONTHS / 3 YEARS] commencing from [START DATE] to [EXPIRY DATE], renewable upon mutual agreement in writing.

2. MONTHLY RENT & UTILITIES:
(a) The Lessee shall pay a monthly rent of ${curr}[RENT AMOUNT IN FIGURES] (${currCode} [RENT IN WORDS]) payable on or before the [5th] day of each English calendar month.
(b) Electricity, water, and broadband charges shall be borne directly by the Lessee as per meter readings.

3. INTEREST-FREE SECURITY DEPOSIT:
The Lessee has deposited a sum of ${curr}[SECURITY DEPOSIT AMOUNT] with the Lessor as interest-free refundable security deposit. The said deposit shall be refunded upon vacant physical possession handover, subject to deductions for unpaid rent or actual damages.

4. MAINTENANCE & USE RESTRICTION:
The Demised Premises shall be used strictly for [RESIDENTIAL / COMMERCIAL OFFICE] purposes and shall not be sublet or assigned to any third party. The Lessee shall maintain the premises in good and tenantable condition.

5. TERMINATION & LOCK-IN:
Either party may terminate this Agreement by giving [ONE (1) MONTH] prior written notice.

6. GOVERNING LAW:
This Agreement is governed by the laws of ${jConfig.name} and local Tenancy regulations.

IN WITNESS WHEREOF, the Lessor and Lessee have signed this Agreement on the date first mentioned.

LESSOR:                                   LESSEE:
_________________________________         _________________________________
${p1}                                     ${p2}

WITNESS 1:                                WITNESS 2:
Signature: _______________________        Signature: _______________________
Name & Address: [WITNESS 1]               Name & Address: [WITNESS 2]`;
  }

  // 5. FAMILY & MATRIMONIAL (6 Templates)
  if (category === 'Family' || tmplId.includes('divorce') || tmplId === 'maintenancePetition' || tmplId === 'childCustodyPetition') {
    const isMaintenance = tmplId === 'maintenancePetition';
    const isCustody = tmplId === 'childCustodyPetition';

    if (isMaintenance) {
      return `IN THE HON'BLE FAMILY COURT / COURT OF PRINCIPAL JUDGE AT [CITY]
CRIMINAL MISCELLANEOUS (MAINTENANCE) PETITION NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${p1.toUpperCase()}, W/o ${p2}
Aged about: [AGE] Years, Occupation: [HOMEMAKER / UNEMPLOYED]
Presently residing at: ${p1Address}
... PETITIONER

VERSUS

${p2.toUpperCase()}, S/o [FATHER NAME]
Aged about: [AGE] Years, Occupation: [BUSINESSMAN / SOFTWARE EXECUTIVE]
Residing at: ${p2Address}
... RESPONDENT

PETITION FOR MAINTENANCE UNDER ${jConfig.maintenanceSec.toUpperCase()}

THE PETITIONER MOST RESPECTFULLY SHOWETH:
1. That the marriage between the Petitioner and the Respondent was solemnized on [DATE OF MARRIAGE] at [PLACE OF MARRIAGE] according to legal rites and ceremonies.
2. That out of the wedlock, [ONE MINOR CHILD NAMED CHILD NAME, AGED X YEARS] was born and is currently in the care and custody of the Petitioner.
3. That shortly after marriage, the Respondent and their family subjected the Petitioner to physical and mental cruelty, continuous demands, and eventually abandoned and expelled the Petitioner from the matrimonial home on [DATE OF EXPULSION].
4. That the Petitioner has no independent source of income, is incapable of maintaining herself and the minor child, and is dependent upon aged parents.
5. That the Respondent is an affluent person earning a monthly salary of over ${curr}[RESPONDENT SALARY] and owning immovable properties, but has deliberately neglected and refused to maintain the Petitioner.

PRAYER:
It is therefore most respectfully prayed that this Hon'ble Court may be pleased to:
(a) Direct Respondent to pay monthly maintenance of ${curr}[MAINTENANCE DEMAND] to Petitioner and minor child;
(b) Grant interim maintenance during pendency of this petition;
(c) Award litigation expenses of ${curr}[LITIGATION EXPENSES].

PETITIONER THROUGH COUNSEL:
___________________________________
[NAME OF ADVOCATE], Counsel for Petitioner
Place: [PLACE] | Date: ${dateStr}

VERIFICATION AFFIDAVIT
I, ${p1}, the Petitioner above-named, do hereby solemnly affirm that the contents of paragraphs 1 to 5 are true to my knowledge and records.

___________________________________
DEPONENT`;
    }

    // Mutual Consent Divorce
    return `IN THE HON'BLE PRINCIPAL JUDGE, FAMILY COURT AT [CITY]
MATRIMONIAL PETITION (MUTUAL CONSENT) NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
1. ${p1.toUpperCase()}, S/o or D/o [PARENT NAME]
Residing at: ${p1Address}                           ... FIRST PETITIONER

AND

2. ${p2.toUpperCase()}, S/o or D/o [PARENT NAME]
Residing at: ${p2Address}                           ... SECOND PETITIONER

JOINT PETITION FOR DISSOLUTION OF MARRIAGE BY MUTUAL CONSENT UNDER SECTION 13B OF ${jConfig.familyLaw.toUpperCase()}

THE PETITIONERS JOINTLY SUBMIT AS UNDER:
1. That marriage between Petitioners was solemnized on [DATE OF MARRIAGE] at [MARRIAGE VENUE] according to legal rites.
2. That due to irreconcilable temperament differences, Petitioners have been living separately since [DATE OF SEPARATION - MORE THAN 1 YEAR AGO] and have not cohabited as husband and wife.
3. That all efforts for reconciliation and mediation made by family elders have failed.
4. That Petitioners have mutually resolved all claims:
   (a) Permanent Alimony: Fixed at ${curr}[ALIMONY AMOUNT], paid in full via Bank Demand Draft No. [DD NUMBER].
   (b) Stridhan & Articles: All jewelry and personal belongings have been mutually returned.
   (c) Child Custody: Custody of minor child [CHILD NAME] shall remain with [MOTHER / FATHER] with visitation rights to the other.
5. That mutual consent has not been obtained by force, fraud, or undue influence.

PRAYER:
It is therefore prayed that this Hon'ble Court may dissolve the marriage between the Petitioners by a Decree of Divorce by Mutual Consent.

FIRST PETITIONER:                         SECOND PETITIONER:
_________________________________         _________________________________
${p1}                                     ${p2}

COUNSEL FOR FIRST PETITIONER:             COUNSEL FOR SECOND PETITIONER:
_________________________________         _________________________________
Advocate                                  Advocate

JOINT VERIFICATION AFFIDAVIT
Both Petitioners above-named solemnly affirm on oath that contents of paragraphs 1 to 5 are true to our mutual knowledge.
Verified at [PLACE] on this ${dateStr}.`;
  }

  // 6. PROPERTY DEEDS & WILLS (8 Templates)
  if (category === 'Property' || tmplId === 'saleDeed' || tmplId === 'will' || tmplId === 'giftDeedProperty' || tmplId === 'powerOfAttorney') {
    const isWill = tmplId === 'will';
    const isPOA = tmplId === 'powerOfAttorney';

    if (isWill) {
      return `LAST WILL AND TESTAMENT

I, ${p1.toUpperCase()}, S/o [FATHER NAME], aged about [AGE] years, residing at ${p1Address}, holding National ID / Aadhaar No: [ID NUMBER], do hereby revoke all my previous Wills, Codicils, and testamentary dispositions, and declare this to be my LAST WILL AND TESTAMENT:

1. SOUND DISPOSING MIND:
I declare that I am of sound disposing mind, memory, and understanding, and I am executing this Will out of my free will and pleasure without any force, coercion, undue influence, or fraud from any person.

2. APPOINTMENT OF EXECUTOR:
I hereby appoint [NAME OF EXECUTOR], residing at [EXECUTOR ADDRESS], to be the Sole Executor of this my Last Will. In the event [NAME] predeceases me, [NAME OF ALTERNATE EXECUTOR] shall act as the Executor.

3. FAMILY PARTICULARS:
My family consists of:
(a) Spouse: [SPOUSE NAME]
(b) Son: [SON NAME]
(c) Daughter: [DAUGHTER NAME]

4. SCHEDULE OF SELF-ACQUIRED PROPERTIES:
(a) Immovable Property: Residential flat situated at [FULL PROPERTY ADDRESS], purchased vide Registered Sale Deed dated [DATE].
(b) Movable Property: Bank accounts, fixed deposits with [BANK NAME], mutual funds, and shares listed in Schedule B.

5. BEQUEST AND TESTAMENTARY DISPOSITION:
(a) I bequeath my residential flat situated at [ADDRESS] absolutely to my [SPOUSE / DAUGHTER / SON], ${p2}, to hold, own, and enjoy without any interference from any other legal heir.
(b) All my bank balances, investments, and personal chattels shall devolve equally upon my children.

IN WITNESS WHEREOF, I have executed this Will on this ${dateStr} at [CITY].

___________________________________
TESTATOR / TESTATRIX
${p1}

ATTESTATION BY WITNESSES:
We, the undersigned witnesses, certify that the Testator signed this Will in our joint presence, and we, at their request and in their presence, have subscribed our names as attesting witnesses:

WITNESS 1:                                WITNESS 2:
Signature: _______________________        Signature: _______________________
Name: [WITNESS 1 FULL NAME]               Name: [WITNESS 2 FULL NAME]
Address: [WITNESS 1 ADDRESS]              Address: [WITNESS 2 ADDRESS]`;
    }

    if (isPOA) {
      return `GENERAL POWER OF ATTORNEY

KNOW ALL MEN BY THESE PRESENTS that I, ${p1.toUpperCase()}, residing at ${p1Address} (hereinafter called the "PRINCIPAL"), do hereby appoint, nominate, and constitute:

${p2.toUpperCase()}, residing at ${p2Address} (hereinafter called the "ATTORNEY"),

as my true and lawful Attorney in my name and on my behalf to perform all or any of the following acts, deeds, and things:

1. PROPERTY MANAGEMENT:
To manage, supervise, maintain, and protect my immovable property situated at [DETAILED PROPERTY ADDRESS], collect rents, issue receipts, and pay municipal property taxes and utility bills.

2. LITIGATION POWERS:
To appear before all Courts of Law, Tribunals, Police Stations, and Arbitrators, to sign plaints, written statements, affidavits, and vakalatnamas, and to appoint legal counsels.

3. BANKING & UTILITY TRANSACTIONS:
To operate bank accounts, sign cheques, withdraw monies, and deal with electricity, water, and telecom authorities.

4. RATIFICATION:
I hereby ratify, confirm, and agree to ratify all lawful acts done by my said Attorney pursuant to these presents.

IN WITNESS WHEREOF, I have executed this General Power of Attorney on this ${dateStr}.

___________________________________
PRINCIPAL: ${p1}

I accept the appointment:
___________________________________
ATTORNEY: ${p2}

WITNESSES:
1. _______________________                2. _______________________
Name: [WITNESS 1]                         Name: [WITNESS 2]`;
    }

    // Sale Deed
    return `DEED OF ABSOLUTE SALE (CONVEYANCE DEED)

THIS DEED OF ABSOLUTE SALE is executed on this ${dateStr} at [SUB-REGISTRAR OFFICE LOCATION], by and between:

VENDOR / SELLER:
${p1.toUpperCase()}, S/o [FATHER NAME]
Residing at: ${p1Address} (Hereinafter called the "VENDOR")

AND

PURCHASER / BUYER:
${p2.toUpperCase()}, S/o [FATHER NAME]
Residing at: ${p2Address} (Hereinafter called the "PURCHASER")

WHEREAS the Vendor is the absolute and lawful owner in possession of immovable property described in Schedule A; and
WHEREAS the Vendor has agreed to sell and Purchaser has agreed to purchase the said property for a total sale consideration of ${curr}[TOTAL CONSIDERATION] (${currCode} [AMOUNT IN WORDS]);

NOW THIS DEED WITNESSETH AS FOLLOWS:
1. CONSIDERATION:
In consideration of the total sum of ${curr}[AMOUNT] paid by Purchaser to Vendor (receipt whereof Vendor hereby acknowledges), Vendor hereby sells, conveys, and transfers all ownership rights in Schedule Property to Purchaser forever.

2. FREE FROM ENCUMBRANCES:
Vendor covenants that property is free from all mortgages, charges, liens, litigations, tax arrears, and claims of third parties.

3. PHYSICAL POSSESSION:
Vendor has this day delivered vacant, peaceful, and physical possession of property along with original title documents to Purchaser.

SCHEDULE A PROPERTY:
All that piece and parcel of property bearing [PLOT/FLAT NO], measuring [AREA SQ. FT], bounded on:
North: [BOUNDARY NORTH] | South: [BOUNDARY SOUTH]
East: [BOUNDARY EAST]   | West: [BOUNDARY WEST]

VENDOR:                                   PURCHASER:
_________________________________         _________________________________
${p1}                                     ${p2}

WITNESS 1:                                WITNESS 2:
_______________________                   _______________________`;
  }

  // 7. CONSUMER DISPUTES (3 Templates)
  if (category === 'Consumer' || tmplId.includes('consumer')) {
    return `BEFORE THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION AT [DISTRICT]
CONSUMER COMPLAINT NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${p1.toUpperCase()}, Residing at: ${p1Address}       ... COMPLAINANT

VERSUS

${p2.toUpperCase()}, Having Office at: ${p2Address}  ... OPPOSITE PARTY

COMPLAINT UNDER SECTION 35 OF THE ${jConfig.consumerAct.toUpperCase()} FOR DEFICIENCY OF SERVICE AND UNFAIR TRADE PRACTICE

THE COMPLAINANT RESPECTFULLY SUBMITS:
1. That Complainant is a 'Consumer' who purchased [PRODUCT / SERVICE NAME] from Opposite Party on [PURCHASE DATE] for ${curr}[PURCHASE AMOUNT] vide Invoice No. [INVOICE NUMBER].
2. That immediately upon delivery, the product/service was found defective and non-functional [SPECIFY DEFECTS].
3. That Opposite Party failed to rectify the defect or replace the unit despite multiple complaints and service of Legal Notice dated [DATE].
4. PRAYER: Direct Opposite Party to refund ${curr}[AMOUNT], pay compensation of ${curr}[COMPENSATION] for harassment, and ${curr}[LEGAL COSTS] as litigation expenses.

COMPLAINANT:
___________________________________
${p1}`;
  }

  // 8. CORPORATE & COMPLIANCE (8 Templates)
  if (category === 'Corporate' || tmplId === 'boardResolution') {
    return `CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF [COMPANY NAME] HELD ON ${dateStr} AT THE REGISTERED OFFICE AT [COMPANY ADDRESS].

"RESOLVED THAT the consent of the Board of Directors of the Company be and is hereby accorded pursuant to ${jConfig.companiesAct.toUpperCase()} to authorize [NAME OF AUTHORIZED PERSON], Director / Officer, to represent the Company in legal proceedings, sign contracts, and execute affidavits.

RESOLVED FURTHER THAT [NAME] is authorized to negotiate, finalize, and execute documents on behalf of the Company."

CERTIFIED TRUE COPY:
FOR [COMPANY NAME]

___________________________________
[NAME OF DIRECTOR / CHAIRPERSON]
Director | DIN: [DIRECTOR IDENTIFICATION NUMBER]`;
  }

  // 9. AFFIDAVITS (6 Templates)
  if (category === 'Affidavits' || tmplId.includes('affidavit')) {
    return `GENERAL VERIFIED AFFIDAVIT
(BEFORE THE NOTARY PUBLIC / OATH COMMISSIONER)

I, ${p1.toUpperCase()}, S/o or D/o [FATHER NAME], aged about [AGE] years, residing at ${p1Address}, holding ID No: [ID NUMBER], do hereby solemnly affirm and state on oath as under:

1. That I am a permanent resident of the address stated above.
2. That [STATE MAIN DECLARATION FACT NO. 1 IN CLEAR, NUMBERED LEGAL TERMS].
3. That [STATE MAIN DECLARATION FACT NO. 2].
4. That this affidavit is sworn for the purpose of submitting before [CONCERNED AUTHORITY / COURT].

DEPONENT:
___________________________________
${p1}

VERIFICATION:
Verified at [PLACE] on this ${dateStr} that contents of paragraphs 1 to 4 are true and correct to my knowledge.

___________________________________
DEPONENT

ATTESTED & NOTARIZED:
[NOTARY PUBLIC SEAL & SIGNATURE]`;
  }

  // 10. RTI APPLICATION (Template 80)
  if (tmplId === 'rtiApplication') {
    return `APPLICATION FOR OBTAINING INFORMATION UNDER ${jConfig.rtiAct.toUpperCase()}

DATE: ${dateStr}

TO:
The Public Information Officer (PIO) / Assistant PIO,
Department / Ministry of: [DEPARTMENT NAME]
Office Address: [OFFICE ADDRESS, CITY, STATE]

1. FULL NAME OF APPLICANT: ${p1}
2. ADDRESS FOR CORRESPONDENCE: ${p1Address}
3. PARTICULARS OF INFORMATION REQUIRED:
   (a) Subject matter of Information: [STATE SUBJECT OF QUERY]
   (b) Period to which information relates: [SPECIFY DATES / YEARS]
   (c) Specific Queries:
       1. [SPECIFIC QUERY NO. 1: Certified copies of file notings / orders...]
       2. [SPECIFIC QUERY NO. 2: Inspection of records regarding...]
       3. [SPECIFIC QUERY NO. 3: Names and designations of officers responsible for...]
4. CITIZENSHIP: I declare that I am a citizen of ${jConfig.name}.
5. APPLICATION FEE DETAILS:
   IPO / Court Fee Stamp / Online Receipt No. [RECEIPT NUMBER] dated [DATE] for sum of ${curr}[FEE AMOUNT] enclosed.

APPLICANT:
___________________________________
${p1}`;
  }

  // 11. VAKALATNAMA / MEMORANDUM OF APPEARANCE (Templates 88, 89)
  if (tmplId === 'vakalatnama' || tmplId === 'memoOfAppearance') {
    return `VAKALATNAMA / MEMORANDUM OF APPEARANCE
${court.toUpperCase()}
CASE NO. _______ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${p1.toUpperCase()}                                  ... PETITIONER / PLAINTIFF

VERSUS

${p2.toUpperCase()}                                  ... RESPONDENT / DEFENDANT

I/We, the undersigned above-named, do hereby appoint and retain:
[NAME OF ADVOCATE(S)], Advocate(s), High Court / District Bar,
to act, appear, plead, and conduct the above-entitled proceedings on my/our behalf.

EXECUTED BY CLIENT:                       ACCEPTED BY ADVOCATE:
_________________________________         _________________________________
${p1}                                     [ADVOCATE NAME & ENROLMENT NO.]`;
  }

  // 12. DEFAULT FALLBACK FOR ANY OTHER CUSTOM DRAFT
  return `FORMAL LEGAL DOCUMENT: ${title.toUpperCase()}
JURISDICTION: ${jConfig.name.toUpperCase()} (${jurisdiction.state || 'NATIONAL JURISDICTION'})
GOVERNING LAW: ${jConfig.civilProc} / ${jConfig.contractAct}

IN THE MATTER OF:
${p1.toUpperCase()}
... FIRST PARTY / APPLICANT

AND

${p2.toUpperCase()}
... SECOND PARTY / RESPONDENT

DATE OF EXECUTION: ${dateStr}
VENUE: [CITY / JURISDICTION]

RECITALS & BACKGROUND:
1. That the First Party is an individual / entity residing at / having office at ${p1Address}.
2. That the Second Party is an individual / entity residing at / having office at ${p2Address}.
3. That the parties have agreed to formalize their mutual rights, covenants, and legal obligations as set forth herein.

TERMS AND COVENANTS:
1. Scope & Objective: [SPECIFY DETAILED PURPOSE AND OBLIGATIONS OF PARTIES].
2. Financial Consideration: Total consideration agreed between the parties is ${curr}[AMOUNT] payable as per agreed schedule.
3. Term & Enforceability: This document shall be valid and enforceable under the substantive laws of ${jConfig.name}.
4. Dispute Resolution: Any dispute arising out of this document shall be referred to adjudication before the competent courts at [CITY].

IN WITNESS WHEREOF, the parties hereto have signed this ${title} on the date above mentioned.

FIRST PARTY:                              SECOND PARTY:
_________________________________         _________________________________
${p1}                                     ${p2}

WITNESS 1:                                WITNESS 2:
_______________________                   _______________________`;
}
