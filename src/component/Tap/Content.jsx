import { Col } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Counter from "../Counter";
import { CusInput, ThPa, ThText } from "../StyledComponent";

const TabContent = ({ setNumRoom, numRoom }) => {
  return (
    <Col>
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
  );
};
export default TabContent;
