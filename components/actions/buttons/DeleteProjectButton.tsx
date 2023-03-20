"use client";
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
      className="font-bold rounded-lg border-2 border-violet-500 bg-white/5 py-1 px-3 uppercase drop-shadow-lg backdrop-blur-lg transition-colors duration-300 ease-linear hover:bg-violet-500 hover:text-white"
      onClick={() => {
        handleDeleteProject();
      }}
    >
      {loading ? "loading..." : "delete"}
    </button>
  );
};

export default DeleteProjectButton;
