// ─── MASTER RIGHTS & REMEDIES AGGREGATOR ─────────────────────────────────────
// Comprehensive multi-jurisdiction legal remedy repository for India and Nepal.

import { FUNDAMENTAL_RIGHTS_REMEDIES } from './fundamentalRightsRemedies.js';
import { ARREST_BAIL_REMEDIES } from './arrestBailRemedies.js';
import { CONSUMER_RIGHTS_REMEDIES } from './consumerRightsRemedies.js';
import { WOMENS_RIGHTS_REMEDIES } from './womensRightsRemedies.js';
import { CYBERCRIME_REMEDIES } from './cybercrimeRemedies.js';
import { WORKPLACE_LABOUR_REMEDIES } from './workplaceLabourRemedies.js';
import { NEPAL_RIGHTS_REMEDIES } from './nepalRemedies.js';
import { US_RIGHTS_REMEDIES } from './usRemedies.js';
import { UK_RIGHTS_REMEDIES } from './ukRemedies.js';
import { INTERNATIONAL_RIGHTS_REMEDIES } from './internationalRemedies.js';

export {
  FUNDAMENTAL_RIGHTS_REMEDIES,
  ARREST_BAIL_REMEDIES,
  CONSUMER_RIGHTS_REMEDIES,
  WOMENS_RIGHTS_REMEDIES,
  CYBERCRIME_REMEDIES,
  WORKPLACE_LABOUR_REMEDIES,
  NEPAL_RIGHTS_REMEDIES,
  US_RIGHTS_REMEDIES,
  UK_RIGHTS_REMEDIES,
  INTERNATIONAL_RIGHTS_REMEDIES
};

const RAW_INDIAN_REMEDIES = [
  ...FUNDAMENTAL_RIGHTS_REMEDIES,
  ...ARREST_BAIL_REMEDIES,
  ...CONSUMER_RIGHTS_REMEDIES,
  ...WOMENS_RIGHTS_REMEDIES,
  ...CYBERCRIME_REMEDIES,
  ...WORKPLACE_LABOUR_REMEDIES
];

export const ALL_INDIAN_REMEDIES = RAW_INDIAN_REMEDIES.map(item => ({
  ...item,
  jurisdiction: 'IN',
  processSteps: item.processSteps || (item.remedyProcess ? item.remedyProcess.map(s => `${s.stageTitle}: ${s.action}`) : []),
  landmarkCase: item.landmarkCase || (item.landmarkJudgments && item.landmarkJudgments.length > 0 ? `${item.landmarkJudgments[0].title} — ${item.landmarkJudgments[0].citation}` : '')
}));

export const ALL_RIGHTS_REMEDIES = [
  ...ALL_INDIAN_REMEDIES,
  ...NEPAL_RIGHTS_REMEDIES,
  ...US_RIGHTS_REMEDIES,
  ...UK_RIGHTS_REMEDIES,
  ...INTERNATIONAL_RIGHTS_REMEDIES
];

/**
 * Authoritative Jurisdiction Remedies Resolver
 */
export const getRemediesForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  if (norm === 'NP' || norm === 'NEPAL') {
    return NEPAL_RIGHTS_REMEDIES;
  }
  if (norm === 'US' || norm === 'USA') {
    return US_RIGHTS_REMEDIES;
  }
  if (norm === 'GB' || norm === 'UK') {
    return UK_RIGHTS_REMEDIES;
  }
  if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    return INTERNATIONAL_RIGHTS_REMEDIES;
  }
  return ALL_INDIAN_REMEDIES;
};

export default ALL_RIGHTS_REMEDIES;
