import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutUs() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to transforming businesses through intelligent automation that delivers real results.'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Our solutions go live in days, not months. We focus on rapid deployment with immediate impact.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Every solution is custom-built for your specific needs. Your success is our success.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'We deliver measurable outcomes: increased revenue, saved time, and improved customer satisfaction.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
            ABOUT US
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide leading-relaxed">
            We are AI and automation specialists who apply our expertise to help roofers and recruiters scale through intelligent systems.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-800 animation-delay-200 ${
            contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 tracking-wide">
                    Meet Me
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
                   I'm an AI specialist and automation expert based at Gelişim Koleji, dedicated to businesses scale through intelligent systems.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
                    I build custom automations that transform key business processes. My systems include support automation, lead capture, phone caller systems, and custom websites for client-facing operations. For talent acquisition, I develop powerful resume screening automations.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
                    My goal is to leverage AI to replace manual effort, giving businesses back countless hours for strategic growth.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20"></div>
                    <img
                      src="https://i.imgur.com/2WKsK7z.jpeg"
                      alt="Profile"
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
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 tracking-wide">
                Let us show you how intelligent automation can drive real results for your business.
              </p>
              <a
                href="#book-call"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
