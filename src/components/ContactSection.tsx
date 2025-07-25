"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    controls.start(inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 });
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative h-full py-20 px-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between px-5"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl text-dark">
          Engage <span className="text-light-blue">with us</span>
        </h2>
        <div className="text-left font-normal text-xl md:text-2xl lg:text-2xl text-dark max-w-xl mt-10 lg:mt-0">
          <p>
            Let us help you by first understanding your domain and the industries you serve.
            We will connect with our best professionals to assist you in getting onboarded.
          </p>
          <div className="mt-4 z-30">
            <Link
              href="/contact"
              className="text-base font-semibold text-light-blue hover:text-dark-blue inline-flex items-center gap-2 transition-colors"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
