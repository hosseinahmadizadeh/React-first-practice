import React, { Component } from "react";
import "./Products.css";

class Products extends Component {
  render() {
    console.log("Products");
    return (
      <div className="product-info">
        <p className="product-name" onClick={this.props.click}>
          Product Name: {this.props.name}
        </p>
        <p className="product-price">Product Price: {this.props.price}</p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Products;
