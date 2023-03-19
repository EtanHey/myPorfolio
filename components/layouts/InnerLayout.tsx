import React, { ReactNode } from "react";

const InnerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-0 min-h-full w-full overflow-y-scroll scrollbar-none py-6 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-12 lg:px-12">
      {children}
    </div>
  );
};

export default InnerLayout;
