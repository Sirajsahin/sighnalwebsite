import React from "react";

const SixSectionComponent = () => {
  return (
    <div className="bg-[#2D6759] my-0 sm:my-4 p-4 sm:p-8">
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
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal text-[#F3F1EC]">
                Privacy
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal text-[#F3F1EC]">
                Secure integration
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal text-[#F3F1EC]">
                Secure integration
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixSectionComponent;
