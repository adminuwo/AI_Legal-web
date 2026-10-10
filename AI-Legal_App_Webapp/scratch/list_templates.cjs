const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'constants', 'templatesData.js'), 'utf8');

const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?category:\s*['"]([^'"]+)['"]/g;
const matches = [...content.matchAll(regex)];

console.log(`Found ${matches.length} template blocks.`);
const templates = [];
matches.forEach((m, i) => {
  templates.push({ index: i + 1, id: m[1], title: m[2], category: m[3] });
  console.log(`${i + 1}. [${m[1]}] "${m[2]}" (${m[3]})`);
});

fs.writeFileSync(path.join(__dirname, 'templates_inventory.json'), JSON.stringify(templates, null, 2));
