import Logger from "@/components/Logger";
import AddNewProjectButton from "@/components/projects/AddNewProjectButton";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import SidebarListContainer from "@/components/sidebar/SidebarListContainer";
import { getProjects } from "@/lib/prisma/projectsCont";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export const Projects = async () => {
  const { projects, error } = await getProjects();
  return (
    <SidebarContainer title="Projects">
      <SidebarListContainer>
        {projects
          ? projects?.map((project: Project) => (
              <li className="" key={project.id}>
                <Link
                  className="text-center"
                  href={`/projects/${project.id}`}
                >
                  <iframe
                    src={project.projectUrl}
                    width="154"
                    height="110"
                    loading="eager"
                    title={project.title}
                    allowFullScreen={true}
                  />
                  <h1>{project.title}</h1>
                </Link>
              </li>
            ))
          : null}
      </SidebarListContainer>
    </SidebarContainer>
  );
};
