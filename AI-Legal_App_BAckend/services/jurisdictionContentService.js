/**
 * JURISDICTION-AWARE LEGAL CONTENT SERVICE & RETRIEVAL ENGINE
 * 
 * Enforces strict jurisdiction isolation for Knowledge Hub modules:
 * - Bare Acts & Rules
 * - Landmark Judgments
 * - Articles & Guides
 * - Court Procedures
 * - Drafting Library
 * - Rights & Remedies
 * - Legal Updates
 * - Legal Dictionary
 * 
 * GUARANTEE: Never returns Indian domestic law for Nepal queries or vice versa.
 */

export const BACKEND_NEPAL_ARTICLES = [
  {
    id: 'art-np-consti-writ-jurisdiction',
    title: 'Extraordinary Writ Jurisdiction under Articles 133 & 144 of the Constitution of Nepal (२०७२)',
    category: 'Constitutional Law of Nepal',
    readTime: '22 min',
    publishedDate: '2026-03-15',
    author: 'Supreme Court Bar Association of Nepal & AI LEGAL™ Editorial',
    jurisdiction: { code: 'NP', name: 'Nepal (नेपाल सरकार)' },
    summary: 'A definitive constitutional treatise on the extraordinary judicial review and prerogative writ powers of the Supreme Court and High Courts under Articles 133 and 144 of the Constitution of Nepal, 2072.',
    keyStatutes: ['Constitution of Nepal 2072 (Arts 133, 144, 46)', 'Administration of Justice Act 2073', 'Supreme Court Rules 2074'],
    tags: ['nepal', 'constitution-2072', 'writs', 'habeas-corpus', 'mandamus', 'certiorari', 'judicial-review']
  },
  {
    id: 'art-np-muluki-criminal-code',
    title: 'General Principles of Criminal Liability and Major Offences under the Muluki Criminal Code, 2074',
    category: 'Criminal Law & Muluki Code',
    readTime: '24 min',
    publishedDate: '2026-03-10',
    author: 'Criminal Law Reforms Committee & AI LEGAL™ Editorial',
    jurisdiction: { code: 'NP', name: 'Nepal (नेपाल सरकार)' },
    summary: 'Exhaustive doctrinal analysis of criminal liability, mens rea, statutory defences, and offences against life and property under the Muluki Criminal Code 2074 (मुलुकी अपराध संहिता, २०७४).',
    keyStatutes: ['Muluki Criminal Code 2074 (Act No. 27 of 2074)', 'Evidence Act 2031'],
    tags: ['nepal', 'muluki-code', 'criminal-law', 'homicide', 'fraud', 'penal-code']
  },
  {
    id: 'art-np-muluki-bail-jurisprudence',
    title: 'Bail Jurisprudence under Muluki Criminal Procedure Code 2074: Sections 67, 68 & 71 Analysis',
    category: 'Criminal Procedure & Bail',
    readTime: '21 min',
    publishedDate: '2026-03-05',
    author: 'Nepalese Appellate Bar Panel & AI LEGAL™ Editorial',
    jurisdiction: { code: 'NP', name: 'Nepal (नेपाल सरकार)' },
    summary: 'A masterclass criminal procedure treatise examining the statutory thresholds for pre-trial custody and regular bail under Sections 67, 68, and 71 of the Muluki Criminal Procedure Code 2074.',
    keyStatutes: ['Muluki Criminal Procedure Code 2074', 'Constitution of Nepal 2072 (Art 20)'],
    tags: ['nepal', 'bail', 'criminal-procedure', 'section-67', 'section-68', 'thunchek']
  },
  {
    id: 'art-np-muluki-civil-contracts',
    title: 'Contractual Enforceability, Breach, and Remedies under Part 5 of the Muluki Civil Code, 2074',
    category: 'Civil & Commercial Law',
    readTime: '20 min',
    publishedDate: '2026-02-28',
    author: 'Commercial Law Directorate & AI LEGAL™ Editorial',
    jurisdiction: { code: 'NP', name: 'Nepal (नेपाल सरकार)' },
    summary: 'A comprehensive civil law commentary on contract formation, void agreements, frustration, and damages under the Muluki Civil Code 2074 (मुलुकी देवानी संहिता, २०७४).',
    keyStatutes: ['Muluki Civil Code 2074 (Part 5)', 'Muluki Civil Procedure Code 2074'],
    tags: ['nepal', 'muluki-civil-code', 'contracts', 'damages', 'specific-performance']
  },
  {
    id: 'art-np-civil-res-judicata',
    title: 'Res Judicata (प्राङ्न्याय) and Interim Injunctions under Muluki Civil Procedure Code, 2074',
    category: 'Civil Litigation & Procedure',
    readTime: '23 min',
    publishedDate: '2026-02-20',
    author: 'Civil Appellate Practice Group & AI LEGAL™ Editorial',
    jurisdiction: { code: 'NP', name: 'Nepal (नेपाल सरकार)' },
    summary: 'A practical civil procedure guide analyzing the doctrine of Res Judicata under Section 11 and tripartite interim injunction standards under Section 156 of the Muluki Civil Procedure Code 2074.',
    keyStatutes: ['Muluki Civil Procedure Code 2074 (Sec 11, Sec 156)', 'Evidence Act 2031'],
    tags: ['nepal', 'res-judicata', 'prangnyaya', 'interim-injunction', 'civil-procedure']
  },
  {
    id: 'art-np-banking-crimes',
    title: 'Cheque Dishonour and Financial Fraud Prosecution under Banking Offence and Punishment Act, 2064',
    category: 'Banking & Financial Crimes',
    readTime: '19 min',
    publishedDate: '2026-02-12',
    author: 'Banking Law Practice Committee & AI LEGAL™ Editorial',
    jurisdiction: { code: 'NP', name: 'Nepal (नेपाल सरकार)' },
    summary: 'Doctrinal and procedural analysis of cheque bounce and banking offences under the Banking Offence and Punishment Act 2064 versus Negotiable Instruments Act 2034.',
    keyStatutes: ['Banking Offence and Punishment Act 2064', 'Negotiable Instruments Act 2034'],
    tags: ['nepal', 'banking-offence', 'cheque-bounce', 'financial-fraud', 'blacklisting']
  }
];

