"use client";
import { userContext } from "@/components/providers/contexts";
import React, { useContext } from "react";
import AdminLogin from "./AdminLogin";
import AdminLogout from "./AdminLogout";

const NavAuth = () => {
  const { user } = useContext(userContext);

  return (
    <div className="flex h-12 items-center rounded-xl bg-transparent/30 ">
      {Object.keys(user).length > 0 ? <AdminLogout /> : <AdminLogin />}
    </div>
  );
};

export default NavAuth;
