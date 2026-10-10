const path = require('path');
const srcData = path.join(__dirname, '..', 'src', 'data');

const taxonomy = require(path.join(srcData, 'legalTaxonomy.js'));
const drafting = require(path.join(srcData, 'legalDraftingData.js'));

const draftingFilters = taxonomy.CONTENT_TYPE_FILTERS_CONFIG.DRAFTING.filters;
const database = drafting.LEGAL_DRAFTING_DATABASE;

console.log(`Auditing Drafting Library with ${database.length} total dossiers:\n`);

draftingFilters.forEach(filter => {
  const keywords = (filter.matchKeywords || []).map(k => k.toLowerCase());
  let matches = [];
  if (filter.id === 'ALL') {
    matches = database;
  } else {
    matches = database.filter(d => {
      const corpus = `${d.id} ${d.title} ${d.category} ${d.actReference} ${d.courtForum} ${d.purposeWhenToUse} ${(d.tags || []).join(' ')}`.toLowerCase();
      return keywords.some(kw => corpus.includes(kw));
    });
  }
  console.log(`Filter [${filter.id}] "${filter.label}": ${matches.length} matching templates`);
  matches.forEach(m => console.log(`   -> [${m.id}] ${m.title}`));
  if (matches.length === 0) {
    console.error(`   ERROR: 0 matching templates for "${filter.label}"!`);
  }
});
