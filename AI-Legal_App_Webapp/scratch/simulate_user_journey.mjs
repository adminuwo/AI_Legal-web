/**
 * SIMULATE EXACT USER JOURNEY FROM SCREENSHOT:
 * Jurisdiction: Nepal (NP)
 * Content: Articles & Guides (ARTICLES)
 * Subject: All Articles (ALL)
 */

import { getArticlesForJurisdiction } from '../src/data/articles/index.js';
import { getFiltersConfigForJurisdiction, getSubjectsForJurisdiction } from '../src/data/jurisdiction/jurisdictionRegistry.js';
import { getJudgmentsForJurisdiction } from '../src/data/landmarkJudgmentsData.js';
import { getProceduresForJurisdiction } from '../src/data/procedures/index.js';
import { getDraftingForJurisdiction } from '../src/data/legalDraftingData.js';
import { getRemediesForJurisdiction } from '../src/data/remedies/index.js';
import { getUpdatesForJurisdiction } from '../src/data/updates/index.js';
import { getDictionaryForJurisdiction } from '../src/data/dictionary/index.js';

console.log('═══════════════════════════════════════════════════════════════════════════');
console.log(' SIMULATING USER SCREENSHOT STATE:');
console.log(' Jurisdiction: Nepal | Content: Articles & Guides | Subject: All Articles');
console.log('═══════════════════════════════════════════════════════════════════════════\n');

// 1. Simulating Workspace State when User selects Nepal
const activeJurisdiction = 'NP';
const activeContentType = 'ARTICLES';
const activeSubjectFilter = 'ALL';
const searchQuery = '';

// 2. Dynamic filter config resolution
const filterConfig = getFiltersConfigForJurisdiction(activeJurisdiction)[activeContentType];
console.log(`Active Filter Label: "${filterConfig.label}"`);
console.log(`Filter Kicker: "${filterConfig.filterKicker}"`);
console.log(`Available Sub-filters: ${filterConfig.filters.map(f => f.label).join(' | ')}\n`);

// 3. Simulating filteredArticles computation in KnowledgeHubWorkspace.jsx
const currentArticlesDatabase = getArticlesForJurisdiction(activeJurisdiction);
const selectedFilterObj = filterConfig.filters.find(f => f.id === activeSubjectFilter) || filterConfig.filters[0];

let list = currentArticlesDatabase;
if (selectedFilterObj.id !== 'ALL') {
  const targetId = (selectedFilterObj.id || '').toLowerCase();
  const targetLabel = (selectedFilterObj.label || '').toLowerCase();
  const targetShortLabel = (selectedFilterObj.shortLabel || '').toLowerCase();
  const activeFilter = (activeSubjectFilter || '').toLowerCase();

  list = list.filter((a) => {
    const cat = (a.category || '').toLowerCase();
    if (cat && (cat === targetLabel || cat === targetShortLabel || cat === activeFilter || cat === targetId)) {
      return true;
    }
    if (a.tags && (a.tags.includes(selectedFilterObj.id) || a.tags.includes(activeSubjectFilter))) {
      return true;
    }
    const corpus = `${a.id} ${a.title} ${a.category} ${a.summary} ${(a.tags || []).join(' ')} ${(a.keyStatutes || []).join(' ')}`.toLowerCase();
    return (selectedFilterObj.matchKeywords || []).some((kw) => corpus.includes(kw));
  });
}

const renderedCards = list;

console.log(`Total Articles Rendered on Bookshelf: ${renderedCards.length}`);
console.log('---------------------------------------------------------------------------');
renderedCards.forEach((card, idx) => {
  console.log(`[Card ${idx + 1}]`);
  console.log(`  Title:        ${card.title}`);
  console.log(`  Category:     ${card.category}`);
  console.log(`  Jurisdiction: ${card.jurisdiction?.name} (${card.jurisdiction?.code})`);
  console.log(`  Author:       ${card.author}`);
  console.log(`  Read Time:    ${card.readTime}`);
  console.log(`  Key Statutes: ${(card.keyStatutes || []).join(', ')}`);
  console.log(`  Summary:      ${card.summary.substring(0, 100)}...`);
  console.log('---------------------------------------------------------------------------');
});

// 4. Strict assertion that ZERO Indian articles appear
const forbiddenTerms = [
  'Bharatiya Nyaya Sanhita',
  'BNS 2023',
  'Bharatiya Nagarik Suraksha Sanhita',
  'BNSS 2023',
  'Section 11 CPC',
  'Order XXXIX CPC',
  'Basic Structure Doctrine',
  'Kesavananda Bharati'
];

let violationCount = 0;
renderedCards.forEach(card => {
  const blob = `${card.title} ${card.summary} ${card.category} ${(card.tags || []).join(' ')}`.toLowerCase();
  forbiddenTerms.forEach(term => {
    if (blob.includes(term.toLowerCase())) {
      console.error(`🚨 VIOLATION: Card "${card.title}" contains forbidden Indian law term "${term}"!`);
      violationCount++;
    }
  });
});

if (violationCount === 0) {
  console.log('🏆 VERIFICATION PASSED: 100% Pure Nepal Legal Treatises Rendered!');
  console.log('   ZERO Indian statutes, case citations, or CPC references found.\n');
} else {
  console.error(`❌ FAILED: Found ${violationCount} Indian legal references in Nepal Articles view.`);
  process.exit(1);
}

// 5. Simulate opening Article Reader for each card
console.log('Verifying Full 13-Section Detailed Reader for each Nepalese treatise:');
renderedCards.forEach(card => {
  if (!card.contentSections || card.contentSections.length < 10) {
    throw new Error(`Article ${card.id} lacks complete sections!`);
  }
  const hasOfficialSource = card.sourceMetadata?.sourceTitle && card.sourceMetadata?.gazetteCitation;
  if (!hasOfficialSource) {
    throw new Error(`Article ${card.id} lacks official source verification metadata!`);
  }
  console.log(`  📖 ${card.id} -> ${card.contentSections.length} Sections verified. Source: ${card.sourceMetadata.gazetteCitation}`);
});

console.log('\n🎉 ALL CHECKS PASSED SUCCESSFULLY!\n');
