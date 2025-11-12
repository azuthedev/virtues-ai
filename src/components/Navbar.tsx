import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://i.imgur.com/cWZk2Sc.png" alt="Virtues AI" className="h-10" />
            <span className="text-2xl font-bold text-gray-900">Virtues AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  The Problem
                </button>
                <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Solution
                </button>
                <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Benefits
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  How It Works
                </button>
              </>
            ) : (
              <>
                <Link to="/#problem" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  The Problem
                </Link>
                <Link to="/#solution" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Solution
                </Link>
                <Link to="/#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Benefits
                </Link>
                <Link to="/#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  How It Works
                </Link>
              </>
            )}
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Book Your Free Demo
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection('problem')} className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  The Problem
                </button>
                <button onClick={() => scrollToSection('solution')} className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  Solution
                </button>
                <button onClick={() => scrollToSection('benefits')} className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  Benefits
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  How It Works
                </button>
              </>
            ) : (
              <>
                <Link to="/#problem" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  The Problem
                </Link>
                <Link to="/#solution" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  Solution
                </Link>
                <Link to="/#benefits" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  Benefits
                </Link>
                <Link to="/#how-it-works" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                  How It Works
                </Link>
              </>
            )}
            <Link to="/contact" className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
              Book Your Free Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
