import React from "react";

const LayoutWOSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full overflow-y-auto border-white/20 bg-gradient-to-t from-indigo-300 to-[#6B329F] p-0 sm:py-2 sm:px-3 md:px-4 lg:px-12 xl:px-56 2xl:px-72">
      <section className=" scrollbar-none h-0 min-h-full max-w-3xl overflow-y-clip rounded  border-white/10 bg-white bg-opacity-20 drop-shadow-lg backdrop-blur-lg sm:max-w-3xl md:max-w-7xl lg:max-w-full">
        {children}
      </section>
    </main>
  );
};

export default LayoutWOSidebar;
