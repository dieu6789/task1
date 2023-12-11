import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ProductDisplay from "../../components/productDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
