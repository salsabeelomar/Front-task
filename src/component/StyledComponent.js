import { Button, Steps } from "antd";
import styled from "styled-components";

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
.ant-steps-item .ant-steps-item-icon .ant-steps-item-icon-inner .ant-steps-icon {
  display: none;
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
const StyledButton = styled(Button)`
  background-color: #ffffff;
  border: 0.4px #c7c7c7 solid;
  border-radius: 50px;
  color: #335c87;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: #40a9ff !important;
  }
`;

export { StyledSteps, StyledButton };
