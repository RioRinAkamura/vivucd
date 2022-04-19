import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image6 from "../../assets/images/advanced-option.jpg";
import airplane from "../../assets/images/airplane.jpg";
import bike from "../../assets/images/bike.jpg";
import hotel from "../../assets/images/hotel.jpg";
import ship from "../../assets/images/ship.jpg";
import tour from "../../assets/images/tour.jpg";

const Features = () => {
  const onPlaneTicket = () => {
    const win = window.open(
      `https://www.vietnamairlines.com/vi-vn/v%C3%A9-m%C3%A1y-bay-%C4%91%E1%BA%BFn-c%C3%B4n-%C4%91%E1%BA%A3o`,
      "_blank"
    );
    if (win) {
      win.focus();
    }
  };
  const { t } = useTranslation();
  return (
    <div id="booking" className="block featureBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>{t("service.title")}</h2>
          <p>{t("service.desc")}</p>
        </div>
        <div className="contentHolder">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle
                hoverable
                cover={<ImgStyle alt="airplane" src={airplane} />}
                onClick={onPlaneTicket}
              >
                <Meta title={t("service.plane")} />
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Link to="/ve-tau">
                <CardStyle hoverable cover={<ImgStyle alt="ship" src={ship} />}>
                  <Meta title={t("service.boat")} />
                </CardStyle>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Link to="/dat-phong-ks">
                <CardStyle
                  hoverable
                  cover={<ImgStyle alt="hotel" src={hotel} />}
                >
                  <Meta title={t("service.hotel")} />
                </CardStyle>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Link to="/book-tour">
                <CardStyle hoverable cover={<ImgStyle alt="tour" src={tour} />}>
                  <Meta title={t("service.tour")} />
                </CardStyle>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Link to="/thue-xe">
                <CardStyle
                  hoverable
                  cover={<ImgStyle alt="hiring" src={bike} />}
                >
                  <Meta title={t("service.bike")} />
                </CardStyle>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="Test" src={image6} />}>
                <Meta title="Advanced Options" />
              </CardStyle>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Features;

const CardStyle = styled(Card)`
  border-radius: 5px;
  overflow: hidden;
`;

const ImgStyle = styled.img`
  object-fit: cover;
  height: 200px;
`;
