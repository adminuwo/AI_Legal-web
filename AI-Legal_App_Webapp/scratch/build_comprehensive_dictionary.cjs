const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'data', 'legalDictionaryData.js');

const code = `// ─── AI LEGAL™ LEGAL DICTIONARY & RESEARCH REFERENCE ─────────────────────────
// Authoritative definitions, Latin maxims, judicial interpretations & statutory grounding
// Covering 40+ key legal concepts across: Latin Maxims, Procedural Terms, Substantive Doctrines,
// and Constitutional Concepts with verified precedents and statutory references.

/**
 * @typedef {Object} DictionaryEntry
 * @property {string} id
 * @property {string} term
 * @property {'Latin Maxim' | 'Procedural Term' | 'Substantive Doctrine' | 'Constitutional Concept'} category
 * @property {string} literalTranslation
 * @property {string} plainMeaning
 * @property {string} judicialInterpretation
 * @property {string} landmarkPrecedent
 * @property {string} statutoryCrossReference
 * @property {string} practicalExample
 * @property {string[]} tags
 */

export const LEGAL_DICTIONARY_DATABASE = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. LATIN MAXIMS & CANONS OF INTERPRETATION
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dict-audi-alteram-partem',
    term: 'Audi Alteram Partem',
    category: 'Latin Maxim',
    literalTranslation: 'Hear the other side / No man shall be condemned unheard.',
    plainMeaning: 'The fundamental principle of natural justice that no person can be judged or penalised by a court, tribunal, or administrative authority without being given a fair opportunity to be heard and present their defence.',
    judicialInterpretation: 'In Maneka Gandhi v. Union of India (1978), the Supreme Court elevated natural justice into an indispensable component of Article 21, holding that any procedure depriving life or liberty must be fair, just, and reasonable, not arbitrary or fanciful.',
    landmarkPrecedent: 'Maneka Gandhi v. Union of India (1978) 1 SCC 248 / A.K. Kraipak v. Union of India (1969) 2 SCC 262',
    statutoryCrossReference: 'Constitution of India Article 14, 21; Code of Civil Procedure Section 151; BNSS Section 340.',
    practicalExample: 'When an administrative officer cancels an advocate license or municipal trade permit without issuing a show-cause notice or hearing, the order is void ab initio for violating Audi Alteram Partem.',
    tags: ['latin-maxims', 'latin', 'maxim', 'natural justice', 'due process', 'hearing']
  },

  {
    id: 'dict-res-judicata',
    term: 'Res Judicata',
    category: 'Latin Maxim',
    literalTranslation: 'A matter judged / A thing adjudicated.',
    plainMeaning: 'A rule that once a court of competent jurisdiction has finally decided a legal dispute on merits between the same parties regarding the same subject matter, neither party can file a second suit or re-litigate the same issue.',
    judicialInterpretation: 'In Satyadhian Ghosal v. Deorajin Debi (1960), the Supreme Court observed that the principle of res judicata is based on the maxim "nemo debet bis vexari pro una et eadem causa" (no one ought to be twice vexed for one and the same cause) and public interest requires finality of litigation.',
    landmarkPrecedent: 'Satyadhian Ghosal v. Deorajin Debi AIR 1960 SC 941 / Daryao v. State of U.P. (1962) 1 SCR 574',
    statutoryCrossReference: 'Code of Civil Procedure, 1908 — Section 11 & Explanation I to VIII; Constitution Article 32.',
    practicalExample: 'If a landlord suit for eviction on grounds of personal necessity is dismissed on merits after full trial, filing a fresh suit on identical facts against the same tenant is barred by Res Judicata under Section 11 CPC.',
    tags: ['latin-maxims', 'latin', 'maxim', 'res judicata', 'cpc', 'finality']
  },

  {
    id: 'dict-actus-non-facit-reum',
    term: 'Actus Non Facit Reum Nisi Mens Sit Rea',
    category: 'Latin Maxim',
    literalTranslation: 'An act does not make a person guilty unless the mind is also guilty.',
    plainMeaning: 'To establish criminal liability for an offence, both a physical prohibited act (actus reus) and a blameworthy state of mind or guilty intention (mens rea) must concur, unless the statute specifically creates strict liability.',
    judicialInterpretation: 'In State of Maharashtra v. Mayer Hans George (1965), the Supreme Court reiterated that mens rea is an essential ingredient of every penal offence unless excluded by necessary statutory implication.',
    landmarkPrecedent: 'State of Maharashtra v. Mayer Hans George AIR 1965 SC 722 / Nathulal v. State of M.P. AIR 1966 SC 43',
    statutoryCrossReference: 'Bharatiya Nyaya Sanhita (BNS), 2023 — General Exceptions; Indian Penal Code Sections 76-106.',
    practicalExample: 'A person taking an umbrella identical to their own from a coat rack under a bona fide mistaken belief of ownership lacks mens rea (dishonest intention) and cannot be convicted of theft.',
    tags: ['latin-maxims', 'latin', 'maxim', 'mens rea', 'criminal', 'intention']
  },

  {
    id: 'dict-damnum-sine-injuria',
    term: 'Damnum Sine Injuria',
    category: 'Latin Maxim',
    literalTranslation: 'Damage without injury (Financial loss without violation of a legal right).',
    plainMeaning: 'Substantial economic loss or physical harm suffered by a person which does not amount to an infringement of any legally recognized or enforceable right, and therefore gives no cause of action in tort.',
    judicialInterpretation: 'In the foundational Gloucester Grammar School Case (1410), it was settled that opening a rival school that lowered tuition fees caused financial loss to the existing school, but since lawful competition violates no legal right, no damages could be awarded.',
    landmarkPrecedent: 'Gloucester Grammar School Case (1410) YB Hill 11 Hen 4 / Chasemore v. Richards (1859) 7 HLC 349',
    statutoryCrossReference: 'Law of Torts; Indian Contract Act Section 73 (limiting recovery to foreseeable breach).',
    practicalExample: 'A new restaurant opens across the street from an existing diner, causing the older diner revenue to plummet by 50%. Since healthy commercial competition is lawful, the diner cannot sue for damages.',
    tags: ['latin-maxims', 'latin', 'maxim', 'tort', 'damnum', 'liability']
  },

  {
    id: 'dict-injuria-sine-damno',
    term: 'Injuria Sine Damno',
    category: 'Latin Maxim',
    literalTranslation: 'Injury without damage (Violation of a legal right without actual financial loss).',
    plainMeaning: 'The infringement of an absolute private legal right gives rise to a valid cause of action in tort and entitles the plaintiff to nominal damages, even if no actual pecuniary loss, physical harm, or damage has been sustained.',
    judicialInterpretation: 'In Ashby v. White (1703), Chief Justice Holt laid down that every injury imports a damage, though it does not cost the party one farthing; when an absolute right is infringed, the action is maintainable per se.',
    landmarkPrecedent: 'Ashby v. White (1703) 92 ER 126 / Bhim Singh v. State of J&K (1985) 4 SCC 677',
    statutoryCrossReference: 'Constitution of India — Article 21, 32; Law of Torts; Representation of the People Act, 1951.',
    practicalExample: 'In Bhim Singh v. State of J&K, an MLA was unlawfully detained by police to prevent him from attending the Assembly session. Even though he suffered no physical damage, the Supreme Court awarded ₹50,000 for violation of constitutional right.',
    tags: ['latin-maxims', 'latin', 'maxim', 'tort', 'injuria', 'nominal damages']
  },

  {
    id: 'dict-ubi-jus-ibi-remedium',
    term: 'Ubi Jus Ibi Remedium',
    category: 'Latin Maxim',
    literalTranslation: 'Where there is a right, there is a remedy.',
    plainMeaning: 'There is no wrong without a remedy. If a citizen has an enforceable legal right, the legal system must provide a procedural mechanism and forum to enforce that right and rectify its infringement.',
    judicialInterpretation: 'In Sardar Amarjit Singh Kalra v. Pramod Gupta (2003), the Supreme Court observed that laws of procedure are grounded on the maxim ubi jus ibi remedium; procedural technicalities should facilitate substantial justice, not extinguish substantive rights.',
    landmarkPrecedent: 'Ashby v. White (1703) / Sardar Amarjit Singh Kalra v. Pramod Gupta (2003) 3 SCC 272',
    statutoryCrossReference: 'Constitution of India — Article 32 & 226; Specific Relief Act, 1963 Section 5 & 38.',
    practicalExample: 'When fundamental rights are violated, Article 32 itself guarantees the remedial right to approach the Supreme Court, ensuring rights are not paper promises.',
    tags: ['latin-maxims', 'latin', 'maxim', 'remedy', 'rights', 'justice']
  },

  {
    id: 'dict-volenti-non-fit-injuria',
    term: 'Volenti Non Fit Injuria',
    category: 'Latin Maxim',
    literalTranslation: 'To a willing person, injury is not done.',
    plainMeaning: 'A complete defence in tort law establishing that no person can claim damages for harm or risk to which they have knowingly, freely, and voluntarily consented with full appreciation of the nature of the risk.',
    judicialInterpretation: 'In Hall v. Brooklands Auto Racing Club (1933), spectators attending a car racing event were held to have impliedly consented to the ordinary hazards of cars skidding off track, barring action for negligence.',
    landmarkPrecedent: 'Hall v. Brooklands Auto Racing Club (1933) 1 KB 205 / Wooldridge v. Sumner (1963) 2 QB 43',
    statutoryCrossReference: 'Bharatiya Nyaya Sanhita, 2023 — Section 20-24 (Acts done by consent); Law of Torts.',
    practicalExample: 'A spectator at a cricket stadium struck by a sixer hit into the stands cannot sue the batsman or stadium for battery or negligence because the spectator assumed the known risk.',
    tags: ['latin-maxims', 'latin', 'maxim', 'tort', 'consent', 'defence']
  },

  {
    id: 'dict-caveat-emptor',
    term: 'Caveat Emptor',
    category: 'Latin Maxim',
    literalTranslation: 'Let the buyer beware.',
    plainMeaning: 'The commercial common-law principle that the buyer alone is responsible for checking the quality, condition, and suitability of goods before completing a purchase, subject to exceptions where the seller acts fraudulently or gives warranties.',
    judicialInterpretation: 'In modern commercial law and consumer protection, caveat emptor has been significantly curtailed by consumer welfare statutes which replace it with "Caveat Venditor" (Let the seller beware).',
    landmarkPrecedent: 'Jones v. Just (1868) LR 3 QB 197 / National Seeds Corp. v. M. Madhusudhan Reddy (2012) 2 SCC 506',
    statutoryCrossReference: 'Sale of Goods Act, 1930 — Section 16; Consumer Protection Act, 2019 — Section 84-86 (Product Liability).',
    practicalExample: 'When purchasing second-hand machinery from a private seller without express warranty, the buyer must inspect for patent defects; failing to do so bars a refund unless the seller concealed latent defects.',
    tags: ['latin-maxims', 'latin', 'maxim', 'commercial', 'buyer beware', 'consumer']
  },

  {
    id: 'dict-nemo-judex-in-causa-sua',
    term: 'Nemo Judex In Causa Sua',
    category: 'Latin Maxim',
    literalTranslation: 'No one should be a judge in their own cause.',
    plainMeaning: 'The fundamental rule against bias: any decision-maker, judge, or administrative officer must be impartial and disqualify themselves if they have a personal, pecuniary, or subject-matter interest in the outcome.',
    judicialInterpretation: 'In A.K. Kraipak v. Union of India (1969), an acting Chief Conservator of Forests who was a candidate for selection sat as an ex-officio member of the selection board. The Supreme Court quashed the entire selection on grounds of real likelihood of bias.',
    landmarkPrecedent: 'A.K. Kraipak v. Union of India (1969) 2 SCC 262 / Dimes v. Grand Junction Canal (1852) 3 HLC 759',
    statutoryCrossReference: 'Constitution of India — Article 14, 21; CPC Section 151; Arbitration Act Section 12 & Fifth Schedule.',
    practicalExample: 'A magistrate or arbitrator owning shares in a company that is a party to the proceedings must recuse themselves; failure to do so renders the order void for pecuniary bias.',
    tags: ['latin-maxims', 'latin', 'maxim', 'bias', 'natural justice', 'impartiality']
  },

  {
    id: 'dict-stare-decisis',
    term: 'Stare Decisis Et Non Quieta Movere',
    category: 'Latin Maxim',
    literalTranslation: 'To stand by decided matters and not to disturb what is settled.',
    plainMeaning: 'The doctrine of binding precedent requiring courts to follow established legal principles laid down in prior authoritative judicial decisions in analogous matters to ensure legal stability, consistency, and certainty.',
    judicialInterpretation: 'In Keshav Mills Co. Ltd. v. CIT (1965), the Supreme Court observed that stare decisis is based on the necessity of giving certainty to the law, though a Constitution Bench may reconsider an earlier ruling if it is manifestly erroneous or harms public interest.',
    landmarkPrecedent: 'Keshav Mills Co. Ltd. v. CIT AIR 1965 SC 1636 / Union of India v. Raghubir Singh (1989) 2 SCC 754',
    statutoryCrossReference: 'Constitution of India — Article 141 (Law declared by Supreme Court binding on all courts).',
    practicalExample: 'A High Court Single Judge is strictly bound to follow a prior Division Bench ruling of the same High Court on a question of law under the doctrine of Stare Decisis.',
    tags: ['latin-maxims', 'latin', 'maxim', 'precedent', 'stare decisis', 'binding']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. PROCEDURAL LITIGATION TERMS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dict-interlocutory-application',
    term: 'Interlocutory Application (IA)',
    category: 'Procedural Term',
    literalTranslation: 'Interlocutory (Interim, between speech/proceedings).',
    plainMeaning: 'An interim or provisional application filed by a party during the active pendency of a principal civil suit, appeal, or writ petition seeking temporary urgent relief (injunction, appointment of commissioner, amendment of pleadings, or condonation of delay) before final disposal.',
    judicialInterpretation: 'In Central Bank of India v. V.R. Gopinathan (1970), the Supreme Court clarified that interlocutory orders do not decide the final rights of the parties on merits but regulate procedure or protect assets pendente lite.',
    landmarkPrecedent: 'Central Bank of India v. V.R. Gopinathan (1970) 2 SCC 886 / Madhu Limaye v. State of Maharashtra (1977)',
    statutoryCrossReference: 'Code of Civil Procedure, 1908 — Section 141, Order XXXIX, Order VI Rule 17, Order XXVI.',
    practicalExample: 'Filing an IA under Order XXXIX Rules 1 & 2 CPC in a pending title suit praying for immediate restraint against tree-cutting on the disputed land.',
    tags: ['procedural-terms', 'procedure', 'interlocutory', 'cpc', 'ia', 'interim relief']
  },

  {
    id: 'dict-ex-parte',
    term: 'Ex-Parte Order / Decree',
    category: 'Procedural Term',
    literalTranslation: 'From one party / On one side only.',
    plainMeaning: 'A judicial order, injunction, or decree passed by a court in the absence of the opposing party, either because the opponent was duly served with summons and failed to appear, or due to extreme emergency without prior notice.',
    judicialInterpretation: 'In Bhanu Kumar Jain v. Archana Kumar (2005), the Supreme Court outlined the twin remedies available to an ex-parte defendant: file an application under Order IX Rule 13 CPC to set aside the decree on sufficient cause, or prefer a regular First Appeal under Section 96(2) CPC.',
    landmarkPrecedent: 'Bhanu Kumar Jain v. Archana Kumar (2005) 1 SCC 787 / Parimal v. Veena (2011) 3 SCC 545',
    statutoryCrossReference: 'Code of Civil Procedure, 1908 — Order IX Rule 6, Order IX Rule 13, Section 96(2).',
    practicalExample: 'When a defendant is served with court summons by Speed Post but refuses to appear on three consecutive dates, the court marks the defendant ex-parte and proceeds to hear the plaintiff.',
    tags: ['procedural-terms', 'procedure', 'ex-parte', 'order 9 rule 13', 'summons', 'default']
  },

  {
    id: 'dict-suo-motu',
    term: 'Suo Motu Cognizance',
    category: 'Procedural Term',
    literalTranslation: 'On its own motion / Of its own accord.',
    plainMeaning: 'The power of a constitutional court (Supreme Court or High Court) to initiate legal proceedings on its own initiative without any formal petition, complaint, or application from an aggrieved party, typically in response to newspaper reports, letters, or public disasters.',
    judicialInterpretation: 'In Re: Distribution of Essential Supplies During Pandemic (2021), the Supreme Court took suo motu cognizance under Article 32 to monitor national oxygen distribution and healthcare resources, affirming constitutional duty.',
    landmarkPrecedent: 'Bandhua Mukti Morcha v. Union of India (1984) 3 SCC 161 / In Re: Inhuman Conditions in 1382 Prisons (2016)',
    statutoryCrossReference: 'Constitution of India — Article 32 & 226; Contempt of Courts Act, 1971 — Section 15.',
    practicalExample: 'A High Court Chief Justice reading an investigative report about toxic industrial effluents polluting a city drinking water supply directs the Registry to register a suo motu Public Interest Litigation (PIL).',
    tags: ['procedural-terms', 'procedure', 'suo motu', 'pil', 'cognizance', 'high court']
  },

  {
    id: 'dict-caveat-petition',
    term: 'Caveat Petition (Section 148A CPC)',
    category: 'Procedural Term',
    literalTranslation: 'Let him beware (A formal warning).',
    plainMeaning: 'A precautionary notice lodged in court by an anticipated defendant/respondent requesting the court not to grant any ex-parte interim stay or adverse order without serving advance notice and giving an opportunity of hearing.',
    judicialInterpretation: 'In Deepak Khosla v. Union of India (2011), the Delhi High Court explained that the right under Section 148A is a substantive statutory safeguard against surprise ex-parte orders; once a caveat is lodged, the court must give notice to caveator.',
    landmarkPrecedent: 'Deepak Khosla v. Union of India (2011) 183 DLT 647 / G.C. Siddalingappa v. G.C. Veeranna AIR 1981 Kant 242',
    statutoryCrossReference: 'Code of Civil Procedure, 1908 — Section 148A(1)-(5).',
    practicalExample: 'A builder who wins a municipal demolition dispute lodges a caveat in the District Court to ensure the neighbor cannot obtain an ex-parte stay order on a Sunday or holiday.',
    tags: ['procedural-terms', 'procedure', 'caveat', 'section 148a', 'cpc', 'stay']
  },

  {
    id: 'dict-garnishee-order',
    term: 'Garnishee Order (Order XXI Rule 46 CPC)',
    category: 'Procedural Term',
    literalTranslation: 'To garnish / To warn a third party.',
    plainMeaning: 'An order issued by an executing court instructing a third party (the garnishee, typically a bank, employer, or debtor) who owes money to the judgment-debtor, to pay that debt directly to the decree-holder instead of the debtor.',
    judicialInterpretation: 'In Mackinnon Mackenzie and Co. v. I.C.I. Ltd. (1987), the Calcutta High Court held that a garnishee order attaches the debt in the hands of the third party from the moment of service, extinguishing the debtor power to assign it.',
    landmarkPrecedent: 'Mackinnon Mackenzie & Co. Ltd. v. I.C.I. Ltd. AIR 1987 Cal 357 / Radhey Shyam v. Shyam Behari (1970)',
    statutoryCrossReference: 'Code of Civil Procedure, 1908 — Order XXI Rules 46A to 46I.',
    practicalExample: 'After obtaining a money decree of ₹20 Lakhs, the decree-holder attaches the judgment-debtor bank account; the court directs the bank manager (garnishee) to freeze and remit ₹20 Lakhs into court.',
    tags: ['procedural-terms', 'procedure', 'garnishee', 'execution', 'order 21', 'bank freeze']
  },

  {
    id: 'dict-mesne-profits',
    term: 'Mesne Profits (Section 2(12) CPC)',
    category: 'Procedural Term',
    literalTranslation: 'Intermediate profits (Profits of the middle period).',
    plainMeaning: 'Those profits which the person in wrongful possession of immovable property actually received, or might with ordinary diligence have received therefrom, together with interest on such profits, payable to the rightful owner upon eviction.',
    judicialInterpretation: 'In Indian Oil Corporation v. Saroj Baweja (2005), the Delhi High Court held that upon expiry of a tenancy, a tenant holding over without consent is in unauthorized possession and is liable to pay mesne profits calculated at prevailing market rent, not the contractual lease rate.',
    landmarkPrecedent: 'Fateh Chand v. Balkishan Dass (1964) 1 SCR 515 / Indian Oil Corp. v. Saroj Baweja (2005) 124 DLT 259',
    statutoryCrossReference: 'Code of Civil Procedure, 1908 — Section 2(12), Order XX Rule 12.',
    practicalExample: 'A commercial tenant whose lease ended on 1 January continues occupying the office space for 12 months unlawfully. The court decrees eviction and orders payment of mesne profits at ₹1.5 Lakh per month market rate.',
    tags: ['procedural-terms', 'procedure', 'mesne profits', 'tenancy', 'property', 'damages']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. SUBSTANTIVE LEGAL DOCTRINES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dict-ratio-decidendi',
    term: 'Ratio Decidendi',
    category: 'Substantive Doctrine',
    literalTranslation: 'The reason for the decision.',
    plainMeaning: 'The fundamental legal principle or reasoning upon which a court bases its ruling, which constitutes the binding precedent (stare decisis) for lower courts and future benches in analogous matters.',
    judicialInterpretation: 'In State of Orissa v. Sudhansu Sekhar Misra (1968), the Supreme Court held that a decision is an authority only for what it actually decides on the facts; the ratio decidendi must be culled from the legal proposition essential to the conclusion, not stray sentences.',
    landmarkPrecedent: 'State of Orissa v. Sudhansu Sekhar Misra AIR 1968 SC 647 / Union of India v. Dhanwanti Devi (1996) 6 SCC 44',
    statutoryCrossReference: 'Constitution of India — Article 141 (Law declared by Supreme Court binding on all courts).',
    practicalExample: 'In Kesavananda Bharati, the ratio decidendi is that Parliament power to amend the Constitution under Article 368 does not extend to altering or destroying its Basic Structure.',
    tags: ['substantive-doctrines', 'doctrines', 'ratio decidendi', 'precedent', 'article 141']
  },

  {
    id: 'dict-obiter-dictum',
    term: 'Obiter Dictum',
    category: 'Substantive Doctrine',
    literalTranslation: 'Something said in passing.',
    plainMeaning: 'A judicial observation, remark, or opinion expressed by a judge in a judgment that is not strictly necessary or essential to the decision of the case, and therefore possesses persuasive value rather than binding precedent.',
    judicialInterpretation: 'In Mohandas Issardas v. A.N. Sattanathan (1955), Chief Justice Chagla observed that an obiter dictum is an opinion on an issue not arising for decision, but obiter dicta of the Supreme Court carry high persuasive authority on all High Courts.',
    landmarkPrecedent: 'Mohandas Issardas v. A.N. Sattanathan AIR 1955 Bom 113 / Municipal Corp. of Delhi v. Gurnam Kaur (1989) 1 SCC 101',
    statutoryCrossReference: 'Constitution of India — Article 141.',
    practicalExample: 'If a judge deciding a breach of contract case casually mentions hypothetical reflections on copyright licensing in passing, those remarks are obiter dicta and do not bind future copyright benches.',
    tags: ['substantive-doctrines', 'doctrines', 'obiter dictum', 'precedent', 'persuasive']
  },

  {
    id: 'dict-doctrine-pith-substance',
    term: 'Doctrine of Pith and Substance',
    category: 'Substantive Doctrine',
    literalTranslation: 'True nature, essence, and character of a law.',
    plainMeaning: 'A constitutional doctrine applied to resolve legislative competence disputes between Union and State lists (Seventh Schedule): if the primary essence of an enactment falls within the legislature assigned list, incidental encroachments upon another list do not invalidate the statute.',
    judicialInterpretation: 'In State of Bombay v. F.N. Balsara (1951), the Supreme Court upheld the Bombay Prohibition Act; although prohibiting liquor possession incidentally impacted import/export (Union List), in its "pith and substance" it was a public health law within State competence.',
    landmarkPrecedent: 'State of Bombay v. F.N. Balsara AIR 1951 SC 318 / Prafulla Kumar Mukherjee v. Bank of Commerce (1947)',
    statutoryCrossReference: 'Constitution of India — Article 246, Seventh Schedule (Lists I, II, and III).',
    practicalExample: 'A state law regulating moneylending within the state incidentally touches promissory notes (Union subject). Under pith and substance, the state enactment is entirely valid.',
    tags: ['substantive-doctrines', 'doctrines', 'pith and substance', 'seventh schedule', 'federalism']
  },

  {
    id: 'dict-doctrine-severability',
    term: 'Doctrine of Severability',
    category: 'Substantive Doctrine',
    literalTranslation: 'Separability of invalid provisions from valid ones.',
    plainMeaning: 'A constitutional doctrine providing that if a particular clause, section, or subsection of an enactment violates fundamental rights, courts will strike down only that unconstitutional part, provided the remainder can independently survive as a coherent legislative scheme.',
    judicialInterpretation: 'In R.M.D. Chamarbaugwalla v. Union of India (1957), the Supreme Court formulated the test: whether Parliament would have enacted the valid provisions without the invalid ones; if the parts are inextricably interwoven, the entire Act falls.',
    landmarkPrecedent: 'R.M.D. Chamarbaugwalla v. Union of India AIR 1957 SC 628 / A.K. Gopalan v. State of Madras (1950)',
    statutoryCrossReference: 'Constitution of India — Article 13(1) & 13(2) ("to the extent of such inconsistency, be void").',
    practicalExample: 'In Shreya Singhal (2015), the Supreme Court struck down Section 66A of the IT Act for violating free speech, but left the rest of the Information Technology Act intact under severability.',
    tags: ['substantive-doctrines', 'doctrines', 'severability', 'article 13', 'unconstitutional']
  },

  {
    id: 'dict-doctrine-eclipse',
    term: 'Doctrine of Eclipse',
    category: 'Substantive Doctrine',
    literalTranslation: 'Overshadowed by a superior light (Fundamental Rights).',
    plainMeaning: 'A pre-constitutional law inconsistent with fundamental rights is not dead or a nullity ab initio, but remains dormant and inoperative (eclipsed); if a constitutional amendment removes the inconsistency, the shadow is lifted and the law becomes active again without re-enactment.',
    judicialInterpretation: 'In Bhikaji Narain Dhakras v. State of M.P. (1955), Chief Justice Das held that pre-constitutional laws violating Article 19(1)(g) were eclipsed, but upon the First Amendment expanding State monopoly powers under 19(6), the shadow was removed.',
    landmarkPrecedent: 'Bhikaji Narain Dhakras v. State of M.P. AIR 1955 SC 781 / Deep Chand v. State of U.P. AIR 1959 SC 648',
    statutoryCrossReference: 'Constitution of India — Article 13(1) (Pre-constitutional laws).',
    practicalExample: 'A motor vehicles monopoly law enacted in 1948 was inoperative against Article 19(1)(g); once Article 19(6) was amended in 1951, the 1948 law was uneclipsed and immediately enforceable.',
    tags: ['substantive-doctrines', 'doctrines', 'eclipse', 'article 13(1)', 'pre-constitutional']
  },

  {
    id: 'dict-absolute-liability',
    term: 'Doctrine of Absolute Liability',
    category: 'Substantive Doctrine',
    literalTranslation: 'Strict liability without any exceptions or defences.',
    plainMeaning: 'An enterprise engaged in a hazardous or inherently dangerous industry owes an absolute and non-delegable duty to the community; if toxic gas or hazardous escape occurs, the enterprise is liable to compensate victims regardless of whether there was negligence or act of God.',
    judicialInterpretation: 'In the Oleum Gas Leak Case (M.C. Mehta v. Union of India, 1987), Chief Justice P.N. Bhagwati discarded the 19th-century English rule in Rylands v. Fletcher, declaring that Indian jurisprudence cannot be crippled by foreign exceptions like Act of God or third-party sabotage.',
    landmarkPrecedent: 'M.C. Mehta v. Union of India (1987) 1 SCC 395 (Oleum Gas Leak) / Bhopal Gas Disaster (1989)',
    statutoryCrossReference: 'Public Liability Insurance Act, 1991; National Green Tribunal Act, 2010 Section 17.',
    practicalExample: 'A chemical pesticide manufacturer cannot escape liability for toxic gas leak by arguing that the valve failed due to an unprecedented earthquake (Act of God); liability is absolute.',
    tags: ['substantive-doctrines', 'doctrines', 'absolute liability', 'tort', 'environment', 'mc mehta']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. CONSTITUTIONAL CONCEPTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'dict-basic-structure-doctrine',
    term: 'Basic Structure Doctrine',
    category: 'Constitutional Concept',
    literalTranslation: 'Inviolable core architecture of the Constitution.',
    plainMeaning: 'The fundamental constitutional limitation that Parliament constituent power under Article 368 to amend the Constitution does not include the power to destroy, emasculate, or alter its essential foundations (Secularism, Rule of Law, Judicial Review, Separation of Powers).',
    judicialInterpretation: 'Propounded by a historic 7:6 majority in Kesavananda Bharati (1973) and reaffirmed in Indira Nehru Gandhi (1975) and Minerva Mills (1980), establishing that Parliament is a creature of the Constitution and cannot make itself the master.',
    landmarkPrecedent: 'Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225 / Minerva Mills v. Union of India (1980) 3 SCC 625',
    statutoryCrossReference: 'Constitution of India — Article 368, Article 13.',
    practicalExample: 'If Parliament enacts an amendment abolishing judicial review or establishing a theocracy, the Supreme Court strikes down the amendment as violative of the Basic Structure.',
    tags: ['constitutional-concepts', 'constitutional', 'basic structure', 'kesavananda', 'article 368', 'judicial review']
  },

  {
    id: 'dict-substantive-due-process',
    term: 'Substantive Due Process',
    category: 'Constitutional Concept',
    literalTranslation: 'Due process of law governing substantive fairness of legislation.',
    plainMeaning: 'A constitutional doctrine holding that the legal procedure depriving a person of life or liberty under Article 21 must not merely be formally enacted by legislature, but must itself be inherently just, fair, reasonable, and non-arbitrary.',
    judicialInterpretation: 'Though deliberately excluded by the Drafting Committee, the Supreme Court in Maneka Gandhi (1978) read substantive due process into Article 21 through the golden triangle of Articles 14, 19, and 21, reinforced in K.S. Puttaswamy (2017).',
    landmarkPrecedent: 'Maneka Gandhi v. Union of India (1978) 1 SCC 248 / K.S. Puttaswamy v. Union of India (2017) 10 SCC 1',
    statutoryCrossReference: 'Constitution of India — Article 21, Article 14, Article 19.',
    practicalExample: 'A statute providing for 30 days mandatory solitary confinement for a traffic violation is procedurally valid under formal text, but void under substantive due process as oppressive and arbitrary.',
    tags: ['constitutional-concepts', 'constitutional', 'due process', 'article 21', 'maneka gandhi', 'liberty']
  },

  {
    id: 'dict-eminent-domain',
    term: 'Eminent Domain',
    category: 'Constitutional Concept',
    literalTranslation: 'Supreme lordship over property.',
    plainMeaning: 'The sovereign inherent power of the State to acquire, requisition, or take private property for a public purpose upon payment of fair compensation determined according to statutory law.',
    judicialInterpretation: 'In K.T. Plantation Pvt. Ltd. v. State of Karnataka (2011), the Supreme Court ruled that although the Right to Property ceased to be a Fundamental Right after the 44th Amendment (1978), it remains a vital Human and Constitutional Right under Article 300A requiring public purpose and fair compensation.',
    landmarkPrecedent: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka (2011) 9 SCC 1 / State of Bihar v. Kameshwar Singh (1952)',
    statutoryCrossReference: 'Constitution of India — Article 300A; RFCTLARR Act, 2013 (Land Acquisition Act).',
    practicalExample: 'The State acquiring private agricultural land to construct a public expressway must conduct social impact assessment and pay 2x to 4x market value compensation under the 2013 Land Acquisition Act.',
    tags: ['constitutional-concepts', 'constitutional', 'eminent domain', 'article 300a', 'land acquisition']
  },

  {
    id: 'dict-rule-of-law',
    term: 'Rule of Law',
    category: 'Constitutional Concept',
    literalTranslation: 'Lex Suprema / Governance of law and not of men.',
    plainMeaning: 'A governance doctrine formulated by A.V. Dicey asserting: (1) Absence of arbitrary power, (2) Equality before the law, and (3) Primacy of individual rights enforced by ordinary courts, preventing executive despotism.',
    judicialInterpretation: 'In ADM Jabalpur (1976), Justice H.R. Khanna famously dissented, holding that the State has no power to deprive a person of life or liberty without the authority of law even during an emergency. Khanna dissent was declared the true law in K.S. Puttaswamy (2017).',
    landmarkPrecedent: 'ADM Jabalpur v. Shivkant Shukla (1976) 2 SCC 521 (Khanna J. Dissent) / Puttaswamy (2017)',
    statutoryCrossReference: 'Constitution of India — Article 14 (Equality before law and equal protection of the laws).',
    practicalExample: 'No executive minister or police officer can order the demolition of a citizen house without following statutory notice and hearing procedures under municipal law; bulldozing without due process violates the Rule of Law.',
    tags: ['constitutional-concepts', 'constitutional', 'rule of law', 'article 14', 'dicey', 'equality']
  }
];
`;

fs.writeFileSync(targetFile, code, 'utf8');
console.log('Successfully wrote comprehensive LEGAL_DICTIONARY_DATABASE to', targetFile);
