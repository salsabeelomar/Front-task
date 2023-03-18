import React, { useContext } from "react";
import { currentItems } from "../../Context/Current";
import CosTitle from "../CosTitle";
import { ContDiv } from "../StyledComponent";
const Done = () => {
  const { current } = useContext(currentItems);
  // const title = ""
  return (
    <ContDiv>
      {console.log(current)}
      <CosTitle title="" />
    </ContDiv>
  );
};
export default Done;
