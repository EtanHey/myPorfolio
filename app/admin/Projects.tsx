import Logger from "@/components/Logger";
import AddNewProjectButton from "@/components/projects/AddNewProjectButton";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import SidebarListContainer from "@/components/sidebar/SidebarListContainer";
import { getProjects } from "@/lib/prisma/projectsCont";
import React, { useContext } from "react";

const Projects = async () => {
  const { projects, error } = await getProjects();
  return <>projects</>;
  /* {projects
          ? projects?.map((project: Project) => (
              <li className="" key={project.title}>
                <Link
                  className="text-center"
                  href={`/projects/${project.title}`}
                >
                  <Image
                    className="mx-auto"
                    width={200}
                    height={200}
                    alt={project.title}
                    src={`${project.projectIconImageUrl}`}
                  />
                  <h1>{project.title}</h1>
                </Link>
              </li>
            ))
          : null} */
};
export default Projects;
