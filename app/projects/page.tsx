import InnerLayout from "@/components/layouts/InnerLayout";
import React from "react";

const page = async () => {
  return (
    // <div className="h-full">
    <InnerLayout>
      <h1 className="text-xl font-bold leading-loose">
        Select a project above ^
      </h1>
    </InnerLayout>
    // </div>
  );
};

export default page;
