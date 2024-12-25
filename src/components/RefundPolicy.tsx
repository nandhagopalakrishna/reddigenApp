import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function RefundPolicy() {
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
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-gray-400 mb-8">Effective Date: 12/19/2024</p>

          <p className="text-gray-300 mb-8">
            At Reddigen, customer satisfaction is our priority. We aim to provide the best Reddit DM automation services. 
            If you are not entirely satisfied with your purchase, we're here to help.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Refund Eligibility</h2>
            <p className="text-gray-300 mb-4">Refunds are available under the following conditions:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>The request is made within 7 days of the initial subscription payment.</li>
              <li>You have experienced significant technical issues that prevent the use of our service, and our support team was unable to resolve them.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Non-Refundable Scenarios</h2>
            <p className="text-gray-300 mb-4">Refunds are not available in the following situations:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>After 7 days of the initial subscription payment.</li>
              <li>For renewal payments. Renewal reminders are sent in advance, and it is the customer's responsibility to manage their subscription.</li>
              <li>If the service was used extensively or for the intended purpose without reporting any issues.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How to Request a Refund</h2>
            <p className="text-gray-300 mb-4">
              To request a refund, contact us at team@reddigen.io with the following details:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your account email address.</li>
              <li>The reason for the refund request, including any issues experienced.</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Our support team will review your request and respond within 3-5 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Refund Process</h2>
            <p className="text-gray-300 mb-4">If your refund request is approved:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Refunds will be processed to the original payment method within 7-10 business days.</li>
              <li>You will lose access to Reddigen services upon confirmation of the refund.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Changes to This Policy</h2>
            <p className="text-gray-300">
              We reserve the right to update or modify this Refund Policy at any time. Any changes will be posted on this page with a revised effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have questions about our refund policy, please contact us:
            </p>
            <p className="text-gray-300 mt-4">
              Email: team@reddigen.io<br />
              Address: 10/328 KOZHIPPANNAI, GANTHI NAGAR, EDANGANASALAI, SALEM, TAMILNADU - 637502
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}