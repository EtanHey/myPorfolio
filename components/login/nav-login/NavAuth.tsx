"use client";
import { userContext } from "@/app/Providers";
import React, { useContext, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminLogout from "./AdminLogout";

const NavAuth = () => {
  const { user } = useContext(userContext);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="bg-transparent/30 px-2 py-1 rounded-xl ">{Object.keys(user).length > 0 ? <AdminLogout /> : <AdminLogin />}</div>
  );
};

export default NavAuth;
