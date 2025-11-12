import { Phone, Clock, CheckCircle, Zap } from 'lucide-react';

export default function Solution() {
  return (
    <div id="solution" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">The Solution</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            24/7 Call Answering
            <br />
            <span className="text-blue-600">Built for Roofers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answer every call. Book appointments. Qualify leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Never Miss Another Call
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl flex-shrink-0 h-fit group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Answered instantly
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    On a ladder or at home. Calls answered immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl flex-shrink-0 h-fit group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Always available
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    2 AM storm damage? Weekend emergencies? We never sleep.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl flex-shrink-0 h-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Knows roofing
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Understands the work. Asks the right questions. Books qualified appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-300 shadow-2xl">
            <div className="bg-white rounded-xl p-6 shadow-2xl mb-4 hover:shadow-3xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Incoming Call</div>
                  <div className="text-sm text-gray-500">Saturday 8:47 PM</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600 mb-1">Caller: "My roof is leaking badly, need help ASAP"</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 mb-1">System: "I understand this is urgent. Let me get you scheduled for an emergency inspection. Can you describe where the leak is?"</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600 mb-1">Caller: "Above the master bedroom, water coming through ceiling"</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">System: "Got it. I can get someone there first thing tomorrow morning at 8 AM. What's your address?"</p>
                </div>
              </div>
            </div>
            <div className="bg-green-100 rounded-xl p-4 border border-green-200">
              <div className="flex items-center gap-2 text-green-800">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Appointment booked: $3,200 job captured</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              What this means for your business:
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-blue-100">More booked jobs</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$0</div>
                <div className="text-blue-100">Missed opportunities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Focus on roofing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
