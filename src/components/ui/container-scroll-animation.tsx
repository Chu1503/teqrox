"use client";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  easeOut,
} from "motion/react";
import AboutSection from "../AboutSection";
import HeroSection from "../HeroSection";
import AboutCards from "../AboutCards";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
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
    <div
      className="flex flex-col items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className="py-10 md:pt-40 md:pb-0 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        <Footer translate={translate}/>
      </div>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="items-center justify-center mx-auto text-center w-[90vw] sm:w-[75vw] lg:w-[50vw] flex flex-col overflow-hidden z-30 space-y-6 mb-20 mt-[175px] sm:mt-0"
    >
      <HeroSection />
    </motion.div>
  );
};

export const Footer = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="mt-[00px]"
    >
      <AboutCards />
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        pointerEvents: 'none' 
      }}
      className="pointer-events-none not-only:relative max-w-fit mx-auto h-[30rem] md:h-[30rem] lg:h-[35rem] w-full p-2 md:p-6 bg-[#222222] 
      rounded-[30px] shadow-[0_0_20px_#0289B6,0_0_40px_#0289B6,0_0_80px_#0289B6] before:absolute 
      before:inset-0 before:rounded-[30px] before:shadow-[0_0_40px_#0289B6,0_0_70px_#0289B6] before:z-[-1] "
    >
      <div 
        className="h-full w-full overflow-hidden rounded-2xl bg-[#121212] md:rounded-2xl md:p-4 "
        style={{ pointerEvents: 'none' }}
      >
        <AboutSection />
      </div>
    </motion.div>
  );
};
