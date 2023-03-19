import { addProject, getProjects } from "@/lib/prisma/projectsCont";
// import { saveProjectPreview } from "@/lib/prisma/projectsCont";

export async function POST(req: any) {
  try {
    const { newProject } = await req.json();
    const { project, error } = await addProject(newProject);
    if (error) throw new Error(`${error}`);
    return new Response(JSON.stringify({ project }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}

export async function GET(req: any) {
  try {
    const { projects, error } = await getProjects();
    if (error) throw new Error(`${error}`);
    return new Response(JSON.stringify({ projects }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}
