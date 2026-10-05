import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, GraduationCap, BookOpen, Award, CheckCircle2, Download, ArrowRight, Users, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('nda');

  const tabs = [
    { id: 'nda', label: 'Baluni Defence Academy (NDA/CDS)', icon: Shield, color: 'text-emerald-600' },
    { id: 'iit', label: 'IIT-JEE & NEET Coaching', icon: GraduationCap, color: 'text-amber-500' },
    { id: 'cbse', label: 'CBSE Board Curriculum (K-12)', icon: BookOpen, color: 'text-blue-600' }
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Integrated Academic Framework
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Academic & Competitive Exam Preparation
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Synchronizing regular CBSE senior secondary schooling with rigorous NDA Armed Forces SSB training and IIT-JEE / NEET competitive test preparation.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: NDA Wing */}
        {activeTab === 'nda' && (
          <div className="mt-8 space-y-12 animate-fadeIn">
            <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-3xl p-8 lg:p-12 shadow-xl border border-emerald-900/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-emerald-500 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-full">
                  Official Defence Wing
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Baluni Defence Academy (NDA / CDS Prep)
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Designed for cadets aspiring to join the Officers Training Academy (OTA), National Defence Academy (Khadakwasla), and Indian Military Academy (IMA). Cadets complete Class 11 & 12 CBSE alongside daily physical training and SSB interview prep.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-bold text-amber-400 text-sm">GTO & Physical Obstacle Ground</h4>
                    <p className="text-slate-400 text-xs mt-1">High wall, rope climbing, monkey crawl, and tiger leap supervised by retired Army Officers.</p>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-bold text-amber-400 text-sm">10m Indoor Shooting Range</h4>
                    <p className="text-slate-400 text-xs mt-1">Swiss electronic precision rifle targets for developing marksmanship and concentration.</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link to="/admissions">
                    <Button variant="gold" size="lg" icon={Shield}>
                      Register for NDA Selection Batch
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1579952318893-20a31006100e?auto=format&fit=crop&q=80&w=800"
                  alt="NDA Defence Academy Training"
                  className="w-full h-96 object-cover rounded-2xl border-2 border-emerald-500/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: IIT-JEE & NEET */}
        {activeTab === 'iit' && (
          <div className="mt-8 space-y-12 animate-fadeIn">
            <div className="bg-gradient-to-r from-slate-900 to-amber-950 text-white rounded-3xl p-8 lg:p-12 shadow-xl border border-amber-900/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-amber-500 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-full">
                  Super 30 Intensive Batch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  IIT-JEE & NEET Medical Coaching Wing
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Eliminates the stress of attending separate coaching centers after school. Senior faculty from Kota & Delhi deliver integrated problem-solving, daily DPP sheets, and weekly computer-based OMR mock tests.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">Kota Pattern Daily Practice Problems (DPP) & Detailed Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">Personalized Doubt Clearance Counters available after school hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">Computer Based Test (CBT) Center for JEE Main / Advanced Real Exam Feel</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link to="/admissions">
                    <Button variant="gold" size="lg" icon={GraduationCap}>
                      Apply for Super 30 Scholarship Exam
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                  alt="IIT-JEE Prep Batch"
                  className="w-full h-96 object-cover rounded-2xl border-2 border-amber-500/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CBSE Boarding Curriculum */}
        {activeTab === 'cbse' && (
          <div className="mt-8 space-y-12 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-black uppercase px-3 py-1 rounded-full border border-blue-200">
                  CBSE Affiliated (No. 3530492)
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Comprehensive K-12 Boarding Schooling
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  A holistic curriculum emphasizing experiential learning, scientific inquiry, critical thinking, values, and emotional intelligence. Standard streams available: Science (PCM/PCB), Commerce, and Humanities.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <span className="block font-bold text-slate-900 text-sm">Class 6th - 8th</span>
                    <span className="text-slate-500 text-xs">Middle Foundation</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <span className="block font-bold text-slate-900 text-sm">Class 9th - 10th</span>
                    <span className="text-slate-500 text-xs">Secondary Board</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <span className="block font-bold text-slate-900 text-sm">Class 11th - 12th</span>
                    <span className="text-slate-500 text-xs">Sr. Secondary Streams</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/admissions">
                    <Button variant="primary" icon={ArrowRight} iconPosition="right">
                      View Admission Requirements
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800"
                  alt="CBSE School Campus"
                  className="w-full h-80 object-cover rounded-2xl shadow-md border border-slate-200"
                />
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