export const BACKEND_INDIAN_ARTICLES = [
  {
    id: 'art-bns-general-exceptions',
    title: 'General Exceptions under Bharatiya Nyaya Sanhita, 2023: Sections 14 to 44 Doctrinal Analysis',
    category: 'Criminal Law & BNS Commentary',
    readTime: '26 min',
    publishedDate: '2026-03-20',
    author: 'AI LEGAL™ Criminal Law Research Directorate',
    jurisdiction: { code: 'IN', name: 'India (भारत)' },
    summary: 'Exhaustive doctrinal analysis of general exceptions under Chapter III of the Bharatiya Nyaya Sanhita, 2023 (BNS), codifying private defence, infancy, insanity, intoxication, and necessity.',
    keyStatutes: ['Bharatiya Nyaya Sanhita, 2023 (BNS)', 'Bharatiya Sakshya Adhiniyam, 2023 (BSA)'],
    tags: ['criminal-law-bns', 'bns', 'ipc', 'general-exceptions', 'private-defence', 'criminal-liability']
  },
  {
    id: 'art-bnss-bail-jurisprudence',
    title: 'Bail Jurisprudence under BNSS 2023: Sections 479 & 480 and the Constitutional Rule of Liberty',
    category: 'Criminal Law & BNS Commentary',
    readTime: '18 min',
    publishedDate: '2026-03-12',
    author: 'Supreme Court Criminal Appellate Bar & AI LEGAL™ Editorial',
    jurisdiction: { code: 'IN', name: 'India (भारत)' },
    summary: 'A definitive criminal procedure treatise on bail jurisprudence under the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS). In-depth analysis of Section 479 maximum detention and Section 480 non-bailable bail.',
    keyStatutes: ['Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)', 'Constitution of India (Article 21)'],
    tags: ['criminal-law-bns', 'bnss', 'bail', 'anticipatory-bail', 'section-479', 'liberty']
  },
  {
    id: 'art-cpc-res-judicata',
    title: 'Res Judicata and Constructive Res Judicata: Procedural Nuances under Section 11 CPC',
    category: 'Civil Litigation Guides',
    readTime: '24 min',
    publishedDate: '2026-03-01',
    author: 'Senior Civil Litigation Directorate & AI LEGAL™ Editorial',
    jurisdiction: { code: 'IN', name: 'India (भारत)' },
    summary: 'An authoritative civil litigation guide examining the dual public policy foundations of Section 11 of the Code of Civil Procedure, 1908.',
    keyStatutes: ['Code of Civil Procedure, 1908 (Section 11, Order II Rule 2)'],
    tags: ['civil-litigation-cpc', 'cpc', 'res-judicata', 'constructive-res-judicata', 'estoppel']
  },
  {
    id: 'art-consti-basic-structure',
    title: 'The Basic Structure Doctrine: Judicial Review, Constitutional Identity, and Contemporary Boundaries',
    category: 'Constitutional Law Treatises',
    readTime: '28 min',
    publishedDate: '2026-02-15',
    author: 'AI LEGAL™ Constitutional Bench Research Directorate',
    jurisdiction: { code: 'IN', name: 'India (भारत)' },
    summary: 'A definitive doctrinal treatise tracing the genesis, judicial tests, and contemporary boundaries of the Basic Structure Doctrine.',
    keyStatutes: ['Constitution of India, 1950 (Article 368, Article 13, Article 32)'],
    tags: ['constitutional-law-treatises', 'constitution', 'basic-structure', 'kesavananda', 'judicial-review']
  }
];

