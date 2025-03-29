import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Home, 
  Users, 
  Calendar, 
  CreditCard, 
  Settings, 
  MessageSquare, 
  Star,
  TrendingUp,
  DollarSign,
  Eye,
  Edit,
  PlusCircle
} from 'lucide-react';

export default function HostDashboardPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-xl p-6 sticky top-24">
              <div className="flex items-center gap-4 pb-6 border-b">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src="/images/avatar.jpg" 
                    alt="Host Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">John Doe</h2>
                  <p className="text-gray-500 text-sm">Host since 2021</p>
                </div>
              </div>
              
              <nav className="mt-6 space-y-2">
                <Link 
                  href="/host/dashboard" 
                  className="flex items-center gap-3 p-3 bg-rose-50 text-rose-600 rounded-lg font-medium"
                >
                  <Home size={20} />
                  Dashboard
                </Link>
                <Link 
                  href="/host/listings" 
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <Home size={20} />
                  Listings
                </Link>
                <Link 
                  href="/host/reservations" 
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <Calendar size={20} />
                  Reservations
                </Link>
                <Link 
                  href="/host/guests" 
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <Users size={20} />
                  Guests
                </Link>
                <Link 
                  href="/host/inbox" 
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <MessageSquare size={20} />
                  Inbox
                  <span className="ml-auto bg-rose-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                </Link>
                <Link 
                  href="/host/payments" 
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <CreditCard size={20} />
                  Payments
                </Link>
                <Link 
                  href="/host/settings" 
                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <Settings size={20} />
                  Settings
                </Link>
              </nav>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <div className="bg-white shadow-sm rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <Link 
                  href="/create-listing" 
                  className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition-colors"
                >
                  <PlusCircle size={18} />
                  Add new listing
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <TrendingUp className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Bookings</p>
                      <p className="text-2xl font-bold">128</p>
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">+12% from last month</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <DollarSign className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Earnings</p>
                      <p className="text-2xl font-bold">$12,488</p>
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">+8% from last month</p>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Star className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average Rating</p>
                      <p className="text-2xl font-bold">4.8/5</p>
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">+0.2 from last month</p>
                </div>
              </div>
            </div>
            
            {/* Recent Bookings */}
            <div className="bg-white shadow-sm rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Bookings</h2>
                <Link href="/host/reservations" className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                  View all
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Guest
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dates
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 relative rounded-full overflow-hidden mr-3">
                            <Image 
                              src="/images/avatar1.jpg" 
                              alt="Guest" 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Emma Wilson</div>
                            <div className="text-sm text-gray-500">3 guests</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Modern Downtown Loft</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Oct 15 - Oct 20, 2023</div>
                        <div className="text-sm text-gray-500">5 nights</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $980
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Confirmed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 relative rounded-full overflow-hidden mr-3">
                            <Image 
                              src="/images/avatar2.jpg" 
                              alt="Guest" 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">James Miller</div>
                            <div className="text-sm text-gray-500">2 guests</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Cozy Beach House</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Oct 10 - Oct 17, 2023</div>
                        <div className="text-sm text-gray-500">7 nights</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $1,540
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Upcoming
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 relative rounded-full overflow-hidden mr-3">
                            <Image 
                              src="/images/avatar3.jpg" 
                              alt="Guest" 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">4 guests</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Mountain Cabin Retreat</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Oct 5 - Oct 8, 2023</div>
                        <div className="text-sm text-gray-500">3 nights</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $750
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Your Listings */}
            <div className="bg-white shadow-sm rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Listings</h2>
                <Link href="/host/listings" className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                  Manage all listings
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src="/images/property1.jpg"
                      alt="Modern Downtown Loft"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Modern Downtown Loft</h3>
                      <div className="flex items-center">
                        <Star size={16} className="text-amber-400 fill-current" />
                        <span className="text-sm ml-1">4.92</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">San Francisco, CA</p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">$180 <span className="text-gray-500 font-normal">night</span></p>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 bg-gray-50 rounded-lg">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 bg-gray-50 rounded-lg">
                          <Edit size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src="/images/property2.jpg"
                      alt="Cozy Beach House"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Cozy Beach House</h3>
                      <div className="flex items-center">
                        <Star size={16} className="text-amber-400 fill-current" />
                        <span className="text-sm ml-1">4.87</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">Malibu, CA</p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">$220 <span className="text-gray-500 font-normal">night</span></p>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 bg-gray-50 rounded-lg">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 bg-gray-50 rounded-lg">
                          <Edit size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Reviews */}
            <div className="bg-white shadow-sm rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Reviews</h2>
                <Link href="/host/reviews" className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                  View all reviews
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden">
                      <Image 
                        src="/images/avatar1.jpg" 
                        alt="Reviewer" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium">Emma Wilson</h3>
                        <p className="text-gray-500 text-sm">Oct 20, 2023</p>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-amber-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        Amazing place! So clean and comfortable. Great location and the host was incredibly helpful with local recommendations.
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Review for: Modern Downtown Loft
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden">
                      <Image 
                        src="/images/avatar3.jpg" 
                        alt="Reviewer" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium">Sarah Johnson</h3>
                        <p className="text-gray-500 text-sm">Oct 8, 2023</p>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={16} className="text-amber-400 fill-current" />
                        ))}
                        {[...Array(1)].map((_, i) => (
                          <Star key={i} size={16} className="text-gray-300" />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        We had a wonderful stay at the Mountain Cabin Retreat. Beautiful views and cozy interior. 
                        Only issue was the spotty WiFi, but that's to be expected in a remote location.
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Review for: Mountain Cabin Retreat
                      </p>
                    </div>
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