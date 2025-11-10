import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight, MessageCircle, Users, ShoppingCart, Target, Globe } from 'lucide-react';

export const services = [
  {
    title: 'Ecommerce Automation',
    subtitle: 'Amazon FBA that runs itself. Optimizes. Scales.',
    icon: ShoppingCart,
    features: [
      {
        title: 'Product Listing Creation',
        description: 'AI generated product listings with compelling titles, bullet points, and descriptions optimized for Amazon algorithm and customer conversion.'
      },
      {
        title: 'Listing Optimization',
        description: 'Continuous optimization of existing listings using performance data, keyword analysis, and competitor research to maximize visibility and sales.'
      },
      {
        title: 'Auto Amazon FBA PPC Campaigns',
        description: 'AI powered PPC campaign management that automatically adjusts bids, targets profitable keywords, and optimizes ad spend for maximum ROI.'
      },
      {
        title: 'Performance Analytics',
        description: 'Real time tracking of sales, rankings, and campaign performance with automated reporting and actionable insights.'
      }
    ]
  },
  {
    title: 'Support Automation',
    subtitle: 'Instant support so you can deal with making money.',
    icon: MessageCircle,
    features: [
      {
        title: '24/7 Customer Support',
        description: 'AI powered chatbots that handle customer inquiries around the clock, providing instant responses and solutions.'
      },
      {
        title: 'Ticket Management',
        description: 'Automatically categorize, prioritize, and route support tickets to the right team members for faster resolution.'
      },
      {
        title: 'Knowledge Base Integration',
        description: 'Smart AI that learns from your documentation to provide accurate answers and self service options.'
      },
      {
        title: 'Escalation Protocols',
        description: 'Seamlessly transfer complex issues to human agents when needed, with full context and conversation history.'
      }
    ]
  },
  {
    title: 'Lead Capture Systems',
    subtitle: 'Captures while you sleep. Filters buyers. Everyday.',
    icon: Target,
    features: [
      {
        title: 'Smart Lead Qualification',
        description: 'AI powered forms and chatbots that qualify leads automatically, scoring them based on your criteria.'
      },
      {
        title: 'Multi-Channel Capture',
        description: 'Capture leads from your website, social media, email campaigns, and landing pages in one unified system.'
      },
      {
        title: 'Real-Time Notifications',
        description: 'Get instant alerts when high quality leads are captured, so you can follow up immediately.'
      },
      {
        title: 'CRM Integration',
        description: 'Automatically sync captured leads to your CRM system with all relevant data and interaction history.'
      }
    ]
  },
  {
    title: 'Websites',
    subtitle: 'Websites that actually closes. Nonstop.',
    icon: Globe,
    features: [
      {
        title: 'Conversion-Optimized Design',
        description: 'AI designed websites that are built specifically to convert visitors into customers with proven layouts and copy.'
      },
      {
        title: 'Dynamic Content',
        description: 'Personalized content that adapts to each visitor based on their behavior, location, and preferences.'
      },
      {
        title: 'Integrated Lead Capture',
        description: 'Built in forms, chatbots, and call to actions strategically placed to maximize lead generation.'
      },
      {
        title: 'Performance Tracking',
        description: 'Real time analytics on visitor behavior, conversion rates, and A/B testing for continuous improvement.'
      }
    ]
  },
  {
    title: 'Hiring Systems',
    subtitle: 'Automates recruitment. Screens. Interviews. Hires.',
    icon: Users,
    features: [
      {
        title: 'Automated Screening',
        description: 'AI screens resumes and applications automatically, filtering candidates based on your specific criteria and requirements.'
      },
      {
        title: 'Interview Scheduling',
        description: 'Automatically schedules interviews with qualified candidates, managing calendars and sending confirmations.'
      },
      {
        title: 'Candidate Assessment',
        description: 'AI conducts initial interviews and assessments, evaluating candidates on technical skills and cultural fit.'
      },
      {
        title: 'Hiring Pipeline',
        description: 'Complete recruitment pipeline from job posting to offer letters, all automated and tracked in real time.'
      }
    ]
  }
];

