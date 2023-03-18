"use client";
import React, { useContext } from "react";
import { LoginForm } from "../forms";
import { userContext } from "../providers/contexts";

function AdminContainer({ children }: { children: React.ReactNode }) {
  const { user } = useContext(userContext);
  return <>{Object.keys(user).length === 0 ? <LoginForm /> : children}</>;
}

export default AdminContainer;
