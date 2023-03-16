"use client";

import { modalContext } from "@/components/providers/contexts";
import React, { useContext } from "react";
import LoginForm from "../login/form/LoginForm";
import CreateNewProject from "../projects/CreateNewProject";
import { ModalType } from "../providers/types";

const Modal = () => {
  const { modal, setModal } = useContext(modalContext);
  const closeModal = () => {
    setModal({ open: false, type: undefined });
  };
  return (
    <div
      onClick={closeModal}
      className={`fixed top-1/2 left-1/2 h-full w-full  -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        modal.open ? "bg-black/50 " : "pointer-events-none opacity-0"
      }`}
    >
      <dialog
        open
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        className={`absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white transition-all duration-700
        ${modal.open ? "scale-100" : "scale-0"}`}
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
          {modal.type === ModalType.LOGIN ? <LoginForm /> : null}
          {modal.type === ModalType.NEW_PROJECT ? <CreateNewProject /> : null}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
