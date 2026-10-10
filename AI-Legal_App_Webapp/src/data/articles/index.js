// ─── AI LEGAL™ COMPREHENSIVE ARTICLES & GUIDES REPOSITORY ─────────────────
// Aggregates all verified, source-grounded doctrinal treatises across all jurisdictions.

import { CONSTITUTIONAL_ARTICLES } from './constitutionalArticles.js';
import { CRIMINAL_ARTICLES } from './criminalArticles.js';
import { CIVIL_ARTICLES } from './civilArticles.js';
import { ADVOCATE_ARTICLES } from './advocateArticles.js';
import { REMEDIES_ARTICLES } from './remediesArticles.js';
import { CASE_LAW_ARTICLES } from './caseLawArticles.js';
import { COMPARATIVE_ARTICLES } from './comparativeArticles.js';
import { PRACTICE_ARTICLES } from './practiceArticles.js';
import { NEPAL_LEGAL_ARTICLES } from './nepalArticles.js';
import { US_LEGAL_ARTICLES } from './usArticles.js';
import { UK_LEGAL_ARTICLES } from './ukArticles.js';
import { INTERNATIONAL_LEGAL_ARTICLES } from './internationalArticles.js';

export const ALL_INDIAN_ARTICLES = [
  ...CONSTITUTIONAL_ARTICLES,
  ...CRIMINAL_ARTICLES,
  ...CIVIL_ARTICLES,
  ...ADVOCATE_ARTICLES,
  ...REMEDIES_ARTICLES,
  ...CASE_LAW_ARTICLES,
  ...PRACTICE_ARTICLES
];

export const DEEP_LEGAL_ARTICLES_DATABASE = [
  ...ALL_INDIAN_ARTICLES,
  ...COMPARATIVE_ARTICLES,
  ...NEPAL_LEGAL_ARTICLES,
  ...US_LEGAL_ARTICLES,
  ...UK_LEGAL_ARTICLES,
  ...INTERNATIONAL_LEGAL_ARTICLES
];

/**
 * Authoritative Jurisdiction-Isolated Articles Resolver
 * Guarantees zero leakage across all jurisdictions.
 */
export const getArticlesForJurisdiction = (countryCode = 'IN') => {
  const norm = String(countryCode || 'IN').toUpperCase().trim();
  if (norm === 'NP' || norm === 'NEPAL') {
    return NEPAL_LEGAL_ARTICLES;
  }
  if (norm === 'US' || norm === 'USA') {
    return US_LEGAL_ARTICLES;
  }
  if (norm === 'GB' || norm === 'UK') {
    return UK_LEGAL_ARTICLES;
  }
  if (norm === 'GLOBAL' || norm === 'INTERNATIONAL') {
    return INTERNATIONAL_LEGAL_ARTICLES;
  }
  // Default India: strictly Indian articles
  return ALL_INDIAN_ARTICLES;
};

export {
  CONSTITUTIONAL_ARTICLES,
  CRIMINAL_ARTICLES,
  CIVIL_ARTICLES,
  ADVOCATE_ARTICLES,
  REMEDIES_ARTICLES,
  CASE_LAW_ARTICLES,
  COMPARATIVE_ARTICLES,
  PRACTICE_ARTICLES,
  NEPAL_LEGAL_ARTICLES,
  US_LEGAL_ARTICLES,
  UK_LEGAL_ARTICLES,
  INTERNATIONAL_LEGAL_ARTICLES
};

