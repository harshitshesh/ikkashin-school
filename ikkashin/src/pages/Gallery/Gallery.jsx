import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Image, Play, Maximize2, Sparkles } from 'lucide-react';
import Modal from '../../components/common/Modal';

export default function Gallery() {
  const { gallery } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'NDA Wing', 'Sports', 'Academics', 'Campus Life', 'Cultural'];

  const filteredGallery = gallery.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Visual Memories & Events
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Photo & Video Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Snapshots of life at SBPS Dehradun: NDA obstacle drills, sports medals, smart classrooms, and annual cultural celebrations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-amber-400 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-amber-500 text-slate-950 p-3 rounded-full shadow-lg">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <span className="text-slate-400 text-xs mt-0.5 block">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <Modal
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          title={activeImage.title}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-4">
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[70vh] object-contain rounded-xl bg-slate-950"
            />
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Category: <strong>{activeImage.category}</strong></span>
              <span>Captured on {activeImage.date}</span>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
