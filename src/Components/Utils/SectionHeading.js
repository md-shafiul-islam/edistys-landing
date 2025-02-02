import React from "react";

const SectionHeading = ({ title, ...props }) => {
  return (
    <h2
      {...props}
      className="text-[56px] font-semibold leading-[110%] text-blue-text  text-center"
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
