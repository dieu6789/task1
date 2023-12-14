import React, { useState } from "react";
import "./ProductManagement.css";
import { Popconfirm, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AddProductFormModal from "../../components/features/addProductForm/AddProductFormModal";
import useProductList from "../../hooks/useProductList";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/slices/ProductSlice";
import EditProductFormModal from "../../components/features/editProduct/EditProductformModal";

const ProductManagement = () => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState([]);

  const productList = useProductList();

  const dispatch = useDispatch();

  const onDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
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
      render: (record) => {
        return <img src={record}></img>;
      },
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
              onClick={() => {
                setOpenEditModal(true);
                setSelectedProduct(record);
              }}
              style={{
                fontSize: 20,
                cursor: "pointer",
              }}
            />
            <Popconfirm
              cancelText="No"
              okText="Yes"
              title="Are you sure you want to delete this product ?"
              onConfirm={() => {
                onDeleteProduct(record.id);
              }}
            >
              <DeleteOutlined
                style={{
                  fontSize: 20,
                  color: "red",
                  marginLeft: 24,
                  cursor: "pointer",
                }}
              />
            </Popconfirm>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <AddProductFormModal />
      <EditProductFormModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        selectedProduct={selectedProduct}
      />
      <Table dataSource={productList} columns={columns} pagination />
    </div>
  );
};

export default ProductManagement;
