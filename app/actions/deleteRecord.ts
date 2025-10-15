'use server';

import { connectDB } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { Record } from '@/models/Record';

async function deleteRecord(recordId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // ✅ Connect to MongoDB
    await connectDB();

    // Delete record belonging to the authenticated user
    const deleted = await Record.findOneAndDelete({
      _id: recordId,
      user: userId, // Clerk user reference
    });

    if (!deleted) {
      return { error: 'Record not found or not authorized' };
    }

    // Revalidate cache for homepage
    revalidatePath('/');

    return { message: 'Record deleted' };
  } catch (error) {
    console.error('Error deleting record:', error);
    return { error: 'Database error' };
  }
}

export default deleteRecord;
