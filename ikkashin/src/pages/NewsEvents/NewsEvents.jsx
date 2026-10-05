import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Bell, Calendar, Download, Share2, Search, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import SocialShareModal from '../../components/common/SocialShareModal';

export default function NewsEvents() {
  const { notices } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [shareData, setShareData] = useState(null);

  const categories = ['All', 'Admissions', 'Sports', 'Academics', 'Achievements', 'Circular'];

  const filteredNotices = notices.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownloadCircular = (title) => {
    alert(`Downloading official PDF circular: "${title}.pdf"`);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Real-Time Communications
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            News, Events & Circulars
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Stay updated with official administrative announcements, sports fixtures, pre-board date sheets, and NDA achievement highlights.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-amber-400 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-800 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border">
                      {notice.category}
                    </span>
                    {notice.isPinned && (
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border border-amber-300">
                        PINNED
                      </span>
                    )}
                  </div>
                  <span className="text-slate-400 text-xs font-semibold">{notice.date}</span>
                </div>

                <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                  {notice.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleDownloadCircular(notice.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-950 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-500" />
                  <span>Download Circular PDF</span>
                </button>

                <button
                  onClick={() => setShareData({
                    title: notice.title,
                    summary: notice.summary
                  })}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
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
