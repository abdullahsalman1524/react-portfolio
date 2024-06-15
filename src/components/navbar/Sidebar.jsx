import React from "react";
import {motion} from "framer-motion"

const Sidebar = () => {
  const sidebarValues = [
    "Home Page",
    "Services",
    "Portfolio",
    "Contact Us",
    "About",
  ];

  return (
    <div className="z-[1] bg-white text-black flex flex-col">
      {sidebarValues.map((value) => (
        <a href={`#${value}`} key={value} className="font-bold text-xl pt-8">
          {value}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
