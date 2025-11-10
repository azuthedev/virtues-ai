import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, Phone, CheckCircle, ArrowUp, ChevronDown } from 'lucide-react';

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
    question: "What happens if the system can't answer a caller's question?",
    answer: "The system is trained specifically on roofing services and can handle 95% of common questions. For complex situations, it smoothly transfers the call to you with full context of the conversation, so you never lose a lead."
  },
  {
    question: "What's included in the monthly pricing?",
    answer: "Everything! System setup, unlimited call handling, lead qualification, appointment booking, CRM integration, ongoing optimization, and direct support from our team. No hidden fees or surprise charges."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes, there are no long term contracts. You can cancel your subscription at any time. However, most roofers see such great results capturing leads 24/7 that they stay with us for years."
  },
  {
    question: "How do you measure success?",
    answer: "We track every call answered, leads qualified, appointments booked, and response times. You get a real time dashboard showing exactly how many jobs you would have missed without the system."
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

  const handleBookCall = () => {
    if (onBookCall) {
      onBookCall();
    }
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
              We stand behind our system with a promise of real, measurable results for your roofing business
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
                  Capture More Leads Within 30 Days or Your Money Back
                </h3>
                <p className="text-xl text-blue-100">
                  We are so confident our system will capture leads you are currently missing that we guarantee results within the first month.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-3">
                      Never Miss A Call
                    </h4>
                    <p className="text-gray-600">
                      Every single call answered in 2 rings, 24/7, even when you are on the roof
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-3">
                      More Jobs Booked
                    </h4>
                    <p className="text-gray-600">
                      Instant lead qualification and appointment booking means more estimates and closed deals
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
                      If you do not see more leads captured, we will refund 100% of your investment
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">
                    What You Get:
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">48 Hour Setup:</strong> Your system will be answering calls within 2 business days
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">24/7 Call Handling:</strong> Never miss another roofing lead, even at 2 AM when storms hit
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Instant Lead Qualification:</strong> Filters out tire kickers so you only talk to serious customers
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Automatic Appointment Booking:</strong> Schedules inspections directly into your calendar
                      </p>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <strong className="text-lg md:text-lg">Real Time Dashboard:</strong> See every call, every lead, and every appointment as they happen
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-lg italic">
                    "We do not get paid unless you capture more leads. That is how confident we are in our system."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Stop Losing Roofing Jobs Today
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Every missed call is a lost roofing job going to your competitor. Our system answers every call in 2 rings, qualifies every lead, and books appointments automatically. While other roofers are losing leads, you will be capturing every single one. Schedule your free demo call today and see exactly how it handles roofing calls. No credit card required, no pressure, just a real demonstration of how you will never miss another lead.
            </p>
            <button
              onClick={handleBookCall}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105 tracking-wide shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center justify-center gap-3">
                <ArrowUp className="w-5 h-5" />
                <span>Book Call</span>
              </div>
            </button>
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
