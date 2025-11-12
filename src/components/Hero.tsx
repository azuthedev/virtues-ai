import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 animate-fade-in">
            Stop Missing Calls.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Start Capturing Every Roofing Job.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            24/7 call answering trained specifically for roofing contractors. Books appointments and qualifies leads while you're on the roof.
          </p>

          <div className="flex justify-center">
            <Link to="/contact" className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="relative">Book Your Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-700 font-medium">Calls Answered</div>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-700 font-medium">Always Available</div>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Instant</div>
              <div className="text-gray-700 font-medium">Call Pickup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
