import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg'>
            <span className='text-white text-sm sm:text-lg'>📝</span>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent'>
              Expense History
            </h3>
            <p className='text-xs text-slate-500 dark:text-slate-400 mt-0.5'>
              Your spending timeline
            </p>
          </div>
        </div>
        <div className='bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-l-red-500 p-3 sm:p-4 rounded-xl'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-6 h-6 sm:w-8 sm:h-8 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center'>
              <span className='text-base sm:text-lg'>⚠️</span>
            </div>
            <h4 className='font-bold text-red-800 dark:text-red-300 text-sm'>
              Error loading expense history
            </h4>
          </div>
          <p className='text-red-700 dark:text-red-400 ml-8 sm:ml-10 text-xs'>
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30'>
            <span className='text-white text-sm sm:text-lg'>📝</span>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight'>
              Expense History
            </h3>
            <p className='text-xs text-slate-500 dark:text-slate-400 mt-0.5'>
              Your spending timeline
            </p>
          </div>
        </div>
        <div className='text-center py-6 sm:py-8'>
          <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/50 dark:to-violet-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <span className='text-2xl sm:text-3xl'>📊</span>
          </div>
          <h4 className='text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2'>
            No Expense Records Found
          </h4>
          <p className='text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm'>
            Start tracking your expenses to see your spending history and
            patterns here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-slate-300/50 dark:hover:shadow-slate-950/70 transition-all duration-300'>
      <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30'>
          <span className='text-white text-sm sm:text-lg'>📝</span>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent'>
            Expense History
          </h3>
          <p className='text-xs text-slate-500 dark:text-slate-400 mt-0.5'>
            Your spending timeline
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default RecordHistory;