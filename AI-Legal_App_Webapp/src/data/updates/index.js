// ─── MASTER LEGAL UPDATES AGGREGATOR ─────────────────────────────────────────
// Comprehensive multi-jurisdiction legal updates repository for India and Nepal.

import { CRIMINAL_LAW_UPDATES } from './criminalLawUpdates.js';
import { GAZETTE_NOTIFICATIONS_UPDATES } from './gazetteNotifications.js';
import { HIGH_COURT_CIRCULARS_UPDATES } from './highCourtCirculars.js';
import { STATUTORY_AMENDMENTS_UPDATES } from './statutoryAmendments.js';
import { REGULATORY_DIRECTIVES_UPDATES } from './regulatoryDirectives.js';
import { NEPAL_LEGAL_UPDATES } from './nepalUpdates.js';
import { US_LEGAL_UPDATES } from './usUpdates.js';
import { UK_LEGAL_UPDATES } from './ukUpdates.js';
import { INTERNATIONAL_LEGAL_UPDATES } from './internationalUpdates.js';

export {
  CRIMINAL_LAW_UPDATES,
  GAZETTE_NOTIFICATIONS_UPDATES,
  HIGH_COURT_CIRCULARS_UPDATES,
  STATUTORY_AMENDMENTS_UPDATES,
  REGULATORY_DIRECTIVES_UPDATES,
  NEPAL_LEGAL_UPDATES,
  US_LEGAL_UPDATES,
  UK_LEGAL_UPDATES,
  INTERNATIONAL_LEGAL_UPDATES
};

const RAW_INDIAN_UPDATES = [
  ...CRIMINAL_LAW_UPDATES,
  ...GAZETTE_NOTIFICATIONS_UPDATES,
  ...HIGH_COURT_CIRCULARS_UPDATES,
  ...STATUTORY_AMENDMENTS_UPDATES,
  ...REGULATORY_DIRECTIVES_UPDATES
];

export const ALL_INDIAN_UPDATES = RAW_INDIAN_UPDATES.map(item => ({
  ...item,
  jurisdiction: 'IN',
  authority: item.authority || item.officialIdentity?.issuingAuthority || 'Government of India',
  effectiveDate: item.effectiveDate || item.officialIdentity?.effectiveDate || 'Immediate Effect',
  status: item.status || item.legalStatus || 'Enacted & In Force',
  sourceUrl: item.sourceUrl || item.officialIdentity?.officialSourceUrl || '',
  actionablePoints: item.actionablePoints || item.practicalImpactAndChecklist?.complianceChecklist || item.keyPoints || [],
  keyPoints: item.keyPoints || item.practicalImpactAndChecklist?.complianceChecklist || []
}));

export const ALL_LEGAL_UPDATES = [
  ...ALL_INDIAN_UPDATES,
  ...NEPAL_LEGAL_UPDATES,
  ...US_LEGAL_UPDATES,
  ...UK_LEGAL_UPDATES,
  ...INTERNATIONAL_LEGAL_UPDATES
];

/**
 * Authoritative Jurisdiction Updates Resolver
 */
export const getUpdatesForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  if (norm === 'NP' || norm === 'NEPAL') {
    return NEPAL_LEGAL_UPDATES;
  }
  if (norm === 'US' || norm === 'USA') {
    return US_LEGAL_UPDATES;
  }
  if (norm === 'GB' || norm === 'UK') {
    return UK_LEGAL_UPDATES;
  }
  if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    return INTERNATIONAL_LEGAL_UPDATES;
  }
  return ALL_INDIAN_UPDATES;
};

export default ALL_LEGAL_UPDATES;
