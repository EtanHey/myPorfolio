import { getProjectById } from "@/lib/prisma";
import { Project } from "@prisma/client";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ title: Project["title"] }>;
}) => {
  const { title } = await params;
  return { title: title };
};
const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: Project["id"] }>;
}) => {
  const { id } = await params;
  const { project, error } = await getProjectById(id);
  if (error) return <>{error.message}</>;
  if (!project) return <div>Project not found</div>;
  const { title, description, githubUrl, projectUrl } = project;

  return (
    <div
      id={id}
      className={`flex aspect-square h-0 min-h-full w-full grow flex-col  justify-center bg-qrLightGray`}
    >
      <div className="md: flex flex-row justify-between gap-4 sm:gap-12 md:gap-36 lg:gap-48 xl:gap-60">
        <h1 className="w-fit text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="grow">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default layout;
