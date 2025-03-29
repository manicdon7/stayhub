'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { properties } from '@/lib/mockData';
import { formatCurrency } from '@/lib/mockData';
import { PropertyListing } from '@/lib/types';
import { Calendar, CreditCard, Users, ChevronDown, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingInfo, setBookingInfo] = useState({
    checkIn: '2023-12-15',
    checkOut: '2023-12-20',
    guests: 2,
    nights: 5,
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call to fetch property details
    const propertyId = Array.isArray(id) ? id[0] : id;
    const foundProperty = properties.find((p) => p.id === propertyId);
    setProperty(foundProperty || null);
    setLoading(false);
  }, [id]);

  const calculateTotal = () => {
    if (!property) return 0;
    
    const baseTotal = property.price.basePrice * bookingInfo.nights;
    const cleaningFee = property.price.cleaningFee || 0;
    const serviceFee = property.price.serviceFee || 0;
    
    return baseTotal + cleaningFee + serviceFee;
  };

  const handleCompleteBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would send the booking info to the server
      router.push(`/booking-confirmation?propertyId=${property?.id}`);
    } catch (err) {
      setError('There was a problem processing your booking. Please try again.');
      setIsProcessing(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
          <div className="animate-pulse">Loading booking information...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!property) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-12 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p>Sorry, we couldn't find the property you're trying to book.</p>
          <Link href="/" className="text-rose-600 hover:text-rose-700 mt-4 inline-block">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Confirm and pay</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Booking form */}
            <div className="lg:col-span-2">
              {/* Trip details */}
              <div className="border-b pb-8 mb-8">
                <h2 className="text-xl font-semibold mb-6">Your trip</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-base font-medium mb-2">Dates</h3>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-5 h-5" />
                      <span>{bookingInfo.checkIn} to {bookingInfo.checkOut}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-2">Guests</h3>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-5 h-5" />
                      <span>{bookingInfo.guests} guest{bookingInfo.guests !== 1 && 's'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment method */}
              <div className="border-b pb-8 mb-8">
                <h2 className="text-xl font-semibold mb-6">Pay with</h2>
                
                <div className="grid gap-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={() => setPaymentMethod('credit')}
                      className="mr-2"
                    />
                    <div className="flex-1">
                      <span className="font-medium">Credit or debit card</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-8 h-6 bg-blue-600 rounded"></span>
                      <span className="w-8 h-6 bg-red-500 rounded"></span>
                      <span className="w-8 h-6 bg-gray-200 rounded"></span>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="mr-2"
                    />
                    <div className="flex-1">
                      <span className="font-medium">PayPal</span>
                    </div>
                    <div>
                      <span className="w-12 h-6 bg-blue-700 rounded"></span>
                    </div>
                  </label>
                  
                  <button 
                    className="text-rose-600 hover:text-rose-700 py-2 font-medium flex items-center gap-1 mt-2"
                    onClick={() => setShowPaymentDetails(!showPaymentDetails)}
                  >
                    <span>{showPaymentDetails ? 'Hide' : 'Show'} payment details</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showPaymentDetails ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showPaymentDetails && (
                    <div className="mt-2 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card number
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration date
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Billing address
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg"
                          placeholder="Enter your address"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Cancellation policy */}
              <div className="border-b pb-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">Cancellation policy</h2>
                <p className="text-gray-700 mb-4">
                  Free cancellation before {bookingInfo.checkIn}. Cancel before check-in on {bookingInfo.checkIn} for a partial refund.
                </p>
                <Link href="/cancellation-policy" className="text-rose-600 hover:text-rose-700 font-medium">
                  Learn more
                </Link>
              </div>
              
              {/* Ground rules */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Ground rules</h2>
                <p className="text-gray-700 mb-4">
                  We ask every guest to remember a few simple things about what makes a great guest.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Follow the house rules</li>
                  <li>Treat the host's home like your own</li>
                  <li>Communicate with your host</li>
                </ul>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
                
                <button
                  onClick={handleCompleteBooking}
                  disabled={isProcessing}
                  className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white py-3 rounded-lg font-medium transition mt-4"
                >
                  {isProcessing ? 'Processing...' : 'Confirm and pay'}
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By selecting the button above, I agree to the host's house rules, StayHub's Rebooking and Refund Policy, and that StayHub can charge my payment method if I'm responsible for damage.
                </p>
              </div>
            </div>
            
            {/* Right column - Booking summary */}
            <div className="lg:col-span-1">
              <div className="border rounded-xl p-6 shadow-lg sticky top-24">
                <div className="flex gap-4 pb-6 mb-6 border-b">
                  <div className="w-24 h-24 rounded-lg overflow-hidden relative flex-shrink-0">
                    <Image
                      src={property.images[0].url}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium line-clamp-2">{property.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {property.location.city}, {property.location.country}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="text-sm">{property.rating}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Price details</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>{formatCurrency(property.price.basePrice, property.price.currency)} x {bookingInfo.nights} nights</span>
                    <span>{formatCurrency(property.price.basePrice * bookingInfo.nights, property.price.currency)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>{formatCurrency(property.price.cleaningFee || 0, property.price.currency)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>{formatCurrency(property.price.serviceFee || 0, property.price.currency)}</span>
                  </div>
                  
                  <div className="flex justify-between pt-4 mt-4 border-t font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(calculateTotal(), property.price.currency)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 