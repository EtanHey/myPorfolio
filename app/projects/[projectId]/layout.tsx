import GoToPage from "@/components/actions/buttons/GoToPage";
import GitHubIcon from "@/components/icons/GitHubIcon";
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
      <header className="flex flex-col px-4 pt-2 sm:px-12 md:px-36 lg:px-48 xl:px-60">
        <div className="flex justify-between">
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
      {children}
    </div>
  );
};

export default layout;
