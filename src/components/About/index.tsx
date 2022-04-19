import { Carousel, Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import seafood from "../../assets/images/seafood.png";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import tuong from "../../assets/images/tuong.png";
import turtle from "../../assets/images/turtle.jpg";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-globe"></i>,
    title: "High Performance",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Flat Design",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Workflow",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>{t("about.title")}</h2>
          <p>{t("about.desc")}</p>
        </div>
        <div className="contentHolder">
          <CarouselWrapper autoplay>
            <div>
              <Row gutter={[16, 16]} style={{ display: "flex" }}>
                <Col md={{ span: 12 }}>
                  <img src={slide1} alt="natural" width={"100%"} />
                </Col>
                <Col md={{ span: 12 }}>
                  <h2>{t("about.naturalTitle")}</h2>
                  <p style={{ textAlign: "justify" }}>
                    {t("about.naturalDesc")}
                  </p>
                  <h2> {t("about.placeTitle")}</h2>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ul
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <li>Bãi Đầm Trầu</li>
                      <li>Bãi Nhát</li>
                      <li>Hòn Bảy Cạnh</li>
                      <li>Vịnh Đầm Tre</li>
                      <li>Hòn Tre Nhỏ</li>
                      <li>Hòn Tre Lớn</li>
                      <li>Đường Tây Bắc</li>
                    </ul>
                    <img src={turtle} alt="traveler1" width={"60%"} />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={[16, 16]} style={{ display: "flex" }}>
                <Col md={{ span: 12 }}>
                  <img src={slide3} alt="natural" width={"100%"} />
                </Col>
                <Col md={{ span: 12 }}>
                  <h2>{t("about.historyTitle")}</h2>
                  <p style={{ textAlign: "justify" }}>
                    {t("about.historyDesc")}
                  </p>
                  <h2> {t("about.placeTitle")}</h2>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ul style={{ textAlign: "left" }}>
                      <li>Nhà tù Côn Đảo</li>
                      <li>Nghĩa trang Hàng Dương</li>
                      <li>Chùa Núi Một(Vân Sơn Tự)</li>
                      <li>Bảo Tàng Côn Đảo</li>
                      <li>Cầu Tàu 914</li>
                      <li>Miếu Bà Phi Yến</li>
                      <li>Cầu Ma Thiên Lãnh</li>
                      <li>Nhà Chúa Đảo</li>
                    </ul>
                    <img
                      src={tuong}
                      alt="tuong"
                      width={"35%"}
                      style={{
                        opacity: 0.8,
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={[16, 16]} style={{ display: "flex" }}>
                <Col md={{ span: 12 }}>
                  <img src={slide2} alt="natural" width={"100%"} />
                </Col>
                <Col md={{ span: 12 }}>
                  <h2> {t("about.specialtiesTitle")}</h2>
                  <p style={{ textAlign: "justify" }}>
                    {t("about.specilitiesDesc")}
                  </p>
                  <h2> {t("about.foodTitle")}</h2>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ul style={{ textAlign: "left" }}>
                      <li>Hải Sản Tươi Côn Đảo</li>
                      <li>Mứt Hạt Bàng Côn Đảo</li>
                      <li>Mắm Hàu Côn Đảo</li>
                      <li>Mắm Nhum Côn Đảo</li>
                      <li>Cua Mặt Trăng Côn Đảo</li>
                      <li>Ốc Vú Nàng Côn Đảo</li>
                      <li>Sá Sùng Côn Đảo</li>
                      <li>Cá Mú Đỏ Côn Đảo</li>
                      <li>Mực Một Nắng Côn Đảo</li>
                      <li>Cá Thu Một Nắng Côn Đảo</li>
                    </ul>
                    <img
                      src={seafood}
                      alt="seafood"
                      width={"50%"}
                      style={{ paddingTop: 24 }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </CarouselWrapper>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => (
            <Col md={{ span: 8 }} key={item.key}>
              <div className="content">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 16px;
    height: 4px;
    /* border-radius: 100%; */
    background: #8b8b8b;
  }
  > .slick-dots li.slick-active button {
    width: 24px;
    height: 4px;
    /* border-radius: 100%; */
    background: #1890ff;
  }
`;
