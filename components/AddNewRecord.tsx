'use client';
import { useRef, useState } from 'react';
import { addExpenseRecord } from '@/app/actions/addExpenseRecord';
import { suggestCategory } from '@/app/actions/suggestCategory';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(50);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isCategorizingAI, setIsCategorizingAI] = useState(false);

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set('amount', amount.toString());
    formData.set('category', category);

    const { error } = await addExpenseRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('Expense record added successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(50);
      setCategory('');
      setDescription('');
    }

    setIsLoading(false);
  };

  const handleAISuggestCategory = async () => {
    if (!description.trim()) {
      setAlertMessage('Please enter a description first');
      setAlertType('error');
      return;
    }

    setIsCategorizingAI(true);
    setAlertMessage(null);

    try {
      const result = await suggestCategory(description);
      if (result.error) {
        setAlertMessage(`AI Suggestion: ${result.error}`);
        setAlertType('error');
      } else {
        setCategory(result.category);
        setAlertMessage(`AI suggested category: ${result.category}`);
        setAlertType('success');
      }
    } catch {
      setAlertMessage('Failed to get AI category suggestion');
      setAlertType('error');
    } finally {
      setIsCategorizingAI(false);
    }
  };

  return (
    <div className='bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-slate-300/50 dark:hover:shadow-slate-950/70 transition-all duration-300'>
      <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30'>
          <span className='text-white text-sm sm:text-lg'>💳</span>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight'>
            Add New Expense
          </h3>
          <p className='text-xs text-slate-500 dark:text-slate-400 mt-0.5'>
            Track your spending with AI assistance
          </p>
        </div>
      </div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className='space-y-6 sm:space-y-8'
      >
        {/* Expense Description and Date */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50/50 to-violet-50/50 dark:from-blue-950/10 dark:to-violet-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/50'>
          {/* Expense Description */}
          <div className='space-y-1.5'>
            <label
              htmlFor='text'
              className='flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-blue-500 rounded-full'></span>
              Expense Description
            </label>
            <div className='relative'>
              <input
                type='text'
                id='text'
                name='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full pl-3 pr-12 sm:pr-14 py-2.5 bg-white/70 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:bg-white dark:focus:bg-slate-700/90 focus:border-blue-400 dark:focus:border-blue-400 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm shadow-sm hover:shadow-md transition-all duration-200'
                placeholder='Coffee, groceries, gas...'
                required
                suppressHydrationWarning
              />
              <button
                type='button'
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                className='absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-7 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 disabled:from-slate-300 disabled:to-slate-300 text-white rounded-lg text-xs font-medium flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-200'
                title='AI Category Suggestion'
              >
                {isCategorizingAI ? (
                  <div className='w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                ) : (
                  <span className='text-xs'>✨</span>
                )}
              </button>
            </div>
            {isCategorizingAI && (
              <div className='flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400'>
                <div className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse'></div>
                AI is analyzing your description...
              </div>
            )}
          </div>

          {/* Expense Date */}
          <div className='space-y-1.5'>
            <label
              htmlFor='date'
              className='flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-violet-500 rounded-full'></span>
              Expense Date
            </label>
            <input
              type='date'
              name='date'
              id='date'
              className='w-full px-3 py-2.5 bg-white/70 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:bg-white dark:focus:bg-slate-700/90 focus:border-blue-400 dark:focus:border-blue-400 text-slate-900 dark:text-slate-100 text-sm shadow-sm hover:shadow-md transition-all duration-200'
              required
              onFocus={(e) => e.target.showPicker()}
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Category Selection and Amount */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-violet-50/50 to-purple-50/50 dark:from-violet-950/10 dark:to-purple-950/10 rounded-xl border border-violet-200/50 dark:border-violet-800/50'>
          {/* Category Selection */}
          <div className='space-y-1.5'>
            <label
              htmlFor='category'
              className='flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-violet-500 rounded-full'></span>
              Category
              <span className='text-xs text-slate-400 dark:text-slate-500 ml-2 font-normal hidden sm:inline'>
                Use the ✨ button above for AI suggestions
              </span>
            </label>
            <select
              id='category'
              name='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full px-3 py-2.5 bg-white/70 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-violet-500/30 focus:bg-white dark:focus:bg-slate-700/90 focus:border-violet-400 dark:focus:border-violet-400 text-slate-900 dark:text-slate-100 cursor-pointer text-sm shadow-sm hover:shadow-md transition-all duration-200'
              required
              suppressHydrationWarning
            >
              <option
                value=''
                disabled
                className='text-slate-400 dark:text-slate-500'
              >
                Select category...
              </option>
              <option value='Food' className='text-slate-900 dark:text-slate-100'>
                🍔 Food & Dining
              </option>
              <option
                value='Transportation'
                className='text-slate-900 dark:text-slate-100'
              >
                🚗 Transportation
              </option>
              <option
                value='Shopping'
                className='text-slate-900 dark:text-slate-100'
              >
                🛒 Shopping
              </option>
              <option
                value='Entertainment'
                className='text-slate-900 dark:text-slate-100'
              >
                🎬 Entertainment
              </option>
              <option
                value='Bills'
                className='text-slate-900 dark:text-slate-100'
              >
                💡 Bills & Utilities
              </option>
              <option
                value='Healthcare'
                className='text-slate-900 dark:text-slate-100'
              >
                🏥 Healthcare
              </option>
              <option
                value='Other'
                className='text-slate-900 dark:text-slate-100'
              >
                📦 Other
              </option>
            </select>
          </div>

          {/* Amount */}
          <div className='space-y-1.5'>
            <label
              htmlFor='amount'
              className='flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-purple-500 rounded-full'></span>
              Amount
              <span className='text-xs text-slate-400 dark:text-slate-500 ml-2 font-normal hidden sm:inline'>
                Enter amount between $0 and $1,000
              </span>
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium text-sm'>
                $
              </span>
              <input
                type='number'
                name='amount'
                id='amount'
                min='0'
                max='1000'
                step='0.01'
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className='w-full pl-6 pr-3 py-2.5 bg-white/70 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-purple-500/30 focus:bg-white dark:focus:bg-slate-700/90 focus:border-purple-400 dark:focus:border-purple-400 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200'
                placeholder='0.00'
                required
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 hover:from-blue-700 hover:via-violet-600 hover:to-purple-700 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-semibold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-violet-500/40 group transition-all duration-300 border-2 border-transparent hover:border-white/20 text-sm sm:text-base'
          disabled={isLoading}
          suppressHydrationWarning
        >
          <div className='relative flex items-center justify-center gap-2'>
            {isLoading ? (
              <>
                <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span className='text-lg'>💫</span>
                <span>Add Expense</span>
              </>
            )}
          </div>
        </button>
      </form>

      {/* Alert Message */}
      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded-xl border-l-4 backdrop-blur-sm ${
            alertType === 'success'
              ? 'bg-green-50/80 dark:bg-green-900/20 border-l-green-500 text-green-800 dark:text-green-200'
              : 'bg-red-50/80 dark:bg-red-900/20 border-l-red-500 text-red-800 dark:text-red-200'
          }`}
        >
          <div className='flex items-center gap-2'>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                alertType === 'success'
                  ? 'bg-green-100 dark:bg-green-800'
                  : 'bg-red-100 dark:bg-red-800'
              }`}
            >
              <span className='text-sm'>
                {alertType === 'success' ? '✅' : '⚠️'}
              </span>
            </div>
            <p className='font-medium text-sm'>{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecord;