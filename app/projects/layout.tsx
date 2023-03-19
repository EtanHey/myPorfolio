import InnerSidebarLayout from "@/components/layouts/InnerSidebarLayout";
import { Metadata } from "next";
import React from "react";
import { Projects } from "./Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects list",
};

const ProjectsLayout = async ({ children }: { children: React.ReactNode }) => {
  return <InnerSidebarLayout List={Projects}>{children}</InnerSidebarLayout>;
};

export default ProjectsLayout;
