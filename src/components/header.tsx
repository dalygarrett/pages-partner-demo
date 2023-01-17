import * as React from "react";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/index",
  },
  {
    label: "About Us",
    url: "/aboutus",
  },
];

const Header = (props:any) => {
  const { logo, color } = props
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));


  return (
    <>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <img
            src={logo.image.url}
            width="200"
            height="200"
          ></img>
          <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
          <div className="text-black w-auto mt-6 text-center shadow-md px-16 py-2 border-2 border-black rounded-xl bg-gray-200 hover:bg-gray-300 ">
                    <Cta
                      buttonText="Request a Quote"
                      url="#"
                      style="primary-cta"
                      backgroundColor={""}
                    ></Cta>
                    </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
