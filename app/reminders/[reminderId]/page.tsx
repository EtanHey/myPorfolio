import { getRemindersById } from "@/lib/prisma/reminders";
import { Reminder } from "@prisma/client";
import React from "react";
import ReminderPage from "./ReminderPage";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ reminderId: Reminder["id"] }>;
}) => {
  const { reminderId } = await params;
  const { reminder } = await getRemindersById(reminderId);

  if (!reminder) {
    return { title: "Error - Reminder not found" };
  }
  return { title: `${reminder.name} - ${reminder.content}` };
};

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
