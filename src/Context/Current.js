import React, { createContext, useState } from "react";

const currentItems = createContext({});

const CurrentProvider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [percent, setPercent] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <currentItems.Provider value={{ current, setCurrent, percent, setPercent, step, setStep }}>
      {children}
    </currentItems.Provider>
  );
};
export { CurrentProvider, currentItems };
