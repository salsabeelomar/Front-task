import React, { useContext } from "react";
import { currentItems } from "../../Context/Current";
import NextBtn from "../StepsContent/Operation/NextBtn";
import Calendar from "./Calender";
import Details from "./Details";
import Done from "./Done";
import Location from "./Location";

const SubStepper = () => {
  const { step, setStep, setPercent } = useContext(currentItems);
  return (
    <>
      {step === 1 && (
        <>
          <Location />
          <NextBtn
            cb={() => {
              setStep(2);
              setPercent(35);
            }}
          />
        </>
      )}
      {step === 2 && (
        <>
          <Calendar />
          <NextBtn
            cb={() => {
              setStep(3);
              setPercent(60);
            }}
          />
        </>
      )}
      {step === 3 && (
        <>
          <Details />
          <NextBtn
            cb={() => {
              setStep(4);
              setPercent(100);
            }}
          />
        </>
      )}
      {step === 4 && (
        <>
          <Done />
          <NextBtn
            cb={() => {
              setStep(1);
              setPercent(35);
            }}
          />
        </>
      )}
    </>
  );
};
export default SubStepper;
