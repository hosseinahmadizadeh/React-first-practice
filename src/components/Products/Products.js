import React from "react";

const Products = (props) => {
  return (
    <div className="product-info">
      <p className="product-name">Product Name: {props.name}</p>
      <p className="product-price">Product Price: {props.price}</p>
      <hr></hr>
    </div>
  );
};

export default Products;
