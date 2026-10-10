import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  BookOpen, Search, ArrowLeft, ChevronRight, ChevronDown, Bookmark, 
  Share2, Copy, X, AlertTriangle, ExternalLink, 
  Check, RefreshCw, Volume2, Type, Sun, Moon, Coffee, HelpCircle, 
  Scale, GraduationCap, Gavel, FileText, Globe, Languages, RotateCcw, 
  MoreVertical, Trash2, Edit3, StickyNote,
  CheckCircle2, XCircle, SlidersHorizontal, Layers, BookMarked, ShieldCheck,
  FileSignature, Bell, Library, Compass, Clock, CheckSquare, ListOrdered,
  Eye, Award, ArrowUpRight, Filter
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toast } from 'react-hot-toast';

// ─── IMPORT COMPREHENSIVE LEGAL REPOSITORIES & TAXONOMY ───────────────────────
import {
  PRIMARY_CONTENT_TYPES,
  CORE_LEGAL_SUBJECTS,
  CONTENT_TYPE_FILTERS_CONFIG
} from '../../data/legalTaxonomy';

import {
  getSubjectsForJurisdiction,
  getFiltersConfigForJurisdiction,
  JURISDICTION_REGISTRY
} from '../../data/jurisdiction/jurisdictionRegistry';

import {
  LEGAL_ARTICLES_DATABASE,
  RIGHTS_REMEDIES_DATABASE,
  LEGAL_UPDATES_DATABASE,
  getArticlesForJurisdiction,
  getRemediesForJurisdiction,
  getUpdatesForJurisdiction
} from '../../data/legalArticlesAndUpdatesData';

import {
  ALL_LEGAL_BOOKS_DATABASE,
  AVAILABLE_JURISDICTIONS,
  getBooksForJurisdiction,
  searchKnowledgeDatabase,
} from '../../data/legalBooksDatabase';

import { LANDMARK_JUDGMENTS_DATABASE, getJudgmentsForJurisdiction } from '../../data/landmarkJudgmentsData';
import { COURT_PROCEDURES_DATABASE, getProceduresForJurisdiction } from '../../data/courtProceduresData';
import { LEGAL_DRAFTING_DATABASE, getDraftingForJurisdiction } from '../../data/legalDraftingData';
import { LEGAL_DICTIONARY_DATABASE, getDictionaryTermById, getDictionaryForJurisdiction } from '../../data/legalDictionaryData';
import { DEEP_LEGAL_SECTIONS_DATABASE } from '../../data/comprehensiveLegalContent';
import { resolveSectionCompleteness } from '../../data/legalCompletenessResolver';

