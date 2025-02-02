import React from "react";

import SectionTitle from "@/Components/Utils/SectionTitle";
import SectionHeading from "@/Components/Utils/SectionHeading";
import Paragraph from "../Utils/Paragraph";

const FutureSection = () => {
  return (
    <div className="grid grid-cols-2 gap-7">
      <div className="col-span-2 md:col-span-1 flex flex-col gap-6 ">
        <SectionTitle title="POWERING THE FUTURE OF FINANCE" />
        <h4 className="text-base font-bold tracking-[2.56px] text-blue-main"></h4>
        <h2 className="text-[56px] font-semibold leading-[110%] text-blue-text"></h2>
        <SectionHeading title="Uncovering new ways to delight customers" />
        <p className="text-body-1">
          <strong>
            {" "}
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </strong>
        </p>
        <Paragraph
          text="Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success."
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="">
          <img src="/assets/images/feature.avif" />
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
