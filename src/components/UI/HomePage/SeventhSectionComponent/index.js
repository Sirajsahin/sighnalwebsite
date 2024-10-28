import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";

const SeventhSectionComponent = () => {
  return (
    <div className="flex flex-col  items-center justify-center p-3 py-12 sm:py-24 gap-2 xl:py-16 xl:p-8">
      <h1 className="text-2xl sm:text-4xl font-medium  ">
        See What’s Possible with Sighnal.
      </h1>
      <p className=" text-sm sm:text-xl font-normal  ">
        Get a glimpse of what better decisions can do for your business.
      </p>
      <button className="px-6 py-2 flex items-center text-white bg-[#2D6759] rounded-3xl text-sm sm:text-base gap-2 mt-2">
        Learn more <ArrowRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SeventhSectionComponent;
