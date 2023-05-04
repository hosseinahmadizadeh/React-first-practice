import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <div className="product-info">
      <p className="product-name">Product Name: {props.name}</p>
      <p className="product-price">Product Price: {props.price}</p>
    </div>
  );
};

export default Products;
