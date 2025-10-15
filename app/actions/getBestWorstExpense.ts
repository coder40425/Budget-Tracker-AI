'use server';
import { connectDB } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Record } from '@/models/Record';

async function getBestWorstExpense(): Promise<{
  bestExpense?: number;
  worstExpense?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // ✅ Connect to MongoDB
    await connectDB();

    // Fetch all records for the authenticated user (only amount field)
    const records = await Record.find({ user: userId })
      .select('amount')
      .lean();

    if (!records || records.length === 0) {
      return { bestExpense: 0, worstExpense: 0 };
    }

    const amounts = records.map((record) => record.amount);

    // Calculate best (highest) and worst (lowest) expense
    const bestExpense = Math.max(...amounts);
    const worstExpense = Math.min(...amounts);

    return { bestExpense, worstExpense };
  } catch (error) {
    console.error('Error fetching expense amounts:', error);
    return { error: 'Database error' };
  }
}

export default getBestWorstExpense;
