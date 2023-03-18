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
      <main className="h-full w-full max-h-full bg-gradient-to-t from-indigo-300 to-purple-600">{children}</main>
    </section>
  );
}

export default LayoutWSidebar;
