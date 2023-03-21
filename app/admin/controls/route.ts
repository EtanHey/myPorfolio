import { deleteProject, getProjects } from "@/lib/prisma";
export async function POST(req: any) {
  try {
    const { id } = await req.json();
    const { deletedProject, error } = await deleteProject(id);
    if (error) throw new Error(`${error}`);
    return new Response(JSON.stringify({ deletedProject }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}
export async function GET() {
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
