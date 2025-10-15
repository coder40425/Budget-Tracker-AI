import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            <span>Built by a Student Developer</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight'>
            About{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
              BudgetTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            A student-built project that helps you track your expenses and
            understand your spending habits using simple, AI-powered insights.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10'>Start Your Journey</span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>
            <Link
              href='/contact'
              className='group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
            Our Mission
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 px-2 sm:px-0'>
            Making Finance Tracking Simple with{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>AI</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto'>
            The goal of this project is to make expense management smarter and
            easier. It uses AI to analyze spending patterns, helping users learn
            better budgeting habits and stay financially aware.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              Features
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
              Why Use{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                BudgetTracker AI?
              </span>
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Here are some features that make this student project special.
            </p>
          </div>

          {/* Features */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>🤖</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  AI-Powered Insights
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Understand your spending patterns through AI-driven insights
                  and automated categorization.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>✨</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  Smart Categorization
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Automatically groups your expenses and learns from your usage
                  to give accurate results over time.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>📊</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  Simple Dashboard
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  View your spending trends and insights in a clean, easy-to-use
                  interface designed for simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
<section className='py-20 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
  <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-full blur-2xl'></div>
  <div className='absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl'></div>

  <div className='max-w-4xl mx-auto relative z-10'>
    <div className='text-center mb-12'>
      <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
        <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
        The Story
      </div>
      <h2 className='text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100'>
        Created by a{' '}
        <span className='text-emerald-600 dark:text-emerald-400'>
          Student Developer
        </span>
      </h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
      <div className='space-y-6'>
        <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
          Myself, <strong>Yash Kumar Singh</strong>, a student at <strong>NIT Durgapur (B.Tech, 2024–2028)</strong>, built BudgetTracker AI as a small project to explore how AI could make personal finance more accessible and engaging. The project reflects my journey in full-stack development and AI experimentation.
        </p>
        <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
          What started as a learning experiment quickly grew into a practical tool for users to track expenses, gain insights, and develop better financial habits. The aim is simple — learn, build, and help others manage daily spending while exploring real-world applications of AI.
        </p>
      </div>

      <div className='bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50'>
        <div className='space-y-6'>
          <div className='flex items-center gap-4'>
            <div className='w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full'></div>
            <div className='text-gray-900 dark:text-gray-100 font-medium'>
              Built in 2025 as a learning project
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full'></div>
            <div className='text-gray-900 dark:text-gray-100 font-medium'>
              Uses AI-driven insights
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full'></div>
            <div className='text-gray-900 dark:text-gray-100 font-medium'>
              Focused on user experience
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg'>
            <span className='w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            Ready to Try It?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100'>
            Start Managing Your{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
              Expenses Smarter
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            This project is free to use and built to help students and
            individuals track and visualize their finances easily.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Get Started
                <span className='text-lg'>→</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>

            <Link
              href='/contact'
              className='group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2'
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

