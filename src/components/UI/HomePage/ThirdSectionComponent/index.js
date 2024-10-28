import React from "react";

const ThirdSectionComponent = () => {
  // <div className=" ">
  //             <h1 className="text-base sm:text-2xl font-normal pt-3 ">
  //               Decisions? Done Right, Every Time
  //             </h1>
  //             <p className="text-base   w-[70%]"></p>
  return (
    <div className="bg-[#F6F6F6] my-4 py-4 px-4 sm:px-10 xl:px-14">
      <h1 className="text-2xl sm:text-4xl font-normal pt-3 ">
        How Sighnal helps businesses to grow
      </h1>
      <p className="text-base sm:text-xl  w-full sm:w-[45%] pt-2">
        Enable your customers to get answers, solve problems, and take action
        through a natural, conversational experience.
      </p>
      <div className=" py-4 sm:py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white h-[400px] rounded-2xl"></div>
        <div className="flex flex-col gap-2 sm:gap-5">
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal">
                Master Customer Understanding
              </h1>
              <p className=" text-sm sm:text-base  text-[#717171]  ">
                Sighnal gives you the clarity to truly know your customers,
                empowering you to make better decisions.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal">
                Turn Data Into Gold
              </h1>
              <p className="text-sm sm:text-base  text-[#717171] ">
                Sighnal turns everyday interactions into valuable insights,
                helping you build a smarter strategy for growth.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal">
                See Tomorrow, Act Today
              </h1>
              <p className="text-sm sm:text-base  text-[#717171] ">
                Stay ahead of the curve. Sighnal helps you see what’s coming,
                long before your competitors do.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal">
                Build Strong Customer Loyalty
              </h1>
              <p className="text-sm sm:text-base  text-[#717171] ">
                Forge bonds that last. Sighnal keeps you connected to what your
                customers really want.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E0E0E0] h-12 w-12 rounded-xl"></div>
            <div>
              <h1 className="text-base sm:text-2xl font-normal">
                Decisions? Done Right, Every Time
              </h1>
              <p className="text-sm sm:text-base  text-[#717171] ">
                When you see the full picture, decisions become easier. Sighnal
                helps you move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionComponent;
