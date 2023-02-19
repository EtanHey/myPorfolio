import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

const UserPage = ({ user }: { user: User }) => {
  return (
    <section className="m-4 py-4">
      <div className="center">
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={
              user?.imageUrl ||
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhitchhikers.yext.com%2Fcommunity%2Ft%2Fhow-do-i-insert-a-fallback-photo-if-my-entity-doesnt-have-a-photo%2F2148&psig=AOvVaw1KdlDEi1a3B9v18L_eYbxi&ust=1676930729751000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKDwpffLov0CFQAAAAAdAAAAABAE"
            }
            alt={user?.firstName + user?.lastName}
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-xl font-bold">
          {user?.firstName + user?.lastName}
        </h1>
        <p className="text-sm text-stone-400">{user?.email}</p>
      </div>
    </section>
  );
};

export default UserPage;
