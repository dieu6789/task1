import React from "react";
import AllProductDisplay from "../../components/features/addProductForm/AllProductDisplay";
import useProductList from "../../hooks/useProductList";

const AllProduct = () => {
  const productList = useProductList();
  console.log(productList);
  return (
    <div>
      <AllProductDisplay dataSource={productList}></AllProductDisplay>
    </div>
  );
};

export default AllProduct;
