import React from "react";
import { About } from "../components/About";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Features from "../components/Features.tsx";
import { Home } from "../components/Home";
import Pricing from "../components/Pricing";
import Works from "../components/Works";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Features />
      <Works />
      <Faq />
      <Pricing />
      <Contact />
    </div>
  );
};

export default HomePage;
