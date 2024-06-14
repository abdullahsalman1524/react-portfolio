import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [clicked, isClicked] = useState(false);

  return (
    <div className="py-10">
      <div
        className="button px-8 font-bold text-2xl w-24 z-50"
        onClick={() => isClicked(!clicked)}
      >
        <div className="bg-white w-12 h-12 flex items-center justify-center  rounded-full text-black">
          <RxHamburgerMenu />
        </div>
      </div>
      <div className="px-48  w-[90%] left-24 flex justify-between font-extrabold relative -top-10 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-extrabold text-2xl hover:text-3xl"
        >
          Abdullah
        </motion.div>
        <motion.div
          className="flex gap-5 text-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <FaLinkedinIn />
          <FaGithub />
          <FaInstagram />
        </motion.div>
      </div>

      <div
        className={`py-8 absolute duration-700 ease-in-out ${
          (clicked ? "left-0" : "left-[-100%]",
          clicked ? "relative" : "absloute",
          clicked ? "block" : "hidden")
        }  bg-white top-0 h-[100vh] w-[25%] flex flex-col items-center justify-center`}
      >
        <div className="text-red-500 w-12 h-12 flex items-center text-xl justify-center rounded-full absolute top-4 right-4" onClick={() => isClicked(!clicked)}>
          <ImCross />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
