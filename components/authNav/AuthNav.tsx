"use client";
import { UserContextType } from "@/app/providers";
import { UserContext } from "@/app/providers/UsersProvider";
import React, { use, useEffect } from "react";
import NavAuthButton from "./NavAuthButton";

const AuthNav = () => {
  const { user, setUser } = use<UserContextType>(UserContext);
  
  if (user) return null;
  return (
    <ul className="flex flex-col gap-4 sm:flex-row">
      <li>
        <NavAuthButton href="/auth/login" text="Login" fill={true} />
      </li>
      <li>
        <NavAuthButton href="/auth/register" text="Register" />
      </li>
    </ul>
  );
};

export default AuthNav;
