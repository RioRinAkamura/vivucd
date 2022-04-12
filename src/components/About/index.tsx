import { Carousel, Col, Row } from "antd";
import React from "react";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"></i>,
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
          <Carousel autoplay>
            <div>
              <Row gutter={[16, 16]} style={{ display: "flex" }}>
                <Col md={{ span: 12 }}>
                  <img src={slide1} alt="natural" width={"100%"} />
                </Col>
                <Col md={{ span: 8 }}>
                  <h2>Thiên nhiên Côn Đảo</h2>
                  <p>
                    Một khi đã bước chân đến với Côn Đảo thì du khách đừng nên
                    bỏ qua một số địa điểm như Hòn Bà, Vịnh Đầm Tre, bãi Ông
                    Đụng, Hòn Tài… để thưởng thức cảnh quan thiên nhiên đa dạng,
                    sinh động khi có sự kết hợp hài hòa giữa núi rừng và biển
                    xanh.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={[16, 16]} style={{ display: "flex" }}>
                <Col md={{ span: 12 }}>
                  <img src={slide2} alt="natural" width={"100%"} />
                </Col>
                <Col md={{ span: 8 }}>
                  <h2>Thiên nhiên Côn Đảo</h2>
                  <p>
                    Một khi đã bước chân đến với Côn Đảo thì du khách đừng nên
                    bỏ qua một số địa điểm như Hòn Bà, Vịnh Đầm Tre, bãi Ông
                    Đụng, Hòn Tài… để thưởng thức cảnh quan thiên nhiên đa dạng,
                    sinh động khi có sự kết hợp hài hòa giữa núi rừng và biển
                    xanh.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={[16, 16]} style={{ display: "flex" }}>
                <Col md={{ span: 12 }}>
                  <img src={slide3} alt="natural" width={"100%"} />
                </Col>
                <Col md={{ span: 8 }}>
                  <h2>Thiên nhiên Côn Đảo</h2>
                  <p>
                    Một khi đã bước chân đến với Côn Đảo thì du khách đừng nên
                    bỏ qua một số địa điểm như Hòn Bà, Vịnh Đầm Tre, bãi Ông
                    Đụng, Hòn Tài… để thưởng thức cảnh quan thiên nhiên đa dạng,
                    sinh động khi có sự kết hợp hài hòa giữa núi rừng và biển
                    xanh.
                  </p>
                </Col>
              </Row>
            </div>
          </Carousel>
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

export default About;
