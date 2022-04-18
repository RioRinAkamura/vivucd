import { Card, Divider, List, Row, Table } from "antd";
import React from "react";
import styled from "styled-components";
import boat from "../../../assets/images/boat.jpg";
import Button from "../../Button";

export const BoatTicket = () => {
  const data = [
    {
      title: "Giá vé tàu cao tốc Vũng Tàu – Côn Đảo",
      content: [
        {
          title: "Giá vé từ thứ 2 đến thứ 5",
          vip: "VIP: 1,200,000 VNĐ/lượt",
          eco: "ECO: 790,000 VNĐ/lượt",
          nct_child: "NCT/Trẻ em: 630,000 VNĐ/lượt",
          nkt: "Người khuyết tật: 550,000 VNĐ/lượt",
        },
        {
          title: "Giá vé từ thứ 6 đến Chủ Nhật, Lễ, Tết",
          vip: "VIP: 1.200.000 VNĐ/lượt",
          eco: "ECO: 950.000 VNĐ/lượt",
          nct_child: "NCT/Trẻ em: 760,000 VNĐ/lượt",
          nkt: "Người khuyết tật: 665,000 VNĐ/lượt",
        },
      ],
    },
    {
      title: "Giá vé tàu cao tốc Trần Đề – Côn Đảo",
      content: [
        {
          title: "Giá vé từ thứ 2 đến thứ 5",
          vip: "VIP: 590,000 VNĐ/lượt",
          eco: "ECO: 450,000 VNĐ/lượt",
          nct_child: "NCT/Trẻ em: 360,000 VNĐ/lượt",
          nkt: "Người khuyết tật: 337,500 VNĐ/lượt",
        },
        {
          title: "Giá vé từ thứ 6 đến Chủ Nhật, Lễ, Tết",
          vip: "VIP: 590,000 VNĐ/lượt",
          eco: "ECO: 450,000 VNĐ/lượt",
          nct_child: "NCT/Trẻ em: 360,000 VNĐ/lượt",
          nkt: "Người khuyết tật: 337,500 VNĐ/lượt",
        },
      ],
    },
    {
      title: "Giá vé tàu cao tốc Cần Thơ – Côn Đảo",
      content: [
        {
          title: "Giá vé từ thứ 2 đến thứ 5",
          vip: "VIP: 1.100.000 VNĐ/lượt",
          eco: "ECO: 750.000 VNĐ/lượt",
          nct_child: "Nguyên thủ: 1.500.000 VNĐ/lượt",
          nkt: "...",
        },
        {
          title: "Giá vé từ thứ 6 đến Chủ Nhật, Lễ, Tết",
          vip: "VIP: 1.200.000 VNĐ/lượt",
          eco: "ECO: 850.000 VNĐ/lượt",
          nct_child: "Nguyên thủ: 1.500.000 VNĐ/lượt",
          nkt: "...",
        },
      ],
    },
  ];

  const dataSource = [
    {
      key: "1",
      from: "Vũng Tàu",
      to: "Côn Đảo",
      departure: "8:00",
      arrival: "11:50",
    },
    {
      key: "2",
      from: "Trần Đề",
      to: "Côn Đảo",
      departure: "9:00",
      arrival: "10:45",
    },
    {
      key: "3",
      from: "Côn Đảo",
      to: "Vũng Tàu",
      departure: "13:30",
      arrival: "17:20",
    },
    {
      key: "4",
      from: "Côn Đảo",
      to: "Trần Đề",
      departure: "12:00",
      arrival: "13:45",
    },
  ];

  const columns = [
    {
      title: "Nơi đi",
      dataIndex: "from",
      key: "from",
      width: "30%",
    },
    {
      title: "Nơi đến",
      dataIndex: "to",
      key: "to",
      width: "30%",
    },

    {
      title: "Giờ khởi hành",
      dataIndex: "departure",
      key: "departure",
    },

    {
      title: "Giờ cập bến",
      dataIndex: "arrival",
      key: "arrival",
    },
  ];

  return (
    <div className="container-fluid" style={{ marginTop: 140 }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <HotlineWrapper>
          <h3>LIÊN HỆ HOTLINE 0983 400 222 ĐỂ ĐẶT VÉ VÀ NHẬN TƯ VẤN NGAY</h3>
          <Button>LIÊN HỆ NGAY</Button>
        </HotlineWrapper>
      </Row>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <h3 style={{ color: "red" }}>{item.content[0].title}</h3>
              <p className="large">{item.content[0].vip}</p>
              <p>{item.content[0].eco}</p>
              <p>{item.content[0].nct_child}</p>
              <p>{item.content[0].nkt}</p>
              <Divider />
              <h3 style={{ color: "red" }}>{item.content[1].title}</h3>
              <p className="large">{item.content[1].vip}</p>
              <p>{item.content[1].eco}</p>
              <p>{item.content[1].nct_child}</p>
              <p>{item.content[1].nkt}</p>
            </Card>
          </List.Item>
        )}
      />
      <h1>LỊCH CHẠY TÀU CÔN ĐẢO EXPRESS CÁC TUYẾN</h1>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

const HotlineWrapper = styled.div`
  background-image: url(${boat});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
`;
