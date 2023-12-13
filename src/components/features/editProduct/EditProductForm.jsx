import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Col, Row, Select } from "antd";

function EditProductForm({ setAddModel }) {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };
  return (
    <Form {...layout}>
      <Form.Item name="name" label="Name">
        <Input placeholder="Enter product name..." />
      </Form.Item>
      <Form.Item name="category" label="Category">
        <Select>
          <Select.Option value="Men's Clothes">Men's Clothes</Select.Option>
          <Select.Option value="Women's Clothes">Women's Clothes</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="image" label="Image">
        <Input placeholder="Enter Image URL..." />
      </Form.Item>
      <Form.Item name="new_price" label="New Price">
        <Input placeholder="Enter product new price..." />
      </Form.Item>
      <Form.Item name="old_price" label="Old Price">
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
