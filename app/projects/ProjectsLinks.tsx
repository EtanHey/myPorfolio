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
      {projects ? (
        <li className="flex flex-wrap place-items-center items-center justify-center gap-y-2">
          <Link href="/projects" className="py-1 text-sm font-medium uppercase">
            Projects:
          </Link>
          {pageName === "projects" ? (
            <ul className="flex place-items-center gap-y-2 text-center">
              <span className="text-2xl sm:text-4xl">&#10098;</span>
              {projects.map((project, index) => (
                <span className="flex flex-wrap" key={project.id}>
                  <Link
                    className={`px-3 py-1 text-sm font-medium uppercase transition-all duration-300 ${
                      project.id === pageId
                        ? "rounded bg-white/20 drop-shadow-lg backdrop-blur-lg"
                        : ""
                    }`}
                    href={`/projects/${project.id}`}
                  >
                    {project.title}
                    {index !== projects.length - 1 && <>,</>}
                  </Link>
                </span>
              ))}
              <span className="text-2xl sm:text-4xl">&#10099; </span>
            </ul>
          ) : null}
        </li>
      ) : null}
    </>
  );
};

export default ProjectsLinks;
