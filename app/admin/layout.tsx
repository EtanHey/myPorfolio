import AdminContainer from "@/components/admin/Container";
import LayoutWOSidebar from "@/components/layouts/LayoutWOSidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin dashboard",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWOSidebar className="bg-gradient-to-t from-indigo-300 to-purple-600">
      <AdminContainer>{children}</AdminContainer>
    </LayoutWOSidebar>
  );
};

export default AdminLayout;
