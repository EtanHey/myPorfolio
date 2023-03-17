import SidebarContainer from "@/components/sidebar/SidebarContainer";
import SidebarListContainer from "@/components/sidebar/SidebarListContainer";
import { getReminders } from "@/lib/prisma/remindersCont";
import { Reminder } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Reminders = async () => {
  const { reminders } = await getReminders();
  return (
    <SidebarContainer title="Reminders">
      <SidebarListContainer>
        {reminders
          ? reminders?.map((reminder: Reminder) => (
              <li className="" key={reminder.id}>
                <Link href={`/reminders/${reminder.id}`}>{reminder.name}</Link>
              </li>
            ))
          : null}
      </SidebarListContainer>
    </SidebarContainer>
  );
};

export default Reminders;
