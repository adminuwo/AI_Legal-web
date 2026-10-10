import { COURT_PROCEDURES_DATABASE } from '../src/data/courtProceduresData.js';
import { CONTENT_TYPE_FILTERS_CONFIG } from '../src/data/legalTaxonomy.js';

console.log('Total Procedures in Database:', COURT_PROCEDURES_DATABASE.length);

const categories = {};
COURT_PROCEDURES_DATABASE.forEach(p => {
  categories[p.category] = (categories[p.category] || 0) + 1;
});

console.log('\n--- PROCEDURES PER CATEGORY ---');
Object.entries(categories).forEach(([cat, count]) => {
  console.log(`- ${cat}: ${count} procedures`);
});

console.log('\n--- FILTER COMPATIBILITY TEST ---');
const procFilters = CONTENT_TYPE_FILTERS_CONFIG.PROCEDURES.filters;
procFilters.forEach(filter => {
  if (filter.id === 'ALL') {
    console.log(`[Filter: ALL] -> ${COURT_PROCEDURES_DATABASE.length} procedures`);
    return;
  }
  const targetId = filter.id.toLowerCase();
  const targetLabel = filter.label.toLowerCase();
  const targetShortLabel = filter.shortLabel.toLowerCase();
  const filterKeywords = [
    targetId,
    targetLabel,
    ...(filter.matchKeywords || []).map(k => k.toLowerCase())
  ];

  const matched = COURT_PROCEDURES_DATABASE.filter(p => {
    const cat = (p.category || '').toLowerCase();
    if (cat && (cat === targetLabel || cat === targetShortLabel || cat === targetId)) {
      return true;
    }
    if (p.tags && p.tags.includes(filter.id)) {
      return true;
    }
    const corpus = `${p.id} ${p.title} ${p.category} ${p.actReference} ${p.courtForum} ${p.overview} ${(p.tags || []).join(' ')}`.toLowerCase();
    return filterKeywords.some(kw => corpus.includes(kw));
  });

  console.log(`[Filter: ${filter.id} (${filter.shortLabel})] -> ${matched.length} procedures matched`);
});
