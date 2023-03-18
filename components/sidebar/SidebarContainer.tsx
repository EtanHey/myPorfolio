import React from "react";

function SidebarContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="scrollbar-none z-10 h-0 min-h-full w-full overflow-y-auto bg-stone-400 text-black">
      <div className="sticky top-0 flex place-content-between bg-inherit p-4">
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      <div className="bg-white/30 py-4 pl-4">{children}</div>
    </section>
  );
}

export default SidebarContainer;
