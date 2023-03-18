import React, { useContext } from "react";
import CosTitle from "../../CosTitle";
import { ContDiv, GrayText, ThPa } from "../../StyledComponent";
import { Items } from "../../../Context/itemsContext";
import { Col, Row } from "antd";
import { BiRuler } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange, MdOutlineKingBed } from "react-icons/md";
import { currentItems } from "../../../Context/Current";

const FifthStep = () => {
  const { items } = useContext(Items);
  const { setPercent } = useContext(currentItems);

  return (
    <ContDiv>
      {setPercent(100)}
      <CosTitle title="نتائج الإضافة " />
      <Row>
        {items.map((ele, index) => {
          return (
            <Col key={index}>
              <ThPa> {ele.name}</ThPa>
              <div>
                <GrayText>
                  <CiLocationOn />
                  {ele.info.Address}
                </GrayText>
                <GrayText>
                  <BiRuler />
                  مساحة الوحدة
                  {ele.info.Details.space}م
                </GrayText>
                <GrayText>
                  <MdOutlineKingBed />
                  {ele.info.Details.rooms.length}غرف نوم
                </GrayText>
                <GrayText>
                  <MdOutlineDateRange />
                  {ele.info.Date}
                </GrayText>
              </div>
            </Col>
          );
        })}
      </Row>
    </ContDiv>
  );
};
export default FifthStep;
