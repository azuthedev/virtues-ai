import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroProps {
  onBookCall: (service?: string) => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section id="hero" className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center pt-20 md:pt-0">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div 
          ref={heroRef}
          className={`transition-all duration-1000 ${
            heroVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
           Systems That Work
            <br />
            <span className="text-blue-600">While You Sleep</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide">
            We build custom automation solutions that capture more leads, provide 24/7 customer support, and eliminate manual work—giving you back time and increasing revenue.
          </p>
          <button
            onClick={() => onBookCall()}
            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105 tracking-wide shadow-lg hover:shadow-blue-500/20"
          >
            <div className="flex items-center justify-center gap-3">
              <ArrowUp className="w-5 h-5" />
              <span>Book a Strategy Call</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
