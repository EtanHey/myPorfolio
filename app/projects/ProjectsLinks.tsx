"use client";
import { Project } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const ProjectsLinks = ({ projects }: { projects: Project[] | undefined }) => {
  const pathName = usePathname();
  const pageName = pathName.split("/")[1];
  const pageId = pathName.split("/")[2];
  useEffect(() => {
    console.log(pageName);
    console.log(projects);
  }, [projects, pageName]);
  return projects ? (
    <ul className="flex flex-wrap place-items-center items-center justify-center gap-y-2">
      <li>
        <Link href="/projects" className="py-1 text-sm  uppercase">
          Projects{pageName === "projects" ? <>:</> : null}
        </Link>
      </li>
      {pageName === "projects" ? (
        <li className="flex place-items-center gap-y-2 text-center">
          <span className="text-2xl sm:text-4xl">&#10098;</span>
          <ul className="flex">
            {projects.map((project, index) => (
              <li className="flex flex-wrap" key={project.id}>
                <Link
                  className={`px-3 py-1 text-sm  uppercase transition-all duration-300 ${
                    project.id === pageId
                      ? "rounded bg-white/20 drop-shadow-lg backdrop-blur-lg"
                      : ""
                  }`}
                  href={`/projects/${project.id}`}
                >
                  {project.title}
                  {index !== projects.length - 1 && <>,</>}
                </Link>
              </li>
            ))}
          </ul>
          <span className="text-2xl sm:text-4xl">&#10099; </span>
        </li>
      ) : (
        <></>
      )}
    </ul>
  ) : (
    <></>
  );
};

export default ProjectsLinks;
