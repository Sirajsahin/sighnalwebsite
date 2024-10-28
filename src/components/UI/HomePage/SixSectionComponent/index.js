import React from "react";
import Accordanation from "../../../Constants/Accordanation";

const SixSectionComponent = () => {
  return (
    <div className="bg-[#2D6759] my-0 sm:my-4 p-4 sm:p-14">
      <h1 className="text-2xl sm:text-4xl font-medium text-[#F3F1EC] ">
        Safe and Secure
      </h1>
      <p className="text-[#F3F1ECE5] text-base sm:text-xl font-normal py-2 w-full sm:w-[50%] ">
        Sighnal is designed with the highest commitment to trust, security, and
        compliance. Your AI agent won't pretend to be something it’s not, and it
        will be honest about its limitations.
      </p>
      <div className="py-3 sm:py-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-14 items-center">
        <div className="bg-white h-[400px] rounded-2xl"></div>
        <div className="flex flex-col gap-3">
          <Accordanation />
        </div>
      </div>
    </div>
  );
};

export default SixSectionComponent;
