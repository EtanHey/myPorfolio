import React from "react";

function LayoutWSidebar({
  children,
  List,
}: {
  children: React.ReactNode;
  List: () => Promise<JSX.Element>;
}) {
  return (
    <section className="flex h-full">
      <aside className="w-1/4">
        {/* @ts-ignore */}
        <List />
      </aside>
      <main>{children}</main>
    </section>
  );
}

export default LayoutWSidebar;
