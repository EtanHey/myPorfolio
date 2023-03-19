import Logger from "@/components/Logger";
import AddNewProjectButton from "@/components/projects/AddNewProjectButton";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import SidebarListContainer from "@/components/sidebar/SidebarListContainer";
import { TransparentWrapper } from "@/components/wrapper";
import { getProjects } from "@/lib/prisma/projectsCont";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Projects = async () => {
  const { projects, error } = await getProjects();
  return (
    <ul className="flex flex-col  gap-2 px-2 py-4">
      {projects
        ? projects?.map((project: Project) => (
            <li key={project.id} className="flex w-full  items-center">
              <h1>{project.title}</h1>
            </li>
          ))
        : error
        ? "No projects found"
        : null}
    </ul>
  );
};
export default Projects;
