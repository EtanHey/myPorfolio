import DeleteProjectButton from "@/components/actions/buttons/DeleteProjectButton";
import { TrashIcon } from "@/components/icons";
import { getProjects } from "@/lib/prisma/projectsCont";
import { Project } from "@prisma/client";
import React from "react";

const Projects = async () => {
  const { projects, error } = await getProjects();
  return (
    <ul className="flex flex-col  gap-2 px-2 py-4">
      {projects
        ? projects?.map((project: Project) => (
            <li key={project.id} className="flex w-full  items-center">
              <h1>{project.title}</h1>
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
