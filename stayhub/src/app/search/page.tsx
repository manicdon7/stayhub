'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyGrid from '@/components/property/PropertyGrid';
import { properties } from '@/lib/mockData';
import { PropertyListing, SearchFilters } from '@/lib/types';
import { Filter, MapPin, CalendarRange, Users } from 'lucide-react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<PropertyListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<SearchFilters>({});

  // Extract search parameters
  const locationParam = searchParams.get('location');
  const checkInParam = searchParams.get('checkIn');
  const checkOutParam = searchParams.get('checkOut');
  const guestsParam = searchParams.get('guests');

  useEffect(() => {
    // In a real app, this would be an API call with filters
    setIsLoading(true);
    
    // Simulate delay for loading state
    setTimeout(() => {
      let filtered = [...properties];
      
      // Apply location filter if provided
      if (locationParam) {
        const locationLower = locationParam.toLowerCase();
        filtered = filtered.filter(property => 
          property.location.city.toLowerCase().includes(locationLower) || 
          property.location.country.toLowerCase().includes(locationLower) ||
          (property.location.state && property.location.state.toLowerCase().includes(locationLower))
        );
      }
      
      // In a real app, we would also filter by dates and guests
      // For now, we're just using the mock data

      setFilteredProperties(filtered);
      setIsLoading(false);
    }, 500);
  }, [locationParam, checkInParam, checkOutParam, guestsParam]);

  // Toggle filter option
  const toggleFilter = (type: keyof SearchFilters, value: any) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? undefined : value
    }));
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Search filters summary */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="text-sm font-medium">Filters:</div>
          
          {locationParam && (
            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <MapPin size={14} />
              <span>{locationParam}</span>
            </div>
          )}
          
          {checkInParam && checkOutParam && (
            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <CalendarRange size={14} />
              <span>{checkInParam} to {checkOutParam}</span>
            </div>
          )}
          
          {guestsParam && (
            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <Users size={14} />
              <span>{guestsParam} guest{parseInt(guestsParam) !== 1 ? 's' : ''}</span>
            </div>
          )}
          
          <button 
            className="ml-auto flex items-center gap-1 border px-3 py-1 rounded-full text-sm hover:bg-gray-50"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter size={14} />
            <span>All filters</span>
          </button>
        </div>

        {/* Mobile filters (hidden by default) */}
        {showMobileFilters && (
          <div className="bg-white border rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">Property type</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['apartment', 'house', 'cabin', 'villa'].map(type => (
                <button
                  key={type}
                  className={`px-4 py-2 border rounded-lg text-sm ${
                    activeFilters.propertyTypes?.includes(type as any) 
                      ? 'bg-black text-white' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => toggleFilter('propertyTypes', [type])}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            
            <h3 className="font-semibold mb-3">Price range</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">Min price</label>
                <input 
                  type="number" 
                  placeholder="$0" 
                  className="w-full border rounded-lg p-2"
                  min={0}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Max price</label>
                <input 
                  type="number" 
                  placeholder="$1000+" 
                  className="w-full border rounded-lg p-2"
                  min={0}
                />
              </div>
            </div>
            
            <h3 className="font-semibold mb-3">More filters</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                className={`px-4 py-2 border rounded-lg text-sm ${
                  activeFilters.instantBook ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => toggleFilter('instantBook', !activeFilters.instantBook)}
              >
                Instant Book
              </button>
              <button
                className={`px-4 py-2 border rounded-lg text-sm ${
                  activeFilters.superhost ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => toggleFilter('superhost', !activeFilters.superhost)}
              >
                Superhost
              </button>
            </div>
            
            <div className="flex justify-between pt-3 border-t">
              <button 
                className="text-sm font-medium underline"
                onClick={() => {
                  setActiveFilters({});
                  setShowMobileFilters(false);
                }}
              >
                Clear all
              </button>
              <button 
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium"
                onClick={() => setShowMobileFilters(false)}
              >
                Show results
              </button>
            </div>
          </div>
        )}

        {/* Results heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            {isLoading 
              ? 'Searching properties...' 
              : filteredProperties.length > 0 
                ? `${filteredProperties.length} properties found`
                : 'No properties found'}
          </h1>
          {locationParam && (
            <p className="text-gray-600">
              {filteredProperties.length > 0 
                ? `Results for "${locationParam}"`
                : `No results found for "${locationParam}"`}
            </p>
          )}
        </div>

        {/* Property grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg aspect-square mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <PropertyGrid properties={filteredProperties} />
        ) : (
          <div className="text-center py-12">
            <div className="mb-4 text-gray-500">
              <span className="text-4xl">🔍</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">No properties found</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your search filters or exploring a different location.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium"
              onClick={() => window.history.back()}>
              Go back
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
} 