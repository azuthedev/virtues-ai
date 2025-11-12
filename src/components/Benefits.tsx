import { TrendingUp, Clock, Filter, Calendar, DollarSign, Users } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Capture More Jobs",
      description: "Answer 100% of calls instantly. Never lose to faster competitors.",
      metric: "+40% bookings"
    },
    {
      icon: Filter,
      title: "Pre-Qualified Leads",
      description: "We ask budget, timeline, scope upfront. Only serious leads scheduled.",
      metric: "60% time saved"
    },
    {
      icon: Calendar,
      title: "Auto Scheduling",
      description: "Leads book directly into your calendar. No phone tag.",
      metric: "Same-day booking"
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Midnight storm? 6 AM leak? Catch every panic call.",
      metric: "Round-the-clock"
    },
    {
      icon: DollarSign,
      title: "Auto Follow-Ups",
      description: "We follow up on quotes at the right time. Never forget.",
      metric: "30% more closes"
    },
    {
      icon: Users,
      title: "Free Up Your Time",
      description: "Focus on roofing. We handle the phone.",
      metric: "10+ hours saved"
    }
  ];

  return (
    <div id="benefits" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What You Get With Our System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete lead capture that works 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 group transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-blue-700">{benefit.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-xl">
          <div className="text-center">
            <div className="inline-block bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              RISK-FREE TRIAL
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try It Free For 7 Days
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Test with real calls. Not capturing more leads? Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
