import React from 'react';
import { Phone, Mail, MapPin, Shield, UserCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { SCHOOL_INFO } from '../../data/mockData';

export default function TopBar({ onOpenAuthModal }) {
  const { user, logout } = useAuth();

  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left side info */}
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Baluni Bypass Road, Dehradun</span>
          </div>
          <a href={`tel:${SCHOOL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{SCHOOL_INFO.phone}</span>
          </a>
          <a href={`mailto:${SCHOOL_INFO.email}`} className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>{SCHOOL_INFO.email}</span>
          </a>
        </div>

        {/* Right side actions & portal access */}
        <div className="flex items-center gap-4">
          <Link
            to="/admissions"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Admissions Open 2026-27</span>
          </Link>

          <span className="text-slate-700 hidden sm:inline">|</span>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                {user.name} ({user.role.toUpperCase()})
              </span>
              <button
                onClick={logout}
                className="text-slate-400 hover:text-red-400 transition-colors font-medium underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="inline-flex items-center gap-1.5 bg-blue-900/80 hover:bg-blue-800 text-white font-semibold px-3 py-1 rounded-full border border-blue-700 transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Portal Login</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
