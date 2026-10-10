const fs = require('fs');
const babel = require('@babel/parser');
const content = fs.readFileSync('src/pages/Workspace/KnowledgeHubWorkspace.jsx', 'utf8');

// Let's tokenize and print open brackets/parens/tags
const tokenizer = babel.parse(content, {
  sourceType: 'module',
  plugins: ['jsx'],
  errorRecovery: true
});

// If errorRecovery: true threw, let's catch state
