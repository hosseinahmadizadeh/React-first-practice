import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <div className="product-info">
      <p className="product-name" onClick={props.click}>
        Product Name: {props.name}
      </p>
      <p className="product-price">Product Price: {props.price}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default Products;
