import { Col, Row, Typography } from "antd";
import React from "react";
import BackBtn from "../component/StepsContent/Operation/BackBtn";

const CosTitle = ({ title }) => {
  return (
    <Row style={{ alignItems: "baseline", borderBottom: ".6px #EEF1F5 solid", paddingBottom: ".5rem" }}>
      <Col span={17} style={{ marginTop: "-.5rem" }}>
        <Typography.Title
          style={{
            color: "#335C87",
            fontWeight: 700,
            fontSize: "24px",
          }}
        >
          {title}
        </Typography.Title>
      </Col>
      <Col span={6}>
        <BackBtn />
      </Col>
    </Row>
  );
};
export default CosTitle;
