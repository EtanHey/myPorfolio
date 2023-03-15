import SidebarContainer from "@/components/sidebar/SidebarContainer";
import SidebarListContainer from "@/components/sidebar/SidebarListContainer";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = async () => {
  const { projects } = await (async () => {
    const projects: Project[] = [
      { id: "1", title: "qr-reader", imageUrl: "/QRReader.png" },
    ];
    return { projects };
  })();
  return (
    <SidebarContainer title="Projects">
      <SidebarListContainer>
        {projects
          ? projects?.map((project: Project) => (
              <li className="" key={project.title}>
                <Link
                  className="text-center "
                  href={`/projects/${project.title}`}
                >
                  <Image
                    className="mx-auto"
                    width={200}
                    height={200}
                    alt={project.title}
                    src={`${project.imageUrl}`}
                  />
                  <h1>{project.title}</h1>
                </Link>
              </li>
            ))
          : null}
      </SidebarListContainer>
    </SidebarContainer>
  );
};

export default Projects;
