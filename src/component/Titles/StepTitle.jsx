import { Col, Typography } from "antd";
import React from "react";
const StepTitle = ({ title }) => {
  return (
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
  );
};
export default StepTitle;
