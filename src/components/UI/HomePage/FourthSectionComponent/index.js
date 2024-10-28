import React from "react";

const FourthSectionComponent = () => {
  return (
    <div className="bg-[#E9F0FF] my-0  sm:my-4 p-3 sm:p-6 xl:p-14">
      <div className="py-3 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
        <div className="flex gap-3 items-center p-1 sm:p-6">
          <div className="w-full sm:w-[50%]">
            <h1 className=" text-xl sm:text-3xl font-normal  ">
              We’re Not Them.  Sighnal Does More, Effortlessly.
            </h1>
            <p className=" text-base sm:text-xl  pt-1 sm:pt-2">
              Skip the clutter. Sighnal gives you what you need—clean,
              actionable results that matter.
            </p>
          </div>
        </div>
        <div className="bg-white h-[400px] rounded-2xl"></div>
      </div>
    </div>
  );
};

export default FourthSectionComponent;
