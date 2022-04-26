import React from "react";
import { Route } from "react-router-dom";
import { About } from "../components/About";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Features from "../components/Features.tsx";
import { Home } from "../components/Home";
import Pricing from "../components/Pricing";
import Works from "../components/Works";
import Wrapper from "../components/Wrapper";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Works />
      <Pricing />
    </div>
  );
};

export default HomePage;
