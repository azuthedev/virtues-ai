import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: 17/07/2025</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p>
            At Virtues AI, we value your privacy. This policy explains what data we collect, how we use it, and your rights regarding your personal information.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What we collect:</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, company name (only when you fill out a form or contact us)</li>
              <li>Usage data (pages visited, time on site, etc.)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How we use your data:</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and improve our services</li>
              <li>To communicate with you regarding your inquiries</li>
              <li>To analyze website usage for performance improvements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your rights:</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You can request to view, update, or delete your personal data at any time.</li>
              <li>We do not sell your personal data to third parties.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data security:</h2>
            <p>We implement security measures to protect your information, but no method of transmission is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact:</h2>
            <p>
              For any privacy-related concerns, please email us at{' '}
              <a href="mailto:info@virtues-ai.com" className="text-blue-600 hover:text-blue-700">
                info@virtues-ai.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
