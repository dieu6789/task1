import React, { useState } from "react";
import "./ProductManagement.css";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AddProductFormModal from "../../components/features/addProductForm/AddProductFormModal";
import useProductList from "../../hooks/useProductList";

const ProductManagement = () => {
  const productList = useProductList();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "product_name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "product_category",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "product_image",
    },
    {
      title: "New Price",
      dataIndex: "new_price",
      key: "product_new_price",
    },
    {
      title: "Old Price",
      dataIndex: "old_price",
      key: "product_old_price",
    },
    {
      title: "Edit/Delete",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{
                fontSize: 20,
                cursor: "pointer",
              }}
            />
            <DeleteOutlined
              style={{
                fontSize: 20,
                color: "red",
                marginLeft: 24,
                cursor: "pointer",
              }}
            />
          </>
        );
      },
    },
  ];
  return (
    <div>
      <AddProductFormModal />
      <Table dataSource={productList} columns={columns} pagination />
    </div>
  );
};

export default ProductManagement;
