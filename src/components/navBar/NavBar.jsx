import React from "react";
import { Divider, Image, Input, Menu, Typography } from "antd";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="nav-logo">
        <img style={{ width: "60px" }} src={logo} alt=""></img>
        <Typography.Title style={{ marginTop: "20px" }}>
          A$AP STORE
        </Typography.Title>
      </div>
      <Menu
        className="Menu"
        onClick={({ key }) => {
          if (key) {
            navigate(key);
          }
        }}
        mode="horizontal"
        items={[
          {
            label: "HOME",
            key: "/",
          },
          {
            label: "PRODUCTS",
            key: "/products",
            children: [
              {
                label: "Men's Clothes",
                key: "/products/men'sClothes",
                className: "btn1",
              },
              {
                label: "Women's Clothes",
                key: "/products/women'sClothes",
                className: "btn2",
              },
              {
                label: "Management",
                key: "/products/management",
                className: "btn3",
              },
            ],
          },
        ]}
      />
      <div className="searchBar">
        <Input.Search placeholder="Search here..."></Input.Search>
      </div>
    </div>
  );
};

export default NavBar;
