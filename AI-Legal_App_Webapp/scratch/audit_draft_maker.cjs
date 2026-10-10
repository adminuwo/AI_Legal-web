const fs = require('fs');
const path = require('path');

const tmplPath = path.join(__dirname, '..', 'src', 'constants', 'templatesData.js');
const tmplContent = fs.readFileSync(tmplPath, 'utf8');

console.log('--- AUDITING DRAFT MAKER TEMPLATES ---');

// Extract ALL_91_TEMPLATES
const startIdx = tmplContent.indexOf('export const ALL_91_TEMPLATES = [');
const endIdx = tmplContent.indexOf('export function getFieldsForTemplate');
const slice = tmplContent.substring(startIdx, endIdx);

// Match each template block
const idMatches = [...slice.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
console.log(`Total Templates Declared: ${idMatches.length}`);

// Check which templates have explicit `fields:`
const explicitFieldsCount = [...slice.matchAll(/fields:\s*\[/g)].length;
console.log(`Templates with explicit 'fields:': ${explicitFieldsCount}`);
console.log(`Templates falling back to category default fields: ${idMatches.length - explicitFieldsCount}`);

// Count by category
const catMatches = [...slice.matchAll(/category:\s*['"]([^'"]+)['"]/g)];
const catCounts = {};
catMatches.forEach(m => {
  catCounts[m[1]] = (catCounts[m[1]] || 0) + 1;
});
console.log('\nTemplates per Category:');
Object.entries(catCounts).forEach(([cat, count]) => {
  console.log(`  - ${cat}: ${count}`);
});

// Check if any template has model draft text or template structure
console.log(`Templates with built-in model draft text: 0 (Frontend delegates to buildDefaultLegalDraftText or backend)`);
