import HomeBanner from "@/Components/Home/HomeBanner";
import FutureSection from "@/Components/Home/FutureSection";
import PhilosophySection from "@/Components/Home/PhilosophySection";
import TechnologySection from "@/Components/Home/TechnologySection";
import BsetSection from "@/Components/Home/BsetSection";
import FooterSection from "@/Components/Home/FooterSection";
import SvgBannerAnimate from "@/Components/SvgBannerAnimate";

export default function Home() {
  return (
    <>
      <section
        className={`relative banner-polygon  bg-banner-radial md:min-h-[475px] h-auto w-full text-white md:bg-banner-clip overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] `}
      >
        <HomeBanner />
        {/* <SvgBannerAnimate /> */}
      </section>

      <section
        className="container mx-auto my-16 banner-polygon bg-cover bg-center"
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

      <section className="container mx-auto my-16">
        <BsetSection />
      </section>

      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
