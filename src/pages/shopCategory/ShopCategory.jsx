import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/shopContext";
import { Card, Select } from "antd";
import Products from "../../components/products/Products";
import useProductList from "../../hooks/useProductList";

const ShopCategory = (props) => {
  const productList = useProductList();
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner}></img>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 24 products
        </p>
        <div className="shopCategory-sort">
          <Select placeholder="Sort By" />
        </div>
      </div>
      <div className="shopCategory-products">
        {productList.map((product, i) => {
          if (props.category === product.category) {
            return (
              <Card
                style={{
                  width: "300px",
                }}
              >
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
