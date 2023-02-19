import { getUsers } from "@/lib/prisma/users";
import { User } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const { users, error } = await getUsers();
  return (
    <section className="fixed h-full w-1/4 bg-stone-800">
      <div className="center py-4">
        <h2 className="mb-4 text-xl font-medium text-white">Users</h2>
        <ul className="flex flex-col text-sm text-white">
          {users
            ? users?.map((user: User) => (
                <li key={user.id}>
                  <Link href={`/users/${user.id}`}>
                    {user.firstName} {user.lastName}
                  </Link>
                </li>
              ))
            : null}
          {error ? <li>{`${error}`}</li> : null}
        </ul>
      </div>
    </section>
  );
};

export default Users;
