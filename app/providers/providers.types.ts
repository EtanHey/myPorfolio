import { User } from "@prisma/client";

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
