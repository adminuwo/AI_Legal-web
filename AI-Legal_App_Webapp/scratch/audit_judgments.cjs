const fs = require('fs');
const path = require('path');
const srcData = path.join(__dirname, '..', 'src', 'data');

const judgments = require(path.join(srcData, 'landmarkJudgmentsData.js')).LANDMARK_JUDGMENTS_DATABASE;
console.log(`Auditing ${judgments.length} Landmark Judgments with actual fields:`);

judgments.forEach((j, idx) => {
  const missing = [];
  if (!j.title) missing.push('title');
  if (!j.citation) missing.push('citation');
  if (!j.bench) missing.push('bench');
  if (!j.ratioDecidendi) missing.push('ratioDecidendi');
  if (!j.caseContext?.facts) missing.push('caseContext.facts');
  if (!j.reasoning) missing.push('reasoning');
  if (!j.finalDecision) missing.push('finalDecision');
  if (missing.length > 0) {
    console.log(`  [${idx + 1}] ${j.id || j.title}: Missing ${missing.join(', ')}`);
  } else {
    console.log(`  [${idx + 1}] ${j.id} (${j.year}): COMPLETE (Ratio: ${j.ratioDecidendi.length} chars, Reasoning: ${j.reasoning.length} chars)`);
  }
});
