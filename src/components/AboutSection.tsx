"use client";

import { motion, easeOut } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";

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
    <section className="h-fit my-20 px-10">
      <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10">
        About <span className="text-[#0289B6]">Us</span>
      </h1>

      <div className="flex items-center justify-center">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="text-center font-normal text-xl md:text-2xl lg:text-2xl text-[#F5F6FB] lg:w-2/3"
        >
          We build scalable cloud-native solutions across AI, full stack,
          DevOps, blockchain, and data analytics — empowering businesses to
          transform and thrive.
        </motion.h1>
      </div>

      <div className="flex items-center justify-center gap-10 lg:gap-20 mt-10 flex-col lg:flex-row">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <CardSpotlight className="w-96 h-96">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="text-2xl font-semibold relative text-[#0289b6] tracking-widest uppercase mb-5"
            >
              Our Vision
            </motion.p>
            <p className="text-[#F5F6FB] relative z-20 text-base leading-relaxed"></p>
          </CardSpotlight>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <CardSpotlight className="w-96 h-96 ">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="text-2xl font-semibold relative text-[#0289b6] tracking-widest uppercase mb-5"
            >
              Our Mission
            </motion.p>
            <p className="text-[#F5F6FB] relative z-20 text-base leading-relaxed"></p>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  );
}
