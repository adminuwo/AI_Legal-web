const fs = require('fs');
const content = fs.readFileSync('src/pages/Workspace/KnowledgeHubWorkspace.jsx', 'utf8');

// Let's use @babel/traverse or check lines
const lines = content.split('\n');

// Check parentheses and braces
let parenStack = [];
let braceStack = [];

for (let lineNum = 1; lineNum <= lines.length; lineNum++) {
  const line = lines[lineNum - 1];
  for (let col = 0; col < line.length; col++) {
    const ch = line[col];
    if (ch === '(') parenStack.push({ line: lineNum, col, text: line.trim() });
    if (ch === ')') parenStack.pop();
    if (ch === '{') braceStack.push({ line: lineNum, col, text: line.trim() });
    if (ch === '}') braceStack.pop();
  }
}

console.log('Unclosed parens:', parenStack.slice(-5));
console.log('Unclosed braces:', braceStack.slice(-5));
