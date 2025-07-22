"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import badge1 from "@/assets/badge1.webp";
import badge2 from "@/assets/badge2.webp";
import badge3 from "@/assets/badge3.webp";
import badge4 from "@/assets/badge4.webp";

export default function BadgeGrid() {
  const badges = [badge1, badge2, badge3, badge4];

  const titleControls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.2 });

  const cardControlsArr = badges.map(() => useAnimation());
  const cardRefs = badges.map(() =>
    useInView({ threshold: 0.2, triggerOnce: false })
  );

  useEffect(() => {
    if (titleInView) {
      titleControls.start({ opacity: 1, y: 0 });
    } else {
      titleControls.start({ opacity: 0, y: 50 });
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    cardRefs.forEach(({ inView }, index) => {
      if (inView) {
        cardControlsArr[index].start({ opacity: 1, y: 0 });
      } else {
        cardControlsArr[index].start({ opacity: 0, y: 50 });
      }
    });
  }, [cardRefs.map((r) => r.inView).join()]); 

  return (
    <div className="w-full flex flex-col justify-center px-4 lg:px-10 mt-10 mb-10 h-fit bg-[#121212] py-20 border-y-2 border-[#292929]">
      
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10"
      >
        Recognized by
        <div className="h-[25px]" />
        <span className="text-[#0289B6]">Top Rating Agencies</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-10 mt-10">
        {badges.map((badge, index) => {
          const { ref } = cardRefs[index];
          const controls = cardControlsArr[index];

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 relative w-[280px] h-[300px]"
            >
              <Icon className="absolute h-5 w-5 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-5 w-5 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-5 w-5 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-5 w-5 -bottom-3 -right-3 dark:text-white text-black" />
              <EvervaultCard image={badge} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
