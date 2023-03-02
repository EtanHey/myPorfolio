import Link from "next/link";
import React from "react";

const NavAuthButton = ({
  href,
  text,
  fill,
}: {
  href: string;
  text: string;
  fill?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`border-2 border-gray-300 text-sm font-medium uppercase px-2 py-1 ${
        fill ? "bg-gray-300" : ""
      } hover:bg-gray-300/75`}
    >
      {text}
    </Link>
  );
};

export default NavAuthButton;
