import { Button, Modal } from "antd";
import { useState } from "react";
import AddProductForm from "./AddProductForm";

function AddProductFormModal() {
  const [addModal, setAddModal] = useState(false);
  const showModalAddProduct = () => {
    setAddModal(true);
  };
  const closeModalAddProduct = () => {
    setAddModal(false);
  };
  return (
    <div>
      <Button style={{ marginLeft: "10px" }} onClick={showModalAddProduct}>
        Add New Product
      </Button>
      <Modal
        open={addModal}
        footer={null}
        onCancel={closeModalAddProduct}
        title="Add Product Form"
        width={700}
      >
        <AddProductForm setAddModal={setAddModal}></AddProductForm>
      </Modal>
    </div>
  );
}

export default AddProductFormModal;
