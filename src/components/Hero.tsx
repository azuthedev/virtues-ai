import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-20 min-h-screen flex items-start">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Stop Missing Calls.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Start Capturing Every Roofing Job.</span>
          </h1>

          <div className="relative max-w-4xl mx-auto mb-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-gray-900">
              <div style={{ position: 'relative', paddingBottom: '56.872037914691944%', height: 0 }}>
                <iframe
                  src="https://www.loom.com/embed/51a7b48a11744b7fb8486af91c8921d0"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Product Demo"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/contact" className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="relative">Book Your Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
