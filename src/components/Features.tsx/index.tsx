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

const Features = () => {
  return (
    <div id="booking" className="block featureBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Bạn đã đặt vé để đến với Côn Đảo chưa?</h2>
          <p>
            Để đi đến Côn Đảo bạn có thể di chuyển bằng máy bay hoặc tàu thủy
          </p>
        </div>
        <div className="contentHolder">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle
                hoverable
                cover={<ImgStyle alt="airplane" src={airplane} />}
              >
                <Meta title="Đặt vé máy bay" />
                {/* <p>~1tr8/người (tùy thời điểm)</p> */}
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="ship" src={ship} />}>
                <Meta title="Đặt vé tàu" />
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="hotel" src={hotel} />}>
                <Meta title="Đặt phòng khách sạn" />
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="tour" src={tour} />}>
                <Meta title="Đặt tour" />
              </CardStyle>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <CardStyle hoverable cover={<ImgStyle alt="hiring" src={bike} />}>
                <Meta title="Thuê xe" />
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
