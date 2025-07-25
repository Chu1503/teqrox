"use client";

import { motion, easeOut } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FlickeringGrid } from "./ui/flickering-grid";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function AboutSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-full overflow-hidden">
      <div className="absolute inset-0">
        <FlickeringGrid
          className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#0289B6"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>

      <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-dark mb-10">
        About <span className="text-light-blue">Us</span>
      </h1>

      <div className="relative z-20 flex items-center justify-center">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          // className="text-center font-normal text-sm sm:text-lg md:text-xl lg:text-xl text-dark leading-6 md:leading-12"
          className="text-dark relative z-20 font-normal text-base leading-10 md:text-xl w-[90vw] sm:w-[75vw] lg:w-[50vw] text-center"
        >
          TEQROX has all the modernization tools and cloud solutions to
          accelerate, integrate and transform your business. From data science
          to business intelligence, full stack to AI / ML, DevOps and Block
          Chain, we’ve got you covered.
        </motion.h1>
      </div>
    </section>
  );
}
