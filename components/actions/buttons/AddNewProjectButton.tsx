"use client";
import React, { useContext } from "react";
import { modalContext } from "../../providers/contexts";
import { ModalType } from "../../providers/types";

const AddNewProjectButton = () => {
  const { setModal } = useContext(modalContext);
  return (
    <button
      onClick={() => setModal({ open: true, type: ModalType.NEW_PROJECT })}
    >
      +
    </button>
  );
};

export default AddNewProjectButton;
