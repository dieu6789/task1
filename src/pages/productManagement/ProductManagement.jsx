import React, { useState } from "react";
import "./ProductManagement.css";
import { Button, Form, Input, Table } from "antd";
import all_product from "../../components/assets/all_product";
import AddProduct from "../../components/addProduct/AddProduct";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ProductManagement = () => {
  const dataSource = all_product;
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
      <Button>Add new product</Button>
      <AddProduct />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination
        rowSelection={{
          type: "checkbox",
        }}
      />
    </div>
  );
};

export default ProductManagement;
