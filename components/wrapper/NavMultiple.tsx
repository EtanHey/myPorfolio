"use client";
import { usePathname } from "next/navigation";

import React, { ReactNode } from "react";

const NavMultiple = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return <>{pathname === "/projects" ? <>qr</> : children}</>;
};

export default NavMultiple;
