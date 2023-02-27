import React from "react";

function SidebarContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="h-0 min-h-full w-full overflow-y-auto bg-stone-800">
      <h2 className="sticky  top-0 bg-inherit  p-4 text-xl font-medium text-white">
        {title}
      </h2>
      <div className="center py-4 bg-white/50 ">{children}</div>
    </section>
  );
}

export default SidebarContainer;
