import React, { createContext, useContext, useState, useEffect } from 'react';
import { NOTICES_DATA, MOCK_APPLICATIONS, GALLERY_ITEMS, HALL_OF_FAME } from '../data/mockData';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  // Notices State
  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem('sbps_notices');
    return saved ? JSON.parse(saved) : NOTICES_DATA;
  });

  // Admission Applications State
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('sbps_applications');
    return saved ? JSON.parse(saved) : MOCK_APPLICATIONS;
  });

  // Gallery State
  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('sbps_gallery');
    return saved ? JSON.parse(saved) : GALLERY_ITEMS;
  });

  // Achievements State
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('sbps_achievements');
    return saved ? JSON.parse(saved) : HALL_OF_FAME;
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('sbps_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('sbps_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('sbps_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('sbps_achievements', JSON.stringify(achievements));
  }, [achievements]);

  // Notice Actions
  const addNotice = (newNotice) => {
    const item = {
      ...newNotice,
      id: `N${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0]
    };
    setNotices([item, ...notices]);
  };

  const deleteNotice = (id) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  const togglePinNotice = (id) => {
    setNotices(
      notices.map((n) => (n.id === id ? { ...n, isPinned: !n.isPinned } : n))
    );
  };

  // Application Actions
  const addApplication = (appData) => {
    const newApp = {
      ...appData,
      id: `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Under Review',
      dateSubmitted: new Date().toISOString().split('T')[0]
    };
    setApplications([newApp, ...applications]);
    return newApp.id;
  };

  const updateApplicationStatus = (id, newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const deleteApplication = (id) => {
    setApplications(applications.filter((a) => a.id !== id));
  };

  // Gallery Actions
  const addGalleryItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    setGallery([newItem, ...gallery]);
  };

  const deleteGalleryItem = (id) => {
    setGallery(gallery.filter((g) => g.id !== id));
  };

  return (
    <AdminContext.Provider
      value={{
        notices,
        addNotice,
        deleteNotice,
        togglePinNotice,
        applications,
        addApplication,
        updateApplicationStatus,
        deleteApplication,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        achievements
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
