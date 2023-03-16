import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { TbHome, TbBadgeFilled } from "react-icons/tb";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { BsChatSquareDots, BsPuzzle } from "react-icons/bs";
import { RiRedPacketLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa";
import React, { useState } from "react";

const CosMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        height: "100vh",
      }}
    >
      <div style={{ height: "2rem", width: "2rem", backgroundColor: "#9F9F9F", margin: "0 auto" }} />
      <Menu
        style={{
          marginTop: "1rem",
        }}
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <TbHome color=" #9F9F9F" />,
            label: " Home",
          },
          {
            key: "2",
            icon: <HiOutlineCalendarDays color=" #9F9F9F" />,
            label: "Calendar",
          },
          {
            key: "3",
            icon: <BsChatSquareDots color=" #9F9F9F" />,
            label: "Chat",
          },
          {
            key: "4",
            icon: <RxAvatar color=" #9F9F9F" />,
            label: "Avatar",
          },
          {
            key: "5",
            icon: <BsPuzzle color=" #9F9F9F" />,
            label: "Puzzle",
          },
          {
            key: "6",
            icon: <TbBadgeFilled color=" #9F9F9F" />,
            label: "Badge",
          },
          {
            key: "7",
            icon: <RiRedPacketLine color=" #9F9F9F" />,
            label: "Packet",
          },
          {
            key: "8",
            icon: <BiMessageSquareDetail color=" #9F9F9F" />,
            label: "Message",
          },
          {
            key: "9",
            icon: <FaRegImage color=" #9F9F9F" />,
            label: "Image",
          },
        ]}
      />
    </Sider>
  );
};
export default CosMenu;
