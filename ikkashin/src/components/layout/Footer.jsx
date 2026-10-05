import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../../data/mockData';
import { Phone, Mail, MapPin, Send, ShieldCheck, Trophy, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Highlight banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-2xl p-6 md:p-10 border border-blue-900/50 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Stay Informed
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3">
              Subscribe to SBPS Circulars & Updates
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Receive latest examination schedules, NDA selection lists, sports tournament results, and holiday announcements directly in your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter parent/student email address"
                className="w-full bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
              >
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                {subscribed ? <CheckCircle2 className="w-4 h-4 text-slate-950" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            {subscribed && (
              <p className="text-emerald-400 text-xs mt-2 font-medium">
                Thank you! You are now subscribed to SBPS updates.
              </p>
            )}
          </form>
        </div>

        {/* Main 4 Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-sm">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 font-extrabold flex items-center justify-center text-lg border-2 border-amber-400">
                SBPS
              </div>
              <div>
                <span className="block font-black text-white text-lg leading-tight">
                  {SCHOOL_INFO.name}
                </span>
                <span className="block text-xs font-semibold text-amber-500 tracking-wider">
                  DEHRADUN, UTTARAKHAND
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              A premier 3-in-1 educational institution offering residential CBSE K-12 schooling, specialized Baluni Defence Academy (NDA/CDS prep), and Kota-style IIT-JEE & NEET competitive coaching.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> 3,000+ Students
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NDA Academy
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-400" /> 400+ Staff
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li><Link to="/academics" className="hover:text-amber-400 transition-colors">Academic Programs</Link></li>
              <li><Link to="/academics#nda" className="hover:text-amber-400 transition-colors">NDA Defence Academy</Link></li>
              <li><Link to="/academics#iit" className="hover:text-amber-400 transition-colors">IIT-JEE & NEET Coaching</Link></li>
              <li><Link to="/sports" className="hover:text-amber-400 transition-colors">Sports & Extracurriculars</Link></li>
              <li><Link to="/campus-life" className="hover:text-amber-400 transition-colors">Hostel & Campus Facilities</Link></li>
              <li><Link to="/faculty" className="hover:text-amber-400 transition-colors">Faculty & Staff Directory</Link></li>
            </ul>
          </div>

          {/* Column 3: Admissions & Portals */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Admissions & Portals
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li><Link to="/admissions" className="hover:text-amber-400 transition-colors">Online Admission 2026-27</Link></li>
              <li><Link to="/admissions#calculator" className="hover:text-amber-400 transition-colors">Fee Calculator</Link></li>
              <li><Link to="/student-portal" className="hover:text-amber-400 transition-colors">Student & Parent Portal</Link></li>
              <li><Link to="/admin-cms" className="hover:text-amber-400 transition-colors">Admin CMS Portal</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Photo & Video Gallery</Link></li>
              <li><Link to="/news-events" className="hover:text-amber-400 transition-colors">Circulars & Announcements</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Helpdesk */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Campus Helplines
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Baluni Bypass Road, Near ISBT, Dehradun, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white">{SCHOOL_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white">{SCHOOL_INFO.email}</a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-900 border border-slate-700 hover:border-amber-400 text-amber-400 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <span>Interactive Map & Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Social Baluni Public School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-300">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
