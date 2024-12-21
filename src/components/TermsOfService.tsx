import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <Link 
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to home
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: 12/19/2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to Reddigen. By accessing or using our website, services, applications, and tools (collectively, the "Services"), you agree to these Terms of Service ("Terms"). Please read these Terms carefully before using the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Using our Services</h2>
            <p className="text-gray-300">
              You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Your Reddigen Account</h2>
            <p className="text-gray-300">
              To use some of our Services, you may need to create an account. You are responsible for maintaining the security of your account and the activities that occur under your account. We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Privacy & Copyright Protection</h2>
            <p className="text-gray-300">
              Reddigen's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Reddigen can use such data in accordance with our privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Software in our Services</h2>
            <p className="text-gray-300">
              When a Service requires or includes downloadable software, this software may update automatically on your device once a new version or feature is available. Some Services may let you adjust your automatic update settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Modifying and Terminating our Services</h2>
            <p className="text-gray-300">
              We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether. You can stop using our Services at any time. Reddigen may also stop providing Services to you or add or create new limits to our Services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Warranties and Disclaimers</h2>
            <p className="text-gray-300">
              We provide our Services using reasonable skill and care. Other than as expressly set out in these terms or additional terms, neither Reddigen nor its suppliers or distributors make any specific promises about the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Liability for our Services</h2>
            <p className="text-gray-300">
              When permitted by law, Reddigen, and its suppliers and distributors, will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Business uses of our Services</h2>
            <p className="text-gray-300">
              If you are using our Services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify Reddigen and its affiliates, officers, agents, and employees from any claim, suit or action arising from or related to the use of the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at team@reddigen.io.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}