import LayoutWSidebar from "@/components/layouts/LayoutWSidebar";
import { Metadata } from "next";
import React from "react";
import Reminders from "./Reminders";

export const metadata: Metadata = {
  title: "Reminders",
  description: "Reminders list",
}

const RemindersLayout = async ({ children }: { children: React.ReactNode }) => {
  return <LayoutWSidebar List={Reminders}>{children}</LayoutWSidebar>;
};

export default RemindersLayout;
