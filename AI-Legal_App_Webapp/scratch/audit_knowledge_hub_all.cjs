const fs = require('fs');
const path = require('path');

const srcData = path.join(__dirname, '..', 'src', 'data');

console.log('--- COMPREHENSIVE KNOWLEDGE HUB DATA AUDIT ---');

// 1. Landmark Judgments
const judgments = require(path.join(srcData, 'landmarkJudgmentsData.js'));
const jKeys = Object.keys(judgments.LANDMARK_JUDGMENTS_DATABASE || judgments);
const jList = judgments.LANDMARK_JUDGMENTS_DATABASE || judgments;
console.log(`\nLandmark Judgments: ${jList.length || jKeys.length}`);
if (Array.isArray(jList)) {
  const incompleteJ = jList.filter(j => !j.ratioDecidendi || !j.facts || !j.judgmentDate);
  console.log(`  - Verified / Detailed judgments: ${jList.length - incompleteJ.length}`);
  console.log(`  - Incomplete judgments: ${incompleteJ.length}`);
}

// 2. Court Procedures
const procedures = require(path.join(srcData, 'courtProceduresData.js'));
const pList = procedures.COURT_PROCEDURES_DATABASE || procedures;
console.log(`\nCourt Procedures: ${pList.length || Object.keys(pList).length}`);
if (Array.isArray(pList)) {
  const incompleteP = pList.filter(p => !p.steps || !p.statutoryBasis);
  console.log(`  - Verified / Detailed procedures: ${pList.length - incompleteP.length}`);
  console.log(`  - Incomplete procedures: ${incompleteP.length}`);
}

// 3. Legal Drafting
const drafting = require(path.join(srcData, 'legalDraftingData.js'));
const dList = drafting.LEGAL_DRAFTING_DATABASE || drafting;
console.log(`\nLegal Drafting Dossiers: ${dList.length || Object.keys(dList).length}`);

// 4. Legal Articles & Updates
const articles = require(path.join(srcData, 'legalArticlesAndUpdatesData.js'));
console.log(`\nArticles & Updates:`);
console.log(`  - Legal Articles: ${(articles.LEGAL_ARTICLES_DATABASE || []).length}`);
console.log(`  - Rights & Remedies: ${(articles.RIGHTS_REMEDIES_DATABASE || []).length}`);
console.log(`  - Legal Updates: ${(articles.LEGAL_UPDATES_DATABASE || []).length}`);
console.log(`  - Exam Preparation: ${(articles.EXAM_PREPARATION_DATABASE || []).length}`);

// 5. Legal Dictionary
const dict = require(path.join(srcData, 'legalDictionaryData.js'));
const mList = dict.LEGAL_DICTIONARY_DATABASE || dict;
console.log(`\nLegal Dictionary / Maxims: ${mList.length || Object.keys(mList).length}`);
