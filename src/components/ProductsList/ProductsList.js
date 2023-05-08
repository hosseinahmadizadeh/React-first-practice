import React from "react";
import Products from "../Products/Products";

const ProductsList = (props) => {
  console.log("ProductList");

  return props.products.map((item, index) => {
    return (
      <Products
        click={() => props.delete(index)}
        name={item.name}
        price={item.price}
        key={item.id}
        change={(event) => props.change(event, item.id)}
      />
    );
  });
};

export default ProductsList;
