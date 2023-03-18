import { Button, Input, Select, Steps, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

const ContDiv = styled(Content)`
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 24px;
`;
const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  margin: 1rem auto;
  border-radius: 1.5rem;
`;
const StyledSteps = styled(Steps)`
.ant-steps-item .ant-steps-item-icon {
  float: right !important;
  margin-inline-end: 16px;
}
& .ant-steps-item-title {
color:#335C87 !important;
}

.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-tail::after {
  background-color: #D84E67;
}
.ant-steps-item-finish .ant-steps-item-icon >.ant-steps-icon {
  color: #fff;
}
  .ant-steps-item-wait .ant-steps-item-icon {
    color:  #D84E67;
  }
  .ant-steps .ant-steps-item-title{
    color: #335C87;
}

   .ant-steps-item-process .ant-steps-item-icon {
    background-color: #D84E67;
    border-color: #D84E67;
}
  .ant-steps-item-finish .ant-steps-item-icon {
    color: #FFFFFF;
    background-color: #D84E67;
    border-color: #D84E67;
  }
 
}
`;
const StyledSelect = styled(Select)`
  .ant-select-selection-item {
    display: none;
  }
`;
const StyledButton = styled(Button)`
  background-color: #ffffff;
  border: 0.4px #c7c7c7 solid;
  border-radius: 50px;
  color: #335c87;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
`;
const OperationBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(51, 92, 135, 0.9);
  border-radius: 50%;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(51, 92, 135, 0.9);
`;
const { Paragraph, Text } = Typography;

const CusInput = styled(Input)`
  color: rgba(117, 122, 134, 1);
  width: 80px;
  height: 35px;
  text-align: center;
  border-radius: 50px;
  background-color: #eef1f5;
`;
const ThPa = styled(Paragraph)`
  color: rgba(51, 92, 135, 0.9);
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  margin-right: 1rem;
  display: block;
`;
const ThText = styled(Text)`
  color: rgba(51, 92, 135, 0.9);
  text-align: right;
  font-size: 12px;
  font-weight: 700;
`;
const GrayText = styled(Text)`
  color: #9f9f9f;
  margin-top: 0.2rem;
  display: block;
`;
export {
  StyledSteps,
  StyledButton,
  StyledSelect,
  ContDiv,
  OperationBtn,
  ThPa,
  ThText,
  CusInput,
  GrayText,
  MapContainer,
};
