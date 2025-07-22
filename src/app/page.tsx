"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Features } from "@/components/ui/features";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BadgeGrid from "@/components/Badges";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-[#0b0b0b]">
      <section className="h-fit bg-[#0b0b0b] max-w-screen overflow-hidden ">
        
        <div className="absolute inset-0">
          
          <AuroraBackground>
            <></>
          </AuroraBackground>
        </div>
        <ContainerScroll children={undefined} />
      </section>

      <section className="h-fit px-10 bg-[#121212] py-20 border-y-2 border-[#292929]">
        <h1 className="relative z-20 text-center font-normal text-5xl md:text-6xl lg:text-7xl text-[#F5F6FB] mb-10">
          What <span className="text-[#0289B6]">We Do?</span>
        </h1>

        <Features />
      </section>

      <ContactSection />

      <BadgeGrid />
      <section>
        <Footer />
      </section>
    </main>
  );
}
