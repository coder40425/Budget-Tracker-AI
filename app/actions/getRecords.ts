'use server';
import { connectDB } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Record } from '@/models/Record';

async function getRecords(): Promise<{
  records?: any[]; // plain objects
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    await connectDB();

    const records = await Record.find({ user: userId })
      .sort({ date: -1 })
      .limit(10)
      .lean();

    // Convert to plain objects suitable for passing to client components
    const plainRecords = records.map((r) => ({
      id: r._id.toString(),
      title: r.title,
      category: r.category || 'Other',
      amount: r.amount,
      date: r.date?.toISOString() || new Date().toISOString(),
      user: r.user,
      createdAt: r.createdAt?.toISOString() || new Date().toISOString(),
      updatedAt: r.updatedAt?.toISOString() || new Date().toISOString(),
    }));

    return { records: plainRecords };
  } catch (error) {
    console.error('Error fetching records:', error);
    return { error: 'Database error' };
  }
}

export default getRecords;
