import { motion } from "framer-motion";
import img from "./imagesBox1/sunsetPink.jpg";

export default function Box4() {
  //box variants

  return (
    <a href="/#box-container">
      <div className="box-container">
        <motion.img
          src={img}
          className="box"
          animate={{
            scale: [1, 1.2, 1.2, 1.1, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
           // rotate: [0, 0, 270, 270, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        ></motion.img>
      </div>
    </a>
  );
}
