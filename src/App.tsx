import React from "react";
import "animate.css";
import "antd/dist/antd.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppFooter } from "./components/common/AppFooter";
import { AppHeader } from "./components/common/AppHeader";
import BikeRental from "./components/Features.tsx/components/BikeRental";
import { BoatTicket } from "./components/Features.tsx/components/BoatTicket";
import BookHotel from "./components/Features.tsx/components/BookHotel";
import BookTour from "./components/Features.tsx/components/BookTour";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";

const { Header, Content, Footer } = Layout;
export function App() {
  return (
    <>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
          <div className="logo" />
        </Header>
        <Content>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vvcd" element={<HomePage />} />

              {/* Features Routes */}
              <Route path="/ve-tau" element={<BoatTicket />} />
              <Route path="/thue-xe" element={<BikeRental />} />
              <Route path="/dat-phong-ks" element={<BookHotel />} />
              <Route path="/book-tour" element={<BookTour />} />
            </Routes>
          </ScrollToTop>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
}

