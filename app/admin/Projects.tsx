import DeleteProjectButton from "@/components/actions/buttons/DeleteProjectButton";
import GoToPage from "@/components/actions/buttons/GoToPage";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { getProjects } from "@/lib/prisma/projectsCont";
import { Project } from "@prisma/client";
import React from "react";

const Projects = async () => {
  const { projects, error } = await getProjects();
  return (
    <ul className="flex flex-col  gap-2 px-2 py-4">
      {projects
        ? projects?.map((project: Project) => (
            <li
              key={project.id}
              className="flex w-full place-content-between items-center"
            >
              <GoToPage title={project.title} url={project.projectUrl} />
              <GoToPage
                title={`${project.title}'s github repo`}
                url={project.githubUrl}
              >
                <GitHubIcon height={50} width={50} />
              </GoToPage>
              <DeleteProjectButton id={project.id} />
            </li>
          ))
        : error
        ? "No projects found"
        : null}
    </ul>
  );
};
export default Projects;
