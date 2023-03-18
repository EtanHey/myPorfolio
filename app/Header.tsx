import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex h-fit w-full flex-row items-center bg-purple-600 px-3 py-4 text-white">
      <nav className="center">
        <ul className="flex items-center justify-center gap-8">
          <li className="">
            <Link href="/" className=" text-sm font-medium uppercase">
              Home
            </Link>
          </li>
          <li className="">
            <Link href="/projects" className="text-sm font-medium uppercase">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
