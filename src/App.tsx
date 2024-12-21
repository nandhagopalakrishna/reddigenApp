import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import { PromoBannerProvider } from './contexts/PromoBannerContext';

const Hero = lazy(() => import('./components/Hero'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));
const WaitlistPage = lazy(() => import('./components/WaitlistPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

const LoadingSpinner = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="text-white">Loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <PromoBannerProvider>
        <Routes>
          <Route path="/waitlist" element={
            <Suspense fallback={<LoadingSpinner />}>
              <WaitlistPage />
            </Suspense>
          } />
          <Route path="/privacy" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivacyPolicy />
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TermsOfService />
            </Suspense>
          } />
          <Route path="/" element={
            <div className="min-h-screen bg-black">
              <PromoBanner />
              <Navbar />
              <div className="pt-24">
                <Suspense fallback={<LoadingSpinner />}>
                  <Hero />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Pricing />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <FAQ />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <CTASection />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
              </div>
            </div>
          } />
        </Routes>
      </PromoBannerProvider>
    </Router>
  );
}

export default App;
