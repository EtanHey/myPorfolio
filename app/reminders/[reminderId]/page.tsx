import { getRemindersById } from "@/lib/prisma/reminders";
import { Reminder } from "@prisma/client";
import React from "react";
import ReminderPage from "./ReminderPage";

const page = async ({
  params: { reminderId },
}: {
  params: { reminderId: Reminder["id"] };
}) => {
  const { reminder } = await getRemindersById(reminderId);
  if (!reminder) return <div>Reminder not found</div>;
  return <ReminderPage reminder={reminder} />;
};

export default page;
