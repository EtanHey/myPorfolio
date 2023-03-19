import React from "react";

function SidebarListContainer({ children }: { children: React.ReactNode }) {
  return (
    <ul className="scrollbar-none  gap-2 text-sm h-min max-h-full overflow-y-scroll w-full">{children}</ul>
  );
}

export default SidebarListContainer;
