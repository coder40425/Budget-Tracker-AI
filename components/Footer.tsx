import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-t border-slate-200/60 dark:border-slate-700/60'>
      {/* Gradient accent line */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>

          {/* Logo and Tagline */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <div className='inline-flex items-center gap-2 mb-4 justify-center md:justify-start'>
              <div className='w-8 h-8 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30'>
                <span className='text-white text-lg'>💰</span>
              </div>
              <h2 className='text-xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent'>
                BudgetTracker AI
              </h2>
            </div>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0'>
              Intelligent financial management powered by AI. Track your expenses, manage your budget, and gain insights into your spending patterns.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4'>
              Quick Links
            </h3>
            <div className='flex flex-col space-y-3'>
              <Link
                href='/'
                className='group inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Home
              </Link>
              <Link
                href='/about'
                className='group inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                About
              </Link>
              <Link
                href='/contact'
                className='group inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4'>
              Features
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-blue-500 to-violet-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>🤖</span>
                </div>
                AI-Powered Insights
              </div>
              <div className='flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-violet-500 to-purple-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>✨</span>
                </div>
                Smart Categorization
              </div>
              <div className='flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>📊</span>
                </div>
                Analytics Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-8'></div>

        {/* Copyright and Social */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p className='text-slate-500 dark:text-slate-400 text-sm'>
              © {new Date().getFullYear()} BudgetTracker AI. All rights reserved.
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <div className='inline-flex items-center gap-2 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200/40 dark:border-blue-800/40'>
              <span className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse'></span>
              Made by Yash
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
