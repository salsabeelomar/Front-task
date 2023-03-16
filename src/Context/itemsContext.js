import React, { createContext, useState } from "react";

const Items = createContext({});

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return <Items.Provider value={{ items, setItems }}>{children}</Items.Provider>;
};
export { ItemProvider, Items };
