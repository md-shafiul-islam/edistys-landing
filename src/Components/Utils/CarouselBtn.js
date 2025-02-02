import React from "react";

const CarouselBtn = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="px-5 py-2 rounded-3xl hover:bg-[#F5FAFF] active:"
    >
      {title}
    </button>
  );
};

export default CarouselBtn;
