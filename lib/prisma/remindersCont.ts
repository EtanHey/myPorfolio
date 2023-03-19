import { Reminder } from "@prisma/client";
import prisma from ".";

export async function getReminders() {
  try {
    const reminders = await prisma.reminder.findMany();
    return { reminders };
  } catch (error) {
    return { error };
  }
}

export async function createReminder(reminder: Omit<Reminder, "id">) {
  try {
    const reminderFromDB = await prisma.reminder.create({
      data: reminder,
    });
    return { reminder: reminderFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getRemindersById(id: Reminder["id"]) {
  try {
    const reminder = await prisma.reminder.findUnique({
      where: {
        id,
      },
    });

    return { reminder };
  } catch (error) {
    return { error };
  }
}
