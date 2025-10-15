'use server';
import { connectDB } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Record } from '@/models/Record';

async function getUserRecord(): Promise<{
  record?: number;
  daysWithRecords?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // ✅ Connect to MongoDB
    await connectDB();

    // Fetch all records for the authenticated user
    const records = await Record.find({ user: userId }).lean();

    if (!records || records.length === 0) {
      return { record: 0, daysWithRecords: 0 };
    }

    // Sum of all amounts
    const record = records.reduce((sum, r) => sum + r.amount, 0);

    // Count the number of records with amount > 0
    const daysWithRecords = records.filter((r) => r.amount > 0).length;

    return { record, daysWithRecords };
  } catch (error) {
    console.error('Error fetching user record:', error);
    return { error: 'Database error' };
  }
}

export default getUserRecord;
