import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
// import { Features } from "@/components/ui/features";

export default function Home() {
  return (
    // <GridBackground>
      <main className="relative flex flex-col bg-[#020917]">
        <div className="fixed inset-0 -z-10">
          {/* <AuroraBackground>
          <h1 className="text-4xl font-bold text-white">
            <TextHoverEffect text="Teqrox" />
          </h1>
        </AuroraBackground> */}
        </div>

        <section className="h-screen ">
          <AuroraBackground>
            <h1 className="font-bold text-white">
              <TextHoverEffect text="Teqrox" />
            </h1>
          </AuroraBackground>
        </section>
        <section className="h-screen">
          {/* <TextHoverEffect text="Teqrox" /> */}
        </section>
        {/* <section className="h-screen"><Features /></section> */}
        <section className="h-screen ">Four</section>
        <section className="h-screen">Four</section>
      </main>
    // </GridBackground>
  );
}
