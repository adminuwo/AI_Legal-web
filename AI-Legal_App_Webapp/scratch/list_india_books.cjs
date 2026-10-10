const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'legalBooksDatabase.ts'), 'utf8');

const indiaStart = content.indexOf('export const ALL_LEGAL_BOOKS_DATABASE: BookNode[] = [');
const nepalStart = content.indexOf('export const NEPAL_LEGAL_BOOKS_DATABASE: BookNode[] = [');
const indiaSlice = content.substring(indiaStart, nepalStart);

const bookMatches = [...indiaSlice.matchAll(/id:\s*'([a-z0-9_-]+)',\s*title:\s*'([^']+)'/g)];
console.log(`India Books Count: ${bookMatches.length}`);
bookMatches.forEach(b => console.log(`  - [${b[1]}] ${b[2]}`));
