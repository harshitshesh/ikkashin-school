import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Calculator, FileText, PhoneCall, Sparkles, ChevronRight, X } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/mockData';

export default function QuickAccessDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-3.5 rounded-full shadow-2xl border-2 border-amber-400 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
          aria-label="Open Quick Assistance"
        >
          <Sparkles className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-bold text-xs pr-1 hidden sm:inline">Quick Help & Fee</span>
        </button>
      )}

      {/* Expanded Quick Panel */}
      {isOpen && (
        <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-slate-700 w-80 animate-fadeIn space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h4 className="font-bold text-sm text-white">Quick Campus Actions</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs hover:brightness-110 transition-all shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4" />
                <span>Apply for Admission 2026</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              to="/admissions#calculator"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs transition-colors border border-slate-700"
            >
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-blue-400" />
                <span>Calculate Fees & Hostel</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs transition-colors border border-slate-700"
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Admissions Helpdesk</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <p className="text-[11px] text-slate-400 text-center pt-1">
            Need urgent hostel assistance? Reach Warden desk.
          </p>
        </div>
      )}
    </div>
  );
}
