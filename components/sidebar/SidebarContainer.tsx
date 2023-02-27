import React from "react";

function SidebarContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="z-10 scrollbar-none h-0 min-h-full w-full overflow-y-auto bg-stone-800/30">
      <h2 className="sticky  top-0 bg-inherit  p-4 text-xl font-medium text-white">
        {title}
      </h2>
      <div className="bg-white/30 py-4 pl-4">{children}</div>
    </section>
  );
}

export default SidebarContainer;
