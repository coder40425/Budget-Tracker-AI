import mongoose, { Schema, Document, Model } from "mongoose";

// Define TypeScript interface for type safety
export interface IUser extends Document {
  clerkUserId: string;
  email: string;
  name: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define Mongoose schema
const UserSchema: Schema<IUser> = new Schema(
  {
    clerkUserId: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

// Export model safely (avoid recompile errors in Next.js hot reload)
export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
