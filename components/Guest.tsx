import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-purple-500/10 dark:from-blue-950/30 dark:via-violet-950/20 dark:to-purple-950/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200/40 dark:border-blue-800/40'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>
              AI-Powered Financial Management
            </span>
            <span className='sm:hidden'>AI Financial Management</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 leading-tight tracking-tight'>
            Welcome to{' '}
            <span className='bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent'>
              BudgetTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0'>
            Track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances with intelligent automation.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0'>
            <SignInButton>
              <button className='group relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 hover:from-blue-700 hover:via-violet-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-violet-500/40 transition-all duration-200 transform hover:-translate-y-0.5'>
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Get Started Free
                  <span className='text-lg'>→</span>
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              </button>
            </SignInButton>
            <button className='group border-2 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'>
              Learn More
            </button>
          </div>

          {/* Feature highlights */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0'>
            <div className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>🤖</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 text-center'>
                AI Insights
              </h3>
              <p className='text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center'>
                Smart analysis of your spending patterns
              </p>
            </div>
            <div className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>✨</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 text-center'>
                Auto Categories
              </h3>
              <p className='text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center'>
                Intelligent expense categorization
              </p>
            </div>
            <div className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 sm:col-span-2 md:col-span-1'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-violet-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>📊</span>
              </div>
              <h3 className='text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 text-center'>
                Smart Dashboard
              </h3>
              <p className='text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center'>
                Beautiful, intuitive financial overview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500'></div>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-violet-200/40 dark:border-violet-800/40'>
              <span className='w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full'></span>
              FAQ
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 px-2 sm:px-0 tracking-tight'>
              Frequently Asked{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                Questions
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Everything you need to know about BudgetTracker AI and how it can
              transform your financial management.
            </p>
          </div>

          <div className='space-y-4 sm:space-y-6'>
            <div className='group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'>?</span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3'>
                    What is BudgetTracker AI?
                  </h3>
                  <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                    BudgetTracker AI is an intelligent financial management
                    tool that uses artificial intelligence to help you monitor
                    your spending patterns, get smart category suggestions, and
                    receive personalized insights to improve your financial
                    health.
                  </p>
                </div>
              </div>
            </div>

            <div className='group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:shadow-violet-500/20 dark:hover:shadow-violet-500/20 transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/30 flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'>🤖</span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3'>
                    How does the AI work?
                  </h3>
                  <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                    Our AI analyzes your spending data to automatically
                    categorize expenses, detect patterns, and provide
                    personalized recommendations. You can also ask the AI
                    questions about your spending habits and get instant,
                    intelligent responses.
                  </p>
                </div>
              </div>
            </div>

            <div className='group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 via-blue-500 to-violet-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'>💎</span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3'>
                    Is BudgetTracker AI free?
                  </h3>
                  <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                    Yes, BudgetTracker AI offers a free plan with basic AI
                    features including smart categorization and insights.
                    Premium plans will be available soon for advanced AI analytics and
                    unlimited AI interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;