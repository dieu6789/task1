import React from "react";
import "./NewCollections.css";
import Products from "../products/Products";
import useProductList from "../../hooks/useProductList";

const Newcollections = () => {
  const prodductList = useProductList();
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {prodductList.slice(0, 8).map((product, i) => {
          return (
            <Products
              key={i}
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Newcollections;
