const fs = require('fs');
const babel = require('@babel/parser');
const content = fs.readFileSync('src/pages/Workspace/KnowledgeHubWorkspace.jsx', 'utf8');
const lines = content.split('\n');

// VIEW STATE 11 starts at line 3611
// Let's test lines 3610 to 3916
for (let i = 3611; i <= lines.length; i++) {
  // Let's parse just VIEW STATE 11 by wrapping it in a component
  const snippet = lines.slice(3610, i).join('\n');
  // Check if we can close it
  const wrapped = 'function Test() { return (\n<div>\n' + snippet + '\n</div>\n); }';
  try {
    babel.parse(wrapped, { sourceType: 'module', plugins: ['jsx'] });
    console.log('Successfully parsed when ending at line:', i);
  } catch (e) {
    // If it's Unexpected token at the end, it means it's incomplete
    // If it's something else, let's log it
    if (!e.message.includes('Unexpected token (' + wrapped.split('\n').length)) {
      // console.log('Line', i, 'error:', e.message);
    }
  }
}
