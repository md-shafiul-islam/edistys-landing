import HomeBanner from "@/Components/Home/HomeBanner";
import FutureSection from "@/Components/Home/FutureSection";
import PhilosophySection from "@/Components/Home/PhilosophySection";
import TechnologySection from "@/Components/Home/TechnologySection";

export default function Home() {
  return (
    <>
      <section
        className={`relative banner-polygon  bg-banner-radial md:min-h-[475px] h-auto w-full text-white md:bg-banner-clip overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] `}
      >
        <HomeBanner />
      </section>

      <section
        className="container mx-auto my-16 banner-polygon"
        style={{
          background: `url('/assets/backgrounds/WaveLinesDesktop4.svg')`,
        }}
      >
        <FutureSection />
      </section>

      <section className="container mx-auto my-16">
        <PhilosophySection />
      </section>

      <section
        className="container mx-auto my-16"
        style={{
          background: `url('/assets/backgrounds/WaveLinesDesktop4.svg')`,
        }}
      >
        <TechnologySection />
      </section>
    </>
  );
}
