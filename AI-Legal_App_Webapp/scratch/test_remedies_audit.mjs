import { ALL_RIGHTS_REMEDIES } from '../src/data/remedies/index.js';
import { CONTENT_TYPE_FILTERS_CONFIG } from '../src/data/legalTaxonomy.js';
const TAXONOMY = CONTENT_TYPE_FILTERS_CONFIG;

console.log('Total remedies in ALL_RIGHTS_REMEDIES:', ALL_RIGHTS_REMEDIES.length);

const categories = {};
ALL_RIGHTS_REMEDIES.forEach(r => {
  categories[r.category] = (categories[r.category] || 0) + 1;
});

console.log('Categories count:', JSON.stringify(categories, null, 2));

const rightsTax = TAXONOMY.RIGHTS_REMEDIES;
console.log('Rights filters in taxonomy:', rightsTax.filters.map(f => f.label));

// Test filtering logic for each filter
rightsTax.filters.forEach(filter => {
  let list = ALL_RIGHTS_REMEDIES;
  if (filter.id !== 'ALL') {
    const targetId = (filter.id || '').toLowerCase();
    const targetLabel = (filter.label || '').toLowerCase();
    const targetShortLabel = (filter.shortLabel || '').toLowerCase();

    const directMatches = list.filter(r => {
      const cat = (r.category || '').toLowerCase();
      if (cat && (cat === targetLabel || cat === targetShortLabel || cat === targetId)) {
        return true;
      }
      if (r.tags && r.tags.includes(filter.id)) {
        return true;
      }
      return false;
    });

    console.log(`\nFilter [${filter.id}] "${filter.label}": matches = ${directMatches.length}`);
    directMatches.forEach(m => console.log(`   - ${m.title}`));
  } else {
    console.log(`\nFilter [ALL]: matches = ${list.length}`);
  }
});

// Verify 13 mandatory sections for every remedy
console.log('\n--- VERIFYING MANDATORY SECTIONS ON ALL 30 REMEDIES ---');
let completeCount = 0;
let errors = 0;
ALL_RIGHTS_REMEDIES.forEach(r => {
  const missing = [];
  if (!r.title) missing.push('title');
  if (!r.category) missing.push('category');
  if (!r.remedyType) missing.push('remedyType');
  if (!r.forum) missing.push('forum');
  if (!r.overview) missing.push('overview');
  if (!r.statutoryBasis) missing.push('statutoryBasis');
  if (!r.scopeAndEligibility) missing.push('scopeAndEligibility');
  if (!r.violationScenarios || r.violationScenarios.length === 0) missing.push('violationScenarios');
  if (!r.remedyProcess || r.remedyProcess.length === 0) missing.push('remedyProcess');
  if (!r.documentsAndEvidence || r.documentsAndEvidence.length === 0) missing.push('documentsAndEvidence');
  if (!r.authoritiesAndJurisdiction) missing.push('authoritiesAndJurisdiction');
  if (!r.limitationAndDeadlines) missing.push('limitationAndDeadlines');
  if (!r.possibleOutcomes || r.possibleOutcomes.length === 0) missing.push('possibleOutcomes');
  if (!r.landmarkJudgments || r.landmarkJudgments.length === 0) missing.push('landmarkJudgments');
  if (!r.advocateGuide) missing.push('advocateGuide');
  if (!r.hindiExplanation) missing.push('hindiExplanation');
  if (!r.faqs || r.faqs.length === 0) missing.push('faqs');

  if (missing.length > 0) {
    console.error(`❌ Remedy [${r.id}] missing sections:`, missing.join(', '));
    errors++;
  } else {
    completeCount++;
  }
});

console.log(`\nAudit Results: ${completeCount} of ${ALL_RIGHTS_REMEDIES.length} remedies have 100% of all required sections! (Errors: ${errors})`);
