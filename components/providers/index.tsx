"use client";

import { User } from "@prisma/client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { userContext, modalContext } from "./contexts";

const Providers = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);
  const [modal, setModal] = useState({ open: false });
  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <modalContext.Provider value={{ modal, setModal }}>
          {children}
        </modalContext.Provider>
      </userContext.Provider>
    </>
  );
};

export default Providers;
