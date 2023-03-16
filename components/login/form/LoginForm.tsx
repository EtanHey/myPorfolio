"use client";
import { modalContext, userContext } from "@/components/providers/contexts";
import axios from "axios";
import React, { BaseSyntheticEvent, useContext } from "react";

const LoginForm = () => {
  const { setUser } = useContext(userContext);
  const { setModal } = useContext(modalContext);
  const closeModal = () => {
    setModal({ open: false, type: undefined });
  };
  const handleSignIn = async (e: BaseSyntheticEvent) => {
    try {
      e.preventDefault();
      const email = e.currentTarget.elements.namedItem("email").value;
      const password = e.currentTarget.elements.namedItem("password").value;
      const userInfo = { email, password };
      const { data } = await axios.post("/api/login/", { userInfo });
      const user = data.receivedUser;
      if (user) {
        e.target.reset();
        setUser(user);
        closeModal();
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <form
      className="flex h-0 min-h-full flex-shrink-0 flex-col justify-around space-y-4"
      onSubmit={handleSignIn}
    >
      <div className="flex flex-col">
        <label className="text-2xl font-bold" htmlFor="email">
          Email
        </label>
        <input className="bg-gray-200" type="email" id="email" />
      </div>
      <div className="flex flex-col">
        <label className="text-2xl font-bold" htmlFor="password">
          Password
        </label>
        <input className="bg-gray-200" type="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
