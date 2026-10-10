const fs = require('fs');
const babel = require('@babel/parser');
const content = fs.readFileSync('src/pages/Workspace/KnowledgeHubWorkspace.jsx', 'utf8');
const lines = content.split('\n');

const stateRegex = /VIEW STATE (\d+)/;
const viewStateIndices = [];

lines.forEach((line, idx) => {
  const match = line.match(stateRegex);
  if (match) {
    viewStateIndices.push({ num: parseInt(match[1]), line: idx + 1 });
  }
});

viewStateIndices.push({ num: 'MODAL1', line: lines.findIndex(l => l.includes('MARGIN STICKY NOTE MODAL')) + 1 });
viewStateIndices.push({ num: 'MODAL2', line: lines.findIndex(l => l.includes('ALL 38+ SUBJECTS TAXONOMY MODAL')) + 1 });
viewStateIndices.push({ num: 'END', line: lines.length });

console.log('Indices:', viewStateIndices);

for (let i = 0; i < viewStateIndices.length - 1; i++) {
  const start = viewStateIndices[i].line - 1;
  const end = viewStateIndices[i+1].line - 1;
  const chunk = lines.slice(start, end).join('\n');
  const testCode = 'function Test() { return (\n<>\n' + chunk + '\n</>\n); }';
  try {
    babel.parse(testCode, { sourceType: 'module', plugins: ['jsx'] });
    console.log(`State ${viewStateIndices[i].num} (lines ${start+1}-${end}): OK`);
  } catch (e) {
    console.log(`State ${viewStateIndices[i].num} (lines ${start+1}-${end}): ERROR:`, e.message);
  }
}
