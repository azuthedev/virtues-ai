import React, { useState, useEffect, useRef } from 'react';
import { Clock, TrendingDown, Users, AlertCircle, Calculator } from 'lucide-react';

interface ProblemSectionProps {
  onBookCall?: () => void;
}

export default function ProblemSection({ onBookCall }: ProblemSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Calculator state
  const [lostLeads, setLostLeads] = useState(30);
  const [avgDealValue, setAvgDealValue] = useState(5000);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);

  // Calculations
  const lostRevenue = lostLeads * avgDealValue;
  const wastedTimeCost = hoursPerWeek * 4 * hourlyRate; // per month
  const totalLoss = lostRevenue + wastedTimeCost;

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
      icon: TrendingDown,
      title: "Losing Leads Every Day",
      description: "Slow response times mean competitors capture YOUR potential customers. Every minute of delay costs you money.",
      stat: "78% of customers choose the first responder"
    },
    {
      icon: Clock,
      title: "Drowning in Manual Tasks",
      description: "Your team spends 20+ hours per week on repetitive work that could be automated. That's time NOT spent growing your business.",
      stat: "20+ hours wasted weekly on manual work"
    },
    {
      icon: Users,
      title: "Overwhelmed Customer Support",
      description: "Can't keep up with inquiries? Missing calls? Customers getting frustrated? You're leaving money on the table every single day.",
      stat: "60% of calls go unanswered during peak hours"
    },
    {
      icon: AlertCircle,
      title: "Unable to Scale",
      description: "Want to grow but hiring is too expensive and slow? Manual processes are holding you back from reaching your full potential.",
      stat: "Scaling costs increase 3x without automation"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-6 py-2 bg-blue-100 border-2 border-blue-300 rounded-full mb-6">
            <p className="text-blue-600 font-bold tracking-wide">⚠️ ARE YOU LOSING MONEY?</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Stop Losing Money to
            <span className="block text-blue-600">Manual Work</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every day you wait is another day your competitors are getting ahead. 
            <span className="font-bold text-blue-600"> While you're stuck doing manual tasks, they're capturing your leads.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 border-blue-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
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
                  Cost Calculator
                </h3>
              </div>
              <p className="text-xl text-blue-100">
                See how much manual work is really costing you every month
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Lost leads per month
                  </label>
                  <input
                    type="number"
                    value={lostLeads}
                    onChange={(e) => setLostLeads(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Average deal value ($)
                  </label>
                  <input
                    type="number"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Hours spent on manual work per week
                  </label>
                  <input
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your hourly rate ($)
                  </label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-bold text-black"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
                <h4 className="text-2xl font-bold text-center text-black mb-6">
                  Your Monthly Loss
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Lost Leads</p>
                    <p className="text-3xl font-bold text-blue-600">{lostLeads}</p>
                    <p className="text-xs text-gray-500 mt-1">Per month</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Lost Revenue</p>
                    <p className="text-3xl font-bold text-blue-600">${lostRevenue.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">From lost leads</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Wasted Time Cost</p>
                    <p className="text-3xl font-bold text-blue-600">${wastedTimeCost.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">Manual work cost</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-center">
                  <p className="text-white text-lg mb-2">Total Monthly Loss</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 break-words">
                    ${totalLoss.toLocaleString()}
                  </p>
                  <p className="text-blue-100 text-lg sm:text-xl font-bold break-words">
                    ${(totalLoss * 12).toLocaleString()} per year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Stop the Bleeding?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            AI automation can save you this money starting in just 7 days. No more lost leads, no more wasted time.
          </p>

          {onBookCall && (
            <button
              onClick={onBookCall}
              className="px-10 py-5 bg-white text-blue-600 font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book Free Strategy Call
            </button>
          )}
          
          <p className="text-white/80 mt-6 text-sm">
            Free 30-minute consultation • See exactly how much you can save • No obligation
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            "Every day without automation is costing you money."
          </p>
          <p className="text-lg text-gray-600">
            Your competitors are already using AI. Don't let them leave you behind.
          </p>
        </div>
      </div>
    </section>
  );
}
