import { Col, Row } from "antd";
import React from "react";
import BackBtn from "../StepsContent/Operation/BackBtn";
import StepTitle from "./StepTitle";

const CusTitle = ({ title }) => {
  return (
    <Row style={{ alignItems: "baseline", borderBottom: ".6px #EEF1F5 solid", paddingBottom: ".5rem" }}>
      <StepTitle title={title} />
      <Col span={6}>
        <BackBtn />
      </Col>
    </Row>
  );
};
export default CusTitle;
