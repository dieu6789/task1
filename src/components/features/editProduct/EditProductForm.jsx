import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Col, Row, Select } from "antd";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../redux/slices/ProductSlice";
import { useEffect } from "react";

function EditProductForm({ setOpenEditModal, selectedProduct }) {
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(selectedProduct);
  }, [form, selectedProduct]);

  const onFinish = (values) => {
    setOpenEditModal(false);
    values.id = selectedProduct.id;
    dispatch(updateProduct(values));
    form.resetFields();
  };
  return (
    <Form {...layout} form={form} onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name"
        initialValue={selectedProduct.name}
        rules={[
          {
            required: true,
            message: "Please enter product name",
          },
        ]}
      >
        <Input placeholder="Enter product name..." />
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        initialValue={selectedProduct.category}
        rules={[
          {
            required: true,
            message: "Please select product category",
          },
        ]}
      >
        <Select>
          <Select.Option value="Men's Clothes">Men's Clothes</Select.Option>
          <Select.Option value="Women's Clothes">Women's Clothes</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="image"
        label="Image"
        initialValue={selectedProduct.image}
        rules={[
          {
            required: true,
            type: "url",
            message: "Please enter product URL",
          },
        ]}
      >
        <Input placeholder="Enter Image URL..." />
      </Form.Item>
      <Form.Item
        name="new_price"
        label="New Price"
        initialValue={selectedProduct.new_price}
        rules={[
          {
            required: true,
            message: "Please enter product new price",
          },
        ]}
      >
        <Input placeholder="Enter product new price..." />
      </Form.Item>
      <Form.Item
        name="old_price"
        label="Old Price"
        initialValue={selectedProduct.old_price}
        rules={[
          {
            required: true,
            message: "Please enter product old price",
          },
        ]}
      >
        <Input placeholder="Enter product old price..." />
      </Form.Item>
      <Row gutter={24}>
        <Col span={24} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            icon={<EditOutlined />}
            type="primary"
            htmlType="submit"
            block
          >
            Update Product
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default EditProductForm;
