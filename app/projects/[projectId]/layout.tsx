import { Project } from "@prisma/client";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ title: Project["title"] }>;
}) => {
  const { title } = await params;
  return { title: title };
};
const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`flex aspect-square h-0 min-h-full w-full grow flex-col  justify-center bg-qrLightGray`}
    >
      {children}
    </div>
  );
};

export default layout;
