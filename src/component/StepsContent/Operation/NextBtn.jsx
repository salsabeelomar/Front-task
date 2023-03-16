import { Button } from "antd";
import React from "react";

const NextBtn = ({ current, setCurrent }) => {
  return (
    <Button
      style={{
        backgroundColor: "#D84E67",
        width: "120px",
        height: "30px",
        borderRadius: "50px",
        color: "#fff",
        border: "none",
        boxShadow: "0px 10px 30px 0px rgba(216, 78, 103, 0.12)",
      }}
      onClick={() => setCurrent(current + 1)}
    >
      التالي
    </Button>
  );
};
export default NextBtn;
