import * as React from "react";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Services",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
  {
    label: "Reviews",
    url: "/",
  }
];

const Header = () => {
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
            src="https://www.hinkleroofing.com/wp-content/uploads/2019/07/HinkleRoofing-logo.png"
            width="200"
            height="200"
          ></img>
          <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
          <div className="space-x-5">
            <Cta buttonText="Get a Quote!" url="#" style="primary-cta"></Cta>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
