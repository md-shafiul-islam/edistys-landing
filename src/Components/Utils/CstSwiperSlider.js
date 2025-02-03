"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import CarouselItem from "@/Components/Utils/CarouselItem";

const CstSwiperSlider = () => {
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };

  return (
    <div
      className="max-w-7xl mx-auto"
      style={{
        filter: "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px",
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        // onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 5000 }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CarouselItem
            sectionTitle="Customer focused"
            sectionHeading="Purpose-built financial services"
            texts={[
              `Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.`,
              `Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.`,
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            sectionTitle="Agile and adaptable"
            sectionHeading="Agile and adaptable for growth"
            texts={[
              `Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.`,
              `Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.`,
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            sectionTitle="Compliance ready"
            sectionHeading="Manage compliance with ease"
            texts={[
              `Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.`,
              `Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.`,
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            sectionTitle="Secure and safe"
            sectionHeading="Highly secure and safe"
            texts={[
              `Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.`,
              `Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.`,
            ]}
          />
        </SwiperSlide>
      </Swiper>
      {/* article */}
    </div>
  );
};

export default CstSwiperSlider;
