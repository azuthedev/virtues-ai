import { Phone, Settings, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      number: "1",
      title: "Quick Setup",
      description: "We learn your services, area, and schedule. Configure your system in under an hour.",
      details: ["Forward calls", "Set availability", "Customize"]
    },
    {
      icon: Phone,
      number: "2",
      title: "Instant Answers",
      description: "We answer in 30 seconds with your company greeting.",
      details: ["Your company", "Qualify leads", "Handle emergencies"]
    },
    {
      icon: Calendar,
      number: "3",
      title: "Auto Booking",
      description: "Qualified? Booked. Unqualified? Declined. Emergency? Flagged.",
      details: ["Calendar sync", "Text confirmation", "All details"]
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Close More Jobs",
      description: "Pre-qualified appointments only. No wasted time.",
      details: ["Qualified leads", "Full details", "Higher close rate"]
    }
  ];

  return (
    <div id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple setup. Powerful results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-300 transform -translate-x-1/2 shadow-lg"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 ${
                      isEven ? 'lg:mr-8' : 'lg:ml-8'
                    }`}>
                      <div className="flex lg:hidden items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full items-center justify-center text-white text-xl font-bold z-10 shadow-xl border-4 border-white">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <div className={`hidden lg:flex ${isEven ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <Icon className="w-12 h-12 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Stop Missing Calls?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Setup in under an hour. Results immediately.
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
              Book Your Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
