import { Providers, LayoutWOSidebar, Modal } from "@/components";
import Footer from "./Footer";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/react";
import "./output.css";
import { getProjects } from "@/lib/prisma";
export const metadata = {
  title: "Etan Heyman`n Portfolio",
  description: "Generated by create next app",
  openGraph: {
    title: "Etan Heyman`n Portfolio",
    images: [{ url: "/og-image.png" }],
  },
};

export default async function RootLayout(any: any) {
  const { children } = any;
  return (
    <html lang="en">
      <body className="scrollbar-none h-full max-h-screen overflow-hidden bg-black">
        <Providers>
          {/* <MouseOverlay> */}
          <Header />
          <LayoutWOSidebar> {children}</LayoutWOSidebar>
          <Modal />
          <Footer />
          {/* </MouseOverlay> */}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
