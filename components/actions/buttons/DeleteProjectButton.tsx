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
      title={"Delete Project"}
      about={"Delete Project"}
      className="rounded-lg border-2  border-violet-500 bg-white/5 py-1 px-3 font-bold uppercase drop-shadow-lg backdrop-blur-lg transition-colors duration-150 ease-linear hover:bg-white/20 hover:fill-red-500 hover:text-white"
      onClick={() => {
        handleDeleteProject();
      }}
    >
      {loading ? "loading..." : <TrashIcon width={22.5} height={25} />}
    </button>
  );
};

export default DeleteProjectButton;
