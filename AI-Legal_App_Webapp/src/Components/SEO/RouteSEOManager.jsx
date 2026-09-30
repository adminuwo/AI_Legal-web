import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * RouteSEOManager
 * Dynamically updates document.title, meta descriptions, canonical URLs,
 * and OpenGraph/Twitter tags whenever the user navigates to any tab or route.
 */
const ROUTE_METADATA = {
  '/': {
    title: "AI LEGAL™ — India's #1 Legal AI & Litigation Case Management Software | Try Free",
    description: "All-in-one AI legal case management & litigation software for India. Track cases across Supreme Court, High Courts & 8,200+ courts, research 3.8 Cr+ judgments, and draft court-ready petitions under BNS & BNSS. Start your free trial today!",
    canonical: "https://ailegal.aisa24.com/"
  },
  '/features': {
    title: "Features & Capabilities — AI LEGAL™ | BNS Drafting, Precedents & Case Prediction",
    description: "Explore AI LEGAL™ tools for advocates: Draft Maker for BNS & BNSS petitions, Supreme Court case law research, Contract Risk Analyzer, Argument Builder, and Evidence Forensics.",
    canonical: "https://ailegal.aisa24.com/features"
  },
  '/pricing': {
    title: "Pricing & Plans — AI LEGAL™ | Free Trial, Pro Advocate & Law Firm Workspaces",
    description: "Transparent pricing for Indian legal professionals. Start free with statutory legal research, or upgrade to Pro Advocate & Enterprise plans for unlimited AI court petition drafting.",
    canonical: "https://ailegal.aisa24.com/pricing"
  },
  '/case-search': {
    title: "Indian Court Case Search & Precedents — AI LEGAL™ | Supreme Court & High Courts",
    description: "Search over 3.8 Crore judgments from the Supreme Court of India, 25 High Courts, and Central Tribunals with AI semantic retrieval and verified legal citations.",
    canonical: "https://ailegal.aisa24.com/case-search"
  },
  '/judgment': {
    title: "Indian Court Case Search & Precedents — AI LEGAL™ | Supreme Court & High Courts",
    description: "Search over 3.8 Crore judgments from the Supreme Court of India, 25 High Courts, and Central Tribunals with AI semantic retrieval and verified legal citations.",
    canonical: "https://ailegal.aisa24.com/case-search"
  },
  '/blog': {
    title: "Legal Journal & Tech Insights — AI LEGAL™ | BNS Updates, Case Laws & Legal AI",
    description: "In-depth legal articles, Bharatiya Nyaya Sanhita (BNS 2023) guidance, judicial precedents analysis, and litigation technology best practices for Indian legal practitioners.",
    canonical: "https://ailegal.aisa24.com/blog"
  },
  '/about': {
    title: "About AI LEGAL™ — Next-Gen AI Legal Intelligence Platform for India",
    description: "Learn about AI LEGAL™ mission to empower advocates, law firms, and legal departments in India with ethical, secure, and statutory-grounded artificial intelligence.",
    canonical: "https://ailegal.aisa24.com/about"
  },
  '/mobile-app': {
    title: "Download AI LEGAL™ Mobile App — Advocate Diary & Litigation on Android & iOS",
    description: "Carry your entire law chamber on your phone. Real-time hearing cause lists, automated case alerts, and instant legal drafting on Android and iPhone.",
    canonical: "https://ailegal.aisa24.com/mobile-app"
  },
  '/enterprise': {
    title: "AI LEGAL™ Enterprise — AI Litigation Workspace for Law Firms & Legal Teams",
    description: "Collaborative AI legal intelligence platform for corporate legal counsels and law firms. Custom knowledge vault, chamber data isolation, and multi-user management.",
    canonical: "https://ailegal.aisa24.com/enterprise"
  },
  '/legal-research': {
    title: "AI Legal Research & Statutory Search — Supreme Court & High Courts | AI LEGAL™",
    description: "Perform grounded legal research across Bare Acts, Central Acts, BNS, BNSS, BSA, IPC, CrPC, and landmark judicial rulings with zero hallucination.",
    canonical: "https://ailegal.aisa24.com/legal-research"
  },
  '/post-judgment': {
    title: "Submit & Analyze Court Judgment — AI LEGAL™",
    description: "Upload and analyze judicial rulings with AI LEGAL™. Extract key ratio decidendi, legal issues, precedent citations, and procedural grounds instantly.",
    canonical: "https://ailegal.aisa24.com/post-judgment"
  },
  '/login': {
    title: "Login to Advocate Workspace — AI LEGAL™",
    description: "Securely access your AI LEGAL™ litigation dashboard, case files, client dockets, and draft templates.",
    canonical: "https://ailegal.aisa24.com/login"
  },
  '/signup': {
    title: "Create Free Advocate Account — AI LEGAL™ | Start Free Trial",
    description: "Join thousands of advocates and law firms across India. Get started with AI legal research and court drafting today with our free trial.",
    canonical: "https://ailegal.aisa24.com/signup"
  },
  '/privacy-policy': {
    title: "Privacy Policy — AI LEGAL™ | Bank-Grade Data Protection",
    description: "Review AI LEGAL™ commitment to advocate-client privilege, zero model training on confidential data, and bank-grade AES-256 cloud encryption.",
    canonical: "https://ailegal.aisa24.com/privacy-policy"
  },
  '/terms-of-service': {
    title: "Terms of Service — AI LEGAL™",
    description: "Terms and conditions governing the use of the AI LEGAL™ platform, software APIs, and litigation intelligence services.",
    canonical: "https://ailegal.aisa24.com/terms-of-service"
  },
  '/terms': {
    title: "Terms of Service — AI LEGAL™",
    description: "Terms and conditions governing the use of the AI LEGAL™ platform, software APIs, and litigation intelligence services.",
    canonical: "https://ailegal.aisa24.com/terms"
  }
};

