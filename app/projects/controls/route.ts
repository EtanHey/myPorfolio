import { addProject } from "@/lib/prisma/projectsCont";
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

// export async function POST(req: any) {
//   try {
//     const { projectPreview } = await req.json();
//     console.log(projectPreview, "projectPreview");

//     const { projectPreviewInfo, error } = await saveProjectPreview(
//       projectPreview
//     );
//     console.log(projectPreviewInfo, error);

//     if (error) throw new Error(`${error}`);
//     return new Response(JSON.stringify({ projectPreviewInfo }), {
//       status: 200,
//     });
//   } catch (error: any) {
//     return new Response(JSON.stringify({ error: `${error.message}` }), {
//       status: 500,
//     });
//   }
// }
