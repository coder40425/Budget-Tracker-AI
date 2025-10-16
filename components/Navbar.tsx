'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/30 dark:shadow-slate-950/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14 sm:h-16'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300 hover:scale-105'
              onClick={closeMobileMenu}
            >
              <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:rotate-3'>
                <span className='text-white text-xs sm:text-sm md:text-lg font-bold'>
                  💰
                </span>
              </div>
              <span className='text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent'>
                <span className='hidden sm:inline'>BudgetTracker AI</span>
                <span className='sm:hidden'>BudgetTracker</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link
              href='/'
              className='relative text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 group'
            >
              <span className='relative z-10'>Home</span>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>

            <Link
              href='/about'
              className='relative text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 group'
            >
              <span className='relative z-10'>About</span>
              <div className='absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>

            <Link
              href='/contact'
              className='relative text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 group'
            >
              <span className='relative z-10'>Contact</span>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>
          </div>

          {/* Right Section */}
          <div className='flex items-center space-x-1 sm:space-x-2'>
            {/* Theme Toggle */}
            <div className='p-0.5 sm:p-1'>
              <ThemeToggle />
            </div>

            {/* Authentication - Desktop */}
            <div className='hidden sm:block'>
              <SignedOut>
                <SignInButton>
                  <button className='relative overflow-hidden bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 hover:from-blue-600 hover:via-violet-600 hover:to-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95'>
                    <div className='relative z-10 flex items-center gap-1 sm:gap-2'>
                      <span>Sign In</span>
                      <svg
                        className='w-3 h-3 sm:w-4 sm:h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                        />
                      </svg>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className='p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100/50 to-violet-100/50 dark:from-blue-950/30 dark:to-violet-950/30 backdrop-blur-sm border border-blue-200/40 dark:border-blue-800/40'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all duration-200 active:scale-95'
              aria-label='Toggle mobile menu'
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 pb-3 sm:pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl border border-slate-200/60 dark:border-slate-700/60 mt-2 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50'>
            {/* Mobile Navigation Links */}
            <Link
              href='/'
              className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 text-sm font-medium transition-all duration-200 active:scale-95'
              onClick={closeMobileMenu}
            >
              <span className='text-base'>🏠</span>
              <span>Home</span>
            </Link>
            <Link
              href='/about'
              className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 text-sm font-medium transition-all duration-200 active:scale-95'
              onClick={closeMobileMenu}
            >
              <span className='text-base'>ℹ️</span>
              <span>About</span>
            </Link>
            <Link
              href='/contact'
              className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 text-sm font-medium transition-all duration-200 active:scale-95'
              onClick={closeMobileMenu}
            >
              <span className='text-base'>📞</span>
              <span>Contact</span>
            </Link>

            {/* Mobile Authentication */}
            <div className='pt-3 border-t border-slate-200/60 dark:border-slate-700/60'>
              <SignedOut>
                <SignInButton>
                  <button
                    className='w-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 hover:from-blue-600 hover:via-violet-600 hover:to-purple-600 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95'
                    onClick={closeMobileMenu}
                  >
                    <span>Sign In</span>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                      />
                    </svg>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className='flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-blue-100/50 to-violet-100/50 dark:from-blue-950/30 dark:to-violet-950/30 backdrop-blur-sm border border-blue-200/40 dark:border-blue-800/40'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-8 h-8 hover:scale-110 transition-transform duration-200',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}