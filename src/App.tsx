import "animate.css";
import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AboutDetail from "./components/AboutDetail";
import { AppFooter } from "./components/common/AppFooter";
import { AppHeader } from "./components/common/AppHeader";
import { BoatTicket } from "./components/Features.tsx/components/BoatTicket";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import BikeRentalPage from "./pages/BikeRentalPage";
import BookingTicketPage from "./pages/BookingTicketPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import HotelBookingPage from "./pages/HotelBookingPage";

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

              <Route path="dat-ve" element={<BookingTicketPage />} />
              <Route path="dat-ve/ve-tau" element={<BoatTicket />} />

              <Route path="/dat-phong-ks" element={<HotelBookingPage />} />

              <Route path="thue-xe" element={<BikeRentalPage />} />
              <Route path="thue-xe/xe-may" element={<BikeRentalPage />} />

              <Route path="ho-tro" element={<ContactPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="about/:id" element={<AboutDetail />} />

              <Route path="/vivucd" element={<HomePage />}>
                <Route path="/vivucd/:id" element={<AboutDetail />} />
              </Route>

              {/* Features Routes */}
              {/* <Route path="/ve-tau" element={<BoatTicket />} />
              <Route path="/thue-xe" element={<BikeRental />} />
              <Route path="/dat-phong-ks" element={<BookHotel />} />
              <Route path="/book-tour" element={<BookTour />} /> */}
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

