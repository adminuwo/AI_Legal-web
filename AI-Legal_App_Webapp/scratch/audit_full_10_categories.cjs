const path = require('path');
const fs = require('fs');

const srcData = path.join(__dirname, '..', 'src', 'data');

const { pathToFileURL } = require('url');

async function runAudit() {
  const taxonomy = await import(pathToFileURL(path.join(srcData, 'legalTaxonomy.js')).href);
  const booksDb = await import(pathToFileURL(path.join(srcData, 'legalBooksDatabase.ts')).href);
  const judgments = await import(pathToFileURL(path.join(srcData, 'landmarkJudgmentsData.js')).href);
  const procedures = await import(pathToFileURL(path.join(srcData, 'courtProceduresData.js')).href);
  const drafting = await import(pathToFileURL(path.join(srcData, 'legalDraftingData.js')).href);
  const articlesUpdates = await import(pathToFileURL(path.join(srcData, 'legalArticlesAndUpdatesData.js')).href);
  const dictionary = await import(pathToFileURL(path.join(srcData, 'legalDictionaryData.js')).href);

  console.log('=== PHASE 1 AUDIT: CONTENT INVENTORY ACROSS ALL 10 CATEGORIES ===\n');

  const contentTypes = taxonomy.PRIMARY_CONTENT_TYPES;
  const filterConfigs = taxonomy.CONTENT_TYPE_FILTERS_CONFIG;

  // 1. Explore Law
  console.log('Category 1: [ALL] Explore Law');
  console.log('   - Jurisdiction selection: IN, NP, US, GB, GLOBAL');
  console.log('   - Universal bookshelf aggregation across all models');

  // 2. Bare Acts & Rules
  console.log('\nCategory 2: [BARE_ACTS] Bare Acts, Laws & Rules');
  const inBooks = booksDb.ALL_LEGAL_BOOKS_DATABASE || [];
  const npBooks = booksDb.NEPAL_LEGAL_BOOKS_DATABASE || [];
  const usBooks = booksDb.US_LEGAL_BOOKS_DATABASE || [];
  const gbBooks = booksDb.UK_LEGAL_BOOKS_DATABASE || [];
  const globalBooks = booksDb.GLOBAL_LEGAL_BOOKS_DATABASE || [];
  console.log(`   - India Books: ${inBooks.length}`);
  console.log(`   - Nepal Books: ${npBooks.length}`);
  console.log(`   - US Books: ${usBooks.length}`);
  console.log(`   - UK Books: ${gbBooks.length}`);
  console.log(`   - Global Books: ${globalBooks.length}`);
  let totalSections = 0;
  [...inBooks, ...npBooks, ...usBooks, ...gbBooks, ...globalBooks].forEach(b => {
    (b.parts || []).forEach(p => {
      (p.chapters || []).forEach(c => {
        totalSections += (c.sections || []).length;
      });
    });
  });
  console.log(`   - Total Sections across all jurisdictions: ${totalSections}`);

  // 3. Case Laws
  const jList = judgments.LANDMARK_JUDGMENTS_DATABASE || [];
  console.log(`\nCategory 3: [CASE_LAWS] Case Laws & Judgments: ${jList.length} records`);
  const jFilters = filterConfigs.CASE_LAWS?.filters || [];
  jFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = 0;
    if (f.id === 'ALL') matchCount = jList.length;
    else if (f.id === 'supreme-court') matchCount = jList.filter(j => j.courtId === 'sc' || j.court?.toLowerCase().includes('supreme')).length;
    else if (f.id === 'high-courts') matchCount = jList.filter(j => j.court?.toLowerCase().includes('high')).length;
    else if (f.id === 'constitution-bench') matchCount = jList.filter(j => j.bench?.toLowerCase().includes('constitution') || j.bench?.includes('5') || j.bench?.includes('9')).length;
    else if (f.id === 'recent-rulings') matchCount = jList.filter(j => ['2020', '2021', '2022', '2023', '2024'].some(yr => (j.year || '').includes(yr) || (j.date || '').includes(yr))).length;
    else matchCount = jList.filter(j => kws.some(kw => `${j.title} ${j.ratioDecidendi} ${(j.acts||[]).join(' ')}`.toLowerCase().includes(kw))).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });

  // 4. Articles & Guides
  const aList = articlesUpdates.LEGAL_ARTICLES_DATABASE || [];
  console.log(`\nCategory 4: [ARTICLES] Articles & Guides: ${aList.length} records`);
  const aFilters = filterConfigs.ARTICLES?.filters || [];
  aFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = f.id === 'ALL' ? aList.length : aList.filter(a => kws.some(kw => `${a.id} ${a.title} ${a.category} ${a.summary}`.toLowerCase().includes(kw))).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });

  // 5. Court Procedures
  const pList = procedures.COURT_PROCEDURES_DATABASE || [];
  console.log(`\nCategory 5: [PROCEDURES] Court Procedures: ${pList.length} records`);
  const pFilters = filterConfigs.PROCEDURES?.filters || [];
  pFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = f.id === 'ALL' ? pList.length : pList.filter(p => kws.some(kw => `${p.id} ${p.title} ${p.category} ${p.actReference}`.toLowerCase().includes(kw))).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });

  // 6. Drafting Library
  const dList = drafting.LEGAL_DRAFTING_DATABASE || [];
  console.log(`\nCategory 6: [DRAFTING] Drafting Library: ${dList.length} records`);
  const dFilters = filterConfigs.DRAFTING?.filters || [];
  dFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = f.id === 'ALL' ? dList.length : dList.filter(d => {
      if (d.category?.toLowerCase() === f.label.toLowerCase()) return true;
      if (d.tags && d.tags.includes(f.id)) return true;
      return kws.some(kw => `${d.id} ${d.title} ${d.category} ${d.purposeWhenToUse}`.toLowerCase().includes(kw));
    }).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });

  // 7. Rights & Remedies
  const rList = articlesUpdates.RIGHTS_REMEDIES_DATABASE || [];
  console.log(`\nCategory 7: [RIGHTS_REMEDIES] Rights & Remedies: ${rList.length} records`);
  const rFilters = filterConfigs.RIGHTS_REMEDIES?.filters || [];
  rFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = f.id === 'ALL' ? rList.length : rList.filter(r => kws.some(kw => `${r.id} ${r.title} ${r.category} ${r.remedyType} ${r.summary}`.toLowerCase().includes(kw))).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });

  // 8. Legal Updates
  const uList = articlesUpdates.LEGAL_UPDATES_DATABASE || [];
  console.log(`\nCategory 8: [LEGAL_UPDATES] Legal Updates: ${uList.length} records`);
  const uFilters = filterConfigs.LEGAL_UPDATES?.filters || [];
  uFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = f.id === 'ALL' ? uList.length : uList.filter(u => kws.some(kw => `${u.id} ${u.title} ${u.category} ${u.summary}`.toLowerCase().includes(kw))).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });

  // 9. Exam Prep & MCQs
  const eList = articlesUpdates.EXAM_PREPARATION_DATABASE || [];
  console.log(`\nCategory 9: [EXAM_PREP] Exam Prep & MCQs: ${eList.length} records`);
  const eFilters = filterConfigs.EXAM_PREP?.filters || [];
  eFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = f.id === 'ALL' ? eList.length : eList.filter(e => kws.some(kw => `${e.id} ${e.title} ${e.category} ${e.examTarget} ${e.subject}`.toLowerCase().includes(kw))).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });

  // 10. Legal Dictionary
  const mList = dictionary.LEGAL_DICTIONARY_DATABASE || [];
  console.log(`\nCategory 10: [DICTIONARY] Legal Dictionary: ${mList.length} records`);
  const mFilters = filterConfigs.DICTIONARY?.filters || [];
  mFilters.forEach(f => {
    const kws = (f.matchKeywords || []).map(k => k.toLowerCase());
    let matchCount = f.id === 'ALL' ? mList.length : mList.filter(m => kws.some(kw => `${m.id} ${m.term} ${m.category} ${m.plainMeaning}`.toLowerCase().includes(kw))).length;
    console.log(`   - Filter [${f.id}] "${f.label}": ${matchCount} matches`);
  });
}

runAudit().catch(console.error);
