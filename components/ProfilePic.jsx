"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProfilePic = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src={"/assets/myPic.png"}
            priority
            quality={100}
            fill
            alt="Menath Nadungoda"
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className={"w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"}
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r={"250"}
            stroke={"url(#blueGradient)"}
            strokeWidth={"6"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22 "],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <defs>
            <linearGradient
              id="blueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0033ff" /> {/* Darker Blue */}
              <stop offset="50%" stopColor="#00aaff" /> {/* Medium Blue */}
              <stop offset="100%" stopColor="#00ccff" /> {/* Light Blue */}
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default ProfilePic;
