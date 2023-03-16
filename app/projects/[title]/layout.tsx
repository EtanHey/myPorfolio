import { Project } from "@prisma/client";
import React from "react";
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ title: Project["title"] }>;
}) => {
  const { title } = await params;
  return { title: title };
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`flex  h-full w-full items-center justify-center bg-qrLightGray`}
    >
      {children}
    </div>
  );
};

export default layout;
