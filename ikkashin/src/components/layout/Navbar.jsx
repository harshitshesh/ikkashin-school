import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, GraduationCap, Shield, Trophy, LayoutDashboard, ChevronDown } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

export default function Navbar({ onOpenAuthModal }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Academics & NDA', path: '/academics' },
    { name: 'Sports Ecosystem', path: '/sports' },
    { name: 'Admissions & Fee', path: '/admissions' },
    { name: 'Campus & Hostel', path: '/campus-life' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Faculty & Staff', path: '/faculty' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 font-extrabold flex items-center justify-center text-xl shadow-md border-2 border-amber-400 group-hover:scale-105 transition-transform">
              SBPS
            </div>
            <div>
              <span className="block font-black text-slate-900 text-lg leading-tight tracking-tight group-hover:text-blue-900 transition-colors">
                SOCIAL BALUNI
              </span>
              <span className="block text-xs font-semibold text-amber-600 tracking-wider">
                PUBLIC SCHOOL DEHRADUN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-blue-900 text-amber-400 shadow-sm'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Portal / Admin CMS Links */}
            {user?.role === 'admin' ? (
              <Link
                to="/admin-cms"
                className="ml-2 px-3 py-2 rounded-lg text-xs xl:text-sm font-bold bg-amber-500 text-slate-950 hover:bg-amber-600 flex items-center gap-1 shadow-sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Admin CMS</span>
              </Link>
            ) : user ? (
              <Link
                to="/student-portal"
                className="ml-2 px-3 py-2 rounded-lg text-xs xl:text-sm font-bold bg-blue-900 text-white hover:bg-blue-950 flex items-center gap-1 shadow-sm border border-amber-400"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>My Portal</span>
              </Link>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="ml-2 px-3.5 py-2 rounded-lg text-xs xl:text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Portal Access</span>
              </button>
            )}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {user ? (
              <Link
                to={user.role === 'admin' ? '/admin-cms' : '/student-portal'}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-900 text-amber-400 flex items-center gap-1"
              >
                Dashboard
              </Link>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950"
              >
                Portal
              </button>
            )}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-200 hover:bg-slate-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            {user ? (
              <Link
                to={user.role === 'admin' ? '/admin-cms' : '/student-portal'}
                onClick={() => setIsMobileOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-bold bg-blue-700 text-white"
              >
                Go to {user.role === 'admin' ? 'Admin CMS' : 'Student & Parent Portal'}
              </Link>
            ) : (
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenAuthModal();
                }}
                className="w-full text-center py-2.5 rounded-lg text-sm font-bold bg-amber-500 text-slate-950"
              >
                Login to Student & Parent Portal
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
