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

const badges = [badge1, badge2, badge3, badge4];

export default function Home() {
  return (
    // <GridBackground>
    <main className="relative flex flex-col ">
      <div className="fixed inset-0 -z-10">
        <AuroraBackground>
          <h1 className="text-4xl font-bold text-white"></h1>
        </AuroraBackground>
      </div>

      <section className="h-screen "></section>
      <section className="h-fit my-20">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1
            className="relative z-20 text-center font-bold text-5xl md:text-6xl lg:text-8xl text-transparent"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.6)",
              textShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            About Us
          </h1>
          <div className="w-[40rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4" />
          </div>
          {/* <h1 className="text-white text-2xl items-center justify-center px-50">
            TEQROX has all the modernization tools and cloud solutions to
            accelerate, integrate and transform your business. From data science
            to business intelligence, full stack to AI / ML, DevOps and Block
            Chain, we’ve got you covered.
          </h1> */}
        </div>
      </section>
      <section className="h-fit my-20 px-10">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1
            className="relative z-20 text-center font-bold text-5xl md:text-6xl lg:text-8xl text-transparent"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.6)",
              textShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            What We Do
          </h1>
          <div className="w-[40rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4" />
          </div>
        </div>

        <Features />
      </section>
      <section className="h-fit my-20">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1
            className="relative z-20 text-center font-bold text-5xl md:text-6xl lg:text-8xl text-transparent"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.6)",
              textShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            }}
          >
            Recognized by
            <div className="h-[25px]"></div>
            Top Rating Agencies
          </h1>

          <div className="w-[40rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4" />
          </div>
        </div>

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
    </main>
    // </GridBackground>
  );
}
