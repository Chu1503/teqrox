import { easeOut, motion } from "framer-motion";
import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";

const AboutCards = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };
  return (
    <div className="flex items-center justify-center gap-10 lg:gap-20 mt-10 flex-col lg:flex-row mb-5">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <div className="w-[90vw] sm:w-full flex justify-center">
          <CardSpotlight className="h-auto sm:h-96 w-96">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="text-2xl font-semibold relative text-[#0289b6] tracking-widest uppercase mb-5"
            >
              Our Vision
            </motion.p>
            <p className="text-[#F5F6FB] relative z-20 font-normal text-sm sm:text-base leading-10 ">
              To create, innovate and transform digital communities and
              enterprises by creating value, transparency, trust, and integrity
              with a diversified workforce with unified goals and aspirations.
            </p>
          </CardSpotlight>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <div className="w-[90vw] sm:w-full flex justify-center">
          <CardSpotlight className="h-auto sm:h-96 w-96">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="text-2xl font-semibold relative text-[#0289b6] tracking-widest uppercase mb-5"
            >
              Our Mission
            </motion.p>
            <p className="text-[#F5F6FB] relative z-20 font-normal text-sm sm:text-base leading-10 ">
              {" "}
              To deliver end-to-end solutions from research to go-to-market,
              driving automation to reduce costs, boost efficiency, and ensure
              long-term success through strong client partnerships and industry
              expertise.
            </p>
          </CardSpotlight>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCards;
