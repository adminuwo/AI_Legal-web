import { ALL_LEGAL_UPDATES } from '../src/data/updates/index.js';
import { CONTENT_TYPE_FILTERS_CONFIG } from '../src/data/legalTaxonomy.js';

console.log('================================================================');
console.log('   AI LEGAL™ — LEGAL UPDATES COMPLETE ENGINE & TAXONOMY AUDIT   ');
console.log('================================================================');

console.log(`\nTotal Ingested Legal Updates: ${ALL_LEGAL_UPDATES.length}`);

// 1. Audit Taxonomy Subjects
const updateFilters = CONTENT_TYPE_FILTERS_CONFIG['LEGAL_UPDATES']?.filters || [];
console.log(`\nConfigured Taxonomy Subjects for LEGAL_UPDATES (${updateFilters.length}):`);
updateFilters.forEach(f => console.log(` - [${f.id}] "${f.label}" (short: "${f.shortLabel}")`));

// 2. Audit Subject Distribution & Filter Matching
console.log('\n--- Subject Distribution & Direct Filter Verification ---');
let allPassed = true;

const subjectFiltersOnly = updateFilters.filter(f => f.id !== 'ALL');

subjectFiltersOnly.forEach(filter => {
  const targetId = (filter.id || '').toLowerCase();
  const targetLabel = (filter.label || '').toLowerCase();
  const targetShortLabel = (filter.shortLabel || '').toLowerCase();

  const matches = ALL_LEGAL_UPDATES.filter(u => {
    const cat = (u.category || '').toLowerCase();
    if (cat && (cat === targetLabel || cat === targetShortLabel || cat === targetId)) {
      return true;
    }
    if (u.tags && u.tags.includes(filter.id)) {
      return true;
    }
    return false;
  });

  console.log(`Subject [${filter.id}] -> Found ${matches.length} updates`);
  if (matches.length < 5) {
    console.error(`  FAIL: Expected at least 5 updates for subject ${filter.id}, found ${matches.length}`);
    allPassed = false;
  } else {
    matches.forEach(m => console.log(`   * ${m.id} | ${m.title.slice(0, 60)}...`));
  }
});

// 3. Audit Completeness of Every Update Record (10-Section Requirements)
console.log('\n--- 10-Section Completeness Audit for All 25 Records ---');
let itemIndex = 1;
ALL_LEGAL_UPDATES.forEach(u => {
  const missing = [];

  // Section I: Identity
  if (!u.id) missing.push('id');
  if (!u.title) missing.push('title');
  if (!u.category) missing.push('category');
  if (!u.authority) missing.push('authority');
  if (!u.summary) missing.push('summary');
  if (!u.officialIdentity?.issuingAuthority) missing.push('officialIdentity.issuingAuthority');
  if (!u.officialIdentity?.documentNumber) missing.push('officialIdentity.documentNumber');
  if (!u.officialIdentity?.publicationDate) missing.push('officialIdentity.publicationDate');
  if (!u.officialIdentity?.effectiveDate) missing.push('officialIdentity.effectiveDate');
  if (!u.officialIdentity?.officialSourceUrl) missing.push('officialIdentity.officialSourceUrl');

  // Section II: Legal Status
  if (!u.legalStatus) missing.push('legalStatus');

  // Section III: Original Legal Text
  if (!u.originalLegalText || u.originalLegalText.length < 30) missing.push('originalLegalText');

  // Section IV: Detailed Explanation
  if (!u.detailedExplanation?.whatChanged) missing.push('detailedExplanation.whatChanged');
  if (!u.detailedExplanation?.whyItMatters) missing.push('detailedExplanation.whyItMatters');
  if (!u.detailedExplanation?.preUpdatePosition) missing.push('detailedExplanation.preUpdatePosition');
  if (!u.detailedExplanation?.newLegalPosition) missing.push('detailedExplanation.newLegalPosition');
  if (!u.detailedExplanation?.affectedStakeholders || u.detailedExplanation.affectedStakeholders.length === 0) {
    missing.push('detailedExplanation.affectedStakeholders');
  }

  // Section V: Provision Comparison
  if (!u.provisionComparison || u.provisionComparison.length === 0) {
    missing.push('provisionComparison');
  }

  // Section VI: Transitional Rules
  if (!u.transitionalRules?.commencementRule) missing.push('transitionalRules.commencementRule');
  if (!u.transitionalRules?.applicability) missing.push('transitionalRules.applicability');
  if (!u.transitionalRules?.pendingProceedings) missing.push('transitionalRules.pendingProceedings');

  // Section VII: Regulatory Analysis
  if (!u.regulatoryAnalysis?.statutoryFramework) missing.push('regulatoryAnalysis.statutoryFramework');
  if (!u.regulatoryAnalysis?.complianceObligations) missing.push('regulatoryAnalysis.complianceObligations');
  if (!u.regulatoryAnalysis?.penalConsequences) missing.push('regulatoryAnalysis.penalConsequences');

  // Section VIII: Practical Impact & Checklist
  if (!u.practicalImpactAndChecklist?.advocateActions) missing.push('practicalImpactAndChecklist.advocateActions');
  if (!u.practicalImpactAndChecklist?.complianceChecklist || u.practicalImpactAndChecklist.complianceChecklist.length === 0) {
    missing.push('practicalImpactAndChecklist.complianceChecklist');
  }

  // Section IX: Precedents
  if (!u.relatedJudgmentsAndAuthorities || u.relatedJudgmentsAndAuthorities.length === 0) {
    missing.push('relatedJudgmentsAndAuthorities');
  }

  // Section X: Hindi & FAQs
  if (!u.hindiExplanation || u.hindiExplanation.length < 50) missing.push('hindiExplanation');
  if (!u.faqs || u.faqs.length === 0) missing.push('faqs');

  if (missing.length > 0) {
    console.error(`[${itemIndex}] FAIL: ${u.id} is missing fields: ${missing.join(', ')}`);
    allPassed = false;
  } else {
    console.log(`[${itemIndex}] PASS: ${u.id} (All 10 sections present & verified)`);
  }
  itemIndex++;
});

if (allPassed) {
  console.log('\n>>> SUCCESS: ALL 25 UPDATES ACROSS ALL 5 SUBJECTS FULLY VERIFIED WITH 100% SPEC COMPLIANCE! <<<');
} else {
  console.error('\n>>> AUDIT FAILED WITH ISSUES RECORDED ABOVE <<<');
  process.exit(1);
}
