import GoToPage from "@/components/actions/buttons/GoToPage";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { getProjectById } from "@/lib/prisma";
import { Project } from "@prisma/client";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: Project["id"] }>;
}) => {
  const { projectId } = await params;
  const { project } = await getProjectById(projectId);
  if (!project) {
    return { title: "Error - Project not found" };
  }
  return { title: project.title };
};

async function page({
  params,
}: {
  params: Promise<{ projectId: Project["id"] }>;
}) {
  const { projectId } = await params;
  const { project } = await getProjectById(projectId);
  if (!project) return <div>Project not found</div>;
  const { description, title, projectUrl, githubUrl } = project;
  return (
    <>
      <header className="flex flex-col px-4 pt-2 sm:px-12 md:px-36 lg:px-48 xl:px-60">
        <div className="flex items-center justify-between">
          <GoToPage title={title} url={projectUrl}>
            <h1 className="w-fit text-2xl font-semibold tracking-tight transition-colors duration-300 hover:text-violet-500/50">
              {title}
            </h1>
          </GoToPage>
          <GoToPage title={title} url={githubUrl}>
            <GitHubIcon height={49} width={48} />
          </GoToPage>
        </div>
        <p>{description}</p>
      </header>
      <iframe
        src={projectUrl}
        width="100%"
        height="100%"
        loading="eager"
        title="QR Code Component"
        allowFullScreen={true}
        className=""
      />
    </>
  );
}

export default page;
