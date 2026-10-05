import React, { useState } from 'react';
import { FACULTY_STAFF } from '../../data/mockData';
import { Search, UserCheck, Shield, GraduationCap, Award } from 'lucide-react';

export default function Faculty() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = ['All', 'Management', 'Defence Academy', 'IIT/NEET', 'Science & Math', 'Sports', 'Humanities'];

  const filteredFaculty = FACULTY_STAFF.filter((staff) => {
    const matchesDept = selectedDept === 'All' || staff.department === selectedDept;
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          staff.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            400+ Educator & Coaching Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Faculty & Leadership Directory
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Meet our esteemed chairpersons, retired Armed Forces officers, IIT Roorkee alumni, and NIS certified athletic coaches guiding 3,000+ students.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-blue-900 text-amber-400 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty name or role..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded border">
                    {staff.department}
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                    {staff.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-900">{staff.role}</p>

                  <div className="pt-2 text-xs text-slate-500 space-y-1">
                    <p><strong className="text-slate-700">Qualification:</strong> {staff.qualification}</p>
                    <p><strong className="text-slate-700">Experience:</strong> {staff.experience}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] font-semibold text-slate-600 flex items-center justify-between">
                <span>Verified SBPS Faculty</span>
                <UserCheck className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
