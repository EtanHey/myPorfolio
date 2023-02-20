import LayoutWSidebar from "@/components/layouts/LayoutWSidebar";
import React from "react";
import Reminders from "./Reminders";

const RemindersLayout = async ({ children }: { children: React.ReactNode }) => {
  return <LayoutWSidebar List={Reminders}>{children}</LayoutWSidebar>;
};

export default RemindersLayout;
