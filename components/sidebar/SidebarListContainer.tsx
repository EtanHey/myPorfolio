import React from "react";

function SidebarListContainer({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-2 text-sm">{children}</ul>;
}

export default SidebarListContainer;
