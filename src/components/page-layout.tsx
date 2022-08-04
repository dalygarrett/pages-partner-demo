import * as React from "react";
// import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";

type PageLayout = {
  // _site?: Site;
  logo?: string;
  children?: React.ReactNode;
};

const PageLayout = ({logo, children}:PageLayout) => {
  console.log(logo);

  return (
    <div className="min-h-screen">
      <Header logo={logo}/>
        {children}
      {/* <Footer _site={_site}></Footer> */}
    </div>
  );
};

export default PageLayout;
