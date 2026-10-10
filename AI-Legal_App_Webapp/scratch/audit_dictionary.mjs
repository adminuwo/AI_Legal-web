// AI LEGAL™ Legal Dictionary Quality Assurance Audit Script
import { ALL_DICTIONARY_TERMS, DICTIONARY_DOMAINS } from '../src/data/dictionary/index.js';

console.log("===============================================================================");
console.log("       AI LEGAL™ — LEGAL DICTIONARY & JURISPRUDENCE AUDIT REPORT              ");
console.log("===============================================================================");

console.log(`Total Terms in Knowledge Engine: ${ALL_DICTIONARY_TERMS.length}`);
console.log(`Configured Taxonomy Reference Domains: ${DICTIONARY_DOMAINS.length - 1}`);

// Check unique IDs
const idSet = new Set();
const duplicateIds = [];
ALL_DICTIONARY_TERMS.forEach(t => {
  if (idSet.has(t.id)) duplicateIds.push(t.id);
  idSet.add(t.id);
});

if (duplicateIds.length > 0) {
  console.error("FAIL: Duplicate IDs found:", duplicateIds);
} else {
  console.log("PASS: 100% Unique Term IDs validated.");
}

// Required fields checklist
const REQUIRED_FIELDS = [
  'id',
  'term',
  'category',
  'subcategory',
  'jurisdiction',
  'language',
  'difficultyLevel',
  'tags',
  'conciseDefinition',
  'detailedLegalMeaning',
  'hindiExplanation',
  'legalOriginAndHistory',
  'statutoryBasis',
  'essentialElements',
  'practicalApplicationAndExamples',
  'landmarkJudgments',
  'exceptionsAndLimitations',
  'practicalLitigationNotes',
  'relatedTerms',
  'faqsAndExamNotes',
  'sourceProvenance'
];

let fieldErrors = 0;
ALL_DICTIONARY_TERMS.forEach(t => {
  REQUIRED_FIELDS.forEach(f => {
    if (!t[f] || (Array.isArray(t[f]) && t[f].length === 0)) {
      console.warn(`[WARN] Term ${t.id} missing or empty field: ${f}`);
      fieldErrors++;
    }
  });
});

if (fieldErrors === 0) {
  console.log("PASS: 100% of terms satisfy the mandatory 14-section schema!");
} else {
  console.warn(`Total schema field warnings: ${fieldErrors}`);
}

// Domain breakdown
console.log("\n--- DOMAIN DISTRIBUTION BREAKDOWN ---");
const domainCounts = {};
ALL_DICTIONARY_TERMS.forEach(t => {
  domainCounts[t.category] = (domainCounts[t.category] || 0) + 1;
});

Object.entries(domainCounts).forEach(([cat, count]) => {
  console.log(`• ${cat.padEnd(52)} : ${count} entries`);
});

// Sample preview of first term
console.log("\n--- VERIFICATION OF SAMPLE MASTER ENTRY ---");
const sample = ALL_DICTIONARY_TERMS[0];
console.log(`Term: ${sample.term} (${sample.category} / ${sample.subcategory})`);
console.log(`Pronunciation: ${sample.pronunciation}`);
console.log(`Concise: ${sample.conciseDefinition}`);
console.log(`Statutory Basis count: ${sample.statutoryBasis.length}`);
console.log(`Essential Elements count: ${sample.essentialElements.length}`);
console.log(`Landmark Judgments count: ${sample.landmarkJudgments.length}`);
console.log(`Hindi Explanation: ${sample.hindiExplanation.slice(0, 80)}...`);
console.log(`Legacy Precedent field: ${sample.landmarkPrecedent.slice(0, 80)}...`);
console.log("\nAudit successfully completed.");
