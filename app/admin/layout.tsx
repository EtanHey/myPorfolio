import AdminContainer from "@/components/providers/admin/Container";
import InnerLayout from "@/components/layouts/InnerLayout";
import LayoutWOSidebar from "@/components/layouts/LayoutWOSidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
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
