import { Globe2 } from "lucide-react";
import Link from "next/link";
import React from "react";
const menuItems = [
  {
    title: "Solutions",
    url: "#",
  },
  {
    title: "Services",
    url: "#",
  },
  {
    title: "About Us",
    url: "#",
  },
];
const NavBar = () => {
  return (
    <div className="w-full top-0 left-0 grid grid-cols-1 gap-7 z-50">
      <div className="w-full flex items-center justify-between py-3">
        <div className="md:w-full flex flex-row gap-6 items-center justify-between">
          <div className="">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 200 32"
                height="32"
                width="200"
              >
                <g clipPath="url(#clip0_3940_240)">
                  <path
                    fill="white"
                    d="M80.4531 4.06999H90.6886V29.89H95.5378V4.06999H106.208V0.421875H80.4531V4.06999Z"
                  ></path>
                  <path
                    fill="white"
                    d="M185.343 0.421875V13.2371H170.881V0.421875H166.031V29.89H170.881V16.8864H185.343V29.89H190.145V0.421875H185.343Z"
                  ></path>
                  <path
                    fill="white"
                    d="M108.619 12.9244V17.3862C108.619 24.2916 114.356 29.89 121.432 29.89H132.37V26.0304H121.539C117.361 26.0304 113.973 22.7245 113.973 18.6471V17.1145H132.37V13.1986H113.973V11.6661C113.973 7.58869 117.361 4.2827 121.539 4.2827H132.37V0.421875H121.432C114.356 0.421875 108.619 6.02027 108.619 12.9257V12.9244Z"
                  ></path>
                  <path
                    fill="white"
                    d="M137 12.9244V17.3862C137 24.2916 142.736 29.89 149.813 29.89H160.751V26.0304H149.92C145.742 26.0304 142.354 22.7245 142.354 18.6471V11.6648C142.354 7.5874 145.742 4.28142 149.92 4.28142H160.751V0.421875H149.813C142.736 0.421875 137 6.02027 137 12.9257V12.9244Z"
                  ></path>
                  <path
                    fill="white"
                    d="M33.2767 0.971489L55.1999 20.4319C55.3365 20.5524 55.4139 20.7241 55.4139 20.9035V29.4914C55.4139 30.0449 54.7416 30.3345 54.3214 29.9629L32.3996 10.5012C32.263 10.3807 32.1855 10.209 32.1855 10.0296V1.44304C32.1855 0.88948 32.8578 0.599886 33.278 0.971489H33.2767Z"
                  ></path>
                  <path
                    fill="white"
                    d="M32.1855 16.3965V30.2932C32.1855 30.6443 32.4771 30.93 32.8381 30.93H48.0909L32.1855 16.3965Z"
                  ></path>
                  <path
                    fill="white"
                    d="M28.2582 9.68413V0.629834C28.2582 0.282577 27.9706 0.00195312 27.6148 0.00195312H16.1227C15.8811 0.00195312 15.6592 0.133936 15.5502 0.344084L0.099202 29.925C-0.118769 30.3427 0.192431 30.8373 0.671705 30.8373H9.78842C10.0326 30.8373 10.2559 30.7028 10.3635 30.49L13.7749 23.8076C13.8839 23.5949 14.1071 23.4603 14.3501 23.4603H27.6135C27.9693 23.4603 28.2569 23.1797 28.2569 22.8325V17.0239C28.2569 16.678 27.9693 16.3973 27.6148 16.396L18.6044 16.3755C18.1278 16.3755 17.8179 15.8848 18.0306 15.4683L20.4848 10.6605C20.5937 10.4478 20.817 10.3133 21.0599 10.3133H27.6135C27.9693 10.3133 28.2569 10.0327 28.2569 9.68541L28.2582 9.68413Z"
                  ></path>
                  <path
                    fill="white"
                    d="M55.4141 14.5355V0.637522C55.4141 0.286422 55.1226 0.00195312 54.7628 0.00195312H39.5088L55.4141 14.5355Z"
                  ></path>
                  <path
                    fill="white"
                    d="M67.1846 0.294855L59.2864 14.4773C59.2483 14.5465 59.2273 14.6234 59.2273 14.7015V30.4139C59.2273 30.674 59.4426 30.8842 59.7092 30.8842H69.3104C69.577 30.8842 69.7923 30.674 69.7923 30.4139V14.7015C69.7923 14.6234 69.812 14.5465 69.8514 14.4773L77.5027 0.743341C77.6774 0.430682 77.445 0.0488281 77.0799 0.0488281H67.6087C67.4327 0.0488281 67.2699 0.143651 67.1859 0.294855H67.1846Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3940_240">
                    <rect
                      transform="translate(0.0283203 0.00195312)"
                      fill="white"
                      height="30.9276"
                      width="190.117"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <nav className="hidden md:flex flex-row items-center">
            <ul className="flex gap-5 text-white font-normal">
              {menuItems?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="!list-none py-3 m-0 border-b border-transparent hover:border-white"
                  >
                    <Link href={item.url}>{item?.title}</Link>
                  </li>
                );
              })}
              <li className="list-none p-0 m-0 flex items-center gap-2 text-white">
                <Globe2 /> En
                <span>
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
                <ul className="hidden">
                  <li>En</li>
                  <li>Th</li>
                  <li>ID</li>
                  <li>TW</li>
                </ul>
              </li>
            </ul>
          </nav>

          <Link
            className="flex flex-row gap-5 items-center border border-white px-5 py-2 rounded-sm"
            href="#"
          >
            <span>Contact Us</span>
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
          </Link>
        </div>
        <div className="flex md:hidden flex-col p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default NavBar;
