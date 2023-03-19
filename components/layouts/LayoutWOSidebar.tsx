import React from "react";

const LayoutWOSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full overflow-y-auto border-white/20 bg-gradient-to-t from-indigo-300 to-purple-600 p-0 sm:py-4 sm:px-6 md:px-8 lg:px-24 xl:px-72 2xl:px-96">
      <section className=" scrollbar-none h-0 min-h-full min-w-fit max-w-3xl overflow-y-clip rounded border-56 border-white/10 bg-white bg-opacity-20 drop-shadow-lg backdrop-blur-lg sm:max-w-3xl md:max-w-7xl lg:max-w-full">
        {children}
      </section>
    </main>
  );
};

export default LayoutWOSidebar;
