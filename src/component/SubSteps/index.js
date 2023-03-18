import React, { useContext } from "react";
import { currentItems } from "../../Context/Current";
import Calendar from "./Calender";
import Details from "./Details";
import Done from "./Done";
import Location from "./Location";

const SubStepper = () => {
  const { step } = useContext(currentItems);
  return (
    <>
      {step === 1 && <Location />}
      {step === 2 && <Calendar />}
      {step === 3 && <Details />}
      {step === 4 && <Done />}
    </>
  );
};
export default SubStepper;
