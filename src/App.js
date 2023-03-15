import React, { useEffect, useState } from "react";
import Header2 from "./component/Header";
import {
  CalendarOutlined,
  HomeOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Step from "./component/Steps";

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    document.body.dir = "rtl";
  }, []);

  return (
    <Layout>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(159, 159, 159, 1)", width: "50px" }}
        >
          d
        </div>
        <Menu
          style={{
            paddingTop: "2rem",
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <CalendarOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header2 />

        <Step />
      </Layout>
    </Layout>
  );
};

export default App;
