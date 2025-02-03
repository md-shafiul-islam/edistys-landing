import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeading from "./SectionHeading";
import Paragraph from "./Paragraph";
import Image from "next/image";

const CarouselItem = ({
  url = "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format",
  texts = [],
  sectionTitle = "",
  sectionHeading = "",
}) => {
  return (
    <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
      <section className="space-y-4 lg:space-y-6 ">
        <header className="space-y-4 lg:space-y-6 ">
          <SectionTitle title={sectionTitle} />
          <SectionHeading title={sectionHeading} />
        </header>{" "}
        <figure className="md:hidden h-[150px]">
          <Image
            src={url}
            width={500}
            height={375}
            alt={sectionTitle}
            className="h-full w-full object-cover rounded-[16px]"
            sizes="35vw"
            loading="lazy"
          />
        </figure>{" "}
        <div>
          {texts?.map((text, key) => {
            return <Paragraph key={key} text={text} />;
          })}
        </div>
      </section>{" "}
      <figure className="hidden md:block h-[425px]">
        <Image
          src={url}
          width={500}
          height={375}
          alt={sectionTitle}
          className="h-full w-full object-cover rounded-[16px]"
          sizes="35vw"
          loading="lazy"
        />
      </figure>
    </article>
  );
};

export default CarouselItem;
