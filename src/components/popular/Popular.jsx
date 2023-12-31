import React from "react";
import "./Popular.css";
import Products from "../products/Products";
import useProductList from "../../hooks/useProductList";
import { Card } from "antd";

const Popular = () => {
  const productList = useProductList();
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-product">
        {productList.slice(0, 4).map((product, i) => {
          return (
            <Card style={{ width: "350px", border: "none" }}>
              <Products
                key={i}
                id={product.id}
                name={product.name}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
