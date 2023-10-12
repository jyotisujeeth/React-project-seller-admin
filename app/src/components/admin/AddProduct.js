import React, { useState }from "react";
import Button from '../Button';
import classes from './AddProduct.module.css';
import Card from "../UI/Card";

import ErrorModal from "../UI/errorModal";

const AddProduct = (props) => {
  const [enteredProduct, setEnteredProduct] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [error, setError] = useState();

  const addProductHandler = (event) => {
    event.preventDefault();
    if (enteredProduct.trim().length === 0 || enteredPrice.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Product(non-empty value).",
      });
      return;
    }
    if (+enteredPrice < 0) {
      //+force convesatuion of string to number
      setError({
        title: "Invalid Price",
        message: "Please enter a  price(>0).",
      });

      return;
    }
    // console.log(enteredAge , enteredUsername);
    props.onAddProduct(enteredPrice, enteredProduct);
    setEnteredProduct("");
    setEnteredPrice("");
  };

  const ProductChangeHandler = (event) => {
    setEnteredProducte(event.target.value);
  };

  const PriceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    // handle error
  };
  return (
    <div>
      <div className={classes.backdrop} />
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCofirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addProductHandler}>
          <label htmlFor="Product"> Product</label>
          <input
            id="Product"
            type=" text"
            value={enteredProducte}
            onChange={ProductChangeHandler}
          ></input>
          <label htmlFor="price">Price</label>
          <input
            id="Price"
            type="number"
            value={enteredPrice}
            onChange={PriceChangeHandler}
          ></input>
          <Button type="submit">Product</Button>
        </form>
      </Card>
      {/* </ErrorModal> */}
    </div>
  );
};

export default AddProduct;