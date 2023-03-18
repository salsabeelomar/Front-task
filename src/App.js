import React, { useEffect } from "react";
import Header2 from "./component/Header";
import { Layout } from "antd";
import "./styles";
import Step from "./component/Steps";
import { SelectProvider } from "./Context/SelectedItemsContext";
import { ItemProvider } from "./Context/itemsContext";
import CosMenu from "./component/Menu";
import { CurrentProvider } from "./Context/Current";

const App = () => {
  useEffect(() => {
    document.body.dir = "rtl";
  }, []);

  return (
    <Layout>
      <CosMenu />
      <Layout className="site-layout" style={{ backgroundColor: "white" }}>
        <Header2 />
        <SelectProvider>
          <ItemProvider>
            <CurrentProvider>
              <Step />
            </CurrentProvider>
          </ItemProvider>
        </SelectProvider>
      </Layout>
    </Layout>
  );
};

export default App;
