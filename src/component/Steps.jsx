import React, { useContext } from "react";
import { Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { StyledButton } from "./StyledComponent";
import Steps from "./StepsContent";
import { currentItems } from "../Context";

const Step = () => {
  const { setCurrent } = useContext(currentItems);
  return (
    <div
      style={{
        minHeight: 280,
        paddingRight: "1rem",
        backgroundColor: "#fff",
      }}
    >
      <Row>
        <Steps />
        <Col span={4}>
          <StyledButton type="primary" style={{ marginTop: "1rem" }} onClick={() => setCurrent(0)}>
            العودة إلى الرئيسية
            <LeftOutlined />
          </StyledButton>
        </Col>
      </Row>
    </div>
  );
};

export default Step;
