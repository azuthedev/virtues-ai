import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const faqs = [
    {
      question: "How much time does it take to set up?",
      answer: "Setup takes 48-72 hours. We learn your business and configure everything."
    },
    {
      question: "What if I'm already using another system?",
      answer: "Easy switch. We handle the transition without missing calls."
    },
    {
      question: "Can I try it before committing?",
      answer: "Yes. 7-day free trial. Cancel anytime if it's not working."
    },
    {
      question: "Does it work with my calendar?",
      answer: "Syncs with Google Calendar, Outlook, and most scheduling tools."
    },
    {
      question: "Will it sound like a robot?",
      answer: "No. Professional, conversational tone trained specifically for roofing."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 transform hover:-translate-y-1"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
