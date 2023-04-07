import { getProjects } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import Links from "./Links";
const ProjectsLinks = async () => {
  const { projects, error } = await getProjects();
  if (error || !projects) {
    return <div>No projects were found, {error}</div>;
  }
  return (
    <ul className="flex flex-wrap place-items-center items-center justify-center gap-y-2">
      <li>
        <Link href="/projects" className="py-1 text-sm  uppercase">
          Projects
        </Link>
      </li>
      <Links projects={projects} />
    </ul>
  );
};

export default ProjectsLinks;
