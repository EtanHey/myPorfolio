"use client";
import { modalContext, userContext } from "@/app/Providers";
import React, { useContext } from "react";

const AdminLogin = () => {
  const { setModal } = useContext(modalContext);
  return (
    <button
      onClick={() => setModal(true)}
      className="px-4 py-2"
    >
      Login
    </button>
  );
};

export default AdminLogin;
