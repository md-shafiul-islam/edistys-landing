import React from "react";

const SectionTitle = ({ title, ...props }) => {
  return (
    <h4
      {...props}
      className="text-base font-bold tracking-[2.56px] text-blue-main text-center"
    >
      {title}
    </h4>
  );
};

export default SectionTitle;
