import LayoutWSidebar from "@/components/layouts/LayoutWSidebar";
import { Metadata } from "next";
import React from "react";
import { Projects } from "./Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects list",
};

const ProjectsLayout = async ({ children }: { children: React.ReactNode }) => {
  return <LayoutWSidebar List={Projects}>{children}</LayoutWSidebar>;
};

export default ProjectsLayout;
