'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { properties } from '@/lib/mockData';
import { PropertyListing } from '@/lib/types';
import { CalendarIcon, BedDoubleIcon, BathIcon, UsersIcon, StarIcon } from 'lucide-react';
import { formatCurrency } from '@/lib/mockData';

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    // In a real app, this would be an API call to fetch property details
    const propertyId = Array.isArray(id) ? id[0] : id;
    const foundProperty = properties.find((p) => p.id === propertyId);
    setProperty(foundProperty || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
          <div className="animate-pulse">Loading property details...</div>
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
          <p>Sorry, we couldn't find the property you're looking for.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
            <span className="font-medium">{property.rating}</span>
            <span className="mx-1">·</span>
            <span className="text-gray-600">{property.reviewCount} reviews</span>
          </div>
          <div className="text-gray-600">
            {property.location.city}, {property.location.country}
          </div>
          {property.superhost && (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              Superhost
            </span>
          )}
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 rounded-xl overflow-hidden">
          <div className="md:col-span-1 aspect-video relative">
            <Image
              src={property.images[0]?.url || '/placeholder.jpg'}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {property.images.slice(1, 5).map((image) => (
              <div key={image.id} className="aspect-square relative">
                <Image src={image.url} alt={image.caption || ''} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property info */}
            <div className="mb-8 pb-8 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Hosted by {property.host.name}
                  </h2>
                  <p className="text-gray-600">
                    {property.maxGuests} guests · {property.bedrooms} bedrooms · {property.beds} beds · {property.bathrooms} baths
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={property.host.avatar} alt={property.host.name} fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Property description */}
            <div className="mb-8 pb-8 border-b">
              <h3 className="text-xl font-semibold mb-4">About this place</h3>
              <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8 pb-8 border-b">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                      {amenity === 'wifi' && '📶'}
                      {amenity === 'pool' && '🏊‍♂️'}
                      {amenity === 'kitchen' && '🍳'}
                      {amenity === 'ac' && '❄️'}
                      {amenity === 'free_parking' && '🚗'}
                      {amenity === 'hot_tub' && '♨️'}
                      {amenity === 'tv' && '📺'}
                      {amenity === 'workspace' && '💻'}
                    </span>
                    <span className="capitalize">{amenity.replace('_', ' ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p>Map will be displayed here</p>
              </div>
              <p className="mt-4 text-gray-600">
                {property.location.city}, {property.location.state && `${property.location.state}, `}
                {property.location.country}
              </p>
            </div>
          </div>

          {/* Booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-2xl font-bold">
                    {formatCurrency(property.price.basePrice, property.price.currency)}
                  </span>
                  <span className="text-gray-600"> / night</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>{property.rating}</span>
                  <span className="mx-1">·</span>
                  <span className="text-gray-600 text-sm">{property.reviewCount} reviews</span>
                </div>
              </div>

              {/* Date picker */}
              <div className="mb-4">
                <div className="grid grid-cols-2 border rounded-t-lg overflow-hidden">
                  <div className="p-3 border-r">
                    <div className="text-xs text-gray-500">CHECK-IN</div>
                    <div className="mt-1">Add date</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs text-gray-500">CHECKOUT</div>
                    <div className="mt-1">Add date</div>
                  </div>
                </div>

                <div className="border-x border-b rounded-b-lg p-3">
                  <div className="text-xs text-gray-500">GUESTS</div>
                  <div className="flex justify-between items-center mt-1">
                    <div>{guests} guest{guests !== 1 && 's'}</div>
                    <div className="flex">
                      <button 
                        className="w-8 h-8 rounded-full border flex items-center justify-center"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                      >
                        -
                      </button>
                      <button 
                        className="w-8 h-8 rounded-full border flex items-center justify-center ml-2"
                        onClick={() => setGuests(Math.min(property.maxGuests, guests + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-medium transition">
                Reserve
              </button>

              <div className="mt-4">
                <div className="flex justify-between py-2">
                  <span className="underline">
                    {formatCurrency(property.price.basePrice, property.price.currency)} x 5 nights
                  </span>
                  <span>{formatCurrency(property.price.basePrice * 5, property.price.currency)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="underline">Cleaning fee</span>
                  <span>{formatCurrency(property.price.cleaningFee || 0, property.price.currency)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="underline">Service fee</span>
                  <span>{formatCurrency(property.price.serviceFee || 0, property.price.currency)}</span>
                </div>
                <div className="flex justify-between py-2 mt-4 pt-4 border-t font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(property.price.total * 5, property.price.currency)}</span>
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