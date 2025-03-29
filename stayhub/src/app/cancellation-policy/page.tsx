import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function CancellationPolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Cancellation Policy</h1>
            <p className="text-gray-600">Last Updated: August 1, 2023</p>
          </div>
          
          <div className="prose max-w-none">
            <p>
              At StayHub, we understand that plans can change. Our cancellation policies are designed to be fair to both guests and hosts. The specific cancellation policy that applies to your booking will be displayed before you confirm your reservation.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">Our Cancellation Policy Types</h2>
            <p>
              We offer hosts the ability to choose from several standardized cancellation policies. These policies determine the refund a guest will receive if they cancel a confirmed booking.
            </p>
            
            <div className="mt-8 space-y-8">
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Flexible
                </h3>
                <p className="mb-4">Full refund if cancelled at least 24 hours before check-in.</p>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-32 font-medium">Full refund:</div>
                    <div>If cancelled at least 24 hours before check-in</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-32 font-medium">Partial refund:</div>
                    <div>If cancelled less than 24 hours before check-in, first night and service fee not refunded</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-32 font-medium">No refund:</div>
                    <div>If cancelled after check-in</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                  Moderate
                </h3>
                <p className="mb-4">Full refund if cancelled 5 days before check-in.</p>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-32 font-medium">Full refund:</div>
                    <div>If cancelled at least 5 days before check-in</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-32 font-medium">Partial refund:</div>
                    <div>If cancelled less than 5 days before check-in, 50% refund (excluding service fee)</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-32 font-medium">No refund:</div>
                    <div>If cancelled after check-in</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  Strict
                </h3>
                <p className="mb-4">50% refund if cancelled at least 7 days before check-in.</p>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-32 font-medium">Partial refund:</div>
                    <div>If cancelled at least 7 days before check-in, 50% refund (excluding service fee)</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-32 font-medium">No refund:</div>
                    <div>If cancelled less than 7 days before check-in or after check-in</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                  Non-refundable
                </h3>
                <p className="mb-4">Pay less up front, but no refunds for any cancellations.</p>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-32 font-medium">Discount:</div>
                    <div>10% discount on the base rate</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-32 font-medium">No refund:</div>
                    <div>No refunds for any reason or at any time</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="mt-10 mb-4 text-xl font-semibold">Extenuating Circumstances</h2>
            <p>
              Under certain extenuating circumstances, we may override the host's cancellation policy and issue a partial or full refund. These circumstances may include:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li>Unexpected serious illness or injury</li>
              <li>Death of a guest, host, or immediate family member</li>
              <li>Serious natural disasters or severe weather incidents</li>
              <li>Urgent travel restrictions or government-mandated obligations</li>
              <li>Endemic disease or illness that suddenly affects the region or location</li>
              <li>Significant security, terrorist, or civil unrest incidents</li>
            </ul>
            
            <p>
              If you believe extenuating circumstances apply to your situation, please contact our support team with appropriate documentation as soon as possible.
            </p>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">Host Cancellations</h2>
            <p>
              While rare, hosts may need to cancel a reservation. In these cases:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li>Guests will receive a full refund of their payment</li>
              <li>StayHub will assist guests in finding alternative accommodations</li>
              <li>Hosts may incur cancellation penalties, including fees and reduced visibility in search results</li>
            </ul>
            
            <h2 className="mt-8 mb-4 text-xl font-semibold">How to Cancel a Reservation</h2>
            <p>
              To cancel a booking:
            </p>
            
            <ol className="list-decimal pl-5 space-y-2 my-4">
              <li>Go to your "Trips" or "Bookings" in your StayHub account</li>
              <li>Find the reservation you wish to cancel</li>
              <li>Click on "Cancel reservation"</li>
              <li>Select your reason for cancellation</li>
              <li>Confirm your cancellation</li>
            </ol>
            
            <p>
              The applicable refund will be automatically processed according to the cancellation policy associated with your booking.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
              <p className="mb-4">
                If you have questions about your cancellation or need assistance, please contact our support team.
              </p>
              <p>Email: <a href="mailto:support@stayhub.com" className="text-rose-600 hover:text-rose-700">support@stayhub.com</a></p>
              <p>Phone: +1 (800) 555-1234 (available 24/7)</p>
            </div>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <p className="text-gray-600 mb-4">Related links:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms" className="text-rose-600 hover:text-rose-700 font-medium">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-rose-600 hover:text-rose-700 font-medium">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 