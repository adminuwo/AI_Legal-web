import { COURT_PROCEDURES_DATABASE } from '../src/data/courtProceduresData.js';
import { CONTENT_TYPE_FILTERS_CONFIG } from '../src/data/legalTaxonomy.js';

const procFilters = CONTENT_TYPE_FILTERS_CONFIG.PROCEDURES.filters;

console.log('--- DIRECT MATCH TEST FOR EVERY FILTER ---');
procFilters.forEach(filter => {
  if (filter.id === 'ALL') {
    console.log(`[Filter: ALL] -> ${COURT_PROCEDURES_DATABASE.length} procedures`);
    return;
  }
  const targetId = filter.id.toLowerCase();
  const targetLabel = filter.label.toLowerCase();
  const targetShortLabel = filter.shortLabel.toLowerCase();

  const directMatches = COURT_PROCEDURES_DATABASE.filter(p => {
    const cat = (p.category || '').toLowerCase();
    if (cat && (cat === targetLabel || cat === targetShortLabel || cat === targetId)) {
      return true;
    }
    if (p.tags && p.tags.includes(filter.id)) {
      return true;
    }
    return false;
  });

  console.log(`[Filter: ${filter.id.padEnd(25)}] -> ${directMatches.length} procedures`);
});
