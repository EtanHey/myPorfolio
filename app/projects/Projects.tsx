import SidebarContainer from "@/components/sidebar/SidebarContainer";
import SidebarListContainer from "@/components/sidebar/SidebarListContainer";
import { getProjects } from "@/lib/prisma/projectsCont";
import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";

export const Projects = async () => {
  const { projects, error } = await getProjects();
  return (
    <SidebarContainer title="Projects">
      <SidebarListContainer>
        {projects
          ? projects?.map((project: Project) => (
              <li
                className="max-h-fit"
                key={project.id}
              >
                <Link
                  className="relative  flex h-96 w-full items-center "
                  href={`/projects/${project.id}`}
                >
                  <iframe
                    src={project.projectUrl}
                    width="800"
                    height="500"
                    loading="eager"
                    title={project.title}
                    allowFullScreen={true}
                    style={{ WebkitTransform: "scale(0.5)" }}
                    className="absolute top-0 h-96"
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
