import InnerSidebarLayout from "@/components/layouts/InnerSidebarLayout";
import { Metadata } from "next";
import React from "react";
import Users from "./Users";

export const metadata: Metadata = {
  title: "Users",
  description: "Users list",
};

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  return <InnerSidebarLayout List={Users}>{children}</InnerSidebarLayout>;
};

export default UsersLayout;
