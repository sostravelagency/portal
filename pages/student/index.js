import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    MenuUnfoldOutlined,
  } from "@ant-design/icons";
  import { Button, Menu } from "antd";
  import { createContext, useEffect, useState } from "react";
  import Link from "next/link";
  import Header from "@/component/Header";
import get_class_homeroom from "@/app/api/teacher/get_class_homeroom";
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      <Link href="/student/profile">Profile</Link>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <Link href="/student/contact">Contact</Link>,
      "2",
      <ContainerOutlined />
    ),
    getItem(
      <Link href="/student/resgiter/term">Resgiter term</Link>,
      "4",
      <ContainerOutlined />
    ),
    ,
    getItem(
      <Link href="/student/feedback">Feed back</Link>,
      "5",
      <ContainerOutlined />
    ),
    getItem(
        <Link href="/student/application/absense">Application absense</Link>,
        "5",
        <ContainerOutlined />
      ),
  //   getItem(
  //     <Link href="/admin/teachers">Manage teacher</Link>,
  //     "5",
  //     <ContainerOutlined />
  //   ),
  //   getItem("Navigation One", "sub1", <ContainerOutlined />, [
  //     getItem("Option 5", "5"),
  //     getItem("Option 6", "6"),
  //     getItem("Option 7", "7"),
  //     getItem("Option 8", "8"),
  //   ]),
  //   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //     getItem("Option 9", "9"),
  //     getItem("Option 10", "10"),
  //     getItem("Submenu", "sub3", null, [
  //       getItem("Option 11", "11"),
  //       getItem("Option 12", "12"),
  //     ]),
  //   ]),
  ];
  const Student = ({ children }) => {
    const [selected, setSelected] = useState(1);
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    return (
     <>
      <Header />
       <div style={{ width: "100%", display: "flex", height: "100vh" }}>
              
        <div
          style={{
            maxWidth: 256,
          }}
        >
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            onClick={(e) => setSelected(e.key)}
            selectedKeys={selected}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
          />
        </div>
        {children || ""}
      </div>
     </>
    );
  };
  export default Student;
 