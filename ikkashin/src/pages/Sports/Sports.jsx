import React, { useState } from 'react';
import { SPORTS_ECOSYSTEM } from '../../data/mockData';
import { Trophy, Target, Zap, Activity, Flame, Flag, Award, Share2, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';
import SocialShareModal from '../../components/common/SocialShareModal';

export default function Sports() {
  const [selectedSport, setSelectedSport] = useState(SPORTS_ECOSYSTEM[0]);
  const [shareData, setShareData] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Athletic & Physical Development
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Sports & Extracurricular Ecosystem
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            From Dehradun's finest Fencing Piste and 10m Air Rifle Shooting Range to floodlit FIFA-size football ground and Olympic track athletics.
          </p>
        </div>
      </section>

      {/* Main Sports Grid & Active Sport Detail */}
      <section className="max-w-7xl mx-auto px-4">
        
        {/* Sports selector buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {SPORTS_ECOSYSTEM.map((sport) => {
            const isActive = selectedSport.id === sport.id;
            return (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-emerald-700 text-white border-emerald-600 shadow-lg scale-105'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {sport.name}
              </button>
            );
          })}
        </div>

        {/* Selected Sport Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                {selectedSport.stats}
              </span>
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                🏆 {selectedSport.achievements}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {selectedSport.name}
            </h2>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-sm">
              <p className="text-slate-800">
                <strong className="text-slate-900 font-bold">Chief Coaching Staff:</strong> {selectedSport.coach}
              </p>
              <p className="text-slate-800">
                <strong className="text-slate-900 font-bold">Infrastructure & Gear:</strong> {selectedSport.facilities}
              </p>
              <p className="text-slate-800">
                <strong className="text-slate-900 font-bold">Recent Titles:</strong> {selectedSport.achievements}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Button
                variant="gold"
                icon={Share2}
                onClick={() => setShareData({
                  title: `${selectedSport.name} at SBPS Dehradun`,
                  summary: `Check out the state-of-the-art facilities and titles won by SBPS ${selectedSport.name}: ${selectedSport.achievements}`
                })}
              >
                Share Sports Achievement
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src={selectedSport.image}
              alt={selectedSport.name}
              className="w-full h-80 object-cover rounded-2xl shadow-lg border border-slate-200"
            />
          </div>
        </div>

        {/* All Sports Cards Overview */}
        <div className="mt-16 space-y-6">
          <h3 className="text-2xl font-extrabold text-slate-900 border-l-4 border-emerald-600 pl-3">
            All Sports Disciplines & Academies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPORTS_ECOSYSTEM.map((sport) => (
              <div
                key={sport.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-lg text-slate-900">{sport.name}</h4>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                    State Level
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  <strong className="text-slate-800">Coach:</strong> {sport.coach}
                </p>
                <p className="text-xs text-slate-600 line-clamp-2">
                  <strong className="text-slate-800">Facility:</strong> {sport.facilities}
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-700 border-t border-slate-100">
                  🏆 {sport.achievements}
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

    </div>
  );
}
