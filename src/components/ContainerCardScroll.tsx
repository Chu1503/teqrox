"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ScrollCardContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          translateY: translate,
          boxShadow:
            "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        }}
        className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
      >
        <div className="w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
          <img
            src="/linear.webp"
            alt="Showcase"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollCardContainer;
