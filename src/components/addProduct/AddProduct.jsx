import { Button, Form, Input, Upload } from "antd";
import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div className="addProduct">
      <Form>
        <Form.Item label="Name">
          <Input placeholder="Enter product name..." />
        </Form.Item>
        <Form.Item label="Category">
          <Input placeholder="Enter product name..." />
        </Form.Item>
        <Form.Item label="Image">
          <Upload.Dragger
            multiple
            listType="picture-card"
            action={"http://localhost:5173/products/management/"}
            beforeUpload={(file) => {
              console.log({ file });
              return false;
            }}
          >
            Drag Image Here OR <Button>Click Upload</Button>
          </Upload.Dragger>
        </Form.Item>
        <Form.Item label="New Price">
          <Input placeholder="Enter product name..." />
        </Form.Item>
        <Form.Item label="Old Price">
          <Input placeholder="Enter product name..." />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
