"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Features } from "@/components/ui/features";
import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import badge1 from "@/assets/badge1.webp";
import badge2 from "@/assets/badge2.webp";
import badge3 from "@/assets/badge3.webp";
import badge4 from "@/assets/badge4.webp";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const badges = [badge1, badge2, badge3, badge4];

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
            <span className="block text-[#0289B6]">
              Shapes, Sizes & Forms
            </span>
          </h1>
        </AuroraBackground>
      </section>

      <section className="h-fit my-20 px-10 ">
        <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10">
          About <span className="text-[#0289B6]">Us</span>
        </h1>
        <div className="flex items-center justify-center">
          <h1 className="text-center font-normal text-xl md:text-2xl lg:text-2xl text-[#F5F6FB] lg:w-2/3">
            TEQROX has all the modernization tools and cloud solutions to
            accelerate, integrate and transform your business. From data science
            to business intelligence, full stack to AI / ML, DevOps and Block
            Chain, we’ve got you covered.
          </h1>
        </div>
        <div className="flex items-center justify-center gap-10 lg:gap-20 mt-10 flex-col lg:flex-row">
          <CardSpotlight className="w-96 h-96">
            <p className="text-2xl font-semibold relative text-[#0289b6] tracking-widest uppercase mb-5">
              Our Vision
            </p>

            {/* <div className="text-[#F5F6FB] relative z-20 text-normal">
              <p className="mb-2">
                We aim to transform digital communities and enterprises by:
              </p>
              <ul className="list-none space-y-2">
                <Step title="Creating value through innovation and transformation" />
                <Step title="Promoting transparency, trust, and integrity" />
                <Step title="Building a diversified workforce with unified goals" />
              </ul>
            </div> */}
          </CardSpotlight>
          <CardSpotlight className="w-96 h-96">
            <p className="text-2xl font-semibold relative text-[#0289b6] tracking-widest uppercase mb-5">
              Our Mission
            </p>
            {/* <div className="text-[#F5F6FB] relative z-20 text-normal">
              <p className="mb-2">We provide end-to-end solutions by:</p>
              <ul className="list-none space-y-2">
                <Step title="Conducting research and market analysis" />
                <Step title="Designing the right go-to-market strategy" />
                <Step title="Understanding our clients' industry and infrastructure" />
                <Step title="Guiding clients toward success through automation" />
                <Step title="Reducing costs and increasing efficiency" />
                <Step title="Improving quality and accelerating delivery time" />
              </ul>
            </div> */}
          </CardSpotlight>
        </div>
      </section>
      <section className="h-fit px-10 bg-[#121212] py-20 border-y-2 border-[#292929]">
        <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10">
          What <span className="text-[#0289B6]">We Do?</span>
        </h1>

        <Features />
      </section>
      <section className="relative h-full py-20 px-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between px-5">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB]">
            Engage <span className="text-[#0289B6]">with us</span>
          </h2>
          <div className="text-left font-normal text-xl md:text-2xl lg:text-2xl text-[#F5F6FB] max-w-xl mt-10 lg:mt-0">
            <p>
              Let us help you by first understanding your domain and the
              industries you serve. We will connect with our best professionals
              to assist you in getting onboarded.
            </p>

            <div className="mt-4 z-30">
              <Link
                href="/contact"
                className="text-base font-semibold text-[#0289b6] hover:text-[#105474] inline-flex items-center gap-2 transition-colors"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="h-fit px-10 bg-[#121212] py-20 border-y-2 border-[#292929]">
        <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10">
          Recognized by
          <div className="h-[25px]"></div>
          <span className="text-[#0289B6]">Top Rating Agencies</span>
        </h1>

        <div className="w-full flex justify-center px-10 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-30 gap-y-20  max-w-xl sm:max-w-4xl">
            {[badge1, badge2, badge3, badge4].map((badge, idx) => (
              <GlareCard
                key={idx}
                className="flex items-center justify-center w-full h-full"
              >
                <Image
                  src={badge}
                  alt={`Badge ${idx + 1}`}
                  className="w-3/4 h-3/4 object-contain"
                  priority
                />
              </GlareCard>
            ))}
          </div>
        </div>
      </section>
      <section><Footer /></section>
    </main>
  );
}