export default function KnowledgeHubWorkspace() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // ─── WORKFLOW VIEW STATES ──────────────────────────────────────────────────
  // 'BOOKSHELF' | 'TOC' | 'READER' | 'JUDGMENT_VIEW' | 'PROCEDURE_VIEW' | 'DRAFTING_VIEW' | 'DICTIONARY_VIEW'
  const [viewState, setViewState] = useState('BOOKSHELF');

  // Dual Navigation Systems: Content Type + Subject Taxonomy
  const [activeContentType, setActiveContentType] = useState('ALL');
  const [activeSubjectFilter, setActiveSubjectFilter] = useState('ALL');
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [subjectSearchQuery, setSubjectSearchQuery] = useState('');

  // Unified Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);

  // ─── JURISDICTION DETECTION & SELECTION ────────────────────────────────────
  const storedCountry = localStorage.getItem('ai_legal_selected_country') || localStorage.getItem('legal_country') || '';
  const storedCode = localStorage.getItem('legal_country_code') || '';

  const detectedJurisdictionId = useMemo(() => {
    const raw = `${storedCountry} ${storedCode}`.toLowerCase();
    if (raw.includes('nepal') || raw.includes('np')) return 'NP';
    if (raw.includes('united states') || raw.includes('usa') || raw.includes('us')) return 'US';
    if (raw.includes('united kingdom') || raw.includes('uk') || raw.includes('england') || raw.includes('gb')) return 'GB';
    if (raw.includes('global') || raw.includes('international')) return 'GLOBAL';
    return 'IN';
  }, [storedCountry, storedCode]);

  const [activeJurisdiction, setActiveJurisdiction] = useState(detectedJurisdictionId);

  const ACTIVE_DATABASE = useMemo(() => {
    return getBooksForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  // ─── JURISDICTION-ISOLATED LEGAL KNOWLEDGE REPOSITORIES ───────────────────
  const currentJudgmentsDatabase = useMemo(() => {
    return getJudgmentsForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  const currentProceduresDatabase = useMemo(() => {
    return getProceduresForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  const currentDraftsDatabase = useMemo(() => {
    return getDraftingForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  const currentDictionaryDatabase = useMemo(() => {
    return getDictionaryForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  const currentArticlesDatabase = useMemo(() => {
    return getArticlesForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  const currentRemediesDatabase = useMemo(() => {
    return getRemediesForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  const currentUpdatesDatabase = useMemo(() => {
    return getUpdatesForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  const activeSubjects = useMemo(() => {
    return getSubjectsForJurisdiction(activeJurisdiction);
  }, [activeJurisdiction]);

  // Selected Resources for Detailed Views
  const [selectedBook, setSelectedBook] = useState(ACTIVE_DATABASE[0] || ALL_LEGAL_BOOKS_DATABASE[0]);
  const [activeSection, setActiveSection] = useState(
    ACTIVE_DATABASE[0]?.parts[0]?.chapters[0]?.sections[0] || ALL_LEGAL_BOOKS_DATABASE[0]?.parts[0]?.chapters[0]?.sections[0]
  );
  const [activeJudgment, setActiveJudgment] = useState(null);
  const [activeProcedure, setActiveProcedure] = useState(null);
  const [activeDraft, setActiveDraft] = useState(null);
  const [activeDictEntry, setActiveDictEntry] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeRemedy, setActiveRemedy] = useState(null);
  const [activeUpdate, setActiveUpdate] = useState(null);

  // Dynamic deep scholarship resolution: merges activeSection with verified 14-layer scholarship
  const resolvedSection = useMemo(() => {
    if (!activeSection) return null;
    const deepOverride = DEEP_LEGAL_SECTIONS_DATABASE[activeSection.id];
    const base = deepOverride ? { ...activeSection, ...deepOverride } : activeSection;
    return resolveSectionCompleteness(base, { countryCode: activeJurisdiction });
  }, [activeSection, activeJurisdiction]);

  const handleSelectJurisdiction = (id) => {
    setActiveJurisdiction(id);
    setActiveSubjectFilter('ALL');
    setSubjectSearch('');

    // Synchronize to localStorage
    localStorage.setItem('legal_country_code', id);
    if (id === 'NP') localStorage.setItem('legal_country', 'Nepal');
    else if (id === 'IN') localStorage.setItem('legal_country', 'India');
    else if (id === 'US') localStorage.setItem('legal_country', 'United States');
    else if (id === 'GB') localStorage.setItem('legal_country', 'United Kingdom');
    else if (id === 'GLOBAL') localStorage.setItem('legal_country', 'International');

    const newDb = getBooksForJurisdiction(id);
    if (newDb && newDb.length > 0) {
      setSelectedBook(newDb[0]);
      if (newDb[0]?.parts?.[0]?.chapters?.[0]?.sections?.[0]) {
        setActiveSection(newDb[0].parts[0].chapters[0].sections[0]);
      }
    } else {
      setSelectedBook(null);
      setActiveSection(null);
    }

    // Reset detail modal/view states to prevent cross-jurisdiction data pollution
    setActiveJudgment(null);
    setActiveProcedure(null);
    setActiveDraft(null);
    setActiveDictEntry(null);
    setActiveArticle(null);
    setActiveRemedy(null);
    setActiveUpdate(null);

    const target = AVAILABLE_JURISDICTIONS.find((j) => j.id === id);
    if (target) {
      toast.success(`${target.flag} Switched jurisdiction to ${target.name}`);
    }
  };

  // ─── COMPREHENSIVE UNIVERSAL SEARCH (Cross-type: Statutes, Cases, Procedures, Drafts, Dictionary, Articles) ───
  const universalSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q || q.length < 2) return null;

    // 1. Statutes & Sections
    const statuteMatches = searchKnowledgeDatabase(q, ACTIVE_DATABASE).slice(0, 6);

    // 2. Landmark Judgments (Strictly jurisdiction-partitioned)
    const caseMatches = currentJudgmentsDatabase.filter(
      (j) =>
        (j.title || '').toLowerCase().includes(q) ||
        (j.citation || '').toLowerCase().includes(q) ||
        (j.ratioDecidendi || '').toLowerCase().includes(q) ||
        (j.acts || []).some((a) => a.toLowerCase().includes(q))
    ).slice(0, 4);

    // 3. Court Procedures (Strictly jurisdiction-partitioned)
    const procedureMatches = currentProceduresDatabase.filter(
      (p) =>
        (p.title || '').toLowerCase().includes(q) ||
        (p.actReference || '').toLowerCase().includes(q) ||
        (p.overview || '').toLowerCase().includes(q)
    ).slice(0, 3);

    // 4. Legal Drafts (Strictly jurisdiction-partitioned)
    const draftMatches = currentDraftsDatabase.filter(
      (d) =>
        (d.title || '').toLowerCase().includes(q) ||
        (d.actReference || '').toLowerCase().includes(q) ||
        (d.purposeWhenToUse || '').toLowerCase().includes(q)
    ).slice(0, 3);

    // 5. Legal Dictionary & Maxims (Strictly jurisdiction-partitioned)
    const dictMatches = currentDictionaryDatabase.filter(
      (m) =>
        (m.term || '').toLowerCase().includes(q) ||
        (m.literalTranslation || '').toLowerCase().includes(q) ||
        (m.plainMeaning || '').toLowerCase().includes(q)
    ).slice(0, 3);

    // 6. Scholarly Articles & Treatises (Strictly jurisdiction-partitioned)
    const articleMatches = currentArticlesDatabase.filter(
      (a) =>
        (a.title || '').toLowerCase().includes(q) ||
        (a.summary || '').toLowerCase().includes(q) ||
        (a.category || '').toLowerCase().includes(q) ||
        (a.tags || []).some((t) => t.toLowerCase().includes(q))
    ).slice(0, 3);

    const totalCount =
      statuteMatches.length +
      caseMatches.length +
      procedureMatches.length +
      draftMatches.length +
      dictMatches.length +
      articleMatches.length;

    return {
      statuteMatches,
      caseMatches,
      procedureMatches,
      draftMatches,
      dictMatches,
      articleMatches,
      totalCount,
    };
  }, [searchQuery, ACTIVE_DATABASE, currentJudgmentsDatabase, currentProceduresDatabase, currentDraftsDatabase, currentDictionaryDatabase, currentArticlesDatabase]);

  // ─── DYNAMIC SUB-FILTER RESOLUTION & MULTI-DATASET FILTERING ─────────────
  const currentFilterConfig = useMemo(() => {
    const jurConfig = getFiltersConfigForJurisdiction(activeJurisdiction);
    return jurConfig[activeContentType] || jurConfig.ALL || CONTENT_TYPE_FILTERS_CONFIG[activeContentType] || CONTENT_TYPE_FILTERS_CONFIG.ALL;
  }, [activeContentType, activeJurisdiction]);

  const selectedFilterObj = useMemo(() => {
    const cfg = currentFilterConfig;
    return cfg.filters.find((f) => f.id === activeSubjectFilter) || cfg.filters[0] || { id: 'ALL', label: 'All', matchKeywords: [] };
  }, [currentFilterConfig, activeSubjectFilter]);

  const selectedFilterKeywords = useMemo(() => {
    if (selectedFilterObj.id === 'ALL') return [];
    return [
      selectedFilterObj.id.toLowerCase(),
      selectedFilterObj.label.toLowerCase(),
      ...(selectedFilterObj.matchKeywords || []).map((k) => k.toLowerCase())
    ];
  }, [selectedFilterObj]);

  // Top-level Content Type click handler: immediately updates tab and resets sub-filter
  const handleSelectContentType = (typeId) => {
    setActiveContentType(typeId);
    const jurConfig = getFiltersConfigForJurisdiction(activeJurisdiction);
    const targetConfig = jurConfig[typeId] || jurConfig.ALL || CONTENT_TYPE_FILTERS_CONFIG[typeId] || CONTENT_TYPE_FILTERS_CONFIG.ALL;
    setActiveSubjectFilter(targetConfig.defaultFilter || 'ALL');
  };

  // 1. Filtered Statutes / Bare Acts
  const filteredBooks = useMemo(() => {
    if (selectedFilterObj.id === 'ALL') return ACTIVE_DATABASE;
    return ACTIVE_DATABASE.filter((b) => {
      const corpus = `${b.title} ${b.subjectCategory} ${b.description}`.toLowerCase();
      return selectedFilterKeywords.some((kw) => corpus.includes(kw));
    });
  }, [ACTIVE_DATABASE, selectedFilterObj, selectedFilterKeywords]);

  // 2. Filtered Precedents & Judgments (Strictly jurisdiction-partitioned)
  const filteredJudgments = useMemo(() => {
    let list = currentJudgmentsDatabase;
    if (selectedFilterObj.id === 'ALL') {
      // base list
    } else if (selectedFilterObj.id === 'supreme-court' || selectedFilterObj.id === 'supreme-court-nepal') {
      list = list.filter((j) => j.courtId === 'sc' || (j.court || '').toLowerCase().includes('supreme'));
    } else if (selectedFilterObj.id === 'high-courts' || selectedFilterObj.id === 'high-courts-nepal') {
      list = list.filter((j) => (j.court || '').toLowerCase().includes('high') || (j.court || '').toLowerCase().includes('uchha'));
    } else if (selectedFilterObj.id === 'constitution-bench' || selectedFilterObj.id === 'constitutional-bench-sc') {
      list = list.filter((j) => 
        (j.bench || '').toLowerCase().includes('constitution') || 
        (j.bench || '').includes('5') || 
        (j.bench || '').includes('9') || 
        (j.bench || '').includes('13') ||
        (j.court || '').toLowerCase().includes('constitutional')
      );
    } else if (selectedFilterObj.id === 'recent-rulings') {
      list = list.filter((j) => 
        ['2020', '2021', '2022', '2023', '2024', '2025', '2026'].some((yr) => (j.year || '').includes(yr) || (j.date || '').includes(yr))
      );
    } else {
      list = list.filter((j) => {
        const corpus = `${j.title} ${j.ratioDecidendi || ''} ${(j.acts || []).join(' ')} ${(j.subjects || []).join(' ')} ${(j.subjectTags || []).join(' ')} ${j.citation || ''}`.toLowerCase();
        return selectedFilterKeywords.some((kw) => corpus.includes(kw));
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((j) =>
        (j.title || '').toLowerCase().includes(q) ||
        (j.citation || '').toLowerCase().includes(q) ||
        (j.ratioDecidendi || '').toLowerCase().includes(q) ||
        (j.acts || []).some((a) => a.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentJudgmentsDatabase, selectedFilterObj, selectedFilterKeywords, searchQuery]);

  // 3. Filtered Procedures (Strictly jurisdiction-partitioned)
  const filteredProcedures = useMemo(() => {
    let list = currentProceduresDatabase;
    if (selectedFilterObj.id !== 'ALL') {
      const targetId = (selectedFilterObj.id || '').toLowerCase();
      const targetLabel = (selectedFilterObj.label || '').toLowerCase();
      const targetShortLabel = (selectedFilterObj.shortLabel || '').toLowerCase();
      const activeFilter = (activeSubjectFilter || '').toLowerCase();

      // First check for direct category or tag match
      const directMatches = list.filter((p) => {
        const cat = (p.category || '').toLowerCase();
        if (cat && (cat === targetLabel || cat === targetShortLabel || cat === activeFilter || cat === targetId)) {
          return true;
        }
        if (p.tags && (p.tags.includes(selectedFilterObj.id) || p.tags.includes(activeSubjectFilter))) {
          return true;
        }
        return false;
      });

      if (directMatches.length > 0) {
        list = directMatches;
      } else {
        list = list.filter((p) => {
          const corpus = `${p.id} ${p.title} ${p.category} ${p.actReference} ${p.courtForum} ${p.overview} ${(p.tags || []).join(' ')}`.toLowerCase();
          return selectedFilterKeywords.some((kw) => corpus.includes(kw));
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) =>
        (p.title || '').toLowerCase().includes(q) ||
        (p.actReference || '').toLowerCase().includes(q) ||
        (p.overview || '').toLowerCase().includes(q)
      );
    }
    return list;
  }, [currentProceduresDatabase, selectedFilterObj, selectedFilterKeywords, activeSubjectFilter, searchQuery]);

  // 4. Filtered Drafting Templates (Strictly jurisdiction-partitioned)
  const filteredDrafts = useMemo(() => {
    let list = currentDraftsDatabase;
    if (selectedFilterObj.id !== 'ALL') {
      const targetId = (selectedFilterObj.id || '').toLowerCase();
      const targetLabel = (selectedFilterObj.label || '').toLowerCase();
      const targetShortLabel = (selectedFilterObj.shortLabel || '').toLowerCase();
      const activeFilter = (activeSubjectFilter || '').toLowerCase();

      list = list.filter((d) => {
        const cat = (d.category || '').toLowerCase();
        if (cat && (cat === targetLabel || cat === targetShortLabel || cat === activeFilter || cat === targetId)) {
          return true;
        }
        if (d.tags && (d.tags.includes(selectedFilterObj.id) || d.tags.includes(activeSubjectFilter))) {
          return true;
        }
        const corpus = `${d.id} ${d.title} ${d.category} ${d.actReference} ${d.courtForum} ${d.purposeWhenToUse} ${(d.tags || []).join(' ')}`.toLowerCase();
        return selectedFilterKeywords.some((kw) => corpus.includes(kw));
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((d) => 
        (d.title || '').toLowerCase().includes(q) ||
        (d.actReference || '').toLowerCase().includes(q) ||
        (d.purposeWhenToUse || '').toLowerCase().includes(q) ||
        (d.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }, [currentDraftsDatabase, selectedFilterObj, selectedFilterKeywords, activeSubjectFilter, searchQuery]);

  // 5. Filtered Legal Dictionary & Maxims (Strictly jurisdiction-partitioned)
  const filteredDictionary = useMemo(() => {
    let list = currentDictionaryDatabase;
    if (selectedFilterObj.id !== 'ALL') {
      const targetId = (selectedFilterObj.id || '').toLowerCase();
      const targetLabel = (selectedFilterObj.label || '').toLowerCase();
      const targetShortLabel = (selectedFilterObj.shortLabel || '').toLowerCase();
      const activeFilter = (activeSubjectFilter || '').toLowerCase();

      // Check direct matches first (by category, subcategory, or specific tags)
      const directMatches = list.filter((m) => {
        const cat = (m.category || '').toLowerCase();
        const sub = (m.subcategory || '').toLowerCase();
        if (cat && (cat === targetLabel || cat === targetShortLabel || cat === activeFilter || cat === targetId)) {
          return true;
        }
        if (m.tags && (m.tags.includes(selectedFilterObj.id) || m.tags.includes(activeSubjectFilter) || m.tags.includes(targetId))) {
          return true;
        }
        if (sub && (sub.includes(targetId) || sub.includes(activeFilter))) {
          return true;
        }
        return false;
      });

      if (directMatches.length > 0) {
        list = directMatches;
      } else {
        list = list.filter((m) => {
          const corpus = `${m.id} ${m.term} ${m.category} ${m.subcategory || ''} ${m.literalTranslation || ''} ${m.plainMeaning || ''} ${m.conciseDefinition || ''} ${m.detailedLegalMeaning || ''} ${(m.tags || []).join(' ')}`.toLowerCase();
          return selectedFilterKeywords.some((kw) => corpus.includes(kw));
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((m) =>
        (m.term || '').toLowerCase().includes(q) ||
        (m.plainMeaning || '').toLowerCase().includes(q) ||
        (m.conciseDefinition || '').toLowerCase().includes(q) ||
        (m.detailedLegalMeaning || '').toLowerCase().includes(q) ||
        (m.hindiExplanation || '').toLowerCase().includes(q) ||
        (m.literalTranslation || '').toLowerCase().includes(q) ||
        (m.judicialInterpretation || '').toLowerCase().includes(q) ||
        (m.alternativeSpellings || []).some((s) => s.toLowerCase().includes(q)) ||
        (m.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentDictionaryDatabase, selectedFilterObj, selectedFilterKeywords, activeSubjectFilter, searchQuery]);

  // 6. Filtered Legal Articles & Treatises (Strictly jurisdiction-partitioned)
  const filteredArticles = useMemo(() => {
    let list = currentArticlesDatabase;
    if (selectedFilterObj.id !== 'ALL') {
      const targetId = (selectedFilterObj.id || '').toLowerCase();
      const targetLabel = (selectedFilterObj.label || '').toLowerCase();
      const targetShortLabel = (selectedFilterObj.shortLabel || '').toLowerCase();
      const activeFilter = (activeSubjectFilter || '').toLowerCase();

      list = list.filter((a) => {
        const cat = (a.category || '').toLowerCase();
        if (cat && (cat === targetLabel || cat === targetShortLabel || cat === activeFilter || cat === targetId)) {
          return true;
        }
        if (a.tags && (a.tags.includes(selectedFilterObj.id) || a.tags.includes(activeSubjectFilter))) {
          return true;
        }
        const corpus = `${a.id} ${a.title} ${a.category} ${a.summary} ${(a.tags || []).join(' ')} ${(a.keyStatutes || []).join(' ')}`.toLowerCase();
        return selectedFilterKeywords.some((kw) => corpus.includes(kw));
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((a) =>
        (a.title || '').toLowerCase().includes(q) ||
        (a.summary || '').toLowerCase().includes(q) ||
        (a.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentArticlesDatabase, selectedFilterObj, selectedFilterKeywords, activeSubjectFilter, searchQuery]);

  // 7. Filtered Rights & Remedies (Strictly jurisdiction-partitioned)
  const filteredRemedies = useMemo(() => {
    let list = currentRemediesDatabase;
    if (selectedFilterObj.id !== 'ALL') {
      const targetId = (selectedFilterObj.id || '').toLowerCase();
      const targetLabel = (selectedFilterObj.label || '').toLowerCase();
      const targetShortLabel = (selectedFilterObj.shortLabel || '').toLowerCase();
      const activeFilter = (activeSubjectFilter || '').toLowerCase();

      // First check for direct category or tag match
      const directMatches = list.filter((r) => {
        const cat = (r.category || '').toLowerCase();
        if (cat && (cat === targetLabel || cat === targetShortLabel || cat === activeFilter || cat === targetId)) {
          return true;
        }
        if (r.tags && (r.tags.includes(selectedFilterObj.id) || r.tags.includes(activeSubjectFilter))) {
          return true;
        }
        return false;
      });

      if (directMatches.length > 0) {
        list = directMatches;
      } else {
        list = list.filter((r) => {
          const corpus = `${r.id} ${r.title} ${r.category} ${r.remedyType} ${r.forum} ${r.summary} ${r.whenToUse} ${(r.tags || []).join(' ')}`.toLowerCase();
          return selectedFilterKeywords.some((kw) => corpus.includes(kw));
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((r) =>
        (r.title || '').toLowerCase().includes(q) ||
        (r.summary || '').toLowerCase().includes(q) ||
        (r.remedyType || '').toLowerCase().includes(q) ||
        (r.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentRemediesDatabase, selectedFilterObj, selectedFilterKeywords, activeSubjectFilter, searchQuery]);

  // 8. Filtered Legal Updates (Strictly jurisdiction-partitioned)
  const filteredUpdates = useMemo(() => {
    let list = currentUpdatesDatabase;
    if (selectedFilterObj.id !== 'ALL') {
      const targetId = (selectedFilterObj.id || '').toLowerCase();
      const targetLabel = (selectedFilterObj.label || '').toLowerCase();
      const targetShortLabel = (selectedFilterObj.shortLabel || '').toLowerCase();
      const activeFilter = (activeSubjectFilter || '').toLowerCase();

      // Check direct category or tag match first to avoid keyword leakage
      const directMatches = list.filter((u) => {
        const cat = (u.category || '').toLowerCase();
        if (cat && (cat === targetLabel || cat === targetShortLabel || cat === activeFilter || cat === targetId)) {
          return true;
        }
        if (u.tags && (u.tags.includes(selectedFilterObj.id) || u.tags.includes(activeSubjectFilter))) {
          return true;
        }
        return false;
      });

      if (directMatches.length > 0) {
        list = directMatches;
      } else {
        list = list.filter((u) => {
          const corpus = `${u.id} ${u.title} ${u.category} ${u.authority} ${u.summary} ${(u.tags || []).join(' ')}`.toLowerCase();
          return selectedFilterKeywords.some((kw) => corpus.includes(kw));
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((u) =>
        (u.title || '').toLowerCase().includes(q) ||
        (u.summary || '').toLowerCase().includes(q) ||
        (u.authority || '').toLowerCase().includes(q) ||
        (u.officialIdentity?.documentNumber || '').toLowerCase().includes(q) ||
        (u.legalStatus || '').toLowerCase().includes(q) ||
        (u.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentUpdatesDatabase, selectedFilterObj, selectedFilterKeywords, activeSubjectFilter, searchQuery]);



  // ─── COMPACT DROPDOWN NAVIGATION STATE ────────────────────────────────────
  const currentContentType = useMemo(() => {
    return PRIMARY_CONTENT_TYPES.find((ct) => ct.id === activeContentType) || PRIMARY_CONTENT_TYPES[0];
  }, [activeContentType]);

  const currentJurisdiction = useMemo(() => {
    return AVAILABLE_JURISDICTIONS.find((j) => j.id === activeJurisdiction) || AVAILABLE_JURISDICTIONS[0];
  }, [activeJurisdiction]);

  const [isContentTypeOpen, setIsContentTypeOpen] = useState(false);
  const [contentTypeSearch, setContentTypeSearch] = useState('');
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [subjectSearch, setSubjectSearch] = useState('');
  const [isJurisdictionOpen, setIsJurisdictionOpen] = useState(false);

  const contentTypeRef = useRef(null);
  const subjectRef = useRef(null);
  const jurisdictionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentTypeRef.current && !contentTypeRef.current.contains(e.target)) {
        setIsContentTypeOpen(false);
      }
      if (subjectRef.current && !subjectRef.current.contains(e.target)) {
        setIsSubjectOpen(false);
      }
      if (jurisdictionRef.current && !jurisdictionRef.current.contains(e.target)) {
        setIsJurisdictionOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsContentTypeOpen(false);
        setIsSubjectOpen(false);
        setIsJurisdictionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const filteredContentTypes = useMemo(() => {
    if (!contentTypeSearch.trim()) return PRIMARY_CONTENT_TYPES;
    const q = contentTypeSearch.toLowerCase();
    return PRIMARY_CONTENT_TYPES.filter((ct) => 
      ct.shortName.toLowerCase().includes(q) || 
      ct.name.toLowerCase().includes(q) ||
      (ct.description && ct.description.toLowerCase().includes(q))
    );
  }, [contentTypeSearch]);

  const filteredSubjectOptions = useMemo(() => {
    const filters = currentFilterConfig.filters || [];
    if (!subjectSearch.trim()) return filters;
    const q = subjectSearch.toLowerCase();
    return filters.filter((f) => 
      f.label.toLowerCase().includes(q) || 
      (f.shortLabel && f.shortLabel.toLowerCase().includes(q)) ||
      (f.matchKeywords && f.matchKeywords.some((kw) => kw.toLowerCase().includes(q)))
    );
  }, [currentFilterConfig, subjectSearch]);

  const activeResourceCount = useMemo(() => {
    switch (activeContentType) {
      case 'BARE_ACTS': return `${filteredBooks.length} Acts`;
      case 'CASE_LAWS': return `${filteredJudgments.length} Judgments`;
      case 'ARTICLES': return `${filteredArticles.length} Treatises`;
      case 'PROCEDURES': return `${filteredProcedures.length} Procedures`;
      case 'DRAFTING': return `${filteredDrafts.length} Templates`;
      case 'RIGHTS_REMEDIES': return `${filteredRemedies.length} Remedies`;
      case 'LEGAL_UPDATES': return `${filteredUpdates.length} Updates`;
      case 'DICTIONARY': return `${filteredDictionary.length} Terms`;
      default:
        return `${filteredBooks.length + filteredJudgments.length + filteredProcedures.length + filteredDrafts.length} Resources`;
    }
  }, [
    activeContentType, filteredBooks.length, filteredJudgments.length, 
    filteredProcedures.length, filteredDrafts.length, filteredDictionary.length, 
    filteredArticles.length, filteredRemedies.length, filteredUpdates.length
  ]);

  const hasActiveFilters = 
    activeContentType !== 'ALL' || 
    activeSubjectFilter !== 'ALL' || 
    activeJurisdiction !== detectedJurisdictionId || 
    Boolean(searchQuery.trim());

  // ─── READER CONTROLS (Brand-aligned Luxury Legal Palette) ──────────────────
  const [readingTheme, setReadingTheme] = useState('sepia'); // 'light' | 'dark' | 'sepia'
  const readerTheme = readingTheme;
  const setReaderTheme = setReadingTheme;
  const [fontSize, setFontSize] = useState(15);
  const [fontFamily, setFontFamily] = useState('serif'); // 'serif' | 'system' | 'monospace'
  
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('legal_hub_bookmarks')) || ['consti-preamble', 'consti-article-21'];
    } catch {
      return ['consti-preamble', 'consti-article-21'];
    }
  });

  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('legal_hub_margin_notes')) || {
        'consti-preamble': 'Basic Structure cornerstone per Kesavananda (1973) & Bommai (1994).',
        'consti-article-21': 'Puttaswamy 9-judge bench made privacy fundamental under Art. 21.'
      };
    } catch {
      return {
        'consti-preamble': 'Basic Structure cornerstone per Kesavananda (1973) & Bommai (1994).'
      };
    }
  });

  const [lastReadSession, setLastReadSession] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('legal_hub_last_read')) || {
        type: 'section',
        title: 'Preamble: Sovereign, Socialist, Secular, Democratic Republic',
        actTitle: 'Constitutional Law of India',
        num: 'Preamble',
        id: 'consti-preamble',
        bookId: 'consti',
        readTime: '6 min',
        progress: '100%'
      };
    } catch {
      return null;
    }
  });

  const [activeNoteText, setActiveNoteText] = useState('');
  const [isNoteInputOpen, setIsNoteInputOpen] = useState(false);

  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [revealedQuizAnswers, setRevealedQuizAnswers] = useState({});

  const handleSelectQuizOption = (qIdx, option) => {
    if (!resolvedSection) return;
    const key = `${resolvedSection.id}-q-${qIdx}`;
    setSelectedQuizAnswers((prev) => ({ ...prev, [key]: option }));
    setRevealedQuizAnswers((prev) => ({ ...prev, [key]: true }));
  };

  const toggleBookmark = (id) => {
    let updated;
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
      toast('Bookmark Removed', { icon: '📑' });
    } else {
      updated = [...bookmarks, id];
      toast.success('Section Bookmarked!');
    }
    setBookmarks(updated);
    try {
      localStorage.setItem('legal_hub_bookmarks', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleSaveNote = () => {
    if (resolvedSection) {
      const updated = { ...notes, [resolvedSection.id]: activeNoteText };
      setNotes(updated);
      try {
        localStorage.setItem('legal_hub_margin_notes', JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      setIsNoteInputOpen(false);
      toast.success('Sticky Margin Note saved!');
    }
  };

  // TOC Navigation Expandable Parts
  const [expandedTocs, setExpandedTocs] = useState({});

  const toggleTocChapter = (key) => {
    setExpandedTocs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Direct Search Routing / Submit Handler
  const handleSearchSubmit = (override) => {
    const q = (override || searchQuery).trim();
    if (!q) return;
    const res = universalSearchResults;

    if (res && res.statuteMatches?.length > 0) {
      const topMatch = res.statuteMatches[0];
      handleSectionSelect(topMatch.section, topMatch.book);
      setSearchQuery('');
      setIsSearchFocused(false);
      toast.success(`Opened ${topMatch.section.num}: ${topMatch.section.title}`);
    } else if (res && res.caseMatches?.length > 0) {
      handleOpenJudgment(res.caseMatches[0]);
      setSearchQuery('');
      setIsSearchFocused(false);
    } else if (res && res.procedureMatches?.length > 0) {
      handleOpenProcedure(res.procedureMatches[0]);
      setSearchQuery('');
      setIsSearchFocused(false);
    } else {
      toast(`No direct match found for "${q}". Try searching specific section numbers (e.g. BNS 101, Art 21) or legal keywords.`, { icon: '🔍' });
      setIsSearchFocused(false);
    }
  };

  // Read URL query parameter on initial load
  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam) {
      setSearchQuery(qParam);
    }
  }, [searchParams]);

  // Open Handlers for Distinct Content Types
  const handleBookTap = (book) => {
    setSelectedBook(book);
    if (book.parts?.[0]?.title) {
      setExpandedTocs({ [book.parts[0].title]: true });
    }
    setViewState('TOC');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionSelect = (section, bookOverride) => {
    if (bookOverride) setSelectedBook(bookOverride);
    setActiveSection(section);
    setViewState('READER');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Persist continue reading session
    const lastSession = {
      type: 'section',
      title: section.title,
      actTitle: section.actTitle || bookOverride?.title || selectedBook.title,
      num: section.num,
      id: section.id,
      bookId: bookOverride?.id || selectedBook.id,
      readTime: section.readTime || '5 min',
      progress: '100%'
    };
    setLastReadSession(lastSession);
    try {
      localStorage.setItem('legal_hub_last_read', JSON.stringify(lastSession));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleOpenJudgment = (judgment) => {
    setActiveJudgment(judgment);
    setViewState('JUDGMENT_VIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProcedure = (procedure) => {
    setActiveProcedure(procedure);
    setViewState('PROCEDURE_VIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDraft = (draft) => {
    setActiveDraft(draft);
    setViewState('DRAFTING_VIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDictEntry = (entry) => {
    setActiveDictEntry(entry);
    setViewState('DICTIONARY_VIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArticle = (article) => {
    setActiveArticle(article);
    setViewState('ARTICLE_VIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRemedy = (remedy) => {
    setActiveRemedy(remedy);
    setViewState('REMEDY_VIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenUpdate = (update) => {
    setActiveUpdate(update);
    setViewState('UPDATE_VIEW');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  // Reader Themes Colors (AI LEGAL™ Soft Gold & Classic Parchment System)
  const readerThemeColors = useMemo(() => {
    switch (readingTheme) {
      case 'dark':
        return {
          bg: '#0F121C',
          surface: '#161B26',
          surfaceVariant: '#1D2433',
          text: '#F1F5F9',
          textSecondary: '#94A3B8',
          border: '#273142',
          accent: '#C8A34D',
          statutoryBg: 'rgba(200, 163, 77, 0.08)',
        };
      case 'sepia':
        return {
          bg: '#EDE5D0',
          surface: '#F4ECD8',
          surfaceVariant: '#EADFC9',
          text: '#453123',
          textSecondary: '#785A46',
          border: '#DFD4BE',
          accent: '#B88B2A',
          statutoryBg: 'rgba(184, 139, 42, 0.09)',
        };
      default: // light
        return {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          surfaceVariant: '#F1F5F9',
          text: '#0F172A',
          textSecondary: '#475569',
          border: '#E2E8F0',
          accent: '#B88B2A',
          statutoryBg: 'rgba(184, 139, 42, 0.06)',
        };
    }
  }, [readingTheme]);

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-zinc-100 overflow-hidden font-sans select-none">
      
      {/* ══════════════════════════════════════════════════════════════════
          1. TOP NAVIGATION HEADER (Branded, Universal Legal Search & Tools)
         ══════════════════════════════════════════════════════════════════ */}
      <header className="h-13 sm:h-14 border-b border-slate-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-[#111622]/95 backdrop-blur-md px-3 sm:px-5 flex items-center justify-between shrink-0 z-30 shadow-xs">
        
        {/* Left: Branding & Back Navigation */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              if (viewState === 'READER') setViewState('TOC');
              else if (viewState === 'TOC') setViewState('BOOKSHELF');
              else if (['JUDGMENT_VIEW', 'PROCEDURE_VIEW', 'DRAFTING_VIEW', 'DICTIONARY_VIEW', 'ARTICLE_VIEW', 'REMEDY_VIEW', 'UPDATE_VIEW'].includes(viewState)) {
                setViewState('BOOKSHELF');
              } else {
                navigate('/dashboard');
              }
            }}
            className="p-1.5 text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-xl transition-colors cursor-pointer"
            title="Go Back"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setViewState('BOOKSHELF')}>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B88B2A] text-[#111111] flex items-center justify-center font-black shadow-xs shrink-0">
              <Scale size={15} />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-black text-slate-900 dark:text-zinc-100 tracking-tight">
                AI LEGAL<span className="text-[10px] text-[#B88B2A] font-extrabold">™</span>
              </span>
              <span className="text-xs text-slate-400 dark:text-zinc-500 font-light hidden sm:inline">|</span>
              <span className="text-xs font-bold text-slate-600 dark:text-zinc-300 hidden sm:inline">Knowledge Hub</span>
            </div>
          </div>
        </div>

        {/* Center: Universal Legal Search Bar */}
        <div className="relative flex-1 max-w-md mx-3 hidden md:block">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-[#B88B2A] absolute left-3 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={
                activeJurisdiction === 'NP'
                  ? "Search Constitution of Nepal, Muluki Code, Jaheri, NLR..."
                  : activeJurisdiction === 'US'
                  ? "Search US Constitution, Title 18, UCC, SCOTUS Precedents..."
                  : activeJurisdiction === 'GB'
                  ? "Search UK Acts, PACE 1984, Human Rights Act, Common Law..."
                  : activeJurisdiction === 'GLOBAL'
                  ? "Search UN Treaties, ICJ Rulings, Geneva Conventions, Arbitration..."
                  : "Search Article 21, BNS 101, Landmark Cases, Bail..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearchSubmit();
              }}
              className="w-full pl-8.5 pr-8 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-900/90 border border-slate-200/90 dark:border-zinc-800 text-xs font-semibold focus:outline-none focus:border-[#B88B2A] text-slate-900 dark:text-white transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Categorized Universal Search Results Overlay */}
          {searchQuery.trim().length > 0 && isSearchFocused && (
            <div className="absolute left-0 right-0 top-11 bg-white dark:bg-[#111622] border border-slate-200 dark:border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-[75vh] flex flex-col animate-in fade-in">
              <div className="p-3 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between bg-slate-50 dark:bg-zinc-900/50">
                <span className="text-[11px] font-bold text-slate-600 dark:text-zinc-300">
                  {universalSearchResults?.totalCount > 0 
                    ? `Found ${universalSearchResults.totalCount} verified legal resources across categories` 
                    : 'No direct local match — Instant AI research available'}
                </span>
                <button 
                  onClick={() => setIsSearchFocused(false)} 
                  className="text-xs text-[#B88B2A] font-bold hover:underline cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div className="overflow-y-auto divide-y divide-slate-100 dark:divide-zinc-800/80 max-h-[60vh] p-2 space-y-2">
                
                {/* 1. Landmark Judgments matches */}
                {universalSearchResults?.caseMatches?.length > 0 && (
                  <div className="space-y-1">
                    <div className="px-2 pt-1 text-[10px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Gavel size={12} />
                      <span>Landmark Precedents & Judgments</span>
                    </div>
                    {universalSearchResults.caseMatches.map((j) => (
                      <div
                        key={j.id}
                        onClick={() => {
                          handleOpenJudgment(j);
                          setSearchQuery('');
                          setIsSearchFocused(false);
                        }}
                        className="p-2.5 rounded-xl hover:bg-amber-500/10 cursor-pointer transition-colors space-y-1 border border-transparent hover:border-amber-500/20"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black text-slate-900 dark:text-zinc-100">{j.title}</h4>
                          <span className="text-[10px] font-bold text-slate-400">{j.year} • {j.court}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1">{j.ratioDecidendi}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. Statutory provisions matches */}
                {universalSearchResults?.statuteMatches?.length > 0 && (
                  <div className="space-y-1">
                    <div className="px-2 pt-1 text-[10px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <BookOpen size={12} />
                      <span>Bare Acts & Statutory Sections</span>
                    </div>
                    {universalSearchResults.statuteMatches.map((item, idx) => (
                      <div
                        key={`${item.book.id}-${item.section.id}-${idx}`}
                        onClick={() => {
                          handleSectionSelect(item.section, item.book);
                          setSearchQuery('');
                          setIsSearchFocused(false);
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800/70 cursor-pointer transition-colors space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#B88B2A]/15 text-[#B88B2A]">
                            {item.book.title}
                          </span>
                          <span className="text-[10px] text-slate-400">{item.section.readTime}</span>
                        </div>
                        <h4 className="text-xs font-black text-slate-900 dark:text-zinc-100">
                          {item.section.num} - {item.section.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1">
                          {item.section.plainEnglish || item.section.originalBareAct}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Procedures & Practice matches */}
                {universalSearchResults?.procedureMatches?.length > 0 && (
                  <div className="space-y-1">
                    <div className="px-2 pt-1 text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Scale size={12} />
                      <span>Court Procedures & Practice Guides</span>
                    </div>
                    {universalSearchResults.procedureMatches.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          handleOpenProcedure(p);
                          setSearchQuery('');
                          setIsSearchFocused(false);
                        }}
                        className="p-2.5 rounded-xl hover:bg-emerald-500/10 cursor-pointer transition-colors space-y-1 border border-transparent hover:border-emerald-500/20"
                      >
                        <h4 className="text-xs font-black text-slate-900 dark:text-zinc-100">{p.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1">{p.overview}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. Drafting Library matches */}
                {universalSearchResults?.draftMatches?.length > 0 && (
                  <div className="space-y-1">
                    <div className="px-2 pt-1 text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                      <FileSignature size={12} />
                      <span>Pleadings & Legal Drafting Library</span>
                    </div>
                    {universalSearchResults.draftMatches.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => {
                          handleOpenDraft(d);
                          setSearchQuery('');
                          setIsSearchFocused(false);
                        }}
                        className="p-2.5 rounded-xl hover:bg-purple-500/10 cursor-pointer transition-colors space-y-1 border border-transparent hover:border-purple-500/20"
                      >
                        <h4 className="text-xs font-black text-slate-900 dark:text-zinc-100">{d.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1">{d.purposeWhenToUse}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. Legal Dictionary matches */}
                {universalSearchResults?.dictMatches?.length > 0 && (
                  <div className="space-y-1">
                    <div className="px-2 pt-1 text-[10px] font-black uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                      <Library size={12} />
                      <span>Legal Dictionary & Latin Maxims</span>
                    </div>
                    {universalSearchResults.dictMatches.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => {
                          handleOpenDictEntry(m);
                          setSearchQuery('');
                          setIsSearchFocused(false);
                        }}
                        className="p-2.5 rounded-xl hover:bg-sky-500/10 cursor-pointer transition-colors space-y-1 border border-transparent hover:border-sky-500/20"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black text-slate-900 dark:text-zinc-100">{m.term}</h4>
                          <span className="text-[10px] text-slate-400">{m.literalTranslation}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1">{m.plainMeaning}</p>
                      </div>
                    ))}
                  </div>
                )}



              </div>
            </div>
          )}
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2.5">
          {/* Saved Bookmarks Shortcut */}
          <button
            onClick={() => {
              if (bookmarks.length > 0) {
                // Open first bookmarked section
                const targetId = bookmarks[0];
                const deepFound = DEEP_LEGAL_SECTIONS_DATABASE[targetId];
                if (deepFound) {
                  setActiveSection(deepFound);
                  setViewState('READER');
                  toast.success(`Opened saved bookmark: ${deepFound.num}`);
                } else {
                  toast(`You have ${bookmarks.length} bookmarked sections in your library.`, { icon: '📑' });
                }
              } else {
                toast('No saved bookmarks yet. Bookmark any section while reading!', { icon: '📑' });
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:border-[#B88B2A] transition-all cursor-pointer"
            title="Saved Bookmarks"
          >
            <Bookmark size={14} className="text-[#B88B2A]" />
            <span className="hidden sm:inline">Bookmarks</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#B88B2A]/20 text-[#B88B2A] font-extrabold">
              {bookmarks.length}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile search bar */}
      <div className="md:hidden p-3 bg-white dark:bg-[#111622] border-b border-slate-200 dark:border-zinc-800">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-[#B88B2A] absolute left-3 pointer-events-none" />
          <input
            type="text"
            placeholder={
              activeJurisdiction === 'NP'
                ? "Search Constitution of Nepal, Muluki Code, Jaheri..."
                : "Search Bare Acts, Judgments, Procedures..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchSubmit();
            }}
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-semibold focus:outline-none focus:border-[#B88B2A] text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          2. COMPACT DROPDOWN NAVIGATION BAR
          (Content Type Dropdown + Legal Subject Dropdown + Jurisdiction Dropdown)
         ══════════════════════════════════════════════════════════════════ */}
      {viewState === 'BOOKSHELF' && (
        <div className="bg-white dark:bg-[#111622] border-b border-slate-200/80 dark:border-zinc-800/80 px-3 sm:px-6 py-2 shrink-0 z-20 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            
            {/* Left: The Three Compact Dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* DROPDOWN A: CONTENT TYPE */}
              <div className="relative" ref={contentTypeRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsContentTypeOpen(!isContentTypeOpen);
                    setIsSubjectOpen(false);
                    setIsJurisdictionOpen(false);
                  }}
                  className={`h-9 px-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                    isContentTypeOpen 
                      ? 'border-[#B88B2A] ring-1 ring-[#B88B2A] bg-white dark:bg-zinc-900' 
                      : 'border-slate-200/90 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/80 hover:border-[#B88B2A]'
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isContentTypeOpen}
                >
                  <Layers size={13} className="text-[#B88B2A] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500">Content:</span>
                  <span className="font-extrabold text-slate-900 dark:text-white truncate max-w-[120px] sm:max-w-[160px]">
                    {currentContentType.shortName}
                  </span>
                  <ChevronDown size={13} className={`text-slate-400 transition-transform ${isContentTypeOpen ? 'rotate-180 text-[#B88B2A]' : ''}`} />
                </button>

                {isContentTypeOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-72 sm:w-80 bg-white dark:bg-[#111622] rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95">
                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Filter content types..."
                        value={contentTypeSearch}
                        onChange={(e) => setContentTypeSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-semibold focus:outline-none focus:border-[#B88B2A] text-slate-900 dark:text-white"
                        autoFocus
                      />
                    </div>

                    <div className="max-h-64 overflow-y-auto custom-scrollbar space-y-0.5">
                      {filteredContentTypes.length === 0 ? (
                        <div className="p-3 text-center text-xs text-slate-400">No content type matching "{contentTypeSearch}"</div>
                      ) : (
                        filteredContentTypes.map((ct) => {
                          const isSelected = activeContentType === ct.id;
                          return (
                            <button
                              key={ct.id}
                              type="button"
                              onClick={() => {
                                handleSelectContentType(ct.id);
                                setIsContentTypeOpen(false);
                                setContentTypeSearch('');
                              }}
                              className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#B88B2A]/15 text-[#B88B2A] font-black'
                                  : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 font-semibold'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className="truncate">{ct.shortName}</span>
                                {ct.badge && (
                                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-black ${
                                    isSelected ? 'bg-[#B88B2A]/20 text-[#B88B2A]' : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'
                                  }`}>
                                    {ct.badge}
                                  </span>
                                )}
                              </div>
                              {isSelected && <Check size={14} className="text-[#B88B2A] shrink-0" />}
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* DROPDOWN B: LEGAL SUBJECT */}
              <div className="relative" ref={subjectRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubjectOpen(!isSubjectOpen);
                    setIsContentTypeOpen(false);
                    setIsJurisdictionOpen(false);
                  }}
                  className={`h-9 px-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                    isSubjectOpen 
                      ? 'border-[#B88B2A] ring-1 ring-[#B88B2A] bg-white dark:bg-zinc-900' 
                      : 'border-slate-200/90 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/80 hover:border-[#B88B2A]'
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isSubjectOpen}
                >
                  <Filter size={13} className="text-[#B88B2A] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500">Subject:</span>
                  <span className="font-extrabold text-slate-900 dark:text-white truncate max-w-[130px] sm:max-w-[190px]">
                    {selectedFilterObj.shortLabel || selectedFilterObj.label}
                  </span>
                  <ChevronDown size={13} className={`text-slate-400 transition-transform ${isSubjectOpen ? 'rotate-180 text-[#B88B2A]' : ''}`} />
                </button>

                {isSubjectOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-72 sm:w-88 bg-white dark:bg-[#111622] rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95">
                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
                      <input
                        type="text"
                        placeholder={`Filter subjects in ${currentContentType.shortName}...`}
                        value={subjectSearch}
                        onChange={(e) => setSubjectSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-semibold focus:outline-none focus:border-[#B88B2A] text-slate-900 dark:text-white"
                        autoFocus
                      />
                    </div>

                    <div className="max-h-64 overflow-y-auto custom-scrollbar space-y-0.5">
                      {filteredSubjectOptions.length === 0 ? (
                        <div className="p-3 text-center text-xs text-slate-400">No subject matching "{subjectSearch}"</div>
                      ) : (
                        filteredSubjectOptions.map((fItem) => {
                          const isSelected = activeSubjectFilter === fItem.id;
                          return (
                            <button
                              key={fItem.id}
                              type="button"
                              onClick={() => {
                                setActiveSubjectFilter(fItem.id);
                                setIsSubjectOpen(false);
                                setSubjectSearch('');
                              }}
                              className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#B88B2A]/15 text-[#B88B2A] font-black'
                                  : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 font-semibold'
                              }`}
                            >
                              <span className="truncate">{fItem.label}</span>
                              {isSelected && <Check size={14} className="text-[#B88B2A] shrink-0" />}
                            </button>
                          );
                        })
                      )}
                    </div>

                    {/* Quick link to 38+ subjects taxonomy modal at bottom */}
                    <div className="pt-2 mt-2 border-t border-slate-100 dark:border-zinc-800/80">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubjectOpen(false);
                          setIsSubjectModalOpen(true);
                        }}
                        className="w-full py-1.5 px-2 rounded-xl hover:bg-amber-500/10 text-[11px] font-black text-[#B88B2A] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Compass size={13} />
                        <span>Browse All 38+ Subjects Taxonomy</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* DROPDOWN C: JURISDICTION SELECTOR */}
              <div className="relative" ref={jurisdictionRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsJurisdictionOpen(!isJurisdictionOpen);
                    setIsContentTypeOpen(false);
                    setIsSubjectOpen(false);
                  }}
                  className={`h-9 px-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                    isJurisdictionOpen 
                      ? 'border-[#B88B2A] ring-1 ring-[#B88B2A] bg-white dark:bg-zinc-900' 
                      : 'border-slate-200/90 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/80 hover:border-[#B88B2A]'
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isJurisdictionOpen}
                  title="Change Legal Jurisdiction"
                >
                  <Globe size={13} className="text-[#B88B2A] shrink-0" />
                  <span className="hidden md:inline text-[11px] font-semibold text-slate-400 dark:text-zinc-500">Jurisdiction:</span>
                  <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                    <span>{currentJurisdiction.flag}</span>
                    <span className="truncate max-w-[80px] sm:max-w-[110px]">{currentJurisdiction.name}</span>
                  </span>
                  <ChevronDown size={13} className={`text-slate-400 transition-transform ${isJurisdictionOpen ? 'rotate-180 text-[#B88B2A]' : ''}`} />
                </button>

                {isJurisdictionOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-64 bg-white dark:bg-[#111622] rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                    <div className="p-2 border-b border-slate-100 dark:border-zinc-800/80 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Statutory Grounding
                      </span>
                    </div>
                    <div className="space-y-1">
                      {AVAILABLE_JURISDICTIONS.map((jur) => {
                        const isSelected = activeJurisdiction === jur.id;
                        return (
                          <button
                            key={jur.id}
                            type="button"
                            onClick={() => {
                              handleSelectJurisdiction(jur.id);
                              setIsJurisdictionOpen(false);
                            }}
                            className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#B88B2A]/15 text-[#B88B2A] font-black'
                                : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 font-semibold'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-base">{jur.flag}</span>
                              <span>{jur.name}</span>
                            </div>
                            {isSelected && <Check size={14} className="text-[#B88B2A] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right: Active Resource Count & All 38+ Subjects Trigger */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 shrink-0">
                {activeResourceCount}
              </span>
              <button
                type="button"
                onClick={() => setIsSubjectModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-black text-[#B88B2A] hover:underline cursor-pointer py-1 shrink-0"
                title={`Open complete ${activeSubjects.length}+ ${currentJurisdiction.name} subjects taxonomy modal`}
              >
                <Compass size={14} />
                <span className="hidden sm:inline">{activeSubjects.length}+ Taxonomy</span>
              </button>
            </div>

          </div>

          {/* Removable Active Filter Chips (Only rendered when filters are active) */}
          {hasActiveFilters && (
            <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-slate-100 dark:border-zinc-800/60 overflow-x-auto custom-scrollbar">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500 shrink-0">
                Active:
              </span>

              {activeContentType !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#B88B2A]/15 text-[#B88B2A] text-[11px] font-bold shrink-0">
                  <span>Type: {currentContentType.shortName}</span>
                  <button
                    type="button"
                    onClick={() => handleSelectContentType('ALL')}
                    className="hover:text-black dark:hover:text-white cursor-pointer ml-0.5"
                    title="Remove Content Type Filter"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {activeSubjectFilter !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#B88B2A]/15 text-[#B88B2A] text-[11px] font-bold shrink-0">
                  <span>Subject: {selectedFilterObj.shortLabel || selectedFilterObj.label}</span>
                  <button
                    type="button"
                    onClick={() => setActiveSubjectFilter('ALL')}
                    className="hover:text-black dark:hover:text-white cursor-pointer ml-0.5"
                    title="Remove Subject Filter"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {activeJurisdiction !== detectedJurisdictionId && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-600 dark:text-sky-400 text-[11px] font-bold shrink-0">
                  <span>Jurisdiction: {currentJurisdiction.flag} {currentJurisdiction.name}</span>
                  <button
                    type="button"
                    onClick={() => handleSelectJurisdiction(detectedJurisdictionId)}
                    className="hover:text-black dark:hover:text-white cursor-pointer ml-0.5"
                    title="Reset to Default Jurisdiction"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {searchQuery.trim() && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[11px] font-bold shrink-0">
                  <span>Query: "{searchQuery.trim()}"</span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="hover:text-black dark:hover:text-white cursor-pointer ml-0.5"
                    title="Clear Search"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              <button
                type="button"
                onClick={() => {
                  handleSelectContentType('ALL');
                  setActiveSubjectFilter('ALL');
                  handleSelectJurisdiction(detectedJurisdictionId);
                  setSearchQuery('');
                }}
                className="text-[10px] font-black text-slate-400 hover:text-[#B88B2A] hover:underline cursor-pointer shrink-0 ml-1"
              >
                Clear All
              </button>
            </div>
          )}

        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          3. MAIN WORKSPACE CANVAS
         ══════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex w-full overflow-hidden relative">

        <main className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-6">

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 1: THE DISCOVERY HOMEPAGE & IMMERSIVE BOOKSHELF
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'BOOKSHELF' && (
            <div className="max-w-6xl mx-auto w-full space-y-8 pb-16">
              
              {/* 1. Continue Reading Session (Saved User Progress Shortcut) */}
              {lastReadSession && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#B88B2A]/15 to-transparent border border-[#B88B2A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Clock size={13} className="text-[#B88B2A]" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#B88B2A]">
                        Continue Your Reading Session
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-zinc-100">
                      {lastReadSession.num ? `${lastReadSession.num} — ` : ''}{lastReadSession.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                      {lastReadSession.actTitle} • Estimated reading time: {lastReadSession.readTime}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const deepFound = DEEP_LEGAL_SECTIONS_DATABASE[lastReadSession.id];
                      if (deepFound) {
                        setActiveSection(deepFound);
                      } else {
                        // find in database
                        for (const b of ACTIVE_DATABASE) {
                          for (const p of b.parts || []) {
                            for (const c of p.chapters || []) {
                              for (const s of c.sections || []) {
                                if (s.id === lastReadSession.id) {
                                  setActiveSection(s);
                                  setSelectedBook(b);
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                      setViewState('READER');
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-b from-[#D4AF37] to-[#B88B2A] hover:brightness-105 active:scale-98 text-[#111111] font-black text-xs shadow-md shadow-[#B88B2A]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto shrink-0"
                  >
                    <span>Resume Reading</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              )}

              {/* ─── SECTION A: FREQUENTLY REFERENCED BARE ACTS & TREATISES ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'BARE_ACTS') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <BookOpen size={20} className="text-[#B88B2A]" />
                        <span>Core Bare Acts & Digital Textbooks</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Official statutory text, BNS transition tables, commentary & clause analysis
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredBooks.length} Enactments
                    </span>
                  </div>

                  {filteredBooks.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No Bare Acts found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Acts</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredBooks.map((book) => (
                        <div
                          key={book.id}
                          onClick={() => handleBookTap(book)}
                          className="group relative p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4"
                        >
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <span className="text-2xl p-2 rounded-xl bg-slate-100 dark:bg-zinc-800/80">
                                {book.icon || '📖'}
                              </span>
                              <span 
                                className="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: `${book.coverColor}20`, color: book.coverColor === '#1E3A8A' ? '#C8A34D' : book.coverColor }}
                              >
                                {book.subjectCategory}
                              </span>
                            </div>

                            <div>
                              <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#B88B2A] transition-colors">
                                {book.title}
                              </h3>
                              <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                                {book.description}
                              </p>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-zinc-400">
                            <span>{book.sectionsCount || 350}+ Sections</span>
                            <span className="flex items-center gap-1 text-[#B88B2A] font-bold group-hover:translate-x-1 transition-transform">
                              Open TOC <ChevronRight size={13} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── SECTION B: LANDMARK PRECEDENTS & JUDGMENTS ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'CASE_LAWS') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <Gavel size={20} className="text-[#B88B2A]" />
                        <span>Landmark Precedents & Verified Judgments</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Authoritative Supreme Court rulings with verified Facts, Ratio Decidendi & Subsequent Treatment
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredJudgments.length} Precedents
                    </span>
                  </div>

                  {filteredJudgments.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No judgments found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Precedents</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(activeContentType === 'CASE_LAWS' ? filteredJudgments : filteredJudgments.slice(0, 4)).map((j) => (
                        <div
                          key={j.id}
                          onClick={() => handleOpenJudgment(j)}
                          className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:shadow-xl transition-all cursor-pointer space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                              <span className="text-[#B88B2A] font-black">{j.court}</span>
                              <span>{j.year}</span>
                            </div>

                            <h3 className="text-sm font-black text-slate-900 dark:text-white hover:text-[#B88B2A] transition-colors">
                              {j.title}
                            </h3>

                            <p className="text-xs text-slate-600 dark:text-zinc-400 font-serif italic line-clamp-3 bg-amber-500/5 p-3 rounded-xl border border-amber-500/15">
                              "{j.ratioDecidendi}"
                            </p>
                          </div>

                          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                            <span className="text-slate-500 font-mono">{j.citation}</span>
                            <span className="text-xs font-bold text-[#B88B2A] flex items-center gap-1">
                              Read Brief <ChevronRight size={13} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── SECTION C: COURT PROCEDURES & PRACTICE GUIDES ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'PROCEDURES') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <Scale size={20} className="text-[#B88B2A]" />
                        <span>Court Procedures & Litigation Practice Guides</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Step-by-step advocate workflows, limitation periods, court fees & mandatory documents
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredProcedures.length} Procedures
                    </span>
                  </div>

                  {filteredProcedures.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No procedures found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Procedures</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredProcedures.map((proc) => (
                        <div
                          key={proc.id}
                          onClick={() => handleOpenProcedure(proc)}
                          className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:shadow-xl transition-all cursor-pointer space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-black">
                                {proc.category}
                              </span>
                              <span className="text-slate-400 font-semibold">{proc.estimatedTimeline}</span>
                            </div>

                            <h3 className="text-sm font-black text-slate-900 dark:text-white leading-snug">
                              {proc.title}
                            </h3>

                            {proc.actReference && (
                              <div className="text-[11px] font-mono font-semibold text-[#B88B2A] line-clamp-1">
                                {proc.actReference}
                              </div>
                            )}

                            <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {proc.overview}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-zinc-400">
                            <span>Forum: <strong className="text-slate-800 dark:text-zinc-200">{proc.courtForum?.split('(')[0] || proc.courtForum}</strong></span>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-[10px] font-bold text-slate-600 dark:text-zinc-300">
                                {proc.stepByStepPipeline?.length || 5} Stages
                              </span>
                              <span className="text-[#B88B2A] font-bold flex items-center gap-0.5">
                                Explore <ChevronRight size={13} />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── SECTION D: LEGAL DRAFTING & PLEADINGS LIBRARY ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'DRAFTING') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <FileSignature size={20} className="text-[#B88B2A]" />
                        <span>Legal Drafting & Document Library</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Court-ready templates, essential clauses checklist, statutory foundations & Draft Maker links
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredDrafts.length} Templates
                    </span>
                  </div>

                  {filteredDrafts.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No drafting templates found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Templates</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {filteredDrafts.map((draft) => (
                        <div
                          key={draft.id}
                          onClick={() => handleOpenDraft(draft)}
                          className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:shadow-xl transition-all cursor-pointer space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-600 dark:text-purple-400">
                              {draft.category}
                            </span>

                            <h3 className="text-sm font-black text-slate-900 dark:text-white">
                              {draft.title}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {draft.purposeWhenToUse}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                            <span className="truncate max-w-[200px]">{draft.actReference}</span>
                            <span className="text-[#B88B2A] font-bold flex items-center gap-1 shrink-0">
                              View Structure <ChevronRight size={13} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── SECTION E: LEGAL DICTIONARY & LATIN MAXIMS ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'DICTIONARY') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <Library size={20} className="text-[#B88B2A]" />
                        <span>Legal Dictionary & Latin Maxims Reference</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Judicial interpretations, translation, statutory cross-references & leading precedents
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredDictionary.length} Maxims & Terms
                    </span>
                  </div>

                  {filteredDictionary.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No terms or maxims found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Terms</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {(activeContentType === 'DICTIONARY' ? filteredDictionary : filteredDictionary.slice(0, 6)).map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleOpenDictEntry(item)}
                          className="group p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] transition-all cursor-pointer space-y-3 shadow-xs hover:shadow-md flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="font-bold text-[#B88B2A] bg-[#B88B2A]/10 px-2 py-0.5 rounded-full truncate max-w-[180px]">
                                {item.subcategory || item.category}
                              </span>
                              {item.difficultyLevel && (
                                <span className="text-slate-400 dark:text-zinc-500 font-semibold text-[10px]">
                                  {item.difficultyLevel}
                                </span>
                              )}
                            </div>

                            <div>
                              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#B88B2A] transition-colors line-clamp-1">
                                {item.term}
                              </h4>
                              {item.pronunciation && (
                                <p className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 mt-0.5 truncate">
                                  {item.pronunciation} • {item.language || 'Legal'}
                                </p>
                              )}
                            </div>

                            <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {item.conciseDefinition || item.plainMeaning}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px]">
                            {Array.isArray(item.statutoryBasis) && item.statutoryBasis.length > 0 ? (
                              <span className="text-slate-400 dark:text-zinc-500 truncate max-w-[160px] text-[10px]">
                                {item.statutoryBasis[0]?.statute} ({item.statutoryBasis[0]?.provision})
                              </span>
                            ) : typeof item.statutoryBasis === 'string' && item.statutoryBasis.trim() ? (
                              <span className="text-slate-400 dark:text-zinc-500 truncate max-w-[160px] text-[10px]">
                                {item.statutoryBasis}
                              </span>
                            ) : (
                              <span className="text-slate-400 dark:text-zinc-500 text-[10px]">
                                {item.jurisdictionLabel || item.jurisdiction || 'Legal Reference'}
                              </span>
                            )}
                            <span className="text-[#B88B2A] font-bold text-xs group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                              <span>Read Entry</span>
                              <ChevronRight size={12} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── SECTION F: LEGAL ARTICLES & ANALYTICAL GUIDES ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'ARTICLES') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <FileText size={20} className="text-[#B88B2A]" />
                        <span>Legal Articles & Doctrinal Treatises</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Deep scholarly commentaries, constitutional analyses & comparative jurisprudence
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredArticles.length} Treatises
                    </span>
                  </div>

                  {filteredArticles.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No articles found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Articles</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(activeContentType === 'ARTICLES' ? filteredArticles : filteredArticles.slice(0, 4)).map((art) => (
                        <div
                          key={art.id}
                          onClick={() => handleOpenArticle(art)}
                          className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:shadow-xl transition-all cursor-pointer space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400 font-black">
                                {art.category}
                              </span>
                              <span className="text-slate-400 font-semibold">{art.readTime} read</span>
                            </div>

                            <h3 className="text-sm font-black text-slate-900 dark:text-white hover:text-[#B88B2A] transition-colors">
                              {art.title}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {art.summary}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                            <span>By {art.author}</span>
                            <span className="text-[#B88B2A] font-bold flex items-center gap-1">
                              Read Full Article <ChevronRight size={13} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── SECTION G: RIGHTS, REMEDIES & CITIZEN LEGAL HELP ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'RIGHTS_REMEDIES') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <ShieldCheck size={20} className="text-[#B88B2A]" />
                        <span>Actionable Rights & Legal Remedies</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Constitutional writs, emergency bail protections, cyber fraud recovery & consumer relief
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredRemedies.length} Remedies
                    </span>
                  </div>

                  {filteredRemedies.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No remedies found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Remedies</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(activeContentType === 'RIGHTS_REMEDIES' ? filteredRemedies : filteredRemedies.slice(0, 4)).map((rem) => (
                        <div
                          key={rem.id}
                          onClick={() => handleOpenRemedy(rem)}
                          className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:shadow-xl transition-all cursor-pointer space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-400 font-black">
                                {rem.remedyType}
                              </span>
                              <span className="text-xs font-bold text-red-500 dark:text-red-400 flex items-center gap-1">
                                <AlertTriangle size={11} />
                                <span>{rem.urgencyLevel || rem.emergencyLevel || 'Immediate Relief'}</span>
                              </span>
                            </div>

                            <h3 className="text-sm font-black text-slate-900 dark:text-white line-clamp-2">
                              {rem.title}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {rem.summary || rem.overview}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                            <span className="truncate max-w-[220px]">Forum: {(rem.forum || '').split('&')[0].split('/')[0]}</span>
                            <span className="text-[#B88B2A] font-bold flex items-center gap-1">
                              View Remedy Dossier <ChevronRight size={13} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── SECTION H: LEGAL UPDATES & GAZETTE NOTIFICATIONS ─── */}
              {(activeContentType === 'ALL' || activeContentType === 'LEGAL_UPDATES') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                        <Bell size={20} className="text-[#B88B2A]" />
                        <span>Verified Legal Updates & Gazette Notifications</span>
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Official gazette orders, statutory amendments & regulatory circulars
                      </p>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {filteredUpdates.length} Notifications
                    </span>
                  </div>

                  {filteredUpdates.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400">
                        No updates found matching filter "{selectedFilterObj.label}".
                      </p>
                      <button
                        onClick={() => setActiveSubjectFilter('ALL')}
                        className="text-xs text-[#B88B2A] font-black hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <RotateCcw size={12} />
                        <span>Clear Filter & View All Updates</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredUpdates.map((upd) => (
                        <div
                          key={upd.id}
                          onClick={() => handleOpenUpdate(upd)}
                          className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:shadow-xl transition-all cursor-pointer space-y-3 flex flex-col justify-between group"
                        >
                          <div className="space-y-2.5">
                            <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
                              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 font-black">
                                {upd.category}
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                                {upd.legalStatus?.split('(')[0]?.trim() || 'Verified'}
                              </span>
                            </div>

                            <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#B88B2A] transition-colors line-clamp-2">
                              {upd.title}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {upd.summary}
                            </p>

                            {upd.officialIdentity?.documentNumber && (
                              <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 truncate">
                                📜 {upd.officialIdentity.documentNumber}
                              </div>
                            )}
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                            <span className="truncate max-w-[200px]">{upd.authority}</span>
                            <span className="text-[#B88B2A] font-bold flex items-center gap-1 shrink-0">
                              View Analysis <ChevronRight size={13} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 2: TABLE OF CONTENTS (TOC) FOR BARE ACT / BOOK
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'TOC' && selectedBook && (
            <div className="max-w-4xl mx-auto w-full space-y-6 pb-16">
              
              {/* Back to Bookshelf & Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <button onClick={() => setViewState('BOOKSHELF')} className="hover:text-slate-700 dark:hover:text-white cursor-pointer">
                  Bookshelf
                </button>
                <span>&gt;</span>
                <span className="text-[#B88B2A] font-bold truncate max-w-[300px]">
                  {selectedBook.title}
                </span>
              </div>

              {/* Book Header Hero Banner */}
              <div 
                className="p-6 sm:p-8 rounded-3xl border shadow-lg space-y-4"
                style={{ 
                  backgroundColor: readerThemeColors.surface, 
                  borderColor: readerThemeColors.border 
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#B88B2A]/15 text-[#B88B2A]">
                      {selectedBook.subjectCategory}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight pt-1">
                      {selectedBook.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                      {selectedBook.description}
                    </p>
                  </div>

                  <span className="text-4xl p-3 rounded-2xl bg-slate-100 dark:bg-zinc-800 shrink-0">
                    {selectedBook.icon || '📖'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 dark:text-zinc-400 pt-2 border-t border-slate-100 dark:border-zinc-800">
                  <span>{selectedBook.parts?.length || 1} Parts</span>
                  <span>•</span>
                  <span>{selectedBook.sectionsCount || 350}+ Sections</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400">✓ Verified Statutory Grounding</span>
                </div>
              </div>

              {/* Table of Contents Parts & Chapters Accordions */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Table of Contents (Articles & Sections)
                </h3>

                {selectedBook.parts?.map((part, pIdx) => {
                  const isExpanded = expandedTocs[part.title] !== false;
                  return (
                    <div 
                      key={pIdx}
                      className="rounded-2xl border overflow-hidden transition-all shadow-2xs"
                      style={{ 
                        backgroundColor: readerThemeColors.surface, 
                        borderColor: readerThemeColors.border 
                      }}
                    >
                      <button
                        onClick={() => toggleTocChapter(part.title)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-black/5 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Layers size={16} className="text-[#B88B2A]" />
                          <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-zinc-100">
                            {part.title}
                          </h4>
                        </div>
                        <ChevronDown 
                          size={16} 
                          className={`text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-3 border-t divide-y divide-slate-100 dark:divide-zinc-800/80 space-y-2" style={{ borderColor: readerThemeColors.border }}>
                          {part.chapters?.map((chap, cIdx) => (
                            <div key={cIdx} className="pt-2 first:pt-0 space-y-1.5">
                              <h5 className="text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wider">
                                {chap.title}
                              </h5>
                              <div className="grid grid-cols-1 gap-1">
                                {chap.sections?.map((sec) => (
                                  <div
                                    key={sec.id}
                                    onClick={() => handleSectionSelect(sec, selectedBook)}
                                    className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800/80 cursor-pointer transition-colors flex items-center justify-between group"
                                  >
                                    <div className="space-y-0.5 max-w-[85%]">
                                      <div className="flex items-center gap-2">
                                        <span className="text-xs font-black text-[#B88B2A]">
                                          {sec.num}
                                        </span>
                                        <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-[#B88B2A] transition-colors">
                                          {sec.title}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1">
                                        {sec.plainEnglish || sec.originalBareAct}
                                      </p>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                      <span className="text-[10px] font-bold text-slate-400">
                                        {sec.readTime}
                                      </span>
                                      <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-1 group-hover:text-[#B88B2A] transition-all" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 3: IMMERSIVE 14-LAYER STATUTE / TEXTBOOK READER
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'READER' && resolvedSection && (
            <div className="max-w-4xl mx-auto w-full space-y-6 pb-20">
              
              {/* Breadcrumb Navigation Line */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <button onClick={() => setViewState('BOOKSHELF')} className="hover:text-slate-700 dark:hover:text-white cursor-pointer">
                  Bookshelf
                </button>
                <span>&gt;</span>
                <button onClick={() => setViewState('TOC')} className="hover:text-slate-700 dark:hover:text-white cursor-pointer truncate max-w-[200px]">
                  {resolvedSection.actTitle || selectedBook.title}
                </button>
                <span>&gt;</span>
                <span className="text-[#B88B2A] font-black">{resolvedSection.num}</span>
              </div>

              {/* Reader Controls Toolbar */}
              <div 
                className="p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-2xs"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewState('TOC')}
                    className="px-3 py-1.5 rounded-xl border text-xs font-bold hover:bg-black/5 transition-colors cursor-pointer"
                    style={{ borderColor: readerThemeColors.border, color: readerThemeColors.text }}
                  >
                    ← TOC
                  </button>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-extrabold px-2 py-0.5 rounded-md bg-[#EF4444]/15 text-[#EF4444]">
                      {resolvedSection.difficulty || 'Medium'}
                    </span>
                    <span className="font-semibold" style={{ color: readerThemeColors.textSecondary }}>
                      {resolvedSection.readTime || '5 min'}
                    </span>
                  </div>
                </div>

                {/* Theme, Font, and Bookmarks Controls */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {/* Reading Themes Selector */}
                  <div className="flex items-center p-1 rounded-xl gap-1 border" style={{ backgroundColor: readerThemeColors.surfaceVariant, borderColor: readerThemeColors.border }}>
                    <button
                      onClick={() => setReadingTheme('light')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                        readingTheme === 'light' ? 'bg-white text-slate-900 shadow-2xs ring-1 ring-slate-300' : 'text-slate-400'
                      }`}
                      title="Light Mode"
                    >
                      LIGHT
                    </button>
                    <button
                      onClick={() => setReadingTheme('sepia')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                        readingTheme === 'sepia' ? 'bg-[#F4ECD8] text-[#5B4031] shadow-2xs ring-1 ring-[#DFD4BE]' : 'text-slate-400'
                      }`}
                      title="Kindle Sepia Paper"
                    >
                      SEPIA
                    </button>
                    <button
                      onClick={() => setReadingTheme('dark')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                        readingTheme === 'dark' ? 'bg-black text-white shadow-2xs ring-1 ring-zinc-700' : 'text-slate-400'
                      }`}
                      title="Dark Mode"
                    >
                      DARK
                    </button>
                  </div>

                  {/* Font Family Selector */}
                  <div className="flex items-center gap-1 border rounded-xl p-1 text-[11px] font-bold" style={{ backgroundColor: readerThemeColors.surfaceVariant, borderColor: readerThemeColors.border }}>
                    {(['serif', 'system', 'monospace']).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFontFamily(f)}
                        className={`px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${
                          fontFamily === f ? 'bg-white dark:bg-zinc-800 text-[#B88B2A] shadow-2xs font-black' : 'text-slate-400'
                        }`}
                      >
                        {f === 'serif' ? 'Serif' : f === 'system' ? 'Sans' : 'Mono'}
                      </button>
                    ))}
                  </div>

                  {/* Font Size Adjusters */}
                  <div className="flex items-center gap-1.5 border rounded-xl px-2 py-1 text-xs font-bold" style={{ backgroundColor: readerThemeColors.surfaceVariant, borderColor: readerThemeColors.border }}>
                    <button onClick={() => setFontSize((s) => Math.max(12, s - 1))} className="hover:text-[#B88B2A] cursor-pointer">A-</button>
                    <span style={{ color: readerThemeColors.text }}>{fontSize}px</span>
                    <button onClick={() => setFontSize((s) => Math.min(24, s + 1))} className="hover:text-[#B88B2A] cursor-pointer">A+</button>
                  </div>

                  {/* Margin Sticky Note Trigger */}
                  <button
                    onClick={() => {
                      setActiveNoteText(notes[resolvedSection.id] || '');
                      setIsNoteInputOpen(true);
                    }}
                    className="p-1.5 rounded-xl border hover:bg-amber-500/15 text-amber-500 transition-colors cursor-pointer"
                    style={{ borderColor: readerThemeColors.border }}
                    title="Pin Margin Sticky Note"
                  >
                    <Edit3 size={16} />
                  </button>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(resolvedSection.id)}
                    className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                      bookmarks.includes(resolvedSection.id)
                        ? 'bg-[#B88B2A]/20 border-[#B88B2A] text-[#B88B2A]'
                        : 'text-slate-400 hover:text-[#B88B2A]'
                    }`}
                    style={{ borderColor: bookmarks.includes(resolvedSection.id) ? '#B88B2A' : readerThemeColors.border }}
                    title="Bookmark Section"
                  >
                    <Bookmark size={16} fill={bookmarks.includes(resolvedSection.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              {/* ─── CLASSIC LEGAL TEXTBOOK CANVAS (14-Layer Scholarship Flow) ─── */}
              <div 
                className="p-6 sm:p-10 rounded-3xl border shadow-lg space-y-8 transition-colors"
                style={{ 
                  backgroundColor: readerThemeColors.surface, 
                  borderColor: readerThemeColors.border,
                  color: readerThemeColors.text,
                  fontFamily: fontFamily === 'serif' ? "Georgia, Cambria, 'Times New Roman', serif" : fontFamily === 'monospace' ? "ui-monospace, Menlo, Monaco, monospace" : 'system-ui, sans-serif'
                }}
              >
                
                {/* 1. Running Book Header */}
                <div 
                  className="flex items-center justify-between pb-3 border-b text-[11px] font-extrabold tracking-wider uppercase opacity-75"
                  style={{ borderColor: readerThemeColors.border }}
                >
                  <span className="truncate max-w-[80%] text-[#B88B2A]">
                    {resolvedSection.actTitle} • {resolvedSection.chapterTitle || resolvedSection.partTitle}
                  </span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(`${resolvedSection.num} - ${resolvedSection.title} (${resolvedSection.actTitle})`);
                        toast.success("Citation copied!");
                      }}
                      className="hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy size={12} />
                      <span>Cite</span>
                    </button>
                  </div>
                </div>

                {/* Section Main Heading Block */}
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                    {resolvedSection.num} — {resolvedSection.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-black border border-emerald-500/30 flex items-center gap-1">
                      <ShieldCheck size={12} /> {resolvedSection.verificationStatus || 'VERIFIED'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-mono">
                      State: {resolvedSection.lifecycleState || 'PUBLISHED'}
                    </span>
                    <span className="text-slate-400">
                      Complexity: <span className="font-extrabold text-[#EF4444]">{resolvedSection.difficulty || 'Medium'}</span> • Read: <span className="font-bold">{resolvedSection.readTime || '5 min'}</span>
                    </span>
                    {resolvedSection.sourceProvenance && (
                      <span className="text-slate-400 italic">
                        • Source: {resolvedSection.sourceProvenance}
                      </span>
                    )}
                  </div>
                </div>

                {/* ─── LAYER I: STATUTORY PROVISION (BARE ACT TEXT) ─── */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-black text-[#B88B2A] uppercase tracking-wider">
                    <span>I. STATUTORY PROVISION (OFFICIAL BARE ACT TEXT)</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(resolvedSection.originalBareAct);
                        toast.success("Bare Act statutory text copied!");
                      }}
                      className="flex items-center gap-1 text-[11px] hover:underline cursor-pointer"
                    >
                      <Copy size={12} />
                      <span>Copy Bare Act</span>
                    </button>
                  </div>

                  <div 
                    className="p-5 sm:p-6 rounded-2xl border-l-4 italic font-serif leading-relaxed text-sm whitespace-pre-line"
                    style={{ 
                      backgroundColor: readerThemeColors.statutoryBg,
                      borderLeftColor: '#B88B2A',
                      fontSize: `${fontSize}px`,
                      lineHeight: `${fontSize * 1.6}px`
                    }}
                  >
                    "{resolvedSection.originalBareAct}"
                  </div>
                </div>

                {/* ─── LAYER II: COMMENTARY & LEGAL PRINCIPLE ─── */}
                <div className="space-y-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                    II. COMMENTARY & DOCTRINAL ANALYSIS
                  </h3>
                  <div 
                    className="leading-relaxed font-medium whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize * 1.6}px` }}
                  >
                    {resolvedSection.plainEnglish}
                  </div>
                </div>

                {/* ─── LAYER III: आधिकारिक कानूनी व्याख्या एवं विश्लेषण (HINDI) ─── */}
                {resolvedSection.hindiExplanation && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-black text-[#B88B2A] uppercase tracking-wider">
                      III. आधिकारिक कानूनी व्याख्या एवं विश्लेषण (HINDI)
                    </h3>
                    <div 
                      className="p-4 sm:p-5 rounded-2xl border leading-relaxed font-medium whitespace-pre-line"
                      style={{ 
                        backgroundColor: readerThemeColors.surfaceVariant,
                        borderColor: readerThemeColors.border,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${fontSize * 1.65}px`
                      }}
                    >
                      {resolvedSection.hindiExplanation}
                    </div>
                  </div>
                )}

                {/* ─── LAYER IV: PRACTICAL ILLUSTRATION & FACTUAL SCENARIO ─── */}
                {resolvedSection.realExample && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      IV. PRACTICAL ILLUSTRATION & FACTUAL LITIGATION SCENARIO
                    </h3>
                    <div 
                      className="p-4 sm:p-5 rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-950 dark:text-purple-200 leading-relaxed font-medium whitespace-pre-line"
                      style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize * 1.55}px` }}
                    >
                      {resolvedSection.realExample}
                    </div>
                  </div>
                )}

                {/* ─── LAYER V: ADVOCATE LITIGATION PERSPECTIVE & COURTROOM PRACTICE ─── */}
                {resolvedSection.lawyerInterpretation && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      V. ADVOCATE LITIGATION PERSPECTIVE & COURTROOM PRACTICE
                    </h3>
                    <div 
                      className="p-4 sm:p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium whitespace-pre-line"
                      style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize * 1.55}px` }}
                    >
                      {resolvedSection.lawyerInterpretation}
                    </div>
                  </div>
                )}

                {/* ─── LAYER VI: EXAMINATION & JUDICIAL SERVICE ESSENTIALS ─── */}
                {resolvedSection.importantNotes && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      VI. EXAMINATION & JUDICIAL SERVICE ESSENTIALS
                    </h3>
                    <div 
                      className="p-4 sm:p-5 rounded-2xl border-l-4 border-l-[#B88B2A] bg-amber-500/10 leading-relaxed font-medium whitespace-pre-line"
                      style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize * 1.55}px` }}
                    >
                      {resolvedSection.importantNotes}
                    </div>
                  </div>
                )}

                {/* ─── LAYER VII: LANDMARK PRECEDENTS & JUDICIAL DECISIONS ─── */}
                {resolvedSection.landmarkJudgments && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-black text-[#B88B2A] uppercase tracking-wider">
                      VII. LANDMARK PRECEDENTS & JUDICIAL DECISIONS (RATIO DECIDENDI)
                    </h3>
                    <div 
                      className="p-4 sm:p-5 rounded-2xl border leading-relaxed font-medium whitespace-pre-line"
                      style={{ 
                        backgroundColor: readerThemeColors.surfaceVariant,
                        borderColor: readerThemeColors.border,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${fontSize * 1.55}px`
                      }}
                    >
                      {resolvedSection.landmarkJudgments}
                    </div>
                  </div>
                )}

                {/* ─── LAYER VIII: STATUTORY CROSS-REFERENCE (TRANSITION MAPPING) ─── */}
                {((resolvedSection.ipcEquivalent && resolvedSection.ipcEquivalent !== 'N/A') || 
                  (resolvedSection.bnsEquivalent && resolvedSection.bnsEquivalent !== 'N/A')) && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-black text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                      VIII. STATUTORY CROSS-REFERENCE (TRANSITION CODES)
                    </h3>
                    <div className="p-4 rounded-2xl border border-violet-500/30 bg-violet-500/10 text-xs font-bold flex flex-wrap items-center justify-between gap-3">
                      <span>Previous Provision: <strong className="text-rose-600 dark:text-rose-400">{resolvedSection.ipcEquivalent}</strong></span>
                      <span>➔</span>
                      <span>Corresponding Modern Code: <strong className="text-emerald-600 dark:text-emerald-400">{resolvedSection.bnsEquivalent}</strong></span>
                    </div>
                  </div>
                )}

                {/* ─── LAYER IX: SELF-ASSESSMENT QUESTIONS (EXAM MCQS) ─── */}
                {resolvedSection.mcqs && resolvedSection.mcqs.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-[#B88B2A] uppercase tracking-wider">
                      IX. SELF-ASSESSMENT QUESTIONS & JUDICIARY MCQS
                    </h3>

                    <div className="space-y-3">
                      {resolvedSection.mcqs.map((q, qIdx) => {
                        const quizKey = `${resolvedSection.id}-q-${qIdx}`;
                        const selected = selectedQuizAnswers[quizKey];
                        const isRevealed = revealedQuizAnswers[quizKey];

                        return (
                          <div 
                            key={qIdx}
                            className="p-4 sm:p-5 rounded-2xl border space-y-3"
                            style={{ backgroundColor: readerThemeColors.surfaceVariant, borderColor: readerThemeColors.border }}
                          >
                            <p className="text-sm font-black">
                              Q{qIdx + 1}. {q.question}
                            </p>

                            <div className="grid grid-cols-1 gap-2">
                              {q.options.map((opt, oIdx) => {
                                const isSelected = selected === opt;
                                const isCorrect = opt === q.answer;

                                let btnStyle = "border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200";
                                if (isRevealed) {
                                  if (isCorrect) {
                                    btnStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-black";
                                  } else if (isSelected) {
                                    btnStyle = "border-rose-500 bg-rose-500/15 text-rose-700 dark:text-rose-300 font-bold";
                                  }
                                }

                                return (
                                  <button
                                    key={oIdx}
                                    onClick={() => handleSelectQuizOption(qIdx, opt)}
                                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                                  >
                                    <span>
                                      <strong>({String.fromCharCode(97 + oIdx)})</strong> {opt}
                                    </span>
                                    {isRevealed && isCorrect && <CheckCircle2 size={16} className="text-emerald-600" />}
                                    {isRevealed && isSelected && !isCorrect && <XCircle size={16} className="text-rose-600" />}
                                  </button>
                                );
                              })}
                            </div>

                            {isRevealed && (
                              <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 pt-1">
                                ✓ Correct Answer: {q.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ─── LAYER X: REVISION TAKEAWAYS & KEY PRINCIPLES ─── */}
                {resolvedSection.flashcards && resolvedSection.flashcards.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      X. REVISION TAKEAWAYS & KEY PRINCIPLES
                    </h3>
                    <div className="space-y-2 pl-2">
                      {resolvedSection.flashcards.map((fc, fcIdx) => (
                        <div key={fcIdx} className="flex items-start gap-2 text-xs font-bold">
                          <span className="text-[#B88B2A]">•</span>
                          <span>{fc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── USER'S STUDY MARGIN NOTE (PINNED POST-IT) ─── */}
                {notes[resolvedSection.id] && (
                  <div className="p-4 sm:p-5 rounded-2xl border-l-4 border-l-[#B88B2A] bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-200 space-y-1.5 shadow-xs">
                    <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-[#B88B2A]">
                      <span>📌 ADVOCATE MARGIN NOTE</span>
                      <button
                        onClick={() => {
                          setActiveNoteText(notes[resolvedSection.id]);
                          setIsNoteInputOpen(true);
                        }}
                        className="hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>
                    <p className="text-xs font-medium leading-relaxed">
                      {notes[resolvedSection.id]}
                    </p>
                  </div>
                )}

                {/* ─── STATUTORY FOOTNOTES & REFERENCES ─── */}
                <div 
                  className="pt-6 border-t space-y-2 text-xs opacity-75"
                  style={{ borderColor: readerThemeColors.border }}
                >
                  <span className="font-extrabold uppercase tracking-wider text-[10px] block text-[#B88B2A]">
                    REFERENCES & STATUTORY GROUNDING
                  </span>
                  {resolvedSection.recentAmendments && <div>• Amendments: {resolvedSection.recentAmendments}</div>}
                  {resolvedSection.suggestedReading && <div>• Suggested Treatises: {resolvedSection.suggestedReading}</div>}
                  {resolvedSection.relatedSections && <div>• Cross-References: {resolvedSection.relatedSections}</div>}
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 4: DEDICATED LANDMARK JUDGMENT DOSSIER READER
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'JUDGMENT_VIEW' && activeJudgment && (
            <div className="max-w-4xl mx-auto w-full space-y-6 pb-20">
              
              {/* Back to Bookshelf Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <button onClick={() => setViewState('BOOKSHELF')} className="hover:text-slate-700 dark:hover:text-white cursor-pointer">
                  Bookshelf
                </button>
                <span>&gt;</span>
                <span>Case Laws</span>
                <span>&gt;</span>
                <span className="text-[#B88B2A] font-bold truncate max-w-[300px]">
                  {activeJudgment.title}
                </span>
              </div>

              {/* Judgment Header Card */}
              <div 
                className="p-6 sm:p-8 rounded-3xl border shadow-lg space-y-4"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B88B2A]/15 text-[#B88B2A] font-black">
                      {activeJudgment.court}
                    </span>
                    <span>Bench: {activeJudgment.bench || 'Constitution Bench'}</span>
                    <span>Date: {activeJudgment.date || activeJudgment.year}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {activeJudgment.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                    <span className="font-mono px-2 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold">
                      {activeJudgment.citation}
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${activeJudgment.title}, ${activeJudgment.citation}`);
                        toast.success("Citation copied to clipboard!");
                      }}
                      className="text-[#B88B2A] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy size={13} />
                      <span>Copy Citation</span>
                    </button>
                  </div>
                </div>

                {/* Core Ratio Decidendi Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#B88B2A]/15 to-transparent border-l-4 border-l-[#B88B2A] space-y-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                    <Award size={14} />
                    <span>RATIO DECIDENDI (BINDING LAW UNDER ARTICLE 141)</span>
                  </div>
                  <p className="text-sm font-serif italic text-slate-800 dark:text-zinc-200 leading-relaxed">
                    "{activeJudgment.ratioDecidendi}"
                  </p>
                </div>

                {/* Case Context & Facts */}
                {activeJudgment.caseContext?.facts && (
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Material Facts of the Case
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                      {activeJudgment.caseContext.facts}
                    </p>
                  </div>
                )}

                {/* Legal Issues Framed */}
                {activeJudgment.caseContext?.legalIssue && (
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Legal Issues Framed by the Court
                    </h3>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 whitespace-pre-line">
                      {activeJudgment.caseContext.legalIssue}
                    </div>
                  </div>
                )}

                {/* Judicial Reasoning & Analysis */}
                {activeJudgment.reasoning && (
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Judicial Reasoning & Bench Findings
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                      {activeJudgment.reasoning}
                    </div>
                  </div>
                )}

                {/* Subsequent Treatment & Precedents */}
                {activeJudgment.subsequentTreatment && (
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#B88B2A]">
                      Subsequent Treatment & Follow-up Rulings
                    </h3>
                    <div className="space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
                      {activeJudgment.subsequentTreatment.map((st, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#B88B2A]">•</span>
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 5: DEDICATED COURT PROCEDURE PRACTICE GUIDE
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'PROCEDURE_VIEW' && activeProcedure && (
            <div className="max-w-5xl mx-auto w-full space-y-6 pb-24">
              
              {/* Header Navigation & Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold">
                <div className="flex items-center gap-2 text-slate-400">
                  <button 
                    onClick={() => setViewState('BOOKSHELF')} 
                    className="hover:text-slate-800 dark:hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Procedures</span>
                  </button>
                  <span>/</span>
                  <span className="text-slate-600 dark:text-zinc-400 font-bold">{activeProcedure.category}</span>
                  <span>/</span>
                  <span className="text-[#B88B2A] font-extrabold truncate max-w-[280px]">
                    {activeProcedure.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${activeProcedure.title}\nAct: ${activeProcedure.actReference}\nForum: ${activeProcedure.courtForum}\nOverview: ${activeProcedure.overview}`);
                      toast.success("Procedure summary copied to clipboard!");
                    }}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-[#B88B2A] text-slate-600 dark:text-zinc-300 hover:text-[#B88B2A] bg-white dark:bg-[#111622] flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                  >
                    <Copy size={13} />
                    <span>Copy Summary</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-[#B88B2A] text-slate-600 dark:text-zinc-300 hover:text-[#B88B2A] bg-white dark:bg-[#111622] flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                  >
                    <FileText size={13} />
                    <span>Print Dossier</span>
                  </button>
                </div>
              </div>

              {/* Main Procedural Dossier Card */}
              <div 
                className="p-6 sm:p-10 rounded-3xl border shadow-xl space-y-8"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                {/* ─── SECTION I: HERO & OVERVIEW ─── */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-black">
                      {activeProcedure.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold flex items-center gap-1">
                      <Clock size={12} />
                      <span>Limitation: {activeProcedure.statutoryLimitation?.split('.')[0] || activeProcedure.statutoryLimitation}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 font-bold">
                      Fee: {activeProcedure.courtFeeLevel?.split('+')[0] || activeProcedure.courtFeeLevel}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {activeProcedure.title}
                  </h1>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-xs font-mono font-bold text-slate-800 dark:text-zinc-200">
                    <Scale size={14} className="text-[#B88B2A] shrink-0" />
                    <span>{activeProcedure.actReference}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {activeProcedure.overview}
                  </p>
                </div>

                {/* ─── PROCEDURAL METRICS STRIP ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Competent Forum</span>
                    <span className="font-black text-slate-800 dark:text-zinc-100">{activeProcedure.courtForum}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Estimated Timeline</span>
                    <span className="font-black text-slate-800 dark:text-zinc-100">{activeProcedure.estimatedTimeline}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Court Fees & Stamps</span>
                    <span className="font-black text-slate-800 dark:text-zinc-100">{activeProcedure.courtFeeLevel}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Locus Standi</span>
                    <span className="font-black text-slate-800 dark:text-zinc-100 line-clamp-2">{activeProcedure.locusStandi}</span>
                  </div>
                </div>

                {/* ─── SECTION II: STATUTORY LEGAL BASIS ─── */}
                {activeProcedure.legalBasis && (
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Gavel size={14} />
                      <span>Section II: Statutory Legal Basis & Constitutional Mandate</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#B88B2A]/10 to-transparent border-l-4 border-l-[#B88B2A] text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-serif">
                      {activeProcedure.legalBasis}
                    </div>
                  </div>
                )}

                {/* ─── SECTION III: LOCUS STANDI & PREREQUISITES ─── */}
                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#B88B2A]" />
                    <span>Section III: Locus Standi, Standing & Mandatory Preconditions</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      <strong>Who May Initiate (Locus Standi):</strong> {activeProcedure.locusStandi}
                    </p>
                    {activeProcedure.prerequisites && activeProcedure.prerequisites.length > 0 && (
                      <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-800 space-y-1.5">
                        <span className="text-[11px] uppercase font-bold text-slate-400">Mandatory Prerequisites:</span>
                        <ul className="space-y-1">
                          {activeProcedure.prerequisites.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              <span className="text-[#B88B2A] font-bold">✓</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* ─── SECTION IV: STATUTORY LIMITATION & DEADLINES ─── */}
                {activeProcedure.statutoryLimitation && (
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Clock size={14} className="text-[#B88B2A]" />
                      <span>Section IV: Statutory Limitation Periods, Notice Windows & Deadlines</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                      <strong>Applicable Limitation:</strong> {activeProcedure.statutoryLimitation}
                    </div>
                  </div>
                )}

                {/* ─── SECTION V: STEP-BY-STEP LITIGATION PIPELINE ─── */}
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <ListOrdered size={15} />
                      <span>Section V: Complete Step-by-Step Litigation Pipeline</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {activeProcedure.stepByStepPipeline?.length || 0} Procedural Stages
                    </span>
                  </div>

                  <div className="space-y-4">
                    {activeProcedure.stepByStepPipeline?.map((step) => (
                      <div 
                        key={step.stepNumber}
                        className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-3 shadow-xs hover:border-[#B88B2A] transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-[#B88B2A] text-white flex items-center justify-center text-xs font-black shrink-0">
                              {step.stepNumber}
                            </span>
                            <h3 className="text-sm font-black text-slate-900 dark:text-white">
                              {step.stepTitle}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2 text-[11px]">
                            {step.governingRule && (
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-mono font-bold">
                                {step.governingRule}
                              </span>
                            )}
                            {step.actingParty && (
                              <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                                {step.actingParty}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {step.description}
                        </p>

                        {step.advocateTips && (
                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 dark:text-amber-200 font-semibold flex items-start gap-2">
                            <span className="text-[#B88B2A] shrink-0 font-bold">💡 Advocate Practice Tip:</span>
                            <span className="leading-relaxed">{step.advocateTips}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── SECTION VI: MANDATORY DOCUMENTS CHECKLIST ─── */}
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <CheckSquare size={14} className="text-[#B88B2A]" />
                    <span>Section VI: Mandatory Filing Documents & Evidentiary Checklist</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeProcedure.mandatoryDocuments?.map((doc, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-800 text-xs font-medium flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-800 dark:text-zinc-200">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── SECTION VII: DRAFTING & PLEADINGS GUIDANCE ─── */}
                {activeProcedure.draftingGuidance && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FileSignature size={14} className="text-[#B88B2A]" />
                      <span>Section VII: Drafting Structure & Pleading Rules</span>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed space-y-2">
                      <p>{activeProcedure.draftingGuidance}</p>
                    </div>
                  </div>
                )}

                {/* ─── SECTION VIII: COURT FEES, E-FILING & SERVICE ─── */}
                {activeProcedure.courtFeesFilingRules && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Scale size={14} className="text-[#B88B2A]" />
                      <span>Section VIII: Court Fees, Registry Scrutiny & Notice Service</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                      {activeProcedure.courtFeesFilingRules}
                    </div>
                  </div>
                )}

                {/* ─── SECTION IX: HEARING & TRIAL ARGUMENTS ─── */}
                {activeProcedure.hearingAndArguments && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Gavel size={14} className="text-[#B88B2A]" />
                      <span>Section IX: Hearing, Evidence & Oral Arguments Strategy</span>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/20 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                      {activeProcedure.hearingAndArguments}
                    </div>
                  </div>
                )}

                {/* ─── SECTION X: POSSIBLE OUTCOMES ─── */}
                {activeProcedure.possibleOutcomes && activeProcedure.possibleOutcomes.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Award size={14} className="text-[#B88B2A]" />
                      <span>Section X: Possible Judicial Outcomes & Legal Consequences</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {activeProcedure.possibleOutcomes.map((outcome, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/60 dark:border-zinc-800 text-xs text-slate-800 dark:text-zinc-200 flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION XI: APPEALS, REVISION & QUASHING REMEDIES ─── */}
                {activeProcedure.appealRevisionRemedy && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <RotateCcw size={14} />
                      <span>Section XI: Appeals, Revisions & Subsequent Judicial Remedies</span>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-medium">
                      {activeProcedure.appealRevisionRemedy}
                    </div>
                  </div>
                )}

                {/* ─── SECTION XII: COMMON PITFALLS ─── */}
                {activeProcedure.commonPitfalls && activeProcedure.commonPitfalls.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle size={14} />
                      <span>Section XII: Common Litigant Pitfalls & Fatal Procedural Errors</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {activeProcedure.commonPitfalls.map((pitfall, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-950 dark:text-rose-200 flex items-start gap-2">
                          <XCircle size={15} className="text-rose-500 shrink-0 mt-0.5" />
                          <span>{pitfall}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION XIII: PRACTICAL LITIGATION SCENARIO ─── */}
                {activeProcedure.practicalScenario && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <BookOpen size={14} className="text-[#B88B2A]" />
                      <span>Section XIII: Practical Litigation Demonstration (Hypothetical Case Study)</span>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed italic">
                      "{activeProcedure.practicalScenario}"
                    </div>
                  </div>
                )}

                {/* ─── SECTION XIV: AUTHORITATIVE CASE LAWS ─── */}
                {activeProcedure.caseLaws && activeProcedure.caseLaws.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Award size={14} />
                      <span>Section XIV: Authoritative Landmark Precedents & Ratio Decidendi</span>
                    </div>
                    <div className="space-y-3">
                      {activeProcedure.caseLaws.map((cl, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                            <h4 className="font-black text-slate-900 dark:text-white">{cl.title}</h4>
                            <span className="font-mono text-[#B88B2A] font-bold">{cl.citation}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-bold block">{cl.court}</span>
                          <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-serif">
                            "{cl.holding}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION XV: FREQUENTLY ASKED QUESTIONS ─── */}
                {activeProcedure.faqs && activeProcedure.faqs.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <HelpCircle size={14} className="text-[#B88B2A]" />
                      <span>Section XV: Frequently Asked Questions & Practice Notes</span>
                    </div>
                    <div className="space-y-2.5">
                      {activeProcedure.faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/70 dark:border-zinc-800 space-y-1 text-xs">
                          <h5 className="font-black text-slate-900 dark:text-white">Q: {faq.q}</h5>
                          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">A: {faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 6: DEDICATED LEGAL DRAFTING DOSSIER READER
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'DRAFTING_VIEW' && activeDraft && (
            <div className="max-w-4xl mx-auto w-full space-y-6 pb-20">
              
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <button onClick={() => setViewState('BOOKSHELF')} className="hover:text-slate-700 dark:hover:text-white cursor-pointer">
                  Bookshelf
                </button>
                <span>&gt;</span>
                <span>Drafting Library</span>
                <span>&gt;</span>
                <span className="text-[#B88B2A] font-bold truncate max-w-[300px]">
                  {activeDraft.title}
                </span>
              </div>

              {/* Drafting Header Card */}
              <div 
                className="p-6 sm:p-8 rounded-3xl border shadow-lg space-y-6"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 text-xs font-black">
                      {activeDraft.category}
                    </span>
                    <button
                      onClick={() => navigate(activeDraft.actionRoute || '/dashboard/tools/draft-maker')}
                      className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B88B2A] text-[#111111] font-black text-xs hover:brightness-105 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Open in AI Legal Draft Maker</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {activeDraft.title}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {activeDraft.purposeWhenToUse}
                  </p>
                </div>

                {/* Essential Clauses Checklist */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#B88B2A]">
                    Mandatory Pleading & Clause Checklist
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {activeDraft.essentialClauses?.map((c, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 text-xs font-medium flex items-start gap-2">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Model Pleading Structure */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Court-Ready Model Pleading Structure
                    </h3>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(activeDraft.modelPleadingStructure);
                        toast.success("Draft template copied!");
                      }}
                      className="text-xs text-[#B88B2A] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy size={13} />
                      <span>Copy Model Draft</span>
                    </button>
                  </div>

                  <pre className="p-5 rounded-2xl bg-slate-100 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-800 dark:text-zinc-200 whitespace-pre-wrap leading-relaxed">
                    {activeDraft.modelPleadingStructure}
                  </pre>
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 7: DEDICATED LEGAL DICTIONARY & JURISPRUDENCE DOSSIER READER
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'DICTIONARY_VIEW' && activeDictEntry && (
            <div className="max-w-4xl mx-auto w-full space-y-6 pb-24">
              
              {/* Top Navigation & Utility Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      setViewState('BOOKSHELF');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="hover:text-slate-900 dark:hover:text-white cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs transition-colors"
                  >
                    <ArrowLeft size={13} />
                    <span>Back to Dictionary</span>
                  </button>
                  <span>&gt;</span>
                  <span className="text-slate-600 dark:text-zinc-300 truncate max-w-[140px] sm:max-w-[200px]">
                    {activeDictEntry.subcategory || activeDictEntry.category}
                  </span>
                  <span>&gt;</span>
                  <span className="text-[#B88B2A] font-bold truncate max-w-[160px] sm:max-w-[260px]">
                    {activeDictEntry.term}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(activeDictEntry.id)}
                    className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 cursor-pointer text-xs font-bold transition-all shadow-xs ${
                      bookmarks.includes(activeDictEntry.id)
                        ? 'bg-[#B88B2A]/15 border-[#B88B2A] text-[#B88B2A]'
                        : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:border-[#B88B2A]'
                    }`}
                    title="Bookmark this entry"
                  >
                    <Bookmark size={13} fill={bookmarks.includes(activeDictEntry.id) ? '#B88B2A' : 'none'} />
                    <span>{bookmarks.includes(activeDictEntry.id) ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>

                  {/* Copy Citation */}
                  <button
                    onClick={() => {
                      const citation = `"${activeDictEntry.term}", AI LEGAL™ Comprehensive Legal Dictionary & Jurisprudence Knowledge Engine (2026). Jurisdiction: ${activeDictEntry.jurisdiction || 'India'}. Source: ${activeDictEntry.sourceProvenance?.authoritativeSource || 'Verified Authority'}`;
                      navigator.clipboard.writeText(citation);
                      toast.success("Dictionary citation copied to clipboard!");
                    }}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-[#B88B2A] text-slate-600 dark:text-zinc-300 flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                    title="Copy standard legal citation"
                  >
                    <Copy size={13} />
                    <span className="hidden sm:inline">Cite</span>
                  </button>

                  {/* Reader Theme Picker */}
                  <div className="flex items-center rounded-xl border border-slate-200 dark:border-zinc-800 p-0.5 bg-white dark:bg-zinc-900 shadow-xs">
                    <button
                      onClick={() => setReadingTheme('light')}
                      className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                        readingTheme === 'light' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'
                      }`}
                      title="Light Theme"
                    >
                      <Sun size={12} />
                    </button>
                    <button
                      onClick={() => setReadingTheme('sepia')}
                      className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                        readingTheme === 'sepia' ? 'bg-[#f4ecd8] text-[#5b4636]' : 'text-slate-400 hover:text-[#5b4636]'
                      }`}
                      title="Sepia Parchment"
                    >
                      <Coffee size={12} />
                    </button>
                    <button
                      onClick={() => setReadingTheme('dark')}
                      className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                        readingTheme === 'dark' ? 'bg-zinc-800 text-zinc-100' : 'text-slate-400 hover:text-zinc-200'
                      }`}
                      title="Dark Mode"
                    >
                      <Moon size={12} />
                    </button>
                  </div>
                </div>
              </div>

              {/* SECTION I: HERO IDENTITY DOSSIER CARD */}
              <div 
                className="p-6 sm:p-8 rounded-3xl border shadow-lg space-y-6"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#B88B2A]/15 text-[#B88B2A] text-xs font-black tracking-wide uppercase">
                      {activeDictEntry.category}
                    </span>
                    {activeDictEntry.subcategory && (
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 text-xs font-bold">
                        {activeDictEntry.subcategory}
                      </span>
                    )}
                    {activeDictEntry.difficultyLevel && (
                      <span className="px-2.5 py-1 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 text-[11px] font-semibold">
                        {activeDictEntry.difficultyLevel} Level
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    {activeDictEntry.term}
                  </h1>

                  {/* Alternative Spellings / Synonyms */}
                  {activeDictEntry.alternativeSpellings && activeDictEntry.alternativeSpellings.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mr-1">
                        Also Known As:
                      </span>
                      {activeDictEntry.alternativeSpellings.map((alt, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800/60 text-slate-600 dark:text-zinc-400 text-xs font-medium"
                        >
                          {alt}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Phonetics & Identity Strip */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500 dark:text-zinc-400 border-t border-slate-100 dark:border-zinc-800/80">
                    {activeDictEntry.pronunciation && (
                      <div className="flex items-center gap-1.5 font-mono text-[#B88B2A] bg-[#B88B2A]/10 px-2.5 py-1 rounded-lg">
                        <Volume2 size={13} />
                        <span>{activeDictEntry.pronunciation}</span>
                      </div>
                    )}
                    {activeDictEntry.language && (
                      <div className="flex items-center gap-1">
                        <Languages size={13} className="text-slate-400" />
                        <span>{activeDictEntry.language}</span>
                      </div>
                    )}
                    {activeDictEntry.jurisdiction && (
                      <div className="flex items-center gap-1">
                        <Globe size={13} className="text-slate-400" />
                        <span className="font-semibold text-slate-700 dark:text-zinc-300">{activeDictEntry.jurisdiction}</span>
                      </div>
                    )}
                    {activeDictEntry.grammaticalForm && (
                      <div className="text-slate-400 italic">
                        ({activeDictEntry.grammaticalForm})
                      </div>
                    )}
                  </div>
                </div>

                {/* SECTION II: CONCISE DEFINITION CALLOUT */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#B88B2A]/10 border border-[#B88B2A]/25 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#B88B2A]">
                    <Scale size={14} />
                    <span>Concise Legal Definition</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-zinc-100 leading-relaxed">
                    {activeDictEntry.conciseDefinition || activeDictEntry.plainMeaning}
                  </p>
                </div>

                {/* SECTION III: DETAILED LEGAL MEANING & SCOPE */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-[#B88B2A]" />
                    <span>Detailed Legal Meaning & Doctrinal Scope</span>
                  </h3>
                  <div className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed space-y-3">
                    <p>{activeDictEntry.detailedLegalMeaning || activeDictEntry.judicialInterpretation}</p>
                  </div>
                </div>

                {/* SECTION IV: HINDI LEGAL EXPLANATION */}
                {activeDictEntry.hindiExplanation && (
                  <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#B88B2A]">
                      <Languages size={14} />
                      <span>विस्तृत हिंदी व्याख्या (Detailed Hindi Explanation)</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-amber-100/90 leading-relaxed font-normal">
                      {activeDictEntry.hindiExplanation}
                    </p>
                  </div>
                )}

                {/* SECTION V: LEGAL ORIGIN & HISTORICAL DEVELOPMENT */}
                {activeDictEntry.legalOriginAndHistory && (
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Clock size={14} className="text-[#B88B2A]" />
                      <span>Legal Origin & Historical Evolution</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {activeDictEntry.legalOriginAndHistory}
                    </p>
                  </div>
                )}

                {/* SECTION VI: STATUTORY & CONSTITUTIONAL BASIS */}
                {((Array.isArray(activeDictEntry.statutoryBasis) && activeDictEntry.statutoryBasis.length > 0) || (typeof activeDictEntry.statutoryBasis === 'string' && activeDictEntry.statutoryBasis.trim())) && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FileText size={14} className="text-[#B88B2A]" />
                      <span>Statutory & Constitutional Provisions</span>
                    </h3>
                    {Array.isArray(activeDictEntry.statutoryBasis) ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeDictEntry.statutoryBasis.map((sb, idx) => (
                          <div 
                            key={idx}
                            className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 space-y-1"
                          >
                            <div className="flex items-center justify-between text-xs font-bold text-[#B88B2A]">
                              <span>{typeof sb === 'object' ? sb.statute : sb}</span>
                              {typeof sb === 'object' && sb.provision && (
                                <span className="font-mono text-[11px] text-slate-700 dark:text-zinc-300">{sb.provision}</span>
                              )}
                            </div>
                            {typeof sb === 'object' && sb.description && (
                              <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-snug">
                                {sb.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40">
                        <p className="text-xs text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">
                          {activeDictEntry.statutoryBasis}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* SECTION VII: ESSENTIAL ELEMENTS & PREREQUISITES */}
                {activeDictEntry.essentialElements && activeDictEntry.essentialElements.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-[#B88B2A]" />
                      <span>Essential Ingredients & Legal Requirements</span>
                    </h3>
                    <div className="space-y-2">
                      {activeDictEntry.essentialElements.map((elem, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-zinc-900/50 border border-slate-200/60 dark:border-zinc-800/80">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#B88B2A]/20 text-[#B88B2A] text-[11px] font-black flex items-center justify-center mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed">
                            {elem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION VIII: PRACTICAL APPLICATION & REAL-WORLD SCENARIOS */}
                {activeDictEntry.practicalApplicationAndExamples && activeDictEntry.practicalApplicationAndExamples.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-[#B88B2A]" />
                      <span>Practical Case Applications & Scenarios</span>
                    </h3>
                    <div className="space-y-3">
                      {activeDictEntry.practicalApplicationAndExamples.map((ex, idx) => (
                        <div key={idx} className="p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111622] space-y-2">
                          <div className="text-xs font-bold text-[#B88B2A]">
                            Case Scenario {idx + 1}: {ex.scenario}
                          </div>
                          {ex.facts && (
                            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                              <strong className="text-slate-800 dark:text-zinc-300">Facts:</strong> {ex.facts}
                            </p>
                          )}
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed bg-slate-50 dark:bg-zinc-900/60 p-3 rounded-xl border border-slate-100 dark:border-zinc-800">
                            <strong className="text-[#B88B2A]">Application of Law:</strong> {ex.application}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION IX: LANDMARK JUDGMENTS & RATIO DECIDENDI */}
                {activeDictEntry.landmarkJudgments && activeDictEntry.landmarkJudgments.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Gavel size={14} />
                      <span>Landmark Precedents & Judicial Interpretation</span>
                    </h3>
                    <div className="space-y-3">
                      {activeDictEntry.landmarkJudgments.map((jm, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                              {jm.caseName}
                            </h4>
                            <span className="text-[11px] font-mono text-[#B88B2A] font-bold">
                              {jm.citation || jm.year}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-zinc-400 flex items-center gap-2">
                            <span>{jm.court || 'Supreme Court of India'}</span>
                            {jm.year && <span>• {jm.year}</span>}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed pt-1">
                            <strong className="text-[#B88B2A]">Ratio Decidendi:</strong> {jm.ratioDecidendi}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION X: EXCEPTIONS & MISCONCEPTIONS */}
                {activeDictEntry.exceptionsAndLimitations && activeDictEntry.exceptionsAndLimitations.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle size={14} />
                      <span>Exceptions, Limitations & Unsettled Nuances</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                      {activeDictEntry.exceptionsAndLimitations.map((exc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* SECTION XI: PRACTICAL LITIGATION & COURTROOM USE */}
                {activeDictEntry.practicalLitigationNotes && activeDictEntry.practicalLitigationNotes.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Scale size={14} className="text-[#B88B2A]" />
                      <span>Practical Litigation & Courtroom Practice</span>
                    </h3>
                    <div className="space-y-2">
                      {activeDictEntry.practicalLitigationNotes.map((note, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50/60 dark:bg-zinc-900/40 border border-slate-200/80 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION XII: RELATED TERMS & CROSS-REFERENCES */}
                {activeDictEntry.relatedTerms && activeDictEntry.relatedTerms.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Compass size={14} className="text-[#B88B2A]" />
                      <span>Related Jurisprudence Cross-References</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeDictEntry.relatedTerms.map((relId, idx) => {
                        const targetTerm = getDictionaryTermById(relId);
                        const displayLabel = targetTerm ? targetTerm.term : relId.replace('dict-', '').replace(/-/g, ' ');
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              if (targetTerm) {
                                handleOpenDictEntry(targetTerm);
                              } else {
                                setSearchQuery(displayLabel);
                                setViewState('BOOKSHELF');
                              }
                            }}
                            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-[#B88B2A] hover:text-[#B88B2A] text-xs font-medium text-slate-700 dark:text-zinc-300 transition-all cursor-pointer flex items-center gap-1"
                          >
                            <span>{displayLabel}</span>
                            <ArrowUpRight size={11} className="text-[#B88B2A]" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* SECTION XIII: FAQS & EXAM REVISION NOTES */}
                {activeDictEntry.faqsAndExamNotes && activeDictEntry.faqsAndExamNotes.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Award size={14} className="text-[#B88B2A]" />
                      <span>Judiciary & Examination High-Yield Notes</span>
                    </h3>
                    <div className="space-y-3">
                      {activeDictEntry.faqsAndExamNotes.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 space-y-1.5">
                          <div className="text-xs font-bold text-slate-900 dark:text-white">
                            Q{idx + 1}: {faq.question}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION XIV: SOURCE PROVENANCE & EDITORIAL VERIFICATION */}
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span className="font-bold text-slate-800 dark:text-zinc-200">
                        {activeDictEntry.sourceProvenance?.editorialStatus || 'Verified Authority'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate max-w-[420px]">
                      {activeDictEntry.sourceProvenance?.authoritativeSource || 'Legislative Department & Supreme Court of India'}
                    </p>
                  </div>
                  <div className="text-right text-[11px] text-slate-400">
                    Reviewed: {activeDictEntry.sourceProvenance?.lastReviewed || '2026-10-10'}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 8: DEDICATED LEGAL ARTICLE & DOCTRINAL TREATISE READER
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'ARTICLE_VIEW' && activeArticle && (
            <div className="max-w-4xl mx-auto w-full space-y-6 pb-24">
              
              {/* Top Navigation & Breadcrumb Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      setViewState('BOOKSHELF');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="hover:text-slate-900 dark:hover:text-white cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs transition-colors"
                  >
                    <ArrowLeft size={13} />
                    <span>Back to Articles</span>
                  </button>
                  <span>&gt;</span>
                  <span className="text-slate-600 dark:text-zinc-300">{activeArticle.category}</span>
                  <span>&gt;</span>
                  <span className="text-[#B88B2A] font-bold truncate max-w-[200px] sm:max-w-[320px]">
                    {activeArticle.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(activeArticle.id)}
                    className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 cursor-pointer text-xs font-bold transition-all shadow-xs ${
                      bookmarks.includes(activeArticle.id)
                        ? 'bg-[#B88B2A]/15 border-[#B88B2A] text-[#B88B2A]'
                        : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:border-[#B88B2A]'
                    }`}
                    title="Bookmark this treatise"
                  >
                    <Bookmark size={13} fill={bookmarks.includes(activeArticle.id) ? '#B88B2A' : 'none'} />
                    <span>{bookmarks.includes(activeArticle.id) ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>

                  {/* Copy Reference */}
                  <button
                    onClick={() => {
                      const citation = `${activeArticle.title} (${activeArticle.category}), AI LEGAL™ Knowledge Hub (${activeArticle.publishedDate}). Reference: ${activeArticle.sourceMetadata?.gazetteCitation || 'Verified Legal Repository'}`;
                      navigator.clipboard.writeText(citation);
                      toast.success("Treatise reference copied to clipboard!");
                    }}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-[#B88B2A] text-slate-600 dark:text-zinc-300 flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                    title="Copy citation"
                  >
                    <Copy size={13} />
                    <span className="hidden sm:inline">Cite</span>
                  </button>
                </div>
              </div>

              {/* Hero Card */}
              <div 
                className="p-6 sm:p-8 rounded-3xl border shadow-lg space-y-6"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                <div className="space-y-4">
                  {/* Category & Status Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#B88B2A]/15 text-[#B88B2A] font-black uppercase tracking-wider text-[10px]">
                        {activeArticle.category}
                      </span>
                      {activeArticle.jurisdiction && (
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold text-[11px] flex items-center gap-1">
                          <Globe size={11} className="text-[#B88B2A]" />
                          <span>{activeArticle.jurisdiction.name}</span>
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px] flex items-center gap-1">
                        <ShieldCheck size={12} />
                        <span>Verified Treatise</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 font-semibold text-[11px]">
                      <Clock size={12} />
                      <span>{activeArticle.readTime || '18 min'} read</span>
                      <span>•</span>
                      <span>{activeArticle.publishedDate}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {activeArticle.title}
                  </h1>

                  {/* Author Line */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
                    <span>By</span>
                    <span className="font-bold text-slate-800 dark:text-zinc-200">{activeArticle.author}</span>
                  </div>

                  {/* Editorial Abstract */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 border-l-4 border-l-[#B88B2A] border border-amber-500/15">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#B88B2A] block mb-1">
                      EDITORIAL ABSTRACT & CORE DOCTRINE
                    </span>
                    <p className="text-xs sm:text-sm font-serif italic text-slate-700 dark:text-zinc-300 leading-relaxed">
                      "{activeArticle.summary}"
                    </p>
                  </div>

                  {/* Key Statutes & Tags */}
                  <div className="space-y-2 pt-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-400 mr-1">Statutes:</span>
                      {activeArticle.keyStatutes?.map((st, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/80 text-[11px] font-mono text-slate-700 dark:text-zinc-300 font-bold border border-slate-200/60 dark:border-zinc-700/60">
                          ⚖️ {st}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-400 mr-1">Tags:</span>
                      {activeArticle.tags?.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-[#B88B2A]/10 text-[#B88B2A] text-[10px] font-bold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Table of Contents (TOC) Quick-Jump Bar */}
                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold uppercase tracking-wider text-[#B88B2A] text-[11px] flex items-center gap-1.5">
                      <ListOrdered size={14} />
                      <span>Treatise Table of Contents (13 Sections)</span>
                    </span>
                    <span className="text-[11px] text-slate-400">Click to jump</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
                    {activeArticle.contentSections?.map((sec, idx) => {
                      const shortTitle = sec.heading.replace(/^[IVXLCDM]+\.\s*/, '').split(':')[0].split('—')[0].trim();
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            const el = document.getElementById(`art-section-${idx}`);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#B88B2A]/15 dark:bg-zinc-800/80 dark:hover:bg-[#B88B2A]/20 text-slate-600 hover:text-[#B88B2A] dark:text-zinc-400 dark:hover:text-[#B88B2A] text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer border border-transparent hover:border-[#B88B2A]/30"
                        >
                          <span className="text-[#B88B2A] mr-1">{sec.sectionNumber || (idx + 1)}.</span>
                          <span>{shortTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Substantive 13-Layer Treatise Content Sections */}
                <div className="space-y-8 pt-4 border-t divide-y divide-slate-100 dark:divide-zinc-800/80" style={{ borderColor: readerThemeColors.border }}>
                  {activeArticle.contentSections?.map((sec, idx) => {
                    const isHindi = sec.type === 'hindi' || sec.heading.toLowerCase().includes('hindi') || sec.heading.includes('हिंदी');
                    const isStatutory = sec.type === 'statutory' || sec.heading.toLowerCase().includes('statutory');
                    const isCases = sec.type === 'cases' || sec.heading.toLowerCase().includes('judgment') || sec.heading.toLowerCase().includes('case');
                    const isScenarios = sec.type === 'scenarios' || sec.heading.toLowerCase().includes('scenario') || sec.heading.toLowerCase().includes('illustration');
                    const isAdvocate = sec.type === 'advocate' || sec.heading.toLowerCase().includes('advocate');
                    const isExam = sec.type === 'exam' || sec.heading.toLowerCase().includes('exam') || sec.heading.toLowerCase().includes('mcq');

                    return (
                      <div 
                        key={idx} 
                        id={`art-section-${idx}`}
                        className={`pt-6 first:pt-0 space-y-4 scroll-mt-24 ${
                          isHindi 
                            ? 'p-5 sm:p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20' 
                            : ''
                        }`}
                      >
                        {/* Section Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#B88B2A]/15 text-[#B88B2A] text-xs font-mono font-black">
                              {sec.sectionNumber || `§${idx + 1}`}
                            </span>
                            <span>{sec.heading}</span>
                          </h2>

                          {isHindi && (
                            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                              <Languages size={11} />
                              <span>हिंदी कानूनी विश्लेषण</span>
                            </span>
                          )}
                          {isStatutory && (
                            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                              <Scale size={11} />
                              <span>Statutory Text</span>
                            </span>
                          )}
                          {isCases && (
                            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                              <Gavel size={11} />
                              <span>Landmark Bench Ratio</span>
                            </span>
                          )}
                          {isExam && (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                              <GraduationCap size={11} />
                              <span>Judiciary High-Yield</span>
                            </span>
                          )}
                        </div>

                        {/* Markdown Formatted Content Body */}
                        <div className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-serif pl-2 border-l-2 border-slate-200 dark:border-zinc-800">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              h1: ({node, ...props}) => <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-4 mb-2" {...props} />,
                              h2: ({node, ...props}) => <h4 className="text-sm sm:text-base font-extrabold text-[#B88B2A] mt-3 mb-1.5" {...props} />,
                              h3: ({node, ...props}) => <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-zinc-200 mt-3 mb-1" {...props} />,
                              h4: ({node, ...props}) => <h6 className="text-xs font-bold text-slate-700 dark:text-zinc-300 mt-2 mb-1" {...props} />,
                              p: ({node, ...props}) => <p className="mb-3 leading-relaxed" {...props} />,
                              blockquote: ({node, ...props}) => (
                                <blockquote className="my-3 pl-3.5 border-l-4 border-l-[#B88B2A] bg-amber-500/5 dark:bg-amber-500/10 p-3 rounded-r-xl italic text-slate-800 dark:text-zinc-200 text-xs sm:text-sm" {...props} />
                              ),
                              table: ({node, ...props}) => (
                                <div className="overflow-x-auto my-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
                                  <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200 dark:divide-zinc-800" {...props} />
                                </div>
                              ),
                              thead: ({node, ...props}) => <thead className="bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white font-bold" {...props} />,
                              th: ({node, ...props}) => <th className="p-2.5 font-bold border-b border-slate-200 dark:border-zinc-800 text-[11px] uppercase tracking-wider text-slate-700 dark:text-zinc-200" {...props} />,
                              td: ({node, ...props}) => <td className="p-2.5 border-t border-slate-100 dark:border-zinc-800/60 align-top text-slate-700 dark:text-zinc-300" {...props} />,
                              ul: ({node, ...props}) => <ul className="list-disc pl-5 my-2 space-y-1 text-slate-700 dark:text-zinc-300" {...props} />,
                              ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-2 space-y-1 text-slate-700 dark:text-zinc-300" {...props} />,
                              li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
                              strong: ({node, ...props}) => <strong className="font-extrabold text-slate-900 dark:text-white" {...props} />
                            }}
                          >
                            {sec.body}
                          </ReactMarkdown>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Source Metadata & Verification Footer Card */}
                {activeArticle.sourceMetadata && (
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-black text-[#B88B2A] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                        <ShieldCheck size={13} />
                        <span>AUTHORITATIVE SOURCE METADATA & CITATION</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Ver. {activeArticle.sourceMetadata.version || '2026.4'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 dark:text-zinc-300 space-y-1 font-sans">
                      <p><strong>Primary Source:</strong> {activeArticle.sourceMetadata.sourceTitle}</p>
                      {activeArticle.sourceMetadata.gazetteCitation && (
                        <p><strong>Official Citation:</strong> {activeArticle.sourceMetadata.gazetteCitation}</p>
                      )}
                      <p><strong>Verification:</strong> {activeArticle.sourceMetadata.reviewStatus} ({activeArticle.sourceMetadata.verificationDate})</p>
                    </div>

                    {activeArticle.sourceMetadata.officialUrl && (
                      <div className="pt-2">
                        <a
                          href={activeArticle.sourceMetadata.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#B88B2A] hover:underline font-bold"
                        >
                          <span>Open Official Government Portal / Gazette Document</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Interactive AI Research Footer */}
                <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: readerThemeColors.border }}>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const citation = `${activeArticle.title} — ${activeArticle.author}, AI LEGAL™ Knowledge Hub`;
                        navigator.clipboard.writeText(citation);
                        toast.success("Citation copied to clipboard!");
                      }}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-300 hover:text-[#B88B2A] font-bold flex items-center gap-1.5 cursor-pointer bg-white dark:bg-zinc-900 transition-colors shadow-xs"
                    >
                      <Copy size={13} />
                      <span>Copy Citation</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(activeArticle.id)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-300 hover:text-[#B88B2A] font-bold flex items-center gap-1.5 cursor-pointer bg-white dark:bg-zinc-900 transition-colors shadow-xs"
                    >
                      <Bookmark size={13} fill={bookmarks.includes(activeArticle.id) ? '#B88B2A' : 'none'} />
                      <span>{bookmarks.includes(activeArticle.id) ? 'Saved' : 'Bookmark'}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 9: DEDICATED RIGHTS & LEGAL REMEDIES ACTION PLAN
             ══════════════════════════════════════════════════════════════════ */}
          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 9: DEDICATED RIGHTS & REMEDIES COMPLETE LEGAL DOSSIER
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'REMEDY_VIEW' && activeRemedy && (
            <div className="max-w-5xl mx-auto w-full space-y-6 pb-24">
              
              {/* Header Navigation & Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold">
                <div className="flex items-center gap-2 text-slate-400">
                  <button 
                    onClick={() => setViewState('BOOKSHELF')} 
                    className="hover:text-slate-800 dark:hover:text-white cursor-pointer flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Remedies</span>
                  </button>
                  <span>/</span>
                  <span className="text-slate-600 dark:text-zinc-400 font-bold">{activeRemedy.category}</span>
                  <span>/</span>
                  <span className="text-[#B88B2A] font-extrabold truncate max-w-[280px]">
                    {activeRemedy.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${activeRemedy.title}\nCategory: ${activeRemedy.category}\nForum: ${activeRemedy.forum}\nStatutory Basis: ${activeRemedy.statutoryBasis}\nOverview: ${activeRemedy.overview || activeRemedy.summary}`);
                      toast.success("Remedy summary copied to clipboard!");
                    }}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-[#B88B2A] text-slate-600 dark:text-zinc-300 hover:text-[#B88B2A] bg-white dark:bg-[#111622] flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                  >
                    <Copy size={13} />
                    <span>Copy Summary</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-[#B88B2A] text-slate-600 dark:text-zinc-300 hover:text-[#B88B2A] bg-white dark:bg-[#111622] flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                  >
                    <FileText size={13} />
                    <span>Print Dossier</span>
                  </button>
                </div>
              </div>

              {/* Main Legal Remedy Dossier Card */}
              <div 
                className="p-6 sm:p-10 rounded-3xl border shadow-xl space-y-8"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                {/* ─── SECTION I: HERO & OVERVIEW ─── */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 font-black">
                      {activeRemedy.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 font-bold">
                      {activeRemedy.remedyType}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 font-extrabold flex items-center gap-1">
                      <AlertTriangle size={12} />
                      <span>Urgency: {activeRemedy.urgencyLevel || activeRemedy.emergencyLevel || 'High'}</span>
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {activeRemedy.title}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {activeRemedy.overview || activeRemedy.summary}
                  </p>
                </div>

                {/* ─── REMEDIAL METRICS STRIP ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Competent Forum</span>
                    <span className="font-black text-slate-800 dark:text-zinc-100">{activeRemedy.forum}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">When to Invoke</span>
                    <span className="font-medium text-slate-700 dark:text-zinc-300">{activeRemedy.whenToUse}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">Remedy Classification</span>
                    <span className="font-black text-[#B88B2A]">{activeRemedy.remedyType}</span>
                  </div>
                </div>

                {/* ─── SECTION II: CONSTITUTIONAL & STATUTORY BASIS ─── */}
                {activeRemedy.statutoryBasis && (
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Scale size={14} />
                      <span>Section II: Constitutional & Statutory Legal Basis</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#B88B2A]/10 to-transparent border-l-4 border-l-[#B88B2A] text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-serif">
                      {activeRemedy.statutoryBasis}
                    </div>
                  </div>
                )}

                {/* ─── SECTION III: SCOPE, ELIGIBILITY & EXCEPTIONS ─── */}
                {activeRemedy.scopeAndEligibility && (
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#B88B2A]" />
                      <span>Section III: Scope, Eligibility & Standing (Locus Standi)</span>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 space-y-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Who Can Invoke (Aggrieved Party)</span>
                        <p className="font-semibold text-slate-900 dark:text-white mt-0.5">{activeRemedy.scopeAndEligibility.whoCanInvoke}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-800">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Against Whom Remedy Lies</span>
                        <p className="font-medium text-slate-800 dark:text-zinc-200 mt-0.5">{activeRemedy.scopeAndEligibility.againstWhom}</p>
                      </div>
                      {activeRemedy.scopeAndEligibility.statutoryExceptions && (
                        <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-800">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block">Statutory Exceptions & Exclusions</span>
                          <p className="text-slate-600 dark:text-zinc-400 mt-0.5 italic">{activeRemedy.scopeAndEligibility.statutoryExceptions}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ─── SECTION IV: VIOLATION & FACT-BASED SCENARIOS ─── */}
                {activeRemedy.violationScenarios && activeRemedy.violationScenarios.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <BookOpen size={14} />
                      <span>Section IV: Practical Violation & Fact-Based Hypothetical Scenarios</span>
                    </div>
                    <div className="space-y-4">
                      {activeRemedy.violationScenarios.map((sc, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-2.5 shadow-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-[#B88B2A]/20 text-[#B88B2A] text-xs font-black flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white">
                              {sc.scenarioTitle}
                            </h4>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/40 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed italic">
                            <strong className="not-italic text-slate-800 dark:text-zinc-100 font-bold">Factual Scenario: </strong>
                            "{sc.facts}"
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-950 dark:text-rose-300">
                              <strong className="block text-[10px] uppercase font-bold text-rose-600">Legal Infringement:</strong>
                              <span>{sc.legalViolation}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-300">
                              <strong className="block text-[10px] uppercase font-bold text-emerald-600">Applicable Remedy:</strong>
                              <span>{sc.applicableRemedy}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION V: STEP-BY-STEP REMEDY PROCESS ─── */}
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <ListOrdered size={15} />
                      <span>Section V: Step-by-Step Statutory Remedy & Action Pipeline</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {(activeRemedy.remedyProcess?.length || activeRemedy.processSteps?.length || activeRemedy.keySteps?.length || 0)} Action Stages
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {(activeRemedy.remedyProcess || (activeRemedy.processSteps || activeRemedy.keySteps || []).map((step, idx) => ({ stageNumber: idx + 1, stageTitle: `Action Step ${idx + 1}`, action: step }))).map((stage, idx) => (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2 shadow-xs hover:border-[#B88B2A] transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-lg bg-[#B88B2A] text-white flex items-center justify-center text-xs font-black shrink-0">
                            {stage.stageNumber || idx + 1}
                          </span>
                          <h4 className="text-sm font-black text-slate-900 dark:text-white">
                            {stage.stageTitle}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed pl-9">
                          {stage.action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── SECTION VI: MANDATORY DOCUMENTS & EVIDENCE CHECKLIST ─── */}
                {activeRemedy.documentsAndEvidence && activeRemedy.documentsAndEvidence.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <CheckSquare size={14} className="text-[#B88B2A]" />
                      <span>Section VI: Documents & Evidentiary Preservation Checklist</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeRemedy.documentsAndEvidence.map((doc, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-800 text-xs font-medium flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-800 dark:text-zinc-200">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION VII: AUTHORITIES & JURISDICTION ─── */}
                {activeRemedy.authoritiesAndJurisdiction && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Gavel size={14} className="text-[#B88B2A]" />
                      <span>Section VII: Authorities, Competent Forums & Jurisdiction</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(activeRemedy.authoritiesAndJurisdiction).map(([key, val], idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 text-xs space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88B2A] block">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <p className="font-semibold text-slate-800 dark:text-zinc-200">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION VIII: STATUTORY LIMITATION & DEADLINES ─── */}
                {activeRemedy.limitationAndDeadlines && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Clock size={14} className="text-[#B88B2A]" />
                      <span>Section VIII: Statutory Limitation Periods & Urgent Deadlines</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                      <strong>Applicable Limitation & Deadlines: </strong>
                      {activeRemedy.limitationAndDeadlines}
                    </div>
                  </div>
                )}

                {/* ─── SECTION IX: POSSIBLE REMEDIES & JUDICIAL OUTCOMES ─── */}
                {activeRemedy.possibleOutcomes && activeRemedy.possibleOutcomes.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Award size={14} className="text-[#B88B2A]" />
                      <span>Section IX: Possible Judicial Remedies & Legal Relief Outcomes</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {activeRemedy.possibleOutcomes.map((outcome, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/60 dark:border-zinc-800 text-xs text-slate-800 dark:text-zinc-200 flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION X: VERIFIED LANDMARK JUDGMENTS ─── */}
                {activeRemedy.landmarkJudgments && activeRemedy.landmarkJudgments.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Award size={14} />
                      <span>Section X: Authoritative Landmark Precedents & Judicial Ratio</span>
                    </div>
                    <div className="space-y-3">
                      {activeRemedy.landmarkJudgments.map((lm, idx) => (
                        <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                            <h4 className="font-black text-slate-900 dark:text-white">{lm.title}</h4>
                            <span className="font-mono text-[#B88B2A] font-bold">{lm.citation}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-bold block">{lm.court}</span>
                          <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-serif">
                            "{lm.holding}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fallback Landmark Precedent if legacy single string */}
                {!activeRemedy.landmarkJudgments && activeRemedy.landmarkCase && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#B88B2A] block">
                      BINDING JUDICIAL DIRECTIVE / BENCHMARK PRECEDENT
                    </span>
                    <p className="font-serif italic font-bold text-slate-800 dark:text-zinc-200">
                      {activeRemedy.landmarkCase}
                    </p>
                  </div>
                )}

                {/* ─── SECTION XI: ADVOCATE'S PRACTICAL & TACTICAL GUIDE ─── */}
                {activeRemedy.advocateGuide && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <FileSignature size={14} />
                      <span>Section XI: Advocate's Tactical & Practical Litigation Guide</span>
                    </div>
                    <div className="space-y-3">
                      {activeRemedy.advocateGuide.preFilingChecklist && (
                        <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-950 dark:text-blue-200 font-medium">
                          <strong className="block text-[10px] uppercase font-bold text-blue-600 mb-1">Pre-Filing Verification Checklist:</strong>
                          <span>{activeRemedy.advocateGuide.preFilingChecklist}</span>
                        </div>
                      )}
                      {activeRemedy.advocateGuide.commonPitfalls && (
                        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-950 dark:text-rose-200 font-medium">
                          <strong className="block text-[10px] uppercase font-bold text-rose-600 mb-1">Common Pitfalls & Procedural Errors:</strong>
                          <span>{activeRemedy.advocateGuide.commonPitfalls}</span>
                        </div>
                      )}
                      {activeRemedy.advocateGuide.tacticalAdvice && (
                        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 dark:text-amber-200 font-medium">
                          <strong className="block text-[10px] uppercase font-bold text-[#B88B2A] mb-1">Advocate Practice Tip & Court Strategy:</strong>
                          <span>{activeRemedy.advocateGuide.tacticalAdvice}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ─── SECTION XII: HINDI PLAIN-LANGUAGE EXPLANATION (सरल हिंदी व्याख्या) ─── */}
                {activeRemedy.hindiExplanation && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Languages size={14} />
                      <span>Section XII: सरल हिंदी व्याख्या (Plain-Language Hindi Explanation)</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#B88B2A]/5 to-transparent border-l-4 border-l-[#B88B2A] text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
                      {activeRemedy.hindiExplanation}
                    </div>
                  </div>
                )}

                {/* ─── SECTION XIII: FREQUENTLY ASKED QUESTIONS ─── */}
                {activeRemedy.faqs && activeRemedy.faqs.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <HelpCircle size={14} className="text-[#B88B2A]" />
                      <span>Section XIII: Frequently Asked Questions & Practice Notes</span>
                    </div>
                    <div className="space-y-2.5">
                      {activeRemedy.faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/70 dark:border-zinc-800 space-y-1 text-xs">
                          <h5 className="font-black text-slate-900 dark:text-white">Q: {faq.q}</h5>
                          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">A: {faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Action Bar */}
                <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: readerThemeColors.border }}>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${activeRemedy.title} — Forum: ${activeRemedy.forum}\nKey steps:\n${(activeRemedy.remedyProcess || activeRemedy.processSteps || []).map((s, i) => `${i + 1}. ${s.stageTitle || s.action || s}`).join('\n')}`);
                      toast.success("Remedy instructions copied to clipboard!");
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-[#B88B2A] hover:text-white text-xs text-slate-700 dark:text-zinc-200 font-bold flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Copy size={13} />
                    <span>Copy Full Action Steps</span>
                  </button>

                  <button
                    onClick={() => setViewState('BOOKSHELF')}
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-[#B88B2A] text-xs text-[#B88B2A] font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <ArrowLeft size={13} />
                    <span>Back to Remedies Catalog</span>
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              VIEW STATE 10: DEDICATED LEGAL UPDATE & GAZETTE NOTIFICATION
             ══════════════════════════════════════════════════════════════════ */}
          {viewState === 'UPDATE_VIEW' && activeUpdate && (
            <div className="max-w-4xl mx-auto w-full space-y-6 pb-20">
              
              {/* Breadcrumb & Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <button onClick={() => setViewState('BOOKSHELF')} className="hover:text-slate-700 dark:hover:text-white cursor-pointer">
                    Bookshelf
                  </button>
                  <span>&gt;</span>
                  <span>Legal Updates & Gazette Notifications</span>
                  <span>&gt;</span>
                  <span className="text-[#B88B2A] font-bold truncate max-w-[280px]">
                    {activeUpdate.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewState('BOOKSHELF')}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 hover:border-[#B88B2A] text-[11px] text-[#B88B2A] font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <ArrowLeft size={12} />
                    <span>Back to Updates</span>
                  </button>
                </div>
              </div>

              {/* Main Masterclass Container */}
              <div 
                className="p-6 sm:p-8 rounded-3xl border shadow-xl space-y-8"
                style={{ backgroundColor: readerThemeColors.surface, borderColor: readerThemeColors.border }}
              >
                
                {/* ─── SECTION I: OFFICIAL UPDATE IDENTITY & EXECUTIVE HEADER ─── */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 text-xs font-black">
                        {activeUpdate.category}
                      </span>
                      {activeUpdate.subCategory && (
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 text-xs font-bold">
                          {activeUpdate.subCategory}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-black flex items-center gap-1">
                        <ShieldCheck size={13} />
                        <span>{activeUpdate.officialIdentity?.verificationStatus || 'Verified Official Record'}</span>
                      </span>
                    </div>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {activeUpdate.title}
                  </h1>

                  {/* Metadata Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/70 dark:border-zinc-800/80 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Issuing Authority</span>
                      <strong className="text-slate-800 dark:text-zinc-100">{activeUpdate.officialIdentity?.issuingAuthority || activeUpdate.authority}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Gazette / Doc Number</span>
                      <strong className="font-mono text-[#B88B2A]">{activeUpdate.officialIdentity?.documentNumber || 'Official Directive'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Jurisdiction</span>
                      <strong className="text-slate-800 dark:text-zinc-100">{activeUpdate.officialIdentity?.jurisdiction || 'India (National)'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Publication / Gazette Date</span>
                      <strong className="text-slate-800 dark:text-zinc-100">{activeUpdate.officialIdentity?.publicationDate || activeUpdate.date}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Effective / In-Force Date</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{activeUpdate.officialIdentity?.effectiveDate || activeUpdate.effectiveDate}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Governing Statute</span>
                      <strong className="text-slate-800 dark:text-zinc-100 truncate block">{activeUpdate.officialIdentity?.governingAct || activeUpdate.category}</strong>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed pt-1">
                    {activeUpdate.summary}
                  </p>
                </div>

                {/* ─── SECTION II: UPDATE CLASSIFICATION & LEGAL STATUS ─── */}
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                    <Scale size={14} />
                    <span>Section II: Update Classification & Legal Enforceability Status</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 dark:text-amber-200 leading-relaxed space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold uppercase text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300">
                        Current Status
                      </span>
                      <strong className="text-sm font-black">{activeUpdate.legalStatus}</strong>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-zinc-400 pt-1">
                      Distinction: <strong>Enacted</strong> by the Competent Legislature, <strong>Published</strong> in the Official Gazette of India, and <strong>In Force</strong> as of the specified effective date.
                    </p>
                  </div>
                </div>

                {/* ─── SECTION III: ORIGINAL LEGAL TEXT & STATUTORY EXTRACT ─── */}
                {activeUpdate.originalLegalText && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <FileText size={14} />
                      <span>Section III: Original Legal Text & Statutory Extract (Verbatim Gazette Record)</span>
                    </div>
                    <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/5 dark:bg-zinc-900/90 border-l-4 border-l-[#B88B2A] border-t border-r border-b border-amber-500/20 space-y-2">
                      <p className="text-xs sm:text-sm font-serif italic text-slate-800 dark:text-zinc-200 leading-relaxed">
                        "{activeUpdate.originalLegalText}"
                      </p>
                      <div className="text-[10px] text-slate-400 font-sans flex items-center justify-between pt-2 border-t border-slate-200/50 dark:border-zinc-800">
                        <span>Official Gazette / Ministry Mandate Text</span>
                        <span>Analytical commentary and procedural interpretation follow below</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── SECTION IV: DETAILED LEGAL EXPLANATION ─── */}
                {activeUpdate.detailedExplanation && (
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <ArrowUpRight size={14} />
                      <span>Section IV: Detailed Legal & Legislative Explanation</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/70 dark:border-zinc-800 space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block">
                          What Has Changed
                        </span>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {activeUpdate.detailedExplanation.whatChanged}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/70 dark:border-zinc-800 space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#B88B2A] block">
                          Why This Change Matters
                        </span>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {activeUpdate.detailedExplanation.whyItMatters}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/70 dark:border-zinc-800 space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                          Legal Position Before Update
                        </span>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {activeUpdate.detailedExplanation.preUpdatePosition}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/70 dark:border-zinc-800 space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                          New Substantive / Procedural Position
                        </span>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {activeUpdate.detailedExplanation.newLegalPosition}
                        </p>
                      </div>
                    </div>

                    {activeUpdate.detailedExplanation.affectedStakeholders && (
                      <div className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/60 dark:border-zinc-800 space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                          Directly Affected Stakeholders & Institutions
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {activeUpdate.detailedExplanation.affectedStakeholders.map((sh, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-zinc-800 text-[11px] font-semibold text-slate-700 dark:text-zinc-300">
                              • {sh}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ─── SECTION V: PROVISION-BY-PROVISION COMPARATIVE MATRIX ─── */}
                {activeUpdate.provisionComparison && activeUpdate.provisionComparison.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Layers size={14} />
                      <span>Section V: Provision-by-Provision Comparative Matrix (Old Law vs New Law)</span>
                    </div>

                    <div className="space-y-3">
                      {activeUpdate.provisionComparison.map((comp, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-800 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide">
                              {comp.provision}
                            </h4>
                            <span className="text-[10px] font-bold text-[#B88B2A] px-2 py-0.5 rounded bg-amber-500/10">
                              Item {idx + 1}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 space-y-1">
                              <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 block">
                                Previous Law / Position
                              </span>
                              <p className="text-slate-700 dark:text-zinc-300">{comp.oldLaw}</p>
                            </div>

                            <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15 space-y-1">
                              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">
                                New Law / Position
                              </span>
                              <p className="text-slate-700 dark:text-zinc-300">{comp.newLaw}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-[11px] text-slate-500 dark:text-zinc-400">
                            <div><strong>Nature of Change:</strong> {comp.natureOfChange}</div>
                            <div><strong>Legal Effect:</strong> {comp.legalEffect}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION VI: EFFECTIVE DATE, APPLICABILITY & TRANSITIONAL RULES ─── */}
                {activeUpdate.transitionalRules && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>Section VI: Effective Date, Applicability & Transitional Rules</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/15 space-y-1 text-xs">
                        <strong className="block text-[10px] uppercase font-bold text-blue-600">Commencement Mandate</strong>
                        <p className="text-slate-700 dark:text-zinc-300">{activeUpdate.transitionalRules.commencementRule}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/15 space-y-1 text-xs">
                        <strong className="block text-[10px] uppercase font-bold text-purple-600">Territorial & Personal Scope</strong>
                        <p className="text-slate-700 dark:text-zinc-300">{activeUpdate.transitionalRules.applicability}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15 space-y-1 text-xs">
                        <strong className="block text-[10px] uppercase font-bold text-[#B88B2A]">Pending Matters & Savings Clause</strong>
                        <p className="text-slate-700 dark:text-zinc-300">{activeUpdate.transitionalRules.pendingProceedings}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── SECTION VII: DETAILED LEGAL AND REGULATORY ANALYSIS ─── */}
                {activeUpdate.regulatoryAnalysis && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Scale size={14} />
                      <span>Section VII: In-Depth Legal Framework & Compliance Analysis</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 text-xs space-y-1">
                        <strong className="text-slate-900 dark:text-white font-bold block">Statutory & Constitutional Framework:</strong>
                        <p className="text-slate-600 dark:text-zinc-300">{activeUpdate.regulatoryAnalysis.statutoryFramework}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 text-xs space-y-1">
                        <strong className="text-slate-900 dark:text-white font-bold block">Compliance & Administrative Duties:</strong>
                        <p className="text-slate-600 dark:text-zinc-300">{activeUpdate.regulatoryAnalysis.complianceObligations}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/15 text-xs space-y-1">
                        <strong className="text-rose-700 dark:text-rose-400 font-bold block">Penal Consequences & Liabilities for Default:</strong>
                        <p className="text-slate-700 dark:text-zinc-300">{activeUpdate.regulatoryAnalysis.penalConsequences}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── SECTION VIII: PRACTICAL IMPACT AND ACTION CHECKLIST ─── */}
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                    <CheckSquare size={14} />
                    <span>Section VIII: Practical Impact & Operational Action Checklist</span>
                  </div>

                  {activeUpdate.practicalImpactAndChecklist && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {activeUpdate.practicalImpactAndChecklist.advocateActions && (
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-xs space-y-1">
                          <strong className="text-[#B88B2A] font-bold block text-[10px] uppercase">Advocate Practice Tip:</strong>
                          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">{activeUpdate.practicalImpactAndChecklist.advocateActions}</p>
                        </div>
                      )}

                      {activeUpdate.practicalImpactAndChecklist.corporateCompliance && (
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-xs space-y-1">
                          <strong className="text-blue-600 dark:text-blue-400 font-bold block text-[10px] uppercase">Enterprise / Corporate:</strong>
                          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">{activeUpdate.practicalImpactAndChecklist.corporateCompliance}</p>
                        </div>
                      )}

                      {activeUpdate.practicalImpactAndChecklist.citizenImpact && (
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-xs space-y-1">
                          <strong className="text-emerald-600 dark:text-emerald-400 font-bold block text-[10px] uppercase">Citizen & Public Impact:</strong>
                          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">{activeUpdate.practicalImpactAndChecklist.citizenImpact}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                      Mandatory Compliance Directives
                    </span>
                    {(activeUpdate.practicalImpactAndChecklist?.complianceChecklist || activeUpdate.actionablePoints || []).map((pt, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/60 dark:border-zinc-800 text-xs font-medium flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-slate-800 dark:text-zinc-200">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── SECTION IX: RELEVANT JUDGMENTS & AUTHORITATIVE PRECEDENTS ─── */}
                {activeUpdate.relatedJudgmentsAndAuthorities && activeUpdate.relatedJudgmentsAndAuthorities.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Award size={14} />
                      <span>Section IX: Authoritative Landmark Precedents & Related Authorities</span>
                    </div>

                    <div className="space-y-3">
                      {activeUpdate.relatedJudgmentsAndAuthorities.map((lm, idx) => (
                        <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                            <h4 className="font-black text-slate-900 dark:text-white">{lm.title}</h4>
                            <span className="font-mono text-[#B88B2A] font-bold">{lm.citation}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-bold block">{lm.court}</span>
                          <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-serif">
                            "{lm.relevance}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── SECTION X: HINDI EXPLANATION & FAQS ─── */}
                {activeUpdate.hindiExplanation && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B88B2A] flex items-center gap-1.5">
                      <Languages size={14} />
                      <span>Section X: सरल हिंदी व्याख्या (Plain-Language Hindi Explanation)</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#B88B2A]/5 to-transparent border-l-4 border-l-[#B88B2A] text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
                      {activeUpdate.hindiExplanation}
                    </div>
                  </div>
                )}

                {activeUpdate.faqs && activeUpdate.faqs.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <HelpCircle size={14} className="text-[#B88B2A]" />
                      <span>Frequently Asked Practical Questions</span>
                    </div>
                    <div className="space-y-2.5">
                      {activeUpdate.faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/70 dark:border-zinc-800 space-y-1 text-xs">
                          <h5 className="font-black text-slate-900 dark:text-white">Q: {faq.q}</h5>
                          <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">A: {faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── FOOTER ACTION BAR ─── */}
                <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: readerThemeColors.border }}>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        const copyPayload = `${activeUpdate.title}\nAuthority: ${activeUpdate.authority}\nDate: ${activeUpdate.effectiveDate}\nGazette/Doc: ${activeUpdate.officialIdentity?.documentNumber || 'N/A'}\n\nSummary:\n${activeUpdate.summary}\n\nOfficial Source:\n${activeUpdate.officialIdentity?.officialSourceUrl || activeUpdate.sourceUrl || 'Official Gazette'}`;
                        navigator.clipboard.writeText(copyPayload);
                        toast.success("Update analysis & metadata copied to clipboard!");
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-[#B88B2A] hover:text-white text-xs text-slate-700 dark:text-zinc-200 font-bold flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <Copy size={13} />
                      <span>Copy Full Analysis</span>
                    </button>

                    {(activeUpdate.officialIdentity?.officialSourceUrl || activeUpdate.sourceUrl) && (
                      <a
                        href={activeUpdate.officialIdentity?.officialSourceUrl || activeUpdate.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-[#B88B2A] text-xs text-[#B88B2A] font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                      >
                        <span>Official Gazette / Portal</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setViewState('BOOKSHELF')}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <ArrowLeft size={13} />
                    <span>Back to Updates Catalog</span>
                  </button>
                </div>

              </div>
            </div>
          )}



        </main>



      </div>

      {/* ─── MARGIN STICKY NOTE MODAL ─── */}
      {isNoteInputOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="w-full max-w-md bg-white dark:bg-[#111622] rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <StickyNote className="w-4 h-4 text-[#B88B2A]" />
                <h3 className="text-sm font-black text-slate-900 dark:text-zinc-100">
                  Pin Advocate Margin Note
                </h3>
              </div>
              <button 
                onClick={() => setIsNoteInputOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <textarea
              rows={4}
              placeholder="Write your student margin note or courtroom strategy reminder here..."
              value={activeNoteText}
              onChange={(e) => setActiveNoteText(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-semibold focus:outline-none focus:border-[#B88B2A] text-slate-900 dark:text-white resize-none"
            />

            <div className="flex items-center justify-between pt-1">
              {notes[resolvedSection?.id] && (
                <button
                  onClick={() => {
                    const updated = { ...notes };
                    delete updated[resolvedSection.id];
                    setNotes(updated);
                    localStorage.setItem('legal_hub_margin_notes', JSON.stringify(updated));
                    setIsNoteInputOpen(false);
                    toast.success("Sticky note removed!");
                  }}
                  className="text-xs font-bold text-rose-500 hover:underline cursor-pointer"
                >
                  Delete Note
                </button>
              )}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setIsNoteInputOpen(false)}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-bold text-slate-600 dark:text-zinc-300 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B88B2A] text-[#111111] text-xs font-black shadow-xs cursor-pointer"
                >
                  Save Margin Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── ALL 38+ SUBJECTS TAXONOMY MODAL ─── */}
      {isSubjectModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="w-full max-w-3xl bg-white dark:bg-[#111622] rounded-3xl border border-slate-200 dark:border-zinc-800 p-6 space-y-4 shadow-2xl max-h-[85vh] flex flex-col">
            
            <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#B88B2A]" />
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">
                    Core Legal Subjects Taxonomy
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    {activeJurisdiction === 'NP'
                      ? 'Comprehensive classification across Nepalese constitutional, civil & criminal legal frameworks'
                      : 'Comprehensive classification across legal doctrines and statutory codes'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsSubjectModalOpen(false)}
                className="p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Subject Search Input */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder={`Filter ${currentJurisdiction.name} subjects (e.g. ${activeJurisdiction === 'NP' ? 'Constitutional, Muluki, Bail, Banking' : 'Criminal, Cyber, Taxation, Constitutional, Labour'})...`}
                value={subjectSearchQuery}
                onChange={(e) => setSubjectSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-semibold focus:outline-none focus:border-[#B88B2A] text-slate-900 dark:text-white"
              />
            </div>

            {/* Subject Grid */}
            <div className="overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 p-1 custom-scrollbar">
              {activeSubjects.filter(s => 
                !subjectSearchQuery || 
                s.name.toLowerCase().includes(subjectSearchQuery.toLowerCase()) ||
                s.description.toLowerCase().includes(subjectSearchQuery.toLowerCase())
              ).map((subject) => (
                <div
                  key={subject.id}
                  onClick={() => {
                    setActiveSubjectFilter(subject.name);
                    setIsSubjectModalOpen(false);
                    toast.success(`Filter applied: ${subject.name}`);
                  }}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800 hover:border-[#B88B2A] hover:bg-amber-500/5 transition-all cursor-pointer space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{subject.icon}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#B88B2A]/15 text-[#B88B2A]">
                      {subject.tagCount}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 dark:text-zinc-100">
                    {subject.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {subject.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-bold">
                Showing {activeSubjects.length} {currentJurisdiction.name} Subjects
              </span>
              <button
                onClick={() => {
                  setActiveSubjectFilter('ALL');
                  setIsSubjectModalOpen(false);
                }}
                className="px-4 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-bold text-slate-600 dark:text-zinc-300 hover:bg-slate-100 cursor-pointer"
              >
                Reset Filter
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
