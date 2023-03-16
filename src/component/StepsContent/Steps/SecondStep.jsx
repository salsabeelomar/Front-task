import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import { ContDiv, CusInput, GrayText, OperationBtn, ThPa, ThText } from "../../StyledComponent";
import Tap from "../../Taps";
import BackBtn from "../Operation/BackBtn";
import NextBtn from "../Operation/NextBtn";

const SecondStep = ({ current, setCurrent }) => {
  const [numRoom, setNumRoom] = useState([]);
  return (
    <ContDiv>
      <Row style={{ alignItems: "baseline", borderBottom: ".1rem #EEF1F5 solid", paddingBottom: "1rem" }}>
        <Col span={17} style={{ marginTop: "-.5rem" }}>
          <Typography.Title
            style={{
              color: "#335C87",
              fontWeight: 700,
              fontSize: "24px",
            }}
          >
            معلومات الوحدات
          </Typography.Title>
        </Col>
        <Col span={6}>
          <BackBtn current={current} setCurrent={setCurrent} />
        </Col>
      </Row>
      <Row>
        <GrayText>إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات خاصة بك</GrayText>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col span={8} style={{ height: "50vh" }}>
          <ThPa>التصنيفات </ThPa>
          <Tap />
          <NextBtn current={current} setCurrent={setCurrent} />
        </Col>
        <Col span={15} style={{ paddingRight: "1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: ".2rem",
              borderBottom: ".8px solid rgba(199, 199, 199, 0.36)",
            }}
          >
            <ThPa>عدد الوحدات </ThPa>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "45%" }}>
              <OperationBtn
                onClick={() => {
                  setNumRoom((prev) => [...prev, { key: numRoom.length, RoomNum: 501 }]);
                }}
              >
                <PlusOutlined />
              </OperationBtn>
              <CusInput type="number" value={numRoom.length} disabled />
              <OperationBtn
                onClick={() => {
                  if (numRoom.length >= 0)
                    setNumRoom(() =>
                      numRoom.filter((ele, index) => {
                        console.log(index === numRoom.length, index, numRoom.length);
                        if (index === numRoom.length - 1) return;
                        else return ele;
                      })
                    );
                }}
              >
                <MinusOutlined />
              </OperationBtn>
            </div>
          </div>
          <div>
            {numRoom.length > 0 && (
              <div>
                <ThPa>أرقام الوحدات </ThPa>
                <Content style={{ display: "flex", flexWrap: "wrap", gap: "1rem", width: "80%" }}>
                  {numRoom.map((ele, index) => (
                    <div key={ele.key}>
                      <ThText> وحدة رقم {index + 1} </ThText>
                      <CusInput type="number" value={ele.RoomNum} disabled />
                    </div>
                  ))}
                </Content>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </ContDiv>
  );
};
export default SecondStep;
