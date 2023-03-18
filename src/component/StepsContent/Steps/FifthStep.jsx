import React, { useContext } from "react";
import CosTitle from "../../CosTitle";
import { ContDiv, ThPa } from "../../StyledComponent";
import { Items } from "../../../Context/itemsContext";
import { Row } from "antd";

const FifthStep = () => {
  const { items } = useContext(Items);
  console.log(items);
  return (
    <ContDiv>
      <CosTitle title="نتائج الإضافة " />
      <Row>
        {items.map((ele, index) => {
          return (
            <div key={index}>
              <ThPa> {ele.name}</ThPa>
            </div>
          );
        })}
      </Row>
    </ContDiv>
  );
};
export default FifthStep;
