"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExclamationCircle, FaArrowCircleLeft } from "react-icons/fa";
import { Button } from "./ui/button";

const ServiceNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="flex flex-col items-center justify-center gap-6 m-auto text-center">
        <FaExclamationCircle className="text-6xl text-accent" />
        <p className="text-4xl font-bold text-white">Service not found.</p>
        <Link href={"/services"}>
          <Button className="px-6 py-3 text-xl font-semibold transition-all duration-300 rounded-md text-primary bg-accent hover:bg-accent-hover">
            <FaArrowCircleLeft className="mr-2 text-2xl" />
            <span>Go Back</span>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceNotFound;
