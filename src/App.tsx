import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import "animate.css";
import { Layout } from "antd";

import Features from "./components/Features.tsx";
import Works from "./components/Works";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { AppHeader } from "./components/common/AppHeader";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { AppFooter } from "./components/common/AppFooter";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
          <div className="logo" />
        </Header>
        <Content>
          <Home />
          <About />
          <Features />
          <Works />
          <Faq />
          <Pricing />
          <Contact />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default App;

