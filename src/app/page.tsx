"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Features } from "@/components/ui/features";
import Image from "next/image";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import BadgeGrid from "@/components/Badges";

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default function Home() {
  return (
    <main className="relative flex flex-col bg-[#0b0b0b]">
      <section className="h-screen">
        <AuroraBackground>
          <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] px-30">
            <span className="block">Our Solutions come in all</span>
            <span className="block text-[#0289B6]">Shapes, Sizes & Forms</span>
          </h1>
        </AuroraBackground>
      </section>

      <AboutSection />
      <section className="h-fit px-10 bg-[#121212] py-20 border-y-2 border-[#292929]">
        <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10">
          What <span className="text-[#0289B6]">We Do?</span>
        </h1>

        <Features />
      </section>

      <ContactSection />
      <section className="h-fit px-10 bg-[#121212] py-20 border-y-2 border-[#292929]">
        <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10">
          Recognized by
          <div className="h-[25px]"></div>
          <span className="text-[#0289B6]">Top Rating Agencies</span>
        </h1>

        <BadgeGrid />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
