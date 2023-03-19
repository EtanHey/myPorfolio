import React, { ReactNode } from "react";

const TransparentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-0 min-h-full w-full min-w-fit justify-center rounded-lg border-2 border-stone-400 bg-white/5 drop-shadow-lg backdrop-blur-lg ">
      {children}
    </div>
  );
};

export default TransparentWrapper;
