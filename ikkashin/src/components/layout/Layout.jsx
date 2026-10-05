import React, { useState } from 'react';
import NoticeTicker from '../common/NoticeTicker';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import QuickAccessDrawer from './QuickAccessDrawer';
import AuthModal from '../common/AuthModal';

export default function Layout({ children }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Notice Ticker */}
      <NoticeTicker />

      {/* TopBar with phone, address, admissions notice */}
      <TopBar onOpenAuthModal={() => setIsAuthModalOpen(true)} />

      {/* Main Navbar */}
      <Navbar onOpenAuthModal={() => setIsAuthModalOpen(true)} />

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Quick Action Drawer */}
      <QuickAccessDrawer />

      {/* Footer */}
      <Footer />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
