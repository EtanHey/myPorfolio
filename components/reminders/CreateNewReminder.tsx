"use client";
import { useRouter } from "next/navigation";
import React, { BaseSyntheticEvent } from "react";

const CreateNewReminder = () => {
  const router = useRouter();
  const handleCreateNewReminder = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    try {
      let { name, content, time } = ev.currentTarget.elements;
      if (name && content && time) {
        name = name.value;
        content = content.value;
        time = time.value;
        const newReminder = {
          name,
          content,
          time,
        };
        const response = await fetch(
          "http://localhost:3000/reminders/controls",
          {
            method: "POST",
            body: JSON.stringify({ newReminder }),
          }
        );

        const { reminder, error } = await response.json();
        if (error) throw new Error(`${error}`);
        if (reminder) {
          ev.target.reset();
          router.refresh();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(ev) => {
        handleCreateNewReminder(ev);
      }}
      className="flex flex-col gap-4 rounded-lg border-2 border-stone-400 bg-stone-300 p-4"
    >
      <label htmlFor="name">Name:</label>
      <input className="shadow-md" type="text" id="name" name="name" />
      <label htmlFor="content">Content:</label>
      <input className="shadow-md" type="text" id="content" name="content" />
      <label htmlFor="Date">Time for the reminder:</label>
      <input
        className="shadow-md"
        type="datetime-local"
        id="time"
        name="time"
      />
      <input type="submit" value="Save Reminder" />
    </form>
  );
};

export default CreateNewReminder;
