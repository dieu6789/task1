import { Button, Form, Input, Upload, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function AddProductForm() {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };
  return (
    <div className="addProduct">
      <Form {...layout}>
        <Form.Item label="Name">
          <Input placeholder="Enter product name..." />
        </Form.Item>
        <Form.Item label="Category">
          <Input placeholder="Enter product category..." />
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
          <Input placeholder="Enter product new price..." />
        </Form.Item>
        <Form.Item label="Old Price">
          <Input placeholder="Enter product old price..." />
        </Form.Item>
        <Row gutter={24}>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              icon={<PlusOutlined />}
              type="primary"
              htmlType="submit"
              block
            >
              Add Product
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default AddProductForm;
