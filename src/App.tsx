import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';
import WaitlistPage from './components/WaitlistPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { PromoBannerProvider } from './contexts/PromoBannerContext';

function App() {
  return (
    <Router>
      <PromoBannerProvider>
        <Routes>
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/" element={
            <div className="min-h-screen bg-black">
              <PromoBanner />
              <Navbar />
              <div className="pt-24">
                <Hero />
                <Pricing />
                <FAQ />
                <CTASection />
                <Footer />
              </div>
            </div>
          } />
        </Routes>
      </PromoBannerProvider>
    </Router>
  );
}

export default App;
