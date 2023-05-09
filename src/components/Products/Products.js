import React, { Component } from "react";
import "./Products.css";
import "../../HOCs/Container";
// import Container from "../../HOCs/Container";

class Products extends Component {
  render() {
    console.log("Products");
    return (
      <React.Fragment>
        <p key="1" className="product-name" onClick={this.props.click}>
          Product Name: {this.props.name}
        </p>
        <p key="2" className="product-price">
          Product Price: {this.props.price}
        </p>
        <input
          key="3"
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default Products;
