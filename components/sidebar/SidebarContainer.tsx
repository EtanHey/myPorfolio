import React from "react";

function SidebarContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="scrollbar-none z-10 h-0 min-h-full w-full overflow-y-auto text-black bg-stone-400">
      <h2 className="sticky  top-0 bg-inherit p-4 text-xl font-medium ">
        {title}
      </h2>
      <div className="bg-white/30 py-4 pl-4">{children}</div>
    </section>
  );
}

export default SidebarContainer;
