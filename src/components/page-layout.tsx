import * as React from "react";
// import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";

type PageLayout = {
  // _site?: Site;
  logo?: string;
  children?: React.ReactNode;
  color: string;
};

const PageLayout = ({ logo, children, color }: PageLayout) => {
  return (
    <div className="min-h-screen">
      <Header logo={logo} color={color} />
      {children}
      {/* <Footer _site={_site}></Footer> */}
    </div>
  );
};

export default PageLayout;
