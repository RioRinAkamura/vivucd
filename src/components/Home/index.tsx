import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import title1 from "../../assets/images/title1.png";
import title2 from "../../assets/images/title2.png";
import title3 from "../../assets/images/title3.png";

const items = [
  {
    key: "1",
    title: "Web and mobile payment built for developers",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "2",
    title: "Work better together. Schedule meetings",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    title: "The best app to increase your productivity",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];

const Home = () => {
  return (
    <div id="home" className="main">
      <div className="heroBlock">
        <div className="container-fluid">
          <div style={{ paddingTop: "200px" }}>
            <Row gutter={[24, 16]}>
              <Col md={{ span: 12 }}>
                <img
                  src={title1}
                  alt="title1"
                  className="animate__animated animate__fadeInDown animate__delay-0.5s "
                  width={"100%"}
                />
                <img
                  src={title2}
                  alt="title2"
                  style={{ margin: "8px 0px" }}
                  className="animate__animated animate__fadeInLeft animate__delay-1s "
                  width={"100%"}
                />
                <img
                  src={title3}
                  alt="title3"
                  className="animate__animated animate__fadeInRight animate__delay-1s "
                  width={"100%"}
                />
                <p
                  className="animate__animated animate__fadeInUp animate__delay-2s "
                  style={{
                    color: "white",
                    textAlign: "justify",
                  }}
                >
                  In the past, Con Dao Archipelago was known as “hell on earth”.
                  Now, with a beautiful natural landscape, it has become a
                  stunning “pearl” that attracts domesticand foreign tourists.
                </p>
              </Col>
            </Row>
          </div>
        </div>
        {/* <Carousel>
          {items.map((item) => {
            return (
              <div key={item.key} className="container-fluid">
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="btnHolder">
                    <Button type="primary" size="large">
                      Learn More
                    </Button>
                    <Button size="large">
                      <i className="fas fa-desktop"></i> Watch a Demo
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel> */}
      </div>
    </div>
  );
};

export default Home;
