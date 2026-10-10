const taxPromise = import('../src/data/legalTaxonomy.js');
const draftingPromise = import('../src/data/legalDraftingData.js');

Promise.all([taxPromise, draftingPromise]).then(([tax, drafting]) => {
  const filters = tax.CONTENT_TYPE_FILTERS_CONFIG.DRAFTING.filters;
  const db = drafting.LEGAL_DRAFTING_DATABASE;
  
  filters.forEach(filterObj => {
    const selectedFilterKeywords = filterObj.id === 'ALL' ? [] : [
      filterObj.id.toLowerCase(),
      filterObj.label.toLowerCase(),
      ...(filterObj.matchKeywords || []).map(k => k.toLowerCase())
    ];
    let res;
    if (filterObj.id === 'ALL') {
      res = db;
    } else {
      res = db.filter((d) => {
        if (d.tags && d.tags.includes(filterObj.id)) return true;
        const corpus = `${d.id} ${d.title} ${d.category} ${d.actReference} ${d.courtForum} ${d.purposeWhenToUse} ${(d.tags || []).join(' ')}`.toLowerCase();
        return selectedFilterKeywords.some((kw) => corpus.includes(kw));
      });
    }
    console.log(`[${filterObj.id}] "${filterObj.label}" -> ${res.length} templates`);
  });
}).catch(console.error);
