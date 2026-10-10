const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'legalBooksDatabase.ts'), 'utf8');

const usStart = content.indexOf('export const US_LEGAL_BOOKS_DATABASE');
const usSlice = content.substring(usStart, usStart + 5000);
const secIdx = usSlice.indexOf('"id": "the-constitution-of-the-united-states-preamble"');
const secEnd = usSlice.indexOf('}', secIdx + 100);
console.log(usSlice.substring(secIdx, secEnd + 500));
