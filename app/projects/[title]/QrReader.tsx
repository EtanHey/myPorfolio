import { outfit } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const QrReader = () => {
  return (
    <div
      className={`${outfit.className} flex h-full max-h-[60vh] w-full max-w-fit flex-col items-center justify-start gap-7 rounded-2xl bg-qrWhite p-4 text-center`}
    >
      <Image
        className="rounded-lg"
        height={280}
        width={280}
        alt="qr code"
        src={"/image-qr-code.png"}
      />
      <div className="flex max-w-[280px] flex-col gap-3">
        <h2 className="text-2xl font-bold text-qrDarkBlue">
          Improve your front-end skills by building projects
        </h2>
        <p className="break-before-auto text-qrLightGray">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrReader;
