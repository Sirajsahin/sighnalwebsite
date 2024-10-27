import React from "react";
import SecondComponent from "../UI/HomePage/SecondComponent";
import ThirdSectionComponent from "../UI/HomePage/ThirdSectionComponent/index";
import FourthSectionComponent from "../UI/HomePage/FourthSectionComponent";
import FifthComponent from "../UI/HomePage/FifthComponent";
import SixSectionComponent from "../UI/HomePage/SixSectionComponent";
import SeventhSectionComponent from "../UI/HomePage/SeventhSectionComponent";
import FIrstSectionComponent from "../UI/HomePage/FIrstSectionComponent";

function Home() {
  return (
    <div>
      <div className="m-3 sm:m-8">
        <FIrstSectionComponent />
        <SecondComponent />
      </div>
      <ThirdSectionComponent />
      <FourthSectionComponent />
      <div className="m-3 sm:m-8">
        <FifthComponent />
      </div>
      <SixSectionComponent />
      <SeventhSectionComponent />
    </div>
  );
}

export default Home;
