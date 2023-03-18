import React, { useContext } from "react";
import CosTitle from "../../CosTitle";
import { ContDiv, GrayText, ThPa } from "../../StyledComponent";
import { Items } from "../../../Context/itemsContext";
import { Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { BiRuler } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange, MdOutlineKingBed } from "react-icons/md";

const FifthStep = () => {
  const { items } = useContext(Items);
  console.log(items);
  return (
    <ContDiv>
      <CosTitle title="نتائج الإضافة " />
      <Row>
        {items.map((ele, index) => {
          return (
            <Content key={index}>
              <ThPa> {ele.name}</ThPa>
              <div>
                <GrayText style={{ display: "block" }}>
                  <CiLocationOn />
                  {ele.info.Address}
                </GrayText>
                <GrayText style={{ display: "block" }}>
                  <BiRuler />
                  مساحة الوحدة
                  {ele.info.Details.space}
                </GrayText>
                <GrayText style={{ display: "block" }}>
                  <MdOutlineKingBed />
                  {ele.info.Details.rooms.length}غرف نوم
                </GrayText>
                <GrayText style={{ display: "block" }}>
                  <MdOutlineDateRange />
                  {ele.info.Date}
                </GrayText>
              </div>
            </Content>
          );
        })}
      </Row>
    </ContDiv>
  );
};
export default FifthStep;
