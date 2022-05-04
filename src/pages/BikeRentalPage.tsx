import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { PhoneOutlined } from "@ant-design/icons";

import dulich1 from "../assets/images/du-lich1.jpg";
import dulich2 from "../assets/images/du-lich2.jpg";
import styled from "styled-components";

const BikeRentalPage = () => {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>THUÊ XE</h2>
          <p>
            Có nhiều sự lựa chọn để du khách có thể khám phá vẻ đẹp thiên nhiên,
            lịch sử, tâm linh... Du khách có thể di chuyển bằng nhiều phương
            tiện khác nhau, vui lòng liên hệ{" "}
            <a href="tel:+84-869315579">
              <b>0869 315 579</b>
            </a>{" "}
            để được tư vấn thuê xe
          </p>
        </div>
        <div className="contentHolder">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {/* <Link to="xe-oto"> */}
              <Card
                hoverable
                cover={<ImgStyle alt="airplane" src={dulich1} />}
                actions={[
                  <a href="tel:+84-869315579">
                    <PhoneOutlined key="call" />
                  </a>,
                ]}
              >
                <Meta
                  title="Xe Ô tô"
                  description="500.000 - 750.000 vnd/ngày"
                />
              </Card>
              {/* </Link> */}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {/* <Link to="xe-may"> */}
              <Card
                hoverable
                cover={<ImgStyle alt="ship" src={dulich2} />}
                actions={[
                  <a href="tel:+84-869315579">
                    <PhoneOutlined key="call" />
                  </a>,
                ]}
              >
                <Meta title="Xe máy" description="100.000 - 150.000 vnd/ngày" />
              </Card>
              {/* </Link> */}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {/* <Link to="xe-dien"> */}
              <Card
                hoverable
                cover={<ImgStyle alt="ship" src={dulich2} />}
                actions={[
                  <a href="tel:+84-869315579">
                    <PhoneOutlined key="call" />
                  </a>,
                ]}
              >
                <Meta
                  title="Xe điện"
                  description="250.000 - 400.000 vnd/ngày"
                />
              </Card>
              {/* </Link> */}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {/* <Link to="taxi"> */}
              <Card
                hoverable
                cover={<ImgStyle alt="airplane" src={dulich1} />}
                actions={[
                  <a href="tel:+84-869315579">
                    <PhoneOutlined key="call" />
                  </a>,
                ]}
              >
                <Meta title="Taxi" description="20.000 - 25.000 vnd/km" />
              </Card>
              {/* </Link> */}
            </Col>

            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {/* <Link to="xe-dap"> */}
              <Card
                hoverable
                cover={<ImgStyle alt="ship" src={dulich2} />}
                actions={[
                  <a href="tel:+84-869315579">
                    <PhoneOutlined key="call" />
                  </a>,
                ]}
              >
                <Meta title="Xe đạp" description="80.000 - 100.000 vnd/ngày" />
              </Card>
              {/* </Link> */}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {/* <Link to="xe-khach"> */}
              <Card
                hoverable
                cover={<ImgStyle alt="ship" src={dulich2} />}
                actions={[
                  <a href="tel:+84-869315579">
                    <PhoneOutlined key="call" />
                  </a>,
                ]}
              >
                <Meta
                  title="Xe Khách"
                  description="800.000 - 1.000.000 vnd/ngày"
                />
              </Card>
              {/* </Link> */}
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default BikeRentalPage;

const ImgStyle = styled.img`
  object-fit: cover;
  height: 250px;
`;
