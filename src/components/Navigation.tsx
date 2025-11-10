import React, { useState } from 'react';
import { Menu, X, ArrowUp, Linkedin, Phone } from 'lucide-react';

function Navigation({ onBookCall, onCookiePolicy, onPrivacyPolicy, onTermsOfService, hideBookCall = false, onHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (onHome) {
      onHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button
              onClick={() => onHome ? onHome() : scrollToSection('hero')}
              className="flex items-center gap-3 text-xl font-bold text-black hover:text-blue-600 transition-colors duration-200 tracking-wide"
            >
              <img 
                src="https://i.imgur.com/cWZk2Sc.png" 
                alt="Virtues AI Logo" 
                className="w-8 h-8 object-contain"
              />
              Virtues AI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
            >
              Why Choose Us
            </button>
            <a
              href="https://www.linkedin.com/company/virtues-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {!hideBookCall && (
              <>
                <button
                  disabled
                  className="px-4 py-2 bg-gray-200 text-gray-400 font-semibold rounded-lg cursor-not-allowed tracking-wide relative group"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Try for Free
                  <span className="ml-2 text-xs bg-gray-300 text-gray-500 px-2 py-0.5 rounded">Coming Soon</span>
                </button>
                <button
                  onClick={() => onBookCall()}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 tracking-wide shadow-lg hover:shadow-blue-500/20"
                >
                  <ArrowUp className="w-4 h-4 inline mr-2" />
                  Get Your Free Demo
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-600 hover:text-black transition-colors duration-200 tracking-wide"
              >
                Why Choose Us
              </button>
              <a
                href="https://www.linkedin.com/company/virtues-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              {!hideBookCall && (
                <>
                  <button
                    disabled
                    className="text-left px-4 py-2 bg-gray-200 text-gray-400 font-semibold rounded-lg cursor-not-allowed tracking-wide w-fit"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Try for Free
                    <span className="ml-2 text-xs bg-gray-300 text-gray-500 px-2 py-0.5 rounded">Coming Soon</span>
                  </button>
                  <button
                    onClick={() => onBookCall()}
                    className="text-left px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 tracking-wide w-fit shadow-lg hover:shadow-blue-500/20"
                  >
                    <ArrowUp className="w-4 h-4 inline mr-2" />
                    Get Your Free Demo
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
