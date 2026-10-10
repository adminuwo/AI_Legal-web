// ─── MASTER COURT PROCEDURES & LITIGATION WORKFLOWS DATABASE ─────────────────
// Comprehensive, jurisdiction-aware legal procedure library for India and Nepal

import { EXECUTION_PROCEDURES } from './executionProcedures.js';
import { WRITS_PROCEDURES } from './writsProcedures.js';
import { BAIL_PROCEDURES } from './bailProcedures.js';
import { FIR_INVESTIGATION_PROCEDURES } from './firInvestigationProcedures.js';
import { TRIAL_SESSIONS_PROCEDURES } from './trialSessionsProcedures.js';
import { CIVIL_INJUNCTIONS_PROCEDURES } from './civilInjunctionsProcedures.js';
import { CIVIL_LITIGATION_PROCEDURES } from './civilLitigationProcedures.js';
import { APPEALS_REVISIONS_PROCEDURES } from './appealsRevisionsProcedures.js';
import { CHEQUE_BOUNCE_PROCEDURES } from './chequeBounceProcedures.js';
import { FAMILY_LAW_PROCEDURES } from './familyLawProcedures.js';
import { COMMERCIAL_ARBITRATION_PROCEDURES } from './commercialArbitrationProcedures.js';
import { NEPAL_COURT_PROCEDURES } from './nepalProcedures.js';
import { US_COURT_PROCEDURES } from './usProcedures.js';
import { UK_COURT_PROCEDURES } from './ukProcedures.js';
import { INTERNATIONAL_COURT_PROCEDURES } from './internationalProcedures.js';

export const ALL_INDIAN_PROCEDURES = [
  ...EXECUTION_PROCEDURES,
  ...WRITS_PROCEDURES,
  ...BAIL_PROCEDURES,
  ...FIR_INVESTIGATION_PROCEDURES,
  ...TRIAL_SESSIONS_PROCEDURES,
  ...CIVIL_INJUNCTIONS_PROCEDURES,
  ...CIVIL_LITIGATION_PROCEDURES,
  ...APPEALS_REVISIONS_PROCEDURES,
  ...CHEQUE_BOUNCE_PROCEDURES,
  ...FAMILY_LAW_PROCEDURES,
  ...COMMERCIAL_ARBITRATION_PROCEDURES
];

export const ALL_COURT_PROCEDURES = [
  ...ALL_INDIAN_PROCEDURES,
  ...NEPAL_COURT_PROCEDURES,
  ...US_COURT_PROCEDURES,
  ...UK_COURT_PROCEDURES,
  ...INTERNATIONAL_COURT_PROCEDURES
];

/**
 * Authoritative Jurisdiction Procedures Resolver
 * Guarantees zero leakage across all jurisdictions.
 */
export const getProceduresForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  if (norm === 'NP' || norm === 'NEPAL') {
    return NEPAL_COURT_PROCEDURES;
  }
  if (norm === 'US' || norm === 'USA') {
    return US_COURT_PROCEDURES;
  }
  if (norm === 'GB' || norm === 'UK') {
    return UK_COURT_PROCEDURES;
  }
  if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    return INTERNATIONAL_COURT_PROCEDURES;
  }
  return ALL_INDIAN_PROCEDURES;
};

export {
  EXECUTION_PROCEDURES,
  WRITS_PROCEDURES,
  BAIL_PROCEDURES,
  FIR_INVESTIGATION_PROCEDURES,
  TRIAL_SESSIONS_PROCEDURES,
  CIVIL_INJUNCTIONS_PROCEDURES,
  CIVIL_LITIGATION_PROCEDURES,
  APPEALS_REVISIONS_PROCEDURES,
  CHEQUE_BOUNCE_PROCEDURES,
  FAMILY_LAW_PROCEDURES,
  COMMERCIAL_ARBITRATION_PROCEDURES,
  NEPAL_COURT_PROCEDURES,
  US_COURT_PROCEDURES,
  UK_COURT_PROCEDURES,
  INTERNATIONAL_COURT_PROCEDURES
};

export default ALL_COURT_PROCEDURES;

