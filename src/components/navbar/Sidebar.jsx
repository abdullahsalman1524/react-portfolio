import React from "react";

const Sidebar = () => {
  const sidebarValues = [
    "Home Page",
    "Services",
    "Portfolio",
    "Contact Us",
    "About",
  ];

  return (
    <div className="z-[1] bg-white text-black gap-10">
      {sidebarValues.map((value) => (
        <div key={value} className="font-bold text-xl">
          {value}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
