import React from "react";

function SidebarListContainer({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-2 text-sm  text-white">{children}</ul>;
}

export default SidebarListContainer;
