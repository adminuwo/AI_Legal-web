const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/legalBooksDatabase.ts'), 'utf-8');

const sections = [
  { name: 'ALL_LEGAL_BOOKS_DATABASE (India)', start: 'export const ALL_LEGAL_BOOKS_DATABASE' },
  { name: 'NEPAL_LEGAL_BOOKS_DATABASE (Nepal)', start: 'export const NEPAL_LEGAL_BOOKS_DATABASE' },
  { name: 'US_LEGAL_BOOKS_DATABASE (US)', start: 'export const US_LEGAL_BOOKS_DATABASE' },
  { name: 'UK_LEGAL_BOOKS_DATABASE (UK)', start: 'export const UK_LEGAL_BOOKS_DATABASE' },
  { name: 'GLOBAL_LEGAL_BOOKS_DATABASE (International)', start: 'export const GLOBAL_LEGAL_BOOKS_DATABASE' }
];

sections.forEach((sec, idx) => {
  const nextSec = sections[idx + 1];
  const startIdx = content.indexOf(sec.start);
  const endIdx = nextSec ? content.indexOf(nextSec.start) : content.length;
  if (startIdx === -1) return;
  const chunk = content.substring(startIdx, endIdx);
  // Match top level books: { id: "..." or "id": "...", title: "..."
  const books = [];
  const bookRegex = /\{\s*["']?id["']?\s*:\s*["']([^"']+)["'],\s*["']?title["']?\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = bookRegex.exec(chunk)) !== null) {
    books.push({ id: m[1], title: m[2] });
  }
  console.log(`\n=== ${sec.name} === (${books.length} books)`);
  books.forEach(b => console.log(`  - [${b.id}] ${b.title}`));
});
