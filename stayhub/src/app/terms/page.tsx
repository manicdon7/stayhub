import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-600">Last Updated: August 1, 2023</p>
          </div>
          
          <div className="prose max-w-none">
            <p>
              Welcome to StayHub. Please read these Terms of Service ("Terms") carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using the StayHub platform, you agree to comply with and be bound by these Terms.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">1. The StayHub Platform</h2>
            <p>
              1.1 StayHub provides an online platform that enables users ("Guests") to browse, book, and pay for accommodations listed by hosts ("Hosts") (collectively, the "Services"). Hosts can create listings for their properties, set pricing and availability, and receive payments from Guests.
            </p>
            <p>
              1.2 As the provider of the StayHub platform, StayHub does not own, create, sell, resell, provide, control, manage, offer, deliver, or supply any listings or Host services. Hosts alone are responsible for their listings and Host services.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">2. Eligibility</h2>
            <p>
              2.1 You must be at least 18 years old and able to enter into legally binding contracts to access and use the StayHub platform. By accessing or using StayHub, you represent and warrant that you are 18 or older and have the legal capacity to enter into these Terms.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">3. Account Registration</h2>
            <p>
              3.1 To access certain features of the StayHub platform, you must register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
            </p>
            <p>
              3.2 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify StayHub immediately of any unauthorized use of your account.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">4. Content</h2>
            <p>
              4.1 StayHub may, at its sole discretion, enable users to (i) create, upload, post, send, receive, and store content, such as text, photos, or other materials and information on or through the StayHub platform; and (ii) access and view content that other users have created, uploaded, or posted.
            </p>
            <p>
              4.2 You are solely responsible for all content that you provide. You represent and warrant that you either own or have all rights necessary to grant StayHub the rights specified in these Terms for any content you submit.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">5. Bookings and Financial Terms</h2>
            <p>
              5.1 When you book a listing, you are agreeing to pay all charges for your booking including the listing price, applicable fees like StayHub's service fee, offline fees, taxes, and any other items identified during checkout.
            </p>
            <p>
              5.2 StayHub will collect the total amount of these charges at the time of booking. The payments for confirmed bookings are transferred to the Host according to the payment terms they've selected.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">6. Cancellations and Refunds</h2>
            <p>
              6.1 In general, if as a Guest you cancel a booking, the amount refunded to you is determined by the cancellation policy that applies to that booking.
            </p>
            <p>
              6.2 Different policies apply to different accommodations, and Guests should review the applicable cancellation policy prior to booking.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">7. Prohibited Activities</h2>
            <p>
              7.1 You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Use the platform for any commercial or unauthorized purpose</li>
              <li>Infringe the rights of any third party, including intellectual property rights</li>
              <li>Post or upload any content that is defamatory, obscene, or otherwise objectionable</li>
              <li>Use the platform to distribute unwanted spam or promotional messages</li>
              <li>Attempt to circumvent any security measures of the platform</li>
            </ul>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">8. Limitation of Liability</h2>
            <p>
              8.1 To the maximum extent permitted by law, StayHub and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">9. Modifications to the Terms</h2>
            <p>
              9.1 StayHub reserves the right to modify these Terms at any time in accordance with this provision. If we make changes to these Terms, we will post the revised Terms on the StayHub platform and update the "Last Updated" date at the top of these Terms.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">10. Contact Information</h2>
            <p>
              10.1 If you have any questions about these Terms, please contact us at:
            </p>
            <p>Email: <a href="mailto:support@stayhub.com" className="text-rose-600 hover:text-rose-700">support@stayhub.com</a></p>
            <p>Address: 123 Hospitality Lane, Suite 400, San Francisco, CA 94107</p>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <p className="text-gray-600 mb-4">Related links:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="text-rose-600 hover:text-rose-700 font-medium">
                Privacy Policy
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