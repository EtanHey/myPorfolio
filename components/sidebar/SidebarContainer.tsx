import React from "react";

function SidebarContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="h-full w-full bg-stone-800">
      <div className="center py-4">
        <h2 className="mb-4 text-xl font-medium text-white">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default SidebarContainer;
