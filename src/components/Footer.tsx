import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

function Footer({ onCookiePolicy, onPrivacyPolicy, onTermsOfService, onBookCall }) {
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFooterVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className={`bg-gray-100 text-black py-16 transition-all duration-1000 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onBookCall()}
                  className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black font-semibold mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-600" />
                <a href="mailto:info@virtues-ai.com" className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide break-all">
                  info@virtues-ai.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/company/virtues-ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200 mt-1"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm tracking-wide">
            © 2025 Virtues AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button 
              onClick={onPrivacyPolicy}
              className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onTermsOfService}
              className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
