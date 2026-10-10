const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'constants', 'templatesData.js'), 'utf8');

const tBlocks = content.split(/\{\s*id:\s*'/);
tBlocks.shift(); // remove header

tBlocks.forEach((block, idx) => {
  const idMatch = block.match(/^([^']+)'/);
  if (!idMatch) return;
  const id = idMatch[1];
  const hasFields = block.includes('fields: [');
  if (hasFields) {
    console.log(`Has fields: [${id}]`);
  }
});
