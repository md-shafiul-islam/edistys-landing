"use client";

import React from "react";
import CountUp from "react-countup";

const CountItems = ({
  title = "",
  prevIcon,
  nextIcon,
  countEnd = 0,
  ...props
}) => {
  return (
    <div {...props} className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-center font-semibold tracking-tighter max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat leading-none text-[#0057BB]">
        <span>{prevIcon}</span>
        <CountUp enableScrollSpy end={countEnd} />
        <span>{nextIcon}</span>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default CountItems;
