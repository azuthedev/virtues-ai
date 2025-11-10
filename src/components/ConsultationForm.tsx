import React, { useState } from 'react';
import { User, Mail, Phone, Building, MessageSquare, Calendar, ArrowUp } from 'lucide-react';
import Navigation from './Navigation';

export default function ConsultationForm({ onBack, onHome, selectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || !formData.message.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const webhookResponse = await fetch('https://n8n.n8nerdem.org/webhook/f07b4b07-cd69-4ae8-bab4-ee8741d0fed9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'virtues-ai-consultation-form'
        })
      });

      if (!webhookResponse.ok) {
        console.error('Webhook failed:', webhookResponse.status);
      }
    } catch (error) {
      console.error('Error sending webhook:', error);
    }
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      onHome();
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Updated validation to include company and message fields
  const isFormValid = formData.name.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.company.trim() !== '' && 
                     formData.message.trim() !== '';

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navigation 
        onBookCall={onHome}
        onCookiePolicy={() => {}}
        onPrivacyPolicy={() => {}}
        onTermsOfService={() => {}}
        hideBookCall={true}
        onHome={onHome}
      />

      <div className="py-20 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-8">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-8 tracking-wide max-w-2xl mx-auto">
                We have received your request and will contact you within 24 hours to schedule your strategy call.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-gray-600">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="tracking-wide">30 minute consultation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="tracking-wide">Custom roadmap</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="tracking-wide">No obligation</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
                  Schedule Your
                  <span className="block text-gray-600">Strategy Call</span>
                </h1>
                
                <div className="inline-block px-6 py-2 bg-red-100 border border-red-300 rounded-lg mb-4">
                  <p className="text-red-600 font-semibold tracking-wide font-mono text-sm">
                    ⚡ Limited spots available this month
                  </p>
                </div>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
                  Tell us your biggest challenge and we will show you how our system can solve it. Free 30 minute consultation.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors duration-200 tracking-wide font-mono"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors duration-200 tracking-wide font-mono"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors duration-200 tracking-wide font-mono"
                      />
                    </div>

                    <div className="relative">
                      <Building className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors duration-200 tracking-wide font-mono"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <textarea
                      name="message"
                      placeholder="What is your biggest challenge? (e.g., missing calls on the roof, losing leads to competitors)"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none tracking-wide font-mono"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className="relative px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 tracking-wide font-mono shadow-lg hover:shadow-blue-500/20"
                    >
                      {isSubmitting ? (
                        <div className="relative z-10 flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Scheduling Your Call...</span>
                        </div>
                      ) : (
                        <div className="relative z-10 flex items-center justify-center gap-3">
                          <ArrowUp className="w-5 h-5" />
                          <span>Schedule My Free Strategy Call</span>
                        </div>
                      )}
                    </button>

                    <p className="text-gray-600 mt-6 tracking-wide">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
