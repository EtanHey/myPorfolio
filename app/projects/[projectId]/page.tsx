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
  const { title, description, githubUrl, id, projectUrl } = project;
  return (
    <>
      <div className="flex flex-row justify-between gap-48">
        <h1 className=" w-fit text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="grow">{description}</p>
      </div>
      <iframe
        src={project.projectUrl}
        width="100%"
        height="100%"
        loading="eager"
        title="QR Code Component"
        allowFullScreen={true}
      />
    </>
  );
}

export default page;
