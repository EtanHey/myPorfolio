import AuthNav from "@/components/authNav/AuthNav";
import NavAuthButton from "@/components/authNav/NavAuthButton";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="h-fit w-full bg-purple-600">
      <nav className="flex flex-row items-center p-4">
        {/* Logo */}
        <Link href="/">
          <span className="whitespace-nowrap text-3xl font-bold">
            EtanHey &#128075;
          </span>
        </Link>
        {/* Navbar: */}
        <ul className="mx-auto flex justify-center gap-2 sm:gap-8">
          <li className="">
            <Link href="/" className=" text-sm font-medium uppercase">
              Home
            </Link>
          </li>
          <li className="">
            <Link href="/users" className="text-sm font-medium uppercase">
              Users
            </Link>
          </li>
          <li className="">
            <Link href="/reminders" className="text-sm font-medium uppercase">
              Reminders
            </Link>
          </li>
        </ul>
        {/* Auth bar: */}
        <AuthNav />
      </nav>
    </header>
  );
}

export default Header;
