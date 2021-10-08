import React from "react";
import { motion } from "framer-motion";

export default function Box1() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: 1111,

          opacity: 3,
        }}
        initial={{
          opacity: 0.8,
        }}
        transition={{
          type: "spring",
            stiffness: 60,
         
        }}
      ></motion.div>
    </div>
  );
}