class JurisdictionContentService {
  /**
   * Normalizes incoming jurisdiction codes
   */
  normalizeCountryCode(code) {
    const raw = String(code || 'IN').toUpperCase().trim();
    if (raw === 'NEPAL' || raw === 'NP') return 'NP';
    if (raw === 'INDIA' || raw === 'IN') return 'IN';
    if (raw === 'US' || raw === 'USA') return 'US';
    if (raw === 'GB' || raw === 'UK') return 'GB';
    if (raw === 'GLOBAL' || raw === 'INTERNATIONAL') return 'GLOBAL';
    return 'IN';
  }

  /**
   * Retrieve Articles for a specific jurisdiction with zero contamination
   */
  getArticles({ countryCode = 'IN', subject = 'ALL', search = '' }) {
    const normCode = this.normalizeCountryCode(countryCode);
    let catalog = [];

    if (normCode === 'NP') {
      catalog = [...BACKEND_NEPAL_ARTICLES];
    } else if (normCode === 'IN') {
      catalog = [...BACKEND_INDIAN_ARTICLES];
    } else {
      catalog = [];
    }

    // Filter by subject
    if (subject && subject !== 'ALL') {
      const s = subject.toLowerCase().trim();
      catalog = catalog.filter(a => 
        (a.category || '').toLowerCase().includes(s) ||
        (a.tags || []).some(t => t.toLowerCase().includes(s))
      );
    }

    // Filter by search query
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      catalog = catalog.filter(a =>
        (a.title || '').toLowerCase().includes(q) ||
        (a.summary || '').toLowerCase().includes(q) ||
        (a.category || '').toLowerCase().includes(q) ||
        (a.keyStatutes || []).some(k => k.toLowerCase().includes(q)) ||
        (a.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }

    return {
      success: true,
      jurisdiction: normCode,
      count: catalog.length,
      articles: catalog
    };
  }

  /**
   * Validate and retrieve a single article by ID under requested jurisdiction
   */
  getArticleById(articleId, requestedCountryCode = 'IN') {
    const normCode = this.normalizeCountryCode(requestedCountryCode);
    const allArticles = [...BACKEND_NEPAL_ARTICLES, ...BACKEND_INDIAN_ARTICLES];
    const article = allArticles.find(a => a.id === articleId);

    if (!article) {
      return {
        success: false,
        status: 404,
        error: 'NOT_FOUND',
        message: `Article '${articleId}' not found in legal knowledge database.`
      };
    }

    // Enforce strict jurisdiction validation
    if (article.jurisdiction.code !== 'GLOBAL' && article.jurisdiction.code !== normCode) {
      return {
        success: false,
        status: 403,
        error: 'JURISDICTION_MISMATCH',
        message: `Jurisdiction mismatch: Article '${articleId}' belongs exclusively to ${article.jurisdiction.name} and cannot be accessed under ${normCode === 'NP' ? 'Nepal' : 'India'} legal context.`,
        articleJurisdiction: article.jurisdiction.code,
        requestedJurisdiction: normCode
      };
    }

    return {
      success: true,
      status: 200,
      article
    };
  }
}

export const jurisdictionContentService = new JurisdictionContentService();
export default jurisdictionContentService;
