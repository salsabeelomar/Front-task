import React, { useState } from "react";
import {  Col,  Row,  theme, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { StyledButton, StyledSteps } from "./StyledComponent";
import StepsButtons from "./StepsContent/StepsButtons";
import steps from "./StepsContent/Steps";

const Step = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle = {
    color: token.colorTextTertiary,
    backgroundColor: "#FFFFFF",
    borderRadius: token.borderRadiusLG,
    border: `.2px solid rgba(232, 232, 232, 1)`,
  };

  return (
    <div
      style={{
        minHeight: 280,
        paddingTop: "1rem",
        paddingRight: "1rem",
        backgroundColor: "#fff",
      }}
    >
      <Row>
        <Col span={5}>
          <StyledSteps current={current} items={items} direction="vertical" />
        </Col>
        <Col span={13}>
          <Typography.Paragraph>الرئيسية</Typography.Paragraph>
          <div style={contentStyle}>{steps[current].content()}</div>
          <StepsButtons
            setCurrent={setCurrent}
            current={current}
            steps={steps}
          />
        </Col>
        <Col span={4}>
          <StyledButton type="primary">
            العودة إلى الرئيسية
            <LeftOutlined />
          </StyledButton>
        </Col>
      </Row>
    </div>
  );
};

export default Step;
