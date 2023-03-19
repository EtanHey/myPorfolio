import { getProjects } from "@/lib/prisma";
import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";
import ProjectsLinks from "./projects/ProjectsLinks";

function Header({ projects }: { projects: Project[] }) {
  return (
    <header className="flex  h-fit w-full flex-row items-center bg-purple-600 px-3 py-4 text-white">
      <nav className="center">
        <ul className="flex flex-wrap items-center justify-center gap-8">
          <li>
            <Link href="/" className=" text-sm font-medium uppercase">
              Home
            </Link>
          </li>
          <li>
            <ProjectsLinks projects={projects} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
