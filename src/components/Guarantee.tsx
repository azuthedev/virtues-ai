import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, Clock, CheckCircle, ArrowUp, Zap, Rocket, Crown, ChevronDown } from 'lucide-react';

// FAQ Data
const faqData = [
  {
    question: "How quickly can we get started?",
    answer: "We can have your AI solution deployed within 7 days of our initial consultation. Our team works efficiently to understand your needs and implement the right automation systems for your business."
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "We offer a 30-day money-back guarantee. If you don't see measurable results within the first month, we'll refund 100% of your investment. No questions asked."
  },
  {
    question: "Do I need technical knowledge to use your AI solutions?",
    answer: "Not at all! Our AI systems are designed to be user-friendly and intuitive. We handle all the technical setup and provide training to ensure your team can use the tools effectively."
  },
  {
    question: "Which industries do you work with?",
    answer: "We specialize in service-based businesses including roofing, recruiting, legal services, healthcare, real estate, and more. Our AI solutions are customizable to fit any industry that deals with leads and customer communication."
  },
  {
    question: "What's included in the monthly pricing?",
    answer: "All packages include the AI system setup, ongoing support, performance monitoring, weekly optimizations, and direct access to our team. You also own all the data and leads generated through our systems."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time. However, we're confident you'll see such great results that you'll want to continue growing with us."
  },
  {
    question: "How do you measure success?",
    answer: "We track key metrics including lead response time, conversion rates, time saved through automation, and overall ROI. You'll have access to a real-time dashboard showing all these metrics and more."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Absolutely! While we have standard packages, we can customize any solution to fit your specific business needs. Our Scale package is particularly flexible for businesses with unique requirements."
  }
];

export default function CombinedSection({ onBookCall = () => {}, faqs = faqData }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current) {
            setHeaderVisible(entry.isIntersecting);
          }
          if (entry.target === contentRef.current) {
            setContentVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleBookCall = (event, services) => {
    console.log('Booking call with services:', services);
    onBookCall(event, services);
  };

  return (
    <>
      {/* CTA and Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Grow Your Business Starting Today
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Every day you wait is another day your competitors are getting ahead. Our AI automation systems are ready to deploy immediately, giving you back hours of time while increasing revenue. Whether you're in roofing, recruiting, or any service business, we have proven solutions that start working from day one. Schedule your free strategy call today and discover how AI can transform your business operations.
            </p>
            <button
              onClick={handleBookCall}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105 tracking-wide shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center justify-center gap-3">
                <ArrowUp className="w-5 h-5" />
                <span>Book a Strategy Call</span>
              </div>
            </button>
          </div>

          <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center tracking-tight">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border-2 border-blue-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-bold text-black pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-5 bg-blue-50 border-t-2 border-blue-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-800 ${
              headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Our Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We stand behind our AI solutions with a promise of real, measurable results
            </p>
          </div>

          <div
            ref={contentRef}
            className={`max-w-5xl mx-auto transition-all duration-800 animation-delay-200 ${
              contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Results Within 30 Days or Your Money Back
                </h3>
                <p className="text-xl text-blue-100">
                  We're so confident in our AI solutions that we guarantee measurable improvements to your business within the first month.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-3">
                      Increased Revenue
                    </h4>
                    <p className="text-gray-600">
                      See measurable growth in lead conversion and sales within 30 days
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-3">
                      Time Saved
                    </h4>
                    <p className="text-gray-600">
                      Reduce manual work by at least 20 hours per week through automation
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-3">
                      Zero Risk
                    </h4>
                    <p className="text-gray-600">
                      If you don't see results, we'll refund 100% of your investment
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">
                    What You Get With Every Solution:
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Rapid Deployment:</strong> Your AI solution will be live and operational within 7 days
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Dedicated Support:</strong> Direct access to our team for troubleshooting and optimization
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Performance Tracking:</strong> Real-time analytics dashboard showing your ROI and key metrics
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Continuous Optimization:</strong> Weekly refinements to improve performance and results
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Full Ownership:</strong> You own all data, leads, and systems we build for you
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-lg italic">
                    "We don't get paid unless you get results. That's how confident we are in our solutions."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
