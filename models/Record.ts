import mongoose, { Schema, Document, Model } from "mongoose";

// Define TypeScript interface
export interface IRecord extends Document {
  title: string;
  category?: string;
  amount: number;
  date?: Date;
  user: string; // Clerk userId (string ref)
  createdAt: Date;
  updatedAt: Date;
}

const RecordSchema: Schema<IRecord> = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "Other" },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    user: {
      type: String, // linking with clerkUserId
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Record: Model<IRecord> =
  mongoose.models.Record || mongoose.model<IRecord>("Record", RecordSchema);
