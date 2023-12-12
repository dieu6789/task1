import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/ProductSlice";
import { useEffect } from "react";
import { getProductSelector } from "../redux/Selector";

const useProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(getProductSelector);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getProduct());
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
    return () => {};
  }, [dispatch]);

  return productList;
};

export default useProductList;
