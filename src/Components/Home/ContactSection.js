import React from "react";
import ContactSvg from "@/Components/Utils/ContactSvg";
import ContactBtn from "../Utils/ContactBtn";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="relative contact-clip  md:first:bg-banner-radial h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-[url('/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover md:z-20 z-0 svelte-vr11vg"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
        <h2 className="font-Montserrat text-4xl text-white lg:text-7xl font-semibold mb-[24px]">
          Legacy no longer
        </h2>{" "}
        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>{" "}
        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
          <ContactBtn />
        </div>
      </div>
      <ContactSvg />
    </div>
  );
};

export default ContactSection;
