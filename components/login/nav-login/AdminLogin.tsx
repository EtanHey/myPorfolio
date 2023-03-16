"use client";

import { modalContext } from "@/components/providers/contexts";
import { ModalType } from "@/components/providers/types";
import React, { useContext } from "react";

const AdminLogin = () => {
  const { setModal } = useContext(modalContext);
  return (
    <button
      onClick={() => setModal({ open: true, type: ModalType.LOGIN })}
      className="px-4 py-2"
    >
      Login
    </button>
  );
};

export default AdminLogin;
