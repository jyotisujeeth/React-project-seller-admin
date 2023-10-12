import React, { useState } from "react";

import AddProduct from "../components/Admin/AddProduct";
import Admin from "./components/AdminUserslist";

function App() {
  const [ProductList, setProductList] = useState([]);

  const addUserHandler = (PProduct, PPrice) => {
    setProductList((prevProductList) => {
      return [
        ...prevProductList,
        { Product: PProduct, price: PPrice, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddProduct onAddUser={addProductHandler} />
      <ProductList Product={[]} />
    </div>
  );
}

export default App;
