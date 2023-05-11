import React, { Component } from "react";
import Products from "../Products/Products";

class ProductsList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ProductsList shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ProductsList getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("ProductsList componentDidUpdate");
  }
  render() {
    console.log("ProductList");

    return this.props.products.map((item, index) => {
      return (
        <Products
          click={() => this.props.delete(index)}
          name={item.name}
          price={item.price}
          key={item.id}
          change={(event) => this.props.change(event, item.id)}
        />
      );
    });
  }
}

export default ProductsList;
