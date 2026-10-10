const fs = require('fs');
const babel = require('@babel/parser');
const content = fs.readFileSync('src/pages/Workspace/KnowledgeHubWorkspace.jsx', 'utf8');
const lines = content.split('\n');

// Test each top-level block inside return ( ... )
// Line 832 is return ( <div ...>
// Let's find each main section and parse it independently as JSX!

const sections = [
  'VIEW STATE 1: THE DISCOVERY HOMEPAGE',
  'VIEW STATE 2: INTERACTIVE DYNAMIC TABLE OF CONTENTS',
  'VIEW STATE 3: FULL SCREEN VERBATIM STATUTE READER',
  'VIEW STATE 4: LANDMARK CASE LAW ANALYSIS VIEW',
  'VIEW STATE 5: STEP-BY-STEP COURT PROCEDURES & LITIGATION GUIDE',
  'VIEW STATE 6: ADVOCATE DRAFTING SUITE & PLEADING WORKSPACE',
  'VIEW STATE 7: LEGAL DICTIONARY & JURISPRUDENTIAL MAXIMS VIEW',
  'VIEW STATE 8: ARTICLES & PRACTICE GUIDES DEEP ENGINE VIEW',
  'VIEW STATE 9: DEDICATED RIGHTS & REMEDIES ACTION CENTRE',
  'VIEW STATE 10: DEDICATED LEGAL UPDATE & GAZETTE NOTIFICATION',
  'VIEW STATE 11: DEDICATED JUDICIARY & BAR EXAM PREPARATION MODULE',
  'MARGIN STICKY NOTE MODAL',
  'ALL 38+ SUBJECTS TAXONOMY MODAL'
];

sections.forEach(s => {
  const lineIdx = lines.findIndex(l => l.includes(s));
  console.log(s, 'found at line:', lineIdx + 1);
});
