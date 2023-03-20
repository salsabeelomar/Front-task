import { Col, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useContext } from "react";
import { currentItems } from "../../Context/Current";
import { Items } from "../../Context/itemsContext";
import { StyledSteps } from "../StyledComponent";
import { LeftOutlined } from "@ant-design/icons";
import { FinalStep, FirstStep, SecondStep } from "./AllSteps";

const Steps = () => {
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
      content: <FinalStep />,
    },
  ];
  const step = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
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
    </>
  );
};
export default Steps;
