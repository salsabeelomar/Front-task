import { Col, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import styled from "styled-components";
import CosTitle from "../CosTitle";
import { ContDiv, CusInput, ThPa } from "../StyledComponent";
import Counter from "../Counter";

const DivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
  font-weight: bold;
  font-size: 12px;
`;
const Details = () => {
  const [details, setDetails] = useState({ space: 0, rooms: [] });
  return (
    <ContDiv>
      <CosTitle title="التفاصيل" />
      <Row>
        <Col span={24}>
          <div style={{ borderBottom: ".6px solid rgba(199, 199, 199, 0.36)", paddingBottom: "1rem" }}>
            <ThPa>مساحة الوحدة</ThPa>
            <CusInput
              type="number"
              style={{ width: "180px" }}
              value={details.space}
              onChange={(event) => {
                if (event.target.value > 0)
                  setDetails((prev) => {
                    return { ...prev, space: event.target.value };
                  });
              }}
            />
          </div>
          <div>
            <ThPa> عدد غرف النوم</ThPa>
            <Counter
              value={details.rooms.length}
              addCb={() => {
                setDetails((prev) => {
                  return { ...prev, rooms: details.rooms.concat({ key: details.rooms.length, info: {} }) };
                });
              }}
              minusCb={() =>
                setDetails((prev) => {
                  return {
                    ...prev,
                    rooms: details.rooms.filter((ele, index) => {
                      if (index === details.rooms.length - 1) return;
                      else return ele;
                    }),
                  };
                })
              }
            />
            {details.rooms.map((ele, index) => {
              return (
                <Content key={index}>
                  <DivStyle style={{ width: "95%" }}>
                    <Typography.Text style={{ color: "#D84E67" }}> غرفة رقم {ele.key + 1}</Typography.Text>
                    <Typography.Text style={{ color: "#D84E67" }}> حذف الغرفة</Typography.Text>
                  </DivStyle>
                  <div style={{ width: "250px" }}>
                    <DivStyle>
                      <Typography.Text style={{ color: "#335c87" }}> عدد الأسرة المزدوجة</Typography.Text>
                      <CusInput type="number" />
                    </DivStyle>
                    <DivStyle>
                      <Typography.Text style={{ color: "#335c87" }}> عدد الأسرة الفردية</Typography.Text>
                      <CusInput type="number" />
                    </DivStyle>
                    <DivStyle>
                      <Typography.Text style={{ color: "#335c87" }}>عدد أسرة الأريكة</Typography.Text>
                      <CusInput type="number" />
                    </DivStyle>
                  </div>
                </Content>
              );
            })}
          </div>
        </Col>
      </Row>
    </ContDiv>
  );
};
export default Details;
