import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

function Hero({ onBookCall }) {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center pt-20 md:pt-0">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div 
          className={`transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
            Never Miss A Job
            <br />
            <span className="text-blue-600">Ever Again.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide">
            Missing calls? Every call is answered, leads are qualified, and appointments are booked around the clock.
          </p>

          {/* Service Highlight */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center shadow-lg">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-xl font-bold">AI Inbound Voice Agents</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={() => onBookCall()}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105 tracking-wide shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center justify-center gap-3">
                <ArrowUp className="w-5 h-5" />
                <span>Get Your Free Demo</span>
              </div>
            </button>

            <button
              className="group relative px-8 py-4 bg-gray-200 text-gray-400 font-bold rounded-lg text-lg tracking-wide shadow-lg cursor-not-allowed"
              disabled
            >
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Try for Free</span>
                <span className="ml-2 text-sm bg-gray-300 text-gray-500 px-2 py-1 rounded">Coming Soon</span>
              </div>
            </button>
          </div>

          <p className="text-sm text-gray-500">
            See how our tool can handle your calls in under 10 minutes
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
