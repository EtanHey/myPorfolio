import { Project } from "@prisma/client";
import localProjects from "./built_in_projects.json";
import prisma from ".";

export async function getProjects(): Promise<{
  projects?: Project[];
  error?: any;
}> {
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

export async function getProjectById(
  id: Project["id"]
): Promise<{ project?: Project; error?: any }> {
  try {
    const localProject = localProjects.find(
      (localProject) => id === localProject.id
    );
    if (localProject) return { project: localProject };
    
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (project === null) throw new Error("Project not found");
    console.log(project);
    return { project };
  } catch (error: any) {
    return { error };
  }
}
export async function deleteProject(id: Project["id"]): Promise<any> {
  try {
    const deletedProject = await prisma.project.delete({
      where: { id },
    });
    return { deletedProject };
  } catch (error) {
    return { error };
  }
}
