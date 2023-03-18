import React from "react";

const LayoutWOSidebar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <section
      className={`flex h-full justify-center py-3 px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      <main
        className={`h-0 min-h-full min-w-fit max-w-3xl rounded bg-white bg-opacity-20 py-6 px-4 drop-shadow-lg backdrop-blur-lg sm:max-w-3xl sm:py-6 sm:px-6 md:max-w-7xl md:py-8 md:px-8 lg:max-w-full lg:py-12 lg:px-12 `}
      >
        {children}
      </main>
    </section>
  );
};

export default LayoutWOSidebar;
