import React from "react";
import NavBar from "@/Components/Layout/NavBar";
import SvgBannerAnimate from "@/Components/SvgBannerAnimate";
import CstImage from "../Utils/CstImage";
import ContactBtn from "@/Components/Utils/ContactBtn";

const HomeBanner = () => {
  return (
    <>
      <div className="container mx-auto z-20">
        <div className="w-full flex flex-col gap-5 font-normal">
          <NavBar />
          <div className="w-full z-50">
            <div className="flex w-full md:w-5/12">
              <div className="flex flex-col gap-5 text-white  w-full">
                <h1 className="text-wrap text-6xl font-semibold">
                  Embrace the future of finance
                </h1>
                <p className="text-base font-semibold">
                  Reimagine financial services with AnyTech’s open platform,
                  distributed banking solution that powers transformation
                </p>
                <div className="flex flex-row">
                  <ContactBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-7/12 h-full absolute right-0 top-0">
        <div className=" w-full h-full mb-image-polygon md:dsk-image-polygon">
          <CstImage
            className="object-cover "
            to="/assets/images/banner-image.avif"
          />
        </div>
      </div>
      {/* <SvgOrgBannerAnimate /> */}
      <SvgBannerAnimate />
    </>
  );
};

export default HomeBanner;
