import { Modal } from "antd";
import { useState } from "react";
import EditProductForm from "./EditProductForm";

function EditProductFormModal({
  openEditModal,
  setOpenEditModal,
  selectedProduct,
}) {
  return (
    <Modal
      open={openEditModal}
      footer={null}
      onCancel={() => {
        setOpenEditModal(false);
      }}
      title="Edit Product Form"
      width={700}
    >
      <EditProductForm
        setOpenEditModal={setOpenEditModal}
        selectedProduct={selectedProduct}
      ></EditProductForm>
    </Modal>
  );
}

export default EditProductFormModal;
