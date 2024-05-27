import { HeroScrollDemo } from "@/components/global/container-scroll-animation";
import Navbar from "@/components/global/shared/navbar";
import { InfiniteMovingCardsDemo } from "@/components/global/infinite-moving-card";
import { HeroParallaxDemo } from "@/components/global/hello-parallax";
import { LampDemo } from "@/components/global/lamp";
import { ThreeDCardDemo } from "@/components/global/3d-card-effect";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      {/* Scroll Animation */}
      <section className="w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <HeroScrollDemo />
        </div>
      </section>
      {/* Carousel */}
      <InfiniteMovingCardsDemo />
      {/* Parallax */}
      <HeroParallaxDemo />
      {/* Lamp */}
      <LampDemo />
      {/* Card */}
      <ThreeDCardDemo />
    </main>
  );
}
