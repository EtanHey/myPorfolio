import {InnerLayout, AdminContainer} from "@/components";
import React from "react";

export const metadata = {
  title: "Admin",
  description: "Admin dashboard",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <InnerLayout>
      <AdminContainer>{children}</AdminContainer>
    </InnerLayout>
  );
};

export default AdminLayout;
