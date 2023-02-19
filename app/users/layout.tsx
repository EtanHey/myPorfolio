import React from "react";
import Users from "./Users";


const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <aside className="w-1/4">
        {/* @ts-ignore */}
        <Users />
      </aside>
      <main>{children}</main>
    </section>
  );
};

export default UsersLayout;
