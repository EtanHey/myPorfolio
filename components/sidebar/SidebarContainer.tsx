import React from "react";

function SidebarContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="scrollbar-none  bg-white/30 bg-stone-400 text-black">
      <div className="sticky  top-0 z-50 flex w-full place-content-between bg-violet-400/30 p-4 drop-shadow-2xl  backdrop-blur-3xl">
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      <div className="scrollbar-none py-4 pl-4 ">{children}</div>
    </section>
  );
}

export default SidebarContainer;
