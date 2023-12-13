import { Modal } from "antd";
import { useState } from "react";
import EditProductForm from "./EditProductForm";

function EditProductFormModal() {
  const [addModal, setAddModal] = useState(false);
  const showModalAddProduct = () => {
    setAddModal(true);
  };
  const closeModalEditProduct = () => {
    setAddModal(false);
  };
  return (
    <Modal
      open={addModal}
      footer={null}
      onCancel={closeModalEditProduct}
      title="Add Product Form"
      width={700}
    >
      <EditProductForm setAddModal={setAddModal}></EditProductForm>
    </Modal>
  );
}

export default EditProductFormModal;
