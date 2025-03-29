'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { properties } from '@/lib/mockData';
import { PropertyListing } from '@/lib/types';
import { CheckCircle, Copy, Calendar, Users, Home, ChevronRight } from 'lucide-react';

export default function BookingConfirmationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const propertyId = searchParams.get('propertyId');
  
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [bookingId, setBookingId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call to fetch booking details
    if (!propertyId) {
      router.push('/');
      return;
    }

    const foundProperty = properties.find((p) => p.id === propertyId);
    setProperty(foundProperty || null);
    
    // Generate a mock booking ID
    setBookingId(`BK-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`);
  }, [propertyId, router]);

  const copyBookingId = () => {
    navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!property) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Booking details not found</h1>
            <p className="mb-6">We couldn't find the booking you're looking for.</p>
            <Link href="/" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium inline-block">
              Return to homepage
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Mock booking data
  const bookingDetails = {
    checkIn: '2023-12-15',
    checkOut: '2023-12-20',
    guests: 2,
    nights: 5,
    totalPaid: property.price.total * 5,
    currency: property.price.currency,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking confirmed!</h1>
            <p className="text-gray-600">
              Your reservation at <span className="font-medium">{property.title}</span> has been confirmed.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Booking details</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Booking ID: {bookingId}</span>
                  <button 
                    onClick={copyBookingId}
                    className="text-gray-500 hover:text-gray-700"
                    title="Copy booking ID"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  {copied && (
                    <span className="text-xs text-green-600">Copied!</span>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Check-in</h3>
                    <p className="text-gray-600">{bookingDetails.checkIn}</p>
                    <p className="text-gray-600 text-sm">After 3:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Check-out</h3>
                    <p className="text-gray-600">{bookingDetails.checkOut}</p>
                    <p className="text-gray-600 text-sm">Before 11:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Guests</h3>
                    <p className="text-gray-600">{bookingDetails.guests} guests</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 mb-6 pb-6 border-b">
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
                  <p className="text-gray-600 text-sm mb-2">
                    {property.location.city}, {property.location.country}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {property.bedrooms} bedroom{property.bedrooms !== 1 && 's'} · {property.beds} bed{property.beds !== 1 && 's'} · {property.bathrooms} bath{property.bathrooms !== 1 && 's'}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-sm">{property.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 pb-6 border-b">
                <h3 className="font-medium mb-3">Host information</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src={property.host.avatar}
                      alt={property.host.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{property.host.name}</p>
                    <p className="text-gray-600 text-sm">Contact host via StayHub messaging</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Payment details</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Total paid</span>
                  <span className="font-semibold">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: bookingDetails.currency,
                    }).format(bookingDetails.totalPaid)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Booked on {new Date(bookingDetails.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href={`/property/${property.id}`} className="flex items-center justify-between bg-white p-4 rounded-lg border hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-gray-600" />
                <span className="font-medium">View property details</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            
            <Link href="/account?tab=bookings" className="flex items-center justify-between bg-white p-4 rounded-lg border hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Manage booking</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
          
          <div className="text-center">
            <h3 className="font-medium mb-2">Need to make changes to your booking?</h3>
            <p className="text-gray-600 mb-6">
              You can modify or cancel your reservation from your account page.
            </p>
            <Link href="/" className="text-rose-600 hover:text-rose-700 font-medium px-6 py-2 border border-rose-600 rounded-lg inline-block">
              Continue exploring
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 