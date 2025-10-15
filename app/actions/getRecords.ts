'use server';
import { connectDB } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Record } from '@/models/Record';

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // ✅ Connect to MongoDB
    await connectDB();

    // Fetch recent 10 records for the authenticated user, sorted by `date` descending
    const records = await Record.find({ user: userId })
      .sort({ date: -1 })
      .limit(10)
      .lean();

    return { records };
  } catch (error) {
    console.error('Error fetching records:', error);
    return { error: 'Database error' };
  }
}

export default getRecords;
