'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would be an API call to request password reset
      if (email && email.includes('@')) {
        setSuccess(true);
      } else {
        setError('Please enter a valid email address');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Link href="/" className="text-rose-600 text-3xl font-bold">
            StayHub
          </Link>
        </div>
        
        <div className="bg-white p-8 shadow rounded-lg">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Reset your password</h1>
            <p className="text-gray-600 mt-2">
              {!success 
                ? "Enter your email and we'll send you a link to reset your password." 
                : "Check your inbox for instructions to reset your password."}
            </p>
          </div>
          
          {error && (
            <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          {success ? (
            <div className="text-center">
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                <p className="font-medium">Reset link sent!</p>
                <p className="text-sm mt-1">We've sent an email to <strong>{email}</strong> with instructions to reset your password.</p>
              </div>
              
              <button
                type="button"
                onClick={() => router.push('/auth/login')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Back to login
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send reset link'}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <Link href="/auth/login" className="font-medium text-rose-600 hover:text-rose-500">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 