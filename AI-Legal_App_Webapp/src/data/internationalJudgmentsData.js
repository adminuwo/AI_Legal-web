// ─── AI LEGAL™ INTERNATIONAL COURT OF JUSTICE & ICC LANDMARK PRECEDENTS ──────
// Authoritative judicial decisions of the International Court of Justice (ICJ) at The Hague
// and the International Criminal Court (ICC) establishing customary international law.

export const INTERNATIONAL_LANDMARK_JUDGMENTS = [
  {
    id: 'nicaragua-v-us-icj-1986',
    slug: 'nicaragua-v-united-states-use-of-force-customary-international-law',
    aliases: ['nicaragua-case', 'icj_1986_nicaragua'],
    title: 'Military and Paramilitary Activities in and against Nicaragua (Nicaragua v. United States of America)',
    jurisdiction: 'GLOBAL',
    parties: {
      petitioner: 'Republic of Nicaragua (Applicant)',
      respondent: 'United States of America (Respondent)'
    },
    court: 'International Court of Justice (ICJ - The Hague)',
    courtId: 'icj',
    year: '1986',
    date: '27 June 1986',
    citation: 'ICJ Reports 1986, p. 14 / General List No. 70',
    bench: '15-Judge Full Court',
    judges: [
      "President Nagendra Singh",
      "Vice-President de Lacharrière",
      "Judge Lachs",
      "Judge Ruda",
      "Judge Elias",
      "Judge Ago",
      "Judge Sette-Camara",
      "Judge Schwebel (Dissenting)"
    ],
    caseType: 'Contentious State Dispute (Merits)',
    subjectTags: ['Prohibition of Force', 'Article 2(4) UN Charter', 'Non-Intervention', 'Customary International Law', 'Self-Defense Threshold'],
    acts: [
      'Charter of the United Nations (1945)',
      'Statute of the International Court of Justice',
      'ILC Articles on State Responsibility (Customary Law)'
    ],
    sections: ['Article 2(4) UN Charter', 'Article 51 UN Charter', 'Article 36(2) ICJ Statute'],
    ratioDecidendi: 'The principles of non-use of force and non-intervention exist as independent customary international law, binding on states irrespective of multilateral treaty reservations. Arming and training rebel forces constitutes unlawful intervention and an illegal threat or use of force, but does not amount to an "armed attack" authorizing third-party collective self-defense.',
    executiveSummary: 'The International Court of Justice ruled against the United States, finding that by training, arming, equipping, and financing the Contra forces and laying mines in Nicaraguan internal waters, the US breached its obligations under customary international law not to use force, not to intervene in other States\' affairs, and not to violate state sovereignty.',
    caseContext: {
      facts: 'Following the 1979 Sandinista revolution in Nicaragua, the US government supported paramilitary Contra rebels fighting the Nicaraguan government and participated in covert mining of Nicaraguan ports. Nicaragua instituted proceedings before the ICJ.',
      legalIssue: '1. Does the ICJ have jurisdiction when the respondent enters a multilateral treaty reservation?\n2. Does arming or supporting insurgent forces violate the customary prohibition of the threat or use of force?\n3. What constitutes an "armed attack" justifying collective self-defense under Article 51?'
    },
    reasoning: 'The Court held that treaty and customary law exist in parallel. An armed attack requires military action of significant gravity; mere logistical or weapons support does not meet the threshold of an armed attack authorizing armed cross-border retaliation.'
  },

  {
    id: 'corfu-channel-case-1949',
    slug: 'corfu-channel-case-state-responsibility-innocent-passage',
    aliases: ['corfu-channel', 'icj_1949_corfu'],
    title: 'Corfu Channel Case (United Kingdom v. Albania)',
    jurisdiction: 'GLOBAL',
    parties: {
      petitioner: 'United Kingdom of Great Britain and Northern Ireland',
      respondent: 'People\'s Republic of Albania'
    },
    court: 'International Court of Justice (ICJ - The Hague)',
    courtId: 'icj',
    year: '1949',
    date: '9 April 1949',
    citation: 'ICJ Reports 1949, p. 4 / General List No. 1',
    bench: '16-Judge Full Court',
    judges: [
      "President Guerrero",
      "Vice-President Basdevant",
      "Judge Alvarez",
      "Judge Fabela",
      "Judge Hackworth",
      "Judge Winiarski",
      "Judge Zoričić",
      "Judge De Visscher",
      "Judge Sir Arnold McNair",
      "Judge Klaestad",
      "Judge Badawi Pasha",
      "Judge Krylov",
      "Judge Read",
      "Judge Hsu Mo",
      "Judge Azevedo",
      "Judge Ečer"
    ],
    caseType: 'Contentious State Dispute (Merits)',
    subjectTags: ['State Responsibility', 'Innocent Passage', 'International Straits', 'Maritime Mine Warfare', 'Duty to Warn'],
    acts: [
      'Customary International Law of the Sea',
      'Statute of the International Court of Justice'
    ],
    sections: ['Law of the Sea: Innocent Passage in International Straits', 'State Responsibility for Transboundary Harm'],
    ratioDecidendi: 'Every State has a binding legal obligation not to allow knowingly its territory to be used for acts contrary to the rights of other States. A coastal state has a duty to notify international shipping of the existence of a minefield in territorial waters used for international navigation.',
    executiveSummary: 'In the inaugural contentious case decided by the ICJ, the Court held Albania internationally responsible for explosions of naval mines in the Corfu Channel that damaged British warships and killed 44 personnel. The Court affirmed the right of innocent passage through international straits in peacetime without prior authorization.',
    caseContext: {
      facts: 'British warships cruising through the Corfu Channel in Albanian territorial waters struck submerged naval mines, causing heavy loss of life. Subsequent British minesweeping operations ("Operation Retail") swept 22 moored mines without Albanian consent.',
      legalIssue: '1. Is Albania responsible under international law for the explosions and liable to pay compensation?\n2. Did the United Kingdom violate Albanian sovereignty by conducting unauthorized minesweeping?'
    },
    reasoning: 'The Court held that Albania knew or ought to have known of the minefield and had a duty to warn approaching vessels. Conversely, the Court held that the subsequent British minesweeping operation violated Albanian sovereignty, rejecting the British defense of self-protection.'
  },

  {
    id: 'barcelona-traction-1970',
    slug: 'barcelona-traction-erga-omnes-diplomatic-protection',
    aliases: ['barcelona-traction', 'icj_1970_barcelona'],
    title: 'Barcelona Traction, Light and Power Company, Limited (Belgium v. Spain)',
    jurisdiction: 'GLOBAL',
    parties: {
      petitioner: 'Kingdom of Belgium (Applicant)',
      respondent: 'Spanish State (Respondent)'
    },
    court: 'International Court of Justice (ICJ - The Hague)',
    courtId: 'icj',
    year: '1970',
    date: '5 February 1970',
    citation: 'ICJ Reports 1970, p. 3 / General List No. 50',
    bench: '15-Judge Full Court',
    judges: [
      "President Bustamante y Rivero",
      "Vice-President Koretsky",
      "Judge Sir Gerald Fitzmaurice",
      "Judge Tanaka",
      "Judge Jessup",
      "Judge Morelli",
      "Judge Padilla Nervo",
      "Judge Forster",
      "Judge Gros",
      "Judge Ammoun",
      "Judge Bengzon",
      "Judge Petren",
      "Judge Lachs",
      "Judge Onyeama",
      "Judge Ignacio-Pinto"
    ],
    caseType: 'Diplomatic Protection / Corporate Nationality',
    subjectTags: ['Erga Omnes Obligations', 'Diplomatic Protection', 'Corporate Nationality', 'Jus Standi in International Law'],
    acts: [
      'Customary Law of Diplomatic Protection',
      'ILC Articles on Diplomatic Protection'
    ],
    sections: ['State Responsibility', 'Doctrine of Erga Omnes Norms'],
    ratioDecidendi: 'An essential distinction must be drawn between obligations of a State towards the international community as a whole (erga omnes), and those arising vis-à-vis another State in the field of diplomatic protection. For injury to a corporate entity, the state of incorporation alone has locus standi to exercise diplomatic protection, not the state of nationality of the shareholders.',
    executiveSummary: 'The ICJ introduced into general international law the foundational doctrine of **erga omnes obligations**—duties owed by states to the international community as a whole (e.g. outlaws of aggression and genocide, protection from slavery and racial discrimination). On the merits, the Court rejected Belgium\'s claim because the injured company was incorporated in Canada, despite Belgian nationals owning 88% of the shares.',
    caseContext: {
      facts: 'Barcelona Traction was an electric power company incorporated in Toronto, Canada, operating in Spain. Belgian nationals owned the overwhelming majority of its shares. Spanish authorities declared the company bankrupt and liquidated its assets. Belgium instituted ICJ proceedings against Spain claiming compensation.',
      legalIssue: 'Does a state have legal standing under international law to exercise diplomatic protection on behalf of its national shareholders in a foreign corporation injured by another state?'
    },
    reasoning: 'The Court reasoned that international law respects the corporate veil. Only the state where the company was incorporated and had its registered office possesses jus standi, unless the corporate entity has ceased to exist.'
  }
];
