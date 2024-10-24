import React from "react";
const SecondComponent = () => {
  return (
    <div className="">
      <h1>How Sighnal helps businesses to grow</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 w-full py-2">
        <div className=" sm:rounded-lg  ">
          <div className="bg-red-400  h-64 rounded-xl"></div>
          <div className="">
            <h3 className="py-1">Master Customer Understanding</h3>
            <p>
              Sighnal gives you the clarity to truly know your customers,
              empowering you to make better decisions.
            </p>
          </div>
        </div>
        <div className=" sm:rounded-lg  ">
          <div className="bg-red-400  h-64 rounded-xl"></div>
          <div className=" ">
            <h3 className="py-1">Turn Data Into Gold</h3>
            <p>
              Sighnal gives you the clarity to truly know your customers,
              empowering you to make better decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="grid grid-cols-3 gap-4 w-full py-2">
          <div className=" sm:rounded-lg  ">
            <div className="bg-red-400  h-64 rounded-xl"></div>
            <div className="">
              <h3 className="py-1">See Tomorrow, Act Today</h3>
              <p>
                Stay ahead of the curve. Sighnal helps you see what’s coming,
                long before your competitors do.
              </p>
            </div>
          </div>
          <div className=" sm:rounded-lg  ">
            <div className="bg-red-400  h-64 rounded-xl"></div>
            <div className=" ">
              <h3 className="py-1">Build Strong Customer Loyalty</h3>
              <p>
                Forge bonds that last. Sighnal keeps you connected to what your
                customers really want.
              </p>
            </div>
          </div>
          <div className=" sm:rounded-lg  ">
            <div className="bg-red-400  h-64 rounded-xl"></div>
            <div className=" ">
              <h3 className="py-1">Decisions? Done Right, Every Time</h3>
              <p>
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
