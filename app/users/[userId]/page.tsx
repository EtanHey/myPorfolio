import { getUserById } from "@/lib/prisma/users";
import { User } from "@prisma/client";
import React from "react";
import UserPage from "./UserPage";

async function Page({
  params: { userId },
}: {
  params: { userId: User["id"] };
}) {
  const { user } = await getUserById(userId);
  if (!user) return <div>User not found</div>;
  return <UserPage user={user} />;
}

export default Page;
