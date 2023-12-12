import { Button, Modal } from "antd";
import { useState } from "react";
import AddProductForm from "./AddProductForm";

function AddProductFormModal() {
  const [addModal, SetAddModal] = useState(false);
  const showModalAddProduct = () => {
    SetAddModal(true);
  };
  const closeModalAddProduct = () => {
    SetAddModal(false);
  };
  return (
    <div>
      <Button onClick={showModalAddProduct}>Add New Product</Button>
      <Modal
        open={addModal}
        footer={null}
        onCancel={closeModalAddProduct}
        title="Add Product Form"
        width={700}
      >
        <AddProductForm></AddProductForm>
      </Modal>
    </div>
  );
}

export default AddProductFormModal;
