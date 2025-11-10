import React, { useState, useEffect, useRef } from 'react';
import { Phone, Clock, Zap, Award } from 'lucide-react';

function AboutUs() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setHeaderVisible(true);
      });
    }, observerOptions);

    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setContentVisible(true);
      });
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
    };
  }, []);

  const values = [
    {
      icon: Phone,
      title: 'Never Miss A Call',
      description: 'Our AI answers every single call in 2 rings, 24/7/365. No more lost leads while you are on the roof or with customers.'
    },
    {
      icon: Zap,
      title: 'Instant Lead Qualification',
      description: 'AI qualifies every caller in real-time, filtering out tire kickers so you only spend time on serious roofing jobs.'
    },
    {
      icon: Clock,
      title: 'Works Around The Clock',
      description: 'Storm damage at 2 AM? Leak on Sunday? Your AI agent answers immediately and books the appointment.'
    },
    {
      icon: Award,
      title: 'Built For Roofers',
      description: 'Specifically designed for roofing contractors. Understands your business, your customers, and your challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
            BUILT FOR ROOFERS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Our technology is specifically designed to solve the biggest problem in roofing: missed calls and lost jobs.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-800 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 tracking-wide">
                    Who I Am
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
                    Hi! My name is Erdem. I'm an AI automation specialist who helps roofing contractors capture every lead and grow their business through intelligent automation.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
                    I've seen too many roofers lose jobs simply because they couldn't answer the phone. That's why I built AI inbound voice agents specifically for the roofing industry to make sure you never miss another call, never lose another lead, and never hand money to your competitors again.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
                    My goal is simple: help roofers answer every call, qualify every lead, and book more jobs automatically.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20"></div>
                    <img
                      src="https://i.imgur.com/2WKsK7z.jpeg"
                      alt="Erdem - AI Specialist"
                      className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-lg border border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 tracking-wide font-mono">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed tracking-wide">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
                Ready to Answer Every Call?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 tracking-wide">
                See how AI can capture every lead and book more roofing jobs starting today.
              </p>
              <a
                href="#book-call"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
