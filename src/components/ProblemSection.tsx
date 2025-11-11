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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
                className={`bg-red-50 rounded-xl border-2 border-red-300 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transition: 'all 0.5s ease-out'
                }}
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

        {/* Interactive Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calculator className="w-10 h-10 text-white" />
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  How Much Are You Losing?
                </h3>
              </div>
              <p className="text-xl text-blue-100">
                Calculate what missed calls are costing your roofing business
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
                    How many jobs do you close? (%)
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
                    Average job value ($)
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
                    Total calls per day
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
                  What You're Losing Every Month
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
                    <p className="text-xs text-gray-500 mt-1">At {conversionRate}% close rate</p>
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
            Never Miss Another Call
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We answer in 2 rings, qualify the lead, and book the estimate. 24/7. Even when you're up on the roof.
          </p>

          {onBookCall && (
            <button
              onClick={onBookCall}
              className="px-10 py-5 bg-white text-blue-600 font-bold rounded-lg text-xl transition-colors duration-200 hover:bg-blue-50"
            >
              Get Your Free Demo
            </button>
          )}
          
          <p className="text-white/80 mt-6 text-sm">
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
