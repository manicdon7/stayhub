import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Building2, 
  Home, 
  Briefcase, 
  Compass, 
  BedDouble, 
  Bath,
  Users, 
  UtensilsCrossed, 
  Wifi, 
  Car, 
  Tv, 
  Waves, 
  ShowerHead,
  Upload, 
  Plus,
  Trash2,
  Save
} from 'lucide-react';

export default function CreateListingPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create a new listing</h1>
          <p className="text-gray-600 mb-8">
            Fill out the details below to create your property listing. Fields marked with * are required.
          </p>
          
          <form className="space-y-12">
            {/* Basic Information */}
            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Building2 className="text-rose-500" size={20} /> 
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block mb-2 font-medium">
                    Listing Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    placeholder="e.g., Cozy Beachfront Apartment"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyType" className="block mb-2 font-medium">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    required
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="condo">Condo</option>
                    <option value="cabin">Cabin</option>
                    <option value="cottage">Cottage</option>
                    <option value="guesthouse">Guesthouse</option>
                    <option value="hotel">Hotel</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block mb-2 font-medium">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    placeholder="Describe your property, highlight special features, nearby attractions, etc."
                    required
                  ></textarea>
                </div>
              </div>
            </section>
            
            {/* Location */}
            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Compass className="text-rose-500" size={20} /> 
                Location
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="address" className="block mb-2 font-medium">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    placeholder="Street address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block mb-2 font-medium">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    placeholder="City"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block mb-2 font-medium">
                    State/Province *
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    placeholder="State/Province"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="postalCode" className="block mb-2 font-medium">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    placeholder="Postal Code"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block mb-2 font-medium">
                    Country *
                  </label>
                  <select
                    id="country"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="IN">India</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </section>
            
            {/* Property Details */}
            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Home className="text-rose-500" size={20} /> 
                Property Details
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <label htmlFor="bedrooms" className="block mb-2 font-medium">
                    Bedrooms *
                  </label>
                  <div className="flex items-center">
                    <BedDouble size={20} className="text-gray-500 mr-2" />
                    <input
                      type="number"
                      id="bedrooms"
                      min="0"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="bathrooms" className="block mb-2 font-medium">
                    Bathrooms *
                  </label>
                  <div className="flex items-center">
                    <Bath size={20} className="text-gray-500 mr-2" />
                    <input
                      type="number"
                      id="bathrooms"
                      min="0"
                      step="0.5"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block mb-2 font-medium">
                    Max Guests *
                  </label>
                  <div className="flex items-center">
                    <Users size={20} className="text-gray-500 mr-2" />
                    <input
                      type="number"
                      id="guests"
                      min="1"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="size" className="block mb-2 font-medium">
                    Size (sq ft)
                  </label>
                  <input
                    type="number"
                    id="size"
                    min="0"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block mb-3 font-medium">
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="wifi" 
                      className="h-5 w-5 text-rose-500 rounded focus:ring-rose-500"
                    />
                    <label htmlFor="wifi" className="ml-2 text-gray-700 flex items-center">
                      <Wifi size={16} className="mr-1 text-gray-500" /> WiFi
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="kitchen" 
                      className="h-5 w-5 text-rose-500 rounded focus:ring-rose-500"
                    />
                    <label htmlFor="kitchen" className="ml-2 text-gray-700 flex items-center">
                      <UtensilsCrossed size={16} className="mr-1 text-gray-500" /> Kitchen
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="parking" 
                      className="h-5 w-5 text-rose-500 rounded focus:ring-rose-500"
                    />
                    <label htmlFor="parking" className="ml-2 text-gray-700 flex items-center">
                      <Car size={16} className="mr-1 text-gray-500" /> Parking
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="tv" 
                      className="h-5 w-5 text-rose-500 rounded focus:ring-rose-500"
                    />
                    <label htmlFor="tv" className="ml-2 text-gray-700 flex items-center">
                      <Tv size={16} className="mr-1 text-gray-500" /> TV
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="pool" 
                      className="h-5 w-5 text-rose-500 rounded focus:ring-rose-500"
                    />
                    <label htmlFor="pool" className="ml-2 text-gray-700 flex items-center">
                      <Waves size={16} className="mr-1 text-gray-500" /> Pool
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="ac" 
                      className="h-5 w-5 text-rose-500 rounded focus:ring-rose-500"
                    />
                    <label htmlFor="ac" className="ml-2 text-gray-700 flex items-center">
                      <ShowerHead size={16} className="mr-1 text-gray-500" /> Air Conditioning
                    </label>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Photos */}
            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Upload className="text-rose-500" size={20} /> 
                Photos
              </h2>
              
              <p className="text-gray-600 mb-4">
                Upload at least 5 photos of your property. High-quality images increase booking rates.
              </p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <input type="file" id="photos" multiple className="hidden" />
                <label htmlFor="photos" className="cursor-pointer">
                  <Plus size={36} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-600 font-medium">Click to upload photos</p>
                  <p className="text-gray-400 text-sm mt-1">or drag and drop files here</p>
                  <p className="text-gray-400 text-xs mt-3">
                    PNG, JPG or WEBP (max. 10MB per image)
                  </p>
                </label>
              </div>
              
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* This would be populated with uploaded images in a real app */}
                <div className="relative aspect-square bg-gray-100 rounded-lg">
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-red-50">
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
                <div className="relative aspect-square bg-gray-100 rounded-lg">
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-red-50">
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
                <div className="relative aspect-square bg-gray-100 rounded-lg">
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-red-50">
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
              </div>
            </section>
            
            {/* Pricing */}
            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="text-rose-500" size={20} /> 
                Pricing
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="basePrice" className="block mb-2 font-medium">
                    Base Price per Night (USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      id="basePrice"
                      min="0"
                      className="w-full pl-8 p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="cleaningFee" className="block mb-2 font-medium">
                    Cleaning Fee (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      id="cleaningFee"
                      min="0"
                      className="w-full pl-8 p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="cancellationPolicy" className="block mb-2 font-medium">
                    Cancellation Policy *
                  </label>
                  <select
                    id="cancellationPolicy"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    required
                  >
                    <option value="">Select policy</option>
                    <option value="flexible">Flexible (24 hours)</option>
                    <option value="moderate">Moderate (5 days)</option>
                    <option value="strict">Strict (7 days)</option>
                    <option value="nonRefundable">Non-refundable</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="minNights" className="block mb-2 font-medium">
                    Minimum Nights Stay
                  </label>
                  <input
                    type="number"
                    id="minNights"
                    min="1"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
                    placeholder="1"
                  />
                </div>
              </div>
            </section>
            
            {/* Submit */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
              
              <button
                type="submit"
                className="px-6 py-3 bg-rose-600 rounded-lg font-medium text-white hover:bg-rose-700 transition-colors flex items-center gap-2"
              >
                <Save size={18} />
                Publish Listing
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
} 