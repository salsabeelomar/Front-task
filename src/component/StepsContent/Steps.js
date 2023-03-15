import FirstStep from "./Steps/FirstStep";
import ForthStep from "./Steps/ForthStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";

const steps = [
  {
    title: " إختيارالتصنيفات ",
    content: FirstStep,
  },
  {
    title: "معلومات الوحدات ",
    content: SecondStep,
  },
  {
    title: "تصنيف 1 ستاندرد",
    content: ThirdStep,
  },
  {
    title: "تصنيف 2 ديلوكس",
    content: ForthStep,
  },
  {
    title: "نتائج الإضافة",
    content: FirstStep,
  },
];
export default steps;
