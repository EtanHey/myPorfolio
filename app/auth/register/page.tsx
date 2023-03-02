"use client";
import TypedInputGroup from "@/components/inputs/TypedInputGroup";
import TypedLabeledInput from "@/components/inputs/TypedLabeledInput";
import axios from "axios";
import React, { BaseSyntheticEvent } from "react";

const handleRegistration = async (ev: BaseSyntheticEvent) => {
  ev.preventDefault();
  const email: string = ev.currentTarget.elements.email.value.toLowerCase();
  const confirmEmail: string =
    ev.currentTarget.elements.confirmEmail.value.toLowerCase();
  const firstName: string = ev.currentTarget.elements.firstName.value;
  const lastName: string = ev.currentTarget.elements.lastName.value;
  const myFile = ev.currentTarget.elements.image.files[0];
  if (email !== confirmEmail) throw new Error("Emails don't match");
  try {
    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    reader.onloadend = async () => {
      console.log(reader.result);
      const { data } = await axios.post(
        "/auth/register/controls",
        JSON.stringify({
          email,
          firstName,
          lastName,
          image: reader.result,
        })
      );
      if (data.user) {
        window.localStorage.setItem(
          "portfolioUser",
          JSON.stringify({ user: data.user })
        );
      }
    };
  } catch (error: any) {
    console.log(error.message);
  }
};

const page = () => {
  return (
    <form onSubmit={handleRegistration} className="flex flex-col gap-4 p-3">
      <TypedInputGroup
        id1="firstName"
        id2="lastName"
        label1="First Name"
        label2="Last Name"
      />
      <TypedInputGroup
        id1="email"
        id2="confirmEmail"
        label1="Email"
        label2="Email confirmation"
        type="email"
      />
      <TypedLabeledInput id="image" label="image" type="file" />
      <button type="submit">Sign Up!</button>
    </form>
  );
};

export default page;
