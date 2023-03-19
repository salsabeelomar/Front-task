import React, { useContext } from "react";
import { Tabs } from "antd";
import { ThPa } from "./StyledComponent";
import { Items } from "../Context/itemsContext";

// const Btn = styled(Button)`
//   color: #335c87;
//   border: 1.2px #d84e67 solid;
//   background-color: #ffff;
//   font-size: 14px;
//   display: block;
//   margin: 0.5rem;
//   width: 120px;
// `;
const Tap = () => {
  const { items } = useContext(Items);

  return (
    <>
      <ThPa>التصنيفات </ThPa>
      <Tabs
        defaultActiveKey="1"
        tabPosition="right"
        style={{ height: 220 }}
        items={items.map((ele, index) => {
          return {
            label: `${ele.name}`,
            key: index,
            children: `Content of tab ${index}`,
          };
        })}
      />
    </>
  );
};
export default Tap;
