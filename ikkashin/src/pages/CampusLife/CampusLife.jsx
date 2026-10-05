import React from 'react';
import { Home, ShieldCheck, Utensils, HeartPulse, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';

export default function CampusLife() {
  const messMenu = [
    { meal: "Breakfast (7:30 AM)", items: "Stuffed Parathas / Idli Sambhar, Milk, Boiled Eggs, Sprouts, Fresh Fruit" },
    { meal: "Lunch (1:30 PM)", items: "Paneer Butter Masala / Chicken Curry, Dal Tadka, Seasonal Veg, Rice, Chapati, Salad, Curd" },
    { meal: "Evening Snacks (5:00 PM)", items: "Tea / Bournvita, Samosa / Sandwich / Biscuits" },
    { meal: "Dinner (8:00 PM)", items: "Rajma Rice / Veg Pulao, Seasonal Sabzi, Gulab Jamun / Kheer dessert" }
  ];

  const clubs = [
    { name: "NCC Cadet Corps & Parade Wing", desc: "Drill discipline, camp camps, rifle handling, and patriotic leadership." },
    { name: "Robotics & STEM Innovation Lab", desc: "Arduino programming, 3D printing, drone building, and national STEM robotics competitions." },
    { name: "Oratory, Debate & Model UN", desc: "Public speaking, parliamentary debates, MUN conferences, and creative writing." },
    { name: "Cultural Music & Performing Arts", desc: "Classical vocal, guitar, synthesizer, Indian folk dance, and annual theatrical plays." }
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            24/7 Residential Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Campus & Residential Boarding Life
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Providing a safe, nurturing, and disciplined home away from home with air-conditioned dormitories, wholesome dining, and round-the-clock wardens.
          </p>
        </div>
      </section>

      {/* Hostel Features Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
            <Home className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-900">AC Hostels (Boys & Girls Separate)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Spacious, ventilated dormitories equipped with study desks, personal wardrobes, hot water geysers, and ergonomic mattresses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-900">Dietitian Approved Dining Mess</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Hygienic central kitchen serving 4 freshly prepared meals daily with balanced nutrition required for athletic and mental stamina.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
            <HeartPulse className="w-6 h-6 text-amber-700" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-900">24/7 Medical Infirmary</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            In-house resident nurse, emergency ambulance tie-up with premier Dehradun hospitals, and regular health checkups.
          </p>
        </div>
      </section>

      {/* Mess Menu Table Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-6 lg:p-10 border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <Utensils className="w-6 h-6 text-amber-400" />
            <div>
              <h2 className="text-2xl font-extrabold text-white">Daily Boarders Mess Menu</h2>
              <p className="text-xs text-slate-400">Nutritious, multi-cuisine meal chart followed across all residential hostels.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {messMenu.map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{item.meal}</span>
                <p className="text-xs text-slate-300 font-medium">{item.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Clubs */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-blue-900 pl-3">
          Extracurricular Student Clubs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubs.map((club, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                {club.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{club.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
