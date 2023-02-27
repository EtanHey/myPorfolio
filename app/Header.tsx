import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full h-fit py-4 bg-blue-500">
      <nav className="center">
        <ul className="flex justify-center gap-8">
          <li className="">
            <Link
              href="/"
              className=" text-sm font-medium uppercase text-stone-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="text-sm font-medium uppercase text-stone-500"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/reminders"
              className="text-sm font-medium uppercase text-stone-500"
            >
              Reminders
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
