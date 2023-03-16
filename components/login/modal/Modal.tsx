"use client";

import { modalContext, userContext } from "@/app/Providers";
import { getUserByLoginInfo } from "@/lib/prisma/users";
import axios from "axios";
import React, { BaseSyntheticEvent, useContext } from "react";

const Modal = () => {
  const { modal, setModal } = useContext(modalContext);
  const { setUser } = useContext(userContext);
  const closeModal = () => {
    setModal(false);
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
    <div
      onClick={closeModal}
      className={`fixed top-1/2 left-1/2 h-full w-full  -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        modal ? "bg-black/50 " : "pointer-events-none opacity-0"
      }`}
    >
      <dialog
        open
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        className={`absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white transition-all duration-700
        ${modal ? "scale-100" : "scale-0"}`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
          className="h-96 w-96 px-3 py-6"
        >
          <button
            className="absolute top-2 right-4 text-4xl"
            onClick={closeModal}
          >
            &#215;
          </button>
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
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
