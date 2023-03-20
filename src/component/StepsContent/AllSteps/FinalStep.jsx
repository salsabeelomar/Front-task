import React, { useContext, useEffect } from "react";
import { ContDiv, GrayText, ThPa } from "../../StyledComponent";
import { Items } from "../../../Context/itemsContext";
import { Col, Row } from "antd";
import { BiRuler } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange, MdOutlineKingBed } from "react-icons/md";
import { currentItems } from "../../../Context/Current";
import StepTitle from "../../Titles/StepTitle";

const FinalStep = () => {
  const { items } = useContext(Items);
  const { setPercent } = useContext(currentItems);
  useEffect(() => {
    setPercent(100);
  }, []);
  return (
    <ContDiv>
      <Row style={{ borderBottom: ".6px #EEF1F5 solid", paddingBottom: ".5rem" }}>
        <StepTitle title="نتائج الإضافة " />
      </Row>
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
export default FinalStep;
