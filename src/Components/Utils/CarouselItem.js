import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeading from "./SectionHeading";
import Paragraph from "./Paragraph";

const CarouselItem = ({
  texts = [],
  sectionTitle = "",
  sectionHeading = "",
}) => {
  return (
    <div className="w-[960px] h-full grid grid-cols-2">
      <div className="w-full flex flex-col gap-4">
        <SectionTitle title={sectionTitle} />
        <SectionHeading title={sectionHeading} />
        {texts?.map((text) => {
          return <Paragraph text={text} />;
        })}
      </div>
    </div>
  );
};

export default CarouselItem;
