const fs = require('fs');
const path = require('path');

function countMatches(str, regex) {
  return (str.match(regex) || []).length;
}

function auditData() {
  console.log('===============================================================');
  console.log('          AI LEGAL™ KNOWLEDGE HUB JURISDICTION AUDIT           ');
  console.log('===============================================================\n');

  // 1. Legal Books Database
  try {
    const booksContent = fs.readFileSync(path.join(__dirname, '../src/data/legalBooksDatabase.ts'), 'utf-8');
    console.log('--- 1. BARE ACTS & RULES ---');
    console.log('Total file size:', (booksContent.length / 1024).toFixed(1), 'KB | Total lines:', booksContent.split('\n').length);
    
    const dbRegex = /export const ([A-Z_]+_LEGAL_BOOKS_DATABASE): BookNode\[\] = \[([\s\S]*?)(?=\nexport const |$)/g;
    let match;
    while ((match = dbRegex.exec(booksContent)) !== null) {
      const name = match[1];
      const chunk = match[2];
      // count book nodes (where level is book or has title)
      const titles = chunk.match(/title:\s*['"]([^'"]+)['"]/g) || [];
      console.log(`  * ${name}: ${titles.length} total nodes/titles`);
    }
  } catch (err) {
    console.error('Books error:', err.message);
  }

  // 2. Case Laws / Landmark Judgments
  try {
    const file = fs.readFileSync(path.join(__dirname, '../src/data/landmarkJudgmentsData.js'), 'utf-8');
    const ids = file.match(/id:\s*['"]([^'"]+)['"]/g) || [];
    const courts = file.match(/court:\s*['"]([^'"]+)['"]/g) || [];
    const jurs = file.match(/jurisdiction:\s*['"]([^'"]+)['"]/g) || [];
    console.log('\n--- 2. CASE LAWS (LANDMARK JUDGMENTS) ---');
    console.log(`  * Total judgments: ${ids.length}`);
    console.log(`  * Explicit jurisdiction fields: ${jurs.length}`);
    const courtList = [...new Set(courts.map(c => c.replace(/court:\s*['"]|['"]/g, '')))];
    console.log(`  * Courts (${courtList.length}):`);
    courtList.forEach(c => console.log(`      - ${c}`));
  } catch (err) {
    console.error('Judgments error:', err.message);
  }

  // 3. Articles & Guides
  try {
    const dir = path.join(__dirname, '../src/data/articles');
    console.log('\n--- 3. ARTICLES & GUIDES ---');
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
      let total = 0;
      files.forEach(f => {
        const c = fs.readFileSync(path.join(dir, f), 'utf-8');
        // Match id: or "id":
        const ids = c.match(/["']?id["']?\s*:\s*['"][^'"]+['"]/g) || [];
        const jurs = c.match(/["']?jurisdiction["']?\s*:\s*\{[^}]*code["']?\s*:\s*['"]([^'"]+)['"]/g) || [];
        const codes = jurs.map(j => {
          const m = j.match(/code["']?\s*:\s*['"]([^'"]+)['"]/);
          return m ? m[1] : '?';
        });
        total += ids.length;
        console.log(`  * ${f}: ${ids.length} articles (Jurisdictions: ${[...new Set(codes)].join(', ') || 'None explicit'})`);
      });
      console.log(`  * Total Articles across all modules: ${total}`);
    }
  } catch (err) {
    console.error('Articles error:', err.message);
  }

  // 4. Court Procedures
  try {
    const dir = path.join(__dirname, '../src/data/procedures');
    console.log('\n--- 4. COURT PROCEDURES ---');
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
      let total = 0;
      files.forEach(f => {
        const c = fs.readFileSync(path.join(dir, f), 'utf-8');
        const ids = c.match(/["']?id["']?\s*:\s*['"][^'"]+['"]/g) || [];
        total += ids.length;
        console.log(`  * ${f}: ${ids.length} procedures`);
      });
      console.log(`  * Total Court Procedures: ${total}`);
    }
  } catch (err) {
    console.error('Procedures error:', err.message);
  }

  // 5. Legal Drafting Library
  try {
    const file = fs.readFileSync(path.join(__dirname, '../src/data/legalDraftingData.js'), 'utf-8');
    const ids = file.match(/id:\s*['"]([^'"]+)['"]/g) || [];
    const cats = file.match(/category:\s*['"]([^'"]+)['"]/g) || [];
    console.log('\n--- 5. DRAFTING LIBRARY ---');
    console.log(`  * Total templates: ${ids.length}`);
    const uniqueCats = [...new Set(cats.map(c => c.replace(/category:\s*['"]|['"]/g, '')))];
    console.log(`  * Categories (${uniqueCats.length}):`);
    uniqueCats.forEach(c => console.log(`      - ${c}`));
  } catch (err) {
    console.error('Drafting error:', err.message);
  }

  // 6. Rights & Remedies
  try {
    const dir = path.join(__dirname, '../src/data/remedies');
    console.log('\n--- 6. RIGHTS & REMEDIES ---');
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
      let total = 0;
      files.forEach(f => {
        const c = fs.readFileSync(path.join(dir, f), 'utf-8');
        const ids = c.match(/["']?id["']?\s*:\s*['"][^'"]+['"]/g) || [];
        total += ids.length;
        console.log(`  * ${f}: ${ids.length} remedies`);
      });
      console.log(`  * Total Rights & Remedies: ${total}`);
    }
  } catch (err) {
    console.error('Remedies error:', err.message);
  }

  // 7. Legal Updates
  try {
    const dir = path.join(__dirname, '../src/data/updates');
    console.log('\n--- 7. LEGAL UPDATES ---');
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
      let total = 0;
      files.forEach(f => {
        const c = fs.readFileSync(path.join(dir, f), 'utf-8');
        const ids = c.match(/["']?id["']?\s*:\s*['"][^'"]+['"]/g) || [];
        total += ids.length;
        console.log(`  * ${f}: ${ids.length} updates`);
      });
      console.log(`  * Total Legal Updates: ${total}`);
    }
  } catch (err) {
    console.error('Updates error:', err.message);
  }

  // 8. Legal Dictionary
  try {
    const dir = path.join(__dirname, '../src/data/dictionary');
    console.log('\n--- 8. LEGAL DICTIONARY ---');
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
      let total = 0;
      files.forEach(f => {
        const c = fs.readFileSync(path.join(dir, f), 'utf-8');
        const ids = c.match(/["']?id["']?\s*:\s*['"][^'"]+['"]/g) || [];
        total += ids.length;
        console.log(`  * ${f}: ${ids.length} terms`);
      });
      console.log(`  * Total Dictionary Terms: ${total}`);
    }
  } catch (err) {
    console.error('Dictionary error:', err.message);
  }

  // 9. Taxonomy check
  try {
    const taxContent = fs.readFileSync(path.join(__dirname, '../src/data/legalTaxonomy.js'), 'utf-8');
    console.log('\n--- 9. TAXONOMY (legalTaxonomy.js) ---');
    const subjects = taxContent.match(/id:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"]/g) || [];
    console.log(`  * Total Taxonomy items detected: ${subjects.length}`);
  } catch (err) {
    console.error('Taxonomy error:', err.message);
  }
}

auditData();
