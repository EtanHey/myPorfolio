"use client";
import { userContext } from "@/components/providers/contexts";
import React, { useContext, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminLogout from "./AdminLogout";

const NavAuth = () => {
  const { user } = useContext(userContext);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="bg-transparent/30 rounded-xl items-center flex h-12 ">{Object.keys(user).length > 0 ? <AdminLogout /> : <AdminLogin />}</div>
  );
};

export default NavAuth;
