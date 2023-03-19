import InnerLayout from "@/components/layouts/InnerLayout";
import InnerSidebarLayout from "@/components/layouts/InnerSidebarLayout";
import { Metadata } from "next";
import React from "react";
import { Projects } from "./Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects list",
};

const ProjectsLayout = async ({ children }: { children: React.ReactNode }) => {
  return <InnerLayout>{children}</InnerLayout>;
};

export default ProjectsLayout;
