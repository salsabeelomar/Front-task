import React from "react";
import { CusInput, OperationBtn } from "./StyledComponent";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const Counter = ({ value, addCb, minusCd }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "150px" }}>
      <OperationBtn onClick={addCb}>
        <PlusOutlined />
      </OperationBtn>
      <CusInput type="number" value={value} disabled />
      <OperationBtn onClick={minusCd}>
        <MinusOutlined />
      </OperationBtn>
    </div>
  );
};
export default Counter;
