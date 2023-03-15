import React from "react";
import QrReader from "./QrReader";

function page({ params }: any) {
  return <>{params.title === "qr-reader" ? <QrReader /> : null}</>;
}

export default page;
