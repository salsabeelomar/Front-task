import React from "react";
import Header2 from "./component/Header";
import { Layout } from "antd";
import "./style.css";
import Step from "./component/Steps";
import { ItemProvider, CurrentProvider } from "./Context/";
import CosMenu from "./component/Menu";

const App = () => {
  return (
    <Layout>
      <CosMenu />
      <Layout className="site-layout" style={{ backgroundColor: "white" }}>
        <Header2 />
        <ItemProvider>
          <CurrentProvider>
            <Step />
          </CurrentProvider>
        </ItemProvider>
      </Layout>
    </Layout>
  );
};

export default App;
