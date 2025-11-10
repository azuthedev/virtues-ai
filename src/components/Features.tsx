import React, { useState, useEffect, useRef } from 'react';
import { Phone, Clock, Zap, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Answers Every Call',
    description: 'Never miss another lead. Picks up in 2 rings, 24/7/365, even when you are on a roof.',
    color: 'blue'
  },
  {
    icon: Zap,
    title: 'Instant Lead Qualification',
    description: 'Automatically qualifies callers and filters out time wasters so you only get serious roofing jobs.',
    color: 'blue'
  },
  {
    icon: Clock,
    title: 'Books Appointments',
    description: 'Schedules inspections and quotes directly into your calendar while handling all customer questions.',
    color: 'blue'
  },
  {
    icon: TrendingUp,
    title: 'More Jobs Closed',
    description: 'Respond faster than competitors, qualify better leads, and book more roofing jobs every single day.',
    color: 'blue'
  }
];

function Features() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setHeaderVisible(true);
      });
    }, observerOptions);

    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setGridVisible(true);
      });
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (gridRef.current) gridObserver.observe(gridRef.current);

    return () => {
      headerObserver.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === features.length - 1;

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight font-mono">
            How It Works For Roofers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built specifically to capture more roofing leads and book more jobs
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div 
            ref={gridRef}
            className={`transition-all duration-800 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Features Container with Navigation */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Left Navigation Button */}
              {!isAtStart && (
                <button
                  onClick={prevFeature}
                  className="absolute left-0 z-10 p-2 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              {/* Features Display */}
              <div className="flex-1 max-w-sm mx-16 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    
                    return (
                      <div
                        key={index}
                        className="group relative p-4 md:p-8 rounded-lg border border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-500 hover:scale-105 min-h-[200px] md:min-h-[280px] flex flex-col shadow-sm flex-shrink-0 w-full"
                      >
                        <div className="mb-4 md:mb-6">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center shadow-sm">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                          </div>
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4 tracking-wide transition-colors duration-300 font-mono">
                          {feature.title}
                        </h3>
                        
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-wide transition-colors duration-300 flex-grow">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Navigation Button */}
              {!isAtEnd && (
                <button
                  onClick={nextFeature}
                  className="absolute right-0 z-10 p-2 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Feature Indicators */}
            <div className="flex justify-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto transition-all duration-800 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className={`group relative p-4 md:p-8 rounded-lg border border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-500 hover:scale-105 min-h-[200px] md:min-h-[280px] flex flex-col shadow-sm ${
                    gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${(index + 2) * 100}ms`,
                    transition: 'all 0.8s ease-out'
                  }}
                >
                  <div className="mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4 tracking-wide transition-colors duration-300 font-mono">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-wide transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;
