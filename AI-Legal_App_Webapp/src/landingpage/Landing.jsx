import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Scale, Gavel, Shield, ShieldCheck, FileText, Search, Library,
  Briefcase, Users, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, ChevronDown,
  Sparkles, Clock, Lock, Smartphone, Download, Award, Zap,
  BookOpen, Cpu, FileSignature, Layers, Activity, Check, ExternalLink,
  MessageSquare, Menu, X, Building2, HelpCircle, ArrowUpRight,
  Database, UserCheck, Eye, Compass, Send, PhoneCall, AlertCircle, Plus, Copy,
  GraduationCap, BriefcaseBusiness, Key, Star, Quote, Mic, Megaphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { getUserData } from '../userStore/userData';
import { AppRoute } from '../types';
import ThemeToggle from '../Components/ThemeToggle';
import PublicFooter from '../Components/PublicFooter';
import PrivacyPolicyModal from './PolicyModals/PrivacyPolicyModal';
import TermsOfServiceModal from './PolicyModals/TermsOfServiceModal';
import CookiePolicyModal from './PolicyModals/CookiePolicyModal';
import DisclaimerModal from './PolicyModals/DisclaimerModal';
import DownloadAppModal from '../Components/DownloadAppModal';
import OurProductsDropdown from '../Components/OurProductsDropdown';

// Verified Real Store Reviews (Google Play & Apple App Store for AI LEGAL™)
const verifiedStoreReviews = [
  {
    id: 'rev-store-1',
    name: 'Dr. Adv. Manish Aggarwal',
    court: 'Founder & Leader at EOS Chambers of Law, Delhi',
    courtJurisdiction: 'Supreme Court of India and Various High Courts',
    platform: 'Google Play',
    storeApp: 'AI LEGAL™: Case Law & AI BNS Drafting',
    rating: 5,
    version: 'v1.0.12',
    date: '4 days ago',
    initials: 'MA',
    title: 'Truly one of the most recommended AI tools for legal professionals',
    review: 'We have been using your tool for the past few days, and it has been extremely helpful in legal research and drafting in multiple languages, along with its Verifier and Editor features. This tool provides exactly what we need in court; it is truly one of the most recommended AI tools for the legal professionals. Regarding support, I must say the Support Team is outstanding. The combination of a strong support system and legal expertise makes our experience better.',
    verified: true,
    helpfulCount: 42
  },
  {
    id: 'rev-store-2',
    name: 'Adv. Digvijay Kumar Singh',
    court: 'Senior Partner at DKS & Associates',
    courtJurisdiction: 'Bombay High Court & NCLT Mumbai',
    platform: 'App Store',
    storeApp: 'AI LEGAL™ Mobile & Web Workspace',
    rating: 5,
    version: 'v1.0.12',
    date: '1 week ago',
    initials: 'DS',
    title: 'Made our chamber legal work much easier, especially drafting and research',
    review: 'My experience with AI LEGAL tool so far has been excellent. This tool has made my legal work much easier, especially in drafting and research. It is smooth, reliable, and delivers exactly what it promises. The companion mobile app synchronizes cause lists seamlessly right when stepping into court. Truly grateful for such a great tool for the legal community.',
    verified: true,
    helpfulCount: 37
  },
  {
    id: 'rev-store-3',
    name: 'Suman Majumder',
    court: 'Advocate & Commercial Litigation Counsel',
    courtJurisdiction: 'Calcutta High Court & Tribunals',
    platform: 'Google Play',
    storeApp: 'AI LEGAL™: Case Law & AI BNS Drafting',
    rating: 5,
    version: 'v1.0.11',
    date: '2 weeks ago',
    initials: 'SM',
    title: 'Incredibly helpful in my work — smooth and highly responsive',
    review: 'AI LEGAL tool is truly excellent and has been incredibly helpful in my work. The user experience is smooth, and it delivers exactly what it promises. Additionally, the support team is highly responsive and commendable, making the overall experience even better. Highly recommended!',
    verified: true,
    helpfulCount: 29
  },
  {
    id: 'rev-store-4',
    name: 'Adv. Prashant Zende Patil',
    court: 'Advocate, Pune, Maharashtra, India',
    courtJurisdiction: 'District & Sessions Court & Bombay High Court',
    platform: 'Google Play',
    storeApp: 'AI LEGAL™: Case Law & AI BNS Drafting',
    rating: 5,
    version: 'v1.0.11',
    date: '2 weeks ago',
    initials: 'PP',
    title: 'Saves a lot of valuable time in legal research and drafting',
    review: 'AI LEGAL is a highly useful platform for lawyers. It makes legal research, drafting, and many other tasks much easier and more efficient. The Verifier and Editor features, in particular, save a lot of valuable time. The Support team is very responsive and helpful. Special thanks for the prompt assistance and deep legal knowledge.',
    verified: true,
    helpfulCount: 34
  },
  {
    id: 'rev-store-5',
    name: 'Adv. Sneha Nambiar',
    court: 'Nambiar Dispute Resolution Chambers',
    courtJurisdiction: 'High Court of Karnataka, Bengaluru',
    platform: 'App Store',
    storeApp: 'AI LEGAL™ Mobile & Web Workspace',
    rating: 5,
    version: 'v1.0.10',
    date: '3 weeks ago',
    initials: 'SN',
    title: 'Section 63 BSA electronic evidence certificate generator is gold',
    review: 'The Section 63 BSA electronic evidence certificate generator and contract risk scanner alone justify the entire subscription. Absolute advocate-client privacy with 256-bit encryption gives us complete peace of mind that privileged client data is never used to train models.',
    verified: true,
    helpfulCount: 51
  },
  {
    id: 'rev-store-6',
    name: 'Adv. Prasad Apte',
    court: 'Criminal Defense Advocate',
    courtJurisdiction: 'Sessions Court & High Court of Judicature',
    platform: 'Google Play',
    storeApp: 'AI LEGAL™: Case Law & AI BNS Drafting',
    rating: 5,
    version: 'v1.0.10',
    date: '1 month ago',
    initials: 'PA',
    title: 'BNS and BNSS transition solved effortlessly with dual section mapping',
    review: 'Transitioning from IPC and CrPC to BNS, BNSS, and BSA was causing friction in daily court practice. AI LEGAL’s dual-section cross-referencing and court-ready petition formats give us an unbeatable advantage in court every single morning.',
    verified: true,
    helpfulCount: 31
  }
];

