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
        <li className="flex place-items-center">
          <Link href="/projects" className="py-1 text-sm font-medium uppercase">
            Projects
          </Link>
          {pageName === "projects" ? (
            <ul className="flex flex-wrap  place-items-center gap-2 text-center">
              :<span className="text-2xl">&#10098;</span>
              {projects.map((project) => (
                <Link
                  className={`px-3 py-1 text-sm font-medium uppercase ${
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
              <span className="text-2xl">&#10099;</span>
            </ul>
          ) : null}
        </li>
      ) : null}
    </>
  );
};

export default ProjectsLinks;
