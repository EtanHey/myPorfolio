import NavAuth from "@/components/login/nav-login/NavAuth";
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
          <li>
            <Link href="/users" className="text-sm font-medium uppercase">
              Users
            </Link>
          </li>
          <li>
            <Link href="/reminders" className="text-sm font-medium uppercase">
              Reminders
            </Link>
          </li>
          <li className="">
            <Link href="/projects" className="text-sm font-medium uppercase">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <NavAuth />
    </header>
  );
}

export default Header;
