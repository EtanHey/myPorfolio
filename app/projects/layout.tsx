import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects list",
};

const ProjectsLayout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProjectsLayout;
