import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="h-fit w-full bg-purple-600 py-4">
      <nav className="center">
        <ul className="flex justify-center gap-8">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
