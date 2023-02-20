import { getReminders } from "@/lib/prisma/reminders";
import { Reminder } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Reminders = async () => {
  const { reminders } = await getReminders();
  return (
    <section className="h-full w-full bg-stone-800">
      <div className="center py-4">
        <h2 className="mb-4 text-xl font-medium text-white">Reminders</h2>
        <ul className="flex flex-col text-sm text-white">
          {reminders
            ? reminders?.map((reminder: Reminder) => (
                <li key={reminder.id}>
                  <Link href={`/reminders/${reminder.id}`}>
                    {reminder.name}
                  </Link>
                </li>
              ))
            : null}
          {/* {error ? <li>{`${error}`}</li> : null} */}
        </ul>
      </div>
    </section>
  );
};

export default Reminders;
