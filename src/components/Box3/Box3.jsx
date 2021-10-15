import { motion } from "framer-motion";

export default function Box3() {
  //box variants

  const boxVariant = {
    /*    firstAnimation: {
            x: 100,
            scale: 1.5,
            backgroundColor: 'green'
        
    }  , secondAnimation: {
            x: 50,
            scale: 1.1,
            backgroundColor: 'white'
    } */
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: "0",
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  //three boxes animations
  const listVariant = {
    visible: {
      x: "0",
      opacity: 1,
      //    transition: {
      //      delay: 1,
      //     },
    },
    hidden: {
      x: "-10",
      opacity: 0,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li className="boxItem" variants={listVariant}></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
