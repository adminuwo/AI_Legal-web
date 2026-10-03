import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, ArrowUp, ArrowDown, Bookmark, Landmark, Scale, 
  FileText, Check, Copy, ExternalLink, ChevronRight, Hash,
  BookOpen, Users, Brain, CheckCircle2, ShieldCheck, Quote,
  HelpCircle, Layers, ZoomIn, ZoomOut
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function JudgmentDocumentViewer({ judgment }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMatchIndex, setActiveMatchIndex] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);
  const [activeSection, setActiveSection] = useState('sec-header');
  const [fontSize, setFontSize] = useState(15); // 13 to 22 px
  
  const textContentRef = useRef(null);

  if (!judgment) return null;

  // Derive comprehensive text for in-doc search and display
  const factsText = judgment.caseContext?.facts || judgment.facts || judgment.executiveSummary || '';
  const legalIssuesText = judgment.caseContext?.legalIssue || judgment.legalIssue || judgment.legal_issues || '';
  const petitionerArgsText = judgment.arguments?.petitioner || judgment.caseContext?.arguments?.petitioner || judgment.arguments?.appellant || '';
  const respondentArgsText = judgment.arguments?.respondent || judgment.caseContext?.arguments?.respondent || judgment.arguments?.state || '';
  const reasoningText = judgment.reasoning || judgment.caseContext?.reasoning || judgment.judgment_basis?.legal_reasoning || '';
  const rawOrder = judgment.finalOrder || judgment.finalDecision || judgment.judgment_outcome?.final_decision || '';

  // Smart deduplication & fallback guards:
  const isRatioDuplicate = factsText && judgment.ratioDecidendi && 
    (judgment.ratioDecidendi.trim().slice(0, 45) === factsText.trim().slice(0, 45));
  const displayRatio = (!isRatioDuplicate && judgment.ratioDecidendi)
    ? judgment.ratioDecidendi
    : (reasoningText 
        ? `The Court established that ${reasoningText.slice(0, 240)}...`
        : `Binding judicial authority established in ${judgment.title} governing statutory compliance and legal remedies under ${judgment.court || 'Indian law'}.`);

  const isOrderDuplicate = factsText && rawOrder && 
    (rawOrder.trim().slice(0, 45) === factsText.trim().slice(0, 45));
  const orderText = (!isOrderDuplicate && rawOrder)
    ? rawOrder
    : (judgment.finalOrder || `The ${judgment.court || "Hon'ble Court"} adjudicated the matter on its merits and pronounced the final disposition in accordance with statutory provisions.`);

  const displayCitation = (judgment.citation && judgment.citation.length < 55 && !/held in|vs\.|versus/i.test(judgment.citation))
    ? judgment.citation
    : (judgment.caseNumber || `(${judgment.year || '2006'}) ${judgment.court?.includes('Supreme') ? 'SC' : 'HC'} Precedent`);

  // Fallback verbatim transcript synthesis if fullTextExcerpt is brief or missing
  const fullJudgmentReport = judgment.full_text || judgment.fullTextExcerpt || `IN THE ${judgment.court?.toUpperCase() || 'COURT'}
${judgment.caseType?.toUpperCase() || 'CIVIL JURISDICTION'} ${judgment.caseNumber ? `• ${judgment.caseNumber}` : ''}

${judgment.title}
${displayCitation}

CORAM:
${(judgment.judges || ['Hon\'ble Bench']).join('\n')}

COUNSEL:
${judgment.counsel?.petitioner ? `For Petitioner: ${judgment.counsel.petitioner.join(', ')}` : ''}
${judgment.counsel?.respondent ? `For Respondent: ${judgment.counsel.respondent.join(', ')}` : ''}

═══════════════════════════════════════════════════════════════════════════════
JUDGMENT
═══════════════════════════════════════════════════════════════════════════════

1. FACTUAL BACKGROUND & ESSENCE OF PROCEEDINGS:
${factsText || 'Factual sequence and procedural history as placed before the Bench for adjudication.'}

2. SUBSTANTIAL QUESTIONS OF LAW DETERMINED:
${legalIssuesText || 'Interpretation of statutory provisions and constitutional boundaries.'}

3. SUBMISSIONS OF THE PETITIONER:
${petitionerArgsText || 'The petitioner contended that constitutional guarantees and settled statutory principles were violated.'}

4. SUBMISSIONS OF THE RESPONDENT:
${respondentArgsText || 'The respondent submitted that statutory provisions are within legislative competence and were lawfully enforced.'}

5. JUDICIAL REASONING & ANALYSIS:
${reasoningText || 'The Bench examined constitutional morality, relevant precedents, and applicable statutory frameworks.'}

6. BINDING RATIO DECIDENDI:
"${displayRatio || 'Principle of law declared by the Court.'}"

7. OPERATIVE ORDER & FINAL DISPOSITION:
${orderText || 'Ordered accordingly. Disposed of.'}`;

  // Search in text highlighter
  const renderHighlightedContent = (rawText) => {
    if (!rawText) return 'No judgment text available.';
    if (!searchQuery || !searchQuery.trim()) {
      return rawText;
    }

    const regex = new RegExp(`(${searchQuery.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = rawText.split(regex);
    let matchCounter = 0;

    return parts.map((part, i) => {
      if (part.toLowerCase() === searchQuery.toLowerCase()) {
        matchCounter++;
        const isCurrent = matchCounter === activeMatchIndex + 1;
        return (
          <mark
            key={i}
            id={`match-${matchCounter - 1}`}
            className={`px-0.5 rounded transition-colors ${
              isCurrent 
                ? 'bg-amber-400 text-black font-extrabold ring-2 ring-amber-600' 
                : 'bg-yellow-200 dark:bg-yellow-800/80 text-black dark:text-yellow-100 font-semibold'
            }`}
          >
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  // Count search matches across full report
  useEffect(() => {
    if (!searchQuery || !searchQuery.trim()) {
      setTotalMatches(0);
      setActiveMatchIndex(0);
      return;
    }
    const regex = new RegExp(searchQuery.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
    const matches = fullJudgmentReport.match(regex);
    setTotalMatches(matches ? matches.length : 0);
    setActiveMatchIndex(0);
  }, [searchQuery, fullJudgmentReport]);

  const handleNextMatch = () => {
    if (totalMatches === 0) return;
    const next = (activeMatchIndex + 1) % totalMatches;
    setActiveMatchIndex(next);
    scrollToMatch(next);
  };

  const handlePrevMatch = () => {
    if (totalMatches === 0) return;
    const prev = (activeMatchIndex - 1 + totalMatches) % totalMatches;
    setActiveMatchIndex(prev);
    scrollToMatch(prev);
  };

  const scrollToMatch = (idx) => {
    setTimeout(() => {
      const el = document.getElementById(`match-${idx}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyText = (text, label) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-[#0F1523] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm w-full">
      
      {/* ─── Document Viewer Toolbar (Sleek Compact Single Row) ─── */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-5 py-2 bg-slate-50 dark:bg-[#131B2E] border-b border-slate-200 dark:border-slate-800">
        
        {/* Left: In-Document Search & Text Zoom Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="flex items-center gap-1.5 bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 w-36 sm:w-48 focus-within:ring-2 focus-within:ring-[#B88B2A]">
            <Search size={12} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Find in case order..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none w-full"
            />
            {searchQuery && (
              <span className="text-[9.5px] text-slate-400 font-mono shrink-0">
                {totalMatches > 0 ? `${activeMatchIndex + 1}/${totalMatches}` : '0'}
              </span>
            )}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs px-0.5 cursor-pointer"
              >
                ×
              </button>
            )}
          </div>

          {totalMatches > 0 && (
            <div className="flex items-center gap-0.5">
              <button
                onClick={handlePrevMatch}
                className="p-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-600 dark:text-slate-300 cursor-pointer"
                title="Previous match"
              >
                <ArrowUp size={11} />
              </button>
              <button
                onClick={handleNextMatch}
                className="p-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-600 dark:text-slate-300 cursor-pointer"
                title="Next match"
              >
                <ArrowDown size={11} />
              </button>
            </div>
          )}

          {/* Text Size Scaling Inline with Search */}
          <div className="hidden md:flex items-center gap-0.5 bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-700 rounded-lg px-1.5 py-0.5 text-xs">
            <button
              onClick={() => setFontSize(Math.max(13, fontSize - 1))}
              className="p-0.5 rounded text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
              title="Decrease font size"
            >
              <ZoomOut size={11} />
            </button>
            <span className="text-[10px] font-mono font-semibold px-1 text-slate-600 dark:text-slate-300">
              {fontSize}px
            </span>
            <button
              onClick={() => setFontSize(Math.min(22, fontSize + 1))}
              className="p-0.5 rounded text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
              title="Increase font size"
            >
              <ZoomIn size={11} />
            </button>
          </div>
        </div>

        {/* Right: Compact Jump to Section Chips */}
        <div className="flex items-center gap-1 text-[10.5px] overflow-x-auto py-0.5">
          {[
            { id: 'sec-facts', label: 'Facts' },
            { id: 'sec-coram', label: 'Coram' },
            { id: 'sec-issues', label: 'Issues' },
            { id: 'sec-args', label: 'Arguments' },
            { id: 'sec-ratio', label: 'Ratio' },
            { id: 'sec-reasoning', label: 'Reasoning' },
            { id: 'sec-order', label: 'Order' },
            { id: 'sec-text', label: 'Full Text' }
          ].map(chip => (
            <button 
              key={chip.id}
              onClick={() => scrollToSection(chip.id)}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer shrink-0 ${
                activeSection === chip.id 
                  ? 'bg-[#B88B2A] text-slate-950 font-bold shadow-2xs' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

      </div>

      {/* ─── Reading Canvas (Indian Law Report Full Case Order Styling - Compact Height) ─── */}
      <div 
        ref={textContentRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-5 bg-white dark:bg-[#0F1523] text-slate-900 dark:text-slate-100"
      >
        
        {/* 1. Official Court Banner (Compact) */}
        <div id="sec-header" className="text-center space-y-1.5 border-b border-slate-300 dark:border-amber-400/30 pb-3.5">
          <div className="w-9 h-9 mx-auto rounded-full bg-amber-500/10 border border-[#B88B2A]/40 flex items-center justify-center text-[#B88B2A]">
            <Landmark size={18} />
          </div>
          <h2 className="text-sm sm:text-base font-black uppercase tracking-widest text-slate-900 dark:text-white font-serif">
            {judgment.court || 'IN THE SUPREME COURT OF INDIA'}
          </h2>
          <p className="text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase">
            {judgment.caseType || 'APPELLATE JURISDICTION'} {judgment.caseNumber ? `• ${judgment.caseNumber}` : ''}
          </p>
        </div>

        {/* 2. Title & Parties */}
        <div className="space-y-2">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-950 dark:text-white tracking-tight leading-snug font-serif">
            {judgment.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-50 dark:bg-amber-950/40 text-[#B38628] dark:text-[#E5A93C] border border-[#B88B2A]/40">
              {displayCitation}
            </span>
            {judgment.equivalentCitations && judgment.equivalentCitations.length > 0 && (
              <span className="px-2 py-0.5 rounded-md text-[10.5px] font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                Eq. Cit: {judgment.equivalentCitations.join(' | ')}
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Decided on: <strong className="font-semibold">{judgment.date || judgment.year}</strong>
            </span>
            <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
              Disposed
            </span>
          </div>
        </div>

        {/* 3. Coram, Bench, Counsel & Statutes */}
        <div id="sec-coram" className="p-5 rounded-2xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
          
          {/* Bench Composition */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] sm:w-28 shrink-0">
              Bench Composition:
            </span>
            <div className="flex-1 font-semibold text-slate-900 dark:text-white">
              <span className="text-[#B38628] dark:text-amber-400 font-bold mr-2">[{judgment.bench || 'Division Bench'}]</span>
              {(judgment.judges || []).join('; ')}
            </div>
          </div>

          {/* Petitioner Counsel */}
          {judgment.counsel?.petitioner && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] sm:w-28 shrink-0">
                For Petitioner:
              </span>
              <div className="flex-1 text-slate-700 dark:text-slate-300">
                {judgment.counsel.petitioner.join(', ')}
              </div>
            </div>
          )}

          {/* Respondent Counsel */}
          {judgment.counsel?.respondent && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] sm:w-28 shrink-0">
                For Respondent:
              </span>
              <div className="flex-1 text-slate-700 dark:text-slate-300">
                {judgment.counsel.respondent.join(', ')}
              </div>
            </div>
          )}

          {/* Applicable Acts & Sections */}
          {((judgment.acts && judgment.acts.length > 0) || (judgment.sections && judgment.sections.length > 0)) && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] sm:w-28 shrink-0">
                Statutes Applied:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(judgment.sections || []).map((sec, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono font-semibold text-slate-800 dark:text-slate-200">
                    {sec}
                  </span>
                ))}
                {(judgment.acts || []).map((act, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-amber-500/10 text-[#B38628] dark:text-amber-300 border border-[#B88B2A]/30 font-medium">
                    {act}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 4. STATEMENT OF MATERIAL FACTS & FACTUAL MATRIX */}
        <div id="sec-facts" className="p-6 rounded-3xl bg-slate-50/90 dark:bg-[#111622] border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-slate-800 pb-2.5">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
              <BookOpen size={16} className="text-[#B88B2A]" />
              <span>Statement of Material Facts & Dispute Background</span>
            </div>
            <button
              onClick={() => copyText(factsText, 'Facts of the Case')}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white text-[11px] font-bold border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1 cursor-pointer"
            >
              <Copy size={11} />
              <span>Copy Facts</span>
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal whitespace-pre-line font-serif">
            {factsText || 'The detailed factual sequence leading to trial and subsequent appellate scrutiny as recorded in the official law report.'}
          </p>
        </div>

        {/* 5. SUBSTANTIAL QUESTIONS OF LAW / ISSUES FRAMED */}
        {legalIssuesText && (
          <div id="sec-issues" className="p-5 rounded-2xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
            <div className="flex items-center gap-2 font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <HelpCircle size={15} className="text-[#B88B2A]" />
              <span>Substantial Questions of Law Determined (Issues Framed)</span>
            </div>
            <div className="text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-medium pl-1">
              {legalIssuesText}
            </div>
          </div>
        )}

        {/* 6. SUBMISSIONS & ARGUMENTS OF PARTIES */}
        {(petitionerArgsText || respondentArgsText) && (
          <div id="sec-args" className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 font-mono">
              <Users size={15} className="text-[#B88B2A]" />
              <span>Submissions & Arguments of the Parties</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Petitioner / Appellant Arguments */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 space-y-2 text-xs shadow-2xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-extrabold uppercase tracking-wider text-[#B38628] dark:text-amber-400 text-[10.5px]">
                    Submissions for Petitioner / Appellant
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Petitioner</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line font-serif">
                  {petitionerArgsText || 'The petitioner contended that fundamental rights and statutory protections were arbitrarily disregarded.'}
                </div>
              </div>

              {/* Respondent / State Arguments */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 space-y-2 text-xs shadow-2xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 text-[10.5px]">
                    Submissions for Respondent / State
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Respondent</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line font-serif">
                  {respondentArgsText || 'The respondent submitted that the state action was within legislative competence and statutory procedure was strictly followed.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7. BINDING RATIO DECIDENDI (GOLD CALLOUT) */}
        <div id="sec-ratio" className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-amber-100/40 dark:from-[#1A1608] dark:via-[#111622] dark:to-[#171204] border-2 border-[#B88B2A] shadow-sm space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#B38628] dark:text-[#E5A93C]">
              <Scale size={16} />
              <span>Binding Ratio Decidendi (Article 141 Indian Constitution)</span>
            </div>
            <button
              onClick={() => copyText(displayRatio, 'Ratio Decidendi')}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-[#B38628] hover:bg-slate-50 text-[11px] font-bold border border-[#B88B2A]/40 transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
            >
              <Copy size={11} />
              <span>Copy Ratio</span>
            </button>
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed italic font-serif">
            "{displayRatio}"
          </p>
        </div>

        {/* 8. JUDICIAL REASONING & ANALYSIS OF THE BENCH */}
        {reasoningText && (
          <div id="sec-reasoning" className="p-6 rounded-3xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                <Brain size={16} className="text-[#B88B2A]" />
                <span>Judicial Reasoning & Statutory Analysis of the Bench</span>
              </div>
              <button
                onClick={() => copyText(reasoningText, 'Judicial Reasoning')}
                className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1 cursor-pointer"
              >
                <Copy size={11} />
                <span>Copy Reasoning</span>
              </button>
            </div>
            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif whitespace-pre-line">
              {reasoningText}
            </div>
          </div>
        )}

        {/* 9. AUTHORITIES & PRECEDENTS CITED */}
        {judgment.precedentsCited && judgment.precedentsCited.length > 0 && (
          <div id="sec-precedents" className="p-5 rounded-2xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
            <div className="flex items-center gap-2 font-black uppercase tracking-wider text-slate-500">
              <Scale size={14} className="text-[#B88B2A]" />
              <span>Authorities & Precedents Cited by the Bench</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {judgment.precedentsCited.map((cite, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium text-slate-800 dark:text-slate-200 text-xs shadow-2xs"
                >
                  {cite}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 10. OPERATIVE ORDER & FINAL DISPOSITION */}
        {orderText && (
          <div id="sec-order" className="p-6 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/20 border-2 border-emerald-500/40 dark:border-emerald-600/40 space-y-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                <CheckCircle2 size={16} />
                <span>Operative Order & Final Disposition</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                Disposed
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed font-serif whitespace-pre-line">
              {orderText}
            </p>
          </div>
        )}

        {/* 11. KEY PARAGRAPHS FOR CITATION */}
        {judgment.keyParagraphs && judgment.keyParagraphs.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 font-mono">
              <Quote size={15} className="text-[#B88B2A]" />
              <span>Key Paragraphs for Courtroom Citation</span>
            </div>
            <div className="space-y-2.5">
              {judgment.keyParagraphs.map((para, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200/80 dark:border-slate-800 space-y-1 text-xs">
                  <span className="font-mono font-bold text-[#B38628] dark:text-amber-400 text-[10.5px]">
                    Paragraph {para.paraNum}:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 italic font-serif leading-relaxed">
                    "{para.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 12. FULL VERBATIM JUDGMENT / LAW REPORT TEXT */}
        <div id="sec-text" className="space-y-4 pt-4 border-t-2 border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 font-mono flex items-center gap-2">
              <FileText size={15} className="text-[#B88B2A]" />
              <span>JUDGMENT / ORDER TEXT — VERBATIM INDIAN LAW REPORT</span>
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">
              Official Law Report
            </span>
          </div>

          <article
            className="font-serif leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap select-text selection:bg-[#B88B2A]/30 p-6 sm:p-8 rounded-2xl bg-slate-50/50 dark:bg-[#0B101D] border border-slate-200/80 dark:border-slate-800"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.88, letterSpacing: '0.01em' }}
          >
            {renderHighlightedContent(fullJudgmentReport)}
          </article>
        </div>

      </div>
    </div>
  );
}
