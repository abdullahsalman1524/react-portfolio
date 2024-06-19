import React from "react";

const Project = ({ Img, heading, text }) => {

  return (
    <div className="px-8 flex h-[100vh] flex-col justify-center items-center">
      <h1 className="pb-6 text-6xl font-extrabold">Featured Projects</h1>
      <div className="h-2 w-[60%]  bg-white"></div>
      <div className="flex gap-4 mt-10 w-full">
        <div className="w-full">
          <img src={Img} className="h-[600px] w-full object-contain" alt="" />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white pb-8">{heading}</h1>
          <p className="text-gray-500 text-lg">{text}</p>
          <button className="mt-14 px-4 py-2 bg-[#D07000] text-2xl w-48 font-bold text-black ">
          Demo
        </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
