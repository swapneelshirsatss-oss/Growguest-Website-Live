import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './components/pages/Home';
import Blog from './components/pages/BlogPage';
import ServicesPage from './components/pages/ServicesPage';
import DirectBookingSolutionsPage from './components/pages/DirectBookingSolutionsPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import AuditPage from './components/pages/AuditPage';
import BlogPostHospitalityDigitalMarketing from './components/pages/BlogPostHospitalityDigitalMarketing';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-digital-marketing-services" element={<ServicesPage />} />
        <Route path="/hospitality-digital-marketing-services" element={<ServicesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/hotel-direct-booking-solutions" element={<DirectBookingSolutionsPage />} />
        <Route path="/direct-booking-solutions" element={<DirectBookingSolutionsPage />} />
        <Route path="/hospitality-marketing-case-studies" element={<CaseStudiesPage />} />
        <Route path="/hotel-marketing-case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/free-hotel-digital-marketing-audit" element={<AuditPage />} />
        <Route path="/free-resort-digital-marketing-audit" element={<AuditPage />} />
        <Route path="/free-audit" element={<AuditPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/digital-marketing-for-hospitality-hotels-resorts-homestays" element={<BlogPostHospitalityDigitalMarketing />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
