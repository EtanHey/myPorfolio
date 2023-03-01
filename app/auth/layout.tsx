import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative top-1/2 left-1/2 h-0 min-h-full w-full -translate-y-1/2 -translate-x-1/2 overflow-y-auto pt-4">
      {/* Location */}
      <div className="mx-4 md:mx-48 xl:mx-96">
        {/* Container */}
        <div className="rounded-lg border-2 border-purple-300/70 bg-purple-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
