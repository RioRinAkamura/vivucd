import "animate.css";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppFooter } from "./components/common/AppFooter";
import { AppHeader } from "./components/common/AppHeader";
import BikeRental from "./components/Features.tsx/components/BikeRental";
import { BoatTicket } from "./components/Features.tsx/components/BoatTicket";
import BookHotel from "./components/Features.tsx/components/BookHotel";
import BookTour from "./components/Features.tsx/components/BookTour";
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
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Features Routes */}
            <Route path="/ve-tau" element={<BoatTicket />} />
            <Route path="/thue-xe" element={<BikeRental />} />
            <Route path="/dat-phong-ks" element={<BookHotel />} />
            <Route path="/book-tour" element={<BookTour />} />
          </Routes>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
}

