import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import AboutUs from './components/AboutUs';
import RoofingSections from './components/RoofingSections';
import Features from './components/Features';
import Guarantee from './components/Guarantee';
import BookConsultation from './components/BookConsultation';
import ConsultationForm from './components/ConsultationForm';
import CookiePolicy from './components/CookiePolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'form' | 'cookie-policy' | 'privacy-policy' | 'terms-of-service'>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  const handleBookCall = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setCurrentPage('form');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleCookiePolicy = () => {
    setCurrentPage('cookie-policy');
  };

  const handlePrivacyPolicy = () => {
    setCurrentPage('privacy-policy');
  };

  const handleTermsOfService = () => {
    setCurrentPage('terms-of-service');
  };

  if (currentPage === 'form') {
    return <ConsultationForm onBack={handleBackToHome} onHome={handleBackToHome} selectedService={selectedService} />;
  }

  if (currentPage === 'cookie-policy') {
    return <CookiePolicy onBack={handleBackToHome} onHome={handleBackToHome} onBookCall={handleBookCall} onCookiePolicy={handleCookiePolicy} onPrivacyPolicy={handlePrivacyPolicy} onTermsOfService={handleTermsOfService} />;
  }

  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy onBack={handleBackToHome} onHome={handleBackToHome} onBookCall={handleBookCall} onCookiePolicy={handleCookiePolicy} onPrivacyPolicy={handlePrivacyPolicy} onTermsOfService={handleTermsOfService} />;
  }

  if (currentPage === 'terms-of-service') {
    return <TermsOfService onBack={handleBackToHome} onHome={handleBackToHome} onBookCall={handleBookCall} onCookiePolicy={handleCookiePolicy} onPrivacyPolicy={handlePrivacyPolicy} onTermsOfService={handleTermsOfService} />;
  }

  return (
    <div className="min-h-screen text-black font-mono relative">
      <Navigation
        onBookCall={handleBookCall}
        onCookiePolicy={handleCookiePolicy}
        onPrivacyPolicy={handlePrivacyPolicy}
        onTermsOfService={handleTermsOfService}
        onHome={undefined}
      />
      <Hero onBookCall={handleBookCall} />
      <ProblemSection onBookCall={handleBookCall} />
      <AboutUs />
      <RoofingSections onBookCall={handleBookCall} />
      <Features />
      <Guarantee />
      <Footer onCookiePolicy={handleCookiePolicy} onPrivacyPolicy={handlePrivacyPolicy} onTermsOfService={handleTermsOfService} onBookCall={handleBookCall} />
    </div>
  );
}

export default App;
