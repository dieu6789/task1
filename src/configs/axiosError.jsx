import { message } from "antd";
const handleError = (error) => {
    if (error.response) { 
        if (error.response.status === 400) {
            console.log("400 - Lỗi", error);
            message.error(error.response.data, 5)
        }
        if (error.response.status === 404) {
            console.log("404 - Not Found", error);
            return error
        }
        if (error.response.status === 500) {
            console.log("500 - Internal Server Error", error);
        }
    } else {
        console.log("Error:", error.message);
    }
};
export default handleError;
