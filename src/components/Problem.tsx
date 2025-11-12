import { Phone, TrendingDown, Clock, AlertCircle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: Phone,
      title: "Missed calls = lost jobs",
      description: "By the time you climb down, they've called your competitor.",
      stat: "67% call the next roofer"
    },
    {
      icon: Clock,
      title: "After-hours = missed revenue",
      description: "Storm hits at 7 PM. Those emergency jobs? Someone else is booking them.",
      stat: "$2,500 avg emergency"
    },
    {
      icon: TrendingDown,
      title: "Wasted time on tire-kickers",
      description: "Your crew burns gas on price shoppers and jobs too small to matter.",
      stat: "40% unqualified"
    },
    {
      icon: AlertCircle,
      title: "No follow-up = no close",
      description: "You meant to call back that $15K quote. Someone else did.",
      stat: "30% need follow-up"
    }
  ];

  return (
    <div id="problem" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            While You're on the Roof, Your Phone Rings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            And your competitors are picking up the jobs you're missing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-red-700">{problem.stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl p-8 sm:p-12 border-2 border-blue-200 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The brutal truth:
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Roofing companies miss <span className="font-bold text-blue-600">30-40% of calls</span>.
              At $500K/year, that's <span className="font-bold text-blue-600">$150K-$200K</span> to competitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
