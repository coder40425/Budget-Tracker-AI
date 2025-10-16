import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-purple-500/10 dark:from-blue-950/30 dark:via-violet-950/20 dark:to-purple-950/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200/40 dark:border-blue-800/40'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse'></span>
            <span>Built by a Student Developer</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 leading-tight tracking-tight'>
            About{' '}
            <span className='bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent'>
              BudgetTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            A student-built project that helps you track your expenses and
            understand your spending habits using simple, AI-powered insights.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 hover:from-blue-700 hover:via-violet-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-violet-500/40 transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10'>Start Your Journey</span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>
            <Link
              href='/contact'
              className='group border-2 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500'></div>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-violet-200/40 dark:border-violet-800/40'>
            <span className='w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full'></span>
            Our Mission
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-slate-100 px-2 sm:px-0 tracking-tight'>
            Making Finance Tracking Simple with{' '}
            <span className='text-blue-600 dark:text-blue-400'>AI</span>
          </h2>
          <p className='text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto'>
            The goal of this project is to make expense management smarter and
            easier. It uses AI to analyze spending patterns, helping users learn
            better budgeting habits and stay financially aware.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-slate-50 via-white to-violet-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-purple-200/40 dark:border-purple-800/40'>
              <span className='w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full'></span>
              Features
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100 tracking-tight'>
              Why Use{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                BudgetTracker AI?
              </span>
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
              Here are some features that make this student project special.
            </p>
          </div>

          {/* Features */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 transition-all duration-200 hover:-translate-y-1'>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6'>
                  <span className='text-white text-xl'>🤖</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-slate-900 dark:text-slate-100'>
                  AI-Powered Insights
                </h3>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                  Understand your spending patterns through AI-driven insights
                  and automated categorization.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-violet-500/20 dark:hover:shadow-violet-500/20 transition-all duration-200 hover:-translate-y-1'>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 mb-6'>
                  <span className='text-white text-xl'>✨</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-slate-900 dark:text-slate-100'>
                  Smart Categorization
                </h3>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                  Automatically groups your expenses and learns from your usage
                  to give accurate results over time.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 transition-all duration-200 hover:-translate-y-1'>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 mb-6'>
                  <span className='text-white text-xl'>📊</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-slate-900 dark:text-slate-100'>
                  Simple Dashboard
                </h3>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                  View your spending trends and insights in a clean, easy-to-use
                  interface designed for simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
<section className='py-20 px-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md relative overflow-hidden'>
  <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-full blur-2xl'></div>
  <div className='absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-2xl'></div>

  <div className='max-w-4xl mx-auto relative z-10'>
    <div className='text-center mb-12'>
      <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-blue-200/40 dark:border-blue-800/40'>
        <span className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full'></span>
        The Story
      </div>
      <h2 className='text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100 tracking-tight'>
        Created by a{' '}
        <span className='text-blue-600 dark:text-blue-400'>
          Student Developer
        </span>
      </h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
      <div className='space-y-6'>
        <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
          Myself, <strong>Yash Kumar Singh</strong>, a student at <strong>NIT Durgapur (B.Tech, 2024–2028)</strong>, built BudgetTracker AI as a small project to explore how AI could make personal finance more accessible and engaging. The project reflects my journey in full-stack development and AI experimentation.
        </p>
        <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
          What started as a learning experiment quickly grew into a practical tool for users to track expenses, gain insights, and develop better financial habits. The aim is simple — learn, build, and help others manage daily spending while exploring real-world applications of AI.
        </p>
      </div>

      <div className='bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/20 dark:to-violet-950/20 p-8 rounded-2xl border border-blue-200/60 dark:border-blue-800/50'>
        <div className='space-y-6'>
          <div className='flex items-center gap-4'>
            <div className='w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full'></div>
            <div className='text-slate-900 dark:text-slate-100 font-medium'>
              Built in 2025 as a learning project
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-3 h-3 bg-violet-500 dark:bg-violet-400 rounded-full'></div>
            <div className='text-slate-900 dark:text-slate-100 font-medium'>
              Uses AI-driven insights
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full'></div>
            <div className='text-slate-900 dark:text-slate-100 font-medium'>
              Focused on user experience
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500'></div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-violet-200/40 dark:border-violet-800/40'>
            <span className='w-2 h-2 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse'></span>
            Ready to Try It?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-slate-100 tracking-tight'>
            Start Managing Your{' '}
            <span className='bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent'>
              Expenses Smarter
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed'>
            This project is free to use and built to help students and
            individuals track and visualize their finances easily.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 hover:from-blue-700 hover:via-violet-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-violet-500/40 transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Get Started
                <span className='text-lg'>→</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>

            <Link
              href='/contact'
              className='group border-2 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2'
            >
              Contact
              <span className='text-lg group-hover:translate-x-0.5 transition-transform duration-200'>
                💬
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;