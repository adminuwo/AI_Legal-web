async function run() {
  const tax = await import('../src/data/legalTaxonomy.js');
  const art = await import('../src/data/legalArticlesAndUpdatesData.js');

  const filters = tax.CONTENT_TYPE_FILTERS_CONFIG.ARTICLES.filters;
  const articles = art.LEGAL_ARTICLES_DATABASE;

  console.log('--- AUDIT OF ALL ARTICLES & GUIDES SUBJECT FILTERS ---');
  console.log(`Total treatises in database: ${articles.length}`);
  
  filters.forEach(f => {
    let matches = [];
    if (f.id === 'ALL') {
      matches = articles;
    } else {
      const targetId = (f.id || '').toLowerCase();
      const targetLabel = (f.label || '').toLowerCase();
      const targetShortLabel = (f.shortLabel || '').toLowerCase();
      matches = articles.filter(a => {
        const cat = (a.category || '').toLowerCase();
        if (cat && (cat === targetLabel || cat === targetShortLabel || cat === targetId)) return true;
        if (a.tags && a.tags.includes(f.id)) return true;
        const corpus = `${a.id} ${a.title} ${a.category} ${a.summary} ${(a.tags || []).join(' ')}`.toLowerCase();
        return f.matchKeywords.some(kw => corpus.includes(kw));
      });
    }
    console.log(`• Filter [${f.id}] "${f.label}": ${matches.length} articles found`);
  });
}

run().catch(console.error);
