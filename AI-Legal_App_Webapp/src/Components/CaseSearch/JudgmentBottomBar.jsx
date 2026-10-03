import React from 'react';
import { Sparkles, FileText, Brain, Scale } from 'lucide-react';

export default function JudgmentBottomBar({
  onOpenChat,
  onOpenSummary,
  onOpenAnalysis,
  judgment
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#0C111C]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left: Active Precedent Reference */}
        <div className="flex items-center gap-2.5 min-w-0 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-xl bg-[#B88B2A]/15 text-[#B38628] flex items-center justify-center shrink-0 shadow-2xs">
            <Scale size={15} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#B38628] dark:text-[#E5A93C] shrink-0">
                AI Legal Intelligence
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                {judgment?.title || judgment?.case_name || 'Grounding on Active Precedent'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 truncate hidden sm:block">
              {judgment?.citation ? `${judgment.citation} • ` : ''}Instant AI summary, deep legal ratio analysis & grounded research chat
            </p>
          </div>
        </div>

        {/* Right: Primary 3 AI Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
          
          {/* 1. Chat with AI */}
          <button
            onClick={onOpenChat}
            className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Sparkles size={14} className="text-[#B88B2A]" />
            <span>Chat with AI</span>
          </button>

          {/* 2. Generate Summary */}
          <button
            onClick={onOpenSummary}
            className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <FileText size={14} className="text-[#B88B2A]" />
            <span>Generate Summary</span>
          </button>

          {/* 3. Deep Analysis (Highlighted Gold Button) */}
          <button
            onClick={onOpenAnalysis}
            className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-[#B88B2A] to-[#B38628] hover:from-[#d5b35c] hover:to-[#c29330] text-slate-950 shadow-md shadow-[#B88B2A]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Brain size={14} className="text-slate-950" />
            <span>Deep Analysis</span>
          </button>

        </div>

      </div>
    </div>
  );
}
