import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { ThPa } from "./StyledComponent";
import { Items } from "../Context/itemsContext";

const Btn = styled(Button)`
  color: #335c87;
  border: 1.2px #d84e67 solid;
  background-color: #ffff;
  font-size: 14px;
  display: block;
  text-align: right;
  margin: 0.5rem;
  width: 150px;
`;
const Tap = () => {
  const { items } = useContext(Items);
  return (
    <>
      <ThPa>التصنيفات </ThPa>
      {items.map((ele, index) => (
        <Btn key={index} type="primary">
          {ele.name}
        </Btn>
      ))}
    </>
  );
};
export default Tap;
