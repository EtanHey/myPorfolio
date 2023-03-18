"use client";

import { modalContext } from "@/components/providers/contexts";
import React, { useContext } from "react";
import { LoginForm } from "../forms";
import CreateNewProject from "../projects/AddNewProjectForm";
import { ModalType } from "../providers/types";

const Modal = () => {
  const { modal, setModal } = useContext(modalContext);
  const closeModal = () => {
    setModal({ open: false, type: undefined });
  };
  return (
    <div
      onClick={closeModal}
      className={`fixed top-1/2 left-1/2 h-full min-w-fit w-screen -translate-x-1/2 -translate-y-1/2 py-20 px-4 transition-all duration-300 sm:px-72 sm:py-24 md:px-80 md:py-28 lg:px-96 lg:py-32 ${
        modal.open ? "bg-black/50 " : "pointer-events-none opacity-0"
      }`}
    >
      <dialog
        open
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        className={`relative z-50 flex h-0 min-h-full w-full min-w-fit max-w-3xl  justify-center rounded-lg border-2 border-stone-400 bg-stone-300/30 py-6 px-4 drop-shadow-lg backdrop-blur-lg  transition-all duration-700 sm:max-w-3xl sm:py-6 sm:px-6 md:max-w-7xl md:py-8 md:px-8 lg:max-w-full lg:py-12 lg:px-12 
        ${modal.open ? "scale-100" : "scale-0"}`}
      >
        <button
          className="absolute top-2 right-4 text-4xl"
          onClick={closeModal}
        >
          &#215;
        </button>
        {modal.type === ModalType.LOGIN ? <LoginForm /> : null}
        {modal.type === ModalType.NEW_PROJECT ? <CreateNewProject /> : null}
      </dialog>
    </div>
  );
};

export default Modal;
