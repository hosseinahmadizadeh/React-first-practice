import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <div className="product-info">
      <p className="product-name">Product Name: {props.name}</p>
      <p className="product-price" onClick={props.click}>
        Product Price: {props.price}
      </p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default Products;
