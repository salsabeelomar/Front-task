import { Typography } from "antd";
import React, { useState } from "react";

import { Select } from "antd";
import styled from "styled-components";
import { Content } from "antd/es/layout/layout";

const StyledSelect = styled(Select)`
.ant-select-multiple .ant-select-selection-overflow {
  position: absolute !important;
    right: 0;
    top: 100%;
    z-index: 1; 
}

& .ant-select-selection-item {
  background: white !important;
  color: #434340 !important;
  font-size: 16px !important;
  radius: 50px;
}
.ant-select-multiple .ant-select-selection-item-remove svg  { 
  background-color: #D84E67 !important;
  border-radius: 50px;
  width: 15px;
  color: #ffff !important;
  height: 15px;
  font-size: 2px !important;
}
`;
const OPTIONS = ["أجزاكتيف", "بريمير", "ستاندرد", "ديلوكس"];
const FirstStep = () => {
  const [selected, setSelected] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selected.includes(o));
  const handleChange = (value) => {
    setSelected(value);
  };
  return (
    <div>
      <Typography.Title
        style={{
          color: "#335C87",
          fontWeight: 700,
          fontSize: "24px",
          borderBottom: ".1rem #EEF1F5 solid",
        }}
      >
        إختر التصنيفات المتوفرة في عقارك
      </Typography.Title>
      <Typography.Text style={{ color: "#9F9F9F" }}>
        إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات خاصة بك
      </Typography.Text>
      <StyledSelect
        mode="multiple"
        placeholder="ستاندرد"
        value={selected}
        onChange={handleChange}
        style={{ width: "100%" }}
  
      >
       {filteredOptions.map((item) => 
          <Select.Option key={item}> {item} </Select.Option>
        )}
        </StyledSelect>
         <Content>
        <Typography.Text>
          التصنيفات المختارة 
        </Typography.Text>

</Content>
    </div>
  );
};

export default FirstStep;
