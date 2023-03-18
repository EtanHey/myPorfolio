import React from "react";

const page = async () => {
  return (
    <div className="h-full">
      <iframe
        src="https://qr-code-component-etanhey.vercel.app/"
        width="100%"
        height="700"
        title="QR Code Component"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default page;
