'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { User, CreditCard, Home, Heart, Settings, LogOut, Calendar } from 'lucide-react';

// Mock user data for demonstration
const mockUser = {
  id: 'user123',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar: 'https://i.pravatar.cc/150?img=11',
  phone: '+1 (555) 123-4567',
  createdAt: '2021-03-15',
};

// Mock booking data
const mockBookings = [
  {
    id: 'booking1',
    propertyId: '1',
    propertyName: 'Luxurious Beachfront Villa with Infinity Pool',
    propertyImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
    location: 'Bali, Indonesia',
    checkIn: '2023-12-15',
    checkOut: '2023-12-20',
    totalPrice: 3150,
    status: 'completed',
  },
  {
    id: 'booking2',
    propertyId: '3',
    propertyName: 'Historic Castle Suite with Panoramic Views',
    propertyImage: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310',
    location: 'Edinburgh, United Kingdom',
    checkIn: '2024-06-10',
    checkOut: '2024-06-15',
    totalPrice: 2750,
    status: 'confirmed',
  },
];

// Mock wishlist data
const mockWishlists = [
  {
    id: 'list1',
    name: 'Summer Vacation',
    count: 5,
  },
  {
    id: 'list2',
    name: 'Weekend Getaways',
    count: 3,
  },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    defaultValue={mockUser.name}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-lg"
                    defaultValue={mockUser.email}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-lg"
                    defaultValue={mockUser.phone}
                  />
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
                  <Image
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition">
                  Change Photo
                </button>
              </div>
            </div>
            
            <div className="border-t mt-6 pt-6">
              <h3 className="text-lg font-semibold mb-4">Account Security</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                <button className="text-rose-600 hover:text-rose-700 font-medium text-sm">
                  Change password
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Two-Factor Authentication</label>
                <button className="text-rose-600 hover:text-rose-700 font-medium text-sm">
                  Enable
                </button>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t flex justify-end">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-medium transition">
                Save Changes
              </button>
            </div>
          </div>
        );
        
      case 'bookings':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
            
            <div className="flex gap-4 mb-6">
              <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Upcoming
              </button>
              <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                Past
              </button>
              <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                Cancelled
              </button>
            </div>
            
            <div className="space-y-6">
              {mockBookings.map((booking) => (
                <div key={booking.id} className="border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="aspect-video md:aspect-square relative">
                      <Image
                        src={booking.propertyImage}
                        alt={booking.propertyName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-4 md:col-span-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold mb-1">{booking.propertyName}</h3>
                          <p className="text-gray-600 text-sm mb-3">{booking.location}</p>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Calendar size={16} />
                            <span>
                              {new Date(booking.checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
                              {new Date(booking.checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                          
                          <div className="mt-3">
                            <span className="font-medium">${booking.totalPrice.toLocaleString()}</span>
                            <span className="text-gray-600 text-sm"> total</span>
                          </div>
                        </div>
                        
                        <div>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            booking.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : booking.status === 'completed'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t flex flex-wrap gap-3">
                        <Link href={`/property/${booking.propertyId}`} className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                          View Property
                        </Link>
                        {booking.status === 'confirmed' && (
                          <>
                            <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                              Modify Reservation
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                              Cancel Reservation
                            </button>
                          </>
                        )}
                        {booking.status === 'completed' && (
                          <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                            Write a Review
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'wishlists':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Your Wishlists</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="border border-dashed rounded-lg p-6 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart size={20} className="text-gray-600" />
                  </div>
                  <h3 className="font-medium">Create New Wishlist</h3>
                </div>
              </div>
              
              {mockWishlists.map((list) => (
                <div key={list.id} className="border rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer">
                  <div className="aspect-square bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{list.name}</h3>
                    <p className="text-sm text-gray-600">{list.count} properties</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            
            <div className="space-y-6">
              <div className="pb-4 border-b">
                <h3 className="font-medium mb-2">Notifications</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive emails about your account, bookings, and promotions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                  </label>
                </div>
              </div>
              
              <div className="pb-4 border-b">
                <h3 className="font-medium mb-2">Payment Methods</h3>
                <button className="flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium">
                  <CreditCard size={16} />
                  <span>Add payment method</span>
                </button>
              </div>
              
              <div className="pb-4 border-b">
                <h3 className="font-medium mb-2">Currency</h3>
                <select className="w-full p-2 border rounded-lg">
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                </select>
              </div>
              
              <div className="pb-4 border-b">
                <h3 className="font-medium mb-2">Language</h3>
                <select className="w-full p-2 border rounded-lg">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              
              <div className="pt-2">
                <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
            <Image
              src={mockUser.avatar}
              alt={mockUser.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{mockUser.name}</h1>
            <p className="text-gray-600">Member since {new Date(mockUser.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <nav className="flex flex-col">
                <button
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${activeTab === 'profile' ? 'bg-gray-50 font-medium' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={20} />
                  <span>Profile</span>
                </button>
                
                <button
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${activeTab === 'bookings' ? 'bg-gray-50 font-medium' : ''}`}
                  onClick={() => setActiveTab('bookings')}
                >
                  <Home size={20} />
                  <span>Bookings</span>
                </button>
                
                <button
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${activeTab === 'wishlists' ? 'bg-gray-50 font-medium' : ''}`}
                  onClick={() => setActiveTab('wishlists')}
                >
                  <Heart size={20} />
                  <span>Wishlists</span>
                </button>
                
                <button
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${activeTab === 'settings' ? 'bg-gray-50 font-medium' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 