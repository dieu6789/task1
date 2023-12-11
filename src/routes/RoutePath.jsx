import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ShopCategory from "../pages/shopCategory/ShopCategory";
import men_banner from "../components/assets/banner_men.png";
import women_banner from "../components/assets/banner_women.png";
import Product from "../pages/product/Product";
import ProductManagement from "../pages/productManagement/ProductManagement";

function RoutePath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/men'sClothes"
          element={
            <ShopCategory banner={men_banner} category="Men's Clothes" />
          }
        />
        <Route
          path="/products/women'sClothes"
          element={
            <ShopCategory banner={women_banner} category="Women's Clothes" />
          }
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/products/management" element={<ProductManagement />} />
      </Routes>
    </div>
  );
}

export default RoutePath;
