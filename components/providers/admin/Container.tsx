"use client";
import React, { useContext } from "react";
import { LoginForm } from "../../actions/forms";
import { userContext } from "../contexts";
import { TransparentWrapper } from "../../wrapper";

function AdminContainer({ children }: { children: React.ReactNode }) {
  const { user } = useContext(userContext);
  return (
    <TransparentWrapper>
      {Object.keys(user).length === 0 ? <LoginForm /> : children}
    </TransparentWrapper>
  );
}

export default AdminContainer;
