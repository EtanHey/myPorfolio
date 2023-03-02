"use client";
import React, { ReactNode } from "react";
import UsersProvider from "./UsersProvider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-full flex-col overflow-y-clip">
      <UsersProvider>{children}</UsersProvider>
    </div>
  );
};

export default Provider;
