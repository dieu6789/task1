import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ProductDisplay from "../../components/productDisplay/ProductDisplay";
import useProductList from "../../hooks/useProductList";

const Product = () => {
  const productList = useProductList();
  //const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = productList.find((e) => e.id === productId);
  return (
    <div>
      <BreadCrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
