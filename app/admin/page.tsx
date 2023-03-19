import { LoginForm } from "@/components/forms";
import InnerLayout from "@/components/layouts/InnerLayout";
import LayoutWOSidebar from "@/components/layouts/LayoutWOSidebar";
import AddNewProjectButton from "@/components/projects/AddNewProjectButton";
import { userContext } from "@/components/providers/contexts";
import SearchBar from "@/components/search-bar/SearchBar";
import React, { useContext } from "react";
import Projects from "./Projects";

const Page = async () => {
  return (
    <InnerLayout>
      {/* <section className=""> */}
      {/* Search bar */}
      <header className="sticky top-0">
        <SearchBar />
        <div className="my-3 bg-gradient-to-r from-purple-600 via-violet-800 to-purple-600">
          <div className="flex place-content-between rounded bg-white  bg-opacity-20 py-2 px-6 drop-shadow-lg backdrop-blur-lg ">
            <h1 className=" text-2xl font-semibold tracking-tight">Projects</h1>
            <AddNewProjectButton />
          </div>
        </div>
      </header>
      {/* Project list with search bar + CRUD */}
      {/* @ts-ignore */}
      <Projects />
      {/* </section> */}
    </InnerLayout>
  );
};

export default Page;
