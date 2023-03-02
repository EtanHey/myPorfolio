"use client";
import { UserContextType } from "@/app/providers";
import { UserContext } from "@/app/providers/UsersProvider";
import TypedLabeledInput from "@/components/inputs/TypedLabeledInput";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { BaseSyntheticEvent, use } from "react";

export default function Page() {
  const router = useRouter();
  const { setUser } = use<UserContextType>(UserContext);
  async function handleLogin(ev: BaseSyntheticEvent) {
    ev.preventDefault();
    const email: string = ev.currentTarget.elements.email.value.toLowerCase();
    const { data } = await axios.post("/auth/login/controls", {
      email,
    });
    if (data.user) {
      setUser(data.user);
      router.push("/");
    }
  }
  return (
    <form onSubmit={handleLogin} className="flex flex-col p-3">
      <TypedLabeledInput id="email" label="email" />
      <input type="submit" value="Log In" />
    </form>
  );
}
