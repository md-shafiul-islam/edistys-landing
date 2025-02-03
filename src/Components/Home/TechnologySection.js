import React from "react";
import SectionTitle from "@/Components/Utils/SectionTitle";
import SectionHeading from "@/Components/Utils/SectionHeading";
import CstSwiperSlider from "@/Components/Utils/CstSwiperSlider";

const TechnologySection = () => {
  return (
    <div className="grid gap-5">
      <SectionTitle title="TECHNOLOGY BUILT FOR YOU" />
      <SectionHeading title="The future of finance" />

      <div className="w-full grid ">
        <CstSwiperSlider />
      </div>
    </div>
  );
};

export default TechnologySection;
