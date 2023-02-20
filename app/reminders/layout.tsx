import React from "react";
import Reminders from "./Reminders";

const RemindersLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-full">
      <aside className="w-1/4">
        {/* @ts-ignore */}
        <Reminders />
      </aside>
      <main>{children}</main>
    </section>
  );
};

export default RemindersLayout;
