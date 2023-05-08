import React from "react";
import "./Products.css";

const Products = (props) => {
  console.log("Products");

  return (
    <div className="product-info">
      <p className="product-name" onClick={props.click}>
        Product Name: {props.name}
      </p>
      <p className="product-price">Product Price: {props.price}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default Products;
