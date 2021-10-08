import React, {useState} from "react";
import { motion } from "framer-motion";

export default function Box1() {

    const [isAnimate, setAnimate] = useState(false)

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimate ? 1111 : 0,
          rotate: isAnimate ? 360 : 0,
          opacity: isAnimate ? 2 : 1,
     //     backgroundColor: isAnimate ? "lightblue" : "darkblue",
        }}
        initial={{
          opacity: 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setAnimate(!isAnimate)}
      ></motion.div>
    </div>
  );
}
