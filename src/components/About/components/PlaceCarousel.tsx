import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import image6 from "../../../assets/images/advanced-option.jpg";
import airplane from "../../../assets/images/airplane.jpg";
import bike from "../../../assets/images/bike.jpg";
import hotel from "../../../assets/images/hotel.jpg";
import ship from "../../../assets/images/ship.jpg";
import tour from "../../../assets/images/tour.jpg";

import { RightOutlined, LeftOutlined, PhoneOutlined } from "@ant-design/icons";
import { Avatar, Card, Space } from "antd";
import { url } from "inspector";

const { Meta } = Card;

const PlaceCarousel = () => {
  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <CarouselArrow className={className} onClick={onClick}>
        <RightOutlined style={{ color: "#333", fontSize: 20 }} />
      </CarouselArrow>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <CarouselArrow className={className} onClick={onClick}>
        <LeftOutlined style={{ color: "#333", fontSize: 20 }} />
      </CarouselArrow>
    );
  };

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: undefined,
          prevArrow: undefined,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: undefined,
          prevArrow: undefined,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <Wrapper>
        <h2> Địa điểm tâm linh - Di tích lịch sử</h2>
        <CarouselWrapper {...settings}>
          <div>
            <CardItem style={{ backgroundImage: `url(${hotel})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>

          <div>
            <CardItem style={{ backgroundImage: `url(${ship})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>
          <div>
            <CardItem style={{ backgroundImage: `url(${tour})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>

          <div>
            <CardItem style={{ backgroundImage: `url(${image6})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>

          <div>
            <CardItem style={{ backgroundImage: `url(${hotel})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>
          <div>
            <CardItem style={{ backgroundImage: `url(${hotel})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>
        </CarouselWrapper>
      </Wrapper>

      <Wrapper>
        <h2> Địa điểm tham quan - nghỉ dưỡng</h2>
        <CarouselWrapper {...settings}>
          <div>
            <CardItem style={{ backgroundImage: `url(${hotel})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>

          <div>
            <CardItem style={{ backgroundImage: `url(${ship})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>
          <div>
            <CardItem style={{ backgroundImage: `url(${tour})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>

          <div>
            <CardItem style={{ backgroundImage: `url(${image6})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>

          <div>
            <CardItem style={{ backgroundImage: `url(${hotel})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>
          <div>
            <CardItem style={{ backgroundImage: `url(${hotel})` }}>
              <CardContent>
                <h3 style={{ color: "white" }}>Mộ cô Võ Thị Sáu</h3>
                <p>Một nơi không thể bỏ qua khi đến với Côn Đảo</p>
              </CardContent>
            </CardItem>
          </div>
        </CarouselWrapper>
      </Wrapper>
    </div>
  );
};

export default PlaceCarousel;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const CardItem = styled.div`
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
  transition: transform 1s;

  :hover {
    cursor: pointer;
  }
`;

const CardContent = styled.div`
  padding: 24px 24px 0px 24px;
  color: white;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.011642156862745057) 100%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const CarouselWrapper = styled(Slider)`
  /* > .slick-dots li button {
    width: 16px;
    height: 4px;
    /* border-radius: 100%; */
  /* background: #8b8b8b; */
  /* } */
  /* > .slick-dots li.slick-active button { */
  /* width: 24px; */
  /* height: 4px; */
  /* border-radius: 100%; */
  /* background: #1890ff; */
  /* } */
`;

const CarouselArrow = styled.div`
  background: white;
  z-index: 99;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 1px 1px 30px -1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 1px 1px 30px -1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 1px 1px 30px -1px rgba(0, 0, 0, 0.3);

  :hover {
    background: white;
    opacity: 0.7;
  }
`;
