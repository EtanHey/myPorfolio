import Link from "next/link";
import React from "react";
import ProjectsLinks from "./projects/ProjectsLinks";

function Header() {
  return (
    <header className="flex h-fit w-full flex-row items-center bg-[#6B329F] px-3 py-4 font-bold text-white">
      <nav className="center">
        <ul className="flex flex-wrap items-center justify-center gap-y-2">
          <li>
            <Link href="/" className="px-3  py-1 text-sm uppercase">
              Home
            </Link>
          </li>
          <li>
            <ProjectsLinks />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
