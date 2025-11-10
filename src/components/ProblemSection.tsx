import React, { useState, useEffect, useRef } from 'react';
import { Phone, PhoneOff, Clock, DollarSign, Calculator } from 'lucide-react';

function ProblemSection({ onBookCall }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Calculator state
  const [missedCalls, setMissedCalls] = useState(15);
  const [conversionRate, setConversionRate] = useState(30);
  const [avgJobValue, setAvgJobValue] = useState(8000);
  const [callsPerDay, setCallsPerDay] = useState(10);

  // Calculations
  const missedLeadsPerMonth = missedCalls;
  const convertedLeads = Math.round((missedLeadsPerMonth * conversionRate) / 100);
  const lostRevenue = convertedLeads * avgJobValue;
  const callsPerMonth = callsPerDay * 30;
  const missedCallPercentage = Math.round((missedCalls / callsPerMonth) * 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: PhoneOff,
      title: "Missing Calls = Missing Money",
      description: "You're on a roof, in a meeting, or with a customer. Your phone rings—and you miss it. That's a potential $8,000+ job going to your competitor.",
      stat: "67% of customers won't call back if you miss their first call"
    },
    {
      icon: Clock,
      title: "Slow Response Time Kills Deals",
      description: "By the time you call back, they've already called 3 other roofers. The fastest responder wins the job—every single time.",
      stat: "Leads contacted within 5 minutes are 100x more likely to convert"
    },
    {
      icon: Phone,
      title: "After-Hours Calls Go Nowhere",
      description: "Storm damage happens at night. Leaks don't wait for business hours. But your phone does. Every evening and weekend call is money left on the table.",
      stat: "35% of roofing calls happen outside business hours"
    },
    {
      icon: DollarSign,
      title: "Unqualified Leads Waste Your Time",
      description: "You spend hours driving to quotes that go nowhere. DIYers, price shoppers, and tire-kickers eating up your valuable time.",
      stat: "40% of your time wasted on unqualified leads"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-6 py-2 bg-red-100 border-2 border-red-300 rounded-full mb-6">
            <p className="text-red-600 font-bold tracking-wide">⚠️ EVERY MISSED CALL IS LOST MONEY</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Stop Losing Roofing Jobs to
            <span className="block text-blue-600">Missed Phone Calls</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your phone rings. You can't answer. That homeowner calls the next roofer. 
            <span className="font-bold text-blue-600"> They book the job. You lose $8,000+.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 border-blue-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transition: 'all 0.5s ease-out'
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">
                      {problem.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {problem.description}
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700 font-bold text-center">
                    {problem.stat}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calculator className="w-10 h-10 text-white" />
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Missed Call Calculator
                </h3>
              </div>
              <p className="text-xl text-blue-100">
                See how much money you're losing from missed phone calls
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Missed calls per month
                  </label>
                  <input
                    type="number"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Lead conversion rate (%)
                  </label>
                  <input
                    type="number"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Average roofing job value ($)
                  </label>
                  <input
                    type="number"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Total calls received per day
                  </label>
                  <input
                    type="number"
                    value={callsPerDay}
                    onChange={(e) => setCallsPerDay(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
                <h4 className="text-2xl font-bold text-center text-black mb-6">
                  Your Monthly Loss From Missed Calls
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Missed Calls</p>
                    <p className="text-3xl font-bold text-blue-600">{missedCalls}</p>
                    <p className="text-xs text-gray-500 mt-1">Per month</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Lost Jobs</p>
                    <p className="text-3xl font-bold text-blue-600">{convertedLeads}</p>
                    <p className="text-xs text-gray-500 mt-1">At {conversionRate}% conversion</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Miss Rate</p>
                    <p className="text-3xl font-bold text-blue-600">{missedCallPercentage}%</p>
                    <p className="text-xs text-gray-500 mt-1">Of all calls</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-center">
                  <p className="text-white text-lg mb-2">Lost Revenue Per Month</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 break-words">
                    ${lostRevenue.toLocaleString()}
                  </p>
                  <p className="text-red-100 text-lg sm:text-xl font-bold break-words">
                    ${(lostRevenue * 12).toLocaleString()} per year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            What If You Never Missed Another Call?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our AI voice agent answers every call in 2 rings, qualifies leads instantly, and books appointments 24/7 - even while you're on the roof.
          </p>

          {onBookCall && (
            <button
              onClick={onBookCall}
              className="px-10 py-5 bg-white text-blue-600 font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Your Free Demo Call
            </button>
          )}
          
          <p className="text-white/80 mt-6 text-sm">
            See it in action in 10 minutes • No credit card required • No obligation
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            "Every missed call is a job for your competitor."
          </p>
          <p className="text-lg text-gray-600">
            Stop losing money. Start answering every call - automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
