import React from "react";
import airplane from "../../assets/images/airplane.jpg";
import ship from "../../assets/images/ship.jpg";
import hotel from "../../assets/images/hotel.jpg";
import tour from "../../assets/images/tour.jpg";
import bike from "../../assets/images/bike.jpg";
import image6 from "../../assets/images/advanced-option.jpg";
import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Features = () => {
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
              >
                <Meta title={t("service.plane")} />
                {/* <p>~1tr8/người (tùy thời điểm)</p> */}
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="ship" src={ship} />}>
                <Meta title={t("service.boat")} />
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="hotel" src={hotel} />}>
                <Meta title={t("service.hotel")} />
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="tour" src={tour} />}>
                <Meta title={t("service.tour")} />
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="hiring" src={bike} />}>
                <Meta title={t("service.bike")} />
              </CardStyle>
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
