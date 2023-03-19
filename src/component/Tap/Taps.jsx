import React, { useContext, useState } from "react";
import { Col, Tabs } from "antd";
import { ThPa } from "../StyledComponent";
import { Items } from "../../Context/itemsContext";
import TabContent from "./Content";
const Tap = () => {
  const { items } = useContext(Items);
  const [numRoom, setNumRoom] = useState([]);

  return (
    <Col span={24}>
      <ThPa>التصنيفات </ThPa>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        items={items.map((ele, index) => {
          return {
            label: `${ele.name}`,
            key: index,
            children: <TabContent numRoom={numRoom} setNumRoom={setNumRoom} />,
          };
        })}
      />
    </Col>
  );
};
export default Tap;
