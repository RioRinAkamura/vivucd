import React from "react";
import IntroCarousel from "./components/IntroCarousel";
import PlaceCarousel from "./components/PlaceCarousel";

export const About = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <IntroCarousel />

        <div>
          <PlaceCarousel />
        </div>
      </div>
    </div>
  );
};
