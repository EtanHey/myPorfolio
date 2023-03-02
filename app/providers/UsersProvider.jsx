"use client";
import React, { createContext, useEffect, useState } from "react";
import { User } from "@prisma/client";
import axios from "axios";
export const UserContext = createContext();
const UsersProvider = ({ children }) => {
  const getCookies = async () => {
    const savedUser = await axios.get("/control", {
      params: { token: "portfolioUser" },
    });
    console.log(savedUser);
    const { data } = await savedUser;
    return data;
  };
  useEffect(() => {
    const savedUser = getCookies();
    console.log(savedUser);
  }, []);
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsersProvider;
