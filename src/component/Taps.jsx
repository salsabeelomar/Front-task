import React, { useContext } from "react";
import { Tabs } from "antd";
import { SelectedItems } from "../Context/SelectedItemsContext";
import styled from "styled-components";

const TRR = styled(Tabs)`
  .ant-tabs .ant-tabs-tab:hover {
    color: red !important;
  }
  .ant-tabs .ant-tabs-tab:active {
    color: #335c87 !important;
  }
  .ant-tabs-tab ant-tabs-tab-active {
    color: red !important;
    border-radius: 24px;
    background-color: red;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab {
    color: #335c87 !important;
  }
`;
const Tap = () => {
  const { selected } = useContext(SelectedItems);
  return (
    <TRR
      defaultActiveKey="1"
      tabPosition="left"
      style={{
        height: 220,
      }}
      items={selected.map((ele, index) => {
        return {
          label: `${ele}`,
          key: index,
          //   children: <ForthStep />,
        };
      })}
    />
  );
};
export default Tap;
