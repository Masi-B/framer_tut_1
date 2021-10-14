import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Box4() {
  //box variants

  return (
    <a href="/#box-container">
      <div className="box-container4">
        <motion.div
          className="box"
          animate={{
            scale: [1, 1.2, 1.2, 1.1, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        ></motion.div>
      </div>
    </a>
  );
}
