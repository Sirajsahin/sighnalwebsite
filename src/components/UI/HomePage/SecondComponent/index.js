import React from "react";
const SecondComponent = () => {
  return (
    <div className="">
      <h1 className="text-base  sm:text-4xl font-medium py-3 sm:py-5">
        How Sighnal helps businesses to grow
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-14 w-full py-2 px-4">
        <div className=" sm:rounded-lg  ">
          <div className="bg-[#F8F8F8]  h-64 rounded-xl"></div>
          <div className="">
            <h1 className="text-base sm:text-2xl font-normal pt-3 ">
              Master Customer Understanding
            </h1>
            <p className="text-sm sm:text-base w-full  sm:w-[70%]">
              Sighnal gives you the clarity to truly know your customers,
              empowering you to make better decisions.
            </p>
          </div>
        </div>
        <div className=" sm:rounded-lg  ">
          <div className="bg-[#F8F8F8]  h-64 rounded-xl"></div>
          <div className=" ">
            <h1 className="text-base sm:text-2xl font-normal pt-3 ">
              Turn Data Into Gold
            </h1>
            <p className="text-sm sm:text-base w-full  sm:w-[70%]">
              Sighnal turns everyday interactions into valuable insights,
              helping you build a smarter strategy for growth.
            </p>
          </div>
        </div>
      </div>

      <div className="py-3 px-3 sm:px-5 mt-2 sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full py-2">
          <div className=" sm:rounded-lg  ">
            <div className="bg-[#F8F8F8]  h-64 rounded-xl"></div>
            <div className="">
              <h1 className="text-base sm:text-2xl font-normal pt-3 ">
                See Tomorrow, Act Today
              </h1>
              <p className="text-sm sm:text-base  w-full sm:w-[70%]">
                Stay ahead of the curve. Sighnal helps you see what’s coming,
                long before your competitors do.
              </p>
            </div>
          </div>
          <div className=" sm:rounded-lg  ">
            <div className="bg-[#F8F8F8]  h-64 rounded-xl"></div>
            <div className=" ">
              <h1 className="text-base sm:text-2xl font-normal pt-3 ">
                Build Strong Customer Loyalty
              </h1>
              <p className="text-sm sm:text-base  w-full sm:w-[70%]">
                Forge bonds that last. Sighnal keeps you connected to what your
                customers really want.
              </p>
            </div>
          </div>
          <div className=" sm:rounded-lg  ">
            <div className="bg-[#F8F8F8]  h-64 rounded-xl"></div>
            <div className=" ">
              <h1 className="text-base sm:text-2xl font-normal pt-3 ">
                Decisions? Done Right, Every Time
              </h1>
              <p className="text-sm sm:text-base  w-full sm:w-[70%]">
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

export default SecondComponent;
