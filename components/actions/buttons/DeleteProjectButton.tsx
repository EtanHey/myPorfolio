"use client";

import { TrashIcon } from "@/components/icons";
import { Project } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteProjectButton = ({ id }: { id: Project["id"] }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleDeleteProject = async () => {
    try {
      setLoading(true);
      const {
        data: { deletedProject, error },
      } = await axios.post(`/admin/controls`, { id: id });
      if (error) throw new Error(error);
      setLoading(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={() => {
        handleDeleteProject();
      }}
    >
      {loading ? "loading..." : <TrashIcon />}
    </button>
  );
};

export default DeleteProjectButton;
