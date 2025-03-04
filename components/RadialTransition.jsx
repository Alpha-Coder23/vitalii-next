import { motion } from "framer-motion";

const circleAnimation = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 5,
    opacity: 0,
  },
  exit: {
    scale: 0,
    opacity: 1,
  },
};

const RadialTransition = () => {
  return (
    <>
      <motion.div
        className="absolute inset-0 z-50 w-64 h-64 m-auto rounded-full bg-accent"
        variants={circleAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default RadialTransition;
