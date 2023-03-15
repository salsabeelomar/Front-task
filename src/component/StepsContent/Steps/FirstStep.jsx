 import { Typography } from "antd";
import React  from "react";
 
 const FirstStep = () => {
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
        <Typography.Paragraph style={{ color: "#9F9F9F" }}>
          إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات
          خاصة بك
        </Typography.Paragraph>
      </div>
    );
  }

  export default FirstStep ;