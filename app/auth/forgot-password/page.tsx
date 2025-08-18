'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button2 from '../../../components/ui/Button2';
import Input from '../../../components/ui/Input';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 high-contrast:bg-black py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Peaceful%20school%20library%20interior%20with%20warm%20lighting%2C%20books%20and%20study%20materials%2C%20calming%20educational%20environment%2C%20soft%20natural%20light%20through%20windows%2C%20serene%20academic%20atmosphere%20with%20wooden%20shelves%20and%20comfortable%20seating%20areas&width=1920&height=1080&seq=forgot-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-white/90 dark:bg-gray-800/90 high-contrast:bg-black/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <i className="ri-lock-unlock-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white">Reset Password</h2>
          <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200 mt-2">
            {submitted ? 'Check your email for reset instructions' : 'Enter your email to reset your password'}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <i className="ri-mail-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
            </div>

            <Button2 type="submit" className="w-full" size="lg">
              Send Reset Link
            </Button2>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 high-contrast:bg-green-900/30 border border-green-200 dark:border-green-800 high-contrast:border-green-400 rounded-lg p-4">
              <div className="flex justify-center mb-3">
                <i className="ri-mail-check-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 high-contrast:text-green-100">
                If an account with <strong>{email}</strong> exists, you'll receive password reset instructions shortly.
              </p>
            </div>
            
            <Button2 onClick={() => setSubmitted(false)} variant="outline" className="w-full">
              Try Another Email
            </Button2>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
            Remember your password?{' '}
            <Link href="/auth/login" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}