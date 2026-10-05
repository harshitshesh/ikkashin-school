import React from 'react';
import { Bell, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

export default function NoticeTicker() {
  const { notices } = useAdmin();
  const pinnedNotices = notices.filter(n => n.isPinned || n.urgent);

  return (
    <div className="bg-slate-900 text-white py-2 px-4 border-b border-slate-800 flex items-center overflow-hidden text-xs sm:text-sm select-none">
      <div className="flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs shrink-0 shadow-sm z-10 mr-2">
        <Bell className="w-3.5 h-3.5 animate-bounce" />
        <span>LATEST NOTICES</span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
          {pinnedNotices.concat(pinnedNotices).map((notice, idx) => (
            <Link
              key={`${notice.id}-${idx}`}
              to="/news-events"
              className="inline-flex items-center gap-2 text-slate-200 hover:text-amber-400 transition-colors font-medium cursor-pointer"
            >
              <span className="bg-slate-800 text-amber-300 text-[10px] uppercase font-semibold px-2 py-0.5 rounded border border-slate-700">
                {notice.category}
              </span>
              <span>{notice.title}</span>
              <span className="text-slate-400 text-xs font-normal">({notice.date})</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 opacity-80" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
