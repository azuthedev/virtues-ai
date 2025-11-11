import React from 'react';
import { AlertCircle, ArrowRight, X, CheckCircle, AlertTriangle, Phone } from 'lucide-react';

function RoofingSections({ onBookCall }) {
  const problems = [
    "Customers calling while you're on the roof?",
    "Is your phone going to voicemail during jobs?",
    "After-hours calls keeping you up at night?"
  ];

  return (
    <>
      {/* Section 1: Is This Right for Your Business? */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-black">
            Is This Right for Your Roofing Business?
          </h2>

          <div className="space-y-6 mt-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-red-50 border-2 border-red-300 rounded-xl p-6 hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-xl md:text-2xl font-semibold text-red-900">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl text-blue-600 font-bold mb-8">
              Good News: We fix it fast with just one tool.
            </p>
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xl transition-colors duration-200"
            >
              Get Your Free Demo
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: The Choice Is Yours */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-black">
            The Choice Is <span className="text-blue-600">Yours</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Do Nothing - Left Side */}
            <div className="bg-white border-2 border-red-300 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center">
                  <X className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-900">Do nothing</h3>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-lg">Keep losing jobs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-lg">Keep missing calls</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-lg">Keep staying up at night</span>
                </li>
              </ul>

              <button
                disabled
                className="w-full py-4 bg-red-100 text-red-600 font-bold rounded-lg text-lg cursor-not-allowed border-2 border-red-300"
              >
                Keep Losing Jobs
              </button>
            </div>

            {/* Never Miss a Call - Right Side */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Never Miss a Call Again</h3>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span className="text-lg font-semibold">Every call answered</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span className="text-lg font-semibold">No more staffing headaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span className="text-lg font-semibold">You sleep — it works</span>
                </li>
              </ul>

              <button
                onClick={onBookCall}
                className="w-full py-4 bg-white text-blue-600 font-bold rounded-lg text-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Get Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Limited Spots Alert */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 border-2 border-red-300 rounded-full">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-bold uppercase tracking-wide">Alert</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              We only onboard <span className="text-blue-600">3 roofers per week.</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-10">
              Claim your spot before this week's schedule fills up.
            </p>

            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xl transition-colors duration-200"
            >
              Get Your Free Demo
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Done Losing Jobs */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">
            Done losing jobs to{' '}
            <span className="text-blue-600">missed calls?</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-12">
            Start booking more jobs — without hiring anyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xl transition-colors duration-200"
            >
              Get Your Free Demo
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <button
              disabled
              className="inline-flex items-center justify-between px-6 py-4 bg-gray-100 text-gray-700 font-medium rounded-lg text-lg cursor-not-allowed opacity-80 w-full sm:w-auto"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Try for Free</span>
              </div>
              <span className="bg-gray-300 text-gray-600 px-3 py-1 rounded text-sm font-medium">Coming Soon</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoofingSections;
