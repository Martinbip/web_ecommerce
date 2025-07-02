import React, { Suspense } from "react";
import Navbar from "./navbar";
import Loading from "../loading";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
