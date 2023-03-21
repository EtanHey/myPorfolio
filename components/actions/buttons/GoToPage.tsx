import Link from "next/link";
import React, { ReactNode } from "react";

const GoToPage = ({
  children,
  title,
  url,
}: {
  children?: ReactNode;
  title: string;
  url: any;
}) => {
  return (
    <Link title={title} target={"/"} href={url}>
      {children ? children : title}
    </Link>
  );
};

export default GoToPage;
