import React from "react";
import PhilosophyItem from "@/Components/Home/PhilosophyItem";
import SectionTitle from "@/Components/Utils/SectionTitle";
import SectionHeading from "@/Components/Utils/SectionHeading";
const PhilosophySection = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-6">
      <SectionTitle title="OUR PHILOSOPHY" />
      <SectionHeading title="Human-centred innovation" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-end-12 md:col-span-4 flex flex-col gap-5">
          <PhilosophyItem
            title="Full-suite solutions"
            text={`Experience the ease of integration across various banking and payment
        functions with our comprehensive suite of solutions.`}
            iconSrc="/assets/icons/git.svg"
          />
        </div>

        <div className="col-end-12 md:col-span-4 flex flex-col gap-5">
          <PhilosophyItem
            title="Simplify the complex"
            text={`Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.`}
            iconSrc="/assets/icons/bulb.avif"
          />
        </div>

        <div className="col-end-12 md:col-span-4 flex flex-col gap-5">
          <PhilosophyItem
            title="Cutting-edge tech"
            text={`We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.`}
            iconSrc="/assets/icons/ic.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
