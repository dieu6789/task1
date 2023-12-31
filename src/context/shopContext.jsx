import React, { createContext } from "react";
import all_product from "../components/assets/all_product";
import useProductList from "../hooks/useProductList";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  //const productList = useProductList();
  //const contextValue = { productList };
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
