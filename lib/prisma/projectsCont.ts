import { Project } from "@prisma/client";
import prisma from ".";

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany();
    return { projects };
  } catch (error) {
    return { error };
  }
}

export async function addProject(project: any) {
  try {
    const projectFromDB = await prisma.project.create({
      data: project,
    });
    return { project: projectFromDB };
  } catch (error) {
    return { error };
  }
}

export async function saveProjectPreview(projectPreview: any) {
  try {
    console.log(projectPreview, "projectPreview");
  } catch (error) {
    return { error };
  }
}
