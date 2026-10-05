import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  GraduationCap,
  Home as HomeIcon,
  Trophy,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Share2,
  Calendar,
  PlayCircle,
  ChevronRight
} from 'lucide-react';
import { SCHOOL_INFO, THREE_ECOSYSTEMS, HALL_OF_FAME, SPORTS_ECOSYSTEM } from '../../data/mockData';
import { useAdmin } from '../../context/AdminContext';
import Button from '../../components/common/Button';
import SocialShareModal from '../../components/common/SocialShareModal';

export default function Home() {
  const { notices } = useAdmin();
  const [activeEcosystem, setActiveEcosystem] = useState(THREE_ECOSYSTEMS[0]);
  const [shareData, setShareData] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="space-y-16 pb-12">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white pt-12 pb-24 px-4 overflow-hidden border-b border-slate-800">
        {/* Background gradient blur effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Heading & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3-in-1 Ecosystem in Dehradun</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Academic Excellence</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">National Defense</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Social Baluni Public School integrates world-class CBSE boarding education, dedicated <strong className="text-white">NDA Defence Academy training</strong>, and intensive <strong className="text-white">IIT-JEE / NEET competitive coaching</strong> inside a 25+ acre residential campus.
            </p>

            {/* Quick Metrics Badge row */}
            <div className="grid grid-cols-3 gap-3 max-w-lg py-2">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl font-black text-amber-400">{SCHOOL_INFO.stats.students}</span>
                <span className="text-slate-400 text-xs font-semibold">Active Students</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl font-black text-emerald-400">{SCHOOL_INFO.stats.staff}</span>
                <span className="text-slate-400 text-xs font-semibold">Expert Staff</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl font-black text-blue-400">180+</span>
                <span className="text-slate-400 text-xs font-semibold">NDA Selections</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/admissions">
                <Button variant="gold" size="lg" icon={ShieldAlert}>
                  Apply for Admission 2026-27
                </Button>
              </Link>

              <Link to="/academics">
                <Button variant="outline" size="lg" className="text-white border-slate-700 hover:border-white">
                  Explore Academies & NDA
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000"
                alt="Social Baluni Campus"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Play Video virtual tour button overlay */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                aria-label="Play virtual campus tour"
              >
                <PlayCircle className="w-10 h-10 fill-slate-950 stroke-amber-500" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Virtual Tour Available
                </span>
                <h3 className="font-bold text-lg text-white">25+ Acre Green Residential Campus</h3>
                <p className="text-xs text-slate-300">Supervised study halls, 10m shooting range & AC hostels.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3-IN-1 ECOSYSTEM INTERACTIVE SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-blue-900 font-bold text-xs uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Our Core Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            3 Schools Inside One Campus
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Social Baluni Public School is structured into three specialized divisions so every student receives tailored academic and career mentoring.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {THREE_ECOSYSTEMS.map((item) => {
            const isActive = activeEcosystem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveEcosystem(item)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-900 text-white border-blue-900 shadow-xl scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase mb-3 ${
                  isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                }`}>
                  {item.badge}
                </span>
                <h3 className="font-extrabold text-lg leading-tight mb-1">{item.title}</h3>
                <p className={`text-xs ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Ecosystem Active Card Details */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {activeEcosystem.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {activeEcosystem.description}
            </p>

            <div className="space-y-3 pt-2">
              {activeEcosystem.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link to="/academics">
                <Button variant="primary" icon={ArrowRight} iconPosition="right">
                  Read Academy Curriculum
                </Button>
              </Link>
              <Link to="/admissions">
                <Button variant="gold">
                  Check Fee Structure
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src={activeEcosystem.image}
              alt={activeEcosystem.title}
              className="w-full h-80 object-cover rounded-2xl shadow-md border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* HALL OF FAME / ACHIEVERS SECTION */}
      <section className="bg-slate-900 text-white py-16 px-4 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Proven Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
                Hall of Fame & Top Achievers
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Celebrating our star cadets, IIT rankers, and national sports medalists.
              </p>
            </div>

            <Link to="/news-events">
              <Button variant="outline" size="sm" className="text-white border-slate-700 hover:border-white">
                View All Results & Rankings
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HALL_OF_FAME.map((achiever) => (
              <div
                key={achiever.id}
                className="bg-slate-950 rounded-2xl p-5 border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-[10px] uppercase px-2.5 py-1 rounded-full shadow-md">
                      {achiever.exam}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-white group-hover:text-amber-400 transition-colors">
                    {achiever.name}
                  </h3>
                  <p className="text-emerald-400 font-bold text-xs mt-0.5">{achiever.rank}</p>
                  <p className="text-slate-400 text-xs font-medium mt-1">{achiever.batch}</p>

                  <p className="text-slate-300 text-xs italic mt-3 line-clamp-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    "{achiever.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-semibold">SBPS Alumnus</span>
                  <button
                    onClick={() => setShareData({
                      title: `${achiever.name} - ${achiever.rank}`,
                      summary: `Proud moment! SBPS student ${achiever.name} achieved ${achiever.rank} in ${achiever.exam}.`
                    })}
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS ECOSYSTEM SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Sports Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Fencing, Shooting, Cricket & Physical Academy
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Building athletic discipline, tactical leadership, and sportsmanship.
            </p>
          </div>

          <Link to="/sports">
            <Button variant="primary" icon={ArrowRight} iconPosition="right">
              Explore All Sports Academies
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPORTS_ECOSYSTEM.slice(0, 3).map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 font-bold text-xs px-3 py-1 rounded-full">
                  {sport.stats}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="font-extrabold text-xl text-slate-900">{sport.name}</h3>
                <p className="text-slate-600 text-xs">
                  <strong className="text-slate-800">Head Coach:</strong> {sport.coach}
                </p>
                <p className="text-slate-600 text-xs">
                  <strong className="text-slate-800">Facilities:</strong> {sport.facilities}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>🏆 {sport.achievements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST NOTICES & ANNOUNCEMENTS PREVIEW */}
      <section className="bg-slate-100 py-16 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Official Notices & Circulars
              </h2>
              <p className="text-slate-600 text-sm mt-1">Real-time updates published by SBPS Administration.</p>
            </div>
            <Link to="/news-events">
              <Button variant="ghost" className="text-blue-900 font-bold">
                View All Circulars <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notices.slice(0, 4).map((notice) => (
              <div
                key={notice.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="bg-blue-900 text-amber-400 p-3 rounded-xl font-bold text-center shrink-0">
                  <Calendar className="w-5 h-5 mx-auto" />
                  <span className="block text-[10px] text-white mt-1">{notice.date.slice(-5)}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded border">
                      {notice.category}
                    </span>
                    {notice.isPinned && (
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-amber-300">
                        PINNED
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{notice.title}</h4>
                  <p className="text-slate-600 text-xs line-clamp-2">{notice.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE MODAL */}
      <SocialShareModal
        isOpen={!!shareData}
        onClose={() => setShareData(null)}
        shareData={shareData}
      />

      {/* VIDEO TOUR MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-4 bg-slate-950 flex items-center justify-between text-white border-b border-slate-800">
              <h3 className="font-bold text-sm">SBPS Dehradun Virtual Campus Tour</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-slate-400 hover:text-white px-3 py-1 rounded bg-slate-800 text-xs"
              >
                Close (ESC)
              </button>
            </div>
            <div className="p-6 text-center text-white space-y-4">
              <div className="h-72 bg-slate-950 rounded-xl flex flex-col items-center justify-center border border-slate-800">
                <PlayCircle className="w-16 h-16 text-amber-400 mb-2 animate-pulse" />
                <h4 className="font-bold text-lg">Virtual Campus Tour Demo</h4>
                <p className="text-xs text-slate-400 max-w-md mt-1">
                  Experience our 25-acre campus, NDA GTO obstacle ground, physics & chemistry labs, and AC dormitories in HD 360 view.
                </p>
              </div>
              <Button variant="gold" onClick={() => setIsVideoModalOpen(false)}>
                Return to Website
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
