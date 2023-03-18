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
      let { githubUrl, imageUrl, projectUrl, title, description } =
        ev.currentTarget.elements;
      if (githubUrl && imageUrl && projectUrl && title && description) {
        githubUrl = githubUrl.value;
        projectUrl = projectUrl.value;
        title = title.value;
        description = description.value;
        const newProject: Omit<Project, "id"> = {
          githubUrl,
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
      className="flex h-full w-fit flex-col gap-4 p-4 transition-all"
    >
      <div className="flex w-fit flex-col gap-2">
        <label htmlFor="githubUrl">Github URL</label>
        <input
          type="text"
          name="githubUrl"
          id="githubUrl"
          placeholder="https://github.com/..."
          className="w-96"
        />
        <label htmlFor="projectUrl">Project URL</label>
        <input
          type="text"
          name="projectUrl"
          id="projectUrl"
          placeholder="https://vercel.com/etanhey/..."
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="My Awesome Project"
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="A short description of your project..."
        />
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default AddNewProjectForm;
