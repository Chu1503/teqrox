import React from "react";
import TypewriterEffect from "./ui/typewriter";
import { motion } from "framer-motion";
import { CustomButton } from "./ui/custom-button";
import { ThemeToggle } from "./ThemeToggle";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden z-30 space-y-7">
      <div className="w-full flex items-center justify-center min-h-[3.5em] sm:min-h-[2em] md:min-h-[6em] xl:min-h-[7.5em] pointer-events-none ">
        <TypewriterEffect />
      </div>
      <motion.p
        // className="text-center font-normal text-sm sm:text-lg md:text-xl lg:text-xl text-dark leading-6 md:leading-12"
        className="text-white relative z-20 font-normal text-base leading-10 md:text-xl pointer-events-none "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        We offer all the modernization tools and cloud solutions to accelerate,
        integrate and transform your business, from data science and business
        intelligence to full stack, AI/ML, DevOps and blockchain.
      </motion.p>
      <motion.div
        className="items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <CustomButton />
      </motion.div>
      <ThemeToggle />

    </div>
  );
};

export default HeroSection;
