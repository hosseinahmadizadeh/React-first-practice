import React from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import Main from "./components/Main/Main";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor");
  }

  state = {
    products: [
      { id: 1, name: "Tea & Cake", price: "79" },
      { id: 2, name: "Coffee & Cake", price: "99" },
      { id: 3, name: "Milk & Cake", price: "88" },
    ],
    showProducts: false,
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate");
  }

  toggleProductsHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
  };

  deleteProductHandler = (productIndex) => {
    const products = [...this.state.products];
    products.splice(productIndex, 1);
    this.setState({ products: products });
  };

  changeNameHandler = (event, id) => {
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id;
    });

    const product = {
      ...this.state.products[productIndex],
    };

    product.name = event.target.value;

    const products = [...this.state.products];
    products[productIndex] = product;

    this.setState({ products: products });
  };

  render() {
    console.log("App.js render");

    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          <ProductsList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.changeNameHandler}
          />
        </div>
      );
    }

    return (
      <div id="main" className="container">
        <Main
          products={this.state.products}
          click={this.toggleProductsHandler}
        />
        {products}
      </div>
    );
  }
}

export default App;
