import { toReadableDate } from "@/lib/utils/helpers";
import { Reminder } from "@prisma/client";
import React from "react";

function ReminderPage({ reminder }: { reminder: Reminder }) {
  return (
    <div className="mx-2 my-4 flex flex-col gap-2">
      <header className="flex w-full flex-row items-center gap-3">
        <h1 className="text-2xl font-bold"> Complete {reminder.name}</h1>
        <p>by {toReadableDate(reminder.time)}</p>
      </header>
      <desc className="inline-block w-full rounded-lg bg-stone-300 p-7 break-all">
        <p>{reminder.content}</p>
      </desc>
    </div>
  );
}

export default ReminderPage;
