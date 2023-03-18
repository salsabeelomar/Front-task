import React, { useContext } from "react";
import { Col, Row, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { StyledSteps, StyledButton } from "./StyledComponent";
import FirstStep from "./StepsContent/Steps/FirstStep";
import SecondStep from "./StepsContent/Steps/SecondStep";
import { Items } from "../Context/itemsContext";
import { Content } from "antd/es/layout/layout";
import { currentItems } from "../Context/Current";
import FifthStep from "./StepsContent/Steps/FifthStep";

const Step = () => {
  const { current, percent } = useContext(currentItems);
  const { items } = useContext(Items);

  const steps = [
    {
      title: " إختيارالتصنيفات ",
      content: <FirstStep />,
    },

    {
      title: "معلومات الوحدات ",
      content: <SecondStep />,
    },
    ...items,
    {
      title: "نتائج الإضافة",
      content: <FifthStep />,
    },
  ];
  const step = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div
      style={{
        minHeight: 280,
        paddingRight: "1rem",
        backgroundColor: "#fff",
      }}
    >
      <Row>
        <Col span={5} style={{ borderLeft: "1px solid #F5F5F5" }}>
          <StyledSteps
            percent={percent}
            current={current}
            items={step}
            direction="vertical"
            style={{ marginTop: "1rem" }}
          />
        </Col>
        <Col span={14}>
          <Content style={{ margin: "1rem", color: "#707070" }}>
            <Typography.Text style={{ color: "#707070" }}> الرئيسية </Typography.Text>
            <LeftOutlined />
            <Typography.Text style={{ color: "#335C87" }}> إضافة عقار جديد </Typography.Text>
          </Content>
          <div>{steps[current].content}</div>
        </Col>
        <Col span={4}>
          <StyledButton type="primary" style={{ marginTop: "1rem" }}>
            العودة إلى الرئيسية
            <LeftOutlined />
          </StyledButton>
        </Col>
      </Row>
    </div>
  );
};

export default Step;
