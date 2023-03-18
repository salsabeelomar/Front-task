import { Button } from "antd";
import React, { useContext } from "react";
import { currentItems } from "../../../Context/Current";

const NextBtn = ({ cb }) => {
  const { current, setCurrent, percent } = useContext(currentItems);
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
      onClick={() => {
        cb();
        if (percent >= 100) {
          setCurrent(current + 1);
        }
      }}
    >
      التالي
    </Button>
  );
};
export default NextBtn;
