"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React from "react";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 2.5,
    ease: "easeInOut",
  },
} as MotionProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden cursor-pointer rounded-lg px-6 py-2 font-medium border border-white bg-black transition-shadow duration-300 ease-in-out hover:shadow-xl",
          className,
        )}
        {...animationProps}
        {...props}
      >
        {/* Shine Layer */}
        <span
          className="absolute inset-0 z-10 block rounded-[inherit] pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(-75deg, rgba(0,0,0,0.5) calc(var(--x) + 20%), rgba(0,0,0,0) calc(var(--x) + 30%), rgba(0,0,0,0.5) calc(var(--x) + 100%))",
            WebkitMaskImage:
              "linear-gradient(-75deg, rgba(0,0,0,0.5) calc(var(--x) + 20%), rgba(0,0,0,0) calc(var(--x) + 30%), rgba(0,0,0,0.5) calc(var(--x) + 100%))",
            backgroundImage:
              "linear-gradient(-75deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.05) 100%)",
          }}
        />
        <span className="relative z-20 block text-white text-sm uppercase tracking-wide dark:font-light">
          {children}
        </span>
      </motion.button>
    );
  },
);

ShinyButton.displayName = "ShinyButton";
