import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  const items = ["item1", "item2", "item3"];

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 3 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {/* after 2 sec delay duration will start and opacity(background will fade) */}
      <motion.div
        className="row w-36 h-36 bg-red-600"
        initial={{ opacity: 0, scale: 0.5 }}
        // scale is a css function that scale the element on 2d plane
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 2 }}
        whileHover={{ opacity: 1, scale: 2 }}
        // is se hum apny item ko kahi b drag kar sakty hain
        // whileInView={}  only work when it is in view height
        drag
      ></motion.div>

      <motion.div
        className="row w-36 h-36 textw-gray"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}

      >
        {items.map((items, i) => (
          <motion.div
            key={items}
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {items}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Test;
