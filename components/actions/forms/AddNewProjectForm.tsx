"use client";
import { Project } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { BaseSyntheticEvent, useContext } from "react";
import { modalContext } from "../../providers/contexts";
import { LabeledTextArea, LabeledTextInput } from "./inputs";

const AddNewProjectForm = () => {
  const router = useRouter();
  const { setModal } = useContext(modalContext);
  const handleAddNewProject = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    try {
      let { githubUrl, projectUrl, title, description } =
        ev.currentTarget.elements;
      if (!githubUrl || !projectUrl || !title || !description)
        throw new Error("All fields are required");
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
      const {
        data: { project, error },
      } = await axios.post("/projects/controls", {
        newProject,
      });
      if (error) throw new Error(error);
      if (project) {
        ev.target.reset();
        setModal({ open: false, type: undefined });
        router.refresh();
      }
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
        <LabeledTextInput
          label="Project Title"
          name="title"
          placeholder="My Awesome Project"
        />
        <LabeledTextInput
          label="Project live URL"
          name="projectUrl"
          placeholder="https://vercel.com/etanhey/..."
        />
        <LabeledTextInput
          label="Github repo URL"
          name="githubUrl"
          placeholder="https://github.com/..."
        />
        <LabeledTextArea
          label="Description"
          name="description"
          placeholder="A short description of your project..."
        />
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default AddNewProjectForm;
