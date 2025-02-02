"use client";
import React, { useState } from "react";
import CarouselBtn from "@/Components/Utils/CarouselBtn";
import CarouselItem from "@/Components/Utils/CarouselItem";

const Carousel = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="grid gap-6">
      <div className="flex flex-row justify-around items-center gap-5">
        <CarouselBtn title="Customer focused" />
        <CarouselBtn title="Agile and adaptable" />
        <CarouselBtn title="Compliance ready" />
        <CarouselBtn title="Secure and safe" />
      </div>
      <div className="w-full min-h-[450px] overflow-hidden">
        <div className="flex flex-row flex-nowrap gap-5 shadow-lg rounded-lg">
          <CarouselItem
            sectionTitle="Secure and safe"
            sectionHeading="Highly secure and safe"
            texts={[
              `Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.`,
              `Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.`,
            ]}
          />
          <CarouselItem
            sectionTitle="Compliance ready"
            sectionHeading="Manage compliance with ease"
            texts={[
              "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
              `Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.`,
            ]}
          />
          <CarouselItem
            texts={[
              `Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.`,
              `Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.`,
            ]}
          />
          <CarouselItem />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
