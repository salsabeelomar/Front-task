import React, { useContext } from "react";
import { SelectedItems } from "../Context/SelectedItemsContext";
import styled from "styled-components";
import { Button } from "antd";
import { ThPa } from "./StyledComponent";

const Btn = styled(Button)`
  color: #335c87;
  border: 1.2px #d84e67 solid;
  background-color: #ffff;
  font-size: 14px;
  display: block;
  margin: 0.5rem;
  width: 120px;
`;
const Tap = () => {
  const { selected } = useContext(SelectedItems);

  return (
    <>
      <ThPa>التصنيفات </ThPa>
      {selected.map((ele, index) => (
        <Btn key={index} type="primary">
          {ele}
        </Btn>
      ))}
    </>
  );
};
export default Tap;
