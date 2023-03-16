"use client";
import { userContext } from "@/app/Providers";
import Image from "next/image";
import React, { useContext } from "react";

const AdminLogout = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="flex flex-row-reverse items-center gap-2">
      <Image
        className="rounded-full"
        src={`${user.imageUrl}`}
        alt={`${user.firstName}'s profile photo`}
        height={30}
        width={30}
      />
      <button onClick={() => setUser({})}>login</button>
    </div>
  );
};

export default AdminLogout;
