import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FEE_STRUCTURE } from '../../data/mockData';
import { useAdmin } from '../../context/AdminContext';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Send,
  Search,
  FileCheck,
  GraduationCap,
  Sparkles,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function Admissions() {
  const { addApplication, applications } = useAdmin();

  // Fee Calculator State
  const [calcGradeIndex, setCalcGradeIndex] = useState(2); // Class 11 PCM/NDA
  const [includeHostel, setIncludeHostel] = useState(true);
  const [includeNDA, setIncludeNDA] = useState(true);
  const [includeIIT, setIncludeIIT] = useState(false);
  const [scholarshipPercent, setScholarshipPercent] = useState(10);

  // Form State
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [gradeApplied, setGradeApplied] = useState('Class 11th - NDA Wing');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [hostelRequired, setHostelRequired] = useState('Yes');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppId, setSubmittedAppId] = useState(null);

  // Status Search State
  const [searchAppId, setSearchAppId] = useState('');
  const [foundApp, setFoundApp] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  // Scroll to hash section if present
  useEffect(() => {
    if (window.location.hash) {
      const elem = document.querySelector(window.location.hash);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Calculate fees dynamically
  const selectedGradeFee = FEE_STRUCTURE[calcGradeIndex];
  const tuition = selectedGradeFee.tuitionAnnual;
  const hostel = includeHostel ? selectedGradeFee.hostelAnnual : 0;
  const ndaFee = includeNDA ? (selectedGradeFee.ndaWingAddon || 45000) : 0;
  const iitFee = includeIIT ? (selectedGradeFee.iitWingAddon || 45000) : 0;
  const subtotal = tuition + hostel + ndaFee + iitFee;
  const scholarshipDiscount = Math.round((subtotal * scholarshipPercent) / 100);
  const finalEstimatedFee = subtotal - scholarshipDiscount;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const appId = addApplication({
        studentName,
        parentName,
        gradeApplied,
        phone,
        email,
        city,
        hostelRequired
      });

      setIsSubmitting(false);
      setSubmittedAppId(appId);

      // Trigger Confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  const handleSearchStatus = (e) => {
    e.preventDefault();
    setSearchAttempted(true);
    const match = applications.find(
      (a) => a.id.toLowerCase() === searchAppId.trim().toLowerCase()
    );
    setFoundApp(match || null);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Admissions Open Session 2026-27
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Join Social Baluni Public School
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Apply online for Boarding School, NDA Defence Academy, or Super 30 IIT/NEET Batches. Instant fee estimation & application tracking available below.
          </p>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE FEE CALCULATOR */}
      <section id="calculator" className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Calculator className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Interactive Fee & Scholarship Estimator
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Customize your grade, hostel choice, and competitive wings to get an instant cost calculation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Select Grade */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                  Select Grade & Academic Standard
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FEE_STRUCTURE.map((item, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setCalcGradeIndex(idx)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        calcGradeIndex === idx
                          ? 'bg-blue-900 text-white border-blue-900 shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {item.grade}
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase text-slate-600">
                  Residential & Academy Addons
                </label>
                
                <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeHostel}
                      onChange={(e) => setIncludeHostel(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900 focus:ring-blue-800"
                    />
                    <div>
                      <span className="block text-sm font-bold text-slate-900">AC Boarding & Mess Hostel</span>
                      <span className="text-slate-500 text-xs">4 daily nutritious meals, 24/7 security, laundry</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    +₹ {selectedGradeFee.hostelAnnual.toLocaleString()}/yr
                  </span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeNDA}
                      onChange={(e) => setIncludeNDA(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <div>
                      <span className="block text-sm font-bold text-slate-900">Baluni Defence Academy (NDA/SSB)</span>
                      <span className="text-slate-500 text-xs">Physical training, shooting range, GTO ground</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700">
                    +₹ {(selectedGradeFee.ndaWingAddon || 45000).toLocaleString()}/yr
                  </span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeIIT}
                      onChange={(e) => setIncludeIIT(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500"
                    />
                    <div>
                      <span className="block text-sm font-bold text-slate-900">IIT-JEE / NEET Super 30 Wing</span>
                      <span className="text-slate-500 text-xs">Kota study materials, daily DPP, mock test series</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-700">
                    +₹ {(selectedGradeFee.iitWingAddon || 45000).toLocaleString()}/yr
                  </span>
                </label>
              </div>

              {/* Scholarship Slider */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase text-slate-600">
                    Merit Scholarship Assessment Score
                  </label>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {scholarshipPercent}% Scholarship Discount
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="5"
                  value={scholarshipPercent}
                  onChange={(e) => setScholarshipPercent(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>0% (Standard)</span>
                  <span>20% (First Class & Sports)</span>
                  <span>40% (National Ranker)</span>
                </div>
              </div>

            </div>

            {/* Right Summary Invoice Card */}
            <div className="lg:col-span-5 bg-slate-950 text-white p-6 rounded-2xl border border-slate-800 space-y-5 shadow-2xl">
              <span className="bg-amber-500 text-slate-950 text-[11px] font-black uppercase px-2.5 py-1 rounded">
                Estimated Annual Fee Summary
              </span>

              <div className="space-y-2.5 text-xs text-slate-300 border-b border-slate-800 pb-4">
                <div className="flex justify-between">
                  <span>Base Tuition Fee:</span>
                  <span className="font-bold text-white">₹ {tuition.toLocaleString()}</span>
                </div>
                {includeHostel && (
                  <div className="flex justify-between">
                    <span>AC Hostel & Fooding:</span>
                    <span className="font-bold text-white">₹ {hostel.toLocaleString()}</span>
                  </div>
                )}
                {includeNDA && (
                  <div className="flex justify-between text-emerald-400">
                    <span>NDA Defence Academy:</span>
                    <span className="font-bold">₹ {ndaFee.toLocaleString()}</span>
                  </div>
                )}
                {includeIIT && (
                  <div className="flex justify-between text-amber-400">
                    <span>IIT/NEET Coaching Wing:</span>
                    <span className="font-bold">₹ {iitFee.toLocaleString()}</span>
                  </div>
                )}
                {scholarshipPercent > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold pt-1">
                    <span>Merit Scholarship ({scholarshipPercent}%):</span>
                    <span>- ₹ {scholarshipDiscount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <span className="text-slate-400 text-xs uppercase block">Total Net Estimated Fee</span>
                <span className="text-3xl font-black text-amber-400">
                  ₹ {finalEstimatedFee.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ annum</span>
                </span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Payable in 2 equal installments per term. Includes uniform kit & study material.
                </p>
              </div>

              <a href="#apply-form" className="block pt-2">
                <Button variant="gold" className="w-full py-3" icon={Send}>
                  Proceed to Online Application
                </Button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ONLINE APPLICATION FORM */}
      <section id="apply-form" className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 lg:p-10 space-y-6">
          <div className="text-center space-y-2">
            <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
              Direct Online Portal
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Student Admission Application Form (2026-27)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Fill in student details below. You will receive an instant Registration Reference ID.
            </p>
          </div>

          {submittedAppId ? (
            <div className="bg-emerald-50 border-2 border-emerald-300 p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-emerald-950">Application Submitted Successfully!</h3>
              <p className="text-slate-700 text-sm max-w-md mx-auto">
                Thank you for applying to Social Baluni Public School. Your unique Application Tracking Reference Code is:
              </p>
              <div className="inline-block bg-slate-950 text-amber-400 text-2xl font-black px-6 py-3 rounded-xl border border-amber-400 shadow-md">
                {submittedAppId}
              </div>
              <p className="text-xs text-slate-500">
                Please save this reference code. Our admissions desk will reach out on phone within 24 hours.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <Button variant="primary" onClick={() => setSubmittedAppId(null)}>
                  Submit Another Application
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Devansh Thapa"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Suraj Thapa"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Grade & Stream Applied *
                  </label>
                  <select
                    value={gradeApplied}
                    onChange={(e) => setGradeApplied(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800 bg-white"
                  >
                    <option value="Class 11th - NDA Wing">Class 11th - NDA Defence Wing</option>
                    <option value="Class 11th - IIT JEE">Class 11th - IIT-JEE Super 30</option>
                    <option value="Class 11th - NEET Medical">Class 11th - NEET Medical Wing</option>
                    <option value="Class 9th - Foundation">Class 9th - Early Foundation</option>
                    <option value="Class 6th-8th - Boarding">Classes 6th to 8th Boarding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9812345678"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / State of Residence *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Dehradun / Delhi"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Hostel Residential Facility Required?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
                    <input
                      type="radio"
                      name="hostel"
                      value="Yes"
                      checked={hostelRequired === 'Yes'}
                      onChange={(e) => setHostelRequired(e.target.value)}
                      className="text-blue-900"
                    />
                    <span>Yes (Full Boarding)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
                    <input
                      type="radio"
                      name="hostel"
                      value="No"
                      checked={hostelRequired === 'No'}
                      onChange={(e) => setHostelRequired(e.target.value)}
                      className="text-blue-900"
                    />
                    <span>No (Day Scholar)</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full py-3.5"
                isLoading={isSubmitting}
                icon={Send}
              >
                Submit Application & Get Registration ID
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 3: APPLICATION STATUS CHECKER */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-6 lg:p-10 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center">
              <Search className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Track Admission Application Status</h3>
              <p className="text-xs text-slate-400">Enter your APP-2026 reference code to view live review status.</p>
            </div>
          </div>

          <form onSubmit={handleSearchStatus} className="flex gap-2">
            <input
              type="text"
              required
              value={searchAppId}
              onChange={(e) => setSearchAppId(e.target.value)}
              placeholder="e.g. APP-2026-8812"
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 uppercase"
            />
            <Button type="submit" variant="gold" icon={Search}>
              Track Status
            </Button>
          </form>

          {searchAttempted && (
            <div className="pt-4 border-t border-slate-800">
              {foundApp ? (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400 text-sm">{foundApp.id}</span>
                    <Badge variant={foundApp.status.includes('Approved') ? 'emerald' : 'amber'}>
                      {foundApp.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Student:</strong> {foundApp.studentName} ({foundApp.gradeApplied})
                  </p>
                  <p className="text-xs text-slate-400">
                    Submitted on {foundApp.dateSubmitted} | City: {foundApp.city}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-red-400 font-semibold text-center">
                  No application found with ID "{searchAppId}". Try searching <strong className="text-white">APP-2026-8812</strong> for demo.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
