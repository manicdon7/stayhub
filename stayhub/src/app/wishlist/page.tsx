'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Heart, Plus, Lock, Share2, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/lib/mockData';
import { PropertyListing } from '@/lib/types';

// Mock wishlists data
const mockWishlists = [
  {
    id: 'list1',
    name: 'Summer Vacation',
    isPrivate: true,
    propertyIds: ['1', '3', '5', '7', '9'],
  },
  {
    id: 'list2',
    name: 'Weekend Getaways',
    isPrivate: false,
    propertyIds: ['2', '4', '8'],
  },
  {
    id: 'list3',
    name: 'Dream Homes',
    isPrivate: true,
    propertyIds: ['6', '10'],
  },
];

export default function WishlistPage() {
  const [activeWishlist, setActiveWishlist] = useState(mockWishlists[0]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [isNewListPrivate, setIsNewListPrivate] = useState(true);
  const [showMenu, setShowMenu] = useState<string | null>(null);

  // Filter properties based on active wishlist
  const wishlistProperties = properties.filter(property => 
    activeWishlist.propertyIds.includes(property.id)
  );

  const handleCreateWishlist = () => {
    // In a real app, this would create a new wishlist in the database
    setShowCreateModal(false);
    setNewListName('');
  };

  const toggleMenu = (id: string) => {
    if (showMenu === id) {
      setShowMenu(null);
    } else {
      setShowMenu(id);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Wishlists</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Wishlist sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <div className="p-4 border-b">
                <button 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  onClick={() => setShowCreateModal(true)}
                >
                  <Plus size={16} />
                  <span>Create Wishlist</span>
                </button>
              </div>
              
              <nav className="flex flex-col">
                {mockWishlists.map((list) => (
                  <button
                    key={list.id}
                    className={`flex items-center justify-between p-4 text-left hover:bg-gray-50 ${activeWishlist.id === list.id ? 'bg-gray-50 font-medium' : ''}`}
                    onClick={() => setActiveWishlist(list)}
                  >
                    <div className="flex items-center gap-3">
                      <Heart size={20} className={activeWishlist.id === list.id ? 'text-rose-600' : 'text-gray-600'} />
                      <span>{list.name}</span>
                      {list.isPrivate && <Lock size={14} className="text-gray-400" />}
                    </div>
                    <div className="relative">
                      <button 
                        className="p-2 hover:bg-gray-100 rounded-full" 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu(list.id);
                        }}
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                      </button>
                      
                      {showMenu === list.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                          <div className="py-1">
                            <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <Pencil size={16} />
                              <span>Rename</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <Share2 size={16} />
                              <span>Share</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                              <Trash2 size={16} />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Wishlist content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    {activeWishlist.name}
                    {activeWishlist.isPrivate && (
                      <span className="flex items-center text-sm font-normal text-gray-600">
                        <Lock size={14} className="mr-1" />
                        Private
                      </span>
                    )}
                  </h2>
                  <p className="text-gray-600">
                    {activeWishlist.propertyIds.length} saved stays
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <button className="border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              
              {wishlistProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {wishlistProperties.map((property) => (
                    <div key={property.id} className="border rounded-lg overflow-hidden hover:shadow-md transition">
                      <div className="relative">
                        <div className="aspect-video relative">
                          <Image
                            src={property.images[0].url}
                            alt={property.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                          <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                        </button>
                      </div>
                      
                      <div className="p-4">
                        <Link href={`/property/${property.id}`} className="hover:underline">
                          <h3 className="font-semibold mb-1 line-clamp-1">{property.title}</h3>
                        </Link>
                        <p className="text-gray-600 text-sm mb-2">
                          {property.location.city}, {property.location.country}
                        </p>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold">${property.price.basePrice}</span>
                            <span className="text-gray-600"> / night</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span className="font-medium">{property.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4 text-gray-500">
                    <Heart size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No saved stays yet</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    When you find places you like, click the heart icon to save them to this wishlist.
                  </p>
                  <Link href="/" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium inline-block">
                    Start exploring
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Create wishlist modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <h2 className="text-xl font-semibold mb-4">Create wishlist</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter wishlist name"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isNewListPrivate}
                    onChange={() => setIsNewListPrivate(!isNewListPrivate)}
                    className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                  />
                  <span className="text-sm text-gray-700">Make this wishlist private</span>
                </label>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-lg disabled:opacity-50"
                  disabled={!newListName.trim()}
                  onClick={handleCreateWishlist}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
} 