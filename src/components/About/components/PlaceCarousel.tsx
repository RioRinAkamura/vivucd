import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import image6 from "../../../assets/images/advanced-option.jpg";
import airplane from "../../../assets/images/airplane.jpg";
import bike from "../../../assets/images/bike.jpg";
import hotel from "../../../assets/images/hotel.jpg";
import ship from "../../../assets/images/ship.jpg";
import tour from "../../../assets/images/tour.jpg";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Địa điểm nổi bật</h2>
      <CarouselWrapper {...settings}>
        <CardWrapper>
          <CardItem>
            <img src={airplane} alt="" height={200} />
          </CardItem>
        </CardWrapper>

        <CardWrapper>
          <CardItem>
            <img src={bike} alt="" height={200} />
          </CardItem>
        </CardWrapper>
        <CardWrapper>
          <CardItem>
            <img src={hotel} alt="" height={200} />
          </CardItem>
        </CardWrapper>

        <CardWrapper>
          <CardItem>
            <img src={tour} alt="" height={200} />
          </CardItem>
        </CardWrapper>

        <CardWrapper>
          <CardItem>
            <img src={image6} alt="" height={200} />
          </CardItem>
        </CardWrapper>
        <CardWrapper>
          <CardItem>
            <img src={ship} alt="" height={200} />
          </CardItem>
        </CardWrapper>
      </CarouselWrapper>
    </div>
  );
};

export default PlaceCarousel;

const CardWrapper = styled.div`
  height: 200px;
`;

const CardItem = styled.div`
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  background: red;

  :hover {
    cursor: pointer;
  }
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
