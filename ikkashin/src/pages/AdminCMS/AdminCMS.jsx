import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import {
  LayoutDashboard,
  Plus,
  Trash2,
  Pin,
  CheckCircle2,
  XCircle,
  Bell,
  FileText,
  Image,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function AdminCMS() {
  const {
    notices,
    addNotice,
    deleteNotice,
    togglePinNotice,
    applications,
    updateApplicationStatus,
    deleteApplication,
    gallery,
    addGalleryItem,
    deleteGalleryItem
  } = useAdmin();

  const [activeTab, setActiveTab] = useState('notices');

  // New Notice State
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState('Academics');
  const [noticeSummary, setNoticeSummary] = useState('');
  const [noticePinned, setNoticePinned] = useState(false);

  // New Gallery Item State
  const [galTitle, setGalTitle] = useState('');
  const [galCategory, setGalCategory] = useState('Campus Life');
  const [galImage, setGalImage] = useState('');

  const handleAddNoticeSubmit = (e) => {
    e.preventDefault();
    if (!noticeTitle || !noticeSummary) return;

    addNotice({
      title: noticeTitle,
      category: noticeCategory,
      summary: noticeSummary,
      isPinned: noticePinned,
      urgent: noticePinned
    });

    setNoticeTitle('');
    setNoticeSummary('');
    setNoticePinned(false);
  };

  const handleAddGallerySubmit = (e) => {
    e.preventDefault();
    if (!galTitle || !galImage) return;

    addGalleryItem({
      title: galTitle,
      category: galCategory,
      image: galImage,
      type: 'photo'
    });

    setGalTitle('');
    setGalImage('');
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">SBPS Administration CMS</h1>
              <p className="text-xs text-slate-400">Manage notices, admission approvals, and gallery content in real-time.</p>
            </div>
          </div>
          <Badge variant="amber">CMS Active</Badge>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex border-b border-slate-200 gap-4 mb-6">
          <button
            onClick={() => setActiveTab('notices')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'notices'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Manage Notices & Announcements ({notices.length})
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'applications'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Admission Applications ({applications.length})
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'gallery'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Gallery Management ({gallery.length})
          </button>
        </div>

        {/* Tab 1: Notices Management */}
        {activeTab === 'notices' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Create Notice Form */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <Plus className="w-5 h-5 text-amber-500" />
                Publish New Notice / Circular
              </h3>

              <form onSubmit={handleAddNoticeSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Notice Title *</label>
                  <input
                    type="text"
                    required
                    value={noticeTitle}
                    onChange={(e) => setNoticeTitle(e.target.value)}
                    placeholder="e.g. Schedule for NDA Entrance Trial"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                  <select
                    value={noticeCategory}
                    onChange={(e) => setNoticeCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-800 bg-white"
                  >
                    <option value="Academics">Academics</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Sports">Sports</option>
                    <option value="Achievements">Achievements</option>
                    <option value="Circular">Circular</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Summary / Details *</label>
                  <textarea
                    required
                    rows={3}
                    value={noticeSummary}
                    onChange={(e) => setNoticeSummary(e.target.value)}
                    placeholder="Provide detailed message for students and parents..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={noticePinned}
                    onChange={(e) => setNoticePinned(e.target.checked)}
                    className="text-amber-500 rounded"
                  />
                  <span>Pin to Live Announcement Ticker</span>
                </label>

                <Button type="submit" variant="gold" className="w-full">
                  Publish to Website
                </Button>
              </form>
            </div>

            {/* Existing Notices List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900">Live Active Notices</h3>
              <div className="space-y-3">
                {notices.map((n) => (
                  <div
                    key={n.id}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="blue">{n.category}</Badge>
                        {n.isPinned && <Badge variant="amber">Pinned</Badge>}
                        <span className="text-xs text-slate-400">{n.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{n.title}</h4>
                      <p className="text-xs text-slate-600 line-clamp-2">{n.summary}</p>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => togglePinNotice(n.id)}
                        className={`p-2 rounded-lg text-xs font-bold ${
                          n.isPinned ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'
                        }`}
                        title="Pin/Unpin"
                      >
                        <Pin className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteNotice(n.id)}
                        className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                        title="Delete Notice"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Admission Applications Management */}
        {activeTab === 'applications' && (
          <div className="space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900">Submitted Online Applications</h3>
            <div className="space-y-3">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-blue-900 text-sm">{app.id}</span>
                      <Badge variant={app.status.includes('Approved') ? 'emerald' : 'amber'}>
                        {app.status}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {app.studentName} <span className="text-xs font-normal text-slate-500">(Parent: {app.parentName})</span>
                    </h4>
                    <p className="text-xs text-slate-600">
                      Grade: <strong>{app.gradeApplied}</strong> | Phone: {app.phone} | City: {app.city} | Hostel: {app.hostelRequired}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => updateApplicationStatus(app.id, 'Approved & Called for Assessment')}
                    >
                      Approve
                    </Button>
                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Gallery Management */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900">Add Photo to Gallery</h3>
              <form onSubmit={handleAddGallerySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Image Title *</label>
                  <input
                    type="text"
                    required
                    value={galTitle}
                    onChange={(e) => setGalTitle(e.target.value)}
                    placeholder="e.g. Science Lab Experiment"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                  <select
                    value={galCategory}
                    onChange={(e) => setGalCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-800 bg-white"
                  >
                    <option value="NDA Wing">NDA Wing</option>
                    <option value="Sports">Sports</option>
                    <option value="Academics">Academics</option>
                    <option value="Campus Life">Campus Life</option>
                    <option value="Cultural">Cultural</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Image URL *</label>
                  <input
                    type="url"
                    required
                    value={galImage}
                    onChange={(e) => setGalImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <Button type="submit" variant="gold" className="w-full">
                  Add Image
                </Button>
              </form>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {gallery.map((g) => (
                <div key={g.id} className="relative bg-white rounded-xl border overflow-hidden group">
                  <img src={g.image} alt={g.title} className="w-full h-36 object-cover" />
                  <div className="p-2 flex items-center justify-between text-xs">
                    <span className="font-bold truncate max-w-[120px]">{g.title}</span>
                    <button
                      onClick={() => deleteGalleryItem(g.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
