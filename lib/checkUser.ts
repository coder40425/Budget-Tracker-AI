import { currentUser } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  // ensure DB connection
  await connectDB();

  // check if user already exists
 const loggedInUser = await User.findOne({
    clerkUserId: user.id,
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  // create new user if not found
  const newUser = await User.create({
    clerkUserId: user.id,
    name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0]?.emailAddress,
  });

  return newUser;
};

