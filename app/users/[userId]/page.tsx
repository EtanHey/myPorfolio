import { getUserById } from "@/lib/prisma/users";
import { User } from "@prisma/client";
import React from "react";
import UserPage from "./UserPage";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ userId: User["id"] }>;
}) => {
  const { userId } = await params;
  const { user } = await getUserById(userId);
  
  if (!user) {
    return { title : "Error - User not found" };
  }
  return { title: `${user.firstName} ${user.lastName}'s page` };
};
async function Page({ params }: { params: Promise<{ userId: User["id"] }> }) {
  const { userId } = await params;
  const { user } = await getUserById(userId);
  if (!user) return <div>User not found</div>;
  return <UserPage user={user} />;
}

export default Page;
