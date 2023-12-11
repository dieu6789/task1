import React from "react";
import "./BreadCrumb.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const BreadCrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} /> {product.name}
    </div>
  );
};

export default BreadCrumb;
