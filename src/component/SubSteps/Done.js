import React, { useContext } from "react";
import { currentItems } from "../../Context/Current";
import { Items } from "../../Context/itemsContext";
import CosTitle from "../CosTitle";
import { ContDiv, GrayText } from "../StyledComponent";
import { AiOutlineCheckCircle } from "react-icons/ai";
import NextBtn from "../StepsContent/Operation/NextBtn";
const Done = () => {
  const { current, setStep, setPercent } = useContext(currentItems);
  const { items } = useContext(Items);
  const title = `(تصنيف ${current - 1} من ${items.length}) ${items[current - 2].name} `;
  return (
    <ContDiv>
      <CosTitle title={title} />
      <div style={{ display: "flex", justifyContent: "flex-start", gap: ".2rem", margin: "1rem" }}>
        <AiOutlineCheckCircle color="#00A91B" style={{ width: "50px", height: "50px" }} />
        <GrayText>
          لقد قمت بإضافة تفاصيل التصنيف الأول بنجاح، بإمكانك الإستمرار ومتابعة إضافة تفاصيل التصنيف الثاني أو بإمكانك
          الخروج الأن والعودة لاحقاً لمتابعة إضافة عقارك عن طريق المسودة
        </GrayText>
      </div>
      <NextBtn
        cb={() => {
          setStep(1);
          setPercent(35);
        }}
      />
    </ContDiv>
  );
};
export default Done;
