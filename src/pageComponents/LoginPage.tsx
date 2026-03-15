'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await login(username, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute top-6 left-6 z-10"
      >
        <Link
          href="/"
          className="flex items-center gap-2 no-underline group"
        >
          <Image src='/logo.png' alt="Cyvera Digitals" width={100} height={40} className="h-10 w-auto" />
          <span className="text-sm font-medium text-gray-500 group-hover:text-gray-800 transition-colors">
            Back to Home
          </span>
        </Link>
      </motion.div>

      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-secondary)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md mx-4"
      >
        <div className="bg-white/95 rounded-3xl shadow-2xl border border-white/40 p-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex justify-center mb-2"
          >
            <Link href="/">
              <Image src='/logo.png' alt="Cyvera Digitals" width={200} height={80} className="h-20 w-auto" />
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Sign in to your account</p>
          </motion.div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white/90 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7b19e7] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 bg-white/90 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </motion.div>

            {/* Forgot Password */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-end"
            >
              <Link
                href="/forgot-password"
                className="text-sm font-medium hover:opacity-80 transition-opacity no-underline"
                style={{ color: 'var(--primary-purple)' }}
              >
                Forgot Password?
              </Link>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: '0 4px 20px rgba(123, 25, 231, 0.35)',
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-3 my-6"
          >
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </motion.div>

          {/* Sign Up Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center text-sm text-gray-500"
          >
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="font-semibold hover:opacity-80 transition-opacity no-underline"
              style={{ color: 'var(--primary-purple)' }}
            >
              Sign Up
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
