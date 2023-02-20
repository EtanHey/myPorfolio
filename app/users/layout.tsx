import LayoutWSidebar from "@/components/layouts/LayoutWSidebar";
import React from "react";
import Users from "./Users";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  return <LayoutWSidebar List={Users}>{children}</LayoutWSidebar>;
};

export default UsersLayout;
