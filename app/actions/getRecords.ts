'use server';
import { connectDB } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Record as RecordType } from '@/types/Record'; // import your interface
import { Record } from '@/models/Record';

async function getRecords(): Promise<{
  records?: RecordType[];
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

    // Map to your interface type
    const plainRecords: RecordType[] = records.map((r) => ({
      id: r._id.toString(),
      title: r.title,
      category: r.category || 'Other',
      amount: r.amount,
      date: r.date instanceof Date ? r.date.toISOString() : String(r.date),
      userId: r.user,
      createdAt: r.createdAt instanceof Date ? r.createdAt : new Date(r.createdAt),
    }));

    return { records: plainRecords };
  } catch (error) {
    console.error('Error fetching records:', error);
    return { error: 'Database error' };
  }
}

export default getRecords;
