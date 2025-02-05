import React from "react";
import Paragraph from "@/Components/Utils/Paragraph";
import CstImage from "@/Components/Utils/CstImage";

const PhilosophyItem = ({ title, text, iconSrc, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-6" {...props}>
      <div className="">
        <CstImage to={iconSrc} />
      </div>
      <h3 className="text-blue-text text-2xl leading-[130%] font-semibold ">
        {title}
      </h3>

      <Paragraph text={text} />
    </div>
  );
};

export default PhilosophyItem;
