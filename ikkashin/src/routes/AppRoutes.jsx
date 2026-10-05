import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

import Home from '../pages/Home/Home';
import Academics from '../pages/Academics/Academics';
import Sports from '../pages/Sports/Sports';
import Admissions from '../pages/Admissions/Admissions';
import CampusLife from '../pages/CampusLife/CampusLife';
import NewsEvents from '../pages/NewsEvents/NewsEvents';
import Gallery from '../pages/Gallery/Gallery';
import Faculty from '../pages/Faculty/Faculty';
import StudentPortal from '../pages/StudentPortal/StudentPortal';
import AdminCMS from '../pages/AdminCMS/AdminCMS';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/admin-cms" element={<AdminCMS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
