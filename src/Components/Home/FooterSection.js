import React from "react";
import ContactSection from "@/Components/Home/ContactSection";
const FooterSection = () => {
  return (
    <footer>
      <ContactSection />
      <div className="bg-[#002045]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between py-11">
          <button>
            <picture
              style={{
                display: "flex",
                alignItems: "stretch",
                backgroundSize: "cover",
              }}
            >
              <source
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp 200w"
                type="image/webp"
                sizes="127px, (min-width: 1024px) 217px"
              />
              <source
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200 200w"
                sizes="127px, (min-width: 1024px) 217px"
              />
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg"
                width={200}
                height={32}
                data-x-lqip="false"
                data-x-lqip-transition-duration={0}
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className=" !w-[217px] !object-contain"
                alt="AnyTech"
              />
            </picture>
          </button>
          <div className="hidden items-center text-[#00E9EA] lg:flex">
            <p className="border-r border-blue-dark px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">
              Our Solutions
            </p>
            <ul className="flex items-center">
              <li>
                <a
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                  href="/en/solutions/anycaas"
                >
                  AnyCaaS
                </a>
              </li>
              <li>
                <button className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1">
                  AnyBaaS
                </button>
              </li>
              <li>
                <button className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1">
                  AnyPaaS
                </button>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 lg:hidden lg:gap-10">
            <button
              href="https://www.linkedin.com/company/anytxn"
              className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
            ></button>
            <button
              href="tel:+6590021890"
              className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
            ></button>
            <button
              href="mailto:enquiry@anytxn.com"
              className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
            ></button>
          </div>
        </div>
      </div>
      <div className="border-b border-blue-dark" />
      <div className="bg-[#00152D]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2 text-sm">
          <p>
            <strong>Â©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <div>
              <a
                className="transition-colors duration-300 hover:text-blue-highlight"
                href="/en/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
