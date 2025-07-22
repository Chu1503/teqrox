import React from "react";
import TypewriterEffect from "./ui/typewriter";
import { motion } from "framer-motion";
import { CustomButton } from "./ui/custom-button";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden z-30 space-y-6">
      <div className="w-full flex items-center justify-center min-h-[3.5em] sm:min-h-[2em] md:min-h-[6em] xl:min-h-[7.5em]">
        <TypewriterEffect />
      </div>
      <motion.p
        // className="text-center font-normal text-sm sm:text-lg md:text-xl lg:text-xl text-[#F5F6FB] leading-6 md:leading-12"
        className="text-[#F5F6FB] relative z-20 font-normal text-base leading-10 md:text-xl"
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
    </div>
  );
};

export default HeroSection;
