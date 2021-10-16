import {  motion, useAnimation } from "framer-motion";
import img from "./images/skamia.jpg";

export default function Box5() {

  const control = useAnimation();

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 1000,
            transition: { duration: 2 },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: { duration: 1 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "0%",
            transition: { duration: 1 },
          });
        }}
      >
        Square
      </button>

      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>

      <a href="/#box-container4">
        <motion.img
          src={img}
          alt="d"
          className="box"
          animate={control}
        ></motion.img>
      </a>
    </div>
  );
}
