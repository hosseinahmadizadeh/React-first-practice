import React, { Component } from "react";
import "./Products.css";

class Products extends Component {
  render() {
    console.log("Products");
    return [
      <p key="1" className="product-name" onClick={this.props.click}>
        , Product Name: {this.props.name}
      </p>,
      <p key="2" className="product-price">
        Product Price: {this.props.price}
      </p>,
      <input
        key="3"
        type="text"
        onChange={this.props.change}
        value={this.props.name}
      />,
    ];
  }
}

export default Products;
