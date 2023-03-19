"use client";
import { Project } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectsLinks = ({ projects }: { projects: Project[] | undefined }) => {
  const pathName = usePathname();
  const pageName = pathName.split("/")[1];
  const pageId = pathName.split("/")[2];
  return (
    <>
      {projects && pageName === "projects" ? (
        <ul className="flex flex-wrap place-items-center gap-2 text-center">
          <span className="text-3xl">&#10098;</span>
          {projects.map((project) => (
            <Link
              className={`px-3 py-1 ${
                project.id === pageId
                  ? "rounded bg-white/20 drop-shadow-lg backdrop-blur-lg"
                  : ""
              }`}
              key={project.id}
              href={`/projects/${project.id}`}
            >
              {project.title}
            </Link>
          ))}
          <span className="text-3xl">&#10099;</span>
        </ul>
      ) : (
        <Link href="/projects" className="text-sm font-medium uppercase">
          Projects
        </Link>
      )}
    </>
  );
};

export default ProjectsLinks;
