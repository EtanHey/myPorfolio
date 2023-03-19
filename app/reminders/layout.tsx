import InnerSidebarLayout from "@/components/layouts/InnerSidebarLayout";
import { Metadata } from "next";
import React from "react";
import Reminders from "./Reminders";

export const metadata: Metadata = {
  title: "Reminders",
  description: "Reminders list",
};

const RemindersLayout = async ({ children }: { children: React.ReactNode }) => {
  return <InnerSidebarLayout List={Reminders}>{children}</InnerSidebarLayout>;
};

export default RemindersLayout;
