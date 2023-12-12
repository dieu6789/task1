import { Table } from "antd";
import PropTypes from "prop-types";

function AllProductDisplay({ dataSource }) {
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
  ];
  return (
    <div>
      {" "}
      <Table columns={columns} dataSource={dataSource}></Table>
    </div>
  );
}

AllProductDisplay.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default AllProductDisplay;
