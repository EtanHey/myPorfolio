"use client";

import { User } from "@prisma/client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
export const userContext = createContext<{
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}>({ user: {} as User, setUser: () => {} });
export const modalContext = createContext<{
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}>({
  modal: false,
  setModal: () => {},
});
const Providers = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);
  const [modal, setModal] = useState(false);
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
