const { ALL_RIGHTS_REMEDIES } = require('../src/data/remedies/index.js');
const { TAXONOMY } = require('../src/data/legalTaxonomy.js');

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

    console.log(`Filter [${filter.id}] "${filter.label}": matches = ${directMatches.length}`);
    directMatches.forEach(m => console.log(`   - ${m.title}`));
  } else {
    console.log(`Filter [ALL]: matches = ${list.length}`);
  }
});
