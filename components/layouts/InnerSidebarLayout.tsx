import React from "react";

function InnerSidebarLayout({
  children,
  List,
}: {
  children: React.ReactNode;
  List: () => Promise<JSX.Element>;
}) {
  return (
    <div className="scrollbar-none h-0 min-h-full w-full overflow-y-scroll ">
      <aside className="h-0 min-h-full overflow-y-scroll">
        {/* @ts-ignore */}
        <List />
      </aside>
      {children}
    </div>
  );
}

export default InnerSidebarLayout;
