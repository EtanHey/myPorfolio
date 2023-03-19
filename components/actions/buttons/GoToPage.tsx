import Link from "next/link";
import React, { ReactNode } from "react";

const GoToPage = ({
  children,
  title,
  url,
}: {
  children?: ReactNode;
  title: string;
  url: string;
}) => {
  return (
    <Link target={"/"} href={url}>
      {children ? children : title}
    </Link>
  );
};

export default GoToPage;
