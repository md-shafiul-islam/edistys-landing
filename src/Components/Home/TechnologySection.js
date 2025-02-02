import React from "react";
import SectionTitle from "@/Components/Utils/SectionTitle";
import SectionHeading from "@/Components/Utils/SectionHeading";
import Carousel from "@/Components/Utils/Carousel";

const TechnologySection = () => {
  return (
    <div className="grid gap-5">
      <SectionTitle title="TECHNOLOGY BUILT FOR YOU" />
      <SectionHeading title="The future of finance" />

      <Carousel />
    </div>
  );
};

export default TechnologySection;
