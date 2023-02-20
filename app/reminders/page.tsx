import CreateNewReminder from "@/components/reminders/CreateNewReminder";
import React from "react";

function Page() {
  return (
    <section>
      <div className="py-4 px-4 sm:px-6 lg:px-8 ">
        <h1 className="mb-3 text-2xl font-semibold tracking-tight">
          Reminders
        </h1>
        <p>Set up a new reminder</p>
        <CreateNewReminder />
      </div>
    </section>
  );
}

export default Page;
