"use client";
import { Project } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { BaseSyntheticEvent, useState } from "react";

const AddNewProjectForm = () => {
  const router = useRouter();
  const [projectPreview, setProjectPreview] = useState("");
  const handleAddNewProject = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    console.log(ev);

    try {
      let {
        githubUrl,
        imageUrl,
        projectUrl,
        title,
        description,
        projectIconImageUrl,
        projectPreviewImageUrl,
      } = ev.currentTarget.elements;
      if (githubUrl && imageUrl && projectUrl && title && description) {
        githubUrl = githubUrl.value;
        projectUrl = projectUrl.value;
        title = title.value;
        description = description.value;
        const newProject: Omit<Project, "id"> = {
          githubUrl,
          projectIconImageUrl,
          projectPreviewImageUrl,
          projectUrl,
          title,
          description,
        };
      }
      // const { data } = await axios.post("/projects/controls", {
      //   newProject,
      // });

      // const { reminder, error } = await data;
      // if (error) throw new Error(`${error}`);
      // if (reminder) {
      //   ev.target.reset();
      //   router.refresh();
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(ev) => {
        handleAddNewProject(ev);
      }}
      className="flex flex-col gap-4 rounded-lg border-2 border-stone-400 bg-stone-300/30 p-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="githubUrl">Github URL</label>
        <input
          type="text"
          name="githubUrl"
          id="githubUrl"
          placeholder="https://github.com/..."
        />
        <label htmlFor="projectPreview">Project preview:</label>
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default AddNewProjectForm;
