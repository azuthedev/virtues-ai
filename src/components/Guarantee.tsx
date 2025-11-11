import React, { useState, useEffect, useRef } from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "How quickly can I get this up and running?",
    answer: "We can have your phone system answering calls within 48-72 hours of our initial consultation. We handle all the technical setup, train the system on your roofing business, and integrate it with your phone system."
  },
  {
    question: "What if this doesn't work for my roofing business?",
    answer: "We offer a 30 day money back guarantee. If you are not satisfied with how the system handles your calls within the first month, we will refund 100% of your investment. No questions asked."
  },
  {
    question: "Do I need technical knowledge to use this?",
    answer: "Not at all! The system works completely automatically. It answers calls, qualifies leads, and books appointments without any action needed from you. We provide a simple dashboard to review calls and appointments."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes, there are no long term contracts. You can cancel your subscription at any time. However, most roofers see such great results capturing leads 24/7 that they stay with us for years."
  },
  {
    question: "Does this work for small roofing companies?",
    answer: "Absolutely! In fact, small roofing companies benefit the most because you are often on roofs or meeting customers when calls come in. The system ensures you never miss a lead, no matter how busy you are."
  }
];

function CombinedSection({ onBookCall, faqs = faqData }) {
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

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-800 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Our Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We stand behind our system with real results for your roofing business
            </p>
          </div>

          <div
            ref={contentRef}
            className={`max-w-5xl mx-auto transition-all duration-800 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  30 Days or Your Money Back
                </h3>
                <p className="text-xl text-blue-100">
                  If you don't capture more leads in the first month, we'll refund 100% of your investment. No questions asked.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="text-center">
                  <p className="text-gray-600 text-lg italic">
                    "We don't get paid unless you capture more leads. That's how confident we are."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
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
    </>
  );
}

export default CombinedSection;
