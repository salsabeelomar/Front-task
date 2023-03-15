import React from "react";
import { Col, Row, Typography } from "antd";
import { GlobalOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { StyledButton } from "./StyledComponent";

const Header = () => {
  return (
    <Row
      justify={"end"}
      style={{
        alignItems: "baseline",
        borderBottom: ".1rem solid rgba(245, 245, 245, 1)",
        backgroundColor: "#fff",
      }}
    >
      <Col span={5}>
        <StyledButton type="primary">الانتقال الى وضع الضيف</StyledButton>
      </Col>
      <Col span={2}>
        <Typography.Paragraph
          style={{
            color: "#335C87",
          }}
        >
          <GlobalOutlined style={{ margin: ".2rem" }} />
          عربي
        </Typography.Paragraph>
      </Col>
      <Col span={2}>
        <StyledButton type="primary">
          <MenuOutlined />
          <UserOutlined />
        </StyledButton>
      </Col>
    </Row>
  );
};
export default Header;