export default function Services({ onBookCall }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100);
    setTimeout(() => setServicesVisible(true), 300);
  }, []);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setExpandedService(null);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setExpandedService(null);
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = isMobile ? currentIndex >= services.length - 1 : currentIndex >= services.length - 3;

  const goToService = (index) => {
    setCurrentIndex(index);
    setExpandedService(null);
  };

  const toggleExpanded = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
            OTHER SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
            Beyond voice agents, we offer additional AI automation solutions for businesses looking to scale.
          </p>
        </div>

        <div 
          className={`transition-all duration-800 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {isMobile ? (
            // Mobile: Carousel View
            <>
              <div className="relative flex items-center justify-center mb-8">
                {!isAtStart && (
                  <button
                    onClick={prevService}
                    className="absolute left-0 z-10 p-2 md:p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                )}

                <div className="flex-1 max-w-sm mx-16 overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentIndex * 100}%)`
                    }}
                  >
                    {services.map((service, serviceIndex) => {
                      const Icon = service.icon;
                      const isExpanded = expandedService === serviceIndex;
                      
                      return (
                        <div
                          key={serviceIndex}
                          className="group text-center transition-all duration-300 flex-shrink-0 w-full px-2"
                        >
                          <div className="group relative p-4 md:p-8 rounded-lg border border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-500 shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                              <Icon className="w-8 h-8 text-blue-600" />
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-bold text-black mb-3 tracking-wide uppercase font-mono">
                              {service.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 md:mb-6 tracking-wide text-xs md:text-sm">
                              {service.subtitle}
                            </p>

                            <div className="space-y-2 md:space-y-3">
                              <button
                                onClick={() => toggleExpanded(serviceIndex)}
                                className="w-full px-4 md:px-6 py-2 md:py-3 bg-transparent border border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 tracking-wide font-mono text-sm md:text-base rounded-lg"
                              >
                                {isExpanded ? 'Hide Details' : 'View Details'}
                              </button>
                              
                              <button
                                onClick={() => onBookCall(service.title)}
                                className="w-full px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 tracking-wide font-mono text-sm md:text-base rounded-lg shadow-lg hover:shadow-blue-500/20"
                              >
                                <div className="flex items-center justify-center">
                                  <ArrowUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                  Book Call
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {!isAtEnd && (
                  <button
                    onClick={nextService}
                    className="absolute right-0 z-10 p-2 md:p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                  >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                )}
              </div>

              <div className="flex justify-center gap-2 mb-8">
                {services.map((_, displayIndex) => (
                  <button
                    key={displayIndex}
                    onClick={() => goToService(displayIndex)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      displayIndex === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            // Desktop: Carousel View with 3 cards visible
            <>
              <div className="relative flex items-center justify-center mb-8">
                {!isAtStart && (
                  <button
                    onClick={prevService}
                    className="absolute left-0 z-10 p-2 md:p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                )}

                <div className="flex-1 max-w-6xl mx-8 md:mx-16 overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentIndex * (100 / 3)}%)`
                    }}
                  >
                    {services.map((service, serviceIndex) => {
                      const Icon = service.icon;
                      const isExpanded = expandedService === serviceIndex;
                      
                      return (
                        <div
                          key={serviceIndex}
                          className="group text-center transition-all duration-300 hover:scale-105 flex-shrink-0 w-full md:w-1/3 px-2 md:px-4"
                        >
                          <div className="group relative p-4 md:p-8 rounded-lg border border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-500 hover:scale-105 shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                              <Icon className="w-8 h-8 text-blue-600" />
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-bold text-black mb-3 tracking-wide uppercase font-mono">
                              {service.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 md:mb-6 tracking-wide text-xs md:text-sm">
                              {service.subtitle}
                            </p>

                            <div className="space-y-2 md:space-y-3">
                              <button
                                onClick={() => toggleExpanded(serviceIndex)}
                                className="w-full px-4 md:px-6 py-2 md:py-3 bg-transparent border border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 tracking-wide font-mono text-sm md:text-base rounded-lg"
                              >
                                {isExpanded ? 'Hide Details' : 'View Details'}
                              </button>
                              
                              <button
                                onClick={() => onBookCall(service.title)}
                                className="w-full px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 tracking-wide font-mono text-sm md:text-base rounded-lg shadow-lg hover:shadow-blue-500/20"
                              >
                                <div className="flex items-center justify-center">
                                  <ArrowUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                  Book Call
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {!isAtEnd && (
                  <button
                    onClick={nextService}
                    className="absolute right-0 z-10 p-2 md:p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                  >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                )}
              </div>

              <div className="flex justify-center gap-2 mb-8">
                {services.map((_, displayIndex) => (
                  <button
                    key={displayIndex}
                    onClick={() => goToService(displayIndex)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      displayIndex === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Expanded Service Details */}
          {expandedService !== null && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold text-black mb-8 text-center tracking-wide font-mono">
                  {services[expandedService].title} Features
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {services[expandedService].features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="p-6 bg-white border border-blue-200 hover:border-blue-300 transition-colors duration-200 rounded-lg shadow-sm"
                    >
                      <h4 className="text-xl font-semibold text-black mb-3 tracking-wide font-mono">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed tracking-wide">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    onClick={() => onBookCall(services[expandedService].title)}
                    className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3 tracking-wide rounded-lg shadow-lg hover:shadow-blue-500/20"
                  >
                    <ArrowUp className="w-5 h-5" />
                    <span>Get Started with {services[expandedService].title}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
