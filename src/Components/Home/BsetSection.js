import React from "react";
import SectionTitle from "@/Components/Utils/SectionTitle";
import CountItems from "@/Components/Utils/CountItems";
import { ChevronRight, Plus } from "lucide-react";
import CstImage from "../Utils/CstImage";
const BsetSection = () => {
  return (
    <div className="grid gap-7">
      <SectionTitle title="TRUSTED BY THE BEST" />
      <div className="flex flex-row items-center justify-around ">
        <CountItems
          title="Years of Experience"
          prevIcon={<ChevronRight size={60} />}
          countEnd={20}
        />
        <CountItems
          title="Financial Institutions"
          nextIcon={<Plus size={60} />}
          countEnd={40}
        />
        <CountItems
          title="Customers Each"
          prevIcon={<ChevronRight size={60} />}
          nextIcon={"M"}
          countEnd={200}
        />
      </div>

      <div className="grid grid-cols-5 gap-6 items-center">
        <div className="p-4">
          <CstImage to="/assets/1.webp" />
        </div>
        <div>
          <CstImage to="/assets/2.webp" />
        </div>
        <div>
          <CstImage to="/assets/3.webp" />
        </div>

        <div>
          <CstImage to="/assets/4.webp" />
        </div>
        <div>
          <CstImage to="/assets/5.webp" />
        </div>
        <div>
          <CstImage to="/assets/6.webp" />
        </div>
        <div>
          <CstImage to="/assets/7.webp" />
        </div>
        <div>
          <CstImage to="/assets/8.webp" />
        </div>

        <div>
          <CstImage to="/assets/9.webp" />
        </div>

        <div>
          <CstImage to="/assets/10.webp" />
        </div>
        <div>
          <CstImage to="/assets/11.webp" />
        </div>
        <div>
          <CstImage to="/assets/12.webp" />
        </div>
        <div>
          <CstImage to="/assets/13.webp" />
        </div>
        <div>
          <CstImage to="/assets/14.webp" />
        </div>
        <div>
          <CstImage to="/assets/15.webp" />
        </div>
      </div>
    </div>
  );
};

export default BsetSection;
