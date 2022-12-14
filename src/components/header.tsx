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
          <div className="space-x-5">
            <Cta buttonText="Get a Quote!" url="#" backgroundColor={color}></Cta>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
