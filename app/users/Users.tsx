import SidebarContainer from "@/components/sidebar/SidebarContainer";
import SidebarListContainer from "@/components/sidebar/SidebarListContainer";
import { getUsers } from "@/lib/prisma/users";
import { User } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const { users, error } = await getUsers();
  return (
    <SidebarContainer title="Users">
      <SidebarListContainer>
        {users
          ? users?.map((user: User) => (
              <li className="" key={user.id}>
                <Link href={`/users/${user.id}`}>
                  {user.firstName} {user.lastName}
                </Link>
              </li>
            ))
          : null}
      </SidebarListContainer>
    </SidebarContainer>
  );
};

export default Users;
