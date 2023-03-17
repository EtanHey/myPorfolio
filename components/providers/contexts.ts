import { User } from "@prisma/client";
import { createContext, Dispatch, SetStateAction } from "react";
import { ModalEntity, ModalType } from "./types";


export const userContext = createContext<{
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}>({ user: {} as User, setUser: () => {} });



export const modalContext = createContext<{
  modal: ModalEntity;
  setModal: Dispatch<
    SetStateAction<{ open: boolean; type?: ModalType }>
  >;
}>({
  modal: { open: false, type: undefined },
  setModal: () => {},
});
