'use client';

const ContactPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-purple-500/10 dark:from-blue-950/30 dark:via-violet-950/20 dark:to-purple-950/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200/40 dark:border-blue-800/40'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse'></span>
            Get in Touch
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 leading-tight tracking-tight'>
            Contact{' '}
            <span className='bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent'>
              BudgetTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Built by a student developer from NIT Durgapur — feel free to connect for collaboration, suggestions, or feedback about BudgetTracker.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <a
              href='mailto:yashsingh1610@gmail.com'
              className='group relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 hover:from-blue-700 hover:via-violet-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-violet-500/40 transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                Send me an Email
                <span className='text-lg'>✉️</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </a>
          </div>
        </div>
      </section>

      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md relative overflow-hidden'>
  <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500'></div>
  <div className='max-w-6xl mx-auto'>
    <div className='text-center mb-10 sm:mb-12 md:mb-16'>
      <div className='inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-violet-200/40 dark:border-violet-800/40'>
        <span className='w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full'></span>
        Contact Information
      </div>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 px-2 sm:px-0 tracking-tight'>
        Ways to <span className='text-blue-600 dark:text-blue-400'>Connect</span>
      </h2>
      <p className='text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-2 sm:px-0'>
        You can reach out to me anytime through email or my developer profiles below.
      </p>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8'>
      {/* Email */}
      <a
        href='mailto:yashsingh1610@gmail.com'
        className='group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 transition-all duration-200 hover:-translate-y-1 text-center'
      >
        <div className='relative z-10'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4 sm:mb-6 mx-auto'>
            <span className='text-white text-lg sm:text-xl'>✉️</span>
          </div>
          <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100'>
            Email
          </h3>
        </div>
      </a>

      {/* GitHub */}
      <a
        href='https://github.com/coder40425'
        target='_blank'
        rel='noopener noreferrer'
        className='group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-violet-500/20 dark:hover:shadow-violet-500/20 transition-all duration-200 hover:-translate-y-1 text-center'
      >
        <div className='relative z-10'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 mb-4 sm:mb-6 mx-auto'>
            <span className='text-white text-lg sm:text-xl'>💻</span>
          </div>
          <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100'>
            GitHub
          </h3>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href='https://www.linkedin.com/in/yash-kumar-singh-18843232a'
        target='_blank'
        rel='noopener noreferrer'
        className='group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 transition-all duration-200 hover:-translate-y-1 text-center'
      >
        <div className='relative z-10'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-violet-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 mb-4 sm:mb-6 mx-auto'>
            <span className='text-white text-lg sm:text-xl'>💼</span>
          </div>
          <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100'>
            LinkedIn
          </h3>
        </div>
      </a>
    </div>
  </div>
</section>


      {/* Note Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-white to-violet-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-6 border border-purple-200/40 dark:border-purple-800/40'>
            <span className='w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full'></span>
            Note
          </div>
          <p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            This project — <span className='font-semibold text-blue-600 dark:text-blue-400'>BudgetTracker</span> — was built in 2025 by a student developer passionate about full-stack web development and AI-driven productivity tools.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;