import React from "react";
import heroImg from "../../images/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  const sidebarVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "100%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        // todo is se animation bar bar repeat ho gi
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="h-[calc(100vh-128px)] px-8 bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
      <div className="flex justify-center w-full">
        <motion.div
          className="w-1/2 flex flex-col items-center justify-center gap-8 "
          variants={sidebarVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={sidebarVariants}
            className="font-extrabold text-3xl text-purple-900"
          >
            Abdullah Salman
          </motion.h1>
          <motion.p
            variants={sidebarVariants}
            className="font-extrabold text-white text-5xl"
          >
            Full Stack Web
          </motion.p>
          <motion.p
            variants={sidebarVariants}
            className="font-extrabold text-white text-5xl"
          >
            && APP Developer{" "}
          </motion.p>
          <motion.div
            variants={sidebarVariants}
            className="flex gap-8 cursor-pointer"
          >
            <motion.div
              variants={sidebarVariants}
              className="p-4 bg-transparent bg-[#0c0c1d] border border-white rounded-lg"
            >
              <motion.h1 variants={sidebarVariants}>
                See the Latest Work
              </motion.h1>
            </motion.div>
            <motion.div
              variants={sidebarVariants}
              className="p-4 w-48 text-center bg-transparent bg-[#0c0c1d] border border-white rounded-lg"
            >
              Contact me
            </motion.div>
          </motion.div>
          <motion.div
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            className="overflow-hidden w-full slidingText text-[10vh] text-nowrap font-extrabold z-10 text-[#ffffff09]"
          >
            Full Stack Web Dev
          </motion.div>
        </motion.div>
        <div className="w-1/2 overflow-hidden h-[80vh]">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
