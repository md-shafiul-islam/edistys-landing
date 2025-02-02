import React from "react";
import NavBar from "@/Components/Layout/NavBar";
import SvgBannerAnimate from "@/Components/SvgBannerAnimate";
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
                  <button className="flex flex-row items-center transition-all delay-150  gap-3 border px-5 py-3 ">
                    <span>Reach Out to Us</span>{" "}
                    <span className="pl-4">
                      <svg
                        width="6"
                        height="9"
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-7/12 h-full absolute right-0 top-0">
        <div className=" w-full h-full mb-image-polygon md:dsk-image-polygon">
          <img
            className="object-cover "
            src="/assets/images/banner-image.avif"
          />
        </div>
      </div>
      {/* <SvgOrgBannerAnimate /> */}
      <SvgBannerAnimate />
    </>
  );
};

export default HomeBanner;
