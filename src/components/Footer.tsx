import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://i.imgur.com/cWZk2Sc.png" alt="Virtues AI" className="h-10" />
              <span className="text-2xl font-bold text-white">Virtues AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              24/7 call answering built specifically for roofing contractors.
              Never miss another lead while you're on the roof.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@virtues-ai.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@virtues-ai.com</span>
              </a>
              <a href="https://www.linkedin.com/in/erdem-erol-s%C3%BCer-606690353/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span>Check Our LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">Solution</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Virtues AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
