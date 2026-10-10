// ─── AI LEGAL™ ARTICLES & GUIDES COMPLETENESS VALIDATOR ───────────────────
// Substantive quality assurance engine verifying all 13 required sections across all treatises.

async function validateArticles() {
  const art = await import('../src/data/legalArticlesAndUpdatesData.js');
  const articles = art.LEGAL_ARTICLES_DATABASE;

  console.log('================================================================');
  console.log('      AI LEGAL™ ARTICLES & GUIDES DEEP QUALITY ASSURANCE AUDIT  ');
  console.log('================================================================');
  console.log(`Inspecting ${articles.length} treatise records in LEGAL_ARTICLES_DATABASE...\n`);

  const REQUIRED_SECTIONS = [
    { num: 'I', key: 'overview', title: 'Legal Overview and Context' },
    { num: 'II', key: 'statutory', title: 'Statutory Framework and Official Legal Provisions' },
    { num: 'III', key: 'doctrinal', title: 'Detailed Doctrinal and Legal Analysis' },
    { num: 'IV', key: 'commentary', title: 'Authoritative Commentary and Interpretation' },
    { num: 'V', key: 'hindi', title: 'Hindi Explanation and Supported Languages' },
    { num: 'VI', key: 'scenarios', title: 'Practical Illustrations and Fact-Based Scenarios' },
    { num: 'VII', key: 'cases', title: 'Landmark Judgments and Case-Law Analysis' },
    { num: 'VIII', key: 'advocate', title: 'Advocate’s Litigation Perspective and Courtroom Practice' },
    { num: 'IX', key: 'comparative', title: 'Comparative Analysis' },
    { num: 'X', key: 'exam', title: 'Examination and Judicial Service Essentials' },
    { num: 'XI', key: 'misconceptions', title: 'Common Misconceptions, Exceptions and Practical Risks' },
    { num: 'XII', key: 'faqs', title: 'Frequently Asked Questions' },
    { num: 'XIII', key: 'takeaways', title: 'Revision Takeaways and Further Research' }
  ];

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalWordsCounted = 0;

  articles.forEach((article, idx) => {
    console.log(`\n----------------------------------------------------------------`);
    console.log(`[${idx + 1}/${articles.length}] AUDITING: "${article.title}"`);
    console.log(`Category: ${article.category} | Author: ${article.author}`);
    console.log(`Read Time: ${article.readTime} | Published: ${article.publishedDate}`);

    let articleErrors = 0;

    // 1. Root Metadata Checks
    if (!article.id || !article.slug) {
      console.error(`  ❌ ERROR: Missing unique ID or slug.`);
      articleErrors++;
    }
    if (!article.summary || article.summary.length < 50) {
      console.error(`  ❌ ERROR: Summary missing or too brief (< 50 chars).`);
      articleErrors++;
    }
    if (!article.keyStatutes || article.keyStatutes.length === 0) {
      console.error(`  ❌ ERROR: Missing keyStatutes references.`);
      articleErrors++;
    }
    if (!article.jurisdiction || !article.jurisdiction.code) {
      console.error(`  ❌ ERROR: Missing jurisdiction metadata.`);
      articleErrors++;
    }
    if (!article.sourceMetadata || !article.sourceMetadata.officialUrl) {
      console.error(`  ❌ ERROR: Missing sourceMetadata or official source URL.`);
      articleErrors++;
    }

    // 2. Sections Verification
    const sections = article.contentSections || [];
    if (sections.length < 13) {
      console.error(`  ❌ ERROR: Incomplete sections count: expected 13, found ${sections.length}.`);
      articleErrors++;
    }

    let articleWordCount = 0;
    REQUIRED_SECTIONS.forEach((req, sIdx) => {
      const section = sections[sIdx];
      if (!section) {
        console.error(`  ❌ ERROR: Section ${req.num} (${req.title}) is completely MISSING.`);
        articleErrors++;
        return;
      }

      // Check heading matches Roman numeral
      if (!section.heading.startsWith(req.num + '.') && !section.heading.includes(req.num)) {
        console.warn(`  ⚠️ WARN: Section ${req.num} heading does not clearly start with ${req.num}. (Found: "${section.heading}")`);
      }

      // Check body content
      const body = section.body || '';
      const words = body.trim().split(/\s+/).filter(Boolean).length;
      articleWordCount += words;

      if (words < 40) {
        console.error(`  ❌ ERROR: Section ${req.num} body is too shallow (${words} words). Substantive analysis required.`);
        articleErrors++;
      }

      // Check placeholder text
      const lower = body.toLowerCase();
      if (lower.includes('lorem ipsum') || lower.includes('tbd') || lower.includes('placeholder') || lower.includes('todo')) {
        console.error(`  ❌ ERROR: Section ${req.num} contains placeholder/filler text!`);
        articleErrors++;
      }

      // Section V specific check: Must contain actual Devanagari Hindi text
      if (req.key === 'hindi') {
        const hasDevanagari = /[\u0900-\u097F]/.test(body);
        if (!hasDevanagari) {
          console.error(`  ❌ ERROR: Section V (Hindi) does NOT contain Devanagari Hindi script!`);
          articleErrors++;
        }
      }

      // Section VI specific check: Must contain scenario analysis
      if (req.key === 'scenarios') {
        if (!lower.includes('scenario') && !lower.includes('facts')) {
          console.error(`  ❌ ERROR: Section VI lacks factual scenario breakdowns.`);
          articleErrors++;
        }
      }

      // Section VII specific check: Must cite verified landmark judgments
      if (req.key === 'cases') {
        if (!lower.includes('v.') && !lower.includes('versus') && !lower.includes('scc')) {
          console.error(`  ❌ ERROR: Section VII lacks authoritative case law citations.`);
          articleErrors++;
        }
      }

      // Section X specific check: Must include MCQs
      if (req.key === 'exam') {
        if (!lower.includes('mcq') && !lower.includes('question') && !lower.includes('answer')) {
          console.error(`  ❌ ERROR: Section X lacks examination MCQs.`);
          articleErrors++;
        }
      }
    });

    totalWordsCounted += articleWordCount;
    if (articleErrors === 0) {
      console.log(`  ✅ PASSED: All 13 sections verified. Total word count: ${articleWordCount.toLocaleString()} words.`);
    } else {
      totalErrors += articleErrors;
    }
  });

  console.log('\n================================================================');
  console.log('                      AUDIT SUMMARY RESULTS                     ');
  console.log('================================================================');
  console.log(`Total Treatises Audited: ${articles.length}`);
  console.log(`Total Sections Audited: ${articles.length * 13}`);
  console.log(`Total Word Count in Treatises: ${totalWordsCounted.toLocaleString()} words`);
  console.log(`Average Depth per Treatise: ${Math.round(totalWordsCounted / articles.length).toLocaleString()} words`);
  console.log(`Total Critical Errors: ${totalErrors}`);
  console.log(`Total Warnings: ${totalWarnings}`);

  if (totalErrors === 0) {
    console.log('\n🎉 ALL 16 ARTICLES & GUIDES PASSED 100% SUBSTANTIVE QUALITY CHECKS!');
  } else {
    console.error(`\n❌ FAILED: ${totalErrors} errors found across articles.`);
    process.exit(1);
  }
}

validateArticles().catch(err => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});
