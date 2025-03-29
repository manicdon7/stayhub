import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: August 1, 2023</p>
          </div>
          
          <div className="prose max-w-none">
            <p>
              Your privacy is important to StayHub. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we collect automatically when you use our platform, and information from third-party sources.
            </p>
            
            <h3 className="mt-6 mb-2 text-lg font-medium">1.1 Information You Provide to Us</h3>
            <p>
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Account Information: When you sign up for an account, we collect your name, email address, phone number, date of birth, and password.</li>
              <li>Profile Information: When you create or update your profile, we collect additional information such as your profile photo, location, and preferences.</li>
              <li>Identity Verification: To help create a safer community, we may collect identity verification information (such as government ID, passport) or other authentication information.</li>
              <li>Payment Information: When you add a payment method to your account, we collect payment information, such as your credit or debit card number.</li>
              <li>Communications: When you contact us directly, we may collect information about your communication and any information you choose to provide.</li>
            </ul>
            
            <h3 className="mt-6 mb-2 text-lg font-medium">1.2 Information We Collect Automatically</h3>
            <p>
              When you use our platform, we automatically collect information about your interactions, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Usage Information: We collect information about how you use our platform, such as the pages you view, the links you click, and your interactions with hosts, guests, and listings.</li>
              <li>Device Information: We collect information about the device you use to access our platform, including the hardware model, operating system and version, browser type, and device identifiers.</li>
              <li>Location Information: With your consent, we may collect information about your precise location. We may also derive your approximate location from your IP address.</li>
              <li>Cookies and Similar Technologies: We and our third-party partners use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our platform.</li>
            </ul>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Provide, maintain, and improve our platform</li>
              <li>Process transactions and bookings</li>
              <li>Create and maintain a trusted and safer environment, including fraud detection</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about products, services, promotions, and events</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">3. Sharing of Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Other users of the StayHub platform as needed to provide our services</li>
              <li>Vendors, service providers, and consultants that perform services for us</li>
              <li>Third parties in response to a legal process or a request for cooperation</li>
              <li>Third parties to comply with our legal requirements, to protect against misuse, and to enforce our agreements and policies</li>
              <li>Other parties in connection with a corporate transaction, such as a merger, sale, or acquisition</li>
            </ul>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">4. Your Choices</h2>
            <p>
              You have several choices regarding your information:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Account Information: You can update, correct, or delete certain account information at any time by logging into your account.</li>
              <li>Marketing Communications: You can opt out of receiving promotional emails from us by following the instructions in those emails.</li>
              <li>Cookies: Most web browsers are set to accept cookies by default. You can usually adjust your browser settings to remove or reject cookies.</li>
              <li>Location Information: You can prevent your device from sharing precise location information with us by adjusting the settings on your device.</li>
            </ul>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">5. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">6. Security</h2>
            <p>
              We take reasonable measures to help protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">7. International Data Transfers</h2>
            <p>
              StayHub may transfer your information to and process your information in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">8. Children's Privacy</h2>
            <p>
              Our platform is not directed to children under 18, and we do not knowingly collect personal information from children under 18. If we learn we have collected personal information from a child under 18, we will delete this information.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">9. Changes to This Privacy Policy</h2>
            <p>
              We may modify this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or through our platform.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">10. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>Email: <a href="mailto:privacy@stayhub.com" className="text-rose-600 hover:text-rose-700">privacy@stayhub.com</a></p>
            <p>Address: 123 Hospitality Lane, Suite 400, San Francisco, CA 94107</p>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <p className="text-gray-600 mb-4">Related links:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms" className="text-rose-600 hover:text-rose-700 font-medium">
                Terms of Service
              </Link>
              <Link href="/cancellation-policy" className="text-rose-600 hover:text-rose-700 font-medium">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 