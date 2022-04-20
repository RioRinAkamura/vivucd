import { PhoneOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Pagination, Rate, Row, Select } from "antd";
import React from "react";
import styled from "styled-components";

const { Meta } = Card;
const { Option } = Select;

const BookHotel = () => {
  return (
    <div className="container-fluid">
      <Row>
        <TitleWrapper>
          <h1>BOOK HOTEL</h1>
          <Select style={{ width: 120 }} placeholder="Sắp xếp">
            <Option value="increase">Giá tăng </Option>
            <Option value="decrease">Giá Giảm </Option>
          </Select>
        </TitleWrapper>
      </Row>

      <Row gutter={[16, 16]} style={{ marginBottom: 64 }}>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
        <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/306608556.jpg?k=f7605d74d7c89572302812173a25f5100d004bfd28198226be6065dfa7e961e7&o=&hp=1"
              />
            }
            actions={[<PhoneOutlined key="call" />]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Hotel Example"
              description="Địa chỉ: 123 Nguyễn An Ninh, khu 8(gần CA huyện)"
            />
            <RateWrapper>
              142 đánh giá
              <Rate allowHalf defaultValue={4.5} style={{ fontSize: 16 }} />
            </RateWrapper>
            Giá: 300k - 500k/ngày
          </Card>
        </Col>
      </Row>
      <Row style={{ justifyContent: "flex-end" }}>
        <Pagination
          total={120}
          showTotal={(total) => `Total ${total} items`}
          defaultPageSize={20}
          defaultCurrent={1}
          style={{ marginBottom: 140 }}
        />
      </Row>
    </div>
  );
};

export default BookHotel;

const TitleWrapper = styled.div`
  margin-top: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const RateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
`;
