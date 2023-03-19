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
  const { projectUrl } = project;
  return (

      <iframe
        src={projectUrl}
        width="100%"
        height="100%"
        loading="eager"
        title="QR Code Component"
        allowFullScreen={true}
        className=""
      />

  );
}

export default page;
