import React from "react";
import paralax from '../../images/mountains.png'
import sun from '../../images/sun.png'

const Paralax = () => {
  return (
    <div className="relative h-[100vh] bg-gradient-to-b from-[#111132] to-[#505064]">
      <img src={paralax} className="h-[100vh] object-cover w-full" alt="" />
      <img src={sun} className="absolute -top-[10%] h-[100vh] object-cover w-full" alt="" />
    </div>
  );
};

export default Paralax;
