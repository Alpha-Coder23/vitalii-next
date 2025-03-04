"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import ServiceNotFound from "@/components/ServiceNotFound";
import serviceDetails from "@/data/serviceDetailsData";

const ServicePage = ({ params }) => {
  const { service } = params;
  const serviceData = serviceDetails[service];

  if (!serviceData) {
    return <ServiceNotFound />;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[70%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none gap-5">
            <h1 className="text-[42px] font-bold leading-none text-accent mt-[28px] xl:mt-0">
              {serviceData.title}
            </h1>
            <ScrollArea className="h-[400px]">
              <div className="text-left">
                <p className="pr-4 text-lg text-white/60">
                  {serviceData.description1}
                </p>
                <div className="my-4"></div>
                <p className="pr-4 text-lg text-white/60">
                  {serviceData.description2}
                </p>
                <div className="my-4"></div>
                <p className="pr-4 text-lg text-white/60">
                  {serviceData.description3}
                </p>
                <div className="my-4"></div>
                <p className="pr-4 text-lg text-white/60">
                  {serviceData.description4}
                </p>
              </div>
            </ScrollArea>
            <div className="flex flex-row items-center gap-2 md:space-y-0 md:space-x-4">
              <Link href="/contact">
                <Button className="px-6 py-3 font-semibold transition-all duration-300 rounded-md text-primary bg-accent hover:bg-accent-hover">
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button className="px-6 py-3 font-semibold transition-all duration-300 rounded-md text-primary bg-accent hover:bg-accent-hover">
                  Go Back
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/10 rounded-[50px]">
              <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10 rounded-[50px]"></div>
              <div className="relative w-full h-full">
                <Image
                  src={serviceData.image}
                  className="object-contain"
                  fill
                  alt={serviceData.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
