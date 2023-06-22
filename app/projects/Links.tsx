"use client";
import { Project } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = ({ projects }: { projects: Project[] | undefined }) => {
  const pathName = usePathname();
  const pageName = pathName.split("/")[1];
  const pageId = pathName.split("/")[2];
  return projects ? (
    pageName === "projects" ? (
      <>
        :
        <li className="flex place-items-center gap-y-2 text-center">
          <span className="text-2xl sm:text-4xl">&#10098;</span>
          <ul className="flex">
          <li className="flex flex-wrap" key="cameraAnimation">
              <Link
                className={`px-3 py-1 text-sm  uppercase transition-all duration-300 ${
                  "cameraAnimation" === pageId
                    ? "rounded bg-white/20 drop-shadow-lg backdrop-blur-lg"
                    : ""
                }`}
                href="/projects/cameraAnimation"
              >
                Camera Animation,
              </Link>
            </li>
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
      </>
    ) : (
      <></>
    )
  ) : (
    <></>
  );
};

export default Links;
