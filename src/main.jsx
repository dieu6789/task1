import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store.jsx";
import ShopContextProvider from "./context/shopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <Provider store={Store}>
          <App />
        </Provider>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
