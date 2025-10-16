'use server';
import { auth } from '@clerk/nextjs/server';
import { connectDB } from '@/lib/db';
import { Record } from '@/models/Record';
import { revalidatePath } from 'next/cache';

interface RecordData {
  title: string;
  amount: number;
  category: string;
  date: string;
}

interface RecordResult {
  data?: RecordData;
  error?: string;
}

export async function addExpenseRecord(formData: FormData): Promise<RecordResult> {
  await connectDB();

  const titleValue = formData.get('text');
  const amountValue = formData.get('amount');
  const categoryValue = formData.get('category');
  const dateValue = formData.get('date');

  // Validate input
  if (
    !titleValue ||
    !amountValue ||
    !categoryValue ||
    !dateValue ||
    titleValue === '' ||
    categoryValue === '' ||
    dateValue === ''
  ) {
    return { error: 'Title, amount, category, or date is missing' };
  }

  const title = titleValue.toString();
  const amount = parseFloat(amountValue.toString());
  const category = categoryValue.toString();

  // Parse date safely
  let date: Date;
  try {
    const [year, month, day] = dateValue.toString().split('-');
    date = new Date(Date.UTC(+year, +month - 1, +day, 12, 0, 0));
  } catch {
    return { error: 'Invalid date format' };
  }

  const { userId } = await auth();
  if (!userId) {
    return { error: 'User not authenticated' };
  }

  try {
    const createdRecord = await Record.create({
      title,
      amount,
      category,
      date,
      user: userId, // Clerk userId
    });

    const recordData: RecordData = {
      title: createdRecord.title,
      amount: createdRecord.amount,
      category: createdRecord.category || 'Other',
      date:
  createdRecord.date && createdRecord.date instanceof Date
    ? createdRecord.date.toISOString()
    : (typeof createdRecord.date === 'string'
        ? createdRecord.date
        : new Date().toISOString()),

    };

    revalidatePath('/');
    return { data: recordData };
  } catch (error) {
    console.error('Error adding expense record:', error);
    return { error: 'An unexpected error occurred while adding the record.' };
  }
}
