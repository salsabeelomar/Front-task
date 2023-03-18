import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useContext, useState } from "react";
import CosTitle from "../../CosTitle";
import { ContDiv, CusInput, GrayText, ThPa, ThText } from "../../StyledComponent";
import Tap from "../../Taps";
import Counter from "../../Counter";
import NextBtn from "../Operation/NextBtn";
import { currentItems } from "../../../Context/Current";
const SecondStep = () => {
  const { setPercent } = useContext(currentItems);
  const [numRoom, setNumRoom] = useState([]);
  return (
    <ContDiv>
      <CosTitle title="معلومات الوحدات" />
      <Row>
        <GrayText>إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات خاصة بك</GrayText>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col span={8} style={{ height: "45vh", borderLeft: ".8px solid rgba(199, 199, 199, 0.36)" }}>
          <Tap />
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
            <Counter
              value={numRoom.length}
              addCb={() => {
                setNumRoom((prev) => [...prev, { key: numRoom.length, RoomNum: 501 }]);
              }}
              minusCd={() => {
                if (numRoom.length >= 0)
                  setNumRoom(() =>
                    numRoom.filter((ele, index) => {
                      if (index === numRoom.length - 1) return;
                      else return ele;
                    })
                  );
              }}
            />
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
        <NextBtn
          cb={() => {
            setPercent(0);
          }}
        />
      </Row>
    </ContDiv>
  );
};
export default SecondStep;
