import { RightOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { currentItems } from "../../../Context/Current";
import { StyledButton } from "../../StyledComponent";

const BackBtn = () => {
  const { current, setCurrent } = useContext(currentItems);
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
