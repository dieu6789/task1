import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <div className="product">
      <div className="img-container">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
      </div>
      <p>{props.name}</p>
      <div className="product-prices">
        <div className="product-price-new">{props.new_price}</div>
        <div className="product-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Products;