const DEFAULT_METADATA = {
  title: "AI LEGAL™ — India's #1 Legal AI & Litigation Case Management Software | Try Free",
  description: "All-in-one AI legal case management & litigation software for India. Track cases across Supreme Court, High Courts & 8,200+ courts, research 3.8 Cr+ judgments, and draft court-ready petitions under BNS & BNSS. Start your free trial today!",
  canonical: "https://ailegal.aisa24.com/"
};

export default function RouteSEOManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
    
    // Check exact match or handle dashboard subroutes
    let meta = ROUTE_METADATA[pathname];

    if (!meta) {
      if (pathname.startsWith('/dashboard')) {
        meta = {
          title: "AI LEGAL™ Dashboard — Litigation Management Workspace",
          description: "Access your cases, cause lists, hearings, drafted petitions, and AI legal research in one unified litigation workspace.",
          canonical: `https://ailegal.aisa24.com${pathname}`
        };
      } else if (pathname.startsWith('/blog/')) {
        meta = {
          title: "Legal Journal Article — AI LEGAL™",
          description: "Read the latest legal analysis, BNS/BNSS statutory breakdowns, and court precedents on AI LEGAL™ Journal.",
          canonical: `https://ailegal.aisa24.com${pathname}`
        };
      } else if (pathname.startsWith('/judgment/')) {
        meta = {
          title: "Judgment Precedent Analysis — AI LEGAL™",
          description: "View verified Supreme Court and High Court precedents, citations, and ratio decidendi on AI LEGAL™.",
          canonical: `https://ailegal.aisa24.com${pathname}`
        };
      } else {
        meta = DEFAULT_METADATA;
      }
    }

    // 0. Scroll to top on every route change
    const resetScroll = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch (e) {
        window.scrollTo(0, 0);
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const rootEl = document.getElementById('root');
      if (rootEl) rootEl.scrollTop = 0;
    };

    resetScroll();
    const scrollTimer = setTimeout(resetScroll, 20);

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Helper to set or update meta tag
    const setMetaTag = (attribute, name, content) => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 3. Update Standard Meta Description
    setMetaTag('name', 'description', meta.description);

    // 4. Update OpenGraph Tags
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', meta.canonical);

    // 5. Update Twitter Tags
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:url', meta.canonical);

    // 6. Update Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', meta.canonical);

    return () => clearTimeout(scrollTimer);
  }, [location.pathname]);

  return null;
}
