import React, { Component } from "react";
import "./Products.css";
import Wrapper from "../../hoc/Wrapper";
import AuthContext from "../../context/auth-context";

class Products extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    console.log("Products");
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {(context) =>
            context.auth ? <p>Logged in!</p> : <p>Please Login!</p>
          }
        </AuthContext.Consumer>
        <p key="1" className="product-name" onClick={this.props.click}>
          Product Name: {this.props.name}
        </p>
        <p key="2" className="product-price">
          Product Price: {this.props.price}
        </p>
        <input
          ref={this.inputRef}
          key="3"
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default Wrapper(Products, "product-info");
