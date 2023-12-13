import { Button, Form, Input, Col, Row, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../../redux/slices/ProductSlice";

function AddProductForm({ setAddModal }) {
  const dispatch = useDispatch();
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const onFinish = (value) => {
    dispatch(addNewProduct(value));
    setAddModal(false);
    console.log(value);
  };

  return (
    <div className="addProduct">
      <Form {...layout} onFinish={onFinish}>
        <Form.Item name="name" label="Name">
          <Input placeholder="Enter product name..." />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Select>
            <Select.Option value="Men's Clothes">Men's Clothes</Select.Option>
            <Select.Option value="Women's Clothes">
              Women's Clothes
            </Select.Option>
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
