import { jurisdictionContentService } from '../services/jurisdictionContentService.js';

console.log('--- Testing Backend Jurisdiction Content Service ---');

// Test 1: Nepal Articles
const npArticles = jurisdictionContentService.getArticles({ countryCode: 'NP' });
console.log(`Nepal articles count: ${npArticles.count}`);
if (npArticles.count < 6) throw new Error('Expected at least 6 Nepal articles');
const indianLeak = npArticles.articles.some(a => a.jurisdiction.code === 'IN');
if (indianLeak) throw new Error('Indian article leaked into Nepal query!');
console.log('✅ Nepal articles retrieval clean and isolated.');

// Test 2: Indian Articles
const inArticles = jurisdictionContentService.getArticles({ countryCode: 'IN' });
console.log(`India articles count: ${inArticles.count}`);
if (inArticles.count < 4) throw new Error('Expected at least 4 Indian articles');
const nepalLeak = inArticles.articles.some(a => a.jurisdiction.code === 'NP');
if (nepalLeak) throw new Error('Nepal article leaked into India query!');
console.log('✅ India articles retrieval clean and isolated.');

// Test 3: Attempt to retrieve Indian article under Nepal jurisdiction
const blockedAttempt = jurisdictionContentService.getArticleById('art-bns-general-exceptions', 'NP');
console.log('Attempting to fetch Indian BNS article under NP context:', blockedAttempt.error);
if (blockedAttempt.success !== false || blockedAttempt.error !== 'JURISDICTION_MISMATCH') {
  throw new Error('Indian article was NOT blocked under Nepal jurisdiction!');
}
console.log('✅ Incompatible Indian domestic article successfully blocked under Nepal jurisdiction (HTTP 403 / JURISDICTION_MISMATCH).');

// Test 4: Retrieve Nepal article under Nepal jurisdiction
const validNepal = jurisdictionContentService.getArticleById('art-np-consti-writ-jurisdiction', 'NP');
if (!validNepal.success) throw new Error('Failed to retrieve valid Nepal article');
console.log('✅ Valid Nepal article retrieved under Nepal jurisdiction.');

// Test 5: Attempt to retrieve Nepal article under India jurisdiction
const blockedAttempt2 = jurisdictionContentService.getArticleById('art-np-consti-writ-jurisdiction', 'IN');
if (blockedAttempt2.success !== false || blockedAttempt2.error !== 'JURISDICTION_MISMATCH') {
  throw new Error('Nepal article was NOT blocked under India jurisdiction!');
}
console.log('✅ Incompatible Nepal domestic article successfully blocked under India jurisdiction.');

console.log('\n🎉 ALL 5 BACKEND JURISDICTION CONTENT RETRIEVAL TESTS PASSED!\n');
