import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

const UserPage = ({ user }: { user: User }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <section className="m-4 py-4">
      <div className="center select-none">
        <div className="relative h-40 w-40 rounded-full ">
          <Image
            draggable={false}
            src={`${user?.imageUrl}`}
            alt={user?.firstName + user?.lastName}
            width={160}
            height={160}
          />
        </div>
        <h1 className="text-xl font-bold">
          {`${user?.firstName}  ${user?.lastName}`}
        </h1>
        <p className="text-sm text-stone-400">{user?.email}</p>
      </div>
    </section>
  );
};

export default UserPage;
