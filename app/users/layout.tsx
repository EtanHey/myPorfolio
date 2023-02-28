import LayoutWSidebar from "@/components/layouts/LayoutWSidebar";
import { Metadata } from "next";
import React from "react";
import Users from "./Users";

export const metadata: Metadata = {
  title: "Users",
  description: "Users list",
}

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  return <LayoutWSidebar List={Users}>{children}</LayoutWSidebar>;
};

export default UsersLayout;
