import { Typography, Select, Badge } from "antd";
import React, { useContext } from "react";
import { ContDiv, GrayText, StyledSelect, ThPa } from "../../StyledComponent";
import { SelectedItems } from "../../../Context/SelectedItemsContext";
import { Items } from "../../../Context/itemsContext";
import Info from "../../SubSteps";
import NextBtn from "../Operation/NextBtn";
import { CloseOutlined } from "@ant-design/icons";
import { currentItems } from "../../../Context/Current";

const OPTIONS = ["أجزاكتيف", "بريمير", "ستاندرد", "ديلوكس"];

const FirstStep = () => {
  const { selected, setSelected } = useContext(SelectedItems);
  const { setPercent } = useContext(currentItems);
  const { setItems } = useContext(Items);

  const filteredOptions = OPTIONS.filter((o) => !selected.includes(o));
  const handleChange = (value) => {
    setSelected(value);
    setItems(value);
    setItems((prev) =>
      prev.map((ele, index) => {
        return {
          title: `تصنيف ${index + 1} ${ele}  `,
          content: <Info />,
          name: ele,
          info: {},
        };
      })
    );
  };

  return (
    <ContDiv>
      <Typography.Title
        style={{
          textAlign: "right",
          color: "#335C87",
          fontWeight: 700,
          fontSize: "24px",
          borderBottom: ".1rem #EEF1F5 solid",
          paddingBottom: "1rem",
        }}
      >
        إختر التصنيفات المتوفرة في عقارك
      </Typography.Title>
      <GrayText>إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات خاصة بك</GrayText>
      <StyledSelect
        mode="multiple"
        placeholder="ستاندرد"
        onChange={handleChange}
        value={selected}
        style={{
          width: "40%",
          marginTop: "1rem",
          marginBottom: "1rem",
          border: "1px solid rgba(238, 241, 245, 1)",
          borderRadius: "50px",
          backgroundColor: "rgba(238, 241, 245, 1)",
        }}
      >
        {filteredOptions.map((item) => (
          <Select.Option key={item}> {item} </Select.Option>
        ))}
      </StyledSelect>
      <ThPa>التصنيفات المختارة</ThPa>
      <div style={{ display: "flex", justifyContent: "flex-start", gap: ".2rem" }}>
        {selected.map((ele, index) => (
          <Badge
            style={{
              backgroundColor: "rgba(216, 78, 103, 1)",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            count={
              <CloseOutlined
                style={{ color: " #EBF5FB", fontSize: "8px", width: "14px", height: "14px" }}
                onClick={() => {
                  {
                    setSelected(() =>
                      selected.filter((ele, index2) => {
                        if (index2 === index) return;
                        return ele;
                      })
                    );
                  }
                }}
              />
            }
            key={index}
            placement="end"
            size="small"
          >
            <Typography.Paragraph
              style={{
                boxShadow: " 2px 0px 8px 0px rgba(109, 109, 109, 0.16)",
                width: "90px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50px",
              }}
            >
              {ele}
            </Typography.Paragraph>
          </Badge>
        ))}
      </div>
      <NextBtn
        cb={() => {
          setPercent(100);
        }}
      />
    </ContDiv>
  );
};

export default FirstStep;
