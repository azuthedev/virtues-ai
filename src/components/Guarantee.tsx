import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

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
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current) {
            setHeaderVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-800 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>
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
  );
}

export default CombinedSection;
