import { Row } from "antd";
import React, { useContext } from "react";
import CusTitle from "../../Titles/CusTitle";
import { ContDiv, GrayText } from "../../StyledComponent";
import Tap from "../../Tap/Taps";
import NextBtn from "../Operation/NextBtn";
import { currentItems } from "../../../Context";
const SecondStep = () => {
  const { setPercent } = useContext(currentItems);
  return (
    <ContDiv>
      <CusTitle title="معلومات الوحدات" />
      <Row>
        <GrayText>إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات خاصة بك</GrayText>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Tap />

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
