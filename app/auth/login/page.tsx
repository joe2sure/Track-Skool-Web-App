'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Card from '../../../components/ui/Card';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 high-contrast:bg-black py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20educational%20institution%20background%2C%20clean%20minimalist%20design%2C%20soft%20lighting%2C%20academic%20atmosphere%2C%20students%20and%20teachers%20in%20blurred%20background%2C%20contemporary%20school%20building%20interior%20with%20natural%20light%20streaming%20through%20large%20windows%2C%20professional%20educational%20setting%20with%20warm%20welcoming%20colors&width=1920&height=1080&seq=login-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-white/90 dark:bg-gray-800/90 high-contrast:bg-black/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <i className="ri-graduation-cap-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white">Welcome Back</h2>
          <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200 mt-2">Sign in to your SkoolBridge account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              I am a
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-gray-700 high-contrast:bg-gray-800 rounded-lg">
              {['student', 'teacher', 'admin', 'parent'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    userType === type
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-300 high-contrast:text-white hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <i className="ri-lock-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
              </div>
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-400 text-sm w-4 h-4 flex items-center justify-center`}></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white cursor-pointer">
                Remember me
              </label>
            </div>
            <Link href="/auth/forgot-password" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
            Don't have an account?{' '}
            <Link href="/auth/register" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}