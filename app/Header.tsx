import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-stone-100 py-12">
      <nav className="center">
        <ul className="flex justify-center gap-8">
          <li>
            <Link
              href="/"
              className="text-sm font-medium uppercase text-stone-500"
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
