import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 min-h-[calc(100vh-180px)] flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 relative h-64 w-64 mx-auto">
            <Image
              src="/images/not-found.svg"
              alt="Page not found"
              fill
              className="object-contain"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>
          <p className="text-gray-600 text-lg mb-8">
            We can't seem to find the page you're looking for. The page might have been removed, 
            renamed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
            >
              <Home size={18} />
              Go to Homepage
            </Link>
            
            <Link 
              href="/search"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              <Search size={18} />
              Search Properties
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Need Help?</h2>
            <p className="mb-4">
              If you believe this is an error with our website, please contact our support team.
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:support@stayhub.com" className="text-rose-600 hover:text-rose-700">support@stayhub.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 