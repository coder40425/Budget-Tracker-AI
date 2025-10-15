'use server';

import { checkUser } from '@/lib/checkUser';
import { connectDB } from '@/lib/db';
import { Record } from '@/models/Record';
import { generateAIAnswer, ExpenseRecord } from '@/lib/ai';

export async function generateInsightAnswer(question: string): Promise<string> {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error('User not authenticated');
    }

    // Connect to MongoDB
    await connectDB();

    // Get user's recent expenses (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const expenses = await Record.find({
      user: user.clerkUserId, // Clerk user reference
      createdAt: { $gte: thirtyDaysAgo },
    })
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    // Convert to format expected by AI
    const expenseData: ExpenseRecord[] = expenses.map((expense) => ({
      id: expense._id.toString(),
      amount: expense.amount,
      category: expense.category || 'Other',
      description: expense.title, // renamed from "text" to "title" based on your model
      date: expense.createdAt?.toISOString() || new Date().toISOString(),
    }));

    // Generate AI answer
    const answer = await generateAIAnswer(question, expenseData);
    return answer;
  } catch (error) {
    console.error('Error generating insight answer:', error);
    return "I'm unable to provide a detailed answer at the moment. Please try refreshing the insights or check your connection.";
  }
}
