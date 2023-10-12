import React, { useState } from "react";

import AddProduct from "../components/Admin/AddProduct";
import  Admin from "../components/Admin/Userslist";

function App() {
  const [ProductList, setProductList] = useState([]);

  const addProductHandler = (PProduct, PPrice) => {
    setProductList((prevProductList) => {
      return [
        ...prevProductList,
        { Product: PProduct, price: PPrice, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddProduct onAddProduct={addProductHandler} />
      <ProductList Product={[]} />
    </div>
  );
}

export default App;