export default function Landing() {
  const navigate = useNavigate();
  const location = useLocation();

  // Authentication State
  const token = localStorage.getItem('token');
  const user = getUserData();
  const isAuthenticated = Boolean(
    (token && token !== 'undefined' && token !== 'null') ||
    (user?.token && user.token !== 'undefined' && user.token !== 'null')
  );

  // Mobile Navigation Drawer State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Solution Tabs State (Section 7)
  const [activeSolutionTab, setActiveSolutionTab] = useState('advocates');

  // Interactive Assistant Demo Tab State (Section 3)
  const [activeDemoTab, setActiveDemoTab] = useState('bail');


  // Verified Store Reviews State (Live fetched from Play Store & App Store backend API)
  const [selectedReviewModal, setSelectedReviewModal] = useState(null);
  const [storeReviewsList, setStoreReviewsList] = useState(verifiedStoreReviews);
  const [isStoreReviewsLoaded, setIsStoreReviewsLoaded] = useState(false);

  // Fetch verified reviews from live backend store endpoint
  useEffect(() => {
    let isMounted = true;
    const fetchStoreReviews = async () => {
      try {
        const apiBase = window._env_?.VITE_AISA_BACKEND_API || import.meta.env.VITE_AISA_BACKEND_API || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? "http://localhost:8080/api" : (typeof window !== 'undefined' ? `${window.location.origin}/api` : "http://localhost:8080/api"));
        const res = await fetch(`${apiBase}/feedback/store-reviews`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data?.reviews && Array.isArray(data.reviews) && data.reviews.length > 0) {
            setStoreReviewsList(data.reviews);
            setIsStoreReviewsLoaded(true);
          }
        }
      } catch (err) {
        // Silently preserve verifiedStoreReviews fallback
      }
    };
    fetchStoreReviews();
    return () => { isMounted = false; };
  }, []);

  // Public Contact Query Form State
  const [queryFormData, setQueryFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    pinCode: '',
    country: 'India',
    description: ''
  });
  const [isSubmittingQuery, setIsSubmittingQuery] = useState(false);
  const [querySubmitSuccess, setQuerySubmitSuccess] = useState(false);

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!queryFormData.firstName.trim() || !queryFormData.lastName.trim() || !queryFormData.email.trim() || !queryFormData.country.trim()) {
      toast.error('Please fill in all compulsory fields (*)');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(queryFormData.email.trim())) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmittingQuery(true);
    try {
      const apiBase = window._env_?.VITE_AISA_BACKEND_API || import.meta.env.VITE_AISA_BACKEND_API || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? "http://localhost:8080/api" : (typeof window !== 'undefined' ? `${window.location.origin}/api` : "http://localhost:8080/api"));
      const res = await fetch(`${apiBase}/feedback/public-query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(queryFormData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(data.message || 'Your query has been sent to our team!');
        setQuerySubmitSuccess(true);
        setQueryFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactNo: '',
          pinCode: '',
          country: 'India',
          description: ''
        });
      } else {
        toast.error(data.error || 'Failed to submit query. Please try again.');
      }
    } catch (err) {
      toast.error('Network error. Please try again or email ai.legal@uwo24.com.');
    } finally {
      setIsSubmittingQuery(false);
    }
  };

  // Modals for Policies & Downloads
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isCookiePolicyModalOpen, setIsCookiePolicyModalOpen] = useState(false);
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Navbar dynamic scroll background state (seamlessly transparent on hero section video, transitions to solid on scroll past hero)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Roles Carousel State (Section: Built for Everyone in Law)
  const [activeRoleSlide, setActiveRoleSlide] = useState(0);
  const rolesCarouselRef = useRef(null);

  const scrollToRole = (idx) => {
    if (rolesCarouselRef.current) {
      const container = rolesCarouselRef.current;
      const cards = container.children;
      if (cards && cards[idx]) {
        cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      setActiveRoleSlide(idx);
    }
  };

  const onRoleScroll = (e) => {
    const el = e.currentTarget;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / 3;
    const newIdx = Math.min(2, Math.max(0, Math.round(scrollPos / cardWidth)));
    if (newIdx !== activeRoleSlide) {
      setActiveRoleSlide(newIdx);
    }
  };

  // Alternating dual hero video state (Video 1: zoom-in, Video 2: zoom-out)
  const [activeHeroVideo, setActiveHeroVideo] = useState(0);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video1MobileRef = useRef(null);
  const video2MobileRef = useRef(null);

  // Initialize and ensure autoplay capability across both desktop & mobile players
  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video1MobileRef.current, video2MobileRef.current];

    videos.forEach((v) => {
      if (v) {
        v.muted = true;
        v.defaultMuted = true;
        v.playsInline = true;
        v.setAttribute('playsinline', '');
        v.setAttribute('webkit-playsinline', '');
        v.setAttribute('muted', '');
      }
    });

    [video1Ref.current, video1MobileRef.current].forEach((v) => {
      if (v) v.play().catch(() => {});
    });
  }, []);

  const switchVideo = (nextIdx) => {
    const dVideo = nextIdx === 0 ? video1Ref.current : video2Ref.current;
    const mVideo = nextIdx === 0 ? video1MobileRef.current : video2MobileRef.current;
    [dVideo, mVideo].forEach((v) => {
      if (v) {
        v.muted = true;
        v.currentTime = 0;
        const playPromise = v.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    });
    setActiveHeroVideo(nextIdx);
  };

  const handleTimeUpdate1 = () => {
    const v = video1Ref.current || video1MobileRef.current;
    if (v && v.duration && v.currentTime >= v.duration - 0.7 && activeHeroVideo === 0) {
      switchVideo(1);
    }
  };

  const handleTimeUpdate2 = () => {
    const v = video2Ref.current || video2MobileRef.current;
    if (v && v.duration && v.currentTime >= v.duration - 0.7 && activeHeroVideo === 1) {
      switchVideo(0);
    }
  };

  const handleVideo1Ended = () => {
    if (activeHeroVideo === 0) switchVideo(1);
  };

  const handleVideo2Ended = () => {
    if (activeHeroVideo === 1) switchVideo(0);
  };

  useEffect(() => {
    if (activeHeroVideo === 0) {
      if (video1Ref.current) video1Ref.current.play().catch(() => {});
      if (video1MobileRef.current) video1MobileRef.current.play().catch(() => {});
    } else {
      if (video2Ref.current) video2Ref.current.play().catch(() => {});
      if (video2MobileRef.current) video2MobileRef.current.play().catch(() => {});
    }
  }, [activeHeroVideo]);

  // Sync URL policy modals
  useEffect(() => {
    if (location.pathname === '/privacy-policy') setIsPrivacyModalOpen(true);
    else if (location.pathname === '/terms' || location.pathname === '/terms-of-service') setIsTermsModalOpen(true);
    else if (location.pathname === '/cookie-policy') setIsCookiePolicyModalOpen(true);
    else if (location.pathname === '/disclaimer') setIsDisclaimerModalOpen(true);
    else {
      setIsPrivacyModalOpen(false);
      setIsTermsModalOpen(false);
      setIsCookiePolicyModalOpen(false);
      setIsDisclaimerModalOpen(false);
    }
  }, [location.pathname]);

  // Protected Action Navigation Helper
  const handleProtectedAction = (destination) => {
    if (isAuthenticated) {
      navigate(destination);
    } else {
      navigate('/login', { state: { from: destination } });
    }
  };

  // Demo Scenarios for Assistant Showcase
  const demoScenarios = {
    bail: {
      title: 'Anticipatory Bail under Section 482 BNSS',
      inputQuery: 'Draft grounds for anticipatory bail for alleged commercial cheating where applicant had no operational signatory authority.',
      outputStatute: 'Section 482 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (formerly Sec 438 CrPC)',
      outputPoints: [
        'Applicant demonstrated to have resigned as non-executive director 14 months prior to alleged default transactions.',
        'Absence of custodial interrogation necessity: All relevant ledger accounts and digital audit trails already submitted to IO.',
        'Compliance with Satender Kumar Antil v. CBI (2022) guidelines governing custodial arrest thresholds in economic disputes.'
      ],
      citation: 'Gurbaksh Singh Sibbia v. State of Punjab, (1980) 2 SCC 565 & Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273'
    },
    notice: {
      title: 'Section 138 NI Act Statutory Demand Notice',
      inputQuery: 'Generate a 15-day statutory demand notice for dishonoured cheque of ₹18,50,000 returned with memo "Funds Insufficient".',
      outputStatute: 'Section 138 read with Section 142 of Negotiable Instruments Act, 1881',
      outputPoints: [
        'Cheque No. 492102 dated 14/08/2026 drawn on HDFC Bank presented within 3-month statutory validity window.',
        'Bank memo dated 22/08/2026 confirmed dishonour due to insufficiency of funds.',
        'Statutory 15-day rectification window granted prior to filing complaint under Section 142 before the Metropolitan Magistrate.'
      ],
      citation: 'Dashrath Rupsingh Rathod v. State of Maharashtra, (2014) 9 SCC 129'
    },
    contract: {
      title: 'Commercial Agreement Indemnity & Limitation Risk',
      inputQuery: 'Scan vendor service agreement clause 14 for uncapped indemnity risks and cross-jurisdictional conflict of laws.',
      outputStatute: 'Section 73 & 74 of the Indian Contract Act, 1872',
      outputPoints: [
        'HIGH RISK: Clause 14.2 imposes unilateral unlimited indemnity for indirect and consequential damages.',
        'SUGGESTED REVISION: Cap aggregate indemnity liability to 100% of fees paid over preceding 12 months.',
        'JURISDICTION: Seat designated as Mumbai with arbitration governed under ACA 1996, institutional rules of MCIA.'
      ],
      citation: 'ONGC Ltd. v. Saw Pipes Ltd., (2003) 5 SCC 705'
    },
    precedents: {
      title: 'Specific Performance & Ready-and-Willing Proof',
      inputQuery: 'Find binding 3-Judge bench precedents confirming continuous readiness and willingness under Section 16(c) Specific Relief Act.',
      outputStatute: 'Section 16(c) of Specific Relief Act, 1963 (as amended by 2018 Amendment)',
      outputPoints: [
        'Continuous demonstration of financial readiness from contract execution date to decree date must be explicitly pleaded.',
        '2018 amendment makes specific performance a mandatory statutory remedy rather than discretionary, subject to Section 16.',
        'No adverse inference when purchaser demonstrates pre-arranged bank sanctions and liquid mutual funds.'
      ],
      citation: 'U.N. Krishnamurthy v. A.M. Krishnamurthy, (2022) 11 SCC 382 (3-Judge Bench)'
    }
  };

  // Section 7 Solutions Data (CLAW-Style Tabs)
  const solutionsData = {
    advocates: {
      title: 'Independent Advocates & Trial Litigators',
      tagline: 'Chamber on Your Phone & Desk — From Morning Cause List to Evening Briefing',
      badge: 'Individual Practice',
      icon: Gavel,
      capabilities: [
        { label: 'Automated Daily Cause Lists', desc: 'Auto-scrapes court registries and syncs your daily matters directly to your phone diary.' },
        { label: 'Hearing Reminders & Limitations', desc: 'Calculates limitation periods for appeals, revisions, and filings so you never miss a deadline.' },
        { label: 'Court-Ready Drafting in 60s', desc: 'BNS/BNSS-grounded bail petitions, affidavits, and caveats formatted to High Court conventions.' },
        { label: 'Trial Timeline & Event Chronology', desc: 'Turn 300-page chargesheets into a crisp chronological milestone chart for cross-examinations.' },
        { label: 'Billable Hours & Client Ledgers', desc: 'Track professional appearance fees, conference hours, and filing disbursements seamlessly.' }
      ],
      ctaText: 'Explore Advocate Chamber',
      ctaPath: '/dashboard/cases'
    },
    firms: {
      title: 'Law Firms & Senior Chambers',
      tagline: 'Collaborative Multi-Counsel Command Center with Institutional Memory',
      badge: 'Chamber Collaboration',
      icon: Building2,
      capabilities: [
        { label: 'Case Assignment & Associate Routing', desc: 'Delegate briefs, assign draft reviews, and monitor associate progress across active matters.' },
        { label: 'Shared Chamber Precedent Vault', desc: 'Institutional knowledge bank tagging winning arguments and cited authorities across the firm.' },
        { label: 'Internal Confidential Team Chat', desc: 'Case-specific secure chat rooms to debate litigation strategy away from unencrypted apps.' },
        { label: 'Client Billing & Retainers', desc: 'Generate professional invoices, fee notes, and retainer reports branded with your chamber seal.' },
        { label: 'Conflict Screening Engine', desc: 'Instant check across historical party rosters to eliminate ethical representation conflicts.' },
        { label: 'Collaborative Case Workspaces', desc: 'Multi-counsel workspaces with role permissions for Managing Partners, Associates, and Clerks.' }
      ],
      ctaText: 'Access Firm Workspace',
      ctaPath: '/dashboard/cases'
    },
    corporate: {
      title: 'Corporate Legal Teams & In-House Counsel',
      tagline: 'Mitigate Commercial Risk, Automate Compliance & Oversee External Counsel',
      badge: 'Corporate In-House',
      icon: BriefcaseBusiness,
      capabilities: [
        { label: 'Contract Risk Scoring & Audits', desc: 'Pinpoint uncapped liabilities, non-competes, and indemnities across vendor and partner contracts.' },
        { label: 'Autonomous Redlining & Clause Swap', desc: 'Replace unfavorable indemnities and governing law clauses with pre-approved corporate playbooks.' },
        { label: 'Regulatory Compliance Monitoring', desc: 'Track IBC, Companies Act, and SEBI circular updates affecting ongoing operations.' },
        { label: 'Litigation Dispute Management', desc: 'Monitor pending civil suits, arbitration claims, and section 138 proceedings in one dashboard.' },
        { label: 'Outside Counsel Oversight', desc: 'Track briefing progress, court hearing outcomes, and fee approvals for empaneled advocates.' }
      ],
      ctaText: 'Explore Corporate Solutions',
      ctaPath: '/features'
    },
    students: {
      title: 'Law Students, Researchers & Academics',
      tagline: 'Master Indian Jurisprudence, Ratio Decidendi & Courtroom Advocacy',
      badge: 'Legal Education',
      icon: GraduationCap,
      capabilities: [
        { label: 'Case Law Discovery & Ratio Decidendi', desc: 'Instantly isolate the binding ratio decidendi from obiter dicta across landmark SC rulings.' },
        { label: 'Statutory Comparison Engine', desc: 'Side-by-side mapping comparing IPC to BNS, CrPC to BNSS, and Indian Evidence Act to BSA.' },
        { label: 'AI Mock Courtroom Simulation', desc: 'Argue moot court propositions against an interactive, questioning simulated judicial bench.' },
        { label: 'Moot Memorial Drafting & Citations', desc: 'Structure moot court memorials with precise Bluebook / Indian standard citations.' },
        { label: 'Judicial Services & Bar Exam MCQ Prep', desc: 'Practice topic-wise bare act questions with immediate statutory rationale explanations.' }
      ],
      ctaText: 'Start Learning Free',
      ctaPath: '/signup'
    }
  };

  // Why Choose AI LEGAL Features (Simple, Short & Easy)
  const whyChooseUsFeatures = [
    {
      id: 'mock-courtroom',
      icon: Gavel,
      title: 'Virtual Courtroom Practice',
      desc: "Practice your courtroom arguments, prepare for tough judge questions, and strengthen your case before hearing."
    },
    {
      id: 'statutory-crosswalk',
      icon: BookOpen,
      title: 'BNS & IPC Law Comparison',
      desc: "Instantly map and compare new criminal laws (BNS, BNSS, BSA) with old IPC, CrPC, and Evidence Act sections."
    },
    {
      id: 'evidence-auditor',
      icon: Search,
      title: 'Evidence & Timeline Finder',
      desc: "Analyze FIRs, chargesheets, and witness statements quickly to spot key contradictions and chronological facts."
    },
    {
      id: 'precedent-shepardizer',
      icon: ShieldCheck,
      title: '3.8 Cr+ Verified Judgments',
      desc: "Search millions of Supreme Court and High Court cases instantly. Verify if citations are active or overruled."
    },
    {
      id: 'court-pleadings',
      icon: FileSignature,
      title: 'Instant Legal Drafting',
      desc: "Draft bail applications, legal notices, writs, and petitions in minutes with court-ready formats and margins."
    },
    {
      id: 'privilege-vault',
      icon: Lock,
      title: '100% Private & Secure',
      desc: "Your case files and client data are protected with 256-bit encryption. Private, confidential, and never shared."
    }
  ];

  // verifiedStoreReviews is defined at module level above Landing()

  const currentSolution = solutionsData[activeSolutionTab];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white dark:bg-[#0B0F19] text-[#0F172A] dark:text-slate-100 font-sans selection:bg-[#B88B2A]/25 selection:text-[#111111]">

      {/* =========================================================================
          SECTION 3: TOP NAVIGATION (CLAW-INSPIRED ARCHITECTURE)
      ========================================================================= */}
      <header className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#B88B2A]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/logo/logo_transparent.png" 
                alt="AI LEGAL Logo" 
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain relative"
              />
            </div>
            <span className="text-lg sm:text-xl font-black tracking-tight text-[#0F172A] dark:text-white flex items-center">
              AI LEGAL
              <span className="text-[10px] align-super text-black dark:text-white font-extrabold ml-0.5">TM</span>
            </span>
          </div>

          {/* Desktop Navigation Links — Matching Reference Style */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#B88B2A]/15 text-[#B38628] dark:bg-amber-950/60 dark:text-amber-300 transition-all cursor-pointer shadow-2xs"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/features')}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#B38628] dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#B38628] dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Blog
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#B38628] dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => navigate('/case-search')}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#B38628] dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Case Search
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#B38628] dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <OurProductsDropdown />
            <button 
              onClick={() => handleProtectedAction('/dashboard')}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#B38628] dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Dashboard
            </button>
          </nav>

          {/* Right Header Actions — Matching Reference Style */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle />

            {/* Post Judgement Shortcut */}
            <button
              onClick={() => navigate('/post-judgment')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#B88B2A]/50 bg-amber-50/50 text-[#B38628] hover:bg-amber-100/60 dark:bg-amber-950/30 dark:border-amber-700/50 dark:text-amber-300 dark:hover:bg-amber-950/70 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <Plus size={14} className="text-[#B38628] stroke-[2.5]" />
              <span>Post your judgement</span>
            </button>

            {isAuthenticated && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B88B2A] to-[#B38628] hover:opacity-95 transition-all cursor-pointer shadow-md shadow-[#B88B2A]/30"
                >
                  Dashboard →
                </button>
                <div 
                  onClick={() => navigate('/dashboard/settings')}
                  className="w-7.5 h-7.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-[#B88B2A]/40 text-[#B38628] dark:text-amber-400 font-bold text-xs flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  title={user?.name || 'Profile'}
                >
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 px-5 py-5 space-y-4 shadow-xl"
            >
              <div className="flex flex-col space-y-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <button 
                  onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-left px-3.5 py-2 rounded-xl bg-[#B88B2A]/15 text-[#B38628] dark:bg-amber-950/60 dark:text-amber-300 font-bold"
                >
                  Home
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigate('/features'); }}
                  className="text-left px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#B38628]"
                >
                  Features
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigate('/blog'); }}
                  className="text-left px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#B38628]"
                >
                  Blog
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigate('/pricing'); }}
                  className="text-left px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#B38628]"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigate('/case-search'); }}
                  className="text-left px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#B38628]"
                >
                  Case Search
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigate('/about'); }}
                  className="text-left px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#B38628]"
                >
                  About
                </button>
                <OurProductsDropdown isMobile={true} onItemClick={() => setMobileMenuOpen(false)} />
                <button 
                  onClick={() => { setMobileMenuOpen(false); handleProtectedAction('/dashboard'); }}
                  className="text-left px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#B38628]"
                >
                  Dashboard
                </button>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={() => { setMobileMenuOpen(false); navigate('/post-judgment'); }}
                  className="w-full py-2.5 rounded-full text-xs font-bold border border-[#B88B2A]/50 bg-amber-50/50 text-[#B38628] dark:bg-amber-950/40 dark:text-amber-300 flex items-center justify-center gap-1.5"
                >
                  <Plus size={14} className="stroke-[2.5]" />
                  <span>Post your judgement</span>
                </button>
                {isAuthenticated ? (
                  <button
                    onClick={() => { setMobileMenuOpen(false); navigate('/dashboard'); }}
                    className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B88B2A] to-[#B38628] hover:opacity-95 text-center shadow-md shadow-[#B88B2A]/30"
                  >
                    Go to Dashboard →
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => { setMobileMenuOpen(false); navigate('/login'); }}
                      className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold rounded-full text-center text-xs"
                    >
                      Sign In
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>


      {/* =========================================================================
          SECTION 1: HERO SECTION (VIDEO BACKGROUND, TEXT LEFT)
      ========================================================================= */}
      <section 
        id="hero" 
        className="relative overflow-hidden min-h-0 lg:min-h-screen lg:min-h-[100dvh] w-full max-w-full pt-[84px] sm:pt-[96px] lg:pt-[104px] pb-10 sm:pb-14 flex items-center border-b border-slate-200/80 dark:border-slate-800/80 bg-[#F5F2EB] dark:bg-[#070A12]"
      >
        {/* Desktop Background Video: Full widescreen loop on desktop screens */}
        <div className="hidden lg:block absolute inset-0 w-full h-full min-w-full min-h-full overflow-hidden pointer-events-none z-0">
          {/* Video 1: Gemini generated (Gradual Zoom In) */}
          <motion.video
            ref={video1Ref}
            src="/video/gemini_generated_video_b4fbf4cf.mp4?v=clean"
            poster="/video/home_poster.webp"
            autoPlay
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            initial={false}
            onTimeUpdate={handleTimeUpdate1}
            onEnded={handleVideo1Ended}
            animate={{
              opacity: activeHeroVideo === 0 ? 1 : 0,
              scale: activeHeroVideo === 0 ? 1.15 : 1.05,
            }}
            transition={{
              opacity: { duration: 1, ease: 'easeInOut' },
              scale: { duration: 10, ease: 'linear' },
            }}
            style={{ transformOrigin: '78% 20%' }}
            className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-[78%_20%]"
          />

          {/* Video 2: Video Project 1 (Gradual Zoom Out) */}
          <motion.video
            ref={video2Ref}
            src="/video/video_project_1.mp4"
            autoPlay
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            initial={false}
            onTimeUpdate={handleTimeUpdate2}
            onEnded={handleVideo2Ended}
            animate={{
              opacity: activeHeroVideo === 1 ? 1 : 0,
              scale: activeHeroVideo === 1 ? 1.02 : 1.12,
            }}
            transition={{
              opacity: { duration: 1, ease: 'easeInOut' },
              scale: { duration: 5.3, ease: 'linear' },
            }}
            style={{ transformOrigin: '88% 18%' }}
            className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-[88%_18%]"
          />

          {/* Desktop gradient overlay: Readable on left, video 100% visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent via-52% dark:from-[#070A12]/95 dark:via-[#070A12]/50 dark:to-transparent pointer-events-none" />
        </div>

        {/* Content Container: Aligned with navbar & trust bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="w-full lg:max-w-2xl text-left space-y-3.5 sm:space-y-5">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-black tracking-tight text-[#0F172A] dark:text-white leading-[1.1]">
              Smarter Practice.<br />
              <span className="text-[#B38628] dark:text-amber-400">Faster Justice.</span>
            </h1>

            {/* Subheading Paragraph 1 */}
            <p className="text-xs sm:text-lg lg:text-[18px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Replace fragmented tools with a single AI-powered platform that centralizes cases, compliances, communication, and decision-making.
            </p>

            {/* Mobile Dedicated Video Player Card: Properly fitted & sized ("chhoti & properly fit") */}
            <div className="block lg:hidden relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-amber-500/30 dark:border-amber-500/40 bg-slate-900 my-3.5 sm:my-4 group">
              {/* Mobile Video 1: Gemini generated (Gradual Zoom In) */}
              <motion.video
                ref={video1MobileRef}
                src="/video/gemini_generated_video_b4fbf4cf.mp4?v=clean"
                poster="/video/home_poster.webp"
                autoPlay
                muted
                playsInline
                webkit-playsinline="true"
                preload="auto"
                initial={false}
                onTimeUpdate={handleTimeUpdate1}
                onEnded={handleVideo1Ended}
                animate={{
                  opacity: activeHeroVideo === 0 ? 1 : 0,
                  scale: activeHeroVideo === 0 ? 1.08 : 1.0,
                }}
                transition={{
                  opacity: { duration: 1, ease: 'easeInOut' },
                  scale: { duration: 10, ease: 'linear' },
                }}
                style={{ transformOrigin: '78% 20%' }}
                className="absolute inset-0 w-full h-full object-cover object-[78%_20%]"
              />

              {/* Mobile Video 2: Video Project 1 (Gradual Zoom Out) */}
              <motion.video
                ref={video2MobileRef}
                src="/video/video_project_1.mp4"
                autoPlay
                muted
                playsInline
                webkit-playsinline="true"
                preload="auto"
                initial={false}
                onTimeUpdate={handleTimeUpdate2}
                onEnded={handleVideo2Ended}
                animate={{
                  opacity: activeHeroVideo === 1 ? 1 : 0,
                  scale: activeHeroVideo === 1 ? 1.0 : 1.06,
                }}
                transition={{
                  opacity: { duration: 1, ease: 'easeInOut' },
                  scale: { duration: 5.3, ease: 'linear' },
                }}
                style={{ transformOrigin: '78% 20%' }}
                className="absolute inset-0 w-full h-full object-cover object-[78%_20%]"
              />
            </div>

            {/* Subheading Lead 2 (Bold) */}
            <h2 className="text-xs sm:text-base lg:text-[17px] font-black text-[#0F172A] dark:text-white tracking-tight">
              All-in-one legal case management & litigation software for India
            </h2>

            {/* Subheading Paragraph 3 */}
            <p className="text-[11px] sm:text-sm lg:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Track cases across the Supreme Court, High Courts, District Courts and 8,200+ courts and tribunals. Automate cause lists and hearing alerts. Research 3.8 crore+ judgments with AI. Built for Indian advocates, law firms and in-house teams.
            </p>

            {/* 2 Primary Action Buttons: In a single row on phone view as requested */}
            <div className="pt-1.5 sm:pt-2 flex flex-row items-center justify-start gap-2 sm:gap-3.5 w-full">
              <button
                onClick={() => navigate(isAuthenticated ? '/dashboard' : '/signup')}
                className="flex-1 sm:flex-initial px-3 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-b from-[#D4AF37] to-[#B88B2A] hover:brightness-105 active:scale-98 text-[#111111] text-xs sm:text-base font-black rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer group whitespace-nowrap"
              >
                <span>{isAuthenticated ? 'Go to Dashboard' : 'Start Free Trial'}</span>
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setIsDownloadModalOpen(true)}
                className="flex-1 sm:flex-initial px-3 sm:px-7 py-2.5 sm:py-3 bg-white/90 dark:bg-[#0B0F19]/90 hover:bg-slate-100 dark:hover:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white text-xs sm:text-base font-bold rounded-xl shadow-2xs transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer backdrop-blur-sm whitespace-nowrap"
              >
                <Smartphone size={16} className="text-[#B88B2A]" />
                <span>Download App</span>
              </button>
            </div>

            {/* Conversion Trust Badge Microcopy */}
            <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 text-[10px] sm:text-sm font-semibold text-slate-600 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 size={14} /> Free Trial Included
              </span>
              <span>•</span>
              <span>No Credit Card Required</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Instant Setup</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: TRUST / CREDIBILITY STRIP (3 IN A ROW ON MOBILE, 6 ON DESKTOP)
      ========================================================================= */}
      <section className="py-5 sm:py-8 bg-slate-50 dark:bg-[#070A12] border-b border-slate-200/80 dark:border-slate-800/80 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2.5 lg:gap-3 text-center">
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/70 dark:border-slate-800/80 space-y-0.5 shadow-2xs">
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white leading-tight">BNS / BNSS / BSA</div>
            <div className="text-[8px] sm:text-[9.5px] text-slate-500 leading-tight">Native Grounding</div>
          </div>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/70 dark:border-slate-800/80 space-y-0.5 shadow-2xs">
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white leading-tight">SC + High Courts</div>
            <div className="text-[8px] sm:text-[9.5px] text-slate-500 leading-tight">75+ Yrs Case Law</div>
          </div>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/70 dark:border-slate-800/80 space-y-0.5 shadow-2xs">
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white leading-tight">Secure Chamber</div>
            <div className="text-[8px] sm:text-[9.5px] text-slate-500 leading-tight">Data Isolation</div>
          </div>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/70 dark:border-slate-800/80 space-y-0.5 shadow-2xs">
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white leading-tight">Encrypted Files</div>
            <div className="text-[8px] sm:text-[9.5px] text-slate-500 leading-tight">AES-256 at Rest</div>
          </div>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/70 dark:border-slate-800/80 space-y-0.5 shadow-2xs">
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white leading-tight">Advocate AI</div>
            <div className="text-[8px] sm:text-[9.5px] text-slate-500 leading-tight">BCI Adherence</div>
          </div>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/70 dark:border-slate-800/80 space-y-0.5 shadow-2xs">
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white leading-tight">Privacy Vault</div>
            <div className="text-[8px] sm:text-[9.5px] text-slate-500 leading-tight">Zero Training</div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: WHAT WE OFFER — EVERYTHING A LAWYER NEEDS (SCREENSHOT 1)
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#070B14] dark:bg-[#050810] border-b border-slate-800 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#B88B2A]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header — Matching Screenshot 1 */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#E5A93C] dark:text-[#B88B2A]">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2.5 tracking-tight">
              Everything a lawyer needs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              From research to drafting — all in one powerful AI-driven platform built for Indian legal professionals.
            </p>
          </div>

          {/* 6 Cards Grid (3 in a row on all screen sizes) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-5 lg:gap-7">
            
            {/* CARD 1: AI Case Research */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-slate-900 dark:text-white mt-2 sm:mt-4 lg:mt-6 tracking-tight leading-tight">
                  AI Case Research
                </h3>
                <p className="mt-1 sm:mt-2 lg:mt-3 text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed font-normal">
                  Instant semantic search across 3.8 Cr+ Supreme Court and High Court judgments.<span className="hidden sm:inline"> Automatically extract binding ratios, identify bench strength, and verify whether a precedent remains good law.</span>
                </p>
              </div>
            </div>

            {/* CARD 2: AI Document Drafting */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-slate-900 dark:text-white mt-2 sm:mt-4 lg:mt-6 tracking-tight leading-tight">
                  AI Document Drafting
                </h3>
                <p className="mt-1 sm:mt-2 lg:mt-3 text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed font-normal">
                  Draft flawless bail applications under BNSS, Sec 138 notices, affidavits & writs.<span className="hidden sm:inline"> Generates petition-ready legal formats compliant with court rules.</span>
                </p>
              </div>
            </div>

            {/* CARD 3: Indian Legal Database */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#B88B2A] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-slate-900 dark:text-white mt-2 sm:mt-4 lg:mt-6 tracking-tight leading-tight">
                  Indian Legal Database
                </h3>
                <p className="mt-1 sm:mt-2 lg:mt-3 text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed font-normal">
                  Digital repository of Central & State Bare Acts with real-time section cross-referencing.<span className="hidden sm:inline"> Covers new criminal codes (BNS, BNSS, BSA 2024) and previous IPC, CrPC, and Evidence Act.</span>
                </p>
              </div>
            </div>

            {/* CARD 4: Mobile + Web */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-slate-900 dark:text-white mt-2 sm:mt-4 lg:mt-6 tracking-tight leading-tight">
                  Mobile + Web
                </h3>
                <p className="mt-1 sm:mt-2 lg:mt-3 text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed font-normal">
                  Seamlessly work across desktop, courtroom tablet, or mobile phone.<span className="hidden sm:inline"> Sync daily court cause lists, hearing alerts, and client briefs anywhere you go.</span>
                </p>
              </div>
            </div>

            {/* CARD 5: Secure & Private */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-slate-900 dark:text-white mt-2 sm:mt-4 lg:mt-6 tracking-tight leading-tight">
                  Secure & Private
                </h3>
                <p className="mt-1 sm:mt-2 lg:mt-3 text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed font-normal">
                  Complete advocate-client confidentiality secured with 256-bit AES encryption.<span className="hidden sm:inline"> Zero model training on privileged client data.</span>
                </p>
              </div>
            </div>

            {/* CARD 6: Built for India */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center font-black text-[10px] sm:text-xs lg:text-base tracking-wider border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
                  IN
                </div>
                <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-slate-900 dark:text-white mt-2 sm:mt-4 lg:mt-6 tracking-tight leading-tight">
                  Built for India
                </h3>
                <p className="mt-1 sm:mt-2 lg:mt-3 text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed font-normal">
                  Purpose-built for Indian advocates, chambers, and corporate legal teams.<span className="hidden sm:inline"> Grounded in 75+ years of Indian jurisprudence, Bar Council ethics, and official registry cause lists.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: HOW IT WORKS (SCREENSHOT REFERENCE - 3-STEP LEGAL WORKFLOW)
      ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#FFFDF7] dark:bg-[#070A12] border-b border-slate-200/80 dark:border-slate-800 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight mb-8 sm:mb-16 lg:mb-20">
            How It Works
          </h2>

          {/* 3-Step Flow in 1 Single Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 items-start relative">
            
            {/* STEP 1: Login / Sign Up */}
            <div className="flex flex-col items-center text-center relative group">
              {/* Circular Gold Badge with Key Icon */}
              <div className="relative">
                <div className="w-11 h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-[#FBBF24] via-[#F59E0B] to-[#D97706] text-white flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
                  <Key className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[2.2] text-white drop-shadow-xs" />
                </div>
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-[9px] sm:text-xs font-bold flex items-center justify-center shadow">
                  1
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-[#0F172A] dark:text-white mt-2.5 sm:mt-5 lg:mt-6 tracking-tight leading-tight">
                Login / Sign Up
              </h3>
              <p className="text-[9px] sm:text-xs lg:text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-2.5 max-w-xs leading-snug sm:leading-relaxed">
                Create verified account<span className="hidden sm:inline"> in 30 seconds</span> or sign in to chamber workspace.
              </p>

              {/* Arrow to Step 2 (Desktop & Tablet only) */}
              <div className="hidden sm:flex items-center absolute top-8 lg:top-10 -right-4 sm:-right-6 lg:-right-10 text-[#F59E0B] dark:text-[#B88B2A] w-8 sm:w-12 lg:w-20 justify-center pointer-events-none">
                <div className="w-full h-0.5 bg-[#F59E0B]/60 dark:bg-[#B88B2A]/60 relative">
                  <span className="absolute right-0 -top-1 border-t-2 border-r-2 border-[#F59E0B] dark:border-[#B88B2A] w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45" />
                </div>
              </div>
            </div>

            {/* STEP 2: Initialize Case or Select AI Tool */}
            <div className="flex flex-col items-center text-center relative group">
              {/* Circular Gold Badge with Briefcase Icon */}
              <div className="relative">
                <div className="w-11 h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-[#FBBF24] via-[#F59E0B] to-[#D97706] text-white flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
                  <Briefcase className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[2.2] text-white drop-shadow-xs" />
                </div>
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-[9px] sm:text-xs font-bold flex items-center justify-center shadow">
                  2
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-[#0F172A] dark:text-white mt-2.5 sm:mt-5 lg:mt-6 tracking-tight leading-tight">
                Initialize Case or Choose Tool
              </h3>
              <p className="text-[9px] sm:text-xs lg:text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-2.5 max-w-xs leading-snug sm:leading-relaxed">
                Create case docket, upload briefs<span className="hidden sm:inline"> and chargesheets</span>, or select legal AI tools.
              </p>

              {/* Arrow to Step 3 (Desktop & Tablet only) */}
              <div className="hidden sm:flex items-center absolute top-8 lg:top-10 -right-4 sm:-right-6 lg:-right-10 text-[#F59E0B] dark:text-[#B88B2A] w-8 sm:w-12 lg:w-20 justify-center pointer-events-none">
                <div className="w-full h-0.5 bg-[#F59E0B]/60 dark:bg-[#B88B2A]/60 relative">
                  <span className="absolute right-0 -top-1 border-t-2 border-r-2 border-[#F59E0B] dark:border-[#B88B2A] w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45" />
                </div>
              </div>
            </div>

            {/* STEP 3: Start Exploring & Drafting */}
            <div className="flex flex-col items-center text-center relative group">
              {/* Circular Gold Badge with Search Icon */}
              <div className="relative">
                <div className="w-11 h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-[#FBBF24] via-[#F59E0B] to-[#D97706] text-white flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
                  <Search className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[2.2] text-white drop-shadow-xs" />
                </div>
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-[9px] sm:text-xs font-bold flex items-center justify-center shadow">
                  3
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-[#0F172A] dark:text-white mt-2.5 sm:mt-5 lg:mt-6 tracking-tight leading-tight">
                Start Exploring & Drafting
              </h3>
              <p className="text-[9px] sm:text-xs lg:text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-2.5 max-w-xs leading-snug sm:leading-relaxed">
                Draft court-ready BNS petitions, research 3.8 Cr+ precedents<span className="hidden sm:inline">, and track daily court hearings</span>.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: HAPPY CLIENTS — AI MEETS LAW (SCREENSHOT-MATCHED STORE REVIEWS)
      ========================================================================= */}
      <section className="py-10 sm:py-20 lg:py-28 bg-[#FFFDF7] dark:bg-[#070A12] border-b border-slate-200/80 dark:border-slate-800 text-[#0F172A] dark:text-white relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5A93C]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Matching User Reference Screenshot */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#E5A93C] dark:text-[#B88B2A] block mb-1.5 sm:mb-2">
              HAPPY CLIENTS
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight leading-tight sm:leading-tight">
              AI Meets Law — <span className="text-[#E5A93C] dark:text-[#F59E0B]">Trusted by Advocates & Legal Chambers</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              Real experiences from advocates, lawyers, and chambers transforming their practice with AI Legal™.
            </p>
            <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium">
              <span className="hidden sm:inline">Hover to pause • Click to read in full</span>
              <span className="sm:hidden">Tap any review to read full • Auto-scrolling</span>
            </p>
          </div>

        </div>

        {/* Continuous Right-to-Left Floating Marquee Track (Optimized for Mobile & Desktop) */}
        <div className="relative w-full overflow-hidden">
          {/* Marquee Animation Track */}
          <div className="flex gap-3 sm:gap-6 w-max animate-reviews-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] py-2 sm:py-3 px-3 sm:px-4">
            {[...storeReviewsList, ...storeReviewsList].map((rev, idx) => (
              <div
                key={`${rev.id}-${idx}`}
                onClick={() => setSelectedReviewModal(rev)}
                className="w-[220px] sm:w-[310px] lg:w-[330px] h-[285px] sm:h-[380px] lg:h-[395px] shrink-0 bg-white dark:bg-[#0B1120] rounded-[18px] sm:rounded-[26px] p-3 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group text-left select-none"
              >
                {/* Top Row: "Client Testimonial" + Reviewer Badge with Store Tag */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span
                      className="text-lg sm:text-3xl text-[#E5A93C] font-serif italic tracking-wide select-none leading-none"
                      style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
                    >
                      Client
                    </span>
                    <span className="text-xs sm:text-xl font-black text-slate-900 dark:text-white tracking-tight -mt-0.5">
                      Testimonial
                    </span>
                  </div>

                  {/* Circular Monogram & Store Badge */}
                  <div className="relative">
                    <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#0F222D] to-[#1E3646] border-[1.5px] sm:border-2 border-[#E5A93C] flex flex-col items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <span className="text-[10px] sm:text-sm font-black text-[#E5A93C] tracking-wider">
                        {rev.initials || 'AD'}
                      </span>
                      <span className="text-[6px] sm:text-[8px] font-bold text-slate-300 uppercase tracking-tight -mt-0.5">
                        {rev.platform === 'Google Play' ? 'Play' : 'App'}
                      </span>
                    </div>

                    {/* Verified Check Badge */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Dark Speech Bubble (Responsive styling for mobile & desktop) */}
                <div className="bg-[#0F222D] rounded-xl sm:rounded-2xl p-2 sm:p-4 text-white relative flex-1 flex flex-col justify-between mt-1.5 mb-1.5 sm:mt-2.5 sm:mb-3 shadow-md">
                  {/* Top Quote */}
                  <span className="text-lg sm:text-3xl font-black text-[#E5A93C] leading-none block font-serif select-none">
                    “
                  </span>

                  <div>
                    {/* Advocate Name */}
                    <h5 className="text-[11px] sm:text-sm font-black text-[#E5A93C] tracking-tight line-clamp-1">
                      {rev.name}
                    </h5>
                    
                    {/* Designation / Chamber */}
                    <p className="text-[#FDE68A] text-[8.5px] sm:text-[11px] font-semibold mt-0.5 line-clamp-1">
                      {rev.court}
                    </p>

                    {/* Rating Stars & Store Tag */}
                    <div className="flex items-center justify-between mt-1 pt-1 sm:mt-1.5 sm:pt-1.5 border-t border-white/10">
                      <div className="flex items-center gap-0.5 text-[#FBBF24]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 fill-[#FBBF24] text-[#FBBF24]" />
                        ))}
                        <span className="text-[8px] sm:text-[9px] font-bold text-white ml-0.5 sm:ml-1">5.0</span>
                      </div>
                      <span className="text-[7.5px] sm:text-[9px] font-semibold text-slate-300">
                        {rev.date}
                      </span>
                    </div>

                    {/* Review Snippet with line-clamp */}
                    <p className="mt-1 text-[9px] sm:text-xs text-slate-200 leading-relaxed font-normal line-clamp-3">
                      {rev.review}
                    </p>
                  </div>

                  {/* Bottom Quote */}
                  <div className="flex justify-end -mt-0.5 sm:mt-0.5">
                    <span className="text-lg sm:text-3xl font-black text-[#E5A93C] leading-none font-serif select-none">
                      ”
                    </span>
                  </div>

                  {/* Speech Bubble Pointer Tail */}
                  <div className="absolute -bottom-2 sm:-bottom-2.5 left-5 sm:left-6 w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[8px] border-r-transparent border-t-[8px] sm:border-t-[10px] border-t-[#0F222D]" />
                </div>

                {/* Footer URL matching reference */}
                <div className="text-center pt-0.5">
                  <a
                    href="https://ailegal.aisa24.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[8.5px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500 tracking-wide hover:text-[#E5A93C] transition-colors"
                  >
                    www.ailegal.aisa24.com
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global CSS for Smooth Floating Marquee */}
        <style>{`
          @keyframes reviewsMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-reviews-marquee {
            animation: reviewsMarquee 42s linear infinite;
          }
          @media (max-width: 640px) {
            .animate-reviews-marquee {
              animation-duration: 32s;
            }
          }
        `}</style>
      </section>


      {/* =========================================================================
          SECTION: PROPRIETARY LITIGATION CAPABILITIES (WHY CHOOSE US)
      ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#FFFDF9] dark:bg-[#070A12] border-b border-slate-200/80 dark:border-slate-800 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#B88B2A]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Heading — Why Choose Us */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 sm:mb-18">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#E5A93C] dark:text-[#B88B2A] block mb-1.5 sm:mb-2.5">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight leading-tight sm:leading-tight">
              Why Choose <span className="text-[#E5A93C] dark:text-[#F59E0B]">Us</span>
            </h2>
            <p className="mt-2 sm:mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Purpose-built legal AI designed specifically for Indian courts, advocates, and law chambers.
            </p>
          </div>

          {/* 6 Cards Grid (3 in a row across mobile and desktop) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-5 lg:gap-8">
            {whyChooseUsFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-6 lg:p-8 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group relative h-full"
                >
                  {/* Clean Minimalist Centered Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 flex items-center justify-center group-hover:text-[#B88B2A] group-hover:scale-110 group-hover:bg-[#B88B2A]/10 transition-all duration-300 mb-1.5 sm:mb-2">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[1.6]" />
                  </div>

                  {/* Distinct Title */}
                  <h3 className="text-[11px] sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white mt-1.5 sm:mt-3 tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  {/* Distinct Litigation Content */}
                  <p className="mt-1 sm:mt-2.5 text-[9px] sm:text-xs lg:text-[13px] text-slate-600 dark:text-slate-400 leading-snug sm:leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: BUILT FOR EVERYONE IN LAW (CAROUSEL ON MOBILE, 3-COL ON DESKTOP)
      ========================================================================= */}
      <section id="solutions" className="py-12 sm:py-20 lg:py-28 bg-[#FAF8F5] dark:bg-[#070A12] border-b border-slate-200/80 dark:border-slate-800 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Heading — Matching Screenshot */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#F59E0B] block mb-1.5 sm:mb-2.5">
              WHO IT'S FOR
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight leading-tight sm:leading-tight">
              Built for Everyone in Law
            </h2>
            <p className="mt-2 sm:mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you're a practicing advocate, law firm, or law student — AI LEGAL™ works for you.
            </p>
          </div>

          {/* 3 Roles Carousel on Mobile, 3-Cols Grid on Tablet/Desktop */}
          <div
            ref={rolesCarouselRef}
            onScroll={onRoleScroll}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 pt-1 px-4 md:px-0 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto"
          >
            
            {/* ROLE 1: Lawyers & Advocates */}
            <div className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink bg-[#FFFDF5] dark:bg-[#17140B] rounded-2xl sm:rounded-[2rem] p-6 sm:p-7 md:p-8 border border-amber-200/90 dark:border-amber-900/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Icon Illustration */}
                <div className="text-4xl mb-3 sm:mb-4 select-none">
                  👨‍⚖️
                </div>

                {/* Pill Badge */}
                <span className="inline-block text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 px-3 py-1 rounded-full mb-3 sm:mb-4">
                  For legal professionals
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Lawyers & Advocates
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Save hours of case research every day. Focus on building arguments, not finding precedents. Draft petitions, notices, and agreements in minutes.
                </p>

                {/* Checklist */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-amber-200/60 dark:border-amber-900/40 space-y-2 sm:space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Case law research</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Document drafting</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Legal precedent finder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROLE 2: Law Firms & Chambers */}
            <div className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink bg-[#FFFDF5] dark:bg-[#17140B] rounded-2xl sm:rounded-[2rem] p-6 sm:p-7 md:p-8 border border-amber-200/90 dark:border-amber-900/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Icon Illustration */}
                <div className="text-4xl mb-3 sm:mb-4 select-none">
                  🏢
                </div>

                {/* Pill Badge */}
                <span className="inline-block text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 px-3 py-1 rounded-full mb-3 sm:mb-4">
                  For organizations
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Law Firms & Chambers
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Automate routine drafting. Manage contracts and compliance documents at scale with AI-assisted review. Centralize case dockets and team collaboration.
                </p>

                {/* Checklist */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-amber-200/60 dark:border-amber-900/40 space-y-2 sm:space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Contract management</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Compliance docs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Bulk drafting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROLE 3: Law Students */}
            <div className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink bg-[#FFFDF5] dark:bg-[#17140B] rounded-2xl sm:rounded-[2rem] p-6 sm:p-7 md:p-8 border border-amber-200/90 dark:border-amber-900/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Icon Illustration */}
                <div className="text-4xl mb-3 sm:mb-4 select-none">
                  📚
                </div>

                {/* Pill Badge */}
                <span className="inline-block text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 px-3 py-1 rounded-full mb-3 sm:mb-4">
                  For future legal minds
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Law Students
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Ace your studies with AI-powered case summaries and moot court prep. Understand complex judgments instantly with clear ratio decidendi.
                </p>

                {/* Checklist */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-amber-200/60 dark:border-amber-900/40 space-y-2 sm:space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Case summaries</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Moot court prep</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <span className="text-[#F59E0B] font-bold text-sm">✓</span>
                    <span>Bare act explanations</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Carousel Indicators & Navigation Controls */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => scrollToRole(Math.max(0, activeRoleSlide - 1))}
              disabled={activeRoleSlide === 0}
              className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-xs transition-opacity"
              aria-label="Previous role"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToRole(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeRoleSlide === idx
                      ? 'w-6 bg-[#F59E0B]'
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to role slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToRole(Math.min(2, activeRoleSlide + 1))}
              disabled={activeRoleSlide === 2}
              className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-xs transition-opacity"
              aria-label="Next role"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: HAVE A DOUBT? / PUBLIC QUERY FORM (DISPATCHES TO ADMIN@UWO24.COM)
      ========================================================================= */}
      <section className="py-10 sm:py-20 lg:py-28 bg-[#FAF8F5] dark:bg-[#070A12] border-b border-slate-200/80 dark:border-slate-800 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Premium Custom Chamber Visual with Overlay */}
            <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl min-h-[220px] sm:min-h-[360px] lg:min-h-[520px] flex flex-col justify-end p-5 sm:p-7 lg:p-10 group">
              {/* Image background */}
              <img
                src="/assets/legal_query_chamber.jpg"
                alt="AI LEGAL Chamber"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/55 to-transparent" />
              <div className="absolute inset-0 bg-black/25" />

              {/* Text overlay matching screenshot */}
              <div className="relative z-10 space-y-2 sm:space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 backdrop-blur-xs">
                  Direct Support Desk
                </span>
                <h2 className="text-lg sm:text-2xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                  Have a Doubt? We would love to help you !!
                </h2>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 font-medium leading-relaxed">
                  Have questions about BNS/BNSS features, courtroom tools, or chamber licenses? Send your inquiry directly to our legal technology desk.
                </p>
              </div>
            </div>

            {/* Right Column: Query Form */}
            <div className="lg:col-span-7 bg-white dark:bg-[#0F172A] rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              
              <form onSubmit={handleQuerySubmit} className="space-y-3 sm:space-y-5">
                
                {/* Row 1: First Name * & Last Name * (2 columns on mobile & desktop) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      First Name <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={queryFormData.firstName}
                      onChange={(e) => setQueryFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="First Name"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      Last Name <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={queryFormData.lastName}
                      onChange={(e) => setQueryFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Last Name"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email * & Contact No. (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      Email <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={queryFormData.email}
                      onChange={(e) => setQueryFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter Email"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                      Contact No. <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={queryFormData.contactNo}
                      onChange={(e) => setQueryFormData(prev => ({ ...prev, contactNo: e.target.value }))}
                      placeholder="Enter Contact No."
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Pin Code (Optional) & Country * (2 columns on mobile & desktop) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                      Pin Code <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={queryFormData.pinCode}
                      onChange={(e) => setQueryFormData(prev => ({ ...prev, pinCode: e.target.value }))}
                      placeholder="Pin Code"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      Country <span className="text-red-500 font-bold">*</span>
                    </label>
                    <select
                      required
                      value={queryFormData.country}
                      onChange={(e) => setQueryFormData(prev => ({ ...prev, country: e.target.value }))}
                      className="w-full px-2.5 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all cursor-pointer"
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Description (Optional) */}
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                    Description <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={queryFormData.description}
                    onChange={(e) => setQueryFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter Your Message"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-1 sm:pt-2 flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={isSubmittingQuery}
                    className="w-full sm:w-auto px-8 py-3 sm:py-3.5 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-60 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmittingQuery ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Query...</span>
                      </>
                    ) : (
                      <span>Send Query</span>
                    )}
                  </button>
                </div>

                {querySubmitSuccess && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Your query has been sent directly to ai.legal@uwo24.com. Our legal team will reach out soon!</span>
                  </div>
                )}

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: COMPREHENSIVE FOOTER & COMPLIANCE
      ========================================================================= */}
      {/* Reusable Public Footer Matching Reference */}
      <PublicFooter />

      {/* Policy Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
      <CookiePolicyModal isOpen={isCookiePolicyModalOpen} onClose={() => setIsCookiePolicyModalOpen(false)} />
      <DisclaimerModal isOpen={isDisclaimerModalOpen} onClose={() => setIsDisclaimerModalOpen(false)} />
      
      {/* App Download Modal (Google Play & Apple App Store) */}
      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />

      {/* Verified Review Detail Modal */}
      <AnimatePresence>
        {selectedReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl relative text-left"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedReviewModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Reviewer Header */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0F222D] to-[#1E3646] border-2 border-[#E5A93C] text-[#E5A93C] font-black text-base flex flex-col items-center justify-center shadow-md shrink-0">
                  <span className="text-sm font-black text-[#E5A93C]">{selectedReviewModal.initials || 'AD'}</span>
                  <span className="text-[7px] font-bold text-slate-300 uppercase -mt-0.5">
                    {selectedReviewModal.platform === 'Google Play' ? 'Play' : 'App'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white truncate">
                    {selectedReviewModal.name}
                  </h3>
                  <div className="text-xs text-[#E5A93C] font-bold truncate">
                    {selectedReviewModal.court}
                  </div>
                  {selectedReviewModal.courtJurisdiction && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {selectedReviewModal.courtJurisdiction}
                    </div>
                  )}
                </div>
              </div>

              {/* Badges & Rating */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-[#FBBF24]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">5.0</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 size={11} />
                    Verified Reviewer
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {selectedReviewModal.platform} • {selectedReviewModal.version || 'v1.0.12'}
                  </span>
                </div>
              </div>

              {/* Review Title & Full Body */}
              <div className="mt-5 space-y-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  "{selectedReviewModal.title}"
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed max-h-60 overflow-y-auto pr-1">
                  {selectedReviewModal.review}
                </p>
              </div>

              {/* Helpful count & action */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>{selectedReviewModal.helpfulCount || 35} advocates found this helpful</span>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedReviewModal.platform === 'Google Play' ? 'https://play.google.com/store/apps/details?id=com.uwo.ailegal' : 'https://apps.apple.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-1"
                  >
                    <span>{selectedReviewModal.platform === 'Google Play' ? 'Play Store' : 'App Store'}</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => setSelectedReviewModal(null)}
                    className="px-5 py-2 bg-[#E5A93C] text-slate-950 font-bold rounded-xl text-xs hover:brightness-105 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
