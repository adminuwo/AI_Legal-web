const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'legalBooksDatabase.ts'), 'utf8');

const dbs = ['NEPAL_LEGAL_BOOKS_DATABASE', 'US_LEGAL_BOOKS_DATABASE', 'UK_LEGAL_BOOKS_DATABASE', 'GLOBAL_LEGAL_BOOKS_DATABASE'];

dbs.forEach(db => {
  const start = content.indexOf('export const ' + db);
  const next = content.indexOf('export const ', start + 30);
  const slice = next !== -1 ? content.substring(start, next) : content.substring(start);
  
  // inspect the first section in this db
  const secStart = slice.indexOf('"id":');
  const secEnd = slice.indexOf('}', secStart + 500);
  console.log(`\n=== SAMPLE SECTION IN ${db} ===`);
  console.log(slice.substring(secStart, secEnd + 1).slice(0, 800));
});
