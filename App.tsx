import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import SeoVisibilityPage from './pages/SeoVisibilityPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import BusinessGrowthPage from './pages/BusinessGrowthPage';
import InnovationFuturePage from './pages/InnovationFuturePage';
import AboutPage from './pages/AboutPage';
import IndustriesPage from './pages/IndustriesPage';
import BecomeAClientPage from './pages/BecomeAClientPage';
import CaseStudyPage from './pages/CaseStudyPage';
import PricingPage from './pages/PricingPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import FreeSeoAuditPage from './pages/FreeSeoAuditPage';


/**
 * A component that handles scrolling to anchor links on navigation.
 * It also scrolls to the top of the page for navigations without a hash.
 */
const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          const headerOffset = 100; // Account for the sticky header (h-20 is 80px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    } else {
      // Scroll to top on new page navigation if no hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null; // This component does not render anything
};


function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <ScrollToAnchor />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/seo-visibility" element={<SeoVisibilityPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/business-growth" element={<BusinessGrowthPage />} />
          <Route path="/services/innovation-future" element={<InnovationFuturePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/become-a-client" element={<BecomeAClientPage />} />
          <Route path="/case-studies" element={<CaseStudyPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/industry/:industryName" element={<IndustryDetailPage />} />
          <Route path="/free-seo-audit" element={<FreeSeoAuditPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
