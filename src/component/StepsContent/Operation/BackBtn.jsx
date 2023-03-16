import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { StyledButton } from "../../StyledComponent";

const BackBtn = ({ current, setCurrent }) => {
  console.log(current, setCurrent);
  return (
    current > 0 && (
      <StyledButton type="primary" style={{ margin: "0 8px" }} onClick={() => setCurrent(current - 1)}>
        <RightOutlined />
        الخطوة السابقة
      </StyledButton>
    )
  );
};
export default BackBtn;
