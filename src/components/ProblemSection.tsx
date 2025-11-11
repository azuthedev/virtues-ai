import React, { useState, useEffect, useRef } from 'react';
import { Phone, PhoneOff, Clock, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

function ProblemSection({ onBookCall }) {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  const problems = [
    {
      icon: PhoneOff,
      title: "You're Up on the Roof",
      description: "Phone rings. You can't answer. That's an $8,000 job going to the guy who picked up.",
      stat: "67% won't call back"
    },
    {
      icon: Clock,
      title: "They're Already Calling 3 Other Guys",
      description: "By the time you call back, they've booked someone else. Fastest answer wins the job.",
      stat: "5 min response = 100x more jobs"
    },
    {
      icon: DollarSign,
      title: "Storm Damage Calls at 9 PM",
      description: "Leaks don't wait for business hours. But your phone does.",
      stat: "35% of calls after hours"
    }
  ];

  const benefits = [
    {
      icon: Phone,
      title: "Every Call Answered Instantly",
      description: "No more voicemails. No more missed opportunities. We pick up in 2 rings, every single time."
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Storm hit at midnight? Leak on Sunday morning? We're answering calls when your competitors are sleeping."
    },
    {
      icon: CheckCircle2,
      title: "Book Jobs Without Staff",
      description: "Our AI qualifies leads, answers questions, and books estimates automatically. You just show up and close."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-red-100 border-2 border-red-300 rounded-full mb-6">
            <p className="text-red-600 font-bold tracking-wide">⚠️ MISSING CALLS = MISSING MONEY</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            You're On The Roof.
            <span className="block text-blue-600">Your Phone's Ringing.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            That homeowner moves on to the next roofer. 
            <span className="font-bold text-blue-600"> They book. You lose $8,000+.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-red-50 rounded-xl border-2 border-red-300 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2 tracking-tight">
                      {problem.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-800 text-base leading-relaxed mb-4">
                  {problem.description}
                </p>
                
                <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                  <p className="text-red-800 font-bold text-center text-sm">
                    {problem.stat}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              Let Our Tool Answer Customer Calls <span className="text-blue-600">for You</span>
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stop losing jobs to missed calls. Our AI handles every call so you can focus on roofing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-blue-50 rounded-xl border-2 border-blue-300 p-8 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-800 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center py-12">
          <button
            onClick={() => onBookCall && onBookCall()}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xl transition-colors duration-200 inline-flex items-center gap-2"
          >
            Get Your Free Demo
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p className="text-gray-600 mt-6 text-sm">
            10 minute demo • No credit card • No BS
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            "Every missed call is money in your competitor's pocket."
          </p>
          <p className="text-lg text-gray-600">
            Answer every call. Win more jobs. Automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
