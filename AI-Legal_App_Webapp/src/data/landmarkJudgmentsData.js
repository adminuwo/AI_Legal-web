import { NEPAL_LANDMARK_JUDGMENTS } from './nepalJudgmentsData.js';
import { US_LANDMARK_JUDGMENTS } from './usJudgmentsData.js';
import { UK_LANDMARK_JUDGMENTS } from './ukJudgmentsData.js';
import { INTERNATIONAL_LANDMARK_JUDGMENTS } from './internationalJudgmentsData.js';

export const INDIAN_LANDMARK_JUDGMENTS = [
  {
    id: 'danial-latifi',
    slug: 'danial-latifi',
    aliases: ['danial-latifi', 'sc_2001_danial_latifi', 'danial_latifi'],
    title: 'Danial Latifi And Anr Versus Union Of India',
    parties: {
      petitioner: 'Danial Latifi and Anr.',
      respondent: 'Union of India'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2001',
    date: '28 September 2001',
    citation: '(2001) 7 SCC 740 / AIR 2001 SC 3958 / 2001 INSC 473',
    bench: '5-Judge Constitutional Bench',
    judges: [
      "Hon'ble Justice S. Rajendra Babu",
      "Hon'ble Justice Syed Shah Mohammed Quadri",
      "Hon'ble Justice M.B. Shah",
      "Hon'ble Justice N. Santosh Hegde",
      "Hon'ble Justice S.N. Variava"
    ],
    counsel: {
      petitioner: ['Danial Latifi (Senior Advocate in person)', 'Indira Jaising (Senior Advocate)', 'Kapila Hingorani (Advocate)'],
      respondent: ['Soli J. Sorabjee (Attorney General for India)', 'Altaf Ahmad (Additional Solicitor General)']
    },
    caseNumber: 'Writ Petition (Civil) No. 868 of 1986',
    caseType: 'Writ Petition (Civil) under Article 32',
    subjectTags: ['Muslim Personal Law', 'Maintenance Rights', 'Divorced Muslim Women', 'Section 125 CrPC', 'Section 3 MWA 1986', 'Shah Bano Follow-up', 'Article 14', 'Article 15', 'Article 21', 'Gender Justice'],
    acts: [
      'Muslim Women (Protection of Rights on Divorce) Act, 1986',
      'Code of Criminal Procedure, 1973',
      'Constitution of India, 1950'
    ],
    sections: [
      'Section 3(1)(a) MWA 1986',
      'Section 4 MWA 1986',
      'Section 125 CrPC',
      'Section 127 CrPC',
      'Article 14',
      'Article 15',
      'Article 21'
    ],
    relevanceScore: 99,
    relevanceReason: 'Landmark 5-Judge Constitution Bench holding that a Muslim husband\'s liability to provide maintenance under Section 3(1)(a) extends beyond the iddat period for the entire life of the divorced wife unless she remarries, upholding statutory validity under Articles 14, 15 and 21.',
    ratioDecidendi: 'A Muslim husband is liable to make reasonable and fair provision and pay maintenance to his divorced wife which extends beyond the iddat period for her entire life, unless she remarries. Such provision and maintenance must be made and paid within the iddat period under Section 3(1)(a) of the Act. Interpreted thus, the Muslim Women (Protection of Rights on Divorce) Act, 1986 does not offend Articles 14, 15 and 21 of the Constitution of India.',
    executiveSummary: 'A 5-Judge Constitution Bench reconciled the Muslim Women (Protection of Rights on Divorce) Act, 1986 with constitutional guarantees of gender equality and dignity under Articles 14, 15, and 21. Following the political backlash against Mohd. Ahmed Khan v. Shah Bano Begum (1985), Parliament enacted the 1986 Act to limit maintenance obligations. The Supreme Court creatively interpreted Section 3(1)(a) using the doctrine of purposive construction: holding that while the provision must be made "within" the iddat period, the maintenance contemplated must be for the entire future life of the divorced wife.',
    caseContext: {
      facts: 'Following the landmark Shah Bano ruling (1985), which held that Muslim divorced women were entitled to maintenance under Section 125 CrPC until remarriage, Parliament enacted the Muslim Women (Protection of Rights on Divorce) Act, 1986 to codify Muslim personal law. The 1986 Act appeared to restrict a husband\'s liability to the iddat period (three menstrual courses). Senior Advocate Danial Latifi and women\'s rights organizations filed writ petitions under Article 32 challenging the constitutional validity of the 1986 Act, alleging that depriving Muslim divorced women of the secular protection of Section 125 CrPC violated Articles 14, 15, and 21.',
      legalIssue: '1. Whether the Muslim Women (Protection of Rights on Divorce) Act, 1986 is constitutionally invalid as being discriminatory under Articles 14, 15, and 21?\n2. Whether the liability of a Muslim husband under Section 3(1)(a) of the 1986 Act to make "a reasonable and fair provision and maintenance" is confined solely to the iddat period or extends for the woman\'s lifetime?\n3. Does the 1986 Act completely extinguish a divorced Muslim woman\'s rights under Section 125 of the Code of Criminal Procedure?'
    },
    arguments: {
      appellant: 'Danial Latifi and Indira Jaising argued:\n• Section 125 CrPC is a secular, benevolent social welfare measure enacted to prevent destitution and vagrancy. Depriving Muslim women alone of this remedy purely on the basis of religious affiliation is hostile discrimination under Articles 14 and 15.\n• Confining maintenance to the iddat period (approximately 3 months) abandons an aged, infirm or indigent divorced woman to destitution, violating the fundamental right to life with dignity under Article 21.\n• Liability cannot be arbitrarily shifted to the State Wakf Board, which lacks funds and mechanism to support divorced women.',
      respondent: 'Attorney General Soli Sorabjee and the Union of India submitted:\n• The 1986 Act was enacted to balance religious sensitivities with personal law codification.\n• A harmonious and purposive construction of Section 3(1)(a) reveals that Parliament intended "fair and reasonable provision" to be a lumpsum or capital asset covering the woman\'s future livelihood, whereas "maintenance" covers the iddat period.\n• If interpreted in this protective manner, the Act provides a superior package of remedies without violating Articles 14, 15, or 21.'
    },
    reasoning: 'Justice S. Rajendra Babu, speaking for the unanimous 5-Judge Bench, reasoned:\n1. The word "provision" indicates that something is provided in advance for the future needs and livelihood of the divorced wife. The word "within" in Section 3(1)(a) denotes the time-frame within which the husband must discharge his obligation—namely, during the iddat period.\n2. It does not mean that the quantum of maintenance is limited only to 90 days. The husband must calculate the future needs of the divorced wife for her lifetime and make provision within the iddat period.\n3. If she is unable to maintain herself after the iddat period, and her relatives cannot provide for her, Section 4 mandates that the State Wakf Board shall be liable to pay maintenance.\n4. By interpreting the statutory language in a constitutionally valid manner, the Act secures the welfare of Muslim women while respecting the codification framework.',
    finalDecision: 'Writ petitions disposed of. The constitutional validity of the Muslim Women (Protection of Rights on Divorce) Act, 1986 is upheld subject to the interpretation that a Muslim husband\'s liability under Section 3(1)(a) to pay fair and reasonable provision extends beyond the iddat period for the entire life of the divorced wife until she remarries.',
    obiterDicta: 'The purpose of statutory interpretation in social welfare legislation is to uphold constitutional values of equality and gender justice rather than reducing rights to formalistic technicalities.',
    applicableStatutes: [
      'Muslim Women (Protection of Rights on Divorce) Act, 1986 — Sections 3, 4',
      'CrPC, 1973 — Sections 125, 127',
      'Constitution of India — Articles 14, 15, 21, 32'
    ],
    precedentsCited: [
      'Mohd. Ahmed Khan v. Shah Bano Begum (1985) 2 SCC 556',
      'Arab Ahemadhia Abdulla v. Arab Bail Mohmuna Saiyadbhai AIR 1988 Guj 141 (Affirmed)',
      'Ali v. Sufaira (1988) 2 KLT 94 (Affirmed)'
    ],
    subsequentTreatment: [
      'Iqbal Bano v. State of U.P. (2007) 6 SCC 785 (Confirmed divorced Muslim women can claim under Section 125 CrPC)',
      'Shabana Bano v. Imran Khan (2010) 1 SCC 174 (Affirmed cumulative entitlement under Section 125 CrPC)',
      'Shayara Bano v. Union of India (2017) 9 SCC 1 (Triple Talaq unconstitutional)'
    ],
    practicalTakeaway: 'When representing a divorced Muslim woman, compute maintenance and future livelihood expenses for her entire lifespan (or until remarriage) under Section 3(1)(a) of the 1986 Act, and seek lumpsum provision or recurring payments enforceable through Magisterial warrants under Section 3(4).',
    keyParagraphs: [
      {
        paraNum: 28,
        text: 'A rational interpretation of Section 3(1)(a) of the Act would be that the Muslim husband must make a reasonable and fair provision for the future of the divorced wife, and that includes maintenance. The provision contemplates something to be provided in advance for meeting future needs, including her livelihood.'
      },
      {
        paraNum: 36,
        text: 'While the husband must make reasonable and fair provision within the iddat period, his liability does not terminate with the expiration of the iddat period; the provision is made within the iddat period for her entire lifetime unless she remarries.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CIVIL ORIGINAL JURISDICTION
WRIT PETITION (CIVIL) NO. 868 OF 1986
(With W.P. (C) Nos. 996/1986, 1001/1986, 1055/1986, 1062/1986, 1160/1986 and 1198/1986)

Danial Latifi and Another ... Petitioners
Versus
Union of India ... Respondent

CORAM:
HON'BLE S. RAJENDRA BABU, J.
HON'BLE SYED SHAH MOHAMMED QUADRI, J.
HON'BLE M.B. SHAH, J.
HON'BLE N. SANTOSH HEGDE, J.
HON'BLE S.N. VARIAVA, J.

COUNSEL:
Mr. Danial Latifi, Senior Advocate (in person), with Ms. Indira Jaising, Senior Advocate, for the Petitioners.
Mr. Soli J. Sorabjee, Attorney General for India, with Mr. Altaf Ahmad, Additional Solicitor General, for the Respondent Union of India.

═══════════════════════════════════════════════════════════════════════════════
JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

S. RAJENDRA BABU, J.:

1. Legislative Background & Constitutional Challenge:
In these writ petitions filed under Article 32 of the Constitution, the constitutional validity of the Muslim Women (Protection of Rights on Divorce) Act, 1986 (Act 25 of 1986) is impugned. The genesis of this legislation lies in the historic decision rendered by a Constitution Bench of this Court in Mohd. Ahmed Khan v. Shah Bano Begum (1985) 2 SCC 556. In Shah Bano, this Court held that the provisions of Chapter IX of the Code of Criminal Procedure, 1973 (containing Sections 125 to 128) are secular in nature, apply across all communities irrespective of religion, and that a Muslim husband who possesses sufficient means is bound to maintain his divorced wife if she is unable to maintain herself, even beyond the period of iddat.

2. The Enactment of Act 25 of 1986:
Following that pronouncement, strong political protests ensued from certain sections asserting that Muslim personal law does not require a husband to maintain a divorced wife beyond the iddat period. Consequently, Parliament enacted Act 25 of 1986. The petitioners contend that the Act leaves a divorced Muslim woman in destitution, discriminates against Muslim women on the ground of religion alone, and thereby violates the fundamental guarantees of equality (Article 14), non-discrimination (Article 15), and life with dignity (Article 21).

3. Analysis of Statutory Provisions:
Section 3(1)(a) of the Act provides:
"Notwithstanding anything contained in any other law for the time being in force, a divorced woman shall be entitled to—
(a) a reasonable and fair provision and maintenance to be made and paid to her within the iddat period by her former husband;"

4. The Core Issue of Interpretation:
The central controversy revolves around the interpretation of the words: "a reasonable and fair provision and maintenance to be made and paid to her within the iddat period". Does the word "within" mean that maintenance is payable only FOR the duration of the iddat period, or does it signify the time-limit WITHIN WHICH the husband must make provision and pay for the entire future livelihood of his divorced wife?

5. Harmonious & Purposive Construction:
We must give the statutory language a construction that upholds constitutionality rather than striking it down as discriminatory. The Legislature used two distinct words: "provision" and "maintenance". While "maintenance" contemplates periodic recurring payments, "provision" contemplates a capitalised sum or material security provided in advance for meeting future contingencies.
A rational interpretation of Section 3(1)(a) of the Act is that the former husband is liable to make a reasonable and fair provision for the future livelihood of the divorced wife, which extends beyond the iddat period for her entire life until she remarries. Such provision and maintenance must be made and paid by him within the iddat period.

6. Recourse under Section 4:
If a divorced Muslim woman is unable to maintain herself after the iddat period and has not remarried, and her former husband has failed to make provision, she is not left without a remedy. Section 4 mandates that she may proceed against her relatives who would inherit her property, and in default thereof, the State Wakf Board is statutorily obligated to pay maintenance to her.

7. Final Conclusions:
We summarize our conclusions as follows:
(1) Section 3(1)(a) of the Muslim Women (Protection of Rights on Divorce) Act, 1986 must be construed with reference to the purpose of the enactment.
(2) A Muslim husband is liable to make reasonable and fair provision and pay maintenance to his divorced wife which extends beyond the iddat period for her entire life unless she remarries.
(3) Such provision and maintenance must be made and paid within the iddat period.
(4) Liability of Muslim husband is not limited to the iddat period.
(5) Interpreted thus, the Muslim Women (Protection of Rights on Divorce) Act, 1986 does not offend Articles 14, 15 and 21 of the Constitution of India.
(6) All writ petitions stand disposed of accordingly.`
  },
  {
    id: 'sc_landmark_kesavananda',
    title: 'Kesavananda Bharati v. State of Kerala',
    parties: {
      petitioner: 'His Holiness Kesavananda Bharati Sripadagalvaru',
      respondent: 'State of Kerala & Anr.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '1973',
    date: '24 April 1973',
    citation: '(1973) 4 SCC 225 / AIR 1973 SC 1461 / 1973 INSC 258',
    bench: '13-Judge Constitutional Bench (Largest in Indian History)',
    judges: [
      "Hon'ble Chief Justice S.M. Sikri",
      "Hon'ble Justice J.M. Shelat",
      "Hon'ble Justice K.S. Hegde",
      "Hon'ble Justice A.N. Grover",
      "Hon'ble Justice A.N. Ray",
      "Hon'ble Justice P.J. Reddy",
      "Hon'ble Justice D.G. Palekar",
      "Hon'ble Justice H.R. Khanna",
      "Hon'ble Justice K.K. Mathew",
      "Hon'ble Justice M.H. Beg",
      "Hon'ble Justice S.N. Dwivedi",
      "Hon'ble Justice A.K. Mukherjea",
      "Hon'ble Justice Y.V. Chandrachud"
    ],
    counsel: {
      petitioner: ['N.A. Palkhivala (Sr. Adv.)', 'F.S. Nariman (Sr. Adv.)', 'C.K. Daphtary (Sr. Adv.)', 'J.B. Dadachanji (AoR)'],
      respondent: ['H.M. Seervai (Advocate General of Maharashtra)', 'Niren De (Attorney General for India)', 'Lal Narayan Sinha (Solicitor General)']
    },
    caseNumber: 'Writ Petition (Civil) No. 135 of 1970',
    caseType: 'Writ Petition (Civil) under Article 32',
    subjectTags: ['Constitutional Law', 'Basic Structure Doctrine', 'Amending Power', 'Article 368', 'Fundamental Rights', 'Article 21', 'Article 14', 'Judicial Review'],
    acts: [
      'Constitution of India, 1950',
      'Constitution (Twenty-fourth Amendment) Act, 1971',
      'Constitution (Twenty-fifth Amendment) Act, 1971',
      'Constitution (Twenty-ninth Amendment) Act, 1972',
      'Kerala Land Reforms Act, 1963'
    ],
    sections: [
      'Article 368',
      'Article 13(2)',
      'Article 14',
      'Article 19',
      'Article 21',
      'Article 25',
      'Article 26',
      'Article 31',
      'Article 31C',
      'Article 32'
    ],
    relevanceScore: 99,
    relevanceReason: 'The paramount constitutional authority establishing the "Basic Structure Doctrine". Limits the constituent amending power of Parliament under Article 368 and preserves fundamental rights, rule of law, and judicial review as inviolable.',
    ratioDecidendi: 'Parliament possesses wide constituent power to amend any provision of the Constitution under Article 368, including Fundamental Rights, but this power is not unlimited and does not extend to altering, damaging, or destroying the "Basic Structure" or essential framework of the Constitution. Fundamental rights, democracy, secularism, rule of law, and judicial review constitute the inviolable core identity of the Indian Republic.',
    executiveSummary: 'Heard over 68 days before the largest 13-Judge Bench ever constituted, the Supreme Court by a 7:6 majority overruled the rigid freeze in I.C. Golak Nath while establishing the profound doctrine of Basic Structure. The Court held that amending power is not sovereign constituent creation; it is a power conferred by the Constitution to adapt, not to destroy its essential pillars. While upholding Parliament’s right to amend fundamental rights, the Court struck down the second half of Article 31C which barred judicial review.',
    caseContext: {
      facts: 'His Holiness Kesavananda Bharati, head of the historic Hindu mutt Edneer Mutt in Kasaragod district of Kerala, challenged the Kerala Land Reforms Act, 1963, which placed extensive restrictions on the mutt’s religious endowment land properties under Articles 25 and 26. During the pendency of the petition, Parliament enacted the 24th, 25th, and 29th Constitutional Amendments to bypass the Supreme Court’s prior ruling in Golak Nath (which had held that Parliament could not amend Fundamental Rights). The 24th Amendment amended Article 368 to declare that parliamentary amendments are not "law" under Article 13(2). The 25th Amendment inserted Article 31C, stipulating that laws giving effect to Directive Principles (Articles 39(b) and (c)) could not be challenged for violating Articles 14, 19, or 31, and precluded judicial review through a non-justiciability clause. The 29th Amendment placed the Kerala Land Reforms enactments directly into the Ninth Schedule.',
      legalIssue: '1. What is the scope, extent, and constitutional boundary of the amending power of Parliament under Article 368?\n2. Does Article 368 confer unlimited constituent power, empowering Parliament to abrogate or repeal any Fundamental Right guaranteed in Part III?\n3. Are Constitutional Amendments "law" within the meaning of Article 13(2) of the Constitution?\n4. Is the second clause of Article 31C, which ousts judicial review and makes legislative declarations conclusive, constitutionally valid?'
    },
    arguments: {
      appellant: 'Nani Palkhivala, appearing for the Petitioner, contended:\n• The power to "amend" implies the preservation of the original identity and framework of the Constitution; it cannot be construed as a power of destruction, repeal, or subversion.\n• The Constitution created Parliament; hence a creature of the Constitution cannot become its master by wielding constituent power to convert a free democracy into a totalitarian state.\n• Fundamental Rights in Part III represent inalienable human freedoms reserved by the people unto themselves. If Parliament could abrogate them at will, constitutional supremacy would be replaced by legislative omnipotence.\n• The ouster of judicial review in Article 31C destroys the foundational constitutional principle of checks and balances.',
      respondent: 'H.M. Seervai and Attorney General Niren De, appearing for the Respondents, submitted:\n• Article 368 confers unfettered, supreme constituent power without any express or implied limitations.\n• The words "amendment of this Constitution" are plenary and unambiguous, including the addition, variation, or repeal of any provision.\n• The will of the elected representatives must prevail over judicial scrutiny to implement socio-economic reforms and eradicate poverty under the Directive Principles of State Policy.\n• The Constitution does not distinguish between essential and non-essential features, and introducing implied limitations is judicial legislation without textual warrant.'
    },
    reasoning: 'Chief Justice S.M. Sikri, along with Justices Shelat, Hegde, Grover, Reddy, and Khanna (forming the majority), held:\n1. The word "amendment" in Article 368 post-24th Amendment postulates that the old Constitution survives in essential features with changes; it does not authorize the drafting of a new Constitution or changing its basic identity.\n2. The Constitution of India has certain essential pillars: (a) Supremacy of the Constitution; (b) Republican and Democratic form of Government; (c) Secular character; (d) Separation of Powers between Legislature, Executive and Judiciary; (e) Federal character; (f) Fundamental Freedoms and Human Dignity enshrined in Part III.\n3. Article 31C: While the first part (validating legislation advancing Articles 39(b) and 39(c)) is upheld, the second part reading "and no law containing a declaration that it is to give effect to such policy shall be called in question in any court" is void, because judicial review is an essential basic feature of the Constitution which cannot be abolished.',
    finalDecision: 'By majority of 7 to 6:\n1. Golak Nath v. State of Punjab stands overruled.\n2. Article 368 does not enable Parliament to alter the basic structure or framework of the Constitution.\n3. Constitution (Twenty-fourth Amendment) Act, 1971 is valid.\n4. Section 2(a) and 2(b) of Constitution (Twenty-fifth Amendment) Act, 1971 are valid.\n5. The clause in Section 3 of the Twenty-fifth Amendment reading "and no law containing a declaration that it is to give effect to such policy shall be called in question in any court on the ground that it does not give effect to such policy" is unconstitutional and void.\n6. Constitution (Twenty-ninth Amendment) Act, 1972 is valid.',
    obiterDicta: 'The Constitution is not a mere statute; it is the fundamental law of the land containing values that transcend temporary majoritarian impulses. Human dignity, personal liberty, and the rule of law are eternal.',
    applicableStatutes: [
      'Constitution of India — Article 368, Article 13, Article 14, Article 19, Article 21, Article 25, Article 26, Article 31C, Article 32'
    ],
    precedentsCited: [
      'I.C. Golak Nath v. State of Punjab (1967) 2 SCR 762 (Overruled)',
      'Shankari Prasad v. Union of India (1951) SCR 89',
      'Sajjan Singh v. State of Rajasthan (1965) 1 SCR 933',
      'A.K. Gopalan v. State of Madras (1950) SCR 88'
    ],
    subsequentTreatment: [
      'Indira Nehru Gandhi v. Raj Narain (1975) Supp SCC 1 (Applied Basic Structure to strike down 39th Amendment)',
      'Minerva Mills Ltd. v. Union of India (1980) 3 SCC 625 (Affirmed balance between Part III and Part IV as basic feature)',
      'S.R. Bommai v. Union of India (1994) 3 SCC 1 (Declared Secularism and Federalism as Basic Structure)',
      'Supreme Court Advocates-on-Record Association v. Union of India (2016) 5 SCC 1 (NJAC struck down for violating judicial independence)'
    ],
    practicalTakeaway: 'When challenging an ultra vires statutory scheme or constitutional amendment, formulate a specific "Basic Structure" challenge: demonstrate that the enactment abrogates judicial review (Article 32/226), impairs the separation of powers, or destroys the golden triangle of liberty under Articles 14, 19, and 21.',
    keyParagraphs: [
      {
        paraNum: 292,
        text: 'The true position is that every provision of the Constitution can be amended provided in the result the basic foundation and structure of the Constitution remains the same. The basic structure may be said to consist of the following features: (1) Supremacy of the Constitution; (2) Republican and Democratic form of Government; (3) Secular character of the Constitution; (4) Separation of powers between the legislature, the executive and the judiciary; (5) Federal character of the Constitution.'
      },
      {
        paraNum: 1426,
        text: 'The power of amendment under Article 368 does not include the power to abrogate the Constitution nor does it include the power to alter the basic structure of the Constitution. Subject to the retention of the basic structure or framework of the Constitution, the power of amendment is plenary.'
      },
      {
        paraNum: 2137,
        text: 'Judicial review is a cardinal feature of our constitutional scheme. To withdraw from the courts the power to examine whether a law violates the Constitution is to subvert the rule of law.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CIVIL ORIGINAL JURISDICTION
WRIT PETITION (CIVIL) NO. 135 OF 1970
(Under Article 32 of the Constitution of India)

His Holiness Kesavananda Bharati Sripadagalvaru ... Petitioner
Versus
State of Kerala and Another ... Respondents

CORAM:
HON'BLE S.M. SIKRI, CHIEF JUSTICE OF INDIA
HON'BLE J.M. SHELAT, J.
HON'BLE K.S. HEGDE, J.
HON'BLE A.N. GROVER, J.
HON'BLE A.N. RAY, J.
HON'BLE P.JAGANMOHAN REDDY, J.
HON'BLE D.G. PALEKAR, J.
HON'BLE H.R. KHANNA, J.
HON'BLE K.K. MATHEW, J.
HON'BLE M.H. BEG, J.
HON'BLE S.N. DWIVEDI, J.
HON'BLE A.K. MUKHERJEA, J.
HON'BLE Y.V. CHANDRACHUD, J.

COUNSEL:
Mr. N.A. Palkhivala, Senior Advocate, with Messrs. F.S. Nariman, C.K. Daphtary, and J.B. Dadachanji, Advocates, for the Petitioner.
Mr. H.M. Seervai, Advocate General of Maharashtra, with Mr. Niren De, Attorney General for India, Mr. Lal Narayan Sinha, Solicitor General, for the Respondents.

═══════════════════════════════════════════════════════════════════════════════
JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

S.M. SIKRI, C.J.I.:

1. Factual Matrix & The Genesis of the Reference:
The petitioner, His Holiness Kesavananda Bharati Sripadagalvaru, is the head of the historic religious mutt known as Edneer Mutt, situated in Kasaragod taluk of Kerala. In 1970, the petitioner filed a petition under Article 32 of the Constitution challenging the validity of the Kerala Land Reforms Act, 1963 (Act 1 of 1964) as amended by the Kerala Land Reforms (Amendment) Act, 1969 (Act 35 of 1969), on the ground that the legislation violated his fundamental rights guaranteed under Article 14 (equality before law), Article 19(1)(f) (right to acquire, hold and dispose of property), Article 25 (freedom of conscience and religion), Article 26 (freedom to manage religious affairs), and Article 31 (compulsory acquisition of property).

2. Legislative Interventions Pendente Lite:
During the pendency of these proceedings, Parliament enacted three significant constitutional amendments intended to overcome earlier judicial pronouncements:
(a) The Constitution (Twenty-fourth Amendment) Act, 1971, which amended Articles 13 and 368 to expressly provide that nothing in Article 13 shall apply to any amendment made under Article 368, and asserting that Parliament in exercise of its constituent power may amend by way of addition, variation or repeal any provision of this Constitution.
(b) The Constitution (Twenty-fifth Amendment) Act, 1971, which substituted the word "amount" for the word "compensation" in Article 31(2), and introduced Article 31C, giving supremacy to Directive Principles in Articles 39(b) and (c) over Fundamental Rights in Articles 14, 19 and 31, and enacting an ouster clause barring judicial review.
(c) The Constitution (Twenty-ninth Amendment) Act, 1972, which inserted the Kerala Land Reforms enactments into the Ninth Schedule under Article 31B.

3. Questions of Law Formulated:
The principal questions referred to this Bench of thirteen Judges are:
(i) Whether the decision of this Court in I.C. Golak Nath v. State of Punjab holding that Parliament has no power to abrogate or take away fundamental rights by constitutional amendment is correct in law?
(ii) What is the true interpretation, ambit and scope of the constituent amending power under Article 368?
(iii) Does the constituent power under Article 368 include the power to alter, destroy, or repeal the essential framework or basic features of the Constitution?
(iv) Is the insertion of Article 31C constitutionally valid, in particular the second clause excluding judicial review?

4. The Meaning of "Amendment":
The expression "amendment" in the English language, in jurisprudence, and in political science carries a well-understood connotation. It means to alter, modify, improve, or make better. It postulates that the old Constitution continues in existence, though with modifications. An amendment cannot mean the abrogation or destruction of the thing amended. When the framers of our Constitution conferred the power to amend on Parliament, they created an institution within the four corners of the Constitution. A creature of the Constitution cannot elevate itself above the creator and assume constituent power to destroy the very identity of the instrument from which its authority originates.

5. The Doctrine of Implied Limitations & Basic Structure:
The Constitution of India is built upon certain foundational structural foundations:
First, the Supremacy of the Constitution. Ours is a government of laws, and not of men. No branch of government—neither the Executive nor the Legislature—is sovereign. Sovereignty in its ultimate sense rests with the People of India who enacted this Constitution.
Second, the Republican and Democratic form of government. Parliament cannot, under the guise of amendment, abolish adult suffrage, outlaw elections, or proclaim a monarchical or dictatorial system.
Third, the Secular character of our Republic. India is a diverse country where all faiths are guaranteed equal protection and liberty of conscience under Articles 25 to 28. This secular fabric cannot be stripped away.
Fourth, the Separation of Powers. The delicate balance between the Legislature, the Executive, and the independent Judiciary is vital. If Parliament were permitted to extinguish judicial review, the citizen would have no forum to enforce rights against state excesses.
Fifth, Human Dignity and Fundamental Rights. The freedoms guaranteed in Part III are not gifts bestowed by legislative grace; they are inherent human entitlements guaranteed against majoritarian overreach.

6. Analysis of Article 31C and Judicial Review:
We now turn to Article 31C introduced by the 25th Amendment. The second limb of Article 31C reads: "and no law containing a declaration that it is to give effect to such policy shall be called in question in any court on the ground that it does not give effect to such policy."
This declaration is an absolute ouster of the jurisdiction of the Court. It effectively permits Parliament or any State Legislature to insert a self-serving declaration into any law and thereby insulate it from scrutiny under Articles 14, 19, and 31. This is wholly destructive of judicial review. The power of judicial review is an essential feature of the Constitution. What is protected under Article 31C must be tested by independent courts to verify whether there is a genuine rational nexus between the enactment and the Directive Principles in Articles 39(b) and (c). A legislative fiat cannot be substituted for judicial determination.

7. Conclusion and Final Disposition:
The Court declares:
1. The decision in I.C. Golak Nath v. State of Punjab (1967) 2 SCR 762 stands overruled.
2. The Constitution (Twenty-fourth Amendment) Act, 1971, is valid in its entirety.
3. Article 368 does not enable Parliament to alter the basic structure or framework of the Constitution.
4. The first part of Section 3 of the Constitution (Twenty-fifth Amendment) Act, 1971, enacting Article 31C up to the words "Articles 14, 19 or 31" is valid.
5. The second part of Section 3 of the Twenty-fifth Amendment reading "and no law containing a declaration that it is to give effect to such policy shall be called in question in any court on the ground that it does not give effect to such policy" is unconstitutional and void.
6. The Constitution (Twenty-ninth Amendment) Act, 1972, is valid, but the enactments placed in the Ninth Schedule remain subject to examination on the touchstone of the Basic Structure doctrine.`
  },
  {
    id: 'sc_landmark_puttaswamy',
    title: 'K.S. Puttaswamy v. Union of India',
    parties: {
      petitioner: 'Justice K.S. Puttaswamy (Retd.) & Anr.',
      respondent: 'Union of India & Ors.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2017',
    date: '24 August 2017',
    citation: '(2017) 10 SCC 1 / AIR 2017 SC 4161 / 2017 INSC 609',
    bench: '9-Judge Constitutional Bench',
    judges: [
      "Hon'ble Chief Justice J.S. Khehar",
      "Hon'ble Justice J. Chelameswar",
      "Hon'ble Justice S.A. Bobde",
      "Hon'ble Justice R.K. Agrawal",
      "Hon'ble Justice Rohinton Fali Nariman",
      "Hon'ble Justice A.M. Sapre",
      "Hon'ble Justice D.Y. Chandrachud",
      "Hon'ble Justice Sanjay Kishan Kaul",
      "Hon'ble Justice S. Abdul Nazeer"
    ],
    counsel: {
      petitioner: ['Gopal Subramanium (Sr. Adv.)', 'Shyam Divan (Sr. Adv.)', 'Arvind Datar (Sr. Adv.)', 'Sajan Poovayya (Sr. Adv.)'],
      respondent: ['K.K. Venugopal (Attorney General)', 'Mukul Rohatgi (Sr. Adv.)', 'Tushar Mehta (Additional Solicitor General)']
    },
    caseNumber: 'Writ Petition (Civil) No. 494 of 2012',
    caseType: 'Writ Petition (Civil) under Article 32',
    subjectTags: ['Constitutional Law', 'Right to Privacy', 'Article 21', 'Fundamental Rights', 'Digital Privacy', 'Surveillance', 'Proportionality Test'],
    acts: [
      'Constitution of India, 1950',
      'Information Technology Act, 2000',
      'Digital Personal Data Protection Act, 2023'
    ],
    sections: [
      'Article 21',
      'Article 14',
      'Article 19',
      'Article 32',
      'Section 43A IT Act',
      'Section 69 IT Act'
    ],
    relevanceScore: 99,
    relevanceReason: 'Historic unanimous 9-Judge Bench declaration establishing the Right to Privacy as an inalienable fundamental right under Article 21. Prescribes the three-fold proportionality test for any state intrusion on personal liberty.',
    ratioDecidendi: 'The Right to Privacy is protected as an intrinsic facet of the Right to Life and Personal Liberty under Article 21 and as part of the freedoms guaranteed by Part III of the Constitution. Privacy inheres in human dignity and autonomy. Any state measure encroaching on privacy must satisfy the threefold test: (i) Legality (existence of law); (ii) Legitimate State Aim (rational nexus); and (iii) Proportionality (least restrictive means).',
    executiveSummary: 'Overruling past rulings in M.P. Sharma (1954) and Kharak Singh (1962), a unanimous 9-Judge Constitution Bench held that privacy is a primordial, natural entitlement anchored in human dignity. The Court recognized informational privacy, spatial privacy, and bodily autonomy as constitutional absolutes in the digital age, setting binding constraints on state surveillance, biometric data collection, and legislative profiling.',
    caseContext: {
      facts: 'A retired High Court judge, Justice K.S. Puttaswamy, aged 91, filed a writ petition challenging the validity of the Aadhaar biometric identity scheme. The petitioner argued that the compulsory collection of fingerprints, iris scans, and demographic data without statutory backing violated individual liberty. The Union Government responded by citing early decisions of larger benches in M.P. Sharma (8 judges) and Kharak Singh (6 judges), asserting that the Constitution of India does not guarantee a fundamental right to privacy.',
      legalIssue: '1. Does the Constitution of India guarantee a fundamental right to privacy under Article 21 and Part III?\n2. Are the decisions in M.P. Sharma (1954) and Kharak Singh (1962) correct in holding that privacy is not a fundamental right?\n3. What are the constitutional tests and parameters governing state restrictions on personal privacy and data collection?'
    },
    arguments: {
      appellant: 'The petitioners submitted:\n• Privacy is an indispensable element of personal liberty, dignity, and autonomy under Article 21.\n• Informational privacy is essential in an algorithmic era; citizens must have self-determination over their personal and biometric data.\n• Human dignity under the Preamble cannot exist if the state is permitted unbridled surveillance into private life.',
      respondent: 'The Attorney General and Union of India submitted:\n• The Constitution does not explicitly mention privacy as a fundamental right.\n• The 8-judge bench in M.P. Sharma explicitly rejected privacy as a fundamental right.\n• In a developing nation, welfare distribution, food security, and combating ghost beneficiaries override abstract concepts of individual privacy.'
    },
    reasoning: 'The 9-Judge Bench unanimously held:\n1. Privacy is an inherent human right. It is not granted by the State, but recognized by the Constitution.\n2. Overruled M.P. Sharma and Kharak Singh to the extent they denied privacy as a fundamental right.\n3. The Proportionality Test: Any invasion of privacy must satisfy: (i) Legality—it must be sanctioned by a valid statute; (ii) Need—it must pursue a legitimate state aim; and (iii) Proportionality—there must be a rational nexus and the measure must be the least intrusive means available.',
    finalDecision: 'Unanimously ruled:\n1. The Right to Privacy is an inalienable fundamental right under Article 21 and Part III.\n2. Decisions in M.P. Sharma and Kharak Singh stand overruled to that extent.\n3. Aadhaar and data surveillance schemes must be tested against the threefold test of legality, legitimate state aim, and proportionality.',
    obiterDicta: 'Dignity cannot exist without privacy. Privacy recognizes the autonomy of the individual and guarantees personal space for decision-making and identity.',
    applicableStatutes: [
      'Constitution of India — Articles 21, 14, 19, 32',
      'Information Technology Act, 2000 — Sections 43A, 69, 72A'
    ],
    precedentsCited: [
      'M.P. Sharma v. Satish Chandra (1954) SCR 1077 (Overruled)',
      'Kharak Singh v. State of U.P. (1964) 1 SCR 332 (Overruled)',
      'Maneka Gandhi v. Union of India (1978) 1 SCC 248',
      'Govind v. State of M.P. (1975) 2 SCC 148'
    ],
    subsequentTreatment: [
      'Navtej Singh Johar v. Union of India (2018) 10 SCC 1 (Applied Puttaswamy to decriminalize Section 377 IPC)',
      'Joseph Shine v. Union of India (2019) 3 SCC 39 (Struck down adultery law under Article 21 privacy)',
      'K.S. Puttaswamy (Aadhaar-5J) v. Union of India (2019) 1 SCC 1 (Applied proportionality test to Aadhaar Act)'
    ],
    practicalTakeaway: 'Challenge arbitrary search and seizure of mobile phones, laptops, and digital devices by investigative agencies under the Puttaswamy proportionality doctrine: demand the statutory authority, legitimate purpose, and strict adherence to least intrusive protocols.',
    keyParagraphs: [
      {
        paraNum: 298,
        text: 'Privacy is the constitutional core of human dignity. Privacy has both positive and negative contents. The negative content restrains the State from committing an infringement upon the life and personal liberty of a citizen under Article 21.'
      },
      {
        paraNum: 310,
        text: 'An invasion of life or personal liberty under Article 21 must meet the threefold requirement of (i) legality, which postulates the existence of law; (ii) need, defined in terms of a legitimate state aim; and (iii) proportionality.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CIVIL ORIGINAL JURISDICTION
WRIT PETITION (CIVIL) NO. 494 OF 2012

Justice K.S. Puttaswamy (Retd.) & Anr. ... Petitioners
Versus
Union of India & Ors. ... Respondents

CORAM:
HON'BLE J.S. KHEHAR, CHIEF JUSTICE OF INDIA
HON'BLE J. CHELAMESWAR, J.
HON'BLE S.A. BOBDE, J.
HON'BLE R.K. AGRAWAL, J.
HON'BLE ROHINTON FALI NARIMAN, J.
HON'BLE A.M. SAPRE, J.
HON'BLE DR. D.Y. CHANDRACHUD, J.
HON'BLE SANJAY KISHAN KAUL, J.
HON'BLE S. ABDUL NAZEER, J.

═══════════════════════════════════════════════════════════════════════════════
JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

DR. D.Y. CHANDRACHUD, J.:

1. The Core Question:
The question referred to this nine-judge Bench is whether the Constitution of India guarantees to its citizens a fundamental right to privacy. The reference arose in the context of challenges to the Aadhaar identity framework, wherein the Union of India contended that earlier decisions of this Court in M.P. Sharma (8 judges) and Kharak Singh (6 judges) had categorically held that privacy is not a fundamental right.

2. Overruling the Past Narrow Conception:
We hold that the view taken in M.P. Sharma and Kharak Singh was founded on the premise that fundamental rights exist in separate, mutually exclusive silos—an approach decisively dismantled in R.C. Cooper and Maneka Gandhi. Privacy is not a conceded privilege bestowed by the State; it is an inherent facet of human dignity and liberty. It is protected under Article 21 and the freedoms guaranteed by Part III of the Constitution.

3. Facets of Privacy:
Privacy encompasses three primary dimensions:
(i) Spatial Privacy: The sanctity of the home and personal physical space free from uninvited state intrusion.
(ii) Decisional Autonomy: The freedom to make intimate personal choices regarding family, marriage, reproductive rights, and sexual orientation.
(iii) Informational Privacy: The right of an individual to control the dissemination of personal and biometric data in an automated, algorithmic world.

4. The Threefold Proportionality Test:
No fundamental right is absolute, but every restriction on privacy must be scrutinized on the anvil of constitutional reasonableness:
First, Legality: There must be a clear legislative enactment authorizing the intrusion. Executive orders or guidelines are insufficient.
Second, Legitimate State Aim: The law must pursue an objective that is legitimate in a constitutional democracy (such as national security, preventing crime, or equitable distribution of scarce welfare resources).
Third, Proportionality: There must be a rational nexus between the objective and the means adopted, and the measure must be the least intrusive mechanism to accomplish that goal, accompanied by procedural safeguards.

5. Final Order:
The reference is answered in the affirmative. The Right to Privacy is an inalienable fundamental right protected under Article 21 and Part III of the Constitution. M.P. Sharma and Kharak Singh stand overruled to the extent they held otherwise.`
  },
  {
    id: 'sc_landmark_maneka',
    title: 'Maneka Gandhi v. Union of India',
    parties: {
      petitioner: 'Maneka Gandhi',
      respondent: 'Union of India & Anr.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '1978',
    date: '25 January 1978',
    citation: '(1978) 1 SCC 248 / AIR 1978 SC 597 / 1978 INSC 16',
    bench: '7-Judge Constitutional Bench',
    judges: [
      "Hon'ble Chief Justice M.H. Beg",
      "Hon'ble Justice Y.V. Chandrachud",
      "Hon'ble Justice P.N. Bhagwati",
      "Hon'ble Justice V.R. Krishna Iyer",
      "Hon'ble Justice N.L. Untwalia",
      "Hon'ble Justice S. Murtaza Fazal Ali",
      "Hon'ble Justice P.S. Kailasam"
    ],
    counsel: {
      petitioner: ['F.S. Nariman (Sr. Adv.)', 'S.J. Sorabjee (Sr. Adv.)'],
      respondent: ['S.V. Gupte (Attorney General for India)', 'L.N. Sinha (Solicitor General)']
    },
    caseNumber: 'Writ Petition (Civil) No. 231 of 1977',
    caseType: 'Writ Petition (Civil) under Article 32',
    subjectTags: ['Constitutional Law', 'Article 21', 'Golden Triangle', 'Natural Justice', 'Passports Act', 'Personal Liberty', 'Substantive Due Process'],
    acts: [
      'Constitution of India, 1950',
      'Passports Act, 1967'
    ],
    sections: [
      'Article 21',
      'Article 14',
      'Article 19(1)(a)',
      'Article 19(1)(g)',
      'Article 32',
      'Section 10(3)(c) Passports Act'
    ],
    relevanceScore: 98,
    relevanceReason: 'The watershed ruling on Fundamental Rights and Article 21. Established the "Golden Triangle" (Articles 14, 19, 21) and held that "procedure established by law" must be just, fair, and reasonable, incorporating substantive due process.',
    ratioDecidendi: 'Procedure established by law under Article 21 cannot be arbitrary, fanciful, or oppressive. It must be just, fair, and reasonable, conforming to natural justice (audi alteram partem) and satisfying the tests of Articles 14 and 19. Fundamental rights are not mutually exclusive silos but form an integrated interconnected code.',
    executiveSummary: 'The Supreme Court radically expanded the horizon of Article 21 by holding that any procedure depriving a person of life or personal liberty must comply with principles of natural justice and non-arbitrariness under Article 14. An impounding of passport without giving reasons violates fundamental rights.',
    caseContext: {
      facts: 'The passport of the petitioner, Smt. Maneka Gandhi, was impounded by the Regional Passport Officer, New Delhi, under Section 10(3)(c) of the Passports Act, 1967, "in the interest of the general public". When the petitioner requested reasons for the order, the Government declined, stating it was not in the public interest to disclose them. The petitioner moved the Supreme Court under Article 32.',
      legalIssue: '1. Is the right to travel abroad a part of "personal liberty" guaranteed by Article 21?\n2. Does Section 10(3)(c) of the Passports Act violate Articles 14, 19(1)(a), 19(1)(g), and 21?\n3. Does Article 21 require that the procedure established by law must satisfy the requirements of natural justice and non-arbitrariness under Article 14?'
    },
    arguments: {
      appellant: 'Fali Nariman argued that personal liberty under Article 21 is of the widest amplitude and includes the freedom to travel abroad (Satwant Singh Sawhney). Any law depriving liberty must be fair, just, and reasonable, and must conform to audi alteram partem.',
      respondent: 'The Attorney General argued that "procedure established by law" in Article 21 is positive enacted law and does not incorporate the American concept of substantive due process. Furthermore, giving prior notice would defeat the purpose of passport impounding.'
    },
    reasoning: 'The Court held that Articles 14, 19, and 21 are mutually supportive and form an interconnected Golden Triangle. A law depriving a person of personal liberty under Article 21 cannot stand in isolation; it must satisfy the test of Article 14 (non-arbitrariness) and Article 19 (reasonableness). Procedure must be right, just, and fair.',
    finalDecision: 'Petition disposed of upon the Attorney General giving a formal assurance that the Government would provide an expeditious post-decisional hearing to the petitioner.',
    obiterDicta: 'The right to life under Article 21 does not merely mean animal existence; it encompasses human dignity, health, travel, and personal liberty.',
    applicableStatutes: [
      'Constitution of India — Articles 21, 14, 19, 32',
      'Passports Act, 1967 — Section 10(3)(c)'
    ],
    precedentsCited: [
      'A.K. Gopalan v. State of Madras (1950) SCR 88',
      'Satwant Singh Sawhney v. D. Ramarathnam, A.P.O. (1967) 3 SCR 525',
      'E.P. Royappa v. State of Tamil Nadu (1974) 4 SCC 3'
    ],
    subsequentTreatment: [
      'Francis Coralie Mullin v. Administrator, UT of Delhi (1981) 1 SCC 608',
      'Olga Tellis v. Bombay Municipal Corporation (1985) 3 SCC 545',
      'K.S. Puttaswamy v. Union of India (2017) 10 SCC 1'
    ],
    practicalTakeaway: 'Always challenge executive impounding, freezing of bank accounts, or lookout circulars (LOC) by applying Maneka Gandhi: test whether pre-decisional or prompt post-decisional hearing was afforded and whether the order satisfies the Article 14 non-arbitrariness test.',
    keyParagraphs: [
      {
        paraNum: 56,
        text: 'The law must be right, just, and fair, and not arbitrary, fanciful, or oppressive; otherwise, it would be no procedure at all and the requirement of Article 21 would not be satisfied.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
WRIT PETITION (CIVIL) NO. 231 OF 1977

Maneka Gandhi ... Petitioner
Versus
Union of India & Anr. ... Respondents

CORAM:
HON'BLE M.H. BEG, C.J.I., Y.V. CHANDRACHUD, P.N. BHAGWATI, V.R. KRISHNA IYER, N.L. UNTWALIA, S.M. FAZAL ALI, P.S. KAILASAM, JJ.

═══════════════════════════════════════════════════════════════════════════════
JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

P.N. BHAGWATI, J.:

1. The interconnected web of Fundamental Rights:
We cannot accept the contention that Articles 19(1) and 21 are mutually exclusive. The law is now settled that the law must satisfy the requirement of not only Article 21 but also Article 14 and Article 19.

2. Procedure Established by Law Must Be Fair:
The procedure in Article 21 cannot be any procedure, howsoever arbitrary or fanciful. It must be just, fair and reasonable. If a law prescribing procedure is arbitrary, it is violative of Article 14, and therefore unconstitutional under Article 21. Natural justice is a vital component of fair procedure.`
  },
  {
    id: 'sc_landmark_dkbasu',
    title: 'D.K. Basu v. State of West Bengal',
    parties: {
      petitioner: 'D.K. Basu, Executive Chairman, Legal Aid Services, W.B.',
      respondent: 'State of West Bengal & Ors.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '1997',
    date: '18 December 1996',
    citation: '(1997) 1 SCC 416 / AIR 1997 SC 610 / 1996 INSC 1591',
    bench: 'Division Bench',
    judges: ["Hon'ble Justice Kuldip Singh", "Hon'ble Justice Dr. A.S. Anand"],
    counsel: {
      petitioner: ['A.M. Singhvi (Amicus Curiae)'],
      respondent: ['Counsel for States and Union Territories']
    },
    caseNumber: 'Writ Petition (Crl.) No. 592 of 1987',
    caseType: 'Writ Petition (Criminal) — PIL under Article 32',
    subjectTags: ['Criminal Law', 'Custodial Torture', 'Arrest Guidelines', 'Article 21', 'Article 22', 'Section 41 CrPC', 'Human Rights'],
    acts: [
      'Constitution of India, 1950',
      'Code of Criminal Procedure, 1973',
      'Bharatiya Nagarik Suraksha Sanhita, 2023'
    ],
    sections: [
      'Article 21',
      'Article 22',
      'Section 41 CrPC',
      'Section 50 CrPC',
      'Section 54 CrPC',
      'Section 57 CrPC',
      'Section 35 BNSS',
      'Section 47 BNSS',
      'Section 53 BNSS'
    ],
    relevanceScore: 97,
    relevanceReason: 'Magisterial 11-point guidelines against custodial violence, torture, and arbitrary arrest under Article 21 and Article 22. Mandates identification badges, arrest memo, notification to next of kin, and medical examination.',
    ratioDecidendi: 'Custodial torture, violence, and deaths strike at the root of the rule of law and human dignity protected by Article 21. Any form of torture or inhuman treatment during arrest, interrogation, or detention violates fundamental rights. Police officers violating arrest directives are liable for contempt of court, departmental dismissal, and public law compensation.',
    executiveSummary: 'Treating a letter from Legal Aid Services as a PIL, the Supreme Court framed 11 mandatory arrest and custody safeguards (identification badges, arrest memo, notification to next of kin, medical examination every 48 hours) to enforce Article 21 and Article 22 against police atrocities.',
    caseContext: {
      facts: 'The Executive Chairman of Legal Aid Services, West Bengal, addressed a letter to the Chief Justice drawing attention to rampant custodial violence and deaths in police lock-ups. The Supreme Court treated the letter as a Public Interest Litigation under Article 32.',
      legalIssue: 'Whether custodial torture and death violate Article 21 and what preventive safeguards must be mandated nationwide to hold police officers accountable.'
    },
    arguments: {
      appellant: 'Amicus Curiae Dr. A.M. Singhvi submitted that existing statutory rules under Sections 41, 50, and 57 of the CrPC were routinely flouted with impunity and that transparent mandatory arrest guidelines backed by contempt of court were urgently required.',
      respondent: 'States acknowledged the gravity but contended that police forces faced hardened criminals and terror networks and required investigative flexibility.'
    },
    reasoning: 'The Court held that the rights under Article 21 and Article 22 are available to all persons, whether accused or convicted. Lock-up torture is an assault on human dignity that no civilized state can tolerate.',
    finalDecision: 'Laid down 11 mandatory directives governing all arrests in India, enforceable under contempt of court jurisdiction.',
    obiterDicta: 'Custodial death is perhaps one of the worst crimes in a civilized society governed by the rule of law.',
    applicableStatutes: [
      'Constitution of India — Articles 21, 22, 32',
      'CrPC, 1973 — Sections 41, 50, 54, 57',
      'BNSS, 2023 — Sections 35, 47, 53, 58'
    ],
    precedentsCited: [
      'Joginder Kumar v. State of U.P. (1994) 4 SCC 260',
      'Nilabati Behera v. State of Orissa (1993) 2 SCC 746'
    ],
    subsequentTreatment: [
      'Arnesh Kumar v. State of Bihar (2014) 8 SCC 273',
      'Satender Kumar Antil v. CBI (2022) 10 SCC 51'
    ],
    practicalTakeaway: 'Examine arrest records for compliance with the 11 D.K. Basu guidelines: verify whether the arrest memo was prepared at the spot, signed by a respectable witness, and whether the medical inspection memo exists.',
    keyParagraphs: [
      {
        paraNum: 35,
        text: 'We lay down the following requirements to be followed in all cases of arrest or detention till legal provisions are made in this behalf as preventive measures under Articles 21 and 22(1).'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
WRIT PETITION (CRL.) NO. 592 OF 1987

D.K. Basu ... Petitioner
Versus
State of West Bengal ... Respondent

JUDGMENT
DR. A.S. ANAND, J.:

1. The 11 Mandatory Arrest Requirements:
(1) The police personnel carrying out the arrest and handling the interrogation of the arrestee should bear accurate, visible and clear identification and name tags with their designations.
(2) The police officer carrying out the arrest shall prepare a memo of arrest at the time of arrest and such memo shall be attested by at least one witness, who may either be a member of the family of the arrestee or a respectable person of the locality.
(3) A person who has been arrested or detained and is being held in custody shall be entitled to have one friend or relative or other person known to him or having interest in his welfare informed as soon as practicable.
(4) The time, place of arrest and venue of custody of an arrestee must be notified by the police where the next friend lives outside the district within 8 to 12 hours.
(5) The person arrested must be made aware of his right to have someone informed.
(6) An entry must be made in the diary at the place of detention.
(7) The arrestee should, where he so requests, be also examined at the time of his arrest for major and minor injuries.
(8) The arrestee should be subjected to medical examination by a trained doctor every 48 hours.
(9) Copies of all the documents including the memo of arrest should be sent to the Magistrate.
(10) The arrestee may be permitted to meet his lawyer during interrogation, though not throughout the interrogation.
(11) A police control room should be provided at all district and state headquarters.`
  },
  {
    id: 'sc_2024_01',
    title: 'P. Chidambaram v. Directorate of Enforcement',
    parties: {
      petitioner: 'P. Chidambaram',
      respondent: 'Directorate of Enforcement & Anr.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2020',
    date: '04 December 2019',
    citation: '(2020) 13 SCC 791 / 2019 INSC 1319',
    bench: '3-Judge Bench',
    judges: ["Hon'ble Justice R. Banumathi", "Hon'ble Justice A.S. Bopanna", "Hon'ble Justice Hrishikesh Roy"],
    counsel: {
      petitioner: ['Kapil Sibal (Sr. Adv.)', 'Dr. A.M. Singhvi (Sr. Adv.)'],
      respondent: ['Tushar Mehta (Solicitor General of India)']
    },
    caseNumber: 'Criminal Appeal No. 1831 of 2019',
    caseType: 'Criminal Appeal against Denial of Bail',
    subjectTags: ['Criminal Law', 'Bail Jurisprudence', 'PMLA Section 45', 'Article 21', 'Economic Offences', 'Triple Test'],
    acts: [
      'Constitution of India, 1950',
      'Code of Criminal Procedure, 1973',
      'Prevention of Money Laundering Act, 2002',
      'Bharatiya Nagarik Suraksha Sanhita, 2023'
    ],
    sections: [
      'Article 21',
      'Section 439 CrPC',
      'Section 45 PMLA',
      'Section 483 BNSS'
    ],
    relevanceScore: 96,
    relevanceReason: 'Leading modern authority on regular bail in economic offences under PMLA. Establishes that gravity of offence cannot justify punitive pre-trial incarceration under Article 21 when the triple test is satisfied.',
    ratioDecidendi: 'Bail is the rule and jail is an exception even in economic offences. Gravity of offence by itself cannot be the sole basis to deny bail when the accused is not a flight risk and cannot tamper with documentary evidence in official custody. Pre-trial detention under Article 21 cannot be transformed into punitive incarceration.',
    executiveSummary: 'The Supreme Court granted regular bail to the appellant in an alleged money-laundering matter, reinforcing that pre-trial detention cannot be transformed into punitive incarceration under Article 21. The triple test (flight risk, tampering with evidence, influencing witnesses) remains paramount.',
    caseContext: {
      facts: 'The appellant, former Union Finance Minister, was arrested by the Enforcement Directorate in an ECIR registered under PMLA. Despite completion of investigation and filing of complaint, the Delhi High Court denied regular bail citing the grave magnitude of economic offence.',
      legalIssue: 'Whether economic offences constitute a distinct class barring bail notwithstanding that the conventional triple test is satisfied.'
    },
    arguments: {
      appellant: 'Documentary evidence is in state custody; investigation is complete; appellant deposited his passport and poses no flight risk.',
      respondent: 'Economic offences undermine the economic fabric of the nation; high administrative standing creates threat of witness influence.'
    },
    reasoning: 'Even in economic offences, basic bail jurisprudence under Section 439 CrPC and Article 21 remains applicable. Gravity is one factor, but cannot override the triple test.',
    finalDecision: 'Appeal allowed. Appellant directed to be released on bail subject to Rs. 2,00,000/- bond and surrender of passport.',
    obiterDicta: 'Judicial discretion in bail matters must balance individual liberty under Article 21 with societal interest.',
    applicableStatutes: [
      'Constitution of India — Article 21',
      'CrPC, 1973 — Sections 437, 439',
      'PMLA, 2002 — Section 45',
      'BNSS, 2023 — Section 483'
    ],
    precedentsCited: [
      'Gudikanti Narasimhulu v. Public Prosecutor (1978) 1 SCC 240',
      'Sanjay Chandra v. CBI (2012) 1 SCC 40'
    ],
    subsequentTreatment: [
      'Manish Sisodia v. Directorate of Enforcement (2024 INSC 595)',
      'K. Kavitha v. Directorate of Enforcement (2024 INSC 632)'
    ],
    practicalTakeaway: 'Emphasize completion of investigation, custody of documentary records, and absence of flight risk to obtain bail under Section 439 CrPC / 483 BNSS in economic matters.',
    keyParagraphs: [
      {
        paraNum: 23,
        text: 'The gravity of the offence is one of the factors, but the triple test cannot be disregarded.'
      },
      {
        paraNum: 33,
        text: 'Depriving an undertrial of personal liberty for an indefinite period before guilt is pronounced is contrary to Article 21.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CRIMINAL APPEAL NO. 1831 OF 2019

P. Chidambaram ... Appellant
Versus
Directorate of Enforcement ... Respondent

JUDGMENT
R. BANUMATHI, J.:

1. The principles governing bail under Section 439 CrPC apply to economic offences. In the present case, investigation is complete and chargesheet has been filed. The appellant has roots in society and flight risk can be prevented by impounding passport. Pre-trial detention cannot be punitive. Bail granted.`
  },
  {
    id: 'sc_2024_03',
    title: 'Arnesh Kumar v. State of Bihar',
    parties: {
      petitioner: 'Arnesh Kumar',
      respondent: 'State of Bihar & Anr.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2014',
    date: '02 July 2014',
    citation: '(2014) 8 SCC 273 / AIR 2014 SC 2756 / 2014 INSC 473',
    bench: 'Division Bench',
    judges: ["Hon'ble Justice Chandramauli Kr. Prasad", "Hon'ble Justice Pinaki Chandra Ghose"],
    counsel: {
      petitioner: ['Counsel for Appellant'],
      respondent: ['Counsel for State of Bihar']
    },
    caseNumber: 'Criminal Appeal No. 1277 of 2014',
    caseType: 'Criminal Appeal against Rejection of Anticipatory Bail',
    subjectTags: ['Criminal Law', 'Arrest Guidelines', 'Section 41A CrPC', 'Section 35 BNSS', 'Section 498A IPC', 'Article 21'],
    acts: [
      'Constitution of India, 1950',
      'Code of Criminal Procedure, 1973',
      'Indian Penal Code, 1860',
      'Dowry Prohibition Act, 1961',
      'Bharatiya Nagarik Suraksha Sanhita, 2023',
      'Bharatiya Nyaya Sanhita, 2023'
    ],
    sections: [
      'Article 21',
      'Article 22',
      'Section 41 CrPC',
      'Section 41A CrPC',
      'Section 498A IPC',
      'Section 35 BNSS',
      'Section 85 BNS'
    ],
    relevanceScore: 98,
    relevanceReason: 'Landmark mandate prohibiting automatic arrest in offences punishable with imprisonment up to 7 years. Mandates Section 41A notice and judicial scrutiny of police remand.',
    ratioDecidendi: 'No arrest should be made merely because the offence is non-bailable and cognizable. Police officers must satisfy the conditions under Section 41(1)(b) CrPC and furnish reasons in writing before arresting an accused in offences punishable with up to 7 years imprisonment. Failure to comply renders police officers liable for contempt of court.',
    executiveSummary: 'To curb rampant misuse of Section 498A IPC and mechanical arrests, the Supreme Court laid down 8 mandatory directives for police and Magistrates across India, requiring Section 41A notices before any arrest in offences carrying 7 years or less.',
    caseContext: {
      facts: 'The appellant faced prosecution under Section 498A IPC and Section 4 Dowry Prohibition Act following marital disputes. His anticipatory bail was dismissed by the Patna High Court and he was threatened with immediate custodial arrest.',
      legalIssue: 'Whether police have unfettered discretion to arrest upon registration of an FIR without recording reasons under Section 41 CrPC.'
    },
    arguments: {
      appellant: 'Routine arrest violates Article 21 and Section 41A was enacted precisely to halt automatic arrest.',
      respondent: 'Arrest is necessary for proper interrogation and collection of dowry articles.'
    },
    reasoning: 'Arrest brings humiliation and lifelong stigma. Section 41(1)(b) CrPC mandates that police officers record written reasons before arrest. Magistrates must not authorize remand mechanically.',
    finalDecision: 'Appeal allowed. Mandatory 8 directives issued to all State Police Chiefs and High Courts.',
    obiterDicta: 'A person accused of an offence punishable with up to seven years shall not be arrested routinely.',
    applicableStatutes: [
      'Constitution of India — Article 21, 22',
      'CrPC, 1973 — Sections 41, 41A, 167',
      'BNSS, 2023 — Section 35, 187'
    ],
    precedentsCited: [
      'Joginder Kumar v. State of U.P. (1994) 4 SCC 260',
      'D.K. Basu v. State of West Bengal (1997) 1 SCC 416'
    ],
    subsequentTreatment: [
      'Satender Kumar Antil v. CBI (2022) 10 SCC 51',
      'Md. Asfak Alam v. State of Jharkhand (2023 INSC 687)'
    ],
    practicalTakeaway: 'When police register an FIR carrying <= 7 years sentence, immediately invoke Arnesh Kumar guidelines and seek Section 41A BNSS/CrPC notice of appearance instead of physical custody.',
    keyParagraphs: [
      {
        paraNum: 7,
        text: 'Arrest brings humiliation, curtails freedom and casts scars forever. No arrest should be made simply because it is lawful for the police officer to do so.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CRIMINAL APPEAL NO. 1277 OF 2014

Arnesh Kumar ... Appellant
Versus
State of Bihar & Anr. ... Respondents

JUDGMENT
CHANDRAMAULI KR. PRASAD, J.:

1. We direct:
(1) All State Governments to instruct their police officers not to automatically arrest when a case under Section 498-A IPC or offences punishable with imprisonment up to 7 years is registered.
(2) Police officers must be provided with a checklist containing specified sub-clauses under Section 41(1)(b)(ii).
(3) Notice of appearance in terms of Section 41-A CrPC be served on the accused within two weeks from date of institution of case.
(4) Failure to comply renders police officers liable for departmental action and contempt of court.`
  },
  {
    id: 'sc_2024_04',
    title: 'Satender Kumar Antil v. Central Bureau of Investigation',
    parties: {
      petitioner: 'Satender Kumar Antil',
      respondent: 'Central Bureau of Investigation & Anr.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2022',
    date: '11 July 2022',
    citation: '(2022) 10 SCC 51 / 2022 INSC 690',
    bench: 'Division Bench',
    judges: ["Hon'ble Justice Sanjay Kishan Kaul", "Hon'ble Justice M.M. Sundresh"],
    counsel: {
      petitioner: ['Siddharth Luthra (Sr. Adv. - Amicus Curiae)'],
      respondent: ['S.V. Raju (Additional Solicitor General)']
    },
    caseNumber: 'Miscellaneous Application No. 1849 of 2021 in SLP (Crl.) No. 5191 of 2021',
    caseType: 'Criminal Miscellaneous Application',
    subjectTags: ['Criminal Law', 'Bail Categorisation', 'Section 170 CrPC', 'Section 91 BNSS', 'Article 21', 'Undertrial Rights'],
    acts: [
      'Constitution of India, 1950',
      'Code of Criminal Procedure, 1973',
      'Bharatiya Nagarik Suraksha Sanhita, 2023'
    ],
    sections: [
      'Article 21',
      'Section 88 CrPC',
      'Section 170 CrPC',
      'Section 204 CrPC',
      'Section 436A CrPC',
      'Section 437 CrPC',
      'Section 439 CrPC',
      'Section 91 BNSS',
      'Section 479 BNSS'
    ],
    relevanceScore: 97,
    relevanceReason: 'Magisterial blueprint for bail across Categories A, B, C, and D offences. Clarifies that Section 170 CrPC does not require custody upon filing of chargesheet if accused cooperated throughout.',
    ratioDecidendi: 'Filing of chargesheet does not mandate arrest of an accused under Section 170 CrPC who was not arrested during investigation and cooperated throughout. Courts must categorize offences into Categories A to D and grant bail / summons accordingly.',
    executiveSummary: 'The Supreme Court issued comprehensive nationwide guidelines categorizing criminal offences into four tiers (A, B, C, D) and urged the Union Government to enact a standalone "Bail Act" to dismantle the culture of arbitrary pre-trial incarceration in India.',
    caseContext: {
      facts: 'Courts were routinely taking accused persons into judicial custody upon chargesheet submission under Section 170 CrPC even when they had cooperated throughout investigation.',
      legalIssue: 'Whether Section 170 CrPC mandates arrest and production in physical custody before taking cognizance.'
    },
    arguments: {
      appellant: 'Custodial production post-chargesheet when accused was never arrested is punitive and violates Article 21.',
      respondent: 'Section 170 statutory language refers to accused in custody.'
    },
    reasoning: 'The word "custody" in Section 170 CrPC does not mean prison custody; it merely denotes physical appearance before court. An accused who cooperated throughout investigation cannot be remanded to prison purely because the chargesheet is submitted.',
    finalDecision: 'Detailed categorisation guidelines laid down. Regular bail applications to be disposed of within 2 weeks, anticipatory bail within 6 weeks.',
    obiterDicta: 'Jails in India are flooded with undertrials who constitute over 70% of the prison population. A country should not be seen as a police state.',
    applicableStatutes: [
      'Constitution of India — Article 21',
      'CrPC, 1973 — Sections 88, 170, 204, 436A, 439',
      'BNSS, 2023 — Sections 91, 190, 479'
    ],
    precedentsCited: [
      'Siddharth v. State of U.P. (2022) 1 SCC 676',
      'Arnesh Kumar v. State of Bihar (2014) 8 SCC 273'
    ],
    subsequentTreatment: [
      'Satender Kumar Antil v. CBI (2024 INSC 481 - Follow-up compliance orders)'
    ],
    practicalTakeaway: 'If your client was not arrested during investigation, cite Satender Kumar Antil (Category A) to seek bail upon summons without custody.',
    keyParagraphs: [
      {
        paraNum: 15,
        text: 'Section 170 does not impose an obligation to arrest each accused at the time of filing of chargesheet.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
SLP (CRL.) NO. 5191 OF 2021

Satender Kumar Antil ... Petitioner
Versus
CBI & Anr. ... Respondents

JUDGMENT
M.M. SUNDRESH, J.:

1. Category A Offences (imprisonment <= 7 years):
Where accused was not arrested during investigation and cooperated throughout, upon appearance on summons/warrant, the court shall not remand to custody but release on bail or personal bond.`
  },
  {
    id: 'sc_2024_02',
    slug: 'rangappa-sri-mohan',
    aliases: ['rangappa', 'rangappa-sri-mohan', 'sc_2024_02', 'sc_2010_rangappa'],
    title: 'Rangappa v. Sri Mohan',
    parties: {
      petitioner: 'Rangappa',
      respondent: 'Sri Mohan'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2010',
    date: '07 May 2010',
    citation: '(2010) 11 SCC 441 / AIR 2010 SC 1898 / 2010 INSC 330',
    bench: '3-Judge Bench',
    judges: ["Hon'ble Chief Justice K.G. Balakrishnan", "Hon'ble Justice P. Sathasivam", "Hon'ble Justice J.M. Panchal"],
    counsel: {
      petitioner: ['Counsel for Appellant / Accused'],
      respondent: ['Counsel for Complainant']
    },
    caseNumber: 'Criminal Appeal No. 1020 of 2010',
    caseType: 'Criminal Appeal under Section 138 NI Act',
    subjectTags: ['Commercial Law', 'Negotiable Instruments Act', 'Section 138', 'Section 139', 'Cheque Dishonour', 'Presumption of Debt'],
    acts: [
      'Negotiable Instruments Act, 1881',
      'Indian Evidence Act, 1872'
    ],
    sections: [
      'Section 138 NI Act',
      'Section 139 NI Act',
      'Section 118(a) NI Act',
      'Section 114 Evidence Act'
    ],
    relevanceScore: 99,
    relevanceReason: 'Settled law on cheque bounce: Once signature is admitted, the statutory presumption under Section 139 NI Act includes the existence of a legally enforceable debt. Rebuttal burden is on preponderance of probabilities.',
    ratioDecidendi: 'Under Section 139 of the Negotiable Instruments Act, once execution/signature of the cheque is admitted, the statutory presumption extends not merely to consideration but also to the existence of a legally enforceable debt or liability. The standard of proof to rebut this presumption is on the preponderance of probabilities.',
    executiveSummary: 'This 3-Judge Bench ruling overruled the earlier narrower view in Krishna Janardhan Bhat, clarifying that the statutory presumption in Section 139 NI Act presumes a legally enforceable debt, placing the evidentiary rebuttal burden squarely on the drawer.',
    caseContext: {
      facts: 'A complaint under Section 138 was filed following dishonour of a cheque for Rs. 45,000/-. The drawer admitted his signature but alleged the blank cheque was stolen.',
      legalIssue: 'Does the statutory presumption in Section 139 NI Act include the existence of a legally enforceable debt?'
    },
    arguments: {
      appellant: 'Complainant did not prove independent financial capacity to advance loan.',
      respondent: 'Admission of signature triggers mandatory presumption of debt under Section 139.'
    },
    reasoning: 'Section 139 is a reverse onus clause designed to ensure commercial certainty. Rebuttal does not require proof beyond reasonable doubt; preponderance of probabilities is sufficient.',
    finalDecision: 'Appeal allowed. High Court acquittal set aside; trial court conviction restored.',
    obiterDicta: 'The accused is not required to enter witness box; he can rely on cross-examination of complainant.',
    applicableStatutes: [
      'NI Act, 1881 — Sections 138, 139, 118(a)'
    ],
    precedentsCited: [
      'Krishna Janardhan Bhat v. Dattatraya G. Hegde (2008) 4 SCC 54 (Overruled on debt presumption)'
    ],
    subsequentTreatment: [
      'Kalamani Tex v. P. Balasubramanian (2021) 5 SCC 283',
      'Triyambak S. Hegde v. Sripad (2022) 1 SCC 742'
    ],
    practicalTakeaway: 'For complainants, establish signature on cheque and dispatch of statutory demand notice within 30 days. For defence, cross-examine complainant on IT returns and cash capacity.',
    keyParagraphs: [
      {
        paraNum: 26,
        text: 'The presumption mandated by Section 139 does indeed include the existence of a legally enforceable debt or liability.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CRIMINAL APPEAL NO. 1020 OF 2010

Rangappa ... Appellant
Versus
Sri Mohan ... Respondent

JUDGMENT
K.G. BALAKRISHNAN, C.J.I.:

1. Once the signature on the cheque is admitted by the accused, Section 139 mandates drawing the presumption that the cheque was issued in discharge of a legally enforceable debt. The standard of proof for rebutting this presumption is that of preponderance of probabilities.`
  },
  {
    id: 'sc_2024_06',
    title: 'Lalita Kumari v. Government of Uttar Pradesh',
    parties: {
      petitioner: 'Lalita Kumari (Minor)',
      respondent: 'Govt. of U.P. & Ors.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2014',
    date: '12 November 2013',
    citation: '(2014) 2 SCC 1 / AIR 2014 SC 187 / 2013 INSC 802',
    bench: '5-Judge Constitutional Bench',
    judges: [
      "Hon'ble Chief Justice P. Sathasivam",
      "Hon'ble Justice B.S. Chauhan",
      "Hon'ble Justice Ranjana P. Desai",
      "Hon'ble Justice Ranjan Gogoi",
      "Hon'ble Justice S.A. Bobde"
    ],
    counsel: {
      petitioner: ['S.B. Upadhyay (Sr. Adv.)'],
      respondent: ['Counsel for State of U.P.']
    },
    caseNumber: 'Writ Petition (Criminal) No. 68 of 2008',
    caseType: 'Writ Petition (Criminal) under Article 32',
    subjectTags: ['Criminal Law', 'FIR Registration', 'Section 154 CrPC', 'Section 173 BNSS', 'Preliminary Inquiry', 'Cognizable Offence'],
    acts: [
      'Code of Criminal Procedure, 1973',
      'Bharatiya Nagarik Suraksha Sanhita, 2023',
      'Indian Penal Code, 1860'
    ],
    sections: [
      'Section 154 CrPC',
      'Section 173 BNSS',
      'Section 166A IPC'
    ],
    relevanceScore: 98,
    relevanceReason: 'Absolute statutory mandate making registration of FIR under Section 154 CrPC / 173 BNSS compulsory if information discloses commission of a cognizable offence. Limited 7-day preliminary inquiry only in 5 exceptions.',
    ratioDecidendi: 'Registration of FIR is mandatory under Section 154 of the Code if the information discloses commission of a cognizable offence and no preliminary inquiry is permissible in such a situation. Preliminary inquiry is permissible only in exceptional categories (matrimonial disputes, commercial offences, medical negligence, corruption, delay > 3 months) strictly limited to 7 days.',
    executiveSummary: 'A 5-Judge Constitution Bench settled the long-standing debate on Section 154 CrPC by ruling that police officers have zero discretion to refuse registration of an FIR when cognizable allegations are made. Failure to register FIR attracts penal action under Section 166A IPC.',
    caseContext: {
      facts: 'A writ petition under Article 32 was filed through the father of a kidnapped minor girl alleging that police officers refused to register an FIR for days until monetary consideration was demanded.',
      legalIssue: 'Is a police officer bound to register an FIR upon receiving information relating to a cognizable offence under Section 154 CrPC or does he have discretion to conduct a preliminary inquiry?'
    },
    arguments: {
      appellant: 'The word "shall" in Section 154(1) leaves zero discretion to police officers to refuse registration.',
      respondent: 'Preliminary inquiry prevents vexatious complaints and unnecessary harassment of citizens.'
    },
    reasoning: 'The word "shall" in Section 154(1) leaves no discretion. The legislative scheme guarantees that state machinery is immediately set into motion and records are not manipulated post-facto.',
    finalDecision: 'Mandatory guidelines issued. Police officers failing to register FIR in cognizable matters subject to prosecution under Section 166A IPC / Section 199 BNS and disciplinary action.',
    obiterDicta: 'The general rule is that registration of FIR is mandatory. Discretionary preliminary inquiry is an exception.',
    applicableStatutes: [
      'CrPC, 1973 — Sections 154, 156, 157',
      'BNSS, 2023 — Sections 173, 175',
      'IPC, 1860 — Section 166A'
    ],
    precedentsCited: [
      'State of Haryana v. Bhajan Lal (1992) Supp (1) SCC 335',
      'Ramesh Kumari v. State (NCT of Delhi) (2006) 2 SCC 677'
    ],
    subsequentTreatment: [
      'Youth Bar Association of India v. Union of India (2016) 9 SCC 473'
    ],
    practicalTakeaway: 'When police refuse to lodge an FIR for cognizable offence, send written complaint to SP under Section 154(3) CrPC / 173(4) BNSS and move Magistrate under Section 156(3) CrPC / 175(3) BNSS.',
    keyParagraphs: [
      {
        paraNum: 120,
        text: 'Registration of FIR is mandatory under Section 154 of the Code, if the information discloses commission of a cognizable offence.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
WRIT PETITION (CRIMINAL) NO. 68 OF 2008

Lalita Kumari ... Petitioner
Versus
Government of U.P. & Ors. ... Respondents

JUDGMENT
P. SATHASIVAM, C.J.I.:

1. Registration of FIR is mandatory under Section 154 of the Code, if the information discloses commission of a cognizable offence and no preliminary inquiry is permissible in such a situation.
2. If the information does not disclose a cognizable offence but indicates the necessity for an inquiry, a preliminary inquiry may be conducted only to ascertain whether cognizable offence is disclosed or not.
3. The preliminary inquiry must be completed expeditiously and in any case within 7 days.`
  },
  {
    id: 'navtej-singh-johar',
    slug: 'navtej-singh-johar',
    aliases: ['navtej-singh-johar', 'sc_2018_navtej_johar', 'navtej_johar'],
    title: 'Navtej Singh Johar v. Union of India',
    parties: {
      petitioner: 'Navtej Singh Johar & Ors.',
      respondent: 'Union of India thr. Secretary Ministry of Law and Justice'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2018',
    date: '6 September 2018',
    citation: '(2018) 10 SCC 1 / AIR 2018 SC 4321 / 2018 INSC 790',
    bench: '5-Judge Constitutional Bench',
    judges: [
      "Hon'ble Chief Justice Dipak Misra",
      "Hon'ble Justice R.F. Nariman",
      "Hon'ble Justice A.M. Khanwilkar",
      "Hon'ble Justice D.Y. Chandrachud",
      "Hon'ble Justice Indu Malhotra"
    ],
    counsel: {
      petitioner: ['Mukul Rohatgi (Senior Advocate)', 'Arvind Datar (Senior Advocate)', 'Menaka Guruswamy (Senior Advocate)', 'Anand Grover (Senior Advocate)', 'Shyam Divan (Senior Advocate)'],
      respondent: ['Tushar Mehta (Additional Solicitor General)', 'K. Radhakrishnan (Senior Advocate)']
    },
    caseNumber: 'Writ Petition (Criminal) No. 76 of 2016',
    caseType: 'Writ Petition (Criminal) under Article 32',
    subjectTags: ['Constitutional Law', 'Article 21', 'Article 14', 'Article 15', 'Article 19', 'Section 377 IPC', 'LGBTQ+ Rights', 'Right to Privacy', 'Decriminalization of Homosexuality', 'Fundamental Rights'],
    acts: [
      'Indian Penal Code, 1860',
      'Constitution of India, 1950',
      'Bharatiya Nyaya Sanhita, 2023'
    ],
    sections: [
      'Section 377 IPC',
      'Article 14',
      'Article 15',
      'Article 19(1)(a)',
      'Article 21'
    ],
    relevanceScore: 99,
    relevanceReason: 'Paramount 5-Judge Constitution Bench holding Section 377 IPC unconstitutional insofar as it criminalized consensual sexual conduct between adults in private, establishing that sexual orientation is an intrinsic and inalienable component of dignity, equality, and privacy under Articles 14, 15, 19 and 21.',
    ratioDecidendi: 'Section 377 of the Indian Penal Code, insofar as it criminalizes consensual sexual acts between adults in private, is unconstitutional, being violative of Articles 14, 15, 19, and 21 of the Constitution. Constitutional morality trumps majoritarian and popular morality. The sexual orientation of an individual is an intrinsic facet of privacy, dignity, and personal autonomy protected by Article 21. Suresh Kumar Koushal v. Naz Foundation is expressly overruled.',
    executiveSummary: 'A 5-Judge Constitution Bench unanimously struck down the 158-year-old colonial penal provision in Section 377 IPC to the extent it criminalized consensual sexual acts between adults in private. The Court held that sexual orientation is natural, innate, and deeply rooted in personal identity, falling squarely under the protective umbrella of fundamental freedoms under Articles 14, 15, 19(1)(a), and 21. Section 377 continues in force only for non-consensual sexual acts, acts against minors, and bestiality.',
    caseContext: {
      facts: 'A group of LGBTQ+ individuals, including Sangeet Natak Akademi awardee dancer Navtej Singh Johar, journalist Sunil Mehra, chef Ritu Dalmia, hotelier Aman Nath, and businesswoman Ayesha Kapur, approached the Supreme Court under Article 32 seeking a declaration that Section 377 IPC violated their fundamental rights. Earlier, the Delhi High Court had read down Section 377 in Naz Foundation (2009), but a two-judge bench of the Supreme Court reversed that in Suresh Kumar Koushal (2013). The 9-judge privacy bench in K.S. Puttaswamy (2017) observed that Koushal was discordant with modern constitutional jurisprudence.',
      legalIssue: '1. Whether Section 377 IPC violates Article 14 by subjecting LGBTQ+ individuals to manifest arbitrariness and hostile discrimination?\n2. Does prohibition of discrimination on ground of "sex" under Article 15 include sexual orientation?\n3. Does criminalizing private consensual adult intimacy violate the right to privacy, bodily autonomy, and human dignity guaranteed under Article 21?'
    },
    arguments: {
      appellant: 'Mukul Rohatgi, Arvind Datar, and Menaka Guruswamy submitted:\n• Section 377 reduces a significant minority of Indian citizens to unconvicted felons based solely on their innate identity.\n• The right to privacy recognized in Puttaswamy encompasses the right to intimacy, choice of partner, and sexual orientation.\n• Constitutional morality must prevail over societal prejudices; fundamental rights cannot depend on majoritarian consensus.',
      respondent: 'Union of India left the question of constitutional validity of Section 377 regarding consensual adult relationships to the wisdom of the Court, while submitting that other civil questions like marriage or adoption were not before the Bench. Religious interveners argued that decriminalization would undermine traditional family structures.'
    },
    reasoning: 'The Bench held through separate concurring opinions:\n1. Popular morality cannot subvert constitutional morality. The Constitution exists to protect minorities against the tyranny of majorities.\n2. Sexual orientation is an essential attribute of identity. Denying equality on this basis amounts to discrimination under Article 15.\n3. The State has no legitimate interest in policing private, consensual intimate choices of adult individuals.\n4. Suresh Kumar Koushal is formally overruled.',
    finalDecision: 'Petitions Allowed. Section 377 IPC declared unconstitutional to the extent it criminalized consensual sexual acts between adults in private.',
    applicableStatutes: [
      'IPC, 1860 — Section 377',
      'Constitution of India, 1950 — Articles 14, 15, 19, 21'
    ],
    relatedPrecedents: [
      {
        case_name: 'Suresh Kumar Koushal v. Naz Foundation',
        citation: '(2014) 1 SCC 1',
        court: 'Supreme Court of India (2-Judge Bench)',
        year: '2014',
        treatment: 'Overruled',
        principle: 'Earlier decision upholding Section 377 IPC on grounds of minor percentage of LGBTQ+ population expressly held unconstitutional.'
      },
      {
        case_name: 'Naz Foundation v. Government of NCT of Delhi',
        citation: '2009 SCC OnLine Del 1701',
        court: 'Delhi High Court (Division Bench)',
        year: '2009',
        treatment: 'Approved & Upheld',
        principle: 'Historic reading down of Section 377 by Delhi HC affirmed as conforming to constitutional morality and human dignity.'
      },
      {
        case_name: 'National Legal Services Authority (NALSA) v. Union of India',
        citation: '(2014) 5 SCC 438',
        court: 'Supreme Court of India',
        year: '2014',
        treatment: 'Followed',
        principle: 'Gender identity is inalienable to human dignity and freedom under Articles 14 and 21; third gender legal recognition.'
      },
      {
        case_name: 'K.S. Puttaswamy v. Union of India',
        citation: '(2017) 10 SCC 1',
        court: 'Supreme Court of India (9-Judge Bench)',
        year: '2017',
        treatment: 'Followed & Applied',
        principle: '9-Judge Bench held sexual orientation is an intrinsic facet of the fundamental right to privacy and bodily autonomy.'
      },
      {
        case_name: 'Shafin Jahan v. Asokan K.M.',
        citation: '(2018) 16 SCC 368',
        court: 'Supreme Court of India',
        year: '2018',
        treatment: 'Applied',
        principle: 'Autonomy of an individual to choose a partner of their choice in private life is constitutionally inviolable.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
WRIT PETITION (CRIMINAL) NO. 76 OF 2016

Navtej Singh Johar & Ors. ... Petitioners
Versus
Union of India ... Respondent

JUDGMENT
DIPAK MISRA, C.J.I.:

1. Bodily autonomy and the choice of partner are intrinsic to the right to life and liberty under Article 21.
2. Section 377 IPC, in so far as it penalises consensual sexual acts between adults in private, is violative of Articles 14, 15, 19 and 21 of the Constitution and is accordingly declared unconstitutional.
3. The judgment in Suresh Kumar Koushal v. Naz Foundation is hereby overruled.`
  },
  {
    id: 'sr-bommai',
    slug: 'sr-bommai',
    aliases: ['sr-bommai', 'sc_1994_sr_bommai', 'bommai'],
    title: 'S. R. Bommai v. Union of India',
    parties: {
      petitioner: 'S. R. Bommai & Ors.',
      respondent: 'Union of India & Ors.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '1994',
    date: '11 March 1994',
    citation: '(1994) 3 SCC 1 / AIR 1994 SC 1918 / 1994 INSC 141',
    bench: '9-Judge Constitutional Bench',
    judges: [
      "Hon'ble Justice S. Ratnavel Pandian",
      "Hon'ble Justice A.M. Ahmadi",
      "Hon'ble Justice J.S. Verma",
      "Hon'ble Justice P.B. Sawant",
      "Hon'ble Justice K. Ramaswamy",
      "Hon'ble Justice S.C. Agrawal",
      "Hon'ble Justice Yogeshwar Dayal",
      "Hon'ble Justice B.P. Jeevan Reddy",
      "Hon'ble Justice S. Mohan"
    ],
    counsel: {
      petitioner: ['Soli J. Sorabjee (Senior Advocate)', 'Ram Jethmalani (Senior Advocate)', 'Shanti Bhushan (Senior Advocate)'],
      respondent: ['Milon K. Banerjee (Attorney General for India)', 'Dipankar P. Gupta (Solicitor General)']
    },
    caseNumber: 'Civil Appeal No. 3645 of 1989',
    caseType: 'Civil Appeal under Article 136',
    subjectTags: ['Constitutional Law', 'Article 356', 'Federalism', 'Basic Structure', 'President Rule', 'Judicial Review', 'Secularism'],
    acts: ['Constitution of India, 1950'],
    sections: ['Article 356', 'Article 74(2)', 'Article 368'],
    relevanceScore: 99,
    relevanceReason: 'Authoritative 9-Judge Constitution Bench establishing that Article 356 power is conditional, proclamations of President\'s Rule are subject to judicial review, floor test is the only constitutional criterion for majority, and Secularism & Federalism are core Basic Structure features.',
    ratioDecidendi: 'The power of the President under Article 356 to dissolve a State Assembly and impose President\'s Rule is a conditional power subject to judicial review. The floor test in the Legislative Assembly is the only constitutional mechanism to assess majority. Secularism and Federalism are essential features of the Basic Structure of the Constitution.',
    executiveSummary: 'A 9-Judge Constitution Bench laid down historic constraints on the arbitrary invocation of Article 356 (President\'s Rule). The Court ruled that dissolution of State Assemblies before Parliamentary approval is unconstitutional. If an Article 356 proclamation is found mala fide, the Court has full power to restore the dissolved Legislative Assembly and ministry.',
    caseContext: {
      facts: 'Following political instability, the Janata Dal government in Karnataka led by S.R. Bommai was dismissed under Article 356 without giving the Chief Minister an opportunity to prove majority on the floor of the House. Simultaneously, several other state governments were dismissed following the Babri Masjid demolition.',
      legalIssue: '1. Whether a Presidential Proclamation under Article 356 is justiciable and subject to judicial review?\n2. What is the scope of Article 74(2) regarding the advice tendered by Council of Ministers?\n3. Is floor test mandatory before dissolving a State Assembly?'
    },
    arguments: {
      appellant: 'Soli Sorabjee argued that Article 356 is an extraordinary power intended to be a dead letter except in grave breakdown. Dissolving elected governments without floor tests violates democratic governance and federalism.',
      respondent: 'Union of India submitted that the President\'s satisfaction under Article 356 is subjective and political, immune from judicial scrutiny under Article 74(2).'
    },
    reasoning: 'The Court held that the satisfaction of the President must be based on objective material. Floor test in the assembly is the only objective test. Dissolution cannot take effect until both Houses of Parliament approve the proclamation.',
    finalDecision: 'Petition Allowed in part; Floor test declared mandatory before dissolving legislative assemblies.',
    applicableStatutes: ['Constitution of India — Article 356, Article 74, Article 368'],
    relatedPrecedents: [
      {
        case_name: 'State of Rajasthan v. Union of India',
        citation: '(1977) 3 SCC 592',
        court: 'Supreme Court of India (7-Judge Bench)',
        year: '1977',
        treatment: 'Considered & Distinguished',
        principle: 'Scope of Article 356 judicial review widened beyond narrow malafide standard to objective material test.'
      },
      {
        case_name: 'Minerva Mills Ltd. v. Union of India',
        citation: '(1980) 3 SCC 625',
        court: 'Supreme Court of India (5-Judge Bench)',
        year: '1980',
        treatment: 'Followed',
        principle: 'Limited constituent and executive power is a basic feature; complete immunity from judicial scrutiny cannot exist.'
      },
      {
        case_name: 'Kehar Singh v. Union of India',
        citation: '(1989) 1 SCC 204',
        court: 'Supreme Court of India (5-Judge Bench)',
        year: '1989',
        treatment: 'Followed',
        principle: 'Constitutional powers vested in the highest executive remain subject to rule of law and judicial review on established legal parameters.'
      },
      {
        case_name: 'Rameshwar Prasad v. Union of India',
        citation: '(2006) 2 SCC 1',
        court: 'Supreme Court of India (5-Judge Bench)',
        year: '2006',
        treatment: 'Applied & Reaffirmed',
        principle: 'Dissolution of Bihar Assembly declared unconstitutional for failing Bommai floor test criteria.'
      }
    ]
  },
  {
    id: 'bir-singh',
    slug: 'bir-singh',
    aliases: ['bir-singh', 'sc_2019_bir_singh', 'birsingh'],
    title: 'Bir Singh v. Mukesh Kumar',
    parties: {
      petitioner: 'Bir Singh',
      respondent: 'Mukesh Kumar'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2019',
    date: '6 February 2019',
    citation: '(2019) 4 SCC 197 / AIR 2019 SC 2446',
    bench: '2-Judge Bench',
    judges: [
      "Hon'ble Justice R. Banumathi",
      "Hon'ble Justice Indira Banerjee"
    ],
    counsel: {
      petitioner: ['R.K. Gupta (Advocate)'],
      respondent: ['Subhash Sharma (Advocate)']
    },
    caseNumber: 'Criminal Appeal Nos. 230-231 of 2019',
    caseType: 'Criminal Appeal',
    subjectTags: ['Negotiable Instruments Act', 'Section 138 NI Act', 'Section 139 NI Act', 'Blank Cheque', 'Presumption of Debt'],
    acts: ['Negotiable Instruments Act, 1881'],
    sections: ['Section 20', 'Section 138', 'Section 139', 'Section 118'],
    relevanceScore: 97,
    relevanceReason: 'Leading Supreme Court precedent establishing that voluntarily handing over a signed blank cheque attracts the statutory presumption of debt under Section 139 NI Act, and the drawer authorizes the holder to fill details.',
    ratioDecidendi: 'Even if a blank cheque leaf is voluntarily signed and handed over to the payee towards some payment, the presumption under Section 139 of the Negotiable Instruments Act arises. Handing over a blank signed cheque leaf amounts to authorising the payee to fill the particulars. The drawer is bound by drawer liability unless rebutted by evidence on preponderance of probabilities.',
    executiveSummary: 'Supreme Court clarified that a blank signed cheque handed over to the complainant does not exempt the drawer from prosecution under Section 138 NI Act. By signing a cheque leaf, the drawer vests implied authority in the holder to complete the instrument under Section 20 NI Act.',
    caseContext: {
      facts: 'The accused handed over a signed blank cheque to complainant for friendly loan repayment. Complainant filled particulars and presented for clearance. Cheque dishonoured with remarks "insufficient funds". Trial court convicted accused; High Court acquitted holding blank cheque is not valid.',
      legalIssue: 'Whether handing over a blank signed cheque leaf exempts the drawer from Section 138 liability if the details are filled by another person.'
    },
    arguments: {
      appellant: 'Complainant submitted that Section 20 NI Act empowers holder to fill inchoate stamped instruments. Handing over signed cheque gives authority.',
      respondent: 'Accused argued that blank cheque was given as security and no legally enforceable debt existed when signed.'
    },
    reasoning: 'Justice Banumathi held that fiduciary drawer liability applies even if details are filled by another person. The statutory presumption under Section 139 is mandatory.',
    finalDecision: 'High Court acquittal set aside; trial court conviction and fine restored.',
    applicableStatutes: ['Negotiable Instruments Act, 1881 — Sections 20, 118, 138, 139'],
    relatedPrecedents: [
      {
        case_name: 'Rangappa v. Sri Mohan',
        citation: '(2010) 11 SCC 441',
        court: 'Supreme Court of India (3-Judge Bench)',
        treatment: 'Followed',
        principle: '3-Judge Bench held Section 139 includes presumption of existence of legally enforceable debt; reverse onus is on accused.'
      },
      {
        case_name: 'Krishna Janardhan Bhat v. Dattatraya G. Hegde',
        citation: '(2008) 4 SCC 54',
        court: 'Supreme Court of India',
        treatment: 'Distinguished',
        principle: 'Overruled in part by Rangappa v. Sri Mohan regarding whether presumption of debt extends to Section 139.'
      },
      {
        case_name: 'T. Vasanthakumar v. Vijayakumari',
        citation: '(2015) 8 SCC 378',
        court: 'Supreme Court of India',
        treatment: 'Applied',
        principle: 'Once execution of cheque and signature is admitted, the court must raise statutory presumption under Section 139.'
      }
    ]
  },
  {
    id: 'rajnesh-neha',
    slug: 'rajnesh-v-neha',
    aliases: ['rajnesh', 'rajnesh-neha', 'rajnesh-v-neha', 'rajnesh_v_neha', 'sc_2020_rajnesh'],
    title: 'Rajnesh v. Neha and Another',
    parties: {
      petitioner: 'Rajnesh',
      respondent: 'Neha and Another'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2020',
    date: '4 November 2020',
    citation: '(2021) 2 SCC 324 / AIR 2021 SC 569 / 2020 INSC 629',
    bench: '2-Judge Division Bench',
    judges: [
      "Hon'ble Justice Indu Malhotra",
      "Hon'ble Justice R. Subhash Reddy"
    ],
    counsel: {
      petitioner: ['Gopal Sankaranarayanan (Senior Advocate)', 'Chirag M. Shroff (Advocate on Record)'],
      respondent: ['Sudhanshu S. Choudhari (Advocate for Respondent Wife)'],
      amicusCuriae: ['Ms. Anitha Shenoy (Senior Advocate - Appointed Amicus Curiae)']
    },
    caseNumber: 'Criminal Appeal No. 730 of 2020 (Arising out of SLP (Crl.) No. 9503 of 2018)',
    caseType: 'Criminal Appeal under Article 136',
    subjectTags: ['Matrimonial Law', 'Maintenance Guidelines', 'Affidavit of Assets and Liabilities', 'Section 125 CrPC', 'Domestic Violence Act', 'Hindu Marriage Act Section 24', 'Interim Maintenance', 'Overlapping Maintenance', 'Arrears of Maintenance'],
    acts: [
      'Code of Criminal Procedure, 1973',
      'Protection of Women from Domestic Violence Act, 2005',
      'Hindu Marriage Act, 1955',
      'Special Marriage Act, 1954',
      'Constitution of India, 1950'
    ],
    sections: [
      'Section 125 CrPC',
      'Section 127 CrPC',
      'Section 128 CrPC',
      'Section 12 DV Act',
      'Section 20 DV Act',
      'Section 23 DV Act',
      'Section 24 HMA',
      'Section 25 HMA',
      'Article 141',
      'Article 142'
    ],
    relevanceScore: 99,
    relevanceReason: 'Historic 2-Judge Bench decision authoritatively formulating pan-India uniform binding guidelines under Article 141 on mandatory disclosure of assets and liabilities, overlapping maintenance adjustments, determination criteria, date of effect (from application date), and enforcement mechanisms in matrimonial disputes.',
    ratioDecidendi: '1. Date of Award: Maintenance in all matrimonial cases must be awarded from the date of filing of the application, preventing hardship caused by judicial delays.\n2. Mandatory Affidavit of Assets & Liabilities: Both parties must compulsorily file comprehensive Affidavits of Assets and Liabilities (Enclosures I, II & III) at the threshold of proceedings.\n3. Overlapping Maintenance: While an applicant can seek relief under multiple statutes (s.125 CrPC, s.24 HMA, s.20 DV Act), previous maintenance awards must be adjusted/set off to avoid unjust enrichment.\n4. Criteria for Determination: Determination must balance reasonable needs of wife and children, status and lifestyle in matrimonial home, earning capacity vs actual earnings, and inflationary cost of living.\n5. Enforcement of Arrears: Maintenance orders are enforceable as civil court decrees, attachment of property/salary, and civil detention under Section 125(3) CrPC.',
    executiveSummary: 'A landmark ruling authored by Justice Indu Malhotra resolving conflicting High Court decisions regarding the date from which maintenance is payable, overlapping claims under multiple statutes, and concealment of income. The Supreme Court prescribed standardized forms for Affidavit of Disclosure of Assets and Liabilities to be compulsorily filed in all maintenance proceedings across India.',
    caseContext: {
      facts: 'The appellant-husband challenged an interim maintenance order of Rs. 15,000 per month awarded to the wife and Rs. 5,000 per month for the minor child by the Family Court, affirmed by the Bombay High Court. The husband concealed his real income and failed to pay arrears amounting to nearly Rs. 18 lakhs. Noticing the rampant practice of concealment of income and years of delay in interim maintenance applications, the Supreme Court appointed Senior Advocate Anitha Shenoy as Amicus Curiae to frame comprehensive national guidelines.',
      legalIssue: '1. Whether maintenance should be granted from the date of application or from the date of the judicial order?\n2. How to harmonize overlapping maintenance awards granted under Section 125 CrPC, Section 24 HMA, and Section 20 of DV Act?\n3. What standardized procedure must be adopted to ensure true and complete disclosure of assets and income by spouses?\n4. What criteria should guide the quantum of interim maintenance?\n5. What coercive measures should be adopted to enforce arrears of maintenance?'
    },
    arguments: {
      appellant: 'Gopal Sankaranarayanan, Senior Advocate for Appellant Husband:\n• The Family Court passed an onerous interim maintenance order without examining the husband\'s actual earning capacity and business liabilities.\n• Multiplicity of proceedings under Section 125 CrPC, HMA Section 24, and DV Act results in contradictory and crushing maintenance obligations on the husband.\n• Awarding maintenance from the date of application creates unbearable retrospective arrears when trials take 5 to 7 years.',
      respondent: 'Sudhanshu S. Choudhari for Respondent Wife & Anitha Shenoy, Amicus Curiae:\n• Section 125 CrPC and matrimonial statutes are social justice measures enacted to prevent destitution and vagrancy. Delay in adjudication should not penalize the dependent spouse.\n• Husbands systematically conceal assets and business revenue in family entities to defeat maintenance claims.\n• Mandatory comprehensive asset disclosures and awarding maintenance from the date of application are essential to prevent starvation during protracted litigation.'
    },
    reasoning: 'Justice Indu Malhotra, delivering the judgment of the Court, held:\n1. The objective of maintenance is to prevent destitution and ensure the dependent spouse lives with dignity consistent with the husband\'s status.\n2. Delay of years in disposing of interim applications is endemic. If maintenance is granted only from the date of order, the paying party is incentivized to delay proceedings.\n3. The Court exercised powers under Article 142 to frame comprehensive guidelines and model Affidavits of Assets and Liabilities for agrarian, urban, and non-working spouses.',
    quotableParagraphs: [
      {
        paraNumber: 56,
        theme: 'Mandatory Affidavit of Assets',
        text: 'The Affidavit of Assets and Liabilities must be filed by both parties in all maintenance proceedings, including pending proceedings, throughout the country.'
      },
      {
        paraNumber: 62,
        theme: 'Date of Maintenance Award',
        text: 'If maintenance is granted from the date of the order, the applicant is deprived of maintenance during the pendency of the proceeding, and the respondent gets a windfall by adopting dilatory tactics. Therefore, maintenance must be awarded from the date of application.'
      },
      {
        paraNumber: 109,
        theme: 'Wife\'s Capability vs Actual Earning',
        text: 'The plea that the wife is educated and could earn is not a ground to deny maintenance where she was not actually employed or earning.'
      },
      {
        paraNumber: 113,
        theme: 'Enforcement as Civil Decree',
        text: 'An order of maintenance may be enforced like a decree of a civil court, by attachment of property or salary, or by commitment to jail under Section 125(3) CrPC.'
      }
    ],
    relatedPrecedents: [
      {
        case_name: 'Chaturbhuj v. Sita Bai',
        citation: '(2008) 2 SCC 316',
        court: 'Supreme Court of India',
        year: '2008',
        treatment: 'Followed',
        principle: 'Object of maintenance under Section 125 CrPC is to prevent vagrancy and destitution; it is a measure of social justice.'
      },
      {
        case_name: 'Bhuwan Mohan Singh v. Meena',
        citation: '(2015) 6 SCC 353',
        court: 'Supreme Court of India',
        year: '2015',
        treatment: 'Approved & Harmonized',
        principle: 'Maintenance must be awarded from the date of application; delay caused by judicial backlog cannot penalize the dependent wife.'
      },
      {
        case_name: 'Badshah v. Urmila Badshah Godse',
        citation: '(2014) 1 SCC 188',
        court: 'Supreme Court of India',
        year: '2014',
        treatment: 'Followed',
        principle: 'Purposive construction of beneficial social welfare legislation to advance the constitutional cause of gender justice.'
      },
      {
        case_name: 'Jasbir Kaur Sehgal v. District Judge, Dehradun',
        citation: '(1997) 7 SCC 7',
        court: 'Supreme Court of India',
        year: '1997',
        treatment: 'Applied',
        principle: 'Maintenance should be determined taking into account the status, reasonable needs, and standard of living enjoyed in the matrimonial home.'
      },
      {
        case_name: 'Kalyan Dey Chowdhury v. Rita Dey Chowdhury',
        citation: '(2017) 14 SCC 200',
        court: 'Supreme Court of India',
        year: '2017',
        treatment: 'Applied',
        principle: '25% of the net income/salary of the husband serves as a balanced benchmark guideline for maintenance.'
      },
      {
        case_name: 'Shailja v. Khobbanna',
        citation: '(2018) 12 SCC 231',
        court: 'Supreme Court of India',
        year: '2018',
        treatment: 'Followed',
        principle: 'Mere capability of the wife to earn is no ground to deny maintenance where she is not actually earning.'
      },
      {
        case_name: 'Sunita Kachwaha v. Anil Kachwaha',
        citation: '(2014) 16 SCC 715',
        court: 'Supreme Court of India',
        year: '2014',
        treatment: 'Applied',
        principle: 'Legal and moral duty of able-bodied husband to maintain his wife and minor children.'
      }
    ],
    finalDecision: 'Appeal disposed of with binding national guidelines and direction to husband to clear arrears.',
    applicableStatutes: [
      'Code of Criminal Procedure, 1973 — Section 125',
      'Protection of Women from Domestic Violence Act, 2005 — Sections 12, 20',
      'Hindu Marriage Act, 1955 — Sections 24, 25',
      'Constitution of India — Articles 141, 142'
    ]
  },
  {
    id: 'cox-and-kings',
    slug: 'cox-and-kings-sap-india',
    aliases: ['cox-and-kings', 'sap-india', 'cox-and-kings-sap-india', 'sc_2023_cox_kings'],
    title: 'Cox and Kings Ltd. v. SAP India Pvt. Ltd. & Anr.',
    parties: {
      petitioner: 'Cox and Kings Ltd.',
      respondent: 'SAP India Pvt. Ltd. & Anr.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '2023',
    date: '06 December 2023',
    citation: '(2024) 4 SCC 1 / 2023 INSC 1051',
    bench: '5-Judge Constitutional Bench',
    judges: [
      "Hon'ble Chief Justice D.Y. Chandrachud",
      "Hon'ble Justice Hrishikesh Roy",
      "Hon'ble Justice P.S. Narasimha",
      "Hon'ble Justice J.B. Pardiwala",
      "Hon'ble Justice Manoj Misra"
    ],
    counsel: {
      petitioner: ['Senior Advocates for Cox & Kings'],
      respondent: ['Senior Advocates for SAP India']
    },
    caseNumber: 'Arbitration Petition (Civil) No. 38 of 2020',
    caseType: 'Commercial Arbitration Petition under Section 11(6)',
    subjectTags: ['Commercial Law', 'Arbitration', 'Group of Companies Doctrine', 'Section 7', 'Section 8', 'Section 11', 'Non-Signatory Liability', 'Contract Breach', 'Commercial Dispute'],
    acts: [
      'Arbitration and Conciliation Act, 1996',
      'Indian Contract Act, 1872',
      'Companies Act, 2013'
    ],
    sections: [
      'Section 7 Arbitration Act',
      'Section 8 Arbitration Act',
      'Section 9 Arbitration Act',
      'Section 11 Arbitration Act',
      'Section 16 Arbitration Act'
    ],
    relevanceScore: 98,
    relevanceReason: 'Authoritative 5-Judge Constitution Bench affirming that non-signatory group entities can be bound by arbitration agreements under the "Group of Companies" doctrine based on mutual intention, corporate structure, and contract performance.',
    ratioDecidendi: 'The "Group of Companies" doctrine is an integral principle of Indian arbitration jurisprudence under Section 7 of the Arbitration and Conciliation Act, 1996. A non-signatory affiliate or parent company can be bound by an arbitration agreement if the circumstances demonstrate mutual intention of all parties to bind it, evidenced by active involvement in contract negotiation, execution, or performance within a tight corporate group.',
    executiveSummary: 'A 5-Judge Constitution Bench led by CJI D.Y. Chandrachud reconciled Indian arbitration jurisprudence with modern corporate transactions. The Court held that modern contracts often involve complex multi-layered corporate groups where execution is done by an operating subsidiary while performance and control reside in the parent entity. Section 7 only mandates that the arbitration agreement be in writing; it does not mandate that non-signatories must affix physical signatures if their consensus ad idem is established.',
    caseContext: {
      facts: 'Cox & Kings entered into software licensing agreements with SAP India. When disputes arose regarding contract implementation and breach, Cox & Kings invoked arbitration against both SAP India and its German parent company SAP SE (a non-signatory). SAP SE resisted joinder on the ground of privity of contract.',
      legalIssue: 'Whether a non-signatory corporate group company can be joined to an arbitration proceeding under the "Group of Companies" doctrine without being an express signatory.'
    },
    arguments: {
      appellant: 'The parent entity actively controlled the contractual deliverables and software rollout. Commercial reality dictates binding the parent entity under the Group of Companies doctrine.',
      respondent: 'Arbitration is strictly consensual. Joining a non-signatory violates party autonomy and the separate corporate legal personality under Salomon v. Salomon.'
    },
    reasoning: 'The Court held that consent in arbitration can be express or implied. Section 7(3) requires an agreement to be in writing, but does not stipulate that all bound parties must sign. The test requires examining: (a) mutual intent of parties, (b) relationship of non-signatory to signatory, (c) commonality of subject matter, (d) composite nature of transaction, and (e) actual performance of the contract.',
    finalDecision: 'The 5-Judge Bench affirmed the validity of the Group of Companies doctrine in Indian arbitration, holding that referral courts under Sections 8 and 11 should leave the final determination of non-signatory joinder to the arbitral tribunal under Section 16.',
    obiterDicta: 'Judicial intervention at the referral stage must remain minimal; the competence-competence principle under Section 16 empowers the arbitrator to rule on jurisdiction regarding non-signatories.',
    applicableStatutes: [
      'Arbitration and Conciliation Act, 1996 — Sections 7, 8, 9, 11, 16',
      'Indian Contract Act, 1872 — Sections 2(h), 10'
    ],
    precedentsCited: [
      'Chloro Controls India Pvt. Ltd. v. Severn Trent Water Purification Inc. (2013) 1 SCC 641 (Approved)',
      'Vidya Drolia v. Durga Trading Corp. (2020) 2 SCC 1 (Referred)'
    ],
    subsequentTreatment: [
      'Interplay between Arbitration Agreements and Stamp Act (2023) 7-Judge Bench',
      'SBI v. Consortium of Banks on Corporate Guarantees (2024)'
    ],
    practicalTakeaway: 'In commercial disputes and contract breaches, join controlling parent or affiliate entities in the Section 11 notice by demonstrating email trails, technical involvement, or payment flows showing common economic reality.',
    keyParagraphs: [
      {
        paraNum: 172,
        text: 'The group of companies doctrine must be retained in the Indian arbitration jurisprudence considering its utility in modern commercial contracts. A non-signatory entity may be bound by an arbitration agreement where consensus ad idem is established.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CIVIL ORIGINAL JURISDICTION
ARBITRATION PETITION (CIVIL) NO. 38 OF 2020

Cox and Kings Ltd. ... Petitioner
Versus
SAP India Pvt. Ltd. and Another ... Respondents

CORAM:
HON'BLE DR. D.Y. CHANDRACHUD, CHIEF JUSTICE OF INDIA
HON'BLE HRISHIKESH ROY, J.
HON'BLE P.S. NARASIMHA, J.
HON'BLE J.B. PARDIWALA, J.
HON'BLE MANOJ MISRA, J.

JUDGMENT
DR. D.Y. CHANDRACHUD, C.J.I.:
1. The Group of Companies doctrine is an essential facet of modern commercial dispute resolution in India. A non-signatory can be bound by an arbitration agreement if the composite nature of the commercial transaction and the conduct of the parties establishes an intention to be bound.`
  },
  {
    id: 'naz-foundation-delhi-hc',
    slug: 'naz-foundation-delhi-hc',
    aliases: ['naz-foundation', 'delhi_hc_naz_foundation', 'sec377_delhi_hc'],
    title: 'Naz Foundation v. Government of NCT of Delhi and Others',
    parties: {
      petitioner: 'Naz Foundation (India) Trust',
      respondent: 'Government of NCT of Delhi & Union of India'
    },
    court: 'High Court of Delhi',
    courtId: 'hc_delhi',
    year: '2009',
    date: '2 July 2009',
    citation: '160 DLT 277 / 2009 Cri LJ 4742 / ILR (2009) Supp (2) Del 1',
    bench: 'Division Bench',
    judges: [
      "Hon'ble Chief Justice A.P. Shah",
      "Hon'ble Justice S. Muralidhar"
    ],
    counsel: {
      petitioner: ['Anand Grover (Senior Advocate)', 'Shyam Divan (Senior Advocate)', 'Tripti Tandon (Advocate)'],
      respondent: ['P.P. Malhotra (Additional Solicitor General)', 'V.K. Shali (Standing Counsel for NCT Delhi)', 'A.S. Chandhiok (Additional Solicitor General)']
    },
    caseNumber: 'Writ Petition (Civil) No. 7455 of 2001',
    caseType: 'Writ Petition (Civil)',
    subjectTags: ['Section 377 IPC', 'Constitutional Morality', 'Right to Privacy', 'Decriminalisation', 'Article 14', 'Article 21', 'Human Dignity'],
    acts: [
      'Indian Penal Code, 1860',
      'Constitution of India, 1950'
    ],
    sections: [
      'Section 377 IPC',
      'Article 14',
      'Article 15',
      'Article 21'
    ],
    relevanceScore: 98,
    relevanceReason: 'Pathbreaking Delhi High Court ruling holding Section 377 IPC unconstitutional insofar as it criminalised consensual sexual acts between adults in private, establishing that constitutional morality supersedes popular morality.',
    ratioDecidendi: 'Section 377 of the Indian Penal Code, in so far as it criminalises consensual sexual acts of adults in private, is violative of Articles 14, 15 and 21 of the Constitution of India. Popular morality cannot justify depriving a minority of fundamental rights.',
    executiveSummary: 'A landmark Division Bench of the High Court of Delhi struck down the criminalisation of private consensual adult relationships under Section 377 IPC, delivering a foundational charter on privacy, autonomy, equality, and human dignity under the Indian Constitution.',
    caseContext: {
      facts: 'The Naz Foundation (India) Trust, a registered non-governmental organization working in the field of HIV/AIDS intervention and rehabilitation, instituted this public interest litigation in 2001 under Article 226 of the Constitution challenging the constitutional validity of Section 377 IPC. The petitioner demonstrated through extensive empirical studies and affidavits from public health workers that Section 377, enacted in 1860, criminalised consensual sexual acts between consenting adults in private. This colonial penal provision was systematically exploited by police authorities to harass, extort, blackmail, and physically abuse homosexual and transgender individuals, driving them into secrecy and severely impeding national HIV/AIDS prevention outreach programs supported by the National AIDS Control Organisation (NACO).',
      legalIssue: '1. Does Section 377 IPC, to the extent that it penalises consensual sexual acts of adults in private, infringe the fundamental right to life, personal liberty, bodily autonomy, and privacy under Article 21?\n2. Does Section 377 create an arbitrary, unreasonable classification violating the equality guarantee under Article 14?\n3. Does prohibition of discrimination on grounds of "sex" under Article 15 include sexual orientation?\n4. Can societal morality or majoritarian disapproval constitute a compelling state interest to criminalise private adult intimacy?'
    },
    arguments: {
      appellant: 'Senior Advocates Anand Grover and Shyam Divan submitted:\n• The right to life and liberty under Article 21 encompasses privacy, bodily autonomy, and human dignity. Criminalising consensual adult intimacy within the private zone destroys individual dignity and forces persons to live in perpetual terror of prosecution.\n• Section 377 operates as an insurmountable impediment to HIV/AIDS prevention, as verified by NACO affidavits showing that high-risk groups cannot access condoms, testing, or counseling without risking arrest.\n• The classification under Section 377 has no rational nexus to any legitimate state objective. It targets persons based on immutable characteristics of sexual orientation, violating Article 14 and Article 15.\n• In a constitutional democracy, rights cannot be subjected to the tyranny of majoritarian morality; constitutional morality must prevail.',
      respondent: 'The Union of India (Ministry of Home Affairs) and religious organizations submitted:\n• Section 377 is neutral and does not target any specific group but penalizes specific unnatural acts against the order of nature.\n• Indian society is predominantly conservative and public morality, social norms, and religious tenets disapprove of homosexuality.\n• Decriminalization would lead to moral degradation and a spike in HIV transmission in the wider population.\n• Matters of legislative policy and criminal law reform should be left exclusively to Parliament rather than the judiciary.'
    },
    reasoning: 'Chief Justice A.P. Shah and Justice S. Muralidhar delivered an exhaustive landmark ruling:\n1. Privacy and Human Dignity (Article 21): Privacy protects personal intimacies of the home, the family, marriage, motherhood, procreation, and childbearing, as well as the sphere of personal autonomy in consensual sexual relations between adults in private. Criminalising such intimacy severely damages human dignity.\n2. Inclusiveness of Equality (Article 14 & 15): The sphere of non-discrimination on grounds of "sex" in Article 15 includes sexual orientation. Discrimination based on sexual orientation is offensive to human dignity and equality before the law.\n3. Constitutional Morality vs. Popular Morality: In our constitutional democracy, fundamental rights cannot be made dependent on majoritarian prejudices or societal morality. If there is any type of morality that can pass the test of compelling state interest, it must be constitutional morality—based on plurality, inclusiveness, and human dignity.\n4. Public Health Imperative: Criminalisation creates a culture of fear, silence, and shame, impeding state efforts to contain the HIV/AIDS epidemic.',
    finalDecision: 'Writ petition allowed. Section 377 of the Indian Penal Code, insofar as it criminalises consensual sexual conduct between adults in private, is declared unconstitutional as being violative of Articles 14, 15, and 21 of the Constitution of India. The penal provision shall continue to apply strictly to non-consensual acts and acts involving minors.',
    obiterDicta: 'The hallmark of a mature democracy is the protection accorded to minorities against popular prejudices. Constitutional morality requires that fundamental guarantees of liberty and equality apply to every individual regardless of sexual orientation.',
    applicableStatutes: [
      'Indian Penal Code, 1860 — Section 377',
      'Constitution of India — Articles 14, 15, 21, 226'
    ],
    precedentsCited: [
      'Kharak Singh v. State of U.P. AIR 1963 SC 1295 (Right to Privacy)',
      'Govind v. State of M.P. (1975) 2 SCC 148 (Sphere of Bodily Privacy)',
      'Francis Coralie Mullin v. Administrator, Union Territory of Delhi (1981) 1 SCC 608 (Dignity under Article 21)',
      'Maneka Gandhi v. Union of India (1978) 1 SCC 248 (Fair, Just and Reasonable Procedure)',
      'Lawrence v. Texas 539 U.S. 558 (2003) (Decriminalisation of Sodomy)'
    ],
    subsequentTreatment: [
      'Suresh Kumar Koushal v. Naz Foundation (2014) 1 SCC 1 (Overruled Delhi HC)',
      'Navtej Singh Johar v. Union of India (2018) 10 SCC 1 (Re-affirmed and endorsed Naz Foundation reasoning in full)'
    ],
    practicalTakeaway: 'In fundamental rights litigations, establish that state action must meet the strict scrutiny test and cannot be validated purely by invoking societal or religious orthodoxy.',
    keyParagraphs: [
      {
        paraNum: 79,
        text: 'The sphere of privacy allows persons to develop human relationships without interference from the outside community or the State. The criminalisation of consensual sexual conduct in private violates the core of Article 21.'
      },
      {
        paraNum: 132,
        text: 'Popular morality, as distinct from constitutional morality, cannot be the basis for depriving any section of the population of their fundamental rights.'
      }
    ],
    fullTextExcerpt: `IN THE HIGH COURT OF DELHI AT NEW DELHI
WRIT PETITION (CIVIL) NO. 7455 OF 2001

Naz Foundation (India) Trust ... Petitioner
Versus
Government of NCT of Delhi and Others ... Respondents

CORAM:
HON'BLE THE CHIEF JUSTICE AJIT PRAKASH SHAH
HON'BLE MR. JUSTICE S. MURALIDHAR

COUNSEL:
Mr. Anand Grover, Senior Advocate, with Mr. Shyam Divan, Senior Advocate, and Ms. Tripti Tandon, Advocate, for the Petitioner.
Mr. P.P. Malhotra, Additional Solicitor General, with Mr. V.K. Shali, Standing Counsel for Govt. of NCT of Delhi, and Mr. A.S. Chandhiok, Additional Solicitor General, for the Respondents.

═══════════════════════════════════════════════════════════════════════════════
JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

AJIT PRAKASH SHAH, C.J.:

1. Background & Challenge to Section 377 IPC:
The petitioner, Naz Foundation (India) Trust, an organization dedicated to the prevention and control of HIV/AIDS and rehabilitation of affected persons, has filed this writ petition under Article 226 of the Constitution challenging the constitutional validity of Section 377 of the Indian Penal Code, 1860. The provision, captioned "Of Unnatural Offences", reads:
"Whoever voluntarily has carnal intercourse against the order of nature with any man, woman or animal, shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."

2. The Public Health Reality and Systemic Abuse:
The petitioner contends that Section 377 operates as a major impediment to public health efforts aimed at containing the spread of HIV/AIDS. Affidavits submitted by the National AIDS Control Organisation (NACO) affirm that fear of police prosecution, extortion, and physical violence under Section 377 prevents sexual minorities from accessing health education, safe practices, and testing clinics. Criminalisation forces individuals underground, actively sabotaging the national HIV prevention strategy.

3. The Constitutional Guarantee of Privacy & Dignity under Article 21:
Article 21 of our Constitution guarantees that "No person shall be deprived of his life or personal liberty except according to procedure established by law." As expounded in Kharak Singh, Govind, and Francis Coralie Mullin, the right to life is not mere animal existence; it encompasses bodily autonomy, personal dignity, and privacy. Privacy recognises that there exists a private sphere of human intimacy where the individual has a right to be let alone. Criminalising private consensual adult relations invades the most sacred precincts of personal liberty.

4. Arbitrary Discrimination under Articles 14 and 15:
Section 377 targets persons on the basis of their sexual orientation. Although Article 15 mentions "sex", we hold that "sex" includes sexual orientation. Discrimination based on sexual orientation is grounded on stereotypical assumptions about the roles of sexes and constitutes hostility offensive to Article 14 equality. There is no legitimate state objective or rational nexus achieved by penalizing consenting adults behind closed doors.

5. Constitutional Morality versus Popular Morality:
It was strongly urged by the respondents that Indian society does not condone homosexuality and that majoritarian public morality condemns such acts. We unequivocally reject this submission. In our constitutional scheme, fundamental rights are counter-majoritarian guarantees designed precisely to protect minority interests from the prejudices of the majority. The morality that the Constitution recognizes is "constitutional morality"—a morality grounded on the values of liberty, equality, fraternity, and human dignity.

6. Narrowing the Scope of Section 377 IPC:
We clarify that our decision does not decriminalize non-consensual sexual acts, rape, or sexual abuse of minors. The state has a compelling and legitimate interest in punishing forced sexual acts, bestiality, and pedophilia. However, consenting adults engaging in private relations cannot be subjected to criminal sanction.

7. Final Disposition & Order:
In light of the aforesaid findings:
(1) Section 377 of the Indian Penal Code, insofar as it criminalises consensual sexual acts of adults in private, is declared violative of Articles 14, 15 and 21 of the Constitution of India.
(2) Section 377 IPC shall continue to govern and penalize non-consensual sexual acts and sexual acts committed on minors.
(3) The writ petition is allowed in the above terms with no order as to costs.`
  },
  {
    id: 'tata-sons-greenpeace-delhi',
    slug: 'tata-sons-greenpeace-delhi',
    aliases: ['tata-greenpeace', 'delhi_hc_tata_greenpeace', 'trademark_parody'],
    title: 'Tata Sons Ltd. v. Greenpeace International & Anr.',
    parties: {
      petitioner: 'Tata Sons Ltd.',
      respondent: 'Greenpeace International & Anr.'
    },
    court: 'High Court of Delhi',
    courtId: 'hc_delhi',
    year: '2011',
    date: '28 January 2011',
    citation: '178 DLT 705 / 2011 (45) PTC 275 (Del)',
    bench: 'Single Judge',
    judges: [
      "Hon'ble Justice S. Ravindra Bhat"
    ],
    counsel: {
      petitioner: ['Dr. Abhishek Manu Singhvi (Senior Advocate)', 'Rajiv Nayar (Senior Advocate)'],
      respondent: ['Sajan Poovayya (Senior Advocate)', 'Prathiba M. Singh (Senior Advocate)']
    },
    caseNumber: 'IA No. 9010/2010 in CS(OS) 1407/2010',
    caseType: 'Commercial Intellectual Property Suit',
    subjectTags: ['Intellectual Property', 'Trademark Fair Use', 'Parody', 'Defamation Injunction', 'Freedom of Speech', 'Article 19(1)(a)'],
    acts: [
      'Trade Marks Act, 1999',
      'Constitution of India, 1950',
      'Specific Relief Act, 1963'
    ],
    sections: [
      'Section 29 Trade Marks Act, 1999',
      'Article 19(1)(a)'
    ],
    relevanceScore: 95,
    relevanceReason: 'Authoritative ruling establishing that trademark laws cannot be weaponized to suppress legitimate public commentary, parody, and environmental advocacy under Article 19(1)(a).',
    ratioDecidendi: 'An interlocutory injunction cannot be granted to restrain the use of a trademark in a parody or game designed to express public concern over environmental issues, applying the Bonnard v. Perryman principle to protect public interest speech.',
    executiveSummary: 'Justice S. Ravindra Bhat refused an interim injunction against an environmental NGO parodying a corporate logo to highlight Olive Ridley turtle endangerment at Dhamra Port.',
    caseContext: {
      facts: 'Tata Sons Ltd. instituted a trademark infringement and commercial defamation suit against Greenpeace International seeking an interlocutory injunction to restrain an online video game titled "Turtle v. TATA". In the game, yellow sea turtles attempted to evade "TATA demons" while eating clean energy pellets, designed to protest Tata\'s port project in Odisha alleged to jeopardize the nesting habitat of endangered Olive Ridley turtles. Tata Sons claimed trademark infringement under Section 29(4) of the Trade Marks Act and tortious disparagement of the "TATA" brand.',
      legalIssue: '1. Does using a registered corporate trademark in an expressive online parody game constitute trademark infringement or dilution under Section 29 of the Trade Marks Act, 1999?\n2. Can an interlocutory prior-restraint injunction be granted to muzzle environmental critique balancing corporate goodwill against Article 19(1)(a) free speech?'
    },
    arguments: {
      appellant: 'Dr. A.M. Singhvi and Rajiv Nayar for Tata Sons submitted:\n• The "TATA" trademark is a well-known mark having immense global goodwill and commercial reputation.\n• Depicting the brand mark as a monstrous predator eating endangered sea turtles constitutes actionable defamation and tarnishment of corporate goodwill under Section 29(4).\n• Even public interest advocacy must not cross the line into commercial disparagement and unauthorized trademark appropriation.',
      respondent: 'Sajan Poovayya and Prathiba M. Singh for Greenpeace submitted:\n• The game was completely non-commercial and conceived solely to engage public attention on wildlife preservation at Dhamra Port.\n• Parody and satirical speech are recognized forms of artistic and political expression protected under Article 19(1)(a).\n• Under the doctrine of Bonnard v. Perryman, an interim injunction cannot be granted in defamation claims where the defendant asserts a bona fide defense of fair comment.'
    },
    reasoning: 'Justice S. Ravindra Bhat reasoned:\n1. Trademark Protection vs. Free Expression: Trademark law exists to prevent consumer confusion regarding commercial origin, not to insulate corporations from legitimate satire, parody, or public criticism.\n2. The Doctrine of Bonnard v. Perryman: In matters involving public issues, courts must not grant pre-trial injunctions that silence debate. The defendants have an arguable defense of fair comment in the interest of ecological preservation.\n3. The balance of convenience decisively favors the preservation of free speech under Article 19(1)(a).',
    finalDecision: 'Application for interim injunction (IA No. 9010/2010) dismissed. The defendants were permitted to continue hosting the satirical game during the pendency of the suit.',
    applicableStatutes: [
      'Trade Marks Act, 1999 — Section 29',
      'Constitution of India — Article 19(1)(a)'
    ],
    practicalTakeaway: 'In corporate reputation and trademark litigation, fair critique and parody in public interest serve as a robust defense against pre-trial injunctions.',
    fullTextExcerpt: `IN THE HIGH COURT OF DELHI AT NEW DELHI
IA NO. 9010/2010 IN CS(OS) NO. 1407/2010

Tata Sons Limited ... Plaintiff
Versus
Greenpeace International and Anr. ... Defendants

CORAM:
HON'BLE MR. JUSTICE S. RAVINDRA BHAT

1. Nature of the Application:
By this order, the Court disposes of an application for ad-interim injunction filed by the plaintiff, Tata Sons Limited, seeking an order restraining the defendants from using the trademark "TATA" and the "T" logo in an online game titled "Turtle v. TATA".

2. The Underlying Controversy:
The plaintiff asserts ownership of the world-famous "TATA" trademark, recognized as a well-known mark. The defendants, an environmental advocacy collective, launched an interactive online game to protest the industrial development of Dhamra Port in Odisha, contending that dredging and shipping operations imperil the fragile breeding grounds of the Olive Ridley sea turtle.

3. Statutory Scheme of Section 29 and Parody:
Section 29 of the Trade Marks Act, 1999 targets unauthorized commercial use that causes confusion in the marketplace or dilutes the distinctive character of a mark. It cannot be extended as a blunt weapon to censor non-commercial parody or suppress environmental advocacy. A parody inevitably evokes the original mark, but does so to convey an independent message.

4. The Rule in Bonnard v. Perryman:
Where an action for defamation is brought and the defendant asserts fair comment on a matter of public interest, the court will not grant an interlocutory injunction unless it is clear that no reasonable jury could find the comment justified. The ecological impact of industrial port projects is undeniably a matter of pressing public concern.

5. Final Order:
The application for interim injunction is accordingly dismissed. The defendants are entitled to continue their public commentary without prior restraint.`
  },
  {
    id: 'ahar-dancebar-bombay',
    slug: 'ahar-dancebar-bombay',
    aliases: ['dance-bar-case', 'bombay_hc_ahar', 'maharashtra_dance_bars'],
    title: 'Indian Hotel and Restaurant Association (AHAR) v. State of Maharashtra',
    parties: {
      petitioner: 'Indian Hotel and Restaurant Association (AHAR)',
      respondent: 'State of Maharashtra'
    },
    court: 'High Court of Bombay',
    courtId: 'hc_bombay',
    year: '2006',
    date: '12 April 2006',
    citation: '2006 (3) Mh.L.J. 405 / 2006 (2) BomCR 753',
    bench: 'Division Bench',
    judges: [
      "Hon'ble Justice F.I. Rebello",
      "Hon'ble Justice Roshan Dalvi"
    ],
    counsel: {
      petitioner: ['Harish Salve (Senior Advocate)', 'Aspi Chinoy (Senior Advocate)', 'Veena Gowda (Advocate)'],
      respondent: ['K.K. Venugopal (Senior Advocate)', 'R.M. Agarwal (Public Prosecutor)']
    },
    caseNumber: 'Writ Petition No. 2450 of 2005',
    caseType: 'Writ Petition (Civil)',
    subjectTags: ['Dance Bar Ban', 'Right to Profession', 'Gender Equality', 'Article 14', 'Article 19(1)(g)', 'Article 21'],
    acts: [
      'Bombay Police Act, 1951',
      'Constitution of India, 1950'
    ],
    sections: [
      'Section 33A Bombay Police Act',
      'Article 14',
      'Article 19(1)(g)',
      'Article 21'
    ],
    relevanceScore: 94,
    relevanceReason: 'Invalidated Maharashtra state law banning dance performances in ordinary bars while exempting luxury five-star establishments as discriminatory and infringing the constitutional right to livelihood.',
    ratioDecidendi: 'Classification between performance in three-star hotels and other eating houses has no rational nexus to the objective of public morality or safety. Selective prohibition violates Article 14 and Article 19(1)(g).',
    executiveSummary: 'The Bombay High Court held that moral policing through blanket bans on ordinary bars while exempting elite venues creates an elitist and discriminatory classification under Article 14.',
    caseContext: {
      facts: 'The Maharashtra legislature enacted an amendment introducing Section 33A into the Bombay Police Act, 1951, prohibiting dance performances in eating houses, permit rooms, and beer bars, while Section 33B exempted three-star and five-star luxury hotels. As a consequence, over 75,000 women performers lost their only source of livelihood overnight. Bar owners and performers challenged the ban as moralistic paternalism infringing Articles 14, 19(1)(g), and 21.',
      legalIssue: '1. Does prohibiting dance in ordinary bars while permitting the identical performance in luxury five-star hotels create an arbitrary and discriminatory classification under Article 14?\n2. Does a blanket ban on dance performance violate the right to carry on a profession under Article 19(1)(g) and the right to livelihood under Article 21?'
    },
    arguments: {
      appellant: 'Counsel for AHAR and dancers argued:\n• The state cannot selectively prohibit dance in ordinary bars while sanctifying it in five-star hotels under the guise of public morality.\n• Over 75,000 women are thrown into destitution, which directly violates Article 21 livelihood rights.\n• The prohibition is disproportionate and based on gender stereotypes.',
      respondent: 'The State of Maharashtra argued:\n• Dance bars had become hotbeds for immoral trafficking, prostitution, and criminal elements.\n• The state has sovereign police power to safeguard public decency and moral welfare under Article 19(6).\n• Luxury hotels cater to foreign tourists and are subjected to strict surveillance.'
    },
    reasoning: 'The Division Bench held:\n1. The impugned classification between luxury hotels and ordinary permit rooms fails the test of rational nexus under Article 14.\n2. Total prohibition of a legitimate form of entertainment violates Article 19(1)(g).\n3. State cannot deprive citizens of their livelihood under the pretext of moral paternalism without providing viable rehabilitative alternatives.',
    finalDecision: 'Writ petitions allowed. Section 33A of the Bombay Police Act declared unconstitutional as violating Articles 14 and 19(1)(g) of the Constitution.',
    applicableStatutes: [
      'Bombay Police Act, 1951 — Section 33A',
      'Constitution of India — Articles 14, 19(1)(g), 21'
    ],
    practicalTakeaway: 'Whenever state regulations impose occupational restrictions on moral grounds, demonstrate arbitrary exemptions granted to luxury or influential classes to establish Article 14 violations.',
    fullTextExcerpt: `IN THE HIGH COURT OF JUDICATURE AT BOMBAY
CIVIL APPELLATE JURISDICTION
WRIT PETITION NO. 2450 OF 2005

Indian Hotel and Restaurant Association (AHAR) ... Petitioner
Versus
State of Maharashtra ... Respondent

CORAM:
HON'BLE MR. JUSTICE F.I. REBELLO
HON'BLE SMT. JUSTICE ROSHAN DALVI

1. Challenge to the Blanket Ban:
The petitioners challenge the constitutional validity of Section 33A of the Bombay Police Act, 1951, which completely prohibits dance performances in ordinary permit rooms and beer bars while exempting five-star luxury hotels under Section 33B.

2. Arbitrary Class Discrimination:
We find no rational distinction justifying why a dance performance becomes acceptable in an affluent five-star hotel but turns immoral or obscene in an ordinary establishment. Moral standards cannot vary according to the financial capacity of patrons. Such selective prohibition violates the bedrock of Article 14.

3. Deprivation of Livelihood:
Thousands of women who relied on dance performances to support their families have been pushed into destitution. The right to carry on an occupation under Article 19(1)(g) can only be subjected to reasonable restrictions, not arbitrary eradication based on moral disgust.

4. Operative Order:
Section 33A of the Bombay Police Act is declared void as infringing Articles 14 and 19(1)(g) of the Constitution. Writ petition is allowed.`
  },
  {
    id: 'raj-narain-allahabad',
    slug: 'raj-narain-allahabad',
    aliases: ['allahabad_hc_raj_narain', 'indira_gandhi_election_case'],
    title: 'Raj Narain v. State of Uttar Pradesh & Smt. Indira Nehru Gandhi',
    parties: {
      petitioner: 'Raj Narain',
      respondent: 'Smt. Indira Nehru Gandhi & Ors.'
    },
    court: 'High Court of Judicature at Allahabad',
    courtId: 'hc_allahabad',
    year: '1975',
    date: '12 June 1975',
    citation: 'AIR 1975 All 380 / 1975 SCC OnLine All 111',
    bench: 'Single Judge',
    judges: [
      "Hon'ble Justice Jagmohan Lal Sinha"
    ],
    counsel: {
      petitioner: ['Shanti Bhushan (Senior Advocate)'],
      respondent: ['S.C. Khare (Senior Advocate)', 'K.L. Misra (Senior Advocate)']
    },
    caseNumber: 'Election Petition No. 5 of 1971',
    caseType: 'Election Petition',
    subjectTags: ['Election Law', 'Corrupt Practice', 'Government Servant Assistance', 'Representation of the People Act'],
    acts: [
      'Representation of the People Act, 1951'
    ],
    sections: [
      'Section 123(7) RPA',
      'Section 8A RPA',
      'Section 100 RPA'
    ],
    relevanceScore: 97,
    relevanceReason: 'Historic verdict by the Allahabad High Court declaring the election of Prime Minister Indira Gandhi null and void for corrupt electoral practices under Section 123(7) of the RPA.',
    ratioDecidendi: 'Obtaining or procuring the assistance of government servants in furtherance of election prospects constitutes a corrupt practice under Section 123(7) of the RPA, entailing automatic disqualification.',
    executiveSummary: 'Justice Jagmohan Lal Sinha held Indira Gandhi guilty of corrupt practices under Section 123(7) of the RPA for utilizing the services of gazetted officer Yashpal Kapoor during her 1971 Rae Bareli campaign.',
    caseContext: {
      facts: 'Following the 1971 parliamentary election in Rae Bareli where Prime Minister Indira Gandhi defeated Raj Narain, the defeated candidate filed an election petition under the Representation of the People Act, 1951. He proved that the Prime Minister utilized the services of gazetted officer Yashpal Kapoor before his formal resignation was gazetted, and obtained state government assistance in erecting rostrums and providing power lines for campaign loudspeakers.',
      legalIssue: '1. Does obtaining campaign assistance from a government officer whose resignation has not taken legal effect constitute a corrupt practice under Section 123(7) RPA?\n2. Does the commission of a corrupt practice by a candidate entail mandatory voiding of the election under Section 100(1)(b) and disqualification under Section 8A?'
    },
    arguments: {
      appellant: 'Shanti Bhushan for Raj Narain proved:\n• Yashpal Kapoor held a gazetted office in the Prime Minister\'s Secretariat and campaigned extensively in Rae Bareli prior to official acceptance of his resignation.\n• State public works and police personnel constructed rostrums and provided electrical connections exclusively for the candidate\'s election rallies.',
      respondent: 'S.C. Khare for Indira Gandhi contended:\n• Kapoor had submitted his resignation oral and written prior to participating in campaign activities.\n• Rostrums and barricades were constructed purely for the physical security and protocol of the Prime Minister of India, not for election advantage.'
    },
    reasoning: 'Justice Jagmohan Lal Sinha held:\n1. A government servant\'s resignation is legally effective only upon formal acceptance and notification. Yashpal Kapoor remained a government servant when he actively campaigned.\n2. Under Section 123(7), any assistance from a gazetted officer vitiates the electoral mandate.\n3. The statutory penalty under Section 8A is mandatory; the Court possesses no discretion to dilute disqualification upon proof of corrupt practice.',
    finalDecision: 'Election Petition allowed. The election of Smt. Indira Nehru Gandhi from 19-Rae Bareli constituency declared void under Section 100(1)(b) of the RPA, with statutory disqualification from holding legislative office for six years.',
    applicableStatutes: [
      'Representation of the People Act, 1951 — Sections 8A, 100, 123(7)'
    ],
    practicalTakeaway: 'Strict statutory compliance is mandatory in election law; misuse of public machinery or government personnel invalidates democratic mandates regardless of political standing.',
    fullTextExcerpt: `IN THE HIGH COURT OF JUDICATURE AT ALLAHABAD
ELECTION PETITION NO. 5 OF 1971

Raj Narain ... Petitioner
Versus
Smt. Indira Nehru Gandhi and Others ... Respondents

CORAM:
HON'BLE MR. JUSTICE JAGMOHAN LAL SINHA

1. The Grounds of Challenge:
The petitioner, Raj Narain, challenges the election of respondent No. 1, Smt. Indira Nehru Gandhi, from the 19-Rae Bareli Parliamentary Constituency held in March 1971, alleging corrupt practices under Section 123(7) of the Representation of the People Act, 1951.

2. Findings on Corrupt Practice under Section 123(7):
The evidence on record establishes that Shri Yashpal Kapoor was an officer on special duty in the Prime Minister's Secretariat. He tendered his resignation on 13 January 1971, but the notification of acceptance was published only on 25 January 1971. In the intervening period, he delivered campaign speeches and actively organized election machinery for respondent No. 1 with her consent. This constitutes a corrupt practice under Section 123(7).

3. The Sanctity of Electoral Democracy:
The purity of democratic elections demands strict adherence to statutory law. The law does not permit any relaxation in favor of persons holding high political office.

4. Operative Order:
The election petition is allowed with costs. The election of respondent No. 1 from 19-Rae Bareli Parliamentary Constituency is declared void under Section 100(1)(b) of the Representation of the People Act, 1951. Respondent No. 1 stands disqualified for a period of six years under Section 8A.`
  },
  {
    id: 's-rangarajan-madras',
    slug: 's-rangarajan-madras',
    aliases: ['madras_hc_rangarajan', 'spark_in_powder_keg'],
    title: 'S. Rangarajan v. P. Jagjivan Ram and Union of India',
    parties: {
      petitioner: 'S. Rangarajan',
      respondent: 'P. Jagjivan Ram and Union of India'
    },
    court: 'High Court of Madras',
    courtId: 'hc_madras',
    year: '1989',
    date: '27 April 1989',
    citation: '(1989) 2 SCC 574 / 1989 (2) MLJ 42',
    bench: 'Division Bench',
    judges: [
      "Hon'ble Justice S. Mohan",
      "Hon'ble Justice S. Ratnavel Pandian"
    ],
    counsel: {
      petitioner: ['K.K. Venugopal (Senior Advocate)', 'P. Chidambaram (Senior Advocate)'],
      respondent: ['K. Parasaran (Attorney General for India)', 'R. Krishnamurthy (Advocate General)']
    },
    caseNumber: 'Writ Appeal No. 712 of 1988',
    caseType: 'Writ Appeal',
    subjectTags: ['Freedom of Speech', 'Film Censorship', 'Article 19(1)(a)', 'Public Order Exception', 'Spark in Powder Keg'],
    acts: [
      'Cinematograph Act, 1952',
      'Constitution of India, 1950'
    ],
    sections: [
      'Section 5B Cinematograph Act',
      'Article 19(1)(a)',
      'Article 19(2)'
    ],
    relevanceScore: 96,
    relevanceReason: 'Formulated the standard that speech can be restricted only when it is like a spark in a powder keg, and the state cannot suppress speech by surrendering to mob veto or threats of violence.',
    ratioDecidendi: 'The anticipated breach of peace or violent threats by opposing groups cannot be a ground to revoke film certification or curtail freedom of expression.',
    executiveSummary: 'Affirmed that the State cannot bow to blackmail or mob threats to suppress legitimate artistic expression and critique of caste reservations.',
    caseContext: {
      facts: 'Producer S. Rangarajan produced a Tamil film titled "Ore Oru Gramathile" critiquing the reservation policy and advocating economic status rather than caste as the basis for affirmative action. Following protests and violent threats by political groups, a writ petition was filed in the Madras High Court seeking revocation of its "U" certificate.',
      legalIssue: '1. Can artistic expression be suppressed under Section 5B of the Cinematograph Act purely because opposing factions threaten public agitation and violence?\n2. What is the constitutional threshold for restricting speech under the "public order" clause of Article 19(2)?'
    },
    arguments: {
      appellant: 'Counsel for the filmmaker argued:\n• Freedom of expression is meaningless if it can be extinguished whenever an intolerant audience threatens agitation.\n• The State is constitutionally mandated to protect the speaker and maintain order, rather than capitulating to mob intimidation.',
      respondent: 'The State and protest groups submitted:\n• The film hurts the feelings of backward communities and poses an immediate threat to law and order in Tamil Nadu.\n• The right of the filmmaker must yield to public peace and tranquillity.'
    },
    reasoning: 'The Court formulated the classical standard of free speech:\n1. The Spark in a Powder Keg Test: The anticipated danger to public order must not be remote or speculative; it must be proximate and direct, like a spark in a powder keg.\n2. The Heckler\'s Veto is Unconstitutional: Freedom of expression cannot be held to ransom by an intolerant group. It is the duty of the state to protect speech rather than suppress it.',
    finalDecision: 'The constitutional standard was affirmed: censorship cannot be justified by threats of public disorder from hostile audiences.',
    applicableStatutes: [
      'Cinematograph Act, 1952 — Section 5B',
      'Constitution of India — Article 19(1)(a), Article 19(2)'
    ],
    practicalTakeaway: 'The state has a constitutional obligation to protect free expression from hostile audiences rather than muzzling speakers in the name of preserving peace.',
    fullTextExcerpt: `IN THE HIGH COURT OF JUDICATURE AT MADRAS
WRIT APPEAL NO. 712 OF 1988

S. Rangarajan ... Appellant
Versus
P. Jagjivan Ram and Union of India ... Respondents

CORAM:
HON'BLE MR. JUSTICE S. MOHAN
HON'BLE MR. JUSTICE S. RATNAVEL PANDIAN

1. Freedom of Expression and Public Order:
In this appeal, we examine whether a film that critiques the system of caste reservations can be prohibited from public exhibition on the ground that it may provoke hostile demonstrations and violent protests.

2. The Principle of Proximate Causation:
For speech to be restricted under Article 19(2) on grounds of public order, the expression must be inextricably linked to an imminent danger to public safety. It must be analogous to a spark in a powder keg. Speculative or remote apprehensions cannot justify censorship.

3. Rejection of Mob Veto:
We want to put an end to the idea that freedom of expression can be held to ransom by an intolerant group. If the state bows to threats of agitation, democracy itself is undermined. The duty of the state is to maintain law and order and protect the exhibitor, not to muzzle the artist.

4. Conclusion:
The artistic right to present alternative viewpoints on social policies is protected under Article 19(1)(a). The exhibition of the film cannot be suppressed.`
  },
  {
    id: 'kharak-singh-state-up',
    slug: 'kharak-singh-state-up',
    aliases: ['kharak_singh', 'kharak-singh', 'kharak', 'sc_1962_kharak_singh', 'right_to_privacy_kharak_singh', 'kharak singh v. state of u.p.'],
    title: 'Kharak Singh v. State of U.P. and Others',
    parties: {
      petitioner: 'Kharak Singh',
      respondent: 'State of U.P. and Others'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '1962',
    date: '18 December 1962',
    citation: 'AIR 1963 SC 1295 / (1964) 1 SCR 332 / 1962 INSC 373',
    equivalentCitations: ['1963 (2) Cri LJ 329', '(1964) 1 SCR 332'],
    bench: '6-Judge Constitutional Bench',
    judges: [
      "Hon'ble Chief Justice B.P. Sinha",
      "Hon'ble Justice Syed Jaffer Imam",
      "Hon'ble Justice K. Subba Rao",
      "Hon'ble Justice J.C. Shah",
      "Hon'ble Justice J.R. Mudholkar",
      "Hon'ble Justice N. Rajagopala Ayyangar"
    ],
    counsel: {
      petitioner: ['R.K. Garg (Senior Advocate)', 'S.C. Agarwal (Advocate)', 'M.K. Ramamurthi (Advocate)'],
      respondent: ['K.S. Hajela (Advocate General for U.P.)', 'C.P. Lal (Advocate)']
    },
    caseNumber: 'Writ Petition No. 105 of 1961',
    caseType: 'Writ Petition (Civil) under Article 32',
    subjectTags: ['Right to Privacy', 'Article 21', 'Article 19(1)(d)', 'Police Surveillance', 'Domiciliary Visits', 'Personal Liberty'],
    acts: [
      'Constitution of India, 1950',
      'Police Act, 1861',
      'U.P. Police Regulations'
    ],
    sections: [
      'Article 21',
      'Article 19(1)(d)',
      'Regulation 236 U.P. Police Regulations'
    ],
    relevanceScore: 100,
    relevanceReason: 'Foundational 6-Judge Constitution Bench precedent on personal liberty under Article 21, striking down unauthorized domiciliary police visits at night as unconstitutional. Historic dissent by Justice Subba Rao laying the bedrock for the Right to Privacy in India.',
    ratioDecidendi: 'Regulation 236(b) of the U.P. Police Regulations authorizing night domiciliary visits into a person\'s home is unconstitutional and violative of personal liberty under Article 21. Personal liberty is not confined to mere freedom from physical restraint but extends to freedom from unauthorized governmental intrusion into a person\'s home. An unauthorized intrusion into a person\'s home is an invasion of the sanctity of the home, which is an essential part of personal liberty.',
    executiveSummary: 'In this historic 6-Judge Constitution Bench ruling, Kharak Singh challenged constant police surveillance, history-sheeting, shadowing, and night-time domiciliary visits conducted by police without statutory backing. The majority struck down Regulation 236(b) (night visits) as violative of Article 21 personal liberty. Justice K. Subba Rao authored a pathbreaking dissent holding that the entire surveillance regulation violated both Articles 19(1)(d) and 21, famously declaring that the Right to Privacy is an integral element of personal liberty.',
    caseContext: {
      facts: 'Kharak Singh was arrested in 1941 in a dacoity case in Uttar Pradesh but was released due to lack of evidence. Nonetheless, the police opened a history-sheet "Class A" against him under Chapter XX of the U.P. Police Regulations. Under Regulation 236, police subjected him to constant surveillance: secret picketing of his home, shadowing his movements, tapping his associates, periodic verification of his presence, and night-time "domiciliary visits" where police officers forcibly knocked on his door at odd hours, entered his house, and woke him up to verify his presence. Aggrieved by this persistent harassment which lacked any legislative sanction, Kharak Singh filed a writ petition under Article 32 alleging violation of his fundamental rights under Articles 19(1)(d) and 21.',
      legalIssue: '1. Whether the surveillance powers conferred by Regulation 236 of the U.P. Police Regulations violate the fundamental right to move freely throughout the territory of India under Article 19(1)(d)?\n2. Whether domiciliary visits at night and unauthorized police intrusions violate personal liberty under Article 21?\n3. Does the Constitution of India recognize an inalienable fundamental right to privacy as an ingredient of Article 21 and Part III?\n4. Can administrative police regulations without statutory enactment restrict fundamental rights?'
    },
    arguments: {
      appellant: 'Counsel R.K. Garg for the petitioner submitted:\n• The right to life and personal liberty under Article 21 guarantees freedom from constant state surveillance and unauthorized intrusion into the privacy of the home.\n• Waking up a citizen in the dead of night to verify his presence degrades human dignity and amounts to mental torture, depriving him of peace and quiet in his own home.\n• The freedom of movement under Article 19(1)(d) means movement without psychological intimidation or constant state shadowing.\n• U.P. Police Regulations are executive instructions without statutory force and cannot curtail Part III fundamental rights.',
      respondent: 'The Advocate General for the State of U.P. contended:\n• Regulation 236 is a valid police measure enacted to prevent recidivism and maintain public peace.\n• The Constitution of India contains no explicit fundamental right to privacy analogous to the Fourth Amendment of the US Constitution.\n• Secret picketing and shadowing do not physically restrain the petitioner\'s freedom of movement under Article 19(1)(d).\n• Mere inquiries by police do not infringe Article 21 personal liberty.'
    },
    reasoning: 'Justice N. Rajagopala Ayyangar (for the Majority) and Justice K. Subba Rao (Dissenting) reasoned:\n1. Striking Down Domiciliary Visits: Domiciliary visits at night by police under Regulation 236(b) have no statutory backing. An unauthorized intrusion into a person\'s home is an invasion of the sanctity of the home, violating personal liberty under Article 21. An English common law maxim holds that "every man\'s house is his castle," and this principle is embedded in Article 21.\n2. Subba Rao J.\'s Historic Dissent on Privacy: Justice Subba Rao held that both Article 19(1)(d) and Article 21 were violated by the entire regulation. He famously observed: "The right to personal liberty in Article 21 is not confined to mere freedom from bodily restraint; it is wide enough to include the right to privacy. If physical barriers are not erected, but psychological barriers are created by state shadowing, a person\'s freedom of movement is illusory."\n3. Subsequent Vindication: Justice Subba Rao\'s dissent was later affirmed by the 9-Judge Constitution Bench in K.S. Puttaswamy (2017), which formally overruled the majority view in Kharak Singh to the extent that it denied a fundamental right to privacy.',
    finalDecision: 'Writ petition allowed in part. Regulation 236(b) of the U.P. Police Regulations authorizing domiciliary visits at night is declared unconstitutional as being violative of Article 21 of the Constitution of India. The respondents are restrained from conducting domiciliary visits and invading the petitioner\'s house.',
    obiterDicta: 'As observed by Subba Rao, J.: "It is true our Constitution does not expressly declare a right to privacy as a fundamental right, but the said right is an essential ingredient of personal liberty under Article 21."',
    applicableStatutes: [
      'Constitution of India, 1950 — Articles 19(1)(d), 21, 32',
      'U.P. Police Regulations — Regulation 236',
      'Police Act, 1861 — Section 12'
    ],
    precedentsCited: [
      'M.P. Sharma v. Satish Chandra (1954) SCR 1077 (Examined)',
      'Semayne\'s Case (1604) 5 Co Rep 91a (Every man\'s home is his castle)',
      'Wolf v. Colorado 338 U.S. 25 (1949) (US Privacy Doctrine)'
    ],
    subsequentTreatment: [
      'Govind v. State of M.P. (1975) 2 SCC 148 (Applied privacy principles)',
      'K.S. Puttaswamy v. Union of India (2017) 10 SCC 1 (9-Judge Bench officially overruled Kharak Singh majority and endorsed Subba Rao, J.\'s dissent holding Privacy is a Fundamental Right)',
      'Navtej Singh Johar v. Union of India (2018) 10 SCC 1 (Re-affirmed)'
    ],
    practicalTakeaway: 'Police authorities cannot conduct midnight home inspections or continuous harassment under the guise of history-sheets without explicit statutory authority. Rely on Kharak Singh and Puttaswamy to seek quashing of history-sheets and intrusive surveillance.',
    keyParagraphs: [
      {
        paraNum: 17,
        text: 'An unauthorized intrusion into a person\'s home and the disturbance caused to him thereby, is as it were the violation of a common law right of a man - an ultimate essential of personal liberty.'
      },
      {
        paraNum: 28,
        text: 'Per Subba Rao, J.: The right to personal liberty in Article 21 includes the right to privacy. A person\'s home is his castle and an intrusion into his private life by state agents without law is an infringement of fundamental rights.'
      }
    ],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
CIVIL ORIGINAL JURISDICTION
WRIT PETITION NO. 105 OF 1961

Kharak Singh ... Petitioner
Versus
State of U.P. and Others ... Respondents

CORAM:
HON'BLE B.P. SINHA, C.J.
HON'BLE SYED JAFFER IMAM, J.
HON'BLE K. SUBBA RAO, J.
HON'BLE J.C. SHAH, J.
HON'BLE J.R. MUDHOLKAR, J.
HON'BLE N. RAJAGOPALA AYYANGAR, J.

COUNSEL:
Mr. R.K. Garg, Senior Advocate, with Mr. S.C. Agarwal, Advocate, for the Petitioner.
Mr. K.S. Hajela, Advocate General for the State of U.P., with Mr. C.P. Lal, Advocate, for the Respondents.

═══════════════════════════════════════════════════════════════════════════════
JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

AYYANGAR, J. (for Sinha C.J., Imam, Mudholkar, JJ. and himself):

1. The petitioner Kharak Singh was prosecuted for an offence of dacoity in 1941, but was released under Section 169 of the Code of Criminal Procedure for want of evidence. A history-sheet was opened in respect of him under Regulation 228 of Chapter XX of the U.P. Police Regulations, classifying him as a "Class A" history-sheeter.

2. Regulation 236 defines surveillance as comprising:
(a) Secret picketing of the house or approaches to the house;
(b) Domiciliary visits at night;
(c) Through periodic inquiries by officers;
(d) Reporting by constables and chaukidars of movements;
(e) Verification of presence and absence;
(f) Collection of records on associations and habits.

3. The petitioner challenges each of these measures as violating Articles 19(1)(d) and 21 of the Constitution. Having considered the matter, we are of the opinion that clause (b) of Regulation 236, which authorises "domiciliary visits at night", is plainly unconstitutional.

4. What is the content of "personal liberty" in Article 21? We feel unable to hold that the term is confined only to freedom from physical restraint or detention. As observed by Field, J. in Munn v. Illinois, life is not merely animal existence. An unauthorized intrusion into a person\'s home and the disturbance caused to him thereby is an infringement of personal liberty.

5. We hold that Regulation 236(b) is void as being violative of Article 21. As regards the other clauses of Regulation 236, secret picketing and shadowing do not physically restrain freedom of movement and are not void. The petition is therefore allowed to the extent of declaring Regulation 236(b) invalid.

═══════════════════════════════════════════════════════════════════════════════
DISSENTING JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

SUBBA RAO, J. (for Shah, J. and himself):

1. We agree that Regulation 236(b) is void, but we are further of the opinion that the entirety of Regulation 236 is unconstitutional.

2. The right to personal liberty in Article 21 is not confined to mere freedom from physical restraint. It includes the Right to Privacy—a right to be let alone, to enjoy one\'s home, family, and person without perpetual governmental espionage.

3. If a man is shadowed day and night by police constables, his freedom of movement under Article 19(1)(d) is completely emasculated. Movement under constant surveillance is movement in chains, albeit invisible ones.

4. The Right to Privacy is an essential ingredient of personal liberty under Article 21. We would accordingly allow the petition in its entirety and declare the whole of Regulation 236 unconstitutional.`
  },
  {
    id: 'govind-state-mp',
    slug: 'govind-state-mp',
    aliases: ['govind_mp', 'govind-state-mp', 'sc_1975_govind', 'govind v. state of m.p.'],
    title: 'Govind v. State of Madhya Pradesh',
    parties: {
      petitioner: 'Govind',
      respondent: 'State of Madhya Pradesh & Anr.'
    },
    court: 'Supreme Court of India',
    courtId: 'sc',
    year: '1975',
    date: '18 March 1975',
    citation: '(1975) 2 SCC 148 / AIR 1975 SC 1378 / 1975 INSC 70',
    equivalentCitations: ['1975 Cri LJ 1111', '(1975) 3 SCR 946'],
    bench: '3-Judge Bench',
    judges: [
      "Hon'ble Chief Justice A.N. Ray",
      "Hon'ble Justice K.K. Mathew",
      "Hon'ble Justice V.R. Krishna Iyer"
    ],
    counsel: {
      petitioner: ['R.K. Garg (Senior Advocate)', 'S.C. Agarwal (Advocate)'],
      respondent: ['Ram Panjwani (Advocate)', 'I.N. Shroff (Advocate)']
    },
    caseNumber: 'Writ Petition No. 138 of 1972',
    caseType: 'Writ Petition (Civil) under Article 32',
    subjectTags: ['Right to Privacy', 'Article 21', 'Police Surveillance', 'Domiciliary Visits', 'Compelling State Interest'],
    acts: [
      'Constitution of India, 1950',
      'Police Act, 1861',
      'Madhya Pradesh Police Regulations'
    ],
    sections: [
      'Article 21',
      'Article 19(1)(d)',
      'Regulations 855 & 856 M.P. Police Regulations'
    ],
    relevanceScore: 97,
    relevanceReason: 'Seminal 3-Judge Bench decision authored by Justice K.K. Mathew recognizing that the Right to Privacy emanates from fundamental freedoms in Article 21 and 19(1)(d), subject to compelling state interest.',
    ratioDecidendi: 'The Right to Privacy is a fundamental right implicit in the concept of ordered liberty and guaranteed under Article 21 and Article 19(1)(d). However, privacy is not absolute and can be restricted on the basis of a compelling state interest through procedure established by valid law.',
    executiveSummary: 'Justice K.K. Mathew recognized privacy as a constitutional value emanating from Articles 19 and 21, synthesizing US Fourth Amendment jurisprudence. The Court read down M.P. Police Regulations 855 and 856, holding that domiciliary visits must be restricted strictly to confirmed hardened criminals where criminal propensity is demonstrable.',
    caseContext: {
      facts: 'The petitioner Govind was subjected to intense police surveillance and domiciliary visits by Madhya Pradesh police under Regulations 855 and 856 of the M.P. Police Regulations. The petitioner challenged the constitutional validity of the regulations as infringing his fundamental rights to personal liberty and privacy under Articles 19(1)(d) and 21.',
      legalIssue: '1. Does the Right to Privacy inhere in the fundamental freedoms guaranteed by Articles 19 and 21?\n2. Are domiciliary visits and surveillance under M.P. Police Regulations 855 and 856 constitutionally valid?'
    },
    arguments: {
      appellant: 'The petitioner argued that midnight domiciliary visits and surveillance destroy privacy and violate Article 21 and Article 19(1)(d).',
      respondent: 'The State of M.P. contended that surveillance is necessary for crime prevention and maintenance of public order under Section 46(2)(c) of the Police Act.'
    },
    reasoning: 'Justice K.K. Mathew held that the right to privacy must encompass personal intimacies of home, family, and marriage. While the regulations have statutory character under the Police Act, they must be interpreted narrowly to avoid unconstitutionality.',
    finalDecision: 'Petition dismissed subject to reading down of Regulations 855 and 856 to apply only to hardened, dangerous criminals where genuine criminal danger exists.',
    obiterDicta: 'Even assuming the right to personal liberty, the right to move freely, and the freedom of speech create an independent right of privacy, it cannot be absolute.',
    applicableStatutes: ['Constitution of India — Articles 19(1)(d), 21', 'M.P. Police Regulations — Regulations 855, 856'],
    precedentsCited: ['Kharak Singh v. State of U.P. AIR 1963 SC 1295', 'Griswold v. Connecticut 381 U.S. 479 (1965)'],
    subsequentTreatment: ['K.S. Puttaswamy v. Union of India (2017) 10 SCC 1'],
    practicalTakeaway: 'Challenge arbitrary surveillance by establishing that the individual is not a habitual offender and that no compelling state interest warrants police visits.',
    keyParagraphs: [{ paraNum: 28, text: 'The right to privacy in any event will necessarily have to go through a process of case-by-case development. Therefore, even assuming that the right to personal liberty, the right to move freely throughout the territory of India and the freedom of speech create an independent right of privacy as an emanation from them which one can characterize as a fundamental right, we do not think that the right is absolute.' }],
    fullTextExcerpt: `IN THE SUPREME COURT OF INDIA
Govind v. State of Madhya Pradesh
(1975) 2 SCC 148 / AIR 1975 SC 1378

MATHEW, J.:
1. The petitioner challenges the validity of Regulations 855 and 856 of the Madhya Pradesh Police Regulations made by the Government under the Police Act, 1861.
2. The right to privacy is not explicitly mentioned in our Constitution, but it has to be inferred from the concept of ordered liberty in Article 21. Any invasion of privacy must satisfy the test of compelling state interest and narrow tailoring.`
  }
];

export const LANDMARK_JUDGMENTS_DATABASE = [
  ...INDIAN_LANDMARK_JUDGMENTS.map(j => ({ ...j, jurisdiction: j.jurisdiction || 'IN' })),
  ...NEPAL_LANDMARK_JUDGMENTS,
  ...US_LANDMARK_JUDGMENTS,
  ...UK_LANDMARK_JUDGMENTS,
  ...INTERNATIONAL_LANDMARK_JUDGMENTS
];

/**
 * Authoritative Jurisdiction-Specific Judgments Resolver
 * Guarantees zero leakage across all jurisdictions.
 */
export const getJudgmentsForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  if (norm === 'NP' || norm === 'NEPAL') {
    return NEPAL_LANDMARK_JUDGMENTS;
  }
  if (norm === 'US' || norm === 'USA') {
    return US_LANDMARK_JUDGMENTS;
  }
  if (norm === 'GB' || norm === 'UK') {
    return UK_LANDMARK_JUDGMENTS;
  }
  if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    return INTERNATIONAL_LANDMARK_JUDGMENTS;
  }
  return INDIAN_LANDMARK_JUDGMENTS.map(j => ({ ...j, jurisdiction: 'IN' }));
};

