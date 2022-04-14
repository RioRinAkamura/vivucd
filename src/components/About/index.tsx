import { Carousel, Col, Row, Card, Avatar } from "antd";
import React from "react";
import styled from "styled-components";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import turtle from "../../assets/images/turtle.jpg";
import tuong from "../../assets/images/tuong.png";
import seafood from "../../assets/images/seafood.png";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

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

const About = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Đôi nét Côn Đảo</h2>
          <p>Côn Đảo là một huyện trực thuộc tỉnh Bà Rịa - Vũng Tàu</p>
        </div>
        <div className="contentHolder">
          <CarouselWrapper autoplay>
            <div>
              <Row gutter={[16, 16]} style={{ display: "flex" }}>
                <Col md={{ span: 12 }}>
                  <img src={slide1} alt="natural" width={"100%"} />
                </Col>
                <Col md={{ span: 12 }}>
                  <h2>Thiên nhiên Côn Đảo</h2>
                  <p style={{ textAlign: "justify" }}>
                    Một khi đã bước chân đến với Côn Đảo thì du khách đừng nên
                    bỏ qua một số địa điểm như Hòn Bà, Vịnh Đầm Tre, bãi Ông
                    Đụng, Hòn Tài… để thưởng thức cảnh quan thiên nhiên đa dạng,
                    sinh động khi có sự kết hợp hài hòa giữa núi rừng và biển
                    xanh.
                  </p>
                  <h2>Những địa điểm không nên bỏ qua</h2>
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
                  <h2>Di tích lịch sử</h2>
                  <p style={{ textAlign: "justify" }}>
                    Côn Đảo - vùng đất của đau thương, là nơi nằm xuống của rất
                    nhiều chiến sĩ cách mạng cũng như người dân nơi đây. Vì vậy
                    Côn Đảo sở hữu rất nhiều di tích lịch sử nổi tiếng.
                  </p>
                  <h2>Những địa điểm không nên bỏ qua</h2>
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
                  <h2>Đặc sản Côn Đảo</h2>
                  <p style={{ textAlign: "justify" }}>
                    Các bạn đã tìm được những món ngon Côn Đảo khi ghé thăm địa
                    điểm nổi tiếng này chưa? Đây chắc hẳn cũng là một băn khoăn
                    của rất nhiều bạn trẻ khi tham quan các địa điểm du lịch tại
                    Côn Đảo. VivuCondao sẽ giới thiệu đến bạn top những món quà
                    đặc sản Côn Đảo rất đáng để thử một lần vì độ ngon khó
                    cưỡng.
                  </p>
                  <h2>Top những món nên thử khi đến Côn Đảo</h2>
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
        <Row gutter={[16, 16]}>
          <Col md={{ span: 8 }}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col md={{ span: 8 }}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col md={{ span: 8 }}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;

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
