import React, { createContext, useState } from "react";

const SelectedItems = createContext({});

const SelectProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  return <SelectedItems.Provider value={{ selected, setSelected }}>{children}</SelectedItems.Provider>;
};
export { SelectProvider, SelectedItems };
